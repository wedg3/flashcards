const wordlisttitle = "Energi och energikällor";

const words = [
  { front: "Energi (E)", back: "Energi är förmågan att utföra arbete eller orsaka förändring.<br><br>Mäts i <b>joule (J)</b>." },
  { front: "Kraft (F)", back: "Kraft är något som kan ändra ett föremåls fart eller riktning.<br><br>Mäts i <b>newton (N)</b>." },
  { front: "Arbete (W)", back: "När en kraft flyttar ett föremål en viss sträcka.<br><br>Formel: <b>W = F × s</b>.<br>Mäts i <b>newtonmeter (Nm)</b>." },
  { front: "Massa (m)", back: "Massa beskriver hur mycket materia ett föremål innehåller.<br><br>Mäts i <b>kilogram (kg)</b>." },
  { front: "Effekt (P)", back: "Effekt visar hur snabbt energi används eller arbete utförs.<br><br>Mäts i <b>watt (W)</b> = 1 J/s." },
  { front: "Energiform", back: "Ett sätt som energi kan finnas på.<br><br>Ex: <i>rörelseenergi, lägesenergi, värmeenergi, elektrisk energi</i>." },
  { front: "Energiomvandling", back: "När energi går från en form till en annan.<br><br>Ex: <i>rörelseenergi → elektrisk energi</i>." },
  { front: "Energikvalitet", back: "Hur användbar en energiform är.<br><br><b>Hög:</b> elektrisk energi.<br><b>Låg:</b> värmeenergi.<br><br>Energi går från hög till låg kvalitet." },
  { front: "Energikälla", back: "Något vi kan utvinna energi från.<br><br>Ex: sol, vind, vatten, fossila bränslen." },
  { front: "Energikedja", back: "Visar hur energi omvandlas steg för steg.<br><br>Ex: <i>solenergi → vatten i rörelse → vattenkraftverk → elektricitet</i>." },
  { front: "Förnybar energikälla", back: "Fylls på naturligt.<br><br>Ex: <i>sol, vind, vatten, biomassa</i>." },
  { front: "Icke förnybar energikälla", back: "Tar slut och återskapas långsamt.<br><br>Ex: <i>olja, kol, naturgas</i>." },
  { front: "Generator", back: "Omvandlar <b>rörelseenergi</b> till <b>elektrisk energi</b> genom induktion." },
  { front: "Turbin", back: "En propellerliknande del som snurrar av vatten, vind eller ånga och driver en generator." },
  { front: "Kondensor", back: "Kyler ner ånga till vatten igen så att processen kan upprepas i ett kraftverk." },
  { front: "Induktion", back: "När en elektrisk ström skapas av att en ledare rör sig i ett magnetfält.<br><br>Elektronerna sätts i rörelse." },

  /* Formler */
  { front: "Formel: W = F × s", back: "Beräknar arbete.<br><br>Exempel:<br>10 N × 3 m = <b>30 Nm</b>." },
  { front: "Formel: P = U × I", back: "Visar elektrisk effekt.<br><br>Exempel:<br>12 V × 2 A = <b>24 W</b>." },
  { front: "Formel: P = W / t", back: "Beräknar effekt.<br><br>Exempel:<br>100 J / 5 s = <b>20 W</b>." },

  /* Förklaringar */
  { front: "Hur skapas el av vinden?", back: "Vind → rotorblad snurrar → turbin → generator.<br><br>I generatorn sker <b>induktion</b>: en magnet roterar och får elektroner i spolar att röra sig → elektricitet." },

  /* Beräkningsexempel */
  { front: "Arbete – exempel", back: "50 N × 4 m = <b>200 Nm</b>." },
  { front: "Effekt – exempel 1", back: "600 J arbete på 3 s → <b>200 W</b>." },
  { front: "Effekt – exempel 2 (elektrisk)", back: "12 V × 3 A = <b>36 W</b>." },

  /* Kännedom */
  { front: "Energiformer – exempel", back: "Rörelseenergi, lägesenergi, värmeenergi, elektrisk energi, strålningsenergi, kemisk energi." },

  { front: "Förnybara energikällor – exempel", back: "Solenergi, vindenergi, vattenkraft." },
  { front: "Icke förnybara energikällor – exempel", back: "Kärnkraft, kol, olja, naturgas." },

  { front: "Energiomvandling – exempel", back: "Vindens rörelseenergi → elektrisk energi i ett vindkraftverk." },

  { front: "Skillnad: förnybar vs icke förnybar", back: "<b>Förnybar:</b> tar inte slut.<br><b>Icke förnybar:</b> finns i begränsad mängd och ger ofta mer utsläpp." },

  /* För- och nackdelar */
  { front: "Vindkraft – fördel & nackdel", back: "<b>Fördel:</b> Förnybar, nästan inga CO₂-utsläpp.<br><b>Nackdel:</b> Oregelbunden produktion." },
  { front: "Vattenkraft – fördel & nackdel", back: "<b>Fördel:</b> Stabil och styrbar.<br><b>Nackdel:</b> Påverkar ekosystem." },
  { front: "Solenergi – fördel & nackdel", back: "<b>Fördel:</b> Förnybar och miljövänlig.<br><b>Nackdel:</b> Producerar bara när solen lyser." },
  { front: "Kärnkraft – fördel & nackdel", back: "<b>Fördel:</b> Ger mycket energi, nästan fossilfri.<br><b>Nackdel:</b> Radioaktivt avfall och risker vid olyckor." },
  { front: "Fossila bränslen – fördel & nackdel", back: "<b>Fördel:</b> Enkla att lagra och ger mycket energi.<br><b>Nackdel:</b> Stora klimatutsläpp." }
];
