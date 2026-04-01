const wordlisttitle = "Historia: 1500-1815";

const words = [
  {
    front: "<b>Nya tiden</b><br>Hur förändrades Europa och världen ungefär 1500–1800 jämfört med medeltiden när det gäller handel, religion, vetenskap och makt?",
    back: "Under den nya tiden förändrades Europa och världen mycket.<ul><li>Handel och upptäcktsresor ökade kontakten mellan världsdelar</li><li>kungar fick större makt</li><li>reformationen splittrade kyrkan</li><li>vetenskapliga upptäckter förändrade människors syn på världen</li></ul>"
  },
  {
    front: "<b>Starka kungar</b><br>Varför fick kungar i Europa starkare makt under 1500–1600-talet, och varför ledde det ofta till krig?",
    back: "Många kungar byggde upp starka stater där de styrde nästan utan att dela makten med andra. När flera länder samtidigt ville bli mäktigare och erövra områden ledde det ofta till krig."
  },
  {
    front: "<b>Nya sjövägar</b><br>Varför började europeiska länder från 1400-talet söka nya sjövägar till Asien och andra delar av världen?",
    back: "De ville hitta snabbare och billigare vägar till värdefulla varor som kryddor och siden. Det ledde till:<ul><li>upptäcktsresor</li><li>ökad handel över haven</li><li>att européer grundade kolonier i andra världsdelar</li></ul>"
  },
  {
    front: "<b>Kontakt mellan världsdelar</b><br>Vad hände när européer från slutet av 1400-talet fick tätare kontakt med Amerika, Afrika och Asien?",
    back: "Kontakterna mellan världsdelarna ökade kraftigt. Det ledde till:<ul><li>handel och kulturmöten</li><li>erövringar</li><li>spridning av sjukdomar</li><li>att européer tog kontroll över andra folk och områden</li></ul>"
  },
  {
    front: "<b>Sydamerika</b><br>Varför blev Sydamerika under 1500-talet en viktig plats för spanjorer och portugiser, och vad fick det för följder?",
    back: "Spanjorer och portugiser ville åt rikedomar som guld och silver. Erövringarna ledde till att ursprungsbefolkningar:<ul><li>förlorade makt</li><li>tvingades till arbete</li><li>drabbades hårt av våld och sjukdomar</li></ul>"
  },
  {
    front: "<b>Triangelhandeln</b><br>Hur bands Europa, Afrika och Amerika ihop i handeln från 1500-talet, och vilken roll hade slavhandeln i detta system?",
    back: "I triangelhandeln skickade Europa varor till Afrika, från Afrika fördes förslavade människor till Amerika och från Amerika skeppades råvaror som socker, tobak och bomull till Europa. Slavhandeln var en central och brutal del av detta system."
  },
  {
    front: "<b>Asien och handeln</b><br>Varför var Asien fortfarande mycket viktigt för världshandeln under 1500–1700-talet trots att européerna upptäckte nya delar av världen?",
    back: "Asien var viktigt eftersom där fanns eftertraktade varor som:<ul><li>kryddor</li><li>siden</li><li>porslin</li></ul>Dessutom hade asiatiska riken redan starka handelsnätverk och stor ekonomisk betydelse, vilket gjorde att européerna ville få del av handeln."
  },
  {
    front: "<b>Nya sätt att tänka</b><br>Hur förändrades människors sätt att tänka under 1500- och 1600-talet när gamla sanningar började ifrågasättas?",
    back: "Människor började i högre grad använda:<ul><li>observationer</li><li>experiment</li><li>förnuft</li></ul>Nya vetenskapliga upptäckter gjorde att gamla idéer om naturen, jorden och universum ifrågasattes och en ny världsbild växte fram."
  },
  {
    front: "<b>Reformationen</b><br>Varför utmanades den katolska kyrkan på 1500-talet, och hur förändrade det Europa?",
    back: "Den katolska kyrkan kritiserades för missbruk och för att ha för stor makt. Reformationen ledde till att protestantiska kyrkor växte fram, vilket förändrade:<ul><li>religionen</li><li>politiken</li><li>maktförhållandena i Europa</li></ul>"
  },
  {
    front: "<b>Trettioåriga kriget</b><br>Varför blev kriget i Europa 1618–1648 så långt och förödande, och vad handlade det om?",
    back: "Trettioåriga kriget började som en konflikt om religion men handlade också om makt mellan olika stater och furstar. Kriget spreds över stora delar av Europa och ledde till enorm förstörelse och stort lidande för befolkningen."
  },

  {
    front: "<b>Förändring före revolutionerna</b><br>Vad var det som började förändras i Europa under slutet av 1700-talet, strax före revolutionernas tid?",
    back: "Gamla maktordningar började ifrågasättas allt mer. Upplysningens idéer spreds, missnöjet växte mot orättvisor och många började kräva:<ul><li>större frihet</li><li>rättigheter</li><li>inflytande</li></ul>"
  },
  {
    front: "<b>Stormakter på 1700-talet</b><br>Hur försökte Europas stormakter under 1700-talet skaffa sig mer makt både i Europa och i andra delar av världen?",
    back: "Stormakterna använde:<ul><li>krig</li><li>allianser</li><li>handel</li><li>kolonier</li></ul>för att stärka sin makt. Kampen om områden och inflytande påverkade både Europa och stora delar av världen."
  },
  {
    front: "<b>Upplysningen</b><br>Vad menade upplysningens tänkare under 1700-talet om förnuft, makt och människans rättigheter?",
    back: "De menade att samhället borde bygga på förnuft och kunskap i stället för gamla traditioner och blind lydnad. De kritiserade envälde och betonade:<ul><li>frihet</li><li>rättigheter</li><li>att makten borde kunna granskas och begränsas</li></ul>"
  },
  {
    front: "<b>Spänt läge i Europa</b><br>Varför var läget i Europa vid 1700-talets slut så spänt att stora förändringar snart kunde bryta ut?",
    back: "Samhället präglades av stora orättvisor, fattigdom och brist på politiskt inflytande för många människor. Samtidigt hade nya idéer om frihet och rättigheter spridits, vilket gjorde att missnöjet växte."
  },

  {
    front: "<b>Det långa 1800-talet</b><br>Varför brukar perioden från franska revolutionen 1789 till första världskriget 1914 kallas det långa 1800-talet?",
    back: "Den kallas så eftersom de viktigaste förändringarna inte följer exakt århundradets gränser. Perioden präglas av:<ul><li>revolutioner</li><li>nationalism</li><li>industrialisering</li><li>stora politiska och sociala förändringar</li></ul>"
  },
  {
    front: "<b>Revolutioner och uppror</b><br>Varför bröt så många revolutioner och uppror ut i Europa och Amerika under slutet av 1700-talet och 1800-talet?",
    back: "Många människor ville ha:<ul><li>större frihet</li><li>nationellt självbestämmande</li><li>mer politiskt inflytande</li></ul>Missnöje med gamla makthavare, sociala orättvisor och nya idéer om folkstyre drev fram revolutionerna."
  },

  {
    front: "<b>USA blir självständigt</b><br>Varför gjorde de brittiska kolonierna i Nordamerika uppror omkring 1775–1783, och hur ledde det till att USA bildades?",
    back: "Kolonisterna protesterade mot brittiska skatter och att de saknade politiskt inflytande. Konflikten växte till ett frihetskrig, och efter segern blev kolonierna självständiga och bildade USA."
  },
  {
    front: "<b>Kolonier i Amerika</b><br>Varför hade europeiska stater kolonier i Amerika under 1600- och 1700-talet, och hur fungerade dessa samhällen?",
    back: "Kolonierna gav moderländerna:<ul><li>råvaror</li><li>handel</li><li>makt</li></ul>De styrdes av europeiska länder men befolkades av bosättare, förslavade människor och ursprungsfolk, vilket skapade stora skillnader och konflikter."
  },
  {
    front: "<b>Protester i Nordamerika</b><br>Varför började kolonisterna i Nordamerika protestera mot Storbritannien under 1760- och 1770-talet?",
    back: "De protesterade eftersom de fick betala skatter utan att vara representerade i det brittiska parlamentet. De ansåg att detta var orättvist och började kräva samma rättigheter som britter i hemlandet."
  },
  {
    front: "<b>Samarbete mellan kolonierna</b><br>Hur gick de tretton kolonierna från missnöje till samarbete och revolution under 1770-talet?",
    back: "Kolonierna började samarbeta genom kontinentalkongressen för att gemensamt möta Storbritannien. När motsättningarna växte blev samarbetet en grund för revolution och kamp för självständighet."
  },
  {
    front: "<b>Frihetskriget</b><br>Hur utvecklades protesterna i Nordamerika till ett riktigt krig om självständighet 1775–1783?",
    back: "När kompromisser inte längre fungerade började väpnade strider mellan kolonister och brittiska soldater. Kolonisterna förklarade sig självständiga och kämpade sedan i flera år för att vinna sin frihet."
  },

  {
    front: "<b>Franska revolutionen</b><br>Varför räknas händelserna i Frankrike från 1789 som en revolution som förändrade både landet och Europa?",
    back: "Den franska revolutionen störtade det gamla samhället med kungligt envälde och privilegier för adel och präster. Den spred idéer om:<ul><li>frihet</li><li>jämlikhet</li><li>folkets rättigheter</li></ul>vilket påverkade många andra länder."
  },
  {
    front: "<b>Orättvisor i Frankrike</b><br>Hur såg orättvisorna ut i Frankrike före 1789 när adel, präster och vanliga människor hade så olika villkor?",
    back: "Frankrike var ett ståndssamhälle där adel och präster hade privilegier och betalade mindre skatt, medan vanliga människor stod för den största bördan. Detta skapade starkt missnöje, särskilt bland bönder och borgare."
  },
  {
    front: "<b>Ståndsriksdagen 1789</b><br>Varför blev mötet med ståndsriksdagen 1789 en startpunkt för revolutionen i Frankrike?",
    back: "Det visade tydligt att systemet var orättvist eftersom tredje ståndet representerade flest människor men ändå hade för lite makt. När de krävde förändring och större inflytande tog revolutionen fart."
  },
  {
    front: "<b>Konstitution och lagar</b><br>Varför ville många i Frankrike från 1789 begränsa kungens makt med lagar och en grundlag?",
    back: "De ville skapa ett rättvisare styre där makten inte låg helt hos kungen. En konstitution skulle ge tydliga regler för hur landet styrdes och ge folket större inflytande."
  },
  {
    front: "<b>Skräckväldet</b><br>Hur kunde revolutionen i Frankrike 1793–1794 bli så våldsam att tusentals människor avrättades?",
    back: "Revolutionens ledare ansåg att fiender inom och utanför landet hotade revolutionen. Därför användes:<ul><li>terror</li><li>misstänksamhet</li><li>avrättningar</li></ul>för att försöka försvara den nya ordningen."
  },
  {
    front: "<b>Reaktion efter terrorn</b><br>Varför kom det en reaktion mot det våldsamma styret i Frankrike efter 1794?",
    back: "Många hade tröttnat på avrättningar, rädsla och extremt våld. Därför försvagades de mest radikala ledarna, och man försökte skapa ett mindre brutalt styre."
  },
  {
    front: "<b>Kvinnor i revolutionen</b><br>Hur deltog kvinnor i revolutionen i Frankrike från 1789, och varför fick de ändå inte samma rättigheter som män?",
    back: "Kvinnor deltog i protester, marscher och politiska diskussioner och spelade en viktig roll i revolutionen. Trots det behöll männen det mesta av den politiska makten, och kvinnors rättigheter förblev begränsade."
  },
  {
    front: "<b>Idéer som levde kvar</b><br>Vilka idéer från revolutionen i Frankrike levde kvar i Europa efter 1789 trots våld och politiskt kaos?",
    back: "Idéer om:<ul><li>medborgarskap</li><li>jämlikhet inför lagen</li><li>folkstyre</li><li>nationalism</li></ul>levde vidare. De påverkade senare revolutioner och förändrade hur människor såg på stat, rättigheter och makt."
  },

  {
    front: "<b>Napoleon</b><br>Hur kunde en militär ledare som Napoleon dominera Frankrike och stora delar av Europa ungefär 1799–1815?",
    back: "Efter revolutionens kaos tog Napoleon makten genom sin starka ställning som militär ledare. Han skapade ordning i Frankrike, genomförde reformer och byggde samtidigt upp ett välde genom krig."
  },
  {
    front: "<b>Napoleon blir kejsare</b><br>Hur gick det till när Napoleon först tog makten i Frankrike och sedan krönte sig till kejsare 1804?",
    back: "Napoleon utnyttjade den politiska oron efter revolutionen och tog kontroll över staten. När han krönte sig till kejsare visade det att han ville samla makten hos sig själv och styra mycket starkt."
  },
  {
    front: "<b>Napoleon och revolutionens idéer</b><br>På vilket sätt förde Napoleon vidare vissa idéer från revolutionen, samtidigt som han begränsade friheten i Frankrike?",
    back: "Han behöll reformer som:<ul><li>tydligare lagar</li><li>effektivare administration</li><li>större jämlikhet inför lagen</li></ul>Samtidigt styrde han auktoritärt och tillät inte full politisk frihet."
  },
  {
    front: "<b>Napoleonkrigen</b><br>Varför drogs nästan hela Europa in i nya krig under Napoleonåren 1803–1815?",
    back: "Napoleon ville utvidga Frankrikes makt och kontroll över Europa. Det ledde till att många andra länder gick samman mot honom, vilket skapade en lång rad stora krig."
  },
  {
    front: "<b>Hjälte eller tyrann</b><br>Varför har människor efter 1815 beskrivit Napoleon både som en hjälte och som en tyrann?",
    back: "Vissa ser honom som en skicklig ledare som moderniserade lagar och stat. Andra ser honom som en makthungrig härskare som startade krig, begränsade frihet och orsakade stort lidande."
  }
];
