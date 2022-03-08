

/* Running Variable List. If variable is greater than 0, the element will be hidden. */
  var hide_insulation_windows = 0;
  var hide_attic_living = 0;
  var hide_sliding_glass = 0;
  var hide_ductwork = 0;
  var hide_thermostat = 0;
  var hide_secondary_heating = 0;
  var hide_secondary_cooling = 0;
  var hide_primary_cooling = 0;
  var hide_all_heating = 0;

/*Variable scores

/* Hide primary and secondary heating and/or cooling system questions if user indicates they do not have secondary systems. */
if (q303 === "a303_13") {
  hide_secondary_heating++;
}
if (q307 === "a307_01") {
  hide_secondary_cooling++;
}
if (q305 === "a305_01") {
  hide_primary_cooling++;
}

if (q301 === "a301_13") {
  hide_all_heating++;
}
/*HTML question elements to hide*/

if(hide_sliding_glass > 0 ) {
  $("#sliding_glass_questions").hide();
} else {
  $("#sliding_glass_questions").show();
}

if(hide_thermostat > 0 ) {
  $("#thermostat_questions").hide();
} else {
  $("#thermostat_questions").show();
}

if(hide_secondary_heating > 0 ) {
  $("#secondary_heating_question").hide();
} else {
  $("#secondary_heating_question").show();
}

if(hide_secondary_cooling > 0 ) {
  $("#secondary_cooling_question").hide();
} else {
  $("#secondary_cooling_question").show();
}

if(hide_primary_cooling > 0 ) {
  $("#primary_cooling_question").hide();
} else {
  $("#primary_cooling_question").show();
}

if(hide_all_heating > 0){
  $("#all_heating_questions").hide();
} else {
  $("#all_heating_questions").show();
}
