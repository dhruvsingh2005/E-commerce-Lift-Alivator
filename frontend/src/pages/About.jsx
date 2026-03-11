import React from 'react'
import ContactSection from '../components/ContactSection'
import { Briefcase, Users, Building2, Scale, TrendingUp, FileCheck } from 'lucide-react'

const About = () => {
    return (
        <div className="pt-20">
    {/* Hero Section */}
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center px-4 sm:px-6">
        <div className="absolute inset-0 opacity-40">
            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAr6xlf8FH3Dp5TpPXSaHbiGGJS_MYLdMbrlOBH51VdQ1gvyPGjmBkFqGykHAWtCrreJNvzMuA4Wz3VBLcdkzVtrZtGRhEq3Tc_fbhujcTI-t__1kVf1l95XlOzDsUII63XiMFTM1zW4uc5a2BuXFr30CppHTk1v9rwGVtNeUsZwAt-yyMsCJRRpvuvZaj7hm7DpWU0EN5pFZ8sHJF05DiT2FZgCgeJ63nilquRKmEoGyIUVeWu-NZdaKRQ6EnOo9Lvxsm2UbL5wn4i')" }}></div>
            <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
            <span className="text-primary tracking-[0.4em] text-[10px] uppercase mb-8 block font-semibold">Elevating the Standard</span>
            <h1 className="serif-title text-4xl sm:text-6xl md:text-8xl font-light mb-8 text-white">Our Story</h1>
            <div className="gold-hairline w-32 mx-auto mb-12"></div>
            <p className="text-lg md:text-xl font-light leading-relaxed text-white/70 max-w-2xl mx-auto italic serif-title">
                A legacy of vertical mastery and gold-standard heritage. Engineering the future of luxury mobility with vision, precision, and an unwavering commitment to the extraordinary.
            </p>
        </div>
    </section>

    {/* Craftsmanship - Ise edge-to-edge orange kiya gaya hai */}
    <section className="py-16 sm:py-32 bg-primary relative overflow-hidden w-full">
        <div className="absolute -left-10 top-20 section-number text-[10rem] sm:text-[20rem] font-bold select-none pointer-events-none opacity-10 text-black">01</div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-16 items-center">
        <div className="lg:col-span-5 relative z-10">
            <h2 className="serif-title text-4xl md:text-5xl mb-8 leading-tight text-[#1A1A1A]">Mastery in <br /><span className="text-[#F15A29] italic">Craftsmanship</span></h2>
            {/* Paragraph ko Pure White kiya gaya hai */}
            <p className="text-[#1A1A1A] mb-8 leading-relaxed font-light">
                Every Winsume lift is a masterpiece of material selection. We source the finest artisanal woods, hand-polished gold leaf, and marine-grade stainless steel to create interiors that feel more like private galleries than transit spaces.
            </p>
            {/* Archive link ka text size aur visibility increase ki gayi hai */}
            <div className="flex gap-4 items-center group cursor-pointer">
                <span className="h-[1px] w-12 bg-[#1A1A1A] group-hover:w-20 transition-all duration-500"></span>
                <span className="text-sm md:text-base uppercase tracking-[0.2em] text-[#1A1A1A] font-bold">The Material Archive</span>
            </div>
        </div>

                <div className="lg:col-span-7 grid grid-cols-2 gap-4">
                    <div className="pt-12">
                        <div className="aspect-[3/4] rounded-sm overflow-hidden mb-4">
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD55XoxnLDbD-Gz91FpOjoU26G_4CZHPE8HnsdhUwJEJ7FuEBW7-ZzNzcqaAThPk7Yn3AoUsPMoDl4sk4Q3X4S2mJs3rH9KoMPkE5bZM3H80R9RESj_xYQPOlbGBU_bWVnuIxFuE1kt-6tSQ0HAhD0hYTg0lkdEdI2OyR1kTsdhIVb1dRkq5VnCS_njKs3GOj1UnfgLENkyarLQPo89P3E9AZ3FHan_HzcYG6-QvV3Wwz8XVYb8T2O8SsWFZ_Hoaolw5cWRH3wGTt32" alt="Gold Panels" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                        </div>
                        <p className="serif-title italic text-semibold text-black">Hand-Finished Gold Panels</p>
                    </div>
                    <div>
                        <div className="aspect-[3/4] rounded-sm overflow-hidden mb-4">
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxjMpLAi-2mA7N5b1RwB-4NF5gU-SQ9U_Negf0jnauSKZgek8P5TdjuRfzuCfnyM2Swp0WcYg-Ise3PmKFi0tKxjOpT6yg5-LL4VKj0RcpKO3iCp7Pve534iEt7Dv-ongWSOkKXjDmmRkQWplvw0HdnFl1UjUDI3yNnuUfqwwt6wZIogZHFOVB6bGut6lfDM8zdzIcdoezdW0iZRy0rEoKWEHAbqJttd0Jsw7nvXlAE5DTbadnMs1L7-55cjWLDWI4j92lXWYVDOj0" alt="Wood Interiors" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                        </div>
                        <p className="serif-title italic text-semibold text-black">Artisan Wood Interiors</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

            {/* Company & Compliance */}
            <section className="py-16 sm:py-32 bg-primary relative w-full overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="relative mb-16">
            <h2 className="serif-title text-4xl md:text-5xl mb-6 relative z-10 text-[#1A1A1A]">
                Company & <br />
                <span className="italic text-white">Compliance</span>
            </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 lg:gap-10 relative z-10">
            {[
                { icon: Briefcase, label: "Nature of Business", value: "Service Provider and Others" },
                { icon: Users, label: "Total Number of Employees", value: "Upto 10 People" },
                { icon: Building2, label: "GST Registration Date", value: "01-08-2022" },
                { icon: Scale, label: "Legal Status of Firm", value: "Limited Company" },
                { icon: TrendingUp, label: "Annual Turnover", value: "1.5 - 5 Cr" },
                { icon: FileCheck, label: "GST No.", value: "23AACCW7463L1ZY" },
                { icon: FileCheck, label: "CIN No.", value: "U31909MP2020PTC052784" },
            ].map((item, index) => (
                /* Box: Deep Charcoal Background (Orange ke sath best blend hota hai) */
                <div key={index} className="flex gap-4 p-6 rounded-sm bg-[#1A1A1A] border border-white/5 hover:border-white/20 hover:translate-y-[-4px] transition-all duration-300 shadow-2xl">
                    
                    {/* Icon Container: Champagne Gold Look */}
                    <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-sm border border-[#D4AF37]/30 bg-[#D4AF37]/10">
                        <item.icon className="w-6 h-6 text-[#D4AF37]" strokeWidth={1.5} />
                    </div>

                    <div className="min-w-0">
                        {/* Label: Muted White/Grey */}
                        <p className="text-white/50 text-xs uppercase tracking-wider font-bold mb-1">
                            {item.label}
                        </p>
                        {/* Value: Pure White for maximum readability */}
                        <p className="text-white font-medium serif-title text-base lg:text-lg leading-tight">
                            {item.value}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </div>
</section>
            {/* Contact Area */}
            <ContactSection />
        </div>
    )
}

export default About
