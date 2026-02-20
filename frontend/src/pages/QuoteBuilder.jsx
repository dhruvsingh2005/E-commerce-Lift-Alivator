import React, { useState, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const QuoteBuilder = () => {
    const { backendUrl } = useContext(ShopContext);
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        city: '',
        elevatorType: 'Residential',
        message: 'I am interested in exploring elevator solutions for my upcoming project. Please provide further details.'
    });

    const elevatorOptions = [
        { id: 'Residential', title: 'Residential Lifts', desc: 'Bespoke solutions for luxury villas and mansions.' },
        { id: 'Commercial', title: 'Commercial Elevators', desc: 'High-speed, high-capacity systems for modern offices.' },
        { id: 'Hospitality', title: 'Hospitality Lifts', desc: 'Elegant, silent transport for premier hotels & resorts.' },
        { id: 'Industrial', title: 'Industrial Hoists', desc: 'Heavy-duty performance for factories and warehouses.' }
    ];

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(backendUrl + '/api/inquiry/add', formData);
            if (response.data.success) {
                toast.success(response.data.message);
                navigate('/quote-summary', { state: { inquiry: formData } });
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    return (
        <div className="pt-24 min-h-screen bg-background-dark">
            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="flex flex-col md:flex-row gap-20">
                    {/* Left: Progress/Context */}
                    <div className="w-full md:w-1/3">
                        <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-bold block mb-4">The Selection Process</span>
                        <h1 className="serif-title text-5xl text-white mb-12">Bespoke <br /><span className="text-primary italic">Proposal</span></h1>
                        
                        <div className="space-y-12">
                            <div className={`flex gap-6 items-start transition-opacity ${step === 1 ? 'opacity-100' : 'opacity-30'}`}>
                                <span className="serif-title text-4xl text-primary/40 leading-none">01</span>
                                <div>
                                    <h4 className="text-white text-sm uppercase tracking-widest font-bold mb-2">Architectural Intent</h4>
                                    <p className="text-white/40 text-[11px] leading-relaxed">Select the primary application for your vertical transportation system.</p>
                                </div>
                            </div>
                            <div className={`flex gap-6 items-start transition-opacity ${step === 2 ? 'opacity-100' : 'opacity-30'}`}>
                                <span className="serif-title text-4xl text-primary/40 leading-none">02</span>
                                <div>
                                    <h4 className="text-white text-sm uppercase tracking-widest font-bold mb-2">Project Particulars</h4>
                                    <p className="text-white/40 text-[11px] leading-relaxed">Provide administrative details for a tailored technical consultation.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="flex-1 glass-card border border-white/10 p-12 rounded-sm">
                        {step === 1 && (
                            <div className="space-y-8 animate-in fade-in transition-all duration-700">
                                <h3 className="serif-title text-3xl text-white border-b border-primary/20 pb-6">Select Application</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {elevatorOptions.map((opt) => (
                                        <div 
                                            key={opt.id}
                                            onClick={() => {
                                                setFormData({ ...formData, elevatorType: opt.id });
                                                setStep(2);
                                            }}
                                            className={`p-6 border transition-all cursor-pointer group ${formData.elevatorType === opt.id ? 'border-primary bg-primary/5' : 'border-white/10 hover:border-primary/50'}`}
                                        >
                                            <h4 className="text-white text-sm uppercase tracking-widest font-bold mb-2 group-hover:text-primary transition-colors">{opt.title}</h4>
                                            <p className="text-white/40 text-[10px] uppercase tracking-wide leading-relaxed">{opt.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <form onSubmit={handleSubmit} className="space-y-8 animate-in slide-in-from-right-4 duration-700">
                                <div className="flex items-center justify-between border-b border-primary/20 pb-6">
                                    <h3 className="serif-title text-3xl text-white">Project Details</h3>
                                    <button onClick={() => setStep(1)} type="button" className="text-[10px] uppercase tracking-widest text-primary font-bold">Back</button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Full Name</label>
                                        <input required name="name" onChange={handleInputChange} value={formData.name} className="w-full bg-white/5 border-b border-white/10 p-4 outline-none focus:border-primary text-white text-sm transition-colors" type="text" placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Email Address</label>
                                        <input required name="email" onChange={handleInputChange} value={formData.email} className="w-full bg-white/5 border-b border-white/10 p-4 outline-none focus:border-primary text-white text-sm transition-colors" type="email" placeholder="john@example.com" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Phone Number</label>
                                        <input required name="phone" onChange={handleInputChange} value={formData.phone} className="w-full bg-white/5 border-b border-white/10 p-4 outline-none focus:border-primary text-white text-sm transition-colors" type="tel" placeholder="+91 98765 43210" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">City / Location</label>
                                        <input name="city" onChange={handleInputChange} value={formData.city} className="w-full bg-white/5 border-b border-white/10 p-4 outline-none focus:border-primary text-white text-sm transition-colors" type="text" placeholder="Indore" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Message / Requirements</label>
                                    <textarea name="message" onChange={handleInputChange} value={formData.message} rows="4" className="w-full bg-white/5 border-b border-white/10 p-4 outline-none focus:border-primary text-white text-sm transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
                                </div>
                                <button type="submit" className="w-full bg-primary text-black py-5 font-black uppercase tracking-[0.3em] text-xs hover:bg-white transition-all shadow-xl shimmer-effect">
                                    Request Consultation
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default QuoteBuilder;
