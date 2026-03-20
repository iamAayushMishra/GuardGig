import { useState, useEffect } from 'react';
import { 
  Shield, 
  Zap, 
  CloudRain, 
  Wind, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck,
  Layers,
  Cpu,
  Database,
  Globe,
  Mail,
  Smartphone,
  HelpCircle,
  TrendingDown,
  Lock,
  MessageCircle,
  ArrowBigUpDash
} from 'lucide-react';
import { Button, Modal } from './UI';

// --- Sections ---

const Navbar = ({ onGetStarted, onHelp }: any) => (
  <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-2xl z-50 border-b border-zinc-100 px-6">
    <div className="max-w-7xl mx-auto h-20 flex justify-between items-center">
      <div className="flex items-center gap-3 group cursor-pointer">
        <div className="w-10 h-10 bg-zinc-900 rounded-xl flex items-center justify-center text-white rotate-3 group-hover:rotate-0 transition-transform duration-500">
           <Shield className="w-6 h-6" />
        </div>
        <span className="text-2xl font-black tracking-tight text-zinc-900">GuardGig</span>
      </div>
      <div className="hidden md:flex items-center gap-12 text-[11px] font-black uppercase tracking-[0.2em] text-zinc-400">
        <a href="#how-it-works" className="hover:text-black transition-colors">How it works</a>
        <button onClick={onHelp} className="hover:text-black transition-colors">Help Center</button>
        <a href="#roadmap" className="hover:text-black transition-colors">Roadmap</a>
        <a href="#testimonials" className="hover:text-black transition-colors">Reviews</a>
      </div>
      <div className="flex items-center gap-4">
        <button onClick={onHelp} className="md:hidden text-zinc-400 px-2"><HelpCircle className="w-6 h-6" /></button>
        <Button variant="primary" onClick={onGetStarted} className="text-xs px-8 h-12">
            Get Started
        </Button>
      </div>
    </div>
  </nav>
);

const Hero = ({ onGetStarted }: any) => (
  <section className="pt-48 pb-32 px-6 overflow-hidden">
    <div className="max-w-6xl mx-auto text-center relative">
      <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-zinc-50 border border-zinc-200 text-zinc-500 text-[10px] font-black uppercase tracking-[0.3em] mb-10 animate-in fade-in slide-in-from-bottom-2 duration-700">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        Live Across 12 Indian Metropolitan Zones
      </div>
      <h1 className="text-6xl md:text-9xl font-black text-zinc-900 mb-10 tracking-[0.01em] leading-[0.9] animate-in fade-in slide-in-from-bottom-4 duration-700">
        Income <span className="text-zinc-400">Security</span><br />Built for <span className="text-indigo-600">Gig Work</span>.
      </h1>
      <p className="text-xl md:text-2xl text-zinc-500 mb-16 max-w-3xl mx-auto leading-relaxed font-medium animate-in fade-in slide-in-from-bottom-6 duration-700">
        The first AI-powered parametric insurance platform in India. Get paid automatically during weather peaks, outages, or pollution disruptions.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-in fade-in slide-in-from-bottom-8 duration-700">
        <Button onClick={onGetStarted} className="w-full sm:w-auto text-sm h-16 px-14 group">
          Join the Elite <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
        <Button variant="secondary" className="w-full sm:w-auto text-sm h-16 px-14">
          Interactive Case Study
        </Button>
      </div>
      
      <div className="mt-32 flex flex-wrap justify-center gap-16 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
         {['Uber', 'Zomato', 'Swiggy', 'Blinkit', 'Zepto'].map((partner) => (
           <span key={partner} className="text-2xl font-black tracking-tighter text-zinc-900">{partner}</span>
         ))}
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-[1200px] h-[600px] bg-indigo-500/5 rounded-full blur-[160px] opacity-50" />
    </div>
  </section>
);

const FeaturesGrid = () => (
  <section className="py-32 bg-white px-6">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-24">
         <h2 className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.3em] mb-4">Core Infrastructure</h2>
         <h3 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tight">Financial resilience, simplified.</h3>
      </div>
      <div className="grid lg:grid-cols-3 gap-8">
        {[
          {
            icon: <Wind className="w-8 h-8 text-indigo-600" />,
            title: "Zone-Based Triggers",
            desc: "Hyper-local monitoring of AQI and precipitation levels across your delivery radii.",
            meta: "Data via CPCB & IMD Oracles"
          },
          {
            icon: <TrendingDown className="w-8 h-8 text-green-500" />,
            title: "Income Buffer",
            desc: "Don't lose a day's earnings to a heatwave. We cover the gap instantly.",
            meta: "Up to ₹2,500/peak"
          },
          {
            icon: <Lock className="w-8 h-8 text-zinc-400" />,
            title: "Zero-Touch Claims",
            desc: "No paperwork. Our smart contract verifies the trigger and sends your payout.",
            meta: "Powered by AI Engine"
          }
        ].map((f, i) => (
          <div key={i} className="group p-12 rounded-[40px] bg-zinc-50 border border-zinc-100 hover:bg-white hover:border-indigo-100 hover:shadow-2xl transition-all duration-500">
            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                {f.icon}
            </div>
            <h4 className="text-2xl font-black text-zinc-900 mb-4 tracking-tight">{f.title}</h4>
            <p className="text-zinc-500 leading-relaxed font-medium mb-8">{f.desc}</p>
            <div className="pt-6 border-t border-zinc-100 text-[10px] font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-2">
               <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
               {f.meta}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
    <section id="testimonials" className="py-32 px-6 bg-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-24">
           <h2 className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em] mb-4">Voice of the Fleet</h2>
           <h3 className="text-4xl md:text-6xl font-black text-white tracking-tight">Used by 50,000+ Partners</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {[
             { name: 'Arjun K.', role: 'Zomato Delhi', text: '“GuardGig paid out the same afternoon Delhi hit hazardous AQI levels. I didnt even check my phone until the money was in my bank.”' },
             { name: 'Priya S.', role: 'Swiggy Mumbai', text: '“Monsoon rains used to mean zero income. Now, it means a triggered payout that covers my day. Essential for any gig worker.”' },
             { name: 'Rahul V.', role: 'Zepto Delivery', text: '“Minimalistic, professional, and actually works. The best financial tool I have seen for Indian workers.”' }
           ].map((t, i) => (
             <div key={i} className="p-10 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-xl group hover:bg-white/10 transition-colors">
                <div className="flex gap-1 text-indigo-400 mb-8">
                   {[...Array(5)].map((_, idx) => <Zap key={idx} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-white text-lg font-medium leading-relaxed mb-10">{t.text}</p>
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center font-black text-white">{t.name[0]}</div>
                   <div>
                      <p className="font-bold text-white tracking-tight">{t.name}</p>
                      <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">{t.role}</p>
                   </div>
                </div>
             </div>
           ))}
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[160px]" />
      </div>
    </section>
);

const LiveSimulation = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [val, setVal] = useState(250);

  const handleSimulate = () => {
    setLoading(true);
    setSuccess(false);
    let current = 250;
    const interval = setInterval(() => {
        current += Math.floor(Math.random() * 20) + 10;
        if (current >= 420) {
            setVal(420);
            setLoading(false);
            setSuccess(true);
            clearInterval(interval);
        } else {
            setVal(current);
        }
    }, 100);
  };

  return (
    <section className="py-48 px-6 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
         <div className="lg:w-1/2 space-y-10">
            <h2 className="text-6xl font-black text-zinc-900 tracking-tight leading-tight">Trust but <br /> <span className="text-indigo-600">Verify</span>.</h2>
            <p className="text-xl text-zinc-500 font-medium leading-relaxed">
              Don't take our word for it. Try our simulation engine connected to a mock Delhi pollution oracle. Trigger a spike and watch how we handle the rest.
            </p>
            <div className="space-y-6">
               <div className="flex items-center gap-6 p-6 bg-white border border-zinc-100 rounded-[28px] shadow-sm">
                  <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600"><Globe className="w-6 h-6" /></div>
                  <div><p className="font-bold">Real-time Data</p><p className="text-xs text-zinc-400 font-medium tracking-tight">Oracle Node: 110001 (Delhi)</p></div>
               </div>
               <div className="flex items-center gap-6 p-6 bg-white border border-zinc-100 rounded-[28px] shadow-sm">
                  <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-green-600"><Zap className="w-6 h-6" /></div>
                  <div><p className="font-bold">Instant Payout</p><p className="text-xs text-zinc-400 font-medium tracking-tight">Settlement Layer: GuardPay UPI</p></div>
               </div>
            </div>
            <Button 
                onClick={handleSimulate} 
                disabled={loading}
                className="w-full h-16 group"
            >
               {loading ? 'Verifying Spikes...' : 'Run Simulation'}
               <ArrowBigUpDash className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </Button>
         </div>

         <div className="lg:w-1/2 relative">
            <div className="bg-white rounded-[48px] p-12 shadow-2xl border border-zinc-100 relative group transition-all duration-700 hover:scale-[1.02]">
                <div className="flex flex-col gap-12">
                   <div className="flex justify-between items-center pb-8 border-b border-zinc-50">
                      <div>
                        <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1">Index Variable</p>
                        <h4 className="text-2xl font-black tracking-tight text-zinc-900">AQI Intensity</h4>
                      </div>
                      <div className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-sm ${val > 400 ? 'bg-red-50 text-red-600 border border-red-100 animate-pulse' : 'bg-zinc-50 text-zinc-400 border border-zinc-100'}`}>
                         {val > 400 ? 'Critical Event' : 'Stable Status'}
                      </div>
                   </div>

                   <div className="space-y-6">
                      <div className="flex justify-between items-end">
                         <span className="text-5xl md:text-7xl font-black tracking-tighter text-zinc-900">{val}</span>
                         <span className="text-xs font-bold text-zinc-400 mb-2 uppercase tracking-widest">Points</span>
                      </div>
                      <div className="w-full h-4 bg-zinc-50 rounded-full border border-zinc-100 overflow-hidden">
                         <div className={`h-full transition-all duration-500 ease-out shadow-sm ${val > 400 ? 'bg-red-500' : 'bg-zinc-900'}`} style={{ width: `${(val/500)*100}%` }} />
                      </div>
                   </div>

                   {success && (
                     <div className="p-6 bg-indigo-600 rounded-3xl text-white animate-in zoom-in-95 duration-500 shadow-xl shadow-indigo-200">
                        <div className="flex items-center gap-4">
                           <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center"><CheckCircle2 className="w-5 h-5" /></div>
                           <div>
                              <p className="font-bold text-sm tracking-tight">Settlement Approved</p>
                              <p className="text-[10px] font-medium text-white/70 uppercase tracking-widest">₹800 Credited to Wallet</p>
                           </div>
                        </div>
                     </div>
                   )}
                </div>
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-600/5 rounded-full blur-[60px]" />
         </div>
      </div>
    </section>
  );
};

const FinalCTA = ({ onGetStarted }: any) => (
  <section className="py-48 px-6 bg-white overflow-hidden relative">
     <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-6xl md:text-8xl font-black text-zinc-900 mb-12 tracking-tighter">Your income, <br /> <span className="text-zinc-400 italic">fully protected</span>.</h2>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
           <Button onClick={onGetStarted} className="h-16 px-16 text-lg">Start Protection</Button>
           <Button variant="secondary" className="h-16 px-16 text-lg">Talk to Support</Button>
        </div>
        <p className="mt-12 text-zinc-400 text-sm font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3">
           <MessageCircle className="w-4 h-4" />
           Average Support Response: 2 Minutes
        </p>
     </div>
     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[1000px] h-[600px] bg-indigo-500/5 rounded-full blur-[140px]" />
  </section>
);

const Footer = () => (
    <footer className="py-24 px-6 border-t border-zinc-100 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-16 mb-24">
           <div className="col-span-2">
              <div className="flex items-center gap-3 mb-8">
                 <Shield className="w-8 h-8 text-zinc-900" />
                 <span className="text-2xl font-black tracking-tight text-zinc-900">GuardGig</span>
              </div>
              <p className="text-zinc-500 text-lg font-medium leading-relaxed max-w-sm">
                Empowering India's gig economy with transparent, ultra-fast parametric insurance.
              </p>
           </div>
           <div>
              <p className="text-[10px] font-black text-zinc-300 uppercase tracking-[0.3em] mb-8">Platform</p>
              <ul className="space-y-4 text-sm font-bold text-zinc-500">
                <li><a href="#" className="hover:text-black transition-colors">Triggers</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Settlements</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Privacy</a></li>
              </ul>
           </div>
           <div>
              <p className="text-[10px] font-black text-zinc-300 uppercase tracking-[0.3em] mb-8">Support</p>
              <ul className="space-y-4 text-sm font-bold text-zinc-500">
                <li><a href="#" className="hover:text-black transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-black transition-colors">API Docs</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Contact</a></li>
              </ul>
           </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-zinc-50 gap-8">
           <p className="text-zinc-400 text-[10px] font-black uppercase tracking-[0.2em]">© 2026 GuardGig Insurance Systems Pvt Ltd.</p>
           <div className="flex gap-10 grayscale opacity-40">
              <span className="text-xs font-bold text-zinc-900">ISO 27001</span>
              <span className="text-xs font-bold text-zinc-900">SOC2 Type II</span>
           </div>
        </div>
      </div>
    </footer>
);

export const LandingPage = ({ onLogin, onHelp }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => {
        onLogin(); // Redirect to dashboard
        setIsModalOpen(false);
        setFormStatus('idle');
      }, 1500);
    }, 1500);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="bg-white min-h-screen text-zinc-900 font-sans selection:bg-indigo-100 selection:text-indigo-900 scroll-smooth leading-tight">
      <Navbar onGetStarted={handleOpenModal} onHelp={onHelp} />
      
      <main>
        <Hero onGetStarted={handleOpenModal} />
        <FeaturesGrid />
        <Testimonials />
        <LiveSimulation />
        <FinalCTA onGetStarted={handleOpenModal} />
      </main>

      <Footer />

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => {
          setIsModalOpen(false);
          setFormStatus('idle');
        }} 
        title={formStatus === 'success' ? 'Identity Verified ✨' : 'Join the Elite Fleet'}
      >
        {formStatus === 'success' ? (
          <div className="text-center py-6 animate-in fade-in duration-500">
            <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <p className="text-zinc-500 mb-10 leading-relaxed font-bold">
              Verification complete. Booting your hyper-local dashboard for South Extension, Delhi.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-3">
              <label className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em] pl-1">Full Identity Name</label>
              <div className="relative group">
                <input required type="text" placeholder="Utpal Mani" className="w-full h-14 bg-zinc-50 border border-zinc-100 rounded-2xl px-12 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-black/5 focus:bg-white focus:border-indigo-100 transition-all" />
                <Mail className="absolute left-4 top-4.5 w-4.5 h-4.5 text-zinc-300 group-focus-within:text-black transition-colors" />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em] pl-1">Worker Mobile (linked to UPI)</label>
              <div className="relative group">
                <input required type="tel" placeholder="+91 98765 43210" className="w-full h-14 bg-zinc-50 border border-zinc-100 rounded-2xl px-12 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-black/5 focus:bg-white focus:border-indigo-100 transition-all" />
                <Smartphone className="absolute left-4 top-4.5 w-4.5 h-4.5 text-zinc-300 group-focus-within:text-black transition-colors" />
              </div>
            </div>
            <Button disabled={formStatus === 'submitting'} className="w-full h-14 mt-4">
              {formStatus === 'submitting' ? 'Linking Oracles...' : 'Secure Early Access'}
            </Button>
            <div className="pt-6 text-center">
               <button type="button" onClick={onLogin} className="text-[10px] font-black uppercase tracking-widest text-indigo-600 hover:text-black transition-colors">Already registered? Log in to App</button>
            </div>
          </form>
        )}
      </Modal>
    </div>
  );
};
