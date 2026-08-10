export const SERVICES = [
  {
    slug: 'cloud-modernization',
    title: 'Cloud Modernization & Multi-Cloud Architecture',
    shortTitle: 'Cloud Modernization',
    icon: 'Cloud',
    tag: 'Practice 01',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=srgb&fm=jpg&q=85',
    summary: 'AWS, Azure, and GCP re-architecture at scale, multi-cloud landing zones, FinOps governance, and SRE platform engineering.',
    quote: '"We don\'t just lift and shift workloads; we re-architect systems for multi-cloud resilience and audited cost efficiency."',
    overview: 'Our Cloud Modernization practice helps global enterprises break free from legacy data center constraints and technical debt. We design multi-cloud landing zones, automate infrastructure-as-code pipelines, and implement Site Reliability Engineering (SRE) disciplines that guarantee 99.999% availability for critical business applications.',
    capabilities: [
      'Cloud Strategy & TCO Modeling',
      'Multi-Cloud Landing Zone Architecture',
      'Automated Workload Re-platforming',
      'Platform Engineering & SRE Enablement',
      'FinOps & Continuous Cost Governance'
    ],
    deliverables: [
      { title: 'Landing Zone Blueprint', desc: 'Secure, compliant multi-account hierarchy with built-in guardrails across AWS, Azure, and GCP.' },
      { title: 'SRE & Platform Automation', desc: 'Infrastructure-as-code repositories, CI/CD deployment pipelines, and zero-downtime release mechanisms.' },
      { title: 'FinOps Governance Engine', desc: 'Real-time cloud cost dashboards, unit-economic reporting, and automated waste elimination.' },
      { title: 'Migration Execution Pod', desc: 'Embedded senior practitioner team executing zero-downtime workload migrations.' }
    ],
    metrics: [
      { value: '€1.9B+', label: 'Run-Cost Saved' },
      { value: '99.999%', label: 'Uptime SLA' },
      { value: '100%', label: 'Automated CI/CD' }
    ]
  },
  {
    slug: 'ai-applied-intelligence',
    title: 'AI & Applied Enterprise Intelligence',
    shortTitle: 'AI & Applied Intelligence',
    icon: 'Cpu',
    tag: 'Practice 02',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?crop=entropy&cs=srgb&fm=jpg&q=85',
    summary: 'Enterprise LLM retrieval ops, autonomous agentic workflows, RAG data pipelines, and regulated AI safety governance.',
    quote: '"Transitioning AI from isolated sandbox demos to sovereign, production-grade enterprise intelligence."',
    overview: 'We architect production AI systems for Fortune 500 banks, healthcare providers, and industrial leaders. Our practice specializes in isolated retrieval-augmented generation (RAG), autonomous multi-agent pipelines, and MLOps platforms that ensure complete sovereign data control and compliance with strict EU and US regulations.',
    capabilities: [
      'LLM & Autonomous Agent Architecture',
      'Enterprise RAG & Semantic Search Fabrics',
      'MLOps & Automated Model Evaluation',
      'Regulated AI Safety & Auditing Frameworks',
      'Executive AI Operating Models'
    ],
    deliverables: [
      { title: 'Sovereign RAG Pipeline', desc: 'Custom vector store architecture integrated with internal enterprise data sources without third-party leaks.' },
      { title: 'Autonomous Agentic Mesh', desc: 'Multi-agent orchestration frameworks for automated claims processing, underwriting, and research.' },
      { title: 'AI Governance Suite', desc: 'Compliance auditing, hallucination scoring, and explainability frameworks for board review.' },
      { title: 'MLOps Infrastructure', desc: 'Continuous model fine-tuning, monitoring, and automated fallback pipelines.' }
    ],
    metrics: [
      { value: '38%', label: 'Faster Processing' },
      { value: '100%', label: 'Sovereign Control' },
      { value: 'Sub-sec', label: 'Inference Latency' }
    ]
  },
  {
    slug: 'cybersecurity-zero-trust',
    title: 'Cybersecurity & Zero-Trust Defense',
    shortTitle: 'Cybersecurity & Zero Trust',
    icon: 'ShieldCheck',
    tag: 'Practice 03',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?crop=entropy&cs=srgb&fm=jpg&q=85',
    summary: 'Defense-grade identity modernization, SOC perimeter engineering, zero-trust network access, and threat intelligence.',
    quote: '"Building defense perimeters that assume compromise and enforce continuous, zero-trust identity verification."',
    overview: 'Our Cybersecurity practice delivers defense-grade security perimeters for critical infrastructure, defense contractors, and financial networks. We replace vulnerable legacy VPNs and perimeter-based security with continuous zero-trust identity verification, micro-segmentation, and threat detection engineering.',
    capabilities: [
      'Zero-Trust Network Architecture (ZTNA)',
      'IAM & Passwordless Identity Modernization',
      'SOC Threat Detection Engineering',
      'Cloud Security Posture Management (CSPM)',
      'Board Cyber Risk Reporting & Audit'
    ],
    deliverables: [
      { title: 'Zero-Trust Access Perimeter', desc: 'Context-aware access policies enforcing strict least-privilege control across all enterprise applications.' },
      { title: 'IAM Modernization Blueprint', desc: 'Passwordless single sign-on, automated lifecycle management, and privileged access management (PAM).' },
      { title: 'Detection Engineering Kit', desc: 'Automated SIEM/SOAR playbooks for rapid threat hunting and incident containment.' },
      { title: 'Board Compliance Audit', desc: 'Audit-ready compliance reports for NIS2, DORA, HIPAA, and SOC2 frameworks.' }
    ],
    metrics: [
      { value: '180K', label: 'Credentials Secured' },
      { value: '<15m', label: 'Threat Containment' },
      { value: 'Zero', label: 'Perimeter Breaches' }
    ]
  },
  {
    slug: 'digital-transformation',
    title: 'Digital Operating Model & Platform Engineering',
    shortTitle: 'Digital Transformation',
    icon: 'Workflow',
    tag: 'Practice 04',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=srgb&fm=jpg&q=85',
    summary: 'Operating model overhaul, high-velocity product engineering, Agile platform teams, and organizational change execution.',
    quote: '"Aligning technology organizational structures with high-velocity product delivery and business outcomes."',
    overview: 'We redesign digital operating models for traditional enterprises struggling with slow delivery cycles and organizational friction. By establishing internal developer platforms (IDPs), product-centric engineering teams, and streamlined portfolio governance, we accelerate software delivery without sacrificing stability.',
    capabilities: [
      'Product Operating Model Design',
      'High-Velocity Product Engineering',
      'Internal Developer Platform (IDP)',
      'Agile & DevOps Scaled Transformation',
      'Portfolio Steering & Value Stream Mapping'
    ],
    deliverables: [
      { title: 'Internal Developer Platform', desc: 'Self-service developer portals enabling push-button environment provisioning and automated testing.' },
      { title: 'Operating Model Operating System', desc: 'Defined pod structures, role clearings, and decision rights for engineering teams.' },
      { title: 'Value Stream Optimization', desc: 'Elimination of hand-off bottlenecks between business stakeholders and software delivery.' },
      { title: 'Executive Steering Framework', desc: 'Outcome-focused portfolio dashboards tracking feature flow and engineering throughput.' }
    ],
    metrics: [
      { value: '4.2x', label: 'Release Velocity' },
      { value: '0', label: 'Pass-Through Layers' },
      { value: '85%', label: 'Developer Satisfaction' }
    ]
  },
  {
    slug: 'data-analytics-fabric',
    title: 'Data Lakehouse & Enterprise Analytics',
    shortTitle: 'Data & Analytics',
    icon: 'Database',
    tag: 'Practice 05',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&q=85',
    summary: 'Real-time semantic layers, lakehouse data architectures, streaming pipelines, and decision intelligence.',
    quote: '"Unifying fragmented data silos into a single, high-speed semantic layer for real-time decision intelligence."',
    overview: 'Our Data & Analytics practice builds modern lakehouse architectures that process millions of events per second. We eliminate fragmented data silos, establish automated data lineage and governance, and create real-time semantic layers that empower business leaders with instant, verifiable insights.',
    capabilities: [
      'Modern Lakehouse Architecture (Snowflake/Databricks)',
      'Real-Time Event Streaming (Kafka/Flink)',
      'Unified Business Semantic Layer',
      'Decision Intelligence Engine',
      'Automated Data Lineage & Governance'
    ],
    deliverables: [
      { title: 'Enterprise Lakehouse Core', desc: 'Scalable data warehouse/lakehouse platform unifying structured and unstructured operational data.' },
      { title: 'Real-Time Streaming Fabric', desc: 'Low-latency event pipelines capturing transactions, telemetry, and customer interactions live.' },
      { title: 'Semantic Model Layer', desc: 'Centralized business definitions ensuring consistent KPI calculation across all corporate dashboards.' },
      { title: 'Data Quality & Lineage Suite', desc: 'Automated data freshness monitoring, anomaly detection, and regulatory lineage tracking.' }
    ],
    metrics: [
      { value: '11.4M', label: 'Records Unified' },
      { value: 'Sub-sec', label: 'Query Latency' },
      { value: '100%', label: 'Lineage Coverage' }
    ]
  },
  {
    slug: 'enterprise-architecture',
    title: 'Enterprise Architecture & Standards',
    shortTitle: 'Enterprise Architecture',
    icon: 'Layers',
    tag: 'Practice 06',
    image: 'https://images.unsplash.com/photo-1601785491008-d1153dfadd57?crop=entropy&cs=srgb&fm=jpg&q=85',
    summary: 'Long-term reference architectures, API and integration strategy, legacy core decoupling, and technology radars.',
    quote: '"Designing modular technology standards engineered to withstand market shifts over multi-decade horizons."',
    overview: 'We help CIOs and Enterprise Architects establish pragmatic reference standards that prevent tech debt and vendor lock-in. Our team specializes in legacy core system decoupling, microservices API gateway strategies, and technology radar governance across complex corporate holdings.',
    capabilities: [
      'Enterprise Reference Architecture Standards',
      'API Gateway & Microservices Strategy',
      'Legacy Core System Strangler Patterns',
      'Corporate Tech Radar & Standardization',
      'Architecture Review Board (ARB) Setup'
    ],
    deliverables: [
      { title: 'Target State Architecture Map', desc: 'Multi-year blueprint for modernizing legacy core platforms into event-driven microservices.' },
      { title: 'API & Integration Platform', desc: 'Enterprise API gateway standards, developer portals, and integration protocol specifications.' },
      { title: 'Tech Radar & Governance Model', desc: 'Curated technology standards index guiding stack selection across global subsidiaries.' },
      { title: 'ARB Operating Model', desc: 'Governance processes for architectural sign-offs, exception management, and tech debt tracking.' }
    ],
    metrics: [
      { value: '14', label: 'Markets Unified' },
      { value: 'Decade+', label: 'Design Longevity' },
      { value: 'Zero', label: 'Vendor Lock-in' }
    ]
  },
  {
    slug: 'infra-finops-optimization',
    title: 'Infrastructure FinOps & Cloud Economics',
    shortTitle: 'FinOps & Cloud Economics',
    icon: 'Zap',
    tag: 'Practice 07',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=srgb&fm=jpg&q=85',
    summary: 'Audited cloud cost governance, infrastructure right-sizing, reserved capacity management, and unit economics.',
    quote: '"Transforming cloud spend from an unpredictable operational risk into a transparent, unit-cost optimization discipline."',
    overview: 'Our FinOps practice brings financial accountability to cloud infrastructure. We partner with CFOs and CIOs to establish unit-economic modeling, automate idle resource termination, negotiate cloud provider commitments, and embed cost awareness directly into engineering workflows.',
    capabilities: [
      'Cloud Unit Economics & Margin Modeling',
      'Automated Resource Right-Sizing & Termination',
      'Commitment & Reserved Instance Optimization',
      'FinOps Cultural & Workflow Integration',
      'Executive CIO/CFO Real-Time Cost Dashboards'
    ],
    deliverables: [
      { title: 'FinOps Operating Framework', desc: 'Organizational cost allocation tags, showback/chargeback models, and budget alerting thresholds.' },
      { title: 'Capacity Optimization Plan', desc: 'Strategic savings plans, spot instance strategies, and committed use discount portfolios.' },
      { title: 'Automated Waste Elimination', desc: 'Serverless policies terminating unattached volumes, idle dev environments, and obsolete snapshots.' },
      { title: 'Unit-Cost Analytics Platform', desc: 'Dashboards mapping cloud infrastructure expenditure directly to revenue and active user metrics.' }
    ],
    metrics: [
      { value: '32%', label: 'Avg Cost Reduction' },
      { value: 'Audited', label: 'Financial SLAs' },
      { value: '<30 Days', label: 'TCO Payback' }
    ]
  },
  {
    slug: 'secops-sovereign-compliance',
    title: 'Defense SecOps & Sovereign Compliance',
    shortTitle: 'SecOps & Sovereign Compliance',
    icon: 'ShieldCheck',
    tag: 'Practice 08',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=srgb&fm=jpg&q=85',
    summary: 'Air-gapped SecOps automation, sovereign cloud compliance, NIS2/DORA regulatory frameworks, and defense infrastructure.',
    quote: '"Architecting sovereign, audit-ready compliance fabrics for defense, aerospace, and critical national infrastructure."',
    overview: 'Our SecOps & Sovereign Compliance practice provides specialized engineering for defense contractors, government agencies, and regulated industries subject to strict national sovereignty laws. We build air-gapped deployment pipelines, continuous compliance monitoring, and automated SecOps playbooks.',
    capabilities: [
      'Sovereign Cloud & Air-Gapped Infrastructures',
      'NIS2, DORA & FedRAMP Automated Compliance',
      'SecOps Automation & Threat Playbooks',
      'Defense-Grade Identity & Cryptographic Controls',
      'Continuous Regulatory Audit & Reporting'
    ],
    deliverables: [
      { title: 'Sovereign SecOps Blueprint', desc: 'Air-gapped continuous integration and compliance monitoring for sovereign workloads.' },
      { title: 'NIS2/DORA Compliance Pack', desc: 'Automated policy enforcement and audit-ready risk reporting for European regulators.' },
      { title: 'Cryptographic Identity System', desc: 'Hardware-backed multi-factor authentication and zero-trust perimeter controls.' },
      { title: 'Incident Response Automation', desc: 'Automated containment scripts isolating compromised nodes in under 60 seconds.' }
    ],
    metrics: [
      { value: '100%', label: 'Sovereign Isolation' },
      { value: '<60s', label: 'Containment Speed' },
      { value: 'Audit-Ready', label: 'NIS2 & DORA' }
    ]
  }
];

export function getServiceBySlug(slug) {
  return SERVICES.find((s) => s.slug === slug);
}
