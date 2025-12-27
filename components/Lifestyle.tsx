import React from 'react';
import { 
  Heart, Droplet, Scale, Users, Globe, Sun, Moon, 
  BookOpen, Activity, Leaf, ExternalLink, Brain, 
  Sparkles, Shield, Zap, Wind, Eye, Calendar, Coffee,
  CheckCircle, ArrowDown
} from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Lifestyle: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    hi: {
      badge: 'Vedic Jeewan Shaili',
      title: 'वैदिक जीवनशैली: द ओरिजिनल सिविक साइंस',
      desc: 'वैदिक जीवनशैली मूल रूप से "सिंक्रोनाइजेशन" (Synchronization) का विज्ञान है। यह इस सिद्धांत पर कार्य करती है कि मानव शरीर (पिंड) ब्रह्मांड (ब्रह्मांड) का एक सूक्ष्म रूप है। जब ये दोनों तालमेल से बाहर होते हैं, तो हमें बीमारी (जैविक अराजकता) और सामाजिक विकार (नागरिक अराजकता) मिलती है।',
      
      rtaTitle: '१. आधार: ऋत (The Cosmic Order)',
      rtaDesc: 'धर्म के नियम बनने से पहले, "ऋत" (ऋत) था। ऋग्वेद में, ऋत वह प्राकृतिक व्यवस्था है जो सूर्य की गति से लेकर आपके हृदय की धड़कन तक सब कुछ नियंत्रित करती है।',
      rtaConcept: 'संकल्पना: यदि आप ऋत का उल्लंघन करते हैं (जैसे मौसम के विपरीत खाना या प्रकृति को नुकसान पहुँचाना), तो आप "अनृत" (अराजकता/असत्य) पैदा करते हैं।',
      rtaCivic: 'नागरिक प्रभाव: वैदिक युग में नागरिक बोध "कानूनों का पालन" करने के बारे में नहीं था; यह ब्रह्मांडीय लय को न तोड़ने के बारे में था।',
      rtaRef: 'संदर्भ: ऋग्वेद (1.75.5) ऋत को उस सत्य के रूप में वर्णित करता है जो ब्रह्मांड को एक साथ रखता है।',

      dinaTitle: '२. जैविक संरेखण: दिनचर्या (The Daily Clock)',
      dinaDesc: 'नागरिक बोध आत्म-अनुशासन से शुरू होता है। यदि कोई व्यक्ति शारीरिक रूप से विषाक्त या मानसिक रूप से अस्थिर है, तो वह समाज पर बोझ बन जाता है। चरक संहिता और अष्टांग हृदयम जैविक घड़ी को प्रकृति की घड़ी के साथ सिंक करने के लिए "दिनचर्या" का सुझाव देते हैं।',
      schedule: [
        {
           time: "ब्रह्म मुहूर्त (4:30 AM)",
           title: "The 4:30 AM Rule",
           desc: "सूर्योदय से 96 मिनट पहले जागना। इस समय वातावरण में ओजोन (Ozone) का स्तर सबसे अधिक होता है। यह पीनियल ग्रंथि को स्थिर करता है और मानसिक स्वास्थ्य में सुधार करता है।",
           logic: "तर्क: एक शांत दिमाग स्वाभाविक रूप से तनावग्रस्त दिमाग की तुलना में बेहतर नागरिक व्यवहार प्रदर्शित करता है।",
           science: 'अष्टांग हृदयम, सूत्रस्थान (2.1)'
        },
        {
           time: "शौच (Hygiene as a Duty)",
           title: "बाध्यकारी स्वच्छता",
           desc: "स्वच्छता को बाह्य (External) और आभ्यंतर (Internal) में विभाजित किया गया है। इसमें गंडूष (ऑयल पुलिंग) और नस्य (नाक की सफाई) शामिल है।",
           logic: "नागरिक प्रभाव: व्यक्तिगत स्वच्छता बनाए रखना छूत की बीमारी (जनपदोद्ध्वंस) को रोकने के लिए एक सामाजिक कर्तव्य है।",
           science: 'Bio-Ethics of Prevention'
        }
      ],

      rituTitle: '३. पारिस्थितिक संरेखण: ऋतुचर्या (Seasonal Bio-Ethics)',
      rituDesc: 'आधुनिक विज्ञान "कार्बन फुटप्रिंट" की बात करता है; वैदिक विज्ञान "ऋतुचर्या" की बात करता था। चरक संहिता (अध्याय 6) विवरण देती है कि हर दो महीने में हमारा आहार कैसे बदलना चाहिए।',
      rituHeaders: ['ऋतु (Ritu)', 'नियम (Bio-Ethics)', 'वैज्ञानिक तर्क'],
      rituRows: [
        ['वर्षा (Monsoon)', 'पत्तेदार सब्जियां और भारी डेयरी कम करें।', 'पाचन कमजोर होता है; नमी साग में बैक्टीरिया पैदा करती है।'],
        ['ग्रीष्म (Summer)', 'मीठा, ठंडा और तरल आहार अपनाएं।', 'शरीर की गर्मी अधिक होती है; हाइड्रेशन चिड़चिड़ापन रोकता है।'],
        ['हेमंत (Winter)', 'भारी, तैलीय और पोषक भोजन लें।', 'जठराग्नि (Agni) सबसे मजबूत होती है; शरीर को गर्मी के लिए ईंधन चाहिए।']
      ],
      rituTakeaway: 'नागरिक सीख: मौसम के अनुसार खाकर, आप स्वाभाविक रूप से स्थानीय कृषि का समर्थन करते हैं और पारिस्थितिकी तंत्र पर तनाव कम करते हैं।',

      yajnaTitle: '४. समाजशास्त्रीय संरेखण: पंच महायज्ञ (The 5 Great Duties)',
      yajnaDesc: 'यह "वैदिक नागरिकता" का अंतिम ढांचा है। तैत्तिरीय आरण्यक (2.10) कहता है कि प्रत्येक मनुष्य ऋण के साथ पैदा होता है, जिसे इन ५ यज्ञों के माध्यम से दैनिक चुकाया जाना चाहिए।',
      yajnas: [
        { title: "देव यज्ञ", sub: "प्रकृति के प्रति ऋण", desc: "पर्यावरण की रक्षा करना। नागरिक बोध: हवा, पानी और प्रकाश को प्रदूषित न करना।" },
        { title: "ऋषि यज्ञ", sub: "ज्ञान के प्रति ऋण", desc: "स्वाध्याय और ज्ञान साझा करना। नागरिक बोध: अज्ञानता से लड़ना और शिक्षा फैलाना।" },
        { title: "पितृ यज्ञ", sub: "पूर्वजों के प्रति ऋण", desc: "वंश का सम्मान और अच्छे बच्चों का पालन-पोषण। नागरिक बोध: अपराध कम करने के लिए मजबूत परिवार।" },
        { title: "नृ यज्ञ", sub: "मानवता के प्रति ऋण", desc: "अतिथि देवो भव और दान। नागरिक बोध: वंचितों की देखभाल और सामुदायिक कल्याण।" },
        { title: "भूत यज्ञ", sub: "अन्य जीवों के प्रति ऋण", desc: "पशु-पक्षियों को भोजन देना (जैसे गौ-ग्रास)। नागरिक बोध: पशु कल्याण और जैव विविधता।" }
      ],

      constTitle: '५. वैदिक समाज का "संविधान"',
      constDesc: 'जैसे आज हमारे पास कानूनी संविधान है, वैसे ही वैदिक समाज में "सामान्य धर्म" था। मनु स्मृति (10.63) इन्हें सभ्य मानव के ५ स्तंभ मानती है:',
      constItems: [
        { t: "अहिंसा (Ahimsa)", d: "शारीरिक और मानसिक अहिंसा।" },
        { t: "सत्य (Satya)", d: "वाणी में सत्यनिष्ठा।" },
        { t: "अस्तेय (Asteya)", d: "सार्वजनिक और निजी संपत्ति का सम्मान (चोरी न करना)।" },
        { t: "शौच (Saucha)", d: "पवित्रता, स्वच्छता और स्वच्छता।" },
        { t: "इंद्रियनिग्रह (Sense Control)", d: "व्यसन और आवेगी अपराधों को रोकना।" }
      ],

      acharaTitle: 'सूक्ष्म-आदतें (The Science of Acharas)',
      acharaDesc: 'दैनिक रीति-रिवाज (आचार) अंधविश्वास नहीं, बल्कि "Micro-Habits" हैं जो मानव जीव विज्ञान को पर्यावरण के साथ संरेखित करते हैं।',
      acharaItems: [
        {
          title: "नमस्ते (Anjali Mudra)",
          practice: "हृदय केंद्र पर दोनों हथेलियों को जोड़ना।",
          belief: '"मुझमें स्थित दिव्यता आपमें स्थित दिव्यता को नमन करती है।" यह अहंकार कम करने का कार्य है।',
          science: "एक्यूप्रेशर: उंगलियों के पोरों को दबाने से आंख, कान और मन के केंद्र सक्रिय होते हैं। स्वच्छता: हाथ मिलाने के विपरीत, यह कीटाणुओं के हस्तांतरण को रोकता है।"
        },
        {
          title: "भोजन पद्धति (Sukhasana)",
          practice: "जमीन पर पालथी मारकर बैठना, मेज पर नहीं।",
          belief: "भोजन ब्रह्म है, इसे विनम्रतापूर्वक ग्रहण करना चाहिए।",
          science: "पाचन: सुखासन पेट की मांसपेशियों को सक्रिय करता है। रक्त प्रवाह पाचन तंत्र (जठराग्नि) की ओर निर्देशित होता है, जिससे पोषक तत्वों का बेहतर अवशोषण होता है।"
        },
        {
          title: "सोने की दिशा (Magnetism)",
          practice: "उत्तर की ओर सिर करके कभी न सोएं।",
          belief: "उत्तर मृत्यु की दिशा है; उस तरफ सोने से नकारात्मक ऊर्जा आती है।",
          science: "चुंबकत्व: पृथ्वी के चुंबकीय क्षेत्र और शरीर के ध्रुवों के बीच टकराव से मस्तिष्क और रक्त परिसंचरण पर तनाव पड़ता है, जिससे नींद खराब हो सकती है।"
        },
        {
          title: "मंदिर की घंटी (Sound Resonance)",
          practice: "गर्भगृह में प्रवेश से पहले घंटी बजाना।",
          belief: "देवताओं को जाग्रत करना और प्रवेश की अनुमति मांगना।",
          science: "मस्तिष्क तालमेल: घंटी की विशिष्ट मिश्र धातु ऐसी ध्वनि उत्पन्न करती है जो बाएं और दाएं मस्तिष्क को एकजुट करती है और मन को अराजक विचारों से मुक्त करती है।"
        },
        {
          title: "चरण स्पर्श (Charan Sparsh)",
          practice: "बड़ों या गुरुओं के पैर छूने के लिए झुकना।",
          belief: "आशीर्वाद प्राप्त करना और अहंकार का त्याग करना।",
          science: "ऊर्जा सर्किट: पैर 'डिस्चार्ज' पॉइंट हैं और हाथ 'रिसीवर'। छूने से एक ऊर्जा परिपथ पूरा होता है, जिससे सकारात्मक ऊर्जा का प्रवाह प्राप्तकर्ता की ओर होता है।"
        },
        {
          title: "तिलक/बिंदी (Chandan)",
          practice: "दोनों भौंहों के बीच माथे पर तिलक लगाना।",
          belief: "यह तीसरी आंख की रक्षा करता है और ऊर्जा हानि को रोकता है।",
          science: "CPU को ठंडा करना: यह स्थान आज्ञा चक्र और पीनियल ग्रंथि का है। चंदन इस क्षेत्र को ठंडा करता है, जिससे एकाग्रता बढ़ती है और तनाव कम होता है।"
        },
        {
          title: "वृक्ष पूजन (Peepal/Tulsi)",
          practice: "तुलसी और पीपल को जल देना और उनकी परिक्रमा करना।",
          belief: "ये विष्णु और लक्ष्मी के निवास स्थान और पवित्र हैं।",
          science: "ऑक्सीजन फैक्ट्री: पीपल रात में भी ऑक्सीजन छोड़ता है। तुलसी हवा को शुद्ध करती है और प्रतिरक्षा (Immunity) बढ़ाती है। यह हर घर में एयर प्यूरीफायर सुनिश्चित करने की रणनीति थी।"
        },
        {
          title: "अर्घ्य (Sun Worship)",
          practice: "गिरते जल की धारा के माध्यम से सूर्य को देखते हुए जल अर्पित करना।",
          belief: "सूर्य देव को श्रद्धांजलि अर्पित करना।",
          science: "कलर थेरेपी: जल की धार से सूर्य की किरणें ७ रंगों में विभाजित होती हैं, जो दृष्टि में सुधार करती हैं और विटामिन-D के स्तर को नियंत्रित करती हैं।"
        }
      ],

      conclusion: 'संस्कृत में स्वास्थ्य का अर्थ है "स्वास्थ्य" (Swasthya)। स्व = स्वयं, स्थ = स्थित। "स्वस्थ" होने का अर्थ है "स्वयं में स्थित होना"। जो व्यक्ति स्वयं में स्थित (Swastha) है, वह स्वाभाविक रूप से प्रकृति (Ritu) और समाज (Dharma) के नियमों का पालन करता है। अतः, नागरिक बोध आध्यात्मिक स्वास्थ्य का एक "साइड-इफेक्ट" है।',
      libTitle: "Resource & Evidence Library",
      libRead: "📚 Recommended Reading",
      libScience: "🔬 Scientific Data Points"
    },
    en: {
      badge: 'Vedic Lifestyle',
      title: 'Vedic Lifestyle: The Original Civic Science',
      desc: 'Vedic lifestyle is fundamentally a science of **synchronization**. It operates on the principle that the human body (*Pinda*) is a microcosm of the universe (*Brahmanda*). When these two are out of sync, we get disease (biological chaos) and social disorder (civic chaos).',
      
      rtaTitle: '1. The Foundation: Rta (The Cosmic Order)',
      rtaDesc: 'Before Dharma became a set of rules, it was **Rta** (ऋत). In the Rig Veda, Rta is the natural order that regulates everything—from the movement of the sun to the beating of your heart.',
      rtaConcept: 'The Concept: If you violate Rta (e.g., eating against the season or harming nature), you create Anrita (chaos/untruth).',
      rtaCivic: 'Civic Implication: Civic sense in the Vedic era was not about "following laws"; it was about not breaking the cosmic rhythm.',
      rtaRef: 'Reference: Rig Veda (1.75.5) describes Rta as the truth that holds the universe together.',
      
      dinaTitle: '2. Biological Alignment: Dinacharya (The Daily Clock)',
      dinaDesc: 'Civic sense begins with self-discipline. If an individual is physically toxic or mentally unstable, they become a burden on society. The Charaka Samhita and Ashtanga Hridayam prescribe a daily routine (*Dinacharya*) to sync biological clocks with nature.',
      schedule: [
        {
           time: "Brahma Muhurta (4:30 AM)",
           title: "The 4:30 AM Rule",
           desc: "Waking up 96 minutes before sunrise. At this time, the atmosphere has the highest nascent oxygen (ozone) levels. Synchronizes the Pineal gland, stabilizing mental health.",
           logic: "Logic: A calm mind naturally exhibits better civic behavior than a stressed one.",
           science: 'Ashtanga Hridayam, Sutrasthana (2.1)'
        },
        {
           time: "Shaucha (Hygiene as a Duty)",
           title: "Biological Purity",
           desc: "Cleanliness is divided into Bahya (External) and Abhyantara (Internal). Includes Gandusha (oil pulling) and Nasya (nasal cleaning).",
           logic: "Civic Reflex: Maintaining personal hygiene is a social duty to prevent the spread of contagion (Janapadodhvamsa).",
           science: 'Bio-Ethics of Prevention'
        }
      ],

      rituTitle: '3. Ecological Alignment: Ritucharya (Seasonal Bio-Ethics)',
      rituDesc: 'Modern science talks about "Carbon Footprints"; Vedic science spoke of Ritucharya. The Charaka Samhita (Chapter 6) details how our diet must change every two months.',
      rituHeaders: ['Season (Ritu)', 'Bio-Ethics (The Rule)', 'Scientific Rationale'],
      rituRows: [
        ['Monsoon (Varsha)', 'Restrict leafy greens & heavy dairy.', 'Digestion is weak; humidity breeds bacteria in greens.'],
        ['Summer (Grishma)', 'Adopt sweet, cold, liquid diet.', 'Body heat is high; hydration prevents aggression.'],
        ['Winter (Hemanta)', 'Adopt heavy, oily, nutritive foods.', 'Digestive fire (Agni) is strongest; body needs fuel.']
      ],
      rituTakeaway: 'Civic Takeaway: By eating seasonally, you naturally support local agriculture and reduce the strain on the ecosystem.',

      yajnaTitle: '4. Sociological Alignment: Pancha Maha Yajna (The 5 Great Duties)',
      yajnaDesc: 'This is the ultimate framework of Vedic Citizenship. The Taittiriya Aranyaka (2.10) states that every human is born with a "debt" to the universe, which must be paid through five daily sacrifices.',
      yajnas: [
        { title: "Deva Yajna", sub: "Debt to Nature", desc: "Protecting the environment (source of air, water, light). Civic Sense: Not polluting the elements." },
        { title: "Rishi Yajna", sub: "Debt to Knowledge", desc: "Studying and sharing knowledge (Svadhyaya). Civic Sense: Fighting ignorance and spreading education." },
        { title: "Pitri Yajna", sub: "Debt to Ancestors", desc: "Honoring lineage and raising good children. Civic Sense: Reducing crime through strong family units." },
        { title: "Nara Yajna", sub: "Debt to Humanity", desc: "Atithi Devo Bhava and charity. Civic Sense: Caring for the underprivileged and community welfare." },
        { title: "Bhuta Yajna", sub: "Debt to Other Beings", desc: "Feeding animals/birds (e.g., Gau-gras). Civic Sense: Animal welfare and biodiversity conservation." }
      ],

      constTitle: '5. The "Constitution" of Vedic Society',
      constDesc: 'Just as we have a legal constitution today, Vedic society had Universal Duties (Samanya Dharma). Manu Smriti (10.63) lists these five as non-negotiable pillars:',
      constItems: [
        { t: "Ahimsa", d: "Non-violence (Physical and mental)." },
        { t: "Satya", d: "Truthfulness (Integrity in speech)." },
        { t: "Asteya", d: "Non-stealing (Respecting public and private property)." },
        { t: "Shaucha", d: "Purity (Hygiene and sanitation)." },
        { t: "Indriyanigraha", d: "Control of senses (Preventing addiction and impulsive crimes)." }
      ],

      acharaTitle: 'Micro-Habits (The Science of Acharas)',
      acharaDesc: 'Daily customs (Acharas) were designed as "Micro-Habits" to ensure bio-ethics that align human biology with the environment.',
      acharaItems: [
        {
          title: "Namaste (Anjali Mudra)",
          practice: "Joining both palms together at the heart center.",
          belief: '"The Divine in me bows to the Divine in you." It is an act of reducing ego (Ahamkara).',
          science: "Acupressure: Tips of fingers trigger points for eyes/mind. Hygiene: No physical contact prevents germ transfer (Janapadodhvamsa)."
        },
        {
          title: "Dining (Sukhasana)",
          practice: "Eating while sitting cross-legged on the floor, not standing.",
          belief: "Food is Brahman (Divine); one must sit humbly to receive it.",
          science: "Digestion: Sukhasana naturally engages abdominal muscles. Circulation: Directs blood flow toward the digestive tract (Jatharagni) ensuring better absorption."
        },
        {
          title: "Sleeping Direction",
          practice: "Never sleep with your head pointing towards the North.",
          belief: "North is the direction of the afterlife; sleeping that way invites negative energy.",
          science: "Magnetism: Earth is a magnet. Body is a magnet (Head is North). Repulsion causes magnetic strain on brain and blood circulation."
        },
        {
          title: "Temple Bell",
          practice: "Ringing the bell before entering the inner sanctum (Garbhagriha).",
          belief: "To 'wake up' the Gods and request permission to enter.",
          science: "Brain Synchronization: Specific alloys produce sound that unifies Left and Right Brain. Focus: Sharp echo clears chaotic thoughts."
        },
        {
          title: "Touching Feet (Charan Sparsh)",
          practice: "Bowing down to touch the feet of elders or Gurus.",
          belief: "To seek blessings and show respect.",
          science: "Energy Circuit: Feet are 'discharge' points; hands are 'receivers'. Touching completes a circuit, transferring positive energy (Sadhana)."
        },
        {
          title: "The Tilak/Bindi",
          practice: "Applying a mark on the forehead between the eyebrows.",
          belief: "Protects the 'Third Eye' and prevents energy loss.",
          science: "Cooling the CPU: Location of Ajna Chakra and pineal gland. Sandalwood cools this region, preventing stress-induced heating."
        },
        {
          title: "Worshiping Plants (Peepal/Tulsi)",
          practice: "Watering and circling Peepal and Tulsi plants daily.",
          belief: "These plants are sacred abodes of Vishnu and Lakshmi.",
          science: "Oxygen Factories: Peepal releases oxygen even at night. Tulsi purifies air (eugenol). This ensures every household has an air purifier."
        },
        {
          title: "Arghya (Sun Worship)",
          practice: "Offering water to the rising sun through the falling stream.",
          belief: "Paying homage to the Sun God (Surya Dev).",
          science: "Color Therapy: Sun rays refract through water into 7 spectrum colors, beneficial for vision and Vitamin D regulation."
        }
      ],

      conclusion: 'The Sanskrit word for health is Swasthya. Sva = Self, Stha = Situated. To be "Healthy" means to be "Situated in the Self." A person situated in themselves (Swastha) naturally follows the laws of nature (Ritu) and society (Dharma). Civic Sense is a side-effect of spiritual health.',
      libTitle: "Resource & Evidence Library",
      libRead: "📚 Recommended Reading"
    }
  };

  const t = language === 'hi' ? content.hi : content.en;
  
  return (
    <div className="max-w-6xl mx-auto py-8 space-y-20">
       
       {/* 1. HERO SECTION */}
       <div className="text-center mb-16 space-y-6">
        <span className="bg-orange-100 text-orange-800 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 inline-block">
            {t.badge}
        </span>
        <h2 className="text-4xl md:text-6xl font-bold text-[#2D2168] font-sanskrit">
            {t.title}
        </h2>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t.desc}
        </p>
       </div>

       {/* 2. RTA & COSMIC ORDER */}
       <section className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border-l-8 border-[#D98F2B]">
          <h3 className="text-3xl font-bold text-[#2D2168] mb-6 flex items-center gap-3 font-sanskrit">
            <Globe className="text-[#D98F2B]" /> {t.rtaTitle}
          </h3>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
             <p>{t.rtaDesc}</p>
             <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100 italic space-y-2">
                <p><strong>{t.rtaConcept}</strong></p>
                <p>{t.rtaCivic}</p>
             </div>
             <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">{t.rtaRef}</p>
          </div>
       </section>

       {/* 3. DINACHARYA (BIOLOGY) */}
       <section className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
           <div className="bg-[#2D2168] text-white p-8 md:p-12 text-center">
               <h3 className="text-3xl font-bold font-sanskrit mb-4">{t.dinaTitle}</h3>
               <p className="text-blue-200 max-w-2xl mx-auto">
                   {t.dinaDesc}
               </p>
           </div>
           
           <div className="p-8 md:p-12">
               <div className="grid md:grid-cols-2 gap-8">
                   {t.schedule.map((item, index) => (
                       <div key={index} className="flex gap-6 p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-blue-100">
                           <div className="bg-white p-4 rounded-full shadow-sm h-fit">
                              {index === 0 ? <Sun className="text-orange-500" /> : <Activity className="text-blue-500" />}
                           </div>
                           <div>
                              <h4 className="text-xl font-bold text-gray-900">{item.time}</h4>
                              <p className="font-bold text-blue-800 text-sm mb-2 uppercase">{item.title}</p>
                              <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
                              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider w-fit">
                                 {item.logic}
                              </div>
                              <p className="text-[10px] mt-2 text-gray-400 font-serif italic">{item.science}</p>
                           </div>
                       </div>
                   ))}
               </div>
           </div>
       </section>

       {/* 4. RITUCHARYA TABLE */}
       <section className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-[#2D2168] mb-6 flex items-center gap-2">
             <Calendar className="text-green-600" /> {t.rituTitle}
          </h3>
          <p className="text-gray-600 mb-8">{t.rituDesc}</p>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-6">
             <table className="w-full text-left">
                <thead className="bg-gray-50 text-gray-500 uppercase text-xs tracking-widest border-b border-gray-200">
                   <tr>
                      {t.rituHeaders.map((h, i) => <th key={i} className="p-4 font-bold">{h}</th>)}
                   </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                   {t.rituRows.map((row, i) => (
                      <tr key={i} className="hover:bg-green-50 transition-colors">
                         <td className="p-4 font-bold text-[#2D2168]">{row[0]}</td>
                         <td className="p-4 text-gray-700">{row[1]}</td>
                         <td className="p-4 text-sm text-gray-600 italic">{row[2]}</td>
                      </tr>
                   ))}
                </tbody>
             </table>
          </div>
          <p className="bg-green-50 text-green-800 p-4 rounded-xl border border-green-100 font-bold text-sm text-center">
             {t.rituTakeaway}
          </p>
       </section>

       {/* 5. PANCHA MAHA YAJNA */}
       <section>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#2D2168] mb-4 font-sanskrit">{t.yajnaTitle}</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">{t.yajnaDesc}</p>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
             {t.yajnas.map((y, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border-b-4 border-orange-200 shadow-md hover:-translate-y-1 transition-transform text-center">
                   <div className="bg-orange-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-[#D98F2B]">
                      {i === 0 ? <Leaf /> : i === 1 ? <BookOpen /> : i === 2 ? <Users /> : i === 3 ? <Heart /> : <Zap />}
                   </div>
                   <h4 className="font-bold text-[#2D2168] mb-1">{y.title}</h4>
                   <p className="text-[10px] font-bold text-orange-600 uppercase mb-2">{y.sub}</p>
                   <p className="text-xs text-gray-600">{y.desc}</p>
                </div>
             ))}
          </div>
       </section>

       {/* 6. CONSTITUTION */}
       <section className="bg-indigo-900 text-white rounded-3xl p-10 md:p-14 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-10 opacity-10">
             <Shield size={120} />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto">
             <h3 className="text-3xl font-bold mb-6 font-sanskrit">{t.constTitle}</h3>
             <p className="text-indigo-200 mb-10">{t.constDesc}</p>
             <div className="grid sm:grid-cols-2 gap-6">
                {t.constItems.map((item, i) => (
                   <div key={i} className="flex gap-4 items-start bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                      <CheckCircle className="text-[#D98F2B] mt-1 shrink-0" size={20} />
                      <div>
                         <span className="font-bold text-[#D98F2B]">{item.t}</span>
                         <p className="text-sm opacity-80">{item.d}</p>
                      </div>
                   </div>
                ))}
             </div>
          </div>
       </section>

       {/* 7. MICRO-HABITS (ACHARAS) */}
       <section className="space-y-12">
          <div className="text-center">
             <h3 className="text-3xl font-bold text-[#2D2168] mb-4 font-sanskrit">{t.acharaTitle}</h3>
             <p className="text-gray-600 max-w-2xl mx-auto">{t.acharaDesc}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
             {t.acharaItems.map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group flex flex-col">
                   <div className="mb-4 flex items-center justify-between">
                      <div className="bg-orange-100 p-3 rounded-xl text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                        {i === 0 ? <Zap /> : i === 1 ? <Coffee /> : i === 2 ? <Zap /> : i === 3 ? <Activity /> : i === 4 ? <Users /> : i === 5 ? <Sun /> : i === 6 ? <Leaf /> : <Eye />}
                      </div>
                      <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Aachara {i + 1}</span>
                   </div>
                   <h4 className="text-lg font-bold text-[#2D2168] mb-3">{item.title}</h4>
                   <div className="space-y-3 flex-grow">
                      <div className="text-xs">
                         <span className="font-bold block text-gray-400 uppercase tracking-tight mb-1">Practice</span>
                         <p className="text-gray-700">{item.practice}</p>
                      </div>
                      <div className="text-xs">
                         <span className="font-bold block text-gray-400 uppercase tracking-tight mb-1">Belief</span>
                         <p className="text-gray-600 italic">"{item.belief}"</p>
                      </div>
                      <div className="text-xs bg-blue-50 p-2 rounded-lg border border-blue-100">
                         <span className="font-bold block text-blue-800 uppercase tracking-tight mb-1 flex items-center gap-1">
                            <Sparkles size={10}/> Science
                         </span>
                         <p className="text-blue-900 leading-snug">{item.science}</p>
                      </div>
                   </div>
                </div>
             ))}
          </div>
       </section>

       {/* CONCLUSION */}
       <section className="text-center max-w-3xl mx-auto py-10">
          <div className="bg-[#FFF8E7] p-8 rounded-3xl border-2 border-dashed border-[#D98F2B]">
             <p className="text-2xl font-serif text-[#2D2168] italic leading-relaxed">
                {t.conclusion}
             </p>
          </div>
       </section>

       {/* RESOURCE LIBRARY */}
       <section className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-200">
            <h3 className="text-2xl font-bold text-[#2D2168] mb-8 flex items-center gap-3">
                <BookOpen className="text-orange-600" />
                {t.libTitle}
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h4 className="font-bold text-lg mb-4 text-gray-800">{t.libRead}</h4>
                    <ul className="space-y-4">
                        <li className="bg-white p-4 rounded-lg shadow-sm flex items-start gap-3">
                            <BookOpen size={20} className="text-gray-400 mt-1" />
                            <div>
                                <a href="https://www.wisdomlib.org/" target="_blank" className="font-bold text-blue-600 hover:underline">Eternal Dharma (WisdomLib)</a>
                                <p className="text-sm text-gray-600">Universal Cosmic Law Explanations</p>
                                <p className="text-xs text-gray-500 mt-1">Explains how Dharma is a universal cosmic law, not a religion.</p>
                            </div>
                        </li>
                        <li className="bg-white p-4 rounded-lg shadow-sm flex items-start gap-3">
                            <BookOpen size={20} className="text-gray-400 mt-1" />
                            <div>
                                <a href="https://www.gitasupersite.iitk.ac.in/" target="_blank" className="font-bold text-blue-600 hover:underline">IIT Kanpur Gita Supersite</a>
                                <p className="text-sm text-gray-600">Commentaries on Dinacharya & Ethics</p>
                                <p className="text-xs text-gray-500 mt-1">Scientific validation of Dinacharya and eating windows through textual analysis.</p>
                            </div>
                        </li>
                        <li className="bg-white p-4 rounded-lg shadow-sm flex items-start gap-3">
                            <BookOpen size={20} className="text-gray-400 mt-1" />
                            <div>
                                <span className="font-bold text-gray-800">Ayurveda and the Mind</span>
                                <p className="text-sm text-gray-600">by Dr. David Frawley</p>
                                <p className="text-xs text-gray-500 mt-1">How diet and routine affect psychological states and civic behavior.</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-100 flex flex-col items-center justify-center text-center">
                    <Sparkles size={40} className="text-orange-400 mb-4" />
                    <h4 className="font-bold text-[#2D2168] mb-2">Practical Implementation</h4>
                    <p className="text-sm text-gray-600">
                        Would you like to explore <strong>Dinacharya</strong> in detail to build a practical routine for yourself? Ask our guide Narad for a personalized plan.
                    </p>
                    <button 
                       onClick={() => (document.querySelector('button[aria-label="Open Chat"]') as HTMLElement)?.click()}
                       className="mt-4 bg-[#D98F2B] text-white px-6 py-2 rounded-full font-bold text-sm shadow-md hover:bg-[#b0721f] transition-all"
                    >
                       Ask Narad
                    </button>
                </div>
            </div>
       </section>
    </div>
  );
};

export default Lifestyle;