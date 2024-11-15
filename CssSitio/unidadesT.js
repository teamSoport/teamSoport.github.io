$(function(){
   	var table;
	$.getJSON('Json/unidadesT.json',function(data){
		table = data.table;
		iniciando(0);
	});
     function iniciando(){
     	$("#tablaUnidadT").on('shown.bs.tab', empty());
     	jQuery.each(table.rows,function(i,row){
     		var r ="";
     		$.each(row,function(index,valor){
     			if (index=="id"){
     				r=r+"<tr><td>"+valor+"</td>";

     			}
     			else{
     				r = r + "<td>"+ valor +"</td>";
     			}
     		});
     		r += "</tr>";
     		$("#tablaUnidadT").on('shown.bs.tab', append(r));

     	});
  }

 }).on('shown.bs.tab');

