import { useEffect, useState } from 'react'

import { apiBaseUrl, fetchCollection } from '../api.js'

function ResourceView({ resource, title, description, columns, renderCard }) {
  const [items, setItems] = useState([])
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')

  useEffect(() => {
    let ignore = false

    async function loadResource() {
      setStatus('loading')
      setError('')

      try {
        const data = await fetchCollection(resource)

        if (!ignore) {
          setItems(data)
          setStatus('ready')
        }
      } catch (loadError) {
        if (!ignore) {
          setError(loadError.message)
          setStatus('error')
        }
      }
    }

    loadResource()

    return () => {
      ignore = true
    }
  }, [resource])

  return (
    <section className="resource-view">
      <div className="resource-heading">
        <div>
          <p className="eyebrow">OctoFit data</p>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div className="endpoint-pill">{apiBaseUrl}/{resource}/</div>
      </div>

      {status === 'loading' && <p className="status-message">Loading {title.toLowerCase()}...</p>}
      {status === 'error' && <p className="status-message error">{error}</p>}
      {status === 'ready' && items.length === 0 && (
        <p className="status-message">No {title.toLowerCase()} found.</p>
      )}

      {status === 'ready' && items.length > 0 && (
        <div className="resource-grid" style={{ '--column-count': columns }}>
          {items.map((item) => (
            <article className="resource-card" key={item._id ?? item.id ?? item.username ?? item.name ?? JSON.stringify(item)}>
              {renderCard(item)}
            </article>
          ))}
        </div>
      )}
    </section>
  )
}

export default ResourceView