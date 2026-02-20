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

    return (
        <nav className="fixed top-0 w-full z-50 bg-obsidian/80 backdrop-blur-md border-b border-primary/10">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-3">
                    <div className="text-primary">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path clipRule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fillRule="evenodd"></path>
                        </svg>
                    </div>
                    <span className="serif-title text-xl font-medium tracking-widest uppercase text-white">Winsume Lift</span>
                </Link>

                <div className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-[0.2em] font-medium text-white/60">
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
                                    <User size={20} />
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
                            <User size={20} />
                        </Link>
                    )}
                    
                    <Link to="/contact" className="hidden sm:block bg-primary text-obsidian px-6 py-2 text-[11px] font-bold uppercase tracking-widest rounded-sm hover:bg-white transition-all">
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
                    <Link onClick={() => setVisible(false)} to="/contact" className="bg-primary text-obsidian px-10 py-4 rounded-sm">
                        Get a Quote
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
