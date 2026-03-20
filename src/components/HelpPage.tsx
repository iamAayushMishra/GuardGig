import { 
  BookOpen, 
  HelpCircle, 
  ArrowLeft, 
  Shield, 
  Zap, 
  CloudRain, 
  Wind,
  CheckCircle2,
  ChevronRight,
  Info
} from 'lucide-react';
import { Button } from './UI';

export const HelpPage = ({ onBack }: any) => {
  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900 selection:bg-indigo-100">
      {/* Top Header */}
      <nav className="sticky top-0 bg-white/80 backdrop-blur-xl border-b border-zinc-100 z-50">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
           <button onClick={onBack} className="flex items-center gap-2 text-zinc-400 hover:text-black transition-colors font-bold text-sm">
             <ArrowLeft className="w-4 h-4" />
             Back to App
           </button>
           <div className="flex items-center gap-2">
             <Shield className="w-5 h-5 text-indigo-600" />
             <span className="font-bold tracking-tight">GuardGig Support</span>
           </div>
           <div className="w-20" /> {/* Spacer */}
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
           <h1 className="text-4xl font-black mb-4">How GuardGig Works</h1>
           <p className="text-zinc-500 font-medium">Understanding AI-powered parametric insurance in 5 minutes.</p>
        </div>

        <div className="space-y-20">
           {/* Section 1: The Concept */}
           <section>
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center"><BookOpen className="w-5 h-5" /></div>
                 <h2 className="text-2xl font-bold">1. Parametric Insurance</h2>
              </div>
              <div className="bg-zinc-50 rounded-[32px] p-8 space-y-4">
                 <p className="text-zinc-600 leading-relaxed font-medium">
                   Unlike traditional insurance, GuardGig doesn't require "damage assessment". We pay out based on **triggers**. 
                 </p>
                 <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-2xl border border-zinc-100">
                       <p className="text-xs font-bold text-zinc-400 uppercase mb-2">Traditional</p>
                       <p className="text-sm font-medium">Accident → Claim → Investigation → Payout (Weeks)</p>
                    </div>
                    <div className="bg-indigo-600 p-4 rounded-2xl text-white shadow-lg">
                       <p className="text-xs font-bold text-white/60 uppercase mb-2">GuardGig</p>
                       <p className="text-sm font-bold">Threshold Met → Automatic Verification → Payout (Minutes)</p>
                    </div>
                 </div>
              </div>
           </section>

           {/* Section 2: Triggers */}
           <section>
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-10 h-10 bg-red-50 text-red-600 rounded-xl flex items-center justify-center"><Zap className="w-5 h-5" /></div>
                 <h2 className="text-2xl font-bold">2. Trigger Types</h2>
              </div>
              <div className="space-y-4">
                {[
                  { icon: <Wind className="w-5 h-5 text-red-500" />, name: 'Air Quality (AQI)', desc: 'Payouts trigger when AQI exceeds 400 for more than 2 hours in your delivery zone.' },
                  { icon: <CloudRain className="w-5 h-5 text-blue-500" />, name: 'Heavy Rainfall', desc: 'Triggered when rainfall exceeds 20mm/hr, making gig work dangerous or impossible.' },
                  { icon: <Info className="w-5 h-5 text-zinc-500" />, name: 'Heatwave', desc: 'Protection against extreme temperatures above 45°C that affect worker health.' }
                ].map((t, i) => (
                  <div key={i} className="flex gap-6 p-6 border border-zinc-100 rounded-2xl hover:border-indigo-100 transition-colors">
                     <div className="flex-shrink-0">{t.icon}</div>
                     <div>
                        <h4 className="font-bold text-lg mb-1">{t.name}</h4>
                        <p className="text-sm text-zinc-500 leading-relaxed">{t.desc}</p>
                     </div>
                  </div>
                ))}
              </div>
           </section>

           {/* Section 3: The Flow */}
           <section>
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-10 h-10 bg-green-50 text-green-600 rounded-xl flex items-center justify-center"><CheckCircle2 className="w-5 h-5" /></div>
                 <h2 className="text-2xl font-bold">3. Your Daily Workflow</h2>
              </div>
              <div className="relative pl-8 border-l-2 border-zinc-100 space-y-12">
                 {[
                   { title: 'Subscribed Protection', desc: 'Your weekly premium is deducted from your linked wallet automatically.' },
                   { title: 'Real-time Tracking', desc: 'GuardGig monitors city-wide data oracles (CPCB for AQI, IMD for Rain).' },
                   { title: 'Instant Notification', desc: 'If a trigger is hit, you get an immediate WhatsApp alert.' },
                   { title: 'Direct Deposit', desc: 'No claims to file. Funds are moved to your GuardGig wallet instantly.' }
                 ].map((s, i) => (
                   <div key={i} className="relative">
                      <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-white border-4 border-indigo-600" />
                      <h4 className="font-bold mb-2">{s.title}</h4>
                      <p className="text-sm text-zinc-500 leading-relaxed">{s.desc}</p>
                   </div>
                 ))}
              </div>
           </section>

           {/* FAQ Section */}
           <section className="bg-zinc-900 rounded-[40px] p-10 text-white">
              <h3 className="text-2xl font-bold mb-8">Frequently Asked Questions</h3>
              <div className="space-y-6">
                 {[
                   { q: 'Is there a limit to payouts?', a: 'You can receive up to 3 payouts per month depending on your plan limit.' },
                   { q: 'How do you verify my location?', a: 'We use the delivery app sync and your registered pin code to track zones.' },
                   { q: 'Can I cancel anytime?', a: 'Yes, just disable auto-renew in your Policy settings.' }
                 ].map((faq, i) => (
                   <div key={i} className="pb-6 border-b border-white/10 last:border-0">
                      <p className="font-bold text-indigo-400 mb-2 truncate">Q: {faq.q}</p>
                      <p className="text-sm text-zinc-400 leading-relaxed">A: {faq.a}</p>
                   </div>
                 ))}
              </div>
           </section>
        </div>

        <div className="mt-24 text-center">
           <Button variant="primary" onClick={onBack} className="mx-auto h-14 px-12">
             Got it, take me back
           </Button>
        </div>
      </main>

      <footer className="py-12 border-t border-zinc-100 text-center text-zinc-400 text-xs font-bold uppercase tracking-widest">
        Need human help? <span className="text-indigo-600 cursor-pointer">Contact Support@guardgig.com</span>
      </footer>
    </div>
  );
};
