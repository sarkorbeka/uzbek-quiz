window.QUIZ_CONFIG = {
  title: "Test 1 - Buxgalteriya hisobi",
  description: "Savollarga javob bering va yakunda natijangizni tekshiring.",
  timeLimitMinutes: 180, // 3 часа (10801 секунда из iSpring)
  passingPercent: 80,    // из iSpring
  allowBackNavigation: true,
  showAnswersAfterFinish: true
};

window.QUIZ_QUESTIONS = [
  {
    id: 1,
    type: "multipleChoiceText",
    question: "Asosiy ishlab chiqarish xodimiga ish haqini hisoblash qaysi yozuvda aks ettiriladi? Ro'yxatdan tanlang.",
    answers: {
      debit: ["2010", "9420", "6710", "6990"],
      credit: ["2010", "6710", "6990", "5110"]
    },
    correctDebit: 0,
    correctCredit: 1,
    explanation: "Ish haqini hisoblash Dt 2010 Kt 6710 provodkasi bilan aks ettiriladi.",
    points: 2
  },
  {
    id: 2,
    type: "single",
    question: "Quyidagi buxgalteriya provodkasi nimani anglatadi? Dt 6310 'Xaridorlar va buyurtmachilardan olingan avanslar' Kt 4010 'Xaridorlar va buyurtmachilardan olinadigan schyotlar'",
    answers: [
      "Tovarlar (ishlar, xizmatlar) uchun berilgan avans aks ettirilgan",
      "Tovarlar (ishlar, xizmatlar) uchun olingan avans aks ettirilgan",
      "Xaridorlar va buyurtmachilardan avval olingan avans hisobga olingan",
      "Tovarlar (ishlar, xizmatlar) uchun daromad tan olingan"
    ],
    correct: [2],
    explanation: "Bu provodka avval olingan avansning hisobga olinishini anglatadi.",
    points: 3
  },
  {
    id: 3,
    type: "single",
    question: "Bank ko'chirmasida pul tushumlari qanday yoziladi?",
    answers: [
      "Shaxsiy hisobning debeti bo'yicha",
      "Ko'chirmaning o'ng yuqori burchagida",
      "Shaxsiy hisobning krediti bo'yicha",
      "Ko'chirmaning chap yuqori burchagida"
    ],
    correct: [2],
    explanation: "Bank ko'chirmasida tushumlar shaxsiy hisobning krediti bo'yicha yoziladi.",
    points: 1
  },
  {
    id: 4,
    type: "text",
    question: "Mahsulot ishlab chiqarish uchun quyidagi xarajatlar qilindi: Materiallar sarflandi - 900, Elektr energiyasi ishlatildi - 170, Asosiy ishlab chiqarish xodimlariga ish haqi hisoblandi - 400, Ijtimoiy soliq hisoblandi - 100, Umumishlab chiqarish xarajatlari - 70, Ishlab chiqarish uskunasiga amortizatsiya hisoblandi - 220, Oy boshidagi tugallanmagan ishlab chiqarish - 50, Oy oxiridagi tugallanmagan ishlab chiqarish - 130. Barcha hisob-kitoblarni Excelda yaxlitlanmasdan bajaring. Natijani butun sonlarda kiriting. Chiqarilgan mahsulot tannarxini hisoblang.",
    correctText: ["1780"],
    explanation: "Tannarx = 900 + 170 + 400 + 100 + 70 + 220 + 50 - 130 = 1780.",
    points: 5
  },
  {
    id: 5,
    type: "multipleChoiceText",
    question: "Jismoniy shaxslardan olinadigan daromad solig'ini (JShDS) hisoblash qaysi yozuvda aks ettiriladi? Ro'yxatdan tanlang.",
    answers: {
      debit: ["6520", "64110", "6710", "9420"],
      credit: ["6520", "6710", "6410", "9420"]
    },
    correctDebit: 2,
    correctCredit: 2,
    explanation: "JShDS hisoblash Dt 6710 Kt 6410 provodkasi bilan aks ettiriladi.",
    points: 2
  },
  {
    id: 6,
    type: "multipleChoiceText",
    question: "Qarzni to'lash uchun xodimdan qarzning bir qismini ushlab qolish qaysi yozuvda aks ettiriladi? Ro'yxatdan tanlang.",
    answers: {
      debit: ["2010", "9420", "6710", "4720"],
      credit: ["2010", "6710", "4720", "5110"]
    },
    correctDebit: 2,
    correctCredit: 2,
    explanation: "Qarzni ushlab qolish Dt 6710 Kt 4720 provodkasi bilan aks ettiriladi.",
    points: 2
  },
  {
    id: 7,
    type: "multipleChoiceText",
    question: "'Xona ijarasi uchun hisob-faktura berildi va imzolandi (ijara - asosiy faoliyat turi emas)' operatsiyasi qaysi buxgalteriya provodkasida aks ettiriladi? Ro'yxatdan tanlang.",
    answers: {
      debit: ["9420", "4010", "9350", "4820", "9010"],
      credit: ["2010", "4010", "9010", "9350", "4820"]
    },
    correctDebit: 3,
    correctCredit: 3,
    explanation: "Ijara (asosiy faoliyat turi emas) Dt 4820 Kt 9350 provodkasi bilan aks ettiriladi.",
    points: 2
  },
  {
    id: 8,
    type: "multipleChoiceText",
    question: "Asosiy vositaning tiklash (dastlabki) qiymatini oshirib baholash qaysi yozuvda aks ettiriladi? Ro'yxatdan tanlang.",
    answers: {
      debit: ["0100", "0200", "9420", "8510"],
      credit: ["0100", "0200", "8510", "9430"]
    },
    correctDebit: 0,
    correctCredit: 2,
    explanation: "Asosiy vositani oshirib baholash Dt 0100 Kt 8510 provodkasi bilan aks ettiriladi.",
    points: 2
  },
  {
    id: 9,
    type: "text",
    question: "Korxona 2 100 ga ofis mebellari to'plamini sotadi, unga amortizatsiya to'liq hisoblangan. Sotilayotgan mebellar to'plamining tiklash qiymati hisoblangan amortizatsiya summasiga teng va 8 800 ni tashkil qiladi, qayta baholash saldosi -254. Barcha hisob-kitoblarni Excelda yaxlitlanmasdan bajaring. Natijani butun sonlarda kiriting. Asosiy vositalarni chiqarib tashlashdan moliyaviy natijani aniqlang.",
    correctText: ["2354"],
    explanation: "Moliyaviy natija = 2100 + 254 = 2354.",
    points: 4
  },
  {
    id: 10,
    type: "multipleChoiceText",
    question: "Korxona 'NORMA' MChJ bilan 2022 yil uchun 'Amaliy buxgalteriya' dasturiy mahsulotini o'rnatish bo'yicha shartnoma tuzdi. 2021 yil dekabr oyida 100% oldindan to'lov amalga oshirildi. Ro'yxatdan buxgalteriya provodkalarini tanlang.",
    answers: {
      prepayment: ["9420-5110", "4330-5110", "3190-5110", "9110-5110"],
      expense: ["9420-5110", "3190-9420", "8710-3190", "9420-3190"]
    },
    correctPrepayment: 2,
    correctExpense: 3,
    explanation: "Oldindan to'lov: Dt 3190 Kt 5110. Xarajatlarni hisobdan chiqarish: Dt 9420 Kt 3190.",
    points: 4
  },
  {
    id: 11,
    type: "text",
    question: "Korxona yuk tashish uchun yuk avtomobilini sotib oldi, dastlabki qiymati 4000. Xizmat muddati 5 yil. Avtomobil 5 yil davomida qila oladigan taxminiy umumiy yurishi 40 km ni tashkil qiladi. Birinchi yilda haqiqiy yurish -10 km, 2-yilda - 8 km, 3-yilda - 9 km, 4-yilda - 7 km, 5-yilda - 7 km. Hisob siyosatiga ko'ra, avtomobilga amortizatsiya ishlab chiqarish usuli bilan hisoblanadi. Barcha hisob-kitoblarni Excelda yaxlitlanmasdan bajaring. Natijani butun sonlarda kiriting. Har bir yil uchun yillik ajratmalar summasini hisoblang.",
    correctText: ["1000", "800", "900", "700", "600"],
    inputLabels: ["1-yil", "2-yil", "3-yil", "4-yil", "5-yil"],
    explanation: "1-yil = 4000/40*10 = 1000, 2-yil = 4000/40*8 = 800, 3-yil = 4000/40*9 = 900, 4-yil = 4000/40*7 = 700, 5-yil = 4000/40*7 = 600.",
    points: 8
  },
  {
    id: 12,
    type: "text",
    question: "Ma'muriyat xodimiga 2022 yil yanvar oyi uchun hisoblandi: ish haqi -1 950 000 so'm, ovqat va yo'l haqi uchun qo'shimcha to'lov - 200 000 so'm, bola tug'ilishi munosabati bilan moddiy yordam 3 500 000. Xodimdan har oy korxona tomonidan Toshkent shahridagi OTMda o'g'lining o'qishi uchun berilgan qarzni to'lash uchun 300 000 ushlab turiladi. EHM = 822 000 so'm. Barcha hisob-kitoblarni Excelda yaxlitlanmasdan bajaring. Natijani butun sonlarda kiriting. Yanvar oyi uchun hisoblang: hisoblangan daromad summasi, JShDSga tortiladigan daromad, hisoblangan JShDS summasi, xodimning INPSga ajratmalar summasi, byudjetga to'lanishi kerak bo'lgan JShDS summasi, ijtimoiy soliq summasi (12%), to'lanishi kerak bo'lgan summa.",
    correctText: ["5650000", "1881160", "225739", "2257", "223482", "258000", "5124261"],
    inputLabels: ["Hisoblangan daromad", "JShDSga tortiladigan daromad", "Hisoblangan JShDS", "INPSga ajratmalar", "Byudjetga JShDS", "Ijtimoiy soliq", "To'lanishi kerak"],
    explanation: "Daromad = 1950000+200000+3500000 = 5650000. JShDS = 225739 va h.k.",
    points: 10
  },
  {
    id: 13,
    type: "text",
    question: "2022 yil 01.01 holatiga ko'ra korxona balansida stanok mavjud, stanokning tiklash qiymati 7 000, hisoblangan eskirish 1 400 ni tashkil etdi, uzoq muddatli aktivlarni qayta baholash bo'yicha tuzatish 754,2 ni tashkil etdi. 2021 yil uchun stanokni qayta baholashni o'tkazing. Qayta baholash indeksi - 1,131. Barcha hisob-kitoblarni Excelda yaxlitlanmasdan bajaring. Natijani o'nli kasrdan keyin 1 belgigacha yaxlitlang. Aniqlang: stanok qiymatini oshirib baholash summasi, eskirishni oshirib baholash summasi, qayta baholashdan keyingi stanokning qoldiq qiymati, 2022 yil 01.01 holatiga qayta baholash bo'yicha tuzatish summasi.",
    correctText: ["917.0", "183.4", "6333.6", "1487.8"],
    inputLabels: ["Qiymatni oshirib baholash", "Eskirishni oshirib baholash", "Qoldiq qiymat", "Qayta baholash tuzatishi"],
    explanation: "Qayta baholash indeksi 1,131 bo'yicha hisob-kitoblar.",
    points: 6
  },
  {
    id: 14,
    type: "text",
    question: "Xodim (ish staji - 10 yil) 2022 yil 8 yanvardan 12 yanvargacha (5 ish kuni) vaqtincha mehnatga qobiliyatsizlik varaqasini taqdim etdi. Uning yanvar oyidagi lavozim maoshi 1 700 000. Oldingi 12 oy (2021 yil yanvar-dekabr) davomida u quyidagi qo'shimcha to'lovlarni oldi: ishlab chiqarish mukofotlari - 1 200 000, professionallik uchun qo'shimcha to'lovlar - 600 000, qishloq xo'jaligi mahsulotlari uchun moddiy yordam - 800 000. Korxonada besh kunlik ish haftasi. 2022 yil yanvar oyida 21 ish kuni bor edi. Barcha hisob-kitoblarni Excelda yaxlitlanmasdan bajaring. Natijani butun sonlarda kiriting. Hisoblang: vaqtincha mehnatga qobiliyatsizlik nafaqasini hisoblash uchun qabul qilinadigan o'rtacha oylik ish haqi summasi, o'rtacha kunlik ish haqi summasi, umumiy ish stajiga bog'liq bo'lgan nafaqa foizi, vaqtincha mehnatga qobiliyatsizlik nafaqasi summasi.",
    correctText: ["1850000", "88095", "80", "352381"],
    inputLabels: ["O'rtacha oylik", "O'rtacha kunlik", "Nafaqa foizi", "Nafaqa summasi"],
    explanation: "O'rtacha oylik = (1700000*12 + 1200000 + 600000) / 12 = 1850000. O'rtacha kunlik = 1850000 / 21 = 88095. Staj 10 yil = 80%. Nafaqa = 88095 * 5 * 0.8 = 352381.",
    points: 6
  },
  {
    id: 15,
    type: "text",
    question: "Xodimga 2022 yil 5 yanvardan boshlab 2021 yil yanvar-dekabr davri uchun 24 ish kuniga navbatdagi mehnat ta'tili berildi. Uning yanvar oyidagi lavozim maoshi 1 900 000. Oldingi 12 oy (2021 yil yanvar-dekabr) davomida u quyidagi qo'shimcha to'lovlarni oldi: ishlab chiqarish mukofotlari - 2 400 000, professionallik uchun qo'shimcha to'lovlar - 400 000, bola tug'ilishi munosabati bilan moddiy yordam -2 100 000, yo'l haqi va ovqatlanish uchun kompensatsiya to'lovlari -1800000. Korxonada besh kunlik ish haftasi. Barcha hisob-kitoblarni Excelda yaxlitlanmasdan bajaring. Natijani butun sonlarda kiriting. Hisoblang: mehnat ta'tilini hisoblash uchun qabul qilinadigan o'rtacha oylik ish haqi summasi, ta'til to'lovi summasi.",
    correctText: ["2283333", "2157480"],
    inputLabels: ["O'rtacha oylik", "Ta'til to'lovi"],
    explanation: "O'rtacha oylik = (1900000*12 + 2400000 + 400000) / 12 = 2283333. Ta'til to'lovi = 2283333 / 25.4 * 24 = 2157480.",
    points: 4
  },
  {
    id: 16,
    type: "multiple",
    question: "Hisob siyosatida nimani aks ettirish kerak? To'g'ri javoblarni tanlang.",
    answers: [
      "Ishchi schyotlar rejasi",
      "Soliq hisobot shakllarini ishlab chiqish",
      "Eng kam ish haqi miqdorini o'zgartirish",
      "Ishlab chiqarishga chiqarilgan Tovor-moddiy zaxiralarni baholash usuli",
      "Amortizatsiyani hisoblash usullari"
    ],
    correct: [0, 3, 4],
    explanation: "Hisob siyosatida ishchi schyotlar rejasi, TMZ baholash usuli va amortizatsiya usullari aks ettiriladi.",
    points: 3
  },
  {
    id: 17,
    type: "text",
    question: "2022 yil 15 fevralda korxona 3 000 ga ofis mebellarini sotib oldi. Yillik amortizatsiya normasi 15% ni tashkil qiladi. Hisob siyosatiga ko'ra, ofis mebellariga amortizatsiya teng usulda hisoblanadi. Barcha hisob-kitoblarni Excelda yaxlitlanmasdan bajaring. Natijani butun sonlarda kiriting. 2022 yil uchun amortizatsiya ajratmalari summasini hisoblang.",
    correctText: ["375"],
    explanation: "Amortizatsiya = 3000 * 15% / 12 * 10 = 375.",
    points: 3
  },
  {
    id: 18,
    type: "single",
    question: "Vaqtincha mehnatga qobiliyatsizlik nafaqasidan qanday soliqlar va to'lovlar ushlab turiladi?",
    answers: [
      "Jismoniy shaxslardan olinadigan daromad solig'i",
      "Mulk solig'i",
      "Ijtimoiy soliq",
      "Kasaba uyushma badallari"
    ],
    correct: [0],
    explanation: "Vaqtincha mehnatga qobiliyatsizlik nafaqasidan faqat JShDS ushlab turiladi.",
    points: 2
  },
  {
    id: 19,
    type: "multipleChoiceText",
    question: "'Kredit bo'yicha foizlarni hisoblash' operatsiyasi qaysi buxgalteriya provodkasida aks ettiriladi? Ro'yxatdan tanlang.",
    answers: {
      debit: ["5110", "9420", "8710", "9610", "6920"],
      credit: ["5110", "9610", "6920", "8710", "9420"]
    },
    correctDebit: 3,
    correctCredit: 2,
    explanation: "Kredit foizlari Dt 9610 Kt 6920 provodkasi bilan aks ettiriladi.",
    points: 2
  },
  {
    id: 20,
    type: "single",
    question: "Mahsulot yetkazib berish bo'yicha bitta shartnomaga bir nechta hisob-faktura bo'lishi mumkinmi?",
    answers: [
      "Ha, agar advokat ruxsat bersa",
      "Yo'q, bu shartnoma-huquqiy intizomni buzish hisoblanadi",
      "Ha, bu mahsulot qismlarga (partiyalarga) bo'lib jo'natilgan taqdirda mumkin"
    ],
    correct: [2],
    explanation: "Mahsulot qismlarga bo'lib jo'natilganda bir nechta hisob-faktura bo'lishi mumkin.",
    points: 1
  },
  {
    id: 21,
    type: "multipleChoiceText",
    question: "Korxona - yetkazib beruvchi xaridorga mahsulotni jo'natdi. Shartnomaga ko'ra yetkazib berish shartlari 'o'zi olib ketish'. Ushbu operatsiyani buxgalteriya hisobida qanday aks ettirish kerak? Ro'yxatdan tanlang.",
    answers: {
      invoiceDebit: ["9010", "8710", "4010", "5110"],
      invoiceCredit: ["9010", "4010", "8710", "5110"],
      costDebit: ["2810", "2910", "9010", "9110", "8710"],
      costCredit: ["2810", "2910", "8710", "9110", "9010"]
    },
    correctInvoiceDebit: 2,
    correctInvoiceCredit: 0,
    correctCostDebit: 3,
    correctCostCredit: 0,
    explanation: "Hisob-faktura: Dt 4010 Kt 9010. Tannarx: Dt 9110 Kt 2810.",
    points: 4
  },
  {
    id: 22,
    type: "text",
    question: "Korxona ishlab chiqarish uskunasini sotib oldi, dastlabki qiymati 5000. Xizmat muddati 5 yil. Hisob siyosatiga ko'ra, ushbu uskunaga amortizatsiya ikki marta kamayuvchi qoldiq usuli bo'yicha hisoblanadi. Barcha hisob-kitoblarni Excelda yaxlitlanmasdan bajaring. Natijani butun sonlarda kiriting. Har bir yil uchun yillik ajratmalar summasini hisoblang.",
    correctText: ["2000", "1200", "720", "432", "648"],
    inputLabels: ["1-yil", "2-yil", "3-yil", "4-yil", "5-yil"],
    explanation: "1-yil = 5000*40% = 2000, 2-yil = (5000-2000)*40% = 1200, 3-yil = (3000-1200)*40% = 720, 4-yil = (1800-720)*40% = 432, 5-yil = 1080-432 = 648.",
    points: 6
  },
  {
    id: 23,
    type: "multipleChoiceText",
    question: "Kassada kamomad aniqlandi. Buxgalter qanday provodkalarni kiritishi kerak? Ro'yxatdan tanlang.",
    answers: {
      debit: ["5010", "9420", "5910", "8710", "4730"],
      credit: ["5010", "8710", "5910", "4730", "9420"]
    },
    correctDebit: 2,
    correctCredit: 0,
    explanation: "Kamomad Dt 5910 Kt 5010 provodkasi bilan aks ettiriladi.",
    points: 2
  },
  {
    id: 24,
    type: "multipleChoiceText",
    question: "Tayyor mahsulotni omborga topshirish qaysi yozuvda aks ettiriladi? Ro'yxatdan tanlang.",
    answers: {
      debit: ["2010", "2810", "5110", "1010"],
      credit: ["2010", "1010", "2810", "5110"]
    },
    correctDebit: 1,
    correctCredit: 0,
    explanation: "Tayyor mahsulotni omborga topshirish Dt 2810 Kt 2010 provodkasi bilan aks ettiriladi.",
    points: 2
  },
  {
    id: 25,
    type: "single",
    question: "Bosh buxgalter kassir lavozimini birlashtira oladimi?",
    answers: [
      "Mumkin",
      "Mumkin emas",
      "Kichik korxonalar va mikrofirmalarda joiz"
    ],
    correct: [2],
    explanation: "Kichik korxonalar va mikrofirmalarda bosh buxgalter kassir lavozimini birlashtirishi mumkin.",
    points: 1
  },
  {
    id: 26,
    type: "multipleChoiceText",
    question: "Ma'muriy-boshqaruv xodimlarining ish haqi fondidan (IHF) 12% ijtimoiy soliqni hisoblash qaysi yozuvda aks ettiriladi? Ro'yxatdan tanlang.",
    answers: {
      debit: ["6410", "6520", "2010", "9420"],
      credit: ["2010", "6520", "6410", "9420"]
    },
    correctDebit: 3,
    correctCredit: 1,
    explanation: "Ijtimoiy soliq Dt 9420 Kt 6520 provodkasi bilan aks ettiriladi.",
    points: 2
  },
  {
    id: 27,
    type: "single",
    question: "Ta'sischi kompaniyada ishlamasa va shartnoma bo'yicha hech qanday ish bajarmasa, uni xizmat safariga yuborish va unga xizmat safari xarajatlarini to'lash mumkinmi?",
    answers: [
      "Yo'q, chunki ta'sischining nizomga ko'ra xizmat safariga borish huquqi yo'q",
      "Mumkin emas, chunki korxona buning uchun qonuniy asosga ega emas",
      "Mumkin, agar direktor buyruq chiqarsa",
      "Mumkin, faqat o'ta zarurat holatida"
    ],
    correct: [1],
    explanation: "Ta'sischi bilan mehnat shartnomasi bo'lmasa, uni xizmat safariga yuborish mumkin emas.",
    points: 2
  },
  {
    id: 28,
    type: "multipleChoiceText",
    question: "Ishlab chiqarish korxonasi materiallarning ortiqcha qismini sotdi. Materiallarni sotishdan foyda olindi. Ushbu foydani qaysi hisobvaraqda hisobga olish kerak? Ro'yxatdan tanlang.",
    answers: {
      profit: ["9320", "9010", "8710", "9420"]
    },
    correctProfit: 0,
    explanation: "Materiallarni sotishdan olingan foyda 9320 hisobvaraqda hisobga olinadi.",
    points: 2
  },
  {
    id: 29,
    type: "single",
    question: "Agar kompaniyada bosh buxgalter lavozimi ko'zda tutilmagan bo'lsa, mahsulotni jo'natgan moddiy javobgar shaxsdan tashqari, berilgan hisob-fakturada kimning imzolari bo'lishi kerak?",
    answers: [
      "Rahbarning",
      "Kassirning",
      "Bosh buxgalter lavozimi majburiy",
      "Ta'sischining"
    ],
    correct: [0],
    explanation: "Bosh buxgalter bo'lmasa, hisob-fakturani rahbar imzolaydi.",
    points: 1
  },
  {
    id: 30,
    type: "multipleChoiceText",
    question: "Asosiy vosita eskirishini oshirib baholash qaysi yozuvda aks ettiriladi? Ro'yxatdan tanlang.",
    answers: {
      debit: ["0200", "0100", "8510", "8710"],
      credit: ["8710", "8510", "0100", "0200"]
    },
    correctDebit: 2,
    correctCredit: 3,
    explanation: "Asosiy vosita eskirishini oshirib baholash Dt 8510 Kt 0200 provodkasi bilan aks ettiriladi.",
    points: 2
  }
];
