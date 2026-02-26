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
        <div className="pt-24 min-h-screen bg-background-dark">
            <section className="max-w-7xl mx-auto px-6 py-12">
                <header className="mb-12 border-b border-gray-200 pb-8">
                    <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-bold block mb-4">Account Archive</span>
                    <h1 className="serif-title text-5xl text-gray-900">My <span className="italic text-primary/90">Engagements</span></h1>
                </header>

                <div className="space-y-6">
                    {inquiryData.map((order, index) => (
                        <div key={index} className="glass-card border border-gray-200 p-10 rounded-sm">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10 pb-10 border-b border-gray-200">
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 bg-primary/10 rounded-sm flex items-center justify-center border border-primary/20">
                                        <Package size={24} className="text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-[9px] uppercase tracking-widest font-bold mb-1">Enquiry ID</p>
                                        <h3 className="text-gray-900 font-mono text-lg tracking-wider uppercase">WL-{order._id.slice(-6)}</h3>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
                                    <div>
                                        <p className="text-gray-500 text-[9px] uppercase tracking-widest font-bold mb-1">Initiated</p>
                                        <p className="text-gray-900 text-xs font-medium">{new Date(order.date).toLocaleDateString()}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-[9px] uppercase tracking-widest font-bold mb-1">Type</p>
                                        <p className="text-gray-900 text-xs font-medium">{order.elevatorType || 'Custom'}</p>
                                    </div>
                                    <div className="hidden md:block">
                                        <p className="text-gray-500 text-[9px] uppercase tracking-widest font-bold mb-1">Security</p>
                                        <p className="text-green-600 text-xs font-bold flex items-center gap-1">
                                            <ShieldAlert size={12} /> PROTOCOL ACTIVE
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <div className="flex flex-col md:flex-row justify-between items-center gap-6 p-6 bg-gray-50 border border-gray-200 rounded-sm">
                                    <div className="flex items-center gap-6 flex-1">
                                        <div>
                                            <h4 className="serif-title text-xl text-gray-900 mb-1">Consultation for {order.city}</h4>
                                            <p className="text-gray-500 text-[11px] leading-relaxed max-w-lg italic font-manrope">"{order.message.slice(0, 100)}{order.message.length > 100 ? '...' : ''}"</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-12">
                                        <div className="text-center">
                                            <p className="text-gray-500 text-[9px] uppercase tracking-widest font-bold mb-2">Stage</p>
                                            <div className="flex items-center gap-2 px-4 py-1.5 border border-primary/20 rounded-full bg-primary/5">
                                                {getStatusIcon(order.status)}
                                                <span className="text-[10px] text-gray-900 font-black uppercase tracking-widest">{order.status}</span>
                                            </div>
                                        </div>
                                        <button className="bg-gray-900 text-white px-6 py-2.5 text-[9px] font-black uppercase tracking-[0.2em] hover:bg-primary transition-all rounded-sm">
                                            Track Document
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {inquiryData.length === 0 && (
                        <div className="py-32 text-center border border-gray-200 rounded-sm bg-gray-50">
                            <p className="text-gray-500 text-xl font-light mb-8 italic serif-title">No architectural history found.</p>
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
