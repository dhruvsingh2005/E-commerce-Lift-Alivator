import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { CheckCircle2, Package, Clock, ShieldAlert, FileText } from 'lucide-react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Orders = () => {
    const { backendUrl, token, currency } = useContext(ShopContext);
    const [inquiryData, setInquiryData] = useState([]);

    const loadInquiryData = async () => {
        try {
            if (!token) return null;
            const response = await axios.get(backendUrl + '/api/inquiry/user-inquiries', { headers: { token } });
            if (response.data.success) {
                setInquiryData(response.data.inquiries.reverse());
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        loadInquiryData();
    }, [token]);

    const getStatusIcon = (status) => {
        switch (status) {
            case 'Completed': return <CheckCircle2 size={16} className="text-green-500" />;
            case 'Site Visited': return <Clock size={16} className="text-primary" />;
            case 'In Progress': return <FileText size={16} className="text-blue-400" />;
            default: return <Package size={16} className="text-white/40" />;
        }
    }

    return (
        <div className="pt-20 sm:pt-24 min-h-screen bg-background-dark">
            <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
                <header className="mb-8 sm:mb-12 border-b border-white/10 pb-6 sm:pb-8">
                    <span className="text-primary text-xs uppercase tracking-[0.4em] font-bold block mb-4">Account Archive</span>
                    <h1 className="serif-title text-3xl sm:text-5xl text-white">My <span className="italic text-primary/90">Engagements</span></h1>
                </header>

                <div className="space-y-6">
                    {inquiryData.map((order, index) => (
                        <div key={index} className="glass-card border border-white/15 bg-black/40 p-4 sm:p-6 md:p-10 rounded-sm">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 sm:gap-8 mb-6 sm:mb-10 pb-6 sm:pb-10 border-b border-white/10">
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 bg-primary/15 rounded-sm flex items-center justify-center border border-primary/40">
                                        <Package size={24} className="text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-white/50 text-xs uppercase tracking-widest font-bold mb-1">Enquiry ID</p>
                                        <h3 className="text-white font-mono text-lg tracking-wider uppercase">WL-{order._id.slice(-6)}</h3>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
                                    <div>
                                        <p className="text-white/50 text-xs uppercase tracking-widest font-bold mb-1">Initiated</p>
                                        <p className="text-white text-xs font-medium">{new Date(order.date).toLocaleDateString()}</p>
                                    </div>
                                    <div>
                                        <p className="text-white/50 text-xs uppercase tracking-widest font-bold mb-1">Type</p>
                                        <p className="text-white text-xs font-medium">{order.elevatorType || 'Custom'}</p>
                                    </div>
                                    <div className="hidden md:block">
                                        <p className="text-white/50 text-xs uppercase tracking-widest font-bold mb-1">Security</p>
                                        <p className="text-green-400 text-xs font-bold flex items-center gap-1">
                                            <ShieldAlert size={12} /> PROTOCOL ACTIVE
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 sm:gap-6 p-4 sm:p-6 bg-white/5 border border-white/15 rounded-sm">
                                    <div className="flex items-center gap-6 flex-1">
                                        <div>
                                            <h4 className="serif-title text-xl text-white mb-1">Consultation for {order.city}</h4>
                                            <p className="text-white/70 text-sm leading-relaxed max-w-lg italic font-manrope">
                                                "{order.message.slice(0, 140)}{order.message.length > 140 ? '...' : ''}"
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center justify-start md:justify-end gap-4 sm:gap-12">
                                        <div className="text-center">
                                            <p className="text-white/50 text-xs uppercase tracking-widest font-bold mb-2">Stage</p>
                                            <div className="flex items-center gap-2 px-4 py-1.5 border border-primary/40 rounded-full bg-primary/10">
                                                {getStatusIcon(order.status)}
                                                <span className="text-[10px] text-white font-black uppercase tracking-widest">{order.status}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {inquiryData.length === 0 && (
                        <div className="py-32 text-center border border-white/10 rounded-sm bg-black/40">
                            <p className="text-white/60 text-xl font-light mb-8 italic serif-title">No architectural history found.</p>
                            <Link to="/collection" className="bg-primary text-gray-900 px-10 py-4 font-black uppercase tracking-[0.3em] text-[10px] hover:bg-primary/90 transition-all">
                                Begin Consultation
                            </Link>
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}

export default Orders
