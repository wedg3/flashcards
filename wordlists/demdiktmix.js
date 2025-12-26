const wordlisttitle = "Gymn: Demokrati, rättsstat och medier";

const words = [
  { front: "Majoritetsprincipen", back: "Majoritetens förslag vinner över minoritetens. <br><br><em>Viktigt:</em> Majoriteten ska styra men minoriteter får inte förtryckas (t.ex. samer i Sverige)." },
  { front: "Opinionsbildning", back: "Rätten att uttrycka åsikter muntligt, skriftligt, med bilder eller på annat sätt." },
  { front: "Rättssäkerhet", back: "Ingen ska häktas eller straffas utan <strong>stöd i lagen</strong>." },
  { front: "Valhemlighet", back: "Alla ska kunna rösta utan att tvingas avslöja vilket parti eller vilken kandidat de röstar på." },
  { front: "Pluralism", back: "Det finns utrymme för många <em>konkurrerande</em> uppfattningar som tävlar om allmänhetens stöd." },

  // Olika typer av demokratier
  { front: "Direkt demokrati", back: "Medborgarna röstar <strong>själva</strong> i sakfrågor – inga mellanhänder." },
  { front: "Indirekt (representativ) demokrati", back: "Medborgarna väljer representanter (t.ex. politiker) som fattar beslut i deras ställe." },
  { front: "Deliberativ demokrati", back: "Beslut ska föregås av <em>öppna, sakliga</em> diskussioner och argumentation för att nå välgrundade beslut." },
  { front: "Valdemokrati", back: "Demokrati som centrerar kring <strong>fria, rättvisa och regelbundna val</strong>; valdeltagande och valprocedurer är centrala." },
  { front: "Deltagardemokrati", back: "Modell där medborgarnas <em>aktiva deltagande</em> betonas utöver att rösta – t.ex. medborgardialoger och folkomröstningar." },

  // Demokratins problem
  { front: "Polyarki", back: "Dahls term för en <em>verklighetsnära, ofullständig</em> demokrati där flera grupper konkurrerar om makt genom fria val och deltagande." },
  { front: "Mångfald", back: "Variation i kultur, åsikter, bakgrund och identitet erkänns och tillåts i demokratin." },
  { front: "Autokratisering", back: "Demokratisk tillbakagång: när länder rör sig från demokrati mot diktatur." },
  { front: "Populism", back: "Politiska rörelser som ifrågasätter eller inte accepterar den liberala demokratins grunder." },

  // Diktaturformer
  { front: "Teokrati", back: "Religiösa ledare styr; lagarna grundas på religiösa föreskrifter." },
  { front: "Enpartistat", back: "Endast <strong>ett</strong> parti tillåts och kontrollerar statens makt." },
  { front: "Militärdiktatur", back: "Militären eller militära ledare styr och inskränker demokratiska friheter." },
  { front: "Politisk ofrihet", back: "Avsaknad av grundläggande fri- och rättigheter som yttrandefrihet, föreningsfrihet, opposition m.m." },

  // Mänskliga rättigheter
  { front: "Mänskliga rättigheter", back: "Universella rättigheter för <strong>alla</strong> människor: t.ex. rätten till liv, frihet, yttrandefrihet, religionsfrihet och rättslig prövning." },
  { front: "FN:s Barnkonvention", back: "Särskilda rättigheter för barn: skydd, deltagande, utbildning m.m." },
  { front: "Amnesty International", back: "Global människorättsorganisation som dokumenterar övergrepp och driver kampanjer för frihet och rättvisa." },
  { front: "Human Rights Watch", back: "Internationell organisation som utreder och uppmärksammar människorättsbrott och driver på för reformer." },

  // Rättsväsendet
  { front: "Allmänna domstolar", back: "Hantera brottmål och civilrätt (tingsrätt, hovrätt, Högsta domstolen)." },
  { front: "Förvaltningsdomstolar", back: "Prövar tvister mellan enskilda och myndigheter (t.ex. socialförsäkring, migration)." },
  { front: "Åklagare", back: "Leder brottsutredningar, beslutar om åtal och företräder staten i brottmål." },
  { front: "Kriminalvård", back: "Verkställer straff (fängelse, frivård) och arbetar med rehabilitering." },

  // Demokrati och rättsskipning
  { front: "Dödsstraff", back: "Ett straff där <strong>döden</strong> är påföljden." },
  { front: "Livstids fängelse", back: "Straff utan fast tidsgräns; kan innebära frihetsberövande resten av livet, men med möjlighet till omprövning." },
  { front: "Prevention", back: "Förebyggande insatser för att hindra brott (socialpolitik, utbildning, polisinsatser)." },
  { front: "Nämndemannasystem", back: "Lekmän (nämndemän) deltar tillsammans med domare i avgöranden." },
  { front: "Rättsstaten (rule of law)", back: "Både staten och medborgarna är bundna av lag; makt utövas enligt lag och domstolar är oberoende." },

  // Hot mot rättssystemet
  { front: "Välfärdsbrott", back: "Brott mot välfärds- och trygghetssystem: <em>bidragsfusk, skattebedrägeri, korruption i offentlig sektor</em>." },
  { front: "Våldsbejakande extremism", back: "Ideologier/rörelser som legitimerar eller använder våld för politiska mål och hotar demokratin." },

  // Rättsstatsprincipen
  { front: "Maktdelning", back: "Statens makt delas mellan lagstiftande, verkställande och dömande makt för att motverka maktmissbruk." },
  { front: "Lagenlighet", back: "All offentlig maktutövning måste ha <strong>stöd i lag</strong>; ingen myndighet får gå utanför lagen." },
  { front: "Maktmissbruk", back: "När någon i maktställning använder sin makt för otillbörliga/olagliga syften eller överskrider befogenheter." },

  // Media och demokrati
  { front: "Tredje statsmakten", back: "Mediernas roll som oberoende granskare av makten och informationsförmedlare till allmänheten." },
  { front: "Frihetliga modellen", back: "Medier fria från statlig styrning; diversifierat ägande; <em>marknadskrafterna</em> styr utbudet." },
  { front: "Public service-modellen", back: "Vissa medier har uppdrag att tillhandahålla opartisk, kvalitativ information – finansierade av allmänheten." },

  // Kommunikation i medierna
  { front: "Envägskommunikation", back: "Information går i <strong>en</strong> riktning – ingen direkt återkoppling från mottagaren." },
  { front: "Masskommunikation", back: "Kommunikation till en stor, okänd publik via TV, radio, tidningar eller internet." },

  // Begrepp om påverkan och tolkning
  { front: "Propaganda", back: "Avsiktlig, strategisk kommunikation som syftar till att påverka människors uppfattningar och handlingar – ofta ideologisk/politisk." },
  { front: "Tolknings-/referensramar", back: "De perspektiv och värderingar som gör att information tolkas på ett visst sätt." },
  { front: "Direkt kommunikation", back: "Avsändare och mottagare kan interagera direkt, t.ex. i samtal eller dialog." },
  { front: "Indirekt kommunikation", back: "Kommunikation via mellanhänder/medier – ingen omedelbar respons." },
  { front: "Informationsbrus", back: "Stor mängd budskap gör det svårt att uppfatta och värdera vad som är viktigt." },
  { front: "Opinion", back: "Samlad benämning på en gemensam åsikt hos en större grupp människor." },
  { front: "Den allmänna opinionen", back: "Den rådande inställningen i en specifik fråga bland en stor grupp människor." },

  // Medier och pengar
  { front: "Clickbaits", back: "Sensationella rubriker/annonser som lockar till klick – ofta irrelevant eller låg kvalitet i innehållet." },
  { front: "Opinionsledare", back: "Personer med inflytande över andras åsikter (experter, kändisar, journalister)." },
  { front: "Opinionsförmedlare", back: "Institutioner/personer som sprider åsikter till bred publik, t.ex. medier och kommentatorer." },

  // Svenskarna, internet och sociala medier
  { front: "Opinionsklimat", back: "Vilka åsikter som anses <em>möjliga att uttrycka</em> i ett samhälle vid en viss tid." },
  { front: "Tystnadsspiral", back: "Människor avstår från att uttrycka åsikter av rädsla för att avvika eller bli avfärdade." },
  { front: "Politisk korrekthet/åsiktskorridor", back: "De med 'rätta' uppfattningarna kan uttrycka sig utan att trakasseras/avfärdas – andra upplever begränsningar." },

  // Makt och medier
  { front: "Dagordningsmakt", back: "Makt över <strong>vilka frågor</strong> som diskuteras och anses viktiga; vissa lyfts, andra glöms." },
  { front: "Nyhetsvärdering", back: "Redaktioners/journalisters urval av vad som blir nyheter." },
  { front: "Gatekeeping", back: "Information <em>filtreras</em> av medier innan den når publiken." },
  { front: "Ägarmakten", back: "Stora ägare och redaktioner påverkar medieutbudet." },
  { front: "Professionella påtryckare", back: "Partier, företag och intresseorganisationer som påverkar innehållet." },
  { front: "Konsumentmakt", back: "Publikens efterfrågan styr: <em>ingen TV utan tittare, ingen tidning utan läsare</em>." },

  // Regler för svenska medier
  { front: "Censurförbud", back: "Grundlagsskydd: myndigheter får inte <strong>förhandsgranska</strong> eller stoppa publicering utan lagstöd (tryckfrihetsförordningen)." },
  { front: "Etableringsfrihet", back: "Rätten att starta och driva medier utan hinder från staten – vem som helst får starta tryckeri/tidning inom lagens ramar." }
];


