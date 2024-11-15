window.onload = demo;


function demo() {
    document.getElementById("gsc-i-id1").setAttribute("placeholder", "Buscar")


}
$(document).ready(function()
      {
         $("#mostrarmodal").modal("show");
      }).on('shown.bs.tab');


/*Modal*/

/* $(document).ready(function()
      {
         $("#mostrarmodal").modal("show");
      }).on('shown.bs.tab');


const d=document;
const $video=d.getElementById("Videoindex");
var $ModalIndex = d.getElementById('mostrarmodal');
const $countdown=d.getElementById("countdown");
const limitTime="Oct 11, 2022 09:00";
countdownDate=new Date(limitTime).getTime();

let countdownTempo=setInterval(()=>{
  let now=new Date().getTime(),
    limitTime=countdownDate-now,
    days=Math.floor(limitTime/(1000*60*60*24)),
    hours=("0"+Math.floor((limitTime%(1000*60*60*24))/(1000*60*60))).slice(-2),
    minutes=("0"+Math.floor((limitTime%(1000*60*60))/(1000*60))).slice(-2),
    seconds=("0"+Math.floor((limitTime%(1000*60))/(1000))).slice(-2);
    $countdown.innerHTML=`<h4>Faltan ${days} días, ${hours} horas ${minutes} minutos ${seconds} segundos </h4>`;
    if(limitTime<0){
        clearInterval(countdownTempo);
        $countdown.innerHTML="";
    }

},1000);

$ModalIndex.addEventListener('show.bs.modal', function (event) {
    console.log("entro");
      $video.play(); 

    });

btncerrar.addEventListener('click', (e)=> {
     console.log("entro");
    $video.setAttribute("src","");
  });

*/




function cargarVideo(url){
    document.getElementById('slider').src=url;
  } 

var ctx = document.getElementById('popChartYear');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [ "2019", "2020", "2021","2022","2023","2024"],
        datasets: [{
            label: '# Solicitudes',
            data: [11268, 10368,9959, 10249,12700,9187],
            backgroundColor: [
                'rgba(174, 214, 241, 1)',
                'rgba(133, 193, 233, 1)',
                'rgba(93, 173, 226, 1)',
                'rgba(52, 152, 219, 1)',
                'rgba(46, 134, 193, 1)',
                'rgba(40, 116, 166, 1)'
            ],
            borderColor: [
               'rgba(174, 214, 241, 1)',
                'rgba(133, 193, 233, 1)',
                'rgba(93, 173, 226, 1)',
                'rgba(52, 152, 219, 1)',
                'rgba(46, 134, 193, 1)',
                'rgba(40, 116, 166, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


var ctx = document.getElementById('popChartYear2');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2019", "2020", "2021", "2022", "2023","2024"],
        datasets: [{
            label: '# Solicitudes',
            data: [178, 90, 385, 402, 135, 153],
            backgroundColor: [
                'rgba(245, 238, 248, 1)',
                'rgba(235, 222, 240, 1)',
                'rgba(215, 189, 226, 1)',
                'rgba(195, 155, 211, 1)',
                'rgba(175, 122, 197, 1)',
                'rgba(155, 89, 182, 1)'
            ],
            borderColor: [
                 'rgba(245, 238, 248, 1)',
                'rgba(235, 222, 240, 1)',
                'rgba(215, 189, 226, 1)',
                'rgba(195, 155, 211, 1)',
                'rgba(175, 122, 197, 1)',
                'rgba(155, 89, 182, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

