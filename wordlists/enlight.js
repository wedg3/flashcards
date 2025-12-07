const wordlisttitle = "Upplysning och Revolution";

const words = [
  { front: "Med vilka metoder menade upplysningen att det gick att göra världen bättre?", 
    back: "Genom <b>utbildning</b>, <b>vetenskap</b> och <b>förnuft</b>." },

  { front: "Vad menade de med att människan var som ett oskrivet blad (tabula rasa)?", 
    back: "Människan föds som ett <i>oskrivet blad</i> och formas av erfarenheter.<br><br>Alla människor är skapade lika och kan utvecklas genom <b>uppfostran</b>, <b>bra levnadsvillkor</b> och <b>utbildning</b>." },

  { front: "Hur såg Voltaire på tolerans?", 
    back: "Han var mycket positiv till <b>tolerans</b>.<br><br>Upplysningen förespråkade <b>åsiktsfrihet</b> och <b>religionsfrihet</b>." },

  { front: "Vad måste de styrande göra för folket enligt idén om samhällskontraktet?", 
    back: "Skydda folkets <b>naturliga rättigheter</b>: liv, frihet och egendom." },

  { front: "Vad hade folket rätt att göra om de styrande inte skyddade deras rättigheter?", 
    back: "Göra <b>uppror</b> och ersätta dem med ett bättre styre." },

  { front: "Hur borde samhället styras enligt Rousseau?", 
    back: "Genom <b>folkomröstningar</b> med allmän rösträtt för män eller genom folkvalda representanter i ett parlament." },

  { front: "Hur borde samhället styras enligt Montesquieu?", 
    back: "Genom <b>maktdelning</b>:<br><br>• Kung = styrande makt<br>• Parlament = lagstiftande makt<br>• Oberoende domstolar = dömande makt" },

  { front: "Hur borde samhället styras enligt Voltaire?", 
    back: "Genom en <b>upplyst despot</b> – en enväldig kung som styr klokt, med tolerans, utbildning och vetenskap." },

  { front: "Vilken ny idé om samhället förde Mary Wollstonecraft fram?", 
    back: "Att <b>kvinnor</b> borde slippa underordning och bli <b>jämställda</b> med män." },

  { front: "Vilken stormakt besegrades av Storbritannien i kampen om kolonierna i Nordamerika?", 
    back: "Frankrike." },

  { front: "Hur skilde sig de brittiska kolonierna i Nordamerika åt ekonomiskt?", 
    back: "Norr: <b>familjejordbruk</b>.<br>Söder: <b>plantager</b> med t.ex. tobak och bomull." },

  { front: "Hur påverkade ekonomin synen på svarta slavar?", 
    back: "I södern lönade det sig mycket bra att utnyttja <b>slavar</b> på plantagerna." },

  { front: "Vilka var de ekonomiska orsakerna till den amerikanska revolutionen?", 
    back: "• Skatter och avgifter<br>• Kontroll över handeln<br>• Förbud mot nybyggen västerut" },

  { front: "Vilka var de politiska orsakerna till den amerikanska revolutionen?", 
    back: "• Kolonierna vana vid självstyre<br>• “No taxation without representation”<br>• De ansåg att samhällskontraktet brutits" },

  { front: "Hur anknyter USA:s självständighetsförklaring 1776 till samhällskontraktet?", 
    back: "Amerikanerna hävdade <b>naturliga rättigheter</b> (liv, frihet, lycka). När kungen kränkte dem hade folket rätt att göra <b>uppror</b>." },

  { front: "Vilken stormakt hjälpte amerikanerna att vinna?", 
    back: "Frankrike." },

  { front: "Hur fungerar Montesquieus maktdelning i USA?", 
    back: "• Presidenten = styrande makt<br>• Kongressen = lagstiftande makt<br>• Oberoende domstolar kontrollerar lagarna" },

  { front: "Hur skyddades koloniernas självstyre i det nya USA?", 
    back: "Delstaterna fick stort självbestämmande, t.ex. i frågan om slaveri." },

  { front: "På vilka sätt blev USA ett föredöme för upplysningen?", 
    back: "• Tolerans<br>• Religionsfrihet<br>• Ingen adel<br>• Alla lika inför lagen<br>• Folkvald president" },

  { front: "Hur klarade USA problem som Frankrike misslyckades med?", 
    back: "• Revolutionsfiender kunde fly till Kanada<br>• Mindre fattigdom<br>• Inga fiender vid gränsen → fred<br>• Washington vägrade bli diktator" },

  { front: "Vilka var tredje ståndet?", 
    back: "Alla som inte var adel eller kyrka – främst <b>bönder</b>." },

  { front: "Hur missgynnades tredje ståndet av adelns och kyrkans privilegier?", 
    back: "• Endast tredje ståndet betalade skatt<br>• Bönder betalade avgifter till kyrkan och godsägare<br>• Adeln hade ensamrätt till högre tjänster" },

  { front: "Vilket problem gjorde att Ludvig XVI kallade in generalständerna 1789?", 
    back: "Statens utgifter var för stora; endast generalständerna kunde besluta om <b>nya skatter</b>." },

  { front: "Vad gjorde kungen som fick parisarna att storma Bastiljen 14 juli 1789?", 
    back: "Han samlade trupper runt Paris och verkade vilja stoppa folkstyret med <b>våld</b>." },

  { front: "Hur förändrade nationalförsamlingen adelns och kyrkans privilegier i augusti 1789?", 
    back: "Alla privilegier <b>avskaffades</b>. Alla blev lika inför lagen." },

  { front: "Vad var kvinnomarschen till Versailles?", 
    back: "En demonstration av kvinnor som tvingade kungen att flytta till Paris." },

  { front: "Hur påverkades kungens makt av kvinnomarschen?", 
    back: "Han förlorade makt eftersom han stod under folkets uppsikt." },

  { front: "Vilken församling dominerade politiken när kungen förlorat nästan all makt?", 
    back: "Nationalförsamlingen – det folkvalda parlamentet." },

  { front: "Hur begränsades rösträtten i den tidiga franska revolutionen?", 
    back: "Endast ca <b>25%</b> av männen fick rösta. Fattiga män och alla kvinnor saknade rösträtt." },

  { front: "Vilka var orsakerna till kriget mellan Frankrike och grannländerna?", 
    back: "• Kungarna fruktade revolutionen<br>• Vissa fransmän ville sprida revolutionen" },

  { front: "Vad var syftet med jakobinernas skräckvälde?", 
    back: "Att <b>rädda revolutionen</b> genom att avrätta tiotusentals motståndare." },

  { front: "Hur försökte jakobinerna öka jämlikhet och demokrati?", 
    back: "• Maxpris på bröd<br>• Gratis skolgång<br>• Allmän värnplikt" },

  { front: "Hur förändrades Frankrikes försvar under revolutionen?", 
    back: "• <b>Allmän värnplikt</b> → fler soldater<br>• Icke-adliga kunde bli officerare" },

  { front: "Hur gick det för Frankrike i krigen under revolutionen?", 
    back: "Hotet utifrån <b>slogs tillbaka</b>." },

  { front: "Hur slutade skräckväldet?", 
    back: "Robespierre <b>avsattes</b> och <b>avrättades</b>." },

  { front: "Varför kunde Napoleon bli diktator 1799 och senare kejsare?", 
    back: "Han var en <b>framgångsrik general</b> och mycket populär." },

  { front: "Vad blev kvar av revolutionen under Napoleon?", 
    back: "• Likhet inför lagen<br>• Religionsfrihet<br>• Bönder behöll jorden" },

  { front: "Vad kom tillbaka under Napoleon?", 
    back: "• <b>Monarki</b> (Napoleons kejsardöme)<br>• Försoning med katolska kyrkan" },

  { front: "Varför började Napoleon förlora makten efter 1810?", 
    back: "Nederlaget i <b>Ryssland 1812</b>." },

  { front: "Vad ville Europas ledare undvika efter Napoleonkrigen?", 
    back: "• Krig<br>• Revolutioner" },

  { front: "Hur påverkades Latinamerika och Haiti av revolutionen?", 
    back: "• Slavarna på Haiti gjorde uppror → <b>Haiti självständigt</b><br>• Latinamerikanska kolonier blev <b>självständiga</b>" },

   {   front: "Beskriv de 5 viktigaste idéerna av Montesquieu.",
    back: 
      "• <b>Maktdelning</b> – statens makt ska delas i tre delar för att förhindra tyranni.<br><br>" +
      "• <b>Lagarnas anda</b> – lagar måste anpassas efter varje lands kultur och förutsättningar.<br><br>" +
      "• <b>Frihet genom balans</b> – individens frihet skyddas bäst när ingen makt är för stark.<br><br>" +
      "• <b>Kritik mot envälde</b> – absolut kungamakt leder nästan alltid till maktmissbruk.<br><br>" +
      "• <b>Stort inflytande</b> – hans maktdelningslära blev grund för USA:s konstitution och moderna demokratier."
  },

  {
    front: "Beskriv de 5 viktigaste idéerna av Mary Wollstonecraft.",
    back:
      "• <b>Jämställdhet</b> – kvinnor och män är lika förnuftiga och bör ha samma rättigheter.<br><br>" +
      "• <b>Utbildning för kvinnor</b> – flickor ska få lika god utbildning som pojkar för att kunna utvecklas.<br><br>" +
      "• <b>Kritik av kvinnors beroendeställning</b> – kvinnor hålls tillbaka av traditioner, inte av naturen.<br><br>" +
      "• <b>Politisk delaktighet</b> – kvinnor bör få rösträtt och möjlighet att påverka samhället.<br><br>" +
      "• <b>Inflytande</b> – lade grunden för moderna feminismen och kvinnors rättigheter i västvärlden."
  },

  {
    front: "Beskriv de 5 viktigaste idéerna av Rousseau.",
    back:
      "• <b>Folkets suveränitet</b> – all makt utgår från folket, inte från kungar.<br><br>" +
      "• <b>Allmän vilja</b> – samhället bör styras efter folkets gemensamma bästa.<br><br>" +
      "• <b>Direktdemokrati</b> – folket bör direkt besluta i viktiga frågor eller välja representanter.<br><br>" +
      "• <b>Naturlig människa</b> – människan är god från början men korrumperas av samhället.<br><br>" +
      "• <b>Inflytande</b> – hans idéer inspirerade den franska revolutionen och demokratins utveckling."
  },

  {
    front: "Beskriv de 5 viktigaste idéerna av Voltaire.",
    back:
      "• <b>Tolerans</b> – samhället måste präglas av religiös och politisk tolerans.<br><br>" +
      "• <b>Yttrandefrihet</b> – individens rätt att uttrycka sig är avgörande för ett fritt samhälle.<br><br>" +
      "• <b>Kritik av kyrkans makt</b> – kyrkan bör inte styra politiken eller begränsa tänkandet.<br><br>" +
      "• <b>Upplyst despotism</b> – kungen bör styra klokt genom utbildning, vetenskap och mänskliga rättigheter.<br><br>" +
      "• <b>Inflytande</b> – hans idéer bidrog starkt till upplysningens syn på frihet och till moderna mänskliga rättigheter."
  }
];
