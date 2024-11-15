 $(document).ready(function () {
            //Sample Json data
            var jsondata = [
                     {
                          "mun":"Partido Acción Nacional",
                           "nom":"Jorge Hernández Espinoza",
                           "dir":"Av. Francisco I. Madero No.301, Col. Centro, C.P. 42000 Pachuca,Hgo.",
                           "tel":"5517632316",
                           "correo":"transparencia.pan.hidalgo@gmail.com",
                           "web":"<a href="+" http://panhidalgo.org/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>',
                            "id":"1",
                            "FechabajaW":"",
                            "oficio":"" 
                       }, 
                      {
                          "mun":"Partido Movimiento Ciudadano",
                           "nom":"María Paula Cervantes Cervantes",
                           "dir":"Calle Laura Lugo 102, Col. Periodistas, Pachuca de Soto, Hidalgo.",
                           "tel":"7714890622 y 7714890623",
                           "correo":"transparenciamchgo@gmail.com",
                           "web":"<a href="+" https://movimientociudadano.mx/hidalgo"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>',
                            "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                       }, 
                      {
                          "mun":"Partido Revolucionario Institucional",
                           "nom":"Lic. Israel Huerta Lozano",
                           "dir":"Blvd. Luis Donaldo Colosio No. 2013, Col. Ex Hacienda de Coscotitlán, 42064, Pachuca de Soto",
                           "tel":"7717170227",
                           "correo":"pri.transparencia.hidalgo@gmail.com",
                           "web":"<a href="+" https://www.pri-hidalgo.org/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>',
                            "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                       }, 
                      {
                          "mun":"Partido de la Revolución Democrática (PRD)",
                           "nom":"Gillermina Hernández San Juan",
                           "dir":"Calle. Tierra y Libertad No. 16 esquina Privada del Sol, Col. Rojo Gómez, C.P. 42030",
                           "tel":"771 147 3970",
                           "correo":"transparencia.prd.2024@gmail.com",
                           "web":"<a href="+" http://www.prdhidalgo.org/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>',
                            "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                       }, 
                      {
                        "mun":"Partido Político Morena",
                        "nom":"Lic. Lizeth Donaxi Chiñas de la Cruz",
                        "dir":"Calle Mariano Abasolo número 609, colonia centro, C.P. 42000, Pachuca de Soto, Hgo.",
                        "tel":"771 622 65 78",
                        "correo":"transparenciamorenahidalgo@gmail.com",
                        "web":"<a href="+" https://hidalgo.morena.org"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>',
                         "id":"1",
                       "FechabajaW":"",
                       "oficio":""
                       }, 
                      {
                          "mun":"Partido del Trabajo (PT)",
                           "nom":"Lic. Wendolyn Monserrat Garcia Lugo",
                           "dir":"Boulevard Everardo Márquez Parc. 103 Z-1 P5/7 No. 813, Adolfo López Mateos, C.P. 42094, Pachuca de Soto",
                           "tel":"771 675 7221",
                           "correo":"transparenciapthgo@gmail.com",
                           "web":"<a href="+" http://partidodeltrabajohidalgo.com.mx/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>',
                            "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                       }, 
                      {
                          "mun":"Partido Verde Ecologista de México, Comité Ejecutivo Estatal de Hidalgo",
                           "nom":"Juana Sánchez González",
                           "dir":"Avenida del Palmar #122 colonia el Tezontle, c.p. 42084, Pachuca de Soto.",
                           "tel":"771 761 3186",
                           "correo":"Transparenciaverdehgo1@gmail.com",
                           "web":"<a href="+" http://www.partidoverdehidalgo.org/transparencia/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>',
                            "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                       }, 
                      {
                          "mun":"Partido Político Local Más Por Hidalgo (+XH)",
                           "nom":"Lic. Dalila López García",
                           "dir":"Boulevard Luis Donaldo Colosio número 5112, lote 35, Fraccionamiento Colosio código postal 42039 (segundo y tercer nivel)",
                           "tel":"7714883014",
                           "correo":"partidomasporhidalgo_transparencia@hotmail.com",
                           "web":"<a href="+" http://www.partidomasporhidalgo.org/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>',
                            "id":"0",
                          "FechabajaW":"22/02/22",
                          "oficio":"ITAIH/SE/68/2022" 
                       }, 
                      {
                          "mun":"Partido Político Local PODEMOS",
                           "nom":"Fabián González Contreras",
                           "dir":"Boulevard Valle de San Javier número 903, interior 402, Col. Real del Valle, Pachuca de Soto Hidalgo.",
                           "tel":"7713693907",
                           "correo":"transparencia.podemoshgo@gmail.com",
                           "web":"<a href="+" http://podemos-hidalgo.com/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>',
                            "id":"0",
                          "FechabajaW":"29/03/2022",
                          "oficio":"ITAIH/SE/153/2022" 
                       }, 
                      {
                          "mun":"Partido Político Local Nueva Alianza Hidalgo",
                           "nom":"Mauricio Cuevas Rodríguez",
                           "dir":"Calle Dr. Eliseo Ramírez Ulloa No. 1005 Colonia Doctores, Pachuca,Hgo.",
                           "tel":"771 7784055 Ext. 103",
                           "correo":"transparencia.na@gmail.com",
                           "web":"<a href="+" http://www.nuevaalianzahidalgo.org"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>',
                            "id":"1",
                          "FechabajaW":"",
                          "oficio":"" 
                       }, 
                      {
                          "mun":"Partido Encuentro Social Hidalgo",
                           "nom":"L.D. Luis Enrique Rosas Díaz",
                           "dir":"Santa Catarina #111, Fraccionamiento la Herradura, primer piso, en la Ciudad de Pachuca de Soto, Estado de Hidalgo.",
                           "tel":"7714891625",
                           "correo":"transparencia@partidoencuentrosocialhidalgo.com",
                           "web":"<a href="+" http://pesolidariohidalgo.com/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>',
                            "id":"0",
                          "FechabajaW":"22/02/22",
                          "oficio":"ITAIH/SE/68/2022" 
                       }, 
                      {
                          "mun":"Partido Encuentro Solidario",
                           "nom":"Lic. Aranet González Flores",
                           "dir":"Calle Rojo Gómez Num. 1110, Col. Ampliacion Santa Julia, C.P. 42080 Pachuca de Soto, Hgo.",
                           "tel":"443 4037205",
                           "correo":"pesh.transparencia@gmail.com",
                           "web":"<a href="+" http://peshidalgo.org/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>',
                            "id":"1",
                          "FechabajaW":"29/03/2022",
                          "oficio":"ITAIH/SE/153/2022" 
                       }


              ];

            var data_filter = jsondata.filter( element => element.id =="1")
            

 
            $('#tablePartidos').bootstrapTable({
                //Assigning data to table
                data: data_filter
            });
        }).on('shown.bs.tab');