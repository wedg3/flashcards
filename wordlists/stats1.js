const wordlisttitle = "Statistikbegrepp";

const words = [
  {
    front: "Variable / Variabel",
    back: "<b>En egenskap som kan variera.</b><br><br>Används för att beskriva, förklara eller förutsäga något i forskning."
  },
  {
    front: "Independent variable / Oberoende variabel",
    back: "<b>Variabeln som antas påverka något annat.</b><br><br>Ofta den som forskaren manipulerar.<br><br><i>Exempel:</i><br>Typ av instruktion i ett experiment."
  },
  {
    front: "Dependent variable / Beroende variabel",
    back: "<b>Variabeln som påverkas av den oberoende variabeln.</b><br><br>Utfallet som mäts.<br><br><i>Exempel:</i><br>Elevernas provresultat."
  },
  {
    front: "Predictor variable / Prediktorvariabel",
    back: "<b>Variabel som används för att förutsäga ett utfall.</b><br><br>Liknar oberoende variabel.<br><br><i>Exempel:</i><br>Antal timmar sömn som förutsäger skolprestation."
  },
  {
    front: "Outcome variable / Utfallsvariabel",
    back: "<b>Variabeln som är resultatet av en prediktor.</b><br><br>Liknar beroende variabel.<br><br><i>Exempel:</i><br>Stressnivå som påverkas av fysisk aktivitet."
  },
  {
    front: "Categorical variable / Kategorisk variabel",
    back: "<b>Variabel som sorterar observationer i grupper.</b><br><br>Inte numerisk på ett meningsfullt sätt."
  },
  {
    front: "Binary variable / Binär variabel",
    back: "<b>Kategorisk variabel med endast två värden.</b><br><br><i>Exempel:</i><br>Ja/nej, godkänd/icke godkänd."
  },
  {
    front: "Nominal variable / Nominal variabel",
    back: "<b>Flera kategorier utan inbördes ordning.</b><br><br><i>Exempel:</i><br>Blodgrupp: A, B, AB, 0."
  },
  {
    front: "Ordinal variable / Ordinal variabel",
    back: "<b>Kategorier med logisk ordning.</b><br><br>Avstånden mellan nivåer är inte lika stora.<br><br><i>Exempel:</i><br>Betyg: F, E, C, A."
  },
  {
    front: "Continuous variable / Kontinuerlig variabel",
    back: "<b>Numerisk variabel som kan anta många värden.</b><br><br><i>Exempel:</i><br>Längd, vikt, tid."
  },
  {
    front: "Interval variable / Intervallvariabel",
    back: "<b>Numerisk skala där skillnader är meningsfulla.</b><br><br>Saknar absolut nollpunkt.<br><br><i>Exempel:</i><br>Temperatur i Celsius."
  },
  {
    front: "Ratio variable / Kvotvariabel",
    back: "<b>Intervallskala med absolut nollpunkt.</b><br><br>Förhållanden är meningsfulla.<br><br><i>Exempel:</i><br>Längd – 160 cm är dubbelt så långt som 80 cm."
  },
  {
    front: "Mean / Medelvärde",
    back: "<b>Summan av alla värden delat med antalet värden.</b><br><br>Känsligt för extremvärden.<br><br><i>Exempel:</i><br>(10 + 12 + 40) / 3 = 20,7."
  },
  {
    front: "Median / Median",
    back: "<b>Mittenvärdet i en sorterad lista.</b><br><br>Robust mot extremvärden.<br><br><i>Exempel:</i><br>5, 7, 100 → median = 7."
  },
  {
    front: "Mode / Typvärde",
    back: "<b>Det vanligast förekommande värdet.</b><br><br><i>Exempel:</i><br>2, 2, 3, 4 → typvärde = 2."
  },
  {
    front: "Variance / Varians",
    back: "<b>Genomsnittlig kvadrerad avvikelse från medelvärdet.</b><br><br>Visar spridning i data.<br><br><i>Exempel:</i><br>Stor varians = stor spridning."
  },
  {
    front: "Standard deviation / Standardavvikelse",
    back: "<b>Kvadratroten ur variansen.</b><br><br>Anges i samma enhet som datan.<br><br><i>Exempel:</i><br>Stor SD = värden långt från medelvärdet."
  },
  {
    front: "Range / Variationsbredd",
    back: "<b>Skillnaden mellan högsta och lägsta värdet.</b><br><br><i>Exempel:</i><br>4, 7, 10 → 10 − 4 = 6."
  },
  {
    front: "z-score / z-poäng",
    back: "<b>Standardiserat värde.</b><br><br>(värde − medelvärde) / standardavvikelse<br><br>Visar hur många standardavvikelser från medelvärdet.<br><br><i>Exempel:</i><br>80 − 70 / 5 = +2."
  }
];
