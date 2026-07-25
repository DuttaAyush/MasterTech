import { memo, useMemo } from 'react'
import './EditorJsRenderer.css'
import { resolveHeadingAnchorId } from '../../utils/reportLayout'
import {
  formatStyledTextLineBreaks,
  getStyledTextClassName,
  getStyledTextInlineStyle,
  resolveStyledTextTag,
} from '../../utils/styledTextFormat'

function getAdvancedTableRows(cells, cols) {
  const rows = []
  for (let index = 0; index < cells.length; index += cols) {
    rows.push(cells.slice(index, index + cols))
  }
  return rows
}

function renderBulletListItems(items = [], settings = {}) {
  const bulletColor = settings.bulletColor || '#86bc25'
  const bulletSize = Number(settings.bulletSize) || 16
  const fontSize = Number(settings.fontSize) || 18
  const fontWeight = settings.bold ? 700 : 400
  const bulletOffset = Math.max(0, (fontSize * 1.5 - bulletSize) / 2)

  return items.map((item, index) => {
    const text = typeof item === 'string' ? item : item?.content || ''

    return (
      <li
        key={`bullet-${index}`}
        className="editor-bullet-list__item"
        style={{
          fontSize: `${fontSize}px`,
          fontWeight,
          lineHeight: 1.5,
        }}
      >
        <span
          className="editor-bullet-list__dot"
          style={{
            width: bulletSize,
            height: bulletSize,
            backgroundColor: bulletColor,
            marginTop: bulletOffset,
          }}
          aria-hidden="true"
        />
        <span className="editor-bullet-list__text" dangerouslySetInnerHTML={{ __html: text }} />
      </li>
    )
  })
}

function renderListItems(items = []) {
  return items.map((item, index) => {
    if (typeof item === 'string') {
      return <li key={`${item}-${index}`} dangerouslySetInnerHTML={{ __html: item }} />
    }

    return (
      <li key={`nested-${index}`}>
        <span dangerouslySetInnerHTML={{ __html: item.content || '' }} />
        {item.items?.length ? <ul>{renderListItems(item.items)}</ul> : null}
      </li>
    )
  })
}

function renderOrderedOutline(items = []) {
  return items.map((item, index) => (
    <li key={`${item.content || 'item'}-${index}`}>
      <span dangerouslySetInnerHTML={{ __html: item.content || '' }} />
      {item.items?.length ? <ol>{renderOrderedOutline(item.items)}</ol> : null}
    </li>
  ))
}

function EditorJsRenderer({ content, className = '', variant = 'default' }) {
  const blocks = useMemo(
    () => (Array.isArray(content?.blocks) ? content.blocks : []),
    [content?.blocks]
  )

  return (
    <div className={`editor-renderer editor-renderer--${variant} ${className}`.trim()}>
      {blocks.map((block, index) => {
        const key = `${block.id || block.type}-${index}`
        const data = block.data || {}

        switch (block.type) {
          case 'header': {
            const Tag = `h${Math.min(Math.max(data.level || 2, 1), 6)}`
            return <Tag id={data.anchorId || undefined} key={key} dangerouslySetInnerHTML={{ __html: data.text || '' }} />
          }
          case 'styledText': {
            const Tag = resolveStyledTextTag(data.variant)
            const headingId = data.variant === 'h1' ? resolveHeadingAnchorId(block, index) : undefined
            return (
              <Tag
                id={headingId}
                key={key}
                className={getStyledTextClassName(data.variant)}
                style={getStyledTextInlineStyle(data)}
                dangerouslySetInnerHTML={{
                  __html: formatStyledTextLineBreaks(data.text || ''),
                }}
              />
            )
          }
          case 'textLink': {
            const label = data.text || data.url || 'Link'
            const showUnderline = data.underline !== false
            const linkStyle = {
              fontSize: `${Number(data.fontSize) || 18}px`,
              fontWeight: Number(data.fontWeight) || 400,
              color: data.color || '#0b7ea1',
              fontVariationSettings: 'normal',
              textDecoration: showUnderline ? 'underline' : 'none',
              textUnderlineOffset: showUnderline ? '2px' : undefined,
            }

            return (
              <div
                key={key}
                className="editor-text-link"
                style={{ textAlign: data.align || 'left' }}
              >
                {data.url ? (
                  <a href={data.url} style={linkStyle} target="_blank" rel="noopener noreferrer">
                    {label}
                  </a>
                ) : (
                  <span style={linkStyle}>{label}</span>
                )}
              </div>
            )
          }
          case 'paragraph':
            return <p key={key} dangerouslySetInnerHTML={{ __html: data.text || '' }} />
          case 'list': {
            const Tag = data.style === 'ordered' ? 'ol' : 'ul'
            return <Tag key={key}>{renderListItems(data.items || [])}</Tag>
          }
          case 'bulletList':
            return (
              <ul key={key} className="editor-bullet-list">
                {renderBulletListItems(data.items || [], data)}
              </ul>
            )
          case 'orderedList':
            return <ol key={key} className="editor-ordered-outline">{renderOrderedOutline(data.items || [])}</ol>
          case 'delimiter':
            return <hr key={key} className="editor-delimiter" />
          case 'horizontalLine':
            return (
              <div
                key={key}
                className="editor-delimiter editor-delimiter--custom"
                style={{
                  background: data.color || '#86bc25',
                  height: `${data.thickness || 2}px`,
                }}
              />
            )
          case 'spacer':
            return (
              <div
                key={key}
                className="editor-spacer"
                style={{ height: `${Math.max(8, Number(data.height) || 24)}px` }}
                aria-hidden="true"
              />
            )
          case 'advancedTable': {
            const cols = Number(data.cols) || 1
            const cells = Array.isArray(data.cells) ? data.cells : []
            const rows = getAdvancedTableRows(cells, cols)
            const colWidths = String(data.colWidths || '')
              .split(',')
              .map((item) => item.trim())
              .filter(Boolean)
            return (
              <section key={key} className="editor-advanced-table-block">
                {data.title ? <h3>{data.title}</h3> : null}
                <div className="editor-table-wrap">
                  <table
                    className="editor-table editor-table--advanced"
                    style={{
                      width: data.widthMode === 'content' ? 'auto' : '100%',
                      borderColor: data.borderColor || '#cbd5e1',
                    }}
                  >
                    <tbody>
                      {rows.map((row, rowIndex) => (
                        <tr key={`${key}-row-${rowIndex}`} style={{ height: `${data.rowHeight || 96}px` }}>
                          {row.map((cell, cellIndex) => (
                            <td
                              key={`${key}-cell-${rowIndex}-${cellIndex}`}
                              style={{
                                background: rowIndex === 0 ? (data.headerBg || '#e9f0f8') : '#ffffff',
                                color: cell.textColor || data.textColor || '#0f172a',
                                fontSize: `${cell.fontSize || data.fontSize || 16}px`,
                                textAlign: cell.align || 'left',
                                fontWeight: cell.bold ? 700 : 400,
                                padding: '4px 6px',
                                lineHeight: 1.35,
                                width: colWidths[cellIndex] || undefined,
                                borderColor: data.borderColor || '#cbd5e1',
                              }}
                              dangerouslySetInnerHTML={{ __html: cell.html || '' }}
                            />
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )
          }
          case 'image':
            return data.file?.url || data.url ? (
              <figure key={key} className="editor-image">
                <img src={data.file?.url || data.url} alt={data.caption || data.alt || 'Report media'} />
                {data.caption ? <figcaption dangerouslySetInnerHTML={{ __html: data.caption }} /> : null}
              </figure>
            ) : null
          case 'accordion':
            return (
              <details
                key={key}
                className="editor-accordion"
                open={Boolean(data.openByDefault)}
                style={{
                  borderColor: data.borderColor || '#cbd5e1',
                  background: data.background || '#f8fafc',
                }}
              >
                <summary style={{ color: data.textColor || '#0b7ea1' }}>
                  <span className="editor-accordion__title">{data.title || 'Section title'}</span>
                </summary>
                <div className="editor-accordion__body" dangerouslySetInnerHTML={{ __html: data.body || '' }} />
              </details>
            )
          default:
            return null
        }
      })}
    </div>
  )
}

export default memo(EditorJsRenderer)
