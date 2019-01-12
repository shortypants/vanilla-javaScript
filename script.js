$(document).ready(function() {






  $('#button1').click(function() {
    
    let inputGraden = $('#inputGraden').val();
    let outputEnergie = 3000;
    let inputRichting = $('#inputRichting').val();
    let outputRichting;
    
    if (inputGraden == 0) {
      outputEnergie = outputEnergie * 0.9;
    } else if (inputGraden == 15) {
      outputEnergie = outputEnergie * 1.1;
    } else if (inputGraden == 30) {
      outputEnergie = outputEnergie * 1.25;
    } else if (inputGraden == 45) {
      outputEnergie = outputEnergie * 1.05;
    } else if (inputGraden == 60) {
      outputEnergie = outputEnergie * 0.6;
    }

    
    if (inputRichting == 1) {
      outputEnergie = outputEnergie *0.9;
    } else if(inputRichting == 2) {
      outputEnergie = outputEnergie * 0.95;
    } else if(inputRichting == 3) {
      outputEnergie = outputEnergie *1.2;
    } else if(inputRichting == 4) {
      outputEnergie = outputEnergie *1.3;
    }

   









    $('#energieOpbrengst').text('Zonnepanelen leveren voor u gemiddeld ' + outputEnergie +"kWh per jaar op");


  });






});