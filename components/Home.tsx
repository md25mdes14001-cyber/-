import React from 'react';
import { ArrowRight, Feather, Shield, Heart, Activity, Sparkles, BookOpen, Leaf, PenTool, Users, TrendingUp, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

const Home: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    hi: {
      heroTitle: 'नागरिक बोध ही धर्म है',
      heroSub: '(Civic Sense is Dharma)',
      heroQuote: '"सत्य, अहिंसा और स्वच्छता (पवित्रता) का पालन ही सच्चे नागरिक की पहचान है।"',
      cta: 'यात्रा शुरू करें (Start Journey)',
      sec1: '१. बोध (Understanding)',
      card1Title: 'नागरिक बोध क्या है?',
      card1Desc: 'नागरिक बोध केवल "नियम" नहीं है, यह ५ आधारस्तंभों पर टिका है: शौच, अहिंसा, मर्यादा, ऋत और भूमि-सेवा।',
      card1Link: 'परिभाषा पढ़ें',
      card2Title: 'डेटा और चुनौतियां',
      card2Desc: 'Pew Research और IIT के डेटा के माध्यम से समझें कि भारत में नागरिक व्यवहार की वास्तविक स्थिति और आर्थिक प्रभाव क्या है।',
      card2Link: 'आंकड़े देखें',
      sec2: '२. आधार (Foundation)',
      card3Title: 'शास्त्र प्रमाण',
      card3Desc: 'वेद, उपनिषद और गीता के श्लोक जो नागरिक कर्तव्य सिखाते हैं।',
      card3Link: 'श्लोक पढ़ें',
      card4Title: 'वैदिक जीवनशैली',
      card4Desc: 'धर्म → मूल्य → आदतें। कैसे वैदिक मूल्य आधुनिक जीवन को बदलते हैं।',
      card4Link: 'जीवनशैली देखें',
      sec3: '३. कर्म (Action)',
      ecoTitle: 'इको-धर्म (Eco-Dharma)',
      ecoDesc: 'क्या आपकी पूजा पर्यावरण को नुकसान पहुँचा रही है? जानें कौन सी वस्तुएं शास्त्र सम्मत हैं और कौन सी निषिद्ध (जैसे प्लास्टिक, रसायण)।',
      ecoBtn: 'सही अनुष्ठान विधियाँ जानें',
      intTitle: 'हस्तक्षेप (Interventions)',
      intDesc: 'परिवर्तन के ४ स्तंभ: Education, Engineering, Enforcement, Engagement.',
      sec4: '४. सिद्धांत (Framework)',
      modelsDesc: 'हमने धर्म और नागरिक बोध के संबंधों को ८ वैज्ञानिक मॉडलों में ढाला है। ये मॉडल इंजीनियरों, डिजाइनरों और नीति निर्माताओं के लिए हैं।',
      viewModels: 'मॉडल देखें (View Models)',
      modelsSub: 'Vedic Flow, Circular Ecosystem, और Dharma OS जैसे विज़ुअल फ्रेमवर्क।',
      footerQuote: 'क्या आप इस परिवर्तन का हिस्सा बनने के लिए तैयार हैं?',
      aboutBtn: 'हमारे बारे में (About Us)'
    },
    en: {
      heroTitle: 'Civic Sense is Dharma',
      heroSub: '(Naagarik Bodh Hi Dharm Hai)',
      heroQuote: '"Truth, Non-violence, and Cleanliness (Purity) are the true marks of a citizen."',
      cta: 'Start Journey',
      sec1: '1. Understanding',
      card1Title: 'What is Civic Sense?',
      card1Desc: 'Civic sense is not just "rules", it rests on 5 pillars: Saucha (Purity), Ahimsa (Non-violence), Maryada (Decorum), Rta (Order), and Bhumi-Seva (Service to Nature).',
      card1Link: 'Read Definition',
      card2Title: 'Data & Challenges',
      card2Desc: 'Understand the real state of civic behavior in India and its economic impact through Pew Research and IIT data.',
      card2Link: 'View Stats',
      sec2: '2. Foundation',
      card3Title: 'Scriptural Evidence',
      card3Desc: 'Verses from Vedas, Upanishads, and Gita that teach civic duties.',
      card3Link: 'Read Verses',
      card4Title: 'Vedic Lifestyle',
      card4Desc: 'Dharma → Values → Habits. How Vedic values transform modern life.',
      card4Link: 'View Lifestyle',
      sec3: '3. Action',
      ecoTitle: 'Eco-Dharma',
      ecoDesc: 'Is your worship harming the environment? Learn which items are scripturally approved and which are prohibited (like plastic, chemicals).',
      ecoBtn: 'Learn Correct Rituals',
      intTitle: 'Interventions',
      intDesc: 'The 4 Pillars of Change: Education, Engineering, Enforcement, Engagement.',
      sec4: '4. Framework',
      modelsDesc: 'We have codified the relationship between Dharma and Civic Sense into 8 scientific models. These are for engineers, designers, and policymakers.',
      viewModels: 'View Models',
      modelsSub: 'Visual frameworks like Vedic Flow, Circular Ecosystem, and Dharma OS.',
      footerQuote: 'Are you ready to be part of this change?',
      aboutBtn: 'About Us'
    }
  };

  const t = language === 'hi' ? content.hi : content.en;

  return (
    <div className="space-y-0">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#2D2168] rounded-b-3xl md:rounded-3xl overflow-hidden shadow-2xl text-white border-b-8 border-[#D98F2B] mb-12">
        <div className="absolute inset-0 opacity-20">
           <img 
            src="https://images.unsplash.com/photo-1542382156909-9a50308e9336?q=80&w=1920&auto=format&fit=crop" 
            alt="Background" 
            className="w-full h-full object-cover"
           />
        </div>
        <div className="relative z-10 px-6 py-20 md:py-32 text-center max-w-5xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="bg-[#D98F2B]/20 p-4 rounded-full backdrop-blur-sm border border-[#D98F2B]/50">
                <Sparkles className="text-[#D98F2B] w-12 h-12" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight font-sanskrit tracking-wide drop-shadow-lg">
            {t.heroTitle}
          </h1>
          <p className="text-[#D98F2B] text-2xl md:text-4xl mb-8 font-serif font-medium drop-shadow-md">
            {t.heroSub}
          </p>
          
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 max-w-3xl mx-auto mb-10 shadow-xl">
             <p className="text-lg md:text-xl text-orange-50 leading-relaxed font-light">
               {t.heroQuote}
             </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={() => document.getElementById('journey-start')?.scrollIntoView({behavior: 'smooth'})} className="bg-[#D98F2B] hover:bg-[#b0721f] text-white font-bold py-4 px-10 rounded-full transition duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-orange-500/20 transform hover:-translate-y-1">
              {t.cta} <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* 2. UNDERSTANDING */}
      <section id="journey-start" className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
            <div className="w-12 h-1 bg-[#2D2168] rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2168] font-sanskrit">{t.sec1}</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
            <Link to="/definition" className="group relative bg-white rounded-2xl shadow-lg border border-orange-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Feather size={120} className="text-[#2D2168]" />
                </div>
                <div className="p-8">
                    <div className="bg-blue-50 w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <BookOpen className="text-blue-600" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-[#2D2168] mb-3 group-hover:text-blue-700 transition-colors">{t.card1Title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        {t.card1Desc}
                    </p>
                    <div className="flex items-center text-blue-600 font-bold text-sm">
                        {t.card1Link} <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>
            </Link>

            <Link to="/research" className="group relative bg-white rounded-2xl shadow-lg border border-orange-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Activity size={120} className="text-[#D98F2B]" />
                </div>
                <div className="p-8">
                    <div className="bg-orange-50 w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <TrendingUp className="text-orange-600" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-[#2D2168] mb-3 group-hover:text-orange-700 transition-colors">{t.card2Title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        {t.card2Desc}
                    </p>
                    <div className="flex items-center text-orange-600 font-bold text-sm">
                        {t.card2Link} <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>
            </Link>
        </div>
      </section>

      {/* 3. WISDOM */}
      <section className="py-16 px-4 md:px-8 bg-white rounded-3xl shadow-inner border-y border-orange-100">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-4 mb-8 justify-end text-right">
                <h2 className="text-3xl md:text-4xl font-bold text-[#D98F2B] font-sanskrit">{t.sec2}</h2>
                <div className="w-12 h-1 bg-[#D98F2B] rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <Link to="/scriptures" className="group flex flex-col md:flex-row bg-[#FFF8E7] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-orange-200">
                    <div className="bg-[#D98F2B] p-6 flex items-center justify-center md:w-1/3">
                        <Shield className="text-white w-16 h-16 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="p-6 md:w-2/3 flex flex-col justify-center">
                        <h3 className="text-xl font-bold text-[#2D2168] mb-2">{t.card3Title}</h3>
                        <p className="text-sm text-gray-700 mb-4">
                            {t.card3Desc}
                        </p>
                        <span className="text-[#D98F2B] text-sm font-bold flex items-center">
                            {t.card3Link} <ChevronRight size={16} />
                        </span>
                    </div>
                </Link>

                <Link to="/lifestyle" className="group flex flex-col md:flex-row bg-[#FFF8E7] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-orange-200">
                    <div className="bg-[#2D2168] p-6 flex items-center justify-center md:w-1/3">
                        <Heart className="text-white w-16 h-16 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="p-6 md:w-2/3 flex flex-col justify-center">
                        <h3 className="text-xl font-bold text-[#2D2168] mb-2">{t.card4Title}</h3>
                        <p className="text-sm text-gray-700 mb-4">
                            {t.card4Desc}
                        </p>
                        <span className="text-[#2D2168] text-sm font-bold flex items-center">
                            {t.card4Link} <ChevronRight size={16} />
                        </span>
                    </div>
                </Link>
            </div>
        </div>
      </section>

      {/* 4. ACTION */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
            <div className="w-12 h-1 bg-[#1F6A4C] rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F6A4C] font-sanskrit">{t.sec3}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
            <Link to="/eco-dharma" className="md:col-span-2 group relative bg-green-50 rounded-2xl p-8 border border-green-200 hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-green-600 rounded-full text-white">
                            <Leaf size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-green-900">{t.ecoTitle}</h3>
                    </div>
                    <p className="text-green-800 mb-6 leading-relaxed">
                        {t.ecoDesc}
                    </p>
                    <button className="bg-green-600 text-white px-6 py-2 rounded-full font-bold text-sm shadow hover:bg-green-700 transition-colors">
                        {t.ecoBtn}
                    </button>
                </div>
                <div className="hidden md:block opacity-80 group-hover:opacity-100 transition-opacity group-hover:scale-105 duration-500">
                   <Leaf size={140} className="text-green-200" />
                </div>
            </Link>

            <Link to="/interventions" className="group bg-orange-50 rounded-2xl p-8 border border-orange-200 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-orange-600 rounded-full text-white">
                            <PenTool size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-orange-900">{t.intTitle}</h3>
                    </div>
                    <p className="text-orange-800 text-sm mb-4">
                        {t.intDesc}
                    </p>
                </div>
                <div className="flex justify-end">
                    <div className="w-10 h-10 rounded-full bg-orange-200 flex items-center justify-center text-orange-800 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                        <ArrowRight size={20} />
                    </div>
                </div>
            </Link>
        </div>
      </section>

      {/* 5. FRAMEWORK */}
      <section className="py-16 px-4 md:px-8 bg-[#2D2168] text-white rounded-t-3xl md:rounded-3xl shadow-2xl mx-4 md:mx-0">
        <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-sanskrit mb-8">{t.sec4}</h2>
            <p className="text-indigo-200 max-w-2xl mx-auto mb-12">
                {t.modelsDesc}
            </p>
            
            <Link to="/models" className="inline-block group bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 rounded-2xl p-8 transition-all duration-300 max-w-4xl w-full">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                    <Users size={64} className="text-[#D98F2B] group-hover:rotate-12 transition-transform duration-500" />
                    <div className="text-left">
                        <h3 className="text-2xl font-bold text-[#D98F2B] mb-2">{t.viewModels}</h3>
                        <p className="text-gray-300">
                            {t.modelsSub}
                        </p>
                    </div>
                    <div className="bg-[#D98F2B] p-3 rounded-full text-white group-hover:translate-x-2 transition-transform">
                        <ArrowRight size={24} />
                    </div>
                </div>
            </Link>
        </div>
      </section>

      {/* Final Quote/Footer Lead */}
      <section className="py-20 text-center px-4">
        <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#2D2168] mb-6 font-sanskrit">"Dharma Begins With Me"</h2>
            <p className="text-xl text-gray-600 mb-8 italic">
              {t.footerQuote}
            </p>
            <div className="flex justify-center gap-4">
               <Link to="/about" className="px-8 py-3 rounded-full border-2 border-[#2D2168] text-[#2D2168] font-bold hover:bg-[#2D2168] hover:text-white transition-colors">
                  {t.aboutBtn}
               </Link>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;