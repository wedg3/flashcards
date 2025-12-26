const wordlisttitle = "Högstadiet: Lag & Rätt";

const words = [
  { front: "Häleri", back: "När någon köper, säljer eller gömmer något som är stulet." },
  { front: "Ofredande", back: "När man stör eller kränker någon, t.ex. genom att ta på någon som inte vill eller skicka hotfulla meddelanden." },
  { front: "Dråp", back: "När någon dödar en annan person men inte lika planerat eller brutalt som vid mord." },
  { front: "Mord", back: "När någon dödar en annan person med avsikt, alltså planerat eller medvetet." },
  { front: "Medhjälp", back: "När man hjälper någon att begå ett brott, t.ex. håller vakt." },
  { front: "Gripande", back: "När polisen tar fast en person som misstänks för brott." },
  { front: "Förhör", back: "När polis eller åklagare ställer frågor till någon för att få veta vad som hänt." },
  { front: "Straffmyndig", back: "När man fyllt 15 år och kan dömas för brott." },
  { front: "Anhållan", back: "När åklagaren tillfälligt låser in någon som är misstänkt för brott, oftast upp till tre dagar." },
  { front: "Förundersökning", back: "Utredningen som polis och åklagare gör för att ta reda på vad som hänt och om någon ska åtalas." },
  { front: "Häktning", back: "När en domstol beslutar att en misstänkt ska vara inlåst längre tid, t.ex. för att inte kunna förstöra bevis." },
  { front: "Åtal", back: "När åklagaren bestämmer att bevisa i domstol att en misstänkt gjort brottet." },

  // Rättegång

  { front: "Ordförande / Domare", back: "Den som leder rättegången och är juridiskt utbildad." },
  { front: "Nämndemän", back: "Vanliga personer som hjälper domaren att döma. De är inte jurister." },
  { front: "Försvarare / Advokat", back: "Den som hjälper och försvarar den misstänkte i rätten." },
  { front: "Åklagare", back: "Den som försöker visa att den misstänkte är skyldig." },
  { front: "Tilltalad", back: "Den person som är misstänkt för brottet i rättegången." },
  { front: "Målsägande", back: "Den som blivit utsatt för brottet." },
  { front: "Mened", back: "När någon ljuger i domstol fast de lovat att tala sanning. Det är ett brott." },
  { front: "Överklagan", back: "När man inte är nöjd med domen och vill att en högre domstol prövar fallet." },
    { front: "Tingsrätt", back: "Den första domstolen man kommer till när ett brott ska prövas." },
  { front: "Hovrätt", back: "Domstolen över tingsrätten. Dit man överklagar om man vill få domen ändrad." },
  { front: "Högsta domstolen", back: "Sveriges högsta domstol. Tar bara upp viktiga fall som kan påverka hur lagar ska tolkas." },

  // Påföljder
  { front: "Samhällstjänst", back: "Man jobbar gratis för samhället istället för att få fängelse." },
  { front: "Fotboja", back: "Man avtjänar straff hemma men måste följa tider. En fotboja håller koll på var man är." },
  { front: "Skyddstillsyn", back: "Man blir övervakad under en period och måste sköta sig för att slippa fängelse." },
  { front: "Villkorlig dom", back: "Man slipper fängelse men måste undvika nya brott under en prövotid." },
  { front: "Rättspsykiatrisk vård", back: "När någon döms till vård istället för fängelse på grund av psykisk sjukdom." },
  { front: "Sluten ungdomsvård", back: "Fängelseliknande vård för personer under 18 år som begått allvarliga brott." },

  // Övriga begrepp
  { front: "Normer", back: "Oskrivna regler om hur vi brukar bete oss." },
  { front: "Lagar", back: "Regler som står i lagboken och som man kan straffas för att bryta." },
  { front: "Rättsstat", back: "Ett land där lagarna gäller lika för alla och där domstolarna är rättvisa." },
  { front: "Polisstat", back: "Ett land där polisen och staten har mycket makt och där människors frihet kan vara begränsad." },

  { front: "Gången vid brott", 
    back: "1. *Brott begås*.<br><br>2. *Gripande*.<br><br>3. *Anhållan*.<br><br>4. *Häktning*.<br><br>5. *Rättegång*.<br><br>6. *Dom*.<br><br>7. *Påföljd* (straff)." },
	
	  { front: "Varför har vi lagar i ett samhälle?", 
    back: "Lagar finns för att skapa ordning och trygghet i samhället.<br><br>De skyddar människor och deras rättigheter.<br><br>Utan lagar skulle konflikter vara svåra att lösa." },

  { front: "Hur påverkar lagar och normer varandra?", 
    back: "Normer kan ligga till grund för vilka lagar som skapas.<br><br>Lagar kan också förändra normer över tid genom att påverka hur människor beter sig.<br><br>Båda styr hur vi förväntas agera." },

  { front: "Vem stiftar lagar och var kan man läsa dem?", 
    back: "Riksdagen stiftar Sveriges lagar.<br><br>Regeringen lämnar oftast förslag till nya lagar, s.k. propositioner.<br><br>Lagar finns att läsa i **Sveriges lagbok** och på **riksdagens** eller **regeringens** webbplatser." },

  { front: "Vilka domstolar finns i Sverige och vad gör de?", 
    back: "Det finns allmänna domstolar: tingsrätt, hovrätt och Högsta domstolen.<br><br>De hanterar bland annat brottmål och tvistemål.<br><br>Det finns också förvaltningsdomstolar som avgör mål mellan privatpersoner och myndigheter." },

  { front: "Vad händer från att ett brott begås tills en påföljd bestäms?", 
    back: "Polisen utreder brottet genom en förundersökning.<br><br>Åklagaren beslutar om åtal ska väckas.<br><br>Domstolen avgör om personen är skyldig och bestämmer påföljden." },

  { front: "Vilka olika brott kan du ge exempel på?", 
    back: "Exempel på brott är **stöld, rån, misshandel och skadegörelse**.<br><br>Det finns också trafikbrott som fortkörning.<br><br>Ekonomiska brott som bedrägeri är också vanliga." },

  { front: "Vilka olika påföljder kan du ge exempel på?", 
    back: "Exempel på påföljder är **böter, fängelse och villkorlig dom**.<br><br>Andra är **skyddstillsyn** och **samhällstjänst**.<br><br>Unga kan få exempelvis **ungdomsvård** eller **ungdomstjänst**." },

  { front: "Vad är kriminalvårdens uppgifter?", 
    back: "Kriminalvården ansvarar för fängelser, frivård och häkten.<br><br>De ska se till att straffen verkställs på ett säkert sätt.<br><br>De arbetar också för att personer inte ska begå nya brott." },

  { front: "Varför kan människor begå brott?", 
    back: "Människor kan begå brott på grund av sociala och ekonomiska problem.<br><br>Påverkan från andra eller missbruk kan också spela in.<br><br>Ibland handlar det om personliga konflikter eller impulser." },

  { front: "Hur kan ett brott påverka gärningspersonen, brottsoffret och samhället?", 
    back: "Gärningspersonen kan få påföljder som påverkar framtiden.<br><br>Brottsoffret kan drabbas känslomässigt, fysiskt och ekonomiskt.<br><br>Samhället påverkas genom ökade kostnader och minskad trygghet." },

  { front: "Vad är skillnaden mellan en rättsstat och en polisstat?", 
    back: "I en rättsstat är alla lika inför lagen och rättssäkerhet är central.<br><br>I en polisstat har myndigheter stor makt och medborgarnas friheter är begränsade.<br><br>Rättsstaten skyddar individen, medan polisstaten kontrollerar den." }
];
