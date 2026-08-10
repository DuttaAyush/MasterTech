import { Landmark, Cpu, Truck, ShoppingBag, HeartPulse, Cloud, ShieldCheck } from 'lucide-react';

export const INDUSTRIES = [
  {
    slug: 'bfsi',
    title: 'Banking, Financial Services & Insurance (BFSI)',
    shortTitle: 'BFSI & Capital Markets',
    icon: Landmark,
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
    title: 'Enterprise AI & Autonomous Systems',
    shortTitle: 'AI Solutions',
    icon: Cpu,
    tag: 'Vertical 02',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?crop=entropy&cs=srgb&fm=jpg&q=85',
    summary: 'Sovereign LLM retrieval fabrics, multi-agent orchestration, and production AI governance for high-consequence industries.',
    quote: '"Transitioning enterprise AI from sandbox experiments to sovereign, audited production fabrics."',
    overview: 'Our Enterprise AI practice deploys private retrieval-augmented generation (RAG) architectures, multi-agent automated workflows, and governance safety perimeters for organizations with zero tolerance for data leaks or hallucinations.',
    capabilities: [
      'Isolated Private Vector Search (RAG)',
      'Multi-Agent Workflow Orchestration',
      'LLM Evaluation & Safety Scoring',
      'Enterprise Knowledge Graph Fusion',
      'Sovereign Infrastructure Hosting'
    ],
    deliverables: [
      { title: 'Private Enterprise Search RAG', desc: 'On-premise or VPC vector search pipeline querying millions of corporate contracts with sub-second response.' },
      { title: 'Autonomous Agent Mesh', desc: 'Orchestrated AI agents handling complex multi-step data extraction, verification, and report synthesis.' },
      { title: 'AI Hallucination Guardrail', desc: 'Automated evaluation proxy scoring model confidence before displaying outputs to end users.' },
      { title: 'Custom Model Fine-Tuning', desc: 'Domain-adapted open-source LLMs tuned specifically on proprietary industry jargon and taxonomy.' }
    ],
    metrics: [
      { value: '100%', label: 'Sovereign Data' },
      { value: 'Sub-sec', label: 'Query Response' },
      { value: '0', label: 'Data Leak Risk' }
    ]
  },
  {
    slug: 'logistics-supply-chain',
    title: 'Logistics, Freight & Supply Chain Management',
    shortTitle: 'Logistics & Supply Chain',
    icon: Truck,
    tag: 'Vertical 03',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?crop=entropy&cs=srgb&fm=jpg&q=85',
    summary: 'Autonomous fleet tracking, low-latency warehouse robotics, predictive inventory routing, and cold-chain monitoring.',
    quote: '"Building real-time visibility platforms that optimize global freight networks and eliminate warehouse latency."',
    overview: 'We design high-consequence supply chain software for global freight operators, maritime carriers, and third-party logistics (3PL) providers. Our platforms ingest millions of IoT telemetry streams to optimize route selection, warehouse robotics, and cold-chain compliance.',
    capabilities: [
      'IoT Fleet Telemetry Streaming',
      'Dynamic Route Optimization Engines',
      'Robotics & Warehouse Automation',
      'Cold-Chain Temperature Monitoring',
      'Predictive Bottleneck Forecasting'
    ],
    deliverables: [
      { title: 'Global Visibility Control Tower', desc: 'Central dashboard tracking multimodal shipments across ocean, air, rail, and last-mile transport.' },
      { title: 'Automated Route Optimizer', desc: 'Algorithmic dispatch engine reducing total fleet fuel expenditure and delivery delays by 22%.' },
      { title: 'Warehouse IoT Mesh', desc: 'Edge computing mesh controlling automated guided vehicles (AGVs) and conveyor systems.' },
      { title: 'Cold-Chain Audit System', desc: 'Immutable temperature monitoring logging pharmaceutical and perishable food compliance.' }
    ],
    metrics: [
      { value: '22%', label: 'Fuel Saved' },
      { value: '99.8%', label: 'On-Time Tracking' },
      { value: '100K+', label: 'Connected Assets' }
    ]
  },
  {
    slug: 'retail-commerce',
    title: 'Retail, Consumer Goods & Unified Commerce',
    shortTitle: 'Retail & Unified Commerce',
    icon: ShoppingBag,
    tag: 'Vertical 04',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?crop=entropy&cs=srgb&fm=jpg&q=85',
    summary: 'Omnichannel personalization engines, real-time demand forecasting, dynamic pricing algorithms, and micro-fulfillment.',
    quote: '"Unifying digital ecommerce with physical retail inventory to deliver sub-second customer experiences at peak scale."',
    overview: 'We empower retail brands and multinational consumer goods companies to scale their ecommerce platforms for Cyber Week volumes, unify online and in-store inventory, and deploy AI-driven dynamic pricing models.',
    capabilities: [
      'Headless & Composable Commerce',
      'Real-Time Unified Inventory Engine',
      'AI Algorithmic Dynamic Pricing',
      'Personalization & Recommendation AI',
      'Peak Volume Load Engineering'
    ],
    deliverables: [
      { title: 'Composable Commerce Fabric', desc: 'API-first microservices storefront decoupling frontend UX from legacy ERP backends.' },
      { title: 'Unified Inventory Stream', desc: 'Real-time stock ledger syncing physical store inventory with digital shopping carts in under 50ms.' },
      { title: 'Algorithmic Pricing Engine', desc: 'Dynamic price adjustment engine evaluating competitor trends and demand elasticity continuously.' },
      { title: 'Black Friday Resilience Kit', desc: 'Load-tested auto-scaling infrastructure sustaining 500,000 concurrent checkout sessions.' }
    ],
    metrics: [
      { value: '500K', label: 'Concurrent Sessions' },
      { value: '<50ms', label: 'Sync Latency' },
      { value: '27%', label: 'Cart Value Uplift' }
    ]
  },
  {
    slug: 'healthcare-life-sciences',
    title: 'Healthcare, MedTech & Life Sciences',
    shortTitle: 'Healthcare & Life Sciences',
    icon: HeartPulse,
    tag: 'Vertical 05',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?crop=entropy&cs=srgb&fm=jpg&q=85',
    summary: 'HIPAA/GDPR-compliant clinical data fabrics, diagnostic AI pipelines, patient record interoperability, and genomic compute.',
    quote: '"Unifying patient data fabrics across regional hospital networks while upholding defense-grade privacy standards."',
    overview: 'We engineer HIPAA and GDPR-compliant health data architectures for hospital systems, medical device manufacturers, and biopharma research labs. Our platforms unify electronic health records (EHR), streamline clinical trials, and accelerate AI diagnostics.',
    capabilities: [
      'Clinical Data Fabric Interoperability (FHIR/HL7)',
      'HIPAA & GDPR Compliant Cloud Enclaves',
      'Diagnostic AI & Image Pipeline Compute',
      'Real-Time Patient Monitoring Mesh',
      'Clinical Trial Data Management'
    ],
    deliverables: [
      { title: 'National Health Data Fabric', desc: 'Interoperable patient data repository unifying records across 220+ regional hospital facilities.' },
      { title: 'Diagnostic Image AI Pipeline', desc: 'Accelerated GPU compute cluster processing radiology DICOM scans with automated triage tags.' },
      { title: 'FHIR API Integration Gateway', desc: 'Secure HL7/FHIR microservices API allowing authorized third-party medical apps instant data access.' },
      { title: 'Biopharma Research Sandbox', desc: 'Isolated multi-tenant cloud environment for high-throughput genomic data analysis.' }
    ],
    metrics: [
      { value: '11.4M', label: 'Records Unified' },
      { value: '220+', label: 'Hospitals Linked' },
      { value: '100%', label: 'HIPAA Compliant' }
    ]
  },
  {
    slug: 'cloud-infrastructure',
    title: 'Cloud, Telco & Critical Infrastructure',
    shortTitle: 'Cloud & Infrastructure',
    icon: Cloud,
    tag: 'Vertical 06',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=srgb&fm=jpg&q=85',
    summary: 'High-density cloud landing zones, sovereign data center fabrics, 5G edge computing, and SRE resilience.',
    quote: '"Architecting sovereign data center fabrics and 5G edge clouds engineered for 99.999% continuous operational uptime."',
    overview: 'We build mission-critical cloud infrastructure for telecommunications operators, cloud service providers, and power grid operators. Our engineering teams specialize in bare-metal OpenStack/Kubernetes orchestration, 5G multi-access edge computing (MEC), and disaster recovery.',
    capabilities: [
      'Sovereign Data Center & Hybrid Cloud',
      'Bare-Metal Kubernetes Orchestration',
      '5G Multi-Access Edge Computing (MEC)',
      'High-Availability Disaster Recovery',
      'Telco Network Function Virtualization (NFV)'
    ],
    deliverables: [
      { title: 'Sovereign Cloud Landing Zone', desc: 'Isolated multi-region cloud infrastructure ensuring data residence and compliance with national security laws.' },
      { title: '5G Edge Compute Cluster', desc: 'Ultra-low latency micro-data center fabric deploying workloads within 5ms of mobile devices.' },
      { title: 'Autonomous Failover Mesh', desc: 'Multi-datacenter active-active disaster recovery ensuring zero transaction loss during power outages.' },
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
    icon: ShieldCheck,
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
    icon: Cloud,
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
