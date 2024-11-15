 $(document).ready(function () {
            //Sample Json data
            var jsondata = [
                         {  
                          "mun":"Ayuntamiento de Emiliano Zapata" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/AMONESTACIONEMILIANOZAPATALICENRIQUE20ORD22.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },
                         {  
                          "mun":"Ayuntamiento de Nopala de Villagrán" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/AMONESTACIONNOPALAINGMAYELI20ORD22.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },
                         {  
                          "mun":"Sindicato Único de Trabajadores al Servicio de la Comisión de Agua y Alcantarillado de Sistemas Intermunicipales de Hidalgo" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/AMONESTACIONSINDICATOCASIMLICSAULMONROY17ORD22.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"0",
                          "FechabajaW":"29/09/2022",
                          "oficio":"itaih/SE/337/2022" 

                        },
                         {  
                          "mun":"Ayuntamiento de Pacula" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/AMONESTACIONPACULALIC.TIMOTEO16ORD22.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },
                         {  
                          "mun":"Ayuntamiento de Tulancingo de Bravo" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/AMONESTACIONTULANCINGOLICLUISARMANDO16ORD22.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"0",
                          "FechabajaW":"27/09/200",
                          "oficio":"ITAIH/SE/332/2022" 

                        },
                         {  
                          "mun":"Ayuntamiento de Huazalingo" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/HUAZALINGOLIC.EUSTAQUIO15ORD22.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },
                         {  
                          "mun":"Ayuntamiento de Singuilucan" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/VANESSASINGUILUCAN12ORD27JUN22.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },
                          {  
                          "mun":"Ayuntamiento de Yahualica" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/YAHUALICAISMAEL12ORD27JUN22.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                        },
                         {  
                          "mun":"Ayuntamiento de Tulancingo de Bravo" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/12ORDTULACINGO27JUN22.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },
                          {  
                          "mun":"Ayuntamiento de Xochicoatlán" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/12ORDXOCHICOATLAN27JUN22.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                        },

                         {  
                          "mun":"Universidad Autónoma del Estado de Hidalgo" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/10ORD2UAEHROCIO18MAYO22.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"0",
                          "FechabajaW":"31/05/2022",
                          "oficio":"ITAIH/SE/219/2022" 

                        },
                          {  
                          "mun":"Universidad Autónoma del Estado de Hidalgo" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/10ORDUAEHROCIO18MAYO22.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"0",
                          "FechabajaW":"01/06/2022",
                          "oficio":"ITAIH/SE/220/2022" 
                        },
                       {  
                          "mun":"Partido Acción Nacional Estatal de Hidalgo" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/PARTIDOACCIONNACIONAL9ORD5MAY22.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },
                        {  
                          "mun":"Ayuntamiento de Tepeapulco" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/TEPEAPULCO9ORD5MAY22.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },
                        {  
                          "mun":"Sindicato Único de Trabajadores al servicio del Municipio de Emiliano Zapata" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/8ORDSINDICATOEMILIANO20ABRIL22.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },
                       {  
                          "mun":"Ayuntamiento de Tepeji del Rio" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/7ORDTEPEJIDELRIO6ABRIL22.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },
                        {  
                          "mun":"Ayuntamiento de Tlahuelilpan" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/7ORDTLAHUELILPAN6ABRIL22.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },

                        {  
                          "mun":"Ayuntamiento de Tlanalapa" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/7ORDTLANALAPA6ABRIL22.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },
                        {  
                          "mun":"Ayuntamiento de Tezontepec de Aldama" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/7ORDTEZONTEPECALDAMA6ABRIL22.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },
                        {  
                          "mun":"Ayuntamiento de Tecozautla" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/7ORDTECOZAUTLA6ABRIL22.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },
                        {  
                          "mun":"Ayuntamiento de San Bartolo Tutotepec" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/6ORDSANBARTOLO23MARZO22.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },
                         {  
                          "mun":"Ayuntamiento de Singuilucan" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/6ORDSINGUILUCAN23MARZO22.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },
                         {  
                          "mun":"Ayuntamiento de Tasquillo" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/6ORDTASQUILLO23MARZO22.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },
                         {  
                          "mun":"Ayuntamiento de Tianguistengo" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/6ORDTIANGUISTENGO23MARZO22.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },
                         {  
                          "mun":"Sindicato Único de Trabajadores al servicio del Municipio de Atotonilco el Grande " ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/6ORDSINDICATOATOTONILCOGRAN23MARZO22.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },
                         {  
                          "mun":"Sindicato Único de Trabajadores al servicio del Municipio de Tizayuca" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/6ORDSINDICATOTIZAYUCA23MARZO22.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },
                         {  
                          "mun":"Sindicato Único de Trabajadores al servicio del Municipio de Tlanalapa" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/6ORDSINDICATOTLANALAPA23MARZO22.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },
                       {  
                          "mun":"Sindicato Único de Trabajadores y Empleados de la Universidad Autónoma del Estado de Hidalgo" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/5ORDSINDICATOEMPLEUAEH9MARZO22.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"0",
                          "FechabajaW":"05/04/2022",
                          "oficio":"ITAIH/SE/168/2022" 

                        },
                         {  
                          "mun":'Sindicato "Lealtad, Fuerza y Perseverancia" de los Trabajadores al servicio del Municipio de Tlaxcoapan' ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/5ORDSINDTLAXCOAPAN9MARZO22.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },
                         {  
                          "mun":"Sindicato Único de Trabajadores al Servicio del Poder Legislativo del Estado de Hidalgo" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/5ORDSINDPODERLEGIS9MARZO22.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"0",
                          "FechabajaW":"29/06/2022",
                          "oficio":"ITAIH/SE/254/2022" 

                        },
                         {  
                          "mun":"Sindicato Único de Trabajadores al Servicio del Municipio de Mineral del Monte" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/5ORDSINDMONTE9MARZO22.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },
                         {  
                          "mun":"Sindicato Único de Trabajadores al Servicio del Municipio de Huautla" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/5ORDSINDHUAUTLA9MARZO22.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },
                         {  
                          "mun":"Ayuntamiento de San Salvador" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/5ORDSANSALVADOR9MARZO22.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },
                       {  
                          "mun":"Ayuntamiento de Tepetitlán" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/4ORDLICJESUSCORNEJOTEPETITLAN23FEB22.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"0",
                          "FechabajaW":"06/05/2022",
                          "oficio":"ITAIH/SE/200/2022" 

                        },
                        {  
                          "mun":"Ayuntamiento de Tlahuelilpan" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/4ORDINGFRANCISCOTLAHUELILPAN23FEB2022.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"0",
                          "FechabajaW":"21/06/2022",
                          "oficio":"ITAIH/SE/232/2022" 

                        },
                         {  
                          "mun":"Sindicato Único de Trabajadores al Servicio de la Comisión del Agua y Alcantarillado de Hidalgo" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/4ORDSINDAGUAHGO23FEB22.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },
                       {  
                          "mun":"Ayuntamiento de Huazalingo" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/3ORDHUAZALINGO9FEB22.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },
                         {  
                          "mun":"Ayuntamiento de Agua Blanca de Iturbide" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/3ORDAGUA9FEB22.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },
                        {  
                          "mun":"Ayuntamiento de Apan" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/3ORDAPAN9FEB22.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },
                        {  
                          "mun":"Ayuntamiento de Huehuetla" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/3ORDHUEHUETLA9FEB22.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },
                         {  
                          "mun":"Ayuntamiento de Jaltocán" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/3ORDJALTOCAN9FEB22.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },
                         {  
                          "mun":"Ayuntamiento de Juárez Hidalgo" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/3ORDJUAREZ9FEB22.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },
                      {  
                          "mun":"Ayuntamiento de Nopala de Villagrán" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/3ORDNOPALA9FEB22.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },
                        {  
                          "mun":"Partido del Trabajo Hidalgo" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/3ORDPARTIDOTRABAJO9FEB22.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },
                                               {  
                          "mun":"Partido Verde Ecologista de México Hidalgo" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/3ORDPARTIDOVERDE9FEB22.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },

                         {  
                          "mun":"Sindicato Único de Trabajadores al Servicio del Municipio de Almoloya" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/3ORDSINDICATOALMOLOYA9FEB22.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },
                        {  
                          "mun":"Ayuntamiento de Mixquiahuala" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/2ORDANAMAYELAMIXQUIAHUALA26ENE22.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"0",
                          "FechabajaW":"01/03/22",
                          "oficio":"ITAIH/SE/84/2022" 

                        },
                         {  
                          "mun":"Ayuntamiento de Omitlán de Juárez" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/2ORDOMITLAN26ENE22.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },
                        {  
                          "mun":"Ayuntamiento de Mixquiahuala" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/2ORDMIXQUIAHUALA26ENE22.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },
                        {  
                          "mun":"Ayuntamiento de Francisco I. Madero" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/2ORDFRANCISCOIMADERO26ENE22.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },
                         {  
                          "mun":"Ayuntamiento de Chapantongo" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/2ORDCAHAPANTONGO26ENE22.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },
                          {  
                          "mun":"Partido Político Podemos" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/2ORDPARTIDOPODEMOS26ENE22.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },
                        {  
                          "mun":"Ayuntamiento de Pacula" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/24ORDPACULASERVIDORPUBOSCARURIEL15DIC21.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },
                        {  
                          "mun":"Ayuntamiento del Arenal" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/24ORDARENAL15DIC21.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },
                        {  
                          "mun":"Ayuntamiento de San Felipe Orizatlán" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/24ORDSANFELIPE15DIC21.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"0",
                          "FechabajaW":"22/06/22",
                          "oficio":"ITAIH/SE/234/2022" 

                        },
                         {  
                          "mun":"Partido del Trabajo Hidalgo" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/23ORDIVANOHEAPREZAAGUILARPARTIDOTRABAJO1DIC21.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"0",
                          "FechabajaW":"19/01/21",
                          "oficio":"11/2022" 

                        },
                          {  
                          "mun":"Ayuntamiento de Tepeapulco" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/23ORDKARLASHADANYAYUNTAMIENTOTEPEAPULCO1DIC21.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"0",
                          "FechabajaW":"17/12/21",
                          "oficio":"749/21" 

                        },
                          {  
                          "mun":"Ayuntamiento de Pacula" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/23ORDPACULA1DIC21.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },
                          {  
                          "mun":"Ayuntamiento de la Misión" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/23ORDLAMISION1DIC21.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },
                          {  
                          "mun":"Ayuntamiento de Acaxochitlán" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/22ORDACAXOCHITLAN18NOV21.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },
                 
                       {  
                          "mun":"Ayuntamiento de Lolotla" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/22ORDLOLOTLA18NOV21.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },

                        {  
                          "mun":"Ayuntamiento de Jacala de Ledezma" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/22ORDJACALA18NOV21.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },
                       {  
                          "mun":"Ayuntamiento de Progreso de Obregón" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/22ORDPROGRESODEOBREGON18NOV21.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },


                       {  
                          "mun":"Sindicato Único de Trabajadores al Servicio del Municipio de Tlanchinol" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/22ORDSINDICATOTLANCHINOL18NOV21.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"0",
                          "FechabajaW":"17/12/21",
                          "oficio":"753/21" 

                        },

                        {  
                          "mun":"Ayuntamiento de Santiago de Anaya" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/689SANTIAGODEANAYA21ORD3NOV21.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"0",
                          "FechabajaW":"17/12/21",
                          "oficio":"751/21" 

                        },

                      {  
                          "mun":"Ayuntamiento de Pisaflores" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/689PISAFLORES21ORD3NOV21.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },
                       {  
                          "mun":"Ayuntamiento de Emiliano Zapata" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/689EMILIANOZAPATA21ORD3NOV21.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },


                       {  
                          "mun":"Partido Movimiento Ciudadano" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/689PARTIDOMOVIMIENTOCIUDADANO21ORD3NOV21.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"0",
                          "FechabajaW":"17/12/21",
                          "oficio":"750/21" 

                        },

                        {  
                          "mun":"Ayuntamiento de Nicolás Flores" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/649NICOLASFLORES19ORD6OCT21.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },

                        {  
                          "mun":"Ayuntamiento de Chapulhuacán" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/649CHAPULHUACAN190RD6OCT21.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },
                       {  
                          "mun":"Ayuntamiento de Atotonilco de Tula" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/635SERVIDORAPUBLICAATOTONILCODETULA18ORD21.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },


                       {  
                          "mun":"Ayuntamiento de Ajacuba" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/627AJACUBA18ORD22SEP21.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },

                        {  
                          "mun":"Ayuntamiento de Huazalingo" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/628SERVIDORESHUAZALINGO18ORD22SEP21.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },


                          {  
                          "mun":"Instituto Estatal Electoral del Estado de Hidalgo" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/606INSESTATALELECTORAL17ORD21P15.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"0",
                          "FechabajaW":"06/10/21",
                          "oficio":"640/2021" 

                        },
                     {  
                          "mun":"Instituto Estatal Electoral del Estado de Hidalgo" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/605INSELECTORAL170RD21P16.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"0",
                          "FechabajaW":"06/10/21",
                          "oficio":"639/21" 

                        },
                       {  
                          "mun":"Tribunal Electoral del Estado de Hidalgo" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/604TRIBUNALESTATALELECTORAL17ORD21P14.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"0",
                          "FechabajaW":"24/09/21",
                          "oficio":"613/2021" 

                        },
                      {  
                          "mun":"Ayuntamiento de Mineral del Chico" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/600MINERALDELCHICO17ORD80921.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"0",
                          "FechabajaW":"09/03/2022",
                          "oficio":"ITAIH/SE/97/2022" 

                        },
                      {  
                          "mun":"Ayuntamiento de Cuautepec de Hinojosa" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/600CUAUTEPEC17ORD80921.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },
                        {  
                          "mun":"Ayuntamiento de Atotonilco de Tula" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/600ATOTONILCO17ORD80921.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },
                      {  
                          "mun":"Ayuntamiento de Cardonal" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/600CARDONAL17ORD80921.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },
                        {  
                          "mun":"Ayuntamiento de Almoloya" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/600ALMOLOYA17ORD80921.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },
                      {  
                          "mun":"Ayuntamiento de Acatlán" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/600ACATLAN17ORD80921.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"0",
                          "FechabajaW":"17/12/21",
                          "oficio":"752/21" 

                        },
                           {  
                          "mun":"Ayuntamiento de Yahualica" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/613YAHUALICA17ORDDE8SEP2021.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },

                      {  
                          "mun":"  Sindicato Único de Trabajadores al Servicio del Municipio de Emiliano Zapata " ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/614SINDICATOEMILIANOZAPATA17ORDDE8SEP21.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },

                      {  
                          "mun":"Ayuntamiento de Yahualica" ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/596Yahualica_Fun17ord21.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"0",
                          "FechabajaW":"17/09/21",
                          "oficio":"614/21 sustitucion pdf por incluir hipervinculo" 

                        },

                      {  
                          "mun":"  Sindicato Único de Trabajadores al Servicio del Municipio de Emiliano Zapata " ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/597EmilianoZapata_ Fun17ord21.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"0",
                          "FechabajaW":"17/09/21",
                          "oficio":"614/21 sustitucion pdf por incluir hipervinculo" 

                        },

                        {  

                          "mun":"  Ayuntamiento de Chilcuautla " ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/540_CHILCUAUTLA16ORD2021.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 

                        },
                        {  
                          "mun":"  Ayuntamiento de Huautla " , 
                           "arch": "<a href="+" ../ArchivosPdf/Sanciones/540_HUAUTLA_20_16ORD21.pdf"  + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"0",
                          "FechabajaW":"29/09/21",
                          "oficio":"629/21" 
                            },
                        {  
                          "mun":"  Ayuntamiento de Chilcuautla" , 
                           "arch": "<a href="+" ../ArchivosPdf/Sanciones/540_CHILCUAUTLA21_16ORD2021.pdf"  + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                            },
                             {  
                          "mun":"  Ayuntamiento de Yahualica " ,
                          "arch": "<a href="+"../ArchivosPdf/Sanciones/517_Yahualica110821.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":""  
                        },
                        {  
                          "mun":"  Ayuntamiento de Tlanalapa " , 
                           "arch": "<a href="+" ../ArchivosPdf/Sanciones/514-TLANALAPA15ORD21.pdf"  + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                            },
                        {  
                          "mun":"  Ayuntamiento de Omitlán de Juárez " , 
                           "arch": "<a href="+" ../ArchivosPdf/Sanciones/514-Omitlan15ORD21.pdf"  + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"0",
                          "FechabajaW":"02/09/21",
                          "oficio":"567/21" 
                            },
                            
                        { 
                         "mun":"  Partido Polìtico Podemos  " , 
                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/514-PPPODEMOS15ORD21.pdf"  + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                           },
                        { 
                         "mun":"  Ayuntamiento de Juárez Hidalgo  " ,
                           "arch": "<a href="+" ../ArchivosPdf/Sanciones/500AJUAREZ14ORD21.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":""  
                         },
                        { 
                         "mun":"  Ayuntamiento de Lolotla " , 
                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/500ALOLOTLA14ORD21.pdf"  + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                           },
                        { 
                         "mun":"  Ayuntamiento de Tezontepec de Aldama  " , 
                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/500ATEZONTEPEC14ORD21.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                           },
                        { 
                         "mun":"  Ayuntamiento de Xochicoatlán  " , 
                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/500AXOCHICOATLAN14ORD21.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":""  
                        },
                        { 
                         "mun":"  Sindicato Único de Trabajadores al Servicio del Municipio de Apan " , 
                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/500SINDICATOAPAN14ORD21.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":""  
                        },
                        { 
                         "mun":"  Sindicato Único de Trabajadores al Servicio del Municipio de Emiliano Zapata  " , 
                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/500SINDICATOEMILIANOZ14ORD21.pdf"  + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                           },
                        { 
                         "mun":"  Sindicato Único de Trabajadores al Servicio del Municipio de Tlanalapa  " , 
                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/500SINDICATOTLANALAPA14ORD21.pdf"  + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                        },
                        { 
                         "mun":"  Sindicato Único de Trabajadores al Servicio del Municipio de Tizayuca " , 
                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/500SINDICATOTIZAYUCA14ORD21.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":""  
                        },
                        { 
                         "mun":"  Sindicato Único de Trabajadores al Servicio del Municipio de Huautla  " , 
                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/500SINDICATOHUAUTLA14ORD21.pdf"  + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                           },
                        { 
                         "mun":"  Partido Verde Ecologista Estatal  " , 
                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/500PARTIDOVERDE14ORD21.pdf"  + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                           },
                        { 
                         "mun":"  Partido Político Local Mas por Hidalgo  " ,  
                         "arch": "<a href="+" ../ArchivosPdf/Sanciones/500PARTIDOLOCALMAS14ORD21.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":""  
                       },
                        { 
                         "mun":"  Ayuntamiento de Chapulhuacán  " , 
                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/473CHAPULHUACAN13ORD21.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"0",
                          "FechabajaW":"07/09/2021",
                          "oficio":"571/21" 
                           },
                        { 
                         "mun":"  Ayuntamiento de Cuautepec de Hinojosa " ,  
                         "arch": "<a href="+"  ../ArchivosPdf/Sanciones/473CUAUTEPEC13ORD21.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"0",
                          "FechabajaW":"10/09/21",
                          "oficio":"caso especial checar cajon" 
                          },
                        { 
                         "mun":"  Ayuntamiento de Eloxochitlán  " , 
                          "arch": "<a href="+"  ../ArchivosPdf/Sanciones/473ELOXOCHITLAN13ORD21.pdf"  + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"0",
                          "FechabajaW":"05/04/2022",
                          "oficio":"ITAIH/SE/169/2022" 
                           },
                        { 
                         "mun":"  Ayuntamiento de Ixmiquilpan " , 
                          "arch": "<a href="+"  ../ArchivosPdf/Sanciones/473IXMIQUILPAN13ORD21.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                           },
                        { 
                         "mun":"  Ayuntamiento de Jacala de Ledesma " , 
                          "arch": "<a href="+"  ../ArchivosPdf/Sanciones/473JACALA13ORD21.pdf"  + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                           },
                        { 
                         "mun":"  Ayuntamiento de Jaltocán  " , 
                          "arch": "<a href="+"  ../ArchivosPdf/Sanciones/473JALTOCAN13ORD21.pdf"  + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"0",
                          "FechabajaW":"08/09/21",
                          "oficio":"573/21" 
                           },
                        { 
                         "mun":"  Ayuntamiento de La Misión " , 
                          "arch": "<a href="+"  ../ArchivosPdf/Sanciones/473LAMISION13ORD21.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                           },
                        { 
                         "mun":"  Ayuntamiento de Metepec " , 
                          "arch": "<a href="+"  ../ArchivosPdf/Sanciones/473METEPEC13ORD21.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"0",
                          "FechabajaW":"02/09/21",
                          "oficio":"564/21" 
                           },
                        { 
                         "mun":"  Ayuntamiento de Nicolás Flores  " , 
                          "arch": "<a href="+"  ../ArchivosPdf/Sanciones/473NICOLASFLORES13ORD21.pdf"  + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":""  
                        },
                        { 
                         "mun":"  Partido Encuentro Social  " , 
                          "arch": "<a href="+"  ../ArchivosPdf/Sanciones/473PARTIDOENCUENTROSOCIAL13ORD21.pdf"  + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"0",
                          "FechabajaW":"27/08/2021",
                          "oficio":"557/21" 
                           },
                        { 
                         "mun":"  Ayuntamiento de Pisaflores  " , 
                          "arch": "<a href="+"  ../ArchivosPdf/Sanciones/473PISAFLORE13ORD21.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                           },
                        { 
                         "mun":"  Ayuntamiento de Progreso de Obregón " , 
                          "arch": "<a href="+"  ../ArchivosPdf/Sanciones/473PROGRESODEOBREGON13ORD21.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                           },
                        { 
                         "mun":"  Sindicato Único de Trabajadores al Servicio del Municipio Atotonilco El Grande  " , 
                          "arch": "<a href="+"  ../ArchivosPdf/Sanciones/473SINDICATOATOTONILCOELGRANDE13ORD21.pdf"  + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                           },
                        { 
                         "mun":"  Sindicato Único de Trabajadores al Servicio del Poder Legislativo " , 
                          "arch": "<a href="+"  ../ArchivosPdf/Sanciones/473SINDICATOPODERLEGISLATIVO13ORD21.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"0",
                          "FechabajaW":"02/09/21",
                          "oficio":"568/21" 
                           },
                        { 
                         "mun":"  Sindicato Único de Trabajadores al Servicio del Municipio Tlaxcoapan  " , 
                          "arch": "<a href="+"  ../ArchivosPdf/Sanciones/473SINDICATOTLAXCOAPAN13ORD21.pdf"  + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                           },
                        { 
                         "mun":"  Ayuntamiento de Singuilucan " , 
                          "arch": "<a href="+"  ../ArchivosPdf/Sanciones/473SINGUILUCAN13ORD21.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                           },
                        { 
                         "mun":"  Ayuntamiento de Tenango de Doria  " , 
                          "arch": "<a href="+"  ../ArchivosPdf/Sanciones/473TENANGO13ORD21.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                           },
                        { 
                         "mun":"  Ayuntamiento de Tepeapulco  " , 
                          "arch": "<a href="+"  ../ArchivosPdf/Sanciones/473TEPEAPULCO13ORD21.pdf"  + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                           },
                        { 
                         "mun":"  Ayuntamiento de Tepehuacán de Guerrero  " , 
                          "arch": "<a href="+"  ../ArchivosPdf/Sanciones/473TEPEHUACAN13ORD21.pdf"  + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"0",
                          "FechabajaW":"23-08-21",
                          "oficio":"554-21" 
                           },
                        { 
                         "mun":"  Ayuntamiento de Tepetitlán  " , 
                          "arch": "<a href="+"  ../ArchivosPdf/Sanciones/473TEPETITLAN13ORD21.pdf"  + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                           },
                        { 
                         "mun":"  Ayuntamiento de Tianguistengo " , 
                          "arch": "<a href="+"  ../ArchivosPdf/Sanciones/473TIANGUISTENGO13ORD21.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                           },
                        { 
                         "mun":"  Ayuntamiento de Tlahuiltepa " , 
                          "arch": "<a href="+"  ../ArchivosPdf/Sanciones/473TLAHUILTEPA13ORD21.pdf" + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                           },
                        { 
                         "mun":"  Ayuntamiento de Tlanchinol  " , 
                          "arch": "<a href="+"  ../ArchivosPdf/Sanciones/473TLANCHINOL13ORD21.pdf"  + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":""  
                        },
                        { 
                         "mun":"Ayuntamiento de Chapulhuacán" , 
                          "arch": "<a href="+"  ../ArchivosPdf/Sanciones/473CHAPULHUACAN13ORD21.pdf"  + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"0",
                          "FechabajaW":"07/09/21",
                          "oficio":"571/2021"  
                        },
                       
                        { 
                         "mun":"  Ayuntamiento de Tecozautla  " , 
                          "arch": "<a href="+"  ../ArchivosPdf/Sanciones/425-21.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                           },
                        { 
                         "mun":"  Ayuntamiento de San Salvador  " , 
                          "arch": "<a href="+"  ../ArchivosPdf/Sanciones/424-21.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                           },
                        { 
                         "mun":"  Ayuntamiento de Huehuetla " , 
                          "arch": "<a href="+"  ../ArchivosPdf/Sanciones/423-21.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                           },
                        { 
                         "mun":"  Ayuntamiento de Emiliano Zapata " , 
                          "arch": "<a href="+"  ../ArchivosPdf/Sanciones/422-21.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":""  
                        },
                        { 
                         "mun":"  Ayuntamiento de Cuautepec de Hinojosa " ,  
                         "arch": "<a href="+"  ../ArchivosPdf/Sanciones/421-21.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":""  
                       },
                        { 
                         "mun":"  Ayuntamiento de Atotonilco de Tula  " , 
                          "arch": "<a href="+"  ../ArchivosPdf/Sanciones/385-21.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":""  
                        },
                        { 
                         "mun":"  Ayuntamiento de Tlaxcoapan  " , 
                          "arch": "<a href="+"  ../ArchivosPdf/Sanciones/386-21.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"0",
                          "FechabajaW":"23-08-21",
                          "oficio":"554-21" 
                           },
                        { 
                         "mun":"  Ayuntamiento de Francisco I. Madero  " , 
                          "arch": "<a href="+"  ../ArchivosPdf/Sanciones/538-21FranciscoIMadero.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                        },
                        { 
                         "mun":"  Ayuntamiento de Santiago Tulantepec " , 
                          "arch": "<a href="+"  ../ArchivosPdf/Sanciones/387-21.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                           },
                        { 
                         "mun":"  Ayuntamiento de Acaxochitlán  " , 
                          "arch": "<a href="+"  ../ArchivosPdf/Sanciones/352-21.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":""  
                        },
                        { 
                         "mun":"  Ayuntamiento de El Arenal " , 
                          "arch": "<a href="+"  ../ArchivosPdf/Sanciones/353-21.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                           },
                        { 
                         "mun":"  Ayuntamiento de Atlapexco " ,  
                         "arch": "<a href="+"  ../ArchivosPdf/Sanciones/354-21.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"0",
                          "FechabajaW":"08/09/2021",
                          "oficio":"572/21" 
                          },
                        { 
                         "mun":"  Ayuntamiento de Agua Blanca " , 
                          "arch": "<a href="+"  ../ArchivosPdf/Sanciones/355-21.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                           },
                        { 
                         "mun":"  Ayuntamiento de Atitalaquia " ,  
                         "arch": "<a href="+"  ../ArchivosPdf/Sanciones/294-2021.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"0",
                          "FechabajaW":"23/08/21",
                          "oficio":"" 
                          },
                        { 
                         "mun":"  Ayuntamiento de Apan  " , 
                          "arch": "<a href="+"  ../ArchivosPdf/Sanciones/293-2021.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":""  
                        },
                        { 
                         "mun":"  Ayuntamiento de Ajacuba " , 
                          "arch": "<a href="+"  ../ArchivosPdf/Sanciones/292-2021.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                           },
                        { 
                         "mun":"  Ayuntamiento de Santiago de Anaya " ,  
                         "arch": "<a href="+"  ../ArchivosPdf/Sanciones/291-2021.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"0",
                          "FechabajaW":"01/10/21",
                          "oficio":"630/21" 
                          },
                        { 
                         "mun":"  Ayuntamiento de Xochiatipan " , 
                          "arch": "<a href="+"  ../ArchivosPdf/Sanciones/290-2021.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                           },
                        { 
                         "mun":"  Ayuntamiento de Zapotlán  " , 
                          "arch": "<a href="+"  ../ArchivosPdf/Sanciones/289-2021.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                           },
                        { 
                         "mun":"  Partido Movimiento Ciudadano Hidalgo  " , 
                          "arch": "<a href="+"  ../ArchivosPdf/Sanciones/288-2021.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                           },
                        { 

                         "mun":"  Ayuntamiento de Zimapán " ,  
                         "arch": "<a href="+"  ../ArchivosPdf/Sanciones/287-2021.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                          },
                        { 



                         "mun":"  Partido de la Revolución Democrática Estatal de Hgo " ,  
                         "arch": "<a href="+"  ../ArchivosPdf/Sanciones/286-2021.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"0",
                          "FechabajaW":"27/08/21",
                          "oficio":"" 
                          },
                        { 



                         "mun":"  Ayuntamiento de Tolcayuca " , 
                          "arch": "<a href="+"  ../ArchivosPdf/Sanciones/285-2021.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"0",
                          "FechabajaW":"02-09-21",
                          "oficio":"566/21" 
                          },
                        { 
                         "mun":"  Ayuntamiento de Mixquiahuala  " , 
                          "arch": "<a href="+"  ../ArchivosPdf/Sanciones/284-2021.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                          },
                         { 
                         "mun":"Ayuntamiento de Tepehuacán de Guerrero" , 
                          "arch": "<a href="+"  ../ArchivosPdf/Sanciones/472.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                          },
                        { 



                         "mun":"  Ayuntamiento de Mineral del Monte " , 
                          "arch": "<a href="+"  ../ArchivosPdf/Sanciones/283-2021.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"0",
                          "FechabajaW":"16/03/22",
                          "oficio":"ITAIH/SE/127/2022" 
                          },
                        { 



                         "mun":"  Sindicato Único de Trabajadores al Servicio del Municipio de Mineral del Monte  " , 
                          "arch": "<a href="+"  ../ArchivosPdf/Sanciones/220-2021.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                          },
                        { 



                         "mun":"  Ayuntamiento de Tula de Allende " , 
                          "arch": "<a href="+"  ../ArchivosPdf/Sanciones/218-2021.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"0",
                          "FechabajaW":"29/03/2022, 02/08/2022",
                          "oficio":"ITAIH/SE/157/2022 HOJA2 03/2021, ITAIH/SE/266/2022 " 
                          },
                        { 



                         "mun":"  Ayuntamiento de Atotonilco el Grande  " , 
                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/192-21.pdf"  + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"0",
                          "FechabajaW":"02/09/21",
                          "oficio":"565/21" 
                          },
                          { 



                         "mun":"  Ayuntamiento de Almoloya  " , 
                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/196-2021.pdf"  + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                          },
                        { 



                         "mun":"  Ayuntamiento de Epazoyucan  " , 
                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/194-21.pdf"  + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"0",
                          "FechabajaW":"16/03/2022",
                          "oficio":"ITAIH/SE/127/2022" 
                          },
                        { 



                         "mun":"  Ayuntamiento de Calnali " , 
                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/193-21.pdf"  + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                          },
                        { 



                         "mun":"  Ayuntamiento de Apan  " ,
                           "arch": "<a href="+" ../ArchivosPdf/Sanciones/158-2021.pdf"  + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":""  
                       },
                        { 



                         "mun":"  Ayuntamiento de Mineral del Monte " ,
                           "arch": "<a href="+" ../ArchivosPdf/Sanciones/6221.pdf"  + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"0",
                          "FechabajaW":"16/03/2022",
                          "oficio":"ITAIH/SE/127/2022" 
                          },
                        { 



                         "mun":"  Ayuntamiento de Santiago de Anaya " , 
                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/6121.pdf"  + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"0",
                          "FechabajaW":"01/10/21",
                          "oficio":"630/21" 
                          },
                        { 




                         "mun":"  Partido Movimiento Ciudadano  " , 
                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/6321.pdf"  + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                          },
                        { 



                         "mun":"  Ayuntamiento de Tezontepec de Aldana  " , 
                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/400-20.pdf"  + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                          },
                        { 



                         "mun":"  Sindicato del Municipio de Apan " , 
                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/401-20.pdf"  + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                          },
                        { 


                         "mun":"  Ayuntamiento de San Felipe Orizatlán  " , 
                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/399-20.pdf"  + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":""  
                       },
                        { 


                         "mun":"  Ayuntamiento de Chapulhuacán  " , 
                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/04-19.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":""  
                       },
                        { 


                         "mun":"  Ayuntamiento de Acaxochitlán  " , 
                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/06-2019.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                          },
                        { 


                         "mun":"  Ayuntamiento de Mixquiahuala  " , 
                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/31-19.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                          },
                        { 


                         "mun":"  Ayuntamiento de Tecozautla  " , 
                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/188-19.pdf"  + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                          },
                        { 


                         "mun":"  Ayuntamiento de Apan  " , 
                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/327-19.pdf"  + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                          },
                        { 


                         "mun":"  Ayuntamiento de Atlapexco " , 
                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/38719.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                          },
                        { 


                         "mun":"  Ayuntamiento de Huehuetla " , 
                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/386-19.pdf"  + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":""  
                       },
                        { 


                         "mun":"  Ayuntamiento de San Salvador  " , 
                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/42819.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                          },
                        { 


                         "mun":"  Ayuntamiento de Tianguistengo " ,
                           "arch": "<a href="+" ../ArchivosPdf/Sanciones/42619.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                          },
                        { 


                         "mun":"  Ayuntamiento de Zapotlán de Juárez  " , 
                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/42519.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":""  
                       },
                        { 


                         "mun":"  Ayuntamiento de Pisaflores  " , 
                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/44719.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                          },
                        { 
                         "mun":"  Partido político Movimiento Ciudadano " , 
                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/44819.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                          },
                            { 
                         "mun":"Ayuntamiento de Tlaxcoapan" , 
                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/466.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                          },
                       { 


                         "mun":"  Ayuntamiento de Tenango de Doria  " , 
                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/467.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                          },
                        { 


                         "mun":"  Ayuntamiento de Progreso de Obregón " , 
                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/468.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                          },
                       
                        { 


                         "mun":"  Ayuntamiento de Huazalingo  " , 
                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/50619.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":""  
                       },
                        { 


                         "mun":"  Ayuntamiento de Santiago Tulantepec " , 
                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/50719.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                          },
                        { 


                         "mun":"  Ayuntamiento de Emiliano Zapata " , 
                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/51019.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":""  
                       },
                        { 

                         "mun":"  Ayuntamiento de Atotonilco de Tula  " , 
                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/51319.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                          },
                        { 

                         "mun":"  Ayuntamiento de Epazoyucan  " , 
                          "arch": "<a href="+"  ../ArchivosPdf/Sanciones/50819.pdf"  + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                          },
                        { 

                         "mun":"  Sindicato de Tlaxcoapan " , 
                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/50919.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                          },
                        { 

                         "mun":"  Ayuntamiento de Santiago de Anaya " , 
                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/53119.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                          },
                        { 

                         "mun":"  Ayuntamiento de el Arenal " , 
                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/53219.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                          },
                        { 

                         "mun":"  Ayuntamiento de Francisco I Madero  " , 
                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/613.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                          },
                        { 

                         "mun":"  Ayuntamiento de Jacala de Ledezma " ,
                           "arch": "<a href="+" ../ArchivosPdf/Sanciones/614.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":""  
                       },
                        { 

                         "mun":"  Ayuntamiento de Omitlán " , 
                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/617.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                          },
                        { 

                         "mun":"  Ayuntamiento de Metepec " , 
                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/663.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"0",
                          "FechabajaW":"11/03/2022",
                          "oficio":"ITAIH/SE/106/2022" 
                          },
                        { 

                         "mun":"  Ayuntamiento de La Misión " ,
                           "arch": "<a href="+" ../ArchivosPdf/Sanciones/662.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                          },
                        { 

                         "mun":"  Sindicato Único de Trabajadores al Servicio del Municipio de Emiliano Zapata  " , 
                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/661.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":""  
                       },
                        { 

                         "mun":"  Sindicato Único de Trabajadores al Servicio del Municipio de Tizayuca " , 

                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/660.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                          },
                        { 

                         "mun":"  Ayuntamiento de Singuilucan " , 

                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/658.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                          },
                        { 

                         "mun":"  Ayuntamiento de Ajacuba " , 

                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/657.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                          },
                        { 

                         "mun":"  Ayuntamiento de Almoloya  " , 

                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/656.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                          },
                        { 

                         "mun":"  Ayuntamiento de Lolotla " , 

                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/80719.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                          },
                        { 

                         "mun":"  Ayuntamiento de Tepeapulco  " , 

                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/80819.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                          },
                        { 

                         "mun":"  Ayuntamiento de Tepetitlán  " , 

                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/84219.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                          },
                        { 

                         "mun":"  Ayuntamiento de Ixmiquilpan " , 
                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/84319.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                          },
                        { 
                         "mun":"  Ayuntamiento de Tlanalapa " , 
                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/84419.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                          },
                        { 
                         "mun":"  Ayuntamiento de Nicolás Flores  " , 
                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/87419.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":""  
                       },
                        { 
                         "mun":"  Sindicato Único de Trabajadores al Servicio del Poder Legislativo del Estado de Hidalgo " , 
                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/87319.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":""  
                       },
                        { 
                         "mun":"  Ayuntamiento de Cuautepec de Hinojosa " , 
                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/8892020.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                          },
                        { 
                         "mun":"  Ayuntamiento de Agua Blanca de Iturbide " , 
                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/8872020.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":""  
                       },
                        { 
                         "mun":"  Sindicato Único de Trabajadores al Servicio del Municipio de Tlanalapa  " , 
                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/51-20.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                          },
                        { 
                         "mun":"  Ayuntamiento de Xochicoatlán  " , 
                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/47-20.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":""  
                       },
                        { 
                         "mun":"  Ayuntamiento de Pacula  " , 
                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/48-20.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                          },
                        { 
                         "mun":"  Ayuntamiento de Juárez Hidalgo  " , 
                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/50-20.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                          },
                        { 
                         "mun":"  Partido Verde Ecologista de México  " , 
                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/49-20.pdf"   + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":""  
                       },
                        { 
                         "mun":"  Partido Polìtico Local PODEMOS  " , 
                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/222-20.pdf"  + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":""
                       },
                        { 
                         "mun":"Sindicato Único de Trabajadores al Servicio del Huautla " , 
                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/221-20.pdf"  + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":""
                       },
                        { 
                         "mun":"  Ayuntamiento de Eloxochitlán  " , 
                          "arch": "<a href="+" ../ArchivosPdf/Sanciones/223-20.pdf"  + " target="+"'_blank'"+"><img src="+'" ../img/iconos/pdf.png"' +'alt=""></a>', 
                          "id":"1",
                          "FechabajaW":"",
                          "oficio":""
                          }


                       ];


            var data_filter = jsondata.filter( element => element.id =="1")
            $('#tableSansion').bootstrapTable({
                //Assigning data to table
                data: data_filter
            });
            
        }).on('shown.bs.tab');