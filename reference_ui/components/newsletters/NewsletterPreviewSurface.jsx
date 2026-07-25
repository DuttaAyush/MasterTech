import EditorJsRenderer from '../editor/EditorJsRenderer'

function NewsletterPreviewSurface({ newsletter }) {
  const audienceTopics = Array.isArray(newsletter?.audienceTopics)
    ? newsletter.audienceTopics.filter(Boolean)
    : []

  return (
    <div className="admin-newsletter-preview">
      <div className="admin-newsletter-preview__header">
        <p className="admin-newsletter-preview__eyebrow">Newsletter preview</p>
        <h1>{newsletter?.title || 'Newsletter title preview'}</h1>
        <p className="admin-newsletter-preview__subject">
          <strong>Subject:</strong> {newsletter?.subject || 'Add a subject line'}
        </p>
        {newsletter?.previewText ? (
          <p className="admin-newsletter-preview__preview-text">{newsletter.previewText}</p>
        ) : null}
        {audienceTopics.length ? (
          <div className="admin-newsletter-preview__topics">
            {audienceTopics.map((topic) => (
              <span key={topic}>{topic}</span>
            ))}
          </div>
        ) : null}
      </div>
      <div className="admin-newsletter-preview__body">
        <EditorJsRenderer content={newsletter?.content} />
      </div>
    </div>
  )
}

export default NewsletterPreviewSurface
