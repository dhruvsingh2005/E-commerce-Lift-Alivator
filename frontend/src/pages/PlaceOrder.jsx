import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { ArrowRight, ShieldCheck, CreditCard, Info } from 'lucide-react'
import axios from 'axios'
import { toast } from 'react-toastify'

const PlaceOrder = () => {
    const { navigate, currency, getCartAmount, delivery_fee, backendUrl, token, cartItems, products, setCartItems } = useContext(ShopContext);
    const [method, setMethod] = useState('cod');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        street: '',
        city: '',
        state: '',
        zipcode: '',
        country: '',
        phone: '',
        message: ''
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData(data => ({ ...data, [name]: value }))
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            let elevatorNames = [];
            for (const itemId in cartItems) {
                if (cartItems[itemId] > 0) {
                    const itemInfo = products.find(p => p._id === itemId);
                    if (itemInfo) {
                        elevatorNames.push(`${itemInfo.name} (Qty: ${cartItems[itemId]})`);
                    }
                }
            }

            const inquiryData = {
                name: `${formData.firstName} ${formData.lastName}`,
                email: formData.email,
                phone: formData.phone,
                city: formData.city,
                elevatorType: elevatorNames.join(', '),
                message: `Address: ${formData.street}, ${formData.city}, ${formData.state}, ${formData.zipcode}. Message: ${formData.message || 'Standard Inquiry'}. Payment Method: ${method}`,
            }

            const response = await axios.post(backendUrl + '/api/inquiry/add', inquiryData, { headers: { token } });

            if (response.data.success) {
                toast.success("Architectural Selection Confirmed");
                setCartItems({});
                navigate('/orders');
            } else {
                toast.error(response.data.message);
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    return (
        <form onSubmit={onSubmitHandler} className="pt-24 min-h-screen bg-background-dark">
            <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-20">
                {/* Left side: Information */}
                <div className="flex-1 flex flex-col">
                    <div className="mb-12 border-b border-white/10 pb-8">
                        <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-bold block mb-4">Finalization</span>
                        <h1 className="serif-title text-5xl text-white mb-2">Architectural <span className="italic text-primary/90">Details</span></h1>
                        <p className="text-white/40 text-sm font-light">Please provide the structural and administrative details for your installation.</p>
                    </div>

                    <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <input required name="firstName" onChange={onChangeHandler} value={formData.firstName} className="bg-white/5 border border-white/10 p-4 outline-none focus:border-primary text-white text-sm transition-colors rounded-sm" placeholder="First Name" type="text" />
                            <input required name="lastName" onChange={onChangeHandler} value={formData.lastName} className="bg-white/5 border border-white/10 p-4 outline-none focus:border-primary text-white text-sm transition-colors rounded-sm" placeholder="Last Name" type="text" />
                        </div>
                        <input required name="email" onChange={onChangeHandler} value={formData.email} className="bg-white/5 border border-white/10 p-4 outline-none focus:border-primary text-white text-sm transition-colors rounded-sm w-full" placeholder="Email Address" type="email" />
                        <input required name="street" onChange={onChangeHandler} value={formData.street} className="bg-white/5 border border-white/10 p-4 outline-none focus:border-primary text-white text-sm transition-colors rounded-sm w-full" placeholder="Street Address / Site Location" type="text" />
                        <div className="grid grid-cols-2 gap-4">
                            <input required name="city" onChange={onChangeHandler} value={formData.city} className="bg-white/5 border border-white/10 p-4 outline-none focus:border-primary text-white text-sm transition-colors rounded-sm" placeholder="City" type="text" />
                            <input required name="state" onChange={onChangeHandler} value={formData.state} className="bg-white/5 border border-white/10 p-4 outline-none focus:border-primary text-white text-sm transition-colors rounded-sm" placeholder="State" type="text" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <input required name="zipcode" onChange={onChangeHandler} value={formData.zipcode} className="bg-white/5 border border-white/10 p-4 outline-none focus:border-primary text-white text-sm transition-colors rounded-sm" placeholder="Zipcode" type="number" />
                            <input required name="country" onChange={onChangeHandler} value={formData.country} className="bg-white/5 border border-white/10 p-4 outline-none focus:border-primary text-white text-sm transition-colors rounded-sm" placeholder="Country" type="text" />
                        </div>
                        <input required name="phone" onChange={onChangeHandler} value={formData.phone} className="bg-white/5 border border-white/10 p-4 outline-none focus:border-primary text-white text-sm transition-colors rounded-sm w-full" placeholder="Contact Phone" type="tel" />
                        <textarea name="message" onChange={onChangeHandler} value={formData.message} className="bg-white/5 border border-white/10 p-4 outline-none focus:border-primary text-white text-sm transition-colors rounded-sm w-full resize-none" rows="3" placeholder="Special requirements or site details..."></textarea>
                    </div>
                </div>

                {/* Right side: Method & Summary */}
                <div className="w-full lg:w-[450px]">
                    <div className="glass-card border border-gray-200 p-10 rounded-sm">
                        <section className="mb-12">
                            <h4 className="text-gray-500 text-[10px] uppercase tracking-widest font-bold mb-8 border-b border-gray-200 pb-4">Payment Commitment</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div onClick={() => setMethod('stripe')} className={`flex items-center gap-4 border p-4 cursor-pointer transition-all ${method === 'stripe' ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-primary/30'}`}>
                                    <span className={`w-3 h-3 rounded-full border-2 ${method === 'stripe' ? 'bg-primary border-primary' : 'border-gray-400'}`}></span>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] uppercase tracking-widest text-gray-900 font-bold">Secure Card</span>
                                        <div className="flex gap-2 items-center opacity-40">
                                            <CreditCard size={12} />
                                            <span className="text-[8px]">VISA/MASTER</span>
                                        </div>
                                    </div>
                                </div>
                                <div onClick={() => setMethod('razorpay')} className={`flex items-center gap-4 border p-4 cursor-pointer transition-all ${method === 'razorpay' ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-primary/30'}`}>
                                    <span className={`w-3 h-3 rounded-full border-2 ${method === 'razorpay' ? 'bg-primary border-primary' : 'border-gray-400'}`}></span>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] uppercase tracking-widest text-gray-900 font-bold">Insta-Pay</span>
                                        <span className="text-[8px] opacity-40">Upi / Netbank</span>
                                    </div>
                                </div>
                                <div onClick={() => setMethod('cod')} className={`flex items-center gap-4 border p-4 cursor-pointer transition-all sm:col-span-2 ${method === 'cod' ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-primary/30'}`}>
                                    <span className={`w-3 h-3 rounded-full border-2 ${method === 'cod' ? 'bg-primary border-primary' : 'border-gray-400'}`}></span>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] uppercase tracking-widest text-gray-900 font-bold">Reserve Consultation</span>
                                        <span className="text-[8px] opacity-40 italic">Confirm with a minimal architectural reservation fee.</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="mb-10">
                            <h4 className="text-gray-500 text-[10px] uppercase tracking-widest font-bold mb-8 border-b border-gray-200 pb-4">Proposal Summary</h4>
                            <div className="space-y-4">
                                <div className="flex justify-between text-xs tracking-wider font-manrope">
                                    <span className="text-gray-600">Subtotal</span>
                                    <span className="text-gray-900 font-medium">{currency}{getCartAmount().toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-xs tracking-wider font-manrope">
                                    <span className="text-gray-600">Site Survey & Logistics</span>
                                    <span className="text-gray-900 font-medium">{currency}{delivery_fee.toLocaleString()}</span>
                                </div>
                                <div className="pt-4 border-t border-gray-200 flex justify-between items-end">
                                    <span className="text-primary text-[10px] uppercase tracking-widest font-black">Total Commitment</span>
                                    <span className="text-primary text-2xl serif-title">{currency}{(getCartAmount() + delivery_fee).toLocaleString()}</span>
                                </div>
                            </div>
                        </section>

                        <button type="submit" className="w-full bg-primary text-gray-900 py-5 rounded-sm font-black uppercase tracking-[0.4em] text-xs flex items-center justify-center gap-3 hover:bg-primary/90 transition-all shadow-2xl shimmer-effect">
                            Confirm Selection <ArrowRight size={16} />
                        </button>

                        <div className="mt-8 flex items-center justify-center gap-4 text-gray-400">
                            <ShieldCheck size={20} />
                            <span className="text-[9px] uppercase tracking-[0.2em] font-medium leading-relaxed font-manrope">
                                Secured by Winsume Platinum encryption. <br /> Your architectural data is classified.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default PlaceOrder
