/**
* Language switcher: Arabic (default) and English
*/

(function() {
  "use strict";

  const STORAGE_KEY = 'site-lang';
  const DEFAULT_LANG = 'ar';

  const translations = {
    ar: {
      'meta.title': 'الشركة المصرية اليابانية',
      'meta.description': 'الشركة المصرية اليابانية للاستيراد والتصدير: مولدات وكلاركات ومواتير ومعدات ثقيلة وقطع غيار سيارات مستعملة، مستوردة مباشرة من الخارج.',
      'lang.switch': 'English',
      'site.name': 'الشركة المصرية اليابانية',

      'nav.home': 'الرئيسية',
      'nav.about': 'من نحن',
      'nav.equipment': 'معداتنا',
      'nav.contact': 'تواصل معنا',

      'hero.eyebrow': 'الشركة المصرية اليابانية للاستيراد والتصدير',
      'hero.title': 'مرحبًا بكم في موقعنا',
      'hero.text': 'نحن شركة موثوقة نفخر بتوفير قطع غيار سيارات مستعملة عالية الجودة منذ عام 1980، مستوردة مباشرة من اليابان والصين، بالإضافة إلى مولدات وكلاركات ومعدات ثقيلة مستعملة بحالة ممتازة.',
      'hero.whatsapp': 'راسلنا على واتساب',
      'hero.email': 'راسلنا بالبريد',

      'brands.text': 'هوندا، دينيو، كاتربيلر، كمنز، إيرمان، دويتز وغيرها — مولدات وكلاركات ومواتير ومعدات مستعملة تم فحصها وجاهزة للتشغيل الفوري.',

      'about.label': 'من نحن',
      'about.title': 'قطع غيار سيارات ومعدات مستعملة عالية الجودة، مباشرة من اليابان والصين',
      'about.text': 'نحن مورد موثوق لقطع غيار السيارات المستعملة في مصر، نستورد قطعًا عالية الجودة مباشرة من اليابان والصين. كما نستورد المولدات والكلاركات والمواتير والمعدات الثقيلة المستعملة. هدفنا توفير قطع غيار وماكينات بأسعار مناسبة وأداء عالٍ يمكن الاعتماد عليه، لتلبية احتياجات الميكانيكيين والورش والشركات في جميع أنحاء البلاد.',
      'about.more': 'شاهد معداتنا',
      'about.box1.title': 'استيراد عالمي',
      'about.box1.text': 'نتعاون مع كبار المصنعين في اليابان والصين لنقدم لك أفضل قطع غيار السيارات بأسعار تنافسية.',
      'about.box2.title': 'خبرة محلية',
      'about.box2.text': 'مقرنا في مصر، ونفهم السوق المحلي جيدًا ونوفر قطعًا تناسب احتياجات العملاء المصريين.',
      'about.box3.title': 'ضمان الجودة',
      'about.box3.text': 'جميع منتجاتنا مختارة ومختبرة بعناية لضمان مطابقتها للمعايير الدولية في المتانة والأداء.',
      'about.box4.title': 'دعم متميز',
      'about.box4.text': 'فريقنا متاح دائمًا لمساعدتك في اختيار القطع المناسبة وتقديم المساعدة متى احتجت إليها.',

      'equipment.title': 'معداتنا',
      'equipment.subtitle': 'مولدات ومعدات ثقيلة مستعملة بحالة ممتازة، مستوردة مباشرة من الخارج.',
      'equipment.silentDiesel': 'مولد ديزل صامت',
      'equipment.soundproof90': '90 كيلو فولت أمبير كاتم للصوت',
      'equipment.dieselGenset': 'مولد ديزل',
      'equipment.genset': 'مولد كهربائي',
      'equipment.forklift': 'كلارك 2.5 طن',
      'equipment.lb.honda': 'مولد ديزل صامت هوندا',
      'equipment.lb.denyo': 'دينيو 90 كيلو فولت أمبير كاتم للصوت',
      'equipment.lb.cat3406': 'مولد ديزل كاتربيلر CAT 3406',
      'equipment.lb.cummins': 'مولد ديزل كمنز',
      'equipment.lb.fgwilson': 'مولد F.G. Wilson',
      'equipment.lb.fgwilsonP500': 'مولد F.G. Wilson P500',
      'equipment.lb.airman': 'إيرمان SDG80S',
      'equipment.lb.komatsu': 'كلارك كوماتسو 2.5 طن',
      'equipment.lb.deutzDiesel': 'مولد ديزل دويتز',
      'equipment.lb.deutz': 'مولد دويتز',
      'equipment.lb.perkins': 'مولد ديزل بحري بيركنز',
      'equipment.lb.cat3306': 'مولد ديزل كاتربيلر CAT 3306',
      'equipment.note': 'المخزون يتغير باستمرار. اتصل بنا أو راسلنا لمعرفة المتاح اليوم.',

      'cta.title': 'اعثر على الماكينة أو القطعة المناسبة اليوم',
      'cta.text': 'تبحث عن مولد مستعمل أو كلارك أو قطع غيار سيارات عالية الجودة مستوردة مباشرة من اليابان والصين؟ لدينا ما تحتاجه، بمنتجات موثوقة وأسعار لا تُنافس وتوصيل سريع لجميع أنحاء مصر.',
      'cta.button': 'تواصل معنا',

      'contact.title': 'تواصل معنا',
      'contact.address': 'العنوان',
      'contact.country': 'مصر',
      'contact.addressLine': 'طريق رأس البر القديم، السناني، مدينة دمياط، مصر',
      'contact.call': 'اتصل بنا',
      'contact.whatsappNote': '(واتساب)',
      'contact.email': 'راسلنا',
      'contact.hours': 'مواعيد العمل',
      'contact.days': 'السبت - الخميس',
      'contact.time': '9:00 صباحًا - 5:00 مساءً',

      'footer.about': 'نقدم التميز في كل منتج. مهمتنا توفير قطع غيار ومعدات عالية الجودة يمكن الاعتماد عليها لتلبية احتياجاتك. ومع التزامنا بالجودة ورضا العملاء، نضمن لك الأفضل في كل مرة.',
      'footer.contact': 'تواصل معنا',
      'footer.phone': 'الهاتف:',
      'footer.whatsapp': 'واتساب:',
      'footer.email': 'البريد الإلكتروني:'
    },

    en: {
      'meta.title': 'The Egyptian Japanese Company',
      'meta.description': 'The Egyptian Japanese Company for Import and Export: used generators, forklifts, engines, heavy equipment and car parts, imported directly from overseas.',
      'lang.switch': 'العربية',
      'site.name': 'The Egyptian Japanese Company',

      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.equipment': 'Equipment',
      'nav.contact': 'Contact',

      'hero.eyebrow': 'Egyptian Japanese Import & Export Co.',
      'hero.title': 'Welcome to Our Website',
      'hero.text': 'We are a trusted company, proudly providing high-quality used car parts since 1980, sourced directly from Japan and China, along with used generators, forklifts and heavy equipment in excellent condition.',
      'hero.whatsapp': 'WhatsApp Us',
      'hero.email': 'Email Us',

      'brands.text': 'Honda · Denyo · Caterpillar · Cummins · Airman · Deutz & more — generators, forklifts, engines and equipment, inspected and ready to run.',

      'about.label': 'About Us',
      'about.title': 'High-Quality Used Car Parts and Equipment, Direct from Japan and China',
      'about.text': 'We are a trusted supplier of used car parts in Egypt, sourcing premium-quality components directly from Japan and China. We also import used generators, forklifts, engines and heavy equipment. Our goal is to provide affordable, reliable, and high-performance parts and machines to meet the needs of mechanics, workshops, and businesses across the country.',
      'about.more': 'See Our Equipment',
      'about.box1.title': 'Global Sourcing',
      'about.box1.text': 'We partner with leading manufacturers in Japan and China to bring you the best car parts at competitive prices.',
      'about.box2.title': 'Local Expertise',
      'about.box2.text': 'Based in Egypt, we understand the local market and provide parts tailored to the needs of Egyptian customers.',
      'about.box3.title': 'Quality Assurance',
      'about.box3.text': 'All our products are carefully selected and tested to ensure they meet international standards for durability and performance.',
      'about.box4.title': 'Exceptional Support',
      'about.box4.text': 'Our team is always available to help you choose the right parts and provide assistance whenever needed.',

      'equipment.title': 'Our Equipment',
      'equipment.subtitle': 'Used generators and heavy equipment in excellent condition, imported directly from overseas.',
      'equipment.silentDiesel': 'Silent Diesel Generator',
      'equipment.soundproof90': '90 kVA Soundproof',
      'equipment.dieselGenset': 'Diesel Generator Set',
      'equipment.genset': 'Generator Set',
      'equipment.forklift': '2.5T Forklift',
      'equipment.lb.honda': 'Honda Silent Diesel Generator',
      'equipment.lb.denyo': 'Denyo 90 kVA Soundproof',
      'equipment.lb.cat3406': 'Caterpillar CAT 3406 Diesel Generator Set',
      'equipment.lb.cummins': 'Cummins Diesel Generator Set',
      'equipment.lb.fgwilson': 'F.G. Wilson Generator Set',
      'equipment.lb.fgwilsonP500': 'F.G. Wilson P500 Generator Set',
      'equipment.lb.airman': 'Airman SDG80S',
      'equipment.lb.komatsu': 'Komatsu 2.5T Forklift',
      'equipment.lb.deutzDiesel': 'Deutz Diesel Generator Set',
      'equipment.lb.deutz': 'Deutz Generator Set',
      'equipment.lb.perkins': 'Perkins Marine Diesel Generator Set',
      'equipment.lb.cat3306': 'Caterpillar CAT 3306 Diesel Generator Set',
      'equipment.note': 'Stock changes often. Call or message us for what is available today.',

      'cta.title': 'Find the Right Machine or Part Today',
      'cta.text': "Looking for a used generator, a forklift, or high-quality car parts sourced directly from Japan and China? We've got you covered, with reliable products at unbeatable prices and fast delivery across Egypt.",
      'cta.button': 'Get in Touch',

      'contact.title': 'Contact',
      'contact.address': 'Address',
      'contact.country': 'EGYPT',
      'contact.addressLine': 'RAS EL BAR OLD ROAD, ALSENANI DAMIETTA CITY EGYPT',
      'contact.call': 'Call Us',
      'contact.whatsappNote': '(WhatsApp)',
      'contact.email': 'Email Us',
      'contact.hours': 'Open Hours',
      'contact.days': 'Saturday - Thursday',
      'contact.time': '9:00 AM - 5:00 PM',

      'footer.about': 'We deliver excellence with every product. Our mission is to provide high-quality, reliable car parts and equipment that meet your needs. With a commitment to quality and customer satisfaction, we ensure you get the best every time.',
      'footer.contact': 'Contact Us',
      'footer.phone': 'Phone:',
      'footer.whatsapp': 'WhatsApp:',
      'footer.email': 'Email:'
    }
  };

  function getSavedLang() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && translations[saved]) return saved;
    } catch (e) {}
    return DEFAULT_LANG;
  }

  function saveLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
  }

  function setBootstrapDirection(isRtl) {
    const ltr = document.getElementById('bootstrap-ltr');
    const rtl = document.getElementById('bootstrap-rtl');
    if (ltr) ltr.disabled = isRtl;
    if (rtl) rtl.disabled = !isRtl;
  }

  function applyLanguage(lang) {
    const dict = translations[lang] || translations[DEFAULT_LANG];
    const isRtl = lang === 'ar';
    const html = document.documentElement;

    html.lang = lang;
    html.dir = isRtl ? 'rtl' : 'ltr';
    setBootstrapDirection(isRtl);

    document.title = dict['meta.title'];
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', dict['meta.description']);

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const value = dict[el.getAttribute('data-i18n')];
      if (value !== undefined) el.textContent = value;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const value = dict[el.getAttribute('data-i18n-placeholder')];
      if (value !== undefined) {
        el.setAttribute('placeholder', value);
        el.setAttribute('aria-label', value);
      }
    });

    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const value = dict[el.getAttribute('data-i18n-title')];
      if (value !== undefined) el.setAttribute('data-title', value);
    });

    const switcher = document.getElementById('lang-switch');
    if (switcher) {
      const other = isRtl ? 'en' : 'ar';
      switcher.setAttribute('lang', other);
      switcher.setAttribute('aria-label', isRtl ? 'Switch to English' : 'التبديل إلى العربية');
    }

    document.dispatchEvent(new CustomEvent('languagechange', { detail: { lang } }));
  }

  window.setLanguage = function(lang) {
    if (!translations[lang]) return;
    saveLang(lang);
    applyLanguage(lang);
  };

  const switcher = document.getElementById('lang-switch');
  if (switcher) {
    switcher.addEventListener('click', () => {
      window.setLanguage(document.documentElement.lang === 'ar' ? 'en' : 'ar');
    });
  }

  applyLanguage(getSavedLang());

})();
