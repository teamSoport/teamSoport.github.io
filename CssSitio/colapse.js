$(document).ready(function () {
   if (document.location.hash != "")
{
    var idelemento = document.location.hash.substring(1);

switch(idelemento) {
  case 'A2020':
     $('#A2020').removeClass('collapse');
    break;
  case 'A2019':
     $('#A2019').removeClass('collapse');
    break;
     case 'A2018':
     $('#A2018').removeClass('collapse');
    break;
     case 'A2017':
     $('#A2017').removeClass('collapse');
    break;
     case 'A2016':
     $('#A2016').removeClass('collapse');
    break;
     case 'A2015':
     $('#A2015').removeClass('collapse');
    break;
     case 'A2014':
     $('#A2014').removeClass('collapse');
    break;
  default:
    // code block
}    



  
    
     
   
}

}).on('shown.bs.tab');
