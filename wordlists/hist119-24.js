const wordlisttitle = "Historia: 1910-2010";

const words = [
  {
    front: "Hur kunde Europa gå från spänningar och allianser till ett storkrig 1914–1918 som förändrade hela världen?",
    back: "Första världskriget bröt ut efter en lång tid av motsättningar mellan Europas stormakter. Nationalism, kapprustning, imperialism och starka allianser gjorde att en enskild kris kunde utvecklas till ett mycket stort krig."
  },
  {
    front: "Hur förändrades läget i Europa under åren före 1914 från fred till växande konflikt mellan stormakterna?",
    back: "Före kriget ökade spänningarna genom rivalitet mellan stormakter, militär upprustning och hård nationalism. Europa delades upp i allianser, vilket gjorde att motsättningarna blev allt farligare."
  },
  {
    front: "Varför bröt första världskriget ut just 1914, och vilka bakomliggande orsaker låg bakom?",
    back: "Skotten i Sarajevo blev den utlösande faktorn, men kriget hade djupare orsaker. Allianser, imperialism, nationalism och kapprustning gjorde att konflikten snabbt spreds mellan många länder."
  },
  {
    front: "Varför fastnade kriget på västfronten 1914–1918 i skyttegravar och långa blodiga strider?",
    back: "På västfronten stod arméerna länge stilla mot varandra eftersom båda sidor var starka och försvarsvapnen var mycket effektiva. Resultatet blev skyttegravskrig, stora förluster och små framryckningar."
  },
  {
    front: "Hur såg kriget ut på andra fronter än i väst under första världskriget 1914–1918?",
    back: "Kriget utkämpades också i öst, på Balkan, i Mellanöstern och i kolonier. Där rörde sig fronterna ofta mer än i väst, men även där drabbades soldater och civila hårt."
  },
  {
    front: "Varför började kriget gå mot sitt slut 1917–1918, och vad avgjorde utgången?",
    back: "Tyskland och dess allierade försvagades av blockader, brist på resurser och hårda strider. Samtidigt fick ententen stöd av USA, vilket bidrog till att maktbalansen förändrades."
  },
  {
    front: "Varför skapade freden efter första världskriget 1919 inte någon verkligt stabil fred i Europa?",
    back: "Freden blev hård mot Tyskland och skapade bitterhet och missnöje. Nya gränser och nya stater skapade också problem, vilket gjorde att många konflikter levde kvar."
  },

  {
    front: "Varför blev åren 1918–1939 inte en lugn fredstid utan i stället en orolig period mellan två världskrig?",
    back: "Mellankrigstiden präglades av ekonomiska kriser, politisk oro, svaga demokratier och framväxten av diktaturer. Många problem från första världskriget löstes aldrig, vilket gjorde perioden instabil."
  },
  {
    front: "Varför hoppades många efter 1918 att världen aldrig mer skulle drabbas av ett nytt storkrig?",
    back: "Första världskriget hade orsakat enorma förluster och stort lidande. Därför ville många skapa en fredligare värld genom avtal, internationellt samarbete och nya organisationer."
  },
  {
    front: "Varför började människor under 1920-talet tala om både framtidstro och osäkerhet efter första världskriget?",
    back: "1920-talet präglades på många håll av modernisering, nöjen och ekonomisk utveckling, men samtidigt fanns djupa sår efter kriget. Därför blandades optimism med osäkerhet om framtiden."
  },
  {
    front: "Hur kunde ekonomin växa i flera länder under 1920-talet men ändå krascha så hårt från 1929?",
    back: "Under 1920-talet ökade produktion, konsumtion och investeringar, men ekonomin byggde delvis på osäkra lån och spekulation. När börsen kraschade 1929 spreds krisen snabbt och blev global."
  },
  {
    front: "Varför förändrades Ryssland så mycket efter revolutionen och fram till Sovjetunionens tid under 1920- och 1930-talet?",
    back: "Efter revolutionen byggdes ett nytt kommunistiskt system upp där staten tog stor kontroll över politik och ekonomi. Landet förändrades snabbt, men utvecklingen präglades också av våld, förtryck och stark centralstyrning."
  },
  {
    front: "Varför fick diktaturer fäste i länder som Italien och Spanien under mellankrigstiden?",
    back: "Ekonomiska problem, rädsla för oro och svaga demokratiska traditioner gjorde att många sökte starka ledare. I Italien växte fascismen fram, och i Spanien ledde konflikter till inbördeskrig och diktatur."
  },
  {
    front: "Hur kunde demokratin i Tyskland brytas ned så att nazisterna tog makten 1933?",
    back: "Tyskland drabbades hårt av ekonomisk kris, arbetslöshet och missnöje efter första världskriget. Nazisterna utnyttjade detta genom propaganda, nationalism och löften om ordning, och kunde sedan avskaffa demokratin."
  },
  {
    front: "Vad ville nazisterna förändra i Tyskland under 1930-talet, och hur styrde de landet?",
    back: "Nazisterna ville skapa en diktatur byggd på lydnad, nationalism, rasism och förföljelse av dem de såg som fiender. Staten kontrollerade politik, medier, skola och stora delar av människors liv."
  },
  {
    front: "Varför började människor förföljas i Europa under 1930-talet på grund av religion, politik och ursprung?",
    back: "Diktaturer, särskilt Nazityskland, byggde sin makt på att peka ut grupper som hot. Judar, romer, politiska motståndare och andra förföljdes, fråntogs rättigheter och utsattes för våld."
  },
  {
    front: "Varför blev 1930-talets upprustning och aggressiva politik tydliga tecken på att ett nytt krig närmade sig?",
    back: "Flera diktaturer började rusta upp militärt, bryta mot fredsavtal och erövra områden. Omvärlden reagerade ofta svagt, vilket gjorde att hotet om ett nytt stort krig växte."
  },
  {
    front: "Hur gick Sverige under 1920- och 1930-talet stegvis mot att bli en starkare demokrati?",
    back: "Sverige utvecklade demokratin genom allmän och lika rösträtt, starkare riksdag och större politiskt deltagande. Samtidigt växte samarbetet mellan olika grupper i samhället."
  },
  {
    front: "Varför bröt det ut inbördeskrig i Finland 1918, kort efter att landet blivit självständigt?",
    back: "Finland var djupt splittrat mellan olika politiska och sociala grupper. Motsättningar om makt, samhällsutveckling och klass ledde till ett blodigt inbördeskrig."
  },

  {
    front: "Hur kunde ett nytt världskrig bryta ut 1939 trots erfarenheterna från det första världskriget?",
    back: "Andra världskriget bröt ut eftersom fredsuppgörelsen efter första världskriget hade lämnat starkt missnöje, samtidigt som diktaturer rustade upp och försökte erövra nya områden. När Tyskland angrep Polen 1939 började kriget."
  },
  {
    front: "Varför blev avtalet mellan Tyskland och Sovjetunionen 1939 så viktigt precis före krigsutbrottet?",
    back: "Molotov–Ribbentrop-pakten gjorde att Tyskland kunde angripa Polen utan att riskera direkt krig med Sovjetunionen samtidigt. Avtalet visade också hur maktpolitik kunde väga tyngre än ideologiska motsättningar."
  },
  {
    front: "Hur började andra världskriget i Europa 1939, och varför spreds det så snabbt?",
    back: "Kriget började när Tyskland invaderade Polen. Eftersom Storbritannien och Frankrike förklarade krig mot Tyskland och flera stater drogs in genom allianser och erövringar spreds kriget snabbt."
  },
  {
    front: "Varför kunde Tyskland vinna så stora framgångar i Västeuropa under de första krigsåren 1939–1941?",
    back: "Tyskland använde snabba och samordnade anfall med flyg, stridsvagnar och motoriserade trupper. Denna krigföring överrumplade motståndarna och ledde till snabba segrar i flera länder."
  },
  {
    front: "Hur förändrades kriget när Tyskland angrep Sovjetunionen 1941 och striderna i öst blev allt brutalare?",
    back: "Kriget i öst blev mycket stort och extremt blodigt. Där kämpade arméerna över enorma områden, och både soldater och civila drabbades av våld, svält och massdöd."
  },
  {
    front: "Varför började kriget vända efter några år, så att axelmakterna till slut förlorade 1945?",
    back: "Tyskland och dess allierade försvagades av långa fronter, stora förluster och brist på resurser. Samtidigt blev de allierade starkare genom samarbete, industriell styrka och segrar på flera fronter."
  },
  {
    front: "Varför blev kriget i Stilla havet så viktigt efter 1941, och vilka stater stod mot varandra där?",
    back: "Efter Japans expansion och anfallet mot Pearl Harbor blev kriget i Asien och Stilla havet en central del av världskriget. Där stred främst Japan mot USA och andra allierade makter."
  },
  {
    front: "Vad var Förintelsen, och varför räknas den som ett av historiens värsta brott?",
    back: "Förintelsen var Nazitysklands systematiska folkmord på judar och även förföljelse och mord på andra grupper som romer, funktionsnedsatta och politiska motståndare. Den räknas som ett av historiens värsta brott eftersom miljoner människor mördades planerat och industriellt."
  },
  {
    front: "Hur påverkades världen av det som hände efter 1945 när kriget var slut men följderna levde kvar?",
    back: "Efter kriget låg stora delar av Europa i ruiner, miljontals människor var döda eller hemlösa och nya maktförhållanden växte fram. Samtidigt började arbetet med återuppbyggnad, internationellt samarbete och att försöka förhindra nya katastrofer."
  },
  {
    front: "Hur påverkades Norden av andra världskriget 1939–1945 trots att länderna hade olika roller i kriget?",
    back: "Norden påverkades starkt genom ockupation, krig, handel, flyktingströmmar och politiska svåra val. Länderna hade olika erfarenheter, men hela regionen formades av krigets konsekvenser."
  },

  {
    front: "Hur förändrades Europa efter 1945 när kontinenten skulle byggas upp igen efter andra världskriget?",
    back: "Europa låg i ruiner efter kriget och behövde återuppbyggas ekonomiskt, politiskt och socialt. Samtidigt delades kontinenten allt tydligare mellan väst och öst, vilket kom att prägla hela efterkrigstiden."
  },
  {
    front: "Hur såg Tysklands och Europas situation ut efter 1945 när kriget var slut men motsättningarna fortsatte?",
    back: "Tyskland delades upp och blev en symbol för Europas delning. Kontinenten präglades av både återuppbyggnad och växande spänningar mellan de segrande stormakterna."
  },
  {
    front: "Varför blev Berlinmuren, som byggdes 1961 och föll 1989, en så stark symbol för kalla kriget?",
    back: "Berlinmuren symboliserade delningen mellan öst och väst och visade hur människor hindrades från att röra sig fritt. När muren föll blev det en tydlig symbol för att den gamla ordningen höll på att bryta samman."
  },
  {
    front: "Hur användes Trumandoktrinen och Marshallhjälpen efter 1947 för att stärka västvärlden?",
    back: "USA gav ekonomiskt och politiskt stöd till länder som hotades av kommunism eller låg i ekonomisk kris. Syftet var att stärka demokratier och förhindra att Sovjetunionens inflytande växte."
  },
  {
    front: "Varför bildades Förenta nationerna efter 1945, och vad var tanken med organisationen?",
    back: "FN bildades för att skapa bättre internationellt samarbete och minska risken för nya stora krig. Organisationen skulle bidra till fred, säkerhet, mänskliga rättigheter och samarbete mellan världens länder."
  },
  {
    front: "Varför började många i västra Europa efter kriget samarbeta mer i stället för att åter hamna i nya krig?",
    back: "Efter två världskrig ville många skapa fred genom ekonomiskt och politiskt samarbete. Genom att knyta länder närmare varandra hoppades man minska risken för nya konflikter."
  },
  {
    front: "Hur växte motsättningarna mellan Sovjetunionen och USA fram efter 1945 till det som kallas kalla kriget?",
    back: "Efter andra världskriget blev USA och Sovjetunionen rivaler med olika ideologier och maktintressen. De undvek oftast direkt krig mot varandra men tävlade om inflytande, vapen och allierade."
  },
  {
    front: "Varför började människor i väst under 1960- och 1970-talet protestera mot gamla maktstrukturer och orättvisor?",
    back: "Vänstervågen växte fram ur kritik mot krig, sociala orättvisor, kapitalism och auktoriteter. Många unga och politiskt engagerade ville förändra samhället i en mer jämlik och solidarisk riktning."
  },
  {
    front: "Hur förändrades livet i flera länder i Östeuropa efter andra världskriget när Sovjetunionen fick stort inflytande där?",
    back: "I många östeuropeiska länder infördes kommunistiska system med stark statlig kontroll över politik, ekonomi och samhälle. Demokratin begränsades och opposition slogs ofta ned."
  },
  {
    front: "Varför blev åren 1989–1991 en så stor vändpunkt när kommunistiska regimer föll i Östeuropa och Sovjetunionen upplöstes?",
    back: "Missnöje, ekonomiska problem och krav på frihet försvagade de kommunistiska systemen. När regimerna föll förändrades Europas karta och kalla krigets maktbalans bröts."
  },

  {
    front: "Hur förändrades Sverige efter 1945 när landet gick från efterkrigstid till välfärdsstat och modernt samhälle?",
    back: "Efter kriget byggdes Sverige ut ekonomiskt och socialt. Välfärdsstaten växte fram, demokratin stärktes och människors levnadsstandard förbättrades, samtidigt som nya samhällsfrågor växte fram."
  },
  {
    front: "Hur klarade sig Sverige efter andra världskriget bättre än många andra länder, och vad betydde det för återhämtningen?",
    back: "Eftersom Sverige inte hade fått sin infrastruktur förstörd av kriget kunde landet snabbare fortsätta producera och handla. Det gav goda möjligheter till ekonomisk utveckling under efterkrigstiden."
  },
  {
    front: "Hur växte välfärdsstaten fram i Sverige under 1900-talets mitt?",
    back: "Välfärdsstaten byggdes upp genom reformer som gav människor bättre trygghet i vardagen, till exempel sjukvård, pensioner, skolgång och sociala försäkringar. Målet var att skapa större jämlikhet och trygghet för alla."
  },
  {
    front: "Varför började många tala om att framgångsåren i Sverige närmade sig sitt slut under 1970-talet?",
    back: "Ekonomin blev svagare, industrin mötte problem och internationella kriser påverkade landet. Det gjorde att den tidigare starka tillväxten inte längre kunde tas för given."
  },
  {
    front: "Hur förändrades styrningen av Sverige under efterkrigstiden när samhället blev mer modernt och komplext?",
    back: "Staten och kommunerna tog större ansvar för utbildning, vård, ekonomi och samhällsplanering. Samtidigt utvecklades demokratin och det politiska arbetet blev mer omfattande."
  },
  {
    front: "Varför blev beroendet av omvärlden tydligare i Sveriges ekonomi under senare delen av 1900-talet?",
    back: "Sverige blev allt mer knutet till internationell handel, export, import och ekonomiska kriser i andra länder. Det gjorde att förändringar i omvärlden påverkade svensk ekonomi mer direkt."
  },
  {
    front: "Hur förändrades det svenska politiska landskapet under senare delen av 1900-talet när nya partier växte fram?",
    back: "Fler partier tog plats i politiken och nya frågor blev viktiga för väljarna. Det gjorde att det politiska systemet blev mer varierat och att maktfördelningen kunde förändras."
  },
  {
    front: "Hur förändrades svensk ekonomi och politik kring 1990-talet när landet gick igenom kris och omställning?",
    back: "Sverige drabbades av ekonomisk kris med arbetslöshet och statsfinansiella problem. Samtidigt genomfördes förändringar i ekonomi och politik som påverkade hur samhället styrdes."
  },
  {
    front: "Hur såg Sveriges politik ut när landet gick in i ett nytt millennium omkring år 2000?",
    back: "Politiken präglades av frågor om globalisering, ekonomi, välfärd, migration och Sveriges roll i Europa och världen. Samhället stod inför nya utmaningar men också nya möjligheter."
  },
  {
    front: "Hur påverkades Sverige av kalla kriget trots att landet inte deltog direkt i något krig mellan stormakterna?",
    back: "Sverige försökte hålla fast vid alliansfrihet men påverkades ändå av hotet mellan öst och väst. Försvar, säkerhetspolitik och relationer till omvärlden formades starkt av kalla kriget."
  },
  {
    front: "Hur förändrades ungdomskultur, musik och nöjesliv i Sverige under efterkrigstiden?",
    back: "Ungdomar fick en tydligare egen kultur med ny musik, mode och nya sätt att umgås. Detta speglade både ökad konsumtion och att unga fick större plats i samhället."
  },
  {
    front: "Hur förändrades synen på mäns och kvinnors roller i Sverige under senare delen av 1900-talet?",
    back: "Gamla könsroller utmanades när fler kvinnor började förvärvsarbeta, utbilda sig och kräva lika rättigheter. Samhället blev mer jämställt, även om skillnader och problem fanns kvar."
  },
  {
    front: "Varför började man tala mer om våld i familjen och andra dolda problem i välfärdssamhället?",
    back: "Trots att samhället blivit rikare och tryggare fanns allvarliga problem kvar som tidigare ofta tystades ned. När de uppmärksammades blev det tydligt att välfärd inte betydde att allt fungerade för alla."
  },
  {
    front: "Varför blev nordiskt samarbete viktigt i en värld som förändrades efter andra världskriget?",
    back: "De nordiska länderna ville samarbeta om politik, ekonomi och samhällsfrågor för att stå starkare tillsammans. Samarbetet byggde på gemensamma intressen, liknande samhällen och närhet mellan länderna."
  },

  {
    front: "Hur förändrades världen efter 1945 när kalla kriget, avkolonisering och nya konflikter formade en ny global ordning?",
    back: "Efter andra världskriget delades världen av kalla krigets motsättningar samtidigt som många kolonier blev självständiga. Nya maktblock, konflikter och samhällsförändringar kom att prägla resten av 1900-talet och början av 2000-talet."
  },
  {
    front: "Hur såg konflikterna ut under kalla kriget när USA och Sovjetunionen tävlade om makt utan att mötas direkt i ett stort krig?",
    back: "Kalla kriget präglades av hot, kapprustning, propaganda och konflikter genom ombud i andra delar av världen. Supermakterna undvek oftast direkt krig med varandra men påverkade många andra länder."
  },
  {
    front: "Varför blev rymdkapplöpningen under 1950- och 1960-talet en viktig del av rivaliteten mellan supermakterna?",
    back: "Rymdkapplöpningen handlade om teknik, prestige och makt. Framgångar i rymden visade både vetenskaplig styrka och militär potential, vilket gjorde tävlingen symboliskt mycket viktig."
  },
  {
    front: "Hur utvecklades USA efter andra världskriget till en mycket stark ekonomisk och politisk stormakt?",
    back: "USA hade stor industriell styrka, militär makt och starkt inflytande över internationell politik efter 1945. Landet blev en ledande supermakt i västvärlden och spelade en avgörande roll under kalla kriget."
  },
  {
    front: "Varför blev så många länder i Afrika och Asien självständiga efter 1945, och vilka svårigheter följde ofta efter självständigheten?",
    back: "Avkoloniseringen drevs av självständighetsrörelser, försvagade kolonialmakter och förändrade idéer om folkens rätt att styra sig själva. Men många nya stater fick kämpa med fattigdom, svaga institutioner och konflikter."
  },
  {
    front: "Varför följdes Afrikas frigörelse under 1900-talet ofta av nya konflikter och svåra maktkamper?",
    back: "Kolonialtiden hade lämnat konstgjorda gränser, ojämlikhet och svaga politiska strukturer. Därför blev självständigheten i många fall början på nya konflikter snarare än omedelbar stabilitet."
  },
  {
    front: "Varför har Mellanöstern under senare delen av 1900-talet och början av 2000-talet präglats av så många konflikter?",
    back: "Regionen har präglats av konflikter om land, makt, religion, resurser och internationellt inflytande. Historiska motsättningar och stormakters inblandning har gjort situationen ännu mer komplicerad."
  },
  {
    front: "Hur förändrades många länder i Asien efter andra världskriget när gamla imperier försvagades och nya stater växte fram?",
    back: "I Asien växte nya självständiga stater fram samtidigt som flera länder industrialiserades snabbt. Regionen kom att rymma både fattigdom och mycket stark ekonomisk utveckling."
  },
  {
    front: "Hur har Latinamerika under 1900-talet påverkats av ojämlikhet, stormaktsinflytande och politiska konflikter?",
    back: "Många länder i Latinamerika präglades av stora sociala skillnader, militärkupper, diktaturer och påverkan från utländska makter. Samtidigt växte också motståndsrörelser och krav på demokrati fram."
  },
  {
    front: "Varför blev attacken mot tvillingtornen den 11 september 2001 en händelse som förändrade världen?",
    back: "Attacken visade att internationell terrorism kunde slå till mot en supermakt på ett mycket dramatiskt sätt. Den ledde till nya krig, hårdare säkerhetspolitik och stora förändringar i internationella relationer."
  },
  {
    front: "Vad menas med den arabiska våren omkring 2010–2011, och varför ledde den både till hopp och nya konflikter?",
    back: "Den arabiska våren var en våg av protester mot diktatur, orättvisor och brist på frihet i flera länder. På vissa håll skapade den hopp om demokrati, men i andra länder följde krig, förtryck och instabilitet."
  },
  {
    front: "Hur har terrorism blivit en viktig global fråga under slutet av 1900-talet och början av 2000-talet?",
    back: "Terrorism har blivit en global fråga eftersom våldsamma grupper försöker påverka politik och sprida rädsla genom attacker mot civila. Det har förändrat säkerhetspolitik, internationellt samarbete och människors vardag."
  },
  {
    front: "På vilka sätt har världen efter 1945 blivit mer modern, men också fått nya problem och utmaningar?",
    back: "Teknik, utbildning, kommunikation och levnadsstandard har förbättrats i stora delar av världen. Samtidigt har nya problem vuxit fram, som klimatfrågor, terrorism, ojämlikhet och svåra internationella konflikter."
  }
];