import EditorJsRenderer from '../editor/EditorJsRenderer'
import '../../pages/InsightsPage.css'

function BlogPreviewSurface({ blog }) {
  const publishDate = blog?.publishedAt || blog?.publishDate || blog?.createdAt || new Date().toISOString()

  return (
    <div className="insights-page-shell insights-page-shell--preview">
      <section className="insights-hero">
        <div className="insights-hero__inner">
          <div className="insights-hero__badges">
            {blog?.contentType ? <span>{blog.contentType}</span> : null}
            {blog?.intelligenceAreaTitle ? <span>{blog.intelligenceAreaTitle}</span> : null}
          </div>

          <h1>{blog?.title || 'Blog title preview'}</h1>
          <p className="insights-hero__summary">{blog?.excerpt || 'Preview your summary, editorial framing, and overall blog presentation here.'}</p>
        </div>
      </section>

      <section className="insights-body">
        <div className="insights-body__grid insights-body__grid--preview">
          <article className="insights-article-card">
            <div className="insights-taxonomy-strip">
              <div className="insights-taxonomy-item">
                <span>Intelligence Area</span>
                <strong>{blog?.intelligenceAreaTitle || 'Editorial Intelligence'}</strong>
              </div>
              <div className="insights-taxonomy-item">
                <span>Content Type</span>
                <strong>{blog?.contentType || 'Article'}</strong>
              </div>
              <div className="insights-taxonomy-item">
                <span>Geography</span>
                <strong>{blog?.geography || 'Global'}</strong>
              </div>
              <div className="insights-taxonomy-item">
                <span>Published</span>
                <strong>{new Date(publishDate).toLocaleDateString(undefined, { month: 'long', year: 'numeric' })}</strong>
              </div>
            </div>

            <div className="insights-editor-copy">
              <EditorJsRenderer content={blog?.content} />
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}

export default BlogPreviewSurface
