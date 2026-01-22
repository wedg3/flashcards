const wordlisttitle = "Öva på begrepp om grundläggande forskningsbegrepp";

const words = [
  {
    front: "Variable / Variabel",
    back: "<b>Egenskap som kan anta olika värden.</b><br><br>Används för att beskriva, förklara eller förutsäga fenomen."
  },

  {
    front: "Independent variable / Oberoende variabel",
    back: "<b>Variabel som antas orsaka en förändring.</b><br><br>Manipuleras ofta av forskaren.<br><br><i>Exempel:</i><br>Typ av instruktion i ett experiment."
  },
  {
    front: "Dependent variable / Beroende variabel",
    back: "<b>Variabel som påverkas av den oberoende variabeln.</b><br><br>Utfallet som mäts.<br><br><i>Exempel:</i><br>Elevernas provresultat."
  },
  {
    front: "Predictor variable / Prediktorvariabel",
    back: "<b>Variabel som används för att förutsäga ett utfall.</b><br><br>Nära besläktad med oberoende variabel.<br><br><i>Exempel:</i><br>Antal timmars sömn som förutsäger skolprestation."
  },
  {
    front: "Outcome variable / Utfallsvariabel",
    back: "<b>Variabel som är resultatet av en prediktor.</b><br><br>Liknar beroende variabel.<br><br><i>Exempel:</i><br>Stressnivå som påverkas av fysisk aktivitet."
  },

  {
    front: "Categorical variable / Kategorisk variabel",
    back: "<b>Variabel som delar in observationer i grupper.</b><br><br>Värdena är inte numeriska."
  },
  {
    front: "Binary variable / Binär variabel",
    back: "<b>Kategorisk variabel med två möjliga värden.</b><br><br><i>Exempel:</i><br>Ja/nej, godkänd/icke godkänd."
  },
  {
    front: "Nominal variable / Nominal variabel",
    back: "<b>Kategorier utan inbördes ordning.</b><br><br><i>Exempel:</i><br>Blodgrupp: A, B, AB, 0."
  },
  {
    front: "Ordinal variable / Ordinal variabel",
    back: "<b>Kategorier med logisk ordning.</b><br><br>Avstånden mellan nivåer är inte lika stora.<br><br><i>Exempel:</i><br>Betyg: F, E, C, A."
  },

  {
    front: "Continuous variable / Kontinuerlig variabel",
    back: "<b>Numerisk variabel med många möjliga värden.</b><br><br><i>Exempel:</i><br>Tid, längd, vikt."
  },
  {
    front: "Interval variable / Intervallvariabel",
    back: "<b>Numerisk skala med lika stora intervall.</b><br><br>Saknar absolut nollpunkt.<br><br><i>Exempel:</i><br>Temperatur i Celsius."
  },
  {
    front: "Ratio variable / Kvotvariabel",
    back: "<b>Intervallskala med absolut nollpunkt.</b><br><br>Förhållanden är meningsfulla.<br><br><i>Exempel:</i><br>160 cm är dubbelt så långt som 80 cm."
  },

  {
    front: "Mean / Medelvärde",
    back: "<b>Summan av alla värden dividerat med antalet.</b><br><br>Känsligt för extremvärden.<br><br><i>Exempel:</i><br>(10 + 12 + 40) / 3 = 20,7."
  },
  {
    front: "Median / Median",
    back: "<b>Mittenvärdet i en sorterad lista.</b><br><br>Robust mot extremvärden.<br><br><i>Exempel:</i><br>5, 7, 100 → 7."
  },
  {
    front: "Mode / Typvärde",
    back: "<b>Det vanligaste värdet.</b><br><br><i>Exempel:</i><br>2, 2, 3, 4 → 2."
  },

  {
    front: "Deviance (Error) / Avvikelse (Fel)",
    back: "<b>Skillnaden mellan ett värde och medelvärdet.</b><br><br><i>Exempel:</i><br>Medelvärde 10, värde 7 → avvikelse = −3."
  },
  {
    front: "Sum of squared errors / Summan av kvadrerade fel",
    back: "<b>Alla avvikelser kvadrerade och summerade.</b><br><br>Används för att beräkna varians."
  },
  {
    front: "Variance / Varians",
    back: "<b>Genomsnittlig kvadrerad avvikelse från medelvärdet.</b><br><br><i>Exempel:</i><br>Stor varians = stor spridning."
  },
  {
    front: "Standard deviation / Standardavvikelse",
    back: "<b>Kvadratroten ur variansen.</b><br><br>I samma enhet som datan.<br><br><i>Exempel:</i><br>Stor SD = värden långt från medelvärdet."
  },
  {
    front: "Range / Variationsbredd",
    back: "<b>Högsta minus lägsta värdet.</b><br><br><i>Exempel:</i><br>10 − 4 = 6."
  },
  {
    front: "Interquartile range / Interkvartilavstånd",
    back: "<b>Spridningen för de mittersta 50 % av värdena.</b><br><br>Robust mot extremvärden."
  },

  {
    front: "Frequency distribution / Frekvensfördelning",
    back: "<b>Visar hur ofta olika värden förekommer.</b><br><br>Kan presenteras i tabell eller diagram."
  },
  {
    front: "z-score / z-poäng",
    back: "<b>Standardiserat värde.</b><br><br>(värde − medelvärde) / standardavvikelse<br><br>Visar avstånd från medelvärdet i SD-enheter.<br><br><i>Exempel:</i><br>(80 − 70) / 5 = +2."
  }
];
