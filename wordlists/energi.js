const wordlisttitle = "Högstadiet: Energi och energikällor";

const words = [
  { front: "Vad är energi och vilken enhet mäts den i?", back: "Energi är förmågan att utföra arbete eller orsaka förändring.<br><br>Den mäts i <b>joule (J)</b>." },

  { front: "Vad betyder begreppet kraft?", back: "Kraft är något som kan ändra ett föremåls fart eller riktning.<br><br>Mäts i <b>newton (N)</b>." },

  { front: "Vad menas med fysikaliskt arbete?", back: "Arbete är när en kraft flyttar ett föremål en viss sträcka.<br><br><i>W = F × s</i>" },

  { front: "Vad är massa?", back: "Massa anger hur mycket materia ett föremål innehåller.<br><br>Mäts i <b>kilogram (kg)</b>." },

  { front: "Vad beskriver effekt?", back: "Effekt visar hur snabbt energi används eller arbete utförs.<br><br>Mäts i <b>watt (W)</b> = J/s." },

  { front: "Vad är en energiform?", back: "Olika sätt som energi kan finnas på, t.ex.:<br><br>• rörelseenergi<br>• lägesenergi<br>• värmeenergi<br>• elektrisk energi" },

  { front: "Vad menas med energiomvandling?", back: "När energi övergår från en form till en annan.<br><br>Ex: rörelseenergi → elektrisk energi." },

  { front: "Vad innebär energikvalitet?", back: "Hur <b>användbar</b> en energiform är.<br><br>Energi går från hög kvalitet till låg kvalitet. Den är hela tiden lika stor men den blir mindre användbar. Exempel: energin från maten du äter är mer användbar (har högre kvalitet) än värmen som din kropp strålar ut.  " },

  { front: "Vad är en energikälla?", back: "Något vi kan utvinna energi från, t.ex. solen, vind, vatten eller fossila bränslen." },

   { front: "Vad menas med en energikedja?", back: "Visar stegvisa energiomvandlingar.<br><br>Exempel: <br>solljus (<b>strålningsenergi</b>) → <br>vatten stiger (får <b>lägesenergi</b>) → <br>vatten faller (<b>rörelseenergi</b>) → <br>vattenkraftverk får elektroner att röra sig (<b>elektrisk energi</b>) → <br>ström av elektroner får magneter i en elvisp att snurra (<b>rörelseenergi</b> och <b>värme</b>)" },
  { front: "Vad är en förnybar energikälla?", back: "En energikälla som fylls på naturligt.<br><br>Ex: sol, vind, vatten, biomassa." },

  { front: "Vad är en icke förnybar energikälla?", back: "En energikälla som inte återskapas snabbt och som kommer att ta slut.<br><br>Ex: olja, kol, naturgas." },

  { front: "Vad gör en generator?", back: "Omvandlar <b>rörelseenergi</b> till <b>elektrisk energi</b> genom induktion (magneter rör sig och får elektroner att röra sig i våra ledningar)." },

  { front: "Vad är en turbin?", back: "En propellerliknande del som snurrar av t.ex. vatten, vind eller ånga och driver en generator." },

  { front: "Vad gör en kondensor i ett kraftverk?", back: "Kyler ner ånga så att den blir vatten igen, så processen kan fortsätta." },

  { front: "Vad är elektromagnetisk induktion?", back: "En elektrisk ström skapas när en ledare (t.ex. koppartråd) rör sig i ett magnetfält." },

  { front: "Hur räknar man ut arbete?", 
    back: "Med formeln W = F × s — arbete (W) är kraft (F) gånger sträcka (s). <br><br>Exempel: 10 N × 2 m = 20 J." 
  },

  { front: "Hur räknar man ut effekt?", 
    back: "Effekt (P) = arbete (W) ÷ tid (t), alltså P = W / t. <br><br>Exempel: 20 J ÷ 4 s = 5 W." 
  },

  { front: "Hur räknar man ut elektrisk effekt?", 
    back: "Elektrisk effekt (P) = spänning (U) × ström (I), alltså P = U × I. <br><br>Exempel: 6 V × 2 A = 12 W." 
  },

  { front: "Hur kan vinden skapa elektricitet?", 
    back: "Vinden snurrar rotorblad → turbin roterar → generator skapar ström genom induktion (magneter får elektroner att röra på sig i koppartråd)." 
  },

  { 
    front: "Du puttar en låda med 50 N över 4 meter. Hur stort arbete utförs?", 
    back: "<b>200 Nm</b><br>Formel: W = F · s<br>Beräkning: 50 N · 4 m = 200 Nm" 
  },

  { 
    front: "En motor gör 600 J arbete på 3 s. Vilken effekt har den?", 
    back: "<b>200 W</b><br>Effekt = Arbete / tid. P = W / t<br>Beräkning: 600 J / 3 s = 200 Watt" 
  },

  { 
    front: "En apparat har 12 V och 3 A. Vilken effekt ger den?", 
    back: "<b>36 W</b><br>El-Effekt (P) = Spänning (U) x ström (I) <br>P = U · I<br>Beräkning: 12 V · 3 A = 36 Watt" 
  },

  { front: "Nämn några energiformer.", back: "• Rörelseenergi<br>• Lägesenergi<br>• Värmeenergi<br>• Elektrisk energi<br>• Strålningsenergi<br>• Kemisk energi" },

  { front: "Nämn några förnybara energikällor.", back: "• Solenergi<br>• Vindenergi<br>• Vattenkraft" },

  { front: "Nämn några icke förnybara energikällor.", back: "• Kärnkraft<br>• Kol<br>• Olja<br>• Naturgas" },

  { front: "Ge exempel på en energiomvandling.", back: "Vindens rörelseenergi → elektrisk energi i vindkraftverk." },

  { front: "Skillnad mellan förnybara och icke förnybara energikällor?", back: "Förnybara tar inte slut och fylls på naturligt.<br><br>Icke förnybara finns i begränsad mängd och kommer att ta slut." },

  { front: "Fördelar och nackdelar med vindkraft?", back: "Exempel:<br><br><b>Fördel:</b> Förnybar, utsläppsfri.<br><br><b>Nackdel:</b> Vind varierar och då också elproduktionen" },

  { front: "Fördelar och nackdelar med vattenkraft?", back: "Exempel:<br><br><b>Fördel:</b> Stabil, styrbar energi.<br><br><b>Nackdel:</b> Påverkar ekosystem." },

  { front: "Fördelar och nackdelar med solenergi?", back: "Exempel:<br><br><b>Fördel:</b> Förnybar och miljövänlig.<br><br><b>Nackdel:</b> Producerar bara när solen lyser." },

  { front: "Fördelar och nackdelar med kärnkraft?", back: "Exempel:<br><br><b>Fördel:</b> Mycket energi, nästan fossilfri.<br><br><b>Nackdel:</b> Radioaktivt avfall och risk för olyckor." },

  { front: "Fördelar och nackdelar med fossila bränslen?", back: "Exempel:<br><br><b>Fördel:</b> Effektiv. Lätt att lagra och använda.<br><br><b>Nackdel:</b> Stora utsläpp. Bidrar starkt till global uppvärmning." }
];
