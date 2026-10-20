
const wordlisttitle = "Öva på begrepp om människors rättigheter";

const words = [
  {
    front: "1. Vad står FN för och när grundades FN?",
    back: "FN betyder <b>Förenta nationerna</b>.<br><br>FN grundades år 1945."
  },
  {
    front: "2. Varför grundades FN?",
    back: "FN grundades efter andra världskriget för att skapa fred.<br><br>Man ville förhindra nya krig."
  },
  {
    front: "3. Varför skrev FN deklarationen om de mänskliga rättigheterna?",
    back: "För att alla människor ska ha samma rättigheter.<br><br>Man ville skydda människor från orättvisor och övergrepp."
  },
  {
    front: "4. Vad betyder rättigheter?",
    back: "Rättigheter är sådant som alla människor har rätt till.<br><br>Exempel är frihet, trygghet och utbildning."
  },
  {
    front: "5. Vilka tre grupper delas de mänskliga rättigheterna in i?",
    back: "• <b>Medborgerliga och politiska</b> rättigheter.<br><br>• <b>Ekonomiska, sociala och kulturella</b> rättigheter.<br><br>• <b>Kollektiva</b> rättigheter."
  },
  {
    front: "6. Vilken grupp av rättigheter tycker du är viktigast? Motivera.",
    back: "Jag tycker att medborgerliga och politiska rättigheter är viktigast.<br><br>De skyddar vår frihet och gör att vi kan säga vad vi tycker."
  },
  {
    front: "7. Vad betyder ratificering?",
    back: "Ratificering betyder att ett land godkänner ett internationellt avtal.<br><br>Landet lovar då att följa avtalet."
  },
  {
    front: "8. Vad är skillnaden mellan en deklaration och en konvention?",
    back: "En <b>deklaration</b> är gemensamma regler eller mål som inte är juridiskt bindande.<br><br>En <b>konvention</b> är ett avtal som länder måste följa när de har ratificerat det."
  },
  {
    front: "9. Vad är en nationell minoritet?",
    back: "En folkgrupp som har funnits länge i ett land och har en egen kultur eller ett eget språk.<br><br>Exempel är samer, judar och romer i Sverige."
  },
  {
    front: "10. Vad är ett urfolk?",
    back: "Ett folk som levde i ett område innan dagens stater bildades.<br><br>Samerna är ett exempel på ett urfolk."
  },
  {
    front: "11. Vad betyder antiziganism?",
    back: "Antiziganism betyder rasism och fördomar mot romer.<br><br>Det kan leda till diskriminering och hat."
  },
  {
    front: "12. Vad betyder antisemitism?",
    back: "Antisemitism betyder hat och fördomar mot judar.<br><br>Det kan leda till diskriminering och våld."
  },
  {
    front: "13. Varför behövs organisationer som arbetar för mänskliga rättigheter?",
    back: "De hjälper människor vars rättigheter inte respekteras.<br><br>De granskar också länder och försöker stoppa orättvisor."
  },
  {
    front: "14. Vad betyder konvention?",
    back: "En konvention är ett internationellt avtal mellan länder.<br><br>Länder som ratificerar avtalet lovar att följa det."
  },
  {
    front: "15. Varför har FN skrivit en konvention om barns rättigheter?",
    back: "För att barn behöver särskilt skydd.<br><br>Alla barn ska ha rätt till trygghet, utbildning och ett bra liv."
  },
  {
    front: "16. Vad är en kränkning?",
    back: "En kränkning är när någon behandlas illa eller respektlöst.<br><br>Det kan vara genom elaka ord, hot eller handlingar."
  },
  {
    front: "17. Ge tre exempel på kränkningar av mänskliga rättigheter.",
    back: "• Att bli diskriminerad.<br><br>• Att bli utsatt för våld.<br><br>• Att inte få säga sin åsikt."
  },
  {
    front: "18. Vad säger barnkonventionen om diskriminering?",
    back: "Alla barn har samma rättigheter.<br><br>Inget barn får diskrimineras på grund av till exempel kön, religion eller ursprung."
  },
  {
    front: "19. Nämn tre risker för barn i världen och vad makthavare kan göra.",
    back: "• <b>Krig:</b> Skapa fred och skydda barn.<br><br>• <b>Fattigdom:</b> Ge familjer stöd och mat.<br><br>• <b>Barnarbete:</b> Införa lagar och ge barn möjlighet att gå i skolan."
  },
  {
    front: "20. Vem ser till att diskrimineringslagen följs i Sverige?",
    back: "<b>Diskrimineringsombudsmannen (DO)</b> kontrollerar att lagen följs.<br><br>DO kan hjälpa till när någon blir diskriminerad."
  },
  {
    front: "21. Vad innebär diskriminering?",
    back: "Diskriminering är när någon behandlas sämre på grund av exempelvis kön, religion eller funktionsnedsättning.<br><br>Det är förbjudet enligt svensk lag."
  },
  {
    front: "22. Vad är orsakerna till och konsekvenserna av mobbning?",
    back: "<b>Orsaker:</b> Grupptryck, fördomar eller viljan att få makt.<br><br><b>Konsekvenser:</b> Den utsatta kan bli ledsen, må psykiskt dåligt och känna sig ensam."
  },
  {
    front: "23. Vad innebär samtyckeslagen?",
    back: "Sex måste vara frivilligt för alla som deltar.<br><br>Om någon inte deltar frivilligt kan det vara våldtäkt."
  },
  {
    front: "24. Vad är sexuella övergrepp?",
    back: "När någon utsätts för en sexuell handling mot sin vilja.<br><br>Det är ett brott och kan skada den utsatta."
  },
  {
    front: "25. Vad är Barnombudsmannen?",
    back: "Barnombudsmannen är en myndighet som arbetar för barns rättigheter i Sverige.<br><br>Den kontrollerar hur barnkonventionen följs och ger förslag på förbättringar."
  },
  {
    front: "26. Vad innebär jämlikhet?",
    back: "Jämlikhet betyder att alla människor har samma värde och rättigheter.<br><br>Ingen ska behandlas sämre än någon annan."
  },
  {
    front: "27. Vad gör man när man ratificerar en konvention?",
    back: "Ett land godkänner ett avtal och lovar att följa det.<br><br>Sverige ratificerade barnkonventionen 1990 och gjorde den till svensk lag 2020."
  },
  {
    front: "28. Ge exempel på en mellanstatlig organisation och förklara namnet.",
    back: "<b>FN</b> är en mellanstatlig organisation.<br><br>Den kallas så eftersom flera länder samarbetar för att lösa gemensamma problem."
  }
];
