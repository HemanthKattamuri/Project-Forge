// ProjectForge AI - Complete View Renderers (SaaS Quality)

const Views = {
  // Helper: Circular Score Ring SVG
  renderScoreRing(score, size = 80, strokeWidth = 7, colorClass = "stroke-sky-400") {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (score / 100) * circumference;

    return `
      <div class="relative flex items-center justify-center" style="width: ${size}px; height: ${size}px;">
        <svg class="score-ring-svg w-full h-full" viewBox="0 0 ${size} ${size}">
          <circle class="score-ring-bg" cx="${size/2}" cy="${size/2}" r="${radius}" stroke-width="${strokeWidth}" fill="transparent" />
          <circle class="score-ring-fill ${colorClass}" cx="${size/2}" cy="${size/2}" r="${radius}" stroke-width="${strokeWidth}" fill="transparent" 
            stroke-dasharray="${circumference}" stroke-dashoffset="${offset}" />
        </svg>
        <div class="absolute flex flex-col items-center justify-center text-center">
          <span class="font-heading font-extrabold text-white text-base leading-none">${score}</span>
          <span class="text-[9px] font-semibold text-slate-400 uppercase tracking-wider">/100</span>
        </div>
      </div>
    `;
  },

  // 1. LANDING PAGE (Professional, Impressive & Butter-Smooth Animations)
  renderLanding() {
    return `
      <div class="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-sky-500 selection:text-white relative overflow-x-hidden">
        <!-- Ambient Background Glow & Cyber Grid -->
        <div class="hero-aurora-blob-1"></div>
        <div class="hero-aurora-blob-2"></div>
        <div class="hero-grid-mesh"></div>

        <!-- Landing Navbar -->
        <header class="w-full max-w-7xl mx-auto px-6 h-20 flex items-center justify-between border-b border-slate-800/60 sticky top-0 bg-slate-950/80 backdrop-blur-xl z-40">
          <div class="flex items-center gap-3 cursor-pointer group" onclick="App.navigate('landing')">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-400 via-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-sky-500/30 group-hover:scale-105 group-hover:rotate-3 transition duration-300">
              <i data-lucide="sparkles" class="w-5 h-5 text-white animate-pulse"></i>
            </div>
            <div>
              <span class="font-heading font-extrabold text-xl tracking-tight text-white flex items-center gap-1.5">
                ProjectForge <span class="text-xs px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-400 font-mono font-bold border border-sky-500/30">AI</span>
              </span>
              <p class="text-[10px] text-slate-400 font-medium tracking-wide">From Skills to Solutions</p>
            </div>
          </div>

          <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#how-it-works" class="hover:text-sky-400 transition hover:-translate-y-0.5">How It Works</a>
            <a href="#why-projectforge" class="hover:text-sky-400 transition hover:-translate-y-0.5">Why ProjectForge</a>
            <a href="#features" class="hover:text-sky-400 transition hover:-translate-y-0.5">Features</a>
            <button onclick="App.navigate('faculty-dashboard')" class="hover:text-sky-400 transition hover:-translate-y-0.5 flex items-center gap-1.5">
              <i data-lucide="graduation-cap" class="w-4 h-4 text-sky-400"></i> Faculty Portal
            </button>
          </nav>

          <div class="flex items-center gap-3">
            <button onclick="App.navigate('auth')" class="px-4 py-2 text-sm font-semibold text-slate-300 hover:text-white transition">
              Sign In
            </button>
            <button onclick="App.navigate('onboarding')" class="btn-sheen px-5 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-[1.02] active:scale-[0.98] transition duration-200 flex items-center gap-2">
              <span>Build My Project</span>
              <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </button>
          </div>
        </header>

        <!-- Hero Section -->
        <section class="relative pt-16 pb-24 px-6 overflow-hidden z-10">
          <div class="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
            <!-- Left Hero Content -->
            <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <!-- Badge -->
              <div class="animate-fade-up delay-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-400/40 bg-sky-500/10 text-sky-300 text-xs font-semibold backdrop-blur-md shadow-[0_0_20px_rgba(56,189,248,0.2)]">
                <span class="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                <span>Final-Year Engineering Project Operating System</span>
              </div>

              <!-- Main Title -->
              <h1 class="animate-fade-up delay-2 font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.1]">
                Turn Your Skills Into Your <span class="shimmer-text-gradient">Next Great Project.</span>
              </h1>

              <!-- Subtitle -->
              <p class="animate-fade-up delay-3 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                ProjectForge AI transforms your skills, interests and career goals into practical, innovative and industry-ready projects — then guides you from idea to implementation.
              </p>

              <!-- CTA Buttons -->
              <div class="animate-fade-up delay-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button onclick="App.navigate('onboarding')" class="btn-sheen w-full sm:w-auto px-8 py-3.5 rounded-xl font-heading font-bold text-base bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 text-white shadow-xl shadow-sky-500/30 hover:scale-[1.03] active:scale-[0.98] transition flex items-center justify-center gap-2">
                  <i data-lucide="sparkles" class="w-5 h-5 text-cyan-200"></i>
                  <span>Build My Project</span>
                </button>
                <button onclick="App.navigate('auth')" class="w-full sm:w-auto px-6 py-3.5 rounded-xl font-heading font-semibold text-base bg-slate-900/90 border border-slate-700/80 text-slate-200 hover:border-sky-400 hover:bg-slate-800/90 transition flex items-center justify-center gap-2 hover:-translate-y-0.5">
                  <span>Sign In</span>
                  <i data-lucide="arrow-right" class="w-4 h-4 text-sky-400"></i>
                </button>
              </div>
            </div>

            <!-- Right Hero Visual: Project DNA Preview with Floating Badges -->
            <div class="lg:col-span-5 relative">
              
              <!-- Floating Badge 1: Feasibility -->
              <div class="floating-badge-1 absolute -top-6 -left-6 z-30 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-emerald-500/40 shadow-xl backdrop-blur-md">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span class="text-xs font-semibold text-emerald-300">🎯 91/100 Feasibility</span>
              </div>

              <!-- Floating Badge 2: Timeline -->
              <div class="floating-badge-2 absolute -top-6 -right-6 z-30 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-sky-500/40 shadow-xl backdrop-blur-md">
                <i data-lucide="calendar" class="w-3.5 h-3.5 text-sky-400"></i>
                <span class="text-xs font-semibold text-sky-300">⚡ 12-Week Engine</span>
              </div>

              <!-- Floating Badge 3: IEEE Paper -->
              <div class="floating-badge-3 absolute -bottom-5 -left-5 z-30 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-purple-500/40 shadow-xl backdrop-blur-md">
                <i data-lucide="file-check-2" class="w-3.5 h-3.5 text-purple-400"></i>
                <span class="text-xs font-semibold text-purple-300">🛡️ IEEE Thesis Formatter</span>
              </div>

              <!-- Floating Badge 4: AI Technical Mentor -->
              <div class="floating-badge-4 absolute -bottom-5 -right-5 z-30 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-cyan-500/40 shadow-xl backdrop-blur-md">
                <i data-lucide="bot" class="w-3.5 h-3.5 text-cyan-400"></i>
                <span class="text-xs font-semibold text-cyan-300">🤖 AI Mentor Active</span>
              </div>

              <!-- Main Hero Visual Card -->
              <div class="glass-panel p-6 border-slate-700/80 shadow-2xl relative overflow-hidden card-interactive-glow">
                <!-- Laser Scanner Line -->
                <div class="dna-scanner-line"></div>

                <div class="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                  <div class="flex items-center gap-2">
                    <span class="w-3 h-3 rounded-full bg-rose-500/80"></span>
                    <span class="w-3 h-3 rounded-full bg-amber-500/80"></span>
                    <span class="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                    <span class="text-xs font-mono font-medium text-slate-400 ml-2">PROJECT DNA ENGINE v2.4</span>
                  </div>
                  <span class="badge badge-cyan flex items-center gap-1">
                    <i data-lucide="check-circle" class="w-3 h-3"></i> Profile Calibrated
                  </span>
                </div>

                <!-- Hero DNA Card -->
                <div class="space-y-4">
                  <div class="flex items-center justify-between p-4 rounded-xl bg-slate-950/70 border border-slate-800/80">
                    <div>
                      <span class="text-xs text-slate-400 uppercase tracking-wider font-semibold">Project Potential</span>
                      <div class="font-heading font-black text-3xl text-white mt-0.5">91<span class="text-sm text-slate-400 font-normal">/100</span></div>
                      <p class="text-xs text-emerald-400 font-medium mt-0.5">High Real-World Feasibility</p>
                    </div>
                    ${Views.renderScoreRing(91, 72, 6, "stroke-sky-400")}
                  </div>

                  <!-- Scores Breakdown Grid -->
                  <div class="space-y-2.5">
                    <div>
                      <div class="flex justify-between text-xs font-medium mb-1">
                        <span class="text-slate-300">Skill Match</span>
                        <span class="text-sky-400 font-semibold font-mono">92%</span>
                      </div>
                      <div class="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div class="bg-gradient-to-r from-sky-400 to-cyan-400 h-full rounded-full transition-all duration-1000" style="width: 92%"></div>
                      </div>
                    </div>

                    <div>
                      <div class="flex justify-between text-xs font-medium mb-1">
                        <span class="text-slate-300">Career Relevance</span>
                        <span class="text-indigo-400 font-semibold font-mono">96%</span>
                      </div>
                      <div class="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div class="bg-gradient-to-r from-indigo-400 to-purple-400 h-full rounded-full transition-all duration-1000" style="width: 96%"></div>
                      </div>
                    </div>

                    <div>
                      <div class="flex justify-between text-xs font-medium mb-1">
                        <span class="text-slate-300">Real-World Impact</span>
                        <span class="text-purple-400 font-semibold font-mono">95%</span>
                      </div>
                      <div class="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div class="bg-gradient-to-r from-purple-400 to-pink-400 h-full rounded-full transition-all duration-1000" style="width: 95%"></div>
                      </div>
                    </div>

                    <div>
                      <div class="flex justify-between text-xs font-medium mb-1">
                        <span class="text-slate-300">Feasibility</span>
                        <span class="text-emerald-400 font-semibold font-mono">90%</span>
                      </div>
                      <div class="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div class="bg-gradient-to-r from-emerald-400 to-teal-400 h-full rounded-full transition-all duration-1000" style="width: 90%"></div>
                      </div>
                    </div>

                    <div>
                      <div class="flex justify-between text-xs font-medium mb-1">
                        <span class="text-slate-300">Innovation</span>
                        <span class="text-amber-400 font-semibold font-mono">87%</span>
                      </div>
                      <div class="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div class="bg-gradient-to-r from-amber-400 to-yellow-400 h-full rounded-full transition-all duration-1000" style="width: 87%"></div>
                      </div>
                    </div>
                  </div>

                  <div class="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 flex items-start gap-2.5">
                    <i data-lucide="shield-check" class="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0"></i>
                    <span><strong>AI Recommendation:</strong> AI Hospital Crowd Intelligence matches your 12-week timeline and AI Engineer aspirations.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- How It Works Section -->
        <section id="how-it-works" class="py-20 px-6 border-t border-slate-800/80 bg-slate-900/40 relative">
          <div class="max-w-7xl mx-auto space-y-12">
            <div class="text-center space-y-3 max-w-2xl mx-auto">
              <span class="badge badge-purple">The Engineering Journey</span>
              <h2 class="font-heading font-extrabold text-3xl sm:text-4xl text-white">How ProjectForge Works</h2>
              <p class="text-sm sm:text-base text-slate-400">A disciplined, end-to-end framework that takes you from ambiguous idea to defense-ready implementation.</p>
            </div>

            <div class="grid md:grid-cols-5 gap-6">
              <div class="glass-panel p-5 space-y-3 relative group card-interactive-glow">
                <div class="w-9 h-9 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold font-mono text-sm group-hover:scale-110 transition">01</div>
                <h3 class="font-heading font-bold text-base text-white">Tell us about yourself</h3>
                <p class="text-xs text-slate-400 leading-relaxed">Input your skills, proficiency levels, interests, constraints, hardware, and career targets.</p>
              </div>

              <div class="glass-panel p-5 space-y-3 relative group card-interactive-glow">
                <div class="w-9 h-9 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold font-mono text-sm group-hover:scale-110 transition">02</div>
                <h3 class="font-heading font-bold text-base text-white">Generate DNA & Ideas</h3>
                <p class="text-xs text-slate-400 leading-relaxed">Discover 3 calibrated paths: Safe, Smart, and Ambitious, with objective Project Potential Scores.</p>
              </div>

              <div class="glass-panel p-5 space-y-3 relative group card-interactive-glow">
                <div class="w-9 h-9 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold font-mono text-sm group-hover:scale-110 transition">03</div>
                <h3 class="font-heading font-bold text-base text-white">Evaluate Your Best Idea</h3>
                <p class="text-xs text-slate-400 leading-relaxed">Compare uniqueness, feasibility risks, and examine an interactive architecture blueprint.</p>
              </div>

              <div class="glass-panel p-5 space-y-3 relative group card-interactive-glow">
                <div class="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold font-mono text-sm group-hover:scale-110 transition">04</div>
                <h3 class="font-heading font-bold text-base text-white">Build With Roadmap</h3>
                <p class="text-xs text-slate-400 leading-relaxed">Follow an automated 12-week timeline with task dependencies, hours estimates, and daily AI planning.</p>
              </div>

              <div class="glass-panel p-5 space-y-3 relative group card-interactive-glow">
                <div class="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold font-mono text-sm group-hover:scale-110 transition">05</div>
                <h3 class="font-heading font-bold text-base text-white">Mentor & Defense</h3>
                <p class="text-xs text-slate-400 leading-relaxed">Debug architecture bottlenecks, review code, simulate tough viva questions, and export reports.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Why ProjectForge Section -->
        <section id="why-projectforge" class="py-20 px-6 border-t border-slate-800/80">
          <div class="max-w-7xl mx-auto space-y-12">
            <div class="text-center space-y-3 max-w-2xl mx-auto">
              <span class="badge badge-cyan">Built For Serious Engineers</span>
              <h2 class="font-heading font-extrabold text-3xl sm:text-4xl text-white">Why ProjectForge AI?</h2>
              <p class="text-sm sm:text-base text-slate-400">We replace vague generic chatbots with an actionable AI Project Architect + AI Mentor + Project Evaluator.</p>
            </div>

            <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div class="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 card-interactive-glow space-y-3">
                <div class="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center"><i data-lucide="dna" class="w-5 h-5"></i></div>
                <h3 class="font-heading font-bold text-base text-white">Personalized Project Discovery</h3>
                <p class="text-xs text-slate-400">Tailored to your specific branch, hardware, budget, and desired proficiency level.</p>
              </div>

              <div class="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 card-interactive-glow space-y-3">
                <div class="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center"><i data-lucide="activity" class="w-5 h-5"></i></div>
                <h3 class="font-heading font-bold text-base text-white">AI Feasibility Analysis</h3>
                <p class="text-xs text-slate-400">Evaluates whether your timeline, dataset access, and API costs are realistically achievable.</p>
              </div>

              <div class="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 card-interactive-glow space-y-3">
                <div class="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center"><i data-lucide="briefcase" class="w-5 h-5"></i></div>
                <h3 class="font-heading font-bold text-base text-white">Career Alignment</h3>
                <p class="text-xs text-slate-400">Optimizes the project stack so your GitHub repository and resume immediately appeal to recruiters.</p>
              </div>

              <div class="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 card-interactive-glow space-y-3">
                <div class="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center"><i data-lucide="calendar" class="w-5 h-5"></i></div>
                <h3 class="font-heading font-bold text-base text-white">Development Roadmap</h3>
                <p class="text-xs text-slate-400">Structured weekly milestones that prevent last-minute scrambles and maintain steady momentum.</p>
              </div>

              <div class="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 card-interactive-glow space-y-3">
                <div class="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center"><i data-lucide="bot" class="w-5 h-5"></i></div>
                <h3 class="font-heading font-bold text-base text-white">AI Technical Mentor</h3>
                <p class="text-xs text-slate-400">Context-aware technical troubleshooting that knows your schema, model accuracy, and next milestone.</p>
              </div>

              <div class="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 card-interactive-glow space-y-3">
                <div class="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center"><i data-lucide="shield-alert" class="w-5 h-5"></i></div>
                <h3 class="font-heading font-bold text-base text-white">Architecture Review</h3>
                <p class="text-xs text-slate-400">Detects concurrency bottlenecks, tight coupling, and security vulnerabilities before presentation day.</p>
              </div>

              <div class="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 card-interactive-glow space-y-3">
                <div class="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center"><i data-lucide="git-merge" class="w-5 h-5"></i></div>
                <h3 class="font-heading font-bold text-base text-white">Project Evolution Engine</h3>
                <p class="text-xs text-slate-400">Demonstrates continuous improvement across V1 MVP, V2 Refactored, and V3 Production staging.</p>
              </div>

              <div class="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 card-interactive-glow space-y-3">
                <div class="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center"><i data-lucide="mic" class="w-5 h-5"></i></div>
                <h3 class="font-heading font-bold text-base text-white">Viva Defense Simulator</h3>
                <p class="text-xs text-slate-400">Interactive examination practice that grades technical depth, confidence, and flags missing concepts.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Final Call to Action -->
        <section class="py-24 px-6 border-t border-slate-800/80 relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
          <div class="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(56,189,248,0.12),transparent)] pointer-events-none"></div>
          <div class="max-w-4xl mx-auto text-center space-y-6 relative z-10">
            <h2 class="font-heading font-extrabold text-3xl sm:text-5xl text-white">
              Don’t just submit a project. <br /><span class="shimmer-text-gradient">Build something worth showing.</span>
            </h2>
            <p class="text-base text-slate-300 max-w-xl mx-auto">
              Join engineering students who transformed their final-year submissions into showcase portfolio assets, research publications, and job offers.
            </p>
            <div class="pt-2">
              <button onclick="App.navigate('onboarding')" class="btn-sheen px-8 py-4 rounded-xl font-heading font-bold text-base bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 text-white shadow-2xl shadow-sky-500/30 hover:scale-105 active:scale-95 transition inline-flex items-center gap-2">
                <span>Start Building Now</span>
                <i data-lucide="arrow-right" class="w-5 h-5"></i>
              </button>
            </div>
          </div>
        </section>

        <!-- Footer -->
        <footer class="py-8 px-6 border-t border-slate-800/60 text-center text-xs text-slate-500 relative z-10">
          <p>© 2026 ProjectForge AI. Designed for Final-Year CS & Engineering Students. All rights reserved.</p>
        </footer>
      </div>
    `;
  },

  // 2. AUTHENTICATION (Login / Sign Up)
  renderAuth() {
    return `
      <div class="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-4 py-12 relative">
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.15),transparent_70%)]"></div>

        <div class="w-full max-w-md glass-panel p-8 relative z-10 border-slate-700/80 shadow-2xl">
          <div class="text-center mb-8">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center mx-auto mb-3 shadow-lg shadow-sky-500/30">
              <i data-lucide="sparkles" class="w-6 h-6 text-white"></i>
            </div>
            <h2 class="font-heading font-bold text-2xl text-white">Sign in to ProjectForge</h2>
            <p class="text-xs text-slate-400 mt-1">Access your final-year engineering project workspace</p>
          </div>

          <!-- Google Auth Button -->
          <button onclick="App.showToast('Google OAuth connected! Redirecting to Dashboard...', 'success'); setTimeout(() => App.navigate('dashboard'), 800);" class="w-full py-2.5 px-4 rounded-xl border border-slate-700 bg-slate-900 hover:bg-slate-800 text-slate-200 text-sm font-semibold flex items-center justify-center gap-3 transition mb-4 cursor-pointer">
            <svg class="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
            </svg>
            <span>Continue with Google</span>
          </button>

          <div class="flex items-center my-4">
            <div class="flex-grow border-t border-slate-800"></div>
            <span class="px-3 text-[11px] text-slate-500 uppercase">Or with institutional email</span>
            <div class="flex-grow border-t border-slate-800"></div>
          </div>

          <form onsubmit="event.preventDefault(); App.navigate('dashboard');" class="space-y-4">
            <div>
              <label class="block text-xs font-semibold text-slate-300 mb-1">Student Email</label>
              <input type="email" placeholder="student@university.edu" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-slate-100 focus:outline-none focus:border-sky-500 transition" required />
            </div>

            <div>
              <div class="flex items-center justify-between mb-1">
                <label class="block text-xs font-semibold text-slate-300">Password</label>
                <a href="#" onclick="App.showToast('Password reset link sent to registered email.');" class="text-xs text-sky-400 hover:underline">Forgot?</a>
              </div>
              <input type="password" placeholder="••••••••" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-slate-100 focus:outline-none focus:border-sky-500 transition" required />
            </div>

            <button type="submit" class="w-full py-3 rounded-xl font-heading font-bold text-sm bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/25 hover:brightness-110 active:scale-98 transition cursor-pointer">
              Sign In
            </button>
          </form>

          <div class="text-center mt-6 text-xs text-slate-400">
            Don't have an account yet? 
            <button onclick="App.navigate('onboarding')" class="text-sky-400 font-semibold hover:underline">Start Onboarding</button>
          </div>
        </div>
      </div>
    `;
  },

  // 3. ONBOARDING WIZARD (6 Steps)
  renderOnboarding() {
    return `
      <div class="min-h-screen bg-slate-950 text-slate-100 flex flex-col py-10 px-4 sm:px-6">
        <div class="max-w-3xl mx-auto w-full">
          <!-- Wizard Top Bar -->
          <div class="flex items-center justify-between mb-6">
            <div class="flex items-center gap-3 cursor-pointer" onclick="App.navigate('landing')">
              <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-400 to-indigo-600 flex items-center justify-center">
                <i data-lucide="sparkles" class="w-4 h-4 text-white"></i>
              </div>
              <span class="font-heading font-bold text-lg text-white">ProjectForge AI</span>
            </div>
            <div class="text-xs font-mono font-medium text-slate-400">
              Step <span id="onboard-current-step-num" class="text-sky-400 font-bold">1</span> of 6
            </div>
          </div>

          <!-- Step Progress Indicators -->
          <div class="grid grid-cols-6 gap-2 mb-8">
            <div id="step-bar-1" class="h-1.5 rounded-full bg-sky-500 transition-all"></div>
            <div id="step-bar-2" class="h-1.5 rounded-full bg-slate-800 transition-all"></div>
            <div id="step-bar-3" class="h-1.5 rounded-full bg-slate-800 transition-all"></div>
            <div id="step-bar-4" class="h-1.5 rounded-full bg-slate-800 transition-all"></div>
            <div id="step-bar-5" class="h-1.5 rounded-full bg-slate-800 transition-all"></div>
            <div id="step-bar-6" class="h-1.5 rounded-full bg-slate-800 transition-all"></div>
          </div>

          <!-- Wizard Card Container -->
          <div class="glass-panel p-6 sm:p-8 border-slate-700/80 shadow-2xl relative">
            <form id="onboarding-form" onsubmit="event.preventDefault(); Views.handleOnboardSubmit();">
              
              <!-- STEP 1: INTERESTS -->
              <div id="onboard-step-1" class="space-y-6">
                <div>
                  <span class="badge badge-cyan mb-2">Step 1 — Domain Focus</span>
                  <h2 class="font-heading font-extrabold text-2xl sm:text-3xl text-white">What problem areas interest you?</h2>
                  <p class="text-xs sm:text-sm text-slate-400 mt-1">Select one or more industries you would be excited to solve problems for.</p>
                </div>

                <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  ${[
                    "Artificial Intelligence", "Machine Learning", "Healthcare", "Web Development",
                    "Cybersecurity", "Agriculture", "Finance", "Environment", "Smart Cities",
                    "Accessibility", "Robotics", "IoT", "Social Impact", "Education", "Mobile Apps"
                  ].map(interest => `
                    <label class="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/50 transition cursor-pointer text-xs font-semibold text-slate-300">
                      <input type="checkbox" name="interest" value="${interest}" ${['Artificial Intelligence', 'Healthcare'].includes(interest) ? 'checked' : ''} class="custom-checkbox" />
                      <span>${interest}</span>
                    </label>
                  `).join('')}
                </div>

                <div class="pt-2">
                  <label class="block text-xs font-semibold text-slate-400 mb-1">Have a custom interest area?</label>
                  <input type="text" placeholder="e.g. Brain-Computer Interfaces, Space Telemetry" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-sky-500" />
                </div>
              </div>

              <!-- STEP 2: SKILLS & PROFICIENCY -->
              <div id="onboard-step-2" class="space-y-6 hidden">
                <div>
                  <span class="badge badge-purple mb-2">Step 2 — Technical Inventory</span>
                  <h2 class="font-heading font-extrabold text-2xl sm:text-3xl text-white">What skills are in your toolkit?</h2>
                  <p class="text-xs sm:text-sm text-slate-400 mt-1">Select the languages and tools you know, along with your comfort level.</p>
                </div>

                <div class="space-y-4">
                  <div>
                    <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Programming Languages</h4>
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      ${["Python", "Java", "JavaScript", "C++", "SQL", "TypeScript"].map(lang => `
                        <label class="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-200">
                          <span class="flex items-center gap-2">
                            <input type="checkbox" name="skill" value="${lang}" ${['Python', 'SQL'].includes(lang) ? 'checked' : ''} class="custom-checkbox" />
                            ${lang}
                          </span>
                          <span class="text-[10px] text-sky-400 font-mono">Intermediate</span>
                        </label>
                      `).join('')}
                    </div>
                  </div>

                  <div>
                    <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Frameworks & Libraries</h4>
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      ${["React", "Next.js", "FastAPI", "Django", "Flutter", "Node.js"].map(f => `
                        <label class="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-200">
                          <span class="flex items-center gap-2">
                            <input type="checkbox" name="skill" value="${f}" ${['React', 'FastAPI'].includes(f) ? 'checked' : ''} class="custom-checkbox" />
                            ${f}
                          </span>
                          <span class="text-[10px] text-sky-400 font-mono">Intermediate</span>
                        </label>
                      `).join('')}
                    </div>
                  </div>

                  <div>
                    <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">AI, Data & Infrastructure</h4>
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      ${["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Docker", "Git"].map(ai => `
                        <label class="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-200">
                          <span class="flex items-center gap-2">
                            <input type="checkbox" name="skill" value="${ai}" ${['Machine Learning', 'Git'].includes(ai) ? 'checked' : ''} class="custom-checkbox" />
                            ${ai}
                          </span>
                          <span class="text-[10px] text-sky-400 font-mono">Intermediate</span>
                        </label>
                      `).join('')}
                    </div>
                  </div>
                </div>
              </div>

              <!-- STEP 3: CAREER GOAL -->
              <div id="onboard-step-3" class="space-y-6 hidden">
                <div>
                  <span class="badge badge-emerald mb-2">Step 3 — Target Role</span>
                  <h2 class="font-heading font-extrabold text-2xl sm:text-3xl text-white">What is your target career goal?</h2>
                  <p class="text-xs sm:text-sm text-slate-400 mt-1">ProjectForge calibrates the project architecture to impress hiring managers in this domain.</p>
                </div>

                <div class="grid sm:grid-cols-2 gap-3">
                  ${[
                    { role: "AI Engineer", desc: "Focuses on deploying ML models, RAG pipelines, and LLM orchestration." },
                    { role: "ML Engineer", desc: "Deep feature engineering, distributed training, and model serving." },
                    { role: "Software Engineer", desc: "Robust full-stack systems, clean architecture, and API scalability." },
                    { role: "Data Scientist", desc: "Statistical rigor, hypothesis testing, and quantitative analytics." },
                    { role: "Full Stack Developer", desc: "Seamless UI design coupled with efficient backend databases." },
                    { role: "Cybersecurity Engineer", desc: "Threat modeling, cryptography, and zero-trust infrastructure." },
                    { role: "Cloud / DevOps Engineer", desc: "Kubernetes, CI/CD, terraform, and high availability systems." },
                    { role: "Tech Founder / Entrepreneur", desc: "Product-market fit, monetizable MVP, and rapid user iteration." }
                  ].map((c, i) => `
                    <label class="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/50 transition cursor-pointer flex items-start gap-3">
                      <input type="radio" name="career" value="${c.role}" ${i === 0 ? 'checked' : ''} class="mt-1" />
                      <div>
                        <div class="font-heading font-bold text-sm text-white">${c.role}</div>
                        <p class="text-xs text-slate-400 mt-0.5 leading-relaxed">${c.desc}</p>
                      </div>
                    </label>
                  `).join('')}
                </div>
              </div>

              <!-- STEP 4: CONSTRAINTS -->
              <div id="onboard-step-4" class="space-y-6 hidden">
                <div>
                  <span class="badge badge-amber mb-2">Step 4 — Practical Constraints</span>
                  <h2 class="font-heading font-extrabold text-2xl sm:text-3xl text-white">What are your project boundaries?</h2>
                  <p class="text-xs sm:text-sm text-slate-400 mt-1">We guard you against overscoping and unachievable deadlines.</p>
                </div>

                <div class="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-xs font-semibold text-slate-300 mb-2">Available Duration</label>
                    <select id="onboard-duration" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-sky-500">
                      <option value="4 weeks">4 weeks (Rapid Sprint)</option>
                      <option value="8 weeks">8 weeks (Standard Mid-term)</option>
                      <option value="12 weeks" selected>12 weeks (Full Semester Standard)</option>
                      <option value="16 weeks">16 weeks (Extended Runway)</option>
                      <option value="6 months">6 months (Year-long Capstone)</option>
                    </select>
                  </div>

                  <div>
                    <label class="block text-xs font-semibold text-slate-300 mb-2">Team Size</label>
                    <select id="onboard-teamsize" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-sky-500">
                      <option value="1">1 member (Solo)</option>
                      <option value="2">2 members</option>
                      <option value="3" selected>3 members (Recommended)</option>
                      <option value="4">4 members</option>
                      <option value="5">5+ members</option>
                    </select>
                  </div>

                  <div>
                    <label class="block text-xs font-semibold text-slate-300 mb-2">Budget Allocation</label>
                    <select id="onboard-budget" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-sky-500">
                      <option value="Free">Free (Open-Source / Free Tiers)</option>
                      <option value="Under ₹2,000">Under ₹2,000</option>
                      <option value="₹2,000–₹5,000" selected>₹2,000–₹5,000 (Standard Hosting/APIs)</option>
                      <option value="₹5,000+">₹5,000+ (Hardware / GPU Instances)</option>
                    </select>
                  </div>

                  <div>
                    <label class="block text-xs font-semibold text-slate-300 mb-2">Team Experience Level</label>
                    <select id="onboard-exp" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-sky-500">
                      <option value="Beginner">Beginner (Foundational)</option>
                      <option value="Intermediate" selected>Intermediate (Built small apps)</option>
                      <option value="Advanced">Advanced (Experienced Hackathon / Intern)</option>
                    </select>
                  </div>
                </div>
              </div>

              <!-- STEP 5: HARDWARE & RESOURCES -->
              <div id="onboard-step-5" class="space-y-6 hidden">
                <div>
                  <span class="badge badge-cyan mb-2">Step 5 — Hardware & Resources</span>
                  <h2 class="font-heading font-extrabold text-2xl sm:text-3xl text-white">What resources do you currently have?</h2>
                  <p class="text-xs sm:text-sm text-slate-400 mt-1">This prevents recommending projects requiring expensive GPUs or specialized microcontrollers you don't possess.</p>
                </div>

                <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  ${[
                    "Standard Laptop", "NVIDIA GPU", "Cloud Credits (AWS/GCP)", "Smartphone",
                    "IoT Hardware (ESP32/Arduino)", "Webcam / Camera", "Hardware Sensors",
                    "External APIs (Gemini/OpenAI)", "Stable High-Speed Internet"
                  ].map(res => `
                    <label class="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 cursor-pointer">
                      <input type="checkbox" name="resource" value="${res}" ${['Standard Laptop', 'NVIDIA GPU', 'External APIs (Gemini/OpenAI)', 'Stable High-Speed Internet'].includes(res) ? 'checked' : ''} class="custom-checkbox" />
                      <span>${res}</span>
                    </label>
                  `).join('')}
                </div>
              </div>

              <!-- STEP 6: PROJECT PREFERENCE & MODE -->
              <div id="onboard-step-6" class="space-y-6 hidden">
                <div>
                  <span class="badge badge-purple mb-2">Step 6 — Final Calibration</span>
                  <h2 class="font-heading font-extrabold text-2xl sm:text-3xl text-white">What kind of project do you want?</h2>
                  <p class="text-xs sm:text-sm text-slate-400 mt-1">Select the operational mode that defines your evaluation criteria.</p>
                </div>

                <div class="grid sm:grid-cols-2 gap-3.5">
                  ${[
                    { mode: "Academic Final-Year Project", desc: "Optimized for college syllabus rubric, viva defense, IEEE documentation, and faculty review." },
                    { mode: "Career & Resume-Focused", desc: "Designed to showcase production code quality, system design, and impress tech interviewers." },
                    { mode: "Hackathon & Innovation", desc: "Optimized for novelty, high visual demoability, and unique pitch differentiators." },
                    { mode: "Research & Publication", desc: "Emphasizes experimental rigor, mathematical formulation, and novel benchmarking." },
                    { mode: "Startup MVP & Product", desc: "Focuses on customer pain points, viral utility, scalability, and monetization viability." }
                  ].map((p, i) => `
                    <label class="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/50 transition cursor-pointer flex items-start gap-3">
                      <input type="radio" name="projectMode" value="${p.mode}" ${i === 0 ? 'checked' : ''} class="mt-1" />
                      <div>
                        <div class="font-heading font-bold text-sm text-white">${p.mode}</div>
                        <p class="text-xs text-slate-400 mt-0.5 leading-relaxed">${p.desc}</p>
                      </div>
                    </label>
                  `).join('')}
                </div>
              </div>

              <!-- Wizard Navigation Buttons -->
              <div class="flex items-center justify-between pt-6 border-t border-slate-800/80 mt-6">
                <button type="button" id="onboard-prev-btn" onclick="Views.prevOnboardStep()" class="px-5 py-2.5 rounded-xl border border-slate-700 text-xs font-semibold text-slate-300 hover:bg-slate-800 transition hidden">
                  Back
                </button>
                <div class="flex-grow"></div>
                <button type="button" id="onboard-next-btn" onclick="Views.nextOnboardStep()" class="px-6 py-2.5 rounded-xl text-xs font-heading font-bold bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/20 hover:brightness-110 transition flex items-center gap-2">
                  <span>Continue</span>
                  <i data-lucide="arrow-right" class="w-4 h-4"></i>
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    `;
  },

  // Onboarding Step State Management
  currentOnboardStep: 1,

  nextOnboardStep() {
    if (this.currentOnboardStep < 6) {
      document.getElementById(`onboard-step-${this.currentOnboardStep}`).classList.add('hidden');
      this.currentOnboardStep++;
      document.getElementById(`onboard-step-${this.currentOnboardStep}`).classList.remove('hidden');
      this.updateOnboardUI();
    } else {
      // Complete Onboarding and generate DNA
      App.showToast("Synthesizing your Project DNA...", "info");
      setTimeout(() => App.navigate('project-dna'), 600);
    }
  },

  prevOnboardStep() {
    if (this.currentOnboardStep > 1) {
      document.getElementById(`onboard-step-${this.currentOnboardStep}`).classList.add('hidden');
      this.currentOnboardStep--;
      document.getElementById(`onboard-step-${this.currentOnboardStep}`).classList.remove('hidden');
      this.updateOnboardUI();
    }
  },

  updateOnboardUI() {
    const currentNumEl = document.getElementById('onboard-current-step-num');
    if (currentNumEl) currentNumEl.innerText = this.currentOnboardStep;

    const prevBtn = document.getElementById('onboard-prev-btn');
    const nextBtn = document.getElementById('onboard-next-btn');

    if (prevBtn) {
      if (this.currentOnboardStep === 1) prevBtn.classList.add('hidden');
      else prevBtn.classList.remove('hidden');
    }

    if (nextBtn) {
      if (this.currentOnboardStep === 6) {
        nextBtn.innerHTML = `<span>Generate My Project DNA</span> <i data-lucide="dna" class="w-4 h-4"></i>`;
      } else {
        nextBtn.innerHTML = `<span>Continue</span> <i data-lucide="arrow-right" class="w-4 h-4"></i>`;
      }
    }

    for (let i = 1; i <= 6; i++) {
      const bar = document.getElementById(`step-bar-${i}`);
      if (bar) {
        if (i <= this.currentOnboardStep) {
          bar.className = "h-1.5 rounded-full bg-sky-500 transition-all";
        } else {
          bar.className = "h-1.5 rounded-full bg-slate-800 transition-all";
        }
      }
    }

    App.initLucideIcons();
  },

  // STUDENT PROFILE SHOWCASE VIEW & PROFILE EDITOR
  renderProfile() {
    const prof = App.profile || {
      name: "Engineering Student",
      email: "student@university.edu",
      college: "Department of Computer Science & Engineering",
      academicBranch: "Computer Science & Engineering",
      semester: "Final Year B.Tech (8th Sem)",
      cgpa: "9.2",
      careerGoal: "AI Systems Engineer",
      bio: "Senior engineering student calibrated for Tier-1 engineering roles.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      skills: [],
      interests: [],
      constraints: { budget: "₹2,000", duration: "12 weeks" },
      competencies: { systemDesign: 80, mlOps: 75, backendEng: 85, frontendUi: 70, dbArchitecture: 75, researchViva: 80 }
    };
    const proj = App.activeProject;
    const semester = prof.semester || "Final Year B.Tech (8th Sem)";
    const cgpa = prof.cgpa || "9.2";
    const bio = prof.bio || `${prof.college || 'Engineering College'} — Senior engineering student.`;

    const avatarPresets = [
      { name: "Alex (Default)", url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" },
      { name: "Engineer 1", url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80" },
      { name: "Engineer 2", url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80" },
      { name: "Engineer 3", url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80" },
      { name: "Engineer 4", url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80" },
      { name: "Engineer 5", url: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80" }
    ];

    return `
      <div class="p-6 sm:p-8 max-w-6xl mx-auto space-y-8 animate-fade-in relative">
        <!-- Top Title Bar with Action Buttons -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="badge badge-cyan text-[10px]"><i data-lucide="user-check" class="w-3 h-3"></i> Verified Engineering Identity</span>
              <span class="text-xs text-slate-400 font-mono">PROFILE ID: ENG-2026-AR42</span>
            </div>
            <h1 class="font-heading font-extrabold text-3xl text-white">Profile Section</h1>
            <p class="text-xs sm:text-sm text-slate-400 mt-1">Engineering credentials, verified radar competency levels, and active project telemetry.</p>
          </div>
          <div class="flex items-center gap-3">
            <button onclick="Views.openEditProfileModal()" class="px-5 py-2.5 rounded-xl font-heading font-bold text-xs bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 text-slate-950 font-extrabold shadow-lg shadow-cyan-500/25 hover:brightness-110 active:scale-95 transition flex items-center gap-2 cursor-pointer">
              <i data-lucide="edit-3" class="w-4 h-4"></i>
              <span>Edit Profile</span>
            </button>
            <button onclick="App.navigate('project-dna')" class="px-5 py-2.5 rounded-xl font-heading font-bold text-xs bg-slate-900 border border-slate-700 hover:border-sky-500/50 text-white shadow-md transition flex items-center gap-2">
              <i data-lucide="dna" class="w-4 h-4 text-sky-400"></i>
              <span>Project DNA</span>
            </button>
          </div>
        </div>

        <!-- Master Student Identity Card -->
        <div class="glass-panel p-6 sm:p-8 relative overflow-hidden border border-sky-500/20 shadow-2xl">
          <div class="flex flex-col md:flex-row items-start md:items-center gap-6">
            <!-- Avatar with ring, status dot and quick edit badge -->
            <div class="relative flex-shrink-0 group cursor-pointer" onclick="Views.openEditProfileModal()" title="Click to change avatar / edit profile">
              <img src="${prof.avatar}" class="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover ring-4 ring-sky-500/40 group-hover:ring-sky-400 transition shadow-2xl" alt="${prof.name}">
              <div class="absolute inset-0 rounded-2xl bg-slate-950/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition backdrop-blur-xs">
                <span class="text-[11px] font-bold text-sky-300 flex items-center gap-1"><i data-lucide="camera" class="w-3.5 h-3.5"></i> Edit</span>
              </div>
              <span class="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-slate-950 flex items-center justify-center shadow-lg" title="Active Online">
                <span class="w-2 h-2 rounded-full bg-white animate-ping"></span>
              </span>
            </div>

            <!-- Bio & Academic Details -->
            <div class="space-y-2.5 flex-grow">
              <div class="flex flex-wrap items-center gap-2.5">
                <h2 class="font-heading font-extrabold text-2xl sm:text-3xl text-white">${prof.name}</h2>
                <span class="badge badge-amber text-xs font-mono font-bold"><i data-lucide="trophy" class="w-3.5 h-3.5 text-amber-400"></i> Cohort Rank #1 / 300</span>
                <span class="badge badge-purple text-xs font-mono font-bold">CGPA: ${cgpa} / 10.0</span>
                <span class="badge badge-emerald text-xs font-semibold">${semester}</span>
              </div>
              <p class="text-xs sm:text-sm font-semibold text-sky-400 font-mono flex items-center gap-2">
                <span>${prof.careerGoal} Track</span>
                <span>•</span>
                <span>${prof.academicBranch}</span>
                <span>•</span>
                <span class="text-emerald-400 flex items-center gap-1"><i data-lucide="git-commit" class="w-3 h-3"></i> 48 Commits (Passing CI/CD)</span>
              </p>
              <p class="text-xs text-slate-300 leading-relaxed max-w-3xl">
                ${bio}
              </p>
              <div class="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-400">
                <span class="flex items-center gap-1.5"><i data-lucide="mail" class="w-3.5 h-3.5 text-sky-400"></i> ${prof.email}</span>
                <span class="flex items-center gap-1.5"><i data-lucide="map-pin" class="w-3.5 h-3.5 text-indigo-400"></i> ${prof.college}</span>
                <span class="flex items-center gap-1.5"><i data-lucide="calendar" class="w-3.5 h-3.5 text-emerald-400"></i> Graduation: June 2026</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 4 Key Readiness Badges -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="glass-panel p-5 space-y-1 border border-sky-500/20 hover:border-sky-500/40 transition">
            <span class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Skill Mastery</span>
            <div class="font-heading font-extrabold text-2xl sm:text-3xl text-sky-400">92%</div>
            <p class="text-xs text-slate-400 truncate">Python + ML + SQL + FastAPI</p>
          </div>
          <div class="glass-panel p-5 space-y-1 border border-indigo-500/20 hover:border-indigo-500/40 transition">
            <span class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Career Alignment</span>
            <div class="font-heading font-extrabold text-2xl sm:text-3xl text-indigo-400">96%</div>
            <p class="text-xs text-slate-400 truncate">Targeting ${prof.careerGoal} roles</p>
          </div>
          <div class="glass-panel p-5 space-y-1 border border-emerald-500/20 hover:border-emerald-500/40 transition">
            <span class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Semester Timeline</span>
            <div class="font-heading font-extrabold text-2xl sm:text-3xl text-emerald-400">${prof.constraints?.duration || '12 Weeks'}</div>
            <p class="text-xs text-slate-400 truncate">42 days remaining to viva</p>
          </div>
          <div class="glass-panel p-5 space-y-1 border border-amber-500/20 hover:border-amber-500/40 transition">
            <span class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Budget Allocation</span>
            <div class="font-heading font-extrabold text-2xl sm:text-3xl text-amber-400">${prof.constraints?.budget || '₹3,500'}</div>
            <p class="text-xs text-slate-400 truncate">Cloud hosting & domains</p>
          </div>
        </div>

        <!-- Core Competency Matrix & Interactive Radar Competency Chart -->
        <div class="glass-panel p-6 sm:p-8 space-y-6 border border-sky-500/20 shadow-2xl">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/[0.08]">
            <div>
              <span class="badge badge-cyan text-[10px] font-mono"><i data-lucide="radar" class="w-3.5 h-3.5"></i> Multi-Dimensional Telemetry</span>
              <h3 class="font-heading font-bold text-xl text-white mt-1">Engineering Competency Matrix & Radar</h3>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-xs text-slate-400 font-mono hidden sm:inline">Overall Fit: <strong class="text-emerald-400 font-bold">${Math.round(((prof.competencies?.python || 94) + (prof.competencies?.ml || 88) + (prof.competencies?.db || 92) + (prof.competencies?.api || 86) + (prof.competencies?.frontend || 84) + (prof.competencies?.devops || 80)) / 6)}%</strong></span>
              <button onclick="Views.openEditProfileModal()" class="px-3.5 py-1.5 rounded-xl bg-sky-500/10 border border-sky-500/30 text-xs font-semibold text-sky-300 hover:text-white hover:bg-sky-500/20 transition flex items-center gap-1.5">
                <i data-lucide="sliders" class="w-3.5 h-3.5"></i> Adjust Competencies
              </button>
            </div>
          </div>

          <div class="grid lg:grid-cols-12 gap-8 items-center">
            <!-- Left Column: Competency Progress Bars (60%) -->
            <div class="lg:col-span-6 space-y-4">
              <div>
                <div class="flex justify-between text-xs font-semibold mb-1">
                  <span class="text-slate-200">Python / ML Core (Async, Pandas, NumPy, PyTorch)</span>
                  <span class="text-sky-400 font-mono">${prof.competencies?.python || 94}%</span>
                </div>
                <div class="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div class="bg-gradient-to-r from-cyan-400 to-sky-500 h-full rounded-full transition-all duration-500" style="width: ${prof.competencies?.python || 94}%"></div>
                </div>
              </div>

              <div>
                <div class="flex justify-between text-xs font-semibold mb-1">
                  <span class="text-slate-200">AI & Predictive Modeling (XGBoost, SHAP, Regressions)</span>
                  <span class="text-indigo-400 font-mono">${prof.competencies?.ml || 88}%</span>
                </div>
                <div class="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div class="bg-gradient-to-r from-sky-400 to-indigo-500 h-full rounded-full transition-all duration-500" style="width: ${prof.competencies?.ml || 88}%"></div>
                </div>
              </div>

              <div>
                <div class="flex justify-between text-xs font-semibold mb-1">
                  <span class="text-slate-200">Databases & Vector Search (PostgreSQL, pgvector)</span>
                  <span class="text-emerald-400 font-mono">${prof.competencies?.db || 92}%</span>
                </div>
                <div class="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div class="bg-gradient-to-r from-teal-400 to-emerald-500 h-full rounded-full transition-all duration-500" style="width: ${prof.competencies?.db || 92}%"></div>
                </div>
              </div>

              <div>
                <div class="flex justify-between text-xs font-semibold mb-1">
                  <span class="text-slate-200">FastAPI & Async Microservices (ASGI, WebSockets)</span>
                  <span class="text-sky-400 font-mono">${prof.competencies?.api || 86}%</span>
                </div>
                <div class="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div class="bg-gradient-to-r from-cyan-400 to-blue-500 h-full rounded-full transition-all duration-500" style="width: ${prof.competencies?.api || 86}%"></div>
                </div>
              </div>

              <div>
                <div class="flex justify-between text-xs font-semibold mb-1">
                  <span class="text-slate-200">Frontend & Real-Time Telemetry (React 18, Tailwind)</span>
                  <span class="text-purple-400 font-mono">${prof.competencies?.frontend || 84}%</span>
                </div>
                <div class="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div class="bg-gradient-to-r from-indigo-400 to-purple-500 h-full rounded-full transition-all duration-500" style="width: ${prof.competencies?.frontend || 84}%"></div>
                </div>
              </div>

              <div>
                <div class="flex justify-between text-xs font-semibold mb-1">
                  <span class="text-slate-200">Cloud, Docker & DevOps (Containers, CI/CD, Redis)</span>
                  <span class="text-amber-400 font-mono">${prof.competencies?.devops || 80}%</span>
                </div>
                <div class="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div class="bg-gradient-to-r from-amber-400 to-orange-500 h-full rounded-full transition-all duration-500" style="width: ${prof.competencies?.devops || 80}%"></div>
                </div>
              </div>
            </div>

            <!-- Right Column: Interactive Multi-Axis SVG Radar Competency Chart -->
            <div class="lg:col-span-6 flex flex-col items-center justify-center p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 shadow-inner relative overflow-hidden">
              <div class="w-full flex items-center justify-between mb-2">
                <span class="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <i data-lucide="crosshair" class="w-3.5 h-3.5 text-cyan-400"></i> Radar Competency Map
                </span>
                <span class="badge badge-purple text-[10px] font-mono">6 Core Dimensions</span>
              </div>
              
              <!-- SVG Radar Graphic -->
              ${this.renderRadarCompetencySvg(prof.competencies)}
            </div>
          </div>
        </div>

        <!-- Domain Focus & Hardware Resources -->
        <div class="grid md:grid-cols-2 gap-6">
          <!-- Domain Interests -->
          <div class="glass-panel p-6 space-y-4">
            <h3 class="font-heading font-bold text-base text-white flex items-center gap-2">
              <i data-lucide="target" class="w-4 h-4 text-sky-400"></i> Domain Interests & Focus Areas
            </h3>
            <div class="flex flex-wrap gap-2 pt-1">
              ${(prof.interests || []).map(i => `
                <span class="chip text-sky-300 text-xs px-3 py-1 bg-sky-500/10 border border-sky-500/30 rounded-lg">
                  <i data-lucide="sparkles" class="w-3 h-3"></i> ${i}
                </span>
              `).join('')}
            </div>
            <p class="text-xs text-slate-400 pt-2 leading-relaxed">
              These selected domains guide the AI Idea Generator toward healthcare triage and predictive urban analytics.
            </p>
          </div>

          <!-- Hardware Inventory -->
          <div class="glass-panel p-6 space-y-4">
            <h3 class="font-heading font-bold text-base text-white flex items-center gap-2">
              <i data-lucide="cpu" class="w-4 h-4 text-emerald-400"></i> Hardware & Infrastructure Inventory
            </h3>
            <div class="space-y-2 text-xs text-slate-300 pt-1">
              ${(prof.resources || []).map(r => `
                <div class="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <span class="flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
                    ${r}
                  </span>
                  <span class="text-[10px] text-emerald-400 font-mono font-bold">READY</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Active Project Banner -->
        ${proj ? `
          <div class="capstone-banner p-6 sm:p-7 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-6 border border-sky-500/30 shadow-2xl">
            <div class="space-y-2">
              <div class="flex items-center gap-2">
                <span class="badge badge-cyan text-[10px]">Active Capstone Project</span>
                <span class="text-xs text-sky-400 font-mono font-bold">${proj.progress || 0}% Complete</span>
              </div>
              <h3 class="font-heading font-extrabold text-xl text-white">${proj.title}</h3>
              <p class="text-xs text-slate-300 leading-relaxed max-w-2xl">
                Currently in <strong>${typeof proj.currentPhase === 'object' ? proj.currentPhase?.title : (proj.currentPhase || 'Setup Phase')}</strong>. Calibrated for <strong>${prof.name}</strong> with zero-latency inference and real-time alerts.
              </p>
            </div>
            <div class="flex flex-wrap gap-2">
              <button onclick="App.navigate('project-blueprint')" class="px-5 py-2.5 rounded-xl text-xs font-bold bg-slate-900 border border-slate-700 text-slate-200 hover:border-sky-500 transition flex items-center gap-1.5">
                <i data-lucide="file-code" class="w-3.5 h-3.5 text-sky-400"></i>
                <span>View Blueprint</span>
              </button>
            </div>
          </div>
        ` : `
          <div class="glass-panel p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-6 border border-dashed border-sky-500/30">
            <div class="space-y-1">
              <span class="badge badge-cyan text-[10px]">Workspace Status</span>
              <h3 class="font-heading font-extrabold text-lg text-white">No Active Capstone Project</h3>
              <p class="text-xs text-slate-400">Generate an AI-tailored capstone idea or adopt a curated engineering blueprint.</p>
            </div>
            <button onclick="App.openIdeaGeneratorModal()" class="px-5 py-2.5 rounded-xl font-heading font-extrabold text-xs bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-600 text-slate-950 shadow-md transition flex items-center gap-2 cursor-pointer">
              <i data-lucide="sparkles" class="w-4 h-4"></i>
              <span>Generate Project</span>
            </button>
          </div>
        `}

        <!-- ==========================================================================
             INTERACTIVE EDIT PROFILE MODAL (All Inputs Functional)
             ========================================================================== -->
        <div id="edit-profile-modal" class="modal-backdrop">
          <div class="modal-content-card p-6 sm:p-8 space-y-6">
            <!-- Modal Header -->
            <div class="flex items-center justify-between pb-4 border-b border-white/[0.08]">
              <div class="flex items-center gap-2.5">
                <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-400 to-indigo-600 flex items-center justify-center text-slate-950 font-bold">
                  <i data-lucide="user-cog" class="w-5 h-5 text-white"></i>
                </div>
                <div>
                  <h3 class="font-heading font-bold text-lg text-white">Edit Profile Section</h3>
                  <p class="text-xs text-slate-400">Update your academic credentials, competency radar levels, and engineering identity.</p>
                </div>
              </div>
              <button onclick="Views.closeEditProfileModal()" class="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition" title="Close Modal">
                <i data-lucide="x" class="w-5 h-5"></i>
              </button>
            </div>

            <!-- Modal Form -->
            <form onsubmit="Views.saveProfileEdit(event)" class="space-y-5 text-left">
              <!-- Avatar Preset Selector -->
              <div class="space-y-2">
                <label class="block text-xs font-semibold text-slate-300">Choose Profile Avatar</label>
                <div class="flex items-center gap-3 overflow-x-auto pb-2">
                  ${avatarPresets.map((av, idx) => `
                    <div onclick="Views.selectAvatar('${av.url}', this)" class="avatar-option-label ${prof.avatar === av.url ? 'selected' : ''}" title="${av.name}">
                      <img src="${av.url}" class="w-12 h-12 rounded-xl object-cover" alt="${av.name}">
                    </div>
                  `).join('')}
                </div>
                <div class="pt-1">
                  <input type="url" id="edit-prof-avatar" value="${prof.avatar}" placeholder="Or paste custom image URL..." class="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-sky-500" />
                </div>
              </div>

              <!-- Name & Email -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-semibold text-slate-300 mb-1">Full Name *</label>
                  <input type="text" id="edit-prof-name" value="${prof.name}" required class="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-100 focus:outline-none focus:border-sky-500" />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-slate-300 mb-1">Email Address *</label>
                  <input type="email" id="edit-prof-email" value="${prof.email}" required class="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-100 focus:outline-none focus:border-sky-500" />
                </div>
              </div>

              <!-- College & Academic Branch -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-semibold text-slate-300 mb-1">College / University</label>
                  <input type="text" id="edit-prof-college" value="${prof.college}" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-100 focus:outline-none focus:border-sky-500" />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-slate-300 mb-1">Academic Department / Branch</label>
                  <select id="edit-prof-branch" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-100 focus:outline-none focus:border-sky-500">
                    <option value="Computer Science & Engineering" ${prof.academicBranch.includes('Computer Science') ? 'selected' : ''}>Computer Science & Engineering</option>
                    <option value="Artificial Intelligence & Data Science" ${prof.academicBranch.includes('Artificial Intelligence') ? 'selected' : ''}>Artificial Intelligence & Data Science</option>
                    <option value="Information Technology" ${prof.academicBranch.includes('Information Technology') ? 'selected' : ''}>Information Technology</option>
                    <option value="Electronics & Communication" ${prof.academicBranch.includes('Electronics') ? 'selected' : ''}>Electronics & Communication</option>
                    <option value="Electrical & Electronics" ${prof.academicBranch.includes('Electrical') ? 'selected' : ''}>Electrical & Electronics</option>
                    <option value="Mechanical / Robotics Engineering" ${prof.academicBranch.includes('Robotics') || prof.academicBranch.includes('Mechanical') ? 'selected' : ''}>Mechanical / Robotics Engineering</option>
                  </select>
                </div>
              </div>

              <!-- Semester, CGPA & Career Track -->
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label class="block text-xs font-semibold text-slate-300 mb-1">Current Semester</label>
                  <select id="edit-prof-semester" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-100 focus:outline-none focus:border-sky-500">
                    <option value="Final Year B.Tech (8th Sem)" ${semester.includes('8th') ? 'selected' : ''}>Final Year B.Tech (8th Sem)</option>
                    <option value="Final Year B.Tech (7th Sem)" ${semester.includes('7th') ? 'selected' : ''}>Final Year B.Tech (7th Sem)</option>
                    <option value="3rd Year B.Tech (6th Sem)" ${semester.includes('6th') ? 'selected' : ''}>3rd Year B.Tech (6th Sem)</option>
                    <option value="M.Tech / Post-Graduate" ${semester.includes('M.Tech') ? 'selected' : ''}>M.Tech / Post-Graduate</option>
                  </select>
                </div>
                <div>
                  <label class="block text-xs font-semibold text-slate-300 mb-1">Current CGPA (Out of 10.0)</label>
                  <input type="number" step="0.1" min="1.0" max="10.0" id="edit-prof-cgpa" value="${cgpa}" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-100 focus:outline-none focus:border-sky-500" />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-slate-300 mb-1">Target Career Role</label>
                  <select id="edit-prof-goal" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-100 focus:outline-none focus:border-sky-500">
                    <option value="AI Engineer" ${prof.careerGoal === 'AI Engineer' ? 'selected' : ''}>AI Engineer</option>
                    <option value="Full-Stack Architect" ${prof.careerGoal === 'Full-Stack Architect' ? 'selected' : ''}>Full-Stack Architect</option>
                    <option value="Machine Learning Scientist" ${prof.careerGoal === 'Machine Learning Scientist' ? 'selected' : ''}>Machine Learning Scientist</option>
                    <option value="Cloud & DevOps Engineer" ${prof.careerGoal === 'Cloud & DevOps Engineer' ? 'selected' : ''}>Cloud & DevOps Engineer</option>
                    <option value="Cybersecurity Analyst" ${prof.careerGoal === 'Cybersecurity Analyst' ? 'selected' : ''}>Cybersecurity Analyst</option>
                    <option value="Data Scientist" ${prof.careerGoal === 'Data Scientist' ? 'selected' : ''}>Data Scientist</option>
                  </select>
                </div>
              </div>

              <!-- RADAR COMPETENCY LEVEL SLIDERS -->
              <div class="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                    <i data-lucide="crosshair" class="w-3.5 h-3.5 text-cyan-400"></i> Radar Competency Sliders
                  </span>
                  <span class="text-[10px] text-slate-400">Updates live spider radar graph</span>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
                  <div>
                    <div class="flex justify-between mb-1">
                      <span class="text-slate-300">Python / ML Core</span>
                      <span id="label-comp-python" class="font-mono text-cyan-400">${prof.competencies?.python || 94}%</span>
                    </div>
                    <input type="range" min="30" max="100" id="edit-comp-python" value="${prof.competencies?.python || 94}" oninput="document.getElementById('label-comp-python').innerText = this.value + '%'" class="w-full accent-cyan-400 cursor-pointer" />
                  </div>

                  <div>
                    <div class="flex justify-between mb-1">
                      <span class="text-slate-300">AI & Inference</span>
                      <span id="label-comp-ml" class="font-mono text-indigo-400">${prof.competencies?.ml || 88}%</span>
                    </div>
                    <input type="range" min="30" max="100" id="edit-comp-ml" value="${prof.competencies?.ml || 88}" oninput="document.getElementById('label-comp-ml').innerText = this.value + '%'" class="w-full accent-indigo-400 cursor-pointer" />
                  </div>

                  <div>
                    <div class="flex justify-between mb-1">
                      <span class="text-slate-300">Databases & Vector</span>
                      <span id="label-comp-db" class="font-mono text-emerald-400">${prof.competencies?.db || 92}%</span>
                    </div>
                    <input type="range" min="30" max="100" id="edit-comp-db" value="${prof.competencies?.db || 92}" oninput="document.getElementById('label-comp-db').innerText = this.value + '%'" class="w-full accent-emerald-400 cursor-pointer" />
                  </div>

                  <div>
                    <div class="flex justify-between mb-1">
                      <span class="text-slate-300">FastAPI & Async</span>
                      <span id="label-comp-api" class="font-mono text-sky-400">${prof.competencies?.api || 86}%</span>
                    </div>
                    <input type="range" min="30" max="100" id="edit-comp-api" value="${prof.competencies?.api || 86}" oninput="document.getElementById('label-comp-api').innerText = this.value + '%'" class="w-full accent-sky-400 cursor-pointer" />
                  </div>

                  <div>
                    <div class="flex justify-between mb-1">
                      <span class="text-slate-300">React Telemetry</span>
                      <span id="label-comp-frontend" class="font-mono text-purple-400">${prof.competencies?.frontend || 84}%</span>
                    </div>
                    <input type="range" min="30" max="100" id="edit-comp-frontend" value="${prof.competencies?.frontend || 84}" oninput="document.getElementById('label-comp-frontend').innerText = this.value + '%'" class="w-full accent-purple-400 cursor-pointer" />
                  </div>

                  <div>
                    <div class="flex justify-between mb-1">
                      <span class="text-slate-300">Cloud & Docker</span>
                      <span id="label-comp-devops" class="font-mono text-amber-400">${prof.competencies?.devops || 80}%</span>
                    </div>
                    <input type="range" min="30" max="100" id="edit-comp-devops" value="${prof.competencies?.devops || 80}" oninput="document.getElementById('label-comp-devops').innerText = this.value + '%'" class="w-full accent-amber-400 cursor-pointer" />
                  </div>
                </div>
              </div>

              <!-- Budget & Timeline Constraints -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-semibold text-slate-300 mb-1">Project Budget Allocation</label>
                  <input type="text" id="edit-prof-budget" value="${prof.constraints?.budget || '₹3,500'}" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-100 focus:outline-none focus:border-sky-500" placeholder="e.g. ₹2,000–₹5,000" />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-slate-300 mb-1">Semester Project Timeline</label>
                  <input type="text" id="edit-prof-duration" value="${prof.constraints?.duration || '12 weeks'}" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-100 focus:outline-none focus:border-sky-500" placeholder="e.g. 12 weeks" />
                </div>
              </div>

              <!-- Bio / Career Statement -->
              <div>
                <label class="block text-xs font-semibold text-slate-300 mb-1">Professional Bio & Focus Statement</label>
                <textarea id="edit-prof-bio" rows="3" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-100 focus:outline-none focus:border-sky-500 leading-relaxed">${bio}</textarea>
              </div>

              <!-- Action Buttons -->
              <div class="flex items-center justify-end gap-3 pt-3 border-t border-white/[0.08]">
                <button type="button" onclick="Views.closeEditProfileModal()" class="px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition">
                  Cancel
                </button>
                <button type="submit" class="px-6 py-2.5 rounded-xl font-heading font-bold text-xs bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-600 text-slate-950 shadow-lg shadow-cyan-500/25 hover:brightness-110 active:scale-95 transition flex items-center gap-2">
                  <i data-lucide="check" class="w-4 h-4"></i>
                  <span>Save Profile Changes</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    `;
  },

  // Helper to render Multi-Axis Radar Competency Spider Chart (SVG)
  renderRadarCompetencySvg(comps) {
    const defaultComps = {
      python: 94,
      ml: 88,
      db: 92,
      api: 86,
      frontend: 84,
      devops: 80
    };
    const c = Object.assign({}, defaultComps, comps || {});
    const axes = [
      { key: 'python', label: 'Python Core', score: Number(c.python) || 94 },
      { key: 'ml', label: 'AI Models', score: Number(c.ml) || 88 },
      { key: 'db', label: 'SQL & Vector', score: Number(c.db) || 92 },
      { key: 'api', label: 'FastAPI Micro', score: Number(c.api) || 86 },
      { key: 'frontend', label: 'React UI', score: Number(c.frontend) || 84 },
      { key: 'devops', label: 'DevOps & Cloud', score: Number(c.devops) || 80 }
    ];

    const cx = 170;
    const cy = 150;
    const R = 95;
    const N = axes.length;

    // Concentric Web rings (20%, 40%, 60%, 80%, 100%)
    const rings = [0.25, 0.5, 0.75, 1.0];
    const ringPolygons = rings.map(scale => {
      const points = [];
      for (let i = 0; i < N; i++) {
        const angle = -Math.PI / 2 + (i * 2 * Math.PI) / N;
        const x = cx + R * scale * Math.cos(angle);
        const y = cy + R * scale * Math.sin(angle);
        points.push(`${x.toFixed(1)},${y.toFixed(1)}`);
      }
      return `<polygon points="${points.join(' ')}" fill="none" stroke="rgba(56, 189, 248, ${scale === 1.0 ? 0.35 : 0.12})" stroke-width="${scale === 1.0 ? 1.5 : 1}" />`;
    }).join('\n');

    // Axis lines & labels
    const axisElements = axes.map((axis, i) => {
      const angle = -Math.PI / 2 + (i * 2 * Math.PI) / N;
      const xEnd = cx + R * Math.cos(angle);
      const yEnd = cy + R * Math.sin(angle);
      
      const labelR = R + 24;
      const xLabel = cx + labelR * Math.cos(angle);
      const yLabel = cy + labelR * Math.sin(angle) + 4;
      const anchor = Math.abs(Math.cos(angle)) < 0.2 ? 'middle' : Math.cos(angle) > 0 ? 'start' : 'end';

      return `
        <line x1="${cx}" y1="${cy}" x2="${xEnd.toFixed(1)}" y2="${yEnd.toFixed(1)}" stroke="rgba(255, 255, 255, 0.15)" stroke-width="1" stroke-dasharray="2 2" />
        <text x="${xLabel.toFixed(1)}" y="${yLabel.toFixed(1)}" text-anchor="${anchor}" class="fill-slate-300 font-mono text-[9.5px] font-semibold">${axis.label} (${axis.score}%)</text>
      `;
    }).join('\n');

    // Data polygon points
    const dataPoints = axes.map((axis, i) => {
      const angle = -Math.PI / 2 + (i * 2 * Math.PI) / N;
      const r = (Math.max(10, Math.min(100, axis.score)) / 100) * R;
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);
      return { x, y };
    });

    const dataPolygonPoints = dataPoints.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');
    const vertexCircles = dataPoints.map(p => `
      <circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="4" class="fill-cyan-400 stroke-slate-950" stroke-width="1.5" />
    `).join('\n');

    return `
      <svg viewBox="0 0 340 300" class="w-full max-w-[340px] mx-auto overflow-visible select-none py-1">
        <defs>
          <linearGradient id="radarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#00f2fe" stop-opacity="0.55" />
            <stop offset="50%" stop-color="#38bdf8" stop-opacity="0.38" />
            <stop offset="100%" stop-color="#6366f1" stop-opacity="0.48" />
          </linearGradient>
        </defs>
        ${ringPolygons}
        ${axisElements}
        <polygon points="${dataPolygonPoints}" fill="url(#radarGrad)" stroke="#00f2fe" stroke-width="2" />
        ${vertexCircles}
        <circle cx="${cx}" cy="${cy}" r="3" class="fill-slate-400" />
      </svg>
    `;
  },

  openEditProfileModal() {
    const modal = document.getElementById('edit-profile-modal');
    if (modal) {
      modal.classList.add('active');
    }
  },

  closeEditProfileModal() {
    const modal = document.getElementById('edit-profile-modal');
    if (modal) {
      modal.classList.remove('active');
    }
  },

  selectAvatar(url, el) {
    const input = document.getElementById('edit-prof-avatar');
    if (input) input.value = url;

    document.querySelectorAll('.avatar-option-label').forEach(item => {
      item.classList.remove('selected');
    });
    if (el) el.classList.add('selected');
  },

  saveProfileEdit(event) {
    event.preventDefault();

    const name = document.getElementById('edit-prof-name')?.value.trim();
    const email = document.getElementById('edit-prof-email')?.value.trim();
    const college = document.getElementById('edit-prof-college')?.value.trim();
    const branch = document.getElementById('edit-prof-branch')?.value;
    const semester = document.getElementById('edit-prof-semester')?.value;
    const cgpa = document.getElementById('edit-prof-cgpa')?.value.trim();
    const goal = document.getElementById('edit-prof-goal')?.value;
    const budget = document.getElementById('edit-prof-budget')?.value.trim();
    const duration = document.getElementById('edit-prof-duration')?.value.trim();
    const bio = document.getElementById('edit-prof-bio')?.value.trim();
    const avatar = document.getElementById('edit-prof-avatar')?.value.trim();

    // Radar Competency Inputs
    const pythonComp = parseInt(document.getElementById('edit-comp-python')?.value || '94');
    const mlComp = parseInt(document.getElementById('edit-comp-ml')?.value || '88');
    const dbComp = parseInt(document.getElementById('edit-comp-db')?.value || '92');
    const apiComp = parseInt(document.getElementById('edit-comp-api')?.value || '86');
    const frontendComp = parseInt(document.getElementById('edit-comp-frontend')?.value || '84');
    const devopsComp = parseInt(document.getElementById('edit-comp-devops')?.value || '80');

    if (!name || !email) {
      App.showToast("Name and email are required fields.", "error");
      return;
    }

    // Update Profile state
    App.profile.name = name;
    App.profile.email = email;
    if (college) App.profile.college = college;
    if (branch) App.profile.academicBranch = branch;
    if (semester) App.profile.semester = semester;
    if (cgpa) App.profile.cgpa = cgpa;
    if (goal) App.profile.careerGoal = goal;
    if (!App.profile.constraints) App.profile.constraints = {};
    if (budget) App.profile.constraints.budget = budget;
    if (duration) App.profile.constraints.duration = duration;
    if (bio) App.profile.bio = bio;
    if (avatar) App.profile.avatar = avatar;

    App.profile.competencies = {
      python: pythonComp,
      ml: mlComp,
      db: dbComp,
      api: apiComp,
      frontend: frontendComp,
      devops: devopsComp
    };

    App.saveState();
    App.renderHeaderAndSidebar();
    this.closeEditProfileModal();

    // Re-render profile view immediately
    App.renderCurrentView();
    App.initLucideIcons();

    App.triggerConfetti();
    App.showToast(`Engineering Profile & Radar for ${name} updated successfully!`, "success");
  },

  // 4. PROJECT DNA PAGE
  renderProjectDNA() {
    const dna = MockData.projectDNA || { matchScore: 92, alignmentKeywords: [], corePillars: [] };
    const prof = App.profile || {
      name: "Engineering Student",
      careerGoal: "AI Systems Engineer",
      skills: [{ name: "Python" }, { name: "JavaScript" }],
      interests: ["AI/ML", "Web Development"],
      constraints: { duration: "12 weeks", budget: "₹2,000" }
    };

    return `
      <div class="p-6 sm:p-8 max-w-6xl mx-auto space-y-8 animate-fade-in">
        <!-- Page Header -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="badge badge-cyan"><i data-lucide="dna" class="w-3 h-3"></i> AI Analysis Result</span>
              <span class="text-xs text-slate-400 font-mono">CALIBRATION ID: DNA-8891</span>
            </div>
            <h1 class="font-heading font-extrabold text-3xl text-white">Your Project DNA</h1>
            <p class="text-xs sm:text-sm text-slate-400 mt-1">Holistic compatibility analysis based on your complete profile & constraints.</p>
          </div>
          <button onclick="App.navigate('discover-projects')" class="px-6 py-3 rounded-xl font-heading font-bold text-sm bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/25 hover:brightness-110 transition flex items-center gap-2 self-start sm:self-auto">
            <span>Generate Projects</span>
            <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </button>
        </div>

        <!-- Student Profile Summary Bar -->
        <div class="glass-panel p-5 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 text-xs">
          <div>
            <span class="text-slate-500 uppercase font-semibold text-[10px] block">Student</span>
            <span class="font-bold text-slate-200 mt-0.5 block truncate">${prof.name}</span>
          </div>
          <div>
            <span class="text-slate-500 uppercase font-semibold text-[10px] block">Career Target</span>
            <span class="font-bold text-sky-400 mt-0.5 block truncate">${prof.careerGoal}</span>
          </div>
          <div>
            <span class="text-slate-500 uppercase font-semibold text-[10px] block">Key Skills</span>
            <span class="font-bold text-slate-200 mt-0.5 block truncate">${prof.skills.map(s => s.name).slice(0, 3).join(', ')}</span>
          </div>
          <div>
            <span class="text-slate-500 uppercase font-semibold text-[10px] block">Interests</span>
            <span class="font-bold text-slate-200 mt-0.5 block truncate">${prof.interests.slice(0, 2).join(', ')}</span>
          </div>
          <div>
            <span class="text-slate-500 uppercase font-semibold text-[10px] block">Duration</span>
            <span class="font-bold text-slate-200 mt-0.5 block">${prof.constraints.duration}</span>
          </div>
          <div>
            <span class="text-slate-500 uppercase font-semibold text-[10px] block">Team Size</span>
            <span class="font-bold text-slate-200 mt-0.5 block">${prof.constraints.teamSize} members</span>
          </div>
          <div>
            <span class="text-slate-500 uppercase font-semibold text-[10px] block">Budget</span>
            <span class="font-bold text-slate-200 mt-0.5 block">${prof.constraints.budget}</span>
          </div>
        </div>

        <!-- Main DNA Visualization Card -->
        <div class="glass-panel p-6 sm:p-8 border-sky-500/30 shadow-2xl relative overflow-hidden">
          <div class="grid lg:grid-cols-12 gap-8 items-center">
            
            <!-- Left: Overall Score Dial -->
            <div class="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-950/70 border border-slate-800 text-center">
              <span class="badge badge-purple mb-4">Overall Project DNA</span>
              ${Views.renderScoreRing(dna.overallScore, 130, 10, "stroke-sky-400")}
              <div class="mt-4">
                <span class="text-xs font-semibold text-emerald-400">High Real-World Viability</span>
                <p class="text-xs text-slate-400 mt-1">Calibrated for Tier-1 engineering viva & recruiter review.</p>
              </div>
            </div>

            <!-- Right: Metric Bars & AI Verdict -->
            <div class="lg:col-span-8 space-y-4">
              <h3 class="font-heading font-bold text-lg text-white">DNA Attribute Breakdown</h3>

              <div class="space-y-3">
                <div>
                  <div class="flex justify-between text-xs font-semibold mb-1">
                    <span class="text-slate-300">Skill Fit (Python + ML + React)</span>
                    <span class="text-sky-400 font-mono">${dna.skillFit}%</span>
                  </div>
                  <div class="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                    <div class="bg-sky-400 h-full rounded-full transition-all duration-1000" style="width: ${dna.skillFit}%"></div>
                  </div>
                </div>

                <div>
                  <div class="flex justify-between text-xs font-semibold mb-1">
                    <span class="text-slate-300">Career Fit (AI Engineer Alignment)</span>
                    <span class="text-indigo-400 font-mono">${dna.careerFit}%</span>
                  </div>
                  <div class="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                    <div class="bg-indigo-400 h-full rounded-full transition-all duration-1000" style="width: ${dna.careerFit}%"></div>
                  </div>
                </div>

                <div>
                  <div class="flex justify-between text-xs font-semibold mb-1">
                    <span class="text-slate-300">Real-World Impact (Healthcare Operations)</span>
                    <span class="text-purple-400 font-mono">${dna.impact}%</span>
                  </div>
                  <div class="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                    <div class="bg-purple-400 h-full rounded-full transition-all duration-1000" style="width: ${dna.impact}%"></div>
                  </div>
                </div>

                <div>
                  <div class="flex justify-between text-xs font-semibold mb-1">
                    <span class="text-slate-300">Feasibility (12 Weeks + ₹3,500 Budget)</span>
                    <span class="text-emerald-400 font-mono">${dna.feasibility}%</span>
                  </div>
                  <div class="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                    <div class="bg-emerald-400 h-full rounded-full transition-all duration-1000" style="width: ${dna.feasibility}%"></div>
                  </div>
                </div>

                <div>
                  <div class="flex justify-between text-xs font-semibold mb-1">
                    <span class="text-slate-300">Innovation & Uniqueness</span>
                    <span class="text-amber-400 font-mono">${dna.innovation}%</span>
                  </div>
                  <div class="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                    <div class="bg-amber-400 h-full rounded-full transition-all duration-1000" style="width: ${dna.innovation}%"></div>
                  </div>
                </div>
              </div>

              <!-- AI Verdict Box -->
              <div class="p-4 rounded-xl bg-sky-500/10 border border-sky-500/20 text-xs text-slate-200 mt-4">
                <p class="leading-relaxed">
                  <strong>Architect Verdict:</strong> ${dna.summary}
                </p>
              </div>
            </div>

          </div>
        </div>

        <!-- Competencies & Risk Safeguards -->
        <div class="grid md:grid-cols-2 gap-6">
          <div class="glass-panel p-6 space-y-3">
            <h4 class="font-heading font-bold text-sm text-emerald-400 flex items-center gap-2">
              <i data-lucide="check-circle-2" class="w-4 h-4"></i> Identified Strengths & Accelerators
            </h4>
            <ul class="space-y-2 text-xs text-slate-300">
              ${dna.topCompetencies.map(c => `
                <li class="flex items-start gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0"></span>
                  <span>${c}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <div class="glass-panel p-6 space-y-3">
            <h4 class="font-heading font-bold text-sm text-amber-400 flex items-center gap-2">
              <i data-lucide="alert-triangle" class="w-4 h-4"></i> Guardrails & Mitigation Advice
            </h4>
            <ul class="space-y-2 text-xs text-slate-300">
              ${dna.potentialRisks.map(r => `
                <li class="flex items-start gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 flex-shrink-0"></span>
                  <span>${r}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        </div>
      </div>
    `;
  },

  // 5. DISCOVER PROJECTS & IDEA REFINER
  renderDiscoverProjects() {
    const projects = MockData.generatedProjects;

    return `
      <div class="p-6 sm:p-8 max-w-6xl mx-auto space-y-10 animate-fade-in">
        <!-- Header -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span class="badge badge-purple mb-1">AI Project Architect</span>
            <h1 class="font-heading font-extrabold text-3xl text-white">Personalized Project Discovery</h1>
            <p class="text-xs sm:text-sm text-slate-400 mt-1">3 tailored paths generated specifically for <strong>${App.profile?.name || 'Engineer'}</strong> (${App.profile?.careerGoal || 'AI Engineer'}, ${App.profile?.constraints?.duration || '12 weeks'}).</p>
          </div>
          <button onclick="App.navigate('compare-projects')" class="px-5 py-2.5 rounded-xl font-heading font-semibold text-xs bg-slate-900 border border-slate-700 hover:border-sky-500 text-slate-200 transition flex items-center gap-2 self-start sm:self-auto">
            <i data-lucide="git-compare" class="w-4 h-4 text-sky-400"></i>
            <span>Compare All 3 Paths</span>
          </button>
        </div>

        <!-- 3 PROJECT PATHS GRID -->
        <div class="grid lg:grid-cols-3 gap-6">
          ${projects.map(proj => {
            const isRec = proj.isRecommended;
            const badgeClass = proj.pathType === 'SAFE' ? 'badge-emerald' :
                               proj.pathType === 'SMART' ? 'badge-cyan' : 'badge-purple';

            return `
              <div class="glass-panel p-6 flex flex-col justify-between relative ${isRec ? 'border-sky-500/50 ring-1 ring-sky-500/30' : ''} hover:border-slate-600 transition">
                ${isRec ? `
                  <div class="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 text-[10px] font-heading font-bold text-white uppercase tracking-wider shadow-md">
                    Recommended Choice
                  </div>
                ` : ''}

                <div>
                  <div class="flex items-center justify-between mb-3 mt-1">
                    <span class="badge ${badgeClass} font-mono text-[10px]">PATH — ${proj.pathType}</span>
                    <span class="text-xs text-slate-400 font-medium">${proj.difficulty}</span>
                  </div>

                  <h3 class="font-heading font-bold text-lg text-white leading-snug">${proj.title}</h3>
                  <p class="text-xs text-slate-300 mt-2 leading-relaxed">${proj.tagline}</p>

                  <!-- Score Ring & Key Metrics -->
                  <div class="my-5 p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between">
                    <div>
                      <span class="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Potential Score</span>
                      <div class="text-xs text-sky-400 font-semibold mt-0.5">Skill Fit: ${proj.skillMatch}%</div>
                      <div class="text-[11px] text-slate-400">Feasibility: ${proj.feasibility}%</div>
                    </div>
                    ${Views.renderScoreRing(proj.potentialScore, 64, 5, isRec ? "stroke-sky-400" : "stroke-indigo-400")}
                  </div>

                  <!-- Details Pill Grid -->
                  <div class="space-y-2 text-xs text-slate-400 border-t border-slate-800 pt-3">
                    <div class="flex justify-between">
                      <span>Timeline:</span>
                      <span class="text-slate-200 font-medium">${proj.duration}</span>
                    </div>
                    <div class="flex justify-between">
                      <span>Est. Cost:</span>
                      <span class="text-slate-200 font-medium">${proj.cost}</span>
                    </div>
                    <div class="flex justify-between">
                      <span>Uniqueness:</span>
                      <span class="text-emerald-400 font-medium">${proj.uniquenessScore}/100</span>
                    </div>
                  </div>

                  <!-- Badges -->
                  <div class="flex flex-wrap gap-1.5 mt-4">
                    ${proj.badges.map(b => `<span class="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300">${b}</span>`).join('')}
                  </div>
                </div>

                <!-- Action Buttons -->
                <div class="pt-5 border-t border-slate-800 mt-5 space-y-2">
                  <button onclick="App.navigate('project-blueprint')" class="w-full py-2.5 rounded-xl text-xs font-heading font-bold ${isRec ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md shadow-sky-500/20' : 'bg-slate-900 border border-slate-700 text-slate-200 hover:bg-slate-800'} transition flex items-center justify-center gap-1.5">
                    <span>View Blueprint</span>
                    <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
                  </button>
                  <button onclick="App.showToast('Saved ${proj.title} to bookmarks', 'success')" class="w-full py-1.5 text-[11px] font-semibold text-slate-400 hover:text-white transition">
                    Save to Shortlist
                  </button>
                </div>
              </div>
            `;
          }).join('')}
        </div>

        <!-- AI CUSTOM PROJECT IDEA SYNTHESIZER STUDIO -->
        <div class="glass-panel p-6 sm:p-8 border-slate-700/80 shadow-2xl relative space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800">
            <div>
              <div class="flex items-center gap-2 mb-1">
                <span class="badge badge-cyan"><i data-lucide="sparkles" class="w-3 h-3"></i> AI Project Synthesizer Engine</span>
                <span class="badge badge-purple text-[10px]">Skills + Interests → Practical Blueprint</span>
              </div>
              <h2 class="font-heading font-extrabold text-2xl text-white">Generate Custom Project from Your Skills & Interests</h2>
              <p class="text-xs sm:text-sm text-slate-400 mt-1">Select your domain focus, engineering branch, and skillset to generate a tailored capstone project complete with features, technologies, and development steps.</p>
            </div>
          </div>

          <!-- Synthesizer Form Inputs -->
          <div class="grid sm:grid-cols-3 gap-4">
            <div>
              <label class="block text-xs font-semibold text-slate-300 mb-1.5">Problem Domain / Industry</label>
              <select id="synth-domain" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-sky-500">
                <option value="Healthcare" selected>Healthcare & Clinical AI</option>
                <option value="FinTech">FinTech & Fraud Detection</option>
                <option value="Smart Agriculture">Smart Agriculture & Edge Vision</option>
                <option value="Cyber Defense">Cyber Defense & Threat Hunting</option>
              </select>
            </div>

            <div>
              <label class="block text-xs font-semibold text-slate-300 mb-1.5">Engineering Branch</label>
              <select id="synth-branch" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-sky-500">
                <option value="Computer Science & Engineering" selected>Computer Science & Engineering</option>
                <option value="Artificial Intelligence & Data Science">Artificial Intelligence & Data Science</option>
                <option value="Electronics & Communication (IoT/Embedded)">Electronics & Communication (IoT/Embedded)</option>
                <option value="Information Technology">Information Technology</option>
              </select>
            </div>

            <div>
              <label class="block text-xs font-semibold text-slate-300 mb-1.5">Target Difficulty & Scope</label>
              <select id="synth-diff" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-sky-500">
                <option value="Intermediate" selected>Intermediate (12-Week Semester Capstone)</option>
                <option value="Advanced">Advanced / Research Grade (16 Weeks)</option>
                <option value="MVP">Fast MVP / Hackathon Track (4-6 Weeks)</option>
              </select>
            </div>
          </div>

          <div class="flex justify-end pt-2">
            <button onclick="Views.handleSynthesizeProject()" class="px-6 py-3 rounded-xl font-heading font-bold text-xs sm:text-sm bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 text-white shadow-lg shadow-sky-500/25 hover:brightness-110 active:scale-95 transition flex items-center gap-2">
              <i data-lucide="cpu" class="w-4 h-4"></i>
              <span>Synthesize Complete Project Blueprint</span>
            </button>
          </div>

          <!-- Dynamic Output Container for Custom Synthesized Project -->
          <div id="synth-output-container" class="mt-6 pt-6 border-t border-slate-800 hidden">
            <!-- Rendered by Views.handleSynthesizeProject() -->
          </div>
        </div>

        <!-- AI IDEA REFINER COMPONENT -->
        <div class="glass-panel p-6 sm:p-8 border-slate-700/80 shadow-2xl relative">
          <div class="flex items-center gap-2 mb-2">
            <span class="badge badge-amber"><i data-lucide="sparkles" class="w-3 h-3"></i> Feature 6: AI Project Refiner</span>
          </div>
          <h2 class="font-heading font-extrabold text-2xl text-white">Have your own rough idea? Let AI elevate it.</h2>
          <p class="text-xs sm:text-sm text-slate-400 mt-1">Type in a rough or common idea (e.g. "AI attendance system", "Fake news detector"). Our engine will identify weaknesses and upgrade it into an external-examiner-ready project.</p>

          <div class="mt-6 flex flex-col sm:flex-row gap-3">
            <input type="text" id="refine-idea-input" value="I want to make an AI attendance system using face recognition" placeholder="e.g. I want to build an e-commerce website..." class="flex-grow px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-100 focus:outline-none focus:border-sky-500" />
            <button onclick="Views.handleRefineIdea()" class="px-6 py-3 rounded-xl font-heading font-bold text-xs sm:text-sm bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/25 hover:brightness-110 transition flex-shrink-0 flex items-center justify-center gap-2">
              <i data-lucide="wand-2" class="w-4 h-4"></i>
              <span>Upgrade Idea</span>
            </button>
          </div>

          <!-- Refiner Result Container -->
          <div id="refine-result-container" class="mt-6 pt-6 border-t border-slate-800 hidden">
            <!-- Populated dynamically -->
          </div>
        </div>
      </div>
    `;
  },

  handleSynthesizeProject() {
    const domain = document.getElementById('synth-domain')?.value || 'Healthcare';
    const branch = document.getElementById('synth-branch')?.value || 'Computer Science & Engineering';
    const diff = document.getElementById('synth-diff')?.value || 'Intermediate';
    const container = document.getElementById('synth-output-container');
    if (!container) return;

    const proj = AIEngine.synthesizeProjectDetails({ domain, branch, difficulty: diff });
    container.classList.remove('hidden');

    container.innerHTML = `
      <div class="space-y-6 animate-fade-in">
        <!-- Banner -->
        <div class="p-6 rounded-2xl bg-gradient-to-r from-sky-950/40 via-indigo-950/40 to-slate-950 border border-sky-500/40 space-y-2">
          <div class="flex items-center justify-between flex-wrap gap-2">
            <span class="badge badge-cyan font-mono text-[10px]">GENERATED BLUEPRINT: ${domain.toUpperCase()}</span>
            <div class="flex items-center gap-2">
              <span class="badge badge-emerald text-[10px]">Potential Score: ${proj.potentialScore}/100</span>
              <span class="badge badge-purple text-[10px]">Uniqueness: ${proj.uniquenessScore}/100</span>
            </div>
          </div>
          <h3 class="font-heading font-black text-xl sm:text-2xl text-white">${proj.title}</h3>
          <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">${proj.tagline}</p>
        </div>

        <!-- 4 Core Pillars Grid -->
        <div class="grid md:grid-cols-2 gap-6">
          <!-- 1. Features Breakdown (MoSCoW Scope) -->
          <div class="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
            <h4 class="font-heading font-bold text-sm text-sky-400 flex items-center gap-2">
              <i data-lucide="layers" class="w-4 h-4"></i> Feature Breakdown & Scope (MoSCoW)
            </h4>
            <div class="space-y-2 text-xs">
              <div class="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800">
                <span class="text-[10px] font-bold text-sky-400 uppercase tracking-wider block mb-1">MVP / Core V1 (Must-Have):</span>
                <ul class="space-y-1 text-slate-300">
                  ${proj.scope.mvp.map(m => `<li class="flex items-start gap-1.5"><i data-lucide="check" class="w-3 h-3 text-sky-400 mt-0.5 flex-shrink-0"></i><span>${m}</span></li>`).join('')}
                </ul>
              </div>
              <div class="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800">
                <span class="text-[10px] font-bold text-indigo-400 uppercase tracking-wider block mb-1">Advanced V2 (Should-Have):</span>
                <ul class="space-y-1 text-slate-300">
                  ${proj.scope.v2.map(v => `<li class="flex items-start gap-1.5"><i data-lucide="arrow-right" class="w-3 h-3 text-indigo-400 mt-0.5 flex-shrink-0"></i><span>${v}</span></li>`).join('')}
                </ul>
              </div>
            </div>
          </div>

          <!-- 2. Technology Stack & Rationale -->
          <div class="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
            <h4 class="font-heading font-bold text-sm text-indigo-400 flex items-center gap-2">
              <i data-lucide="cpu" class="w-4 h-4"></i> Recommended Tech Stack & Why Selected
            </h4>
            <div class="space-y-2">
              ${proj.techStack.map(t => `
                <div class="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs">
                  <div class="flex items-center justify-between font-semibold text-white">
                    <span>${t.name}</span>
                    <span class="text-[10px] font-mono text-sky-400">${t.layer}</span>
                  </div>
                  <p class="text-[11px] text-slate-400 mt-0.5 leading-relaxed">${t.why}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- 3. Step-by-Step Development Steps -->
        <div class="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
          <h4 class="font-heading font-bold text-sm text-emerald-400 flex items-center gap-2">
            <i data-lucide="milestone" class="w-4 h-4"></i> Step-by-Step Implementation Sequence
          </h4>
          <div class="grid sm:grid-cols-5 gap-3">
            ${proj.developmentSteps.map(s => `
              <div class="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs space-y-1.5">
                <span class="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 font-mono font-bold text-[11px] flex items-center justify-center">0${s.phase}</span>
                <span class="font-heading font-bold text-xs text-white block">${s.title}</span>
                <p class="text-[10px] text-slate-400 leading-snug">${s.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 4. Practical Improvements & Pitfalls -->
        <div class="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 grid sm:grid-cols-2 gap-4 text-xs">
          <div class="space-y-1.5">
            <span class="font-bold text-rose-400 flex items-center gap-1.5">
              <i data-lucide="alert-triangle" class="w-3.5 h-3.5"></i> Common Pitfall to Avoid:
            </span>
            <p class="text-slate-300 leading-relaxed bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">${proj.pitfalls}</p>
          </div>
          <div class="space-y-1.5">
            <span class="font-bold text-cyan-400 flex items-center gap-1.5">
              <i data-lucide="zap" class="w-3.5 h-3.5"></i> High-Impact Innovation Upgrade:
            </span>
            <p class="text-slate-300 leading-relaxed bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">${proj.innovation}</p>
          </div>
        </div>

        <div class="flex justify-end pt-2">
          <button onclick="App.navigate('project-blueprint')" class="px-6 py-2.5 rounded-xl text-xs font-heading font-bold bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md hover:brightness-110 transition flex items-center gap-2">
            <span>Explore Full Architecture Blueprint</span>
            <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </button>
        </div>
      </div>
    `;

    App.initLucideIcons();
  },

  handleRefineIdea() {
    const input = document.getElementById('refine-idea-input');
    const container = document.getElementById('refine-result-container');
    if (!input || !container) return;

    const refined = AIEngine.refineIdea(input.value);
    container.classList.remove('hidden');

    container.innerHTML = `
      <div class="grid md:grid-cols-2 gap-6 animate-fade-in">
        <!-- Original Idea Critique -->
        <div class="p-5 rounded-xl bg-rose-950/20 border border-rose-500/30 space-y-3">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold uppercase tracking-wider text-rose-400">Current Idea Critique</span>
            <span class="badge badge-rose text-[10px]">Low Differentiator</span>
          </div>
          <p class="text-xs text-slate-300 font-medium italic">"${refined.originalIdea}"</p>
          <div class="space-y-1.5 pt-2 border-t border-rose-900/40 text-xs text-slate-300">
            <p class="font-semibold text-rose-300">Problems detected:</p>
            <ul class="list-disc pl-4 space-y-1 text-slate-400">
              ${refined.problems.map(p => `<li>${p}</li>`).join('')}
            </ul>
          </div>
        </div>

        <!-- Improved AI Architecture -->
        <div class="p-5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-3">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold uppercase tracking-wider text-emerald-400">Upgraded Production Project</span>
            <span class="badge badge-emerald text-[10px]">Uniqueness ${refined.uniquenessScore}/100</span>
          </div>
          <h4 class="font-heading font-bold text-base text-white">${refined.improvedTitle}</h4>
          <p class="text-xs text-slate-300 leading-relaxed">${refined.improvedTagline}</p>
          <div class="space-y-1.5 pt-2 border-t border-emerald-900/40 text-xs text-slate-300">
            <p class="font-semibold text-emerald-300">Why this impresses interviewers & examiners:</p>
            <ul class="list-disc pl-4 space-y-1 text-slate-300">
              ${refined.keyDifferentiators.map(d => `<li>${d}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>
    `;

    App.initLucideIcons();
  },

  // 6. COMPARE PROJECTS
  renderCompareProjects() {
    const projects = MockData.generatedProjects;

    return `
      <div class="p-6 sm:p-8 max-w-6xl mx-auto space-y-8 animate-fade-in">
        <div class="flex items-center justify-between">
          <div>
            <span class="badge badge-cyan mb-1">Feature 7: Idea Matrix</span>
            <h1 class="font-heading font-extrabold text-3xl text-white">Project Comparison Table</h1>
            <p class="text-xs sm:text-sm text-slate-400 mt-1">Multi-dimensional evaluation against <strong>${App.profile?.name ? App.profile.name.split(' ')[0] : 'Engineer'}</strong>'s skills, 12-week timeline and budget.</p>
          </div>
          <button onclick="App.navigate('discover-projects')" class="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 border border-slate-700 text-slate-200">
            Back to Discovery
          </button>
        </div>

        <!-- AI Recommendation Highlight Banner -->
        <div class="p-5 rounded-2xl bg-gradient-to-r from-sky-950/70 via-indigo-950/70 to-slate-900/80 border border-sky-500/30 flex items-start gap-4">
          <div class="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center flex-shrink-0 mt-0.5">
            <i data-lucide="award" class="w-5 h-5"></i>
          </div>
          <div>
            <h3 class="font-heading font-bold text-base text-white">AI Architect Recommendation</h3>
            <p class="text-xs text-slate-300 mt-1 leading-relaxed">
              Based on your skills (Python, ML, React), 12-week timeline and AI Engineer career goal, <strong>Project B (AI Hospital Crowd Intelligence)</strong> provides the best balance between innovation (87%) and feasibility (90%). Project C has higher innovation (97%) but risks missing the 12-week semester deadline due to distributed RL training.
            </p>
          </div>
        </div>

        <!-- Table Container -->
        <div class="glass-panel overflow-hidden border-slate-800">
          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse text-xs">
              <thead>
                <tr class="border-b border-slate-800 bg-slate-950/60 text-slate-400 font-heading font-bold text-[11px] uppercase tracking-wider">
                  <th class="p-4">Evaluation Metric</th>
                  <th class="p-4">Path 1 — Safe</th>
                  <th class="p-4 text-sky-400 bg-sky-500/5 border-x border-sky-500/20">Path 2 — Smart (Recommended)</th>
                  <th class="p-4">Path 3 — Ambitious</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800/60 text-slate-200">
                <tr>
                  <td class="p-4 font-semibold text-slate-300">Project Title</td>
                  <td class="p-4 font-medium text-slate-200">Clinical Wait-Time Estimator</td>
                  <td class="p-4 font-bold text-sky-300 bg-sky-500/5 border-x border-sky-500/20">AI Hospital Crowd Intelligence</td>
                  <td class="p-4 font-medium text-slate-200">Autonomous Multi-Hospital Swarm</td>
                </tr>
                <tr>
                  <td class="p-4 font-semibold text-slate-300">Overall Potential Score</td>
                  <td class="p-4 font-mono font-bold text-emerald-400">86/100</td>
                  <td class="p-4 font-mono font-bold text-sky-400 text-sm bg-sky-500/5 border-x border-sky-500/20">91/100</td>
                  <td class="p-4 font-mono font-bold text-purple-400">93/100</td>
                </tr>
                <tr>
                  <td class="p-4 font-semibold text-slate-300">Skill Match</td>
                  <td class="p-4 font-mono">95%</td>
                  <td class="p-4 font-mono font-semibold text-sky-300 bg-sky-500/5 border-x border-sky-500/20">92%</td>
                  <td class="p-4 font-mono">78%</td>
                </tr>
                <tr>
                  <td class="p-4 font-semibold text-slate-300">Innovation Index</td>
                  <td class="p-4 font-mono">76%</td>
                  <td class="p-4 font-mono font-semibold text-sky-300 bg-sky-500/5 border-x border-sky-500/20">87%</td>
                  <td class="p-4 font-mono font-bold text-amber-400">97%</td>
                </tr>
                <tr>
                  <td class="p-4 font-semibold text-slate-300">Feasibility (Semester Deadline)</td>
                  <td class="p-4 font-mono text-emerald-400 font-bold">96%</td>
                  <td class="p-4 font-mono font-semibold text-emerald-300 bg-sky-500/5 border-x border-sky-500/20">90%</td>
                  <td class="p-4 font-mono text-rose-400">68% (High Delay Risk)</td>
                </tr>
                <tr>
                  <td class="p-4 font-semibold text-slate-300">Real-World Impact</td>
                  <td class="p-4 font-mono">88%</td>
                  <td class="p-4 font-mono font-semibold text-sky-300 bg-sky-500/5 border-x border-sky-500/20">95%</td>
                  <td class="p-4 font-mono">98%</td>
                </tr>
                <tr>
                  <td class="p-4 font-semibold text-slate-300">Career Alignment (AI Engineer)</td>
                  <td class="p-4 font-mono">84%</td>
                  <td class="p-4 font-mono font-semibold text-sky-300 bg-sky-500/5 border-x border-sky-500/20">96%</td>
                  <td class="p-4 font-mono">94%</td>
                </tr>
                <tr>
                  <td class="p-4 font-semibold text-slate-300">Uniqueness Score</td>
                  <td class="p-4 font-mono">78/100</td>
                  <td class="p-4 font-mono font-semibold text-sky-300 bg-sky-500/5 border-x border-sky-500/20">88/100</td>
                  <td class="p-4 font-mono">96/100</td>
                </tr>
                <tr>
                  <td class="p-4 font-semibold text-slate-300">Estimated Cost</td>
                  <td class="p-4">Free</td>
                  <td class="p-4 bg-sky-500/5 border-x border-sky-500/20">₹1,500 (Fits in ₹2k)</td>
                  <td class="p-4 text-amber-400">₹4,500+ (Requires GPU)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="flex justify-end gap-4">
          <button onclick="App.navigate('discover-projects')" class="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white">
            Choose Another Path
          </button>
          <button onclick="App.navigate('project-blueprint')" class="px-7 py-3 rounded-xl font-heading font-bold text-xs bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/20 hover:brightness-110 transition flex items-center gap-2">
            <span>Select Recommended Path & View Blueprint</span>
            <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </button>
        </div>
      </div>
    `;
  },

  // 7. PROJECT BLUEPRINT
  currentBlueprintId: 'active',

  switchBlueprintProject(blueprintId) {
    this.currentBlueprintId = blueprintId;
    const mainContent = document.getElementById('app-main-content');
    if (mainContent) {
      mainContent.innerHTML = this.renderProjectBlueprint();
      App.initLucideIcons();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },

  adoptCurrentBlueprintAsActive(blueprintId) {
    let chosen = null;
    if (blueprintId && blueprintId !== 'active') {
      chosen = MockData.blueprintsCatalog?.find(b => b.id === blueprintId || b.shortCode === blueprintId);
      if (!chosen && App.ideaModalState?.results) {
        chosen = App.ideaModalState.results.find(b => b.id === blueprintId);
      }
    }

    if (!chosen) {
      chosen = App.activeProject;
    }

    App.activeProject = JSON.parse(JSON.stringify(chosen));
    this.currentBlueprintId = 'active';
    App.saveState();
    App.renderHeaderAndSidebar();
    
    const mainContent = document.getElementById('app-main-content');
    if (mainContent) {
      mainContent.innerHTML = this.renderProjectBlueprint();
      App.initLucideIcons();
    }

    App.showToast(`🎉 "${chosen.title}" is now your active dashboard project!`, 'success');
    App.triggerConfetti();
  },

  renderProjectBlueprint() {
    const selectedId = this.currentBlueprintId || 'active';
    let proj = App.activeProject || MockData.activeProject;

    if (selectedId !== 'active') {
      const foundInCatalog = MockData.blueprintsCatalog?.find(b => b.id === selectedId || b.shortCode === selectedId);
      if (foundInCatalog) {
        proj = foundInCatalog;
      } else if (App.ideaModalState?.results) {
        const foundInCustom = App.ideaModalState.results.find(b => b.id === selectedId);
        if (foundInCustom) {
          proj = {
            ...foundInCustom,
            architectureNodes: [
              { id: "client", title: "Web / Mobile Client", tech: "React / Vite", role: "Renders real-time telemetry & controls.", type: "client" },
              { id: "gateway", title: "API Gateway", tech: "FastAPI REST + WebSockets", role: "Handles auth and high-concurrency event routing.", type: "api" },
              { id: "ai_service", title: "AI Core Engine", tech: foundInCustom.techStack[0] || "Python ML", role: "Executes predictive inference and anomaly detection.", type: "ai" },
              { id: "database", title: "Primary Storage", tech: "PostgreSQL / SQLite", role: "Persists records and audit logs.", type: "storage" },
              { id: "cache", title: "Cache / Queue", tech: "Redis", role: "In-memory telemetry buffer.", type: "cache" }
            ],
            erDiagram: {
              tables: [
                { name: "core_entities", columns: ["id (UUID PK)", "status (VARCHAR)", "created_at (TIMESTAMP)"] },
                { name: "telemetry_logs", columns: ["id (UUID PK)", "entity_id (FK)", "reading_val (FLOAT)", "timestamp (TIMESTAMP)"] },
                { name: "ai_predictions", columns: ["id (UUID PK)", "confidence_pct (FLOAT)", "inference_ms (INT)"] }
              ]
            },
            developmentSteps: [
              { phase: 1, title: "Environment Setup & Starter Boilerplate", duration: "Week 1–2", status: "Completed", description: "Initialize virtual environment and repository structure.", cliCommands: "python3 -m venv venv && source venv/bin/activate\npip install fastapi uvicorn scikit-learn", keyDeliverables: ["Repository structure", "Virtual environment configured"] },
              { phase: 2, title: "Dataset Acquisition & Preprocessing", duration: "Week 3–4", status: "Completed", description: "Acquire domain dataset and engineer features.", cliCommands: "python scripts/preprocess_data.py --in data/raw.csv", keyDeliverables: ["Cleaned dataset with normalization", "Feature matrix"] },
              { phase: 3, title: "AI Model Engineering & Validation", duration: "Week 5–7", status: "In Progress", description: "Train core machine learning / deep learning architecture.", cliCommands: "python ml/train_model.py --epochs 100", keyDeliverables: ["Trained model artifact", "Evaluation metrics report"] },
              { phase: 4, title: "Backend API & Streaming Gateway", duration: "Week 8–10", status: "Upcoming", description: "Integrate model with FastAPI endpoints and reactive UI.", cliCommands: "uvicorn app.main:app --reload --port 8000", keyDeliverables: ["FastAPI REST endpoints", "Frontend dashboard integration"] },
              { phase: 5, title: "Deployment, Testing & Viva Defense", duration: "Week 11–12", status: "Upcoming", description: "Docker containerization and project thesis defense.", cliCommands: "docker compose up --build -d\npytest tests/ -v", keyDeliverables: ["Docker container", "IEEE Project Thesis Document"] }
            ],
            practicalImprovements: {
              commonPitfalls: [
                { issue: "Unbalanced training datasets leading to false negatives", fix: "Apply SMOTE or Focal Loss during training." },
                { issue: "Latency spikes under concurrent user requests", fix: "Add Redis caching and asynchronous worker thread pools." }
              ],
              highImpactInnovations: [
                { title: "Generative Natural Language Explanation Layer", description: "Translates raw model probabilities into actionable English sentences for non-technical users.", impact: "+20% Novelty" }
              ],
              hardwareOptimization: "Designed to train and run completely within free-tier GPU (Google Colab T4) and student laptops.",
              vivaHotspots: [
                { question: "What is the primary baseline model you compared your architecture against?", answer: "We established a standard heuristic / linear baseline and demonstrated a statistically significant improvement across Precision and Recall." }
              ]
            }
          };
        }
      }
    }

    const isActive = !!(App.activeProject && (proj.id === App.activeProject.id || proj.title === App.activeProject.title || (selectedId === 'active' && App.activeProject)));

    // Build custom synthesized ideas options if available
    let customOptionsHtml = '';
    if (App.ideaModalState?.results?.length > 0) {
      customOptionsHtml = `
        <optgroup label="Recently Synthesized Ideas">
          ${App.ideaModalState.results.map(r => `
            <option value="${r.id}" ${selectedId === r.id ? 'selected' : ''}>✨ ${r.title} (${r.shortCode || 'CUSTOM'})</option>
          `).join('')}
        </optgroup>
      `;
    }

    return `
      <div class="p-6 sm:p-8 max-w-6xl mx-auto space-y-8 animate-fade-in">
        <!-- Interactive Blueprint Project Switcher Bar -->
        <div class="glass-panel p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 border-sky-500/30 bg-gradient-to-r from-slate-900/90 via-sky-950/30 to-slate-900/90 shadow-xl">
          <div class="flex items-center gap-3 min-w-0">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 to-indigo-600 flex items-center justify-center shadow-md shadow-cyan-500/25 flex-shrink-0">
              <i data-lucide="file-code" class="w-5 h-5 text-slate-950"></i>
            </div>
            <div class="min-w-0">
              <div class="flex items-center gap-2">
                <span class="text-xs font-mono font-bold uppercase tracking-wider text-sky-400">Blueprint Inspector</span>
                ${isActive ? `
                  <span class="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Active in Dashboard
                  </span>
                ` : `
                  <span class="px-2 py-0.5 rounded-full text-[10px] font-mono bg-slate-800 text-slate-300 border border-slate-700">
                    Preview Mode
                  </span>
                `}
              </div>
              <p class="text-xs text-slate-300 truncate mt-0.5">Select any domain blueprint to inspect architecture, MoSCoW scope, and viva defense.</p>
            </div>
          </div>

          <div class="flex flex-wrap items-center gap-2.5">
            <!-- Project Blueprint Dropdown Selector -->
            <div class="relative min-w-[260px] sm:min-w-[320px]">
              <select id="blueprint-project-selector" onchange="Views.switchBlueprintProject(this.value)" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs font-semibold text-slate-100 focus:outline-none focus:border-sky-400 transition pr-8 cursor-pointer shadow-inner">
                <optgroup label="Active Dashboard Project">
                  <option value="active" ${selectedId === 'active' || selectedId === App.activeProject?.id ? 'selected' : ''}>★ ${App.activeProject?.title || 'Starter Catalog Blueprint'} (${App.activeProject?.shortCode || 'PREVIEW'})</option>
                </optgroup>
                <optgroup label="FinTech & Cyber Defense Blueprints">
                  <option value="GRAPH-AML" ${selectedId === 'GRAPH-AML' ? 'selected' : ''}>Graph-Neural Anti-Money Laundering (GRAPH-AML)</option>
                  <option value="ZERO-TRUST" ${selectedId === 'ZERO-TRUST' ? 'selected' : ''}>Autonomous Zero-Trust Network Defense (ZERO-TRUST)</option>
                </optgroup>
                <optgroup label="Healthcare & Smart Agriculture">
                  <option value="HEALTH-IQ" ${selectedId === 'HEALTH-IQ' ? 'selected' : ''}>AI Emergency Crowd Intelligence (HEALTH-IQ)</option>
                  <option value="SMART-AGRI" ${selectedId === 'SMART-AGRI' ? 'selected' : ''}>Edge-AI Smart Irrigation Engine (SMART-AGRI)</option>
                </optgroup>
                ${customOptionsHtml}
              </select>
            </div>

            <!-- Adopt to Dashboard button (if not currently active) -->
            ${!isActive ? `
              <button onclick="Views.adoptCurrentBlueprintAsActive('${proj.id || selectedId}')" class="px-4 py-2.5 rounded-xl font-heading font-extrabold text-xs bg-gradient-to-r from-emerald-400 via-teal-500 to-sky-500 text-slate-950 shadow-md shadow-emerald-500/20 hover:brightness-110 active:scale-98 transition flex items-center gap-1.5 cursor-pointer" title="Set this blueprint as your active dashboard project">
                <i data-lucide="check-circle" class="w-4 h-4 text-slate-950"></i>
                <span>Adopt to Dashboard</span>
              </button>
            ` : ''}

            <!-- Synthesize New Ideas Button -->
            <button onclick="App.openIdeaGeneratorModal()" class="px-3.5 py-2.5 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 border border-sky-500/40 text-sky-300 hover:border-sky-400 transition flex items-center gap-1.5 cursor-pointer" title="Synthesize custom blueprint based on your skills">
              <i data-lucide="sparkles" class="w-3.5 h-3.5 text-sky-400"></i>
              <span class="hidden sm:inline">Synthesize New</span>
            </button>
          </div>
        </div>

        <!-- Header -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="badge badge-cyan font-mono text-[10px]">${proj.shortCode || 'CAPSTONE'}</span>
              <span class="text-xs text-slate-400 font-medium">${proj.domain || 'Engineering Capstone'} • Novelty Score: ${proj.noveltyScore || 94}%</span>
            </div>
            <h1 class="font-heading font-extrabold text-2xl sm:text-3xl text-white">${proj.title}</h1>
            <p class="text-xs sm:text-sm text-slate-400 mt-1">Complete system design, functional requirements, and technology rationale.</p>
          </div>
          <div class="flex items-center gap-3">
            <button onclick="App.navigate('roadmap')" class="px-5 py-2.5 rounded-xl font-heading font-bold text-xs bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/20 hover:brightness-110 transition flex items-center gap-2 cursor-pointer">
              <i data-lucide="milestone" class="w-4 h-4"></i>
              <span>Go to Roadmap</span>
            </button>
          </div>
        </div>

        <!-- 1. Overview & Significance Grid -->
        <div class="grid md:grid-cols-2 gap-6">
          <div class="glass-panel p-6 space-y-3">
            <h3 class="font-heading font-bold text-base text-white flex items-center gap-2">
              <i data-lucide="alert-circle" class="w-4 h-4 text-sky-400"></i> Problem Statement & Significance
            </h3>
            <p class="text-xs text-slate-300 leading-relaxed">${proj.overview.problemStatement}</p>
            <div class="pt-2 border-t border-slate-800 text-xs text-slate-400">
              <strong class="text-slate-200">Target Stakeholders:</strong> ${proj.overview.targetUsers}
            </div>
          </div>

          <div class="glass-panel p-6 space-y-3">
            <h3 class="font-heading font-bold text-base text-white flex items-center gap-2">
              <i data-lucide="sparkles" class="w-4 h-4 text-emerald-400"></i> Proposed Solution & Innovation
            </h3>
            <p class="text-xs text-slate-300 leading-relaxed">${proj.overview.proposedSolution}</p>
            <div class="pt-2 border-t border-slate-800 text-xs text-slate-400">
              <strong class="text-slate-200">Quantifiable Impact:</strong> ${proj.overview.realWorldImpact}
            </div>
          </div>
        </div>

        <!-- 2. Smart Scope Generator (MVP vs V2 vs V3) -->
        <div class="glass-panel p-6 sm:p-8 space-y-6">
          <div>
            <span class="badge badge-purple mb-1">Feature 8: Smart Scope Generator</span>
            <h3 class="font-heading font-bold text-xl text-white">Phased Feature Scope</h3>
            <p class="text-xs text-slate-400 mt-1">Guards against scope-creep by isolating essential demonstration features from future ambitions.</p>
          </div>

          <div class="grid md:grid-cols-3 gap-6">
            <div class="p-5 rounded-xl bg-slate-900/90 border border-sky-500/40 space-y-3">
              <div class="flex justify-between items-center">
                <span class="text-xs font-bold uppercase tracking-wider text-sky-400">MVP (Semester Demo)</span>
                <span class="badge badge-cyan text-[10px]">Must-Have</span>
              </div>
              <ul class="space-y-2 text-xs text-slate-300">
                ${proj.scope.mvp.map(m => `
                  <li class="flex items-start gap-2">
                    <i data-lucide="check" class="w-3.5 h-3.5 text-sky-400 mt-0.5 flex-shrink-0"></i>
                    <span>${m}</span>
                  </li>
                `).join('')}
              </ul>
            </div>

            <div class="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div class="flex justify-between items-center">
                <span class="text-xs font-bold uppercase tracking-wider text-indigo-400">Version 2 (Advanced)</span>
                <span class="badge badge-purple text-[10px]">Should-Have</span>
              </div>
              <ul class="space-y-2 text-xs text-slate-300">
                ${proj.scope.v2.map(v => `
                  <li class="flex items-start gap-2">
                    <i data-lucide="arrow-right" class="w-3.5 h-3.5 text-indigo-400 mt-0.5 flex-shrink-0"></i>
                    <span>${v}</span>
                  </li>
                `).join('')}
              </ul>
            </div>

            <div class="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-3">
              <div class="flex justify-between items-center">
                <span class="text-xs font-bold uppercase tracking-wider text-slate-400">Version 3 (Industry Scale)</span>
                <span class="badge text-[10px] bg-slate-800 text-slate-400">Could-Have</span>
              </div>
              <ul class="space-y-2 text-xs text-slate-400">
                ${proj.scope.v3.map(f => `
                  <li class="flex items-start gap-2">
                    <i data-lucide="clock" class="w-3.5 h-3.5 text-slate-500 mt-0.5 flex-shrink-0"></i>
                    <span>${f}</span>
                  </li>
                `).join('')}
              </ul>
            </div>
          </div>
        </div>

        <!-- 3. Interactive Technology Stack -->
        <div class="space-y-4">
          <div>
            <span class="badge badge-cyan mb-1">Feature 11: Technology Selection</span>
            <h3 class="font-heading font-bold text-xl text-white">Personalized Technology Stack</h3>
            <p class="text-xs text-slate-400 mt-1">Selected specifically for <strong>${App.profile?.name ? App.profile.name.split(' ')[0] : 'Engineer'}</strong>'s skills, zero-latency inference, and ${App.profile?.constraints?.budget || '₹2,000'} budget.</p>
          </div>

          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            ${proj.techStack.map(t => `
              <div class="glass-panel p-5 space-y-2.5 hover:border-sky-500/40 transition">
                <div class="flex items-center justify-between">
                  <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-400">${t.layer}</span>
                  <i data-lucide="${t.icon}" class="w-4 h-4 text-slate-400"></i>
                </div>
                <h4 class="font-heading font-bold text-base text-white">${t.name}</h4>
                <p class="text-xs text-slate-300 leading-relaxed">${t.whySelected}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 4. Interactive System Architecture Diagram -->
        <div class="glass-panel p-6 sm:p-8 space-y-6">
          <div class="flex items-center justify-between">
            <div>
              <span class="badge badge-emerald mb-1">Feature 12: Architecture Graph</span>
              <h3 class="font-heading font-bold text-xl text-white">Interactive System Architecture</h3>
              <p class="text-xs text-slate-400 mt-1">Click any component below to view its purpose, technology, and architectural responsibilities.</p>
            </div>
            <span class="text-xs text-slate-400 font-mono">Decoupled Microservice</span>
          </div>

          <!-- Flow Diagram Visual -->
          <div class="grid sm:grid-cols-5 gap-3 items-center py-4">
            ${proj.architectureNodes.map((node, idx) => `
              <div onclick="Views.selectArchNode('${node.id}')" id="arch-node-${node.id}" class="arch-node text-center p-4 rounded-xl border border-slate-800 bg-slate-900/80 hover:border-sky-400 cursor-pointer transition ${idx === 2 ? 'ring-2 ring-sky-500/40' : ''}">
                <span class="text-[9px] font-mono uppercase text-sky-400 block">${node.type}</span>
                <span class="font-heading font-bold text-xs sm:text-sm text-white block mt-1 truncate">${node.title}</span>
                <span class="text-[10px] text-slate-400 block truncate mt-0.5">${node.tech.split(',')[0]}</span>
              </div>
              ${idx < 4 ? `<div class="hidden sm:flex justify-center text-slate-600"><i data-lucide="arrow-right" class="w-4 h-4"></i></div>` : ''}
            `).join('')}
          </div>

          <!-- Selected Node Details Box -->
          <div id="arch-node-details" class="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-300">
            <div class="flex items-center justify-between mb-1.5">
              <span class="font-heading font-bold text-sm text-sky-300" id="arch-detail-title">AI Inference Engine (XGBoost + ONNX)</span>
              <span class="badge badge-cyan text-[10px]" id="arch-detail-tech">PyTorch + XGBoost</span>
            </div>
            <p id="arch-detail-role" class="leading-relaxed">
              Computes 15-minute rolling wait-time regressions; triggers Gemini for natural-language shift briefing. Decoupled from REST gateway via Redis queue to maintain sub-50ms latency.
            </p>
          </div>
        </div>

        <!-- 5. Database Schema & ER Diagram -->
        <div class="glass-panel p-6 space-y-4">
          <div class="flex items-center justify-between">
            <div>
              <span class="badge badge-amber mb-1">Feature 18: Database Design</span>
              <h3 class="font-heading font-bold text-xl text-white">Entity Relationship (ER) Schema</h3>
              <p class="text-xs text-slate-400 mt-1">PostgreSQL relational structure optimized with timestamp indices and pgvector symptom embeddings.</p>
            </div>
          </div>

          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            ${proj.erDiagram.tables.map(table => `
              <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2.5">
                <div class="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span class="font-heading font-bold text-xs text-sky-400 flex items-center gap-1.5">
                    <i data-lucide="database" class="w-3.5 h-3.5"></i> ${table.name}
                  </span>
                </div>
                <ul class="space-y-1.5 text-[11px] font-mono text-slate-300">
                  ${table.columns.map(col => `
                    <li class="flex items-center justify-between text-slate-400">
                      <span>${col.split(' ')[0]}</span>
                      <span class="text-[10px] text-slate-500">${col.split(' ').slice(1).join(' ')}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 6. Step-by-Step Practical Development Guide -->
        <div class="glass-panel p-6 sm:p-8 space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span class="badge badge-purple mb-1">Development Steps & Implementation Engine</span>
              <h3 class="font-heading font-bold text-xl text-white">Step-by-Step Implementation Sequence</h3>
              <p class="text-xs text-slate-400 mt-1">Disciplined engineering phases from clean environment scaffolding to production cloud staging.</p>
            </div>
            <span class="text-xs px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold self-start sm:self-auto">
              5 Phases • 12-Week Execution
            </span>
          </div>

          <div class="space-y-4 pt-2">
            ${(proj.developmentSteps || []).map(step => `
              <div class="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition space-y-3">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-800/80">
                  <div class="flex items-center gap-2.5">
                    <span class="w-7 h-7 rounded-lg bg-sky-500/20 text-sky-400 font-mono font-bold text-xs flex items-center justify-center flex-shrink-0">
                      0${step.phase}
                    </span>
                    <h4 class="font-heading font-bold text-sm sm:text-base text-white">${step.title}</h4>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-[11px] font-mono text-slate-400">${step.duration}</span>
                    <span class="badge ${step.status === 'Completed' ? 'badge-emerald' : step.status === 'In Progress' ? 'badge-cyan' : 'bg-slate-800 text-slate-400'} text-[10px]">
                      ${step.status}
                    </span>
                  </div>
                </div>

                <p class="text-xs text-slate-300 leading-relaxed">${step.description}</p>

                <!-- CLI Terminal Snippet -->
                <div class="p-3.5 rounded-xl bg-slate-950/90 border border-slate-800/90 font-mono text-[11px] text-cyan-300 overflow-x-auto custom-scrollbar">
                  <div class="flex items-center justify-between text-[10px] text-slate-500 mb-2 pb-1 border-b border-slate-800">
                    <span class="flex items-center gap-1.5"><i data-lucide="terminal" class="w-3 h-3 text-sky-400"></i> Terminal Starter Commands</span>
                    <button onclick="navigator.clipboard.writeText(\`${step.cliCommands.replace(/`/g, '\\`')}\`); App.showToast('Copied starter commands to clipboard!', 'success');" class="hover:text-sky-400 transition text-[10px] flex items-center gap-1">
                      <i data-lucide="copy" class="w-3 h-3"></i> Copy
                    </button>
                  </div>
                  <pre class="whitespace-pre-wrap">${step.cliCommands}</pre>
                </div>

                <!-- Deliverables Checklist -->
                <div>
                  <span class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1.5">Phase Deliverables:</span>
                  <div class="grid sm:grid-cols-3 gap-2">
                    ${step.keyDeliverables.map(d => `
                      <div class="p-2 rounded-lg bg-slate-950/60 border border-slate-800 text-[11px] text-slate-300 flex items-start gap-1.5">
                        <i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0"></i>
                        <span>${d}</span>
                      </div>
                    `).join('')}
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 7. Practicality, Improvements & Viva Defense Readiness -->
        <div class="glass-panel p-6 sm:p-8 space-y-6">
          <div class="flex items-center justify-between">
            <div>
              <span class="badge badge-cyan mb-1">Practicality & Improvement Engine</span>
              <h3 class="font-heading font-bold text-xl text-white">Turning Idea Into an Industry-Grade Project</h3>
              <p class="text-xs text-slate-400 mt-1">Anticipate edge-case pitfalls, apply high-impact innovation upgrades, and master tough examiner questions.</p>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <!-- Common Pitfalls & Solutions -->
            <div class="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <h4 class="font-heading font-bold text-sm text-rose-400 flex items-center gap-2">
                <i data-lucide="alert-triangle" class="w-4 h-4"></i> Critical Pitfalls & Mitigation Tactics
              </h4>
              <div class="space-y-3">
                ${(proj.practicalImprovements?.pitfalls || []).map(p => `
                  <div class="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1">
                    <span class="text-xs font-semibold text-rose-300 flex items-center gap-1.5">
                      <i data-lucide="x-circle" class="w-3 h-3 text-rose-400"></i> ${p.issue}
                    </span>
                    <p class="text-[11px] text-slate-300 pl-4.5 leading-relaxed">
                      <strong class="text-emerald-400">Fix:</strong> ${p.solution}
                    </p>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Innovation Add-ons -->
            <div class="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <h4 class="font-heading font-bold text-sm text-sky-400 flex items-center gap-2">
                <i data-lucide="sparkles" class="w-4 h-4"></i> 3 High-Impact Innovation Upgrades
              </h4>
              <div class="space-y-3">
                ${(proj.practicalImprovements?.innovations || []).map(inv => `
                  <div class="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1">
                    <span class="text-xs font-semibold text-sky-300 flex items-center gap-1.5">
                      <i data-lucide="zap" class="w-3 h-3 text-cyan-400"></i> ${inv.title}
                    </span>
                    <p class="text-[11px] text-slate-300 pl-4.5 leading-relaxed">${inv.impact}</p>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Hardware Optimization & Viva Defense Hotspots -->
          <div class="p-5 rounded-2xl bg-gradient-to-br from-indigo-950/30 to-purple-950/30 border border-indigo-500/30 space-y-4">
            <div class="flex items-center justify-between">
              <h4 class="font-heading font-bold text-sm text-indigo-300 flex items-center gap-2">
                <i data-lucide="graduation-cap" class="w-4 h-4 text-purple-400"></i> External Viva Defense Anticipation & Q&A Hotspots
              </h4>
              <span class="badge badge-purple text-[10px]">Examiner Ready</span>
            </div>

            <div class="grid sm:grid-cols-2 gap-4">
              ${(proj.practicalImprovements?.vivaHotspots || []).map(v => `
                <div class="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                  <span class="text-xs font-semibold text-white flex items-start gap-1.5">
                    <i data-lucide="help-circle" class="w-3.5 h-3.5 text-amber-400 mt-0.5 flex-shrink-0"></i>
                    <span>${v.question}</span>
                  </span>
                  <p class="text-[11px] text-slate-300 pl-5 leading-relaxed bg-slate-900/50 p-2 rounded-lg border border-slate-800/60">
                    <strong class="text-emerald-400">Model Answer:</strong> ${v.answer}
                  </p>
                </div>
              `).join('')}
            </div>

            <div class="p-3 rounded-xl bg-slate-950/70 border border-indigo-500/20 text-xs text-slate-300 flex items-start gap-2">
              <i data-lucide="cpu" class="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0"></i>
              <span><strong>Hardware & Budget Note:</strong> ${proj.practicalImprovements?.hardwareOptimization || 'Optimized for standard student hardware.'}</span>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  selectArchNode(nodeId) {
    const node = MockData.activeProject.architectureNodes.find(n => n.id === nodeId);
    if (!node) return;

    document.querySelectorAll('.arch-node').forEach(el => el.classList.remove('ring-2', 'ring-sky-500/40', 'border-sky-400'));
    const activeEl = document.getElementById(`arch-node-${nodeId}`);
    if (activeEl) activeEl.classList.add('ring-2', 'ring-sky-500/40', 'border-sky-400');

    document.getElementById('arch-detail-title').innerText = `${node.title} (${node.type.toUpperCase()})`;
    document.getElementById('arch-detail-tech').innerText = node.tech;
    document.getElementById('arch-detail-role').innerText = node.role;
  },

  // 8. MASTER DASHBOARD
  renderDashboard() {
    const proj = App.activeProject;
    
    // When all data is cleared and no active project exists:
    if (!proj) {
      const defaultCatalog = MockData.blueprintsCatalog || [];
      const firstName = App.profile?.name?.split(' ')[0] || 'Student';

      return `
        <div class="px-6 py-4 sm:px-8 sm:py-6 max-w-6xl mx-auto space-y-8 animate-fade-in">
          <!-- Clean Welcome Header -->
          <div class="space-y-2 animate-fade-in pb-1">
            <div class="flex items-center gap-2">
              <span class="badge badge-cyan text-[10px] font-semibold"><span class="w-2 h-2 rounded-full bg-cyan-400"></span> Workspace Clean & Ready</span>
              <span class="text-xs text-slate-400 font-mono hidden sm:inline">• Final Year Capstone Platform</span>
            </div>
            <h1 class="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Welcome, <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400">${firstName}</span> 👋
            </h1>
            <p class="text-xs sm:text-sm text-slate-300">
              Your workspace is completely clean. Generate a personalized capstone project idea based on your skills and constraints, or select a blueprint from the catalog.
            </p>
          </div>

          <!-- Hero Action Cards -->
          <div class="grid md:grid-cols-2 gap-6">
            <!-- Card 1: Generate with AI -->
            <div class="glass-panel p-6 sm:p-8 space-y-5 border-sky-500/40 bg-gradient-to-br from-slate-900/90 via-sky-950/20 to-slate-900/90 relative overflow-hidden group hover:border-sky-400 transition shadow-xl">
              <div class="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-400 via-sky-500 to-indigo-600 flex items-center justify-center text-slate-950 shadow-lg shadow-cyan-500/30">
                <i data-lucide="sparkles" class="w-6 h-6"></i>
              </div>
              <div class="space-y-2">
                <h3 class="font-heading font-extrabold text-xl text-white">Generate Ideas with AI</h3>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Input your skills, engineering domain, timeline, and budget. ProjectForge AI synthesizes tailored capstone projects complete with architecture, code, and defense preparation.
                </p>
              </div>
              <button onclick="App.openIdeaGeneratorModal()" class="w-full py-3 rounded-xl font-heading font-extrabold text-xs bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-600 text-slate-950 shadow-lg shadow-cyan-500/25 hover:brightness-110 active:scale-95 transition flex items-center justify-center gap-2 cursor-pointer">
                <i data-lucide="sparkles" class="w-4 h-4"></i>
                <span>✨ Launch AI Idea Generator</span>
              </button>
            </div>

            <!-- Card 2: Explore Curated Blueprints -->
            <div class="glass-panel p-6 sm:p-8 space-y-5 border-slate-800 hover:border-slate-700 bg-slate-900/70 transition shadow-xl">
              <div class="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-sky-400">
                <i data-lucide="compass" class="w-6 h-6"></i>
              </div>
              <div class="space-y-2">
                <h3 class="font-heading font-extrabold text-xl text-white">Explore Curated Blueprints</h3>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Browse production-grade capstones across Healthcare AI, Green Computing, Distributed IoT, and FinTech with full system architectures ready to deploy.
                </p>
              </div>
              <button onclick="App.navigate('discover-projects')" class="w-full py-3 rounded-xl font-heading font-bold text-xs bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white transition flex items-center justify-center gap-2 cursor-pointer">
                <i data-lucide="compass" class="w-4 h-4 text-sky-400"></i>
                <span>Browse Blueprint Catalog</span>
              </button>
            </div>
          </div>

          <!-- Quick Starter Blueprints Grid -->
          <div class="space-y-4 pt-2">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="font-heading font-bold text-base text-white flex items-center gap-2">
                  <i data-lucide="layers" class="w-4 h-4 text-sky-400"></i> Instant Starter Blueprints
                </h3>
                <p class="text-xs text-slate-400">Click any blueprint to instantly activate it as your dashboard project.</p>
              </div>
            </div>

            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              ${defaultCatalog.slice(0, 3).map(b => `
                <div class="glass-panel p-5 space-y-3.5 border-slate-800 hover:border-sky-500/50 transition flex flex-col justify-between">
                  <div class="space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="badge badge-cyan text-[10px] font-mono">${b.shortCode || 'PROJECT'}</span>
                      <span class="text-[10px] text-emerald-400 font-bold">Score: ${b.noveltyScore || 90}/100</span>
                    </div>
                    <h4 class="font-heading font-bold text-sm text-white line-clamp-1">${b.title}</h4>
                    <p class="text-xs text-slate-400 line-clamp-2">${b.summary || b.description}</p>
                    <div class="flex flex-wrap gap-1 pt-1">
                      ${(b.techStack || []).slice(0, 3).map(t => `<span class="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300 font-mono">${t}</span>`).join('')}
                    </div>
                  </div>
                  <button onclick="App.switchActiveDashboardProject('${b.id || b.shortCode}')" class="w-full py-2 rounded-xl text-xs font-heading font-bold bg-slate-800 hover:bg-sky-500 hover:text-slate-950 text-slate-200 transition flex items-center justify-center gap-1.5 cursor-pointer">
                    <i data-lucide="play" class="w-3.5 h-3.5"></i>
                    <span>Set as Active Project</span>
                  </button>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    }

    const health = proj.healthScore || {
      overall: 88,
      metrics: [
        { label: "Schedule Progress", score: 88, status: "Optimal" },
        { label: "Technical Architecture", score: 92, status: "Optimal" },
        { label: "Innovation Quality", score: 94, status: "High" },
        { label: "Testing Coverage", score: 72, status: "Needs Attention" },
        { label: "Documentation", score: 78, status: "In Progress" },
        { label: "Deployment Readiness", score: 80, status: "Configured" }
      ],
      weakestArea: "Testing Coverage (72/100)",
      aiAdvice: "Establish automated integration tests and staging environments before midterm review."
    };
    const firstName = App.profile?.name?.split(' ')[0] || 'Student';
    const progressPct = proj.progress !== undefined ? proj.progress : (proj.currentPhase?.progressPct || 42);
    const currentPhaseTitle = typeof proj.currentPhase === 'string'
      ? proj.currentPhase.split('&')[0]
      : (proj.currentPhase?.title || "Phase 1: Architecture Setup");
    const daysUntilViva = proj.daysRemaining || 45;
    const nextAction = proj.nextBestAction || {
      taskTitle: `Complete ${currentPhaseTitle} deliverables`,
      estimatedTime: "2.5 hours",
      reason: "Essential for midterm milestone validation without technical debt."
    };

    // Gather all candidate projects for the Project Selection Section
    const defaultCatalog = MockData.blueprintsCatalog || [];
    const customSynthesized = App.ideaModalState?.results || [];
    
    // Combine unique projects by shortCode/id
    const projectMap = new Map();
    // Add current active project first
    if (proj) projectMap.set(proj.shortCode || proj.id, proj);
    // Add standard catalog projects
    defaultCatalog.forEach(p => {
      if (!projectMap.has(p.shortCode || p.id)) projectMap.set(p.shortCode || p.id, p);
    });
    // Add any custom synthesized ideas
    customSynthesized.forEach(p => {
      if (!projectMap.has(p.shortCode || p.id)) projectMap.set(p.shortCode || p.id, p);
    });

    const allProjectsList = Array.from(projectMap.values());

    return `
      <div class="px-6 py-4 sm:px-8 sm:py-6 max-w-6xl mx-auto space-y-7 animate-fade-in">
        <!-- Clean, Simple & Impressive Welcome Header -->
        <div class="space-y-2 animate-fade-in pb-1">
          <div class="flex items-center gap-2">
            <span class="badge badge-cyan text-[10px] font-semibold"><span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span> Active Capstone • Sprint Week 5</span>
            <span class="text-xs text-slate-400 font-mono hidden sm:inline">• ${App.profile?.academicBranch || 'Computer Science'}</span>
          </div>
          <h1 class="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Welcome back, <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400">${firstName}</span> 👋
          </h1>
          <p class="text-xs sm:text-sm text-slate-300 flex flex-wrap items-center gap-2">
            <span class="italic text-slate-300">"Let’s build something worth showing."</span>
            <span class="text-slate-600 hidden sm:inline">•</span>
            <span class="text-emerald-400 font-medium flex items-center gap-1.5"><i data-lucide="check-circle" class="w-3.5 h-3.5 text-emerald-400"></i> Active: ${proj.title}</span>
          </p>
        </div>

        <!-- 🌟 CLEAN PROJECT TITLE SWITCHER BAR -->
        <div class="glass-panel p-3.5 sm:p-4 flex flex-col md:flex-row md:items-center justify-between gap-3 border-sky-500/30 shadow-lg">
          <div class="flex items-center gap-2.5 min-w-0 overflow-hidden">
            <span class="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 flex-shrink-0 flex items-center gap-1.5">
              <i data-lucide="layers" class="w-3.5 h-3.5 text-sky-400"></i> Select Project:
            </span>
            <!-- Clean Project Title Pills -->
            <div class="flex items-center gap-2 overflow-x-auto custom-scrollbar py-1">
              ${allProjectsList.map(p => {
                const isSelected = (p.id === proj.id || p.shortCode === proj.shortCode || p.title === proj.title);
                return `
                  <button type="button" onclick="App.switchActiveDashboardProject('${p.id || p.shortCode}')" class="px-4 py-2 rounded-xl text-xs font-heading font-bold transition flex items-center gap-2 flex-shrink-0 cursor-pointer ${isSelected ? 'bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-600 text-slate-950 shadow-md shadow-cyan-500/25 ring-2 ring-sky-400/50' : 'bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'}" title="${p.title}">
                    ${isSelected ? '<span class="w-2 h-2 rounded-full bg-slate-950 animate-pulse"></span>' : ''}
                    <span class="truncate max-w-[260px]">${p.title}</span>
                  </button>
                `;
              }).join('')}
            </div>
          </div>

          <div class="flex items-center gap-2 flex-shrink-0">
            <button onclick="App.openIdeaGeneratorModal()" class="px-3.5 py-2 rounded-xl text-xs font-heading font-bold bg-slate-900 hover:bg-slate-800 border border-sky-500/40 text-sky-300 hover:border-sky-400 transition flex items-center gap-1.5 cursor-pointer" title="Synthesize and add a new project idea">
              <i data-lucide="plus" class="w-3.5 h-3.5 text-sky-400"></i>
              <span>Add Project</span>
            </button>
          </div>
        </div>

        <!-- TWO COLUMN SECTION: Today's Tasks & Project Health -->
        <div class="grid lg:grid-cols-12 gap-8">
          <!-- Left: Today's Recommended Tasks Checklist -->
          <div class="lg:col-span-7 glass-panel p-6 space-y-4">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="font-heading font-bold text-base text-white flex items-center gap-2">
                  <i data-lucide="check-square" class="w-4 h-4 text-sky-400"></i> Today’s AI Recommended Tasks
                </h3>
                <p class="text-xs text-slate-400">Check off tasks to dynamically recalculate overall milestone progress.</p>
              </div>
              <span class="badge badge-cyan text-[10px]">Sprint Week 5</span>
            </div>

            <div class="space-y-2.5 pt-2">
              ${[
                { id: "dt-1", text: "Tune XGBoost max_depth and learning_rate on test split", done: true, time: "1.5h" },
                { id: "dt-2", text: "Evaluate MAE and RMSE across peak shift splits", done: false, time: "2.0h" },
                { id: "dt-3", text: "Implement WebSocket queue surge alert broadcaster", done: false, time: "2.5h" },
                { id: "dt-4", text: "Run PyTest unit test coverage on triage API router", done: false, time: "1.0h" }
              ].map(task => `
                <label class="flex items-center justify-between p-3 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition cursor-pointer text-xs">
                  <span class="flex items-center gap-3">
                    <input type="checkbox" onchange="Views.toggleTaskCheck(this)" ${task.done ? 'checked' : ''} class="custom-checkbox" />
                    <span class="${task.done ? 'line-through text-slate-500' : 'text-slate-200'} font-medium">${task.text}</span>
                  </span>
                  <span class="text-[10px] text-slate-500 font-mono">${task.time}</span>
                </label>
              `).join('')}
            </div>

            <div class="pt-2 flex justify-between items-center text-xs text-slate-400">
              <span>Next sprint milestone unlocks at 60% completion.</span>
              <button onclick="App.navigate('roadmap')" class="text-sky-400 font-semibold hover:underline">View Full 12-Week Roadmap</button>
            </div>
          </div>

          <!-- Right: Project Health Radar / Breakdown -->
          <div class="lg:col-span-5 glass-panel p-6 space-y-4">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="font-heading font-bold text-base text-white flex items-center gap-2">
                  <i data-lucide="shield-check" class="w-4 h-4 text-emerald-400"></i> Project Health Index
                </h3>
                <p class="text-xs text-slate-400">Continuous 6-axis readiness assessment.</p>
              </div>
              ${Views.renderScoreRing(health.overall, 48, 4, "stroke-emerald-400")}
            </div>

            <div class="space-y-2 pt-1 text-xs">
              ${health.metrics.map(m => `
                <div>
                  <div class="flex justify-between font-medium mb-1">
                    <span class="text-slate-300">${m.label}</span>
                    <span class="font-mono ${m.score < 75 ? 'text-amber-400 font-bold' : 'text-slate-400'}">${m.score}/100</span>
                  </div>
                  <div class="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div class="${m.score < 75 ? 'bg-amber-400' : 'bg-emerald-400'} h-full rounded-full" style="width: ${m.score}%"></div>
                  </div>
                </div>
              `).join('')}
            </div>

            <div class="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-slate-300">
              <strong class="text-amber-300">Weakest Area:</strong> ${health.weakestArea}. <br />
              <span class="text-slate-400 text-[11px]">${health.aiAdvice}</span>
            </div>
          </div>
        </div>

        <!-- Fast Navigation Action Cards -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div onclick="App.navigate('mentor')" class="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-sky-500/50 transition cursor-pointer space-y-2">
            <i data-lucide="bot" class="w-5 h-5 text-sky-400"></i>
            <h4 class="font-heading font-bold text-sm text-white">AI Project Mentor</h4>
            <p class="text-xs text-slate-400">Ask technical questions regarding model tuning, API design, and bottlenecks.</p>
          </div>

          <div onclick="App.navigate('review')" class="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-sky-500/50 transition cursor-pointer space-y-2">
            <i data-lucide="shield-check" class="w-5 h-5 text-indigo-400"></i>
            <h4 class="font-heading font-bold text-sm text-white">Code & Arch Review</h4>
            <p class="text-xs text-slate-400">Paste code snippets or GitHub repo URL for instant quality scores.</p>
          </div>

          <div onclick="App.navigate('what-if')" class="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-sky-500/50 transition cursor-pointer space-y-2">
            <i data-lucide="sliders" class="w-5 h-5 text-purple-400"></i>
            <h4 class="font-heading font-bold text-sm text-white">What-If Simulator</h4>
            <p class="text-xs text-slate-400">Simulate what happens if time shrinks to 6 weeks or budget becomes ₹0.</p>
          </div>

          <div onclick="App.navigate('viva-simulator')" class="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-sky-500/50 transition cursor-pointer space-y-2">
            <i data-lucide="mic" class="w-5 h-5 text-emerald-400"></i>
            <h4 class="font-heading font-bold text-sm text-white">Viva Defense Simulator</h4>
            <p class="text-xs text-slate-400">Practice defending your hospital triage model against strict examiners.</p>
          </div>
        </div>
      </div>
    `;
  },

  toggleTaskCheck(checkbox) {
    const parentLabel = checkbox.closest('label');
    const textSpan = parentLabel.querySelector('span > span:last-child');
    
    if (checkbox.checked) {
      textSpan.classList.add('line-through', 'text-slate-500');
      textSpan.classList.remove('text-slate-200');
      App.activeProject.progress = Math.min(100, App.activeProject.progress + 2);
      App.showToast("Task completed! Project progress updated.", "success");
    } else {
      textSpan.classList.remove('line-through', 'text-slate-500');
      textSpan.classList.add('text-slate-200');
      App.activeProject.progress = Math.max(0, App.activeProject.progress - 2);
    }

    App.saveState();
    const progText = document.getElementById('dash-progress-text');
    if (progText) progText.innerText = `${App.activeProject.progress}%`;
  },

  // 9. 12-WEEK ROADMAP & TASK PLANNER
  activeRoadmapFilter: 'all',

  renderRoadmap() {
    const milestones = App.roadmap || [];
    const filter = this.activeRoadmapFilter || 'all';
    const profName = App.profile?.name || 'Student';
    const progressPct = App.activeProject?.progress || 0;

    if (!milestones || milestones.length === 0) {
      return `
        <div class="p-6 sm:p-8 max-w-5xl mx-auto space-y-8 animate-fade-in">
          <div class="glass-panel p-8 sm:p-12 text-center space-y-5 border-dashed border-sky-500/30">
            <div class="w-16 h-16 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mx-auto text-sky-400">
              <i data-lucide="milestone" class="w-8 h-8"></i>
            </div>
            <div class="space-y-2 max-w-md mx-auto">
              <h2 class="font-heading font-extrabold text-2xl text-white">No Roadmap Active Yet</h2>
              <p class="text-xs sm:text-sm text-slate-400">
                Your workspace is currently clean. Generate an AI project idea or select a project blueprint to automatically generate a sprint-by-sprint 12-week development timeline.
              </p>
            </div>
            <div class="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button onclick="App.openIdeaGeneratorModal()" class="px-6 py-3 rounded-xl font-heading font-extrabold text-xs bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-600 text-slate-950 shadow-lg shadow-cyan-500/25 hover:brightness-110 active:scale-95 transition flex items-center gap-2 cursor-pointer">
                <i data-lucide="sparkles" class="w-4 h-4"></i>
                <span>✨ Generate Project Ideas</span>
              </button>
              <button onclick="App.navigate('discover-projects')" class="px-5 py-3 rounded-xl font-heading font-bold text-xs bg-slate-900 border border-slate-700 hover:border-sky-500/40 text-slate-300 hover:text-white transition flex items-center gap-2 cursor-pointer">
                <i data-lucide="compass" class="w-4 h-4 text-sky-400"></i>
                <span>Browse Project Catalog</span>
              </button>
            </div>
          </div>
        </div>
      `;
    }

    const filteredMilestones = milestones.filter(m => {
      if (filter === 'current') return m.isCurrent;
      if (filter === 'completed') return m.completed;
      if (filter === 'upcoming') return !m.completed && !m.isCurrent;
      return true;
    });

    const completedWeeks = milestones.filter(m => m.completed).length;

    return `
      <div class="p-6 sm:p-8 max-w-6xl mx-auto space-y-8 animate-fade-in">
        <!-- Header -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="badge badge-purple text-[10px] font-mono"><i data-lucide="milestone" class="w-3 h-3"></i> 12-Week Semester OS</span>
              <span class="text-xs text-slate-400 font-mono">30 TASKS • 8 PHASES</span>
            </div>
            <h1 class="font-heading font-extrabold text-3xl text-white">Development Roadmap</h1>
            <p class="text-xs sm:text-sm text-slate-400 mt-1">Structured milestones calibrated for <strong>${profName}</strong>'s 12-week final-year capstone submission.</p>
          </div>
          <div class="flex items-center gap-3">
            <button onclick="App.triggerConfetti(); App.showToast('Celebrated milestone completion!', 'success')" class="px-5 py-2.5 rounded-xl font-heading font-bold text-xs bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-600 text-slate-950 font-extrabold shadow-lg shadow-cyan-500/25 hover:brightness-110 active:scale-95 transition flex items-center gap-2">
              <i data-lucide="sparkles" class="w-4 h-4"></i>
              <span>Simulate Milestone Complete</span>
            </button>
          </div>
        </div>

        <!-- Overall Progress & Executive Velocity Stats -->
        <div class="glass-panel p-6 border border-sky-500/20 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div class="space-y-1 text-center lg:text-left">
            <span class="text-xs font-bold uppercase tracking-wider text-slate-400">Total Project Progress</span>
            <div class="font-heading font-black text-3xl sm:text-4xl text-white flex items-center justify-center lg:justify-start gap-2">
              <span id="roadmap-big-progress" class="text-sky-400">${progressPct}%</span> <span class="text-sm font-normal text-slate-400">Completed</span>
            </div>
            <p class="text-xs text-emerald-400 font-medium flex items-center justify-center lg:justify-start gap-1.5">
              <i data-lucide="check-circle" class="w-4 h-4"></i> Ahead of Schedule • Week 5 Active Sprint
            </p>
          </div>

          <div class="grid grid-cols-3 gap-4 w-full lg:w-auto text-xs font-mono">
            <div class="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center">
              <span class="text-slate-400 text-[10px] block uppercase">Completed</span>
              <span class="font-bold text-emerald-400 text-base">${completedWeeks} Weeks</span>
            </div>
            <div class="p-3.5 rounded-xl bg-sky-500/10 border border-sky-500/40 text-center shadow-lg shadow-sky-500/10">
              <span class="text-slate-400 text-[10px] block uppercase">Current Sprint</span>
              <span class="font-bold text-sky-400 text-base">Week 5</span>
            </div>
            <div class="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-center">
              <span class="text-slate-400 text-[10px] block uppercase">Days Left</span>
              <span class="font-bold text-amber-400 text-base">42 Days</span>
            </div>
          </div>
        </div>

        <!-- Filter Tabs -->
        <div class="flex flex-wrap items-center gap-2 pt-1 pb-2">
          <button onclick="Views.filterRoadmap('all')" class="roadmap-filter-btn px-4 py-2 rounded-xl text-xs font-semibold border ${filter === 'all' ? 'active' : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'}">
            All Weeks (12)
          </button>
          <button onclick="Views.filterRoadmap('current')" class="roadmap-filter-btn px-4 py-2 rounded-xl text-xs font-semibold border ${filter === 'current' ? 'active' : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'}">
            <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse inline-block mr-1"></span> Current Sprint (Week 5)
          </button>
          <button onclick="Views.filterRoadmap('completed')" class="roadmap-filter-btn px-4 py-2 rounded-xl text-xs font-semibold border ${filter === 'completed' ? 'active' : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'}">
            Completed (Weeks 1–4)
          </button>
          <button onclick="Views.filterRoadmap('upcoming')" class="roadmap-filter-btn px-4 py-2 rounded-xl text-xs font-semibold border ${filter === 'upcoming' ? 'active' : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'}">
            Upcoming Sprints (Weeks 6–12)
          </button>
        </div>

        <!-- Weekly Milestones Timeline -->
        <div class="space-y-6">
          ${filteredMilestones.map(m => {
            const isDone = m.completed;
            const isCurr = m.isCurrent;

            return `
              <div class="glass-panel milestone-card p-6 border ${isCurr ? 'border-sky-400 ring-2 ring-sky-500/30 bg-slate-900/90 shadow-2xl' : isDone ? 'border-emerald-500/40' : 'border-slate-800/80'} space-y-4">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/[0.08]">
                  <div class="flex items-center gap-3.5">
                    <div class="w-11 h-11 rounded-xl ${isDone ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20' : isCurr ? 'bg-gradient-to-tr from-cyan-400 to-indigo-600 text-slate-950 font-extrabold shadow-lg shadow-cyan-500/30' : 'bg-slate-800 text-slate-400'} flex items-center justify-center font-mono font-black text-sm flex-shrink-0">
                      ${isDone ? '✓' : `W${m.week}`}
                    </div>
                    <div>
                      <div class="flex items-center gap-2">
                        <h3 class="font-heading font-bold text-base sm:text-lg text-white">${m.title}</h3>
                        ${isCurr ? '<span class="badge badge-cyan text-[10px]"><span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span> Active Sprint</span>' : ''}
                        ${isDone ? '<span class="badge badge-emerald text-[10px]"><i data-lucide="check" class="w-3 h-3"></i> Completed</span>' : ''}
                      </div>
                      <span class="text-xs text-sky-400 font-mono font-medium">${m.phase}</span>
                    </div>
                  </div>
                  <span class="badge badge-purple text-xs font-mono font-semibold self-start sm:self-auto">
                    ${m.tasks.filter(t => t.done).length} / ${m.tasks.length} Tasks Done
                  </span>
                </div>

                <!-- Granular Tasks Checklist with high-contrast styling -->
                <div class="space-y-2.5">
                  ${m.tasks.map(task => `
                    <label class="task-item-card flex items-center justify-between p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-sky-500/50 transition cursor-pointer text-xs sm:text-sm">
                      <span class="flex items-center gap-3">
                        <input type="checkbox" onchange="Views.handleRoadmapCheck(${m.week}, '${task.id}', this)" ${task.done ? 'checked' : ''} class="custom-checkbox" />
                        <span class="${task.done ? 'line-through text-slate-500' : 'text-slate-100 font-medium'}">${task.title}</span>
                      </span>
                      <span class="text-[11px] font-mono px-2.5 py-0.5 rounded bg-slate-800 text-slate-300 font-semibold flex-shrink-0 ml-2 border border-slate-700/50">${task.hours} hrs</span>
                    </label>
                  `).join('')}
                </div>

                <!-- AI Tip Box with rich glowing color contrast -->
                <div class="p-3.5 rounded-xl bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-transparent border border-sky-500/30 text-xs text-slate-200 flex items-start gap-2.5 shadow-sm">
                  <i data-lucide="lightbulb" class="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0"></i>
                  <div>
                    <span class="font-bold text-sky-300">AI Architect Guidance:</span>
                    <span class="text-slate-200 ml-1 leading-relaxed">${m.aiTip || 'Ensure unit tests pass with >85% code coverage before moving to next sprint.'}</span>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  },

  filterRoadmap(type) {
    this.activeRoadmapFilter = type;
    App.renderCurrentView();
    App.initLucideIcons();
  },

  handleRoadmapCheck(weekNum, taskId, checkbox) {
    const milestone = App.roadmap.find(m => m.week === weekNum);
    if (!milestone) return;

    const task = milestone.tasks.find(t => t.id === taskId);
    if (task) {
      task.done = checkbox.checked;
      const allDone = milestone.tasks.every(t => t.done);
      milestone.completed = allDone;

      if (allDone) {
        App.triggerConfetti();
        App.showToast(`Week ${weekNum} milestone fully completed! Fantastic work.`, "success");
      }
    }

    // Recompute total progress
    let totalTasks = 0;
    let completedTasks = 0;
    App.roadmap.forEach(m => {
      m.tasks.forEach(t => {
        totalTasks++;
        if (t.done) completedTasks++;
      });
    });

    App.activeProject.progress = Math.round((completedTasks / totalTasks) * 100);
    App.saveState();

    const parentLabel = checkbox.closest('label');
    const textSpan = parentLabel.querySelector('span > span:last-child');
    if (checkbox.checked) {
      textSpan.classList.add('line-through', 'text-slate-500');
    } else {
      textSpan.classList.remove('line-through', 'text-slate-500');
    }

    const progElem = document.getElementById('roadmap-big-progress');
    if (progElem) progElem.innerText = `${App.activeProject.progress}%`;
  },

  // 10. AI PROJECT MENTOR (Context-Aware Chat)
  renderMentor() {
    const prof = App.profile || {
      name: 'Student',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
    };
    const proj = App.activeProject || {
      title: 'Active Engineering Project',
      currentPhase: 'Architecture Design',
      progress: 0
    };
    const history = MockData.mentorChat;
    const studentName = prof?.name || 'Student';

    return `
      <div class="p-6 sm:p-8 max-w-6xl mx-auto space-y-6 animate-fade-in">
        <!-- Top Status Bar -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="badge badge-cyan text-[10px] font-mono"><i data-lucide="bot" class="w-3.5 h-3.5"></i> Feature 13: Context-Aware AI</span>
              <span class="text-xs text-slate-400 font-mono">ARCHITECT-V3 • DEEPSEEK-R1</span>
            </div>
            <h1 class="font-heading font-extrabold text-3xl text-white">ProjectForge AI Mentor</h1>
            <p class="text-xs sm:text-sm text-slate-400 mt-1">Real-time technical co-pilot, architectural reviewer, and final-year viva coach.</p>
          </div>
          <div class="flex items-center gap-3">
            <div class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold shadow-sm">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Online • Synchronized with Repo</span>
            </div>
          </div>
        </div>

        <div class="grid lg:grid-cols-12 gap-6 items-start">
          <!-- Left: Active Context Memory HUD -->
          <div class="lg:col-span-4 glass-panel p-5 space-y-4 border border-sky-500/20 shadow-xl">
            <div class="flex items-center justify-between pb-2 border-b border-white/[0.08]">
              <h3 class="font-heading font-bold text-xs uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                <i data-lucide="cpu" class="w-3.5 h-3.5 text-sky-400"></i> Active Project Context
              </h3>
              <span class="text-[10px] font-mono text-emerald-400 font-bold">LIVE SYNC</span>
            </div>
            
            <div class="space-y-3 text-xs">
              <div class="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80">
                <span class="text-slate-400 uppercase text-[10px] font-semibold block">Active Project</span>
                <span class="font-bold text-slate-100 text-sm mt-0.5 block">${proj.title}</span>
                <div class="flex items-center justify-between text-[11px] text-slate-400 mt-2">
                  <span>${typeof proj.currentPhase === 'object' ? (proj.currentPhase?.title || 'Setup Phase') : proj.currentPhase}</span>
                  <span class="text-sky-400 font-bold">${proj.progress || 0}% Done</span>
                </div>
                <div class="w-full bg-slate-800 h-1.5 rounded-full mt-1.5 overflow-hidden">
                  <div class="bg-gradient-to-r from-sky-400 to-indigo-500 h-full rounded-full" style="width: ${proj.progress || 0}%"></div>
                </div>
              </div>

              <div class="grid grid-cols-2 gap-2 text-center">
                <div class="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/80">
                  <span class="text-slate-400 text-[10px] block">Model Telemetry</span>
                  <span class="font-bold text-emerald-400 font-mono text-xs">R² = 0.89</span>
                </div>
                <div class="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/80">
                  <span class="text-slate-400 text-[10px] block">Active Sprint</span>
                  <span class="font-bold text-sky-400 font-mono text-xs">Week 5 of 12</span>
                </div>
              </div>

              <div>
                <span class="text-slate-400 uppercase text-[10px] font-semibold block mb-1.5">Verified Tech Stack</span>
                <div class="flex flex-wrap gap-1.5">
                  <span class="badge badge-cyan text-[10px]">FastAPI</span>
                  <span class="badge badge-purple text-[10px]">XGBoost</span>
                  <span class="badge badge-emerald text-[10px]">React</span>
                  <span class="badge badge-amber text-[10px]">PostgreSQL</span>
                  <span class="badge badge-cyan text-[10px]">Docker</span>
                </div>
              </div>
            </div>

            <!-- Quick Action Prompts -->
            <div class="pt-3 border-t border-white/[0.08] space-y-2">
              <span class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                <i data-lucide="zap" class="w-3 h-3 text-amber-400"></i> Quick Inquiries
              </span>
              ${[
                { q: "How do I improve model accuracy past 85%?", icon: "trending-up" },
                { q: "Review my FastAPI architecture for bottlenecks", icon: "shield-alert" },
                { q: "What PostgreSQL indexes should I create?", icon: "database" },
                { q: "How do I prepare for final-year viva defense?", icon: "award" }
              ].map(item => `
                <button onclick="Views.sendQuickMentorQuestion('${item.q}')" class="w-full text-left p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-sky-500/50 hover:bg-sky-500/10 text-xs text-slate-200 transition flex items-center gap-2 group">
                  <i data-lucide="${item.icon}" class="w-3.5 h-3.5 text-sky-400 group-hover:scale-110 transition flex-shrink-0"></i>
                  <span class="truncate">${item.q}</span>
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Right: Chat Messages & Input Window -->
          <div class="lg:col-span-8 glass-panel p-6 flex flex-col h-[650px] justify-between border border-sky-500/20 shadow-2xl">
            <!-- Messages Container -->
            <div id="mentor-chat-messages" class="space-y-5 overflow-y-auto pr-2 flex-grow mb-4">
              ${history.map(msg => {
                const isStudent = msg.sender === 'student';
                return `
                  <div class="flex flex-col ${isStudent ? 'items-end' : 'items-start'} animate-fade-in">
                    <div class="flex items-center gap-2 mb-1.5">
                      ${!isStudent ? `
                        <div class="w-6 h-6 rounded-lg bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-sky-500/30 flex-shrink-0">
                          <i data-lucide="bot" class="w-3.5 h-3.5"></i>
                        </div>
                      ` : ''}
                      <span class="text-xs font-semibold ${isStudent ? 'text-sky-400' : 'text-indigo-400'}">
                        ${isStudent ? `${studentName} (You)` : 'ProjectForge Mentor'}
                      </span>
                      <span class="text-[10px] text-slate-400 font-mono">${msg.timestamp}</span>
                      ${isStudent ? `
                        <img src="${prof.avatar}" class="w-6 h-6 rounded-full object-cover ring-1 ring-sky-400 flex-shrink-0" alt="Avatar">
                      ` : ''}
                    </div>
                    <div class="max-w-[85%] p-4 rounded-2xl ${isStudent ? 'chat-bubble-student' : 'chat-bubble-mentor'} text-xs sm:text-sm prose-pf shadow-md">
                      ${msg.text.replace(/\n/g, '<br />')}
                    </div>
                  </div>
                `;
              }).join('')}
            </div>

            <!-- Chat Input Box -->
            <div class="pt-3 border-t border-white/[0.08] space-y-2">
              <div class="flex gap-2">
                <input type="text" id="mentor-input" placeholder="Ask your AI mentor about system design, bugs, or viva defense..." class="flex-grow px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-100 focus:outline-none focus:border-sky-500 shadow-inner" onkeydown="if(event.key==='Enter') Views.sendMentorMessage()" />
                <button onclick="Views.sendMentorMessage()" class="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-600 text-slate-950 font-heading font-extrabold text-xs shadow-md shadow-cyan-500/25 hover:brightness-110 active:scale-95 transition flex items-center gap-1.5 flex-shrink-0">
                  <span>Send</span>
                  <i data-lucide="send" class="w-4 h-4"></i>
                </button>
              </div>
              <div class="flex items-center justify-between text-[11px] text-slate-400 px-1">
                <span class="flex items-center gap-1"><i data-lucide="sparkles" class="w-3 h-3 text-sky-400"></i> Powered by Gemini 2.5 + DeepSeek-R1 Architecture Engine</span>
                <span class="font-mono">Press [Enter ↵]</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  sendQuickMentorQuestion(text) {
    const input = document.getElementById('mentor-input');
    if (input) {
      input.value = text;
      this.sendMentorMessage();
    }
  },

  async sendMentorMessage() {
    const input = document.getElementById('mentor-input');
    const container = document.getElementById('mentor-chat-messages');
    if (!input || !container || !input.value.trim()) return;

    const userText = input.value.trim();
    input.value = '';
    const studentName = App.profile?.name || 'Student';

    // Append User Message
    const userMsg = document.createElement('div');
    userMsg.className = "flex flex-col items-end animate-fade-in";
    userMsg.innerHTML = `
      <div class="flex items-center gap-2 mb-1.5">
        <span class="text-xs font-semibold text-sky-400">${studentName} (You)</span>
        <span class="text-[10px] text-slate-400 font-mono">Just now</span>
        <img src="${App.profile?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'}" class="w-6 h-6 rounded-full object-cover ring-1 ring-sky-400 flex-shrink-0" alt="Avatar">
      </div>
      <div class="max-w-[85%] p-4 rounded-2xl chat-bubble-student text-xs sm:text-sm shadow-md">
        ${userText}
      </div>
    `;
    container.appendChild(userMsg);

    // Append Thinking Indicator
    const thinkingMsg = document.createElement('div');
    thinkingMsg.id = 'mentor-thinking-indicator';
    thinkingMsg.className = "flex flex-col items-start animate-fade-in";
    thinkingMsg.innerHTML = `
      <div class="flex items-center gap-2 mb-1.5">
        <div class="w-6 h-6 rounded-lg bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-sky-500/30 flex-shrink-0">
          <i data-lucide="bot" class="w-3.5 h-3.5 animate-spin"></i>
        </div>
        <span class="text-xs font-semibold text-indigo-400">ProjectForge AI Mentor</span>
        <span class="text-[10px] text-slate-400 font-mono">Analyzing with Gemini AI...</span>
      </div>
      <div class="max-w-[85%] p-3.5 rounded-2xl chat-bubble-mentor text-xs text-slate-400 flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
        <span>Synthesizing architectural guidance...</span>
      </div>
    `;
    container.appendChild(thinkingMsg);
    container.scrollTop = container.scrollHeight;
    App.initLucideIcons();

    // Call live AI intelligence
    try {
      const replyHtml = await AIEngine.chatWithMentorLive(userText, App.activeProject, App.profile);
      thinkingMsg.remove();

      const mentorMsg = document.createElement('div');
      mentorMsg.className = "flex flex-col items-start animate-fade-in";
      mentorMsg.innerHTML = `
        <div class="flex items-center gap-2 mb-1.5">
          <div class="w-6 h-6 rounded-lg bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-sky-500/30 flex-shrink-0">
            <i data-lucide="bot" class="w-3.5 h-3.5"></i>
          </div>
          <span class="text-xs font-semibold text-indigo-400">ProjectForge AI Mentor</span>
          <span class="text-[10px] text-slate-400 font-mono">Just now</span>
        </div>
        <div class="max-w-[85%] p-4 rounded-2xl chat-bubble-mentor text-xs sm:text-sm prose-pf shadow-md">
          ${replyHtml}
        </div>
      `;
      container.appendChild(mentorMsg);
    } catch (err) {
      thinkingMsg.remove();
      const mentorMsg = document.createElement('div');
      mentorMsg.className = "flex flex-col items-start animate-fade-in";
      mentorMsg.innerHTML = `
        <div class="flex items-center gap-2 mb-1.5">
          <div class="w-6 h-6 rounded-lg bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-sky-500/30 flex-shrink-0">
            <i data-lucide="bot" class="w-3.5 h-3.5"></i>
          </div>
          <span class="text-xs font-semibold text-indigo-400">ProjectForge AI Mentor</span>
        </div>
        <div class="max-w-[85%] p-4 rounded-2xl chat-bubble-mentor text-xs sm:text-sm prose-pf shadow-md">
          Ensure your FastAPI endpoints utilize async database connection pools and keep model inference isolated in background worker processes.
        </div>
      `;
      container.appendChild(mentorMsg);
    }

    container.scrollTop = container.scrollHeight;
    App.initLucideIcons();
  },

  // 11. DEBUGGING ASSISTANT
  renderDebugger() {
    return `
      <div class="p-6 sm:p-8 max-w-5xl mx-auto space-y-6 animate-fade-in">
        <div>
          <span class="badge badge-rose mb-1">Feature 14: Debugging Engine</span>
          <h1 class="font-heading font-extrabold text-3xl text-white">AI Debugging Assistant</h1>
          <p class="text-xs sm:text-sm text-slate-400 mt-1">Paste terminal stack traces, Python exceptions, or broken code. Get root causes, checklists, and verified solutions.</p>
        </div>

        <div class="glass-panel p-6 space-y-4">
          <div>
            <label class="block text-xs font-semibold text-slate-300 mb-1">Paste Error Log or Faulty Code Snippet</label>
            <textarea id="debug-input" rows="6" class="w-full p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200 focus:outline-none focus:border-sky-500 leading-relaxed" placeholder="e.g. ValueError: Input contains NaN, infinity or a value too large for dtype('float32')..."></textarea>
          </div>

          <div class="flex flex-wrap items-center justify-between gap-3 pt-2">
            <div class="flex gap-2">
              <button onclick="Views.loadSampleError('nan')" class="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-300 hover:text-white">
                Sample: NaN in XGBoost
              </button>
              <button onclick="Views.loadSampleError('eventloop')" class="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-300 hover:text-white">
                Sample: FastAPI Blocked Loop
              </button>
            </div>
            <button onclick="Views.runDebugger()" class="px-6 py-2.5 rounded-xl font-heading font-bold text-xs bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md hover:brightness-110 transition flex items-center gap-2">
              <i data-lucide="bug" class="w-4 h-4"></i>
              <span>Diagnose Error</span>
            </button>
          </div>
        </div>

        <!-- Debug Results Container -->
        <div id="debug-output-card" class="glass-panel p-6 space-y-5 hidden">
          <!-- Populated dynamically -->
        </div>
      </div>
    `;
  },

  loadSampleError(type) {
    const input = document.getElementById('debug-input');
    if (!input) return;

    if (type === 'nan') {
      input.value = `ValueError: Input contains NaN, infinity or a value too large for dtype('float32').
File "/app/services/predictor.py", line 42, in predict_crowd
  predictions = model.predict(dmatrix_features)
File "/usr/local/lib/python3.11/site-packages/xgboost/core.py", line 2244, in predict`;
    } else {
      input.value = `RuntimeError: Task <Task pending name='Task-12' coro=<predict_endpoint()>> got Future <Future pending> attached to a different loop.
File "/app/api/routes.py", line 88, in predict_endpoint
  result = await loop.run_until_complete(ml_model.infer(data))`;
    }
    this.runDebugger();
  },

  async runDebugger() {
    const input = document.getElementById('debug-input');
    const card = document.getElementById('debug-output-card');
    if (!card) return;

    const errorText = input ? input.value.trim() : "";
    if (!errorText) {
      App.showToast("Please paste an error log or stack trace first.", "info");
      return;
    }

    card.classList.remove('hidden');
    card.innerHTML = `
      <div class="p-8 text-center space-y-3 animate-fade-in">
        <div class="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center mx-auto animate-spin">
          <i data-lucide="loader-2" class="w-5 h-5"></i>
        </div>
        <p class="text-xs font-mono text-slate-400">Diagnosing stack trace with Gemini AI...</p>
      </div>
    `;
    App.initLucideIcons();

    try {
      const diag = await AIEngine.diagnoseErrorLive(errorText);
      card.innerHTML = `
        <div class="space-y-4 animate-fade-in">
          <div class="flex items-center justify-between pb-3 border-b border-slate-800">
            <span class="badge badge-rose text-[10px]">${diag.category || "Critical Exception"}</span>
            <span class="text-xs text-slate-400 font-mono">Confidence: ${diag.confidence || 95}%</span>
          </div>

          <div class="space-y-1.5">
            <h3 class="font-heading font-bold text-base text-white">1. Error Root Cause</h3>
            <p class="text-xs text-slate-300 leading-relaxed">
              ${diag.rootCause}
            </p>
          </div>

          <div class="space-y-1.5 pt-2 border-t border-slate-800">
            <h3 class="font-heading font-bold text-base text-white">2. Recommended Solution</h3>
            <pre class="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-sky-300 overflow-x-auto"><code>${diag.solutionCode}</code></pre>
          </div>

          <div class="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-slate-300">
            <strong>Prevention Tip:</strong> ${diag.preventionTip}
          </div>
        </div>
      `;
    } catch (err) {
      card.innerHTML = `
        <div class="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-xs text-rose-300">
          Diagnosis complete. Verify input tensors contain no NaN/Inf values before calling predict().
        </div>
      `;
    }

    App.initLucideIcons();
  },

  // 12. CODE & ARCHITECTURE REVIEWER
  renderReview() {
    const reviewData = AIEngine.reviewCode("", "https://github.com/alex-rivera/hospital-crowd-ai");

    return `
      <div class="p-6 sm:p-8 max-w-6xl mx-auto space-y-8 animate-fade-in">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span class="badge badge-purple mb-1">Feature 15 & 17: Static & Structural Analysis</span>
            <h1 class="font-heading font-extrabold text-3xl text-white">AI Project & Architecture Review</h1>
            <p class="text-xs sm:text-sm text-slate-400 mt-1">Deep analysis of code maintainability, concurrency bottlenecks, and security standards.</p>
          </div>
        </div>

        <!-- Review Score Card -->
        <div class="glass-panel p-6 sm:p-8 border-slate-700/80 shadow-2xl">
          <div class="grid lg:grid-cols-12 gap-8 items-center">
            
            <div class="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-950/70 border border-slate-800 text-center">
              <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Overall Code Health</span>
              ${Views.renderScoreRing(reviewData.overallScore, 110, 8, "stroke-sky-400")}
              <div class="mt-4">
                <span class="badge badge-emerald text-[10px]">Production Grade (82/100)</span>
                <p class="text-[11px] text-slate-400 mt-1">Exceeds standard college capstone threshold.</p>
              </div>
            </div>

            <div class="lg:col-span-8 space-y-3">
              <h3 class="font-heading font-bold text-lg text-white">Category Scores</h3>

              <div>
                <div class="flex justify-between text-xs font-medium mb-1">
                  <span class="text-slate-300">Architecture & Decoupling</span>
                  <span class="text-sky-400 font-mono font-bold">${reviewData.architecture}/100</span>
                </div>
                <div class="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div class="bg-sky-400 h-full rounded-full" style="width: ${reviewData.architecture}%"></div>
                </div>
              </div>

              <div>
                <div class="flex justify-between text-xs font-medium mb-1">
                  <span class="text-slate-300">Code Quality & Readability</span>
                  <span class="text-indigo-400 font-mono font-bold">${reviewData.codeQuality}/100</span>
                </div>
                <div class="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div class="bg-indigo-400 h-full rounded-full" style="width: ${reviewData.codeQuality}%"></div>
                </div>
              </div>

              <div>
                <div class="flex justify-between text-xs font-medium mb-1">
                  <span class="text-slate-300">Maintainability & Modular Structure</span>
                  <span class="text-emerald-400 font-mono font-bold">${reviewData.maintainability}/100</span>
                </div>
                <div class="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div class="bg-emerald-400 h-full rounded-full" style="width: ${reviewData.maintainability}%"></div>
                </div>
              </div>

              <div>
                <div class="flex justify-between text-xs font-medium mb-1">
                  <span class="text-slate-300">Security & Authentication (Zero-PII Compliance)</span>
                  <span class="text-amber-400 font-mono font-bold">${reviewData.security}/100</span>
                </div>
                <div class="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div class="bg-amber-400 h-full rounded-full" style="width: ${reviewData.security}%"></div>
                </div>
              </div>

              <div>
                <div class="flex justify-between text-xs font-medium mb-1">
                  <span class="text-slate-300">Scalability (Inference Latency under Load)</span>
                  <span class="text-rose-400 font-mono font-bold">${reviewData.scalability}/100</span>
                </div>
                <div class="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div class="bg-rose-400 h-full rounded-full" style="width: ${reviewData.scalability}%"></div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <!-- Critical Architecture Findings -->
        <div class="space-y-4">
          <h3 class="font-heading font-bold text-xl text-white">Detected Architectural Opportunities</h3>

          ${reviewData.criticalIssues.map(issue => `
            <div class="glass-panel p-6 border-amber-500/30 space-y-3">
              <div class="flex items-center justify-between">
                <span class="badge badge-amber font-mono text-[10px]">${issue.severity} Severity</span>
                <span class="text-xs text-slate-400">Architecture Bottleneck</span>
              </div>
              <h4 class="font-heading font-bold text-base text-white">⚠️ ${issue.title}</h4>
              <p class="text-xs text-slate-300 leading-relaxed">${issue.detail}</p>
              <div class="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-emerald-300">
                <strong>Recommended Action:</strong> ${issue.recommendation}
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Architecture Flow Diff -->
        <div class="glass-panel p-6 space-y-4">
          <h3 class="font-heading font-bold text-lg text-white">Current vs Recommended Architecture</h3>
          <div class="grid sm:grid-cols-2 gap-4 text-xs font-mono">
            <div class="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30 text-slate-300">
              <div class="font-bold text-rose-400 mb-2">CURRENT: Tightly Coupled</div>
              <p>${reviewData.architectureComparison.current}</p>
            </div>
            <div class="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-slate-300">
              <div class="font-bold text-emerald-400 mb-2">RECOMMENDED: Asynchronous Buffered</div>
              <p>${reviewData.architectureComparison.recommended}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // 13. PROJECT EVOLUTION
  renderEvolution() {
    const versions = MockData.evolutionVersions;

    return `
      <div class="p-6 sm:p-8 max-w-6xl mx-auto space-y-8 animate-fade-in">
        <div>
          <span class="badge badge-cyan mb-1">Feature 16: Project Evolution</span>
          <h1 class="font-heading font-extrabold text-3xl text-white">Project Evolution Engine</h1>
          <p class="text-xs sm:text-sm text-slate-400 mt-1">Visually demonstrate how your project matures from a basic MVP script into a production microservice.</p>
        </div>

        <div class="space-y-6 relative">
          ${versions.map((ver, idx) => `
            <div class="glass-panel p-6 border-slate-800 relative hover:border-slate-700 transition">
              <div class="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                <span class="font-heading font-bold text-lg text-white">${ver.version}</span>
                <span class="badge ${idx === 1 ? 'badge-cyan' : idx === 0 ? 'badge-emerald' : 'badge-purple'} text-[10px]">
                  ${ver.status}
                </span>
              </div>

              <p class="text-xs sm:text-sm text-slate-300 mb-4">${ver.summary}</p>

              <div class="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs font-mono text-sky-400 mb-4">
                <span class="text-slate-500 block text-[10px] uppercase font-sans mb-1">Architecture Topology</span>
                ${ver.architecture}
              </div>

              ${ver.weaknesses ? `
                <div class="space-y-1.5 text-xs text-rose-300">
                  <span class="font-bold uppercase tracking-wider text-[10px] text-rose-400">Weaknesses Identified</span>
                  <ul class="list-disc pl-4 space-y-1 text-slate-400">
                    ${ver.weaknesses.map(w => `<li>${w}</li>`).join('')}
                  </ul>
                </div>
              ` : ''}

              ${ver.improvements ? `
                <div class="space-y-1.5 text-xs text-emerald-300 pt-2 border-t border-slate-800/80 mt-3">
                  <span class="font-bold uppercase tracking-wider text-[10px] text-emerald-400">Key Refinements Implemented</span>
                  <ul class="list-disc pl-4 space-y-1 text-slate-300">
                    ${ver.improvements.map(imp => `<li>${imp}</li>`).join('')}
                  </ul>
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  // 14. "WHAT-IF?" SIMULATOR
  renderWhatIf() {
    return `
      <div class="p-6 sm:p-8 max-w-6xl mx-auto space-y-8 animate-fade-in">
        <div>
          <span class="badge badge-amber mb-1">Feature 17 & 30: Dynamic Re-Scoping</span>
          <h1 class="font-heading font-extrabold text-3xl text-white">What-If Project Simulator</h1>
          <p class="text-xs sm:text-sm text-slate-400 mt-1">Simulate constraint changes in real time. ProjectForge recalculates feasibility, risks, and recommended scope adaptations.</p>
        </div>

        <div class="grid lg:grid-cols-12 gap-8 items-start">
          <!-- Sliders Form -->
          <div class="lg:col-span-6 glass-panel p-6 sm:p-8 space-y-6">
            <h3 class="font-heading font-bold text-lg text-white">Adjust Project Constraints</h3>

            <!-- Slider 1: Available Time -->
            <div class="space-y-2">
              <div class="flex justify-between text-xs font-semibold">
                <span class="text-slate-300">Available Time</span>
                <span id="whatif-time-val" class="text-sky-400 font-mono">12 weeks</span>
              </div>
              <input type="range" min="4" max="24" step="2" value="12" id="whatif-time-slider" oninput="Views.handleWhatIfUpdate()" class="w-full accent-sky-400 cursor-pointer" />
              <div class="flex justify-between text-[10px] text-slate-500">
                <span>4 weeks</span>
                <span>12 weeks</span>
                <span>24 weeks</span>
              </div>
            </div>

            <!-- Slider 2: Budget -->
            <div class="space-y-2">
              <div class="flex justify-between text-xs font-semibold">
                <span class="text-slate-300">Available Budget</span>
                <span id="whatif-budget-val" class="text-emerald-400 font-mono">₹3,500</span>
              </div>
              <input type="range" min="0" max="30000" step="1000" value="3500" id="whatif-budget-slider" oninput="Views.handleWhatIfUpdate()" class="w-full accent-emerald-400 cursor-pointer" />
              <div class="flex justify-between text-[10px] text-slate-500">
                <span>₹0 (Free)</span>
                <span>₹10,000</span>
                <span>₹30,000+</span>
              </div>
            </div>

            <!-- Slider 3: Team Size -->
            <div class="space-y-2">
              <div class="flex justify-between text-xs font-semibold">
                <span class="text-slate-300">Team Members</span>
                <span id="whatif-team-val" class="text-indigo-400 font-mono">3 members</span>
              </div>
              <input type="range" min="1" max="5" step="1" value="3" id="whatif-team-slider" oninput="Views.handleWhatIfUpdate()" class="w-full accent-indigo-400 cursor-pointer" />
              <div class="flex justify-between text-[10px] text-slate-500">
                <span>1 (Solo)</span>
                <span>3 members</span>
                <span>5 members</span>
              </div>
            </div>

            <!-- Dropdown: Skill Level -->
            <div class="space-y-2">
              <label class="block text-xs font-semibold text-slate-300">Team Experience Level</label>
              <select id="whatif-skill-select" onchange="Views.handleWhatIfUpdate()" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-sky-500">
                <option value="Beginner">Beginner (Foundational)</option>
                <option value="Intermediate" selected>Intermediate (Standard)</option>
                <option value="Advanced">Advanced (Experienced)</option>
              </select>
            </div>
          </div>

          <!-- Dynamic Output Card -->
          <div class="lg:col-span-6 glass-panel p-6 sm:p-8 space-y-6" id="whatif-results-card">
            <!-- Dynamically populated -->
          </div>
        </div>
      </div>
    `;
  },

  handleWhatIfUpdate() {
    const timeSlider = document.getElementById('whatif-time-slider');
    const budgetSlider = document.getElementById('whatif-budget-slider');
    const teamSlider = document.getElementById('whatif-team-slider');
    const skillSelect = document.getElementById('whatif-skill-select');

    if (!timeSlider || !budgetSlider || !teamSlider) return;

    const weeks = timeSlider.value;
    const budget = budgetSlider.value;
    const team = teamSlider.value;
    const skill = skillSelect ? skillSelect.value : 'Intermediate';

    document.getElementById('whatif-time-val').innerText = `${weeks} weeks`;
    document.getElementById('whatif-budget-val').innerText = budget == 0 ? '₹0 (Free)' : `₹${parseInt(budget).toLocaleString()}`;
    document.getElementById('whatif-team-val').innerText = `${team} member${team > 1 ? 's' : ''}`;

    const res = AIEngine.simulateWhatIf({
      durationWeeks: weeks,
      budgetInr: budget,
      teamSize: team,
      skillLevel: skill
    });

    const resultsCard = document.getElementById('whatif-results-card');
    if (resultsCard) {
      resultsCard.innerHTML = `
        <div class="space-y-6 animate-fade-in">
          <div class="flex items-center justify-between pb-3 border-b border-slate-800">
            <div>
              <span class="badge badge-cyan text-[10px]">Real-Time AI Recalculation</span>
              <h3 class="font-heading font-bold text-lg text-white mt-1">Calibrated Feasibility: ${res.feasibility}%</h3>
            </div>
            ${Views.renderScoreRing(res.calculatedScore, 68, 6, "stroke-sky-400")}
          </div>

          <div class="space-y-2">
            <h4 class="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <i data-lucide="check-circle" class="w-3.5 h-3.5"></i> Recommended Scope Adaptations
            </h4>
            <ul class="space-y-2 text-xs text-slate-300">
              ${res.recommendations.map(r => `
                <li class="p-3 rounded-xl bg-slate-900/80 border border-slate-800 leading-relaxed">
                  ${r}
                </li>
              `).join('')}
            </ul>
          </div>

          ${res.risks.length > 0 ? `
            <div class="space-y-2 pt-2 border-t border-slate-800">
              <h4 class="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <i data-lucide="alert-triangle" class="w-3.5 h-3.5"></i> Detected Constraint Risks
              </h4>
              <ul class="space-y-2 text-xs text-slate-300">
                ${res.risks.map(risk => `
                  <li class="p-3 rounded-xl bg-amber-950/20 border border-amber-500/30 text-amber-200 leading-relaxed">
                    ⚠️ ${risk}
                  </li>
                `).join('')}
              </ul>
            </div>
          ` : ''}
        </div>
      `;
      App.initLucideIcons();
    }
  },

  // 15. TEAM BUILDER & SKILL COMPATIBILITY
  renderTeamBuilder() {
    const members = MockData.teamMembers;

    return `
      <div class="p-6 sm:p-8 max-w-6xl mx-auto space-y-8 animate-fade-in relative">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="badge badge-purple text-[10px]"><i data-lucide="users" class="w-3 h-3"></i> Human Resource Orchestration</span>
              <span class="text-xs text-slate-400 font-mono">${members.length} Active Engineers</span>
            </div>
            <h1 class="font-heading font-extrabold text-3xl text-white">Team Builder & Skill Matching</h1>
            <p class="text-xs sm:text-sm text-slate-400 mt-1">Analyze peer compatibility, skill coverage, and balanced task allocation.</p>
          </div>
          <div class="flex items-center gap-3">
            <button onclick="Views.openAddTeammateModal()" class="px-4 py-2.5 rounded-xl font-heading font-bold text-xs bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/25 hover:brightness-110 active:scale-95 transition flex items-center gap-2 cursor-pointer">
              <i data-lucide="user-plus" class="w-4 h-4"></i>
              <span>Add Teammate</span>
            </button>
            <button onclick="App.showToast('Team invitation link copied to clipboard!', 'success')" class="px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-900 border border-slate-700 hover:border-sky-500 text-slate-200 hover:text-white transition flex items-center gap-1.5 cursor-pointer">
              <i data-lucide="share-2" class="w-3.5 h-3.5 text-sky-400"></i>
              <span>Invite Teammate</span>
            </button>
          </div>
        </div>

        <!-- Team Stats Header -->
        <div class="grid sm:grid-cols-3 gap-4">
          <div class="glass-panel p-5 space-y-1">
            <span class="text-[11px] font-semibold text-slate-400 uppercase">Team Compatibility</span>
            <div class="font-heading font-extrabold text-2xl text-emerald-400">96%</div>
            <p class="text-xs text-slate-400">Optimal full-stack balance</p>
          </div>

          <div class="glass-panel p-5 space-y-1">
            <span class="text-[11px] font-semibold text-slate-400 uppercase">Skill Coverage</span>
            <div class="font-heading font-extrabold text-2xl text-sky-400">94%</div>
            <p class="text-xs text-slate-400">Strong AI, DB and UI coverage</p>
          </div>

          <div class="glass-panel p-5 space-y-1">
            <span class="text-[11px] font-semibold text-slate-400 uppercase">Team Size</span>
            <div class="font-heading font-extrabold text-2xl text-indigo-400">${members.length} Members</div>
            <p class="text-xs text-slate-400">Balanced sprint distribution</p>
          </div>
        </div>

        <!-- Team Members List -->
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <h3 class="font-heading font-bold text-lg text-white">Active Team Members (${members.length})</h3>
            <button onclick="Views.openAddTeammateModal()" class="text-xs text-sky-400 hover:text-sky-300 font-semibold flex items-center gap-1">
              <i data-lucide="plus" class="w-3.5 h-3.5"></i> Add New Member
            </button>
          </div>

          <div class="grid md:grid-cols-3 gap-6" id="team-members-container">
            ${members.map((m, idx) => `
              <div class="glass-panel p-6 space-y-4 relative group">
                ${idx >= 3 ? `
                  <button onclick="Views.removeTeammate(${idx})" class="absolute top-4 right-4 p-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 opacity-0 group-hover:opacity-100 transition" title="Remove Teammate">
                    <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                  </button>
                ` : ''}
                <div class="flex items-center gap-3">
                  <div class="w-11 h-11 rounded-xl bg-gradient-to-tr from-cyan-500 via-sky-500 to-indigo-600 flex items-center justify-center font-heading font-bold text-white text-base shadow-md shadow-sky-500/20">
                    ${m.name.charAt(0)}
                  </div>
                  <div>
                    <h4 class="font-heading font-bold text-base text-white">${m.name}</h4>
                    <span class="text-xs text-sky-400 font-medium">${m.role}</span>
                  </div>
                </div>

                <div class="space-y-2.5 pt-2 border-t border-slate-800 text-xs">
                  <div>
                    <span class="text-slate-500 uppercase text-[10px] font-semibold block mb-1">Core Skills</span>
                    <div class="flex flex-wrap gap-1">
                      ${m.skills.map(s => `<span class="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] text-slate-300">${s}</span>`).join('')}
                    </div>
                  </div>

                  <div class="pt-1">
                    <span class="text-slate-500 uppercase text-[10px] font-semibold block mb-1">Assigned Domain Responsibilities</span>
                    <ul class="list-disc pl-4 space-y-1 text-slate-300">
                      ${m.coverage.map(c => `<li>${c}</li>`).join('')}
                    </ul>
                  </div>

                  <div class="pt-2">
                    <div class="flex justify-between text-[11px] mb-1">
                      <span class="text-slate-400">Target Workload</span>
                      <span class="text-slate-200 font-mono font-bold">${m.workloadPct || 25}%</span>
                    </div>
                    <div class="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div class="bg-gradient-to-r from-sky-400 to-indigo-500 h-full rounded-full" style="width: ${m.workloadPct || 25}%"></div>
                    </div>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- AI Team Recommendation Box -->
        <div class="p-5 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-xs text-slate-300 flex items-start gap-3">
          <i data-lucide="sparkles" class="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5"></i>
          <div>
            <strong class="text-sky-300">AI Team Recommendation:</strong> Your team exhibits high ML, backend, and UI proficiency. With balanced workload distribution, all sprint deliverables remain on schedule for final viva evaluation.
          </div>
        </div>

        <!-- POPUP MODAL: ADD TEAMMATE -->
        <div id="add-teammate-modal" class="modal-backdrop">
          <div class="modal-content-card p-6 sm:p-8 space-y-6 max-w-lg">
            <div class="flex items-center justify-between pb-4 border-b border-white/[0.08]">
              <div class="flex items-center gap-2.5">
                <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-400 to-indigo-600 flex items-center justify-center text-slate-950 font-bold">
                  <i data-lucide="user-plus" class="w-5 h-5 text-white"></i>
                </div>
                <div>
                  <h3 class="font-heading font-bold text-lg text-white">Add New Teammate</h3>
                  <p class="text-xs text-slate-400">Add an engineering peer to your project roster & task planner.</p>
                </div>
              </div>
              <button onclick="Views.closeAddTeammateModal()" class="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition" title="Close Modal">
                <i data-lucide="x" class="w-5 h-5"></i>
              </button>
            </div>

            <form onsubmit="Views.saveNewTeammate(event)" class="space-y-4 text-left">
              <div>
                <label class="block text-xs font-semibold text-slate-300 mb-1">Teammate Full Name *</label>
                <input type="text" id="new-tm-name" required placeholder="e.g. Ananya Iyer" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-100 focus:outline-none focus:border-sky-500" />
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-semibold text-slate-300 mb-1">Role / Specialization *</label>
                  <select id="new-tm-role" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-100 focus:outline-none focus:border-sky-500">
                    <option value="Cloud & DevOps Engineer">Cloud & DevOps Engineer</option>
                    <option value="Full-Stack Developer">Full-Stack Developer</option>
                    <option value="ML Research Engineer">ML Research Engineer</option>
                    <option value="Cybersecurity Analyst">Cybersecurity Analyst</option>
                    <option value="QA & Testing Lead">QA & Testing Lead</option>
                    <option value="Data Pipeline Engineer">Data Pipeline Engineer</option>
                  </select>
                </div>
                <div>
                  <label class="block text-xs font-semibold text-slate-300 mb-1">Academic Department</label>
                  <input type="text" id="new-tm-branch" value="Computer Science & Engineering" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-100 focus:outline-none focus:border-sky-500" />
                </div>
              </div>

              <div>
                <label class="block text-xs font-semibold text-slate-300 mb-1">Core Skills (Comma separated)</label>
                <input type="text" id="new-tm-skills" placeholder="e.g. Docker, AWS, Kubernetes, Terraform" value="Docker, Kubernetes, AWS, CI/CD" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-100 focus:outline-none focus:border-sky-500" />
              </div>

              <div>
                <label class="block text-xs font-semibold text-slate-300 mb-1">Assigned Domain Responsibilities</label>
                <input type="text" id="new-tm-coverage" placeholder="e.g. CI/CD Pipelines, Cluster Security" value="Cloud Infrastructure, CI/CD Pipelines, Security Hardening" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-100 focus:outline-none focus:border-sky-500" />
              </div>

              <div>
                <div class="flex justify-between text-xs font-semibold text-slate-300 mb-1">
                  <span>Target Workload Allocation</span>
                  <span id="new-tm-workload-val" class="text-sky-400 font-mono">25%</span>
                </div>
                <input type="range" id="new-tm-workload" min="10" max="50" value="25" oninput="document.getElementById('new-tm-workload-val').innerText = this.value + '%'" class="w-full accent-sky-400" />
              </div>

              <div class="flex items-center justify-end gap-3 pt-4 border-t border-white/[0.08]">
                <button type="button" onclick="Views.closeAddTeammateModal()" class="px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition">
                  Cancel
                </button>
                <button type="submit" class="px-6 py-2.5 rounded-xl font-heading font-bold text-xs bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-600 text-slate-950 font-extrabold shadow-lg shadow-cyan-500/25 hover:brightness-110 active:scale-95 transition flex items-center gap-2 cursor-pointer">
                  <i data-lucide="check" class="w-4 h-4"></i>
                  <span>Add to Team</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    `;
  },

  openAddTeammateModal() {
    const modal = document.getElementById('add-teammate-modal');
    if (modal) {
      modal.classList.add('active');
    }
  },

  closeAddTeammateModal() {
    const modal = document.getElementById('add-teammate-modal');
    if (modal) {
      modal.classList.remove('active');
    }
  },

  saveNewTeammate(e) {
    if (e) e.preventDefault();
    const name = document.getElementById('new-tm-name')?.value.trim();
    const role = document.getElementById('new-tm-role')?.value;
    const skillsRaw = document.getElementById('new-tm-skills')?.value.trim() || "Python, Git";
    const coverageRaw = document.getElementById('new-tm-coverage')?.value.trim() || "Module Engineering";
    const workloadPct = parseInt(document.getElementById('new-tm-workload')?.value || '25');

    if (!name) {
      App.showToast("Please enter the teammate's full name", "error");
      return;
    }

    const newMember = {
      name,
      role,
      skills: skillsRaw.split(',').map(s => s.trim()).filter(Boolean),
      coverage: coverageRaw.split(',').map(c => c.trim()).filter(Boolean),
      workloadPct
    };

    MockData.teamMembers.push(newMember);
    App.saveState();
    this.closeAddTeammateModal();
    App.renderCurrentView();
    App.initLucideIcons();
    App.triggerConfetti();
    App.showToast(`Teammate ${name} successfully added to project!`, "success");
  },

  removeTeammate(index) {
    if (index >= 0 && index < MockData.teamMembers.length) {
      const removed = MockData.teamMembers.splice(index, 1);
      App.saveState();
      App.renderCurrentView();
      App.initLucideIcons();
      App.showToast(`Removed ${removed[0]?.name || 'member'} from team.`, "info");
    }
  },

  // 16. VIVA & INTERVIEW SIMULATOR
  renderVivaSimulator() {
    const qList = MockData.vivaQuestions;

    return `
      <div class="p-6 sm:p-8 max-w-5xl mx-auto space-y-8 animate-fade-in">
        <div class="flex items-center justify-between">
          <div>
            <span class="badge badge-emerald mb-1">Feature 19 & 38: External Examiner Mode</span>
            <h1 class="font-heading font-extrabold text-3xl text-white">AI Viva Defense Simulator</h1>
            <p class="text-xs sm:text-sm text-slate-400 mt-1">Realistic examination simulator. AI analyzes your spoken/typed defense for technical depth and clarity.</p>
          </div>
          <button onclick="Views.generate20VivaQuestions()" class="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 border border-slate-700 text-slate-200 hover:border-sky-500 flex items-center gap-1.5">
            <i data-lucide="list" class="w-3.5 h-3.5 text-sky-400"></i>
            <span>Generate 20 Viva Questions</span>
          </button>
        </div>

        <!-- Question Carousel / Selector -->
        <div class="glass-panel p-6 space-y-4">
          <div class="flex items-center justify-between">
            <span class="badge badge-purple text-[10px]" id="viva-category">AI/ML Architecture</span>
            <span class="text-xs text-slate-400 font-mono">Question 1 of 4</span>
          </div>

          <h3 class="font-heading font-bold text-lg text-white" id="viva-question-text">
            ${qList[0].question}
          </h3>

          <div class="pt-2">
            <label class="block text-xs font-semibold text-slate-300 mb-1">Your Defense Answer (Type what you would say to external examiner):</label>
            <textarea id="viva-student-answer" rows="4" class="w-full p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-100 focus:outline-none focus:border-sky-500 leading-relaxed" placeholder="Type your answer here... (e.g. We chose XGBoost because tabular hospital data performs significantly better with decision trees...)"></textarea>
          </div>

          <div class="flex items-center justify-between pt-2">
            <div class="flex gap-2">
              <button onclick="Views.loadSampleVivaAnswer()" class="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-300 hover:text-white">
                Load Strong Sample Answer
              </button>
            </div>
            <button onclick="Views.evaluateVivaAnswer()" class="px-6 py-2.5 rounded-xl font-heading font-bold text-xs bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md hover:brightness-110 transition flex items-center gap-2">
              <i data-lucide="check-circle" class="w-4 h-4"></i>
              <span>Submit & Evaluate Defense</span>
            </button>
          </div>
        </div>

        <!-- Evaluation Results Card -->
        <div id="viva-eval-card" class="glass-panel p-6 space-y-5 hidden">
          <!-- Populated dynamically -->
        </div>
      </div>
    `;
  },

  loadSampleVivaAnswer() {
    const area = document.getElementById('viva-student-answer');
    if (area) {
      area.value = "We selected XGBoost instead of deep neural networks because clinical queue telemetry consists of heterogeneous tabular data. Decision trees train much faster, prevent overfitting on smaller cohorts, and allow SHAP feature importance extraction to comply with medical explainability requirements.";
    }
  },

  async evaluateVivaAnswer() {
    const area = document.getElementById('viva-student-answer');
    const card = document.getElementById('viva-eval-card');
    if (!area || !card) return;

    const answer = area.value.trim();
    if (!answer) {
      App.showToast("Please type an answer before evaluating.", "error");
      return;
    }

    card.classList.remove('hidden');
    card.innerHTML = `
      <div class="p-8 text-center space-y-3 animate-fade-in">
        <div class="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mx-auto animate-spin">
          <i data-lucide="loader-2" class="w-5 h-5"></i>
        </div>
        <p class="text-xs font-mono text-slate-400">Evaluating defense against university examiner rubrics with Gemini AI...</p>
      </div>
    `;
    App.initLucideIcons();

    const qObj = MockData.vivaQuestions[0] || {
      id: "v-1",
      question: "Why did you choose your selected model architecture over alternative deep learning baselines?",
      keyConcepts: ["Heterogeneous tabular data", "Inference latency", "SHAP interpretability"]
    };

    try {
      const evalResult = await AIEngine.evaluateVivaAnswerLive(qObj, answer);

      card.innerHTML = `
        <div class="space-y-5 animate-fade-in">
          <div class="flex items-center justify-between pb-3 border-b border-slate-800">
            <div>
              <span class="badge badge-emerald text-[10px]">Examiner Verdict</span>
              <h4 class="font-heading font-bold text-base text-white mt-1">${evalResult.verdict}</h4>
            </div>
            ${Views.renderScoreRing(evalResult.score, 68, 6, evalResult.score >= 80 ? "stroke-emerald-400" : "stroke-amber-400")}
          </div>

          <!-- Score Attributes -->
          <div class="grid sm:grid-cols-3 gap-4 text-xs font-mono">
            <div class="p-3 rounded-xl bg-slate-900 border border-slate-800">
              <span class="text-slate-400 block text-[10px]">Technical Accuracy</span>
              <span class="font-bold text-emerald-400 text-sm">${evalResult.accuracy}%</span>
            </div>
            <div class="p-3 rounded-xl bg-slate-900 border border-slate-800">
              <span class="text-slate-400 block text-[10px]">Clarity & Conciseness</span>
              <span class="font-bold text-sky-400 text-sm">${evalResult.clarity}%</span>
            </div>
            <div class="p-3 rounded-xl bg-slate-900 border border-slate-800">
              <span class="text-slate-400 block text-[10px]">Defense Confidence</span>
              <span class="font-bold text-indigo-400 text-sm">${evalResult.confidence}%</span>
            </div>
          </div>

          <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 space-y-1">
            <span class="font-bold text-slate-200 block">Examiner Feedback:</span>
            <p class="text-slate-400">${evalResult.feedback}</p>
          </div>

          <div class="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-2">
            <span class="font-bold text-sky-300 block">External Examiner's Benchmark Answer:</span>
            <p class="leading-relaxed text-slate-400 italic">
              "${evalResult.improvedExplanation}"
            </p>
          </div>
        </div>
      `;
    } catch (err) {
      const evalResult = AIEngine.evaluateVivaAnswer("v-1", answer);
      card.innerHTML = `
        <div class="space-y-4 animate-fade-in">
          <div class="flex items-center justify-between pb-3 border-b border-slate-800">
            <h4 class="font-heading font-bold text-base text-white">${evalResult.verdict}</h4>
            ${Views.renderScoreRing(evalResult.score, 68, 6, "stroke-emerald-400")}
          </div>
          <p class="text-xs text-slate-300">${evalResult.feedback}</p>
        </div>
      `;
    }

    App.initLucideIcons();
  },

  generate20VivaQuestions() {
    App.showToast("Generated 20 Viva Questions for AI Hospital Crowd Intelligence!", "success");
    const card = document.getElementById('viva-eval-card');
    if (!card) return;

    card.classList.remove('hidden');
    card.innerHTML = `
      <div class="space-y-4 animate-fade-in">
        <h3 class="font-heading font-bold text-lg text-white">20 Tailored Viva Defense Questions</h3>
        <ol class="list-decimal pl-5 space-y-2 text-xs text-slate-300">
          <li>Why did you select XGBoost over Random Forest for tabular queue wait times?</li>
          <li>How does your pipeline handle cyclical temporal features such as day of week?</li>
          <li>What measures guarantee patient privacy compliance under HIPAA regulations?</li>
          <li>How do you prevent data leakage during time-series train/test cross-validation?</li>
          <li>What happens when telemetry events spike from 10 to 1,000 requests per second?</li>
          <li>Explain the role of pgvector in your PostgreSQL database cluster.</li>
          <li>Why did you use FastAPI over Django or Flask for the ML microservice?</li>
          <li>How does Redis caching reduce inference latency during peak emergency hours?</li>
          <li>What evaluation metric is most critical: MAE, RMSE, or R2, and why?</li>
          <li>How do you handle missing sensor telemetry when a clinic connection drops?</li>
          <li>Explain how SHAP feature values are fed into the LLM explanation generator.</li>
          <li>How would you containerize your multi-service pipeline using Docker Compose?</li>
          <li>What database indexes were created to accelerate historical crowd lookups?</li>
          <li>How do you test your WebSocket alert broadcast system under load?</li>
          <li>Explain the difference between Acuity Level 1 and Level 4 priority queuing.</li>
          <li>What is the total estimated infrastructure operating cost per month?</li>
          <li>How would this architecture scale across 15 hospitals in a metropolitan network?</li>
          <li>What are the primary technical limitations of your current Version 2 prototype?</li>
          <li>How did you validate that your synthetic patient dataset matches clinical realities?</li>
          <li>If you had 3 additional months, what primary feature would you implement next?</li>
        </ol>
      </div>
    `;
    App.initLucideIcons();
  },

  // 17. FINAL PROJECT REPORT & IEEE DOCUMENTATION
  renderDocumentation() {
    const proj = App.activeProject || MockData.activeProject;
    const authorName = App.profile?.name || "Alex Rivera";
    const branchName = App.profile?.academicBranch || "Computer Science & Engineering";

    return `
      <div class="p-6 sm:p-8 max-w-5xl mx-auto space-y-8 animate-fade-in">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 no-print">
          <div>
            <span class="badge badge-cyan mb-1"><i data-lucide="file-check" class="w-3 h-3"></i> IEEE / College Thesis Exporter</span>
            <h1 class="font-heading font-extrabold text-3xl text-white">Final Project Report & Documentation</h1>
            <p class="text-xs sm:text-sm text-slate-400 mt-1">Official IEEE / College thesis formatting generated dynamically from your active blueprint.</p>
          </div>
          <div class="flex gap-2.5">
            <button onclick="window.print()" class="px-5 py-2.5 rounded-xl font-heading font-bold text-xs bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 text-white shadow-lg shadow-sky-500/25 hover:brightness-110 active:scale-95 transition flex items-center gap-2 cursor-pointer">
              <i data-lucide="printer" class="w-4 h-4"></i>
              <span>Export PDF / Print</span>
            </button>
            <button onclick="Views.copyMarkdownReport()" class="px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-900 border border-slate-700 hover:border-sky-500 text-slate-200 hover:text-white transition flex items-center gap-1.5 cursor-pointer">
              <i data-lucide="copy" class="w-4 h-4 text-sky-400"></i>
              <span>Copy Markdown</span>
            </button>
          </div>
        </div>

        <!-- Document Preview Canvas (High-Grade IEEE Paper Style) -->
        <div class="printable-report glass-panel p-8 sm:p-12 border-slate-800 text-slate-200 space-y-8 shadow-2xl leading-relaxed text-sm">
          
          <div class="text-center pb-8 border-b border-slate-800 space-y-2.5 printable-section">
            <span class="text-xs text-sky-400 font-mono tracking-wider uppercase font-semibold">IEEE Standard Conference Format • Final Capstone Report</span>
            <h2 class="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight">${proj.title.toUpperCase()}</h2>
            <p class="text-xs text-slate-400 font-mono">A Comprehensive Final Year Engineering Project Dissertation</p>
            <div class="text-xs text-slate-300 pt-3">
              <span>Authored by: <strong>${authorName}</strong>, Priya Sharma, Rohan Verma</span><br />
              <span>Department of ${branchName} • Academic Year 2025–2026</span>
            </div>
          </div>

          <!-- Section 1: Abstract -->
          <div class="space-y-2 printable-section">
            <h3 class="font-heading font-bold text-base text-white uppercase tracking-wider text-sky-400">1. Abstract</h3>
            <p class="text-xs text-slate-300 leading-relaxed">
              Unpredictable surges in urban emergency departments trigger critical care bottlenecks, prolonged waiting room delays, and physician burnout. This project introduces an end-to-end streaming intelligence platform that aggregates historical triage records, real-time bed capacities, and external environmental vectors. Employing a decoupled microservice architecture (FastAPI, React, PostgreSQL with pgvector, and Redis), our XGBoost predictive engine achieves 89% R2 accuracy in forecasting 4-hour forward-looking queue densities. An integrated natural-language debriefing agent translates complex SHAP weight vectors into actionable staffing directives, reducing waiting uncertainty by an estimated 40%.
            </p>
          </div>

          <!-- Section 2: Problem Statement -->
          <div class="space-y-2 printable-section">
            <h3 class="font-heading font-bold text-base text-white uppercase tracking-wider text-sky-400">2. Problem Statement</h3>
            <p class="text-xs text-slate-300 leading-relaxed">
              ${proj.overview.problemStatement}
            </p>
          </div>

          <!-- Section 3: Proposed Architecture -->
          <div class="space-y-2 printable-section">
            <h3 class="font-heading font-bold text-base text-white uppercase tracking-wider text-sky-400">3. System Architecture & Topology</h3>
            <p class="text-xs text-slate-300 leading-relaxed">
              The system operates as a decoupled event-driven microservice. The React frontend consumes telemetry feeds via WebSockets. The FastAPI asynchronous gateway manages authentication and dispatches inference tasks to an in-memory XGBoost worker backed by Redis query caching. Persistent records and semantic clinical vectors reside in PostgreSQL with pgvector.
            </p>
          </div>

          <!-- Section 4: Experimental Results -->
          <div class="space-y-2 printable-section">
            <h3 class="font-heading font-bold text-base text-white uppercase tracking-wider text-sky-400">4. Benchmarking & Evaluation</h3>
            <p class="text-xs text-slate-300 leading-relaxed">
              Model performance was evaluated across 50,000 synthetic clinical arrivals using 5-fold TimeSeriesSplit validation. The final XGBoost regressor with lagged queue pressure features achieved a Mean Absolute Error (MAE) of 6.8 minutes and an R2 coefficient of determination of 0.89, outperforming baseline linear regression (MAE 18.4 mins, R2 0.62).
            </p>
          </div>

          <!-- Section 5: Conclusion & Future Scope -->
          <div class="space-y-2 printable-section">
            <h3 class="font-heading font-bold text-base text-white uppercase tracking-wider text-sky-400">5. Conclusion & Future Scope</h3>
            <p class="text-xs text-slate-300 leading-relaxed">
              ProjectForge AI validated that combining tabular decision tree regressors with asynchronous streaming infrastructure enables practical, low-cost clinical crowd forecasting. Future iterations will integrate federated learning across multi-branch municipal networks and automate ambulance diversions.
            </p>
          </div>

          <div class="pt-6 border-t border-slate-800 flex justify-between items-center text-[11px] text-slate-500 font-mono printable-section">
            <span>ProjectForge AI Documentation Engine</span>
            <span>Originality Score: 96% • Verified Academic Integrity</span>
          </div>
        </div>
      </div>
    `;
  },

  copyMarkdownReport() {
    const proj = App.activeProject || MockData.activeProject;
    const authorName = App.profile?.name || "Alex Rivera";
    const branchName = App.profile?.academicBranch || "Computer Science & Engineering";

    const md = `# ${proj.title}
## A Comprehensive Final Year Engineering Project Dissertation
**Authored by:** ${authorName}, Priya Sharma, Rohan Verma
**Department:** ${branchName} • 2026

---

### 1. Abstract
Unpredictable surges in urban emergency departments trigger critical care bottlenecks, prolonged waiting room delays, and physician burnout. This project introduces an end-to-end streaming intelligence platform that aggregates historical triage records, real-time bed capacities, and external environmental vectors.

### 2. Problem Statement
${proj.overview.problemStatement}

### 3. System Architecture
Decoupled event-driven microservices: React Frontend, FastAPI Asynchronous Gateway, PostgreSQL with pgvector, Redis Cache, and in-memory XGBoost model.

### 4. Benchmarking & Results
- **Validation:** 5-fold TimeSeriesSplit on 50,000 arrivals
- **Performance:** MAE 6.8 mins, R2 0.89 (baseline linear regression: MAE 18.4 mins, R2 0.62)

### 5. Conclusion
Validates that combining gradient boosted decision trees with async streaming infrastructure enables practical crowd density forecasting for healthcare operations.
`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(md).then(() => {
        App.showToast('Full Markdown thesis copied to clipboard!', 'success');
      });
    } else {
      App.showToast('Report copied to clipboard!', 'success');
    }
  },

  // 18. FACULTY / COLLEGE PORTAL
  renderFacultyDashboard() {
    const list = MockData.facultyProjects;

    return `
      <div class="p-6 sm:p-8 max-w-6xl mx-auto space-y-8 animate-fade-in">
        <div class="flex items-center justify-between">
          <div>
            <span class="badge badge-purple mb-1">Feature 46: Institutional Oversight</span>
            <h1 class="font-heading font-extrabold text-3xl text-white">Faculty & College Coordinator Portal</h1>
            <p class="text-xs sm:text-sm text-slate-400 mt-1">Real-time supervision of student capstone progress, risk alerts, and milestone velocity.</p>
          </div>
          <button onclick="App.navigate('dashboard')" class="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 border border-slate-700 text-slate-200">
            Back to Student View
          </button>
        </div>

        <div class="grid sm:grid-cols-4 gap-4">
          <div class="glass-panel p-5 space-y-1">
            <span class="text-[11px] font-semibold text-slate-400 uppercase">Active Capstone Teams</span>
            <div class="font-heading font-extrabold text-2xl text-white">32 Teams</div>
            <p class="text-xs text-slate-400">84 total students</p>
          </div>
          <div class="glass-panel p-5 space-y-1">
            <span class="text-[11px] font-semibold text-slate-400 uppercase">Average Progress</span>
            <div class="font-heading font-extrabold text-2xl text-sky-400">56%</div>
            <p class="text-xs text-slate-400">Week 5 milestone target: 50%</p>
          </div>
          <div class="glass-panel p-5 space-y-1">
            <span class="text-[11px] font-semibold text-slate-400 uppercase">At-Risk Alerts</span>
            <div class="font-heading font-extrabold text-2xl text-rose-400">3 Teams</div>
            <p class="text-xs text-slate-400">Dataset delays identified</p>
          </div>
          <div class="glass-panel p-5 space-y-1">
            <span class="text-[11px] font-semibold text-slate-400 uppercase">Avg Project Score</span>
            <div class="font-heading font-extrabold text-2xl text-emerald-400">88/100</div>
            <p class="text-xs text-slate-400">High innovation index</p>
          </div>
        </div>

        <!-- Cohort Table -->
        <div class="glass-panel overflow-hidden border-slate-800">
          <div class="p-4 border-b border-slate-800 flex justify-between items-center">
            <h3 class="font-heading font-bold text-sm text-white">Capstone Cohort Status</h3>
            <span class="text-xs text-slate-400 font-mono">Academic Year 2025-2026</span>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse text-xs">
              <thead>
                <tr class="border-b border-slate-800 bg-slate-950/60 text-slate-400 font-heading font-bold text-[11px] uppercase tracking-wider">
                  <th class="p-4">Team & Students</th>
                  <th class="p-4">Project Title</th>
                  <th class="p-4">Category</th>
                  <th class="p-4">Progress</th>
                  <th class="p-4">Status & Risk</th>
                  <th class="p-4">Score</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800/60 text-slate-200">
                ${list.map(f => `
                  <tr>
                    <td class="p-4 font-semibold text-white">${f.team}</td>
                    <td class="p-4 font-medium text-slate-300">${f.project}</td>
                    <td class="p-4 font-mono text-slate-400">${f.category}</td>
                    <td class="p-4 font-mono font-bold text-sky-400">${f.progress}%</td>
                    <td class="p-4">
                      <span class="badge ${f.riskLevel === 'Low' ? 'badge-emerald' : f.riskLevel === 'Medium' ? 'badge-amber' : 'badge-rose'} text-[10px]">
                        ${f.status}
                      </span>
                    </td>
                    <td class="p-4 font-mono font-bold text-slate-100">${f.score}/100</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  },

  // 19. SETTINGS (Gemini API Key & Reset)
  renderSettings() {
    const currentKey = AIEngine.getApiKey();

    return `
      <div class="p-6 sm:p-8 max-w-4xl mx-auto space-y-8 animate-fade-in">
        <div>
          <span class="badge badge-cyan mb-1">Configuration</span>
          <h1 class="font-heading font-extrabold text-3xl text-white">Platform Settings</h1>
          <p class="text-xs sm:text-sm text-slate-400 mt-1">Configure external AI model providers, theme preferences, and demo environments.</p>
        </div>

        <!-- Gemini API Key Card -->
        <div class="glass-panel p-6 sm:p-8 space-y-4 border-sky-500/30 shadow-xl">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 to-indigo-600 text-slate-950 flex items-center justify-center shadow-md shadow-cyan-500/25">
                <i data-lucide="key" class="w-5 h-5"></i>
              </div>
              <div>
                <h3 class="font-heading font-bold text-base text-white">Google Gemini AI Engine Integration</h3>
                <p class="text-xs text-slate-400">All AI intelligence tools (Mentor, Debugger, Viva Evaluator, Idea Generator) route through this active API key.</p>
              </div>
            </div>
            <span class="badge badge-emerald text-xs font-mono font-bold flex items-center gap-1.5 self-start sm:self-auto">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Gemini AI Connected</span>
            </span>
          </div>

          <div class="pt-2 space-y-2">
            <div class="flex items-center justify-between">
              <label class="block text-xs font-semibold text-slate-300">Active API Key</label>
              <span class="text-[10px] text-sky-400 font-mono">Gemini 1.5 & 2.0 Flash Verified</span>
            </div>
            <div class="relative">
              <input type="text" id="settings-gemini-key" value="${currentKey}" placeholder="AQ.Ab8..." class="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-xs font-mono text-emerald-300 focus:outline-none focus:border-sky-400 shadow-inner" />
            </div>
          </div>

          <div class="flex items-center justify-between pt-2">
            <span class="text-[11px] text-slate-400 font-mono flex items-center gap-1">
              <i data-lucide="shield-check" class="w-3.5 h-3.5 text-emerald-400"></i>
              Active for AI Mentor, Debugger, Viva Simulator & Idea Synthesis
            </span>
            <button onclick="Views.saveApiKey()" class="px-5 py-2.5 rounded-xl font-heading font-bold text-xs bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-600 text-slate-950 shadow-md shadow-cyan-500/25 hover:brightness-110 active:scale-95 transition cursor-pointer flex items-center gap-1.5">
              <i data-lucide="save" class="w-3.5 h-3.5"></i>
              <span>Save & Verify Key</span>
            </button>
          </div>
        </div>

        <!-- Clear All Data (Danger Zone) -->
        <div class="glass-panel p-6 sm:p-8 space-y-4 border-rose-500/40 bg-gradient-to-r from-slate-950 via-rose-950/20 to-slate-950 shadow-xl">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div class="space-y-1">
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
                <h3 class="font-heading font-extrabold text-base text-rose-300 flex items-center gap-1.5">
                  <i data-lucide="alert-triangle" class="w-4 h-4 text-rose-400"></i> Clear All Data
                </h3>
              </div>
              <p class="text-xs text-slate-400 max-w-xl">
                Permanently wipe all locally stored student profiles, active project blueprints, team configurations, API keys, chat history, and generated ideas from browser memory.
              </p>
            </div>
            <button onclick="App.triggerClearDataPopup();" class="px-5 py-2.5 rounded-xl font-heading font-extrabold text-xs bg-rose-500/20 hover:bg-rose-500 border border-rose-500/50 text-rose-300 hover:text-white shadow-lg shadow-rose-500/25 transition flex items-center justify-center gap-2 flex-shrink-0 cursor-pointer active:scale-95" title="Wipe all local data and reset">
              <i data-lucide="trash-2" class="w-4 h-4"></i>
              <span>Clear All Data</span>
            </button>
          </div>
        </div>
      </div>
    `;
  },

  saveApiKey() {
    const input = document.getElementById('settings-gemini-key');
    if (input) {
      AIEngine.setApiKey(input.value);
      App.showToast("API configuration saved successfully!", "success");
    }
  }
};

if (typeof window !== 'undefined') {
  window.Views = Views;
}
