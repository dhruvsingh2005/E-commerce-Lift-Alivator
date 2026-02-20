import React from 'react'
import ContactSection from '../components/ContactSection'

const About = () => {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex flex-col items-center justify-center px-6">
                <div className="absolute inset-0 opacity-40">
                    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAr6xlf8FH3Dp5TpPXSaHbiGGJS_MYLdMbrlOBH51VdQ1gvyPGjmBkFqGykHAWtCrreJNvzMuA4Wz3VBLcdkzVtrZtGRhEq3Tc_fbhujcTI-t__1kVf1l95XlOzDsUII63XiMFTM1zW4uc5a2BuXFr30CppHTk1v9rwGVtNeUsZwAt-yyMsCJRRpvuvZaj7hm7DpWU0EN5pFZ8sHJF05DiT2FZgCgeJ63nilquRKmEoGyIUVeWu-NZdaKRQ6EnOo9Lvxsm2UbL5wn4i')" }}></div>
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>
                <div className="relative z-10 text-center max-w-4xl mx-auto">
                    <span className="text-primary tracking-[0.4em] text-[10px] uppercase mb-8 block font-semibold">Elevating the Standard</span>
                    <h1 className="serif-title text-6xl md:text-8xl font-light mb-8 text-white">Our Story</h1>
                    <div className="gold-hairline w-32 mx-auto mb-12"></div>
                    <p className="text-lg md:text-xl font-light leading-relaxed text-white/70 max-w-2xl mx-auto italic serif-title">
                        A legacy of vertical mastery and gold-standard heritage. Engineering the future of luxury mobility with vision, precision, and an unwavering commitment to the extraordinary.
                    </p>
                </div>
            </section>

            {/* Craftsmanship */}
            <section className="py-32 px-6 max-w-7xl mx-auto relative overflow-hidden">
                <div className="absolute -left-10 top-20 section-number text-[20rem] font-bold select-none pointer-events-none opacity-10">01</div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-32">
                    <div className="lg:col-span-5 relative z-10">
                        <h2 className="serif-title text-4xl md:text-5xl mb-8 leading-tight text-white">Mastery in <br /><span className="text-primary italic">Craftsmanship</span></h2>
                        <p className="text-white/60 mb-8 leading-relaxed font-light">
                            Every Winsume lift is a masterpiece of material selection. We source the finest artisanal woods, hand-polished gold leaf, and marine-grade stainless steel to create interiors that feel more like private galleries than transit spaces.
                        </p>
                        <div className="flex gap-4 items-center group cursor-pointer">
                            <span className="h-[1px] w-8 bg-primary group-hover:w-16 transition-all duration-500"></span>
                            <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold">The Material Archive</span>
                        </div>
                    </div>
                    <div className="lg:col-span-7 grid grid-cols-2 gap-4">
                        <div className="pt-12">
                            <div className="aspect-[3/4] rounded-sm overflow-hidden mb-4">
                                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD55XoxnLDbD-Gz91FpOjoU26G_4CZHPE8HnsdhUwJEJ7FuEBW7-ZzNzcqaAThPk7Yn3AoUsPMoDl4sk4Q3X4S2mJs3rH9KoMPkE5bZM3H80R9RESj_xYQPOlbGBU_bWVnuIxFuE1kt-6tSQ0HAhD0hYTg0lkdEdI2OyR1kTsdhIVb1dRkq5VnCS_njKs3GOj1UnfgLENkyarLQPo89P3E9AZ3FHan_HzcYG6-QvV3Wwz8XVYb8T2O8SsWFZ_Hoaolw5cWRH3wGTt32" alt="Gold Panels" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                            </div>
                            <p className="serif-title italic text-sm text-primary/80">Hand-Finished Gold Panels</p>
                        </div>
                        <div>
                            <div className="aspect-[3/4] rounded-sm overflow-hidden mb-4">
                                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxjMpLAi-2mA7N5b1RwB-4NF5gU-SQ9U_Negf0jnauSKZgek8P5TdjuRfzuCfnyM2Swp0WcYg-Ise3PmKFi0tKxjOpT6yg5-LL4VKj0RcpKO3iCp7Pve534iEt7Dv-ongWSOkKXjDmmRkQWplvw0HdnFl1UjUDI3yNnuUfqwwt6wZIogZHFOVB6bGut6lfDM8zdzIcdoezdW0iZRy0rEoKWEHAbqJttd0Jsw7nvXlAE5DTbadnMs1L7-55cjWLDWI4j92lXWYVDOj0" alt="Wood Interiors" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                            </div>
                            <p className="serif-title italic text-sm text-primary/80">Artisan Wood Interiors</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Innovation Area */}
            <section className="py-32 bg-white/5 relative border-y border-primary/10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div className="max-w-xl relative">
                            <div className="absolute -top-16 -left-10 section-number text-[12rem] font-bold opacity-10">02</div>
                            <h2 className="serif-title text-4xl md:text-5xl mb-6 relative z-10 text-white">Innovation & <br /><span className="italic text-primary">Engineering</span></h2>
                            <p className="text-white/60 font-light">Redefining the physics of vertical movement. Our engineering core focuses on near-silent operation, zero-vibration technology, and intelligent dispatch systems.</p>
                        </div>
                        <div className="flex gap-12 border-l border-primary/20 pl-12 py-4">
                            <div className="text-center">
                                <div className="text-3xl serif-title text-primary mb-1">0.1mm</div>
                                <div className="text-[9px] uppercase tracking-widest text-white/40 font-bold">Precision Leveling</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl serif-title text-primary mb-1">&lt;35dB</div>
                                <div className="text-[9px] uppercase tracking-widest text-white/40 font-bold">Acoustic Comfort</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Contact Area */}
            <ContactSection />
        </div>
    )
}

export default About
