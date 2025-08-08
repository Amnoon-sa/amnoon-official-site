import React, { useEffect, useState } from 'react';

const newsData = {
  en: {
    images: [
      "/img/news/news15.jpg",
      "/img/news/news14.png",
      "/img/main/logo-blue.png",
      "/img/news/news2.jpg",
      "/img/news/news13.jpeg",
      "/img/news/news12.jpeg",
      "/img/news/news11.jpeg",
      "/img/news/news10.png",
      "/img/news/news9.png",
      "/img/news/news8.jpg",
      "/img/news/news7.jpeg",
      "/img/news/news6.jpeg",
      "/img/news/news5.jpeg",
      "/img/news/news4.png",
      "/img/news/news3.png",
      "/img/news/news2.jpg",
      "/img/news/news1.jpg",
    ],
    texts: [
      "In a comment published by Al-Riyadh newspaper, retired Brigadier General Dr. Abdulaziz Al-Hoshan, a researcher in family crime issues, explained that the rise in crimes against Saudi students abroad is linked to the increasing crime rates in Western societies. He attributed this to the spread of drugs and the influence of negative media, stressing the importance of awareness and caution to prevent such incidents.",
      "Statement by Dr. Abdulaziz Al-Hoshan: He confirmed that the ministry has thwarted criminal plots and networks targeting the nation’s security and its youth, achieving record-breaking results in recent anti-crime efforts. He emphasized the importance of local and international cooperation in information exchange, tracking criminals, and uncovering smuggling and promotion methods",
      "We extend our congratulations and best wishes to the Custodian of the Two Holy Mosques, His Royal Highness the Crown Prince, and His Royal Highness the Minister of Interior—may Allah preserve them—on the successful Hajj season of this year, 1446 AH. We ask Allah Almighty to protect our leadership, our nation, and our brave security forces, and to continue to bless us with security, safety, stability, and prosperity",
      "Security expert Major General Dr. Barakah Al-Hoshan: \"Drone aircraft monitor everything happening in the holy sites and the Makkah region, and cameras cover all control rooms completely.\" This is according to Al Ekhbariya Channel",
      "We extend our congratulations to the Custodian of the Two Holy Mosques and His Royal Highness the Crown Prince—the architect and mastermind of the Vision—on the release of the annual report for #Saudi_Vision_2030, which, in its ninth year, has achieved remarkable successes, accomplishments, and milestones. Thanks to Allah, then to our visionary leader, and our people, the Vision has become a reality we live and celebrate today—not just a dream of the future",
      "Amnoon, February 24, 2025 – Amnon Security Consulting announced, on the sidelines of the Saudi-Jordanian Business Forum, the signing of a strategic investment agreement with Vibes Digital Solutions, under which Amnon will acquire a stake in Vibes. This move aligns with Amnon’s expansion strategy to strengthen its presence in the digital solutions and cybersecurity sector",
      "Amnoon Security Consulting Office is pleased to extend its sincere congratulations and best wishes to the Custodian of the Two Holy Mosques and His Royal Highness the Crown Prince – may Allah protect them – on the occasion of Founding Day. We pray to the Almighty to safeguard our leadership and our nation and to continue blessing us with security, safety, stability, and prosperity.",
      "Security media professor Major General Dr. Barakah Al-Hoshan: The Ministry of Interior has achieved exceptional accomplishments, surpassing interior ministries worldwide.",
      "Security consultant Dr. Abdulaziz Al-Hoshan: Thanks to Allah and the efforts of the Ministry of Interior, the Kingdom has achieved first place in safety and low crime rates.",
      "The Sultanate of Oman celebrates its glorious 54th National Day, and on this occasion, Amnoon Security Consulting extends its heartfelt congratulations and best wishes to His Majesty Sultan Haitham bin Tariq, may God protect him, and to the noble Omani people, wishing continued progress and prosperity under this blessed era. May the Sultanate of Pride always remain in glory, security, and prosperity",
      "Amnoon Security Consulting participated in the SIBEC 2024 Business Exhibition and Conference in Abu Dhabi. During the event, Dr. Abdulaziz Al-Hoshan, the Executive Director, met with Mr. Mike Brunzell, Vice President for Global Business Development at NFPA; Mr. Ibrahim Lari, CEO of SIBEC; and Ms. Dana Kamal, Director of International Development for the Middle East at NFPA. The event also saw the participation of retired Naval Brigadier Abdullah bin Nasser Aba Al-Khail, Maritime Consultant at Amnoon Security Consulting, and Ms. Lubna Al-Jundi, Director of Relations and Communications. Discussions focused on exploring avenues and prospects for cooperation",
      "A year has passed full of progress and development, characterized by advanced growth and continuous contributions. May God sustain our nation and the leader of our journey, and may the flag of our country continue to fly high under our wise leadership.",
      "A number of consultants visited the International Security and Safety Exhibition 'Intersec' in Riyadh, where they explored the latest innovations and technological solutions in the fields of cybersecurity and protection. They also reviewed advanced technologies aimed at enhancing critical infrastructure and public safety.",
      "Amnoon Security Consulting Office is honored to participate in the Third Critical Infrastructure Security Symposium, which will be held in Salalah, Sultanate of Oman, under the title ‘Port and Critical Infrastructure Security’. A presentation on port security will be delivered by Maritime Consultant, Retired Rear Admiral Abdullah bin Nasser Abalkhail",
      "Amnoon Security Consulting Office is honored to present a working paper at the 'Critical Infrastructure Security' seminar, which will be held in Salalah, Sultanate of Oman, under the title 'Port and Maritime Facility Security.' The paper on airport security will be presented by retired Brigadier General Yusuf bin Ahmed Al-Qahtani",
      "Amnoon Security Consulting Office is honored to participate in the third seminar on 'Critical Infrastructure Security,' which will be held in Salalah, Sultanate of Oman, under the title 'Port and Maritime Facility Security.' We will present a working paper on 'The Role of Digital Security in Protecting Critical Infrastructure Data,' delivered by retired Brigadier General Dr. Barakah bin Zamil Al-Hoshan",
      "Amnoon Security Consulting Office participates in the third seminar on the security and safety of critical infrastructure, presenting two working papers delivered by a selection of security consultants. The seminar will be held in Dhofar Governorate, Sultanate of Oman, from September 2-4",
    ]
  },
  ar: {
    images: [
    "/img/news/news15.jpg",
    "/img/news/news14.png",
    "/img/main/logo-blue.png",
    "/img/news/news2.jpg",
    "/img/news/news13.jpeg",
    "/img/news/news12.jpeg",
    "/img/news/news11.jpeg",
    "/img/news/news10.png",
    "/img/news/news9.png",
    "/img/news/news8.jpg",
    "/img/news/news7.jpeg",
    "/img/news/news6.jpeg",
    "/img/news/news5.jpeg",
    "/img/news/news4.png",
    "/img/news/news3.png",
    "/img/news/news2.jpg",
    "/img/news/news1.jpg",
    ],
    texts: [
      "في تعليق نشرته صحيفة الرياض، أوضح العميد المتقاعد د. عبدالعزيز الحوشان، الباحث في قضايا جرائم الأسرة، أن تزايد الجرائم ضد المبتعثين السعوديين في الخارج يعود إلى ارتفاع معدلات الجريمة في المجتمعات الغربية، مرجعًا ذلك إلى تفشي المخدرات وتأثير الإعلام السلبي، مؤكدًا على أهمية الوعي والحيطة للوقاية من مثل هذه الحوادث",
              "تصريح د. عبدالعزيز الحوشان: أكد أن الوزارة أفشلت مخططات وشبكات إجرامية تستهدف أمن الوطن وشبابه وحققت أرقامًا قياسية في المكافحة مؤخرًا. وشدد على أهمية التعاون المحلي والدولي لتبادل المعلومات وملاحقة المجرمين وكشف أساليب التهريب والترويج",
        "نبارك ونهنىء مقام خادم الحرمين الشريفين و سمو ولي العهد الامين وسمو وزير الداخلية -حفظهم الله-بمناسبة نجاح موسم الحج لهذا العام 1446 هـ، سائلين المولى عز وجل أن يحفظ قيادتنا و وطننا ورجال أمننا البواسل وأن يديم علينا نعمة الأمن والأمان والاستقرار والرخاء",
        "المختص الأمني اللواء الدكتور بركة الحوشان: \"طائرات الدرون ترصد كل ما يحدث في المشاعر المقدسة ومنطقة مكة المكرمة، والكاميرات تغطي جميع غرف المراقبة بالكامل\" وذلك وفقًا لما نقلته قناة الإخبارية",
        "نهنئ خادم الحرمين الشريفيين وسمو ولي عهده الامين مهندس وعراب الرؤية بمناسبة صدور التقرير السنوي لـ #رؤية_السعودية_2030 والتي حققت نجاحات وانجازات ومستهدفات عظيمة في عامها التاسع، وبفضل الله ثم #ملهمنا وثم شعبنا اصبحت الرؤية واقع نعيشه اليوم ونفرح بانجازها وليست حلماً مستقبلياً",
        "عمّان، 24 فبراير 2025 – أعلنت شركة “آمنون للاستشارات الأمنية”، على هامش ملتقى الأعمال السعودي الأردني المشترك، عن توقيع اتفاقية استثمار استراتيجية مع شركة “فايبس للحلول الرقمية”، تتضمن استحواذ “آمنون” على نسبة من أسهم “فايبس”، وذلك في إطار خطتها التوسعية لتعزيز حضورها في قطاع الحلول الرقمية والأمن السيبراني",
        "يسر مكتب آمنون للاستشارات الأمنية أن يرفع أصدق التهاني والتبريكات لمقام خادم الحرمين الشريفين و سمو ولي عهده الأمين - حفظهما الله - بمناسبة يوم التأسيس سائلين المولى عز وجل أن يحفظ قيادتنا و وطننا وأن يديم علينا نعمة الأمن والأمان والاستقرار والرخاء",
        "اللواء الدكتور بركة الحوشان، أستاذ الإعلام الأمني: حققت وزارة الداخلية إنجازات استثنائية تفوقت بها على وزارات الداخلية العالمية",
        "الدكتور عبدالعزيز الحوشان، مستشار أمني: بفضل الله وجهود وزارة الداخلية، حققت المملكة المركز الأول في الأمن وانخفاض معدلات الجريمة",
        "تحتفل سلطنة عمان بالعيد الوطني الرابع والخمسين المجيد، وبهذه المناسبة يتقدم مكتب آمنون للاستشارات الأمنية بأسمى آيات التهاني والتبريكات إلى جلالة السلطان هيثم بن طارق، حفظه الله، وإلى الشعب العماني النبيل، متمنين دوام التقدم والازدهار في هذا العهد المبارك. دامت سلطنة العز في رفعة وأمن ورخاء",
        "شارك مكتب آمنون للاستشارات الأمنية في معرض ومؤتمر الأعمال SIBEC 2024 في أبوظبي. وخلال الفعالية، التقى الدكتور عبدالعزيز الحوشان، المدير التنفيذي، بالسيد مايك برونزل، نائب الرئيس لتطوير الأعمال العالمية في NFPA، والسيد إبراهيم لاري، الرئيس التنفيذي لـ SIBEC، والسيدة دانا كمال، مديرة التطوير الدولي للشرق الأوسط في NFPA. كما شهد الحدث مشاركة اللواء البحري المتقاعد عبدالله بن ناصر أباالخيل، مستشار بحري لدى مكتب آمنون للاستشارات الأمنية، والسيدة لبنى الجندي، مديرة العلاقات والاتصالات. وتركزت النقاشات حول استكشاف سبل وآفاق التعاون",
        "مر عام مليء بالتقدم والتطور، اتسم بالنمو المتقدم والمساهمات المستمرة. حفظ الله وطننا وقائد مسيرتنا، ودامت راية بلادنا عالية في ظل قيادتنا الرشيدة",
        "قام عدد من المستشارين بزيارة معرض الأمن والسلامة الدولي 'إنترسك' بالرياض، حيث اطلعوا على أحدث الابتكارات والحلول التقنية في مجالات الأمن السيبراني والحماية. كما استعرضوا التقنيات المتقدمة التي تهدف إلى تعزيز أمن المرافق الحيوية والسلامة العامة",
        "يتشرف مكتب آمنون للاستشارات الأمنية بالمشاركة في الندوة الثالثة لأمن المرافق الحيوية، والتي ستُعقد في صلالة، سلطنة عمان، تحت عنوان 'أمن الموانئ والمرافق الحيوية'. سيقدم مستشار بحري، اللواء البحري المتقاعد عبدالله بن ناصر أباالخيل، عرضًا تقديميًا حول أمن الموانئ",
        "يتشرف مكتب آمنون للاستشارات الأمنية بتقديم ورقة عمل خلال ندوة 'أمن المرافق الحيوية'، والتي ستُعقد في صلالة، سلطنة عمان، تحت عنوان 'أمن الموانئ والمرافق البحرية'. ستتناول الورقة أمن المطارات، وسيقدمها اللواء المتقاعد يوسف بن أحمد القحطاني",
        "يتشرف مكتب آمنون للاستشارات الأمنية بالمشاركة في الندوة الثالثة بعنوان 'أمن المرافق الحيوية'، والتي ستعقد في صلالة، سلطنة عمان، تحت عنوان 'أمن الموانئ والمرافق البحرية'. سنقدم ورقة عمل حول 'دور الأمن الرقمي في حماية بيانات المرافق الحيوية'، يقدمها اللواء الدكتور المتقاعد بركة بن زامل الحوشان",
        "يتشرف مكتب آمنون للاستشارات الأمنية بالمشاركة في الندوة الثالثة لأمن وسلامة المرافق الحيوية، حيث سيقدم ورقتي عمل يتم عرضهما من قِبل نخبة من المستشارين الأمنيين. ستعقد الندوة في محافظة ظفار، سلطنة عمان، خلال الفترة من 2 إلى 4 سبتمبر",
      ]
  }
};

const NewsSlider = ({ lang }) => {
  const [index, setIndex] = useState(0);
  const images = newsData[lang].images;
  const texts = newsData[lang].texts;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div id="news" className="newsSection">
      <h2 style={{ color: '#001f3f' }}>{lang === 'ar' ? 'أخبار أمنون' : 'Amnoon News'}</h2>
      <div className="news">
        <h2 id="newsText" className="fade-in">{texts[index]}</h2>
        <img id="newsImage" className="fade-in" src={images[index]} alt="News" />
      </div>
    </div>
  );
};

export default NewsSlider;