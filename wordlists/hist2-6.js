const wordlisttitle = "Historia: Forntiden - 1500 e.kr";

const words = [
  {
    front: "<b>Människans förhistoria</b><br><br>Hur utvecklades människan under förhistorien från tidiga människoarter till jägare, samlare och senare <i>bofasta</i> människor?",
    back: "<b>Svar:</b><br><br>Människans förhistoria handlar om hur människan utvecklades under mycket lång tid.<br><br><ul><li>Från tidiga människoarter</li><li>till människor som använde redskap</li><li>samarbetade, jagade och samlade</li><li>och så småningom började odla och leva mer bofast</li></ul>"
  },
  {
    front: "<b>Tidiga människor och apor</b><br><br>Vad skiljde tidiga människor från apor, och varför blev människan så framgångsrik som art under förhistorien?",
    back: "<b>Svar:</b><br><br>Människan utvecklade bland annat:<br><br><ul><li>förmågan att gå upprätt</li><li>att använda händerna mer avancerat</li><li>att tänka långsiktigt</li></ul><br>Språk, samarbete och redskap gjorde att människan kunde anpassa sig till många olika miljöer."
  },
  {
    front: "<b>Jägare och samlare</b><br><br>Hur levde människor som jägare och samlare under stenåldern, innan jordbruket slog igenom?",
    back: "<b>Svar:</b><br><br>Jägare och samlare levde av att:<br><br><ul><li>jaga djur</li><li>fiska</li><li>samla växter, bär och nötter</li></ul><br>De flyttade ofta efter årstiderna och efter var det fanns mat, vilket gjorde att de inte levde permanent på en plats."
  },
  {
    front: "<b>Från jägare till bönder</b><br><br>Varför började människor under yngre stenåldern gå från jakt och insamling till jordbruk och boskapsskötsel?",
    back: "<b>Svar:</b><br><br>När människor lärde sig att odla och tämja djur kunde de producera sin egen mat i större mängd.<br><br>Det ledde till att:<br><br><ul><li>fler kunde bo kvar på samma plats</li><li>befolkningen ökade</li><li>samhällen blev mer organiserade</li></ul>"
  },

  {
    front: "<b>De första civilisationerna</b><br><br>Hur växte de första civilisationerna fram för flera tusen år sedan när människor började bo i större samhällen och städer?",
    back: "<b>Svar:</b><br><br>Fornas civilisationer växte fram där jordbruk kunde ge <i>överskott av mat</i>.<br><br>Då kunde människor:<br><br><ul><li>specialisera sig</li><li>bygga städer</li><li>skapa lagar</li><li>utveckla skriftspråk</li><li>bygga upp stater med härskare och organiserad makt</li></ul>"
  },
  {
    front: "<b>Flodkulturerna</b><br><br>Varför uppstod några av de första högkulturerna vid stora floder som Eufrat, Tigris, Nilen, Indus och Huang He?",
    back: "<b>Svar:</b><br><br>Floderna gav:<br><br><ul><li>vatten</li><li>bördigt jordbruk</li><li>goda möjligheter till stora skördar</li></ul><br>När skördarna blev stora kunde befolkningen växa och samhällen utvecklas till städer och civilisationer."
  },
  {
    front: "<b>Mesopotamien</b><br><br>Vad kännetecknade Mesopotamien under forntiden, och varför brukar området kallas en av civilisationens vaggar?",
    back: "<b>Svar:</b><br><br>I Mesopotamien växte några av världens första städer och stater fram.<br><br>Där utvecklades bland annat:<br><br><ul><li>skriftspråk</li><li>lagar</li><li>avancerad organisation</li></ul><br>Det gör området mycket viktigt i historien."
  },
  {
    front: "<b>Egypten</b><br><br>Varför blev Egypten en stark civilisation under flera tusen år i Nildalen?",
    back: "<b>Svar:</b><br><br>Nilen gav regelbundna översvämningar som gjorde jorden bördig och skapade goda villkor för jordbruk.<br><br>Det gjorde att Egypten kunde få:<br><br><ul><li>stabil matproduktion</li><li>stark kungamakt</li><li>ett rikt kulturliv</li></ul>"
  },
  {
    front: "<b>Andra tidiga civilisationer</b><br><br>Hur såg andra tidiga civilisationer ut utanför Mesopotamien och Egypten, och vad hade de gemensamt?",
    back: "<b>Svar:</b><br><br>Även i andra delar av världen växte avancerade samhällen fram med:<br><br><ul><li>jordbruk</li><li>städer</li><li>religion</li><li>politisk makt</li></ul><br>Gemensamt var att de byggde på organiserat arbete, överskott av mat och någon form av styrning."
  },

  {
    front: "<b>Antikens Grekland</b><br><br>Hur utvecklades det antika Grekland från tidiga kulturer till stadsstater som kom att påverka Europa starkt?",
    back: "<b>Svar:</b><br><br>Den grekiska antiken växte fram ur äldre kulturer och utvecklades till självständiga stadsstater.<br><br>Grekland blev viktigt genom sina idéer om:<br><br><ul><li>politik</li><li>filosofi</li><li>konst</li><li>vetenskap</li><li>idrott</li></ul><br>Detta påverkade många senare samhällen."
  },
  {
    front: "<b>Minoiska kulturen</b><br><br>Vad kännetecknade den minoiska kulturen på Kreta under forntiden, och varför var den viktig?",
    back: "<b>Svar:</b><br><br>Den minoiska kulturen var en tidig avancerad kultur med:<br><br><ul><li>handel</li><li>sjöfart</li><li>stora palats</li></ul><br>Den visar att området kring Egeiska havet tidigt hade utvecklade samhällen med kontakt med andra delar av Medelhavet."
  },
  {
    front: "<b>Mykene</b><br><br>Hur såg Mykene ut under den tidiga grekiska forntiden, och varför räknas kulturen som viktig?",
    back: "<b>Svar:</b><br><br>Mykene var en krigarpräglad kultur på det grekiska fastlandet med:<br><br><ul><li>starka härskare</li><li>befästa palats</li></ul><br>Den blev viktig som en tidig del av den grekiska utvecklingen före de klassiska stadsstaterna."
  },
  {
    front: "<b>Grekland växer fram</b><br><br>Hur växte det antika Grekland fram efter de tidiga kulturerna, och vad blev typiskt för området?",
    back: "<b>Svar:</b><br><br>Efter äldre kulturers nedgång växte nya grekiska samhällen fram, ofta organiserade som stadsstater.<br><br>Typiskt för området var:<br><br><ul><li>handel</li><li>sjöfart</li><li>kolonisation</li><li>gemensamt språk</li><li>gemensam religion</li></ul><br>Det band samman grekerna trots att de inte hade en enad stat."
  },
  {
    front: "<b>Stadsstaterna</b><br><br>Vad var en grekisk stadsstat, och varför blev sådana samhällen viktiga i antikens Grekland?",
    back: "<b>Svar:</b><br><br>En stadsstat var ett självständigt samhälle som bestod av en stad och det omgivande området.<br><br>De blev viktiga eftersom de utvecklade egna:<br><br><ul><li>lagar</li><li>styrelsesätt</li><li>identiteter</li></ul><br>Exempel: <b>Aten</b> och <b>Sparta</b>."
  },
  {
    front: "<b>Aten</b><br><br>Hur fungerade Aten under 400-talet f.v.t., och varför har staden blivit så viktig i historien?",
    back: "<b>Svar:</b><br><br>Aten blev känt för att utveckla en tidig form av demokrati där fria manliga medborgare kunde delta i besluten.<br><br>Staden blev också viktig för:<br><br><ul><li>kultur</li><li>filosofi</li><li>teater</li><li>konst</li></ul>"
  },
  {
    front: "<b>Sparta</b><br><br>Hur skilde sig Sparta från Aten i sättet att leva och styra under antiken?",
    back: "<b>Svar:</b><br><br>Sparta var ett mer militärt och strikt samhälle där lydnad och krigarkultur stod i centrum.<br><br>Till skillnad från Aten betonade Sparta:<br><br><ul><li>disciplin</li><li>militär styrka</li></ul><br>snarare än öppen debatt och kultur."
  },
  {
    front: "<b>Krig i Grekland</b><br><br>Varför krigade de grekiska stadsstaterna så ofta med varandra och med yttre fiender under antiken?",
    back: "<b>Svar:</b><br><br>Stadsstaterna var självständiga och tävlade om makt och inflytande.<br><br>Samtidigt hotades de ibland av yttre fiender, vilket gjorde att krig blev en vanlig del av den grekiska historien."
  },
  {
    front: "<b>Atens storhetstid</b><br><br>Varför räknas 400-talet f.v.t. som Atens storhetstid?",
    back: "<b>Svar:</b><br><br>Under denna period hade Aten stor makt och blomstrade inom:<br><br><ul><li>politik</li><li>filosofi</li><li>konst</li><li>arkitektur</li></ul><br>Staden blev ett centrum för idéer och kultur som senare fått stor betydelse i Europas historia."
  },
  {
    front: "<b>Greklands arv</b><br><br>Vilket arv lämnade det antika Grekland efter sig till senare tider?",
    back: "<b>Svar:</b><br><br>Grekland lämnade efter sig idéer om:<br><br><ul><li>demokrati</li><li>filosofi</li><li>vetenskap</li><li>teater</li><li>konst</li><li>idrott</li></ul><br>Dessa idéer och uttryck har påverkat Europa och resten av världen under mycket lång tid."
  },

  {
    front: "<b>Romarriket</b><br><br>Hur gick Rom från en mindre stad i Italien till ett välde som dominerade stora delar av Medelhavet under antiken?",
    back: "<b>Svar:</b><br><br>Rom växte genom:<br><br><ul><li>erövringar</li><li>skicklig organisation</li><li>stark militär makt</li></ul><br>Från början som stad utvecklades Rom först till republik och senare till ett stort imperium som påverkade stora delar av Europa, Nordafrika och Mellanöstern."
  },
  {
    front: "<b>Romare och etrusker</b><br><br>Hur hängde romarna och etruskerna ihop under Roms tidiga historia?",
    back: "<b>Svar:</b><br><br>Etruskerna var ett folk i Italien som påverkade det tidiga Rom på flera sätt, bland annat inom:<br><br><ul><li>kultur</li><li>teknik</li><li>styre</li></ul><br>Romarna tog intryck av dem men kom senare att själva bli starkare och dominera området."
  },
  {
    front: "<b>Roms expansion</b><br><br>Hur kunde Rom under antiken gå från att bli erövrat till att själv erövra andra folk och länder?",
    back: "<b>Svar:</b><br><br>Rom byggde upp en stark armé och ett välorganiserat samhälle som gjorde det möjligt att vinna krig.<br><br>Genom att besegra grannar och senare stora rivaler växte Rom steg för steg till ett mäktigt rike."
  },
  {
    front: "<b>Kvinnor och barn i Rom</b><br><br>Hur såg livet ut för kvinnor och barn i Romarriket, och vad säger det om samhället?",
    back: "<b>Svar:</b><br><br>Kvinnor och barn hade olika roller beroende på familjens ställning, men samhället var tydligt <i>patriarkalt</i> och män hade mest makt.<br><br>Familjen var viktig, och barn uppfostrades för att passa in i samhällets krav och förväntningar."
  },
  {
    front: "<b>Från republik till kejsardöme</b><br><br>Varför förändrades Rom från republik till kejsardöme under de sista århundradena f.v.t. och början av vår tideräkning?",
    back: "<b>Svar:</b><br><br>Republiken försvagades av:<br><br><ul><li>maktkamper</li><li>inbördeskrig</li><li>växande skillnader mellan rika och fattiga</li></ul><br>Till slut samlades makten hos kejsaren, vilket skapade ett mer enhetligt men också mer enväldigt styre."
  },
  {
    front: "<b>Västroms fall</b><br><br>Varför började Västrom att försvagas och falla under 300- och 400-talet e.v.t.?",
    back: "<b>Svar:</b><br><br>Romarriket försvagades av:<br><br><ul><li>politiska kriser</li><li>ekonomiska problem</li><li>yttre angrepp</li><li>svårigheter att styra ett så stort område</li></ul><br>Till slut föll Västrom, medan Östrom levde vidare längre."
  },
  {
    front: "<b>Roms arv</b><br><br>Vilket arv lämnade Romarriket efter sig till Europa och senare tider?",
    back: "<b>Svar:</b><br><br>Rom lämnade efter sig:<br><br><ul><li>lagar</li><li>språk</li><li>vägar</li><li>byggnadskonst</li><li>stadsplanering</li><li>idéer om stat och administration</li></ul><br>Mycket i Europas kultur och samhällsbygge har påverkats av det romerska arvet."
  },

  {
    front: "<b>Medeltiden</b><br><br>Hur förändrades Europa ungefär 500–1500 e.v.t. under medeltiden efter att Västrom hade fallit?",
    back: "<b>Svar:</b><br><br>Medeltiden var en lång period då Europa gick från splittring efter Romarrikets fall till att gradvis få:<br><br><ul><li>starkare kungadömen</li><li>växande handel</li><li>större städer</li></ul><br>Kyrkan fick stor makt, och samhället förändrades steg för steg under perioden."
  },
  {
    front: "<b>Tidig medeltid</b><br><br>Hur såg Europa ut under tidig medeltid cirka 500–1000 e.v.t. när gamla riken fallit och nya samhällen växte fram?",
    back: "<b>Svar:</b><br><br>Under tidig medeltid var Europa splittrat och många människor levde på landsbygden.<br><br><ul><li>Kungamakten var ofta svag</li><li>Handeln var mindre än under Romarriket</li><li>Kyrkan fick stor betydelse som sammanhållande kraft</li></ul>"
  },
  {
    front: "<b>Högmedeltiden</b><br><br>Hur förändrades Europa under högmedeltiden cirka 1000–1300 e.v.t. när jordbruk, handel och städer växte?",
    back: "<b>Svar:</b><br><br>Under högmedeltiden:<br><br><ul><li>ökade befolkningen</li><li>förbättrades jordbruket</li><li>växte handeln</li><li>uppstod fler städer</li><li>stärktes kungamakten på flera håll</li></ul><br>Samhället blev mer livligt och organiserat."
  },
  {
    front: "<b>Senmedeltiden</b><br><br>Varför blev senmedeltiden cirka 1300–1500 e.v.t. en tid av både kris och förändring i Europa?",
    back: "<b>Svar:</b><br><br>Senmedeltiden präglades av:<br><br><ul><li>pest</li><li>krig</li><li>ekonomiska problem</li></ul><br>Detta drabbade många människor hårt.<br><br>Samtidigt förändrades samhället när gamla strukturer försvagades och nya idéer och maktförhållanden började växa fram."
  }
];
