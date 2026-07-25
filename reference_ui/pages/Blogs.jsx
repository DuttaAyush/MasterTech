import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/common/Seo'
import { pageSeo } from '../config/seo'
import { contentStatic } from '../services/contentStatic'
import { getBlogCardMetaLabel } from '../utils/blogFormat'
import { resolveCoverImage } from '../utils/coverImageFallback'
import './Blogs.css'

function Blogs() {
  const allBlogsRef = useRef(null)
  const [activeFilter, setActiveFilter] = useState('All')
  const [blogSource, setBlogSource] = useState([])

  useEffect(() => {
    contentStatic.getBlogs()
      .then((data) => {
        if (data.blogs?.length) {
          setBlogSource(data.blogs.map((blog, index) => ({
            ...blog,
            id: blog.id || `blog-${index}`,
            heroImage: resolveCoverImage({ coverImage: blog.coverImage, id: blog.id || `blog-${index}`, index }),
            summary: blog.excerpt,
            category: blog.contentType || blog.category || 'Article',
          })))
        }
      })
      .catch(() => {})
  }, [])

  const sortedBlogs = useMemo(
    () => [...blogSource].sort((a, b) => new Date(b.publishedAt || b.createdAt).getTime() - new Date(a.publishedAt || a.createdAt).getTime()),
    [blogSource]
  )

  const mapToUiCategory = (blog) => {
    if (blog.intelligenceAreaTitle) return blog.intelligenceAreaTitle

    const title = blog.title.toLowerCase()
    const category = blog.category.toLowerCase()

    if (
      title.includes('analytics') ||
      title.includes('intelligence') ||
      title.includes('decision engines') ||
      category === 'cloud' ||
      category === 'cybersecurity'
    ) {
      return 'Artificial Intelligence'
    }

    if (
      title.includes('consumer') ||
      title.includes('retail') ||
      title.includes('demand') ||
      category === 'consumer' ||
      category === 'retail'
    ) {
      return 'Consumer Behavior'
    }

    return 'Brand Strategy'
  }

  const dynamicCategories = [...new Set(sortedBlogs.map((blog) => mapToUiCategory(blog)))].filter(Boolean)
  const groupedBlogs = Object.fromEntries(dynamicCategories.map((sectionTitle) => [sectionTitle, sortedBlogs.filter((blog) => mapToUiCategory(blog) === sectionTitle)]))

  const featuredBlogs = sortedBlogs.slice(0, 3)
  const filterTabs = ['All', ...dynamicCategories]
  const filteredAllBlogs = activeFilter === 'All' ? sortedBlogs : sortedBlogs.filter((blog) => mapToUiCategory(blog) === activeFilter)

  const jumpToAllBlogs = (filterName) => {
    setActiveFilter(filterName)
    allBlogsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const renderBlogGrid = (items) => (
    <div className="featured-blogs-grid blogs-page-grid">
      {items.map((blog) => (
        <Link key={blog.id} to={`/blogs/${blog.slug}`} className="featured-blog-card reveal-on-scroll">
          <img src={blog.heroImage} alt={blog.title} loading="lazy" />
          <div className="featured-blog-overlay" />
          <p className="blogs-card-meta">{getBlogCardMetaLabel(blog)}</p>
          <div className="featured-blog-copy">
            <h3>{blog.title}</h3>
            <p>{blog.summary}</p>
            <span className="blogs-read-more">Read More</span>
          </div>
        </Link>
      ))}
    </div>
  )

  return (
    <main className="iv-page-shell blogs-page">
      <Seo {...pageSeo('blogs')} />

      <section className="blogs-hero">
        <p className="blogs-kicker">Perspectives</p>
        <h1>Insights Built for Decision-Makers</h1>
        <p>
          Analyst perspectives on market movements, technology shifts, and strategic priorities shaping enterprise
          outcomes.
        </p>
      </section>

      <section className="featured-blogs-section blogs-page-section blogs-featured-section">
        <div className="featured-blogs-head blogs-head-with-action">
          <h2>Featured Blogs</h2>
          <button type="button" className="blogs-view-all-link" onClick={() => jumpToAllBlogs('All')}>View all</button>
        </div>
        {renderBlogGrid(featuredBlogs)}
      </section>

      {Object.entries(groupedBlogs).map(([sectionTitle, sectionBlogs]) => (
        <section key={sectionTitle} className="featured-blogs-section blogs-page-section blogs-category-section">
          <div className="featured-blogs-head blogs-head-with-action">
            <h2>{sectionTitle}</h2>
            <button type="button" className="blogs-view-all-link" onClick={() => jumpToAllBlogs(sectionTitle)}>View all</button>
          </div>
          {renderBlogGrid(sectionBlogs.slice(0, 3))}
        </section>
      ))}

      <section ref={allBlogsRef} className="featured-blogs-section blogs-page-section blogs-all-section">
        <div className="featured-blogs-head">
          <h2>All Blogs</h2>
        </div>

        <div className="blogs-filter-tabs" role="tablist" aria-label="Blogs category filter">
          {filterTabs.map((tab) => (
            <button
              type="button"
              role="tab"
              key={tab}
              aria-selected={activeFilter === tab}
              className={activeFilter === tab ? 'active' : ''}
              onClick={() => setActiveFilter(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="featured-blogs-grid blogs-page-grid">
          {filteredAllBlogs.map((blog) => (
            <Link key={blog.id} to={`/blogs/${blog.slug}`} className="featured-blog-card reveal-on-scroll">
              <img src={blog.heroImage} alt={blog.title} loading="lazy" />
              <div className="featured-blog-overlay" />
              <p className="blogs-card-meta">{getBlogCardMetaLabel(blog)}</p>
              <div className="featured-blog-copy">
                <h3>{blog.title}</h3>
                <p>{blog.summary}</p>
                <span className="blogs-read-more">Read More</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Blogs
