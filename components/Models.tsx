import React, { useState } from 'react';
import { ChevronDown, ChevronUp, User, Users, Globe, Heart, Shield, Droplet, Sun, ArrowDown, Activity, Layers, MessageCircle } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Models: React.FC = () => {
  const [expandedCase, setExpandedCase] = useState<number | null>(null);
  const { language } = useLanguage();

  const toggleCase = (id: number) => {
    setExpandedCase(expandedCase === id ? null : id);
  };

  const definitionsContent = {
    hi: [
        { title: "Dharma (धर्म)", sub: "Cosmic Order", desc: "The foundation. Not religion, but the moral order that sustains the universe. (धारयति इति धर्मः)" },
        { title: "Principles (सिद्धांत)", sub: "Universal Truths", desc: "Justice, Equality, Compassion. Guides Ethics." },
        { title: "Values (मूल्य)", sub: "What is Good", desc: "Internal beliefs. Truth (Satya), Non-violence (Ahimsa)." },
        { title: "Morals (नैतिकता)", sub: "Personal Rules", desc: "Individual application of values. 'I will not lie.'" },
        { title: "Ethics (नीति)", sub: "Group Standards", desc: "Shared rules for society/professions. 'How we act toward others.'" },
        { title: "Norms (मानदंड)", sub: "Social Expectations", desc: "Unwritten rules. Standing in line, not littering." },
        { title: "Law (क़ानून)", sub: "Enforced Rules", desc: "Government rules. The minimum behavior society accepts." },
        { title: "Institutions (संस्थाएँ)", sub: "Value Carriers", desc: "Family, Schools, Temples that transmit values." },
        { title: "Civic Sense (नागरिक बोध)", sub: "Collective Behavior", desc: "The result: Clean cities, harmony, safety." },
    ],
    en: [
        { title: "Dharma", sub: "Cosmic Order", desc: "The foundation. Not religion, but the moral order that sustains the universe. (Dharayati iti Dharmah)" },
        { title: "Principles", sub: "Universal Truths", desc: "Justice, Equality, Compassion. Guides Ethics." },
        { title: "Values", sub: "What is Good", desc: "Internal beliefs. Truth (Satya), Non-violence (Ahimsa)." },
        { title: "Morals", sub: "Personal Rules", desc: "Individual application of values. 'I will not lie.'" },
        { title: "Ethics", sub: "Group Standards", desc: "Shared rules for society/professions. 'How we act toward others.'" },
        { title: "Norms", sub: "Social Expectations", desc: "Unwritten rules. Standing in line, not littering." },
        { title: "Law", sub: "Enforced Rules", desc: "Government rules. The minimum behavior society accepts." },
        { title: "Institutions", sub: "Value Carriers", desc: "Family, Schools, Temples that transmit values." },
        { title: "Civic Sense", sub: "Collective Behavior", desc: "The result: Clean cities, harmony, safety." },
    ]
  };

  const caseStudiesContent = {
    hi: [
        {
          id: 1, title: "CASE 1: Road Rage (सड़क पर क्रोध)", problem: "User gets aggressive over small traffic errors.",
          model: "Ahimsa → Morals → Civic Sense", solution: "Apply 'Ahimsa' (Non-violence) emotionally. Use the 3-Breath Rule.", outcome: "Road Rage collapses → Social harmony rises."
        },
        {
          id: 2, title: "CASE 2: Family Conflict (परिवार में संवाद)", problem: "Lack of respect and constant arguments at home.",
          model: "4-Level Mandala (Family Ring)", solution: "Start a weekly Gratitude Circle. Practice reciprocal duties.", outcome: "Family Dharma restored → Peace of mind."
        },
        { id: 3, title: "CASE 3: Workplace Integrity", problem: "Pressure to be dishonest.", model: "Values (Satya) → Ethics", solution: "Map decision to 'Satya'.", outcome: "Integrity builds trust." },
        { id: 4, title: "CASE 4: Stress & Chaos", problem: "Feeling overwhelmed.", model: "SELF Cultivation", solution: "Mindfulness, Naam Japna.", outcome: "Calm mind." },
        { id: 5, title: "CASE 5: Littering", problem: "Throwing trash.", model: "Saucha Pyramid", solution: "Extend 'Saucha' to environment.", outcome: "Cleaner environment." },
        { id: 6, title: "CASE 6: Festival Pollution", problem: "Using POP idols.", model: "Ritual Purity → Eco Purity", solution: "Clay idols, natural flowers.", outcome: "Dharma-compliant celebration." },
        { id: 7, title: "CASE 7: Whistleblowing", problem: "Loyalty vs Justice.", model: "Duty Conflict Model", solution: "Dharma > Loyalty.", outcome: "Ethical balance." },
        { id: 8, title: "CASE 8: Water Wastage", problem: "Wasting water.", model: "Nature (4th Ring)", solution: "Treat water as deity.", outcome: "Self -> Nature harmony." }
    ],
    en: [
        {
          id: 1, title: "CASE 1: Road Rage", problem: "User gets aggressive over small traffic errors.",
          model: "Ahimsa → Morals → Civic Sense", solution: "Apply 'Ahimsa' (Non-violence) emotionally. Use the 3-Breath Rule.", outcome: "Road Rage collapses → Social harmony rises."
        },
        {
          id: 2, title: "CASE 2: Family Conflict", problem: "Lack of respect and constant arguments at home.",
          model: "4-Level Mandala (Family Ring)", solution: "Start a weekly Gratitude Circle. Practice reciprocal duties.", outcome: "Family Dharma restored → Peace of mind."
        },
        { id: 3, title: "CASE 3: Workplace Integrity", problem: "Pressure to be dishonest.", model: "Values (Satya) → Ethics", solution: "Map decision to 'Satya'.", outcome: "Integrity builds trust." },
        { id: 4, title: "CASE 4: Stress & Chaos", problem: "Feeling overwhelmed.", model: "SELF Cultivation", solution: "Mindfulness, Naam Japna.", outcome: "Calm mind." },
        { id: 5, title: "CASE 5: Littering", problem: "Throwing trash.", model: "Saucha Pyramid", solution: "Extend 'Saucha' to environment.", outcome: "Cleaner environment." },
        { id: 6, title: "CASE 6: Festival Pollution", problem: "Using POP idols.", model: "Ritual Purity → Eco Purity", solution: "Clay idols, natural flowers.", outcome: "Dharma-compliant celebration." },
        { id: 7, title: "CASE 7: Whistleblowing", problem: "Loyalty vs Justice.", model: "Duty Conflict Model", solution: "Dharma > Loyalty.", outcome: "Ethical balance." },
        { id: 8, title: "CASE 8: Water Wastage", problem: "Wasting water.", model: "Nature (4th Ring)", solution: "Treat water as deity.", outcome: "Self -> Nature harmony." }
    ]
  };

  const textContent = {
    hi: {
        title: 'मॉडल और आरेख (Visual Models)',
        desc: 'From Cosmic Dharma to Daily Behavior. These models explain *why* we act the way we do, and *how* to change it.',
        hierTitle: '१. धर्म का प्रवाह (The Hierarchy of Action)',
        coreTitle: '२. मुख्य सिद्धांत (Core Models)',
        coreSub: 'Tools for Behavior Change',
        model1: 'Model 1: The Dharma → Behaviour Flow',
        model2: 'Model 2: The 4-Level Responsibility Mandala',
        model2Quote: '"A collapsed SELF collapses all outer rings. Civic sense begins with Mindfulness."',
        model3: 'Model 3: The Behaviour Pyramid',
        model3Quote: '"Saucha is the base. Without cleanliness (internal/external), higher values cannot stand."',
        model4: 'Model 4: Ritual Purity → Eco Purity',
        model5: 'Model 5: Behavioural Change Engine',
        caseTitle: '३. केस स्टडीज़ (Case Studies)',
        caseDesc: 'Real Indian problems solved using these models.',
        askTitle: 'आपका प्रश्न क्या है? (Ask Your Question)',
        askDesc: 'Are you facing a dilemma? Ask our AI Dharma Assistant ("Narad") which model applies to your situation.',
        askBtn: 'Ask Narad Now'
    },
    en: {
        title: 'Visual Models',
        desc: 'From Cosmic Dharma to Daily Behavior. These models explain *why* we act the way we do, and *how* to change it.',
        hierTitle: '1. The Hierarchy of Action',
        coreTitle: '2. Core Models',
        coreSub: 'Tools for Behavior Change',
        model1: 'Model 1: The Dharma → Behaviour Flow',
        model2: 'Model 2: The 4-Level Responsibility Mandala',
        model2Quote: '"A collapsed SELF collapses all outer rings. Civic sense begins with Mindfulness."',
        model3: 'Model 3: The Behaviour Pyramid',
        model3Quote: '"Saucha is the base. Without cleanliness (internal/external), higher values cannot stand."',
        model4: 'Model 4: Ritual Purity → Eco Purity',
        model5: 'Model 5: Behavioural Change Engine',
        caseTitle: '3. Case Studies',
        caseDesc: 'Real Indian problems solved using these models.',
        askTitle: 'Ask Your Question',
        askDesc: 'Are you facing a dilemma? Ask our AI Dharma Assistant ("Narad") which model applies to your situation.',
        askBtn: 'Ask Narad Now'
    }
  };

  const t = language === 'hi' ? textContent.hi : textContent.en;
  const definitions = language === 'hi' ? definitionsContent.hi : definitionsContent.en;
  const caseStudies = language === 'hi' ? caseStudiesContent.hi : caseStudiesContent.en;

  return (
    <div className="max-w-6xl mx-auto space-y-20 pb-12">
      
      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h2 className="text-4xl font-bold text-[#2D2168] font-sanskrit">{t.title}</h2>
        <p className="text-xl text-gray-600">
          {t.desc}
        </p>
      </div>

      {/* SECTION 1: THE HIERARCHY (DEFINITIONS) */}
      <section className="bg-white rounded-3xl p-8 shadow-xl border border-orange-100">
        <h3 className="text-2xl font-bold text-orange-800 mb-8 flex items-center gap-2">
           <Layers className="text-orange-600" /> {t.hierTitle}
        </h3>
        <div className="relative">
           {/* Vertical Line */}
           <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-200 to-blue-200 hidden md:block"></div>
           
           <div className="space-y-6">
             {definitions.map((def, idx) => (
                <div key={idx} className="relative flex flex-col md:flex-row gap-6 group">
                   <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white border-4 border-orange-100 z-10 font-bold text-gray-400 group-hover:border-orange-400 group-hover:text-orange-600 transition-colors shrink-0">
                      {idx + 1}
                   </div>
                   <div className="flex-1 bg-gray-50 hover:bg-orange-50 p-5 rounded-xl border border-gray-100 transition-colors">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                         <h4 className="text-xl font-bold text-[#2D2168]">{def.title}</h4>
                         <span className="text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-100 px-2 py-1 rounded w-fit">{def.sub}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{def.desc}</p>
                   </div>
                </div>
             ))}
           </div>
        </div>
      </section>

      {/* SECTION 2: THE 5 CORE MODELS */}
      <section>
        <div className="text-center mb-12">
           <h3 className="text-3xl font-bold text-[#2D2168] mb-4">{t.coreTitle}</h3>
           <p className="text-gray-500">{t.coreSub}</p>
        </div>

        <div className="space-y-16">
            
            {/* MODEL 1: The Improved Flow */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border-t-8 border-orange-500">
                <h4 className="text-xl font-bold text-orange-800 mb-8 text-center">{t.model1}</h4>
                <div className="flex flex-col items-center gap-4 max-w-2xl mx-auto">
                    {[
                        { t: "DHARMA (Cosmic Order)", c: "bg-[#2D2168] text-white" },
                        { t: "PRINCIPLES (Satya, Ahimsa, Rta)", c: "bg-orange-600 text-white" },
                        { t: "VALUES (Internal Beliefs)", c: "bg-orange-100 text-orange-900" },
                        { t: "MORALS (Personal Rules)", c: "bg-orange-50 text-orange-800" },
                        { t: "ETHICS (Social Standards)", c: "bg-white border-2 border-orange-200" },
                        { t: "CIVIC SENSE (Collective Behavior)", c: "bg-green-50 text-green-800 border border-green-200" },
                        { t: "HARMONY (Social + Natural Balance)", c: "bg-green-600 text-white" }
                    ].map((step, i) => (
                        <div key={i} className="w-full flex flex-col items-center">
                            <div className={`w-full py-4 rounded-xl text-center font-bold shadow-sm ${step.c}`}>
                                {step.t}
                            </div>
                            {i < 6 && <ArrowDown className="text-gray-300 my-1" size={20} />}
                        </div>
                    ))}
                </div>
            </div>

            {/* MODEL 2: The Mandala */}
            <div className="bg-[#FFF8E7] p-8 rounded-3xl shadow-lg border-t-8 border-green-600 overflow-hidden relative">
                <h4 className="text-xl font-bold text-green-800 mb-8 text-center z-10 relative">{t.model2}</h4>
                <div className="flex justify-center py-8 relative z-10">
                    <div className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center">
                        {/* Nature Ring */}
                        <div className="absolute w-full h-full rounded-full border-4 border-dashed border-green-400 bg-green-50 flex items-start justify-center pt-2">
                             <span className="font-bold text-green-700 bg-green-100 px-2 rounded mt-2 flex items-center gap-1"><Globe size={14}/> NATURE</span>
                        </div>
                        {/* Society Ring */}
                        <div className="absolute w-3/4 h-3/4 rounded-full border-4 border-blue-400 bg-blue-50 flex items-start justify-center pt-2 shadow-inner">
                             <span className="font-bold text-blue-700 bg-blue-100 px-2 rounded mt-2 flex items-center gap-1"><Users size={14}/> SOCIETY</span>
                        </div>
                        {/* Family Ring */}
                        <div className="absolute w-1/2 h-1/2 rounded-full border-4 border-orange-400 bg-orange-50 flex items-start justify-center pt-2 shadow-inner">
                             <span className="font-bold text-orange-700 bg-orange-100 px-2 rounded mt-2 flex items-center gap-1"><Heart size={14}/> FAMILY</span>
                        </div>
                        {/* Self Core */}
                        <div className="absolute w-1/4 h-1/4 rounded-full bg-[#2D2168] text-white flex flex-col items-center justify-center shadow-xl z-20">
                             <User size={20} />
                             <span className="font-bold text-xs">SELF</span>
                        </div>
                    </div>
                </div>
                <p className="text-center text-gray-600 max-w-lg mx-auto relative z-10">
                    {t.model2Quote}
                </p>
            </div>

            {/* MODEL 3: The Pyramid */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border-t-8 border-blue-600">
                <h4 className="text-xl font-bold text-blue-800 mb-8 text-center">{t.model3}</h4>
                <div className="flex flex-col items-center max-w-2xl mx-auto space-y-2">
                    {/* Top */}
                    <div className="w-1/3 bg-orange-500 text-white py-4 rounded-t-xl text-center shadow-lg z-30">
                        <div className="font-bold">SATYA (Truth)</div>
                        <div className="text-xs opacity-90">Integrity & Honesty</div>
                    </div>
                    {/* Middle */}
                    <div className="w-2/3 bg-green-600 text-white py-6 text-center shadow-md z-20 -mt-2 pt-4">
                        <div className="font-bold">AHIMSA (Non-Violence)</div>
                        <div className="text-xs opacity-90">Safety, Kindness, Nature Protection</div>
                    </div>
                    {/* Base */}
                    <div className="w-full bg-blue-700 text-white py-8 rounded-b-xl text-center shadow-sm z-10 -mt-2 pt-6">
                        <div className="font-bold">SAUCHA (Cleanliness)</div>
                        <div className="text-xs opacity-90">Hygiene, Waste Mgmt, Pure Mind</div>
                    </div>
                </div>
                <p className="text-center mt-6 text-gray-600">
                    {t.model3Quote}
                </p>
            </div>

            {/* MODEL 4: Eco-Purity Flow */}
            <div className="bg-green-50 p-8 rounded-3xl shadow-lg border border-green-200">
                <h4 className="text-xl font-bold text-green-800 mb-8 text-center">{t.model4}</h4>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                     <div className="bg-white p-4 rounded-xl text-center shadow border border-green-100 flex-1">
                        <Sun className="mx-auto text-orange-500 mb-2" />
                        <h5 className="font-bold">Ritual Purity</h5>
                        <p className="text-xs text-gray-500">Shuddhi of Intent</p>
                     </div>
                     <ArrowDown className="md:-rotate-90 text-green-400" />
                     <div className="bg-white p-4 rounded-xl text-center shadow border border-green-100 flex-1">
                        <Droplet className="mx-auto text-blue-500 mb-2" />
                        <h5 className="font-bold">Natural Inputs</h5>
                        <p className="text-xs text-gray-500">No Plastic/Chemicals</p>
                     </div>
                     <ArrowDown className="md:-rotate-90 text-green-400" />
                     <div className="bg-white p-4 rounded-xl text-center shadow border border-green-100 flex-1">
                        <Globe className="mx-auto text-green-500 mb-2" />
                        <h5 className="font-bold">Eco-Dharma</h5>
                        <p className="text-xs text-gray-500">Protection of Elements</p>
                     </div>
                </div>
            </div>

            {/* MODEL 5: The Engine */}
            <div className="bg-gray-900 text-white p-8 rounded-3xl shadow-xl">
                 <h4 className="text-xl font-bold text-yellow-400 mb-6 text-center">{t.model5}</h4>
                 <div className="flex flex-col items-center">
                    <div className="border-2 border-yellow-500 px-6 py-2 rounded-full mb-4 font-bold text-yellow-300">DHARMA FOUNDATION</div>
                    <ArrowDown className="text-gray-500 mb-4" />
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full text-center">
                        {["Educate", "Engineer", "Enforce", "Engage"].map((e) => (
                            <div key={e} className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                                <span className="font-bold text-white">{e}</span>
                            </div>
                        ))}
                    </div>
                    <ArrowDown className="text-gray-500 my-4" />
                    <div className="bg-green-600 px-8 py-3 rounded-xl font-bold shadow-lg shadow-green-900/50">
                        Civic Behaviour Change
                    </div>
                 </div>
            </div>
        </div>
      </section>

      {/* SECTION 3: CASE STUDIES LIBRARY */}
      <section className="bg-orange-50 rounded-3xl p-8 border border-orange-100">
        <h3 className="text-3xl font-bold text-[#2D2168] mb-2 text-center">{t.caseTitle}</h3>
        <p className="text-center text-gray-600 mb-10">{t.caseDesc}</p>

        <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((item) => (
                <div key={item.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-orange-100">
                    <div 
                        className="p-5 flex justify-between items-center cursor-pointer bg-white"
                        onClick={() => toggleCase(item.id)}
                    >
                        <h4 className="font-bold text-gray-800">{item.title}</h4>
                        {expandedCase === item.id ? <ChevronUp size={20} className="text-orange-500" /> : <ChevronDown size={20} className="text-gray-400" />}
                    </div>
                    
                    {expandedCase === item.id && (
                        <div className="px-5 pb-5 animate-in fade-in slide-in-from-top-2 duration-200">
                            <div className="space-y-3 text-sm">
                                <div className="bg-red-50 p-3 rounded-lg border border-red-100">
                                    <span className="font-bold text-red-800 block mb-1">Problem:</span>
                                    {item.problem}
                                </div>
                                <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                                    <span className="font-bold text-blue-800 block mb-1">Model Applied:</span>
                                    {item.model}
                                </div>
                                <div className="bg-green-50 p-3 rounded-lg border border-green-100">
                                    <span className="font-bold text-green-800 block mb-1">Solution:</span>
                                    {item.solution}
                                </div>
                                <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-100">
                                    <span className="font-bold text-yellow-800 block mb-1">Outcome:</span>
                                    {item.outcome}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
      </section>

      {/* SECTION 4: ASK NARAD (AI) */}
      <section className="bg-gradient-to-r from-orange-500 to-[#D98F2B] rounded-3xl p-8 md:p-12 text-white text-center shadow-xl">
          <div className="bg-white/20 p-4 rounded-full w-fit mx-auto mb-6 backdrop-blur-sm">
             <MessageCircle size={40} className="text-white" />
          </div>
          <h3 className="text-3xl font-bold mb-4 font-sanskrit">{t.askTitle}</h3>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
             {t.askDesc}
          </p>
          <button 
             onClick={() => (document.querySelector('button[aria-label="Open Chat"]') as HTMLElement)?.click()}
             className="bg-white text-[#D98F2B] hover:bg-orange-100 px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all transform hover:scale-105"
          >
             {t.askBtn}
          </button>
      </section>

    </div>
  );
};

export default Models;