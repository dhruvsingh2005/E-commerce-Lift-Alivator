import React, { useContext, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Menu, X, ShoppingBag, User, LogOut } from 'lucide-react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'

const NavBar = () => {
    const [visible, setVisible] = useState(false);
    const { getCartCount, token, setToken, setCartItems } = useContext(ShopContext);
    const navigate = useNavigate();

    const logout = () => {
        navigate('/login');
        localStorage.removeItem('token');
        setToken('');
        setCartItems({});
    }

    return (
        /* FIX: 'backdrop-blur' aur 'border' dono ko hta diya gaya hai solid feel ke liye */
        /* 'outline-none' aur 'ring-0' bhi add kiya hai taaki koi hidden lines na dikhein */
        <nav className="fixed top-0 w-full z-50 bg-[#163D35] outline-none border-none ring-0">
            <div className="w-full pl-5 pr-8 lg:pl-12 lg:pr-16 h-24 flex items-center justify-between gap-10">
                <Link to="/" className="flex items-center gap-2 shrink-0 mr-8 md:mr-12 outline-none">
                    <img src={assets.logo1} alt="Winsume Lift Logo" className="h-24 w-auto object-contain" />
                    <div className="flex flex-col">
                        <span className="serif-title text-lg font-semibold tracking-wider uppercase text-white leading-tight whitespace-nowrap">Winsume Lift India</span>
                        <span className="serif-title text-[10px] font-semibold tracking-wider uppercase text-[#F26522] leading-tight font-bold">Private Limited</span>
                    </div>
                </Link>

                <div className="flex items-center gap-4 md:gap-10 text-[11px] md:text-[13px] uppercase tracking-[0.2em] font-medium text-white/70 ">
                    <NavLink to="/portfolio" className={({isActive}) => isActive ? "text-[#F26522] outline-none" : "hover:text-[#F26522] outline-none"}>Portfolio</NavLink>
                    <NavLink to="/collection" className={({isActive}) => isActive ? "text-[#F26522] outline-none" : "hover:text-[#F26522] outline-none"}>Collection</NavLink>
                    <NavLink to="/services" className={({isActive}) => isActive ? "text-[#F26522] outline-none" : "hover:text-[#F26522] outline-none"}>Services</NavLink>
                    <NavLink to="/about" className={({isActive}) => isActive ? "text-[#F26522] outline-none" : "hover:text-[#F26522] outline-none"}>About</NavLink>
                    <NavLink to="/contact" className={({isActive}) => isActive ? "text-[#F26522] outline-none" : "hover:text-[#F26522] outline-none"}>Contact</NavLink>
                </div>

                <div className="flex items-center gap-6">
                    {token ? (
                        <>
                            <div className='group relative'>
                                <Link to="/orders" className="text-white/70 hover:text-[#F26522] transition-colors outline-none">
                                <User size={24} />
                                </Link>
                                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-[#163D35] border border-white/10 text-white rounded text-[10px] uppercase tracking-widest font-bold shadow-lg'>
                                        <Link to='/orders' className='hover:text-[#F26522] outline-none'>Projects</Link>
                                        <hr className="border-white/10" />
                                        <p onClick={logout} className='hover:text-[#F26522] cursor-pointer flex items-center gap-2 outline-none'>Logout <LogOut size={12}/></p>
                                    </div>
                                </div>
                            </div>
                            <Link to="/cart" className="relative text-white/70 hover:text-[#F26522] outline-none">
                                <ShoppingBag size={20} />
                                {getCartCount() > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-[#F26522] text-white text-[8px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                                        {getCartCount()}
                                    </span>
                                )}
                            </Link>
                        </>
                    ) : (
                        <Link to="/login" className="text-white/70 hover:text-[#F26522] outline-none">
                            <User size={24} />
                        </Link>
                    )}

                    <Link
                        to="/quote-builder"
                        className="hidden sm:block bg-[#F26522] text-white px-8 py-3 text-[13px] font-bold uppercase tracking-widest rounded-sm hover:bg-white hover:text-[#163D35] transition-all outline-none"
                    >
                        Inquire
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar