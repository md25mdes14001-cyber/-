import React from 'react';
import { Sparkles, Leaf, ShieldCheck, Sun, Star, CheckCircle2, Search, Database, Heart, BookOpen, UserCheck, MessageSquarePlus } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const About: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    hi: {
      introTitle: 'नमस्ते!',
      introText: (
        <>
          "मेरा नाम <span className="font-bold text-[#D98F2B]">अभिमन्यु शुक्ला</span> है, मैं एक डिज़ाइनर (Problem Solver) हूँ। मैंने अनुभव किया कि भारत में कानून से अधिक 'धर्म' व्यवहार को प्रभावित करता है। इसलिए, मैंने यह मंच बनाया है ताकि नागरिक बोध को वैदिक मूल्यों के साथ जोड़ा जा सके और एक स्वच्छ, दयालु और जिम्मेदार भारत का निर्माण हो सके।"
        </>
      ),
      philTitle: '“अहं ब्रह्मास्मि”',
      philSub: '— क्यों यह नाम आपके मिशन को पूरा करता है? —',
      philDesc: (
        <>
          “अहं ब्रह्मास्मि” (मैं ब्रह्म हूँ) उपनिषदों का महावाक्य है, जिसका अर्थ है:
          <br/><br/>
          <span className="font-semibold text-[#2D2168] italic">“मैं दिव्यता का हिस्सा हूँ — और हर जीव भी। जब मैं स्वयं को ब्रह्म मानता हूँ, तो मैं संसार को भी पवित्र मानकर उसका सम्मान करता हूँ।”</span>
        </>
      ),
      cards: [
        { bold: "✔ मैं भगवान हूँ", text: "→ मेरा व्यवहार भी दिव्य होना चाहिए।", color: "border-[#D98F2B]" },
        { bold: "✔ सबमें ब्रह्म है", text: "→ मैं किसी को हानि नहीं पहुँचाऊँगा।", color: "border-[#2D2168]" },
        { bold: "✔ प्रकृति में ब्रह्म है", text: "→ मैं प्रदूषण नहीं करूँगा।", color: "border-[#1F6A4C]" },
        { bold: "✔ सामुदायिक जीवन", text: "→ मिलकर स्वर्ग-सा समाज बनाएँ।", color: "border-purple-600" }
      ],
      phil2Title: 'दार्शनिक व्याख्या',
      phil2Box1Title: 'अहं ब्रह्मास्मि = आत्म-शुद्धि = सामाजिक-शुद्धि',
      phil2Box1Desc: 'जो स्वयं को दिव्य देखता है, वह सार्वजनिक जगहों में कचरा नहीं फेंकता, ट्रैफ़िक नियम तोड़कर अहिंसा का उल्लंघन नहीं करता, और पवित्रता (शौच) को धर्म का हिस्सा मानता है।',
      phil2Box2Title: 'महावाक्य का आधुनिक अर्थ',
      phil2Box2Desc: '“जब मैं स्वयं को दिव्य मानता हूँ, तो मेरे कर्म भी दिव्यता को प्रतिबिंबित करने चाहिए।”',
      listTitle: 'यह प्लेटफ़ॉर्म सिखाता है:',
      listItems: [
        { label: "हम सब भगवान का अंश हैं" },
        { label: "इसलिए समाज = मंदिर" },
        { label: "स्वच्छता = पूजा" },
        { label: "नियम = धर्म" },
        { label: "अहिंसा = सर्वोच्च आचरण" },
        { label: "सम्मान = ईश्वर का सम्मान" },
      ],
      manifTitle: 'संकल्प (Manifesto)',
      manifSub: '"अहं ब्रह्मास्मि — I Am Divine. Therefore My Actions Must Be Divine."',
      manifBox1Title: 'यदि मैं ब्रह्म हूँ—तो',
      manifBox1List: [
        "✔ मैं कचरा नहीं फैलाऊँगा।",
        "✔ मैं सड़क पर हिंसा नहीं करूँगा।",
        "✔ मैं हवा, जल, मिट्टी को अपवित्र नहीं करूँगा।"
      ],
      manifBox2Title: 'हमारा समीकरण',
      manifBox2List: [
        "स्वच्छता = पूजा",
        "अनुशासन = तप",
        "नागरिक कर्तव्य = आधुनिक यज्ञ"
      ],
      manifFooter: '“जहाँ मैं चलता हूँ, वहाँ पवित्रता छोड़ता हूँ। जहाँ मैं रहता हूँ, वहाँ व्यवस्था जन्म लेती है।”',
      footerTitle: 'अहं ब्रह्मास्मि',
      footerDesc: 'स्वयं को देवत्व मानकर चलो, समाज को स्वर्ग बनाओ।',
      // New Section Content (Hindi)
      gratitudeTitle: 'ज्ञान और कृतज्ञता भित्ति (Wall of Wisdom & Gratitude)',
      gratitudeDesc: '“सत्य की खोज में जो हमें दिशा दिखाते हैं, वे ही हमारे सच्चे मित्र हैं।” यदि आप इस मंच पर कोई तथ्यात्मक त्रुटि पाते हैं या अपने ज्ञान और अनुभव से कोई नई प्रासंगिक जानकारी साझा करना चाहते हैं, तो हम आपका हृदय से स्वागत करते हैं।',
      processTitle: 'हमारी सत्यापन प्रक्रिया (Verification Process)',
      processSteps: [
        { icon: <MessageSquarePlus size={20} />, title: "जानकारी साझा करें", desc: "प्रमाण (Scriptures/Links) के साथ अपना सुझाव भेजें।" },
        { icon: <Search size={20} />, title: "सत्यापन (Cross-check)", titleSub: "Cross-check", desc: "हमारी टीम आपके द्वारा दिए गए सूत्रों और तथ्यों की गहराई से जांच करेगी।" },
        { icon: <Database size={20} />, title: "डेटाबेस अपडेट", titleSub: "Implementation", desc: "महत्व और सटीकता के आधार पर जानकारी को प्लेटफॉर्म में शामिल किया जाएगा।" },
        { icon: <Star size={20} />, title: "सम्मान और आभार", titleSub: "Tribute", desc: "हम आपका नाम और आपके स्रोत का उल्लेख कर आपको विशेष सम्मान देंगे।" }
      ],
      tributeTitle: 'विशेष आभार (Tributes)',
      tributeDesc: 'उन महानुभावों की सूची जिन्होंने इस मंच को और अधिक शुद्ध और ज्ञानवर्धक बनाने में योगदान दिया है:'
    },
    en: {
      introTitle: 'Namaste!',
      introText: (
        <>
          "My name is <span className="font-bold text-[#D98F2B]">Abhimanyu Shukla</span>, and I am a Designer (Problem Solver). I realized that in India, 'Dharma' influences behavior more than law. Therefore, I created this platform to bridge Civic Sense with Vedic values and build a clean, compassionate, and responsible India."
        </>
      ),
      philTitle: '“Aham Brahmasmi”',
      philSub: '— Why does this name fulfill the mission? —',
      philDesc: (
        <>
          “Aham Brahmasmi” (I am Brahman) is a Mahavakya from the Upanishads, meaning:
          <br/><br/>
          <span className="font-semibold text-[#2D2168] italic">“I am part of the Divine — and so is every being. When I consider myself Brahman, I consider the world sacred and respect it.”</span>
        </>
      ),
      cards: [
        { bold: "✔ I am Divine", text: "→ My behavior must be divine too.", color: "border-[#D98F2B]" },
        { bold: "✔ Divinity in All", text: "→ I will not harm anyone.", color: "border-[#2D2168]" },
        { bold: "✔ Divinity in Nature", text: "→ I will not pollute.", color: "border-[#1F6A4C]" },
        { bold: "✔ Community Life", text: "→ Let's create a heaven-like society together.", color: "border-purple-600" }
      ],
      phil2Title: 'Philosophical Explanation',
      phil2Box1Title: 'Aham Brahmasmi = Self-Purification = Social Purification',
      phil2Box1Desc: 'One who sees themselves as divine does not litter in public spaces, does not violate Ahimsa by breaking traffic rules, and considers cleanliness (Saucha) as part of Dharma.',
      phil2Box2Title: 'Modern Meaning of the Mahavakya',
      phil2Box2Desc: '“When I accept myself as Divine, my actions must reflect that Divinity.”',
      listTitle: 'This Platform Teaches:',
      listItems: [
        { label: "We are all parts of the Divine" },
        { label: "Therefore Society = Temple" },
        { label: "Cleanliness = Worship" },
        { label: "Rules = Dharma" },
        { label: "Non-violence = Supreme Conduct" },
        { label: "Respect = Respecting God" },
      ],
      manifTitle: 'Manifesto (Sankalp)',
      manifSub: '"Aham Brahmasmi — I Am Divine. Therefore My Actions Must Be Divine."',
      manifBox1Title: 'If I am Brahman—Then',
      manifBox1List: [
        "✔ I will not litter.",
        "✔ I will not be violent on the road.",
        "✔ I will not pollute the air, water, or soil."
      ],
      manifBox2Title: 'Our Equation',
      manifBox2List: [
        "Cleanliness = Worship",
        "Discipline = Penance (Tapas)",
        "Civic Duty = Modern Yajna"
      ],
      manifFooter: '“Where I walk, I leave purity. Where I live, order is born.”',
      footerTitle: 'Aham Brahmasmi',
      footerDesc: 'Walk assuming your own divinity, and make society a heaven.',
      // New Section Content (English)
      gratitudeTitle: 'Wall of Wisdom & Gratitude',
      gratitudeDesc: '“Those who guide us towards Truth are our truest friends.” If you find a factual error or wish to share relevant information based on your knowledge and experiences, we wholeheartedly welcome your contribution.',
      processTitle: 'Our Verification Workflow',
      processSteps: [
        { icon: <MessageSquarePlus size={20} />, title: "Share Wisdom", desc: "Send your suggestion along with authentic proofs (Scriptures/Links)." },
        { icon: <Search size={20} />, title: "Verification", titleSub: "Cross-check", desc: "Our team will rigorously cross-check the provided sources and facts." },
        { icon: <Database size={20} />, title: "Update Database", titleSub: "Implementation", desc: "Based on importance and correctness, the info will be integrated." },
        { icon: <Star size={20} />, title: "Wall of Tribute", titleSub: "Thanksgiving", desc: "We will feature your name and your resource as a special tribute." }
      ],
      tributeTitle: 'Wall of Tributes',
      tributeDesc: 'Recognizing those who helped refine this platform for the greater good:'
    }
  };

  const t = language === 'hi' ? content.hi : content.en;

  const icons = [
    <Sun size={18} className="text-orange-500" />,
    <ShieldCheck size={18} className="text-blue-500" />,
    <Leaf size={18} className="text-green-500" />,
    <ShieldCheck size={18} className="text-purple-500" />,
    <Heart size={18} className="text-red-500" />,
    <Sun size={18} className="text-yellow-500" />
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 space-y-16">
      
      {/* Intro Section */}
      <div className="bg-white p-10 rounded-3xl shadow-xl border border-orange-100 text-center">
         <h2 className="text-3xl font-bold text-[#2D2168] mb-6">{t.introTitle}</h2>
         <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
           {t.introText}
         </p>
      </div>

      {/* Philosophy Section 1 */}
      <section className="bg-[#FFF8E7] rounded-3xl p-8 md:p-12 text-center border-t-8 border-[#D98F2B]">
        <h2 className="text-4xl font-bold text-[#2D2168] mb-6 font-sanskrit">{t.philTitle}</h2>
        <h3 className="text-xl text-[#D98F2B] font-bold mb-8 uppercase tracking-wider">{t.philSub}</h3>
        
        <div className="text-lg text-gray-800 leading-relaxed max-w-3xl mx-auto mb-8">
          {t.philDesc}
        </div>

        <div className="grid md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
           {t.cards.map((card, i) => (
             <div key={i} className={`bg-white p-4 rounded-lg shadow-sm border-l-4 ${card.color}`}>
                <span className="font-bold text-[#2D2168]">{card.bold}</span> {card.text}
             </div>
           ))}
        </div>
      </section>

      {/* Philosophy Section 2: Civic Sense */}
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
           <h3 className="text-2xl font-bold text-[#2D2168]">{t.phil2Title}</h3>
           <div className="bg-white p-4 rounded-xl shadow-sm border border-orange-100">
              <h4 className="font-bold text-[#D98F2B] mb-2">{t.phil2Box1Title}</h4>
              <p className="text-gray-600 text-sm">
                {t.phil2Box1Desc}
              </p>
           </div>
           <div className="bg-[#2D2168] text-white p-6 rounded-xl shadow-lg">
              <h4 className="font-bold text-[#D98F2B] mb-3 flex items-center gap-2"><Sparkles size={20}/> {t.phil2Box2Title}</h4>
              <p className="italic text-lg">
                {t.phil2Box2Desc}
              </p>
           </div>
        </div>
        <div className="bg-white p-6 rounded-3xl shadow-md border border-gray-100">
           <h4 className="text-center font-bold text-gray-800 mb-6">{t.listTitle}</h4>
           <ul className="space-y-4">
              {t.listItems.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                   {icons[idx]}
                   <span className="font-medium text-gray-700">{item.label}</span>
                </li>
              ))}
           </ul>
        </div>
      </section>

      {/* Manifesto */}
      <section className="bg-[#2D2168] text-[#FFF8E7] rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div className="w-96 h-96 bg-[#D98F2B] rounded-full blur-3xl absolute -top-20 -left-20"></div>
           <div className="w-96 h-96 bg-blue-500 rounded-full blur-3xl absolute -bottom-20 -right-20"></div>
        </div>
        
        <div className="relative z-10">
           <h2 className="text-3xl md:text-5xl font-bold mb-6 font-sanskrit">{t.manifTitle}</h2>
           <p className="text-lg md:text-xl font-light mb-8 max-w-3xl mx-auto">
             {t.manifSub}
           </p>
           
           <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left mb-10">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10">
                 <h4 className="font-bold text-[#D98F2B] mb-2">{t.manifBox1Title}</h4>
                 <ul className="space-y-2 text-sm text-gray-200">
                    {t.manifBox1List.map((li, i) => <li key={i}>{li}</li>)}
                 </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10">
                 <h4 className="font-bold text-[#D98F2B] mb-2">{t.manifBox2Title}</h4>
                 <ul className="space-y-2 text-sm text-gray-200">
                    {t.manifBox2List.map((li, i) => <li key={i}>{li}</li>)}
                 </ul>
              </div>
           </div>

           <p className="text-xl md:text-2xl font-serif italic text-[#D98F2B]">
             {t.manifFooter}
           </p>
        </div>
      </section>

      {/* NEW SECTION: WALL OF WISDOM & GRATITUDE */}
      <section className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-indigo-100">
          <div className="text-center mb-10">
             <div className="inline-flex p-3 bg-indigo-50 rounded-full text-indigo-600 mb-4">
                <Star size={32} />
             </div>
             <h2 className="text-3xl md:text-4xl font-bold text-[#2D2168] mb-4 font-sanskrit">{t.gratitudeTitle}</h2>
             <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed italic">
                {t.gratitudeDesc}
             </p>
          </div>

          {/* Process Timeline */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
              {t.processSteps.map((step, i) => (
                <div key={i} className="relative p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center hover:bg-white hover:shadow-md transition-all">
                    <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg border-4 border-white">
                        {step.icon}
                    </div>
                    <h4 className="font-bold text-[#2D2168] mb-1">{step.title}</h4>
                    {step.titleSub && <p className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest mb-2">{step.titleSub}</p>}
                    <p className="text-xs text-gray-600">{step.desc}</p>
                    {i < 3 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-gray-300">
                        <ArrowRight size={24} />
                      </div>
                    )}
                </div>
              ))}
          </div>

          {/* Tributes List */}
          <div className="bg-indigo-900 text-white p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                 <UserCheck size={80} />
              </div>
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                <Heart size={20} className="text-pink-400" /> {t.tributeTitle}
              </h3>
              <p className="text-indigo-200 text-sm mb-6">{t.tributeDesc}</p>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* Contribution Card Example 1 */}
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                     <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-xs font-bold">AS</div>
                        <span className="font-bold text-sm text-orange-200">Anant Sharma</span>
                     </div>
                     <p className="text-xs text-indigo-50 italic">"Corrected the Yajna Wood classification in Eco-Dharma section."</p>
                     <p className="text-[10px] mt-2 text-white/50">Verified via: Matsya Purana</p>
                  </div>
                  
                  {/* Contribution Card Example 2 */}
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                     <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold">VK</div>
                        <span className="font-bold text-sm text-blue-200">Vani Kapoor</span>
                     </div>
                     <p className="text-xs text-indigo-50 italic">"Provided the scientific link for Neurotoxins in synthetic sindoor."</p>
                     <p className="text-[10px] mt-2 text-white/50">Verified via: NCBI Study</p>
                  </div>

                  {/* Empty Slot / Placeholder for next person */}
                  <div className="bg-white/5 p-4 rounded-xl border border-dashed border-white/20 flex flex-col items-center justify-center text-center">
                     <p className="text-xs text-white/60 font-bold uppercase tracking-widest">Next Entry</p>
                     <p className="text-[10px] text-white/40">Is it you? Share your wisdom.</p>
                  </div>
              </div>
          </div>
      </section>

      <div className="text-center pt-8">
        <h3 className="text-2xl font-bold text-[#2D2168]">{t.footerTitle}</h3>
        <p className="text-gray-600 mt-2">{t.footerDesc}</p>
      </div>

    </div>
  );
};

// Helper for Arrow icon
const ArrowRight = ({ size, className }: { size: number, className?: string }) => (
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
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export default About;