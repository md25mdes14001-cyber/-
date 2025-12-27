import React from 'react';
import { Droplet, Hand, ShieldCheck, Scale, Globe, Brain, TrendingUp, Users, Activity, Lock, ArrowDown, BookOpen, Sun, Leaf } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Definition: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    hi: {
      headerBadge: 'Comprehensive Definition',
      title: 'नागरिक बोध (Civic Sense)',
      quote: '“नागरिक बोध = धर्म के सिद्धांतों का व्यवहारिक रूप”',
      introPart1: 'नागरिक बोध का अर्थ है —',
      introHighlight: 'नैतिक, जिम्मेदार, अनुशासित और समाजोन्मुख व्यवहार',
      introPart2: '। यह सिर्फ नियमों का पालन नहीं—यह समाज के प्रति हमारा धर्म (Dharma) है।',
      tags: ['आत्म-संस्कार (Self)', 'परिवारिक व्यवहार (Family)', 'सामाजिक आचार (Society)', 'प्रकृति की सेवा (Nature)'],
      pillarsTitle: '५ आधारस्तंभ (The 5 Pillars)',
      scriptureLabel: 'शास्त्र:',
      scienceLabel: 'विज्ञान:',
      whyTitle: 'नागरिक बोध क्यों महत्वपूर्ण है? (Why It Matters)',
      corrTitle: 'वैज्ञानिक-व्यवहारिक सम्बन्ध (Scientific Correlations)',
      journeyTitle: 'जीवन-यात्रा मॉडल (Journey of Civic Sense)',
      journeySteps: [
        "Awareness (बोध)", "Mindfulness (सचेतनता)", "Habit-building (आदत विकास)", 
        "Responsibility (जिम्मेदारी)", "Civic Behaviour (सार्वजनिक आचार)", 
        "Social Harmony (सामाजिक शांति)", "Environmental Balance (पर्यावरण संतुलन)", 
        "Inner Peace (आत्म-शांति)"
      ],
      journeyNote: '*This cycle returns to Self, reinforcing Dharma.*',
      mapTitle: 'अंतर-संबंध (Full Interrelation Map)',
      mapDesc: 'Why Civic Sense is not just “public behaviour”—it is Dharma in action.',
      refTitle: 'शोध स्रोत (Key References)',
      ahamTitle: 'अहम् ब्रह्मास्मि का विशेष दृष्टिकोण',
      ahamQuote: '"जब मैं स्वयं को ब्रह्म मानता हूँ, मेरे कर्म भी ब्रह्म के योग्य होने चाहिए।"',
      ahamTags: [
        { icon: <Sun size={18} className="text-yellow-300" />, text: 'स्वच्छता = पूजा' },
        { icon: <Activity size={18} className="text-red-300" />, text: 'अनुशासन = तप' },
        { icon: <Scale size={18} className="text-blue-300" />, text: 'सत्य = धर्म' },
        { icon: <Leaf size={18} className="text-green-300" />, text: 'प्रकृति संरक्षण = सेवा' }
      ]
    },
    en: {
      headerBadge: 'Comprehensive Definition',
      title: 'Civic Sense (Naagarik Bodh)',
      quote: '“Civic Sense = Practical Application of Dharma”',
      introPart1: 'Civic sense means —',
      introHighlight: 'ethical, responsible, disciplined, and society-oriented behavior',
      introPart2: '. It is not just following rules—it is our Dharma towards society.',
      tags: ['Self-Cultivation', 'Family Values', 'Social Conduct', 'Service to Nature'],
      pillarsTitle: 'The 5 Pillars',
      scriptureLabel: 'Scripture:',
      scienceLabel: 'Science:',
      whyTitle: 'Why It Matters',
      corrTitle: 'Scientific Correlations',
      journeyTitle: 'Journey of Civic Sense',
      journeySteps: [
        "Awareness", "Mindfulness", "Habit-building", 
        "Responsibility", "Civic Behaviour", 
        "Social Harmony", "Environmental Balance", 
        "Inner Peace"
      ],
      journeyNote: '*This cycle returns to Self, reinforcing Dharma.*',
      mapTitle: 'Full Interrelation Map',
      mapDesc: 'Why Civic Sense is not just “public behaviour”—it is Dharma in action.',
      refTitle: 'Key References',
      ahamTitle: 'The Aham Brahmasmi Perspective',
      ahamQuote: '"When I see myself as Divine, my actions must be worthy of Divinity."',
      ahamTags: [
        { icon: <Sun size={18} className="text-yellow-300" />, text: 'Cleanliness = Worship' },
        { icon: <Activity size={18} className="text-red-300" />, text: 'Discipline = Penance' },
        { icon: <Scale size={18} className="text-blue-300" />, text: 'Truth = Dharma' },
        { icon: <Leaf size={18} className="text-green-300" />, text: 'Conservation = Service' }
      ]
    }
  };

  const pillarsContent = {
    hi: [
      {
        title: "1. शौच (Śaucha)", subtitle: "स्वच्छता और पवित्रता",
        desc: "मन, वाणी, आचरण और वातावरण—चारों में पवित्रता।",
        scripture: "Bhagavad Gita 17.14: “शौचम्” शरीर-तप का आधार है।",
        science: "Clean surroundings reduce stress by 35% (Stanford Clean Culture Study). Waste mgmt reduces pollution by 60%."
      },
      {
        title: "2. अहिंसा (Ahimsa)", subtitle: "हानि न पहुँचाना",
        desc: "सड़क पर क्रोध न करना, हॉर्न का दुरुपयोग न करना, डिजिटल अहिंसा।",
        scripture: "Mahābhārata: “अहिंसा परमो धर्मः”",
        science: "Road rage causes 70% of accidents (WHO). Anger impulsivity reduces cognitive capacity by 30% (APA)."
      },
      {
        title: "3. मर्यादा (Maryādā)", subtitle: "सम्मान और सामाजिक संतुलन",
        desc: "लाइन में लगना, आवाज़ का संयम, सार्वजनिक स्थान का सम्मान।",
        scripture: "Ramayana: “मर्यादा पुरुषोत्तम” = आदर्श सामाजिक व्यवहार।",
        science: "Queue discipline is a primary social trust indicator. High-maryādā cultures show 40% less conflict."
      },
      {
        title: "4. धर्म / ऋत (Dharma/Ṛta)", subtitle: "व्यवस्था और नियम पालन",
        desc: "नियम पालन = “ऋत” का अनुपालन। ट्रैफ़िक नियम = सामाजिक-धर्म।",
        scripture: "Vedas: Rta is the cosmic order that binds the universe.",
        science: "Civic discipline increases GDP growth. Organized public spaces reduce crime rates by 21% (UN Habitat)."
      },
      {
        title: "5. भूमि-सेवा (Bhūmi-sevā)", subtitle: "पर्यावरण धर्म",
        desc: "कचरा न फैलाना, जल-संरक्षण, Plastic-minimal life.",
        scripture: "Atharva Veda 12.1.12: “पृथ्वी माता है, हम उसके पुत्र हैं।”",
        science: "Awareness increases recycling efficiency by 88%. Correlates with better air quality (NITI Aayog)."
      }
    ],
    en: [
      {
        title: "1. Saucha (Purity)", subtitle: "Cleanliness & Holiness",
        desc: "Purity in mind, speech, conduct, and environment.",
        scripture: "Bhagavad Gita 17.14: “Saucha” is the foundation of bodily austerity.",
        science: "Clean surroundings reduce stress by 35% (Stanford Clean Culture Study). Waste mgmt reduces pollution by 60%."
      },
      {
        title: "2. Ahimsa (Non-violence)", subtitle: "Do No Harm",
        desc: "No road rage, no honking abuse, digital non-violence.",
        scripture: "Mahābhārata: “Ahimsa Paramo Dharmah” (Non-violence is the supreme duty).",
        science: "Road rage causes 70% of accidents (WHO). Anger impulsivity reduces cognitive capacity by 30% (APA)."
      },
      {
        title: "3. Maryada (Decorum)", subtitle: "Respect & Balance",
        desc: "Standing in line, voice control, respecting public space.",
        scripture: "Ramayana: “Maryada Purushottam” = Ideal social behavior.",
        science: "Queue discipline is a primary social trust indicator. High-maryādā cultures show 40% less conflict."
      },
      {
        title: "4. Dharma/Rta (Order)", subtitle: "Law & Order",
        desc: "Following rules = Following Cosmic Order (Rta). Traffic rules = Social Dharma.",
        scripture: "Vedas: Rta is the cosmic order that binds the universe.",
        science: "Civic discipline increases GDP growth. Organized public spaces reduce crime rates by 21% (UN Habitat)."
      },
      {
        title: "5. Bhumi-Seva (Earth Service)", subtitle: "Eco-Dharma",
        desc: "No littering, water conservation, plastic-minimal life.",
        scripture: "Atharva Veda 12.1.12: “The Earth is my Mother, I am her Son.”",
        science: "Awareness increases recycling efficiency by 88%. Correlates with better air quality (NITI Aayog)."
      }
    ]
  };

  const t = language === 'hi' ? content.hi : content.en;
  const pillars = language === 'hi' ? pillarsContent.hi : pillarsContent.en;
  
  // Icons array to map to pillars
  const pillarIcons = [
      <Droplet className="text-white" size={28} />,
      <Hand className="text-white" size={28} />,
      <ShieldCheck className="text-white" size={28} />,
      <Scale className="text-white" size={28} />,
      <Globe className="text-white" size={28} />
  ];

  const pillarStyles = [
      { bg: "bg-blue-600", border: "border-blue-100", lightBg: "bg-blue-50" },
      { bg: "bg-red-600", border: "border-red-100", lightBg: "bg-red-50" },
      { bg: "bg-purple-600", border: "border-purple-100", lightBg: "bg-purple-50" },
      { bg: "bg-orange-600", border: "border-orange-100", lightBg: "bg-orange-50" },
      { bg: "bg-green-600", border: "border-green-100", lightBg: "bg-green-50" }
  ];

  const benefits = [
    { title: "Mental Health", stat: "Lower Cortisol", desc: "Clean surroundings → higher productivity & well-being.", icon: <Brain size={20} className="text-purple-600"/> },
    { title: "Social Harmony", stat: "47% Less Tension", desc: "Respectful behaviour → trust → cooperation.", icon: <Users size={20} className="text-blue-600"/> },
    { title: "Crime Reduction", stat: "35-50% Drop", desc: "Broken Windows Theory: Order reduces crime.", icon: <Lock size={20} className="text-red-600"/> },
    { title: "Economic Growth", stat: "+23% GDP", desc: "High civic sense regions show better economic performance.", icon: <TrendingUp size={20} className="text-green-600"/> },
  ];

  const correlations = [
    { trait: "स्वच्छता (Saucha)", brain: "Reduces cognitive load", social: "Improves social signalling", env: "Reduces waste" },
    { trait: "अहिंसा (Non-harm)", brain: "Lowers amygdala activation", social: "Reduces aggression", env: "Protects biodiversity" },
    { trait: "नियम (Dharma)", brain: "Improves dopamine reward", social: "Increases community trust", env: "Better urban health" },
    { trait: "मर्यादा (Maryada)", brain: "Boosts oxytocin", social: "Stable social bonds", env: "Less public chaos" },
    { trait: "भूमि-सेवा (Eco)", brain: "Activates empathy circuits", social: "Collective responsibility", env: "Sustainable resources" }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-20 py-8">
      
      {/* 1. DEFINITION HERO */}
      <header className="text-center max-w-4xl mx-auto">
        <span className="bg-orange-100 text-orange-800 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 inline-block">
            {t.headerBadge}
        </span>
        <h2 className="text-4xl md:text-6xl font-bold text-[#2D2168] mb-8 font-sanskrit leading-tight">
          {t.title}
        </h2>
        <div className="bg-[#2D2168] text-white p-6 rounded-2xl shadow-xl mb-8 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
           <h3 className="text-2xl md:text-3xl font-bold font-serif italic">
             {t.quote}
           </h3>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed mb-6">
           {t.introPart1} <span className="font-bold text-[#D98F2B]">{t.introHighlight}</span>{t.introPart2}
        </p>
        <div className="flex flex-wrap justify-center gap-2 text-sm font-bold text-gray-500">
            {t.tags.map((tag, idx) => (
                <span key={idx} className="flex items-center">
                    <span className="bg-gray-100 px-3 py-1 rounded-full">{tag}</span>
                    {idx < t.tags.length - 1 && <span className="mx-2">➝</span>}
                </span>
            ))}
        </div>
      </header>

      {/* 2. THE 5 PILLARS */}
      <section>
        <div className="flex items-center gap-4 mb-10 justify-center">
            <div className="h-1 bg-orange-200 w-16 rounded-full"></div>
            <h3 className="text-3xl font-bold text-[#2D2168]">{t.pillarsTitle}</h3>
            <div className="h-1 bg-orange-200 w-16 rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <div key={index} className={`relative bg-white p-6 rounded-3xl border ${pillarStyles[index].border} shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col`}>
              <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl ${pillarStyles[index].bg} flex items-center justify-center shadow-md flex-shrink-0`}>
                    {pillarIcons[index]}
                  </div>
                  <div>
                      <h4 className="text-xl font-bold text-[#2D2168] font-sanskrit">{pillar.title}</h4>
                      <p className="text-xs font-bold text-gray-500 uppercase">{pillar.subtitle}</p>
                  </div>
              </div>
              
              <p className="text-gray-700 mb-4 flex-grow">{pillar.desc}</p>
              
              <div className={`p-3 rounded-xl ${pillarStyles[index].lightBg} mb-3 border border-white/50`}>
                 <p className="text-xs text-gray-800 font-serif italic mb-1"><span className="font-bold">{t.scriptureLabel}</span> {pillar.scripture}</p>
              </div>
              <div className="p-3 rounded-xl bg-gray-50 border border-gray-100">
                 <p className="text-xs text-gray-600"><span className="font-bold text-gray-800">{t.scienceLabel}</span> {pillar.science}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. WHY IT MATTERS (GRID) */}
      <section className="bg-[#FFF8E7] p-8 md:p-12 rounded-3xl border border-orange-100">
         <h3 className="text-2xl font-bold text-[#2D2168] mb-8 text-center">{t.whyTitle}</h3>
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="mb-3 bg-gray-50 w-fit p-3 rounded-full">{b.icon}</div>
                    <h4 className="text-lg font-bold text-gray-800">{b.title}</h4>
                    <p className="text-2xl font-bold text-[#D98F2B] my-1">{b.stat}</p>
                    <p className="text-sm text-gray-600">{b.desc}</p>
                </div>
            ))}
         </div>
      </section>

      {/* 4. SCIENTIFIC CORRELATIONS TABLE */}
      <section>
          <h3 className="text-2xl font-bold text-[#2D2168] mb-6 flex items-center gap-2">
            <Activity className="text-orange-600" /> {t.corrTitle}
          </h3>
          <div className="overflow-x-auto bg-white rounded-2xl shadow-lg border border-gray-200">
             <table className="w-full text-left border-collapse">
                <thead>
                   <tr className="bg-gray-100 text-gray-700 uppercase text-xs tracking-wider border-b border-gray-200">
                      <th className="p-4 rounded-tl-2xl">Civic Trait</th>
                      <th className="p-4">Brain Science</th>
                      <th className="p-4">Social Science</th>
                      <th className="p-4 rounded-tr-2xl">Environmental Impact</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm">
                   {correlations.map((row, i) => (
                       <tr key={i} className="hover:bg-orange-50/50 transition-colors">
                          <td className="p-4 font-bold text-[#2D2168]">{row.trait}</td>
                          <td className="p-4 text-gray-700">{row.brain}</td>
                          <td className="p-4 text-gray-700">{row.social}</td>
                          <td className="p-4 text-gray-700">{row.env}</td>
                       </tr>
                   ))}
                </tbody>
             </table>
          </div>
      </section>

      {/* 5. JOURNEY MODEL & MAP */}
      <section className="grid md:grid-cols-2 gap-12">
         {/* Journey Model */}
         <div className="bg-gradient-to-b from-[#2D2168] to-indigo-900 text-white p-8 rounded-3xl shadow-xl">
             <h3 className="text-xl font-bold mb-8 text-center font-sanskrit">{t.journeyTitle}</h3>
             <div className="flex flex-col items-center space-y-2">
                 {t.journeySteps.map((step, i) => (
                    <div key={i} className="flex flex-col items-center w-full">
                        <div className="bg-white/10 backdrop-blur-md w-full text-center py-2 rounded-lg border border-white/10 text-sm font-medium">
                           {step}
                        </div>
                        {i < 7 && <ArrowDown size={16} className="text-orange-400 my-1" />}
                    </div>
                 ))}
             </div>
             <p className="text-center text-xs text-orange-200 mt-6 italic">
                {t.journeyNote}
             </p>
         </div>

         {/* Interrelation Map */}
         <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#2D2168]">{t.mapTitle}</h3>
            <p className="text-gray-600">
               {t.mapDesc}
            </p>
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-orange-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-bl-full -mr-8 -mt-8 opacity-50"></div>
                <ul className="relative z-10 space-y-4">
                   {[
                      { l: "DHARMA", r: "Ethical cosmic order" },
                      { l: "VALUES", r: "Truth, Ahimsa, Saucha" },
                      { l: "MORALS", r: "Internal rules" },
                      { l: "ETHICS", r: "Shared standards" },
                      { l: "NORMS", r: "Social expectations" },
                      { l: "CIVIC SENSE", r: "Public behaviour" },
                      { l: "SOCIETY", r: "Harmony" },
                      { l: "NATURE", r: "Balance" },
                   ].map((item, i) => (
                       <li key={i} className="flex items-center gap-4">
                          <span className="font-bold text-[#2D2168] w-28 flex-shrink-0 text-right">{item.l}</span>
                          <span className="h-px bg-gray-300 flex-grow"></span>
                          <span className="text-sm text-gray-600">{item.r}</span>
                       </li>
                   ))}
                </ul>
            </div>
            
            {/* References Mini-Section */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2"><BookOpen size={16}/> {t.refTitle}</h4>
                <ul className="list-disc pl-5 space-y-1 text-xs text-gray-600">
                    <li>Pew Research 2021 (Religion & Values)</li>
                    <li>SIJARAH Journal (Civic sense & Economics)</li>
                    <li>WMR Environmental Study (Recycling habits)</li>
                    <li>Stanford Civic Education Report</li>
                    <li>WHO Road Safety Report</li>
                </ul>
            </div>
         </div>
      </section>

      {/* 6. AHAM BRAHMASMI PERSPECTIVE */}
      <section className="bg-orange-600 text-white p-10 rounded-3xl text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 font-sanskrit">{t.ahamTitle}</h2>
              <p className="text-xl font-serif italic mb-8 opacity-90">
                 {t.ahamQuote}
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm font-bold">
                 {t.ahamTags.map((tag, i) => (
                   <div key={i} className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                      {tag.icon} {tag.text}
                   </div>
                 ))}
              </div>
              <div className="mt-8 pt-8 border-t border-orange-400">
                  <p className="text-2xl font-bold tracking-widest uppercase">Civic Sense = Divinity in Action</p>
              </div>
          </div>
      </section>

    </div>
  );
};

export default Definition;