import React from 'react';

const sectionContent = {
  industrial: {
    en: {
      title: 'Industrial Sectors',
      items: [
        'Oil and gas sector', 'Chemical and petrochemical sector', 'Communications and technology sector',
        'Military industry sector', 'Metal industries sector', 'Financial and banking sectors',
        'Port sector', 'Railway sector', 'Electric and water sector', 'Airport sector'
      ]
    },
    ar: {
      title: 'القطاعات الصناعية',
      items: [
        'قطاع النفط والغاز', 'قطاع الكيماويات والبتروكيماويات', 'قطاع الاتصالات والتقنية',
        'قطاع الصناعات العسكرية', 'قطاع الصناعات المعدنية', 'القطاعات المالية والمصرفية',
        'قطاع الموانئ', 'قطاع السكك الحديدية', 'قطاع الكهرباء والمياه', 'قطاع المطارات'
      ]
    }
  },
  maritime: {
    en: {
      title: 'Maritime Security',
      items: [
        'Maritime security consulting', 'Security assessment of the port facility',
        'Security risk assessment of port facilities', 'Security plan for the port facility according to ISPS CODE'
      ]
    },
    ar: {
      title: 'الأمن البحري',
      items: [
        'استشارات الأمن البحري', 'تقييم الأمن للمرافق المينائية',
        'تقييم المخاطر الأمنية للمرافق المينائية', 'خطة الأمن للمرفق المينائي وفقاً لمدونة ISPS'
      ]
    }
  },
  aviation: {
    en: {
      title: 'Aviation Sector',
      items: [
        'Conduct of security risk assessment', 'Review and update of procedures in accordance with ICAO regulations',
        'Development of a security and emergency response plan', 'Audit and update of security responsibilities',
        'Enhancing staff skills', 'Provision of security advisory services to improve airport security',
        'Other security measures requested by the Civil Aviation Authority'
      ]
    },
    ar: {
      title: 'قطاع الطيران',
      items: [
        'إجراء تقييم المخاطر الأمنية', 'مراجعة وتحديث الإجراءات وفقاً للوائح ICAO',
        'تطوير خطة الأمن والاستجابة للطوارئ', 'تدقيق وتحديث المسؤوليات الأمنية',
        'تعزيز مهارات الموظفين', 'تقديم الخدمات الاستشارية الأمنية لتحسين أمن المطار',
        'التدابير الأمنية الأخرى التي تطلبها هيئة الطيران المدني'
      ]
    }
  },
  digital: {
    en: {
      title: 'Digital Security',
      items: ['Artificial intelligence', 'Project management', 'Digital transformation', 'Cybersecurity']
    },
    ar: {
      title: 'الأمن الرقمي',
      items: ['الذكاء الاصطناعي', 'إدارة المشاريع', 'التحول الرقمي', 'الأمن السيبراني']
    }
  },
  training: {
    en: {
      title: 'Training Consultations',
      items: [
        'Training programme development consultations', 'Audit of training programmes and kits',
        'Review of training policies and procedures', 'Selection of training competencies'
      ]
    },
    ar: {
      title: 'الاستشارات التدريبية',
      items: [
        'استشارات تطوير البرامج التدريبية', 'تدقيق البرامج والحقائب التدريبية',
        'مراجعة سياسات وإجراءات التدريب', 'اختيار الكفاءات التدريبية'
      ]
    }
  },
  contact: {
    en: {
      title: 'Contact Us',
      items: [
        'Saudi Arabia: King Fahad Road, Al-Khobar 31952',
        'Email: info@amnoonsa.com',
        'Phone: +966 13 330 8588, +966 56 850 9999',
        'Sultanate of Oman: Muscat - Wattaya',
        'Phone: +968 97 998 926',
        'India: Hyderabad - Regus Office 115 - Midtown building - Hyderabad',
        'Phone: +917 99 587 7629'
      ]
    },
    ar: {
      title: 'اتصل بنا',
      items: [
        'المملكة العربية السعودية: طريق الملك فهد، الخبر 31952',
        'البريد الإلكتروني: info@amnoonsa.com',
        'الهاتف: 8588 330 13 966+، 9999 850 56 966+',
        'سلطنة عمان: مسقط - الوطية',
        'الهاتف: 926 998 97 968+',
        'الهند: حيدر آباد - مكتب ريجس 115 - مبنى ميدتاون',
        'الهاتف: 7629 587 99 91+'
      ]
    }
  }
};

const Section = ({ lang, section }) => {
  const content = sectionContent[section][lang];
  return (
    <section id={section} data-aos="fade-up">
{section !== 'contact' && (
  <div
    className="background-image"
    style={{
      backgroundImage: `url(/img/main/${
        section === 'digital'
          ? 'DigitalTransformation.jpg'
          : section === 'aviation'
          ? 'airport.jpg'
          : section === 'maritime'
          ? 'maritimeSecurity.jpg'
          : 'class.png'
      })`
    }}
    data-aos="fade-in"
  />
)}      <h2 data-aos="fade-down">{content.title}</h2>
      <ul>
        {content.items.map((item, idx) => (
          <li key={idx} className="stagger-item" data-aos="fade-right" data-aos-delay={(idx + 1) * 100}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default Section;