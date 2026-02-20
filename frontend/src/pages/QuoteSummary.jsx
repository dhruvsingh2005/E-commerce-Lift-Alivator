import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Mail, Phone } from 'lucide-react';

const QuoteSummary = () => {
  const location = useLocation();
  const { inquiry } = location.state || { inquiry: null };

  if (!inquiry) {
    return (
      <div className="pt-24 min-h-screen bg-background-dark flex items-center justify-center">
        <div className="text-center">
          <h2 className="serif-title text-3xl text-white mb-4">No Inquiry Found</h2>
          <Link to="/quote-builder" className="text-primary uppercase tracking-widest text-sm font-bold">Return to Quote Builder</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-background-dark">
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-8 border border-primary/40">
            <CheckCircle2 size={40} className="text-primary" />
          </div>
          <p className="text-primary text-xs font-bold uppercase tracking-[0.4em] mb-4">Request Received</p>
          <h1 className="serif-title text-5xl md:text-7xl text-white mb-8">Thank You, <span className="italic">{inquiry.name.split(' ')[0]}</span>.</h1>
          <p className="text-white/40 text-lg max-w-2xl mx-auto font-light leading-relaxed mb-16">
            Your inquiry for a <span className="text-white font-medium">{inquiry.elevatorType}</span> system has been successfully transmitted to our engineering team. A technical consultant will contact you within 24 hours.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full text-left">
            <div className="glass-card border border-white/10 p-8 rounded-sm">
              <h4 className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-6 border-b border-white/5 pb-4">Consultation Details</h4>
              <div className="space-y-4 text-sm">
                <p className="flex justify-between"><span className="text-primary/60 font-medium">Inquiry ID</span> <span className="text-white font-mono">WL-{Math.floor(1000 + Math.random() * 9000)}</span></p>
                <p className="flex justify-between"><span className="text-primary/60 font-medium">Application</span> <span className="text-white">{inquiry.elevatorType}</span></p>
                <p className="flex justify-between"><span className="text-primary/60 font-medium">Location</span> <span className="text-white">{inquiry.city || 'Indore Regional Office'}</span></p>
              </div>
            </div>
            <div className="glass-card border border-white/10 p-8 rounded-sm">
              <h4 className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-6 border-b border-white/5 pb-4">Next Steps</h4>
              <ul className="space-y-4">
                <li className="flex gap-4 items-start">
                  <span className="text-primary text-xs font-bold">01.</span>
                  <p className="text-white/60 text-xs leading-relaxed uppercase tracking-wider">Technical feasibility review by our senior engineers.</p>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-primary text-xs font-bold">02.</span>
                  <p className="text-white/60 text-xs leading-relaxed uppercase tracking-wider">Initial consultation call to discuss site requirements.</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-20 flex flex-wrap justify-center gap-8">
            <Link to="/collection" className="group flex items-center gap-2 text-white/40 text-xs uppercase tracking-widest font-bold hover:text-white transition-colors">
              Continue Exploring <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuoteSummary;
