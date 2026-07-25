import { useMemo, useState } from 'react'

const WEEKDAY_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

function toDateKey(year, month, day) {
  return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
}

function parseDateKey(value) {
  if (!value) {
    return null
  }

  const [year, month, day] = value.split('-').map(Number)
  if (!year || !month || !day) {
    return null
  }

  return new Date(year, month - 1, day)
}

function formatDisplayDate(value) {
  const date = parseDateKey(value)
  if (!date) {
    return ''
  }

  return date.toLocaleDateString(undefined, {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

function startOfToday() {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return today
}

function ContactDatePicker({ value, onChange }) {
  const today = useMemo(() => startOfToday(), [])
  const initialView = parseDateKey(value) || today
  const [viewYear, setViewYear] = useState(initialView.getFullYear())
  const [viewMonth, setViewMonth] = useState(initialView.getMonth())

  const monthLabel = new Date(viewYear, viewMonth, 1).toLocaleDateString(undefined, {
    month: 'long',
    year: 'numeric',
  })

  const calendarCells = useMemo(() => {
    const firstDay = new Date(viewYear, viewMonth, 1).getDay()
    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate()
    const cells = []

    for (let index = 0; index < firstDay; index += 1) {
      cells.push({ type: 'empty', key: `empty-${index}` })
    }

    for (let day = 1; day <= daysInMonth; day += 1) {
      const dateKey = toDateKey(viewYear, viewMonth, day)
      const date = new Date(viewYear, viewMonth, day)
      cells.push({
        type: 'day',
        key: dateKey,
        day,
        dateKey,
        isDisabled: date < today,
        isSelected: value === dateKey,
        isToday: dateKey === toDateKey(today.getFullYear(), today.getMonth(), today.getDate()),
      })
    }

    return cells
  }, [today, value, viewMonth, viewYear])

  const goToPreviousMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11)
      setViewYear((year) => year - 1)
      return
    }

    setViewMonth((month) => month - 1)
  }

  const goToNextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0)
      setViewYear((year) => year + 1)
      return
    }

    setViewMonth((month) => month + 1)
  }

  const handleSelectDay = (dateKey, isDisabled) => {
    if (isDisabled) {
      return
    }

    onChange(value === dateKey ? '' : dateKey)
  }

  return (
    <div className="iv-contact-v2-calendar">
      <p className="iv-contact-v2-calendar-label">Preferred conversation date (optional)</p>

      <div className="iv-contact-v2-calendar-header">
        <button type="button" className="iv-contact-v2-calendar-nav" onClick={goToPreviousMonth} aria-label="Previous month">
          ‹
        </button>
        <span className="iv-contact-v2-calendar-month">{monthLabel}</span>
        <button type="button" className="iv-contact-v2-calendar-nav" onClick={goToNextMonth} aria-label="Next month">
          ›
        </button>
      </div>

      <div className="iv-contact-v2-calendar-weekdays">
        {WEEKDAY_LABELS.map((label) => (
          <span key={label} className="iv-contact-v2-calendar-weekday">
            {label}
          </span>
        ))}
      </div>

      <div className="iv-contact-v2-calendar-grid">
        {calendarCells.map((cell) => {
          if (cell.type === 'empty') {
            return <span key={cell.key} className="iv-contact-v2-calendar-day iv-contact-v2-calendar-day--empty" />
          }

          return (
            <button
              key={cell.key}
              type="button"
              className={[
                'iv-contact-v2-calendar-day',
                cell.isSelected ? 'iv-contact-v2-calendar-day--selected' : '',
                cell.isToday ? 'iv-contact-v2-calendar-day--today' : '',
                cell.isDisabled ? 'iv-contact-v2-calendar-day--disabled' : '',
              ].filter(Boolean).join(' ')}
              onClick={() => handleSelectDay(cell.dateKey, cell.isDisabled)}
              disabled={cell.isDisabled}
              aria-label={`Select ${formatDisplayDate(cell.dateKey)}`}
              aria-pressed={cell.isSelected}
            >
              {cell.day}
            </button>
          )
        })}
      </div>

      <div className="iv-contact-v2-calendar-footer">
        {value ? (
          <>
            <span className="iv-contact-v2-calendar-selected">Selected: {formatDisplayDate(value)}</span>
            <button type="button" className="iv-contact-v2-calendar-clear" onClick={() => onChange('')}>
              Clear date
            </button>
          </>
        ) : (
          <span className="iv-contact-v2-calendar-hint">Choose a date if you already have one in mind.</span>
        )}
      </div>
    </div>
  )
}

export default ContactDatePicker
