const wordlisttitle = "Kemi: Elektrokemi";

const words = [
  { front: "Elektrokemi", back: "Läran om hur <b>elektricitet</b> och <b>kemiska reaktioner</b> hör ihop.<br><br>Det handlar till exempel om batterier, elektrolys och korrosion." },

  { front: "Atom", back: "Allt är uppbyggt av atomer.<br><br>En atom har en kärna och elektroner runt omkring." },

  { front: "Jon", back: "En atom eller molekyl som har fått <b>laddning</b>.<br><br>Det händer när den har tagit upp eller lämnat ifrån sig elektroner." },

  { front: "Positiv jon", back: "En positiv jon har <b>lämnat ifrån sig elektroner</b>.<br><br>Den har då fler positiva laddningar än negativa." },

  { front: "Negativ jon", back: "En negativ jon har <b>tagit upp elektroner</b>.<br><br>Den har då fler negativa laddningar än positiva." },

  { front: "Elektron", back: "En elektron är en mycket liten partikel med <b>negativ laddning</b>.<br><br>I elektrokemi är det elektroner som flyttas mellan ämnen." },

  { front: "Metall", back: "Metaller leder oftast <b>elektrisk ström</b> bra.<br><br>Många metaller kan också reagera så att de bildar joner." },

  { front: "Ädel metall", back: "En ädel metall reagerar <b>inte så lätt</b> med andra ämnen.<br><br>Exempel är guld och silver." },

  { front: "Oädel metall", back: "En oädel metall reagerar <b>lättare</b> och lämnar gärna ifrån sig elektroner.<br><br>Exempel är zink och järn." },

  { front: "Spänningsserien", back: "En lista som visar vilka metaller som är <b>mer eller mindre ädla</b>.<br><br>Den hjälper oss att förstå vilken metall som lättast avger elektroner." },

  { front: "Oxidation", back: "Oxidation betyder att ett ämne <b>lämnar ifrån sig elektroner</b>.<br><br>Man kan säga att ämnet oxideras." },

  { front: "Reduktion", back: "Reduktion betyder att ett ämne <b>tar upp elektroner</b>.<br><br>Man kan säga att ämnet reduceras." },

  { front: "Minnesregel: oxidation och reduktion", back: "<b>Oxidation = avge elektroner.</b><br><br><b>Reduktion = ta upp elektroner.</b>" },

  { front: "Elektrolyt", back: "En elektrolyt är en vätska eller lösning som innehåller <b>joner</b>.<br><br>Därför kan den leda elektrisk ström." },

  { front: "Galvaniskt element", back: "Ett galvaniskt element är en kemisk källa till <b>elektrisk ström</b>.<br><br>Det finns två poler och en reaktion som får elektroner att röra sig." },

  { front: "Batteri", back: "Ett batteri omvandlar <b>kemisk energi</b> till <b>elektrisk energi</b>.<br><br>Det består av ett eller flera galvaniska element." },

  { front: "Minuspol i ett batteri", back: "Vid minuspolen sker <b>oxidation</b>.<br><br>Där lämnas elektroner ifrån, och elektronerna går sedan genom ledningen." },

  { front: "Pluspol i ett batteri", back: "Vid pluspolen sker <b>reduktion</b>.<br><br>Där tas elektroner upp." },

  { front: "Vad är skillnaden mellan pluspol och minuspol?", back: "<b>Minuspolen</b> ger ifrån sig elektroner.<br><br><b>Pluspolen</b> tar emot elektroner." },

  { front: "Daniells element", back: "Daniells element är ett klassiskt galvaniskt element med <b>zink</b> och <b>koppar</b>.<br><br>Det används ofta för att förklara hur batterier fungerar." },

  { front: "Vad händer med zink i Daniells element?", back: "Zink oxideras:<br><br><b>Zn → Zn²⁺ + 2e⁻</b><br><br>Zinkatomer lämnar ifrån sig elektroner och blir zinkjoner." },

  { front: "Vad händer med kopparjoner i Daniells element?", back: "Kopparjoner reduceras:<br><br><b>Cu²⁺ + 2e⁻ → Cu</b><br><br>De tar upp elektroner och blir koppar." },

  { front: "Vilken metall blir till joner i Daniells element?", back: "<b>Zink</b> blir till joner.<br><br>Zinkatomer lämnar ifrån sig elektroner och går ut i lösningen som Zn²⁺." },

  { front: "Vad händer med kopparjonerna vid pluspolen?", back: "De <b>tar upp elektroner</b> och blir kopparatomer.<br><br>Koppar fastnar då på elektroden." },

  { front: "Vad behövs för att ett galvaniskt element ska fungera?", back: "Det behövs <b>två olika ämnen</b> som reagerar olika lätt, en <b>elektrolyt</b> och en väg för elektronerna att gå.<br><br>Då kan ström bildas." },

  { front: "Brunstensbatteri", back: "Ett brunstensbatteri är en äldre vanlig batterityp.<br><br>Det ger elektrisk energi genom kemiska reaktioner." },

  { front: "Alkaliskt batteri", back: "Ett alkaliskt batteri är en vanlig batterityp där elektrolyten är <b>basisk</b>.<br><br>Det håller ofta längre och läcker mer sällan än äldre brunstensbatterier." },

  { front: "Vilket ämne är elektrolyt i ett alkaliskt batteri?", back: "I ett alkaliskt batteri är elektrolyten <b>starkt alkalisk</b>, alltså <b>basisk</b>.<br><br>Det är därför batteriet kallas alkaliskt." },

  { front: "Litiumbatteri", back: "Litiumbatterier kan lagra mycket energi och håller länge.<br><br>Därför används de ofta i till exempel brandvarnare och mobiltelefoner." },

  { front: "Varför är litiumbatterier vanliga i brandvarnare?", back: "De håller <b>länge</b> och fungerar bra under lång tid.<br><br>Det är viktigt i en brandvarnare som måste fungera hela tiden." },

  { front: "Knappcellsbatteri", back: "Ett knappcellsbatteri är ett litet runt batteri.<br><br>Det används i små saker, till exempel klockor och miniräknare." },

  { front: "Ge exempel på något som drivs av knappcellsbatteri", back: "Exempel är <b>armbandsur</b>, <b>hörapparat</b>, <b>miniräknare</b> eller <b>bilnyckel</b>.<br><br>De behöver små batterier." },

  { front: "Korrosion", back: "Korrosion betyder att metaller bryts ner genom reaktioner med omgivningen.<br><br>På järn kallas det oftast <b>rost</b>." },

  { front: "Rost", back: "Rost är korrosion på <b>järn</b> eller stål.<br><br>Det bildas när järn reagerar med syre och vatten." },

  { front: "Hur kan man skydda järn från att rosta?", back: "Man kan till exempel <b>måla</b>, <b>galvanisera</b> eller använda <b>offeranod</b>.<br><br>Alla metoderna gör att järnet skyddas från att reagera." },

  { front: "Offeranod", back: "En offeranod är en <b>oädlare metall</b>, ofta zink, som får reagera i stället för järnet.<br><br>Den 'offrar sig' och skyddar metallen." },

  { front: "Varför finns det ofta bitar av zink på fartyg av stål?", back: "Zinken fungerar som <b>offeranod</b>.<br><br>Den reagerar lättare än stålet och skyddar därför fartyget mot korrosion." },

  { front: "Vad kan hända om man spikar fast kopparplåt med järnspik?", back: "Järnspiken kan börja <b>rosta snabbare</b>.<br><br>Det beror på att två olika metaller tillsammans med fukt kan ge en elektrokemisk reaktion." },

  { front: "Galvanisering", back: "Galvanisering betyder att man täcker järn eller stål med <b>zink</b>.<br><br>Zinken skyddar metallen mot rost." },

  { front: "Varför skyddas en galvaniserad spik även om det blir hål i zinklagret?", back: "Zinken är mer <b>oädel</b> än järn och reagerar först.<br><br>Därför skyddas järnet ändå så länge det finns zink kvar." },

  { front: "Elektrolys", back: "Elektrolys är när man använder <b>elektrisk ström</b> för att tvinga fram en kemisk reaktion.<br><br>Det är alltså tvärtom mot ett batteri." },

  { front: "Vad händer vid minuspolen i elektrolys?", back: "Vid minuspolen sker <b>reduktion</b>.<br><br>Positiva joner går dit och tar upp elektroner." },

  { front: "Vad händer vid pluspolen i elektrolys?", back: "Vid pluspolen sker <b>oxidation</b>.<br><br>Negativa joner går dit och lämnar ifrån sig elektroner." },

  { front: "Vad händer med kopparjonerna vid elektrolys av kopparklorid?", back: "Kopparjonerna går till <b>minuspolen</b> och reduceras:<br><br><b>Cu²⁺ + 2e⁻ → Cu</b><br><br>Då bildas kopparmetall." },

  { front: "Vad händer med kloridjonerna vid elektrolys av kopparklorid?", back: "Kloridjonerna går till <b>pluspolen</b> och oxideras:<br><br><b>2Cl⁻ → Cl₂ + 2e⁻</b><br><br>Då bildas klorgas." },

  { front: "Sammantagen reaktion vid elektrolys av kopparklorid", back: "<b>CuCl₂ → Cu + Cl₂</b><br><br>Det betyder att kopparklorid delas upp till koppar och klor." },

  { front: "Elektrolys av vatten", back: "Vid elektrolys av vatten bildas <b>vätgas</b> och <b>syrgas</b>.<br><br>Förenklat kan man skriva:<br><br><b>H₂O → H₂ + O₂</b>" },

  { front: "Elförzinkning", back: "Elförzinkning är när man med hjälp av <b>elektrolys</b> lägger ett lager zink på en metall.<br><br>Det används för att skydda mot rost." },

  { front: "Vilken elektrolyt används vid elförzinkning?", back: "En vanlig elektrolyt är <b>zinksulfat, ZnSO₄</b>.<br><br>Den innehåller zinkjoner som kan fastna på metallen." },

  { front: "Varför ska batterier samlas in även om de verkar ganska ofarliga?", back: "Batterier innehåller ämnen som kan vara skadliga för miljön.<br><br>De innehåller också material som kan återvinnas." },

  { front: "Ge exempel på batterityper med olika metaller", back: "<b>Bly</b> finns i bilbatterier.<br><br><b>Kadmium</b> har funnits i vissa laddbara batterier.<br><br><b>Kvicksilver</b> har funnits i äldre batterier." },

  { front: "Vad består ett laddat bilbatteri av?", back: "Ett bilbatteri har en <b>pluspol</b>, en <b>minuspol</b> och en <b>elektrolyt</b>.<br><br>Det är ett blybatteri som kan laddas upp igen." },

  { front: "Vilka batterier är vanliga i mobiltelefoner?", back: "<b>Litiumjonbatterier</b> är vanligast.<br><br>De kan laddas många gånger och lagrar mycket energi." },

  { front: "Varför uppstår elektrisk spänning mellan två poler i ett batteri?", back: "Det uppstår spänning när ämnena vid polerna har <b>olika lätt att lämna eller ta elektroner</b>.<br><br>Den skillnaden driver elektronerna genom ledningen." },

  { front: "Hur hänger batteri och elektrolys ihop?", back: "I ett <b>batteri</b> ger en kemisk reaktion elektrisk ström.<br><br>Vid <b>elektrolys</b> används elektrisk ström för att skapa en kemisk reaktion." }
];
