const wordlisttitle = "Historia: Källkritik";

const words = [
  
  {
    front: "Vad menas med källkritik?",
    back: "Källkritik i historieämnet betyder att man tittar noga på historiska källor för att bedöma om de är <i>trovärdiga</i> och <i>användbara</i>. Man undersöker eller resonerar om bland annat vem som skapat källan, när den kom till och varför den skrevs."
  },

  {
    front: "Förklara det källkritiska kriteriet <i>Beroende</i>.",
    back: "<b>Beroende</b>: Fråga om källan bygger på andra källor eller om den är självständig. En källa som bara återberättar vad någon annan sagt är mindre säker."
  },
  {
    front: "Förklara det källkritiska kriteriet <i>Äkthet</i>.",
    back: "<b>Äkthet</b>: Fråga om källan är äkta eller falsk. Är dokumentet, föremålet eller berättelsen verkligen från den tid och person den utger sig för att vara?"
  },
  {
    front: "Förklara det källkritiska kriteriet <i>Tid</i>.",
    back: "<b>Tid</b>: Fråga hur lång tid det gått mellan händelsen och när källan skapades. Ju närmare i tid, desto större chans att detaljer stämmer."
  },
  {
    front: "Förklara det källkritiska kriteriet <i>Tendens</i>.",
    back: "<b>Tendens</b>: Fråga om källan försöker påverka oss eller vinkla informationen. En person kan ha egna intressen, vilja försvara sig själv eller få någon annan att framstå på ett visst sätt."
  },

  {
    front: "En soldat skriver i sin dagbok under första världskriget år 1916: <i>\"Vi har ont om mat och många är rädda, men befälen säger att segern är nära.\"</i><br><br>Resonera om källan utifrån några av de fyra källkritiska kriterierna.",
    back: "<b>Beroende:</b> Dagboken verkar vara en <i>förstahandskälla</i> eftersom soldaten själv är med om det som beskrivs.<br><br><b>Äkthet:</b> Om dagboken verkligen är skriven 1916 av soldaten är den äkta. Man behöver kontrollera att den inte är förfalskad eller ändrad i efterhand.<br><br><b>Tid:</b> Källan är stark när det gäller tid eftersom den skrivs under själva kriget. Den ligger nära händelserna.<br><br><b>Tendens:</b> Soldaten kan ändå vara subjektiv. Hen beskriver sina egna upplevelser och vet kanske inte hela sanningen om kriget. Befälens ord om att segern är nära kan också vara propaganda eller försök att hålla modet uppe."
  },
  {
    front: "En kung låter skriva en text på 1500-talet där det står att folket älskar honom och att hans beslut alltid är rättvisa.<br><br>Resonera om källan utifrån några av de fyra källkritiska kriterierna.",
    back: "<b>Beroende:</b> Om texten är skriven på kungens uppdrag kan den bygga på hovets bild av verkligheten och inte på oberoende vittnen.<br><br><b>Äkthet:</b> Om dokumentet verkligen kommer från 1500-talet och från kungens kansli är det äkta.<br><br><b>Tid:</b> Källan är nära i tid till händelserna, vilket är en styrka.<br><br><b>Tendens:</b> Här finns tydlig tendens. Kungen vill framställa sig själv positivt och kan utelämna kritik, uppror eller missnöje. Därför måste man jämföra med andra källor innan man tror på allt."
  },
  {
    front: "En kvinna intervjuas år 1985 om hur det var att arbeta i fabrik som barn år 1930.<br><br>Resonera om källan utifrån några av de fyra källkritiska kriterierna.",
    back: "<b>Beroende:</b> Intervjun bygger på kvinnans egna minnen, så den är ganska självständig. Men intervjuarens frågor kan påverka svaren.<br><br><b>Äkthet:</b> Om intervjun verkligen gjorts med rätt person och spelats in korrekt är källan äkta.<br><br><b>Tid:</b> Här finns en svaghet eftersom det gått cirka 55 år sedan händelserna. Minnet kan förändras, detaljer kan glömmas eller blandas ihop.<br><br><b>Tendens:</b> Kvinnan behöver inte vilja lura någon, men hon kan ändå minnas selektivt eller tolka barndomen utifrån hur hon ser på sitt liv som vuxen. Källan är värdefull men bör jämföras med andra källor."
  },
  {
    front: "En affisch från andra världskriget visar glada soldater och säger att alla måste kämpa för nationens ära.<br><br>Resonera om källan utifrån några av de fyra källkritiska kriterierna.",
    back: "<b>Beroende:</b> Affischen är skapad av staten, militären eller någon organisation som vill påverka människor. Den är inte en oberoende beskrivning.<br><br><b>Äkthet:</b> Om affischen verkligen kommer från krigstiden är den äkta.<br><br><b>Tid:</b> Den är nära händelserna i tid, vilket gör att den säger mycket om samtiden.<br><br><b>Tendens:</b> Tendensen är mycket stark. Syftet är att övertyga människor, inte att ge en neutral bild. Därför är affischen bra för att förstå propaganda och värderingar, men sämre som bevis för hur verkligheten faktiskt såg ut vid fronten."
  },
  {
    front: "En historiebok från år 2020 beskriver vikingatiden med hjälp av arkeologiska fynd, gamla texter och modern forskning.<br><br>Resonera om källan utifrån några av de fyra källkritiska kriterierna.",
    back: "<b>Beroende:</b> Boken är beroende av många äldre källor och av forskarnas tolkningar. Den är alltså en <i>andrahandskälla</i> eller sammanställning.<br><br><b>Äkthet:</b> Själva boken kan vara äkta, men det viktiga är också om den använder äkta och trovärdiga källor.<br><br><b>Tid:</b> Den är långt ifrån vikingatiden i tid, vilket är en svaghet om man vill ha en direkt källa. Samtidigt kan modern forskning ge bättre överblick och jämförelser.<br><br><b>Tendens:</b> En lärobok försöker ofta vara saklig, men urvalet av fakta och tolkningar kan ändå påverkas av författaren. Därför är det bra att se vilka källor boken bygger på."
  },
  {
    front: "En pojke i ett ockuperat land skriver ett brev till sin kusin år 1943 och berättar att han är rädd, att det är ont om mat och att soldater patrullerar gatorna varje dag.<br><br>Resonera om källan utifrån några av de fyra källkritiska kriterierna.",
    back: "<b>Beroende:</b> Brevet är troligen en förstahandskälla eftersom pojken beskriver sina egna upplevelser.<br><br><b>Äkthet:</b> Om brevet verkligen är skrivet år 1943 av pojken är det en äkta källa.<br><br><b>Tid:</b> Källan är mycket nära händelserna i tid, vilket gör den stark för att förstå vardagslivet just då.<br><br><b>Tendens:</b> Pojken kan överdriva eller utelämna saker, särskilt om han är rädd eller vill skydda sin kusin. Men brevet verkar inte i första hand vara propaganda, så tendensen är troligen mindre än i en affisch eller kunglig text. Det är ändå klokt att jämföra med fler källor."
  }
];
