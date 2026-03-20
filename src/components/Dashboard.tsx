import { useState, useEffect, useCallback } from 'react';
import { 
  Shield, 
  Zap, 
  CloudRain, 
  Wind, 
  CheckCircle2, 
  Globe, 
  HelpCircle, 
  TrendingDown, 
  Activity,
  Bell,
  Calendar,
  AlertCircle,
  CreditCard,
  Search,
  ChevronRight,
  Layers,
  LogOut
} from 'lucide-react';
import { Button } from './UI';

// --- Feature Views ---

const Overview = ({ aqi, rain, isSimulating, onSimulateAQI, onSimulateRain }: any) => (
  <div className="space-y-8 animate-in fade-in duration-500">
    <div className="grid lg:grid-cols-3 gap-8">
      {/* Trigger Status */}
      <div className="lg:col-span-2 bg-white rounded-[40px] p-10 border border-zinc-100 shadow-sm transition-all hover:shadow-xl hover:border-indigo-100/50 group">
        <div className="flex justify-between items-start mb-10">
          <div>
            <h3 className="text-2xl font-black tracking-tight">Environmental Monitor</h3>
            <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-[0.2em] mt-2">Active Node: New Delhi-01 • South Ext.</p>
          </div>
          <div className="flex gap-2">
              <Button 
                onClick={onSimulateAQI}
                disabled={!!isSimulating}
                variant={aqi > 400 ? 'danger' : 'secondary'}
                className="text-[10px] h-9 px-4 font-black uppercase tracking-widest"
              >
                {isSimulating === 'aqi' ? 'Spiking...' : 'Simulate AQI'}
              </Button>
              <Button 
                onClick={onSimulateRain}
                disabled={!!isSimulating}
                variant={rain > 20 ? 'indigo' : 'secondary'}
                className="text-[10px] h-9 px-4 font-black uppercase tracking-widest"
              >
                {isSimulating === 'rain' ? 'Raining...' : 'Simulate Rain'}
              </Button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          {/* AQI Module */}
          <div className="bg-zinc-50 rounded-3xl p-8 relative overflow-hidden group/card border border-transparent hover:border-zinc-200 transition-all">
            <div className="flex justify-between items-start mb-6 relative z-10">
               <div>
                 <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block mb-2">AQI Index</span>
                 <span className={`text-5xl font-black tracking-tighter transition-colors ${aqi > 400 ? 'text-red-500' : 'text-zinc-900'}`}>{aqi}</span>
               </div>
               <div className={`p-2 rounded-xl border ${aqi > 400 ? 'bg-red-50 border-red-200 text-red-500 animate-pulse' : 'bg-white border-zinc-200 text-zinc-400'}`}>
                 <Wind className="w-5 h-5" />
               </div>
            </div>
            <div className="w-full bg-zinc-200 h-2 rounded-full relative z-10 overflow-hidden">
               <div className={`h-full transition-all duration-700 ease-out ${aqi > 400 ? 'bg-red-500' : 'bg-black'}`} style={{ width: `${(aqi / 500) * 100}%` }} />
            </div>
            <div className="mt-4 flex justify-between text-[10px] font-bold uppercase tracking-tighter text-zinc-400">
               <span>PPM 2.5</span>
               <span>Goal: &lt; 50</span>
            </div>
          </div>

          {/* Rain Module */}
          <div className="bg-zinc-50 rounded-3xl p-8 relative overflow-hidden group/card border border-transparent hover:border-zinc-200 transition-all">
            <div className="flex justify-between items-start mb-6 relative z-10">
               <div>
                 <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block mb-2">Rain Intensity</span>
                 <span className={`text-5xl font-black tracking-tighter transition-colors ${rain > 20 ? 'text-indigo-600' : 'text-zinc-900'}`}>{rain}<span className="text-xl">mm/h</span></span>
               </div>
               <div className={`p-2 rounded-xl border ${rain > 20 ? 'bg-indigo-50 border-indigo-200 text-indigo-600 animate-bounce' : 'bg-white border-zinc-200 text-zinc-400'}`}>
                 <CloudRain className="w-5 h-5" />
               </div>
            </div>
            <div className="w-full bg-zinc-200 h-2 rounded-full relative z-10 overflow-hidden">
               <div className={`h-full transition-all duration-700 ease-out ${rain > 20 ? 'bg-indigo-600' : 'bg-black'}`} style={{ width: `${(rain / 40) * 100}%` }} />
            </div>
            <div className="mt-4 flex justify-between text-[10px] font-bold uppercase tracking-tighter text-zinc-400">
               <span>Precipitation</span>
               <span>Threshold: 20mm</span>
            </div>
          </div>
        </div>

        {/* Status Alert */}
        <div className={`mt-10 p-6 rounded-2xl flex items-center gap-4 transition-all duration-500 ${isSimulating ? 'bg-indigo-50 border border-indigo-100 translate-y-0 opacity-100' : 'bg-zinc-50 border border-transparent opacity-50 translate-y-2'}`}>
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isSimulating ? 'bg-indigo-600 text-white animate-pulse' : 'bg-zinc-200 text-zinc-400'}`}>
                <Activity className="w-6 h-6" />
            </div>
            <div>
                <p className="text-sm font-bold">{isSimulating ? 'Verification in progress...' : 'Monitoring environment oracles'}</p>
                <p className="text-xs text-zinc-500 mt-0.5">Automated settlement system is {isSimulating ? 'active and verifying trigger conditions' : 'standing by'}.</p>
            </div>
        </div>
      </div>

      {/* Wallet Card */}
      <div className="bg-zinc-900 rounded-[40px] p-10 text-white relative overflow-hidden flex flex-col justify-between shadow-2xl border border-white/5">
         <div className="relative z-10">
           <div className="flex justify-between items-center mb-10">
             <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-xl">
                <Shield className="w-6 h-6 text-indigo-400" />
             </div>
             <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-zinc-900 bg-zinc-700" />
                <div className="w-8 h-8 rounded-full border-2 border-zinc-900 bg-zinc-600" />
                <div className="w-8 h-8 rounded-full border-2 border-zinc-900 bg-indigo-600 flex items-center justify-center text-[10px] font-bold">+2</div>
             </div>
           </div>
           <p className="text-xs font-bold text-zinc-500 uppercase tracking-[0.2em] mb-4">Insured Surplus</p>
           <h4 className="text-5xl font-black tracking-tighter mb-2">₹14,500</h4>
           <div className="flex items-center gap-2 text-green-400 text-xs font-bold">
              <TrendingDown className="w-3 h-3 rotate-180" />
              <span>+₹2,400 this month</span>
           </div>
         </div>
         <div className="relative z-10 space-y-4">
            <Button variant="secondary" className="w-full h-14 text-sm font-black">Withdraw Funds</Button>
            <p className="text-[10px] text-center text-zinc-500 font-bold uppercase tracking-widest">Next Payout: Instant</p>
         </div>
         <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full -mr-40 -mt-40 blur-[100px]" />
         <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-400/5 rounded-full -ml-20 -mb-20 blur-[60px]" />
      </div>
    </div>

    {/* Quick Stats */}
    <div className="grid md:grid-cols-4 gap-6">
       {[
         { label: 'Active Alerts', val: '0', icon: <Bell className="w-4 h-4" />, color: 'text-zinc-400' },
         { label: 'City Coverage', val: 'Delhi NCR', icon: <Calendar className="w-4 h-4" />, color: 'text-indigo-600' },
         { label: 'Next Premium', val: 'Dec 21', icon: <AlertCircle className="w-4 h-4" />, color: 'text-amber-600' },
         { label: 'Status', val: 'Premium', icon: <Activity className="w-4 h-4" />, color: 'text-green-500' },
       ].map((s, i) => (
         <div key={i} className="bg-white p-6 rounded-3xl border border-zinc-50 shadow-sm flex items-center justify-between group hover:border-zinc-200 transition-colors">
            <div>
               <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">{s.label}</p>
               <p className="text-sm font-black tracking-tight">{s.val}</p>
            </div>
            <div className={`p-2 rounded-xl bg-zinc-50 ${s.color} group-hover:bg-zinc-100 transition-colors`}>{s.icon}</div>
         </div>
       ))}
    </div>
  </div>
);

const Earnings = () => (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-500">
        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-[40px] border border-zinc-100 shadow-sm">
                <div className="flex justify-between items-center mb-10">
                    <h3 className="text-2xl font-black tracking-tight flex items-center gap-3">
                        <TrendingDown className="w-6 h-6 text-red-500" />
                        Protection Value
                    </h3>
                    <div className="flex bg-zinc-50 p-1 rounded-xl">
                       <button className="px-3 py-1.5 text-[10px] font-bold uppercase bg-white border border-zinc-100 rounded-lg shadow-sm">Monthly</button>
                       <button className="px-3 py-1.5 text-[10px] font-bold uppercase text-zinc-400">Yearly</button>
                    </div>
                </div>
                <div className="space-y-10">
                    <div className="flex justify-between items-end">
                        <div>
                             <span className="text-zinc-400 text-xs font-bold uppercase tracking-widest block mb-1">Protected Income</span>
                             <span className="text-4xl font-black text-zinc-900 tracking-tight">₹2,40,000</span>
                        </div>
                        <div className="text-right">
                             <span className="text-[10px] font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-full uppercase tracking-tighter mb-1 inline-block">+12% vs LY</span>
                        </div>
                    </div>
                    <div className="h-48 flex items-end gap-3 px-2">
                        {[40, 70, 45, 90, 65, 80, 55, 60, 85, 40].map((h, i) => (
                            <div key={i} className="flex-1 bg-zinc-100 rounded-t-xl relative group cursor-pointer overflow-hidden">
                                <div className="absolute bottom-0 w-full bg-indigo-500/10 group-hover:bg-indigo-600 transition-all duration-300" style={{ height: `${h}%` }} />
                                {h > 80 && <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-amber-400 rounded-full border border-white" />}
                            </div>
                        ))}
                    </div>
                    <p className="text-[10px] text-zinc-400 text-center font-bold uppercase tracking-[0.3em]">Trigger instances marked in amber</p>
                </div>
            </div>
            <div className="bg-zinc-900 p-10 rounded-[40px] text-white shadow-2xl relative overflow-hidden">
                <h3 className="text-2xl font-black tracking-tight mb-8 relative z-10 flex items-center gap-3">
                    <CreditCard className="w-6 h-6 text-indigo-400" />
                    Efficiency Matrix
                </h3>
                <div className="space-y-10 relative z-10">
                    <div className="p-8 bg-white/5 border border-white/10 rounded-[32px] backdrop-blur-xl group hover:bg-white/10 transition-colors">
                        <div className="flex justify-between text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-4">
                            <span>Income Recovery on Premium</span>
                            <span className="text-white">4.8x</span>
                        </div>
                        <p className="text-lg font-bold leading-tight">Every ₹1 of premium protected ₹4.80 during critical weather windows.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                       <div className="p-6 bg-white/5 border border-white/5 rounded-3xl">
                          <p className="text-[10px] font-bold text-zinc-500 uppercase mb-2">Total Premiums Paid</p>
                          <p className="text-2xl font-black">₹42,800</p>
                       </div>
                       <div className="p-6 bg-white/5 border border-white/5 rounded-3xl">
                          <p className="text-[10px] font-bold text-zinc-500 uppercase mb-2">Loss Prevention</p>
                          <p className="text-2xl font-black text-indigo-400">92%</p>
                       </div>
                    </div>
                </div>
                <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-indigo-600/20 rounded-full blur-[80px]" />
            </div>
        </div>
    </div>
);

const Payouts = ({ payouts, isSimulating }: any) => (
    <section className="bg-white rounded-[40px] p-10 border border-zinc-100 shadow-sm animate-in fade-in duration-500 hover:shadow-xl transition-shadow">
        <div className="flex justify-between items-center mb-10">
            <div>
                <h3 className="text-2xl font-black tracking-tight">Settlement Ledger</h3>
                <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest mt-1">Direct Bank Transfers • Encrypted</p>
            </div>
            <Button variant="secondary" className="h-10 px-6 text-[10px] font-black uppercase tracking-widest group">
                <Search className="w-3.5 h-3.5 mr-2 text-zinc-400 group-hover:text-black" />
                Filter Ledger
            </Button>
        </div>
        <div className="overflow-x-auto">
            <table className="w-full text-left">
            <thead>
                <tr className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] border-b border-zinc-50">
                <th className="pb-6 px-4">Timestamp</th>
                <th className="pb-6">Trigger Event</th>
                <th className="pb-6">Reference ID</th>
                <th className="pb-6 text-right px-4">Settlement Amount</th>
                </tr>
            </thead>
            <tbody className="text-sm">
                {payouts.map((row: any, i: number) => (
                <tr key={row.id} className={`group hover:bg-zinc-50 transition-all cursor-default ${i === 0 && isSimulating ? 'opacity-30 blur-[2px]' : 'opacity-100'}`}>
                    <td className="py-6 px-4">
                       <p className="font-bold text-zinc-900">{row.date}</p>
                       <p className="text-[10px] text-zinc-400 font-medium">14:00 IST</p>
                    </td>
                    <td className="py-6">
                       <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-tighter ${row.trigger.includes('AQI') ? 'bg-red-50 text-red-600 border border-red-100' : 'bg-indigo-50 text-indigo-600 border border-indigo-100'}`}>
                         {row.trigger.includes('AQI') ? <Wind className="w-3.5 h-3.5" /> : <CloudRain className="w-3.5 h-3.5" />}
                         {row.trigger}
                       </span>
                    </td>
                    <td className="py-6 font-mono text-xs text-zinc-400 uppercase">{row.id}</td>
                    <td className="py-6 text-right px-4">
                       <div className="flex flex-col items-end">
                          <span className="font-black text-lg text-zinc-900">{row.amount}</span>
                          <span className="text-[10px] font-bold text-green-500 uppercase flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Settled</span>
                       </div>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
    </section>
);

const Settings = () => (
    <div className="max-w-3xl space-y-8 animate-in fade-in duration-500">
        <div className="bg-white border border-zinc-100 rounded-[40px] p-10 shadow-sm">
            <h3 className="text-2xl font-black mb-10 tracking-tight">Policy Management</h3>
            <div className="space-y-2">
                {[
                    { label: 'Primary Coverage Zone', val: 'Delhi NCR • Zone 1', icon: <Globe className="w-4 h-4" /> },
                    { label: 'AQI Payout Threshold', val: '400 Index Points • Extreme', icon: <Wind className="w-4 h-4" /> },
                    { label: 'Rain Payout Threshold', val: '20mm per 1 hour', icon: <CloudRain className="w-4 h-4" /> },
                    { label: 'Base Weekly Premium', val: '₹65.00', icon: <CreditCard className="w-4 h-4" /> },
                    { label: 'Renewal Method', val: 'Auto-Debit from Wallet', icon: <Activity className="w-4 h-4" /> }
                ].map((d, i) => (
                    <div key={i} className="flex justify-between py-6 border-b border-zinc-50 last:border-0 group cursor-pointer hover:bg-zinc-50/50 px-4 -mx-4 rounded-2xl transition-all">
                        <span className="text-sm font-bold text-zinc-400 flex items-center gap-3 transition-colors group-hover:text-zinc-600">
                           <div className="p-1.5 bg-zinc-50 rounded-lg group-hover:bg-white transition-colors">{d.icon}</div>
                           {d.label}
                        </span>
                        <span className="text-sm font-black text-zinc-900 flex items-center gap-3">
                            {d.val}
                            <ChevronRight className="w-4 h-4 text-zinc-200 group-hover:text-black group-hover:translate-x-1 transition-all" />
                        </span>
                    </div>
                ))}
            </div>
        </div>
        <div className="p-8 bg-zinc-900 rounded-[32px] flex items-center justify-between text-white border border-white/5">
            <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-xl border border-white/10">
                   <Shield className="w-7 h-7 text-indigo-400" />
                </div>
                <div>
                    <h4 className="font-bold text-lg mb-0.5 tracking-tight text-white">Advanced Security</h4>
                    <p className="text-zinc-500 text-xs font-medium uppercase tracking-widest">Biometric Verification Enabled</p>
                </div>
            </div>
        </div>
    </div>
);

// --- Dashboard Main ---

export const Dashboard = ({ onLogout, onHelp }: any) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [aqi, setAqi] = useState(140);
  const [rain, setRain] = useState(0.8);
  const [isSimulating, setIsSimulating] = useState<string | null>(null);
  const [payouts, setPayouts] = useState([
    { date: 'Dec 14, 2025', trigger: 'AQI Level > 400', id: 'TXN_48201', amount: '₹1,200', status: 'Settled' },
    { date: 'Nov 28, 2025', trigger: 'Rainfall > 20mm', id: 'TXN_39102', amount: '₹850', status: 'Settled' },
    { date: 'Oct 15, 2025', trigger: 'AQI Level > 400', id: 'TXN_22109', amount: '₹1,400', status: 'Settled' }
  ]);

  // Handle Help Navigation
  useEffect(() => {
    if (activeTab === 'help' && onHelp) {
       onHelp();
       setActiveTab('overview');
    }
  }, [activeTab, onHelp]);

  const handlePayoutTrigger = useCallback((type: string) => {
    setIsSimulating(null);
    const newPayout = {
        date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
        trigger: type,
        id: `TXN_${Math.floor(Math.random() * 90000) + 10000}`,
        amount: `₹${Math.floor(Math.random() * 500) + 700}`,
        status: 'Settled'
    };
    setPayouts(prev => [newPayout, ...prev]);
  }, []);

  // Simulation Logic
  useEffect(() => {
    let interval: any;
    if (isSimulating === 'aqi') {
      interval = setInterval(() => {
        setAqi(prev => {
          if (prev >= 420) {
            handlePayoutTrigger('AQI Status Spike');
            return 420;
          }
          return prev + Math.floor(Math.random() * 25) + 15;
        });
      }, 400);
    } else if (isSimulating === 'rain') {
        interval = setInterval(() => {
          setRain(prev => {
            if (prev >= 25) {
              handlePayoutTrigger('Precipitation Flood');
              return 25;
            }
            return Number((prev + Math.random() * 2 + 1).toFixed(1));
          });
        }, 400);
    } else {
      const timer = setTimeout(() => {
          setAqi(140 + Math.floor(Math.random() * 10));
          setRain(0.5 + Math.random() * 0.5);
      }, 5000);
      return () => clearTimeout(timer);
    }
    return () => clearInterval(interval);
  }, [isSimulating, handlePayoutTrigger]);

  const navItems = [
    { id: 'overview', icon: <Layers className="w-4 h-4" />, label: 'Overview' },
    { id: 'earnings', icon: <TrendingDown className="w-4 h-4" />, label: 'Earnings' },
    { id: 'payouts', icon: <Zap className="w-4 h-4" />, label: 'Payouts' },
    { id: 'policy', icon: <Shield className="w-4 h-4" />, label: 'Policy' },
    { id: 'help', icon: <HelpCircle className="w-4 h-4" />, label: 'Help Center' },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col md:flex-row font-sans text-zinc-900 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Side Navigation */}
      <aside className="w-full md:w-80 bg-white border-r border-zinc-100 p-10 flex flex-col justify-between z-10">
        <div className="space-y-16">
          <div className="flex items-center gap-4 px-2 group cursor-pointer" onClick={() => setActiveTab('overview')}>
            <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center text-white rotate-3 group-hover:rotate-0 transition-all duration-500 shadow-xl shadow-zinc-200">
                <Shield className="w-7 h-7" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-zinc-900">GuardGig</span>
          </div>
          
          <nav className="space-y-3">
            <p className="px-5 text-[10px] font-black text-zinc-300 uppercase tracking-[0.3em] mb-6">Navigation</p>
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-5 px-5 py-4 rounded-[20px] text-sm font-bold transition-all group ${
                  activeTab === item.id 
                    ? 'bg-zinc-900 text-white shadow-2xl shadow-zinc-200 translate-x-2' 
                    : 'text-zinc-400 hover:bg-zinc-50 hover:text-zinc-900 border border-transparent hover:border-zinc-100'
                }`}
              >
                <div className={`${activeTab === item.id ? 'text-indigo-400' : 'text-zinc-300 group-hover:text-black'} transition-colors`}>{item.icon}</div>
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="pt-10 border-t border-zinc-50 space-y-8">
            <div className="bg-zinc-50/50 p-6 rounded-[24px] border border-zinc-100 transition-all hover:bg-zinc-50 hover:shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full border-2 border-white shadow-sm overflow-hidden bg-white">
                       <div className="w-full h-full bg-gradient-to-br from-indigo-50 to-indigo-200 flex items-center justify-center text-indigo-600 font-black text-lg">UM</div>
                    </div>
                    <div>
                        <p className="text-sm font-black tracking-tight">Utpal Mani</p>
                        <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mt-0.5">Gold Protection</p>
                    </div>
                </div>
                <button onClick={onLogout} className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-black text-red-500 hover:bg-red-50 border border-transparent hover:border-red-100 transition-all group">
                    <LogOut className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Sign Out
                </button>
            </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 md:p-16 overflow-y-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-20">
          <div className="animate-in slide-in-from-left-6 duration-700">
            <h2 className="text-5xl font-black tracking-tight text-zinc-900 leading-tight">
                {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h2>
            <div className="flex items-center gap-2 mt-4">
                <div className="h-1 w-8 bg-black rounded-full" />
                <p className="text-zinc-400 text-sm font-bold uppercase tracking-widest">Platform Core • <span className="text-black">{activeTab}</span></p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 animate-in fade-in slide-in-from-right-6 duration-700">
              <div className="p-2 px-5 bg-white border border-zinc-100 rounded-full flex items-center gap-3 shadow-sm group cursor-pointer hover:border-green-200 transition-colors">
                 <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                 <span className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-500 group-hover:text-black">Nodes Online</span>
              </div>
              <button className="w-12 h-12 bg-white border border-zinc-100 rounded-full flex items-center justify-center text-zinc-400 hover:text-black hover:shadow-xl transition-all">
                 <Bell className="w-5 h-5" />
              </button>
          </div>
        </header>

        <div className="max-w-6xl">
            {activeTab === 'overview' && (
                <Overview 
                    aqi={aqi} 
                    rain={rain}
                    isSimulating={isSimulating} 
                    onSimulateAQI={() => setIsSimulating('aqi')} 
                    onSimulateRain={() => setIsSimulating('rain')} 
                />
            )}
            {activeTab === 'earnings' && <Earnings />}
            {activeTab === 'payouts' && <Payouts payouts={payouts} isSimulating={!!isSimulating} />}
            {activeTab === 'policy' && <Settings />}
        </div>
      </main>
    </div>
  );
};
