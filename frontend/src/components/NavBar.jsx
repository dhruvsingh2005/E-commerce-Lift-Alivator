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
        <nav className="fixed top-0 w-full z-50 bg-black backdrop-blur-md border-b border-primary/10">
            <div className="w-full pl-5 pr-8 lg:pl-12 lg:pr-16 h-24 flex items-center justify-between gap-10">
                <Link to="/" className="flex items-center gap-2 shrink-0 mr-8 md:mr-12">
                    <img src={assets.logo1} alt="Winsume Lift Logo" className="h-24 w-auto object-contain" />
                    <div className="flex flex-col">
                        <span className="serif-title text-lg font-semibold tracking-wider uppercase text-white leading-tight whitespace-nowrap">Winsume Lift India</span>
                        <span className="serif-title text-[10px] font-semibold tracking-wider uppercase text-primary/80 leading-tight">Private Limited</span>
                    </div>
                </Link>

                <div className="hidden md:flex items-center gap-10 text-[13px] uppercase tracking-[0.2em] font-medium text-white/60">
                    <NavLink to="/portfolio" className={({isActive}) => isActive ? "text-primary transition-colors" : "hover:text-primary transition-colors"}>Portfolio</NavLink>
                    <NavLink to="/collection" className={({isActive}) => isActive ? "text-primary transition-colors" : "hover:text-primary transition-colors"}>Collection</NavLink>
                    <NavLink to="/services" className={({isActive}) => isActive ? "text-primary transition-colors" : "hover:text-primary transition-colors"}>Services</NavLink>
                    <NavLink to="/about" className={({isActive}) => isActive ? "text-primary transition-colors" : "hover:text-primary transition-colors"}>About</NavLink>
                    <NavLink to="/contact" className={({isActive}) => isActive ? "text-primary transition-colors" : "hover:text-primary transition-colors"}>Contact</NavLink>
                </div>

                <div className="flex items-center gap-6">
                    {token ? (
                        <>
                            <div className='group relative'>
                                <Link to="/orders" className="text-white/60 hover:text-primary transition-colors">
                                    <User size={24} />
                                </Link>
                                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-background-dark border border-white/10 text-white/60 rounded text-[10px] uppercase tracking-widest font-bold'>
                                        <Link to='/orders' className='hover:text-primary transition-colors'>Projects</Link>
                                        <hr className="border-white/5" />
                                        <p onClick={logout} className='hover:text-primary transition-colors cursor-pointer flex items-center gap-2'>Logout <LogOut size={12}/></p>
                                    </div>
                                </div>
                            </div>
                            <Link to="/cart" className="relative text-white/60 hover:text-primary transition-colors">
                                <ShoppingBag size={20} />
                                {getCartCount() > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-primary text-obsidian text-[8px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                                        {getCartCount()}
                                    </span>
                                )}
                            </Link>
                        </>
                    ) : (
                        <Link to="/login" className="text-white/60 hover:text-primary transition-colors">
                            <User size={24} />
                        </Link>
                    )}
                    
                    <Link to="/contact#inquiry" className="hidden sm:block bg-primary text-obsidian px-8 py-3 text-[13px] font-bold uppercase tracking-widest rounded-sm hover:bg-white transition-all">
                        Inquire
                    </Link>
                    <button onClick={() => setVisible(!visible)} className="md:hidden text-white">
                        {visible ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 z-40 bg-obsidian transition-transform duration-300 md:hidden ${visible ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col items-center justify-center h-full gap-8 text-sm uppercase tracking-widest font-bold">
                    <NavLink onClick={() => setVisible(false)} to="/" className="hover:text-primary">Home</NavLink>
                    <NavLink onClick={() => setVisible(false)} to="/portfolio" className="hover:text-primary">Portfolio</NavLink>
                    <NavLink onClick={() => setVisible(false)} to="/collection" className="hover:text-primary">Collection</NavLink>
                    <NavLink onClick={() => setVisible(false)} to="/services" className="hover:text-primary">Services</NavLink>
                    <NavLink onClick={() => setVisible(false)} to="/about" className="hover:text-primary">About</NavLink>
                    <NavLink onClick={() => setVisible(false)} to="/contact" className="hover:text-primary">Contact</NavLink>
                    {token && (
                        <>
                            <NavLink onClick={() => setVisible(false)} to="/orders" className="hover:text-primary">My Projects</NavLink>
                            <p onClick={logout} className="hover:text-primary cursor-pointer">Logout</p>
                        </>
                    )}
                    <Link onClick={() => setVisible(false)} to="/contact#inquiry" className="bg-primary text-obsidian px-10 py-4 rounded-sm">
                        Get a Quote
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
