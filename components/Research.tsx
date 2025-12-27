import React, { useState } from 'react';
import { PieChart, TrendingUp, Users, Trash2, Map, BookOpen, Scale, BarChart2 } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Research: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'regional' | 'economic' | 'social'>('overview');
  const { language } = useLanguage();

  const content = {
    hi: {
      title: 'वैज्ञानिक और समाजशास्त्रीय डेटा',
      desc: 'नागरिक बोध पर Pew Research Center, IIT और अकादमिक पत्रिकाओं के व्यापक शोध पर आधारित।',
      tabs: {
        overview: 'अवलोकन और धर्म (Overview)',
        regional: 'क्षेत्रीय विश्लेषण (Regional)',
        economic: 'आर्थिक प्रभाव (Economic)',
        social: 'शिक्षा और लिंग (Social)'
      },
      overviewTitle: 'Religion, Tolerance & Segregation (Pew Research 2021)',
      livingTogether: 'Living Together Separately',
      livingDesc: 'भारतीय उच्च स्तर की धार्मिक सहिष्णुता व्यक्त करते हैं लेकिन अलग रहना पसंद करते हैं। इस घटना को "living together separately" के रूप में वर्णित किया गया है।',
      tolItem1: 'सभी धर्मों का सम्मान करना "भारतीय" होने के लिए मूल है',
      tolItem2: 'हिंदू जो अंतर-धार्मिक विवाह रोकना चाहते हैं',
      tolItem3: 'मुस्लिम जो अंतर-धार्मिक विवाह रोकना चाहते हैं',
      sharedValues: 'Shared Values (Karma & Destiny)',
      sharedDesc: 'मतभेदों के बावजूद, मूल विश्वास धार्मिक रेखाओं को पार करते हैं, जो एक साझा सांस्कृतिक "नागरिक धर्म" का सुझाव देते हैं।',
      karmaHindu: 'हिंदू जो कर्म में विश्वास करते हैं',
      karmaMuslim: 'मुस्लिम जो कर्म में विश्वास करते हैं',
      elderRespect: 'बड़ों का सम्मान (सभी समूहों में)',
      quote: '"धर्म केवल सामाजिक पहचान का एक रूप नहीं है; यह मूल्यों और अधिकार का आधार है..."',
      regionTitle: 'State-wise Civic Sense Index (2023)',
      regionDesc: 'विकास के साथ नागरिक जुड़ाव को सहसंबंधित करते हुए प्रह्लाद सिंह अहलूवालिया के अध्ययन पर आधारित।',
      colState: 'राज्य',
      colKnow: 'नागरिक ज्ञान',
      colBehav: 'नागरिक व्यवहार',
      colIndex: 'समग्र सूचकांक (1-10)',
      northSouthTitle: 'उत्तर-दक्षिण विभाजन',
      northSouthDesc: 'दक्षिणी और पश्चिमी राज्य नागरिक जुड़ाव मेट्रिक्स में उत्तरी और पूर्वी राज्यों से लगातार बेहतर प्रदर्शन करते हैं।',
      pewInsightTitle: 'Pew Research Insight',
      pewInsightDesc: 'दक्षिण में लोग मध्य/उत्तर क्षेत्रों की तुलना में कम धार्मिक रूप से अलग हैं।',
      ecoTitle: 'नागरिक बोध का आर्थिक प्रभाव',
      ecoCard1: 'शीर्ष चतुर्थांश नागरिक बोध वाले राज्यों में उच्च प्रति व्यक्ति जीडीपी।',
      ecoCard2: 'नागरिक बोध और शासन प्रभावशीलता के बीच मजबूत सकारात्मक सहसंबंध (r)।',
      ecoCard3: 'नागरिक बोध और प्रति व्यक्ति जीडीपी के बीच सहसंबंध गुणांक।',
      mechTitle: 'नागरिक बोध अर्थव्यवस्था को कैसे चलाता है',
      transCost: 'कम लेनदेन लागत',
      transDesc: 'उच्च विश्वास अनुबंधों की महंगी निगरानी और प्रवर्तन की आवश्यकता को कम करता है।',
      publicGoods: 'सार्वजनिक वस्तुओं का रखरखाव',
      publicDesc: 'नागरिक-दिमाग वाले नागरिक बुनियादी ढांचे की रक्षा करते हैं, जिससे मरम्मत पर सरकारी खर्च कम होता है।',
      socialTitle: 'शिक्षा और लिंग विश्लेषण',
      genderTitle: 'माध्यमिक स्कूलों में लिंग अंतर',
      genderDesc: 'माध्यमिक स्कूली छात्रों पर मंजूनाथ बी.के. के अध्ययन के अनुसार:',
      girlsScore: 'लड़कियां (औसत स्कोर)',
      boysScore: 'लड़के (औसत स्कोर)',
      genderNote: '*0.01 स्तर पर महत्वपूर्ण अंतर। लड़कियां उच्च नागरिक जिम्मेदारी प्रदर्शित करती हैं।',
      schoolTypeTitle: 'स्कूल प्रकार का प्रभाव',
      privateUn: 'निजी गैर-सहायता प्राप्त स्कूल',
      privateUnDesc: 'नागरिक बोध का उच्चतम स्तर (औसत: 114.18)।',
      privateAid: 'निजी सहायता प्राप्त स्कूल',
      privateAidDesc: 'मध्यम स्तर (औसत: 111.02)।',
      govt: 'सरकारी स्कूल',
      govtDesc: 'सबसे कम स्तर (औसत: 94.62)। तत्काल हस्तक्षेप की आवश्यकता है।',
    },
    en: {
      title: 'Scientific & Sociological Data',
      desc: 'Based on extensive research from Pew Research Center, IIT, and academic journals regarding Civic Sense in the Indian context.',
      tabs: {
        overview: 'Overview & Religion',
        regional: 'Regional Analysis',
        economic: 'Economic Impact',
        social: 'Education & Gender'
      },
      overviewTitle: 'Religion, Tolerance & Segregation (Pew Research 2021)',
      livingTogether: 'Living Together Separately',
      livingDesc: 'Indians express high levels of religious tolerance but prefer living separately. This phenomenon is described as "living together separately."',
      tolItem1: 'Believe respecting all religions is core to being "Indian"',
      tolItem2: 'Hindus wanting to stop inter-religious marriage',
      tolItem3: 'Muslims wanting to stop inter-religious marriage',
      sharedValues: 'Shared Values (Karma & Destiny)',
      sharedDesc: 'Despite differences, core beliefs transcend religious lines, suggesting a shared cultural "Civic Dharma".',
      karmaHindu: 'Hindus believing in Karma',
      karmaMuslim: 'Muslims believing in Karma',
      elderRespect: 'Respect for elders (Across all groups)',
      quote: '"Religion is not just a form of social identity; it is the ground of values and authority..."',
      regionTitle: 'State-wise Civic Sense Index (2023)',
      regionDesc: 'Based on the study by Parhlad Singh Ahluwalia, correlating civic engagement with development.',
      colState: 'State',
      colKnow: 'Civic Knowledge',
      colBehav: 'Civic Behavior',
      colIndex: 'Overall Index (1-10)',
      northSouthTitle: 'North-South Divide',
      northSouthDesc: 'Southern and Western states consistently outperform Northern and Eastern states in civic engagement metrics.',
      pewInsightTitle: 'Pew Research Insight',
      pewInsightDesc: 'People in the South are less religiously segregated compared to the Central/North regions.',
      ecoTitle: 'Economic Impact of Civic Sense',
      ecoCard1: 'Higher GDP per capita in states with top-quartile civic sense.',
      ecoCard2: 'Strong positive correlation (r) between Civic Sense and Governance Effectiveness.',
      ecoCard3: 'Correlation coefficient between Civic Sense and GDP per capita.',
      mechTitle: 'How Civic Sense Drives Economy',
      transCost: 'Reduced Transaction Costs',
      transDesc: 'Higher trust reduces the need for expensive monitoring and enforcement of contracts.',
      publicGoods: 'Public Goods Maintenance',
      publicDesc: 'Civic-minded citizens protect infrastructure, reducing government expenditure on repairs.',
      socialTitle: 'Education & Gender Analysis',
      genderTitle: 'Gender Differences in Secondary Schools',
      genderDesc: "According to Manjunatha B.K.'s study on secondary school students:",
      girlsScore: 'Girls (Mean Score)',
      boysScore: 'Boys (Mean Score)',
      genderNote: '*Significant difference at 0.01 level. Girls demonstrate higher civic responsibility.',
      schoolTypeTitle: 'School Type Impact',
      privateUn: 'Private Unaided Schools',
      privateUnDesc: 'Highest levels of civic sense (Mean: 114.18).',
      privateAid: 'Private Aided Schools',
      privateAidDesc: 'Moderate levels (Mean: 111.02).',
      govt: 'Government Schools',
      govtDesc: 'Lowest levels (Mean: 94.62). Needs urgent intervention.',
    }
  };

  const t = language === 'hi' ? content.hi : content.en;

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <header className="text-center mb-10">
        <h2 className="text-3xl font-bold text-orange-800 mb-4">{t.title}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {t.desc}
        </p>
      </header>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {[
          { id: 'overview', label: t.tabs.overview, icon: <Users size={18} /> },
          { id: 'regional', label: t.tabs.regional, icon: <Map size={18} /> },
          { id: 'economic', label: t.tabs.economic, icon: <TrendingUp size={18} /> },
          { id: 'social', label: t.tabs.social, icon: <BookOpen size={18} /> },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
              activeTab === tab.id
                ? 'bg-orange-600 text-white shadow-md'
                : 'bg-white text-gray-600 hover:bg-orange-50 border border-gray-200'
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="bg-white rounded-2xl shadow-xl border border-orange-100 p-6 md:p-8 min-h-[400px]">
        
        {/* OVERVIEW TAB */}
        {activeTab === 'overview' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-2xl font-bold text-gray-800 border-l-4 border-orange-500 pl-4">{t.overviewTitle}</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-orange-50 p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-3 flex items-center gap-2"><Scale className="text-orange-600"/> {t.livingTogether}</h4>
                <p className="text-gray-700 mb-4">
                  {t.livingDesc}
                </p>
                <ul className="space-y-2 text-sm text-gray-800">
                  <li className="flex justify-between border-b border-orange-200 pb-1">
                    <span>{t.tolItem1}</span>
                    <span className="font-bold">84%</span>
                  </li>
                  <li className="flex justify-between border-b border-orange-200 pb-1">
                    <span>{t.tolItem2}</span>
                    <span className="font-bold">67%</span>
                  </li>
                  <li className="flex justify-between border-b border-orange-200 pb-1">
                    <span>{t.tolItem3}</span>
                    <span className="font-bold">80%</span>
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl">
                 <h4 className="font-bold text-lg mb-3 flex items-center gap-2"><Users className="text-blue-600"/> {t.sharedValues}</h4>
                 <p className="text-gray-700 mb-4">
                   {t.sharedDesc}
                 </p>
                 <ul className="space-y-2 text-sm text-gray-800">
                  <li className="flex justify-between border-b border-blue-200 pb-1">
                    <span>{t.karmaHindu}</span>
                    <span className="font-bold">77%</span>
                  </li>
                  <li className="flex justify-between border-b border-blue-200 pb-1">
                    <span>{t.karmaMuslim}</span>
                    <span className="font-bold">77%</span>
                  </li>
                  <li className="flex justify-between border-b border-blue-200 pb-1">
                    <span>{t.elderRespect}</span>
                    <span className="font-bold">~90%</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
              <p className="italic text-gray-600">
                {t.quote} — <em>White, Devine, et al. (RaD Programme)</em>
              </p>
            </div>
          </div>
        )}

        {/* REGIONAL TAB */}
        {activeTab === 'regional' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
             <h3 className="text-2xl font-bold text-gray-800 border-l-4 border-green-500 pl-4">{t.regionTitle}</h3>
             <p className="text-gray-600">{t.regionDesc}</p>
             
             <div className="overflow-x-auto">
               <table className="w-full text-left border-collapse">
                 <thead>
                   <tr className="bg-gray-100 text-gray-700">
                     <th className="p-3 rounded-tl-lg">{t.colState}</th>
                     <th className="p-3">{t.colKnow}</th>
                     <th className="p-3">{t.colBehav}</th>
                     <th className="p-3 font-bold text-orange-700">{t.colIndex}</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-gray-200">
                   <tr>
                     <td className="p-3 font-medium">Kerala</td>
                     <td className="p-3">8.7</td>
                     <td className="p-3">8.9</td>
                     <td className="p-3 font-bold text-green-600">8.65</td>
                   </tr>
                   <tr>
                     <td className="p-3 font-medium">Tamil Nadu</td>
                     <td className="p-3">8.2</td>
                     <td className="p-3">8.5</td>
                     <td className="p-3 font-bold text-green-600">8.25</td>
                   </tr>
                   <tr>
                     <td className="p-3 font-medium">Maharashtra</td>
                     <td className="p-3">7.9</td>
                     <td className="p-3">8.1</td>
                     <td className="p-3 font-bold text-green-600">8.05</td>
                   </tr>
                   <tr className="bg-red-50">
                     <td className="p-3 font-medium">Uttar Pradesh</td>
                     <td className="p-3">6.2</td>
                     <td className="p-3">6.8</td>
                     <td className="p-3 font-bold text-red-600">6.48</td>
                   </tr>
                   <tr className="bg-red-50">
                     <td className="p-3 font-medium">Bihar</td>
                     <td className="p-3">5.8</td>
                     <td className="p-3">6.3</td>
                     <td className="p-3 font-bold text-red-600">6.05</td>
                   </tr>
                 </tbody>
               </table>
             </div>
             <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold mb-2">{t.northSouthTitle}</h5>
                  <p className="text-sm text-gray-700">{t.northSouthDesc}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold mb-2">{t.pewInsightTitle}</h5>
                  <p className="text-sm text-gray-700">{t.pewInsightDesc}</p>
                </div>
             </div>
          </div>
        )}

        {/* ECONOMIC TAB */}
        {activeTab === 'economic' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
             <h3 className="text-2xl font-bold text-gray-800 border-l-4 border-blue-500 pl-4">{t.ecoTitle}</h3>
             
             <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-600">
                  <div className="text-4xl font-bold text-blue-600 mb-2">23%</div>
                  <p className="text-gray-600 text-sm">{t.ecoCard1}</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-600">
                  <div className="text-4xl font-bold text-green-600 mb-2">0.823</div>
                  <p className="text-gray-600 text-sm">{t.ecoCard2}</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-purple-600">
                  <div className="text-4xl font-bold text-purple-600 mb-2">0.847</div>
                  <p className="text-gray-600 text-sm">{t.ecoCard3}</p>
                </div>
             </div>

             <div className="bg-gray-50 p-6 rounded-xl">
               <h4 className="font-bold text-lg mb-4">{t.mechTitle} (Knack & Keefer Mechanism)</h4>
               <ul className="space-y-3">
                 <li className="flex items-start gap-3">
                   <div className="bg-blue-100 p-1 rounded mt-1"><TrendingUp size={16} className="text-blue-600"/></div>
                   <div>
                     <span className="font-bold block">{t.transCost}</span>
                     <span className="text-sm text-gray-600">{t.transDesc}</span>
                   </div>
                 </li>
                 <li className="flex items-start gap-3">
                   <div className="bg-green-100 p-1 rounded mt-1"><Trash2 size={16} className="text-green-600"/></div>
                   <div>
                     <span className="font-bold block">{t.publicGoods}</span>
                     <span className="text-sm text-gray-600">{t.publicDesc}</span>
                   </div>
                 </li>
               </ul>
             </div>
          </div>
        )}

        {/* SOCIAL TAB */}
        {activeTab === 'social' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
             <h3 className="text-2xl font-bold text-gray-800 border-l-4 border-pink-500 pl-4">{t.socialTitle}</h3>
             
             <div className="grid md:grid-cols-2 gap-8">
               <div className="bg-pink-50 p-6 rounded-xl">
                 <h4 className="font-bold text-lg mb-4 text-pink-800">{t.genderTitle}</h4>
                 <p className="text-sm text-gray-700 mb-4">{t.genderDesc}</p>
                 <div className="flex items-center justify-between mb-2">
                   <span>{t.girlsScore}</span>
                   <span className="font-bold bg-white px-2 py-1 rounded">111.61</span>
                 </div>
                 <div className="w-full bg-pink-200 h-2 rounded-full mb-4">
                   <div className="bg-pink-500 h-2 rounded-full" style={{width: '90%'}}></div>
                 </div>
                 <div className="flex items-center justify-between mb-2">
                   <span>{t.boysScore}</span>
                   <span className="font-bold bg-white px-2 py-1 rounded">101.60</span>
                 </div>
                 <div className="w-full bg-blue-200 h-2 rounded-full">
                   <div className="bg-blue-500 h-2 rounded-full" style={{width: '80%'}}></div>
                 </div>
                 <p className="text-xs mt-4 text-gray-500">{t.genderNote}</p>
               </div>

               <div className="bg-purple-50 p-6 rounded-xl">
                 <h4 className="font-bold text-lg mb-4 text-purple-800">{t.schoolTypeTitle}</h4>
                 <ul className="space-y-3">
                   <li className="p-3 bg-white rounded shadow-sm border-l-4 border-purple-500">
                     <span className="font-bold block">{t.privateUn}</span>
                     <span className="text-sm text-gray-600">{t.privateUnDesc}</span>
                   </li>
                   <li className="p-3 bg-white rounded shadow-sm border-l-4 border-purple-300">
                     <span className="font-bold block">{t.privateAid}</span>
                     <span className="text-sm text-gray-600">{t.privateAidDesc}</span>
                   </li>
                   <li className="p-3 bg-white rounded shadow-sm border-l-4 border-gray-300">
                     <span className="font-bold block">{t.govt}</span>
                     <span className="text-sm text-gray-600">{t.govtDesc}</span>
                   </li>
                 </ul>
               </div>
             </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Research;