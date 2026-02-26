import React from 'react'
import ContactSection from '../components/ContactSection'

const Portfolio = () => {
    {/* ... other code remains same ... */}
    const projects = [
        {
            title: "Phoenix Mall, Indore",
            location: "Indore — 2023",
            description: "12x Stainless Steel High-Speed Lifts",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCThj0FBPR2xG6-za-MvfatCZvLXn929Ryq2He-ruoQ-80WJRN1LbShAlWF0plT0FGOmjNAZB6zJa9oVzRmGB7L9fDO0bfznjLx_Z1u4vMET-E1irY3oe7cZWPYE04t8zs4Yx_fMGXYrT6LEmFUNN67uPTwFmqqNEn86gdkZFo2thp6mtKvLDOfsTX3P4I18_A8ImK7EXc5Jvp5LAG6xfunTkcIrLwGjqWc_zNyUBqQ_4fSzoBncPg8fBHUEkwO6lrmT-VgAIV6ja89",
            large: true
        },
        {
            title: "Sayaji Hotels",
            location: "Pune — 2022",
            description: "MRL Gold-Edition Lifts",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlrXQg72gInl08C7RcbS8yyyN_bR486PBHhOlt8ZSFQ4me0qZfhLCl4XcTkI_kK2m3IJ8HSJ3QJ01Elp5FXau3jNgllI_qjijwdy06JUhGc2H1EEUmz60lVaryBxn-eiu9og2y8HXpzcBdoYz8YwR01qOvM3j_959mCAi_5YS6sKYApnQprMEazXbXwuzS7S3NdRebrhJZtNKKVg5kkXo8j8qDgran0Gcp8bA01i1_1bJwtFdJiMGhRMKt-CGzYpADzMVRicHin7Wt",
            large: false
        },
        {
            title: "Radisson Blu",
            location: "Mumbai — 2024",
            description: "Panoramic Glass Elevators",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCK0Ot0NcctgYsD57Vwzm2QUV9Lh-uu9_q6Jk3ErE6yymbFLTBCXb2UTX_-ldDL9rJtn9owKxTIggmI8VaGTtFxcCT9UUyJ7ygt6Ian1jMsmsTAXFPsmsrLs-XbV7-YCm_1lCDq0GIaA-CLfn8XX_xrNcHUgBl5EbCTolqlYoz-NgnTcsw0lOEAmN6Jh5muiabv6tryoIsLf5cEOWG5_ihnWetNZ6auMLGFFTcNv0OHPuO9019J5u1JkY7MziZTuPkkB4Khpv3ajHwv",
            large: false
        }
    ];

    return (
        <div className="pt-24 pb-16 min-h-screen bg-background-dark">
            <section className="max-w-7xl mx-auto px-6 lg:px-12 relative">
                <div className="absolute -left-12 lg:left-0 top-12 select-none pointer-events-none">
                    <span className="section-marker opacity-10 font-serif text-[12rem] text-primary">04</span>
                </div>
                <div className="relative z-10 w-full max-w-3xl mx-auto text-center">
                    <h1 className="serif-title text-6xl md:text-8xl text-white font-medium mb-8">Our Work</h1>
                    <div className="gold-hairline mt-4 mx-auto"></div>
                </div>
                <div className="max-w-2xl mx-auto mt-8 text-center">
                    <p className="text-gray-500 text-lg font-light leading-relaxed font-manrope">
                        Setting the standard in vertical mobility with bespoke architectural solutions. Discover our prestigious installations across India's premier commercial and residential developments.
                    </p>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-24 mt-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Featured Project */}
                    <div className="lg:col-span-2 group relative aspect-[16/10] overflow-hidden border-t border-primary/50">
                        <div className="absolute inset-0 bg-background-dark/40 group-hover:bg-background-dark/20 transition-all duration-700 z-10"></div>
                        <img src={projects[0].image} alt={projects[0].title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-80 z-20"></div>
                        <div className="absolute bottom-0 left-0 w-full p-8 z-40">
                            <p className="text-primary font-manrope text-[10px] tracking-[0.4em] uppercase mb-2">{projects[0].location}</p>
                            <h3 className="serif-title text-4xl md:text-5xl text-white mb-2">{projects[0].title}</h3>
                            <p className="text-white/70 text-sm font-medium tracking-wide uppercase italic">{projects[0].description}</p>
                        </div>
                    </div>

                    {/* Side Projects */}
                    <div className="flex flex-col gap-8">
                        {projects.slice(1).map((project, index) => (
                            <div key={index} className="group relative aspect-square overflow-hidden border-t border-primary/50">
                                <div className="absolute inset-0 bg-background-dark/40 z-10 transition-all duration-700"></div>
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent z-20"></div>
                                <div className="absolute bottom-0 left-0 w-full p-6 z-40">
                                    <p className="text-primary font-manrope text-[9px] tracking-[0.4em] uppercase mb-1">{project.location}</p>
                                    <h3 className="serif-title text-2xl text-white">{project.title}</h3>
                                    <p className="text-white/50 text-[11px] uppercase tracking-widest">{project.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <ContactSection />
        </div>
    )
}

export default Portfolio
