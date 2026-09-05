// ProjectForge AI - Comprehensive Mock Data & Knowledge Base

const MockData = {
  // Current Student Profile (Alex)
  studentProfile: {
    name: "Alex Rivera",
    email: "alex.rivera@college.edu",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    college: "Institute of Technology & Engineering",
    academicBranch: "Computer Science & Engineering",
    experienceLevel: "Intermediate",
    careerGoal: "AI Engineer",
    skills: [
      { name: "Python", category: "Programming", level: "Advanced" },
      { name: "Machine Learning", category: "AI", level: "Intermediate" },
      { name: "React", category: "Frameworks", level: "Intermediate" },
      { name: "SQL", category: "Databases", level: "Advanced" },
      { name: "FastAPI", category: "Frameworks", level: "Intermediate" },
      { name: "Git", category: "Other", level: "Intermediate" }
    ],
    interests: [
      "Artificial Intelligence",
      "Healthcare",
      "Predictive Analytics",
      "Smart Cities",
      "Cloud Infrastructure"
    ],
    constraints: {
      duration: "12 weeks",
      teamSize: 3,
      budget: "₹2,000–₹5,000",
      experienceLevel: "Intermediate"
    },
    resources: [
      "Laptop (16GB RAM)",
      "NVIDIA GPU (RTX 3060)",
      "Cloud Credits ($100 AWS)",
      "Smartphone",
      "APIs (Gemini & Weather API)",
      "High-speed Internet"
    ],
    projectPreference: "College final-year project",
    projectMode: "Academic Mode" // Academic, Career, Hackathon, Research, Startup
  },

  // Project DNA Analysis
  projectDNA: {
    skillFit: 92,
    careerFit: 96,
    innovation: 87,
    impact: 95,
    feasibility: 90,
    overallScore: 91,
    summary: "Your profile is exceptionally suited for AI-powered real-world problem solving in the healthcare domain. Your combination of Python, ML, and FastAPI enables robust pipeline construction without exceeding your 12-week timeline.",
    topCompetencies: [
      "High predictive ML workflow aptitude",
      "Strong full-stack capability with React + Python",
      "Disciplined resource utilization within ₹3,500 budget"
    ],
    potentialRisks: [
      "Real-world clinical dataset acquisition requires synthetic data generation or PhysioNet approval.",
      "Deployment latency under burst traffic needs Redis caching."
    ]
  },

  // Generated Project Paths
  generatedProjects: [
    {
      id: "proj-safe",
      pathType: "SAFE",
      title: "Clinical Appointment & Triage Wait-Time Estimator",
      tagline: "Rule-assisted ML model to forecast outpatient department check-in times.",
      problem: "Outpatient clinics suffer 45+ minute unpredictable queues because schedule arrivals don't match doctor visit durations.",
      targetUsers: "Clinic receptionists, OPD patients, Hospital Administrators",
      aiTech: ["Scikit-learn", "Random Forest Regressor", "Pandas", "FastAPI"],
      difficulty: "Intermediate",
      duration: "8-10 weeks",
      cost: "Free (Local Host)",
      potentialScore: 86,
      skillMatch: 95,
      innovation: 76,
      impact: 88,
      feasibility: 96,
      careerFit: 84,
      uniquenessScore: 78,
      readinessScore: 88,
      badges: ["High Feasibility", "Healthcare", "Scikit-Learn", "Low Cost"],
      status: "Available"
    },
    {
      id: "proj-smart",
      pathType: "SMART",
      isRecommended: true,
      title: "AI Hospital Crowd Intelligence & Dynamic Surge Predictor",
      tagline: "Predict emergency and OPD crowd levels 4 hours in advance using temporal graph neural networks & multi-variable time series.",
      problem: "Sudden surges in hospital emergency and triage departments lead to delayed patient care, staff burnout, and severe bed shortages.",
      targetUsers: "Emergency Room Directors, Triage Nurses, City Health Officials",
      aiTech: ["PyTorch", "XGBoost", "FastAPI", "Gemini API (Explanation Layer)", "pgvector"],
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
      badges: ["AI Architect Choice", "Healthcare", "Time-Series AI", "Career Match 96%"],
      status: "Active"
    },
    {
      id: "proj-ambitious",
      pathType: "AMBITIOUS",
      title: "Autonomous Multi-Hospital Swarm Patient Re-Routing & Bed Orchestrator",
      tagline: "Reinforcement-learning driven distributed agent system to balance emergency patient diversions across city hospital clusters.",
      problem: "Ambulance diversions occur haphazardly because neighboring hospitals operate in data silos during regional crises.",
      targetUsers: "Municipal Emergency Command, Regional Trauma Networks",
      aiTech: ["Ray RLlib", "Multi-Agent RL (Q-Learning)", "FastAPI", "Docker Swarm", "WebSockets"],
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
      badges: ["Research Grade", "Multi-Agent AI", "High Complexity", "High Impact"],
      status: "Available"
    }
  ],

  // Active Project Blueprint (AI Hospital Crowd Intelligence)
  activeProject: {
    id: "proj-smart",
    title: "AI Hospital Crowd Intelligence & Dynamic Surge Predictor",
    shortCode: "HOSP-AI",
    progress: 54,
    currentPhase: "AI/ML Integration & Pipeline Optimization",
    daysRemaining: 42,
    nextBestAction: {
      taskTitle: "Evaluate and Fine-Tune XGBoost Surge Predictor",
      reason: "Your backend API endpoints are ready. Completing model evaluation allows live pipeline testing with the triage dashboard.",
      estimatedTime: "2.5 hours",
      category: "Machine Learning",
      actionUrl: "roadmap"
    },
    healthScore: {
      overall: 86,
      metrics: [
        { label: "Schedule Progress", score: 92, status: "Ahead" },
        { label: "Technical Architecture", score: 88, status: "Optimal" },
        { label: "Innovation Quality", score: 88, status: "High" },
        { label: "Testing Coverage", score: 72, status: "Needs Attention" },
        { label: "Documentation", score: 80, status: "In Progress" },
        { label: "Deployment Readiness", score: 65, status: "Pending" }
      ],
      weakestArea: "Deployment Readiness (65/100)",
      aiAdvice: "Your project is technically strong, but automated integration tests and cloud staging should be established before week 9."
    },
    overview: {
      problemStatement: "Urban hospital emergency departments face unpredictable surges in patient intake due to seasonal outbreaks, weather events, and community incidents. Existing hospital management software only reports retrospective data without forward-looking queue forecasting, leading to 2-3 hour triage bottlenecks.",
      proposedSolution: "An intelligent streaming platform that aggregates historical triage admittance, local weather/pollution streams, and real-time bed occupancy. It deploys an ensemble XGBoost + LSTM model to forecast 4-hour queue lengths with 89%+ accuracy and explains triage bottlenecks using LLM natural language summaries.",
      targetUsers: "ER Chief Medical Officers, Head Triage Nurses, Hospital Operations Directors, Waiting Room Patients (Mobile Status View)",
      realWorldImpact: "Reduces patient waiting time uncertainty by 40%, lowers peak-hour doctor overtime stress, and provides early warnings for critical ICU bed saturation."
    },
    scope: {
      mvp: [
        "Synthetic hospital admissions generator simulating 50,000 patient records",
        "FastAPI service with XGBoost model predicting next 4-hour queue density",
        "React interactive dashboard showing real-time vs predicted crowd charts",
        "Threshold alert notification system via WebSockets"
      ],
      v2: [
        "Integration with external OpenWeather and AQI API for weather-driven flu surges",
        "Gemini-powered natural language doctor shift recommendation summary",
        "Department-wise breakdown (Cardiology, Pediatrics, Trauma, General)",
        "Mobile-responsive QR code display for waiting room patients"
      ],
      v3: [
        "Federated learning across multi-branch hospital databases without sharing raw patient records",
        "Automated ambulance diversion recommendations via municipal traffic integration",
        "Predictive pharmacy and medical oxygen supply demand forecasting"
      ]
    },
    techStack: [
      {
        layer: "Frontend",
        name: "React / Next.js + Tailwind CSS",
        icon: "layout",
        whySelected: "Matches your intermediate React skill. Enables building a high-performance, real-time clinical telemetry dashboard with zero latency."
      },
      {
        layer: "Backend",
        name: "FastAPI (Python 3.11)",
        icon: "server",
        whySelected: "Native async execution handles high-concurrency sensor simulation while allowing seamless in-memory execution of Python ML models."
      },
      {
        layer: "AI & ML",
        name: "XGBoost + PyTorch + Gemini API",
        icon: "cpu",
        whySelected: "XGBoost provides superior tabular wait-time prediction; Gemini API generates doctor-friendly natural language triage summaries."
      },
      {
        layer: "Database",
        name: "PostgreSQL with pgvector",
        icon: "database",
        whySelected: "Reliable relational schema for patient logs with vector embeddings for semantic symptom cluster search."
      },
      {
        layer: "Queue / Cache",
        name: "Redis",
        icon: "layers",
        whySelected: "Sub-millisecond caching for real-time wait-time queries and WebSocket pub/sub message broker."
      },
      {
        layer: "Deployment",
        name: "Docker + Vercel & Render / Cloud Run",
        icon: "cloud",
        whySelected: "Completely fits within your ₹2,000 budget using free-tier development allowances and low-cost container staging."
      }
    ],
    architectureNodes: [
      {
        id: "client",
        title: "Triage & Patient UI",
        tech: "React 18, Tailwind, Recharts",
        role: "Displays dynamic queue gauges, wait-time forecasts, and receives real-time WebSocket surge alerts.",
        type: "client"
      },
      {
        id: "gateway",
        title: "API Gateway & Auth",
        tech: "FastAPI REST + JWT",
        role: "Validates hospital staff roles, rate-limits requests, and routes payload between UI and prediction worker.",
        type: "api"
      },
      {
        id: "ml_service",
        title: "AI Inference Engine",
        tech: "XGBoost + ONNX Runtime",
        role: "Computes 15-minute rolling wait-time regressions; triggers Gemini for natural-language shift briefing.",
        type: "ai"
      },
      {
        id: "database",
        title: "Primary DB & Vectors",
        tech: "PostgreSQL 15 + pgvector",
        role: "Persists patient check-in events, triage codes, prediction logs, and symptom embedding indices.",
        type: "storage"
      },
      {
        id: "cache",
        title: "Telemetry & Cache",
        tech: "Redis In-Memory",
        role: "Stores active waiting room counters and buffers incoming simulated telemetry streams.",
        type: "cache"
      }
    ],
    erDiagram: {
      tables: [
        {
          name: "patients",
          columns: ["id (UUID PK)", "age (INT)", "gender (VARCHAR)", "created_at (TIMESTAMP)"]
        },
        {
          name: "triage_records",
          columns: ["id (UUID PK)", "patient_id (FK)", "acuity_level (INT 1-5)", "admit_time (TIMESTAMP)", "department (VARCHAR)"]
        },
        {
          name: "crowd_snapshots",
          columns: ["id (UUID PK)", "timestamp (TIMESTAMP)", "active_queue_count (INT)", "doctors_on_duty (INT)", "avg_wait_minutes (FLOAT)"]
        },
        {
          name: "ml_predictions",
          columns: ["id (UUID PK)", "target_window (TIMESTAMP)", "predicted_crowd (INT)", "confidence_lower (INT)", "confidence_upper (INT)", "created_at (TIMESTAMP)"]
        }
      ]
    },
    developmentSteps: [
      {
        phase: 1,
        title: "Environment Setup & Starter Boilerplate",
        duration: "Week 1–2",
        status: "Completed",
        description: "Initialize version-controlled decoupled architecture with virtual environment, package dependencies, and linting rules.",
        cliCommands: "mkdir hospital-crowd-ai && cd hospital-crowd-ai\npython3 -m venv venv && source venv/bin/activate\npip install fastapi uvicorn xgboost scikit-learn pandas redis psycopg2-binary\nnpm create vite@latest frontend -- --template react",
        keyDeliverables: [
          "Decoupled folder structure with /backend, /frontend, and /ml_engine",
          "Docker Compose configuration for local PostgreSQL 15 and Redis 7",
          "Environment secrets template (.env.example) with mock API configurations"
        ]
      },
      {
        phase: 2,
        title: "Dataset Acquisition & Preprocessing Pipeline",
        duration: "Week 3–4",
        status: "Completed",
        description: "Acquire emergency triage records, clean anomalies, engineer cyclical time features, and synthesize 50,000 patient flow events.",
        cliCommands: "python ml_engine/generate_synthetic_data.py --records 50000 --out data/raw_triage.csv\npython ml_engine/preprocess.py --cyclical-time --weather-vector",
        keyDeliverables: [
          "Feature store with hour-of-day, day-of-week cyclical sine/cosine vectors",
          "Synthetic surge event generator simulating flu epidemics and festival rushes",
          "Automated train-test-validation split (70/15/15) preserving temporal ordering"
        ]
      },
      {
        phase: 3,
        title: "Core ML Model Training & Loss Optimization",
        duration: "Week 5–6",
        status: "In Progress",
        description: "Train multi-target XGBoost regressor and LSTM sequence model to forecast 4-hour forward-looking queue length.",
        cliCommands: "python ml_engine/train.py --model xgboost --n_estimators 300 --max_depth 6\npython ml_engine/evaluate.py --metrics rmse,mae,r2 --export-onnx",
        keyDeliverables: [
          "Trained model artifact with R² score > 0.88 and MAE < 3.2 minutes",
          "SHAP feature importance extraction to explain triage bottlenecks to doctors",
          "Exported ONNX runtime model for sub-15ms low-latency inference"
        ]
      },
      {
        phase: 4,
        title: "FastAPI Backend & Real-Time WebSockets Integration",
        duration: "Week 7–9",
        status: "Upcoming",
        description: "Expose REST endpoints for triage admissions, Redis pub/sub queue for telemetry streaming, and WebSocket broadcast channels.",
        cliCommands: "uvicorn app.main:app --reload --host 0.0.0.0 --port 8000\npytest tests/test_api_endpoints.py -v",
        keyDeliverables: [
          "/api/v1/predict/surge endpoint accepting multi-hospital sensor streams",
          "WebSocket broadcast channel pushing live queue gauge updates to triage screens",
          "Gemini 1.5 Flash integration generating natural language shift debriefs"
        ]
      },
      {
        phase: 5,
        title: "Testing, Containerization & Defense Deployment",
        duration: "Week 10–12",
        status: "Upcoming",
        description: "Perform load stress testing (1,000 concurrent requests), generate IEEE documentation, and deploy live demo on cloud staging.",
        cliCommands: "docker build -t hospital-crowd-ai:latest .\ndocker-compose up --scale worker=2 -d\nlocust -f tests/locustfile.py --headless -u 100 -r 10",
        keyDeliverables: [
          "Fully containerized multi-container staging deployment on Render / Cloud Run",
          "End-to-end integration test suite with >80% code coverage",
          "Ready-to-print IEEE thesis manuscript and viva defense slide deck"
        ]
      }
    ],
    practicalImprovements: {
      pitfalls: [
        {
          issue: "Data Snooping / Lookahead Bias",
          solution: "Use temporal time-series split (Expanding Window Walk-Forward) rather than random shuffle so future admissions never leak into training."
        },
        {
          issue: "Cold-Start on New Clinics",
          solution: "Implement fallback population-averaged heuristic baseline that smoothly blends into ML predictions as local historical samples accumulate."
        },
        {
          issue: "API Rate-Limiting & Cost Spikes",
          solution: "Cache weather and traffic API queries in Redis with a 30-minute TTL to stay 100% within free-tier API quotas."
        }
      ],
      innovations: [
        {
          title: "Explainable AI (XAI) for Medical Trust",
          impact: "Translates model weights into human-readable clinical summaries (e.g. '85% surge risk driven by 32°C sudden temperature drop + holiday weekend') using SHAP values and Gemini."
        },
        {
          title: "Edge Optimization via ONNX Runtime",
          impact: "Reduces model inference memory footprint to under 45MB, allowing the prediction worker to execute smoothly on standard hospital ward PCs without GPUs."
        },
        {
          title: "Dynamic Staffing Rebalancing Engine",
          impact: "Automatically computes optimal nurse-to-patient allocation recommendations to prevent ICU nurse burnout during predicted peak surges."
        }
      ],
      hardwareOptimization: "Optimized for development on standard 8GB/16GB RAM student laptops. All ML models train in under 4 minutes using CPU multi-threading (OpenMP) with zero GPU cost.",
      vivaHotspots: [
        {
          question: "Why did you choose XGBoost over a Deep Neural Network like an LSTM or Transformer for queue prediction?",
          answer: "For tabular and multi-variable clinical telemetry with under 100,000 records, Gradient Boosted Decision Trees (XGBoost) consistently outperform deep architectures in convergence speed, sample efficiency, and interpretability (via TreeSHAP), while requiring 10x less memory."
        },
        {
          question: "How do you handle privacy concerns and HIPAA compliance when logging patient records?",
          answer: "Our pipeline enforces complete data anonymization at ingestion: UUID identifiers replace personal identifiers, exact timestamps are jitter-binned into 15-minute aggregates, and no protected health information (PHI) leaves the local database perimeter."
        }
      ]
    }
  },

  // Multi-Domain Blueprint Catalog for Interactive Selector
  blueprintsCatalog: [
    {
      id: "HEALTH-IQ",
      title: "AI Emergency Crowd Intelligence & Dynamic Surge Predictor",
      shortCode: "HEALTH-IQ",
      domain: "Healthcare & MedTech",
      difficulty: "Intermediate-Advanced Capstone",
      noveltyScore: 92,
      overview: {
        problemStatement: "Urban hospital emergency departments face unpredictable surges in patient intake due to seasonal outbreaks and weather events. Existing hospital software only reports retrospective data without forward-looking queue forecasting, causing 2-3 hour triage bottlenecks.",
        proposedSolution: "An intelligent streaming platform aggregating historical triage admittance, local weather/pollution streams, and real-time bed occupancy. It deploys an ensemble XGBoost + LSTM model to forecast 4-hour queue lengths with 89%+ accuracy and explains bottlenecks using LLM summaries.",
        targetUsers: "ER Chief Medical Officers, Head Triage Nurses, Hospital Operations Directors, Waiting Room Patients",
        realWorldImpact: "Reduces patient waiting uncertainty by 40%, lowers peak-hour doctor overtime stress, and provides early warnings for critical ICU bed saturation."
      },
      scope: {
        mvp: [
          "Synthetic hospital admissions generator simulating 50,000 patient records",
          "FastAPI service with XGBoost model predicting next 4-hour queue density",
          "React interactive dashboard showing real-time vs predicted crowd charts",
          "Threshold alert notification system via WebSockets"
        ],
        v2: [
          "Integration with external OpenWeather and AQI API for weather-driven flu surges",
          "Gemini-powered natural language doctor shift recommendation summary",
          "Department-wise breakdown (Cardiology, Pediatrics, Trauma, General)",
          "Mobile-responsive QR code display for waiting room patients"
        ],
        v3: [
          "Federated learning across multi-branch hospital databases without sharing raw records",
          "Automated ambulance diversion recommendations via municipal traffic integration",
          "Predictive pharmacy and medical oxygen supply demand forecasting"
        ]
      },
      techStack: [
        { layer: "Frontend", name: "React / Next.js + Tailwind CSS", icon: "layout", whySelected: "Enables building a high-performance, real-time clinical telemetry dashboard with zero latency." },
        { layer: "Backend", name: "FastAPI (Python 3.11)", icon: "server", whySelected: "Native async execution handles high-concurrency sensor simulation with Python ML models in-memory." },
        { layer: "AI & ML", name: "XGBoost + PyTorch + Gemini API", icon: "cpu", whySelected: "XGBoost provides superior tabular wait-time prediction; Gemini API generates doctor-friendly summaries." },
        { layer: "Database", name: "PostgreSQL 15 + pgvector", icon: "database", whySelected: "Reliable relational schema for patient logs with vector embeddings for semantic symptom cluster search." },
        { layer: "Queue / Cache", name: "Redis", icon: "layers", whySelected: "Sub-millisecond caching for real-time wait-time queries and WebSocket pub/sub message broker." },
        { layer: "Deployment", name: "Docker + Render / Cloud Run", icon: "cloud", whySelected: "Completely fits within ₹0-₹2,000 budget using free-tier development allowances." }
      ],
      architectureNodes: [
        { id: "client", title: "Triage & Patient UI", tech: "React 18, Tailwind, Recharts", role: "Displays dynamic queue gauges, wait-time forecasts, and receives real-time WebSocket alerts.", type: "client" },
        { id: "gateway", title: "API Gateway & Auth", tech: "FastAPI REST + JWT", role: "Validates hospital staff roles, rate-limits requests, and routes payload between UI and prediction worker.", type: "api" },
        { id: "ml_service", title: "AI Inference Engine", tech: "XGBoost + ONNX Runtime", role: "Computes 15-minute rolling wait-time regressions; triggers Gemini for shift briefings.", type: "ai" },
        { id: "database", title: "Primary DB & Vectors", tech: "PostgreSQL 15 + pgvector", role: "Persists patient check-in events, triage codes, and symptom embedding indices.", type: "storage" },
        { id: "cache", title: "Telemetry & Cache", tech: "Redis In-Memory", role: "Stores active waiting room counters and buffers incoming simulated telemetry streams.", type: "cache" }
      ],
      erDiagram: {
        tables: [
          { name: "patients", columns: ["id (UUID PK)", "age (INT)", "gender (VARCHAR)", "created_at (TIMESTAMP)"] },
          { name: "triage_records", columns: ["id (UUID PK)", "patient_id (FK)", "acuity_level (INT 1-5)", "admit_time (TIMESTAMP)", "department (VARCHAR)"] },
          { name: "crowd_snapshots", columns: ["id (UUID PK)", "timestamp (TIMESTAMP)", "active_queue_count (INT)", "doctors_on_duty (INT)", "avg_wait_minutes (FLOAT)"] },
          { name: "ml_predictions", columns: ["id (UUID PK)", "target_window (TIMESTAMP)", "predicted_crowd (INT)", "confidence_lower (INT)", "confidence_upper (INT)"] }
        ]
      },
      developmentSteps: [
        { phase: 1, title: "Environment Setup & Starter Boilerplate", duration: "Week 1–2", status: "Completed", description: "Initialize version-controlled decoupled architecture with virtual environment.", cliCommands: "python3 -m venv venv && source venv/bin/activate\npip install fastapi uvicorn xgboost scikit-learn pandas redis psycopg2-binary\nnpm create vite@latest frontend -- --template react", keyDeliverables: ["Decoupled folder structure with /backend, /frontend, /ml_engine", "Docker Compose for PostgreSQL 15 and Redis 7", ".env.example configuration"] },
        { phase: 2, title: "Dataset Acquisition & Synthetic Stream Generator", duration: "Week 3–4", status: "Completed", description: "Acquire PhysioNet emergency arrivals dataset and build synthetic patient generator.", cliCommands: "python ml_engine/synthetic_generator.py --records 50000 --out data/raw_admissions.csv", keyDeliverables: ["50,000 synthetic patient arrival records", "Feature pipeline calculating rolling arrival velocity", "Correlation analysis matrix"] },
        { phase: 3, title: "Model Engineering & Offline Validation", duration: "Week 5–7", status: "Completed", description: "Train XGBoost regressor and benchmark against ARIMA baselines.", cliCommands: "python ml_engine/train_xgboost.py --data data/features.parquet --export-onnx models/queue_predictor.onnx", keyDeliverables: ["Trained XGBoost model with MAE < 3.2 patients", "TreeSHAP feature importance plots", "ONNX runtime artifact"] },
        { phase: 4, title: "FastAPI Backend & WebSocket Streaming Gateway", duration: "Week 8–10", status: "In Progress", description: "Expose REST endpoints and WebSocket channels for telemetry.", cliCommands: "uvicorn app.main:app --reload --port 8000 --workers 2", keyDeliverables: ["FastAPI REST endpoints for queue queries", "WebSocket server broadcasting real-time updates", "PyTest integration suite (>80% coverage)"] },
        { phase: 5, title: "Containerization, Cloud Staging & Viva Defense", duration: "Week 11–12", status: "Upcoming", description: "Dockerize entire stack and compile IEEE-format project documentation.", cliCommands: "docker compose up --build -d\npytest tests/ -v --cov=app", keyDeliverables: ["Multi-container Docker Compose deployment", "Complete IEEE project thesis report (LaTeX/PDF)", "Interactive Viva defense slide deck"] }
      ],
      practicalImprovements: {
        commonPitfalls: [
          { issue: "Temporal Data Leakage in Rolling Averages", fix: "Apply Strict Lag Shifts: All feature engineering must lag by at least 15 minutes before forecast window." },
          { issue: "Sudden Outbreak Outlier Degradation", fix: "Train Residual Quantile Regressors (p10, p50, p90) to output confidence intervals instead of single point estimates." }
        ],
        highImpactInnovations: [
          { title: "LLM-Powered Clinical Shift Handover Briefing", description: "Summarize queue anomalies into structured handover notes for oncoming nursing supervisors.", impact: "+15% Evaluator Innovation Score" },
          { title: "Dynamic Doctor On-Call Redistribution Recommender", description: "Simulates bed clearance if 1 additional triage doctor is dispatched.", impact: "High Practical Value" }
        ],
        hardwareOptimization: "Optimized for standard 8GB/16GB RAM student laptops. All ML models train in under 4 minutes using CPU multi-threading.",
        vivaHotspots: [
          { question: "Why choose XGBoost over LSTM for queue prediction?", answer: "For tabular multi-variable clinical telemetry under 100k rows, XGBoost converges faster, generalizes better with less memory, and provides exact SHAP interpretability." },
          { question: "How do you handle patient privacy and HIPAA compliance?", answer: "UUID anonymization at ingestion; timestamps jitter-binned into 15-minute aggregates with zero PHI transmitted outside local perimeters." }
        ]
      }
    },
    {
      id: "GRAPH-AML",
      title: "Graph-Neural Anti-Money Laundering & Mule Account Ring Hunter",
      shortCode: "GRAPH-AML",
      domain: "FinTech & Fraud Intelligence",
      difficulty: "Advanced Capstone",
      noveltyScore: 97,
      overview: {
        problemStatement: "Modern financial laundering networks obfuscate illicit fund flows by splitting transfers across hundreds of synthetic mule accounts and circular routing rings that standard relational SQL checks fail to detect.",
        proposedSolution: "A real-time Graph Convolutional Network (GCN) platform using Neo4j and PyTorch Geometric that constructs dynamic transaction graphs, identifies circular routing topologies, and flags high-risk accounts with 95%+ precision.",
        targetUsers: "Bank Fraud Compliance Officers, AML Investigation Teams, Financial Intelligence Units",
        realWorldImpact: "Reduces manual investigation time from 4 days to under 30 seconds per suspicious transaction ring, preventing millions in illicit capital flight."
      },
      scope: {
        mvp: [
          "Graph ingestion service parsing 100k synthetic bank transactions into Neo4j graph nodes and edges",
          "PyTorch Geometric Graph Convolutional Network (GCN) classifying mule accounts",
          "Interactive 3D graph visualizer highlighting circular money laundering topologies",
          "Suspicious Activity Report (SAR) auto-exporter"
        ],
        v2: [
          "Dynamic temporal graph snapshots tracking account velocity changes over time",
          "LLM-generated natural language investigative summaries for compliance regulators",
          "Real-time webhook integration for instant automated account freezing"
        ],
        v3: [
          "Cross-institutional zero-knowledge privacy transaction graph matching",
          "Autonomous reinforcement learning agent uncovering new obfuscation strategies"
        ]
      },
      techStack: [
        { layer: "AI / Graph ML", name: "PyTorch Geometric (PyG) + GCN", icon: "cpu", whySelected: "Native graph convolutional operations enable deep structural message passing across multi-hop transaction topologies." },
        { layer: "Graph Database", name: "Neo4j 5.0 Community Edition", icon: "database", whySelected: "Industry-standard Cypher query engine optimized for finding complex circular path patterns in sub-milliseconds." },
        { layer: "Backend", name: "FastAPI + NetworkX", icon: "server", whySelected: "High-performance Python API handling graph serialization and fast topological community detection." },
        { layer: "Frontend", name: "React + 3D Force-Graph / WebGL", icon: "layout", whySelected: "Renders 10,000+ interactive transaction nodes with smooth 60fps GPU acceleration." },
        { layer: "Deployment", name: "Docker Compose (Neo4j + Backend)", icon: "cloud", whySelected: "Zero cloud cost; runs completely inside local Docker container on student laptop." }
      ],
      architectureNodes: [
        { id: "ingestion", title: "Transaction Streamer", tech: "FastAPI + Kafka / RabbitMQ", role: "Ingests raw payment events and validates JSON schemas.", type: "api" },
        { id: "graph_db", title: "Neo4j Graph Store", tech: "Neo4j Cypher Engine", role: "Stores accounts as nodes and transfers as directed weighted edges.", type: "storage" },
        { id: "gcn_engine", title: "Graph Neural Engine", tech: "PyTorch Geometric GCN", role: "Performs node classification & link prediction to score mule probabilities.", type: "ai" },
        { id: "viz_client", title: "3D Analyst Console", tech: "React + 3D-Force-Graph", role: "Interactive node graph highlighting high-risk rings in neon red.", type: "client" },
        { id: "sar_gen", title: "Compliance Exporter", tech: "FastAPI + ReportLab", role: "Generates official PDF Suspicious Activity Reports for bank auditors.", type: "storage" }
      ],
      erDiagram: {
        tables: [
          { name: "account_nodes", columns: ["id (VARCHAR PK)", "account_type (VARCHAR)", "kyc_status (INT)", "risk_score (FLOAT)"] },
          { name: "transfer_edges", columns: ["id (UUID PK)", "sender_id (FK)", "receiver_id (FK)", "amount (DECIMAL)", "timestamp (TIMESTAMP)"] },
          { name: "mule_clusters", columns: ["id (UUID PK)", "ring_topology (VARCHAR)", "total_routed_usd (DECIMAL)", "flagged_at (TIMESTAMP)"] }
        ]
      },
      developmentSteps: [
        { phase: 1, title: "Graph Database & Docker Setup", duration: "Week 1–2", status: "Completed", description: "Deploy Neo4j 5.0 inside Docker with APOC graph library plugins enabled.", cliCommands: "docker run -d --name neo4j-aml -p 7474:7474 -p 7687:7687 -e NEO4J_AUTH=neo4j/secret neo4j:5.12", keyDeliverables: ["Neo4j container with APOC extensions", "PyTorch Geometric installed in Python 3.11 venv", "Data schema contract"] },
        { phase: 2, title: "Synthetic Transaction Graph Generation", duration: "Week 3–4", status: "Completed", description: "Generate 100,000 synthetic banking transactions embedding circular mule rings.", cliCommands: "python scripts/generate_bank_graph.py --nodes 15000 --transfers 100000 --rings 40", keyDeliverables: ["Synthetic financial graph dataset", "Cypher batch loader script", "Ground truth label mappings"] },
        { phase: 3, title: "Graph Neural Network Model Training", duration: "Week 5–7", status: "Completed", description: "Train 2-layer GCN with neighborhood aggregation on transaction subgraphs.", cliCommands: "python ml/train_gcn.py --epochs 150 --hidden-dim 64 --lr 0.01", keyDeliverables: ["Trained PyG GCN model with 95%+ ROC-AUC", "Confusion matrix & F1-score evaluation report", "Embeddings visualizer"] },
        { phase: 4, title: "Real-Time Scoring API & 3D Visualizer", duration: "Week 8–10", status: "In Progress", description: "Expose graph scoring endpoints and build React 3D Force-Graph UI.", cliCommands: "npm run dev --prefix frontend\nuvicorn api.main:app --port 8000", keyDeliverables: ["Interactive 3D graph visualizer with zoom/pan/filter", "Live risk scoring API", "Node inspection modal"] },
        { phase: 5, title: "Compliance Automation & Viva Defense Prep", duration: "Week 11–12", status: "Upcoming", description: "Implement automated SAR PDF generator and prepare examiner graph defense.", cliCommands: "pytest tests/ --cov=api\npython scripts/export_sar_report.py --ring-id 4", keyDeliverables: ["Automated SAR PDF report generator", "Comprehensive project thesis document", "Examiner viva defense Q&A guide"] }
      ],
      practicalImprovements: {
        commonPitfalls: [
          { issue: "Class Imbalance (Mule accounts are < 1% of total bank accounts)", fix: "Use Focal Loss and GraphSMOTE synthetic minority oversampling during GCN training." },
          { issue: "Graph Scalability / Out of Memory on Large Node Sets", fix: "Implement NeighborSampler / Cluster-GCN mini-batching to train on subgraphs without loading entire graph into GPU RAM." }
        ],
        highImpactInnovations: [
          { title: "Temporal Graph Attention Network (TGAT)", description: "Weights transactions by time interval between rapid transfers to catch micro-layering in under 60 seconds.", impact: "+20% Novelty Score" },
          { title: "Automated Regulatory SAR Filing Assistant", description: "Uses fine-tuned NLP model to generate 2-page narrative reports ready for financial intelligence regulators.", impact: "High Placement Portfolio Value" }
        ],
        hardwareOptimization: "Runs completely locally on standard laptops using CPU PyTorch Geometric and Neo4j Community Edition with zero paid cloud bills.",
        vivaHotspots: [
          { question: "Why are Graph Neural Networks superior to standard Random Forests for fraud detection?", answer: "Tabular models treat transactions independently, missing multi-hop structural relationships. GCNs aggregate neighborhood features across layers to expose coordinated rings." },
          { question: "How does the system prevent false positives on legitimate high-volume merchants?", answer: "The model incorporates degree centrality and historical business vertex features to distinguish verified merchant hubs from disposable mule accounts." }
        ]
      }
    },
    {
      id: "SMART-AGRI",
      title: "Edge-AI Smart Irrigation & Hyper-Local Yield Optimization Engine",
      shortCode: "SMART-AGRI",
      domain: "Smart Agriculture & IoT",
      difficulty: "Intermediate-Advanced Capstone",
      noveltyScore: 95,
      overview: {
        problemStatement: "Traditional flood irrigation and static timer schedules deplete precious groundwater tables and cause fertilizer leaching while still exposing crops to drought stress.",
        proposedSolution: "An Edge-AI precision farming platform integrating low-cost IoT soil moisture/NPK sensors, satellite vegetation indices (Sentinel-2 NDVI), and predictive micro-climate AI to optimize water schedules and save up to 40% water.",
        targetUsers: "Farmers, Agricultural Extension Officers, Precision Irrigation System Manufacturers",
        realWorldImpact: "Saves 35-40% irrigation water, increases crop yield by 18%, and reduces pumping electricity costs significantly."
      },
      scope: {
        mvp: [
          "IoT sensor simulator generating soil moisture, temperature, humidity, and NPK telemetry",
          "Evapotranspiration (ET0) machine learning model predicting 48-hour irrigation requirements",
          "Interactive farmer command dashboard with automated valve toggles and alert triggers",
          "WhatsApp/SMS alert dispatch service for frost and drought warnings"
        ],
        v2: [
          "Satellite Sentinel-2 NDVI multispectral imagery overlay for canopy health scoring",
          "Hyper-local weather API integration with rainfall probability forecasting",
          "Multi-zone crop rotation water budget tracker"
        ],
        v3: [
          "Edge micro-controller (ESP32) TinyML offline inference deployment",
          "Solar-powered autonomous drip irrigation valve mesh network"
        ]
      },
      techStack: [
        { layer: "AI / ML", name: "Scikit-Learn (RandomForest) + FAO-56 Penman-Monteith", icon: "cpu", whySelected: "Combines empirical agronomic physics with machine learning for reliable water balance forecasting." },
        { layer: "Backend", name: "FastAPI + MQTT Broker (Eclipse Mosquitto)", icon: "server", whySelected: "Lightweight MQTT pub/sub protocol ensures reliable telemetry streaming even over weak rural 2G/3G networks." },
        { layer: "Database", name: "TimescaleDB / PostgreSQL 15", icon: "database", whySelected: "Optimized time-series relational store for continuous sensor readings and automated downsampling." },
        { layer: "Frontend", name: "React + Leaflet.js / Mapbox", icon: "layout", whySelected: "Displays interactive farm plot maps with real-time moisture heatmaps and valve controls." },
        { layer: "Edge IoT", name: "ESP32 Simulator / C++", icon: "cloud", whySelected: "Low-cost micro-controller simulator requiring zero expensive hardware purchases for testing." }
      ],
      architectureNodes: [
        { id: "sensors", title: "IoT Field Sensors", tech: "ESP32 / MQTT Client", role: "Simulates soil moisture, temp, humidity, and NPK readings.", type: "client" },
        { id: "mqtt", title: "MQTT Broker", tech: "Eclipse Mosquitto", role: "Low-latency message broker receiving sensor packets.", type: "api" },
        { id: "agri_ai", title: "Irrigation Prediction AI", tech: "Python FastAPI + RF Model", role: "Calculates daily crop water requirements (ET0) and schedules valve openings.", type: "ai" },
        { id: "ts_db", title: "Time-Series DB", tech: "PostgreSQL 15 + TimescaleDB", role: "Stores historical moisture trends and rainfall data.", type: "storage" },
        { id: "dashboard", title: "Farmer Command UI", tech: "React + Leaflet Map", role: "Displays farm zones, moisture gauges, and automated valve toggles.", type: "client" }
      ],
      erDiagram: {
        tables: [
          { name: "farm_plots", columns: ["id (UUID PK)", "plot_name (VARCHAR)", "crop_type (VARCHAR)", "area_hectares (FLOAT)"] },
          { name: "sensor_telemetry", columns: ["id (UUID PK)", "plot_id (FK)", "moisture_pct (FLOAT)", "temp_c (FLOAT)", "recorded_at (TIMESTAMP)"] },
          { name: "irrigation_events", columns: ["id (UUID PK)", "plot_id (FK)", "liters_delivered (FLOAT)", "duration_min (INT)", "triggered_by (VARCHAR)"] }
        ]
      },
      developmentSteps: [
        { phase: 1, title: "Environment & IoT Simulation Setup", duration: "Week 1–2", status: "Completed", description: "Set up Mosquitto MQTT broker and create synthetic field telemetry script.", cliCommands: "docker run -d -p 1883:1883 eclipse-mosquitto\npip install fastapi paho-mqtt scikit-learn pandas", keyDeliverables: ["Local MQTT broker running", "Synthetic ESP32 telemetry simulator script", "Repository boilerplate"] },
        { phase: 2, title: "Agronomic Dataset Formulation & ET0 Modeling", duration: "Week 3–4", status: "Completed", description: "Implement FAO-56 Penman-Monteith equation and train Random Forest regressor.", cliCommands: "python ml/train_irrigation_model.py --dataset data/agri_weather.csv", keyDeliverables: ["Trained irrigation recommendation model", "Validation metrics (R² > 0.91)", "Model pickle artifact"] },
        { phase: 3, title: "FastAPI Streaming & Database Ingestion", duration: "Week 5–7", status: "Completed", description: "Build FastAPI service with background MQTT subscriber to ingest readings.", cliCommands: "uvicorn backend.main:app --port 8000 --reload", keyDeliverables: ["FastAPI MQTT background worker", "Time-series database schema with indexes", "Valve control REST endpoints"] },
        { phase: 4, title: "Interactive Farmer Dashboard & Plot Map", duration: "Week 8–10", status: "In Progress", description: "Build responsive React dashboard with Leaflet map and live moisture telemetry.", cliCommands: "npm run dev --prefix frontend", keyDeliverables: ["Interactive farm plot map with color-coded moisture levels", "Live sensor gauges", "Manual override valve switches"] },
        { phase: 5, title: "Field Testing Simulation & Viva Defense Prep", duration: "Week 11–12", status: "Upcoming", description: "Run 30-day simulated drought test and compile project thesis documentation.", cliCommands: "python tests/simulate_30_day_drought.py\npytest tests/ -v", keyDeliverables: ["30-day water conservation comparative benchmark report", "Final IEEE documentation & architecture poster", "Viva defense Q&A cards"] }
      ],
      practicalImprovements: {
        commonPitfalls: [
          { issue: "Sensor Calibration Drift in Saline / Clay Soils", fix: "Implement Software Calibration Curve: Normalize raw ADC capacitive readings against dry-point and saturation-point thresholds." },
          { issue: "Network Loss in Rural Areas", fix: "Edge Offline Fallback: Store sensor readings locally in SQLite / Flash memory and sync via batch POST upon reconnection." }
        ],
        highImpactInnovations: [
          { title: "Satellite Sentinel-2 NDVI Integration", description: "Pulls free 10m-resolution European Space Agency imagery to cross-validate ground sensor health with canopy chlorophyll index.", impact: "+25% Academic Innovation Score" },
          { title: "Voice-Based Vernacular Advisory", description: "Integrates Web Speech API to read out irrigation advice in regional languages.", impact: "High Social Impact" }
        ],
        hardwareOptimization: "Entire IoT network simulated via software scripts; optional $5 ESP32 board for physical hardware viva demonstration.",
        vivaHotspots: [
          { question: "How does the system differentiate between tomato and rice water needs?", answer: "The model applies crop-specific Kc coefficients (Crop Evapotranspiration Coefficient) varying across growth stages (initial, mid-season, late-season)." },
          { question: "What happens if a soil sensor fails completely?", answer: "The backend detects missing heartbeat packets (>30 mins) and falls back to meteorological ET0 estimates while sending an alert to the farmer." }
        ]
      }
    },
    {
      id: "ZERO-TRUST",
      title: "Autonomous Zero-Trust Network Traffic & Ransomware Lateral Defense",
      shortCode: "ZERO-TRUST",
      domain: "Cyber Defense & Threat Intel",
      difficulty: "Advanced Capstone",
      noveltyScore: 96,
      overview: {
        problemStatement: "Encrypted malware payloads and zero-day ransomware evade traditional signature firewalls by tunneling command-and-control (C2) traffic through standard HTTPS/TLS ports without decryption.",
        proposedSolution: "A real-time deep packet metadata inspector using 1D-CNN + Autoencoders to analyze packet timing, entropy, and flow bursts, identifying lateral movement and isolating compromised nodes with automated firewall rules.",
        targetUsers: "Security Operations Center (SOC) Analysts, Network Administrators, Enterprise Defense Teams",
        realWorldImpact: "Stops ransomware encryption propagation within 3.2 seconds of lateral probing, protecting mission-critical database servers."
      },
      scope: {
        mvp: [
          "PCAP / NetFlow packet flow ingestion pipeline parsing packet timing & byte distributions",
          "Deep Autoencoder detecting statistical entropy & beaconing timing anomalies with 94%+ accuracy",
          "Real-time interactive SOC network topology console with threat alerts",
          "Simulated automated firewall rule injection (iptables simulation)"
        ],
        v2: [
          "MITRE ATT&CK technique matrix mapping for flagged threats",
          "LLM-powered incident response report summarizer with actionable remediation steps",
          "Encrypted TLS SNI / JA3 fingerprint clustering"
        ],
        v3: [
          "Distributed honeypot decoy node network with automated payload capture",
          "Autonomous eBPF kernel-level socket killer"
        ]
      },
      techStack: [
        { layer: "AI / Threat ML", name: "PyTorch (1D-CNN + Autoencoder)", icon: "cpu", whySelected: "Processes raw statistical packet timing sequences without needing decryption, respecting user privacy." },
        { layer: "Packet Processing", name: "Scapy + Pyshark (Python)", icon: "server", whySelected: "Industry-standard packet capture and network dissection libraries." },
        { layer: "Backend", name: "FastAPI + WebSockets", icon: "server", whySelected: "Streams live packet flow metrics to frontend with under 10ms latency." },
        { layer: "Frontend", name: "React + Tailwind + D3.js", icon: "layout", whySelected: "Renders real-time SOC security radar and active node compromise status." },
        { layer: "Deployment", name: "Docker Compose", icon: "cloud", whySelected: "Isolated sandboxed network environment to safely test simulated malware beacons." }
      ],
      architectureNodes: [
        { id: "sniffer", title: "Packet Capture Sniffer", tech: "Scapy / Pyshark", role: "Captures live packet headers and extracts statistical flow metadata.", type: "api" },
        { id: "feature_engine", title: "Flow Feature Extractor", tech: "NumPy + Pandas", role: "Calculates flow duration, packet inter-arrival variance, and entropy.", type: "api" },
        { id: "ai_detector", title: "Anomaly Autoencoder", tech: "PyTorch Deep Learning", role: "Reconstruction error flags encrypted C2 beacons and port scanning.", type: "ai" },
        { id: "soc_console", title: "SOC Threat Radar", tech: "React + WebSockets", role: "Interactive dashboard showing active threat alerts and node statuses.", type: "client" },
        { id: "firewall_actor", title: "Dynamic Firewall Enforcer", tech: "FastAPI + iptables", role: "Injects automated packet-drop rules to isolate hostile IP addresses.", type: "storage" }
      ],
      erDiagram: {
        tables: [
          { name: "monitored_hosts", columns: ["ip_address (VARCHAR PK)", "hostname (VARCHAR)", "subnet (VARCHAR)", "threat_level (VARCHAR)"] },
          { name: "flow_logs", columns: ["id (UUID PK)", "src_ip (VARCHAR)", "dst_ip (VARCHAR)", "dst_port (INT)", "bytes_out (INT)", "timestamp (TIMESTAMP)"] },
          { name: "security_incidents", columns: ["id (UUID PK)", "threat_type (VARCHAR)", "mitre_technique (VARCHAR)", "confidence_pct (FLOAT)", "mitigated (BOOLEAN)"] }
        ]
      },
      developmentSteps: [
        { phase: 1, title: "Environment & CICIDS2017 Dataset Setup", duration: "Week 1–2", status: "Completed", description: "Download standard Canadian Institute for Cybersecurity (CICIDS2017) flow dataset.", cliCommands: "pip install torch scapy pyshark fastapi uvicorn pandas scikit-learn", keyDeliverables: ["Cleaned CICIDS2017 dataset", "PyTorch environment verified", "Packet parser module"] },
        { phase: 2, title: "Flow Feature Engineering & Anomaly AI Model", duration: "Week 3–4", status: "Completed", description: "Train 1D-CNN + Autoencoder on benign traffic to establish baseline reconstruction threshold.", cliCommands: "python ml/train_autoencoder.py --dataset data/cicids.csv --epochs 80", keyDeliverables: ["Trained Deep Autoencoder with 96% ROC-AUC", "Reconstruction error threshold curves", "Inference benchmark"] },
        { phase: 3, title: "FastAPI Telemetry Gateway & Firewall Actor", duration: "Week 5–7", status: "Completed", description: "Build FastAPI engine with real-time socket ingestion and dynamic firewall simulator.", cliCommands: "uvicorn app.server:app --port 8000 --reload", keyDeliverables: ["FastAPI WebSocket pipeline", "Automated IP isolation service", "REST alert endpoints"] },
        { phase: 4, title: "React SOC Dashboard & MITRE ATT&CK View", duration: "Week 8–10", status: "In Progress", description: "Build SOC security terminal with live packet stream and MITRE technique tags.", cliCommands: "npm run dev --prefix frontend", keyDeliverables: ["Interactive SOC network topology map", "Real-time threat feed with sound/visual alert triggers", "MITRE matrix inspector"] },
        { phase: 5, title: "Penetration Test Simulation & Thesis Defense", duration: "Week 11–12", status: "Upcoming", description: "Simulate live Port Scan / C2 beaconing attack and document defense results.", cliCommands: "python tests/simulate_c2_beacon.py --target 192.168.1.50\npytest tests/ -v", keyDeliverables: ["Automated penetration test validation video", "Complete IEEE project thesis (PDF)", "Viva defense slide deck"] }
      ],
      practicalImprovements: {
        commonPitfalls: [
          { issue: "High False Positives on Software Updates / Cloud Sync", fix: "Implement Adaptive Baseline Whitelisting: Whitelist verified digital signatures and trusted CDN subnets." },
          { issue: "Packet Drop Under High Gigabit Traffic Volume", fix: "Process Flow Summary Metadata: Aggregate packet headers into 5-tuple flow records rather than inspecting every single payload byte." }
        ],
        highImpactInnovations: [
          { title: "JA3/JA3S TLS Client Fingerprinting", description: "Extracts TLS handshake cipher suite order to identify specific malware toolkits before payload transmission.", impact: "+25% Innovation Score" },
          { title: "Generative AI Incident Triage Playbook", description: "Generates step-by-step PowerShell / Bash forensic recovery commands for the SOC operator.", impact: "High Industry Relevance" }
        ],
        hardwareOptimization: "Trained and evaluated on CPU without needing dedicated enterprise firewalls; uses simulated PCAP replays.",
        vivaHotspots: [
          { question: "How does your system detect threats without decrypting HTTPS traffic?", answer: "It inspects packet size sequences, inter-arrival time distributions, and byte entropy ratios, which form distinct statistical signatures even under encryption." },
          { question: "What prevents an attacker from disguising traffic as ordinary browsing?", answer: "Malware beacons exhibit periodic timing intervals (jitter) and fixed heartbeat packet sizes that statistically diverge from human bursty web browsing." }
        ]
      }
    }
  ],

  // 12-Week Roadmap
  roadmapMilestones: [
    {
      week: 1,
      title: "Research, Problem Validation & Dataset Formulation",
      phase: "Discovery & Planning",
      progress: 100,
      completed: true,
      tasks: [
        { id: "t-1", title: "Conduct clinical workflow interview with local hospital emergency staff", done: true, hours: 4 },
        { id: "t-2", title: "Acquire PhysioNet emergency department synthetic patient arrivals dataset", done: true, hours: 6 },
        { id: "t-3", title: "Document Functional & Non-Functional Requirements", done: true, hours: 3 }
      ],
      aiTip: "Ensure timestamp formats are standardized in UTC across all simulation batches."
    },
    {
      week: 2,
      title: "System Architecture, ER Design & API Contract",
      phase: "Architecture Design",
      progress: 100,
      completed: true,
      tasks: [
        { id: "t-4", title: "Design PostgreSQL schema with indexed timestamp partitions", done: true, hours: 5 },
        { id: "t-5", title: "Draft OpenAPI 3.0 specification for queue telemetry & predictions", done: true, hours: 4 },
        { id: "t-6", title: "Set up Dockerized development environment", done: true, hours: 3 }
      ],
      aiTip: "Include an acuity score column (1-5 emergency severity) to weight queue delays realistically."
    },
    {
      week: 3,
      title: "Backend Core & Database Integration",
      phase: "Backend Development",
      progress: 100,
      completed: true,
      tasks: [
        { id: "t-7", title: "Implement FastAPI authentication with role-based staff access", done: true, hours: 6 },
        { id: "t-8", title: "Build patient admission and triage ingestion endpoints", done: true, hours: 8 },
        { id: "t-9", title: "Write SQLAlchemy ORM models and Alembic migration scripts", done: true, hours: 5 }
      ],
      aiTip: "Use connection pooling in SQLAlchemy to prevent lock contention during burst patient check-ins."
    },
    {
      week: 4,
      title: "Exploratory Data Analysis & Feature Engineering",
      phase: "ML Pipeline",
      progress: 100,
      completed: true,
      tasks: [
        { id: "t-10", title: "Engineer cyclical time features (hour of day, day of week, holiday flags)", done: true, hours: 7 },
        { id: "t-11", title: "Calculate rolling 30-minute admission velocity and queue departure rates", done: true, hours: 6 },
        { id: "t-12", title: "Perform correlation analysis on doctor-to-patient ratio vs bottleneck delays", done: true, hours: 4 }
      ],
      aiTip: "Feature engineering accounts for 70% of wait-time predictive power; avoid target leakage by lagging features by 15 minutes."
    },
    {
      week: 5,
      title: "Model Training, Baseline Benchmarks & Evaluation",
      phase: "ML Development",
      progress: 80,
      completed: false,
      isCurrent: true,
      tasks: [
        { id: "t-13", title: "Train baseline Linear Regression & Random Forest models", done: true, hours: 5 },
        { id: "t-14", title: "Implement and hyperparameter-tune XGBoost Regressor", done: true, hours: 7 },
        { id: "t-15", title: "Evaluate MAE, RMSE, and R2 across peak morning vs night shifts", done: false, hours: 4 }
      ],
      aiTip: "Currently active: Optimize XGBoost hyperparameters (max_depth=6, learning_rate=0.05, n_estimators=300)."
    },
    {
      week: 6,
      title: "Frontend Dashboard & Telemetry Visualizations",
      phase: "Frontend UI",
      progress: 30,
      completed: false,
      tasks: [
        { id: "t-16", title: "Build real-time waiting room capacity gauge & trend graphs", done: true, hours: 6 },
        { id: "t-17", title: "Integrate WebSocket subscriber for live crowd spike warnings", done: false, hours: 5 },
        { id: "t-18", title: "Create department triage filter (Trauma vs General OPD)", done: false, hours: 4 }
      ],
      aiTip: "Keep charts minimalist so nurses can parse waiting room status in under 2 seconds."
    },
    {
      week: 7,
      title: "AI Explanation Layer & Gemini Integration",
      phase: "Advanced AI",
      progress: 0,
      completed: false,
      tasks: [
        { id: "t-19", title: "Create Gemini prompt for automated shift bottleneck debriefs", done: false, hours: 5 },
        { id: "t-20", title: "Implement smart staffing recommendation generator", done: false, hours: 4 }
      ],
      aiTip: "Pass SHAP importance values into the Gemini prompt so explanations cite concrete drivers (e.g. '3 concurrent ambulance arrivals')."
    },
    {
      week: 8,
      title: "Full-Stack Integration & End-to-End Testing",
      phase: "Integration",
      progress: 0,
      completed: false,
      tasks: [
        { id: "t-21", title: "Connect React client with FastAPI prediction endpoints", done: false, hours: 6 },
        { id: "t-22", title: "Implement comprehensive PyTest test suite (unit + integration)", done: false, hours: 8 }
      ],
      aiTip: "Mock external weather API calls in tests to maintain fast CI execution."
    },
    {
      week: 9,
      title: "Containerization, Cloud Deployment & Staging",
      phase: "DevOps & Cloud",
      progress: 0,
      completed: false,
      tasks: [
        { id: "t-23", title: "Build multi-stage Docker images for backend & frontend", done: false, hours: 5 },
        { id: "t-24", title: "Deploy API to Render / Cloud Run with PostgreSQL cloud instance", done: false, hours: 6 }
      ],
      aiTip: "Configure CORS headers and healthcheck ping routes (/api/health)."
    },
    {
      week: 10,
      title: "Stress Testing, Performance Tuning & Code Review",
      phase: "Optimization",
      progress: 0,
      completed: false,
      tasks: [
        { id: "t-25", title: "Run Locust load tests simulating 500 concurrent clinic check-ins", done: false, hours: 5 },
        { id: "t-26", title: "Implement Redis query caching for 1-minute windowed forecasts", done: false, hours: 4 }
      ],
      aiTip: "Caching predictions for 60 seconds eliminates 90% of redundant ML inferencing."
    },
    {
      week: 11,
      title: "Final Documentation, IEEE Report & User Guide",
      phase: "Documentation",
      progress: 0,
      completed: false,
      tasks: [
        { id: "t-27", title: "Compile 15-section final college project report", done: false, hours: 10 },
        { id: "t-28", title: "Record high-resolution 3-minute video demonstration", done: false, hours: 4 }
      ],
      aiTip: "Highlight the contrast between static legacy queues and dynamic AI crowd forecasting."
    },
    {
      week: 12,
      title: "Viva Defense Preparation & Project Presentation",
      phase: "Presentation & Viva",
      progress: 0,
      completed: false,
      tasks: [
        { id: "t-29", title: "Generate 20 viva defense answers with ProjectForge Viva Simulator", done: false, hours: 4 },
        { id: "t-30", title: "Practice slide deck presentation and architecture walkthrough", done: false, hours: 5 }
      ],
      aiTip: "Be prepared to justify why XGBoost was preferred over deep learning for tabular triage data."
    }
  ],

  // AI Mentor Chat History & Pre-built Context
  mentorChat: [
    {
      id: "m-1",
      sender: "student",
      timestamp: "10:14 AM",
      text: "My XGBoost wait-time prediction model currently yields an R2 score of only 68% on the test split. What strategies should I use to push it past 85%?"
    },
    {
      id: "m-2",
      sender: "mentor",
      timestamp: "10:15 AM",
      text: `Here is a systematic diagnosis of why tabular hospital triage models hit a 65–70% ceiling and how to fix it:

### 1. Root Cause Analysis
* **Temporal Autocorrelation Overlooked**: Patient arrivals are non-stationary; predicting wait times without lagging previous 30-minute queue congestion misses arrival momentum.
* **Missing Doctor-to-Patient Ratio**: A queue of 15 patients moves rapidly with 4 physicians but creates a deadlock with 1.
* **Acuity Bias**: Emergency Level 1 patients (cardiac arrest) preempt Level 4 patients, distorting standard FIFO regression.

### 2. Concrete Debugging Checklist
- [ ] Add \`lag_queue_length_15m\` and \`lag_queue_length_30m\` as input features.
- [ ] Feature engineer \`physician_availability_ratio\` = (On-duty Doctors) / (Current Waiting Patients + 1).
- [ ] Log-transform target variable \`wait_time_minutes\` using \`np.log1p()\` to mitigate long-tail emergency delays.

### 3. Recommended Experiments
\`\`\`python
# Example feature enhancement
df['queue_pressure'] = df['active_waiting_count'] / (df['active_physicians'] + 1e-5)
df['sin_hour'] = np.sin(2 * np.pi * df['arrival_hour'] / 24.0)
df['cos_hour'] = np.cos(2 * np.pi * df['arrival_hour'] / 24.0)
\`\`\`

### 4. Next Step
Implement the \`queue_pressure\` feature and run a 5-fold TimeSeriesSplit. Your R2 will reliably jump to 84–89%.`
    }
  ],

  // ML Experiment Tracker
  experiments: [
    {
      id: "exp-1",
      name: "Baseline Linear Regression",
      model: "Linear Regression (Scikit-Learn)",
      mae: "18.4 mins",
      rmse: "24.1 mins",
      r2Score: 0.62,
      trainingTime: "0.8s",
      status: "Superseded",
      notes: "High bias; fails to capture non-linear surge spikes during shift changeovers."
    },
    {
      id: "exp-2",
      name: "Random Forest Regressor (n=150)",
      model: "Random Forest",
      mae: "11.2 mins",
      rmse: "15.8 mins",
      r2Score: 0.79,
      trainingTime: "12.4s",
      status: "Candidate",
      notes: "Significant improvement. High memory footprint when exporting to ONNX runtime."
    },
    {
      id: "exp-3",
      name: "XGBoost with Lagged Queue Pressures (Current)",
      model: "XGBoost Regressor (max_depth=6)",
      mae: "6.8 mins",
      rmse: "9.1 mins",
      r2Score: 0.89,
      trainingTime: "4.2s",
      status: "Recommended Best",
      notes: "Top performer! Superior latency, handles non-linear interactions, robust to outliers."
    }
  ],

  // Viva Defense Simulator Questions
  vivaQuestions: [
    {
      id: "v-1",
      category: "AI/ML Architecture",
      difficulty: "Technical",
      question: "Why did you choose an XGBoost regressor over an LSTM or Deep Neural Network for wait-time prediction?",
      idealAnswer: "Tabular clinical queue data is dominated by dense, heterogeneous scalar features (staff counts, acuity codes, time-of-day) where decision tree ensembles consistently outperform deep networks. XGBoost handles missing data without imputation, trains in seconds rather than hours, avoids overfitting on moderate dataset sizes, and enables SHAP feature interpretability for medical compliance.",
      keyConcepts: ["Tabular data efficiency", "SHAP interpretability", "Overfitting prevention", "Training latency"]
    },
    {
      id: "v-2",
      category: "System Architecture",
      difficulty: "Architecture",
      question: "How does your system prevent race conditions when multiple triage nurses admit patients simultaneously?",
      idealAnswer: "We utilize PostgreSQL row-level locking (SELECT ... FOR UPDATE) inside transactional database boundaries combined with an atomic Redis INCR command to maintain the live queue head count before committing the complete triage record.",
      keyConcepts: ["ACID transactions", "PostgreSQL FOR UPDATE", "Redis atomic operations", "Concurrency control"]
    },
    {
      id: "v-3",
      category: "Data & Ethics",
      difficulty: "Difficult",
      question: "What measures protect sensitive patient health information (PHI) in compliance with healthcare regulations?",
      idealAnswer: "The crowd forecasting engine does not consume or persist any personally identifiable information (PII). All input telemetry is strictly de-identified into numerical aggregates (acuity class, arrival timestamp, assigned department), and synthetic datasets were generated using differential privacy parameters.",
      keyConcepts: ["HIPAA / PHI compliance", "De-identification", "Differential privacy", "Zero-PII telemetry"]
    },
    {
      id: "v-4",
      category: "Deployment & Scaling",
      difficulty: "Industry-level",
      question: "What happens to your prediction pipeline if the incoming telemetry stream surges from 10 to 1,000 events per second?",
      idealAnswer: "FastAPI acts as an asynchronous producer pushing events into a Redis buffer queue. Celery or asynchronous background workers consume batches from Redis, preventing database connection exhaustion and decoupling ingestion from ML inferencing.",
      keyConcepts: ["Message queuing (Redis)", "Backpressure management", "Asynchronous worker pools", "Horizontal scaling"]
    }
  ],

  // Team Builder State
  teamMembers: [
    {
      name: "Alex Rivera",
      role: "AI / ML & Pipeline Lead",
      skills: ["Python", "XGBoost", "FastAPI", "Pandas"],
      coverage: ["Model Training", "Prediction API", "Pipeline Integration"],
      workloadPct: 35
    },
    {
      name: "Priya Sharma",
      role: "Frontend & UI/UX Architect",
      skills: ["React", "Tailwind CSS", "Recharts", "WebSockets"],
      coverage: ["Telemetry Dashboard", "Alert UI", "Responsive Design"],
      workloadPct: 35
    },
    {
      name: "Rohan Verma",
      role: "Backend & Database Engineer",
      skills: ["PostgreSQL", "Docker", "SQLAlchemy", "Redis"],
      coverage: ["Schema Design", "DB Migrations", "Caching & Security"],
      workloadPct: 30
    }
  ],

  // Faculty / College View Data
  facultyProjects: [
    {
      team: "Team 04 (Alex, Priya, Rohan)",
      project: "AI Hospital Crowd Intelligence",
      category: "Healthcare / AI",
      progress: 54,
      status: "On Track",
      riskLevel: "Low",
      score: 91
    },
    {
      team: "Team 12 (Aditya, Meera)",
      project: "Autonomous Drone Crop Disease Detector",
      category: "Agriculture / Computer Vision",
      progress: 38,
      status: "At Risk (Dataset delayed)",
      riskLevel: "High",
      score: 84
    },
    {
      team: "Team 07 (Kavya, Siddharth, Vikram)",
      project: "Zero-Knowledge Cloud Identity Ledger",
      category: "Cybersecurity / Web3",
      progress: 68,
      status: "Ahead of Schedule",
      riskLevel: "Low",
      score: 89
    },
    {
      team: "Team 19 (Rahul, Sneha)",
      project: "Adaptive Learning Engine for Dyslexia",
      category: "Accessibility / EdTech",
      progress: 46,
      status: "On Track",
      riskLevel: "Medium",
      score: 87
    }
  ],

  // Project Evolution Versions
  evolutionVersions: [
    {
      version: "v1.0 - Basic MVP",
      summary: "Single-script model with local CSV files and rudimentary Flask UI",
      weaknesses: ["No streaming ingestion", "Hardcoded parameters", "No explainability layer", "High inference latency"],
      architecture: "Client -> Flask App -> Pickled Model -> CSV Storage",
      status: "Completed (Week 3)"
    },
    {
      version: "v2.0 - Decoupled Architecture (Current)",
      summary: "FastAPI microservice, PostgreSQL DB with indexed timestamps, React live charts, and XGBoost pipeline",
      improvements: ["Sub-50ms query response", "WebSocket real-time crowd alerts", "Doctor shift summary generator", "89% R2 accuracy"],
      architecture: "React Client -> FastAPI REST/WS -> Redis Cache -> XGBoost Service -> PostgreSQL",
      status: "In Progress (Week 5)"
    },
    {
      version: "v3.0 - Industry-Ready Staging",
      summary: "Containerized multi-node deployment with automated model retraining, SHAP explainability, and CI/CD pipelines",
      improvements: ["Zero-downtime rolling updates", "Differential privacy sanitization", "Prometheus telemetry", "Mobile patient QR tracker"],
      architecture: "CDN -> Load Balancer -> Docker Swarm -> FastAPI Cluster -> PostgreSQL Replica -> Managed Redis",
      status: "Planned (Week 9-11)"
    }
  ]
};

// Export to window for browser SPA usage
if (typeof window !== 'undefined') {
  window.MockData = MockData;
}
