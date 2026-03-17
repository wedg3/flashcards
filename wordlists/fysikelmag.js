const wordlisttitle = "Fysik: El med Magnetism";

const words = [
  { front: "Spänning", back: "<b>Spänning</b> mäts i <i>volt (V)</i>.<br><br>Det är det som \"driver\" strömmen genom en ledare." },
  { front: "Ström", back: "<b>Ström</b> mäts i <i>ampere (A)</i>.<br><br>Det är elektriska laddningar som rör sig i en ledare." },
  { front: "Resistans", back: "<b>Resistans</b> mäts i <i>ohm (Ω)</i>.<br><br>Ju större resistans ett ämne har, desto svårare har strömmen att gå fram." },
  { front: "Ohms lag", back: "<b>Ohms lag</b> visar sambandet mellan spänning, ström och resistans.<br><br><i>R = U / I</i>, <i>U = R · I</i>, <i>I = U / R</i>." },
  { front: "Magnetens poler", back: "En magnet har två poler: <b>nordände</b> och <b>sydände</b>." },
  { front: "Vad händer med lika och olika magnetändar", back: "<b>Lika poler</b> stöter bort varandra.<br><br><b>Olika poler</b> dras till varandra." },
  { front: "Magnetfält", back: "Runt en magnet finns ett <b>magnetfält</b>.<br><br>Fältlinjerna går från nordände till sydände." },
  { front: "Om man delar en magnet", back: "Om man delar en magnet i två delar, får man <b>två nya magneter</b>.<br><br>Båda får både nordände och sydände." },
  { front: "Jorden som magnet", back: "Jorden fungerar som en <b>stor magnet</b>.<br><br>Därför kan en magnet eller kompass ställa in sig i nord-sydlig riktning." },
  { front: "Elektromagnet", back: "En <b>elektromagnet</b> är en spole, ofta runt en järnkärna, som blir magnetisk när ström går genom spolen." },
  { front: "Fördel med elektromagnet", back: "En viktig fördel är att den <b>kan stängas av</b>.<br><br>Vanliga magneter är alltid magnetiska." },
  { front: "Vad påverkar en elektromagnets styrka?", back: "Styrkan beror på <b>strömmens styrka</b> och på <b>antalet varv</b> i spolen." },
  { front: "Induktionsström", back: "<b>Induktionsström</b> uppstår när en magnet rör sig in i eller ut ur en spole." },
  { front: "Transformator", back: "En <b>transformator</b> används för att <b>höja eller sänka spänningen</b>.<br><br>Den består av en primärspole och en sekundärspole." },

  { front: "Varför blir strömmen mindre om resistansen ökar?", back: "En större resistans gör det svårare för laddningarna att röra sig genom ledaren.<br><br>Därför blir <b>strömmen mindre</b> om spänningen är samma." },
  { front: "Varför dras olika magnetpoler till varandra?", back: "Magnetfältet gör att <b>olika poler passar ihop</b> och dras mot varandra.<br><br>Lika poler påverkar i stället varandra så att de trycks bort." },
  { front: "Varför får båda delarna nord- och sydände när en magnet delas?", back: "Magnetismen finns i <b>hela magneten</b>.<br><br>När man delar den försvinner inte polerna, utan varje del blir en <b>ny magnet</b> med två poler." },
  { front: "Varför kan en spik bli magnetisk nära en magnet?", back: "Magnetens fält påverkar spiken så att den tillfälligt ordnar sina magnetiska delar åt samma håll.<br><br>Det kallas <b>influens</b>." },
  { front: "Varför pekar en kompass mot norr och söder?", back: "Kompassnålen är en liten magnet.<br><br>Den påverkas av <b>jordens magnetfält</b> och ställer därför in sig i nord-sydlig riktning." },
  { front: "Hur fungerar en elmotor enkelt förklarat?", back: "När ström går genom en spole i ett magnetfält påverkas spolen av krafter och börjar vrida sig.<br><br>Om strömriktningen byter håll regelbundet fortsätter den att <b>rotera</b>." },
  { front: "Hur uppstår ström i en generator?", back: "När en magnet rör sig vid en spole, eller en spole rör sig i ett magnetfält, uppstår <b>induktionsström</b>.<br><br>Då omvandlas <b>rörelseenergi till elektrisk energi</b>." },
  { front: "Varför kallas strömmen från en generator för växelström?", back: "Strömmen byter <b>riktning hela tiden</b> när magneten eller spolen rör sig.<br><br>Därför kallas den <b>växelström</b>." },
  { front: "Hur kan en transformator höja spänningen?", back: "Om <b>sekundärspolen har fler varv</b> än primärspolen, blir spänningen högre i sekundärspolen." },
  { front: "Varför höjs spänningen i kraftledningar?", back: "Högre spänning gör att mindre energi förloras som värme i ledningarna.<br><br>Därför kan el skickas <b>längre sträckor</b> mer effektivt." }
];