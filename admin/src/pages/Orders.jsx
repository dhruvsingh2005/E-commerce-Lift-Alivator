import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'
import { Package, Mail, MapPin, Calendar, CreditCard, ChevronRight, CheckCircle, Clock } from 'lucide-react'

const Orders = ({ token }) => {
  const [inquiries, setInquiries] = useState([]);

  const fetchAllInquiries = async () => {
    if (!token) return;
    try {
      const response = await axios.get(backendUrl + '/api/inquiry/list', { headers: { token } });
      if (response.data.success) {
        setInquiries(response.data.inquiries.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  const statusHandler = async (event, id) => {
    try {
      const response = await axios.post(backendUrl + '/api/inquiry/status', { id, status: event.target.value }, { headers: { token } });
      if (response.data.success) {
        await fetchAllInquiries();
        toast.success(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  const paymentHandler = async (id, currentPayment) => {
    try {
       const response = await axios.post(backendUrl + '/api/inquiry/payment', { id, payment: !currentPayment }, { headers: { token } });
       if (response.data.success) {
         await fetchAllInquiries();
         toast.success("Payment Logic Updated");
       }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  useEffect(() => {
    fetchAllInquiries();
  }, [token]);

  return (
    <div className="animation-fadeIn">
      <div className="mb-10 flex justify-between items-end">
        <div>
          <p className="text-primary text-xs uppercase tracking-[0.4em] font-black mb-3">Operational Archive</p>
          <h2 className="serif-title text-4xl md:text-5xl text-white">Project <span className="italic text-primary/80">Engagements</span></h2>
        </div>
        <div className="text-right">
          <p className="text-white/40 text-xs uppercase tracking-widest font-black mb-1">Total Registry</p>
          <p className="text-white text-3xl font-light">{inquiries.length}</p>
        </div>
      </div>

      <div className="space-y-8">
        {inquiries.map((inquiry, index) => (
          <div key={index} className="glass-card border border-white/15 rounded-sm overflow-hidden group hover:border-primary/40 transition-all duration-500">
            <div className="flex flex-col lg:flex-row">
              {/* Left Column: ID & Date */}
              <div className="lg:w-56 bg-white/[0.04] p-8 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-sm bg-primary/15 border border-primary/40 flex items-center justify-center mb-4">
                    <Package size={20} className="text-primary" />
                  </div>
                  <p className="text-xs uppercase tracking-widest text-white/60 font-bold mb-1">Inquiry ID</p>
                  <p className="text-white font-mono text-sm uppercase tracking-tighter">WL-{inquiry._id.slice(-6)}</p>
                </div>
                <div className="mt-8">
                  <div className="flex items-center gap-2 text-white/60 mb-1">
                    <Calendar size={14} />
                    <p className="text-xs uppercase tracking-widest font-bold">Logged</p>
                  </div>
                  <p className="text-white text-sm font-medium">{new Date(inquiry.date).toLocaleDateString()}</p>
                </div>
              </div>

              {/* Middle Column: Client Info */}
              <div className="flex-1 p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="serif-title text-2xl md:text-3xl text-white mb-4">{inquiry.name}</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-white/40 hover:text-white transition-colors cursor-default">
                        <Mail size={16} className="text-primary/60" />
                        <span className="text-sm tracking-wide">{inquiry.email}</span>
                      </div>
                      <div className="flex items-center gap-3 text-white/50">
                        <MapPin size={16} className="text-primary/60" />
                        <span className="text-sm tracking-wide uppercase">{inquiry.city || 'Location Pending'}</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/[0.05] p-6 border border-white/10 rounded-sm">
                    <p className="text-primary text-xs uppercase tracking-[.3em] font-black mb-3">Architectural Note</p>
                    <p className="text-white/80 text-sm italic leading-relaxed font-manrope">
                      "{inquiry.message}"
                    </p>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap gap-10 items-center">
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-widest font-black mb-2 italic">Application</p>
                    <p className="text-sm text-white font-bold uppercase tracking-widest px-3 py-1.5 bg-white/5 border border-white/20 rounded-sm">
                      {inquiry.elevatorType}
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-widest font-black mb-2 italic">Financial Protocol</p>
                    <button 
                      onClick={() => paymentHandler(inquiry._id, inquiry.payment)}
                      className={`flex items-center gap-2 px-4 py-1.5 rounded-sm border transition-all ${
                        inquiry.payment 
                        ? 'bg-green-500/10 border-green-500/30 text-green-400' 
                        : 'bg-blue-500/10 border-blue-500/30 text-blue-400'
                      }`}
                    >
                      {inquiry.payment ? <CheckCircle size={12} /> : <Clock size={12} />}
                      <span className="text-xs font-black uppercase tracking-widest">
                        {inquiry.payment ? 'Deposit Received' : 'Awaiting Funds'}
                      </span>
                    </button>
                    <p className="text-[10px] text-white/40 mt-1 uppercase tracking-widest font-bold">
                      via {inquiry.paymentMethod || 'Bank Transfer'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Status Control */}
              <div className="lg:w-72 p-8 flex flex-col justify-center gap-4 bg-white/[0.05] border-l border-white/10">
                <p className="text-white text-sm uppercase tracking-[0.3em] font-black text-center italic mb-3">
                  Protocol Stage
                </p>
                <div className="relative group/select">
                  <select 
                    onChange={(e) => statusHandler(e, inquiry._id)} 
                    value={inquiry.status} 
                    className="w-full bg-black text-white border border-white/40 p-3 pl-4 pr-10 text-sm font-black uppercase tracking-[0.15em] hover:border-primary transition-all appearance-none cursor-pointer rounded-sm"
                  >
                    <option className="bg-black text-white" value="Pending">Pending Registry</option>
                    <option className="bg-black text-white" value="Consulted">Consulted</option>
                    <option className="bg-black text-white" value="Site Visited">Site Surveyed</option>
                    <option className="bg-black text-white" value="Quoted">Quoted Proposal</option>
                    <option className="bg-black text-white" value="Closed">Archive Complete</option>
                  </select>
                  <ChevronRight size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-primary group-hover/select:text-primary transition-colors pointer-events-none" />
                </div>
                
                {/* <button className="w-full mt-2 py-3 border border-white/20 text-white/60 text-xs font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all rounded-sm">
                  View Dossier
                </button> */}
              </div>
            </div>
          </div>
        ))}

        {inquiries.length === 0 && (
          <div className="py-24 text-center border border-white/5 rounded-sm bg-obsidian/50">
             <Package className="mx-auto text-white/10 mb-4" size={48} />
            <p className="text-white/20 italic serif-title text-xl">No protocol records found in archive.</p>
          </div>
        )}
      </div>
    </div>
  )
}

Orders.propTypes = {
  token: PropTypes.string.isRequired
}

export default Orders