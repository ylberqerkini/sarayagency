import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronRight, Instagram, Twitter, Linkedin, Mail, 
  ArrowRight, Star, TrendingUp, Users, Award, CheckCircle, 
  Play, BarChart, Globe, ShieldCheck, Camera, PenTool 
} from 'lucide-react';

// --- MOCK DATA ---
const SERVICES = [
  {
    title: "Campaign Management",
    description: "End-to-end execution of high-impact influencer campaigns tailored to your brand's prestige.",
    icon: <TrendingUp className="w-8 h-8 text-[#D4AF37]" />
  },
  {
    title: "Creator Sourcing",
    description: "Access our exclusive network of vetted, high-conversion luxury creators.",
    icon: <Users className="w-8 h-8 text-[#D4AF37]" />
  },
  {
    title: "UGC Production",
    description: "Premium user-generated content that blends authenticity with editorial quality.",
    icon: <Camera className="w-8 h-8 text-[#D4AF37]" />
  },
  {
    title: "Brand Ambassadors",
    description: "Long-term partnerships with faces that embody your brand's values.",
    icon: <Award className="w-8 h-8 text-[#D4AF37]" />
  },
  {
    title: "Creative Strategy",
    description: "Data-backed narrative construction for maximum market penetration.",
    icon: <PenTool className="w-8 h-8 text-[#D4AF37]" />
  },
  {
    title: "Contracts & Compliance",
    description: "Ironclad legal frameworks ensuring safety and professionalism.",
    icon: <ShieldCheck className="w-8 h-8 text-[#D4AF37]" />
  }
];

const INFLUENCERS = [
  { category: "Beauty", count: "1.2k+", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop" },
  { category: "Fashion", count: "850+", image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop" },
  { category: "Luxury Lifestyle", count: "400+", image: "https://images.unsplash.com/photo-1507764923504-cd90bf7da772?q=80&w=800&auto=format&fit=crop" },
  { category: "Fitness", count: "600+", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop" },
  { category: "Travel", count: "900+", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop" }
];

const TESTIMONIALS = [
  {
    quote: "Saray Agency transformed our digital presence. The caliber of influencers they provide is unmatched in the luxury sector.",
    author: "Elena V.",
    role: "CMO, Aurum Jewelry"
  },
  {
    quote: "Professional, data-driven, and incredibly stylish execution. They understand the nuance of high-end branding.",
    author: "Marcus T.",
    role: "Founder, Noir Timepieces"
  }
];

// --- COMPONENTS ---

const Navbar = ({ activePage, setActivePage, isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', page: 'home' },
    { name: 'About', page: 'about' },
    { name: 'Services', page: 'services' },
    { name: 'Influencers', page: 'influencers' },
    { name: 'Brands', page: 'brands' },
    { name: 'Media Kit', page: 'mediakit' },
    { name: 'Contact', page: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4 border-b border-[#D4AF37]/20' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="font-playfair text-2xl md:text-3xl font-bold tracking-wider text-white cursor-pointer"
          onClick={() => setActivePage('home')}
        >
          SARAY<span className="text-[#D4AF37]">.</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => setActivePage(link.page)}
              className={`text-sm tracking-widest uppercase transition-colors duration-300 font-montserrat ${
                activePage === link.page ? 'text-[#D4AF37]' : 'text-gray-300 hover:text-white'
              }`}
            >
              {link.name}
            </button>
          ))}
          <button 
             onClick={() => setActivePage('contact')}
             className="px-6 py-2 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 uppercase text-xs tracking-widest font-bold"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black border-b border-[#D4AF37]/30 py-8 flex flex-col items-center space-y-6">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => {
                setActivePage(link.page);
                setIsMobileMenuOpen(false);
              }}
              className="text-white hover:text-[#D4AF37] text-lg tracking-widest uppercase font-montserrat"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

const Footer = ({ setActivePage }) => {
  return (
    <footer className="bg-[#050505] text-white pt-20 pb-10 border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <h2 className="font-playfair text-3xl font-bold mb-6">SARAY<span className="text-[#D4AF37]">.</span></h2>
          <p className="text-gray-400 font-montserrat text-sm leading-relaxed mb-6">
            Connecting premium brands with elite creators. The gold standard in influencer marketing.
          </p>
          <div className="flex space-x-4">
            <Instagram className="w-5 h-5 text-gray-400 hover:text-[#D4AF37] cursor-pointer transition-colors" />
            <Twitter className="w-5 h-5 text-gray-400 hover:text-[#D4AF37] cursor-pointer transition-colors" />
            <Linkedin className="w-5 h-5 text-gray-400 hover:text-[#D4AF37] cursor-pointer transition-colors" />
          </div>
        </div>

        <div>
          <h3 className="font-playfair text-lg text-[#D4AF37] mb-6">Company</h3>
          <ul className="space-y-4 font-montserrat text-sm text-gray-400">
            <li className="hover:text-white cursor-pointer transition-colors" onClick={() => setActivePage('about')}>About Us</li>
            <li className="hover:text-white cursor-pointer transition-colors" onClick={() => setActivePage('services')}>Services</li>
            <li className="hover:text-white cursor-pointer transition-colors" onClick={() => setActivePage('brands')}>For Brands</li>
            <li className="hover:text-white cursor-pointer transition-colors" onClick={() => setActivePage('contact')}>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="font-playfair text-lg text-[#D4AF37] mb-6">Legal</h3>
          <ul className="space-y-4 font-montserrat text-sm text-gray-400">
            <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer transition-colors">Terms of Service</li>
            <li className="hover:text-white cursor-pointer transition-colors">Cookie Policy</li>
          </ul>
        </div>

        <div>
          <h3 className="font-playfair text-lg text-[#D4AF37] mb-6">Newsletter</h3>
          <p className="text-gray-400 text-sm mb-4 font-montserrat">Join our exclusive list for industry insights.</p>
          <div className="flex border-b border-gray-700 pb-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-transparent border-none outline-none text-white w-full placeholder-gray-600 font-montserrat text-sm"
            />
            <button className="text-[#D4AF37] hover:text-white transition-colors">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-900 text-center text-gray-600 text-xs font-montserrat tracking-wider">
        Â© 2025 SARAY AGENCY. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
};

const ServiceCard = ({ icon, title, description }) => (
  <div className="group p-8 border border-white/5 hover:border-[#D4AF37]/50 bg-[#0a0a0a] hover:bg-[#111] transition-all duration-500 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-1 h-0 bg-[#D4AF37] group-hover:h-full transition-all duration-500 ease-in-out"></div>
    <div className="mb-6 transform group-hover:-translate-y-2 transition-transform duration-500">
      {icon}
    </div>
    <h3 className="text-xl font-playfair text-white mb-3 group-hover:text-[#D4AF37] transition-colors">{title}</h3>
    <p className="text-gray-400 font-montserrat text-sm leading-relaxed">{description}</p>
  </div>
);

const SectionHeader = ({ title, subtitle, align = "center" }) => (
  <div className={`mb-16 ${align === "left" ? "text-left" : "text-center"}`}>
    <h2 className="text-[#D4AF37] font-montserrat text-xs tracking-[0.3em] uppercase mb-3">
      {subtitle}
    </h2>
    <h3 className="text-3xl md:text-5xl font-playfair text-white leading-tight">
      {title}
    </h3>
  </div>
);

// --- PAGES ---

const HomePage = ({ setActivePage }) => (
  <div className="w-full">
    {/* Hero */}
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          src="https://images.unsplash.com/photo-1531256379416-9f000e90aacc?q=80&w=1920&auto=format&fit=crop" 
          alt="Luxury Fashion" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
            Elite Influencer <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D06B]">Marketing</span>
          </h1>
          <p className="font-montserrat text-gray-300 text-lg md:text-xl tracking-wide mb-10 max-w-2xl mx-auto font-light">
            We connect premium brands with high-performing creators to craft narratives that convert.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <button 
              onClick={() => setActivePage('contact')}
              className="px-8 py-4 bg-[#D4AF37] text-black font-montserrat font-bold tracking-widest uppercase text-sm hover:bg-white transition-colors duration-300"
            >
              Work With Us
            </button>
            <button 
              onClick={() => setActivePage('influencers')}
              className="px-8 py-4 border border-white text-white font-montserrat font-bold tracking-widest uppercase text-sm hover:bg-white hover:text-black transition-colors duration-300"
            >
              For Influencers
            </button>
          </div>
        </div>
      </div>
    </section>

    {/* Featured Services Preview */}
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader title="Our Expertise" subtitle="What We Do" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.slice(0, 3).map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <button onClick={() => setActivePage('services')} className="text-[#D4AF37] font-montserrat text-sm tracking-widest uppercase border-b border-[#D4AF37] pb-1 hover:text-white hover:border-white transition-all">View All Services</button>
        </div>
      </div>
    </section>

    {/* Brand Video / Stats Parallax */}
    <section className="py-32 relative bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1565538420870-da08ff96a207?q=80&w=1920&auto=format&fit=crop')"}}>
      <div className="absolute inset-0 bg-black/80"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        <div>
          <div className="text-[#D4AF37] text-5xl font-playfair font-bold mb-2">500+</div>
          <div className="text-white font-montserrat tracking-widest uppercase text-sm">Campaigns Launched</div>
        </div>
        <div>
          <div className="text-[#D4AF37] text-5xl font-playfair font-bold mb-2">$50M+</div>
          <div className="text-white font-montserrat tracking-widest uppercase text-sm">Revenue Generated</div>
        </div>
        <div>
          <div className="text-[#D4AF37] text-5xl font-playfair font-bold mb-2">2K+</div>
          <div className="text-white font-montserrat tracking-widest uppercase text-sm">Vetted Creators</div>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <Star className="w-8 h-8 text-[#D4AF37] mx-auto mb-8" />
        <h3 className="text-3xl md:text-4xl font-playfair text-white italic leading-relaxed mb-8">
          "{TESTIMONIALS[0].quote}"
        </h3>
        <div>
          <p className="text-[#D4AF37] font-bold font-montserrat uppercase tracking-wider">{TESTIMONIALS[0].author}</p>
          <p className="text-gray-500 text-sm font-montserrat mt-1">{TESTIMONIALS[0].role}</p>
        </div>
      </div>
    </section>
  </div>
);

const AboutPage = () => (
  <div className="w-full pt-32 pb-24 bg-black min-h-screen">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <div>
          <SectionHeader align="left" title="Redefining Influence for the Modern Era" subtitle="Who We Are" />
          <p className="text-gray-400 font-montserrat leading-relaxed mb-6">
            Saray Agency was founded on a simple premise: Luxury requires a different language. We are not just marketers; we are curators of digital prestige.
          </p>
          <p className="text-gray-400 font-montserrat leading-relaxed mb-8">
            Our mission is to bridge the gap between heritage brands and the fast-paced world of digital creators without compromising on elegance, exclusivity, or brand equity.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div className="border-l border-[#D4AF37] pl-6">
              <h4 className="text-white font-playfair text-xl mb-2">Exclusivity</h4>
              <p className="text-sm text-gray-500 font-montserrat">Access to an invite-only network.</p>
            </div>
            <div className="border-l border-[#D4AF37] pl-6">
              <h4 className="text-white font-playfair text-xl mb-2">Precision</h4>
              <p className="text-sm text-gray-500 font-montserrat">Data-driven matching logic.</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-full h-full border border-[#D4AF37] z-0"></div>
          <img 
            src="https://images.unsplash.com/photo-1551488852-d80a392a5439?q=80&w=800&auto=format&fit=crop" 
            alt="Office aesthetics" 
            className="relative z-10 w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </div>
    </div>
  </div>
);

const ServicesPage = () => (
  <div className="w-full pt-32 pb-24 bg-black min-h-screen">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader title="Comprehensive Digital Solutions" subtitle="Our Services" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  </div>
);

const InfluencersPage = () => (
  <div className="w-full pt-32 pb-24 bg-black min-h-screen">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader title="Our Talent Network" subtitle="The Collective" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {INFLUENCERS.map((item, index) => (
          <div key={index} className="relative group overflow-hidden h-[400px] cursor-pointer">
            <img 
              src={item.image} 
              alt={item.category} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>
            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black to-transparent">
              <h3 className="text-2xl font-playfair text-white mb-1">{item.category}</h3>
              <div className="flex items-center space-x-2">
                <div className="h-[1px] w-8 bg-[#D4AF37]"></div>
                <p className="text-gray-300 font-montserrat text-sm">{item.count} Creators</p>
              </div>
            </div>
          </div>
        ))}
        
        {/* Call to Action Card */}
        <div className="relative h-[400px] bg-[#0a0a0a] border border-white/10 flex flex-col justify-center items-center text-center p-8 group hover:border-[#D4AF37]/50 transition-colors">
          <Star className="w-12 h-12 text-[#D4AF37] mb-6" />
          <h3 className="text-2xl font-playfair text-white mb-4">Join The Roster</h3>
          <p className="text-gray-400 font-montserrat text-sm mb-8">Are you a creator with a premium audience?</p>
          <button className="px-8 py-3 bg-white text-black font-montserrat font-bold text-xs uppercase tracking-widest hover:bg-[#D4AF37] transition-colors">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  </div>
);

const BrandsPage = () => (
  <div className="w-full pt-32 pb-24 bg-black min-h-screen">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader title="Why Partner With Saray" subtitle="For Brands" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
        <div className="bg-[#0a0a0a] p-10 text-center border-t-2 border-[#D4AF37]">
          <BarChart className="w-10 h-10 text-white mx-auto mb-6" />
          <h4 className="text-xl font-playfair text-white mb-4">ROI-Focused</h4>
          <p className="text-gray-400 font-montserrat text-sm">Every campaign is optimized for maximum return, whether your goal is awareness or conversion.</p>
        </div>
        <div className="bg-[#0a0a0a] p-10 text-center border-t-2 border-[#D4AF37]">
          <Globe className="w-10 h-10 text-white mx-auto mb-6" />
          <h4 className="text-xl font-playfair text-white mb-4">Global Reach</h4>
          <p className="text-gray-400 font-montserrat text-sm">Access audiences in key luxury markets: New York, Paris, Milan, Dubai, and Tokyo.</p>
        </div>
        <div className="bg-[#0a0a0a] p-10 text-center border-t-2 border-[#D4AF37]">
          <ShieldCheck className="w-10 h-10 text-white mx-auto mb-6" />
          <h4 className="text-xl font-playfair text-white mb-4">Brand Safety</h4>
          <p className="text-gray-400 font-montserrat text-sm">Rigorous vetting ensures your brand is only associated with reputable, premium voices.</p>
        </div>
      </div>

      <div className="border border-white/10 p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Award className="w-64 h-64 text-white" />
        </div>
        <div className="relative z-10 max-w-2xl">
          <h3 className="text-3xl font-playfair text-white mb-6">Ready to elevate your brand?</h3>
          <p className="text-gray-400 font-montserrat mb-8">
            Our team of strategists is ready to build your next custom campaign. 
            Schedule a consultation to view our full case study library.
          </p>
          <button className="px-8 py-3 bg-[#D4AF37] text-black font-montserrat font-bold text-sm uppercase tracking-widest hover:bg-white transition-colors">
            Request Case Studies
          </button>
        </div>
      </div>
    </div>
  </div>
);

const MediaKitPage = () => (
  <div className="w-full pt-32 pb-24 bg-black min-h-screen flex items-center justify-center">
    <div className="max-w-3xl mx-auto px-6 text-center">
      <SectionHeader title="Download Our Media Kit" subtitle="Resources" />
      <p className="text-gray-400 font-montserrat mb-10 text-lg">
        Get the full breakdown of our demographics, audience reach, pricing tiers, and past campaign performance metrics.
      </p>
      
      <div className="inline-block p-1 border border-[#D4AF37] rounded-sm">
        <div className="bg-[#0a0a0a] p-12 border border-white/5">
          <div className="mb-8">
            <TrendingUp className="w-16 h-16 text-white mx-auto opacity-50" />
          </div>
          <h3 className="text-2xl font-playfair text-white mb-2">Saray Agency 2025 Kit</h3>
          <p className="text-gray-500 font-montserrat text-sm mb-8 uppercase tracking-widest">PDF Document â€¢ 4.2 MB</p>
          <button className="flex items-center justify-center space-x-3 w-full px-8 py-4 bg-white text-black font-montserrat font-bold text-sm uppercase tracking-widest hover:bg-[#D4AF37] transition-colors">
             <span>Download PDF</span>
             <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  </div>
);

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'Brand',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you. A representative will contact you within 24 hours.");
  };

  return (
    <div className="w-full pt-32 pb-24 bg-black min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader title="Let's Create Together" subtitle="Contact Us" />
        
        <div className="bg-[#0a0a0a] p-8 md:p-12 border border-white/5">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[#D4AF37] font-montserrat text-xs uppercase tracking-widest">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-gray-700 text-white py-3 focus:outline-none focus:border-[#D4AF37] transition-colors font-playfair"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[#D4AF37] font-montserrat text-xs uppercase tracking-widest">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b border-gray-700 text-white py-3 focus:outline-none focus:border-[#D4AF37] transition-colors font-playfair"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-[#D4AF37] font-montserrat text-xs uppercase tracking-widest">I am a</label>
              <div className="flex space-x-8">
                {['Brand', 'Influencer', 'Agency'].map((type) => (
                  <label key={type} className="flex items-center space-x-3 cursor-pointer group">
                    <div className={`w-4 h-4 border ${formData.type === type ? 'bg-[#D4AF37] border-[#D4AF37]' : 'border-gray-500'} flex items-center justify-center transition-colors`}></div>
                    <span className={`text-sm font-montserrat ${formData.type === type ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`}>{type}</span>
                    <input 
                      type="radio" 
                      name="type" 
                      value={type} 
                      className="hidden"
                      onChange={(e) => setFormData({...formData, type: e.target.value})}
                      checked={formData.type === type}
                    />
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[#D4AF37] font-montserrat text-xs uppercase tracking-widest">Message</label>
              <textarea 
                rows="4"
                className="w-full bg-transparent border-b border-gray-700 text-white py-3 focus:outline-none focus:border-[#D4AF37] transition-colors font-playfair resize-none"
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>

            <div className="pt-6">
              <button type="submit" className="px-10 py-4 bg-[#D4AF37] text-black font-montserrat font-bold text-sm uppercase tracking-widest hover:bg-white transition-colors w-full md:w-auto">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [activePage, setActivePage] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  // Inject Fonts via style tag
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  const renderPage = () => {
    switch(activePage) {
      case 'home': return <HomePage setActivePage={setActivePage} />;
      case 'about': return <AboutPage />;
      case 'services': return <ServicesPage />;
      case 'influencers': return <InfluencersPage />;
      case 'brands': return <BrandsPage />;
      case 'mediakit': return <MediaKitPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#D4AF37] selection:text-black">
      <Navbar activePage={activePage} setActivePage={setActivePage} isScrolled={isScrolled} />
      
      <main className="transition-opacity duration-500 ease-in-out">
        {renderPage()}
      </main>

      <Footer setActivePage={setActivePage} />

      <style>{`
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-montserrat { font-family: 'Montserrat', sans-serif; }
      `}</style>
    </div>
  );
};

export default App;
