import { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { Dashboard } from './components/Dashboard';
import { HelpPage } from './components/HelpPage';

export default function App() {
  const [view, setView] = useState('landing'); // landing | dashboard | help

  const goToDashboard = () => {
    setView('dashboard');
    window.scrollTo(0, 0);
  };

  const goToLanding = () => {
    setView('landing');
    window.scrollTo(0, 0);
  };

  const goToHelp = () => {
    setView('help');
    window.scrollTo(0, 0);
  };

  if (view === 'help') {
    return <HelpPage onBack={goToLanding} />;
  }

  if (view === 'dashboard') {
    return <Dashboard onLogout={goToLanding} />;
  }

  return (
    <LandingPage onLogin={goToDashboard} onHelp={goToHelp} />
  );
}
