import { Link } from 'react-router-dom'
import { BarChart3, Network, Target, User, ShieldCheck, TrendingUp } from 'lucide-react'
import Seo from '../components/common/Seo'
import { pageSeo } from '../config/seo'
import BusinessFunction from '../components/sections/business-function/BusinessFunction'
import './PurposeAndValuesPage.css'

function PurposeAndValuesPage() {
  const values = [
    {
      title: 'Context Beyond Data Insights',
      text: 'We go beyond statistics to deliver intelligence that explains why developments matter, how markets evolve, where implications emerge, and how industries reshape through technological and economic forces.',
      icon: BarChart3,
      color: '#6BA83A',
      bg: 'rgba(22, 54, 28, 0.55)'
    },
    {
      title: 'Cross-Industry Intelligence',
      text: 'We analyze interconnected ecosystems, converging technologies, and adjacent market developments to uncover the opportunities overlooked in conventional industry-focused research environments.',
      icon: Network,
      color: '#B85C8C',
      bg: 'rgba(54, 26, 45, 0.55)'
    },
    {
      title: 'Decision-Oriented Research',
      text: 'Our work is designed to support strategic planning, investment evaluation, market positioning, innovation initiatives, and competitive understanding - not just information consumption.',
      icon: Target,
      color: '#B56522',
      bg: 'rgba(68, 38, 16, 0.55)'
    },
    {
      title: 'Depth with Executive Relevance',
      text: 'We combine market analysis, technology assessment, competitive intelligence and ecosystem mapping, industry insight to create research with practical and executive-level strategic value.',
      icon: User,
      color: '#2D8C8C',
      bg: 'rgba(18, 49, 52, 0.55)'
    },
    {
      title: 'Independent and Insight-Driven',
      text: 'Intellivist is built on analytical rigor, objective evaluation, and the structured research methodologies focused on delivering clarity in complex and rapidly evolving emerging global market environments and industries.',
      icon: ShieldCheck,
      color: '#C18A24',
      bg: 'rgba(62, 48, 20, 0.55)'
    },
    {
      title: 'Built for Evolving Markets',
      text: 'From emerging technologies and industrial transformation to next-generation infrastructure and digital ecosystems, our intelligence frameworks are designed to adapt to rapidly evolving business environments.',
      icon: TrendingUp,
      color: '#7A7A7A',
      bg: 'rgba(40, 40, 40, 0.58)'
    }
  ]

  return (
    <main className="purpose-page">
      <Seo {...pageSeo('purpose')} />

      <section className="purpose-hero" aria-label="Purpose hero">
        <img src="/images/purpose.avif" alt="Person standing on mountain peak at sunrise" className="purpose-hero-image" />
        <div className="purpose-hero-overlay" />
        <div className="purpose-hero-content">
          <p className="shared-hero-breadcrumb">
            <Link to="/purpose-and-values">Who we are</Link>
            <span aria-hidden="true"> &gt; </span>
            <span>Purpose &amp; Values</span>
          </p>
          <h1><span className="purpose-hero-title-span">Our Purpose</span></h1>
          <p className="purpose-hero-punchline">We Don't Produce Information for Volume. We Build Intelligence for Decisions.</p>
        </div>
        <div className="purpose-hero-ring" aria-hidden="true" />
      </section>

      <section className="purpose-story">
        <div className="purpose-story-copy">
          <h2><span className="purpose-story-title-span">Making an impact that matters</span></h2>
          <p>
            Intellivist exists to help organizations understand emerging shifts across industries, technologies, infrastructure systems, and market ecosystems before they become mainstream realities.
          </p>
          <p>
            In rapidly evolving markets, businesses require more than fragmented information. They need contextual understanding, forward-looking perspective, and intelligence that connects developments across sectors, technologies, policies, and competitive environments.
          </p>
          <p>
            Our purpose is to help decision-makers identify opportunities earlier, evaluate risks more effectively, and navigate complexity with greater strategic clarity.
          </p>
        </div>
      </section>

      <style>{`
        .values-section{
          min-height:auto;
          padding:86px 5vw 72px;
          background:
            linear-gradient(rgba(7, 10, 14, 0.62), rgba(7, 10, 14, 0.62)),
            url("/images/values-bg.png") center/cover no-repeat;
          color:#ffffff;
          font-family:"Open Sans", Aptos, Helvetica, Arial, sans-serif;
        }
        .values-container{
          max-width:1520px;
          margin:0 auto;
        }
        .heading{
          margin:0 0 16px;
          font-size:40px;
          line-height:1.06;
          letter-spacing:-1.2px;
          font-weight:300;
          color:#f5eee3;
          font-family:"Open Sans", Aptos, Helvetica, Arial, sans-serif;
          font-variation-settings:"wght" 100;
        }
        .heading span{
          color:#e4bc85;
        }
        .title-line{
          width:62px;
          height:3px;
          background:#cf9d4c;
          margin-bottom:34px;
        }
        .values-grid{
          display:grid;
          grid-template-columns:repeat(3,minmax(0,1fr));
          gap:24px;
        }
        .value-card{
          position:relative;
          min-height:calc(280px);
          padding:26px 28px 24px;
          border-radius:8px;
          overflow:hidden;
          background:var(--card-bg);
          border:1px solid rgba(255,255,255,0.14);
          backdrop-filter:blur(7px);
          box-shadow:inset 0 1px 0 rgba(255,255,255,0.05), 0 20px 40px rgba(0,0,0,0.33);
          transition:transform 0.3s ease, border-color 0.3s ease;
        }
        .value-card:hover{
          transform:translateY(-4px);
          border-color:rgba(255,255,255,0.2);
        }
        .value-card::before{
          content:"";
          position:absolute;
          inset:0;
          background:radial-gradient(circle at top left, color-mix(in srgb, var(--accent) 26%, transparent), transparent 45%);
          pointer-events:none;
        }
        .value-card::after{
          content:"";
          position:absolute;
          left:0;
          bottom:0;
          width:100%;
          height:5px;
          background:var(--accent);
        }
        .card-top{
          display:flex;
          align-items:flex-start;
          gap:16px;
          margin-bottom:16px;
        }
        .icon-box{
          width:60px;
          height:60px;
          border-radius:50%;
          display:flex;
          align-items:center;
          justify-content:center;
          flex-shrink:0;
          color:#e8b86a;
          border:1.5px solid rgba(232,184,106,0.64);
          background:rgba(0,0,0,0.18);
        }
        .value-title{
          margin:0 0 12px;
          color:#f7f1e8;
          font-size:24px;
          line-height:1.14;
          letter-spacing:2px;
          font-weight:300;
          font-family:"Open Sans", Aptos, Helvetica, Arial, sans-serif;
          font-variation-settings:"wght" 100;
        }
        .small-line{
          width:58px;
          height:2px;
          background:#cf9d4c;
        }
        .value-text{
          margin:0;
          color:rgba(255,255,255,0.9);
          font-size:16px;
          line-height:1.5;
          letter-spacing:1px;
          font-weight:300;
          font-family:"Open Sans", Aptos, Helvetica, Arial, sans-serif;
        }
        @media(max-width:1200px){
          .heading{ font-size:40px; }
          .value-title{ font-size:24px; }
          .values-grid{ grid-template-columns:repeat(2,minmax(0,1fr)); }
        }
        @media(max-width:768px){
          .values-section{ padding:54px 20px; }
          .heading{ font-size:32px; line-height:1.2; }
          .values-grid{ grid-template-columns:1fr; }
          .value-card{ min-height:auto; }
          .value-title{ font-size:22px; }
          .value-text{ font-size:16px; line-height:1.55; }
        }
        @media(max-width:480px){
          .values-section{ padding:44px 16px; }
          .heading{ font-size:28px; }
          .value-title{ font-size:20px; }
          .value-text{ font-size:15px; letter-spacing:0.6px; }
        }
      `}</style>
      <section className="values-section">
        <div className="values-container">
          <h2 className="heading">
            <span>Values</span> We Deliver
          </h2>
          <div className="title-line" />
          <div className="values-grid">
            {values.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="value-card"
                  style={{ '--accent': item.color, '--card-bg': item.bg }}
                >
                  <div className="card-top">
                    <div className="icon-box">
                      <Icon size={30} strokeWidth={1.8} />
                    </div>
                    <div>
                      <h3 className="value-title">{item.title}</h3>
                      <div className="small-line" />
                    </div>
                  </div>
                  <p className="value-text">{item.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="purpose-business-wrap" aria-label="Business function insights">
        <BusinessFunction />
      </section>

      <section className="purpose-closing-note" aria-label="Closing statement">
        <p>
          Intellivist is built for organizations seeking clarity in complexity, perspective in transformation, and intelligence that extends beyond conventional market boundaries.
        </p>
      </section>
    </main>
  )
}

export default PurposeAndValuesPage
