import React, { useState } from 'react';
import { CheckCircle, XCircle, AlertTriangle, Scroll, BookOpen, Flame, Sun, Moon, Users, Calendar, ChevronDown, ChevronUp, Table as TableIcon, Sparkles, Droplet, Leaf, Beaker, ExternalLink } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const EcoDharma: React.FC = () => {
  const { language } = useLanguage();
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  const textContent = {
    hi: {
      title: 'अनुष्ठान: शास्त्रीय नियम एवं तर्क',
      subtitle: 'क्यों और कैसे करें सही पूजा? (Anushthan - Shastriya Niyam avm Tark)',
      introTitle: 'अनुष्ठानों में नियम क्यों आवश्यक हैं?',
      introQuote: '“विधिहीनमसृष्टान्नं मन्त्रहीनमदक्षिणम्। श्रद्धाविरहितं यज्ञं तामसं परिचक्षते॥”',
      introQuoteRef: '(भगवद्गीता १७.१३)',
      introDesc: 'शास्त्रों में प्रत्येक अनुष्ठान के लिए विशिष्ट सामग्री, दिशा और विधि बताई गई है। यह कोई अंधविश्वास नहीं, बल्कि एक विज्ञान है। जिस प्रकार गलत पासवर्ड से लॉक नहीं खुलता, उसी प्रकार विधि-हीन (Rule-less) पूजा से देवता प्रसन्न नहीं होते। नियमों का पालन करने से कर्म "तामसिक" (अंधेरा) से "सात्विक" (प्रकाश) में बदल जाता है।',
      introPoints: [
        { label: 'संकल्प-शक्ति (Willpower)', desc: 'नियम (जैसे उपवास या मौन) मन को एकाग्र करते हैं और संकल्प को दृढ़ करते हैं।' },
        { label: 'सात्विक प्रभाव (Purity)', desc: 'बिना विधि के किया गया अनुष्ठान ‘तामसिक’ माना जाता है। तामसिक कर्म पुण्य के बजाय दोष और अशांति उत्पन्न करते हैं।' },
        { label: 'देवता-सम्पर्क (Connection)', desc: 'विशिष्ट मंत्र और सामग्री (जैसे यज्ञ में गाय का घी) विशिष्ट ऊर्जा तरंगें उत्पन्न करते हैं जो देवताओं तक पहुँचती हैं।' }
      ],
      categories: [
        {
          id: 1,
          title: 'नित्यपूजा (Daily Worship)',
          icon: <Sun className="text-orange-500" />,
          do: [
            'प्रतिदिन स्नान, शुद्ध कपड़े पहनकर पूर्व-मुख (East facing) होकर पूजा करें।',
            'यजुर्वेद अनुसार: “स्नानम् अबदैवतैः मन्त्रैः” (देवताओं के मंत्र से स्नान)।',
            'पंचोपचार: गंध, पुष्प (सफेद/लाल), दीप (घी/तेल), नैवेद्य (शुद्ध खाद्य)।',
            'गायत्री मंत्र का जाप और सूर्य को अर्घ्य दें (याज्ञवल्क्य स्मृति १.२२)।',
            'सूर्य प्रणाम: खड़े होकर सूर्य को आशीर्वाद दें (Arghya)।'
          ],
          dont: [
            'पूजा में अशुद्धि (मांसाहार, मदिरा, लहसुन-प्याज) बिल्कुल न रखें।',
            'अपवित्र पात्र (लोहे, प्लास्टिक या स्टील के पात्र) वर्जित हैं।',
            'बिना श्रद्धा, नियम और मंत्र के पूजा न करें (यह तामसिक है)।',
            'डकार लेना, जम्हाई लेना या क्रोध करना वर्जित है।'
          ],
          reason: 'दैनिक पूजा से संकल्प-एकाग्रता और मन का शुद्धिकरण होता है। श्रद्धा और नियम बिना पूजा निष्फल है।',
          table: {
            headers: ['वर्जित वस्तु', 'कारण (Reason)'],
            rows: [
              ['मांसाहार, मदिरा', 'तामसिक गुण के कारण पूजा में अशुद्धि बढ़ाते हैं।'],
              ['दंशित/कीड़े लगे पुष्प', 'अमल (शुद्धता) का ह्रास, देवता-असुरक्षा (निष्फल फल)।'],
              ['अनिष्ट दिशा में पूजा', 'विपरीत पूजा अवांछनीय (प्रातः पूरब, संध्या पश्चिम)।'],
              ['लोहे/प्लास्टिक पात्र', 'ऊर्जा के कुचालक और अशुद्ध माने जाते हैं।']
            ]
          }
        },
        {
          id: 2,
          title: 'व्रत (Vrat - Ekadashi, Monday)',
          icon: <Moon className="text-blue-500" />,
          do: [
            'संयम रखना और देव-दान करना।',
            'एकादशी को अन्न ग्रहण न करके श्रीहरि का ध्यान करें।',
            'सोमवार को शिव या भगवती का ध्यान रखें।',
            'दिव्य वाणी (भजन/कीर्तन) सुनें। "ॐ नमो भगवते वासुदेवाय" जपें।',
            'विष्णु पुराण: “व्रत-पूजा समायोगे... पुण्य-वृद्धये” (व्रत से पुण्य बढ़ता है)।'
          ],
          dont: [
            'अनिष्ट कर्म: झूठ बोलना, तनाव देना, हिंसा करना, शारीरिक संभोग।',
            'बार-बार भोजन (सिर्फ़ एक बार फलाहार करें)।',
            'मांस, मदिरा और नशीले पदार्थ पूर्णतः वर्जित।',
            'भोजन करके सोना (दिन में) निषिद्ध है।'
          ],
          reason: 'व्रत से इंद्रियों का नियंत्रण होता है। यह आत्मा को पवित्र करता है और शरीर को रोगों से दूर रखता है।',
          table: {
            headers: ['वर्जित व्यवहार', 'कारण (Reason)'],
            rows: [
              ['झूठ, क्रोध, हिंसा', 'उपासना में संयम और शुद्धि की रक्षा आवश्यक; ये सभी तामसी हैं।'],
              ['पूजन-विधि-हीन व्रत', 'हितकर फलप्राप्ति के लिए शास्त्रविधि अनिवार्य है।'],
              ['तामसिक आहार (प्याज/लहसुन)', 'पवित्रता बिगाड़ने वाले इंद्रिय-उत्तेजक पदार्थ।'],
              ['भव्य भोजन/पार्टी', 'व्रत तपस्या है, उत्सव नहीं।']
            ]
          }
        },
        {
          id: 3,
          title: 'यज्ञ / हवन (Yajna)',
          icon: <Flame className="text-red-500" />,
          do: [
            'अग्निकुंड में मंत्रोच्चारण के साथ घृत (Ghee), तिल, जौ अर्पण करें।',
            'सुगन्धित सामग्री (गुग्गुल, चंदन), पुष्टिकारक (दूध, फल) का प्रयोग करें।',
            'गृह्यसूत्रों (जैसे आश्वलायन) का पालन करें।',
            'यज्ञोपवीत (Janeu) धारण करना आवश्यक है।'
          ],
          dont: [
            'मांस, मदिरा, या रासायनिक धूप (Chemical Incense) न डालें।',
            'मलिन वस्त्र पहनकर यज्ञ न करें।',
            'लोहे या थर्माकोल के पात्रों से आहुति न दें।',
            'बिना योग्यता और ईमानदारी के यज्ञ न करें (विधिहीन यज्ञ तामसिक है)।'
          ],
          reason: 'यज्ञ से समस्त जगत सुखी होता है। शुद्ध घी और सामग्री से वातावरण (वायु) शुद्ध होता है और पितृऋण चुकता होता है।',
          table: {
            headers: ['वर्जित पदार्थ/विकल्प', 'कारण (Reason)'],
            rows: [
              ['मांसाहार (पॉल्ट्री/मांस)', 'यज्ञ में शुद्धता-विशुद्धता की दृष्टि से पूर्णतः निषिद्ध।'],
              ['स्टील/प्लास्टिक पात्र', 'विषैले या नश्वर पात्र तामसी होते हैं। केवल शुद्ध धातु/काष्ठ प्रयोग करें।'],
              ['त्रुटिपूर्ण मंत्र-जप', 'पारायण विधिसम्मत सम्पूर्ण मंत्रोच्चारण अनिवार्य; अन्यथा यज्ञ निष्फल।'],
              ['अनादिकालीन आयोजन', 'यज्ञार्थ शुभ मुहूर्त और ऋतु-नियम का ध्यान रखें।']
            ]
          }
        },
        {
          id: 4,
          title: 'संस्कार (Sanskar - Birth, Thread Ceremony)',
          icon: <Users className="text-purple-500" />,
          do: [
            'जातकर्म: जन्म के पहले पितृस्तुति मन्त्र (ओम तत्पितृश्वरं नमः)।',
            'नामकरण: 10वें या 12वें दिन (मनुस्मृति २.३०)।',
            'उपनयन (Thread Ceremony): ब्राह्मण (8 वर्ष), क्षत्रिय (11 वर्ष), वैश्य (12 वर्ष)।',
            'गायत्री मंत्र दीक्षा अनिवार्य है।'
          ],
          dont: [
            'बिना शास्त्रोक्त विधि के संस्कार अधूरे और फलहीन हैं।',
            'उपनयन के बाद पिता/गुरु की आज्ञा का उल्लंघन वर्जित है।',
            'नामकरण में अजीब या अर्थहीन नाम न रखें।',
            'तामसिक सामग्री का प्रयोग न करें।'
          ],
          reason: 'इन संस्कारों से सामाजिक और आध्यात्मिक जीवन की नींव मजबूत होती है। उपनयन से बालक को वेद-ज्ञान का अधिकार मिलता है।',
          table: {
            headers: ['वर्जित कर्म', 'कारण (Reason)'],
            rows: [
              ['यज्ञोपवीत न करना', 'शुद्र एवं व्रात्य घोषित, सामाजिक-पाप वृद्धि।'],
              ['मुकुट/तिलक-विरूपण', 'आध्यात्मिक चिह्न अपवित्र होगा, देव आशीर्वाद बाधित।'],
              ['अशुभ वास्तु (कब्र/दुर्गंध)', 'पवित्रता के नियम-विरुद्ध; संस्कार स्थल की शुद्धि अनिवार्य।']
            ]
          }
        },
        {
          id: 5,
          title: 'श्राद्ध / तर्पण (Ancestral Rites)',
          icon: <Scroll className="text-gray-500" />,
          do: [
            'पितृ पक्ष में जल-तिल अर्पण करें ("ॐ सर्व पितृदेवताभ्यो नमः")।',
            'पवित्र जल (गंगाजल या तृप्त जल) और काले तिल का प्रयोग करें।',
            'प्रसाद "स्वधा" (दूध, घी, जल, शर्बत) चढ़ाएं।',
            'मनुस्मृति ३.७०: पितृयज्ञ से पितर तृप्त होते हैं।'
          ],
          dont: [
            'कपटी व्यवहार, झूठ, और क्रोध वर्जित है।',
            'लोहे के पात्र का प्रयोग न करें (तांबा/पीतल/चांदी श्रेष्ठ है)।',
            'श्राद्ध कर्म में हँसी-मजाक, पार्टी या मांसाहार पूर्णतः वर्जित है।',
            'दंतधावन (Brush), पान खाना या तेल मालिश वर्जित है।'
          ],
          reason: 'श्राद्ध से पितृदोष निवारण होता है और संतान को यश, आयु और संपत्ति प्राप्त होती है (विष्णु पुराण)।',
          table: {
            headers: ['वर्जित वस्तु/विकल्प', 'कारण (Reason)'],
            rows: [
              ['दन्तधावन/उपवास', 'श्राद्ध में प्रथम दिव्यता वर्जित; जूठा वा अपवित्र धरा नहीं जाता।'],
              ['शराब, मांस', 'श्राद्ध में तामसिक पदार्थों का त्याग करके पुण्य भाव बनाएँ।'],
              ['विवाद, ताम्बूल', 'श्राद्ध में स्मरण-श्रद्धा हो; तामसिक क्रियाएँ शांति-विघ्न के विपरीत।'],
              ['लोहे के पात्र', 'लोहे को अपवित्र माना गया है। (तांबे का प्रयोग करें)']
            ]
          }
        },
        {
          id: 6,
          title: 'त्योहार (Diwali, Holi, Sankranti)',
          icon: <Calendar className="text-yellow-600" />,
          do: [
            'दीपावली: लक्ष्मी-गणेश पूजन, तेल/घी के मिट्टी के दीपक। लेखापरीक्षा (Audit) करें।',
            'होली: प्राकृतिक रंग (हल्दी, कुमकुम), होलिका दहन वैदिक मंत्रों से।',
            'संक्रांति: सूर्य अर्घ्य, तिल-गुड़ दान, गंगा स्नान।',
            'सभी उत्सवों में "पंचोपचार" विधि का पालन करें।'
          ],
          dont: [
            'दीपावली: पटाखे (अशांति का कारण), जुआ, शराब, तांबे का दीपक रात में (अशुभ)।',
            'होली: रासायनिक रंग, हरे पेड़ों को जलाना, बासी भोजन।',
            'संक्रांति: प्लास्टिक/गंदगी पानी में बहाना, बाल कटवाना।'
          ],
          reason: 'उत्सव सामाजिक पुनरुत्थान के साधन हैं। "तदर्त्यम् उत्सवं..." (विष्णु पुराण) - यह देवताओं का आह्वान और आनंद है।',
          table: {
            headers: ['त्योहार/वर्जित', 'कारण (Reason)'],
            rows: [
              ['दीपावली: Copper Lamp', 'Copper lamp at night in dark is considered inauspicious.'],
              ['Holi: Chemical Colors', 'Natural colors are harmless; chemicals harm the skin.'],
              ['Sankranti: Impure Water', 'Purity is mandatory on the day of Sun and Ancestral offering.']
            ]
          }
        }
      ],
      materialsTitle: 'पूजा सामग्री: शुद्धि और अशुद्धि (Do\'s & Don\'ts)',
      materialsDesc: 'शास्त्रों के अनुसार केवल शुद्ध और सात्विक वस्तुएं ही देवताओं को स्वीकार्य हैं। प्लास्टिक और रसायनों का प्रयोग न केवल पर्यावरण को दूषित करता है, बल्कि पूजा को "तामसिक" (निष्फल) बनाता है।',
      materialsList: [
        {
          name: "1. दीपक का तेल (Deepak Fuel)",
          correct: "शुद्ध गौ घृत (घी) या तिल का तेल।",
          wrong: "रिफाइंड तेल, वनस्पति तेल, पाम ऑयल।",
          reason: "रिफाइंड तेल अशुद्ध धुआँ/कालिख छोड़ता है। 'दीपक घृत या तेल से जलाना चाहिए' (भविष्योपनिषत)।",
          science: "घी के दीपक से सात्विक ऊर्जा और निगेटिव आयन उत्पन्न होते हैं, जो वायु शुद्ध करते हैं।",
          ref: "Vadic Jagat / Naidunia",
          refLink: "https://vadicjagat.co.in/"
        },
        {
          name: "2. धूप (Natural Dhup)",
          correct: "प्राकृतिक राल (चंदन, लोबान, गुग्गुल, कपूर)।",
          wrong: "केमिकल परफ्यूम वाली स्टिक, चारकोल स्टिक।",
          reason: "मनुस्मृति: प्राकृतिक सुगंध देवताओं को प्रिय है। रासायनिक धुआँ वायु देव को दूषित करता है।",
          science: "केमिकल अगरबत्ती से Benzene/PAHs निकलते हैं जो कैंसरजनक हैं।",
          ref: "NCBI Study",
          refLink: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8548258/"
        },
        {
          name: "3. पुष्प (Flowers)",
          correct: "ताज़े, प्राकृतिक फूल (कमल, गुलाब, गेंदा)।",
          wrong: "प्लास्टिक/सिल्क के फूल, मुरझाए या कीड़े लगे फूल।",
          reason: "स्कंद पुराण: Only fresh flowers are acceptable. Plastic is impure and equivalent to 'dead' matter.",
          science: "Plastic flowers create microplastic pollution and never decompose.",
          ref: "Earth.fm / WisdomLib",
          refLink: "https://earth.fm/earth-stories/why-plastic-flowers-are-trash/"
        },
        {
          name: "4. जल पात्र (Water Vessel)",
          correct: "तांबा, पीतल, चाँदी या मिट्टी का कलश।",
          wrong: "प्लास्टिक की बोतल, स्टील, एल्यूमिनियम।",
          reason: "प्लास्टिक में जल रखना 'अशुद्ध' है। तांबा+गंगाजल अमृत समान माना गया है।",
          science: "तांबे में 'Oligodynamic' प्रभाव से बैक्टीरिया मरते हैं। प्लास्टिक से EDCs का रिसाव होता है।",
          ref: "NDTV Health",
          refLink: "https://ndtv.in/health/"
        },
        {
          name: "5. शहद (Honey)",
          correct: "प्राकृतिक, कच्चा शहद (Raw Honey)।",
          wrong: "चीनी की चाशनी मिला शहद, प्रोसेस्ड शहद।",
          reason: "पंचामृत में शुद्ध मधु आवश्यक है। मिलावट सात्विकता नष्ट करती है।",
          science: "शुद्ध शहद में औषधीय गुण होते हैं; चीनी वाला शहद केवल कैलोरी बढ़ाता है।",
          ref: "Ayurveda/General",
          refLink: "#"
        },
        {
          name: "6. सिंदूर/कुमकुम (Vermilion)",
          correct: "हल्दी + नींबू (प्राकृतिक), शुद्ध खनिज।",
          wrong: "केमिकल सिंदूर (Lead/Mercury युक्त), ग्लिटर।",
          reason: "स्कंद पुराण: कुमकुम सौभाग्य का प्रतीक है। विषैले रसायन पाप समान हैं।",
          science: "सिंथेटिक सिंदूर में लेड/मरकरी होता है जो न्यूरोटॉक्सिन है।",
          ref: "Hinduism Today",
          refLink: "https://www.hinduismtoday.com/"
        },
        {
          name: "7. अभिषेक दुग्ध (Milk)",
          correct: "देसी गाय का ताज़ा, कच्चा दूध (Unboiled)।",
          wrong: "पाउडर दूध, पैकेट वाला दूध, उबाला हुआ दूध।",
          reason: "शिवपुराण: गाय का कच्चा दूध ही श्रेष्ठ है। प्रोसेस्ड दूध 'मृत' समान है।",
          science: "कच्चे दूध में एंजाइम होते हैं। पाउडर दूध में रसायन होते हैं।",
          ref: "Rudraksha Ratna",
          refLink: "https://www.rudraksha-ratna.com/"
        },
        {
          name: "8. नैवेद्य (Prasad)",
          correct: "घर का बना सात्विक भोजन, फल, मेवे।",
          wrong: "बाज़ार के बिस्कुट, चिप्स, पैक्ड स्नैक्स।",
          reason: "गीता: 'पत्रं पुष्पं...' भक्ति से दिया शुद्ध भोजन। पैक्ड फूड अशुद्ध/औद्योगिक है।",
          science: "पैक्ड फूड में Preservatives होते हैं जो तामसिक और हानिकारक हैं।",
          ref: "Healthline",
          refLink: "https://www.healthline.com/nutrition/common-food-additives"
        },
        {
          name: "9. मूर्तियाँ (Idol Material)",
          correct: "मिट्टी (Clay), धातु, पत्थर, लकड़ी।",
          wrong: "प्लास्टर ऑफ पेरिस (POP), प्लास्टिक।",
          reason: "मूर्तियाँ 'पंचतत्व' में विलीन होनी चाहिए। POP जल देवता का अपमान करता है।",
          science: "POP से पानी में भारी धातुएँ (Lead, Chromium) घुलती हैं जो जलीय जीवन मारती हैं।",
          ref: "Wildlife SOS",
          refLink: "https://news.wildlifesos.org/"
        },
        {
          name: "10. सजावट (Decoration)",
          correct: "आम/अशोक के पत्ते, फूल, रंगोली।",
          wrong: "थर्माकोल, प्लास्टिक रिबन, चमकीले पन्नी।",
          reason: "प्राकृतिक सजावट सकारात्मक ऊर्जा लाती है। थर्माकोल 'मलिन' है।",
          science: "थर्माकोल कभी नष्ट नहीं होता और माइक्रोप्लास्टिक प्रदूषण का मुख्य कारण है।",
          ref: "Change.org",
          refLink: "https://www.change.org/"
        },
        {
          name: "11. अगरबत्ती (Incense Sticks)",
          correct: "बांस-मुक्त, प्राकृतिक जड़ी-बूटी वाली बत्ती।",
          wrong: "काली चारकोल कोटिंग वाली, तीव्र सिंथेटिक सेंट वाली स्टिक।",
          reason: "शास्त्रों में बांस जलाना वर्जित माना गया है (वंश नाश)।",
          science: "चारकोल और सिंथेटिक सेंट जलने पर इंडोर वायु प्रदूषण (PM 2.5) बढ़ाते हैं।",
          ref: "NCBI / WisdomLib",
          refLink: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8548258/"
        },
        {
          name: "12. पंचमेवा (Dry Fruits)",
          correct: "शुद्ध किशमिश, खजूर, काजू, बादाम।",
          wrong: "कैंडी-कोटेड, रंगीन, चीनी मिले बाज़ारी मिक्स।",
          reason: "प्रसाद शुद्ध होना चाहिए। कृत्रिम रंग अशुद्धता का प्रतीक है।",
          science: "कृत्रिम खाद्य रंग (Food Dyes) स्वास्थ्य के लिए हानिकारक हो सकते हैं।",
          ref: "Health / Purity",
          refLink: "#"
        },
        {
          name: "13. थाली/पात्र (Plates)",
          correct: "केले का पत्ता, पत्तल, धातु की थाली।",
          wrong: "एल्युमिनियम फॉयल, प्लास्टिक/थर्माकोल प्लेट।",
          reason: "प्लास्टिक/फॉयल पर्यावरण (भूमि माता) के लिए विष है।",
          science: "गर्म भोजन में एल्युमिनियम और प्लास्टिक से टॉक्सिन्स लीच होते हैं।",
          ref: "Eco-Science",
          refLink: "#"
        },
        {
          name: "14. वस्त्र (Puja Clothes)",
          correct: "सूती (Cotton), रेशम (Silk), खादी।",
          wrong: "पॉलिएस्टर, नायलॉन, सिंथेटिक कपड़े।",
          reason: "प्राकृतिक वस्त्र सात्विक ऊर्जा ग्रहण करते हैं। सिंथेटिक वस्त्र 'अशुद्ध' हैं।",
          science: "सिंथेटिक कपड़े स्टेटिक चार्ज बनाते हैं और त्वचा के लिए कम अच्छे हैं।",
          ref: "Spiritual Science",
          refLink: "#"
        },
        {
          name: "15. घंटी (Bell)",
          correct: "पीतल, कांसा, पंचधातु की घंटी।",
          wrong: "प्लास्टिक की घंटी, बैटरी वाली घंटी।",
          reason: "धातु की ध्वनि (नाद) देवत्व का आह्वान करती है। प्लास्टिक में 'नाद' नहीं है।",
          science: "धातु की अनुनाद (Resonance) मस्तिष्क को शांत करती है।",
          ref: "Anarghyaa",
          refLink: "https://anarghyaa.com/"
        },
        {
          name: "16. कलश (Kalash)",
          correct: "तांबा, पीतल, मिट्टी।",
          wrong: "पेंट किया हुआ प्लास्टिक, स्टील।",
          reason: "कलश वरुण देव का प्रतीक है। प्लास्टिक 'मृत' पदार्थ है।",
          science: "तांबे का कलश पानी को शुद्ध करता है, प्लास्टिक दूषित करता है।",
          ref: "NDTV Health",
          refLink: "https://ndtv.in/health/"
        },
        {
          name: "17. दीपक पात्र (Lamp Material)",
          correct: "मिट्टी (Earthen), पीतल, चांदी।",
          wrong: "एलईडी लाइट, प्लास्टिक का दीया।",
          reason: "अग्नि देव के लिए साक्षात अग्नि चाहिए, कृत्रिम रोशनी नहीं।",
          science: "असली लौ वायु को शुद्ध करती है, एलईडी केवल प्रकाश देती है, ऊर्जा नहीं।",
          ref: "Vadic Jagat",
          refLink: "https://vadicjagat.co.in/"
        },
        {
          name: "18. गंगाजल (Holy Water)",
          correct: "प्रामाणिक स्रोत से लाया हुआ।",
          wrong: "बाज़ार का सेंट मिला हुआ 'नकली' गंगाजल।",
          reason: "शुद्धता ही गंगाजल का मूल है। मिलावट पाप है।",
          science: "असली गंगाजल में बैक्टीरियोफेज होते हैं जो पानी खराब नहीं होने देते।",
          ref: "NDTV News",
          refLink: "https://www.ndtv.com/india-news/"
        },
        {
          name: "19. रोली/तिलक (Tilak)",
          correct: "शुद्ध हल्दी-चूना रोली, चंदन।",
          wrong: "ग्लिटर (चमकी) वाली रोली, केमिकल रंग।",
          reason: "ग्लिटर प्लास्टिक है। मस्तक पर प्लास्टिक लगाना अनुचित है।",
          science: "ग्लिटर माइक्रोप्लास्टिक है जो त्वचा और पर्यावरण को नुकसान पहुँचाता है।",
          ref: "National Geographic",
          refLink: "https://www.nationalgeographic.com/environment/article/glitter-microplastics-biodegradable"
        },
        {
          name: "20. हवन सामग्री (Havan Items)",
          correct: "शुद्ध जड़ी-बूटियाँ, लकड़ी, घी।",
          wrong: "काली पन्नी, प्लास्टिक रैपर, थर्माकोल।",
          reason: "अग्नि में प्लास्टिक डालना महापाप है (प्रकृति देव का अपमान)।",
          science: "हवन में प्लास्टिक जलने से Dioxins जैसी ज़हरीली गैसें निकलती हैं।",
          ref: "Pollution Control",
          refLink: "#"
        }
      ],
      sourcesTitle: 'स्रोत और संदर्भ (Sources)',
      sources: [
         'मनुस्मृति (Manusmriti)',
         'शिव पुराण (Shiva Purana)',
         'स्कंद पुराण (Skanda Purana)',
         'भगवद्गीता (Bhagavad Gita)',
         'यजुर्वेद (Yajurveda)',
         'वैज्ञानिक अध्ययन (Scientific Studies from NCBI, WHO)'
      ]
    },
    en: {
      title: 'Anushthan: Scriptural Rules & Logic',
      subtitle: 'Why and How to Perform Rituals Correctly?',
      introTitle: 'Why are Rules (Niyam) Necessary in Rituals?',
      introQuote: '“Rituals without method (Vidhi), without mantras, without charity, and without faith are declared as Tamasic.”',
      introQuoteRef: '(Bhagavad Gita 17.13)',
      introDesc: 'Scriptures prescribe specific materials, directions, and methods for every ritual. It is not superstition, but a science. Just as a wrong password cannot unlock a device, a rule-less ritual cannot please the Divine. Following rules transforms an action from "Tamasic" (Darkness) to "Sattvic" (Light).',
      introPoints: [
        { label: 'Power of Sankalpa (Will)', desc: 'Rules (like fasting or silence) focus the mind and strengthen the resolve. Without rules, energy is dissipated.' },
        { label: 'Sattvic Effect (Purity)', desc: 'Rituals done without rules are considered ‘Tamasic’. Tamasic actions produce faults and unrest instead of merit.' },
        { label: 'Divine Connection', desc: 'Specific mantras and materials (like Cow Ghee in Yajna) generate specific energy vibrations that connect with the Deities.' }
      ],
      categories: [
        {
          id: 1,
          title: 'Nitya Puja (Daily Worship)',
          icon: <Sun className="text-orange-500" />,
          do: [
            'Bathe daily, wear clean clothes, face East.',
            'As per Yajurveda: “Snanam abadai...” (Bathe with mantras of deities).',
            'Panchopachar: Scent (Gandha), Flower (White/Red), Lamp (Ghee/Oil), Food (Naivedya).',
            'Chant Gayatri Mantra and offer Arghya to Sun (Yajnavalkya Smriti 1.22).',
            'Surya Pranam: Offer blessings to the Sun while standing.'
          ],
          dont: [
            'Never keep impure items (Meat, Alcohol, Onion/Garlic) in Puja.',
            'Impure vessels (Iron, Plastic, Steel) are prohibited.',
            'Do not perform puja without Faith and Mantras (It is Tamasic).',
            'Belching, yawning, or getting angry during puja is prohibited.'
          ],
          reason: 'Daily puja purifies the mind and environment. Puja without faith and rules is fruitless.',
          table: {
            headers: ['Prohibited Item', 'Reason'],
            rows: [
              ['Meat, Alcohol', 'Increases impurity due to Tamasic qualities.'],
              ['Damaged/Insect-bitten flowers', 'Loss of purity, ineffective result (Devta-Asuraksha).'],
              ['Wrong Direction', 'Worship in opposite direction is undesirable (East in am, West in pm).'],
              ['Iron/Plastic Vessels', 'Considered bad conductors of energy and impure.']
            ]
          }
        },
        {
          id: 2,
          title: 'Vrat (Fasting - Ekadashi, Monday)',
          icon: <Moon className="text-blue-500" />,
          do: [
            'Practice self-control and charity.',
            'On Ekadashi, avoid grains and meditate on Sri Hari (Vishnu).',
            'On Monday, meditate on Shiva or Bhagavati.',
            'Listen to divine speech (Bhajans). Chant "Om Namo Bhagavate Vasudevaya".',
            'Vishnu Purana: "Fasting combined with Puja increases merit."'
          ],
          dont: [
            'Negative actions: Lying, Stress, Violence, Sexual intercourse.',
            'Eating frequently (Only fruit meal once).',
            'Meat, alcohol, and intoxicants are strictly prohibited.',
            'Sleeping during the day after eating is prohibited.'
          ],
          reason: 'Fasting controls the senses. It purifies the soul and keeps the body free from diseases.',
          table: {
            headers: ['Prohibited Behavior', 'Reason'],
            rows: [
              ['Lying, Anger, Violence', 'Restraint and purity are essential; these are Tamasic.'],
              ['Ritual-less Fasting', 'Scriptural method is mandatory for beneficial results.'],
              ['Tamasic Food (Onion/Garlic)', 'Sensory stimulants that spoil purity.'],
              ['Grand Feasts/Parties', 'Fasting is austerity, not a celebration/party.']
            ]
          }
        },
        {
          id: 3,
          title: 'Yajna / Havan',
          icon: <Flame className="text-red-500" />,
          do: [
            'Offer Ghee, Sesame, Barley in Agni Kund with Mantras.',
            'Use fragrant items (Guggul, Sandalwood) and nutritive items (Milk, Fruit juice).',
            'Follow Grihya Sutras (like Ashvalayana).',
            'Wearing Yajnopavita (Sacred Thread) is essential.'
          ],
          dont: [
            'Never offer Meat, Alcohol, or Chemical Incense.',
            'Do not perform Yajna in dirty clothes.',
            'Do not use Iron or Thermocol vessels.',
            'Do not perform without qualification and honesty (Vidhi-heen Yajna).'
          ],
          reason: 'Yajna brings happiness to the world. Pure Ghee purifies the atmosphere (Vayu) and clears ancestral debts.',
          table: {
            headers: ['Prohibited Material', 'Reason'],
            rows: [
              ['Meat/Poultry', 'Strictly prohibited due to impurity.'],
              ['Steel/Plastic Vessels', 'Toxic or perishable vessels are Tamasic. Use pure metal/wood.'],
              ['Incorrect Mantras', 'Complete pronunciation is mandatory; otherwise Yajna fails.'],
              ['Untimely Performance', 'Must follow auspicious timing (Muhurta) and seasons.']
            ]
          }
        },
        {
          id: 4,
          title: 'Sanskar (Birth, Upanayana)',
          icon: <Users className="text-purple-500" />,
          do: [
            'Jatakarma: Chant mantras before birth.',
            'Namakaran: 10th or 12th day (Manusmriti 2.30).',
            'Upanayana: Brahmin (8 yrs), Kshatriya (11 yrs), Vaishya (12 yrs).',
            'Gayatri Mantra initiation is mandatory.'
          ],
          dont: [
            'Sanskars are incomplete and fruitless without scriptural methods.',
            'Disobeying father/guru after Upanayana is prohibited.',
            'Do not give meaningless names.',
            'Do not use Tamasic materials.'
          ],
          reason: 'These sacraments strengthen the foundation of social and spiritual life. Upanayana gives the right to Vedic knowledge.',
          table: {
            headers: ['Prohibited Act', 'Reason'],
            rows: [
              ['No Yajnopavita', 'Declared as Shudra or Vratya; increases social sin.'],
              ['Distorting Tilak/Crown', 'Spiritual mark becomes impure; divine blessing obstructed.'],
              ['Inauspicious Vastu', 'Against rules of purity; purity of place is mandatory.']
            ]
          }
        },
        {
          id: 5,
          title: 'Shraddh / Tarpan (Ancestral Rites)',
          icon: <Scroll className="text-gray-500" />,
          do: [
            'Offer water/sesame to ancestors ("Om Sarva Pitru...").',
            'Use Holy Water (Ganga Jal) and Black Sesame.',
            'Offer "Swadha" (Milk, Ghee, Water).',
            'Manusmriti 3.70: Pitru Yajna satisfies the ancestors.'
          ],
          dont: [
            'Deceitful behavior, lying, and anger are prohibited.',
            'Do not use Iron vessels (Copper/Silver is best).',
            'No joking, partying, or meat consumption.',
            'Brushing teeth or oil massage is prohibited.'
          ],
          reason: 'Shraddh removes Pitru Dosh and grants fame, longevity, and wealth to the progeny (Vishnu Purana).',
          table: {
            headers: ['Prohibited Item', 'Reason'],
            rows: [
              ['Brushing/Fasting', 'First divinity prohibited in Shraddh; left-over/impure not accepted.'],
              ['Alcohol, Meat', 'Maintain virtue by renouncing Tamasic items.'],
              ['Arguments, Betel leaf', 'Remembrance/Faith required; Tamasic acts disrupt peace.'],
              ['Iron Vessels', 'Iron is considered impure. Use Copper.']
            ]
          }
        },
        {
          id: 6,
          title: 'Festivals (Diwali, Holi)',
          icon: <Calendar className="text-yellow-600" />,
          do: [
            'Diwali: Laxmi-Ganesh Puja, Clay lamps (Ghee/Oil). Audit accounts.',
            'Holi: Natural colors (Turmeric), Holika Dahan with Vedic mantras.',
            'Sankranti: Sun worship, Sesame charity, Holy bath.',
            'Follow "Panchopachar" method in all festivals.'
          ],
          dont: [
            'Diwali: Crackers (Cause unrest), Gambling, Alcohol. Copper lamp at night.',
            'Holi: Chemical colors, Burning green trees, Stale food.',
            'Sankranti: Throwing plastic/waste in water, Hair cutting.'
          ],
          reason: 'Festivals are means of social resurgence. "Tadartyam Utsavam..." (Vishnu Purana) - invoking the Divine and joy.',
          table: {
            headers: ['Festival/Prohibited', 'Reason'],
            rows: [
              ['Diwali: Copper Lamp', 'Copper lamp at night in dark is considered inauspicious.'],
              ['Holi: Chemical Colors', 'Natural colors are harmless; chemicals harm the skin.'],
              ['Sankranti: Impure Water', 'Purity is mandatory on the day of Sun and Ancestral offering.']
            ]
          }
        }
      ],
      materialsTitle: 'Ritual Materials: Purity vs. Impurity (Do\'s & Don\'ts)',
      materialsDesc: 'Scriptures accept only pure and sattvic items. The use of plastic and chemicals not only pollutes the environment but also makes the ritual "Tamasic" (fruitless).',
      materialsList: [
        {
          name: "1. Deepak Fuel",
          correct: "Pure Cow Ghee or Til Oil. Brass/Clay lamp.",
          wrong: "Refined oil, Vanaspati, Electric/LED diya, Plastic diya.",
          reason: "Refined oil produces impure smoke/soot. 'Lamps should be lit with Ghee or Oil' (Bhavishya Purana).",
          science: "Ghee lamps generate sattvic energy and minimal pollution. LEDs do not represent the Agni element.",
          ref: "Vadic Jagat / Naidunia",
          refLink: "https://vadicjagat.co.in/"
        },
        {
          name: "2. Dhup (Incense)",
          correct: "Natural resin (Sandalwood, Loban, Guggul, Camphor).",
          wrong: "Chemical perfumed sticks, Charcoal sticks, Synthetic incense.",
          reason: "Manusmriti: Natural fragrance is dear to Gods. Chemical smoke pollutes the Vayu (Air) deity.",
          science: "Chemical incense releases Benzene/PAHs which are carcinogenic. Natural dhup purifies air.",
          ref: "NCBI Study",
          refLink: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8548258/"
        },
        {
          name: "3. Flowers",
          correct: "Fresh, natural flowers (Lotus, Rose, Marigold).",
          wrong: "Plastic/Silk flowers, Withered or insect-bitten flowers.",
          reason: "Skanda Purana: Only fresh flowers are acceptable. Plastic is impure and equivalent to 'dead' matter.",
          science: "Plastic flowers create microplastic pollution and never decompose.",
          ref: "Earth.fm / WisdomLib",
          refLink: "https://earth.fm/earth-stories/why-plastic-flowers-are-trash/"
        },
        {
          name: "4. Water Vessel",
          correct: "Copper, Brass, Silver, or Clay pot.",
          wrong: "Plastic bottle, Steel/Aluminum, Synthetic painted pot.",
          reason: "Storing water in plastic is 'impure'. Copper + Ganga Jal is considered Nectar (Amrit).",
          science: "Copper has an 'Oligodynamic' effect that kills bacteria. Plastic leaches harmful EDCs into water.",
          ref: "NDTV Health",
          refLink: "https://ndtv.in/health/"
        },
        {
          name: "5. Honey",
          correct: "Natural, Raw Honey.",
          wrong: "Sugar syrup adulterated honey, Processed/Heated honey.",
          reason: "Pure honey is essential for Panchamrit. Adulterated honey destroys the sanctity of the offering.",
          science: "Pure honey has medicinal properties; sugar-mixed honey only adds calories and is harmful.",
          ref: "Ayurveda/General",
          refLink: "#"
        },
        {
          name: "6. Sindoor/Kumkum",
          correct: "Turmeric + Lime (Natural), made from pure minerals.",
          wrong: "Chemical Vermilion (Lead/Mercury), Glitter Sindoor.",
          reason: "Skanda Purana: Kumkum symbolizes fortune. Toxic chemicals harm both the body and Earth.",
          science: "Synthetic sindoor contains Lead/Mercury which are neurotoxins.",
          ref: "Hinduism Today",
          refLink: "https://www.hinduismtoday.com/"
        },
        {
          name: "7. Abhishek Milk",
          correct: "Desi Cow's fresh, raw milk (Unboiled).",
          wrong: "Powdered milk, Packaged processed milk, Boiled milk.",
          reason: "Shiva Purana: Only raw cow milk is best for Abhishek. Processed milk is considered 'lifeless'.",
          science: "Raw milk contains enzymes. Powdered milk often contains chemical additives.",
          ref: "Rudraksha Ratna",
          refLink: "https://www.rudraksha-ratna.com/"
        },
        {
          name: "8. Naivedya (Offerings)",
          correct: "Homemade Sattvic food, fruits, nuts, halwa.",
          wrong: "Market biscuits, chips, chocolates, stale food.",
          reason: "Gita: 'Patram Pushpam...' - Pure food offered with devotion. Packed food is impure and industrial.",
          science: "Packed foods contain preservatives which are Tamasic and harmful to health.",
          ref: "Healthline",
          refLink: "https://www.healthline.com/nutrition/common-food-additives"
        },
        {
          name: "9. Idols",
          correct: "Clay, Metal (Brass/Ashtadhatu), Stone, Wood.",
          wrong: "Plaster of Paris (POP), Plastic, Thermocol.",
          reason: "Idols should merge with 'Panchatattva'. POP does not dissolve and insults the Water deity.",
          science: "POP idols release heavy metals (Lead, Chromium) into water bodies, killing aquatic life.",
          ref: "Wildlife SOS",
          refLink: "https://news.wildlifesos.org/"
        },
        {
          name: "10. Decoration",
          correct: "Mango/Ashoka leaves, Flowers, Rangoli (Flour/Turmeric), Cotton cloth.",
          wrong: "Thermocol, Plastic ribbons, Shiny Foil, Synthetic cloth.",
          reason: "Natural decor brings positive energy. Thermocol/Plastic are 'malin' (impure) items.",
          science: "Thermocol never decomposes and is a major source of microplastic pollution.",
          ref: "Change.org",
          refLink: "https://www.change.org/"
        },
        {
          name: "11. Agarbatti (Sticks)",
          correct: "Bamboo-free, natural herbal sticks.",
          wrong: "Charcoal coated, strong synthetic scented sticks.",
          reason: "Bamboo burning is often prohibited in scriptures (Vansh Naash).",
          science: "Charcoal and synthetic scents increase indoor air pollution (PM 2.5).",
          ref: "NCBI / WisdomLib",
          refLink: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8548258/"
        },
        {
          name: "12. Panchamewa (Dry Fruits)",
          correct: "Pure raisins, dates, cashews, almonds.",
          wrong: "Candy-coated, colored, sugar-loaded market mixes.",
          reason: "Offerings should be pure. Artificial colors symbolize impurity.",
          science: "Artificial food dyes can be harmful to health.",
          ref: "Health / Purity",
          refLink: "#"
        },
        {
          name: "13. Plates/Thali",
          correct: "Banana leaf, leaf bowls (Pattal), Metal thali.",
          wrong: "Aluminum foil, plastic/thermocol plates.",
          reason: "Plastic/Foil is a toxin for Mother Earth.",
          science: "Aluminum and plastic leach toxins into hot food.",
          ref: "Eco-Science",
          refLink: "#"
        },
        {
          name: "14. Vastra (Clothes)",
          correct: "Cotton, Silk, Khadi (Natural fibers).",
          wrong: "Polyester, Nylon, Synthetic clothes.",
          reason: "Natural fibers conduct sattvic energy. Synthetics are 'impure'.",
          science: "Synthetic fabrics generate static charge and are less breathable.",
          ref: "Spiritual Science",
          refLink: "#"
        },
        {
          name: "15. Bell (Ghanti)",
          correct: "Brass, Bronze, Panchadhatu bell.",
          wrong: "Plastic bell, battery-operated toy bell.",
          reason: "Metal sound (Naad) invokes divinity. Plastic has no 'Naad'.",
          science: "Metal resonance calms the brain; plastic sound does not.",
          ref: "Anarghyaa",
          refLink: "https://anarghyaa.com/"
        },
        {
          name: "16. Kalash",
          correct: "Copper, Brass, Clay.",
          wrong: "Painted plastic pot, Steel.",
          reason: "Kalash represents Varuna. Plastic is 'dead' matter.",
          science: "Copper purifies water; plastic leaches chemicals.",
          ref: "NDTV Health",
          refLink: "https://ndtv.in/health/"
        },
        {
          name: "17. Lamp Material",
          correct: "Earthen (Clay), Brass, Silver.",
          wrong: "LED lights, Plastic diyas.",
          reason: "Agni Dev requires actual fire, not artificial light.",
          science: "Real flame purifies air; LEDs provide light but no energy.",
          ref: "Vadic Jagat",
          refLink: "https://vadicjagat.co.in/"
        },
        {
          name: "18. Gangajal (Holy Water)",
          correct: "Authentic source water.",
          wrong: "Market perfumed 'fake' Gangajal.",
          reason: "Purity is the essence of Gangajal. Adulteration is a sin.",
          science: "Authentic Gangajal has bacteriophages that keep it fresh.",
          ref: "NDTV News",
          refLink: "https://www.ndtv.com/india-news/"
        },
        {
          name: "19. Roli/Tilak",
          correct: "Pure Turmeric-Lime Roli, Sandalwood.",
          wrong: "Glitter Roli, Chemical red powder.",
          reason: "Glitter is plastic. Applying plastic on the forehead is improper.",
          science: "Glitter is microplastic, harmful to skin and environment.",
          ref: "National Geographic",
          refLink: "https://www.nationalgeographic.com/environment/article/glitter-microplastics-biodegradable"
        },
        {
          name: "20. Havan Items",
          correct: "Pure herbs, wood, ghee.",
          wrong: "Black plastic wrappers, Thermocol.",
          reason: "Burning plastic in Agni is a great sin (insult to Nature).",
          science: "Burning plastic releases toxic Dioxins.",
          ref: "Pollution Control",
          refLink: "#"
        }
      ],
      sourcesTitle: 'Sources & References',
      sources: [
         'Manusmriti',
         'Shiva Purana',
         'Skanda Purana',
         'Bhagavad Gita',
         'Yajurveda',
         'Scientific Studies (NCBI, WHO)'
      ]
    }
  };

  const t = language === 'hi' ? textContent.hi : textContent.en;

  return (
    <div className="max-w-7xl mx-auto py-8 space-y-12">
      
      {/* Header */}
      <div className="text-center">
         <h2 className="text-4xl font-bold text-[#2D2168] mb-4 font-sanskrit">{t.title}</h2>
         <p className="text-xl text-gray-600">{t.subtitle}</p>
      </div>

      {/* Intro Section: Why Rules? */}
      <section className="bg-orange-50 border-l-8 border-[#D98F2B] p-8 md:p-12 rounded-r-3xl shadow-sm">
         <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-orange-900 mb-6 flex items-center gap-2">
               <AlertTriangle className="text-[#D98F2B]" /> {t.introTitle}
            </h3>
            
            <div className="bg-white p-6 rounded-xl border border-orange-200 mb-8 shadow-inner">
               <p className="text-xl md:text-2xl font-serif text-center italic text-[#2D2168] mb-2">
                  {t.introQuote}
               </p>
               <p className="text-center text-sm font-bold text-gray-500 uppercase tracking-widest">{t.introQuoteRef}</p>
            </div>

            <p className="text-lg text-gray-800 leading-relaxed mb-8">
               {t.introDesc}
            </p>

            <div className="grid md:grid-cols-3 gap-6">
               {t.introPoints.map((pt, i) => (
                  <div key={i} className="bg-white p-5 rounded-lg shadow-sm border border-orange-100">
                     <h4 className="font-bold text-[#D98F2B] mb-2">{pt.label}</h4>
                     <p className="text-sm text-gray-600">{pt.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Categories Accordion */}
      <section className="space-y-6">
         {t.categories.map((cat, idx) => (
            <div key={cat.id} className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 transition-all">
               
               {/* Header */}
               <div 
                  className={`p-6 flex items-center justify-between cursor-pointer ${expandedSection === idx ? 'bg-orange-50' : 'hover:bg-gray-50'}`}
                  onClick={() => toggleSection(idx)}
               >
                  <div className="flex items-center gap-4">
                     <div className="p-3 bg-white rounded-full shadow-sm border border-gray-100">{cat.icon}</div>
                     <h3 className="text-xl font-bold text-[#2D2168]">{cat.title}</h3>
                  </div>
                  {expandedSection === idx ? <ChevronUp className="text-gray-400"/> : <ChevronDown className="text-gray-400"/>}
               </div>

               {/* Content */}
               {expandedSection === idx && (
                  <div className="p-6 md:p-8 border-t border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200">
                     <div className="grid md:grid-cols-2 gap-8 mb-8">
                        {/* Do's */}
                        <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                           <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                              <CheckCircle size={20}/> {language === 'hi' ? 'क्या करें (Do\'s)' : 'What to Do'}
                           </h4>
                           <ul className="space-y-3">
                              {cat.do.map((item, i) => (
                                 <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                    <span className="mt-1.5 w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></span>
                                    {item}
                                 </li>
                              ))}
                           </ul>
                        </div>

                        {/* Don'ts */}
                        <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                           <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                              <XCircle size={20}/> {language === 'hi' ? 'क्या न करें (Don\'ts)' : 'What Not to Do'}
                           </h4>
                           <ul className="space-y-3">
                              {cat.dont.map((item, i) => (
                                 <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                    <span className="mt-1.5 w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0"></span>
                                    {item}
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </div>

                     {/* Table for Prohibited Items */}
                     <div className="mb-8 overflow-hidden rounded-xl border border-gray-200 shadow-sm">
                        <div className="bg-gray-50 p-3 border-b border-gray-200 flex items-center gap-2 font-bold text-gray-700">
                           <TableIcon size={16} /> {language === 'hi' ? 'वर्जित वस्तुएँ एवं कारण' : 'Prohibited Items & Reasons'}
                        </div>
                        <table className="w-full text-left text-sm">
                           <thead className="bg-white text-gray-500 border-b border-gray-100">
                              <tr>
                                 {cat.table.headers.map((h, i) => (
                                    <th key={i} className="p-4 font-medium">{h}</th>
                                 ))}
                              </tr>
                           </thead>
                           <tbody className="divide-y divide-gray-100 bg-white">
                              {cat.table.rows.map((row, i) => (
                                 <tr key={i} className="hover:bg-gray-50">
                                    <td className="p-4 font-bold text-red-700">{row[0]}</td>
                                    <td className="p-4 text-gray-600">{row[1]}</td>
                                 </tr>
                              ))}
                           </tbody>
                        </table>
                     </div>

                     {/* Reason */}
                     <div className="bg-blue-50 p-4 rounded-lg flex items-start gap-3 border border-blue-100">
                        <Scroll className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                        <div>
                           <span className="font-bold text-blue-800 block text-sm mb-1 uppercase tracking-wide">{language === 'hi' ? 'शास्त्रीय/वैज्ञानिक तर्क' : 'Scriptural/Scientific Logic'}</span>
                           <p className="text-blue-900 text-sm leading-relaxed">{cat.reason}</p>
                        </div>
                     </div>
                  </div>
               )}
            </div>
         ))}
      </section>

      {/* NEW SECTION: PUJA SAMAGRI (MATERIALS) */}
      <section className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-indigo-100">
         <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-[#2D2168] mb-4 flex items-center justify-center gap-2">
               <Sparkles className="text-yellow-500" /> {t.materialsTitle}
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">{t.materialsDesc}</p>
         </div>

         <div className="grid md:grid-cols-2 gap-6">
            {t.materialsList.map((item, index) => (
               <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-md transition-shadow relative overflow-hidden group flex flex-col h-full">
                  {/* Item Header */}
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-200">
                     <div className="bg-white p-2 rounded-full shadow-sm text-indigo-600">
                        {index % 4 === 0 ? <Flame size={20}/> : 
                         index % 4 === 1 ? <Leaf size={20}/> : 
                         index % 4 === 2 ? <Droplet size={20}/> : <Beaker size={20}/>}
                     </div>
                     <h4 className="text-xl font-bold text-[#2D2168]">{item.name}</h4>
                  </div>

                  {/* Comparison Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-4 flex-grow">
                     <div className="bg-green-50 p-3 rounded-lg border border-green-100">
                        <div className="flex items-center gap-1.5 mb-1 text-green-800 font-bold text-xs uppercase tracking-wide">
                           <CheckCircle size={14} /> {language === 'hi' ? 'सही (Correct)' : 'Correct'}
                        </div>
                        <p className="text-sm text-green-900 font-medium leading-snug">{item.correct}</p>
                     </div>
                     
                     <div className="bg-red-50 p-3 rounded-lg border border-red-100">
                        <div className="flex items-center gap-1.5 mb-1 text-red-800 font-bold text-xs uppercase tracking-wide">
                           <XCircle size={14} /> {language === 'hi' ? 'गलत (Avoid)' : 'Avoid'}
                        </div>
                        <p className="text-sm text-red-900 font-medium leading-snug">{item.wrong}</p>
                     </div>
                  </div>

                  {/* Logic Section */}
                  <div className="space-y-2 mt-auto">
                     <div className="flex gap-2 items-start text-xs text-gray-700 bg-white p-2 rounded border border-gray-100">
                        <Scroll size={14} className="text-orange-500 mt-0.5 flex-shrink-0" />
                        <span><strong className="text-orange-700">Dharma:</strong> {item.reason}</span>
                     </div>
                     <div className="flex gap-2 items-start text-xs text-gray-700 bg-white p-2 rounded border border-gray-100">
                        <Beaker size={14} className="text-blue-500 mt-0.5 flex-shrink-0" />
                        <span><strong className="text-blue-700">Science:</strong> {item.science}</span>
                     </div>
                     {item.refLink && item.refLink !== '#' && (
                        <a href={item.refLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[10px] text-gray-400 hover:text-indigo-600 transition-colors justify-end mt-1">
                           Source: {item.ref} <ExternalLink size={10} />
                        </a>
                     )}
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* References */}
      <section className="bg-gray-800 text-gray-300 p-8 rounded-2xl">
         <h3 className="font-bold text-white mb-4 flex items-center gap-2"><BookOpen size={20}/> {t.sourcesTitle}</h3>
         <div className="grid md:grid-cols-2 gap-4 text-sm">
            {t.sources.map((src, i) => (
               <div key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                  {src}
               </div>
            ))}
         </div>
         <p className="text-xs mt-6 opacity-50 text-center">
            {language === 'hi' ? '* सभी जानकारी संलग्न पीडीएफ दस्तावेजों (अनुष्ठान - शास्त्रीय नियम एवं तर्क) पर आधारित है।' : '* All information is based on the attached PDF documents (Anushthan - Shastriya Niyam avm Tark).'}
         </p>
      </section>

    </div>
  );
};

export default EcoDharma;