function scuberGreetingForFeet(someValue){
  let result;
  
  if (someValue <= 400) {
    result = "This one is on me!";
  }
  
    else if (someValue >= 400 && someValue <= 2000 ) {
    result = "That will be twenty bucks."
  }
    else if (someValue >= 2000 && someValue <= 2500) {
      result = "I will gladly take your thirty bucks." 
    }
      else {
        result = "No can do."
      }
    
    return result;
  
}

function ternaryCheckCity(mainCity){
  return (mainCity === "NYC" ? "Ok, sounds good." : "No go.");
}
ternaryCheckCity("NYC");

function switchOnCharmFromTip(tip){
  let niceness;

  switch (tip) {
    case "generous":
      niceness = "Thank you so much.";
    break;
    case "not as generous":
      niceness = "Thank you.";
    break;
    default: 
      niceness = "Bye."
    break;
  }
return niceness;
  
}