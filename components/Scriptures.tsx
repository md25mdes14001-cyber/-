import React from 'react';
import { Quote, Book, Sparkles, ExternalLink, Library } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Scriptures: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    hi: {
      title: 'धर्म और नागरिक कर्तव्य',
      subtitle: 'सनातन दृष्टि से आधुनिक नागरिकता के सूत्र'
    },
    en: {
      title: 'Dharma and Civic Duty',
      subtitle: 'Ancient wisdom for modern citizenship'
    }
  };

  const sectionsContent = {
    hi: [
      {
        category: "स्वच्छता और प्रकृति (Purity & Nature)",
        items: [
          { translation: "पृथ्वी मेरी माता है और मैं उसका पुत्र हूँ।", tag: "Environment" },
          { translation: "जल में या रास्तों पर अपवित्र वस्तुएं, थूक या गंदगी नहीं फेंकनी चाहिए।", tag: "Hygiene" },
          { translation: "शरीर की पवित्रता (स्वच्छता) और सरलता... शारीरिक तप है।", tag: "Cleanliness" }
        ]
      },
      {
        category: "प्रकृति रक्षा और प्रदूषण (Nature & Anti-Pollution)",
        items: [
          { translation: "जल को हानि (प्रदूषित) मत पहुँचाओ, वनस्पतियों को नष्ट मत करो।", tag: "No Pollution" },
          { translation: "दूषित वायु, जल और स्थान (Desha) समाज और राष्ट्रों का विनाश करते हैं।", tag: "Public Health" },
          { translation: "एक वृक्ष दस पुत्रों के समान है (अतः वृक्षारोपण श्रेष्ठ धर्म है)।", tag: "Ecology" },
          { translation: "यह सब (सृष्टि) ईश्वर से व्याप्त है; अतः प्रकृति के धन का लोभ मत करो।", tag: "Sustainability" }
        ]
      },
      {
        category: "अहिंसा और एकता (Non-violence & Unity)",
        items: [
          { translation: "अहिंसा ही परम धर्म है।", tag: "Non-violence" },
          { translation: "साथ चलें, साथ बोलें, और हमारे मन एक हों।", tag: "Cooperation" }
        ]
      },
      {
        category: "कर्तव्य और अनुशासन (Duty & Order)",
        items: [
          { translation: "आसक्ति रहित होकर निरंतर कर्तव्य (कार्य) का पालन करें।", tag: "Duty" },
          { translation: "जहाँ ज्ञान और अनुशासन (व्यवस्था) साथ चलते हैं, वह समाज समृद्ध होता है।", tag: "Order" }
        ]
      },
      {
        category: "सामाजिक मर्यादा (Social Ethics)",
        items: [
          { translation: "माता, पिता और गुरु को देवता समान मानें।", tag: "Respect" },
          { translation: "धैर्य, क्षमा, दम, अस्तेय, शौच आदि धर्म के दस लक्षणों का पालन करें।", tag: "Ethics" }
        ]
      }
    ],
    en: [
      {
        category: "Purity & Nature (Saucha & Prakriti)",
        items: [
          { translation: "Earth is my Mother, and I am Her son.", tag: "Environment" },
          { translation: "One should not throw impure things, spit, or filth into water or on the path.", tag: "Hygiene" },
          { translation: "Purity of body (Cleanliness) and simplicity... is called bodily austerity.", tag: "Cleanliness" }
        ]
      },
      {
        category: "Nature & Anti-Pollution (Prakriti Dharma)",
        items: [
          { translation: "Do not harm (pollute) the waters, do not harm the plants.", tag: "No Pollution" },
          { translation: "Polluted air, water, and place cause the destruction of nations and health.", tag: "Public Health" },
          { translation: "One tree is equal to ten sons (Tree planting is superior Dharma).", tag: "Ecology" },
          { translation: "The Divine inhabits everything; therefore, do not greedily covet nature's wealth.", tag: "Sustainability" }
        ]
      },
      {
        category: "Non-violence & Unity (Ahimsa)",
        items: [
          { translation: "Non-violence is the supreme duty.", tag: "Non-violence" },
          { translation: "Walk together, speak together, and let your minds be one.", tag: "Cooperation" }
        ]
      },
      {
        category: "Duty & Order (Karma & Rta)",
        items: [
          { translation: "Therefore, without attachment, constantly perform your duty.", tag: "Duty" },
          { translation: "Where knowledge and discipline (order) move together, that society prospers.", tag: "Order" }
        ]
      },
      {
        category: "Social Ethics (Maryada)",
        items: [
          { translation: "Treat your Mother, Father, and Teacher as Gods.", tag: "Respect" },
          { translation: "Patience, forgiveness, self-control, non-stealing, and purity are the ten signs of Dharma.", tag: "Ethics" }
        ]
      }
    ]
  };

  const referencesData = {
    hi: {
      title: "प्रामाणिक स्रोत और संदर्भ (Authentic References)",
      desc: "इस पृष्ठ पर उद्धृत श्लोकों और शिक्षाओं को निम्नलिखित प्रामाणिक डिजिटल और प्रिंट स्रोतों से सत्यापित किया जा सकता है।",
      digital: "डिजिटल अभिलेखागार (Digital Archives)",
      books: "महत्वपूर्ण ग्रंथ (Key Books)",
      sources: [
        {
          name: "Vedic Heritage Portal (Govt. of India)",
          desc: "इंदिरा गांधी राष्ट्रीय कला केंद्र द्वारा वेदों और उपनिषदों के मूल पाठ।",
          url: "https://vedicheritage.gov.in/",
          type: "digital"
        },
        {
          name: "Gita Supersite (IIT Kanpur)",
          desc: "श्रीमद्भगवद्गीता और रामायण के श्लोकों और विभिन्न भाष्यों का अकादमिक संग्रह।",
          url: "https://www.gitasupersite.iitk.ac.in/",
          type: "digital"
        },
        {
          name: "Wisdom Library",
          desc: "पुराण, धर्मशास्त्र और अर्थशास्त्र का विशाल ऑनलाइन संग्रह।",
          url: "https://www.wisdomlib.org/",
          type: "digital"
        },
        {
          name: "श्रीमद्भगवद्गीता (साधक संजीवनी)",
          desc: "गीता प्रेस, गोरखपुर — कर्मयोग और धर्म की विस्तृत प्रामाणिक व्याख्या।",
          type: "book"
        },
        {
          name: "The Principal Upanishads",
          desc: "डॉ. सर्वपल्ली राधाकृष्णन — उपनिषदों का दार्शनिक और अकादमिक विश्लेषण।",
          type: "book"
        },
        {
          name: "चरक संहिता (Charaka Samhita)",
          desc: "चौखम्बा ओरियंटालिया — आयुर्वेद, स्वास्थ्य और जीवनशैली विज्ञान।",
          type: "book"
        }
      ]
    },
    en: {
      title: "Authentic References & Sources",
      desc: "The verses and teachings cited on this page can be verified from the following authentic digital and print sources.",
      digital: "Digital Archives",
      books: "Key Books",
      sources: [
        {
          name: "Vedic Heritage Portal (Govt. of India)",
          desc: "Original texts and audio of Vedas and Upanishads by IGNCA.",
          url: "https://vedicheritage.gov.in/",
          type: "digital"
        },
        {
          name: "Gita Supersite (IIT Kanpur)",
          desc: "Academic repository of verses and commentaries on Bhagavad Gita & Ramayana.",
          url: "https://www.gitasupersite.iitk.ac.in/",
          type: "digital"
        },
        {
          name: "Wisdom Library",
          desc: "Vast online collection of Puranas, Dharmashastras, and Arthashastra.",
          url: "https://www.wisdomlib.org/",
          type: "digital"
        },
        {
          name: "Srimad Bhagavad Gita (Sadhak Sanjeevani)",
          desc: "Gita Press, Gorakhpur — Authentic explanation of Karma Yoga.",
          type: "book"
        },
        {
          name: "The Principal Upanishads",
          desc: "Dr. S. Radhakrishnan — Philosophical and academic analysis of Upanishads.",
          type: "book"
        },
        {
          name: "Charaka Samhita",
          desc: "Chaukhamba Orientalia — Ayurveda, Health, and Lifestyle Science.",
          type: "book"
        }
      ]
    }
  };

  const t = language === 'hi' ? content.hi : content.en;
  const currentSections = language === 'hi' ? sectionsContent.hi : sectionsContent.en;
  const refs = language === 'hi' ? referencesData.hi : referencesData.en;

  // Base data remains constant (Sources and Sanskrit)
  const baseSections = [
    {
      color: "from-green-500 to-emerald-700",
      items: [
        { source: "अथर्ववेद १२.१.१२ (Atharva Veda)", sanskrit: "माता भूमिः पुत्रोऽहं पृथिव्याः।" },
        { source: "मनुस्मृति ४.७९ (Manusmriti)", sanskrit: "नाप्सु मूत्रं पुरीषं वा ष्ठीवनं वा समुत्सृजेत्।" },
        { source: "श्रीमद्भगवद्गीता १७.१४ (Gita)", sanskrit: "शौचमार्जवं... शारीरं तप उच्यते।" }
      ]
    },
    {
      color: "from-teal-500 to-cyan-700",
      items: [
        { source: "यजुर्वेद ६.२२ / १३.३७ (Yajurveda)", sanskrit: "मा आपो हिंसीः... मा ओषधीः हिंसीः।" },
        { source: "चरक संहिता (Charaka Samhita)", sanskrit: "विकृत-वायु-जल-देश-कालाः जनपदोद्ध्वंसकराः।" },
        { source: "मत्स्य पुराण १५४.५१२ (Matsya Purana)", sanskrit: "दशकूपसमा वापी... दशपुत्रसमो द्रुमः।" },
        { source: "ईशावास्य उपनिषद १ (Ishopanishad)", sanskrit: "ईशावास्यमिदं सर्वं... मा गृधः कस्यस्विद्धनम्।" }
      ]
    },
    {
      color: "from-red-500 to-rose-700",
      items: [
        { source: "महाभारत (Mahabharata)", sanskrit: "अहिंसा परमो धर्मः।" },
        { source: "ऋग्वेद १०.१९१.२ (Rig Veda)", sanskrit: "संगच्छध्वं संवदध्वं सं वो मनांसि जानताम्।" }
      ]
    },
    {
      color: "from-blue-500 to-indigo-700",
      items: [
        { source: "श्रीमद्भगवद्गीता ३.१९ (Gita)", sanskrit: "तस्मादसक्तः सततं कार्यं कर्म समाचर।" },
        { source: "यजुर्वेद ५.४३ (Yajurveda)", sanskrit: "यत्र ब्रह्म च क्षत्रं च सम्यञ्चौ चरतः सह।" }
      ]
    },
    {
      color: "from-purple-500 to-violet-700",
      items: [
        { source: "तैत्तिरीय उपनिषद १.११ (Taittiriya)", sanskrit: "मातृ देवो भव, पितृ देवो भव।" },
        { source: "मनुस्मृति ६.९२ (Manusmriti)", sanskrit: "दश-लक्षणकं धर्मं सेवेत प्रयत्तः।" }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-8">
      <div className="text-center mb-12">
         <h2 className="text-4xl font-bold text-[#D98F2B] mb-4 font-sanskrit">{t.title}</h2>
         <p className="text-gray-600 text-lg">{t.subtitle}</p>
      </div>
      
      <div className="space-y-16">
        {baseSections.map((section, idx) => (
          <div key={idx}>
            <div className={`flex items-center gap-4 mb-6`}>
               <div className={`h-8 w-1 bg-gradient-to-b ${section.color} rounded-full`}></div>
               <h3 className="text-2xl font-bold text-gray-800">{currentSections[idx].category}</h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.items.map((item, i) => (
                <div key={i} className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
                  {/* Decorative quote icon */}
                  <Quote className="absolute top-4 right-4 text-gray-100 transform rotate-180 group-hover:scale-110 transition-transform" size={48} />
                  
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-white bg-[#2D2168] px-3 py-1 rounded-full opacity-80">
                        {item.source}
                      </span>
                      {currentSections[idx].items[i].tag && (
                         <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">{currentSections[idx].items[i].tag}</span>
                      )}
                    </div>
                    
                    <p className="font-sanskrit text-2xl md:text-3xl text-[#2D2168] mb-6 leading-relaxed">
                      {item.sanskrit}
                    </p>
                    
                    <div className="relative pl-4 border-l-2 border-orange-300">
                       <p className="text-gray-600 italic leading-relaxed">
                        "{currentSections[idx].items[i].translation}"
                       </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-100 flex items-center gap-2 text-sm text-[#D98F2B] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                     <Sparkles size={14} />
                     <span>Ancient Wisdom for Modern Life</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* NEW REFERENCES SECTION */}
      <section className="mt-20 pt-10 border-t-2 border-orange-100">
        <div className="bg-[#FFF8E7] rounded-3xl p-8 md:p-12 border border-orange-200 shadow-inner">
           <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-[#2D2168] mb-2 flex items-center justify-center gap-2">
                 <Library className="text-[#D98F2B]" /> {refs.title}
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">{refs.desc}</p>
           </div>
           
           <div className="grid md:grid-cols-2 gap-8">
              {/* Digital */}
              <div>
                 <h4 className="font-bold text-lg text-orange-800 mb-4 border-b border-orange-200 pb-2">{refs.digital}</h4>
                 <div className="space-y-4">
                    {refs.sources.filter(s => s.type === 'digital').map((src, i) => (
                       <a 
                          key={i} 
                          href={src.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group border border-orange-100"
                       >
                          <div className="bg-orange-50 p-2 rounded-lg text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                             <ExternalLink size={20} />
                          </div>
                          <div>
                             <h5 className="font-bold text-[#2D2168] group-hover:text-orange-700 transition-colors flex items-center gap-1">
                                {src.name}
                             </h5>
                             <p className="text-sm text-gray-600 mt-1">{src.desc}</p>
                          </div>
                       </a>
                    ))}
                 </div>
              </div>
              
              {/* Books */}
              <div>
                 <h4 className="font-bold text-lg text-blue-800 mb-4 border-b border-blue-200 pb-2">{refs.books}</h4>
                 <div className="space-y-4">
                    {refs.sources.filter(s => s.type === 'book').map((src, i) => (
                       <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-blue-50">
                          <div className="bg-blue-50 p-2 rounded-lg text-blue-600">
                             <Book size={20} />
                          </div>
                          <div>
                             <h5 className="font-bold text-[#2D2168]">{src.name}</h5>
                             <p className="text-sm text-gray-600 mt-1">{src.desc}</p>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
};

export default Scriptures;