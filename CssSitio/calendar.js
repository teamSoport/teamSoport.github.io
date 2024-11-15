function generate_year_range(start, end) {
  var years = "";
  for (var year = start; year <= end; year++) {
      years += "<option value='" + year + "'>" + year + "</option>";
  }
  return years;
}

var today = new Date();
var currentMonth = today.getMonth();
var currentYear = today.getFullYear();
var selectYear = document.getElementById("year");
var selectMonth = document.getElementById("month");



var createYear = generate_year_range(2024, 2024);
/** or
* createYear = generate_year_range( 2022, currentYear );
*/

document.getElementById("year").innerHTML = createYear;

var calendar = document.getElementById("calendar");
var lang = calendar.getAttribute('data-lang');

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Deciembre"];
var fechasInf = ["2024/1/8", "2024/1/9", "2024/1/10", "2024/2/1", "2024/2/2", "2024/2/6", "2024/3/1", "2024/3/4", "2024/3/5", "2024/4/1", "2024/4/2", "2024/4/3", "2024/5/2", "2024/5/3", "2024/5/6", 
                "2024/6/3", "2024/6/4", "2024/6/5","2024/7/1", "2024/7/2", "2024/7/3","2024/8/1", "2024/8/2", "2024/8/5", "2024/9/2", "2024/9/3", "2024/9/4", 
                "2024/10/2", "2024/10/3", "2024/10/4", "2024/11/4", "2024/11/5", "2024/11/6", "2024/12/2", "2024/12/3", "2024/12/4"];
var Diasinhabil = ["2024/1/1","2024/1/2","2024/1/3", "2024/1/4","2024/1/5", "2024/2/5", "2024/3/18","2024/3/28", "2024/3/29", "2024/5/1", "2024/9/16", "2024/10/1","2024/11/1", "2024/11/18"];             
var imprimir =[ "2024/1/31", "2024/2/29", "2024/3/27", "2024/4/30", "2024/5/31", "2024/6/28", "2024/7/31", "2024/8/30", "2024/9/30", "2024/10/31", "2024/11/29", "2024/12/31"];
var vacinicial1="2024/7/15";
var vacfin1="2024/7/26";
var vacinicial2="2024/12/17";
var vacfin2="2024/12/31";



var days = ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"];

var dayHeader = "<tr>";
for (var day in days) {
  dayHeader += "<th data-days='" + days[day] + "'>" + days[day] + "</th>";
}
dayHeader += "</tr>";

document.getElementById("thead-month").innerHTML = dayHeader;


monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);



function next() {
  currentYear = (currentMonth === 11) ? currentYear  : currentYear;
  currentMonth = (currentMonth + 1) % 12;
  showCalendar(currentMonth, currentYear);
}

function previous() {
  currentYear = (currentMonth === 0) ? currentYear : currentYear;
  currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
  showCalendar(currentMonth, currentYear);
}

function jump() {
  currentYear = parseInt(selectYear.value);
  currentMonth = parseInt(selectMonth.value);
  showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {

  var firstDay = ( new Date( year, month ) ).getDay();

  tbl = document.getElementById("calendar-body");

  
  tbl.innerHTML = "";

  
  monthAndYear.innerHTML = months[month] + " " + year;
  selectYear.value = year;
  selectMonth.value = month;

  // creating all cells
  var date = 1;


  for ( var i = 0; i < 6; i++ ) {
      var row = document.createElement("tr");

      for ( var j = 0; j < 7; j++ ) {
          if ( i === 0 && j < firstDay ) {
              cell = document.createElement( "td" );
              cellText = document.createTextNode("");
              cell.appendChild(cellText);
              row.appendChild(cell);
          } else if (date > daysInMonth(month, year)) {
              break;
          } else {
              cell = document.createElement("td");
              cell.setAttribute("data-date", date);
              cell.setAttribute("data-month", month + 1);
              cell.setAttribute("data-year", year);
              cell.setAttribute("data-month_name", months[month]);
              cell.className = "date-picker";
              cell.innerHTML = "<span>" + date + "</span>";
              
              var fecha = year + "/" + (month+1) + "/" + date;
               var fc = new Date(date, month, year);


              if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth() ) {
                  cell.className = "date-picker selected";
              }
                           
              if (Diasinhabil.indexOf(fecha)>-1) {
                   cell.className = "date-picker selected3";

              } 
                 
             if ( fecha>=(vacinicial1) && fecha<=(vacfin1)){
                     cell.className = "date-picker selected3";
                }
              if ( fecha>=(vacinicial2) && fecha<=(vacfin2)){
                     cell.className = "date-picker selected3";

                 }    
             if (fechasInf.indexOf(fecha)>-1) {
                   cell.className = "date-picker selected2";

              }    
              if (imprimir.indexOf(fecha)>-1) {
                   cell.className = "date-picker selected4";

              }   

            

              row.appendChild(cell);
              date++;
              fecha="";
              fc="";
          }


      }

      tbl.appendChild(row);
  }

}

function daysInMonth(iMonth, iYear) {
  return 32 - new Date(iYear, iMonth, 32).getDate();
}
