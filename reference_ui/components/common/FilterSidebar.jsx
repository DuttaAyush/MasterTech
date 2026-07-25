function FilterSidebar({ filters, values, onChange }) {
  return (
    <aside className="iv-filters">
      <h3>Filters</h3>
      {Object.entries(filters).map(([name, options]) => (
        <label key={name} className="iv-filter-label">
          <span>{name}</span>
          <select value={values[name] || ''} onChange={(event) => onChange(name, event.target.value)}>
            <option value="">All</option>
            {options.map((option) => {
              const normalized = typeof option === 'object' && option !== null
                ? option
                : { label: option, value: option }

              return <option key={normalized.value} value={normalized.value}>{normalized.label}</option>
            })}
          </select>
        </label>
      ))}
      <label className="iv-filter-check"><input type="checkbox" checked={values.Featured || false} onChange={(event) => onChange('Featured', event.target.checked)} /> Featured</label>
    </aside>
  )
}

export default FilterSidebar

