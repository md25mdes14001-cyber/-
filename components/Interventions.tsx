import React, { useState } from 'react';
import { 
  Lightbulb, Award, Mic2, Calendar, BookOpen, PenTool, Gavel, Users, ArrowLeft, Download, 
  CheckCircle, XCircle, MapPin, Sparkles, ChevronDown, ChevronUp, Droplet, Wind, Moon, 
  Sun, Apple, Recycle, ArrowDown, Activity, Leaf, Brain, Heart, Scale, Trash2, 
  Volume2, Waves, TreePine, ShieldCheck, Zap, ExternalLink
} from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Interventions: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [expandedFramework, setExpandedFramework] = useState<number | null>(null);
  const { language } = useLanguage();

  const toggleFramework = (id: number) => {
    setExpandedFramework(expandedFramework === id ? null : id);
  };

  const content = {
    hi: {
      title: 'डिज़ाइन हस्तक्षेप और समाधान',
      desc: '"नागरिक बोध कोई जन्मजात गुण नहीं है, इसे विकसित करना पड़ता है।" - नमित अरोड़ा',
      frameworkTitle: 'परिवर्तन के ४ स्तंभ (The 4 Es Framework)',
      frameworkSub: "Namit Arora के TEDx विश्लेषण पर आधारित",
      essence: '“विद्या, रचना, नियम, सहभागिता — एतेषां चतुष्टयेन परिवर्तनम् साध्यते।”',
      essenceSub: '(Change = Education + Engineering + Enforcement + Engagement)',
      culturalTitle: 'धार्मिक और सांस्कृतिक हस्तक्षेप (Cultural Interventions)',
      culturalDesc: 'Workable solutions तलाशने के लिए नीचे दिए गए कार्ड पर क्लिक करें।',
      policyTitle: 'नीतिगत सिफारिशें (Policy Recommendations 2047)',
      policyDesc: "2047 तक विकसित राष्ट्र का दर्जा प्राप्त करने के लिए, अहलूवालिया का शोध बताता है:",
      policies: [
        'Curricular Integration: नागरिक बोध को केवल सामाजिक अध्ययन तक सीमित न रखें। इसे गणित और विज्ञान में एकीकृत करें।',
        'Experiential Learning: स्थानीय सरकारी बैठकों और सामुदायिक सर्वेक्षणों में छात्रों की अनिवार्य भागीदारी।',
        'Digital Governance: पारदर्शिता बढ़ाने और नागरिकों को आसानी से रिपोर्ट करने की अनुमति देने के लिए ऐप्स का उपयोग।'
      ]
    },
    en: {
      title: 'Design Interventions & Solutions',
      desc: '"Civic sense is not an innate quality, it has to be cultivated." - Namit Arora',
      frameworkTitle: 'The 4 Es Framework for Change',
      frameworkSub: "Based on Namit Arora's TEDx analysis",
      essence: '“Education, Engineering, Enforcement, Engagement — Change is achieved through these four.”',
      essenceSub: '(Change = Education + Engineering + Enforcement + Engagement)',
      culturalTitle: 'Cultural Interventions',
      culturalDesc: 'Click on any card below to explore workable solutions.',
      policyTitle: 'Policy Recommendations 2047',
      policyDesc: "To achieve developed nation status by 2047, Ahluwalia's research suggests:",
      policies: [
        'Curricular Integration: Move beyond social studies. Integrate civic sense into Mathematics (budgeting) and Science (environment).',
        'Experiential Learning: Mandatory participation in local government meetings and community surveys for students.',
        'Digital Governance: Use apps to increase transparency and allow citizens to report issues easily, reducing transaction costs.'
      ]
    }
  };

  const t = language === 'hi' ? content.hi : content.en;

  const frameworkItems = [
    {
        id: 1,
        title: "1. EDUCATE (शिक्षा)",
        sanskritTitle: "ज्ञानस्य दीपः प्रज्वलितः भवेत्",
        quote: "Civic Sense is learned, not inherited — शिक्षणात् सुसंस्कारः।",
        icon: <BookOpen size={24} className="text-orange-600" />,
        shortDesc: "नागरिक बोध जन्मजात नहीं है। स्कूलों को इसे अभ्यास के रूप में सिखाना चाहिए।",
        details: language === 'hi' ? {
            intro: "भारत में नागरिक व्यवहार (Civic Sense) जन्मजात नहीं होता— यह सीखने योग्य कौशल है।",
            sanskrit: "“विद्या ददाति विनयं।” — विद्या विनम्रता और जिम्मेदारी देती है।",
            actions: ["स्कूलों में “नागरिक धर्म” विषय", "कचरा पृथक्करण और जल-संरक्षण के व्यावहारिक कार्य", "सुबह की प्रार्थना में “Civic Mantra”"],
            why: "यदि बच्चा समाज में अव्यवस्था देखता है तो वही उसकी आदत बन जाती है।"
        } : {
            intro: "Civic sense is not innate—it is a learnable skill. Education must build character.",
            sanskrit: "“Vidya dadati vinayam.” — Knowledge imparts humility and responsibility.",
            actions: ["Add 'Civic Dharma' subject", "Hands-on tasks for waste/water", "A 'Civic Mantra' in morning prayers"],
            why: "If a child sees chaos, that becomes their default habit."
        }
    },
    {
        id: 2,
        title: "2. ENGINEER (रचना)",
        sanskritTitle: "सुशोभितं नगरं, सुचेतना जनाः",
        quote: "Good Design → Good Behaviour (र रचनाम् परिवर्तय)",
        icon: <PenTool size={24} className="text-blue-600" />,
        shortDesc: "बेहतर शहरी डिज़ाइन बेहतर व्यवहार को बढ़ावा देता है।",
        details: language === 'hi' ? {
            intro: "वातावरण सुंदर और सुव्यवस्थित होता है— तो लोग भी अनुशासन लाते हैं।",
            sanskrit: "“यथा लोकः तथा लोकपालः।” — परिस्थिति व्यक्ति को ढालती है।",
            actions: ["हर 50 मीटर पर dustbin", "प्रेरक signage (with Dharma nudges)", "Metro-style “Cleanliness Zones”"],
            why: "डिज़ाइन व्यवहार से अधिक शक्तिशाली है और तुरंत प्रभाव डालता है।"
        } : {
            intro: "60-70% of human behavior is controlled by environment. Better design drives better acts.",
            sanskrit: "“Yatha lokah tatha lokapalah.” — Environment shapes the person.",
            actions: ["Dustbins every 50 meters", "Inspiring signage with nudges", "Metro-style “Cleanliness Zones”"],
            why: "Design is immediate and more powerful than long-term lectures."
        }
    },
    {
        id: 3,
        title: "3. ENFORCE (नियम)",
        sanskritTitle: "नियमः पालनीयः, दंडः आवश्यकः",
        quote: "Without credible enforcement, Dharma collapses.",
        icon: <Gavel size={24} className="text-red-600" />,
        shortDesc: "दंड का डर और नियम का सम्मान व्यवस्था बनाए रखता है।",
        details: language === 'hi' ? {
            intro: "कानून का अर्थ तभी है जब उसका पालन ज़रूरी महसूस हो।",
            sanskrit: "“दण्डः शास्ति प्रजाः सर्वाः।” — दंड समाज को अनुशासित रखता है।",
            actions: ["Mobile magistrate courts", "कूड़ा फेंकने पर तुरंत जुर्माना", "CCTV + AI आधारित निगरानी"],
            why: "Behavioural science कहती है कि स्पष्ट दंड आदतों को सुधारता है।"
        } : {
            intro: "Law only has meaning when compliance feels mandatory through deterrents.",
            sanskrit: "“Dandah shasti prajah sarvah.” — Punishment keeps order.",
            actions: ["Mobile magistrate courts", "Instant fines for littering", "CCTV + AI monitoring"],
            why: "Behavioral science proves deterrence improves group habits."
        }
    },
    {
        id: 4,
        title: "4. ENGAGE (सहभागिता)",
        sanskritTitle: "जन-सहयोगः परिवर्तनस्य मूलम्",
        quote: "Change is not a government project — it is a jan-andolan.",
        icon: <Users size={24} className="text-green-600" />,
        shortDesc: "नागरिक सक्रियता महत्वपूर्ण है। लोगों को आगे आना होगा।",
        details: language === 'hi' ? {
            intro: "परिवर्तन का असली इंजन “जनसहभागिता” होता है।",
            sanskrit: "“संगच्छध्वं संवदध्वं।” — एक साथ चलो, एक साथ सोचो।",
            actions: ["नागरिक आंदोलन (e.g., beach clean-ups)", "“Adopt a Park” कार्यक्रम", "Apps like “Hawa Badlo”"],
            why: "बिना जनसहयोग प्रभाव स्थायी नहीं होता।"
        } : {
            intro: "The real engine of change is public participation.",
            sanskrit: "“Sangacchadhvam samvadadhvam.” — Walk and work together.",
            actions: ["Citizen movements", "“Adopt a Park” / \"Street\" programs", "Reporting Apps"],
            why: "Without cooperation, impact of any policy is temporary."
        }
    }
  ];

  const culturalFeatures = [
    {
      id: 1,
      title: language === 'hi' ? "धार्मिक संकेत (Dharma Nudges) - व्रत एवं उपवास" : "Dharma Nudges - Fasting (Vrat & Upavas)",
      subtitle: language === 'hi' ? "व्रत का विज्ञान और नागरिक अनुशासन" : "Science of Fasting and Civic Discipline",
      icon: <Sparkles size={32} className="text-orange-600" />,
      color: "border-orange-500",
      bg: "bg-orange-50",
      content: (
        <div className="space-y-10 animate-in fade-in slide-in-from-right-4 duration-500">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100">
             <div className="flex items-center gap-3 mb-4">
                <BookOpen className="text-orange-600" />
                <h4 className="text-xl font-bold text-gray-800">{language === 'hi' ? 'वैदिक अर्थ: व्रत बनाम उपवास' : 'Vedic Meaning: Vrat vs. Upavas'}</h4>
             </div>
             <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
                   <h5 className="font-bold text-orange-900 mb-1">Vrat (व्रत)</h5>
                   <p className="text-sm text-gray-700">{language === 'hi' ? 'इसका अर्थ है "संकल्प"। जैसे सत्य बोलना (सत्य-व्रत)। यह ब्रह्मांडीय व्यवस्था (ऋत) को बनाए रखने के लिए एक प्रतिज्ञा है।' : 'Means a "Solemn Vow". e.g., Satya-Vrat (Vow of Truth). It is a resolution to maintain Cosmic Order (Rta).'}</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                   <h5 className="font-bold text-blue-900 mb-1">Upavas (उपवास)</h5>
                   <p className="text-sm text-gray-700">{language === 'hi' ? 'Upa (निकट) + Vasa (बैठना)। इसका अर्थ है "दिव्यता के निकट बैठना"। उपवास व्रत बनाए रखने का एक साधन है।' : 'Upa (Near) + Vasa (Sitting). It means "Sitting near the Divine". Fasting is a tool to fulfill a Vrat.'}</p>
                </div>
             </div>
          </div>
          <div className="bg-[#2D2168] text-white p-8 rounded-3xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-10">
                <Moon size={100} />
             </div>
             <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                   <Moon className="text-yellow-400" />
                   <h4 className="text-2xl font-bold">{language === 'hi' ? 'एकादशी: उपवासों का राजा' : 'Ekadashi: The King of Fasts'}</h4>
                </div>
                <p className="mb-6 opacity-90 leading-relaxed text-sm">
                   {language === 'hi' 
                     ? 'चंद्रमा का मानव मस्तिष्क पर प्रभाव सबसे अधिक होता है। एकादशी को व्रत रखने से शरीर हल्का रहता है और मन शांत (शरीर के "जल तत्व" को नियंत्रित करके)।' 
                     : 'Lunar influence on the human mind is peak during these days. Fasting keeps the body light and mind calm by controlling the "Water" element.'}
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                   <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                      <h5 className="font-bold text-yellow-400 mb-1 text-sm">{language === 'hi' ? 'समय (Timing)' : 'Timing'}</h5>
                      <p className="text-xs">{language === 'hi' ? 'महीने में दो बार (कृष्ण और शुक्ल पक्ष की 11वीं तिथि)' : 'Twice a month (11th day of waxing/waning moon)'}</p>
                   </div>
                   <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                      <h5 className="font-bold text-yellow-400 mb-1 text-sm">{language === 'hi' ? 'निर्जला एकादशी' : 'Nirjala Ekadashi'}</h5>
                      <p className="text-xs">{language === 'hi' ? 'बिना पानी के (मई/जून), यह तपस्या का उच्चतम स्तर है।' : 'Waterless fast (May/June), representing highest austerity.'}</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: language === 'hi' ? "गेमिफिकेशन (Civic Challenges)" : "Gamification (Civic Challenges)",
      subtitle: language === 'hi' ? "खेल और संकल्प के माध्यम से परिवर्तन" : "Change through play and pledges",
      icon: <Award size={32} className="text-purple-600" /> ,
      color: "border-purple-500",
      bg: "bg-purple-50",
      content: (
        <div className="space-y-8">
           <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-purple-600">
            <h4 className="font-bold text-lg mb-2">🎯 {language === 'hi' ? 'उद्देश्य' : 'Purpose'}</h4>
            <p className="text-gray-700 text-sm">
               {language === 'hi' ? 'Gamification सबसे तेज़ व्यवहार परिवर्तन लाता है।' : 'Gamification drives the fastest behavioral change.'}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
             <div className="bg-white p-5 rounded-xl border border-purple-100 shadow-sm">
                <h5 className="font-bold mb-1">10-Day Saucha Challenge</h5>
                <p className="text-xs text-gray-500 mb-3">Clean local spot photo every day for 10 days.</p>
                <div className="flex justify-between items-center text-xs font-bold text-purple-600">
                   <span>4.8k Joined</span>
                   <span className="flex items-center gap-1 cursor-pointer">Join <ArrowLeft className="rotate-180" size={12}/></span>
                </div>
             </div>
          </div>
        </div>
      )
    },
    {
        id: 3,
        title: language === 'hi' ? "मंदिर अभियान (Temple Campaigns)" : "Temple Campaigns",
        subtitle: language === 'hi' ? "नागरिक केंद्रों के रूप में मंदिर" : "Temples as Civic Hubs",
        icon: <Mic2 size={32} className="text-green-600" />,
        color: "border-green-500",
        bg: "bg-green-50",
        content: (
          <div className="space-y-12 animate-in fade-in slide-in-from-right-4 duration-500">
             {/* 1. CORE PHILOSOPHY */}
             <section className="bg-white p-8 rounded-3xl shadow-xl border-l-8 border-green-600">
                <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                   <ShieldCheck className="text-green-600" /> {language === 'hi' ? 'मुख्य दर्शन: "अनुष्ठानों से परे धर्म"' : 'Core Philosophy: "Dharma Beyond Rituals"'}
                </h4>
                <div className="bg-green-50 p-6 rounded-2xl border border-green-100 mb-6 italic text-green-900">
                   {language === 'hi' ? 'भारत में "पाप" (Sin) का डर कानून (Chalan) के डर से अधिक शक्तिशाली है। नागरिक उल्लंघन को "आध्यात्मिक उल्लंघन" के रूप में पुन: परिभाषित करना होगा।' : 'In India, fear of Sin (Paap) is a stronger deterrent than fear of Law (Chalan). We must re-frame civic violations as spiritual violations.'}
                </div>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  {language === 'hi' ? 'अभियान का संदेश: "एक सच्चा भक्त नागरिक उपद्रव नहीं हो सकता।" हमें अपना ध्यान कर्मकांड (भीतर के अनुष्ठान) से हटाकर कर्मयोग (बाहर के कार्य) की ओर ले जाना चाहिए।' : 'Message: "A true devotee cannot be a civic nuisance." We must shift focus from Karmakanda (Rituals inside) to Karmayoga (Action outside).'}
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                   <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                      <h5 className="font-bold text-green-700 text-sm uppercase mb-2">Waste (कचरा)</h5>
                      <p className="text-xs text-gray-600">Shift to: <strong>Amangal</strong> (Inauspicious/Negative Energy)</p>
                   </div>
                   <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                      <h5 className="font-bold text-green-700 text-sm uppercase mb-2">Pollution (प्रदूषण)</h5>
                      <p className="text-xs text-gray-600">Shift to: <strong>Prakriti Droh</strong> (Rebellion against Nature)</p>
                   </div>
                   <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                      <h5 className="font-bold text-green-700 text-sm uppercase mb-2">Civic Sense</h5>
                      <p className="text-xs text-gray-600">Shift to: <strong>Rashtra Dharma</strong> (National Duty)</p>
                   </div>
                </div>
             </section>

             {/* 2. THREE CAMPAIGN PILLARS */}
             <div className="grid md:grid-cols-3 gap-6">
                {/* PILLAR 1 */}
                <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-orange-500 flex flex-col h-full">
                   <Trash2 className="text-orange-500 mb-4" size={32} />
                   <h5 className="font-bold text-gray-900 mb-2">{language === 'hi' ? 'कचरा "अमंगल" है' : 'Waste as "Amangal"'}</h5>
                   <p className="text-xs text-gray-600 mb-4 flex-grow">{language === 'hi' ? 'शौच (शुद्धि) ईश्वर का पहला कदम है। यदि आप प्रसाद का प्लास्टिक सड़क पर फेंकते हैं, तो आपने प्रसाद का अपमान किया है।' : 'Purity (Saucha) is the first step to God. If you throw a plastic wrapper of Prasad on the road, you insult the Prasad.'}</p>
                   <ul className="text-[10px] space-y-1 text-orange-800 font-bold uppercase">
                      <li className="flex items-center gap-1"><Zap size={10}/> "Nirmalya" Composting</li>
                      <li className="flex items-center gap-1"><Zap size={10}/> Zero Plastic Prasad</li>
                   </ul>
                </div>

                {/* PILLAR 2 */}
                <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-blue-500 flex flex-col h-full">
                   <Activity className="text-blue-500 mb-4" size={32} />
                   <h5 className="font-bold text-gray-900 mb-2">{language === 'hi' ? 'सड़क अनुशासन = अहिंसा' : 'Road Discipline as "Ahimsa"'}</h5>
                   <p className="text-xs text-gray-600 mb-4 flex-grow">{language === 'hi' ? 'लेन काटना या अनावश्यक हॉर्न बजाना हिंसा है। पुजारी "वाहन पूजा" तभी करेंगे जब मालिक यातायात नियमों के पालन का संकल्प लेगा।' : 'Cutting lanes or honking unnecessarily is violence (Himsa). Priests should perform Vahan Puja only after a Traffic Vow.'}</p>
                   <ul className="text-[10px] space-y-1 text-blue-800 font-bold uppercase">
                      <li className="flex items-center gap-1"><Zap size={10}/> Traffic Vow (Sankalp)</li>
                      <li className="flex items-center gap-1"><Zap size={10}/> Vahan Puja Conditions</li>
                   </ul>
                </div>

                {/* PILLAR 3 */}
                <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-green-500 flex flex-col h-full">
                   <Waves className="text-green-500 mb-4" size={32} />
                   <h5 className="font-bold text-gray-900 mb-2">{language === 'hi' ? 'इको-थियोलॉजी' : 'Eco-Theology'}</h5>
                   <p className="text-xs text-gray-600 mb-4 flex-grow">{language === 'hi' ? 'नदियों को रसायनों से जहर देना पाप है। मिट्टी की मूर्तियाँ (पृथ्वी) वापस पृथ्वी पर लौटनी चाहिए।' : 'Poisoning rivers with chemicals is a sin. Clay idols (Earth) must return to Earth. Water cycle is God\'s circulation.'}</p>
                   <ul className="text-[10px] space-y-1 text-green-800 font-bold uppercase">
                      <li className="flex items-center gap-1"><Zap size={10}/> Vriksha Prasad</li>
                      <li className="flex items-center gap-1"><Zap size={10}/> River Restoration</li>
                   </ul>
                </div>
             </div>

             {/* 3. ADARSH DEVALAYA FRAMEWORK */}
             <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-indigo-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                   <Library className="text-indigo-900" size={150} />
                </div>
                <div className="relative z-10">
                   <h4 className="text-2xl font-bold text-[#2D2168] mb-6 text-center underline decoration-[#D98F2B] underline-offset-8">
                     {language === 'hi' ? '"आदर्श देवालय" मानक (Ideal Temple Standard)' : '"Adarsh Devalaya" (Ideal Temple) Standard'}
                   </h4>
                   <div className="overflow-x-auto rounded-2xl border-2 border-indigo-50 shadow-inner">
                      <table className="w-full text-left">
                         <thead className="bg-[#2D2168] text-white">
                            <tr>
                               <th className="p-5 font-bold uppercase tracking-wider text-xs">{language === 'hi' ? 'मापदंड (Metric)' : 'Metric'}</th>
                               <th className="p-5 font-bold uppercase tracking-wider text-xs">{language === 'hi' ? 'नागरिक/वैज्ञानिक कार्रवाई' : 'Civic/Scientific Action'}</th>
                               <th className="p-5 font-bold uppercase tracking-wider text-xs">{language === 'hi' ? 'धार्मिक तर्क' : 'Religious Justification'}</th>
                            </tr>
                         </thead>
                         <tbody className="divide-y divide-indigo-50 font-medium">
                            <tr className="hover:bg-indigo-50/50 transition-colors">
                               <td className="p-5 font-bold text-indigo-900">{language === 'hi' ? 'ध्वनि (Acoustics)' : 'Acoustics'}</td>
                               <td className="p-5 text-gray-700">{language === 'hi' ? 'लाउडस्पीकर पर डेसीबल लिमिटर्स।' : 'Decibel limiters on loudspeakers.'}</td>
                               <td className="p-5 text-sm text-indigo-600 italic">
                                  {language === 'hi' ? 'शांति ईश्वर की भाषा है; शोर आसुरी (असुरी) है।' : 'Shanti (Silence) is Divine; Noise is Asuric (Demonic).'}
                               </td>
                            </tr>
                            <tr className="hover:bg-indigo-50/50 transition-colors">
                               <td className="p-5 font-bold text-indigo-900">{language === 'hi' ? 'अपशिष्ट (Waste)' : 'Waste'}</td>
                               <td className="p-5 text-gray-700">{language === 'hi' ? 'जीरो-वेस्ट (फूलों की कंपोस्टिंग)।' : 'Zero-Waste (Composting flowers).'}</td>
                               <td className="p-5 text-sm text-indigo-600 italic">
                                  {language === 'hi' ? 'भूमि देवी पर कूड़े का बोझ नहीं होना चाहिए।' : 'Bhoomi Devi (Earth Goddess) should not be burdened with trash.'}
                               </td>
                            </tr>
                            <tr className="hover:bg-indigo-50/50 transition-colors">
                               <td className="p-5 font-bold text-indigo-900">{language === 'hi' ? 'जल (Water)' : 'Water'}</td>
                               <td className="p-5 text-gray-700">{language === 'hi' ? 'वर्षा जल संचयन (Rainwater Harvesting)।' : 'Rainwater Harvesting structure.'}</td>
                               <td className="p-5 text-sm text-indigo-600 italic">
                                  {language === 'hi' ? 'वरुण देव के आशीर्वाद (वर्षा) को संचित करना एक पवित्र कर्तव्य है।' : 'Storing Varuna\'s blessing (Rain) is a sacred duty.'}
                               </td>
                            </tr>
                            <tr className="hover:bg-indigo-50/50 transition-colors">
                               <td className="p-5 font-bold text-indigo-900">{language === 'hi' ? 'शिक्षा (Education)' : 'Education'}</td>
                               <td className="p-5 text-gray-700">{language === 'hi' ? 'साप्ताहिक "विज्ञान और धर्म" कक्षाएं।' : 'Weekly "Science & Dharma" classes.'}</td>
                               <td className="p-5 text-sm text-indigo-600 italic">
                                  {language === 'hi' ? 'ज्ञान योग अंध अनुष्ठान से श्रेष्ठ है।' : 'Gyan Yoga (Path of Knowledge) is superior to blind ritual.'}
                                </td>
                            </tr>
                         </tbody>
                      </table>
                   </div>
                </div>
             </div>

             {/* 4. REAL WORLD CASE STUDIES */}
             <section className="space-y-8">
                <div className="text-center">
                   <h4 className="text-2xl font-bold text-gray-900">{language === 'hi' ? 'वास्तविक सफलता की कहानियाँ (Evidence Library)' : 'Real-World Case Studies (Evidence Library)'}</h4>
                   <p className="text-sm text-gray-500 mt-2">{language === 'hi' ? 'ये डेटा-आधारित मामले साबित करते हैं कि "ग्रीन टेम्पल" मॉडल सफल है।' : 'These data-backed cases prove the "Green Temple" model is a proven success.'}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                   {/* SIDDHIVINAYAK */}
                   <div className="bg-white p-6 rounded-3xl shadow-lg border border-orange-100 flex flex-col h-full hover:shadow-2xl transition-shadow">
                      <div className="flex items-center gap-3 mb-4">
                         <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 shadow-sm"><Trash2 size={24}/></div>
                         <h5 className="font-bold text-lg">Siddhivinayak, Mumbai</h5>
                      </div>
                      <div className="space-y-4 flex-grow text-xs leading-relaxed">
                         <div className="bg-orange-50 p-3 rounded-lg border border-orange-100">
                            <strong>Challenge:</strong> 120-200 kg floral waste daily dumped into the sea, polluting coastlines.
                         </div>
                         <p><strong>Religious Intervention:</strong> Redefined "Nirmalya" not as trash, but as raw material for service.</p>
                         <p><strong>Scientific Solution:</strong> Partnered with SHGs to segments petals, dry and pulverize them for natural dyes and incense.</p>
                         <div className="bg-green-50 p-3 rounded-lg border border-green-100 font-bold text-green-800 flex justify-between items-center">
                            <span>Impact: 100% waste diverted from ocean.</span>
                            <CheckCircle size={14} />
                         </div>
                      </div>
                   </div>

                   {/* TIRUPATI */}
                   <div className="bg-white p-6 rounded-3xl shadow-lg border border-blue-100 flex flex-col h-full hover:shadow-2xl transition-shadow">
                      <div className="flex items-center gap-3 mb-4">
                         <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shadow-sm"><Droplet size={24}/></div>
                         <h5 className="font-bold text-lg">Tirumala Tirupati (TTD)</h5>
                      </div>
                      <div className="space-y-4 flex-grow text-xs leading-relaxed">
                         <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                            <strong>Challenge:</strong> Landfill crisis from millions of disposable plastic water bottles on sacred hills.
                         </div>
                         <p><strong>Religious Intervention:</strong> Invoked sanctity of the "Seven Hills"; plastic declared as defiling the holy land.</p>
                         <p><strong>Scientific Solution:</strong> Total plastic bottle ban + RO Water Stations (Jalaprasadam) every few meters.</p>
                         <div className="bg-green-50 p-3 rounded-lg border border-green-100 font-bold text-green-800 flex justify-between items-center">
                            <span>Impact: 4.44 Lakh liters consumed daily from taps.</span>
                            <CheckCircle size={14} />
                         </div>
                      </div>
                   </div>

                   {/* SEECHEWAL */}
                   <div className="bg-white p-6 rounded-3xl shadow-lg border border-green-100 flex flex-col h-full hover:shadow-2xl transition-shadow">
                      <div className="flex items-center gap-3 mb-4">
                         <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 shadow-sm"><Waves size={24}/></div>
                         <h5 className="font-bold text-lg">Seechewal Model, Punjab</h5>
                      </div>
                      <div className="space-y-4 flex-grow text-xs leading-relaxed">
                         <div className="bg-green-50 p-3 rounded-lg border border-green-100">
                            <strong>Challenge:</strong> 160 km Kali Bein river turned into a sewage drain.
                         </div>
                         <p><strong>Religious Intervention:</strong> Baba Seechewal used Gurbani ("Water is Father, Earth is Mother"). Pollution = Poisoning Father.</p>
                         <p><strong>Scientific Solution:</strong> Natural sewage treatment via oxidation ponds; used treated water for irrigation.</p>
                         <div className="bg-green-50 p-3 rounded-lg border border-green-100 font-bold text-green-800 flex justify-between items-center">
                            <span>Impact: 160 km restored; NGT benchmark model.</span>
                            <CheckCircle size={14} />
                         </div>
                      </div>
                   </div>

                   {/* GOLDEN TEMPLE */}
                   <div className="bg-white p-6 rounded-3xl shadow-lg border border-yellow-100 flex flex-col h-full hover:shadow-2xl transition-shadow">
                      <div className="flex items-center gap-3 mb-4">
                         <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 shadow-sm"><Leaf size={24}/></div>
                         <h5 className="font-bold text-lg">Golden Temple, Amritsar</h5>
                      </div>
                      <div className="space-y-4 flex-grow text-xs leading-relaxed">
                         <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-100">
                            <strong>Challenge:</strong> Huge plastic waste from distributing Karah Prasad bags.
                         </div>
                         <p><strong>Religious Intervention:</strong> SGPC decided Seva (service) must be eco-friendly to honor creation.</p>
                         <p><strong>Scientific Solution:</strong> Replaced plastic with compostable bags made from corn and potato starch.</p>
                         <div className="bg-green-50 p-3 rounded-lg border border-green-100 font-bold text-green-800 flex justify-between items-center">
                            <span>Impact: ~200 quintals of plastic waste reduced annually.</span>
                            <CheckCircle size={14} />
                         </div>
                      </div>
                   </div>
                </div>
             </section>

             {/* 5. SLOGANS */}
             <div className="bg-[#2D2168] p-10 rounded-3xl text-center text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 p-10 opacity-10"><Sparkles size={120} /></div>
                <h4 className="text-xl font-bold mb-8 uppercase tracking-widest text-orange-400">{language === 'hi' ? 'अभियान के नारे (Campaign Slogans)' : 'Campaign Slogans'}</h4>
                <div className="flex flex-col md:flex-row gap-6 justify-center">
                   <div className="bg-white/10 px-6 py-4 rounded-xl backdrop-blur-md border border-white/20">
                      <p className="text-xl font-sanskrit font-bold">सड़क सुरक्षा, ईश्वर रक्षा</p>
                      <p className="text-xs opacity-60 mt-1">{language === 'hi' ? '(सड़क सुरक्षा ईश्वर की रक्षा है)' : '(Road Safety is God\'s Protection)'}</p>
                   </div>
                   <div className="bg-white/10 px-6 py-4 rounded-xl backdrop-blur-md border border-white/20">
                      <p className="text-xl font-sanskrit font-bold">प्रदूषण हटाओ, पुण्य कमाओ</p>
                      <p className="text-xs opacity-60 mt-1">{language === 'hi' ? '(प्रदूषण हटाना पुण्य का कार्य है)' : '(Remove Pollution, Earn Merit)'}</p>
                   </div>
                   <div className="bg-white/10 px-6 py-4 rounded-xl backdrop-blur-md border border-white/20">
                      <p className="text-xl font-sanskrit font-bold">जल ही जगदीश है</p>
                      <p className="text-xs opacity-60 mt-1">{language === 'hi' ? '(जल ही भगवान है)' : '(Water is the Lord)'}</p>
                   </div>
                </div>
             </div>
          </div>
        )
    },
    {
        id: 4,
        title: language === 'hi' ? "इको-त्योहार (Eco-Festivals)" : "Eco-Festivals",
        subtitle: language === 'hi' ? "अनुष्ठान + पर्यावरण = आधुनिक धर्म" : "Rituals + Environment = Modern Dharma",
        icon: <Calendar size={32} className="text-red-600" />,
        color: "border-red-500",
        bg: "bg-red-50",
        content: (
          <div className="space-y-6">
             <div className="bg-white p-6 rounded-xl border-l-4 border-red-600 shadow-sm">
                <h4 className="font-bold mb-2">Sustainable Celebration Models</h4>
                <p className="text-sm text-gray-600">Replacing harmful practices with Vedic Eco-friendly alternatives.</p>
             </div>
             <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex gap-3 items-center p-3 bg-white rounded-lg border border-red-100">
                   <div className="text-red-600"><CheckCircle size={20}/></div>
                   <span className="text-sm">Clay Ganesha / Eco-visarjan</span>
                </div>
                <div className="flex gap-3 items-center p-3 bg-white rounded-lg border border-red-100">
                   <div className="text-red-600"><CheckCircle size={20}/></div>
                   <span className="text-sm">Natural Holi (Haldi-Kumkum)</span>
                </div>
             </div>
          </div>
        )
    }
  ];

  const selectedFeatureContent = culturalFeatures.find(f => f.id === activeFeature);

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {!activeFeature ? (
        <>
          <header className="text-center">
            <h2 className="text-3xl font-bold text-orange-800 mb-4">{t.title}</h2>
            <p className="text-gray-600 text-sm">
              {t.desc}
            </p>
          </header>

          <section className="bg-white rounded-2xl shadow-lg overflow-hidden border border-orange-100">
            <div className="bg-orange-800 text-white p-6">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Lightbulb className="text-yellow-300" /> 
                {t.frameworkTitle}
              </h3>
              <p className="text-orange-200 text-sm mt-1">{t.frameworkSub}</p>
            </div>
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
              {frameworkItems.map((item) => (
                <div 
                  key={item.id} 
                  className={`transition-all duration-300 ${expandedFramework === item.id ? 'md:col-span-2 bg-orange-50' : 'hover:bg-orange-50'}`}
                >
                  <div 
                    className="p-6 cursor-pointer"
                    onClick={() => toggleFramework(item.id)}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                         <div className="p-2 bg-white rounded-full shadow-sm">{item.icon}</div>
                         <div>
                            <h4 className="font-bold text-orange-700 text-lg">{item.title}</h4>
                            <p className="text-xs text-orange-600 font-serif">{item.sanskritTitle}</p>
                         </div>
                      </div>
                      {expandedFramework === item.id ? <ChevronUp className="text-gray-400" /> : <ChevronDown className="text-gray-400" />}
                    </div>
                  </div>

                  {expandedFramework === item.id && (
                    <div className="px-8 pb-8 animate-in fade-in slide-in-from-top-2 duration-300 ml-4 border-l-2 border-orange-200">
                        <div className="space-y-4 text-sm text-gray-800">
                            <p className="leading-relaxed">{item.details.intro}</p>
                            <div className="bg-white p-4 rounded-lg border border-orange-100 shadow-sm">
                                <p className="font-serif text-lg text-orange-900 mb-1">{item.details.sanskrit.split('—')[0]}</p>
                                <p className="text-gray-600 italic">— {item.details.sanskrit.split('—')[1]}</p>
                            </div>
                        </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-blue-500 pl-4">{t.culturalTitle}</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {culturalFeatures.map((feature) => (
                <div 
                  key={feature.id} 
                  onClick={() => setActiveFeature(feature.id)}
                  className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 flex items-start gap-4 cursor-pointer hover:shadow-md hover:bg-gray-50 transition-all group"
                >
                  <div className={`bg-gray-50 p-3 rounded-full flex-shrink-0 group-hover:bg-white border ${feature.color} border-opacity-20 transition-all`}>{feature.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800 flex items-center justify-between">
                      {feature.title}
                      <ArrowLeft className="rotate-180 text-gray-300 group-hover:text-blue-500 transition-colors" size={16} />
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">{feature.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-blue-900 text-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-xl font-bold mb-4">{t.policyTitle}</h3>
            <ul className="space-y-4 text-sm">
                {t.policies.map((policy, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="bg-blue-700 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-xs">{idx + 1}</span>
                    <p>{policy}</p>
                  </li>
                ))}
            </ul>
          </section>
        </>
      ) : (
        <div className="animate-in slide-in-from-right-10 duration-300">
          <button 
            onClick={() => setActiveFeature(null)}
            className="flex items-center gap-2 text-orange-600 hover:text-orange-800 font-medium mb-6"
          >
            <ArrowLeft size={20} /> {language === 'hi' ? 'पीछे जाएँ' : 'Back'}
          </button>
          
          {selectedFeatureContent && (
             <div className="space-y-6">
                <div className={`p-8 rounded-2xl border-2 ${selectedFeatureContent.color} ${selectedFeatureContent.bg}`}>
                   <div className="flex items-center gap-4 mb-4">
                      <div className="bg-white p-3 rounded-full shadow-sm">{selectedFeatureContent.icon}</div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{selectedFeatureContent.title}</h2>
                   </div>
                   <p className="text-gray-700 text-lg font-medium">{selectedFeatureContent.subtitle}</p>
                </div>
                {selectedFeatureContent.content}
             </div>
          )}
        </div>
      )}
    </div>
  );
};

// Simplified Library icon since it was missing in local imports but used in UI
const Library = ({ size, className }: { size: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="m16 6 4 14" />
    <path d="M12 6v14" />
    <path d="M8 8v12" />
    <path d="M4 4v16" />
  </svg>
);

export default Interventions;