$(document).ready(function() {

    /* Recommendation hiding logic. If certain selections are picked, the form will remove the recommednations that are no longer applicable. */

    /* DIY - hides recommendations that don't align with the user DIY input. */
  $("#q105").change(function(){
    if($("#q105 option:selected").val() === "a105_01"){
      $(".diy-experienced").show();
      $(".diy-interested").hide();
      $(".professional-services").hide();
     }
        });

  $("#q105").change(function(){
    if($("#q105 option:selected").val() === "a105_02" || $("#q105 option:selected").val() === "a105_03"){
      $(".diy-experienced").hide();
      $(".diy-interested").show();
      $(".professional-services").hide();
     }
        });

  $("#q105").change(function(){
    if($("#q105 option:selected").val() === "a105_04"){
      $(".diy-experienced").hide();
      $(".diy-interested").hide();
      $(".professional-services").show();
     }
        });
    /* All insulation - hides all recs if the home is newer than 2008. */
 $("#q201").change(function(){
   if($("#q201 option:selected").val() === "a201_03") {
     $("#insulation-recommendations").hide();
   } else {
     $("#insulation-recommendations").show();
   }
    });

/* Attic insulation - hides recommendations if the home does not have an attic to insulate or the attic has been insulated in the past 15 years. */
  $("#q204").change(function(){
    if($("#q204 option:selected").val() === "a204_01" || $("#q204 option:selected").val() === "a204_04") {
      $(".attic-insulation").hide();
     } else {
       $(".attic-insulation").show();
     }
      });
/* Wall insulation - hides recommendations if the home's walls have been insulated in the past 15 years. */
  $("#q205").change(function(){
    if($("#q205 option:selected").val() === "a205_01") {
      $(".wall-insulation").hide();
    } else {
      $(".wall-insulation").show();
    }
     });

 /* Floor insulation - hides recommendations if the home's floors have been insulated in the past 15 years or the home does not have a crawlspace. */
   $("#q206").change(function(){
     if($("#q206 option:selected").val() === "a206_01") {
       $(".floor-insulation").hide();
     } else {
       $(".floor-insulation").show();
     }
      });
    $("#q203").change(function(){
      if($("#q203 option:selected").val() === "a203_02" || $("#q203 option:selected").val() === "a203_04" || $("#q203 option:selected").val() === "a203_06") {
        $(".floor-insulation").hide();
      } else {
        $(".floor-insulation").show();
      }
       });

     //Store min and max income for each household size.
     var swrIncomeRanges = {
         a108_01: {optionValue: "a107_01", minIncome: "$25,520", maxIncome: "$51,966"},
         a108_02: {optionValue: "a107_02", minIncome: "$34,840", maxIncome: "$72,722"},
         a108_03: {optionValue: "a107_03", minIncome: "$43,920", maxIncome: "$89,832"},
         a108_04: {optionValue: "a107_04", minIncome: "$53,000", maxIncome: "$106,944"},
         a108_05: {optionValue: "a107_05", minIncome: "$62,080", maxIncome: "$124,056"},
         a108_06: {optionValue: "a107_06", minIncome: "$71,160", maxIncome: "$141,166"},
         a108_07: {optionValue: "a107_07", minIncome: "$80,240", maxIncome: "$144,374"},
         a108_08: {optionValue: "a107_08", minIncome: "$89,320", maxIncome: "$147,582"},
         a108_09: {optionValue: "a107_09", minIncome: "$89,320", maxIncome: "$147,582"}
     }
     $("#q108").change(function(){
         $("#q107").prop("disabled", true);

         for(key in swrIncomeRanges){
             if($("#q108 option:selected").val() == key){

                 let optionVal = swrIncomeRanges[$("#q108 option:selected").val()].optionValue;
                 let swrMinIncome = swrIncomeRanges[$("#q108 option:selected").val()].minIncome;
                 let swrMaxIncome = swrIncomeRanges[$("#q108 option:selected").val()].maxIncome;

                 let swrTemplate =
                 `<option selected disabled hidden style='display: none' value=''></option>
                 <option value="belowswr">Below ${swrMinIncome}</option>
                 <option value="${optionVal}">${swrMinIncome} -${swrMaxIncome} </option>
                 <option value="aboveswr">Above ${swrMaxIncome}</option>
                 <option value="a108_10">Skip/I prefer not to answer</option>`;

                 $("#q107").empty();
                 $("#q107").append(swrTemplate);

                 $("#q107").prop("disabled", false);
             };
         };
     });
 /* SWR eligbility. */
   $("#q107").change(function(){
     if($("#q107 option:selected").val() === "belowswr") {
        $("#above-swr-customer").hide();
        $("#swr-customer").hide();
        $("#below-swr-customer").show();
      }
      });
    $("#q107").change(function(){
      if($("#q107 option:selected").val() === "a107_01" || $("#q107 option:selected").val() === "a107_02" || $("#q107 option:selected").val() === "a107_03" || $("#q107 option:selected").val() === "a107_04" || $("#q107 option:selected").val() === "a107_05" || $("#q107 option:selected").val() === "a107_06" || $("#q107 option:selected").val() === "a107_07" || $("#q107 option:selected").val() === "a107_08" || $("#q107 option:selected").val() === "a107_09") {
         $("#above-swr-customer").hide();
         $("#swr-customer").show();
         $("#below-swr-customer").hide();
       }
       });
     $("#q107").change(function(){
       if($("#q107 option:selected").val() === "aboveswr") {
          $("#above-swr-customer").show();
          $("#swr-customer").hide();
          $("#below-swr-customer").show();
        }
        });

  });
