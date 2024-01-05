const services = [
  {
    icon: "/assets/services/crypto.png",
    title: "Crypto & Forex Data",
    description:
      "Get real-time cryptocurrency prices and forex rates, empowering your investment decisions.",
  },
  {
    icon: "/assets/services/stock.png",
    title: "Stock Market Insights",
    description:
      "Stay ahead with essential stock market data, trends, and analysis.",
  },
  {
    icon: "/assets/services/news.png",
    title: "Financial News",
    description: "Access the latest finance news for informed decision-making.",
  },
  {
    icon: "/assets/services/prediction.png",
    title: "Predictive Analytics",
    description:
      "Enhance your investments with predictive insights for income, forex, and stocks.",
  },
  {
    icon: "/assets/services/tracking.png",
    title: "Finance Tracking",
    description:
      "Effortlessly manage your income and expenses within your profile.",
  },
  {
    icon: "/assets/services/wishlist.png",
    title: "Crypto Wishlist",
    description:
      "Customize your crypto portfolio with a personalized wishlist feature.",
  },
];

const teams = [
  {
    img: "/assets/teams/nitu.png",
    name: "Nitesh Agrawal",
    designation: "Web Developer",
    instaurl: "",
    fburl: "",
    linkedinurl: "",
  },
  {
    img: "/assets/teams/mani.png",
    name: "Amruta Bodhankar",
    designation: "Data Scientist",
    instaurl: "",
    fburl: "",
    linkedinurl: "",
  },
  {
    img: "/assets/teams/anmol.png",
    name: "Anmol Bajaj",
    designation: "UX/UI DESIGNER",
    instaurl: "",
    fburl: "",
    linkedinurl: "",
  },
];

const currencies = [
  {
    value: "INR",
    label: "Indian Rupee",
    img: "/assets/flag/INR.svg",
    description:
      "The Indian Rupee is the currency of India. Our currency rankings show that the most popular Indian Rupee exchange rate is the INR to USD rate. The currency code for Rupees is INR, and the currency symbol is ₹. Above, you'll find Indian Rupee rates and a currency converter.",
  },
  {
    value: "EUR",
    label: "Euro",
    img: "/assets/flag/EUR.svg",
    description:
      "The Euro is the currency of Euro Member Countries. Our currency rankings show that the most popular Euro exchange rate is the EUR to USD rate. The currency code for Euros is EUR, and the currency symbol is €. Above, you'll find Euro rates and a currency converter.",
  },
  {
    value: "USD",
    label: "US Dollar",
    img: "/assets/flag/USD.svg",
    description:
      "The US Dollar is the currency of United States. Our currency rankings show that the most popular US Dollar exchange rate is the USD to EUR rate. The currency code for Dollars is USD, and the currency symbol is $. Above, you'll find US Dollar rates and a currency converter.",
  },
  {
    value: "GBP",
    label: "British Pound",
    img: "/assets/flag/GBP.svg",
    description:
      "The British Pound is the currency of United Kingdom. Our currency rankings show that the most popular British Pound exchange rate is the GBP to USD rate. The currency code for Pounds is GBP, and the currency symbol is £. Above, you'll find British Pound rates and a currency converter.",
  },
  {
    value: "TRY",
    label: "Turkish Lira",
    img: "/assets/flag/TRY.svg",
    description:
      "The Turkish Lira is the currency of Turkey. Our currency rankings show that the most popular Turkish Lira exchange rate is the TRY to USD rate. The currency code for Lira is TRY, and the currency symbol is ₺. Above, you'll find Turkish Lira rates and a currency converter.",
  },
  {
    value: "AUD",
    label: "Australian Dollar",
    img: "/assets/flag/AUD.svg",
    description:
      "The Australian Dollar is the currency of Australia. Our currency rankings show that the most popular Australian Dollar exchange rate is the AUD to USD rate. The currency code for Dollars is AUD, and the currency symbol is $. Above, you'll find Australian Dollar rates and a currency converter.",
  },
  {
    value: "CAD",
    label: "Canadian Dollar",
    img: "/assets/flag/CAD.svg",
    description:
      "The Canadian Dollar is the currency of Canada. Our currency rankings show that the most popular Canadian Dollar exchange rate is the CAD to USD rate. The currency code for Dollars is CAD, and the currency symbol is $. Above, you'll find Canadian Dollar rates and a currency converter.",
  },
  {
    value: "JPY",
    label: "Japanese Yen",
    img: "/assets/flag/JPY.svg",
    description:
      "The Japanese Yen is the currency of Japan. Our currency rankings show that the most popular Japanese Yen exchange rate is the JPY to USD rate. The currency code for Yen is JPY, and the currency symbol is ¥. Above, you'll find Japanese Yen rates and a currency converter.",
  },
  {
    value: "NZD",
    label: "New Zealand Dollar",
    img: "/assets/flag/NZD.svg",
    description:
      "The New Zealand Dollar is the currency of New Zealand. Our currency rankings show that the most popular New Zealand Dollar exchange rate is the NZD to USD rate. The currency code for Dollars is NZD, and the currency symbol is $. Above, you'll find New Zealand Dollar rates and a currency converter.",
  },
  {
    value: "CHF",
    label: "Swiss Franc",
    img: "/assets/flag/CHF.svg",
    description:
      "The Swiss Franc is the currency of Switzerland. Our currency rankings show that the most popular Swiss Franc exchange rate is the CHF to USD rate. The currency code for Francs is CHF, and the currency symbol is CHF. Above, you'll find Swiss Franc rates and a currency converter.",
  },
  {
    value: "ZAR",
    label: "South African Rand",
    img: "/assets/flag/ZAR.svg",
    description:
      "The South African Rand is the currency of South Africa. Our currency rankings show that the most popular South African Rand exchange rate is the ZAR to USD rate. The currency code for Rand is ZAR, and the currency symbol is R. Above, you'll find South African Rand rates and a currency converter.",
  },
  {
    value: "RUB",
    label: "Russian Ruble",
    img: "/assets/flag/RUB.svg",
    description:
      "The Russian Ruble is the currency of Russia. Our currency rankings show that the most popular Russian Ruble exchange rate is the RUB to USD rate. The currency code for Rubles is RUB, and the currency symbol is ₽. Above, you'll find Russian Ruble rates and a currency converter.",
  },
  {
    value: "BGN",
    label: "Bulgarian Lev",
    img: "/assets/flag/BGN.svg",
    description:
      "The Bulgarian Lev is the currency of Bulgaria. Our currency rankings show that the most popular Bulgarian Lev exchange rate is the BGN to USD rate. The currency code for Leva is BGN, and the currency symbol is лв. Above, you'll find Bulgarian Lev rates and a currency converter.",
  },
  {
    value: "SGD",
    label: "Singapore Dollar",
    img: "/assets/flag/SGD.svg",
    description:
      "The Singapore Dollar is the currency of Singapore. Our currency rankings show that the most popular Singapore Dollar exchange rate is the SGD to USD rate. The currency code for Dollars is SGD, and the currency symbol is S$. Above, you'll find Singapore Dollar rates and a currency converter.",
  },
  {
    value: "HKD",
    label: "Hong Kong Dollar",
    img: "/assets/flag/HKD.svg",
    description:
      "The Hong Kong Dollar is the currency of Hong Kong. Our currency rankings show that the most popular Hong Kong Dollar exchange rate is the HKD to USD rate. The currency code for Dollars is HKD, and the currency symbol is $. Above, you'll find Hong Kong Dollar rates and a currency converter.",
  },
  {
    value: "SEK",
    label: "Swedish Krona",
    img: "/assets/flag/SEK.svg",
    description:
      "The Swedish Krona is the currency of Sweden. Our currency rankings show that the most popular Swedish Krona exchange rate is the SEK to USD rate. The currency code for Kronor is SEK, and the currency symbol is kr. Above, you'll find Swedish Krona rates and a currency converter.",
  },
  {
    value: "THB",
    label: "Thai Baht",
    img: "/assets/flag/THB.svg",
    description:
      "The Thai Baht is the currency of Thailand. Our currency rankings show that the most popular Thai Baht exchange rate is the THB to USD rate. The currency code for Baht is THB, and the currency symbol is ฿. Above, you'll find Thai Baht rates and a currency converter.",
  },
  {
    value: "HUF",
    label: "Hungarian Forint",
    img: "/assets/flag/HUF.svg",
    description:
      "The Hungarian Forint is the currency of Hungary. Our currency rankings show that the most popular Hungarian Forint exchange rate is the HUF to USD rate. The currency code for Forints is HUF, and the currency symbol is Ft. Above, you'll find Hungarian Forint rates and a currency converter.",
  },
  {
    value: "CNY",
    label: "Chinese Yuan Renminbi",
    img: "/assets/flag/CNY.svg",
    description:
      "The Chinese Yuan Renminbi is the currency of China. Our currency rankings show that the most popular Chinese Yuan Renminbi exchange rate is the CNY to USD rate. The currency code for Yuan Renminbi is CNY, and the currency symbol is ¥. Above, you'll find Chinese Yuan Renminbi rates and a currency converter.",
  },
  {
    value: "NOK",
    label: "Norwegian Krone",
    img: "/assets/flag/NOK.svg",
    description:
      "The Norwegian Krone is the currency of Norway. Our currency rankings show that the most popular Norwegian Krone exchange rate is the NOK to USD rate. The currency code for Kroner is NOK, and the currency symbol is kr. Above, you'll find Norwegian Krone rates and a currency converter.",
  },
  {
    value: "MXN",
    label: "Mexican Peso",
    img: "/assets/flag/MXN.svg",
    description:
      "The Mexican Peso is the currency of Mexico. Our currency rankings show that the most popular Mexican Peso exchange rate is the MXN to USD rate. The currency code for Pesos is MXN, and the currency symbol is $. Above, you'll find Mexican Peso rates and a currency converter.",
  },
];

export { services, teams, currencies };
