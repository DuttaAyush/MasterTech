import { useState } from 'react';
import './BusinessFunction.css';

const questionPositions = [
    { left: "37%", top: "22%" },
    { left: "37%", top: "44%" },
    { left: "37%", top: "66%" },

    { left: "53%", top: "18%" },
    { left: "53%", top: "34%" },
    { left: "53%", top: "50%" },
    { left: "53%", top: "66%" },

    { left: "69%", top: "14%" },
    { left: "69%", top: "28%" },
    { left: "69%", top: "42%" },
    { left: "69%", top: "56%" },
    { left: "69%", top: "70%" },
];

const businessModes = {
    strategy: [
        "What macro signals should we monitor closely?",
        "How should we model best and worst-case scenarios?",
        "Where to deploy capital for long-term returns?",
        "What shifts could redefine our category?",
        "How do I find good M&A targets?",
        "Which disruptive scenarios need action now?",
        "What is our core competitive advantage?",
        "How do we future-proof our business model?",
        "Are there emerging markets we should enter?",
        "What geopolitical risks affect our strategy?",
        "How do we balance short-term wins with long-term vision?"
    ],
    innovation: [
        "How can I be faster and more dynamic in product development?",
        "Where will unmet needs be?",
        "What innovations can disrupt my business?",
        "What can I learn from other industries?",
        "What are my competitors planning to do?",
        "What are the capabilities of start-ups in my industry?",
        "When to introduce new technology?",
        "Where will regulations close or open my markets?",
        "How do I find good M&A targets?",
        "Finding new market segments?",
        "Where can I disrupt other industries?"
    ],
    growth: [
        "Which segments have the highest growth potential?",
        "How should we sequence regional expansion?",
        "Where are competitor gaps we can capture?",
        "What pricing strategy should we test first?",
        "Finding new market segments?",
        "Where can I disrupt other industries?",
        "How do we scale our marketing effectively?",
        "What new distribution channels exist?",
        "How can we improve customer retention?",
        "Are there strategic partnerships to fuel growth?",
        "What is the fastest path to market dominance?"
    ],
    operations: [
        "How can I optimize supply continuity?",
        "Which processes are ready for automation?",
        "Where are the bottlenecks in our supply chain?",
        "How do we reduce manufacturing costs?",
        "What technologies improve operational efficiency?",
        "How can we ensure quality at scale?",
        "How to implement lean manufacturing principles?",
        "What are the best practices for inventory management?",
        "How to adapt to changing logistics costs?",
        "Can we nearshore or reshore production?",
        "How do we build a more resilient operation?"
    ],
    sustainability: [
        "How do I decarbonize without slowing growth?",
        "Where can circular design reduce cost and waste?",
        "Which regulations will impact my roadmap first?",
        "How should we prioritize climate-tech investments?",
        "How do we build measurable ESG outcomes?",
        "What partnerships can accelerate net-zero delivery?",
        "How to minimize our water and energy footprint?",
        "Can we transition to 100% renewable energy?",
        "How do we ensure ethical sourcing?",
        "What is the life-cycle impact of our products?",
        "How do we communicate our sustainability efforts?"
    ]
};

function BusinessFunction() {
    const [activeId, setActiveId] = useState('strategy');

    const questions = businessModes[activeId];
    const gridQuestions = Array.from({ length: questionPositions.length }, (_, i) => questions[i % questions.length]);

    return (
        <section className="business-function-section">
            <div className="bf-container-wrapper" style={{ overflowX: 'auto', width: '100%' }}>
                <div className="bf-container">
                    <div className="bf-content-scaler">
                    
                    {/* TOP FLOW */}
                    <div className="bf-top-flow">
                        <span>Insights</span>
                        <div className="bf-flow-line"></div>
                        <span>Strategize</span>
                        <div className="bf-flow-line active"></div>
                        <span>Implement Disruption</span>

                        <span className="bf-arrow">→</span>
                    </div>

                    {/* PROPAGATION */}
                    <div className="bf-propagation">
                        <div className="bf-propagation-bg"></div>
                        <div className="bf-h-line bf-h1"></div>
                        <div className="bf-h-line bf-h2"></div>
                        <div className="bf-mid-line"></div>
                        <div className="bf-h-line bf-h3"></div>
                        <div className="bf-h-line bf-h4"></div>
                        <div className="bf-vcurve bf-v1"></div>
                        <div className="bf-vcurve bf-v2"></div>
                    </div>

                    {/* HANDLE */}
                    <div className="bf-handle"></div>

                    {/* MAGNIFIER */}
                    <div className="bf-magnifier">
                        <div 
                            className={`bf-ring ${activeId === 'sustainability' ? 'active-sustainability' : ''}`}
                            onClick={() => setActiveId('sustainability')}
                        >
                            <svg width="430" height="430" viewBox="0 0 430 430" className="bf-sustain-svg" style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', zIndex: 10 }}>
                                <path id="sustainArc" d="M 19.35 215 A 195.65 195.65 0 0 1 410.65 215" fill="none" />
                                <text>
                                    <textPath href="#sustainArc" startOffset="50%" textAnchor="middle" fill="#ffffff" dominantBaseline="middle" style={{ fontSize: '15px', fontWeight: '800', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                                        Sustainability
                                    </textPath>
                                </text>
                            </svg>
                            <div className="bf-inner">
                                <div className="bf-cross-v"></div>
                                <div className="bf-cross-h"></div>
                                
                                <div 
                                    className={`bf-cell ${activeId === 'strategy' ? 'black' : ''}`}
                                    onClick={(e) => { e.stopPropagation(); setActiveId('strategy'); }}
                                >
                                    Strategy &<br />Futures
                                </div>
                                <div 
                                    className={`bf-cell ${activeId === 'innovation' ? 'black' : ''}`}
                                    onClick={(e) => { e.stopPropagation(); setActiveId('innovation'); }}
                                >
                                    Research<br />Development<br />& Innovation
                                </div>
                                <div 
                                    className={`bf-cell ${activeId === 'growth' ? 'black' : ''}`}
                                    onClick={(e) => { e.stopPropagation(); setActiveId('growth'); }}
                                >
                                    Growth &<br />Market<br />Development
                                </div>
                                <div 
                                    className={`bf-cell ${activeId === 'operations' ? 'black' : ''}`}
                                    onClick={(e) => { e.stopPropagation(); setActiveId('operations'); }}
                                >
                                    Manufacturing,<br />Production &<br />Logistics
                                </div>
                            </div>
                            <div className="bf-center">
                                Your<br />Business<br />Objectives
                            </div>
                        </div>
                    </div>

                    {/* QUESTIONS */}
                    <div className="bf-questions">
                        {gridQuestions.map((q, i) => (
                            <div 
                                key={`${activeId}-${i}`} 
                                className="bf-q" 
                                style={{ 
                                    left: questionPositions[i]?.left, 
                                    top: questionPositions[i]?.top,
                                    width: questionPositions[i]?.width 
                                }}
                            >
                                {q}
                            </div>
                        ))}
                    </div>

                    {/* SIDEBAR */}
                    <div className="bf-sidebar">
                        <div className="bf-sidebar-title">
                            FUTURE OF
                        </div>
                        <div className="bf-side">
                            <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.8">
                                <path d="M5 20h14M7 20V9l5-4 5 4v11" />
                            </svg>
                            Industries
                        </div>
                        <div className="bf-side">
                            <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.8">
                                <rect x="7" y="7" width="10" height="10" />
                            </svg>
                            Technologies
                        </div>
                        <div className="bf-side">
                            <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.8">
                                <circle cx="12" cy="12" r="8" />
                                <path d="M12 4v8l6 3" />
                            </svg>
                            Markets
                        </div>
                        <div className="bf-side">
                            <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.8">
                                <path d="M12 4v4M6 20v-4h12v4" />
                            </svg>
                            Business Models
                        </div>
                        <div className="bf-side">
                            <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.8">
                                <path d="M7 7h10M7 17h10" />
                            </svg>
                            Competition
                        </div>
                        <div className="bf-side">
                            <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.8">
                                <path d="M8 4h8v16H8z" />
                            </svg>
                            Regulations
                        </div>
                    </div>
                    {/* TIMELINE */}
                    <div className="bf-timeline">
                        <span>Short Term</span>
                        <div className="bf-tline"></div>
                        <span>Medium Term</span>
                        <div className="bf-tline"></div>
                        <span>Long Term</span>
                        <span className="bf-tar">→</span>
                    </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default BusinessFunction;


