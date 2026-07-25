import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { contentStatic } from '../../../services/contentStatic'
import { getBlogCardMetaLabel } from '../../../utils/blogFormat'
import { resolveCoverImage } from '../../../utils/coverImageFallback'
import { scheduleIdleWork } from '../../../utils/scheduleIdle'
import './FeaturedBlogsSection.css'

const HOMEPAGE_BLOG_COUNT = 4

function normalizeFeaturedBlogs(blogs = []) {
  return blogs
    .filter((blog) => blog?.featured)
    .slice(0, HOMEPAGE_BLOG_COUNT)
    .map((blog, index) => ({
      ...blog,
      heroImage: resolveCoverImage({ coverImage: blog.coverImage, id: blog.id, index }),
      summary: blog.excerpt || '',
    }))
}

function FeaturedBlogsSection() {
  const [blogs, setBlogs] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const cancel = scheduleIdleWork(() => {
      contentStatic.getBlogs()
        .then((data) => {
          if (data.blogs?.length) {
            setBlogs(normalizeFeaturedBlogs(data.blogs))
          }
        })
        .catch(() => undefined)
        .finally(() => setLoaded(true))
    })

    return cancel
  }, [])

  const visibleBlogs = useMemo(() => blogs.slice(0, HOMEPAGE_BLOG_COUNT), [blogs])

  if (loaded && !visibleBlogs.length) return null

  return (
    <section className="featured-blogs-section" aria-labelledby="featured-blogs-heading">
      <div className="featured-blogs-head">
        <h2 id="featured-blogs-heading">Featured Blogs</h2>
        <Link to="/blogs" className="featured-blogs-browse">
          Browse All <span aria-hidden="true">→</span>
        </Link>
      </div>

      <div className="featured-blogs-grid">
        {!loaded
          ? Array.from({ length: HOMEPAGE_BLOG_COUNT }, (_, index) => (
              <div key={`featured-blog-skeleton-${index}`} className="featured-blog-card featured-blog-card--skeleton" aria-hidden="true" />
            ))
          : visibleBlogs.map((blog) => (
              <Link key={blog.id} to={`/blogs/${blog.slug}`} className="featured-blog-card">
                <img src={blog.heroImage} alt={blog.title} loading="lazy" decoding="async" width="640" height="360" />
                <div className="featured-blog-overlay" />
                <p className="blogs-card-meta">{getBlogCardMetaLabel(blog)}</p>
                <div className="featured-blog-copy">
                  <h3>{blog.title}</h3>
                  <p>{blog.summary}</p>
                </div>
              </Link>
            ))}
      </div>
    </section>
  )
}

export default FeaturedBlogsSection
