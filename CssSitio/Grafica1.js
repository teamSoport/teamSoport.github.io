var ctx = document.getElementById('speedChart');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["2008", "2009", "2010", "2011", "2012", "2013", "2014","2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023","2024"],
        datasets: [{
            label: '# Solicitudes',
            data: [888, 3142, 2587, 2709, 3420, 2925, 3185, 3045, 5681, 9902, 9712, 11268, 10368, 9959, 10249, 12700, 9187],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
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

 var ctx = document.getElementById('speedChart1');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"],
        datasets: [{
            label: '# Solicitudes',
            data: [4, 120, 178, 90, 385, 402, 135, 153],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
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

var ctx = document.getElementById('popChart2');


var myChart = new Chart(ctx, {
 type: 'pie',
 responsive:true,
 maintainAspectRatio:true,
 
 //Grafica Solicitudes de Acceso de Información por Sujetos Obligados
 data : {
  labels: ["Ayuntamientos", "Poderes", "Organísmos Públicos Autónomos ", "Partidos Politicos", "Organismos de la Sociedad Civil","Sindicatos"],
  datasets: [{
    label: 'My First Dataset',
    // data: [1545, 631, 236, 15, 17, 65],
    //data: [2443, 1199, 442, 119, 28, 115],Abril
    //data: [3192, 1783, 585, 130, 34, 120], junio
   // data: [3663,	2015,	656,	154,	41,	125 ], julio
   //data: [4488, 2464, 772, 166, 47,138],Agosto 
   data: [5219,	2731, 859, 176,	52,	150], //Septiembre
    backgroundColor: [
       'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
        'rgba(255, 99, 132, 0.6)'
    ],
    hoverOffset: 7
  }]
}

});






























