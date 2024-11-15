 $(document).ready(function () {
            //Sample Json data
            var jsondata = [
                       {
                          "mun":"Acatlán",
                           "nom":"Ing. Teresa de Jesús Pérez Hernández",
                           "dir":"Av.16 de Enero, No. 14, Col. Centro, Acatlán Hidalgo, C.P. 43450.",
                           "tel":"775 754 5148",
                           "correo":"transparencia@acatlanhidalgo.gob.mx",
                           "web":"<a href="+"https://sites.google.com/view/municipiodeacatlan/inicio?authuser=0"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Acaxochitlán",
                           "nom":"Lic. Ivonne Vargas Rivera",
                           "dir":"Palacio Municipal, S/N, Col. Centro, Acaxochitlán, Hidalgo, C.P. 43720.",
                           "tel":"776 752 0090",
                           "correo":"unidaddetransparencia.acx2427@gmail.com",
                           "web":" "//<a href="+"http://acaxochitlanhgo.gob.mx/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Actopan",
                           "nom":"Lic. Ilse Beatriz Sahagún García",
                           "dir":"Calle. Hidalgo, #8, Colonia Centro, Actopan, Hidalgo, C.P. 42500, primer piso",
                           "tel":"772 72 7 0004, 772 72 7 2588",
                           "correo":"unidadtransparencia@actopanhidalgo.gob.mx",
                           "web":"<a href="+"http://actopanhidalgo.gob.mx/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Agua Blanca de Iturbide",
                           "nom":"T.S.U. María Guadalupe Franco Castañeda",
                           "dir":"Palacio Municipal S/N Col. Centro, Agua Blanca de Iturbide, Hidalgo.",
                           "tel":"774 974 10 31",
                           "correo":"transparencia@aguablanca.gob.mx",
                           "web":"<a href="+"http://aguablanca.gob.mx"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Ajacuba",
                           "nom":"L.E. Jazen Sánchez Benitez",
                           "dir":"Calle Eustolio Becerra, S/N, Zona Centro, Ajacuba, Hidalgo, C.P. 42150",
                           "tel":"778 782 4141, 778 782 4145",
                           "correo":"ajacubaunidaddetransparencia@gmail.com",
                           "web":""//<a href="+"http://www.municipioajacuba.gob.mx/#"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Alfajayucan",
                           "nom":"Ing. Norma Sofia Francisco Mezquital",
                           "dir":"Palacio Municipal S/N, Col. Centro C.P. 42390, Alfajayucan, Hgo.",
                           "tel":"738 728 8007, 738 728 8016 Ext. 101",
                           "correo":"transparencia.alfajayucan@hidalgo.gob.mx",
                           "web":"<a href="+"http://alfajayucan.hidalgo.gob.mx/OBComunes.html"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Almoloya",
                           "nom":"Ing. Ángela Benitez Hernández",
                           "dir":"C. Francisco I.Madero, S/N, Col. Centro Almoloya, Hidalgo, C.P. 43940",
                           "tel":"748 912 1833",
                           "correo":"transparencia.almoloya24.27@gmail.com",
                           "web":"<a href="+"http://almoloya.hidalgo.gob.mx"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Apan",
                           "nom":"Ing. Vicente Muñoz Fernández",
                           "dir":"Calle Zaragoza, Norte No. 6, Col Centro, Apan Hgo.",
                           "tel":"7489127021",
                           "correo":"transparencia@apan.gob.mx",
                           "web":"<a href="+"https://www.apan.gob.mx/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Atitalaquia",
                           "nom":"Mtro. José Edgardo León García",
                           "dir":"Av. Melchor Ocampo, S/N, Col. Centro, Atitalaquia, Hidalgo, C.P. 42970",
                           "tel":"787 737 7067 Ext. 112",
                           "correo":"transparencia@atitalaquia.gob.mx",
                           "web":"<a href="+"https://atitalaquia.gob.mx/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Atlapexco",
                           "nom":"Ing. Yadir Bautista Hernández",
                           "dir":"Palacio Municipal, S/N, Zona Centro, Atlapexco, Hidalgo, C.P. 43060",
                           "tel":"789 894 4005",
                           "correo":"transparenciaatlapexco24.27@gmail.com",
                           "web":"<a href="+"http://atlapexco.gob.mx"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Atotonilco de Tula",
                           "nom":"Lic. Víctor Huerta López",
                           "dir":"Av. Industrial, S/N, Barrio de Boxfil, Atotonilco de Tula, Hidalgo, C.P. 42980",
                           "tel":"735 1489/735 1589, 778 135 0817",
                           "correo":"transparencia-informatica@atotonilcodetula.gob.mx , sistemas@atotonilcodetula.gob.mx",
                           "web":"<a href="+"http://www.atotonilcodetula.gob.mx/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
{
                          "mun":"Atotonilco el Grande",
                           "nom":"L.M. Jonathan Ramos Ramírez",
                           "dir":"Palacio Municipal, S/N, Colonia Centro, Atotonilco el Grande, Hidalgo. C.P. 43300.",
                           "tel":"774 743 0040",
                           "correo":"transparencia@atotonilcoelgrande.gob.mx",
                           "web":"<a href="+"https://www.atotonilcoelgrande.gob.mx"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Calnali",
                           "nom":"T.S.U. Pedro Pablo Octaviano",
                           "dir":"Palacio Municipal S/N, Col. Centro, Calnali, Hgo. C.P. 43230",
                           "tel":"774 974 2048",
                           "correo":"u.de.transparencia.calnali2024@gmail.com",
                           "web":"<a href="+"https://calnali.gob.mx/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Cardonal",
                           "nom":"Lic. Celene Salitre Cruz",
                           "dir":"Ex taller, Calle Benito Juárez García, Colonia Centro, S/N, C.P. 43270, Cardonal, Hidalgo.",
                           "tel":"(01 759) 72 700 93",
                           "correo":"cardonaltransparencia2427@gmail.com",
                           "web":""//"<a href="+"http://cardonal.hidalgo.gob.mx/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Chapantongo",
                           "nom":"Ing. Ivonne López lópez",
                           "dir":"Palacio Municipal S/N Col. Centro Chapantongo, Hidalgo, C.P.42900",
                           "tel":"763 728 5007 Ext. 114",
                           "correo":"chapantongotransparencia@gmail.com",
                           "web":"<a href="+"http://www.chapantongo.gob.mx/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Chapulhuacán",
                           "nom":"T.S.U. Nahomi Mirielle Ángeles Rubio",
                           "dir":"Francisco Sarabia, S/N, Col. Centro, Chapulhuacán, Hidalgo, C.P. 44280",
                           "tel":"771 272 6108",
                           "correo":"chapulhuacan.transparencia@gmail.com transparencia@chapulhuacan.gob.mx",
                           "web":"<a href="+"http://chapulhuacan.gob.mx/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Chilcuautla",
                           "nom":"Karla Evelina Martínez Escobedo",
                           "dir":"Palacio Municipal, S/N Colonia Centro, Chilcuautla, Hidalgo C.P. 42750",
                           "tel":"738 783 0043",
                           "correo":"transparencia.chil.hgo@gmail.com",
                           "web":"<a href="+"https://chilcuautla.hidalgo.gob.mx/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Cuautepec de Hinojosa",
                           "nom":"L.E.M. Manuel Gonzalez Castelan",
                           "dir":"Palacio Mpal. S/N Col. Centro C.P. 43740",
                           "tel":"775 7540125, 775 7541463 Ext. 208",
                           "correo":"transparencia@cuautepechidalgo.gob.mx",
                           "web":"<a href="+"http://cuautepechidalgo.gob.mx/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"El Arenal",
                           "nom":"Ing. Lizeth Naydelin Oropeza Zamora",
                           "dir":"Palacio Municipal, S/N, Col. Centro, C.P. 42680",
                           "tel":"772 727 3292 Ext. 102",
                           "correo":"elarenaltransparencia@gmail.com",
                           "web":"<a href="+"http://www.elarenal.gob.mx"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Eloxochitlán",
                           "nom":"Lic. Alejandro Cabañas Lugo",
                           "dir":"Palacio Municipal, S/N , Col. Centro, Eloxochitlán Hgo.",// C.P. 43330",
                           "tel":"771 361 4480",
                           "correo":"transparencia.eloxochitlan1620@gmail.com",
                           "web":"<a href="+"https://ayuntamientoeloxochitlanhgo.gob.mx/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>' //infoPublica.html
                       }, 
               {
                          "mun":"Emiliano Zapata",
                           "nom":"C. Israel Eslava García",
                           "dir":"Calle 5 de mayo, Esq. Benito Juárez, S/N.",
                           "tel":"748 915 0179 Ext 106",
                           "correo":"transparencia@emilianoz.gob.mx",
                           "web":"<a href="+"https://sites.google.com/view/sutsmezh/inicio"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                        },
               {
                          "mun":"Epazoyucan",
                           "nom":"Lic. Janeth Ávila Ocadiz",
                           "dir":"Av. Hidalgo No. 11, Col. Centro, Epazoyucan, Hidalgo, C.P. 43580",
                           "tel":"771 792 5002, 771 792 5059",
                           "correo":"jao.2024epazoyucan@gmail.com",
                           "web":"<a href="+"https://epazoyucan.hidalgo.gob.mx"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Francisco I. Madero",
                           "nom":"Lic. Aracely Contreras Velázquez",
                           "dir":"Plaza Comercial Calle Trigésimo 1ro. De mayo, Tepatepec Centro, Tepatepec, Hidalgo.",
                           "tel":"738 724 0112, 738 724 0295 Ext. 211",
                           "correo":"transparenciafim2024.2027@gmail.com",
                           "web":""//<a href="+"http://www.franciscoimadero.gob.mx"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Huasca de Ocampo",
                           "nom":"Lem. Hugo Sánchez Mendoza",
                           "dir":"Palacio Municipal, S/N, Colonia Centro, Huasca de Ocampo Hidalgo C.P. 43500.",
                           "tel":"771 792 0101",
                           "correo":"huascatransparencia@gmail.com",
                           "web":"<a href="+"http://huascadeocampohidalgo.gob.mx/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Huautla",
                           "nom":"Lic. Kenedy Rafael Vite Castelán ",
                           "dir":"Av. Guillermo Roses, S/N, Zona Centro, Huautla, Hidalgo, C.P. 43050",
                           "tel":"771 702 3990",
                           "correo":"Huautla2020transp@gmail.com",
                           "web":""//<a href="+"https://huautla.gob.mx/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Huazalingo",
                           "nom":"T.S.U. Ángel Isay Hernández Vite",
                           "dir":"Palacio Municipal, S/N, Col. Centro, Huazalingo, Hidalgo, C.P. 43070",
                           "tel":"771 628 6070",
                           "correo":"transparenciamhu24.27@gmail.com",
                           "web":""//<a href="+"https://www.huazalingo.gob.mx/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Huehuetla",
                           "nom":"C. Luis Fernando Rosas Miranda",
                           "dir":"C. Hidalgo Esq. Benito Juárez, S/N, Col Centro, Huehuetla, Hgo.", // C.P. 43420
                           "tel":"771 175 9486",
                           "correo":"transparenciahuehuetla2427@gmail.com",
                           "web":""//<a href="+"http://huehuetla.hidalgo.gob.mx/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Huejutla de Reyes",
                           "nom":"Ing. Aaron Jair Cervantes Salguero",
                           "dir":"Palacio Municipal, S/N, Zona Centro, Huejutla de Reyes, Hidalgo C.P. 43000",
                           "tel":"789 896 1515",
                           "correo":"información_publica@huejutla.gob.mx",
                           "web":"<a href="+"http://huejutla.gob.mx"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Huichapan",
                           "nom":"Lic. Isela Martínez Anaya",
                           "dir":"Av. Hidalgo No. 1, Centro Histórico Huichapan, Hidalgo, C.P. 42400",
                           "tel":"761 782 0013 Ext. 114",
                           "correo":"transparencia@huichapan.gob.mx",
                           "web":"<a href="+"http://www.huichapan.gob.mx/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Ixmiquilpan",
                           "nom":"T.S.U. Claudia Ramírez Martínez",
                           "dir":"Plaza Juárez S/N Col. Centro, Ixmiquilpan Hidalgo, C.P. 42300, Ixmiquilpan, Hidalgo",
                           "tel":"759 723 0193",
                           "correo":"sec.transparencia@gobiernoixmiquilpan.com",
                           "web":"<a href="+"https://gobiernoixmiquilpan.com/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Jacala",
                           "nom":"Ing. Brayan Pérez Linarte",
                           "dir":"Avenida Juárez S/N, Colonia Centro, Jacala de Ledezma, Hidalgo, C.P. 42200",
                           "tel":"771 172 4374",
                           "correo":"transparencia@jacala.gob.mx",
                           "web":"<a href="+"http://jacala.gob.mx/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Jaltocán",
                           "nom":"Ing. Aleyda Teodoro Hernández",
                           "dir":"Palacio Municipal, S/N, Zona Centro Jaltocán, Hidalgo, C.P. 43040",
                           "tel":"771 208 0213",
                           "correo":"transparencia@jaltocan.gob.mx",
                           "web":"<a href="+"https://www.jaltocan.gob.mx/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Juárez Hidalgo",
                           "nom":"IRIC. Brisa Citlali Martínez Mohedano",
                           "dir":"Av. Principal, S/N, Col. Centro, Juárez Hidalgo, Hidalgo. ",
                           "tel":"771 316 5412",
                           "correo":"transparencia.juarez.hidalgo@gmail.com, transparencia@juarez-hidalgo.gob.mx",
                           "web":"<a href="+"https://juarez-hidalgo.gob.mx"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"La Misión",
                           "nom":"Ing. Maricela González Martínez",
                           "dir":"Palacio Municipal, S/N, Col. Centro, La Misión, Hidalgo, C.P. 42260",
                           "tel":"771 775 1114",
                           "correo":"transparencia.lamision@gmail.com",
                           "web":"<a href="+"http://www.lamision.gob.mx/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Lolotla",
                           "nom":"Lic. Valeria Bautista Hernández ",
                           "dir":"Presidencia Municipal, S/N, Colonia Centro, Lolotla Hidalgo.", // C.P. 43140
                           "tel":"771 350 2306",
                           "correo":"transparencia.lolotla@gmail.com",
                           "web":""//<a href="+"http://www.lolotla.gob.mx/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Metepec",
                           "nom":"Lic. Jaqueline Amador Rodíguez",
                           "dir":"Palacio Municipal, S/N Col. Centro, Metepec, Hidalgo C.P. 43400",
                           "tel":"775 124 0834",
                           "correo":"metepechgoaccinf@hotmail.com",
                           "web":"<a href="+"http://metepechidalgo.gob.mx/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Metztitlán",
                          //cambio ITAIH/DAI/311/2024
                           "nom":"Ing. Bertín Chávez Cruz",
                           "dir":"Palacio Municipal, S/N, Col. Centro, Metztitlán Hidalgo, C.P. 43350",
                           "tel":"774 743 0841 Ext. 26",
                           "correo":"transparencia.metztitlan2024@gmail.com",
                           "web":""//<a href="+"https://metztitlan.gob.mx/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Mineral de la Reforma",
                           "nom":"Mtra. Denis Duran Guerrero",
                           "dir":"Centro, C.P. 42080, Mineral de la Reforma, Hidalgo.",
                           "tel":"771 710 6343",
                           "correo":"transparencia.mmr@gmail.com",
                           "web":"<a href="+"https://mineraldelareforma.gob.mx/transparenciamr/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Mineral del Chico",
                           "nom":"MTRA. Elvia Palafox Silva",
                           "dir":"Plaza Principal, S/N, Col. Centro, C.P. 42120 Mineral del Chico,Hgo. ",
                           "tel":"771 71 509 94",
                           "correo":"transparenciainformmralch@gmail.com",
                           "web":"<a href="+"http://www.mineraldelchico.gob.mx/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Mineral del Monte",
                           "nom":"L.D. Jessica Karina García Hernández",
                           "dir":"Palacio Municipal, S/N, Col. Centro C.P. 42130, Mineral del Monte, Hidalgo. ",
                           "tel":"771 371 7143 Ext. 101",
                           "correo":"tmineraldelmonte@gmail.com",
                           "web":"<a href="+"http://mineraldelmontehidalgo.gob.mx/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Mixquiahuala de Juárez",
                           "nom":"L.D. Corina Escamilla Rios",
                           "dir":"Plaza de la Constitución S/N, Col Centro, Palacio Municipal, Mixquiahuala de Juárez, Hgo.",
                           "tel":"738 725 2903",
                           "correo":"mixquiahualatransparencia@gmail.com",
                           "web":"<a href="+"https://mixquiahuala.hidalgo.gob.mx/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Molango de Escamilla",
                           "nom":"C. Karina Josselin Sánchez Castillo",
                           "dir":"Palacio Municipal, S/N, Barrio Centro, C.P. 43100 Molango de Escamilla, Hidalgo.",
                           "tel":"774 745 0487, 774 745 0002",
                           "correo":"transparenciamolango2427@gmail.com",
                           "web":"<a href="+"http://molango.hidalgo.gob.mx/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Nicolás Flores",
                           "nom":"Lic. Asheley Rubí Olguín Martínez",
                           "dir":"Palacio Municipal, Colonia Centro, Nicolás Flores, Hidalgo",// C.P. 42360",
                           "tel":"",
                           "correo":"UT.GMNF2024@GMAIL.COM",
                           "web":"<a href="+"http://www.nicolasflores.gob.mx/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Nopala de Villagrán",
                           "nom":"Lic. Mario Fuentes Morales",
                           "dir":"Palacio Municipal s/n, Col. Centro, c.p. 42470, Nopala de Villagrán, planta baja",
                           "tel":"761 7821024, 761 7821025",
                           "correo":"transparencia@nopala.gob.mx",
                           "web":"<a href="+"http://www.nopala.gob.mx/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Omitlán de Juárez",
                           "nom":"L.C.E. Oscar Valencia Gúzman",
                           "dir":"Av. Juárez S/N Col. Centro",
                           "tel":"7717922076, 7717922105 Ext. 114",
                           "correo":"omitlantransparencia@gmail.com",
                           "web":"<a href="+"http://omitlandejuarez.gob.mx"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Pachuca de Soto",
                           "nom":"L.A. Miguel Ángel León Salinas",
                           "dir":"Calle M. Villa, número 115, Col. Centro, 2do piso, Pachuca de Soto",
                           "tel":"7716881161 Ext. 6115",
                           "correo":"uiap@pachuca.gob.mx",
                           "web":"<a href="+"http://www.pachuca.gob.mx"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Pacula",
                           "nom":"Lic. Eunice Chávez Fuentes",
                           "dir":"Plaza principal s/n, Centro, Pacula, Hgo, C.P. 42240.",
                           "tel":"7719800883 ext. 1003",
                           "correo":"transparencia.pacula2427@gmail.com",
                           "web":"<a href="+"http://www.pacula.gob.mx/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Pisaflores",
                           "nom":"Ing. Alan Ivan Martínez Villeda",
                           "dir":"Palacio Municipal s/n. Colonia. Centro, C.P. 42220 Municipio de Pisaflores, Hgo.",
                           "tel":"7712215958",
                           "correo":"transparencia.pisaflores2027@gmail.com",
                           "web":"<a href="+"https://pisaflores.gob.mx/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Progreso de Obregón",
                           "nom":"C. Gisael Chávez Aguilar",
                           "dir":"Plaza de la Constitución S/N Col. Centro, Progreso de Obregón Hidalgo",
                           "tel":"7387250651",
                           "correo":"ctprogreso27@gmail.com",
                           "web":""//<a href="+"http://progreso.hidalgo.gob.mx/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"San Agustín Metzquititlán",
                           "nom":"L.A. Ana Saireth Sagaón Olivares",
                           "dir":"Calle Isabel la Católica S/N Barrio Estepia San Agustin Metzquititlán, Hidalgo. C.P. 43380",
                           "tel":"7714896174",
                           "correo":"transparencia.municipal@metzquititlan.gob.mx, transaparenciametzquititlan24@gmail.com",
                           "web":"<a href="+"http://metzquititlan.gob.mx/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"San Agustín Tlaxiaca",
                           "nom":"C. Martha Sonia López Garcia",
                           "dir":"Palacio Municipio, Sector Huizache, San Agustín Tlaxiaca, Hgo. C.P. 42160",
                           "tel":"7437914001, 7437914707 Ext. 110",
                           "correo":"transparencia@sanagustintlaxiaca.gob.mx",
                           "web":"<a href="+"https://sanagustintlaxiaca.gob.mx/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"San Bartolo Tutotepec",
                           "nom":"Erika Belen Castillo Herrera",
                           "dir":"Plaza principal s/n Col. Centro,  c.p. 43440, San Bartolo Tutotepec, Hidalgo",
                           "tel":"017747553233",
                           "correo":"transparenciasbt@gmail.com",
                           "web":"<a href="+"http://www.sanbartolo.gob.mx/SANBARTOLO/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"San Felipe Orizatlán",
                           "nom":"Lic. Nicolás Delgado Ruiz",
                           "dir":"Palacio Municipal S/N Col. Centro, San Felipe Orizatlán, Hidalgo C.P. 43020",
                           "tel":"483 363 0058",
                           "correo":"transparencia@orizatlan.gob.mx",
                           "web":"<a href="+"https://orizatlan.gob.mx/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"San Salvador",
                           "nom":"C. Ing. Alejandra Hernández Hernández",
                           "dir":"Palacio Municipal, S/N, Col. Centro, San Salvador, Hgo. C.P. 42640",
                           "tel":"7721095118",
                           "correo":"transparencia.ayuntss2427@gmail.com",
                           "web":"<a href="+"http://sansalvador.gob.mx"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Santiago de Anaya",
                           "nom":"Lic. José Manuel Acosta Gómez",
                           "dir":"Palacio municipal s/n, Colonia centro,C.P. 42620 Municipio de Santiago de Anaya",
                           "tel":"7727287112", //Ext 107
                           "correo":"unidaddetransparencia@santiagodeanaya.gob.mx",
                           "web":"<a href="+"http://santiagodeanaya.gob.mx/transparencia-santiago-de-anaya"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Santiago Tulantepec de Lugo Guerrero",
                           "nom":"Mtra.Jazmín Margarita Hernández López",
                           "dir":"Jardin Carrillo Puerto S/N Col. Centro, Santiago Tulantepec, Hidalgo. C.P. 43760",
                           "tel":"7757532914 ext. 101",
                           "correo":"transparencia@santiagotulantepec.gob.mx",
                           "web":"<a href="+"http://www.santiagotulantepec.gob.mx/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Singuilucan",
                           "nom":"Lic. Alexis Alcántara Aguilar",
                           "dir":"Plaza del Artículo 115 Col. Centro, Singuilucan Hidalgo. C.P. 43780",
                           "tel":"7757552902",
                           "correo":"accesosinguilucan@outlook.com",
                           "web":""//<a href="+"http://singuilucan.gob.mx/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Tasquillo",
                           "nom":"Ing. Lizbeth Morales Ramírez",
                           "dir":"Palacio Municipal, Col. Centro  S/N, Tasquillo, Hgo. C.P. 42380",
                           "tel":"7597235043",
                           "correo":"transparencia.tasquillo.2024.2027@gmail.com",
                           "web":"<a href="+"http://tasquillo.gob.mx/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Tecozautla",
                           "nom":"C. Adriana Ramírez Aguilar",
                           "dir":"Plaza de la Constitución No. 01 Col. Centro, Tecozautla, Hidalgo.",
                           "tel":"7617335054 y 7617335056",
                           "correo":"transparencia@gobiernodetecozautla.gob.mx",
                           "web":""//<a href="+"http://tecozautla.com.mx/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Tenango de Doria",
                           "nom":"Ing.Alexis Mendoza González",
                           "dir":"Av. Benito Juárez Col. Centro, Tenango de Doria, Hgo. C.P. 43480",
                           "tel":"775 110 2456",
                           "correo":"transparencia.tenango2024@gmail.com",
                           "web":"<a href="+"http://tenangodedoria.gob.mx/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Tepeapulco",
                           "nom":"L.R.P. Susana Veronica Aguilar García",
                           "dir":"18 de marzo s/n colonia centro Tepeapulco, Hgo.",
                           "tel":"7919130009",
                           "correo":"transparencia@tepeapulco.gob.mx",
                           "web":"<a href="+"http://www.tepeapulco.gob.mx"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Tepehuacán de Guerrero",
                           "nom":"Ing. Celia Dionicio Hernández",
                           "dir":"Palacio Municipal Av. Democracia S/N, Col. Centro Tepehuacán de Guerrero, Hgo. C.P. 43120",
                           "tel":"7711506689/7747427029",
                           "correo":"transparenciatepe2024.2027@gmail.com",
                           "web":""//<a href="+"http://tepehuacandeguerrero.hidalgo.gob.mx/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Tepejí del Río Ocampo",
                           "nom":"Ing, Luis Alberto Trejo Orozco",
                           "dir":"Palacio Municipal S/N Col. Centro",
                           "tel":" 7731668505",
                           "correo":"transparencia.tepeji2427@gmail.com",
                           "web":"<a href="+"http://www.tepeji.gob.mx/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Tepetitlán",
                           "nom":"C. José Luis Narvaez Martinez",
                           "dir":"Plaza de la Constitución, S/N, Col. Centro, Tepetitlán Hgo. C.P. 42640",
                           "tel":"7325524 ó 7325527",
                           "correo":"utransparencia.tepe2024@outlook.com",
                           "web":""//<a href="+"http://tepetitlanhidalgo.gob.mx/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Tetepango",
                           "nom":"L.A.G.P. Juan Antonio López Pacheco",
                           "dir":"Palacio Municipal s/n, Tetepango Hgo.",// C.P. 42940",
                           "tel":"7787824043 ext. 104.",
                           "correo":"utaitetepango2427@gmail.com",
                           "web":"<a href="+"http://tetepango.hidalgo.gob.mx/index.php/municipio"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Tezontepec de Aldama",
                           "nom":"Lic. Adriana Monroy Ángeles",
                           "dir":"Av. Juan Aldama No. 1 Col. Centro, C.P. 42760, Plaza Principal",
                           "tel":"7637375102 Ext. 12",
                           "correo":"transparencia.tezontepec@hotmail.com",
                           "web":"<a href="+"https://tezontepec.gob.mx/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Tianguistengo",
                           "nom":"C. Yara Lizeth Morales Gómez",
                           "dir":"Palacio Municipal S/N, Col. Centro, Tianguistengo, Hidalgo C.P. 43270",
                           "tel":"774 744 0084",
                           "correo":"tianguistengotransparencia@gmail.com",
                           "web":"<a href="+"https://tianguistengo.gob.mx/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Tizayuca",
                           "nom":"L.D. Darwin Rodrigo Tapia	Arredondo",
                           "dir":"Cuidad Administrativa, Calle Allende S/N Col. Centro, Tizayuca, Hidalgo. C.P. 43800",
                           "tel":"56 25 93 22 28",
                           "correo":"utmtizayuca@gmail.com",
                           "web":"<a href="+"http://www.tizayuca.gob.mx/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Tlahuelilpan",
                           "nom":"L.I.S. Néstor Trejo Ortega",
                           "dir":"Palacio Municipal S/N Col. Centro, Tlahuelilpan, Hidalgo, C.P. 42780",
                           "tel":"763 78 60010 y 773 146 4252",
                           "correo":"transparencia@tlahuelilpan.gob.mx, transparenciatlahuelilpan@gmail.com",
                           "web":"<a href="+"http://tlahuelilpan.gob.mx/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Tlahuiltepa",
                           "nom":"Lic. Yeni Esmeralda Acosta Chávez",
                           "dir":"Plaza Principal S/N Col. Centro, Tlahuiltepa Hgo. C.P. 43170",
                           "tel":"7711510073",
                           "correo":"transparenciatlahuiltepa2427@gmail.com",
                           "web":"<a href="+"http://tlahuiltepa.gob.mx/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Tlanalapa",
                           "nom":"Maria de los Ángeles Gutiérrez Franco",
                           "dir":"Palacio Municipal S/N, Col. Centro C.P. 43930, Tlanalapa Hidalgo.",
                           "tel":"7919131153",
                           "correo":"transparencia@tlanalapa.gob.mx",
                           "web":"<a href="+"https://www.tlanalapa.gob.mx"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Tlanchinol",
                           "nom":"Ing. Xochitl Beatriz Reyes Cruz",
                           "dir":"Palacio Mpal S/N Col. Centro",
                           "tel":"774 97 400 18",
                           "correo":"umait.tlanchinol@gmail.com",
                           "web":"<a href="+"http://www.tlanchinol.gob.mx"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Tlaxcoapan",
                           "nom":"Ing.Brenda Amairani Estrada Hernández ",
                           "dir":"Palacio Municipal S/N Col. Centro, Tlaxcoapan Hidalgo C.P. 42950",
                           "tel":"7787370035",
                           "correo":"transparenciatlaxcoapan2024.2027@gmail.com",
                           "web":"<a href="+"http://tlaxcoapan.hidalgo.gob.mx/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Tolcayuca",
                           "nom":"Lic. Juan Carlos Hernández González",
                           "dir":"Plaza de la Patria No. 1 Col. Centro Municipio de Tolcayuca, Hgo. C.P. 43860", 
                           "tel":"7437410902 ext. 117",
                           "correo":"unidadtransparencia.tolcayuca@gmail.com",
                           "web":"<a href="+"http://tolcayuca.hidalgo.gob.mx/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>' //?page_id=220
                       }, 
               {
                          "mun":"Tula de Allende",
                           "nom":"Itzel Baltazar Hernández",
                           "dir":"Del Nacionalismo S/N Col. Centro, Tula de Allende Hidalgo C.P. 42800. Presidencia",
                           "tel":"7737320135",
                           "correo":"transparencia@tula.gob.mx",
                           "web":"<a href="+"http://www.tula.gob.mx/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Tulancingo de Bravo",
                           "nom":"L.D. Luis Armando Granillo Islas",
                           "dir":"Boulevard Nuevo San Nicolás S/N, Fracc. Nuevo San Nicolás, C.P. 43640",
                           "tel":"7757558450 Ext. 1123",
                           "correo":"transparencia@tulancingo.gob.mx",
                           "web":"<a href="+"https://tulancingo.gob.mx/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Villa de Tezontepec",
                           "nom":"Mariana Beatríz Medina Castañeda",
                           "dir":"Palacio Municipal S/N, Col. Centro, Villa de Tezontepec Hidalgo.",
                           "tel":"7437410011 ext. 109",
                           "correo":"unidadtransparencia@villadetezontepec.org",
                           "web":"<a href="+"https://www.villadetezontepec.mx/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                          },   
               {
                          "mun":"Xochiatipan",
                           "nom":"Ing. Jorge Tapia Hernández",
                           "dir":"Palacio Municipal S/N Col. Centro, Xochiatipan, Hgo. C.P. 43090",
                           "tel":"7714062443",
                           "correo":"xochiatipantransparencia2427@gmail.com",
                           "web":"<a href="+"https://www.xochiatipan.gob.mx/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Xochicoatlán",
                           "nom":"Lic. Griselda Serna Vázquez",
                           "dir":"Planta alta Presidencia Municipal S/N Col. Centro, Xochicoatlán Hgo. C.P. 43250",
                           "tel":"7747422545",
                           "correo":"unitransperxochi@gmail.com",
                           "web":"<a href="+"http://www.xochicoatlan.gob.mx/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Yahualica",
                           "nom":"Ing. Rosendo Hernández Hernández",
                           "dir":"Calle Palacio Municipal S/N, C.P. 43080 Yahualica, Hgo.",
                           "tel":"7711449284",
                           "correo":"transparencia.yahualica24@gmail.com",
                           "web":"<a href="+"http://yahualicahgo.gob.mx"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Zacualtipán de Ángeles",
                           "nom":"Lic. Fermín Pérez Moreno ",
                           "dir":"Plaza de la Constitución No. 1 Colonia Centro, Zacualtipán de Ángeles, Hgo, C.P. 43200",
                           "tel":"7747420022 ext. 102",
                           "correo":"trasparencia.zacualtipan2427@gmail.com",
                           "web":"<a href="+"http://zacualtipan.hidalgo.gob.mx/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Zapotlán de Juárez",
                           "nom":"L.M.F. Alberto Orozco Ríos",
                           "dir":"Plaza de la Constitución, No. 3, Col. Centro, Zapotlán Hgo. C.P. 42190",
                           "tel":"7437910132",
                           "correo":"zapotlanunidadtransparencia@gmail.com",
                           "web":"<a href="+"http://zapotlan.hidalgo.gob.mx/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Zempoala",
                           "nom":"Ing. Brisa Marieta León Meneses",
                           "dir":"Calle Plaza Principal S/N, Centro, Zempoala, Hgo.", // C.P. 43838
                           "tel":"7437415088",
                           "correo":"transparencia@zempoala.gob.mx",
                           "web":"<a href="+"https://www.zempoala.gob.mx/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }, 
               {
                          "mun":"Zimapán",
                           "nom":"Lizneyma Quetzaly Espino Ramírez",
                           "dir":"Domicilio conocido, los pilares, Zimapán, c.p. 423330",
                           "tel":"7597282116, 7721540314",
                           "correo":"unidaddeinformacionpublica@zimapan.gob.mx",
                           "web":"<a href="+"http://www.zimapan.gob.mx/"+" target="+"'_blank'"+"><img src="+'" ../img/iconos/btn_web2.png"' +'alt=""></a>'
                       }





                       ];
 
            $('#table').bootstrapTable({
                //Assigning data to table
                exportTypes: ['txt','excel'],
                data: jsondata
            });
        }).on('shown.bs.tab');