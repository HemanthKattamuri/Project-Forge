// ProjectForge AI - Master Application Controller & Component Router

const App = {
  currentView: 'landing',
  theme: localStorage.getItem('pf_theme') || 'aurora',
  profile: null,
  activeProject: null,
  roadmap: [],
  notifications: [],

  init() {
    // Check if user previously cleared all data
    const isCleared = localStorage.getItem('pf_cleared') === 'true';

    // Load state from localStorage or initialize
    const savedProfile = localStorage.getItem('pf_profile');
    if (savedProfile) {
      this.profile = JSON.parse(savedProfile);
    } else if (isCleared) {
      this.profile = {
        name: "Student Scholar",
        email: "student@university.edu",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
        college: "Engineering & Technology Institute",
        academicBranch: "Computer Science & Engineering",
        experienceLevel: "Final Year Student",
        careerGoal: "Software & AI Engineer",
        skills: [],
        interests: [],
        constraints: { duration: "12 Weeks", teamSize: 1, budget: "₹0 (Free Tier / Open Source)", experienceLevel: "Final Year Student" },
        resources: [],
        projectPreference: "College final-year project",
        projectMode: "Academic Mode"
      };
    } else {
      this.profile = JSON.parse(JSON.stringify(MockData.studentProfile));
    }

    const savedProject = localStorage.getItem('pf_active_project');
    if (savedProject) {
      this.activeProject = JSON.parse(savedProject);
    } else if (isCleared) {
      this.activeProject = null;
    } else {
      this.activeProject = JSON.parse(JSON.stringify(MockData.activeProject));
    }

    const savedRoadmap = localStorage.getItem('pf_roadmap');
    if (savedRoadmap) {
      this.roadmap = JSON.parse(savedRoadmap);
    } else if (isCleared) {
      this.roadmap = [];
    } else {
      this.roadmap = JSON.parse(JSON.stringify(MockData.roadmapMilestones));
    }

    const savedTeam = localStorage.getItem('pf_team');
    if (savedTeam) {
      MockData.teamMembers = JSON.parse(savedTeam);
    } else if (isCleared) {
      MockData.teamMembers = [];
    }

    // Apply theme
    document.documentElement.setAttribute('data-theme', this.theme);

    // Render shell structure
    this.renderHeaderAndSidebar();

    // Hash change listener
    window.addEventListener('hashchange', () => this.handleHashChange());

    // Initial route
    const initialHash = window.location.hash.replace('#', '');
    if (initialHash && this.isValidView(initialHash)) {
      this.navigate(initialHash, false);
    } else {
      this.navigate('landing', false);
    }

    this.initLucideIcons();
  },

  isValidView(viewName) {
    const validViews = [
      'landing', 'auth', 'onboarding', 'dashboard', 'profile', 'project-dna', 
      'discover-projects', 'compare-projects', 'project-blueprint', 
      'roadmap', 'mentor', 'debugger', 'review', 'evolution', 
      'what-if', 'team-builder', 'viva-simulator', 'documentation', 
      'faculty-dashboard', 'settings'
    ];
    return validViews.includes(viewName);
  },

  handleHashChange() {
    const hash = window.location.hash.replace('#', '');
    if (hash && hash !== this.currentView && this.isValidView(hash)) {
      this.navigate(hash, false);
    }
  },

  navigate(viewName, updateHash = true) {
    if (!this.isValidView(viewName)) return;

    this.currentView = viewName;
    if (updateHash) {
      window.location.hash = viewName;
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update layout visibility and padding
    const isLandingOrAuthOrOnboard = ['landing', 'auth', 'onboarding'].includes(viewName);
    const sidebar = document.getElementById('app-sidebar');
    const header = document.getElementById('app-header');
    const mainContent = document.getElementById('app-main-content');

    if (sidebar && header && mainContent) {
      if (isLandingOrAuthOrOnboard) {
        sidebar.classList.add('hidden');
        sidebar.style.display = 'none';
        header.classList.add('hidden');
        header.style.display = 'none';
        mainContent.classList.remove('md:pl-[270px]', 'pt-16');
      } else {
        sidebar.classList.remove('hidden');
        sidebar.style.display = '';
        header.classList.remove('hidden');
        header.style.display = '';
        mainContent.classList.add('md:pl-[270px]', 'pt-16');
      }
    }

    // Render active view
    this.renderCurrentView();
    this.updateActiveNavLinks();
    this.initLucideIcons();
  },

  updateActiveNavLinks() {
    document.querySelectorAll('.sidebar-nav-item').forEach(el => {
      const target = el.getAttribute('data-view');
      if (target === this.currentView) {
        el.classList.add('bg-sky-500/10', 'text-sky-400', 'border-sky-500/30');
        el.classList.remove('text-slate-400');
      } else {
        el.classList.remove('bg-sky-500/10', 'text-sky-400', 'border-sky-500/30');
        el.classList.add('text-slate-400');
      }
    });
  },

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'aurora' : 'light';
    document.documentElement.setAttribute('data-theme', this.theme);
    localStorage.setItem('pf_theme', this.theme);
    this.showToast(`Switched to ${this.theme === 'light' ? 'Pristine Light' : 'Obsidian Aurora'} mode`, 'success');
    this.renderHeaderAndSidebar();
    this.updateActiveNavLinks();
    this.initLucideIcons();
  },

  saveState() {
    if (this.profile) localStorage.setItem('pf_profile', JSON.stringify(this.profile));
    if (this.activeProject) {
      localStorage.setItem('pf_active_project', JSON.stringify(this.activeProject));
    } else {
      localStorage.removeItem('pf_active_project');
    }
    if (this.roadmap) localStorage.setItem('pf_roadmap', JSON.stringify(this.roadmap));
    if (MockData.teamMembers) localStorage.setItem('pf_team', JSON.stringify(MockData.teamMembers));
  },

  clearAllData() {
    // Clear all localStorage keys
    localStorage.clear();
    localStorage.setItem('pf_cleared', 'true');

    // Reset in-memory profile and states to clean zero-data state
    this.profile = {
      name: "Student Scholar",
      email: "student@university.edu",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      college: "Engineering & Technology Institute",
      academicBranch: "Computer Science & Engineering",
      experienceLevel: "Final Year Student",
      careerGoal: "Software & AI Engineer",
      skills: [],
      interests: [],
      constraints: { duration: "12 Weeks", teamSize: 1, budget: "₹0 (Free Tier / Open Source)", experienceLevel: "Final Year Student" },
      resources: [],
      projectPreference: "College final-year project",
      projectMode: "Academic Mode"
    };

    this.activeProject = null;
    this.roadmap = [];
    this.ideaModalState = {
      step: 'config',
      domain: 'Healthcare & Bio-AI',
      customDomain: '',
      skills: [],
      weeks: '12 Weeks',
      budget: '₹0 (Free Tier / Open Source)',
      teamSize: '2-3 Students',
      outcome: 'Top-Scoring Capstone',
      results: []
    };

    MockData.teamMembers = [];
    if (typeof Views !== 'undefined') {
      Views.currentBlueprintId = 'active';
    }

    this.saveState();
    localStorage.setItem('pf_cleared', 'true');

    this.renderHeaderAndSidebar();
    this.navigate('dashboard');
    this.initLucideIcons();
  },

  triggerClearDataPopup() {
    // Remove any existing wipe popup
    const existing = document.getElementById('wipe-workspace-modal');
    if (existing) existing.remove();

    // Create animated popup modal
    const modal = document.createElement('div');
    modal.id = 'wipe-workspace-modal';
    modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in';
    modal.innerHTML = `
      <div class="glass-panel p-8 sm:p-10 max-w-md w-full border-rose-500/40 bg-gradient-to-b from-slate-900/95 via-rose-950/20 to-slate-950/95 text-center space-y-6 shadow-2xl relative overflow-hidden">
        <!-- Ambient Glowing Aura -->
        <div class="absolute -top-24 -left-24 w-48 h-48 bg-rose-500/20 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute -bottom-24 -right-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <!-- Animated Trash / Wipe Icon -->
        <div class="w-16 h-16 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center mx-auto text-rose-400 shadow-lg shadow-rose-500/20 animate-bounce">
          <i data-lucide="trash-2" class="w-8 h-8"></i>
        </div>

        <!-- Headline & Subtitle -->
        <div class="space-y-2">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-[11px] font-mono font-bold text-rose-300">
            <span class="w-2 h-2 rounded-full bg-rose-400 animate-ping"></span>
            <span>AUTOMATIC WORKSPACE WIPE</span>
          </div>
          <h3 class="font-heading font-extrabold text-2xl text-white tracking-tight">Clearing All Workspace Data</h3>
          <p class="text-xs text-slate-300 leading-relaxed">
            Automatically deleting all local project blueprints, roadmaps, student profiles, and resetting to clean state...
          </p>
        </div>

        <!-- Dynamic Status Progress Steps -->
        <div class="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-2 text-left text-xs font-mono">
          <div class="flex items-center justify-between text-slate-300">
            <span class="flex items-center gap-2">
              <i data-lucide="check" class="w-3.5 h-3.5 text-emerald-400"></i>
              Purging local database
            </span>
            <span class="text-[10px] text-emerald-400 font-bold">100%</span>
          </div>
          <div class="flex items-center justify-between text-slate-300">
            <span class="flex items-center gap-2">
              <i data-lucide="check" class="w-3.5 h-3.5 text-emerald-400"></i>
              Releasing active project state
            </span>
            <span class="text-[10px] text-emerald-400 font-bold">100%</span>
          </div>
          <div class="flex items-center justify-between text-sky-300">
            <span class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              Restoring clean dashboard
            </span>
            <span class="text-[10px] text-cyan-300 font-bold">READY</span>
          </div>
        </div>

        <!-- Animated Progress Fill Bar -->
        <div class="space-y-1.5">
          <div class="w-full bg-slate-800 h-2 rounded-full overflow-hidden p-[1px]">
            <div id="wipe-progress-bar" class="w-0 h-full rounded-full bg-gradient-to-r from-rose-500 via-amber-400 to-cyan-400 transition-all duration-1000 ease-out"></div>
          </div>
          <p class="text-[11px] text-slate-500 font-mono">Deleting and redirecting automatically...</p>
        </div>
      </div>
    `;

    document.body.appendChild(modal);
    this.initLucideIcons();

    // Trigger bar animation
    setTimeout(() => {
      const bar = document.getElementById('wipe-progress-bar');
      if (bar) bar.style.width = '100%';
    }, 60);

    // Automatically delete and redirect after 1.2s without requiring any user instruction
    setTimeout(() => {
      this.clearAllData();
      modal.remove();
      this.triggerConfetti();
      this.showToast('🧹 Workspace wiped clean! All data automatically deleted.', 'success');
    }, 1200);
  },

  resetWorkspace() {
    localStorage.removeItem('pf_profile');
    localStorage.removeItem('pf_active_project');
    localStorage.removeItem('pf_roadmap');
    localStorage.removeItem('pf_team');
    localStorage.removeItem('pf_cleared');
    
    // Deep clone default state
    this.profile = JSON.parse(JSON.stringify(MockData.studentProfile));
    this.activeProject = JSON.parse(JSON.stringify(MockData.activeProject));
    this.roadmap = JSON.parse(JSON.stringify(MockData.roadmapMilestones));
    MockData.teamMembers = [
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
    ];

    this.saveState();
    this.renderHeaderAndSidebar();
    this.navigate('dashboard');
    this.renderCurrentView();
    this.initLucideIcons();
    this.triggerConfetti();
    this.showToast('Workspace successfully restored with demo project!', 'success');
  },

  resetDemoData() {
    this.resetWorkspace();
  },

  showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    const bgClass = type === 'success' ? 'border-emerald-500/40 bg-emerald-950/80 text-emerald-200' :
                    type === 'error' ? 'border-rose-500/40 bg-rose-950/80 text-rose-200' :
                    'border-sky-500/40 bg-slate-900/90 text-sky-200';

    toast.className = `flex items-center gap-3 px-4 py-3 rounded-xl border backdrop-blur-md shadow-2xl animate-fade-in transition-all duration-300 ${bgClass}`;
    toast.innerHTML = `
      <i data-lucide="${type === 'success' ? 'check-circle' : type === 'error' ? 'alert-triangle' : 'info'}" class="w-5 h-5 flex-shrink-0"></i>
      <span class="text-sm font-medium">${message}</span>
    `;

    container.appendChild(toast);
    this.initLucideIcons();

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(-10px)';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  },

  triggerConfetti() {
    if (typeof confetti === 'function') {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  },

  initLucideIcons() {
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
      lucide.createIcons();
    }
  },

  // Shell Layout (Sidebar & Header)
  renderHeaderAndSidebar() {
    const sidebarContainer = document.getElementById('app-sidebar');
    const headerContainer = document.getElementById('app-header');

    if (sidebarContainer) {
      sidebarContainer.innerHTML = `
        <div class="h-full flex flex-col p-4 border-r border-slate-800/80 bg-slate-950/95 backdrop-blur-xl overflow-hidden">
          <!-- Logo & Brand -->
          <div class="flex-shrink-0">
            <div class="flex items-center gap-3 px-3 py-3 mb-5 cursor-pointer" onclick="App.navigate('dashboard')">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-sky-500/25">
                <i data-lucide="sparkles" class="w-5 h-5 text-white"></i>
              </div>
              <div>
                <h1 class="font-heading font-bold text-lg tracking-tight text-white flex items-center gap-1.5">
                  ProjectForge <span class="text-xs px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-400 font-mono font-medium">AI</span>
                </h1>
                <p class="text-[11px] text-slate-400 font-medium">Project OS for Engineers</p>
              </div>
            </div>

            <!-- Active Project Chip -->
            ${this.activeProject ? `
              <div class="mb-4 p-3 rounded-xl bg-slate-900/90 border border-slate-800/80 hover:border-slate-700 transition cursor-pointer" onclick="App.navigate('project-blueprint')">
                <div class="flex items-center justify-between text-xs mb-1.5">
                  <span class="text-slate-400 font-medium">Current Project</span>
                  <span class="text-sky-400 font-semibold font-mono">${this.activeProject.shortCode || 'ACTIVE'}</span>
                </div>
                <p class="text-xs font-semibold text-slate-200 truncate">${this.activeProject.title}</p>
                <div class="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div class="bg-gradient-to-r from-sky-400 to-indigo-500 h-full rounded-full transition-all duration-500" style="width: ${this.activeProject.progress || 0}%"></div>
                </div>
                <div class="flex justify-between items-center text-[10px] text-slate-400 mt-1">
                  <span>Sprint Week 5</span>
                  <span class="text-sky-300 font-bold">${this.activeProject.progress || 0}% Complete</span>
                </div>
              </div>
            ` : `
              <div class="mb-4 p-3 rounded-xl bg-slate-900/60 border border-dashed border-slate-800 hover:border-sky-500/50 transition cursor-pointer group" onclick="App.openIdeaGeneratorModal()" title="Synthesize or select a project idea">
                <div class="flex items-center justify-between text-xs mb-1">
                  <span class="text-slate-500 font-medium">Current Project</span>
                  <span class="text-slate-500 font-mono text-[10px]">Clean State</span>
                </div>
                <p class="text-xs font-semibold text-sky-400 flex items-center gap-1.5 group-hover:underline">
                  <i data-lucide="sparkles" class="w-3.5 h-3.5 text-sky-400"></i> Generate Idea
                </p>
                <div class="w-full bg-slate-800/60 h-1 rounded-full mt-2"></div>
                <div class="flex justify-between items-center text-[10px] text-slate-500 mt-1">
                  <span>Workspace Ready</span>
                  <span>0%</span>
                </div>
              </div>
            `}
          </div>

          <!-- Navigation Links (Scrollable with Flexible Height) -->
          <nav class="flex-1 space-y-1 text-sm font-medium overflow-y-auto min-h-0 pr-1 py-1 custom-scrollbar">
            <div class="px-3 pt-2 pb-1 text-[11px] font-semibold tracking-wider uppercase text-slate-500">Core Journey</div>
            <button onclick="App.navigate('dashboard')" data-view="dashboard" class="sidebar-nav-item w-full flex items-center gap-3 px-3 py-2 rounded-xl text-left border border-transparent transition">
              <i data-lucide="layout-dashboard" class="w-4 h-4"></i> Dashboard
            </button>
            <button onclick="App.navigate('project-dna')" data-view="project-dna" class="sidebar-nav-item w-full flex items-center gap-3 px-3 py-2 rounded-xl text-left border border-transparent transition">
              <i data-lucide="dna" class="w-4 h-4"></i> Project DNA
            </button>
            <button onclick="App.navigate('discover-projects')" data-view="discover-projects" class="sidebar-nav-item w-full flex items-center gap-3 px-3 py-2 rounded-xl text-left border border-transparent transition">
              <i data-lucide="compass" class="w-4 h-4"></i> Discover & Refine
            </button>
            <button onclick="App.navigate('compare-projects')" data-view="compare-projects" class="sidebar-nav-item w-full flex items-center gap-3 px-3 py-2 rounded-xl text-left border border-transparent transition">
              <i data-lucide="git-compare" class="w-4 h-4"></i> Compare Ideas
            </button>
            <button onclick="App.navigate('project-blueprint')" data-view="project-blueprint" class="sidebar-nav-item w-full flex items-center gap-3 px-3 py-2 rounded-xl text-left border border-transparent transition">
              <i data-lucide="file-code" class="w-4 h-4"></i> Project Blueprint
            </button>
            <button onclick="App.navigate('roadmap')" data-view="roadmap" class="sidebar-nav-item w-full flex items-center gap-3 px-3 py-2 rounded-xl text-left border border-transparent transition">
              <i data-lucide="milestone" class="w-4 h-4"></i> 12-Week Roadmap
            </button>

            <div class="px-3 pt-4 pb-1 text-[11px] font-semibold tracking-wider uppercase text-slate-500">AI Intelligence</div>
            <button onclick="App.navigate('mentor')" data-view="mentor" class="sidebar-nav-item w-full flex items-center gap-3 px-3 py-2 rounded-xl text-left border border-transparent transition">
              <i data-lucide="bot" class="w-4 h-4"></i> AI Project Mentor
            </button>
            <button onclick="App.navigate('debugger')" data-view="debugger" class="sidebar-nav-item w-full flex items-center gap-3 px-3 py-2 rounded-xl text-left border border-transparent transition">
              <i data-lucide="bug" class="w-4 h-4"></i> Debugging Assistant
            </button>
            <button onclick="App.navigate('review')" data-view="review" class="sidebar-nav-item w-full flex items-center gap-3 px-3 py-2 rounded-xl text-left border border-transparent transition">
              <i data-lucide="shield-check" class="w-4 h-4"></i> Code & Arch Review
            </button>
            <button onclick="App.navigate('evolution')" data-view="evolution" class="sidebar-nav-item w-full flex items-center gap-3 px-3 py-2 rounded-xl text-left border border-transparent transition">
              <i data-lucide="git-branch" class="w-4 h-4"></i> Project Evolution
            </button>
            <button onclick="App.navigate('what-if')" data-view="what-if" class="sidebar-nav-item w-full flex items-center gap-3 px-3 py-2 rounded-xl text-left border border-transparent transition">
              <i data-lucide="sliders" class="w-4 h-4"></i> What-If Simulator
            </button>

            <div class="px-3 pt-4 pb-1 text-[11px] font-semibold tracking-wider uppercase text-slate-500">Defense & Presentation</div>
            <button onclick="App.navigate('team-builder')" data-view="team-builder" class="sidebar-nav-item w-full flex items-center gap-3 px-3 py-2 rounded-xl text-left border border-transparent transition">
              <i data-lucide="users" class="w-4 h-4"></i> Team & Skill Match
            </button>
            <button onclick="App.navigate('viva-simulator')" data-view="viva-simulator" class="sidebar-nav-item w-full flex items-center gap-3 px-3 py-2 rounded-xl text-left border border-transparent transition">
              <i data-lucide="mic" class="w-4 h-4"></i> AI Viva Simulator
            </button>
            <button onclick="App.navigate('documentation')" data-view="documentation" class="sidebar-nav-item w-full flex items-center gap-3 px-3 py-2 rounded-xl text-left border border-transparent transition">
              <i data-lucide="file-text" class="w-4 h-4"></i> Project Report & IEEE
            </button>
            <button onclick="App.navigate('faculty-dashboard')" data-view="faculty-dashboard" class="sidebar-nav-item w-full flex items-center gap-3 px-3 py-2 rounded-xl text-left border border-transparent transition">
              <i data-lucide="graduation-cap" class="w-4 h-4"></i> Faculty Portal
            </button>
          </nav>

          <!-- Bottom Section: Student Profile Card & Controls -->
          <div class="flex-shrink-0 pt-3 mt-auto border-t border-slate-800/80 space-y-2">
            <!-- Student Profile Section Button (Top of Settings & Toggle) -->
            <button onclick="App.navigate('profile')" data-view="profile" class="sidebar-nav-item w-full flex items-center justify-between p-2.5 rounded-xl text-left border border-slate-800 bg-slate-900/80 hover:bg-slate-800/80 hover:border-slate-700 transition group cursor-pointer shadow-sm" title="Open Student Profile">
              <div class="flex items-center gap-2.5 min-w-0">
                <div class="relative flex-shrink-0">
                  <img src="${this.profile?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'}" class="w-8 h-8 rounded-lg object-cover ring-1 ring-slate-700 group-hover:ring-sky-500/50 transition" alt="Avatar">
                  <span class="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 ring-1 ring-slate-950"></span>
                </div>
                <div class="min-w-0 text-left">
                  <p class="text-xs font-semibold text-slate-200 group-hover:text-white transition truncate">${this.profile?.name || 'Student'}</p>
                  <p class="text-[10px] text-slate-400 font-mono truncate">${this.profile?.careerGoal || 'Engineer'}</p>
                </div>
              </div>
              <i data-lucide="chevron-right" class="w-4 h-4 text-slate-500 group-hover:text-slate-300 group-hover:translate-x-0.5 transition flex-shrink-0 ml-1"></i>
            </button>

            <!-- Clean 3-Slot Toolbar (Settings, Theme Toggle, Sign Out) -->
            <div class="grid grid-cols-3 gap-1 p-1 bg-slate-900/80 border border-slate-800 rounded-xl">
              <button onclick="App.navigate('settings')" class="w-full h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition" title="Platform Settings" aria-label="Settings">
                <i data-lucide="settings" class="w-4 h-4"></i>
              </button>
              <button onclick="App.toggleTheme()" class="w-full h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition" title="Toggle Dark/Light Theme" aria-label="Theme Toggle">
                <i data-lucide="${this.theme === 'dark' ? 'sun' : 'moon'}" class="w-4 h-4"></i>
              </button>
              <button onclick="App.navigate('landing')" class="w-full h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition" title="Sign Out to Landing" aria-label="Sign Out">
                <i data-lucide="log-out" class="w-4 h-4"></i>
              </button>
            </div>
          </div>
        </div>
      `;
    }

    if (headerContainer) {
      headerContainer.innerHTML = `
        <div class="h-16 px-6 flex items-center justify-between border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-md sticky top-0 z-30">
          <div class="flex items-center gap-3">
            <button onclick="document.getElementById('app-sidebar').classList.toggle('hidden')" class="md:hidden p-2 text-slate-400 hover:text-white" aria-label="Toggle navigation menu">
              <i data-lucide="menu" class="w-5 h-5"></i>
            </button>
            <div class="flex items-center gap-2">
              <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1.5 shadow-sm">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                AI Copilot Active
              </span>
              <span class="hidden sm:inline-flex text-xs px-2.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 font-medium">
                ${this.profile?.academicBranch || 'Engineering'}
              </span>
            </div>
          </div>

          <div class="flex items-center gap-2.5">
            <!-- Current Project Badge -->
            ${this.activeProject ? `
              <button onclick="App.navigate('project-blueprint')" class="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-sky-500/40 text-xs text-slate-300 transition" title="View Active Project Blueprint">
                <span class="w-2 h-2 rounded-full bg-sky-400"></span>
                <span class="text-slate-400">Project:</span>
                <span class="font-semibold text-sky-300 truncate max-w-[130px]">${this.activeProject.shortCode || 'ACTIVE'}</span>
              </button>
            ` : `
              <button onclick="App.openIdeaGeneratorModal()" class="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/60 border border-dashed border-slate-800 hover:border-sky-500/40 text-xs text-slate-400 hover:text-sky-300 transition" title="Create or select a project">
                <i data-lucide="plus" class="w-3.5 h-3.5 text-sky-400"></i>
                <span>No Project Selected</span>
              </button>
            `}

            <!-- Generate Ideas Action Button (Beside Ask Mentor) -->
            <button onclick="App.openIdeaGeneratorModal()" class="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-heading font-bold bg-slate-900/90 hover:bg-slate-800/90 border border-sky-500/40 text-sky-300 hover:border-sky-400 hover:text-white shadow-sm transition active:scale-95 cursor-pointer" title="Generate & Discover AI Projects via Custom Skills & Timeline">
              <i data-lucide="sparkles" class="w-3.5 h-3.5 text-sky-400"></i>
              <span>Generate Ideas</span>
            </button>

            <!-- Ask Mentor Action Button -->
            <button onclick="App.navigate('mentor')" class="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-heading font-extrabold bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-600 text-slate-950 shadow-md shadow-cyan-500/25 hover:brightness-110 active:scale-95 transition cursor-pointer" title="Chat with AI Project Mentor">
              <i data-lucide="sparkles" class="w-3.5 h-3.5 text-slate-950"></i>
              <span>Ask Mentor</span>
            </button>
          </div>
        </div>
      `;
    }
  },

  // Router to call individual view renders
  renderCurrentView() {
    const mainContent = document.getElementById('app-main-content');
    if (!mainContent) return;

    switch (this.currentView) {
      case 'landing':
        mainContent.innerHTML = Views.renderLanding();
        break;
      case 'auth':
        mainContent.innerHTML = Views.renderAuth();
        break;
      case 'onboarding':
        mainContent.innerHTML = Views.renderOnboarding();
        break;
      case 'dashboard':
        mainContent.innerHTML = Views.renderDashboard();
        break;
      case 'profile':
        mainContent.innerHTML = Views.renderProfile();
        break;
      case 'project-dna':
        mainContent.innerHTML = Views.renderProjectDNA();
        break;
      case 'discover-projects':
        mainContent.innerHTML = Views.renderDiscoverProjects();
        break;
      case 'compare-projects':
        mainContent.innerHTML = Views.renderCompareProjects();
        break;
      case 'project-blueprint':
        mainContent.innerHTML = Views.renderProjectBlueprint();
        break;
      case 'roadmap':
        mainContent.innerHTML = Views.renderRoadmap();
        break;
      case 'mentor':
        mainContent.innerHTML = Views.renderMentor();
        break;
      case 'debugger':
        mainContent.innerHTML = Views.renderDebugger();
        break;
      case 'review':
        mainContent.innerHTML = Views.renderReview();
        break;
      case 'evolution':
        mainContent.innerHTML = Views.renderEvolution();
        break;
      case 'what-if':
        mainContent.innerHTML = Views.renderWhatIf();
        break;
      case 'team-builder':
        mainContent.innerHTML = Views.renderTeamBuilder();
        break;
      case 'viva-simulator':
        mainContent.innerHTML = Views.renderVivaSimulator();
        break;
      case 'documentation':
        mainContent.innerHTML = Views.renderDocumentation();
        break;
      case 'faculty-dashboard':
        mainContent.innerHTML = Views.renderFacultyDashboard();
        break;
      case 'settings':
        mainContent.innerHTML = Views.renderSettings();
        break;
      default:
        mainContent.innerHTML = Views.renderDashboard();
    }
  },

  switchActiveDashboardProject(projectId) {
    let chosen = MockData.blueprintsCatalog?.find(b => b.id === projectId || b.shortCode === projectId);
    if (!chosen && this.ideaModalState?.results) {
      chosen = this.ideaModalState.results.find(b => b.id === projectId);
    }
    if (!chosen) return;

    this.activeProject = JSON.parse(JSON.stringify(chosen));
    if (!this.roadmap || this.roadmap.length === 0) {
      this.roadmap = JSON.parse(JSON.stringify(MockData.roadmapMilestones));
    }
    localStorage.removeItem('pf_cleared');
    this.saveState();
    this.renderHeaderAndSidebar();
    this.renderCurrentView();
    this.initLucideIcons();
    this.showToast(`Switched active project to "${chosen.title}"!`, 'success');
    this.triggerConfetti();
  },

  // ==========================================
  // AI Idea Generator Modal Engine
  // ==========================================
  ideaModalState: {
    step: 'config', // 'config' | 'loading' | 'results'
    domain: 'Healthcare & Bio-AI',
    customDomain: '',
    skills: ['Python', 'Machine Learning', 'FastAPI', 'React', 'SQL'],
    weeks: '12 Weeks',
    budget: '₹0 (Free Tier / Open Source)',
    teamSize: '2-3 Students',
    outcome: 'Top-Scoring Capstone',
    results: []
  },

  openIdeaGeneratorModal() {
    if (this.profile && this.profile.skills && (!this.ideaModalState.skills || this.ideaModalState.skills.length === 0)) {
      this.ideaModalState.skills = this.profile.skills.map(s => typeof s === 'string' ? s : s.name);
    }
    const modal = document.getElementById('idea-generator-modal');
    if (modal) {
      modal.classList.add('active');
      this.renderIdeaModal();
    }
  },

  closeIdeaGeneratorModal() {
    const modal = document.getElementById('idea-generator-modal');
    if (modal) {
      modal.classList.remove('active');
    }
  },

  setModalDomain(domain) {
    this.ideaModalState.domain = domain;
    this.ideaModalState.customDomain = '';
    this.renderIdeaModal();
  },

  setModalCustomDomain(value) {
    this.ideaModalState.customDomain = value;
    if (value.trim()) {
      this.ideaModalState.domain = value.trim();
    }
  },

  toggleModalSkill(skill) {
    const idx = this.ideaModalState.skills.indexOf(skill);
    if (idx >= 0) {
      this.ideaModalState.skills.splice(idx, 1);
    } else {
      this.ideaModalState.skills.push(skill);
    }
    this.renderIdeaModal();
  },

  addModalCustomSkill(e) {
    if (e && e.preventDefault) e.preventDefault();
    const input = document.getElementById('modal-custom-skill-input');
    if (input && input.value.trim()) {
      const val = input.value.trim();
      if (!this.ideaModalState.skills.includes(val)) {
        this.ideaModalState.skills.push(val);
      }
      input.value = '';
      this.renderIdeaModal();
    }
  },

  setModalWeeks(weeks) {
    this.ideaModalState.weeks = weeks;
    this.renderIdeaModal();
  },

  setModalBudget(budget) {
    this.ideaModalState.budget = budget;
    this.renderIdeaModal();
  },

  setModalTeamSize(size) {
    this.ideaModalState.teamSize = size;
    this.renderIdeaModal();
  },

  setModalOutcome(outcome) {
    this.ideaModalState.outcome = outcome;
    this.renderIdeaModal();
  },

  runIdeaGenerator() {
    this.ideaModalState.step = 'loading';
    this.renderIdeaModal();

    setTimeout(() => {
      this.ideaModalState.results = AIEngine.generateTailoredIdeas(this.ideaModalState);
      this.ideaModalState.step = 'results';
      this.renderIdeaModal();
    }, 450);
  },

  resetIdeaModalConfig() {
    this.ideaModalState.step = 'config';
    this.renderIdeaModal();
  },

  adoptIdeaToDashboard(ideaId, openBlueprint = false) {
    const idea = this.ideaModalState.results.find(r => r.id === ideaId) || this.ideaModalState.results[0];
    if (!idea) return;

    // Convert generated idea into active project format
    this.activeProject = {
      id: idea.id,
      title: idea.title,
      shortCode: idea.shortCode || "CAPSTONE-AI",
      academicBranch: this.profile ? this.profile.academicBranch : "Computer Science & Engineering",
      difficulty: idea.pathType || "Capstone / Production",
      timelineDuration: idea.timeline || `${this.ideaModalState.weeks} Phased Sequence`,
      costEstimate: idea.budgetFit || this.ideaModalState.budget,
      teamSize: idea.teamSize || this.ideaModalState.teamSize || "2-3 Students",
      noveltyScore: idea.noveltyScore || 94,
      healthScore: {
        overall: 88,
        metrics: [
          { label: "Schedule Progress", score: 86, status: "On Track" },
          { label: "Technical Architecture", score: 92, status: "Optimal" },
          { label: "Innovation Quality", score: idea.noveltyScore || 94, status: "High" },
          { label: "Testing Coverage", score: 72, status: "Planned" },
          { label: "Documentation", score: 78, status: "In Progress" },
          { label: "Deployment Readiness", score: 80, status: "Configured" }
        ],
        weakestArea: "Testing Coverage (72/100)",
        aiAdvice: `Follow the ${this.ideaModalState.weeks} implementation sequence and establish automated unit test suites for the MVP before midterm evaluation.`
      },
      currentPhase: {
        number: 1,
        title: "Environment Setup & Virtual Ingestion Architecture",
        progressPct: 15,
        deadline: `Week 2 of ${this.ideaModalState.weeks}`,
        actionText: "Open 12-Week Roadmap",
        actionUrl: "roadmap"
      },
      overview: {
        problemStatement: idea.problemStatement,
        proposedSolution: idea.summary,
        targetUsers: "Academic Examiners, Industry Evaluators, Domain Stakeholders",
        realWorldImpact: `Solves core domain challenges within ${this.ideaModalState.weeks} duration under ${this.ideaModalState.budget} budget.`
      },
      scope: {
        mvp: idea.features.mvp,
        v2: idea.features.advanced,
        v3: [
          "Multi-node edge cluster deployment",
          "Continuous model telemetry with automated drift detection",
          "Enterprise authentication & role-based audit trail"
        ]
      },
      techStack: idea.techStack.map((tech, idx) => ({
        layer: idx === 0 ? "Core AI" : idx === 1 ? "Backend" : idx === 2 ? "Frontend" : "Infrastructure",
        name: tech,
        icon: idx === 0 ? "cpu" : idx === 1 ? "server" : idx === 2 ? "layout" : "database",
        whySelected: `Optimal compatibility with ${this.ideaModalState.weeks} execution and ${this.ideaModalState.budget} budget.`
      }))
    };

    // Save and notify
    if (!this.roadmap || this.roadmap.length === 0) {
      this.roadmap = JSON.parse(JSON.stringify(MockData.roadmapMilestones));
    }
    localStorage.removeItem('pf_cleared');
    this.saveState();
    this.closeIdeaGeneratorModal();
    this.renderHeaderAndSidebar();
    
    if (openBlueprint) {
      this.navigate('project-blueprint');
    } else {
      this.navigate('dashboard');
    }

    this.showToast(`🎉 "${idea.title}" is now your active project!`, 'success');
    this.triggerConfetti();
  },

  renderIdeaModal() {
    const container = document.getElementById('idea-generator-modal-content');
    if (!container) return;

    const state = this.ideaModalState;

    if (state.step === 'loading') {
      container.innerHTML = `
        <div class="py-12 px-6 text-center space-y-6">
          <div class="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-tr from-cyan-400 via-sky-500 to-indigo-600 flex items-center justify-center shadow-xl shadow-cyan-500/30 animate-spin">
            <i data-lucide="sparkles" class="w-8 h-8 text-slate-950"></i>
          </div>
          <div class="space-y-2">
            <h3 class="font-heading font-black text-xl text-white">Synthesizing Project Blueprints...</h3>
            <p class="text-xs text-slate-400 max-w-md mx-auto">
              Evaluating <span class="text-sky-300 font-semibold">${state.domain}</span> feasibility with <span class="text-emerald-300 font-semibold">${state.skills.slice(0, 3).join(', ')}</span> within <span class="text-amber-300 font-semibold">${state.weeks}</span> and <span class="text-indigo-300 font-semibold">${state.budget}</span>.
            </p>
          </div>
          <div class="w-64 h-1.5 bg-slate-900 rounded-full mx-auto overflow-hidden">
            <div class="w-full h-full bg-gradient-to-r from-cyan-400 to-indigo-500 animate-pulse"></div>
          </div>
        </div>
      `;
      this.initLucideIcons();
      return;
    }

    if (state.step === 'results') {
      const resultsHtml = state.results.map((idea, idx) => `
        <div class="p-5 rounded-2xl border ${idx === 1 ? 'border-sky-500/50 bg-gradient-to-b from-sky-950/40 via-slate-900/90 to-slate-900/90 shadow-xl shadow-sky-950/50' : 'border-slate-800 bg-slate-900/80'} space-y-4 transition hover:border-slate-700">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold ${idx === 1 ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30' : 'bg-slate-800 text-slate-300'}">${idea.pathType}</span>
              <span class="text-[11px] font-semibold text-slate-400">${idea.domain}</span>
            </div>
            <span class="px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono font-bold text-emerald-400 flex items-center gap-1">
              <i data-lucide="zap" class="w-3 h-3"></i> ${idea.matchScore}% Match
            </span>
          </div>

          <div>
            <h4 class="font-heading font-black text-base text-white hover:text-sky-300 transition">${idea.title}</h4>
            <p class="text-xs text-slate-300 mt-1.5 leading-relaxed">${idea.summary}</p>
          </div>

          <!-- MoSCoW Scope Highlights -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
            <div class="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <span class="font-mono font-bold text-emerald-400 flex items-center gap-1 mb-1">
                <i data-lucide="check-circle-2" class="w-3 h-3"></i> MVP Deliverables
              </span>
              <ul class="space-y-0.5 text-slate-300">
                ${idea.features.mvp.slice(0, 2).map(f => `<li class="truncate">• ${f}</li>`).join('')}
              </ul>
            </div>
            <div class="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <span class="font-mono font-bold text-sky-400 flex items-center gap-1 mb-1">
                <i data-lucide="rocket" class="w-3 h-3"></i> Advanced Features
              </span>
              <ul class="space-y-0.5 text-slate-300">
                ${idea.features.advanced.slice(0, 2).map(f => `<li class="truncate">• ${f}</li>`).join('')}
              </ul>
            </div>
          </div>

          <!-- Tech Stack Badges & Constraints -->
          <div class="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-slate-800/60">
            <div class="flex flex-wrap items-center gap-1.5">
              ${idea.techStack.map(t => `<span class="px-2 py-0.5 rounded-md bg-slate-950 text-[10px] font-mono text-slate-300 border border-slate-800">${t}</span>`).join('')}
            </div>
            <div class="flex items-center gap-2 text-[10px] font-mono text-slate-400">
              <span>⏱️ ${idea.timeline}</span>
              <span>💰 ${idea.budgetFit}</span>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex items-center gap-2 pt-2">
            <button onclick="App.adoptIdeaToDashboard('${idea.id}', false)" class="flex-1 py-2.5 rounded-xl font-heading font-extrabold text-xs bg-gradient-to-r from-emerald-400 via-teal-500 to-sky-500 text-slate-950 shadow-md shadow-emerald-500/20 hover:brightness-110 active:scale-98 transition flex items-center justify-center gap-1.5 cursor-pointer">
              <i data-lucide="plus-circle" class="w-4 h-4 text-slate-950"></i>
              <span>Add to Dashboard</span>
            </button>
            <button onclick="App.adoptIdeaToDashboard('${idea.id}', true)" class="px-4 py-2.5 rounded-xl font-heading font-bold text-xs bg-slate-950 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white transition flex items-center gap-1.5 cursor-pointer" title="Adopt and View Full Blueprint">
              <i data-lucide="file-code" class="w-3.5 h-3.5 text-sky-400"></i>
              <span>View Blueprint</span>
            </button>
          </div>
        </div>
      `).join('');

      container.innerHTML = `
        <div class="space-y-6">
          <div class="flex items-center justify-between pb-3 border-b border-slate-800">
            <div>
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <h3 class="font-heading font-black text-lg text-white">Synthesized Project Ideas</h3>
              </div>
              <p class="text-xs text-slate-400 mt-0.5">3 Defense-grade paths generated for your parameters.</p>
            </div>
            <button onclick="App.closeIdeaGeneratorModal()" class="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition" aria-label="Close">
              <i data-lucide="x" class="w-5 h-5"></i>
            </button>
          </div>

          <div class="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
            ${resultsHtml}
          </div>

          <div class="flex items-center justify-between pt-3 border-t border-slate-800">
            <button onclick="App.resetIdeaModalConfig()" class="px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-sky-400 transition flex items-center gap-1.5 cursor-pointer">
              <i data-lucide="sliders" class="w-3.5 h-3.5"></i>
              <span>Modify Inputs & Regenerate</span>
            </button>
            <button onclick="App.closeIdeaGeneratorModal()" class="px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-slate-200 transition">
              Close
            </button>
          </div>
        </div>
      `;
      this.initLucideIcons();
      return;
    }

    // Step 1: Config Form
    const popularDomains = [
      "Healthcare & Bio-AI",
      "FinTech & Fraud Detection",
      "Smart Agriculture & IoT",
      "Cyber Defense & Zero-Trust",
      "GenAI, LLMs & Agents",
      "Autonomous Robotics & Vision",
      "Smart Energy & GreenTech",
      "EdTech & Intelligent Tutoring"
    ];

    const commonSkills = [
      "Python", "Machine Learning", "PyTorch", "TensorFlow", "React", 
      "FastAPI", "OpenCV", "Docker", "Node.js", "SQL", "LangChain", "Flutter"
    ];

    const durations = [
      { label: "4 Weeks", sub: "Rapid MVP Sprint" },
      { label: "8 Weeks", sub: "Semester Minor" },
      { label: "12 Weeks", sub: "Standard Capstone" },
      { label: "16+ Weeks", sub: "Dual-Semester" }
    ];

    const budgets = [
      { label: "₹0 (Free Tier)", val: "₹0 (Free Tier / Open Source)" },
      { label: "< ₹2,000", val: "Under ₹2,000 (APIs & Sensors)" },
      { label: "< ₹5,000", val: "Under ₹5,000 (Cloud & IoT Kits)" },
      { label: "₹10,000+", val: "₹10,000+ (High Hardware/GPU)" }
    ];

    container.innerHTML = `
      <div class="space-y-6">
        <!-- Modal Header -->
        <div class="flex items-center justify-between pb-3 border-b border-slate-800">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-400 via-sky-500 to-indigo-600 flex items-center justify-center shadow-md shadow-cyan-500/25">
              <i data-lucide="sparkles" class="w-4 h-4 text-slate-950"></i>
            </div>
            <div>
              <h3 class="font-heading font-black text-lg text-white flex items-center gap-2">
                <span>AI Project Idea Synthesizer</span>
                <span class="px-2 py-0.5 rounded-full text-[10px] font-mono bg-sky-500/20 text-sky-300 border border-sky-500/30">Interactive</span>
              </h3>
              <p class="text-xs text-slate-400 mt-0.5">Customize your interests, skills, weeks, and budget to generate tailored capstone ideas.</p>
            </div>
          </div>
          <button onclick="App.closeIdeaGeneratorModal()" class="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition cursor-pointer" aria-label="Close">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
        </div>

        <div class="space-y-5 max-h-[62vh] overflow-y-auto pr-1">
          <!-- 1. Interests & Domain -->
          <div class="space-y-2.5">
            <label class="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
              1. 🎯 Select Domain or Passion
            </label>
            <div class="flex flex-wrap gap-2">
              ${popularDomains.map(d => `
                <button type="button" onclick="App.setModalDomain('${d}')" class="px-3 py-1.5 rounded-xl text-xs font-medium border transition cursor-pointer ${state.domain === d ? 'border-sky-400 bg-sky-500/20 text-sky-200 shadow-sm shadow-sky-500/20' : 'border-slate-800 bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:border-slate-700'}">
                  ${d}
                </button>
              `).join('')}
            </div>
            <div class="pt-1">
              <input type="text" id="modal-custom-domain" placeholder="Or specify a custom focus (e.g., Drone Solar Panel Inspection)..." value="${state.customDomain || ''}" oninput="App.setModalCustomDomain(this.value)" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-sky-500 placeholder-slate-500" />
            </div>
          </div>

          <!-- 2. Technical Skills -->
          <div class="space-y-2.5">
            <div class="flex items-center justify-between">
              <label class="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                2. ⚡ Your Active Technical Skills (${state.skills.length} Selected)
              </label>
            </div>
            <div class="flex flex-wrap gap-2">
              ${commonSkills.map(s => {
                const active = state.skills.includes(s);
                return `
                  <button type="button" onclick="App.toggleModalSkill('${s}')" class="px-3 py-1.5 rounded-xl text-xs font-mono font-semibold border transition cursor-pointer ${active ? 'border-emerald-500 bg-emerald-500/20 text-emerald-300' : 'border-slate-800 bg-slate-900/60 text-slate-500 hover:text-slate-300'}">
                    ${active ? '✓ ' : '+ '}${s}
                  </button>
                `;
              }).join('')}
              ${state.skills.filter(s => !commonSkills.includes(s)).map(s => `
                <button type="button" onclick="App.toggleModalSkill('${s}')" class="px-3 py-1.5 rounded-xl text-xs font-mono font-semibold border border-emerald-500 bg-emerald-500/20 text-emerald-300 transition cursor-pointer">
                  ✓ ${s}
                </button>
              `).join('')}
            </div>
            <!-- Add custom skill input -->
            <div class="flex items-center gap-2 pt-1">
              <input type="text" id="modal-custom-skill-input" placeholder="Add any custom framework / tool (e.g. OpenCV, PySyft, ROS)..." class="flex-1 px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-sky-500 placeholder-slate-500" onkeydown="if(event.key==='Enter') App.addModalCustomSkill(event)" />
              <button type="button" onclick="App.addModalCustomSkill(event)" class="px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-800 text-slate-200 hover:bg-slate-700 transition cursor-pointer">
                + Add
              </button>
            </div>
          </div>

          <!-- 3. Timeline & Duration -->
          <div class="space-y-2.5">
            <label class="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
              3. ⏱️ Timeline & Available Weeks
            </label>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
              ${durations.map(dur => `
                <button type="button" onclick="App.setModalWeeks('${dur.label}')" class="p-3 rounded-xl border text-left transition cursor-pointer ${state.weeks.startsWith(dur.label) ? 'border-sky-400 bg-sky-500/15 shadow-sm' : 'border-slate-800 bg-slate-900/80 hover:border-slate-700'}">
                  <p class="text-xs font-heading font-bold ${state.weeks.startsWith(dur.label) ? 'text-sky-300' : 'text-slate-300'}">${dur.label}</p>
                  <p class="text-[10px] text-slate-400 font-mono mt-0.5">${dur.sub}</p>
                </button>
              `).join('')}
            </div>
          </div>

          <!-- 4. Budget & Financial Constraints -->
          <div class="space-y-2.5">
            <label class="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
              4. 💰 Financial Budget & Cloud Cost
            </label>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
              ${budgets.map(b => `
                <button type="button" onclick="App.setModalBudget('${b.val}')" class="p-3 rounded-xl border text-center transition cursor-pointer ${state.budget.includes(b.label) || state.budget === b.val ? 'border-emerald-400 bg-emerald-500/15 shadow-sm' : 'border-slate-800 bg-slate-900/80 hover:border-slate-700'}">
                  <p class="text-xs font-heading font-bold ${state.budget.includes(b.label) || state.budget === b.val ? 'text-emerald-300' : 'text-slate-300'}">${b.label}</p>
                </button>
              `).join('')}
            </div>
          </div>

          <!-- 5. Team Size & Outcome -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div class="space-y-1.5">
              <label class="block text-[11px] font-mono font-bold uppercase text-slate-400">Team Size</label>
              <select onchange="App.setModalTeamSize(this.value)" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-sky-500">
                <option value="Solo (1 Student)" ${state.teamSize.includes('1') ? 'selected' : ''}>Solo (1 Student)</option>
                <option value="2 Students" ${state.teamSize.includes('2') ? 'selected' : ''}>2 Students (Duo)</option>
                <option value="2-3 Students" ${state.teamSize.includes('2-3') || state.teamSize.includes('3') ? 'selected' : ''}>2-3 Students (Squad)</option>
                <option value="4+ Students" ${state.teamSize.includes('4') ? 'selected' : ''}>4+ Students (Large Team)</option>
              </select>
            </div>
            <div class="space-y-1.5">
              <label class="block text-[11px] font-mono font-bold uppercase text-slate-400">Target Outcome</label>
              <select onchange="App.setModalOutcome(this.value)" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-sky-500">
                <option value="Top-Scoring Capstone" ${state.outcome.includes('Capstone') ? 'selected' : ''}>Top-Scoring College Capstone</option>
                <option value="IEEE / Scopus Paper" ${state.outcome.includes('IEEE') ? 'selected' : ''}>IEEE / Scopus Paper Submission</option>
                <option value="Startup Portfolio MVP" ${state.outcome.includes('Startup') ? 'selected' : ''}>Startup Portfolio MVP</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Submit Button -->
        <div class="pt-3 border-t border-slate-800">
          <button onclick="App.runIdeaGenerator()" class="w-full py-3.5 rounded-xl font-heading font-extrabold text-sm bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-600 text-slate-950 flex items-center justify-center gap-2 shadow-xl shadow-cyan-500/25 hover:brightness-110 active:scale-98 transition cursor-pointer">
            <i data-lucide="sparkles" class="w-4 h-4 text-slate-950"></i>
            <span>Synthesize Tailored Project Ideas</span>
          </button>
        </div>
      </div>
    `;

    this.initLucideIcons();
  }
};

window.App = App;
window.addEventListener('DOMContentLoaded', () => App.init());
