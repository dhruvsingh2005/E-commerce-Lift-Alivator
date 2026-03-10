import { Headphones, Settings, ShieldCheck, Cpu } from 'lucide-react'
import ContactSection from '../components/ContactSection'

const Services = () => {
    return (
        <div className="pt-24 min-h-screen bg-background-dark">
            {/* ... other code remains same ... */}
            <section className="pt-24 pb-16 px-6 lg:px-40">
                <div className="max-w-5xl">
                    <h4 className="text-primary text-[10px] font-bold tracking-widest uppercase mb-6 flex items-center gap-4">
                        <span className="w-8 h-[1px] bg-primary"></span>
                        Engineering Longevity
                    </h4>
                    <h1 className="serif-title text-6xl md:text-8xl font-light text-white leading-none">
                        Maintenance & <br />
                        <span className="italic text-primary/90">Services</span>
                    </h1>
                </div>
            </section>

            <section className="px-6 lg:px-40 pb-48">
                <div className="relative w-full aspect-[21/9] overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent z-10"></div>
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQU03jVKIdvzxmltJ-yT0RIiyp23IOSutrsgW3kOeoXtByRj2_gx_wzuamxR4MI1Wx8AHJRXWH8l8oeKIHuGvKwEauvs2ZPXIJUX3bgQ9VPXAWZzfbMYbUsQpH9nJen2YAIuHSVe8VNnkwhfP7HqF-4ioyW2cZOCHSwyezSOMWwFiYHA2XjphcAtosp0Ouxxfkd-PMLuIr5BqhKQ03DYs26rVAQ1MopF8KBaz1zrKrwZSQM6mEdrRyb80I6hmmh01tAJAmSEEOKDux" alt="Engineer" className="w-full h-full object-cover grayscale brightness-75 transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute bottom-10 left-10 z-20 max-w-md">
                        <p className="text-gray-600 text-sm leading-relaxed border-l border-primary pl-4 uppercase tracking-widest">
                            Precision engineering meets <br /> uncompromising dedication.
                        </p>
                    </div>
                </div>
            </section>

            <section className="px-6 lg:px-40 bg-obsidian relative py-40 border-t border-primary/10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-primary/20 border-y border-primary/20">
                    <div className="bg-background-dark p-10 hover:shadow-[0_0_15px_rgba(201,167,74,0.15)] hover:border-primary/80 transition-all group border-primary/10 border-r">
                        <Headphones className="text-primary mb-6" size={32} />
                        <h3 className="serif-title text-2xl text-white mb-4 tracking-wide">24/7 Platinum Support</h3>
                        <p className="text-white/40 text-sm font-light leading-loose">
                            Experience the ultimate peace of mind with our dedicated rapid response team. Guaranteed onsite arrival within 2 hours for all platinum tier partners.
                        </p>
                    </div>
                    <div className="bg-background-dark p-10 hover:shadow-[0_0_15px_rgba(201,167,74,0.15)] hover:border-primary/80 transition-all group border-primary/10 border-r">
                        <Settings className="text-primary mb-6" size={32} />
                        <h3 className="serif-title text-2xl text-white mb-4 tracking-wide">Precision Modernization</h3>
                        <p className="text-white/40 text-sm font-light leading-loose">
                            Breathe new life into legacy systems. We integrate next-generation control systems and aesthetic refinements to existing architecture.
                        </p>
                    </div>
                    <div className="bg-background-dark p-10 hover:shadow-[0_0_15px_rgba(201,167,74,0.15)] hover:border-primary/80 transition-all group border-primary/10 border-r">
                        <ShieldCheck className="text-primary mb-6" size={32} />
                        <h3 className="serif-title text-2xl text-white mb-4 tracking-wide">Safety & Compliance</h3>
                        <p className="text-white/40 text-sm font-light leading-loose">
                            Strict adherence to BIS certification and international safety benchmarks. Rigorous monthly audits ensure zero-compromise operation.
                        </p>
                    </div>
                    <div className="bg-background-dark p-10 hover:shadow-[0_0_15px_rgba(201,167,74,0.15)] hover:border-primary/80 transition-all group border-primary/10">
                        <Cpu className="text-primary mb-6" size={32} />
                        <h3 className="serif-title text-2xl text-white mb-4 tracking-wide">Genuine Components</h3>
                        <p className="text-white/40 text-sm font-light leading-loose">
                            Exclusively utilizing original, high-grade replacement parts engineered for longevity and seamless technical integration.
                        </p>
                    </div>
                </div>
            </section>
            <ContactSection />
        </div>
    )
}

export default Services
