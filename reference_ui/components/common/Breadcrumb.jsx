import { Link } from 'react-router-dom'

function Breadcrumb({ items }) {
  return (
    <nav className="iv-breadcrumb" aria-label="Breadcrumb">
      {items.map((item, idx) => (
        <span key={item.label}>
          {item.to ? <Link to={item.to}>{item.label}</Link> : <strong>{item.label}</strong>}
          {idx < items.length - 1 ? ' / ' : ''}
        </span>
      ))}
    </nav>
  )
}

export default Breadcrumb

