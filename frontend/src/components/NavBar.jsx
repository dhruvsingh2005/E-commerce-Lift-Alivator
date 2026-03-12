import React, { useContext, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Menu, X, ShoppingBag, User, LogOut } from 'lucide-react'
import { ShopContext } from '../context/ShopContext'

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

    const navLinkClass = ({isActive}) =>
        isActive ? "text-[#F26522] outline-none" : "hover:text-[#F26522] outline-none";

    return (
        <nav className="fixed top-0 w-full z-50 bg-[#163D35] outline-none border-none ring-0">
            <div className="w-full px-4 sm:pl-5 sm:pr-8 lg:pl-12 lg:pr-16 h-20 sm:h-24 flex items-center justify-between gap-4 sm:gap-10">
                <Link to="/" className="flex items-center gap-0 shrink-0 md:mr-12 outline-none h-full">
                    <img src="/winsume-logo.png" alt="Winsume Lift Logo" className="h-28 sm:h-36 md:h-40 w-auto object-contain -my-6 sm:-my-10" />
                    <div className="flex flex-col -ml-3 sm:-ml-4">
                        <span className="serif-title text-sm sm:text-lg font-semibold tracking-wider uppercase text-white leading-tight whitespace-nowrap">Winsume Lift India</span>
                        <span className="serif-title text-[10px] sm:text-[15px] font-semibold tracking-wider uppercase text-[#F26522] leading-tight font-bold">Private Limited</span>
                    </div>
                </Link>

                {/* Desktop Nav Links */}
                <div className="hidden lg:flex items-center gap-4 xl:gap-10 text-[11px] xl:text-[13px] uppercase tracking-[0.2em] font-medium text-white/70">
                    <NavLink to="/portfolio" className={navLinkClass}>Portfolio</NavLink>
                    <NavLink to="/collection" className={navLinkClass}>Collection</NavLink>
                    <NavLink to="/services" className={navLinkClass}>Services</NavLink>
                    <NavLink to="/about" className={navLinkClass}>About</NavLink>
                    <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
                </div>

                {/* Right Side Icons */}
                <div className="flex items-center gap-3 sm:gap-6">
                    {token ? (
                        <>
                            <div className='group relative hidden sm:block'>
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
                        className="hidden md:block bg-[#F26522] text-white px-6 lg:px-8 py-3 text-[11px] lg:text-[13px] font-bold uppercase tracking-widest rounded-sm hover:bg-white hover:text-[#163D35] transition-all outline-none"
                    >
                        Inquire
                    </Link>

                    {/* Mobile Hamburger */}
                    <button onClick={() => setVisible(true)} className="lg:hidden text-white/70 hover:text-white outline-none">
                        <Menu size={28} />
                    </button>
                </div>
            </div>

            {/* Mobile Drawer Overlay */}
            <div className={`fixed inset-0 bg-black/60 z-[60] transition-opacity duration-300 lg:hidden ${visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setVisible(false)} />

            {/* Mobile Drawer */}
            <div className={`fixed top-0 right-0 h-full w-72 sm:w-80 bg-[#163D35] z-[70] transform transition-transform duration-300 ease-in-out lg:hidden ${visible ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex items-center justify-between px-6 h-20 border-b border-white/10">
                    <span className="text-white text-sm uppercase tracking-widest font-bold">Menu</span>
                    <button onClick={() => setVisible(false)} className="text-white/70 hover:text-white">
                        <X size={24} />
                    </button>
                </div>

                <div className="flex flex-col px-6 py-6 gap-1">
                    <NavLink onClick={() => setVisible(false)} to="/portfolio" className="text-white/70 hover:text-[#F26522] py-3 text-sm uppercase tracking-[0.2em] font-bold border-b border-white/5 transition-colors">Portfolio</NavLink>
                    <NavLink onClick={() => setVisible(false)} to="/collection" className="text-white/70 hover:text-[#F26522] py-3 text-sm uppercase tracking-[0.2em] font-bold border-b border-white/5 transition-colors">Collection</NavLink>
                    <NavLink onClick={() => setVisible(false)} to="/services" className="text-white/70 hover:text-[#F26522] py-3 text-sm uppercase tracking-[0.2em] font-bold border-b border-white/5 transition-colors">Services</NavLink>
                    <NavLink onClick={() => setVisible(false)} to="/about" className="text-white/70 hover:text-[#F26522] py-3 text-sm uppercase tracking-[0.2em] font-bold border-b border-white/5 transition-colors">About</NavLink>
                    <NavLink onClick={() => setVisible(false)} to="/contact" className="text-white/70 hover:text-[#F26522] py-3 text-sm uppercase tracking-[0.2em] font-bold border-b border-white/5 transition-colors">Contact</NavLink>

                    {token && (
                        <>
                            <NavLink onClick={() => setVisible(false)} to="/orders" className="text-white/70 hover:text-[#F26522] py-3 text-sm uppercase tracking-[0.2em] font-bold border-b border-white/5 transition-colors">My Projects</NavLink>
                            <p onClick={() => { logout(); setVisible(false); }} className="text-white/70 hover:text-[#F26522] py-3 text-sm uppercase tracking-[0.2em] font-bold border-b border-white/5 transition-colors cursor-pointer flex items-center gap-2">Logout <LogOut size={14}/></p>
                        </>
                    )}
                </div>

                <div className="px-6 mt-4">
                    <Link
                        onClick={() => setVisible(false)}
                        to="/quote-builder"
                        className="block text-center bg-[#F26522] text-white px-6 py-3 text-sm font-bold uppercase tracking-widest rounded-sm hover:bg-white hover:text-[#163D35] transition-all"
                    >
                        Inquire
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar