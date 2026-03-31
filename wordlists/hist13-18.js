const wordlisttitle = "Historia: 1700 - 1910";

const words = [
  {
    front: "Hur förändrades samhället i Europa från slutet av 1700-talet och under 1800-talet när maskiner, fabriker och nya transportsätt slog igenom?",
    back: "Den industriella revolutionen förändrade samhället från jordbrukssamhälle till industrisamhälle. Maskiner, fabriker och nya kommunikationer gjorde att produktionen ökade snabbt, städer växte och människors arbete och vardag förändrades i grunden."
  },
  {
    front: "Hur såg skillnaderna ut mellan livet på landsbygden och i städerna under industrialiseringens början på 1700- och 1800-talet?",
    back: "På landsbygden levde många fortfarande av jordbruk, medan städerna växte genom nya arbeten inom handel och industri. Skillnaderna ökade när fler flyttade in till städerna och började leva i en mer tätbefolkad och snabbföränderlig miljö."
  },
  {
    front: "Varför blev förändringar i jordbruket under 1700-talet så viktiga för industrialiseringen?",
    back: "När jordbruket blev effektivare kunde mer mat produceras med färre människor. Det ledde till att befolkningen ökade och att fler kunde lämna landsbygden för att arbeta i städer, gruvor och fabriker."
  },
  {
    front: "Hur växte ett nytt ekonomiskt system fram under 1700- och 1800-talet där människor investerade pengar för att tjäna mer pengar?",
    back: "Kapitalismen växte fram när företagare satsade pengar på handel, maskiner och fabriker för att göra vinst. Systemet byggde på privat ägande, investeringar och konkurrens, vilket drev på industrialiseringen."
  },
  {
    front: "Varför var det just England som blev först med industrialiseringen under slutet av 1700-talet?",
    back: "England hade flera fördelar: gott om kol och järn, ett effektivt jordbruk, tillgång till kapital, kolonier och bra möjligheter till handel och transporter. Därför kunde nya maskiner och fabriker börja användas där före andra länder."
  },
  {
    front: "Varför flyttade så många människor till städerna under 1800-talet, och hur förändrade det samhället?",
    back: "Människor flyttade till städerna för att få arbete i fabriker och andra nya verksamheter. Urbaniseringen gjorde att städerna växte snabbt, men den ledde också till trångboddhet, fattigdom och nya sociala problem."
  },
  {
    front: "Hur förändrades arbetet när tillverkningen gick från hemarbete till fabriker under 1800-talet?",
    back: "Tidigare tillverkades många varor i hemmen eller i små verkstäder, men nu samlades arbetet i fabriker med maskiner. Det gjorde produktionen snabbare, men arbetarna fick mindre kontroll över sitt arbete och sina arbetsvillkor."
  },
  {
    front: "Varför blev ångmaskinen och kolet så avgörande för industrialiseringen under 1700- och 1800-talet?",
    back: "Ångmaskinen gav en kraftkälla som inte var beroende av vind eller vatten. Med hjälp av kol kunde maskiner drivas i fabriker, gruvor och transportmedel, vilket gjorde att produktionen ökade kraftigt."
  },
  {
    front: "Hur fungerade fabrikerna under 1800-talet, och varför blev de symbolen för det nya samhället?",
    back: "I fabrikerna samlades många arbetare och maskiner på samma plats för att massproducera varor. De blev symboler för industrisamhället eftersom de visade hur arbete, teknik och ekonomi höll på att förändras."
  },
  {
    front: "Varför var gruvarbetet så viktigt under industrialiseringen, och hur såg arbetsvillkoren ut?",
    back: "Gruvorna var viktiga eftersom de gav kol och metaller som behövdes till maskiner, järnvägar och fabriker. Arbetet var ofta farligt, tungt och dåligt betalt, och även barn kunde arbeta där."
  },
  {
    front: "Hur påverkades arbetare, kvinnor och barn av industrisamhället under 1800-talet?",
    back: "Många arbetade långa dagar under hårda och osäkra förhållanden. Kvinnor och barn hade ofta ännu sämre villkor och lägre löner, vilket gjorde industrisamhället mycket ojämlikt."
  },
  {
    front: "Varför ökade Europas befolkning så snabbt under 1800-talet?",
    back: "Befolkningen växte eftersom jordbruket gav mer mat, sjukdomar kunde bekämpas bättre och dödligheten minskade. Fler människor överlevde, samtidigt som många familjer fortfarande fick många barn."
  },
  {
    front: "Vilka nya uppfinningar och framsteg förändrade människors liv under industrialiseringens tid på 1800-talet?",
    back: "Nya maskiner, järnvägar, ångfartyg och förbättringar inom teknik och medicin förändrade vardagen. De gjorde transporter snabbare, produktionen större och kontakterna mellan människor och platser tätare."
  },
  {
    front: "Hur förändrades synen på ekonomi och politik under 1800-talet när industrisamhället växte fram?",
    back: "Nya idéer växte fram om hur samhället skulle styras och hur ekonomin skulle fungera. Liberalism, socialism och andra tankar utvecklades som svar på de möjligheter och problem som industrialiseringen skapade."
  },

  {
    front: "Hur förändrades Europa under 1800-talet efter Napoleonkrigen när nya idéer, nationer och konflikter växte fram?",
    back: "Europa förändrades genom nationalism, industrialisering, nya ideologier och kamp mellan gamla och nya makter. Under 1800-talet växte både reformer och revolutioner fram, samtidigt som flera stater enades eller förändrades."
  },
  {
    front: "Varför blev mötet i Wien 1814–1815 så viktigt för Europas framtid efter Napoleonkrigen?",
    back: "På Wienkongressen försökte stormakterna återställa ordningen efter Napoleon och skapa balans i Europa. Målet var att förhindra nya revolutioner och stora krig, men samtidigt bromsades många människors krav på frihet och nationellt självbestämmande."
  },
  {
    front: "Hur förändrades Europas samhällen under 1800-talet när befolkningen växte och människor började leva på nya sätt?",
    back: "Befolkningen ökade snabbt och fler flyttade till städerna. Industrialiseringen förändrade arbete, familjeliv och sociala villkor, samtidigt som skillnaderna mellan rika och fattiga ofta blev tydligare."
  },
  {
    front: "Vilka stora politiska idéer växte fram under 1800-talet, och vad ville de förändra i samhället?",
    back: "Ideologier som liberalism, konservatism och socialism växte fram. De hade olika svar på frågor om frihet, makt, ekonomi, rättvisa och hur samhället borde styras."
  },
  {
    front: "Hur kunde Italien under 1800-talet gå från splittrade områden till ett enat land?",
    back: "Italien bestod länge av flera olika stater och områden, men nationalism och politiska ledare drev fram enandet. Genom diplomati, krig och folkligt stöd kunde Italien stegvis bli en enad stat."
  },
  {
    front: "Hur enades de många tyska staterna under 1800-talet till ett Tyskland?",
    back: "Tysk enhet växte fram genom nationalism, ekonomiskt samarbete och stark politisk ledning, särskilt från Preussen. Krig och diplomati användes för att samla de tyska staterna till ett gemensamt rike."
  },
  {
    front: "Varför började människor i Norden under 1800-talet tala om samarbete och gemenskap mellan de skandinaviska länderna?",
    back: "Skandinavismen byggde på tanken att Sverige, Norge och Danmark hade gemensam kultur, historia och språk. Idén växte fram ur nationalism och hopp om närmare samarbete mellan länderna."
  },
  {
    front: "Hur såg Ryssland ut under 1800-talet jämfört med många andra europeiska länder?",
    back: "Ryssland var ett stort rike där tsaren hade mycket makt och där moderniseringen gick långsammare än i västra Europa. Samhället präglades länge av jordbruk, stora klasskillnader och svag politisk frihet."
  },
  {
    front: "Varför präglades Europa under 1800-talet både av krav på revolution och försök till reformer?",
    back: "Många människor ville ha större frihet, bättre villkor och mer inflytande, vilket ledde till revolutioner och uppror. Samtidigt försökte makthavare ibland genomföra reformer för att lugna missnöjet och undvika större konflikter."
  },
  {
    front: "Varför lämnade så många européer sina hemländer under 1800-talet för att emigrera, särskilt till Amerika?",
    back: "Många emigrerade på grund av fattigdom, arbetslöshet, brist på jord och hopp om ett bättre liv. Amerika lockade med arbete, mark och nya möjligheter."
  },

  {
    front: "Hur förändrades USA under 1800-talet genom expansion västerut, invandring och inbördeskrig?",
    back: "USA växte snabbt under 1800-talet både geografiskt och ekonomiskt. Landet präglades av nybyggarliv, konflikter med ursprungsbefolkningar, invandring, slaverifrågan och till slut ett blodigt inbördeskrig."
  },
  {
    front: "Varför präglades USA under 1800-talet av så många krig och väpnade konflikter?",
    back: "USA expanderade västerut och kom därför i konflikt både med ursprungsbefolkningar och andra stater. Dessutom växte motsättningarna inom landet, särskilt kring slaveri och makten mellan nord och syd."
  },
  {
    front: "Varför lockades så många invandrare till USA under 1800-talet, och hur levde nybyggarna?",
    back: "USA lockade med arbete, mark och hopp om ett bättre liv. Många nybyggare slog sig ner i väster, där de byggde upp nya samhällen men samtidigt trängde undan ursprungsbefolkningen."
  },
  {
    front: "Hur gick det till när ursprungsbefolkningen på prärien under 1800-talet fördrevs och dödades i stor skala?",
    back: "När USA bredde ut sig västerut drevs många urfolk bort från sina marker genom krig, tvångsförflyttningar och brutna avtal. Därför räknas detta som ett folkmord, eftersom hela folk förlorade land, liv och möjlighet att leva vidare på sina egna villkor."
  },
  {
    front: "Varför bröt det ut inbördeskrig i USA 1861–1865, och vad blev följderna?",
    back: "Inbördeskriget bröt ut främst på grund av motsättningar om slaveriet och makten mellan nord och syd. Norden vann, slaveriet avskaffades och USA hölls samman som en stat, men kriget lämnade djupa sår efter sig."
  },

  {
    front: "Hur förändrades Sverige från 1700-talet till slutet av 1800-talet när gamla maktformer utmanades och samhället moderniserades?",
    back: "Sverige gick från att vara ett jordbruksland med ståndssamhälle till ett mer modernt samhälle med industrialisering, folkrörelser och ökad rörlighet. Samtidigt förändrades politik, ekonomi och människors vardagsliv steg för steg."
  },
  {
    front: "Vad menas med frihetstiden i Sverige 1718–1772, och hur förändrades makten då?",
    back: "Under frihetstiden minskade kungens makt och riksdagen fick större betydelse. Det blev en period då politiska grupper och debatter spelade större roll i hur landet styrdes."
  },
  {
    front: "Hur och varför stärktes kungamakten i Sverige igen från 1772?",
    back: "Med Gustav III stärktes kungens makt genom en statskupp som minskade riksdagens inflytande. Enväldet kom inte tillbaka exakt som tidigare, men kungen fick åter en mycket starkare ställning."
  },
  {
    front: "Hur märktes upplysningens idéer i Sverige under 1700-talet?",
    back: "Upplysningen märktes genom större intresse för vetenskap, utbildning, reformer och samhällsnytta. Människor började tro mer på förnuft och kunskap som vägar till ett bättre samhälle."
  },
  {
    front: "Hur styrdes Sverige under 1700- och 1800-talet, och vilka grupper hade mest makt?",
    back: "Sverige styrdes länge genom ett ståndssamhälle där adel, präster, borgare och bönder hade olika inflytande. Makten låg främst hos kungen och de högre samhällsgrupperna, medan många människor hade begränsade möjligheter att påverka."
  },
  {
    front: "Varför kan Sverige under 1700- och början av 1800-talet beskrivas som ett bondeland?",
    back: "De flesta människor bodde på landsbygden och levde av jordbruk. Samhället, ekonomin och vardagen var därför starkt knutna till jordbruket och livet på landet."
  },
  {
    front: "Vilka förändringar gjorde att Sverige under 1800-talet började gå från ett gammalt bondesamhälle till något nytt?",
    back: "Jordbruket förändrades, människor flyttade, nya näringar växte fram och samhället öppnades för fler idéer och reformer. Det blev början på övergången till ett mer modernt och rörligt samhälle."
  },
  {
    front: "Hur gick Sverige under 1800-talet från bondeland till industrination?",
    back: "Industrialiseringen ledde till att fler började arbeta i fabriker, gruvor och nya företag. Järnvägar, teknik och handel gjorde att Sverige stegvis utvecklades till en industrination."
  },
  {
    front: "Varför blev folkrörelserna så viktiga i Sverige under 1800-talet?",
    back: "Folkrörelser som frikyrkorörelsen, nykterhetsrörelsen och arbetarrörelsen gav människor möjlighet att organisera sig och påverka samhället. De tränade människor i demokrati och bidrog till stora sociala och politiska förändringar."
  },
  {
    front: "Varför utvandrade så många svenskar till Amerika under senare delen av 1800-talet?",
    back: "Många lämnade Sverige på grund av fattigdom, brist på jord, arbetslöshet och hopp om ett bättre liv. Amerika lockade med möjligheter till arbete, mark och större frihet."
  },
  {
    front: "Hur påverkades samerna av den svenska statens utveckling under 1800-talet?",
    back: "Samerna utsattes för statlig kontroll och diskriminering när staten ville styra mark, näringar och människor i norr. Deras rättigheter begränsades ofta, trots att de hade levt där långt före den svenska staten tog större kontroll."
  },
  {
    front: "Hur behandlades romer i Sverige under 1800-talet och senare, och vad säger det om samhället?",
    back: "Romer utsattes länge för fördomar, utanförskap och diskriminering. Deras situation visar att det moderna samhället inte gav samma rättigheter och möjligheter till alla grupper."
  },

  {
    front: "Hur förändrades världen under 1800-talet när europeiska stater och andra makter tog kontroll över områden i Afrika och Asien?",
    back: "Under 1800-talet växte imperialismen fram, vilket innebar att starka stater tog makt över andra områden politiskt, ekonomiskt och militärt. Det förändrade stora delar av världen och skapade både exploatering och långvariga konflikter."
  },
  {
    front: "Varför ville europeiska stormakter under 1800-talet erövra och kontrollera områden i andra världsdelar?",
    back: "De ville få råvaror, marknader, makt och prestige. Imperialismen drevs också av nationalism, tekniska fördelar och en föreställning om att européer hade rätt att styra andra folk."
  },
  {
    front: "Hur kunde Storbritannien kontrollera Indien under 1800-talet, och varför blev Indien så viktigt?",
    back: "Storbritannien tog stegvis kontroll över Indien genom handel, militär makt och politiskt inflytande. Indien blev viktigt som marknad, råvarukälla och symbol för det brittiska imperiets styrka."
  },
  {
    front: "Hur delades Afrika upp mellan europeiska makter under slutet av 1800-talet, och vilka följder fick det?",
    back: "Europeiska stater tog kontroll över stora delar av Afrika utan hänsyn till folkgrupper och gamla gränser. Det ledde till förtryck, exploatering och konflikter som i många fall levt kvar långt senare."
  },
  {
    front: "Varför blev Kina under 1800-talet utsatt för hårt tryck från västmakter och andra länder?",
    back: "Kina var svagt i förhållande till de industrialiserade stormakterna och tvingades öppna sig för handel och utländskt inflytande. Det ledde till att landet förlorade kontroll över delar av sin ekonomi och politik."
  },
  {
    front: "Hur visade också USA under slutet av 1800-talet att landet ville bli en imperialistisk stormakt?",
    back: "USA började utöka sitt inflytande utanför det egna landet genom krig, militär makt och kontroll över nya områden. Det visade att även USA ville delta i kampen om makt och territorier."
  },
  {
    front: "Hur påverkades länderna i Sydamerika under 1800-talet av starkare utländskt inflytande och beroende?",
    back: "Även om många länder i Sydamerika var självständiga blev de ofta ekonomiskt beroende av starkare länder. Handel, investeringar och politiskt tryck gjorde att de ändå påverkades av imperialismen."
  },
  {
    front: "Hur lyckades Japan under senare delen av 1800-talet moderniseras utan att koloniseras som många andra länder?",
    back: "Japan genomförde snabba reformer inom militär, industri och utbildning. Genom att modernisera sig kunde landet stå emot utländsk dominans och själv bli en stark makt."
  },
  {
    front: "Vilka följder fick imperialismen under 1800-talet för de folk och områden som blev styrda av andra?",
    back: "Imperialismen ledde till att människor förlorade makt över sina egna samhällen och resurser. Samtidigt byggdes ibland infrastruktur och nya institutioner upp, men detta skedde oftast på kolonialmaktens villkor och skapade djupa orättvisor."
  },

  {
    front: "Hur förändrades Europa kring sekelskiftet 1900 när teknik, vetenskap, nöjen och framtidstro växte fram?",
    back: "Europa gick mot ett mer modernt samhälle med snabb teknisk utveckling, nya livsstilar och stark framtidstro. Samtidigt fanns sociala skillnader och politiska spänningar kvar under ytan."
  },
  {
    front: "Varför ordnade länder stora världsutställningar under senare delen av 1800-talet och kring år 1900?",
    back: "Världsutställningarna visade upp tekniska nyheter, industriella framsteg och nationell stolthet. De fungerade som skyltfönster för framtidstro och för de länders makt som ville imponera på omvärlden."
  },
  {
    front: "Vad menas med att tiden kring sekelskiftet 1900 ofta kallas la belle époque, och för vilka gällde den bilden?",
    back: "La belle époque betyder ungefär den vackra epoken och syftar på en tid av optimism, kultur, nöjen och framtidstro. Men den bilden gällde främst delar av medel- och överklassen, inte alla människor i samhället."
  },
  {
    front: "Hur förändrade nya upptäckter inom teknik och vetenskap livet i Europa under slutet av 1800-talet och början av 1900-talet?",
    back: "Nya uppfinningar som elektricitet, telefon, bilar och medicinska framsteg förändrade vardag, arbete och kommunikation. Teknik och vetenskap gjorde livet modernare och band människor och samhällen närmare varandra."
  }
];