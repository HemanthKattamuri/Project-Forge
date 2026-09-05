// ProjectForge AI - Multi-Agent AI Service Layer & Simulation Engine

const AIEngine = {
  apiKey: localStorage.getItem('pf_gemini_api_key') || ' ',

  setApiKey(key) {
    this.apiKey = (key || '').trim();
    localStorage.setItem('pf_gemini_api_key', this.apiKey);
  },

  getApiKey() {
    return this.apiKey || ' ';
  },

  // 1. Profile Analyzer & Project DNA Generator
  analyzeProfile(profile) {
    const hasPython = profile.skills.some(s => s.name.toLowerCase().includes('python'));
    const hasML = profile.skills.some(s => s.name.toLowerCase().includes('machine learning') || s.name.toLowerCase().includes('deep learning'));
    const hasWeb = profile.skills.some(s => s.name.toLowerCase().includes('react') || s.name.toLowerCase().includes('next'));
    
    let skillFit = 85;
    if (hasPython && hasML) skillFit += 7;
    if (hasWeb) skillFit += 3;
    skillFit = Math.min(skillFit, 98);

    let careerFit = profile.careerGoal.includes('AI') || profile.careerGoal.includes('ML') ? 96 : 89;
    let innovation = profile.projectMode === 'Research Mode' || profile.projectMode === 'Hackathon Mode' ? 94 : 87;
    let impact = profile.interests.includes('Healthcare') || profile.interests.includes('Environment') ? 95 : 90;
    
    // Feasibility adjustment by duration & team size
    let feasibility = 90;
    if (profile.constraints.duration.includes('4 weeks') && profile.constraints.teamSize === 1) {
      feasibility = 74;
    } else if (profile.constraints.duration.includes('12 weeks')) {
      feasibility = 92;
    }

    const overallScore = Math.round((skillFit * 0.25) + (careerFit * 0.25) + (innovation * 0.2) + (impact * 0.15) + (feasibility * 0.15));

    return {
      skillFit,
      careerFit,
      innovation,
      impact,
      feasibility,
      overallScore,
      summary: `Your profile combines strong ${hasML ? 'Machine Learning pipeline' : 'software engineering'} skills with a ${profile.constraints.duration} timeline. Highly calibrated for real-world ${profile.interests[0] || 'applied AI'} impact.`
    };
  },

  // 1.5 Tailored Idea Generator (Interests, Skills, Weeks, Budget, Team Size, Outcome)
  generateTailoredIdeas(params) {
    const domain = params.customDomain?.trim() || params.domain || "Healthcare & Bio-AI";
    const skills = params.skills && params.skills.length > 0 ? params.skills : ["Python", "Machine Learning", "FastAPI", "React"];
    const weeks = params.weeks || "12 Weeks";
    const budget = params.budget || "₹0 (Free Tier / Open Source)";
    const teamSize = params.teamSize || "2-3 Students";
    const outcome = params.outcome || "Top-Scoring Capstone";

    const hasVision = skills.some(s => /opencv|vision|yolo|image|cnn/i.test(s));
    const hasLLM = skills.some(s => /langchain|llm|nlp|bert|gemini|rag/i.test(s));
    const hasIoT = skills.some(s => /iot|arduino|raspberry|sensor|embedded/i.test(s));
    const hasWeb = skills.some(s => /react|vue|angular|node|flutter|next/i.test(s));

    // Domain templates tailored to parameters
    let idea1, idea2, idea3;

    if (/health|med|clinic|patient/i.test(domain)) {
      idea1 = {
        id: "idea-health-mvp-" + Date.now(),
        pathType: "MVP Fast-Track",
        title: "AI-Powered Clinical Triage & Queue Wait-Time Predictor",
        shortCode: "CLINIC-AI",
        domain: "Healthcare & MedTech",
        matchScore: 95,
        summary: `Streamlined patient admittance forecasting using XGBoost and real-time triage scoring. Built to run with zero cloud cost within ${weeks}.`,
        problemStatement: "Hospital emergency wings suffer 2-hour wait times due to blind triage queues without predictive admission modeling.",
        features: {
          mvp: ["Emergency severity index (ESI) automated score calculator", "Next 2-hour patient arrival time-series prediction", "Lightweight triage priority queue dashboard"],
          advanced: ["Automated SMS dispatch for waiting patients", "Synthetic 20k patient records benchmark generator"]
        },
        techStack: [skills[0] || "Python", "XGBoost", "FastAPI", "React", "SQLite / PostgreSQL"],
        timeline: `${weeks} (Phased 1-to-1 Sprint)`,
        budgetFit: budget,
        teamSize: teamSize,
        noveltyScore: 88,
        feasibilityScore: 98
      };
      idea2 = {
        id: "idea-health-rec-" + Date.now(),
        pathType: "Industry-Grade (Recommended)",
        title: "Adaptive Multi-Modal Patient Deterioration & Vital Stream Monitor",
        shortCode: "HEALTH-IQ",
        domain: "Healthcare & MedTech",
        matchScore: 98,
        summary: `Full-stack ICU & ward telemetry platform combining real-time vital streams, anomaly detection, and LLM-generated clinical shift briefings.`,
        problemStatement: "Bedside monitors sound frequent false alarms (alarm fatigue) and lack early multi-vital correlation to forecast sudden sepsis or respiratory failure.",
        features: {
          mvp: ["PhysioNet synthetic vital stream generator (Heart rate, SpO2, Blood Pressure)", "Temporal LSTM anomaly detector with 91%+ F1 score", "WebSocket live bedside alert telemetry dashboard"],
          advanced: ["Gemini / Mistral clinical handover summary generator", "Doctor on-call escalation routing engine with zero data leakage"]
        },
        techStack: ["Python 3.11", "PyTorch / LSTM", "FastAPI", "React / Tailwind", "PostgreSQL", "Redis", "Docker"],
        timeline: `${weeks} (Structured 5-Phase Roadmap)`,
        budgetFit: `${budget} (Fully optimized for Colab & Local Docker)`,
        teamSize: teamSize,
        noveltyScore: 94,
        feasibilityScore: 92
      };
      idea3 = {
        id: "idea-health-res-" + Date.now(),
        pathType: "Research & Patent Grade",
        title: "Federated Privacy-Preserving Bio-Signal Diagnostic Network",
        shortCode: "BIO-FED",
        domain: "Healthcare & MedTech",
        matchScore: 92,
        summary: `Decentralized federated learning framework allowing cross-hospital diagnostic model training without centralizing private EHR records.`,
        problemStatement: "Strict HIPAA/GDPR data regulations prevent hospitals from aggregating rare diagnostic data, resulting in underperforming specialized AI models.",
        features: {
          mvp: ["PySyft / Flower federated training simulation across 3 simulated clinic nodes", "Differential privacy gradient clipping module", "Global model convergence analytics board"],
          advanced: ["Adversarial poisoning defense & Byzantine node detection", "IEEE-formatted LaTeX benchmark table exporter"]
        },
        techStack: ["Python", "Flower FL", "PyTorch", "FastAPI", "Docker Compose"],
        timeline: `${weeks} (Research Milestone Track)`,
        budgetFit: budget,
        teamSize: teamSize,
        noveltyScore: 97,
        feasibilityScore: 84
      };
    } else if (/fintech|fraud|bank|crypto|trade/i.test(domain)) {
      idea1 = {
        id: "idea-fin-mvp-" + Date.now(),
        pathType: "MVP Fast-Track",
        title: "Real-Time Micro-Transaction Anomaly & Card Fraud Detector",
        shortCode: "FRAUD-SHIELD",
        domain: "FinTech & Cyber AI",
        matchScore: 94,
        summary: `High-throughput transaction scoring engine utilizing LightGBM with sub-50ms inference latency for instant UPI/card risk flags.`,
        problemStatement: "Payment gateways lose millions to synthetic identity and chargeback fraud because rule-based threshold checks miss multi-account velocity rings.",
        features: {
          mvp: ["Kaggle Credit Card & Synthetic UPI streaming generator", "LightGBM risk classifier trained with SMOTE balancing", "Live fraud analyst transaction monitoring terminal"],
          advanced: ["Geo-velocity anomaly trigger (impossible travel speed)", "Automated compliance audit log exporter"]
        },
        techStack: ["Python", "LightGBM", "FastAPI", "React", "Redis"],
        timeline: `${weeks} (Sprint Schedule)`,
        budgetFit: budget,
        teamSize: teamSize,
        noveltyScore: 89,
        feasibilityScore: 96
      };
      idea2 = {
        id: "idea-fin-rec-" + Date.now(),
        pathType: "Industry-Grade (Recommended)",
        title: "Graph-Neural Anti-Money Laundering & Mule Account Ring Hunter",
        shortCode: "GRAPH-AML",
        domain: "FinTech & Fraud Intelligence",
        matchScore: 97,
        summary: `Graph Convolutional Network (GCN) platform that uncovers complex circular fund routing and mule account syndicates across multi-hop transactions.`,
        problemStatement: "Modern money laundering obfuscates illegal transactions across layers of intermediary shell accounts that simple relational SQL queries cannot trace.",
        features: {
          mvp: ["Neo4j / NetworkX graph transaction database with 100k synthetic nodes", "PyTorch Geometric (PyG) Graph Convolutional classifier", "Interactive 3D graph visualizer highlighting circular money rings"],
          advanced: ["LLM-powered Suspicious Activity Report (SAR) auto-generation", "Real-time webhook integration for instant account freezing"]
        },
        techStack: ["Python", "PyTorch Geometric", "Neo4j", "FastAPI", "React Force-Graph", "Docker"],
        timeline: `${weeks} (5-Phase Production Sequence)`,
        budgetFit: budget,
        teamSize: teamSize,
        noveltyScore: 96,
        feasibilityScore: 91
      };
      idea3 = {
        id: "idea-fin-res-" + Date.now(),
        pathType: "Research & Patent Grade",
        title: "Neuro-Symbolic Explainable Credit Risk & Fair Lending Oracle",
        shortCode: "FAIR-CREDIT",
        domain: "FinTech & AI Ethics",
        matchScore: 91,
        summary: `Ethical AI underwriting engine combining deep ensemble scoring with symbolic constraint logic and SHAP counterfactual explanations for fair lending.`,
        problemStatement: "Black-box AI credit scoring introduces demographic bias and fails regulatory compliance due to inability to provide recourse-oriented explanations.",
        features: {
          mvp: ["Fairness-aware disparate impact mitigation pipeline", "SHAP tree explainer with 'What-If I had higher savings' counterfactual generator", "Interactive borrower empowerment transparency portal"],
          advanced: ["Adversarial debiasing layer", "Verifiable mathematical fairness certificate generator"]
        },
        techStack: ["Python", "XGBoost", "SHAP / DiCE", "FastAPI", "React"],
        timeline: `${weeks} (Research Track)`,
        budgetFit: budget,
        teamSize: teamSize,
        noveltyScore: 96,
        feasibilityScore: 88
      };
    } else if (/agri|crop|farm|soil/i.test(domain)) {
      idea1 = {
        id: "idea-agri-mvp-" + Date.now(),
        pathType: "MVP Fast-Track",
        title: "AI Crop Disease Diagnostic & Treatment Advisor",
        shortCode: "AGRI-CURE",
        domain: "Smart Agriculture",
        matchScore: 93,
        summary: `Mobile-ready leaf pathology classifier using MobileNetV3 that detects 38 crop diseases and provides localized organic remedy steps.`,
        problemStatement: "Smallholder farmers lose up to 35% of crop yields because agricultural extension officers cannot visit remote fields during initial outbreak stages.",
        features: {
          mvp: ["PlantVillage dataset model detecting 38 leaf diseases with 94%+ accuracy", "Lightweight offline-first web interface", "Remediation guide with dosage calculators"],
          advanced: ["Multi-language audio voice advisor", "Weather integration for fungal spore risk alerts"]
        },
        techStack: ["Python", "TensorFlow / PyTorch", "FastAPI", "React / PWA", "SQLite"],
        timeline: `${weeks} (Rapid Track)`,
        budgetFit: budget,
        teamSize: teamSize,
        noveltyScore: 87,
        feasibilityScore: 97
      };
      idea2 = {
        id: "idea-agri-rec-" + Date.now(),
        pathType: "Industry-Grade (Recommended)",
        title: "Edge-AI Smart Irrigation & Hyper-Local Yield Optimization Engine",
        shortCode: "SMART-AGRI",
        domain: "Smart Agriculture & IoT",
        matchScore: 98,
        summary: `Precision farming platform combining low-cost soil moisture sensors, satellite vegetation indices (NDVI), and predictive micro-climate AI to save 40% water.`,
        problemStatement: "Flood irrigation and generic watering schedules deplete groundwater tables and cause fertilizer leaching without improving crop yield.",
        features: {
          mvp: ["Multi-sensor telemetry ingestion (NPK, Soil Moisture, Temp, Humidity)", "Evapotranspiration (ET0) predictive watering scheduling model", "Interactive farmer command dashboard with automated valve toggles"],
          advanced: ["Satellite Sentinel-2 NDVI imagery overlay", "SMS/WhatsApp automated irrigation trigger alerts"]
        },
        techStack: ["Python", "FastAPI", "Scikit-Learn", "React", "MQTT / WebSockets", "PostgreSQL", "Docker"],
        timeline: `${weeks} (Full Capstone Implementation)`,
        budgetFit: budget,
        teamSize: teamSize,
        noveltyScore: 95,
        feasibilityScore: 93
      };
      idea3 = {
        id: "idea-agri-res-" + Date.now(),
        pathType: "Research & Patent Grade",
        title: "Autonomous Drone Multi-Spectral Aerial Pest Swarm Mapping System",
        shortCode: "AERO-FARM",
        domain: "Smart Agriculture & Robotics",
        matchScore: 91,
        summary: `Aerial spatial analytics platform processing drone orthomosaic imagery with YOLOv8 to generate geo-tagged precision pesticide prescription maps.`,
        problemStatement: "Blanket pesticide spraying wastes chemicals, harms soil ecology, and increases operational costs when pest infestations occur in isolated clusters.",
        features: {
          mvp: ["Synthetic aerial field image stitching & tiling pipeline", "YOLOv8 custom-trained pest & weed segmentation model", "GeoJSON variable-rate chemical prescription map exporter"],
          advanced: ["3D crop canopy volume estimation", "Autonomous flight waypoint route optimizer"]
        },
        techStack: ["Python", "YOLOv8", "OpenCV / GDAL", "FastAPI", "Mapbox GL"],
        timeline: `${weeks} (Advanced Drone Track)`,
        budgetFit: budget,
        teamSize: teamSize,
        noveltyScore: 98,
        feasibilityScore: 82
      };
    } else if (/cyber|security|hack|defense|network/i.test(domain)) {
      idea1 = {
        id: "idea-cyber-mvp-" + Date.now(),
        pathType: "MVP Fast-Track",
        title: "AI Log Anomaly & Brute-Force Intrusion Detection Sentinel",
        shortCode: "CYBER-GUARD",
        domain: "Cyber Defense",
        matchScore: 94,
        summary: `Real-time server authentication log parser using Isolation Forests to detect brute-force attacks and abnormal SSH privilege escalations.`,
        problemStatement: "System administrators are overwhelmed by millions of raw syslog lines and miss zero-day lateral movement until databases are breached.",
        features: {
          mvp: ["Auth.log and Apache log real-time streaming parser", "Unsupervised Isolation Forest outlier detector", "Live security operations console with IP blocking triggers"],
          advanced: ["MITRE ATT&CK technique tag mapping", "Telegram/Slack instant breach alerts"]
        },
        techStack: ["Python", "Scikit-Learn", "FastAPI", "React", "Elasticsearch / SQLite"],
        timeline: `${weeks} (Sprint Schedule)`,
        budgetFit: budget,
        teamSize: teamSize,
        noveltyScore: 88,
        feasibilityScore: 96
      };
      idea2 = {
        id: "idea-cyber-rec-" + Date.now(),
        pathType: "Industry-Grade (Recommended)",
        title: "Autonomous Zero-Trust Network Traffic & Ransomware Lateral Defense",
        shortCode: "ZERO-TRUST",
        domain: "Cyber Defense & Threat Intel",
        matchScore: 98,
        summary: `Deep packet inspection & flow analysis system using 1D-CNN + Autoencoders to detect encrypted ransomware command-and-control channels in real time.`,
        problemStatement: "Encrypted malware payloads bypass traditional signature-based firewalls by masquerading as normal HTTPS/TLS outbound traffic.",
        features: {
          mvp: ["PCAP / CICIDS2017 dataset ingestion pipeline", "Deep Autoencoder detecting statistical entropy & beaconing timing anomalies", "Real-time interactive SOC network topology graph"],
          advanced: ["Automated dynamic firewall rule injection (iptables simulation)", "LLM incident report summarizer with remediation playbooks"]
        },
        techStack: ["Python", "PyTorch", "FastAPI", "React", "WebSockets", "Docker", "Redis"],
        timeline: `${weeks} (Standard 12w Capstone)`,
        budgetFit: budget,
        teamSize: teamSize,
        noveltyScore: 96,
        feasibilityScore: 91
      };
      idea3 = {
        id: "idea-cyber-res-" + Date.now(),
        pathType: "Research & Patent Grade",
        title: "Adversarial Robustness & Model Watermarking Defense Framework",
        shortCode: "AI-SEC-SHIELD",
        domain: "AI Security & Cryptography",
        matchScore: 90,
        summary: `Defense suite protecting production deep learning models against gradient-based adversarial evasion (FGSM, PGD) and model extraction theft.`,
        problemStatement: "Autonomous AI systems deployed in critical infrastructure are vulnerable to imperceptible adversarial noise attacks that cause critical misclassifications.",
        features: {
          mvp: ["Adversarial attack suite (FGSM, PGD, Carlini-Wagner)", "Randomized smoothing & certified defense layer", "Cryptographic watermark verification tool for intellectual property protection"],
          advanced: ["Automated black-box API rate-limiting against model stealing", "IEEE research report generator with perturbation visualizer"]
        },
        techStack: ["Python", "PyTorch / CleverHans", "FastAPI", "React"],
        timeline: `${weeks} (Research Track)`,
        budgetFit: budget,
        teamSize: teamSize,
        noveltyScore: 98,
        feasibilityScore: 85
      };
    } else {
      // General Smart AI / Custom Domain
      idea1 = {
        id: "idea-gen-mvp-" + Date.now(),
        pathType: "MVP Fast-Track",
        title: `Intelligent ${domain} Operational Workflow Assistant`,
        shortCode: "SMART-OPS",
        domain: domain,
        matchScore: 93,
        summary: `Rapid-deployment machine learning system designed to automate predictive demand forecasting and decision-making for ${domain.toLowerCase()}.`,
        problemStatement: `Organizations in ${domain.toLowerCase()} lack automated predictive intelligence to optimize day-to-day resource allocation.`,
        features: {
          mvp: ["Automated tabular data ingestion and cleaning pipeline", "Predictive forecasting model with 88%+ accuracy", "Interactive KPI analytics dashboard with exportable reports"],
          advanced: ["Automated alert thresholds via WebSockets", "CSV batch predictor tool"]
        },
        techStack: [skills[0] || "Python", skills[1] || "FastAPI", "React", "PostgreSQL"],
        timeline: `${weeks} (Rapid MVP)`,
        budgetFit: budget,
        teamSize: teamSize,
        noveltyScore: 88,
        feasibilityScore: 97
      };
      idea2 = {
        id: "idea-gen-rec-" + Date.now(),
        pathType: "Industry-Grade (Recommended)",
        title: `AI-Driven ${domain} Autonomous Optimization & Real-Time Telemetry Platform`,
        shortCode: "AI-PLATFORM",
        domain: domain,
        matchScore: 98,
        summary: `Full-stack production platform combining streaming anomaly detection, predictive multi-variate modeling, and LLM natural language analytics for ${domain.toLowerCase()}.`,
        problemStatement: `Current solutions in ${domain.toLowerCase()} operate in siloed retrospective dashboards without real-time predictive alerting or automated root-cause explanations.`,
        features: {
          mvp: ["High-concurrency streaming data ingestion pipeline", "Deep learning / Ensemble predictive model with sub-second inference", "Real-time reactive user dashboard with interactive charts"],
          advanced: ["LLM-powered executive summary & briefing generator", "Containerized Docker microservices architecture with automated health checks"]
        },
        techStack: [skills[0] || "Python 3.11", skills[1] || "PyTorch", "FastAPI", "React", "PostgreSQL", "Redis", "Docker"],
        timeline: `${weeks} (5-Phase Production Sequence)`,
        budgetFit: `${budget} (Optimized for zero-cost cloud & local deployment)`,
        teamSize: teamSize,
        noveltyScore: 95,
        feasibilityScore: 92
      };
      idea3 = {
        id: "idea-gen-res-" + Date.now(),
        pathType: "Research & Patent Grade",
        title: `Multi-Agent Neuro-Symbolic Cognitive Orchestrator for ${domain}`,
        shortCode: "NEURO-AGENT",
        domain: domain,
        matchScore: 91,
        summary: `High-novelty research architecture coupling retrieval-augmented knowledge graphs, autonomous reasoning agents, and formal verification for ${domain.toLowerCase()}.`,
        problemStatement: `Complex decision-making in ${domain.toLowerCase()} requires verifiable auditability and cross-domain reasoning that single LLMs or standard classifiers fail to deliver reliably.`,
        features: {
          mvp: ["Knowledge graph construction with Neo4j / NetworkX", "Multi-agent collaboration protocol with LangGraph", "Formal verification and uncertainty quantification framework"],
          advanced: ["Autonomous self-reflection and prompt refinement loop", "LaTeX research benchmark exporter with ablation studies"]
        },
        techStack: ["Python", "LangChain / LangGraph", "Neo4j", "FastAPI", "React"],
        timeline: `${weeks} (Research Milestone Track)`,
        budgetFit: budget,
        teamSize: teamSize,
        noveltyScore: 97,
        feasibilityScore: 83
      };
    }

    return [idea1, idea2, idea3];
  },

  // 2. Project Generator (Safe, Smart, Ambitious)
  generateProjects(profile) {
    const interest = profile.interests[0] || "Applied AI";
    const career = profile.careerGoal || "AI Engineer";

    return [
      {
        id: "proj-safe-" + Date.now(),
        pathType: "SAFE",
        title: `Predictive ${interest} Dispatch & Queue Balancer`,
        tagline: `Reliable tabular machine learning system tailored for ${interest.toLowerCase()} operational efficiency.`,
        problem: `Traditional ${interest.toLowerCase()} workflows suffer high wait-time variance and unpredictable peak staffing requirements.`,
        targetUsers: `Operational Managers, Shift Supervisors, End-Clients`,
        aiTech: ["Scikit-Learn", "FastAPI", "Pandas", "RandomForestRegressor"],
        difficulty: "Intermediate",
        duration: "8-10 weeks",
        cost: "Free (Local / Render Free Tier)",
        potentialScore: 85,
        skillMatch: 94,
        innovation: 75,
        impact: 88,
        feasibility: 96,
        careerFit: 84,
        uniquenessScore: 79,
        readinessScore: 89,
        badges: ["High Feasibility", "Production-Ready", "Zero Cost", interest]
      },
      {
        id: "proj-smart-" + Date.now(),
        pathType: "SMART",
        isRecommended: true,
        title: `AI ${interest} Crowd Intelligence & Dynamic Surge Predictor`,
        tagline: `Real-time time-series queue forecasting platform with LLM-powered operational explanation reports.`,
        problem: `Sudden client surges lead to severe service bottlenecks because administrators lack automated forward-looking 4-hour queue forecasting.`,
        targetUsers: `Department Directors, Frontline Staff, Patients / End-Users`,
        aiTech: ["XGBoost", "FastAPI", "PyTorch", "pgvector", "Gemini API"],
        difficulty: "Intermediate-Advanced",
        duration: "12 weeks",
        cost: "₹1,500 (Cloud Hosting & Domain)",
        potentialScore: 91,
        skillMatch: 92,
        innovation: 87,
        impact: 95,
        feasibility: 90,
        careerFit: 96,
        uniquenessScore: 88,
        readinessScore: 92,
        badges: ["Architect Choice", "Career Match 96%", "Real-time AI", interest]
      },
      {
        id: "proj-ambitious-" + Date.now(),
        pathType: "AMBITIOUS",
        title: `Autonomous Multi-Agent ${interest} Swarm Resource Orchestrator`,
        tagline: `Distributed reinforcement-learning agent network coordinating multi-facility resource sharing in real time.`,
        problem: `Regional facilities operate in isolated data silos during surges, leading to uneven resource exhaustion and delayed critical response.`,
        targetUsers: `City Health Command, Regional Network Coordinators`,
        aiTech: ["Ray RLlib", "Multi-Agent RL", "WebSockets", "Docker Swarm", "FastAPI"],
        difficulty: "Advanced / Research",
        duration: "16+ weeks",
        cost: "₹4,500 (Multi-node Cloud)",
        potentialScore: 93,
        skillMatch: 78,
        innovation: 97,
        impact: 98,
        feasibility: 68,
        careerFit: 94,
        uniquenessScore: 96,
        readinessScore: 81,
        badges: ["Research Grade", "Multi-Agent Swarm", "High Innovation", interest]
      }
    ];
  },

  // 3. Idea Refiner (Transform cliché ideas into top-tier projects)
  refineIdea(rawIdea) {
    const lower = rawIdea.toLowerCase();
    
    if (lower.includes('attend') || lower.includes('face')) {
      return {
        originalIdea: rawIdea,
        problems: [
          "Low innovation: Facial recognition attendance is heavily duplicated in college repos.",
          "Legal & privacy concerns regarding biometric storage without compliance.",
          "Interview value is low because it relies on standard OpenCV pre-trained haar cascades."
        ],
        improvedTitle: "AI Student Engagement & Cognitive Attention Intelligence Platform",
        improvedTagline: "Multi-modal computer vision & temporal NLP analytics for active lecture comprehension and micro-expression engagement scoring.",
        keyDifferentiators: [
          "Zero-raw-biometric storage: Computes temporary spatial landmark vectors with differential privacy.",
          "Engagement analytics: Tracks collective head pose, gaze direction, and posture to produce a real-time lecture clarity index.",
          "Faculty feedback loop: Generates automated timestamped suggestions on which lecture concepts caused comprehension drop-offs."
        ],
        suggestedTechStack: ["MediaPipe", "PyTorch LSTM", "FastAPI", "WebRTC", "PostgreSQL pgvector"],
        uniquenessScore: 89,
        impactScore: 93,
        careerRelevance: "Computer Vision & Edge AI Engineer"
      };
    } else if (lower.includes('fake news') || lower.includes('sentiment')) {
      return {
        originalIdea: rawIdea,
        problems: [
          "Traditional binary fake news classifiers suffer catastrophic generalization failure on novel political/scientific claims.",
          "Lack of source provenance and citation tracing."
        ],
        improvedTitle: "Neuro-Symbolic Fact Verification & Claim Provenance Graph Engine",
        improvedTagline: "Retrieval-augmented knowledge graph verification cross-referencing claims against peer-reviewed preprint archives with uncertainty quantification.",
        keyDifferentiators: [
          "Graph RAG pipeline using Neo4j and vector embeddings.",
          "Conformal prediction to provide guaranteed confidence intervals instead of naive softmax probabilities.",
          "Interactive interactive claim lineage graph showing semantic source citations."
        ],
        suggestedTechStack: ["LangChain / LlamaIndex", "Neo4j", "FastAPI", "Next.js", "HuggingFace Transformers"],
        uniquenessScore: 93,
        impactScore: 91,
        careerRelevance: "NLP & LLM Systems Engineer"
      };
    } else {
      // General dynamic refiner
      return {
        originalIdea: rawIdea,
        problems: [
          "Scope lacks distinct real-time operational feedback and telemetry loop.",
          "Requires clearer quantitative evaluation metrics to satisfy final-year external examiners."
        ],
        improvedTitle: `Autonomous AI ${rawIdea.replace(/project|system|app/gi, '').trim()} Intelligence & Predictive Telemetry Hub`,
        improvedTagline: `Streaming architecture integrating predictive machine learning with automated natural-language decision support.`,
        keyDifferentiators: [
          "Streaming event ingestion with Redis / Kafka message broker.",
          "Forward-looking time-series predictive modeling rather than passive historic logging.",
          "Explainable AI (SHAP / LIME) and LLM summary debriefing for non-technical stakeholders."
        ],
        suggestedTechStack: ["FastAPI", "XGBoost", "PyTorch", "Redis", "React"],
        uniquenessScore: 88,
        impactScore: 92,
        careerRelevance: "Full-Stack AI Systems Engineer"
      };
    }
  },

  // 4. Custom Project Synthesizer (Generates Features, Tech Stack, Dev Steps & Improvements)
  synthesizeProjectDetails(params) {
    const domain = params.domain || "Healthcare";
    const branch = params.branch || "Computer Science";
    const primarySkill = params.primarySkill || "Python & Machine Learning";
    const difficulty = params.difficulty || "Intermediate";

    const domainPresets = {
      "Healthcare": {
        title: "AI Clinical Queue & Dynamic Patient Surge Predictor",
        tagline: "Predict emergency and OPD crowd levels 4 hours in advance using time-series ML and explainable LLM triage reports.",
        problem: "Unscheduled patient surges cause emergency room congestion, increased mortality risks, and clinician burnout.",
        solution: "A streaming intelligence platform forecasting triage queue densities with SHAP-explained staffing directives.",
        mvp: [
          "Synthetic patient check-in telemetry generator (50,000 records)",
          "XGBoost regressor API predicting 4-hour forward queue wait time",
          "Interactive React telemetry dashboard with live queue gauges",
          "WebSocket alerts when bed saturation exceeds 85%"
        ],
        v2: [
          "Weather & AQI streaming API integration to predict respiratory infection surges",
          "Gemini natural-language clinical debriefing generator for triage nurses",
          "Department-wise breakdown (Cardiology, Trauma, Pediatrics)"
        ],
        v3: [
          "Federated multi-hospital model sharing without raw data centralization",
          "Dynamic ambulance diversion routing via municipal traffic APIs"
        ],
        stack: [
          { layer: "Frontend", name: "React 18 + Tailwind CSS + Recharts", why: "Zero-latency live telemetry charting matching student skill level." },
          { layer: "Backend", name: "FastAPI (Python 3.11)", why: "Asynchronous I/O with native high-performance Python ML model serving." },
          { layer: "AI & ML", name: "XGBoost + SHAP + Gemini Flash", why: "Best tabular prediction accuracy with explainable clinical decision weights." },
          { layer: "Database", name: "PostgreSQL with pgvector", why: "Relational patient logs with symptom vector similarity search." },
          { layer: "Cache & Queue", name: "Redis 7", why: "Sub-millisecond WebSocket pub/sub message broker." }
        ],
        steps: [
          { phase: 1, title: "Environment Setup & Starter Boilerplate", desc: "Set up monorepo structure, Python virtual environment, and Docker containers.", cmd: "mkdir clinical-ai && cd clinical-ai\npython3 -m venv venv && source venv/bin/activate\npip install fastapi uvicorn xgboost pandas redis\nnpm create vite@latest frontend -- --template react" },
          { phase: 2, title: "Dataset Ingestion & Feature Engineering", desc: "Synthesize 50k patient arrival events and engineer cyclical time/weather features.", cmd: "python ml/generate_data.py --records 50000\npython ml/feature_pipeline.py --cyclical-time" },
          { phase: 3, title: "Model Training & Accuracy Optimization", desc: "Train XGBoost regressor, evaluate RMSE/R2, and extract TreeSHAP explainability vectors.", cmd: "python ml/train.py --model xgboost --n_estimators 300\npython ml/evaluate.py --metrics r2,rmse" },
          { phase: 4, title: "FastAPI & WebSocket Real-time Gateway", desc: "Build REST endpoints for admissions and WebSocket channels for queue streaming.", cmd: "uvicorn app.main:app --reload --port 8000\npytest tests/test_api.py -v" },
          { phase: 5, title: "Testing, Containerization & Defense Staging", desc: "Load test concurrency with Locust and deploy container to Render/Cloud Run.", cmd: "docker build -t clinical-ai:latest .\ndocker-compose up -d" }
        ],
        pitfalls: "Watch out for lookahead bias in time-series splits. Always use forward rolling windows instead of random shuffling.",
        innovation: "TreeSHAP explainable AI integration converts raw predictions into natural clinical explanations for external examiners."
      },
      "FinTech": {
        title: "Autonomous Graph Neural Network Fraud & AML Sentinel",
        tagline: "Real-time payment transaction ring fraud detection using temporal graph neural networks and zero-knowledge privacy.",
        problem: "Coordinated mule account rings bypass traditional rule-based banking firewalls by splitting illicit funds across dozens of micro-transactions.",
        solution: "A temporal graph intelligence engine that detects cyclic payment rings in sub-100ms using PyTorch Geometric.",
        mvp: [
          "Graph transaction synthesizer with synthetic circular mule patterns",
          "PyTorch Geometric GCN/GAT model classifying high-risk subgraphs",
          "FastAPI validation endpoint rejecting anomalous transaction IDs",
          "Interactive Cytoscape.js visual graph explorer for compliance auditors"
        ],
        v2: [
          "Real-time Kafka/Redis streaming ingestion of 500 transactions/sec",
          "LLM automated SAR (Suspicious Activity Report) generator",
          "Merchant risk scoring API with webhook dispatch"
        ],
        v3: [
          "Zero-Knowledge Proof (zk-SNARKs) verifying AML compliance without exposing account balances",
          "Cross-border currency conversion rate anomaly detection"
        ],
        stack: [
          { layer: "Frontend", name: "Next.js + Cytoscape.js + Tailwind", why: "Hardware-accelerated web canvas for interactive network graph rendering." },
          { layer: "Backend", name: "FastAPI + asyncpg", why: "Low-latency asynchronous transaction validation pipeline." },
          { layer: "AI & ML", name: "PyTorch Geometric (GNN) + NetworkX", why: "State-of-the-art topological anomaly detection over traditional tabular ML." },
          { layer: "Database", name: "Neo4j + PostgreSQL", why: "Hybrid relational ledger storage paired with fast graph traversal queries." }
        ],
        steps: [
          { phase: 1, title: "Graph Framework & Ledger Scaffolding", desc: "Configure PyTorch Geometric, Neo4j container, and Next.js UI.", cmd: "pip install torch-geometric neo4j fastapi\ndocker run -p 7687:7687 -e NEO4J_AUTH=none neo4j:latest" },
          { phase: 2, title: "Transaction Graph Synthesis", desc: "Generate 100k synthetic bank transactions with injected laundering cycles.", cmd: "python graph/synth_transactions.py --nodes 10000 --edges 100000" },
          { phase: 3, title: "GNN Architecture & Training", desc: "Train Graph Attention Network (GAT) to output node embedding anomaly scores.", cmd: "python graph/train_gat.py --epochs 100 --lr 0.005" },
          { phase: 4, title: "High-Throughput Scoring Gateway", desc: "Expose sub-50ms transaction assessment endpoint.", cmd: "uvicorn gateway.main:app --workers 4" },
          { phase: 5, title: "Compliance Dashboard & Security Audit", desc: "Implement audit trail logging and thesis documentation.", cmd: "npm run build && pytest tests/" }
        ],
        pitfalls: "Imbalanced class distribution (0.1% fraud vs 99.9% legit). Use Focal Loss and SMOTE graph oversampling.",
        innovation: "Cytoscape interactive visual subgraph tracing allows evaluators to visually see the fraud ring during live presentation."
      },
      "Smart Agriculture": {
        title: "Edge-AI Multimodal Crop Health & Yield Optimization System",
        tagline: "Drone and mobile camera leaf disease diagnosis paired with IoT soil telemetry for precision irrigation and fertilizer forecasting.",
        problem: "Smallholder farmers experience 30% crop loss due to delayed fungal blight detection and excessive water/chemical expenditure.",
        solution: "Quantized edge computer vision (YOLOv8 + MobileNet) with micro-climate soil sensor telemetry.",
        mvp: [
          "20-class crop disease classifier achieving >92% validation accuracy",
          "Edge-compatible ONNX runtime model (<30MB) executing on mobile/Raspberry Pi",
          "Weather-adaptive irrigation scheduling algorithm based on soil moisture inputs",
          "Farmer mobile-friendly dashboard with localized voice prompts"
        ],
        v2: [
          "Satellite NDVI vegetation index integration via Sentinel-2 open data",
          "Gemini Vision multi-lingual voice debriefing in regional languages",
          "Market price advisory forecasting optimal harvest sale dates"
        ],
        v3: [
          "Autonomous solar rover navigation path planning using ROS 2",
          "Carbon credit certification reporting for sustainable farming practices"
        ],
        stack: [
          { layer: "Frontend / Mobile", name: "Flutter or React PWA", why: "Offline-first mobile interface functional in rural low-bandwidth conditions." },
          { layer: "AI & ML", name: "YOLOv8 + MobileNetV3 (ONNX Quantized)", why: "Sub-50ms inference on standard smartphone CPUs without requiring cloud connectivity." },
          { layer: "Backend / IoT", name: "FastAPI + MQTT Broker (Mosquitto)", why: "Lightweight sensor stream ingestion from ESP32 / Arduino nodes." },
          { layer: "Database", name: "SQLite / Supabase", why: "Lightweight edge database with automated cloud synchronization." }
        ],
        steps: [
          { phase: 1, title: "Dataset Acquisition (PlantVillage)", desc: "Acquire 54,000 annotated leaf images across 14 crop species.", cmd: "kaggle datasets download -d emmarex/plantdisease\nunzip plantdisease.zip -d data/raw" },
          { phase: 2, title: "Model Quantization & Optimization", desc: "Train MobileNetV3 and export to INT8 quantized ONNX format.", cmd: "python train.py --model mobilenet_v3 --quantize int8" },
          { phase: 3, title: "IoT MQTT Ingestion Gateway", desc: "Connect simulated soil moisture/temperature telemetry.", cmd: "python iot_bridge/mqtt_subscriber.py" },
          { phase: 4, title: "Farmer UI & Voice Integration", desc: "Build offline-ready UI with Web Audio synthesis.", cmd: "npm run dev" },
          { phase: 5, title: "Field Testing & Viva Defense Preparation", desc: "Benchmark battery usage and prepare comparative accuracy charts.", cmd: "pytest --cov=app" }
        ],
        pitfalls: "Lighting and background variance in real field photos. Use Albumentations (shadow, blur, sunflare augmentation).",
        innovation: "Complete offline execution guarantees functionality in rural farm fields with zero cellular connectivity."
      },
      "Cyber Defense": {
        title: "Autonomous Zero-Day Network Intrusion & Threat Hunting Sentinel",
        tagline: "Unsupervised anomaly detection across live PCAP packet streams with automated MITRE ATT&CK kill-chain mapping.",
        problem: "Signature-based IDSs (Snort/Suricata) fail against polymorphic zero-day exploits and covert lateral movement.",
        solution: "Deep Autoencoder + Isolation Forest packet inspection paired with automated incident response playbooks.",
        mvp: [
          "Live packet sniffer parsing PCAP streams into statistical flow vectors",
          "Variational Autoencoder (VAE) computing reconstruction anomaly error scores",
          "Interactive SOC dashboard displaying attack maps and packet inspection logs",
          "Automated firewall rule synthesis (iptables / UFW) blocking offending IPs"
        ],
        v2: [
          "Automated MITRE ATT&CK matrix tagging for identified threats",
          "Decoy honeypot decoy agent dynamically logging hacker payloads",
          "LLM security analyst debriefing translating hex payloads into human warnings"
        ],
        v3: [
          "Reinforcement learning agent executing autonomous counter-measures in sandbox",
          "Enterprise SIEM integration (Elasticsearch / Splunk compatible format)"
        ],
        stack: [
          { layer: "Packet Capture", name: "Scapy + PyShark", why: "Native low-level packet header extraction and feature serialization." },
          { layer: "AI & ML", name: "PyTorch VAE + Isolation Forest + XGBoost", why: "High precision unsupervised zero-day anomaly detection without labeled exploit data." },
          { layer: "Backend", name: "FastAPI + WebSockets", why: "Real-time streaming alert dispatch to SOC analysts." },
          { layer: "Database", name: "TimescaleDB (Time-series PostgreSQL)", why: "High-throughput indexing of millions of packet metadata rows." }
        ],
        steps: [
          { phase: 1, title: "Sniffer & Flow Parser Setup", desc: "Configure raw socket listener and flow statistical extractor.", cmd: "pip install scapy pyshark torch fastapi\npython sniffer/listen.py --interface eth0" },
          { phase: 2, title: "Benchmark PCAP Ingestion (CIC-IDS2017)", desc: "Train on clean traffic baselines to learn standard enterprise network behavior.", cmd: "python ml/train_autoencoder.py --dataset data/cic_ids2017.csv" },
          { phase: 3, title: "Real-time Inference Pipeline", desc: "Benchmark per-packet latency to ensure sub-5ms inspection per flow.", cmd: "python ml/benchmark_throughput.py" },
          { phase: 4, title: "SOC Analyst Visual Dashboard", desc: "Connect live WebSocket alerts to Tailwind SOC interface.", cmd: "npm run dev" },
          { phase: 5, title: "Simulated Red-Team Attack Verification", desc: "Run Nmap, Metasploit, and DDoS payloads against honeypot to verify detection.", cmd: "python tests/simulate_attack.py" }
        ],
        pitfalls: "High false-positive alarm fatigue. Implement adaptive dynamic thresholding using sliding standard deviation windows.",
        innovation: "Unsupervised learning detects unknown zero-day attacks that signature-based antivirus tools completely miss."
      }
    };

    const selected = domainPresets[domain] || domainPresets["Healthcare"];

    return {
      title: selected.title,
      tagline: selected.tagline,
      problem: selected.problem,
      solution: selected.solution,
      scope: {
        mvp: selected.mvp,
        v2: selected.v2,
        v3: selected.v3
      },
      techStack: selected.stack,
      developmentSteps: selected.steps,
      pitfalls: selected.pitfalls,
      innovation: selected.innovation,
      potentialScore: 92,
      skillMatch: 94,
      feasibility: 90,
      uniquenessScore: 89,
      careerRelevance: `${domain} AI Solutions Architect`
    };
  },

  // 4. Problem & Uniqueness Checker
  checkUniqueness(title, problem) {
    const score = 84 + Math.floor(Math.random() * 9);
    return {
      uniquenessScore: score,
      commonAspects: [
        "Standard CRUD interface for data visualization",
        "Single-node training scripts without automated inference caching"
      ],
      differentiatingOpportunities: [
        "Multi-variable temporal queue dynamics incorporating external weather & traffic vectors",
        "Generative shift debriefing translating complex ML weights into actionable clinical triage directives",
        "End-to-end edge privacy sanitization ensuring zero HIPAA violations"
      ],
      recommendation: "Your core innovation lies in the forward-looking 4-hour surge forecasting and LLM explanation layer. Highlight this over simple historical waiting room charts."
    };
  },

  // 5. What-If Project Simulator (Dynamic Slider Feedback)
  simulateWhatIf(params) {
    const weeks = parseInt(params.durationWeeks, 10);
    const budget = parseInt(params.budgetInr, 10);
    const teamSize = parseInt(params.teamSize, 10);
    const skillLevel = params.skillLevel || 'Intermediate';

    let feasibility = 85;
    let innovation = 87;
    let complexity = 'Moderate';
    let recommendations = [];
    let risks = [];

    // Duration Impact
    if (weeks <= 6) {
      feasibility -= 20;
      complexity = 'Critical Timeline';
      recommendations.push("Trim Scope to MVP: Drop external API integrations (weather/traffic) and focus purely on the core XGBoost queue predictor.");
      risks.push("High deadline risk: Under 6 weeks requires pre-packaged synthetic datasets; avoid collecting raw data.");
    } else if (weeks >= 16) {
      feasibility += 5;
      innovation += 8;
      recommendations.push("Extended Runway: Add Federated Learning or Multi-Branch Hospital Swarm orchestration to elevate to research publishability.");
    }

    // Budget Impact
    if (budget <= 500) {
      recommendations.push("Zero-Cost Architecture: Utilize local Docker, Render free-tier, and open-source models (HuggingFace local / Gemini free quota).");
    } else if (budget >= 10000) {
      recommendations.push("Cloud Acceleration: Spin up an AWS g4dn GPU spot instance for real-time ONNX inferencing and Redis cluster.");
    }

    // Team Size Impact
    if (teamSize === 1) {
      feasibility -= 10;
      recommendations.push("Solo Builder: Use Next.js with FastAPI templates; avoid creating bespoke microservice meshes.");
    } else if (teamSize >= 4) {
      recommendations.push("Large Team: Establish strict API contracts via OpenAPI / Swagger in Week 2 so frontend and backend proceed in parallel.");
    }

    // Skill Level
    if (skillLevel === 'Beginner') {
      feasibility -= 12;
      recommendations.push("Learning Scaffold: Implement Scikit-Learn baseline first before attempting PyTorch neural networks.");
    }

    const calculatedScore = Math.max(50, Math.min(99, Math.round((feasibility * 0.6) + (innovation * 0.4))));

    return {
      calculatedScore,
      feasibility: Math.max(40, Math.min(99, feasibility)),
      innovation: Math.max(50, Math.min(99, innovation)),
      complexity,
      recommendations,
      risks
    };
  },

  // 6. Code & GitHub Reviewer Engine
  reviewCode(codeText, githubUrl) {
    return {
      codeQuality: 82,
      architecture: 88,
      scalability: 75,
      security: 79,
      maintainability: 84,
      overallScore: 82,
      detectedStack: githubUrl ? "FastAPI + React + PostgreSQL detected in repo" : "Python ML Service Snippet",
      criticalIssues: [
        {
          severity: "High",
          title: "Tight Coupling Between Prediction Logic and REST Router",
          detail: "ML model inference is executed synchronously inside the HTTP POST route handler, which blocks the Uvicorn async event loop during heavy loads.",
          recommendation: "Separate inference into a dedicated Worker class or background task queue (Celery/Redis) with connection pooling."
        },
        {
          severity: "Medium",
          title: "Missing Database Query Pagination and Indexing",
          detail: "Endpoint `/api/v1/triage/history` performs unindexed SELECT * queries on the `crowd_snapshots` table.",
          recommendation: "Add a B-tree index on `(department_id, timestamp DESC)` and enforce limit/offset pagination."
        }
      ],
      architectureComparison: {
        current: "Client Request ➔ FastAPI Router [Model In-Memory Execution] ➔ Unindexed SQL Query ➔ Response",
        recommended: "Client Request ➔ FastAPI Async Handler ➔ Redis Cache Hit? (Yes: Return <2ms) ➔ (No: Worker Pool Model Predict) ➔ Response"
      }
    };
  },

  // 7. Viva Defense Evaluator
  evaluateVivaAnswer(questionId, studentAnswer) {
    const qObj = MockData.vivaQuestions.find(q => q.id === questionId) || MockData.vivaQuestions[0];
    const answerLen = studentAnswer.trim().split(/\s+/).length;
    
    // Check keyword presence
    let matchedKeywords = 0;
    qObj.keyConcepts.forEach(kw => {
      const regex = new RegExp(kw.split(' ')[0], 'i');
      if (regex.test(studentAnswer)) matchedKeywords++;
    });

    let accuracy = Math.min(95, Math.max(60, 65 + (matchedKeywords * 8) + (answerLen > 30 ? 10 : 0)));
    let clarity = answerLen > 25 ? 90 : 70;
    let confidence = answerLen > 40 ? 88 : 72;

    return {
      accuracy,
      clarity,
      confidence,
      score: Math.round((accuracy * 0.4) + (clarity * 0.3) + (confidence * 0.3)),
      verdict: accuracy >= 80 ? "Strong Defense! External examiner would approve." : "Passable, but needs tighter technical justification.",
      feedback: `You covered ${matchedKeywords} of ${qObj.keyConcepts.length} core concepts. Examiners will specifically listen for: ${qObj.keyConcepts.join(", ")}.`,
      improvedExplanation: qObj.idealAnswer
    };
  },

  // 8. Live Gemini API Connector & Multi-Agent Intelligence Services
  async callGemini(prompt, systemInstruction = "You are ProjectForge AI, an expert AI Project Architect, Senior Principal Engineer, and external viva examiner for final-year engineering capstone students.") {
    const activeKey = this.getApiKey();
    if (!activeKey) {
      throw new Error("No API key configured.");
    }

    const payload = {
      contents: [
        {
          role: "user",
          parts: [{ text: `${systemInstruction}\n\nTask:\n${prompt}` }]
        }
      ],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 1200
      }
    };

    // Try Gemini 1.5 Flash first, then Gemini 2.0 Flash
    const endpoints = [
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${activeKey}`,
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${activeKey}`,
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${activeKey}`
    ];

    let lastError = null;
    for (const url of endpoints) {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-goog-api-key": activeKey
          },
          body: JSON.stringify(payload)
        });

        if (response.ok) {
          const data = await response.json();
          const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
          if (text) return text.trim();
        } else {
          const errData = await response.text();
          lastError = new Error(`HTTP ${response.status}: ${errData}`);
        }
      } catch (err) {
        lastError = err;
      }
    }

    throw lastError || new Error("Unable to connect to Gemini API endpoint.");
  },

  // Live AI Mentor Chat Intelligence
  async chatWithMentorLive(userText, proj, prof) {
    const activeProjTitle = proj?.title || "Engineering Capstone Project";
    const activeTech = proj?.techStack?.map(t => typeof t === 'string' ? t : t.name).join(", ") || "Python, Machine Learning, FastAPI, React, PostgreSQL";
    const studentName = prof?.name || "Student";
    const branch = prof?.academicBranch || "Computer Science & Engineering";

    const prompt = `Student Name: ${studentName} (${branch})
Active Capstone Project: "${activeProjTitle}"
Tech Stack: ${activeTech}

Student Query: "${userText}"

Provide an authoritative, clear, and actionable engineering response suitable for a final-year engineering student. Format your response cleanly with bold headings, bullet points, and code snippets where appropriate.`;

    const sysPrompt = "You are ProjectForge AI, a Distinguished AI Architect and external final-year project examiner. Answer concisely, technically, and encouragingly.";

    try {
      const response = await this.callGemini(prompt, sysPrompt);
      // Format markdown-like text to HTML
      return this.formatAiMarkdownToHtml(response);
    } catch (err) {
      console.warn("Live Gemini Mentor failed, utilizing intelligent fallback:", err);
      // High-quality contextual fallback
      if (userText.toLowerCase().includes('accuracy') || userText.toLowerCase().includes('model') || userText.toLowerCase().includes('train')) {
        return `For your <strong>${activeProjTitle}</strong> predictive architecture:<br /><br /><strong>1. Feature Engineering:</strong> Calculate dynamic interaction metrics and normalized rolling windows.<br /><br /><strong>2. Cross-Validation:</strong> Use <code>TimeSeriesSplit(n_splits=5)</code> or stratified 5-fold splits to prevent target leakage.<br /><br /><strong>3. Regularization & Loss:</strong> Tune hyperparameters (learning_rate: 0.05, max_depth: 6, colsample_bytree: 0.8) and evaluate Precision/Recall matrices.`;
      } else if (userText.toLowerCase().includes('bottleneck') || userText.toLowerCase().includes('fastapi') || userText.toLowerCase().includes('api')) {
        return `In your API layer, avoid executing synchronous CPU-bound model inference directly inside <code>async def</code> endpoints. Offload predictions using threadpools or an async background queue (Redis worker) to keep the ASGI event loop latency under 5ms.`;
      } else if (userText.toLowerCase().includes('database') || userText.toLowerCase().includes('sql') || userText.toLowerCase().includes('postgres')) {
        return `For database optimization under real-time telemetry:<br /><br />• Create compound B-tree indexes on <code>(entity_id, timestamp DESC)</code>.<br />• Use connection pooling with <code>asyncpg</code> (max 20 connections per worker).<br />• Implement batch insertions rather than per-row commits.`;
      } else if (userText.toLowerCase().includes('viva') || userText.toLowerCase().includes('defense') || userText.toLowerCase().includes('questions')) {
        return `To prepare for your final-year viva defense on <strong>"${activeProjTitle}"</strong>:<br /><br /><strong>1. Architecture Justification:</strong> Clearly explain why your selected tech stack (${activeTech.split(',')[0] || 'FastAPI'}) was chosen over alternatives.<br /><br /><strong>2. Evaluation Metrics:</strong> Memorize your baseline vs improved model scores and prepare to explain what happens when anomalous input is received.`;
      } else {
        return `Analyzing <strong>"${userText}"</strong> for <strong>"${activeProjTitle}"</strong>.<br /><br /><strong>Engineering Recommendation:</strong> Ensure your microservice boundaries remain decoupled. Write integration unit tests covering edge cases before the midterm review.<br /><br /><strong>Action Step:</strong> Verify your API endpoints return standard HTTP status codes and structured error responses.`;
      }
    }
  },

  // Live AI Debugging Intelligence
  async diagnoseErrorLive(errorText) {
    const prompt = `Diagnose this engineering stack trace / code error:
\`\`\`
${errorText}
\`\`\`

Return a JSON object with this exact structure:
{
  "category": "Critical Exception | Concurrency Bug | Schema Error",
  "confidence": 95,
  "rootCause": "Clear explanation of why this error happened",
  "solutionCode": "# Fixed code snippet",
  "preventionTip": "Proactive best practice for final-year defense"
}`;

    const sysPrompt = "You are ProjectForge AI Error Diagnostic Engine. Return only valid JSON without markdown wrapping.";

    try {
      const raw = await this.callGemini(prompt, sysPrompt);
      const cleaned = raw.replace(/```json/gi, '').replace(/```/g, '').trim();
      const parsed = JSON.parse(cleaned);
      return parsed;
    } catch (err) {
      console.warn("Live Gemini Debugger failed, using intelligent fallback:", err);
      if (errorText.toLowerCase().includes('nan') || errorText.toLowerCase().includes('xgboost')) {
        return {
          category: "ML Pipeline Tensor Exception",
          confidence: 96,
          rootCause: "The rolling window feature calculation produces unhandled NaN values in boundary time slices. XGBoost DMatrix throws ValueError upon encountering NaNs without explicit missing declaration.",
          solutionCode: "# Fix: Backfill initial boundary rows and explicitly declare missing values\ndf['lag_feature'] = df['metric'].shift(2).bfill()\ndmatrix = xgb.DMatrix(df[feature_cols], missing=np.nan)",
          preventionTip: "Add a pre-flight schema assertion test in PyTest verifying `assert not df.isna().any().any()` before inference."
        };
      } else {
        return {
          category: "Asynchronous Concurrency Exception",
          confidence: 94,
          rootCause: "A coroutine or database cursor was invoked from an unattached event loop thread pool without awaiting completion.",
          solutionCode: "# Fix: Ensure asynchronous handlers are awaited cleanly\nasync with async_session() as session:\n    result = await session.execute(stmt)\n    return result.scalars().all()",
          preventionTip: "Use asyncio.gather with explicit exception handling or wrap CPU tasks in run_in_threadpool."
        };
      }
    }
  },

  // Live AI Viva Defense Evaluator
  async evaluateVivaAnswerLive(questionObj, studentAnswer) {
    const prompt = `Engineering Viva Defense Question: "${questionObj.question}"
Ideal Benchmark Concepts: ${questionObj.keyConcepts.join(", ")}
Student Defense Answer: "${studentAnswer}"

Evaluate this answer rigorously as an external university engineering examiner.
Return a JSON object with this exact structure:
{
  "accuracy": 88,
  "clarity": 85,
  "confidence": 90,
  "score": 87,
  "verdict": "Strong Defense! External examiner would approve.",
  "feedback": "Concise feedback on concept coverage and terminology.",
  "improvedExplanation": "The polished, master-level defense response."
}`;

    const sysPrompt = "You are a Senior University Engineering Project Viva Examiner. Return only valid JSON without markdown formatting.";

    try {
      const raw = await this.callGemini(prompt, sysPrompt);
      const cleaned = raw.replace(/```json/gi, '').replace(/```/g, '').trim();
      const parsed = JSON.parse(cleaned);
      return parsed;
    } catch (err) {
      console.warn("Live Gemini Viva Evaluator failed, utilizing fallback:", err);
      return this.evaluateVivaAnswer(questionObj.id, studentAnswer);
    }
  },

  // Helper to convert Markdown formatted responses to clean HTML
  formatAiMarkdownToHtml(md) {
    if (!md) return "";
    let html = md
      .replace(/### (.*?)\n/g, '<h4 class="font-heading font-bold text-sky-300 text-sm mt-2 mb-1">$1</h4>')
      .replace(/## (.*?)\n/g, '<h3 class="font-heading font-bold text-white text-base mt-2 mb-1">$1</h3>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="text-slate-300">$1</em>')
      .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="p-3 my-2 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-sky-300 overflow-x-auto"><code>$2</code></pre>')
      .replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-sky-300 font-mono text-[11px]">$1</code>')
      .replace(/\n\n/g, '<br /><br />')
      .replace(/\n• /g, '<br />• ')
      .replace(/\n- /g, '<br />• ');
    return html;
  }
};

if (typeof window !== 'undefined') {
  window.AIEngine = AIEngine;
}
