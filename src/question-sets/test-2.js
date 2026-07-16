window.QUIZ_CONFIG = {
  title: "Test 2 - Buxgalteriya hisobi",
  description: "Savollarga javob bering va yakunda natijangizni tekshiring.",
  timeLimitMinutes: 180,
  passingPercent: 80,
  allowBackNavigation: true,
  showAnswersAfterFinish: true
};

window.QUIZ_QUESTIONS = [
  {
    id: 1,
    type: "single",
    question: "Uy-joy mulkdorlari shirkati (UJMS) yerto'la xonalarini sport klubiga ijaraga beradi. UJMS qanday tashkilot turiga kiradi?",
    answers: [
      "Tijorat korxonasi, chunki mulkni ijaraga berish tadbirkorlik faoliyati hisoblanadi.",
      "Davlat notijorat birlashmasi, chunki UJMS yuridik shaxs sifatida mulkka ega emas.",
      "Notijorat tashkilot, chunki uy-joy mulkdorlari tomonidan uyni ishlatishni ta'minlash uchun tuzilgan.",
      "Aksiyadorlik jamiyati, chunki uy-joy egalari uyning bir qismiga egalik qiladilar."
    ],
    correct: [2],
    explanation: "UJMS notijorat tashkilot bo'lib, uy-joy mulkdorlari tomonidan uyni ishlatishni ta'minlash uchun tuziladi.",
    points: 5
  },
  {
    id: 2,
    type: "single",
    question: "Korxona boshqa yuridik shaxsdan materiallar yetkazib berish uchun oldindan to'lov oldi. Mulk va majburiyatlar tarkibida qanday o'zgarishlar yuz berdi?",
    answers: [
      "Aktiv oshdi, passiv oshdi",
      "Bir aktiv oshdi, boshqa aktiv kamaydi",
      "Aktiv kamaydi, xarajat tan olinadi",
      "Aktiv kamaydi, passiv kamaydi"
    ],
    correct: [0],
    explanation: "Oldindan to'lov olishda aktiv (pul mablag'lari) oshadi va passiv (majburiyat) oshadi.",
    points: 5
  },
  {
    id: 3,
    type: "single",
    question: "Quyidagi xo'jalik operatsiyalaridan qaysi biri +A -A turiga mos keladi?",
    answers: [
      "Xaridordan avans olindi.",
      "Kassaga hisob-kitob schyotidan pul tushdi.",
      "Hisob-kitob schyotidan yetkazib beruvchiga kreditorlik qarzi to'landi.",
      "Korxona tovarlarni sotdi."
    ],
    correct: [1],
    explanation: "Kassaga hisob-kitob schyotidan pul tushishi +A -A turiga kiradi (bir aktiv oshadi, boshqa aktiv kamayadi).",
    points: 5
  },
  {
    id: 4,
    type: "numeric",
    question: "01.07.20__ yil holatiga korxonada 4720 schyotida debitorlik qarzi (xodimga berilgan ssuda) 700 so'm edi. 10.07.20__ yilda unga qo'shimcha 1300 so'm o'tkazildi. 31.07.20__ yilda xodimning ish haqidan ssudaning 600 so'mi ushlab turildi. 01.08.20__ yil holatiga 4720 schyotining qoldig'i nechaga teng?",
    correct: ["1400"],
    explanation: "700 + 1300 - 600 = 1400 so'm.",
    points: 5
  },
  {
    id: 5,
    type: "single",
    question: "'Hisob-kitob schyotidan yetkazib beruvchiga TMI ostida avans o'tkazildi' xo'jalik operatsiyasi qanday turga kiradi?",
    answers: [
      "Faqat aktivda o'zgarishlar (+A -A)",
      "Faqat passivda o'zgarishlar (+P -P)",
      "Aktiv va passivda o'sish tomon (+A +P)",
      "Aktiv va passivda kamayish tomon (-A -P)"
    ],
    correct: [0],
    explanation: "Avans o'tkazishda faqat aktiv o'zgaradi (pul mablag'lari kamayadi, debitorlik qarzi oshadi).",
    points: 5
  },
  {
    id: 6,
    type: "fillInTheBlank",
    question: "Korxonada 01.01.20__ yil holatiga quyidagi mulk va ularning manbalari mavjud (so'mda): 1. Uskunalar qiymati - 1200, 2. Materiallar - 650, 3. Buyurtmachilarning ko'rsatilgan xizmatlar uchun qarzi - 1600, 4. Korxonaning hisob-kitob schyotida - 2700, 5. Yetkazib beruvchilarga olingan materiallar uchun qarz - 400, 6. Ish haqi bo'yicha qarz - 830, 7. Ustav kapitali - 4000, 8. Taqsimlanmagan foyda - 920. Yanvar oyida quyidagi operatsiyalar bajarildi: 1. Hisob-kitob schyotiga buyurtmachidan ilgari ko'rsatilgan xizmatlar uchun pul tushdi - 900, 2. Hisob-kitob schyotidan yetkazib beruvchilarga kreditorlik qarzi to'landi - 300, 3. Ish haqi to'lash uchun hisob-kitob schyotidan kassaga naqd pul olindi - 700, 4. Naqd pulda ish haqi to'landi - 700. 01.02.20__ yil holatiga to'g'ri summani (so'mda) hisoblang.",
    blanks: [
      { label: "Aktivlar yig'indisi", correct: "5150" },
      { label: "Hisob-kitob schyoti bo'yicha debet oboroti", correct: "900" },
      { label: "Hisob-kitob schyoti bo'yicha kredit oboroti", correct: "1000" },
      { label: "Hisob-kitob schyoti bo'yicha qoldiq", correct: "2600" },
      { label: "Yetkazib beruvchilarga qarz bo'yicha qoldiq", correct: "100" },
      { label: "Ish haqi bo'yicha qoldiq", correct: "130" },
      { label: "Buyurtmachilar qarzi bo'yicha qoldiq", correct: "700" }
    ],
    explanation: "Aktivlar = 1200+650+700+2600 = 5150. Hisob-kitob schyoti: 2700+900-300-700 = 2600.",
    points: 35
  },
  {
    id: 7,
    type: "multipleChoiceText",
    question: "'Ta'sischilarning qarori bilan ustav kapitali ro'yxatga olindi' xo'jalik operatsiyasiga to'g'ri provodkani tanlang.",
    answers: {
      debit: [
        "5110 «Hisob-kitob schyoti»",
        "4610 «Ta'sischilarning ustav kapitaliga qo'shgan hissalari bo'yicha qarzi»",
        "8330 «Pay va hissalar»",
        "1010 «Xom ashyo va materiallar»"
      ],
      credit: [
        "5110 «Hisob-kitob schyoti»",
        "4610 «Ta'sischilarning ustav kapitaliga qo'shgan hissalari bo'yicha qarzi»",
        "8330 «Pay va hissalar»",
        "1010 «Xom ashyo va materiallar»"
      ]
    },
    correctDebit: 1,
    correctCredit: 2,
    explanation: "Ustav kapitalini ro'yxatga olish Dt 4610 Kt 8330 provodkasi bilan aks ettiriladi.",
    points: 5
  },
  {
    id: 8,
    type: "numeric",
    question: "OAJ nominal qiymati 20 so'm bo'lgan 5000 dona aksiya chiqardi. Ular bir aksiya uchun 21 so'mdan sotildi. Qo'shimcha kapital miqdorini aniqlang.",
    correct: ["5000"],
    explanation: "5000 * (21 - 20) = 5000 so'm qo'shimcha kapital.",
    points: 5
  },
  {
    id: 9,
    type: "single",
    question: "Korxonaning kassasiga xaridorlardan tushgan tushumni kreditorlik qarzini to'lash uchun ishlatish mumkinmi?",
    answers: [
      "Ha.",
      "Yo'q.",
      "Mumkin, agar direktor yozma ravishda ruxsat bersa.",
      "Savdo korxonalari uchun mumkin."
    ],
    correct: [1],
    explanation: "Naqd pul tushumini kreditorlik qarzini to'lash uchun ishlatish mumkin emas, chunki bu naqd pul intizomini buzadi.",
    points: 5
  },
  {
    id: 10,
    type: "single",
    question: "Quyidagi buxgalteriya provodkasi nimani anglatadi: Dt 5010 Kt 4230?",
    answers: [
      "Hisobdor summa kassaga qaytarildi.",
      "Xaridordan kassaga naqd pul tushdi.",
      "Kassadan komandirovka xarajatlari uchun pul olindi.",
      "Daromad solig'i to'landi."
    ],
    correct: [0],
    explanation: "Dt 5010 Kt 4230 — hisobdor summani kassaga qaytarish.",
    points: 5
  },
  {
    id: 11,
    type: "multipleChoiceText",
    question: "'Kassadan xodimlarga ish haqi to'landi' xo'jalik operatsiyasiga to'g'ri provodkani tanlang.",
    answers: {
      debit: [
        "5010 «Kassa»",
        "6710 «Xodimlar bilan ish haqi bo'yicha hisob-kitoblar»",
        "4210 «Ish haqi bo'yicha berilgan avanslar»",
        "6410 «Byudjetga to'lovlar bo'yicha qarz»",
        "6990 «Boshqa majburiyatlar»"
      ],
      credit: [
        "5010 «Kassa»",
        "6710 «Xodimlar bilan ish haqi bo'yicha hisob-kitoblar»",
        "4210 «Ish haqi bo'yicha berilgan avanslar»",
        "6410 «Byudjetga to'lovlar bo'yicha qarz»",
        "6990 «Boshqa majburiyatlar»"
      ]
    },
    correctDebit: 1,
    correctCredit: 0,
    explanation: "Kassadan ish haqi to'lash Dt 6710 Kt 5010 provodkasi bilan aks ettiriladi.",
    points: 5
  },
  {
    id: 12,
    type: "multiple",
    question: "Kassada pul mablag'larining kelib tushishi va chiqib ketishini kunlik hisobga olish uchun qanday hujjatlar kerak?",
    answers: [
      "Kirim kassa orderlarini hisobga olish jurnali.",
      "Chiqim kassa orderlarini hisobga olish jurnali.",
      "Kassa kitobi.",
      "To'lov topshiriqnomalarini hisobga olish jurnali.",
      "Bank ko'chirmasi."
    ],
    correct: [0, 1, 2],
    explanation: "Kassa operatsiyalari kirim va chiqim orderlari hamda kassa kitobi bilan rasmiylashtiriladi.",
    points: 5
  },
  {
    id: 13,
    type: "single",
    question: "Bank kassasidan korxona kassiriga naqd pul mablag'larini berish qaysi hujjat asosida amalga oshiriladi?",
    answers: [
      "Kirim kassa orderi",
      "Naqd pul topshirish to'g'risida bildirishnoma",
      "Chek",
      "Rahbarning buyrug'i"
    ],
    correct: [2],
    explanation: "Bankdan naqd pul olish uchun chek kerak.",
    points: 5
  },
  {
    id: 14,
    type: "multipleChoiceText",
    question: "Quyidagi xo'jalik operatsiyalariga to'g'ri provodkani tanlang:",
    answers: {
      choices: [
        "5110-7810",
        "6410-5110",
        "5110-4010",
        "5110-5710",
        "4310-5110"
      ],
      labels: [
        "Uzoq muddatli bank krediti olindi",
        "Hisob-kitob schyotiga inkassatsiyadan pul tushdi",
        "Yetkazib beruvchiga TMI uchun avans to'landi",
        "Xaridordan ilgari ko'rsatilgan xizmat uchun pul olindi",
        "Daromad solig'i to'landi"
      ]
    },
    correctIndices: [0, 3, 4, 2, 1],
    explanation: "Uzoq muddatli kredit: Dt 5110 Kt 7810. Inkassatsiya: Dt 5110 Kt 5710. Avans: Dt 4310 Kt 5110. Xizmat uchun to'lov: Dt 5110 Kt 4010. Daromad solig'i: Dt 6410 Kt 5110.",
    points: 25
  },
  {
    id: 15,
    type: "multiple",
    question: "Bank korxonaning hisob-kitob schyotidan pul mablag'larini qanday hujjatlar asosida hisobdan chiqaradi?",
    answers: [
      "Boshqa yuridik shaxs tomonidan qo'yilgan to'lov talabnomasi.",
      "To'lov topshirig'i.",
      "Chiqim kassa orderi.",
      "Korxonaning hisob-kitob schyoti bo'yicha bank ko'chirmasi."
    ],
    correct: [0, 1],
    explanation: "Bank pul mablag'larini to'lov talabnomasi va to'lov topshirig'i asosida hisobdan chiqaradi.",
    points: 5
  },
  {
    id: 16,
    type: "single",
    question: "Dt 6310 Kt 4010 yozuvi nimani anglatadi?",
    answers: [
      "Buyurtmachiga hisob-faktura berilgandan keyin olingan avans hisobga olinadi.",
      "Xaridorlardan avans olindi.",
      "Buyurtmachiga hisob-faktura berildi.",
      "Yetkazib beruvchidan hisob-faktura olindi."
    ],
    correct: [0],
    explanation: "Dt 6310 Kt 4010 — buyurtmachiga hisob-faktura berilgandan keyin avans hisobga olinadi.",
    points: 5
  },
  {
    id: 17,
    type: "multiple",
    question: "Quyidagilardan qaysilari buxgalteriya hisobining ob'ekti hisoblanadi?",
    answers: [
      "Korxona mulki.",
      "Xo'jalik operatsiyalari.",
      "Siyosiy jarayonlar.",
      "Korxonaning foydalari va zararlari.",
      "Ijtimoiy jarayonlar.",
      "Korxonaning majburiyatlari.",
      "Korxonaning daromadlari va xarajatlari."
    ],
    correct: [0, 1, 3, 5, 6],
    explanation: "Buxgalteriya hisobining ob'ektlari: mulk, xo'jalik operatsiyalari, foyda/zarar, majburiyatlar, daromad/xarajatlar.",
    points: 5
  },
  {
    id: 18,
    type: "single",
    question: "Korxona xo'jalik faoliyatida foydalanadigan muzlatgich aktivning qaysi turiga kiradi?",
    answers: [
      "Tovar",
      "O'z kapitali",
      "Asosiy vosita",
      "Tayyor mahsulot"
    ],
    correct: [2],
    explanation: "Uzoq vaqt foydalaniladigan muzlatgich asosiy vosita hisoblanadi.",
    points: 5
  },
  {
    id: 19,
    type: "multipleChoiceText",
    question: "Xaridordan TMI uchun olingan avans summasi buxgalteriya hisobida qanday aks ettiriladi?",
    answers: {
      debit: [
        "5110 «Hisob-kitob schyoti»",
        "4010 «Xaridorlar va buyurtmachilardan olinadigan schyotlar»",
        "6310 «Xaridorlar va buyurtmachilardan olingan avanslar»",
        "4310 «Yetkazib beruvchilarga TMI uchun berilgan avanslar»",
        "4210 «Ish haqi bo'yicha berilgan avanslar»"
      ],
      credit: [
        "5110 «Hisob-kitob schyoti»",
        "4010 «Xaridorlar va buyurtmachilardan olinadigan schyotlar»",
        "6310 «Xaridorlar va buyurtmachilardan olingan avanslar»",
        "4310 «Yetkazib beruvchilarga TMI uchun berilgan avanslar»",
        "4210 «Ish haqi bo'yicha berilgan avanslar»"
      ]
    },
    correctDebit: 0,
    correctCredit: 2,
    explanation: "Xaridordan avans olish Dt 5110 Kt 6310 provodkasi bilan aks ettiriladi.",
    points: 5
  },
  {
    id: 20,
    type: "multipleChoiceText",
    question: "Foyda solig'i bo'yicha avans to'lovi qanday aks ettiriladi?",
    answers: {
      debit: [
        "6410 «Byudjetga to'lovlar bo'yicha qarz»",
        "5110 «Hisob-kitob schyoti»",
        "4410 «Byudjetga soliqlar va yig'imlar bo'yicha avans to'lovlari»",
        "4510 «Sug'urta bo'yicha avans to'lovlari»",
        "4210 «Ish haqi bo'yicha berilgan avanslar»"
      ],
      credit: [
        "6410 «Byudjetga to'lovlar bo'yicha qarz»",
        "5110 «Hisob-kitob schyoti»",
        "4410 «Byudjetga soliqlar va yig'imlar bo'yicha avans to'lovlari»",
        "4510 «Sug'urta bo'yicha avans to'lovlari»",
        "4210 «Ish haqi bo'yicha berilgan avanslar»"
      ]
    },
    correctDebit: 2,
    correctCredit: 1,
    explanation: "Foyda solig'i bo'yicha avans to'lovi Dt 4410 Kt 5110 provodkasi bilan aks ettiriladi.",
    points: 5
  },
  {
    id: 21,
    type: "single",
    question: "Dt 6010 Kt 4310 yozuvi nimani anglatadi?",
    answers: [
      "Yetkazib beruvchidan qaytarilmagan avans summalarini hisobdan chiqarish.",
      "Buyurtmachiga hisob-faktura berilgandan keyin olingan avansni hisobga olish.",
      "Yetkazib beruvchidan hisob-faktura olingandan keyin berilgan avansni hisobga olish.",
      "Yetkazib beruvchiga avans to'landi."
    ],
    correct: [2],
    explanation: "Dt 6010 Kt 4310 — yetkazib beruvchidan hisob-faktura olingandan keyin avans hisobga olinadi.",
    points: 5
  },
  {
    id: 22,
    type: "multipleChoiceText",
    question: "Xodim korxonadan qizining oliy o'quv yurtida o'qishi uchun qarz oldi. Har oy xodimning ish haqidan qarzning bir qismi to'liq qaytarilgunga qadar ushlab turiladi. Buxgalter oylik ushlab qolishni qaysi provodka bilan aks ettirishi kerak?",
    answers: {
      debit: [
        "4720 «Xodimlarning berilgan qarzlar bo'yicha qarzi»",
        "5110 «Hisob-kitob schyoti»",
        "6710 «Ish haqi bo'yicha hisob-kitoblar»",
        "6990 «Boshqa majburiyatlar»",
        "4210 «Ish haqi bo'yicha berilgan avanslar»"
      ],
      credit: [
        "4720 «Xodimlarning berilgan qarzlar bo'yicha qarzi»",
        "5110 «Hisob-kitob schyoti»",
        "6710 «Ish haqi bo'yicha hisob-kitoblar»",
        "6990 «Boshqa majburiyatlar»",
        "4210 «Ish haqi bo'yicha berilgan avanslar»"
      ]
    },
    correctDebit: 2,
    correctCredit: 0,
    explanation: "Ish haqidan qarzni ushlab qolish Dt 6710 Kt 4720 provodkasi bilan aks ettiriladi.",
    points: 5
  },
  {
    id: 23,
    type: "numeric",
    question: "Korxona trikotaj mahsulotlarini tikish uchun 100 metr mato sotib oldi. Materiallar hisobi haqiqiy tannarx bo'yicha yuritiladi. Yetkazib beruvchining hisob-kitob hujjatlariga ko'ra 1 m matoning narxi 15 000 so'm. Mato vositachi tashkilot orqali sotib olindi. Uning xizmatlari uchun to'lov 60 so'mni tashkil etdi. Materialni yetkazib berish uchun korxona transport tashkilotining xizmatidan foydalandi, u 40 so'm miqdorida hisob-faktura taqdim etdi. Bir metr matoning haqiqiy tannarxi qancha?",
    correct: ["15001"],
    explanation: "Tannarx = 15000 + (60 + 40) / 100 = 15000 + 1 = 15001 so'm.",
    points: 5
  },
  {
    id: 24,
    type: "fillInTheBlank",
    question: "Korxona davomida quyidagi matolarni sotib oldi: 1-may 200 m mato 1 m uchun 8 000 so'm, 4-may 400 m mato 1 m uchun 9 000 so'm, 10-may ishlab chiqarishga 100 m mato chiqarildi, 25-may 300 m mato chiqarildi, 30-may 500 m mato 1 m uchun 7 500 so'm. (AVECO usuli bo'yicha hisoblashda 1 metr mato tannarxini yaxlitlamang. Yakuniy summalarni butun songa yaxlitlang. 4 raqamigacha pastga, 5 va undan yuqori yuqoriga yaxlitlanadi.)",
    blanks: [
      { label: "FIFO usuli bo'yicha may oyida ishlab chiqarishga chiqarilgan materiallar summasi (uzluksiz tizim)", correct: "3400000" },
      { label: "FIFO usuli bo'yicha 01.06 dagi ombor qoldig'i summasi (uzluksiz tizim)", correct: "5550000" },
      { label: "FIFO usuli bo'yicha may oyida ishlab chiqarishga chiqarilgan materiallar summasi (davriy tizim)", correct: "3400000" },
      { label: "FIFO usuli bo'yicha 01.06 dagi ombor qoldig'i summasi (davriy tizim)", correct: "5550000" },
      { label: "AVECO usuli bo'yicha may oyida ishlab chiqarishga chiqarilgan materiallar summasi (uzluksiz tizim)", correct: "3466667" },
      { label: "AVECO usuli bo'yicha 01.06 dagi ombor qoldig'i summasi (uzluksiz tizim)", correct: "5483333" },
      { label: "AVECO usuli bo'yicha may oyida ishlab chiqarishga chiqarilgan materiallar summasi (davriy tizim)", correct: "3254545" },
      { label: "AVECO usuli bo'yicha 01.06 dagi ombor qoldig'i summasi (davriy tizim)", correct: "5695455" }
    ],
    explanation: "FIFO: 1-partiya 200*8000=1,600,000 + 2-partiyadan 200*9000=1,800,000, jami 3,400,000. Qoldiq: 200*9000=1,800,000 + 500*7500=3,750,000, jami 5,550,000. AVECO: o'rtacha tannarx = (200*8000 + 400*9000 + 500*7500) / 1100 = 8154,545...",
    points: 40
  },
  {
    id: 25,
    type: "multipleChoiceText",
    question: "Boshqa tashkilotlardan materiallarni tekinga olish qaysi provodkada aks ettiriladi?",
    answers: {
      debit: [
        "1010 «Materiallar»",
        "9300 «Boshqa daromadlar»",
        "5110 «Hisob-kitob schyoti»",
        "6990 «Boshqa majburiyatlar»",
        "8530 «Tekinga olingan mulk»",
        "8710 «Hisobot davrining taqsimlanmagan foydasi (qoplanmagan zarari)»"
      ],
      credit: [
        "1010 «Materiallar»",
        "9390 «Boshqa operatsion daromadlar»",
        "5110 «Hisob-kitob schyoti»",
        "6990 «Boshqa majburiyatlar»",
        "8530 «Tekinga olingan mulk»",
        "8710 «Hisobot davrining taqsimlanmagan foydasi (qoplanmagan zarari)»"
      ]
    },
    correctDebit: 0,
    correctCredit: 4,
    explanation: "Materiallarni tekinga olish Dt 1010 Kt 8530 provodkasi bilan aks ettiriladi.",
    points: 5
  },
  {
    id: 26,
    type: "numeric",
    question: "Korxona yakka tartibdagi tadbirkorga ortiqcha materiallarni 500 so'mga sotdi. Ushbu materiallarning tannarxi 200 so'mni tashkil qiladi. Shuningdek, materiallarni mashinaga yuklagan yukchilar xizmati uchun 100 so'm to'landi. Xaridor to'lovni to'liq hajmda korxonaning hisob-kitob schyotiga o'tkazdi. Materiallarni sotishdan olingan foyda (zarar) miqdorini hisoblang.",
    correct: ["300"],
    explanation: "Foyda = Sotish narxi - Tannarx = 500 - 200 = 300 so'm.",
    points: 5
  },
  {
    id: 27,
    type: "numeric",
    question: "Korxona yetkazib beruvchidan 10 000 so'mga stanok sotib oldi. Stanok vositachi tashkilot orqali sotib olindi, ularning xizmatlari 100 so'mni tashkil etdi. Tashish jarayonida stanok shikastlandi va uni ta'mirlash xarajatlari 80 so'mni tashkil etdi. Uni yetkazib berish uchun transport tashkilotiga 50 so'm to'landi. Stanokni o'rnatish va montaj qilish uchun 200 so'm sarflandi. Stanok buxgalteriya hisobida qanday dastlabki qiymatda tan olinishi kerak?",
    correct: ["10350"],
    explanation: "Dastlabki qiymat = 10000 + 100 + 50 + 200 = 10350 so'm. Ta'mirlash xarajatlari dastlabki qiymatga kiritilmaydi.",
    points: 5
  },
  {
    id: 28,
    type: "multipleChoiceText",
    question: "Quyidagi xo'jalik operatsiyalariga mos provodkani tanlang:",
    answers: {
      choices: [
        "0100 - 6010",
        "0100 - 4610",
        "0100 - 8530",
        "0100 - 6710"
      ],
      labels: [
        "Asosiy vositani tekinga olish",
        "Asosiy vositani ustav kapitaliga hissa sifatida kiritish",
        "Asosiy vositalarni sotib olish"
      ]
    },
    correctIndices: [2, 1, 0],
    explanation: "Tekinga olish: Dt 0100 Kt 8530. Ustav kapitaliga: Dt 0100 Kt 4610. Sotib olish: Dt 0100 Kt 6010.",
    points: 15
  },
  {
    id: 29,
    type: "multipleChoiceText",
    question: "Quyidagi xo'jalik operatsiyalariga mos provodkani tanlang:",
    answers: {
      choices: [
        "1010 - 9390",
        "9430 - 5910",
        "4730 - 5910",
        "5910 - 1010",
        "6710 - 4730"
      ],
      labels: [
        "Agar aybdor topilmasa, materiallar yetishmasligi hisobdan chiqarildi",
        "Inventarizatsiya vaqtida materiallar yetishmasligi aniqlandi",
        "Inventarizatsiya vaqtida materiallarning ortiqchaligi aniqlandi",
        "Yetishmovchilik summasi aybdor shaxsga hisobdan chiqarildi"
      ]
    },
    correctIndices: [1, 3, 0, 2],
    explanation: "Aybdor topilmasa: Dt 9430 Kt 5910. Inventarizatsiyada yetishmovchilik: Dt 5910 Kt 1010. Ortiqchalik: Dt 1010 Kt 9390. Aybdorga: Dt 4730 Kt 5910.",
    points: 20
  },
  {
    id: 30,
    type: "single",
    question: "Korxona liftsiz bino sotib oldi. Keyingi yili korxona tomonidan binoga lift o'rnatildi. Lift o'rnatilgandan keyin uning qiymati aktivning qaysi turiga kiritilishi kerak?",
    answers: [
      "Asosiy vosita",
      "Tayyor mahsulot",
      "Moliyaviy investitsiyalar",
      "Kapital qo'yilmalar"
    ],
    correct: [0],
    explanation: "Lift binoning ajralmas qismi bo'lib, asosiy vosita hisoblanadi.",
    points: 5
  }
];
