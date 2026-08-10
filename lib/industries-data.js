export const INDUSTRIES = [
  {
    slug: 'bfsi',
    title: 'Banking, Financial Services & Insurance (BFSI)',
    shortTitle: 'BFSI & Capital Markets',
    icon: 'Landmark',
    tag: 'Vertical 01',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?crop=entropy&cs=srgb&fm=jpg&q=85',
    summary: 'Core banking modernization, instant payment rails, compliance AI, and automated claims processing across global financial markets.',
    quote: '"Architecting zero-downtime, regulatory-grade core banking platforms across sovereign markets."',
    overview: 'We partner with Tier-1 global banks, capital market institutions, and insurance leaders to replace legacy mainframe platforms, deploy real-time fraud detection AI, and ensure compliance with European and North American financial regulators.',
    capabilities: [
      'Core Banking Mainframe Decoupling',
      'ISO 20022 Instant Payment Rails',
      'Real-Time Algorithmic Fraud Detection',
      'Automated Underwriting & Claims AI',
      'DORA & Regulatory Compliance Auditing'
    ],
    deliverables: [
      { title: 'Core Banking Strangler Fabric', desc: 'Event-driven microservices architecture decoupling legacy core systems without transaction downtime.' },
      { title: 'Instant Payment Gateway', desc: 'ISO 20022 compliant high-throughput payment engine capable of processing 10,000+ TPS.' },
      { title: 'Algorithmic Claims Engine', desc: 'Machine learning automation reducing property and casualty claim settlement cycles by 38%.' },
      { title: 'DORA Compliance Suite', desc: 'Operational resilience framework meeting European Digital Operational Resilience Act mandates.' }
    ],
    metrics: [
      { value: '14', label: 'Sovereign Markets' },
      { value: '10K+', label: 'Transactions / Sec' },
      { value: '38%', label: 'Faster Claims' }
    ]
  },
  {
    slug: 'ai-solutions',
    title: 'Enterprise AI & Autonomous Agents',
    shortTitle: 'AI Solutions & Agents',
    icon: 'Cpu',
    tag: 'Vertical 02',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?crop=entropy&cs=srgb&fm=jpg&q=85',
    summary: 'Isolated RAG fabrics, multi-agent workflow meshes, enterprise AI safety perimeters, and custom LLM Ops.',
    quote: '"Deploying production-grade, sovereign AI agents into mission-critical corporate operations."',
    overview: 'We engineer enterprise AI solutions that operate securely inside private cloud VPCs. From automated legal document analysis to multi-agent supply chain optimization, our architectures deliver sub-second inference with auditable governance.',
    capabilities: [
      'Isolated VPC Vector Search & RAG',
      'Multi-Agent Orchestration Meshes',
      'Enterprise LLM Ops & Model Monitoring',
      'Regulated AI Safety & Hallucination Guardrails',
      'Custom Domain Fine-Tuning Pipelines'
    ],
    deliverables: [
      { title: 'Sovereign Intelligence Engine', desc: 'Private RAG architecture allowing employees to query 10M+ internal documents securely.' },
      { title: 'Autonomous Underwriting Mesh', desc: 'Multi-agent system evaluating complex commercial risks and outputting audit-ready policy drafts.' },
      { title: 'LLM Hallucination Guard', desc: 'Real-time proxy middleware scoring and blocking unverified model responses before user display.' },
      { title: 'Custom Model Pipeline', desc: 'End-to-end MLOps pipeline for fine-tuning open-weights models on domain telemetry.' }
    ],
    metrics: [
      { value: '100%', label: 'Data Sovereignty' },
      { value: 'Sub-sec', label: 'Inference Latency' },
      { value: '0.01%', label: 'Hallucination Rate' }
    ]
  },
  {
    slug: 'logistics-supply-chain',
    title: 'Logistics, Freight & Supply Chain Management',
    shortTitle: 'Logistics & Supply Chain',
    icon: 'Truck',
    tag: 'Vertical 03',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?crop=entropy&cs=srgb&fm=jpg&q=85',
    summary: 'IoT telemetry streams, predictive route dispatch, automated warehouse robotics integration, and global cargo tracking.',
    quote: '"Optimizing global logistics networks with real-time IoT event streaming and predictive route dispatch."',
    overview: 'We build high-performance data pipelines and IoT telemetry platforms for international freight forwarders, port authorities, and supply chain operators. Our solutions process millions of container status updates per second, eliminating port congestion bottlenecks.',
    capabilities: [
      'Sub-Second IoT Telemetry Ingestion',
      'Dynamic AI Freight Route Optimization',
      'Warehouse Robotics & WMS Integration',
      'Automated Customs Compliance Systems',
      'Real-Time End-to-End Cargo Visibility'
    ],
    deliverables: [
      { title: 'IoT Telemetry Control Tower', desc: 'Streaming Kafka pipeline ingesting real-time GPS and temperature telemetry from 50,000+ cargo containers.' },
      { title: 'Dynamic Route Optimizer', desc: 'Machine learning dispatch engine calculating weather, traffic, and fuel efficiency in real-time.' },
      { title: 'Robotic WMS Adapter', desc: 'Standardized API gateway connecting automated guided vehicles (AGVs) with central ERP systems.' },
      { title: 'Customs Event Hub', desc: 'Automated documentation verification platform cutting cross-border clearance times by 50%.' }
    ],
    metrics: [
      { value: '50K+', label: 'IoT Stream Nodes' },
      { value: '50%', label: 'Faster Customs' },
      { value: '18%', label: 'Fuel Saved' }
    ]
  },
  {
    slug: 'retail-commerce',
    title: 'Retail, E-Commerce & Consumer Brands',
    shortTitle: 'Retail & E-Commerce',
    icon: 'ShoppingBag',
    tag: 'Vertical 04',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?crop=entropy&cs=srgb&fm=jpg&q=85',
    summary: 'Unified inventory fabrics, composable headless e-commerce, real-time personalization AI, and POS synchronization.',
    quote: '"Building high-availability, composable commerce engines capable of handling peak Black Friday surges effortlessly."',
    overview: 'We help global retail brands modernize legacy monolith e-commerce platforms into high-speed composable architectures. Our systems synchronize online and physical store inventory in real-time while delivering sub-100ms page load speeds during extreme traffic spikes.',
    capabilities: [
      'Composable Headless Commerce Architecture',
      'Real-Time Unified Inventory Synchronization',
      'AI Recommendation & Personalization',
      'Omnichannel POS Gateway Integration',
      'Peak Surge Elastic Auto-Scaling'
    ],
    deliverables: [
      { title: 'Composable Commerce Storefront', desc: 'Next.js & MACH architecture delivering sub-100ms page loads and 99.999% peak availability.' },
      { title: 'Unified Inventory Engine', desc: 'Real-time inventory fabric synchronizing warehouse stock and POS terminals across 500+ retail stores.' },
      { title: 'Personalization AI Engine', desc: 'Real-time machine learning recommendation engine boosting average order value (AOV) by 24%.' },
      { title: 'Global Checkout Gateway', desc: 'Multi-currency, localized payment gateway processing peak Black Friday loads without dropouts.' }
    ],
    metrics: [
      { value: 'Sub-100ms', label: 'Page Load Speed' },
      { value: '24%', label: 'Higher AOV' },
      { value: '99.999%', label: 'Peak Uptime' }
    ]
  },
  {
    slug: 'healthcare-life-sciences',
    title: 'Healthcare, BioTech & Life Sciences',
    shortTitle: 'Healthcare & Life Sciences',
    icon: 'HeartPulse',
    tag: 'Vertical 05',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=srgb&fm=jpg&q=85',
    summary: 'FHIR interoperability data fabrics, HIPAA/GDPR clinical AI, telemetry device integration, and research computing.',
    quote: '"Unifying clinical health data into secure, FHIR-compliant fabrics that accelerate patient outcomes and medical research."',
    overview: 'Our Healthcare & Life Sciences practice builds HIPAA and GDPR compliant clinical data fabrics for hospital networks, pharmaceutical leaders, and medical device manufacturers. We streamline patient record interoperability and empower clinical teams with real-time diagnostic analytics.',
    capabilities: [
      'FHIR & HL7 Standard Data Interoperability',
      'HIPAA & GDPR Compliant Medical Fabrics',
      'Clinical AI & Diagnostic Support Systems',
      'Medical IoT Telemetry Device Pipelines',
      'Genomic Computing & Research Infrastructure'
    ],
    deliverables: [
      { title: 'FHIR Interoperability Hub', desc: 'Centralized API gateway unifying electronic health records (EHR) across disparate hospital systems.' },
      { title: 'Clinical AI Diagnostic Engine', desc: 'Machine learning model analyzing medical imaging and patient vitals with 99.1% diagnostic precision.' },
      { title: 'HIPAA Enclave Architecture', desc: 'Encrypted storage and processing enclaves meeting strict international health data privacy laws.' },
      { title: 'Patient Telemetry Platform', desc: 'Real-time ingestion pipeline monitoring remote medical devices and alerting care teams instantly.' }
    ],
    metrics: [
      { value: '100%', label: 'FHIR Compliant' },
      { value: '99.1%', label: 'AI Diagnostic Precision' },
      { value: 'Zero', label: 'PHI Leakages' }
    ]
  },
  {
    slug: 'cloud-infrastructure',
    title: 'Cloud Providers, Telecom & Edge Infrastructure',
    shortTitle: 'Cloud & Infrastructure',
    icon: 'Cloud',
    tag: 'Vertical 06',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?crop=entropy&cs=srgb&fm=jpg&q=85',
    summary: 'Sovereign landing zones, 5G edge computing clusters, bare-metal container fabrics, and zero-trust SRE automation.',
    quote: '"Architecting low-latency edge compute clusters and sovereign cloud infrastructure for telecommunications leaders."',
    overview: 'We work with telecommunication operators, data center owners, and cloud service providers to build sovereign edge infrastructure. We design bare-metal Kubernetes orchestration, 5G network slicing, and zero-trust SRE automation for sub-5ms edge applications.',
    capabilities: [
      '5G Edge Computing & Network Slicing',
      'Sovereign Infrastructure Landing Zones',
      'Bare-Metal Kubernetes Orchestration',
      'Zero-Trust Telecom SRE Automation',
      'Multi-Tenant Infrastructure Isolation'
    ],
    deliverables: [
      { title: '5G Edge Compute Cluster', desc: 'Distributed Kubernetes edge deployment running latency-critical AI workloads at 5G cell towers.' },
      { title: 'Sovereign Telecom Zone', desc: 'Air-gapped cloud infrastructure meeting strict national telecommunication security standards.' },
      { title: 'Automated SRE Engine', desc: 'Self-healing infrastructure scripts reducing un-planned network outages by 72%.' },
      { title: 'Bare-Metal Container Fabric', desc: 'High-density Kubernetes platform running resource-intensive telco workload functions.' }
    ],
    metrics: [
      { value: '99.999%', label: 'Uptime SLA' },
      { value: '<5ms', label: 'Edge Latency' },
      { value: 'Zero', label: 'Data Loss Failover' }
    ]
  },
  {
    slug: 'cybersecurity-defense',
    title: 'Defense, Public Sector & Cybersecurity',
    shortTitle: 'Cybersecurity & Defense',
    icon: 'ShieldCheck',
    tag: 'Vertical 07',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?crop=entropy&cs=srgb&fm=jpg&q=85',
    summary: 'Defense-grade zero-trust identity, national security SOC perimeters, sovereign citizen clouds, and threat hunting.',
    quote: '"Protecting sovereign government clouds and defense supply lines with military-grade zero-trust security perimeters."',
    overview: 'Our Defense & Public Sector practice delivers sovereign cloud environments, zero-trust credential systems, and Security Operations Center (SOC) defense infrastructure for government ministries, defense contractors, and municipal services.',
    capabilities: [
      'Sovereign Government Cloud Enclaves',
      'Military-Grade Zero-Trust Identity (PKI/CAC)',
      'National SOC Threat Detection & SIEM',
      'Air-Gapped Network Micro-segmentation',
      'Public Sector Citizen Digital Portals'
    ],
    deliverables: [
      { title: 'Sovereign Government Enclave', desc: 'FedRAMP / NIS2 compliant cloud environment isolated from public internet traffic.' },
      { title: 'Zero-Trust Identity Infrastructure', desc: 'Hardware-backed multi-factor authentication securing 180,000+ government personnel credentials.' },
      { title: 'National Cyber SOC Playbooks', desc: 'Automated threat hunting rules and incident response protocols for state critical infrastructure.' },
      { title: 'Secure Citizen Service Portal', desc: 'High-availability public cloud portal delivering encrypted government services to millions of citizens.' }
    ],
    metrics: [
      { value: '180K', label: 'Users Secured' },
      { value: 'Military', label: 'Grade PKI' },
      { value: '100%', label: 'FedRAMP/NIS2' }
    ]
  },
  {
    slug: 'energy-smart-grid',
    title: 'Energy, Utilities & Smart Grid Infrastructure',
    shortTitle: 'Energy & Smart Grid',
    icon: 'Cloud',
    tag: 'Vertical 08',
    image: 'https://images.unsplash.com/photo-1601785491008-d1153dfadd57?crop=entropy&cs=srgb&fm=jpg&q=85',
    summary: 'Sub-10ms grid telemetry, predictive load forecasting ML, smart meter data fabrics, and energy transition platforms.',
    quote: '"Architecting real-time telemetry fabrics and predictive AI to stabilize smart power grids and accelerate energy transition."',
    overview: 'Our Energy & Utilities practice engineers real-time telemetry streaming platforms, predictive load management ML models, and SCADA security perimeters for power grid operators, renewable energy producers, and public utility companies.',
    capabilities: [
      'Real-Time Smart Grid Telemetry (Sub-10ms)',
      'Predictive Load & Generation Forecasting ML',
      'SCADA & Industrial Control System SecOps',
      'Renewable Energy Battery Storage Fabric',
      'Smart Meter Meter-to-Cash Data Pipeline'
    ],
    deliverables: [
      { title: 'Grid Telemetry Control Engine', desc: 'High-throughput event streaming platform ingesting sub-10ms telemetry from 2M+ smart grid nodes.' },
      { title: 'AI Load Forecasting Engine', desc: 'Predictive ML model forecasting peak regional power demand with 99.4% accuracy.' },
      { title: 'SCADA Security Shield', desc: 'Zero-trust network micro-segmentation protecting electric substation controllers from cyber threats.' },
      { title: 'Renewable Storage Integrator', desc: 'Orchestration platform managing battery storage discharge cycles during peak grid loads.' }
    ],
    metrics: [
      { value: '2M+', label: 'Grid Nodes' },
      { value: 'Sub-10ms', label: 'Telemetry Stream' },
      { value: '99.4%', label: 'Forecast Accuracy' }
    ]
  }
];

export function getIndustryBySlug(slug) {
  return INDUSTRIES.find((i) => i.slug === slug);
}
