const wordlisttitle = "Folkhälsa: Jane Wills";

const words = [
  { front: "Hur definieras hälsa och vilka perspektiv finns?", back: "Hälsa ses som **fysiskt, psykiskt och socialt välbefinnande**, inte bara frånvaro av sjukdom. <br><br> Kan förstås medicinskt (biologiskt fokus), holistiskt (helhetssyn) eller socialt (påverkad av livsvillkor och samhälle)." },
  { front: "Varför talar man om well-being och livskvalitet?", back: "**Well-being** betonar upplevelsen av hälsa – hur man *mår* snarare än sjukdom. <br><br> **Livskvalitet** innefattar mening, relationer och tillfredsställelse." },
  { front: "Vad kännetecknar den medicinska modellen och varför kritiseras den?", back: "Fokus på diagnos och behandling, men förbiser sociala och psykologiska faktorer. <br><br> Ur hälsofrämjande perspektiv är den **för snäv och reaktiv**." },
  { front: "Vad betyder att hälsa är medel snarare än mål?", back: "Hälsa är ett **verktyg** för att kunna leva ett gott och meningsfullt liv, inte ett slutmål i sig." },
  { front: "Vad innebär den biopsykosociala modellen?", back: "Hälsa påverkas av **biologiska, psykologiska och sociala faktorer** – därför måste behandling vara helhetsinriktad." },
  { front: "Vilka faktorer påverkar hälsa?", back: "**Individuella:** ålder, livsstil <br> **Sociala:** relationer, utbildning <br> **Ekonomiska:** inkomst <br> **Miljömässiga:** boende, luft, arbetsmiljö." },
  { front: "Vad betyder social gradient och Whitehall-studierna?", back: "**Social gradient:** bättre hälsa ju högre socioekonomisk position. <br><br> **Whitehall-studierna** visade detta samband hos brittiska tjänstemän." },
  { front: "Vad är den ekologiska modellen?", back: "Visar hur hälsa formas på flera nivåer – **individ, familj, samhälle, politik** – som samverkar." },
  { front: "Vad visar Whitehead & Dahlgrens modell?", back: "Illustrerar hälsans lager: från **individuella faktorer till samhällsstrukturer och politik**. <br><br> Används för att analysera ojämlikhet i hälsa." },
  { front: "Vad innebär ojämlikhet i hälsa (health inequalities vs equity)?", back: "Skillnader i hälsa som är **orättvisa och möjliga att påverka**. <br><br> Målet är **rättvisa förutsättningar**, inte identiska resultat." },
  { front: "Vad är ett livscykelperspektiv?", back: "Tidiga erfarenheter påverkar senare hälsa – därför är **insatser under barndomen särskilt viktiga**." },
  { front: "Varför är jämlika samhällen hälsosammare?", back: "Mindre **stress**, starkare **tillit** och färre **sociala hierarkier** gynnar hälsan." },
  { front: "Varför mäta hälsa och hur?", back: "För att **följa utveckling och styra resurser**. <br><br> Kombinera objektiva mått (t.ex. blodtryck) och subjektiva (självskattad hälsa)." },
  { front: "Vad är epidemiologi?", back: "Vetenskapen om **hur sjukdomar och hälsotillstånd fördelas** i befolkningar; identifierar risker och mönster." },
  { front: "Vad skiljer health promotion, health education och disease prevention?", back: "**Promotion:** skapa förutsättningar <br> **Education:** öka kunskap <br> **Prevention:** förhindra sjukdom." },
  { front: "Vad betyder 'Everybody’s business'?", back: "**Hälsa är hela samhällets ansvar** – inte bara vårdens. Alla sektorer ska bidra." },
  { front: "Vad är upstream interventions?", back: "Åtgärder som riktar sig mot **grundorsaker** (t.ex. fattigdom, bostadspolitik) snarare än symptom." },
  { front: "Vilka är de fem principerna för health promotion?", back: "**Empowerment**, **delaktighet**, **rättvisa**, **samverkan**, **hållbarhet**." },
  { front: "Vad innebär Ottawa Charter (1986)?", back: "Definierar health promotion och processerna **enable, mediate, advocate**. <br><br> Betonar miljöer, policy och delaktighet." },
  { front: "Vilka dilemman finns kring individens ansvar för hälsa?", back: "För mycket fokus riskerar **skuldbeläggning**; för lite kan minska motivation. <br><br> Balans krävs mellan ansvar och stöd." },
  { front: "Vad är empowerment och dess rötter?", back: "Bygger på **Freires frigörande pedagogik** – människor ska få makt över sina liv. <br><br> I hälsoarbete betyder det deltagande och kontroll." },
  { front: "Vilka ansatser till health promotion finns?", back: "**Medicinsk**, **beteendeinriktad**, **utbildningsbaserad**, **social**, **empowerment- och policy-inriktad**." },
  { front: "Vilken roll har teorier i hälsofrämjande arbete?", back: "De **förklarar beteende** och **styr metodval**. <br><br> Exempel: Health Belief Model, Transtheoretical Model, Social Cognitive Theory." },
  { front: "Vilka etiska perspektiv lyfter Wills?", back: "**Pliktetik:** rätt handling oavsett följd. <br> **Konsekvensetik/utilitarism:** största möjliga nytta. <br><br> Vägleder beslut i hälsoinsatser." },
  { front: "Vilka etiska dilemman kan uppstå?", back: "Balans mellan **autonomi och kollektiv nytta**; hur mycket får man påverka människors val? <br><br> Makt och inflytande måste beaktas." },
  { front: "Varför är hälsa politik?", back: "Beslut om **resurser, utbildning, miljö** påverkar hälsan. <br><br> Hälsofrämjande är därför **politiskt och ideologiskt**." },
  { front: "Hur kan policybeslut påverka hälsa?", back: "Exempel: **bostads-, skol- och alkoholpolitik** påverkar hälsans förutsättningar. <br><br> God policy är i sig en hälsoinsats." },

  // 🌱 Part 2 – Strategies and methods
  { front: "Vad betyder 'reorient health services'?", back: "Flytta fokus från **sjukvård till förebyggande och hälsofrämjande arbete**. <br><br> Primärvården blir central." },
  { front: "Centrala begrepp – delaktighet, rättvisa, empowerment, hållbarhet, samverkan", back: "Utgör kärnan i allt hälsofrämjande arbete. <br><br> Professionella bör arbeta **inkluderande, långsiktigt och tvärsektoriellt**." },
  { front: "Vad är stödjande miljöer?", back: "**Fysiska och sociala miljöer** som underlättar hälsosamma val – t.ex. säkra skolor, tillgänglig grönska." },
  { front: "Vem var Paulo Freire?", back: "Brasiliansk pedagog som betonade **dialog och medvetandegörande (conscientization)** – grunden för empowerment." },
  { front: "Vad innebär beteendeförändring i hälsopromotion?", back: "Förstå **motivation, vanor och social påverkan**. <br><br> Teorier som TTM, HBM och Social Cognitive Theory används." },
  { front: "Vad betyder 'community' i hälsofrämjande sammanhang?", back: "En grupp människor förenade av plats eller intresse. <br><br> Centralt är **delaktighet och gemensam handling**." },
  { front: "Vad innebär strengthening community action?", back: "Att stödja **lokala initiativ** så människor själva får makt att skapa förändring." },
  { front: "Vad betyder healthy public policy?", back: "Alla politiska beslut bör **ta hänsyn till hälsa** – 'Health in all policies' är en grundprincip." },
  { front: "Vad är advocacy?", back: "Att **påverka beslutsfattare eller opinion** för att förbättra hälsans villkor." },
  { front: "Vad är interventionsstegen (s. 194)?", back: "Visar nivåer av insatser från **individnivå till strukturell nivå (policy)**. <br><br> De övre stegen är mest hållbara." },
  { front: "Vad handlar hälsokommunikation om?", back: "Att **skapa förståelse och mening kring hälsa** – inkluderar health literacy, social marketing och media advocacy." },
  { front: "Vilka för- och nackdelar har massmedia?", back: "**Fördelar:** Räckvidd, påverkar normer. <br><br> **Nackdelar:** Risk för förenkling, skuldbeläggning, brist på interaktion." },

  // 🏫 Part 3 – Settings for health promotion
  { front: "Vad menas med att fokusera på faktorer som skapar hälsa?", back: "Att arbeta **salutogent** – identifiera och stärka resurser, inte bara risker." },
  { front: "Vad innebär 'settings approach'?", back: "Att arbeta i **miljöer där människor lever**: skolor, arbetsplatser, bostadsområden m.m." },
  { front: "Hur arbeta hälsofrämjande i en vald setting (exempel: skola)?", back: "Främja **trygghet, delaktighet och goda relationer**; kombinera undervisning, miljö och policy." },

  // ⚙️ Part 4 – Implementing health promotion
  { front: "Varför behövs behovsinventering?", back: "För att förstå **målgruppens verkliga behov** och skapa relevanta insatser. <br><br> Görs i början av processen." },
  { front: "Varför använda planeringsmodeller?", back: "Ger **struktur och möjlighet till uppföljning**. <br><br> Exempel: PRECEDE–PROCEED." },
  { front: "Varför ska arbetet bygga på evidens?", back: "För att säkerställa att **metoder fungerar** och resurser används effektivt." },
  { front: "Hur hantera spänningen mellan forskning och lokal erfarenhet?", back: "Kombinera **vetenskaplig kunskap** med **praktisk och kulturell förståelse**." },
  { front: "Varför är deltagande viktigt vid planering och genomförande?", back: "**Delaktighet ger legitimitet, engagemang och bättre resultat.**" },
  { front: "Hur används Maslows behovstrappa?", back: "För att **prioritera insatser** – grundläggande behov (mat, trygghet) måste uppfyllas innan fokus läggs på självförverkligande och livsstil." }
];
