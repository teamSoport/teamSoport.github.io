 $(document).ready(function () {
            //Sample Json data
            var jsondata = [
                    {
                        "orden": "1",
                        "Clave": "85",
                        "Ambito": "Poderes del Estado ",
                        "SO": "Poder Ejecutivo",
                        "Titular": "Lic. Julio Ramón Menchaca Salazar",
                        "Direccion": "Camino Real de la Plata #301, Fracc. Zona Plateada, C.P. 42084",
                        "email": "uipg@hidalgo.gob.mx",
                        "FechaIncorp": "16/06/2008",
                        "tipo": "1"
                    },
                    {
                        "orden": "2",
                        "Clave": "86",
                        "Ambito": "Poderes del Estado ",
                        "SO": "Poder Judicial",
                        "Titular": "Mtra. Rebeca Stella Aladro Echeverrìa",
                        "Direccion": "Carr Mex-Pachuca Km. 84.5, Sector Primario. Planta baja del Consejo de la Judicatura, C.P. 42085 Pachuca,Hgo",
                        "email": "transparencia@pjhidalgo.gob.mx",
                        "FechaIncorp": "16/06/2008",
                        "tipo": "1"
                    },
                    {
                        "orden": "3",
                        "Clave": "87",
                        "Ambito": "Poderes del Estado ",
                        "SO": "Poder Legislativo",
                        "Titular": "Mtro. Jesús Osiris Leines Medécigo",
                        "Direccion": "Plaza Cívica Miguel Hidalgo, \"Centro Cívico\" Carretera Mex-Pachuca Km. 84.5, Col. Carlos Rovirosa, C.P. 42085, Pachuca de Soto, Hidalgo.",
                        "email": "unidad.transparencia@congreso-hidalgo.gob.mx",
                        "FechaIncorp": "16/06/2008",
                        "tipo": "1"
                    },
                    {
                        "orden": "4",
                        "Clave": "120",
                        "Ambito": "Poderes del Estado ",
                        "SO": "Auditoria Superior del Estado de Hidalgo (ASEH)",
                        "Titular": "L.E. Jorge Valverde Islas",
                        "Direccion": "Av. Tecnológico de Monterrey No. 201, Fracc. Puerta de Hierro, C.P. 42086, Pachuca de Soto, Hidalgo",
                        "email": "transparencia@aseh.gob.mx",
                        "FechaIncorp": "27/05/2019",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "1",
                        "Ambito": "Ayuntamiento",
                        "SO": "Acatlán",
                        "Titular": "Lic. Elizabeth Vargas Rodríguez",
                        "Direccion": "Palacio Municipal s/n colonia centro c.p. 43540.",
                        "email": "transparencia@acatlanhidalgo.gob.mx",
                        "FechaIncorp": "01/02/2013",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "2",
                        "Ambito": "Ayuntamiento",
                        "SO": "Acaxochitlán",
                        "Titular": "Tec. Erik Carbajal Romo",
                        "Direccion": "Palacio Municipal S/N, Col. Centro, C.P. 43720, Acaxoxhitlán, Hgo.",
                        "email": "transparencia2021.2024@gmail.com",
                        "FechaIncorp": "25/09/2012",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "3",
                        "Ambito": "Ayuntamiento",
                        "SO": "Actopan",
                        "Titular": "M. en C. Tatiana Tonantzin P. Ángeles Moreno",
                        "Direccion": "Calle. Hidalgo No. 8 Col. Centro, C.P.42500, primer piso",
                        "email": "unidadtransparencia@actopanhidalgo.gob.mx",
                        "FechaIncorp": "01/05/2011",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "4",
                        "Ambito": "Ayuntamiento",
                        "SO": "Agua Blanca de Iturbide",
                        "Titular": "C. Agustín Ramirez Jarillo",
                        "Direccion": "Palacio Municipal S/N Col. Centro",
                        "email": "transparencia@aguablanca.gob.mx",
                        "FechaIncorp": "16/06/2011",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "5",
                        "Ambito": "Ayuntamiento",
                        "SO": "Ajacuba",
                          "Titular": "C. Francisco Leopoldo Basurto Acosta",
                        "Direccion": "Calle Eustolio Becerra s/n colonia centro",
                        "email": "transparencia.ajacuba@gmail.com",
                        "FechaIncorp": "12/05/2016",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "6",
                        "Ambito": "Ayuntamiento",
                        "SO": "Alfajayucan",
                        "Titular": "Ing. Alfredo Feregrino Martínez",
                        "Direccion": "Palacio Municipal s/n, Colonia Centro, Alfajayucan, Hidalgo",
                        "email": "transparencia.alfajayucan@hidalgo.gob.mx",
                        "FechaIncorp": "01/07/2009",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "7",
                        "Ambito": "Ayuntamiento",
                        "SO": "Almoloya",
                        "Titular": "Prof. Blanca Margarita Ramírez Benítez",
                        "Direccion": "Palacio Municipal S/N, Col. Centro C.P 43940",
                        "email": "coordinformatica1almoloya@gmail.com",
                        "FechaIncorp": "10/10/2012",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "8",
                        "Ambito": "Ayuntamiento",
                        "SO": "Apan",
                        "Titular": "C. María Guadalupe Muñoz Romero",
                        "Direccion": "Av. Zaragoza, Norte, No. 6, Colonia Centro, Apan Hgo.",
                        "email": "transparencia@apan.gob.mx",
                        "FechaIncorp": "11/09/2012",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "9",
                        "Ambito": "Ayuntamiento",
                        "SO": "Atitalaquia",
                        "Titular": "Lic. Jorge Ramirez López",
                        "Direccion": "C. Melchor Ocampo S/N, Colonia Centro",
                        "email": "transparencia@atitalaquia.gob.mx",
                        "FechaIncorp": "29/10/2014",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "10",
                        "Ambito": "Ayuntamiento",
                        "SO": "Atlapexco",
                        "Titular": "Ing. Julián Nochebuena Hernández",
                        "Direccion": "Palacio Municipal S/N, Col. Centro, cp. 43060",
                        "email": "atlapexco.transparente@gmail.com",
                        "FechaIncorp": "24/05/2012",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "11",
                        "Ambito": "Ayuntamiento",
                        "SO": "Atotonilco de Tula",
                        "Titular": "C. Jaime Ramírez Tovar",
                        "Direccion": "Av. Industrial S/N , Barrio de Boxfi C.P. 42980",
                        "email": "transparencia.atotonilcotula@gmail.com",
                        "FechaIncorp": "01/06/2009",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "12",
                        "Ambito": "Ayuntamiento",
                        "SO": "Atotonilco el Grande",
                        "Titular": "Héctor Hugo Ramírez López",
                        "Direccion": "Avenida Juárez sin número, Colonia Centro",
                        "email": "transparencia@atotonilcoelgrande.gob.mx",
                        "FechaIncorp": "01/06/2009",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "13",
                        "Ambito": "Ayuntamiento",
                        "SO": "Calnali",
                        "Titular": "Ing. Isaid Acosta Téllez",
                        "Direccion": "Palacio Municipal s/n, primer piso, Col. Centro. C.P. 43230",
                        "email": "transparencia.calnali2024@gmail.com",
                        "FechaIncorp": "01/08/2009",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "14",
                        "Ambito": "Ayuntamiento",
                        "SO": "Cardonal",
                        "Titular": "C. Mariano Cabañas Guzmán",
                        "Direccion": "Palacio Municipal S/N ,Cardonal, Hgo.",
                        "email": "transparenciacardonal2020-2024@hotmail.com",
                        "FechaIncorp": "01/06/2009",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "15",
                        "Ambito": "Ayuntamiento",
                        "SO": "Chapantongo",
                        "Titular": "C. Carlos Enrique Tavera Guerrero",
                        "Direccion": "Palacio Municipal S/N Col. Centro C.P.42900",
                        "email": "chapantongotransparencia@gmail.com",
                        "FechaIncorp": "23/09/2015",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "16",
                        "Ambito": "Ayuntamiento",
                        "SO": "Chapulhuacán",
                        "Titular": "Prof. Sergio Meléndez Rubio",
                        "Direccion": "Calle Francisco Sarabia S/N Col. Centro C.P.42280",
                        "email": "chapulhuacan.transparencia@gmail.com",
                        "FechaIncorp": "29/10/2014",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "17",
                        "Ambito": "Ayuntamiento",
                        "SO": "Chilcuautla",
                        "Titular": "C. Valente Martínez Mayor",
                        "Direccion": "Palacio de Gobierno s/n, esquina con Francisco I Madero, Chilcuautla, Hgo",
                        "email": "transparencia.20.chil@gmail.com",
                        "FechaIncorp": "19/07/2012",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "18",
                        "Ambito": "Ayuntamiento",
                        "SO": "Cuautepec de Hinojosa",
                        "Titular": "C. Manuel Fermín Rivera Peralta",
                        "Direccion": "Palacio Mpal. S/N Col. Centro C.P. 43740",
                        "email": "transparencia@cuautepechidalgo.gob.mx",
                        "FechaIncorp": "01/08/2009",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "19",
                        "Ambito": "Ayuntamiento",
                        "SO": "El Arenal",
                        "Titular": "Lic. Ranulfo Serrano Moedano",
                        "Direccion": "Palacio Mpal S/N Col. Centro C.P. 42680",
                        "email": "elarenaltransparencia@gmail.com",
                        "FechaIncorp": "01/02/2015",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "20",
                        "Ambito": "Ayuntamiento",
                        "SO": "Eloxochitlán",
                        "Titular": "C. Antonio Badillo García",
                        "Direccion": "Plaza 24 de febrero S/N , Barrio El Calvario, C.P. 43330",
                        "email": "transparencia.eloxochitlan1620@gmail.com",
                        "FechaIncorp": "01/08/2016",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "21",
                        "Ambito": "Ayuntamiento",
                        "SO": "Emiliano Zapata",
                        "Titular": "Lic. Héctor García Aguilera",
                        "Direccion": "Av. 5 de mayo, Esq. Benito Juárez, c.p. 43960",
                        "email": "transparencia.ez2024@gmail.com",
                        "FechaIncorp": "01/02/2010",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "22",
                        "Ambito": "Ayuntamiento",
                        "SO": "Epazoyucan",
                        "Titular": "C. Luis Antonio Montiel Castelán",
                        "Direccion": "Av. Hidalgo No. 11 Col. Centro C.P. 43580",
                        "email": "jao.2024epazoyucan@gmail.com",
                        "FechaIncorp": "01/05/2009",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "23",
                        "Ambito": "Ayuntamiento",
                        "SO": "Francisco I. Madero",
                        "Titular": "C. Ricardo Josué Olguín Pardo ",
                        "Direccion": "Palacio Municipal S/N Col. Centro, Tepatepec de Francisco I. Madero, Hgo.",
                        "email": "transparencia.fim2020.2024@gmail.com",
                        "FechaIncorp": "01/10/2014",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "24",
                        "Ambito": "Ayuntamiento",
                        "SO": "Huasca de Ocampo",
                        "Titular": "L.C.P. y A.P. Francisco Mayoral Flores ",
                        "Direccion": "Palacio Municipal S/N Col. Centro, c.p. 43500, Huasca de Ocampo, Hgo.",
                        "email": "huascatransparencia@gmail.com",
                        "FechaIncorp": "01/04/2009",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "25",
                        "Ambito": "Ayuntamiento",
                        "SO": "Huautla",
                        "Titular": "C. Artemio Martínez Rebolledo",
                        "Direccion": "Palacio Mpal S/N Col. Centro C.P. 43050",
                        "email": "huautla2020transp@gmail.com",
                        "FechaIncorp": "08/05/2016",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "26",
                        "Ambito": "Ayuntamiento",
                        "SO": "Huazalingo",
                        "Titular": "L.D. Julio César González García",
                        "Direccion": "Palacio Principal S/N C.P. 43070",
                        "email": "transparencia@huazalingo.gob.mx",
                        "FechaIncorp": "01/11/2014",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "27",
                        "Ambito": "Ayuntamiento",
                        "SO": "Huehuetla",
                        "Titular": "C. Rafael Lara Martínez",
                        "Direccion": "Palacio Mpal S/N Col. Centro C.P. 43420",
                        "email": "transparenciahuehuetla2021@gmail.com",
                        "FechaIncorp": "01/02/2015",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "28",
                        "Ambito": "Ayuntamiento",
                        "SO": "Huejutla de Reyes",
                        "Titular": "C.P. Daniel Andrade Zurutuza",
                        "Direccion": "Palacio Mpal S/N Col. Centro C.P. 43000",
                        "email": "transparencia.huejutla.2124@gmail.com",
                        "FechaIncorp": "01/02/2010",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "29",
                        "Ambito": "Ayuntamiento",
                        "SO": "Huichapan",
                        "Titular": "C.P. Emeterio Moreno Magos",
                        "Direccion": "Av. Hidalgo No. 1 ,Col. Centro Histórico C.P. 42400, Planta alta",
                        "email": "transparencia@huichapan.gob.mx",
                        "FechaIncorp": "01/10/2009",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "30",
                        "Ambito": "Ayuntamiento",
                        "SO": "Ixmiquilpan",
                        "Titular": "L.C.I. Araceli Beltrán Contreras ",
                        "Direccion": "Plaza Juárez S/N Col. Centro",
                        "email": "utaix@ixmiquilpan.gob.mx",
                        "FechaIncorp": "01/05/2009",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "31",
                        "Ambito": "Ayuntamiento",
                        "SO": "Jacala de Ledezma",
                        "Titular": "C. María Magdalena Rubio Pérez",
                        "Direccion": "Avenida Benito Juárez s/n colonia centro, en el local que ocupa la Presidencia Municipal",
                        "email": "deptotransparencia20.24@gmail.com",
                        "FechaIncorp": "12/05/2016",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "32",
                        "Ambito": "Ayuntamiento",
                        "SO": "Jaltocán",
                        "Titular": "C. Iván Lara Tovar",
                        "Direccion": "Palacio Municipal S/N, Zona Centro C.P. 43040",
                        "email": "transparencia@jaltocan.gob.mx",
                        "FechaIncorp": "12/05/2016",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "33",
                        "Ambito": "Ayuntamiento",
                        "SO": "Juárez Hidalgo",
                        "Titular": "C. Noé Zapata Sánchez",
                        "Direccion": "Av. Principal S/N Col. Centro",
                        "email": "aimhgo_2016@hotmail.com",
                        "FechaIncorp": "01/01/2015",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "34",
                        "Ambito": "Ayuntamiento",
                        "SO": "La Misión",
                        "Titular": "Lic. Margarita Ramos Villeda ",
                        "Direccion": "Palacio Mpal S/N, Col. Centro C.P. 42260",
                        "email": "transparencia.lamision@gmail.com",
                        "FechaIncorp": "10/12/2015",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "35",
                        "Ambito": "Ayuntamiento",
                        "SO": "Lolotla",
                        "Titular": "Ing. Ernestino Melo Diaz",
                        "Direccion": "Palacio Mpal S/N Col. Centro C.P. 43140",
                        "email": "transparencia.lolotla@gmail.com",
                        "FechaIncorp": "29/10/2014",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "36",
                        "Ambito": "Ayuntamiento",
                        "SO": "Metepec",
                        "Titular": "C. Joel Huazo Canales ",
                        "Direccion": "Palacio Mpal S/N Col. Centro C.P. 43400",
                        "email": "metepechgoaccinf@hotmail.com",
                        "FechaIncorp": "29/10/2014",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "37",
                        "Ambito": "Ayuntamiento",
                        "SO": "Metztitlán",
                        "Titular": "Ing. Alfredo Morales Mora ",
                        "Direccion": "Palacio Municipal S/N Col. Centro C.P. 43350",
                        "email": "transparenciametztitlan@gmail.com",
                        "FechaIncorp": "01/03/2009",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "38",
                        "Ambito": "Ayuntamiento",
                        "SO": "Mineral de la Reforma",
                        "Titular": "Lic. Israel Jorge Félix Soto",
                        "Direccion": "Av. Hidalgo No. 32 Col. Centro, Pachuquilla, Mineral de la Reforma",
                        "email": "transparencia.mmr@gmail.com",
                        "FechaIncorp": "15/06/2008",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "39",
                        "Ambito": "Ayuntamiento",
                        "SO": "Mineral del Chico",
                        "Titular": "C. Alfredo Hernández Morales",
                        "Direccion": "En la segunda planta de la Presidencia Municipal, en la Plaza principal s/n, col. Centro, Mineral del Chico, c.p. 42120",
                        "email": "transparenciamdechico2024@gmail.com",
                        "FechaIncorp": "01/09/2009",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "40",
                        "Ambito": "Ayuntamiento",
                        "SO": "Mineral del Monte",
                        "Titular": "C. Alejandro Sierra Tello",
                        "Direccion": "Mineral del Monte Hidalgo s/n, Col. Centro",
                        "email": "attransparenciamineraldelmonte@gmail.com",
                        "FechaIncorp": "13/03/2012",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "41",
                        "Ambito": "Ayuntamiento",
                        "SO": "Mixquiahuala de Juárez",
                        "Titular": "Mtro. Yonattan Álvarez Cruz",
                        "Direccion": "Plaza de la Constitución S/N Col. Centro, interior de la presidencia municipal",
                        "email": "mixquiahualatransparencia@gmail.com",
                        "FechaIncorp": "01/04/2009",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "42",
                        "Ambito": "Ayuntamiento",
                        "SO": "Molango de Escamilla",
                        "Titular": "Ing. Alejandro Dionicio Velasco",
                        "Direccion": "Palacio Mpal S/N Col. Centro C.P. 43100",
                        "email": "transparenciamolango@gmail.com",
                        "FechaIncorp": "01/08/2009",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "43",
                        "Ambito": "Ayuntamiento",
                        "SO": "Nicolás Flores",
                        "Titular": "Lic. Marcela Isidro García",
                        "Direccion": "Palacio Municipal col. Centro, c.p. 42360",
                        "email": "Transparencia.NicolasFlores2021@gmail.com ",
                        "FechaIncorp": "01/04/2015",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "44",
                        "Ambito": "Ayuntamiento",
                        "SO": "Nopala de Villagrán",
                        "Titular": "C. Abel de Jesús Rivera Medrano",
                        "Direccion": "Palacio Municipal s/n, Col. Centro, c.p. 42470, Nopala de Villagrán, planta baja",
                        "email": "transparencia@nopala.gob.mx",
                        "FechaIncorp": "11/04/2012",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "45",
                        "Ambito": "Ayuntamiento",
                        "SO": "Omitlán de Juárez",
                        "Titular": "C. Jorge Martín Borbolla Calderón",
                        "Direccion": "Av. Juárez S/N Col. Centro",
                        "email": "omitlantransparencia@gmail.com",
                        "FechaIncorp": "29/10/2014",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "46",
                        "Ambito": "Ayuntamiento",
                        "SO": "Pachuca de Soto",
                        "Titular": "Ing. Sergio Edgar Baños Rubio",
                        "Direccion": "Calle M. Villa, número 115, Col. Centro, 2do piso, Pachuca de Soto",
                        "email": "uiap@pachuca.gob.mx",
                        "FechaIncorp": "15/06/2008",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "47",
                        "Ambito": "Ayuntamiento",
                        "SO": "Pacula",
                        "Titular": "Tec. Francisco Casas Chávez.",
                        "Direccion": "Plaza Principal S/N Col. Centro C.P. 42240, Pacula, Hgo.",
                        "email": "unidadtransparenciapacula@gmail.com",
                        "FechaIncorp": "23/01/2013",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "48",
                        "Ambito": "Ayuntamiento",
                        "SO": "Pisaflores",
                        "Titular": "Lic. Ricardo García Torres",
                        "Direccion": "Palacio Municipal s/n. colonia centro, c.p. 42220",
                        "email": "transparenciapisaflores.2024@gmail.com",
                        "FechaIncorp": "01/11/2014",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "49",
                        "Ambito": "Ayuntamiento",
                        "SO": "Progreso de Obregón ",
                        "Titular": "C. Armando Mera Olguin ",
                        "Direccion": "Palacio Municipal S/N Col. Centro",
                        "email": "uipg2024progreso@gmail.com",
                        "FechaIncorp": "01/10/2015",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "50",
                        "Ambito": "Ayuntamiento",
                        "SO": "San Agustín Metzquititlán",
                        "Titular": "Lic. Manuel Tellez Romero",
                        "Direccion": "Palacio Municipal S/N Col. Centro",
                        "email": "transparencia.municipal@metzquititlan.gob.mx ",
                        "FechaIncorp": "13/07/2016",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "51",
                        "Ambito": "Ayuntamiento",
                        "SO": "San Agustín Tlaxiaca",
                        "Titular": "C. Belén Arturo Hernández Máximo  ",
                        "Direccion": "Palacio Municipal Sector Huizache C.P. 42160",
                        "email": "transparencia@sanagustintlaxiaca.gob.mx",
                        "FechaIncorp": "16/04/2012",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "52",
                        "Ambito": "Ayuntamiento",
                        "SO": "San Bartolo Tutotepec",
                        "Titular": "C. P. Santos Cabrera Hernández",
                        "Direccion": "Plaza principal s/n Col. Centro, c.p. 43440, San Bartolo Tutotepec, Hidalgo",
                        "email": "transparenciasbt@gmail.com",
                        "FechaIncorp": "10/10/2012",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "53",
                        "Ambito": "Ayuntamiento",
                        "SO": "San Felipe Orizatlán",
                        "Titular": "L.D. Erika Saab Lara",
                        "Direccion": "Palacio Municipal S/N Col. Centro, C.P 43020",
                        "email": " transparencia@orizatlan.gob.mx",
                        "FechaIncorp": "01/01/2015",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "54",
                        "Ambito": "Ayuntamiento",
                        "SO": "San Salvador",
                        "Titular": "Prof. Armando Azpeitia Díaz",
                        "Direccion": "Gral. Felipe Ángeles 1, Centro. C.P. 42640, San Salvador, Hgo.",
                        "email": "unidadsansalvador713@gmail.com",
                        "FechaIncorp": "01/05/2014",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "55",
                        "Ambito": "Ayuntamiento",
                        "SO": "Santiago de Anaya",
                        "Titular": "C. Edigar Monter Ángeles",
                        "Direccion": "Palacio Mpal S/N C.P. 42620",
                        "email": "unidaddetransparencia@santiagodeanaya.gob.mx",
                        "FechaIncorp": "13/07/2016",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "56",
                        "Ambito": "Ayuntamiento",
                        "SO": "Santiago Tulantepec de Lugo Guerrero",
                        "Titular": "L.D. Dante Cárdenas Flores",
                        "Direccion": "Jardín Felipe Carrillo Puerto S/N, Santiago Tulantepec",
                        "email": "transparencia@santiagotulantepec.com",
                        "FechaIncorp": "03/10/2012",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "57",
                        "Ambito": "Ayuntamiento",
                        "SO": "Singuilucan",
                        "Titular": "Lic.  Marcos Miguel Taboada Vargas",
                        "Direccion": "Plaza del Artículo 115 s/n Col. Centro, C.P. 43780",
                        "email": "accesosinguilucan@outlook.com",
                        "FechaIncorp": "09/02/2012",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "58",
                        "Ambito": "Ayuntamiento",
                        "SO": "Tasquillo",
                        "Titular": "Profa. Estela Martínez Sanjuan",
                        "Direccion": "Palacio Mpal S/N Col. Centro C.P. 42380",
                        "email": "transparencia.tas@gmail.com",
                        "FechaIncorp": "01/09/2014",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "59",
                        "Ambito": "Ayuntamiento",
                        "SO": "Tecozautla",
                        "Titular": "C. Joel Elías Paso",
                        "Direccion": "Plaza de la Constitución No.1, Col. Centro, C.P. 42440, Tecozautla, Hgo",
                        "email": "transparenciatecozautla@outlook.es",
                        "FechaIncorp": "15/11/2012",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "60",
                        "Ambito": "Ayuntamiento",
                        "SO": "Tenango de Doria",
                        "Titular": "Ing. Erick Mendoza Hernández",
                        "Direccion": "Palacio Municipal, Calle 16 de enero, cuarto piso, Col. Centro, C.P. 43480",
                        "email": "transparenciayacceso.tenango@gmail.com",
                        "FechaIncorp": "01/05/2014",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "61",
                        "Ambito": "Ayuntamiento",
                        "SO": "Tepeapulco",
                        "Titular": "Lic. Marisol Ortega López",
                        "Direccion": "18 de marzo s/n colonia centro Tepeapulco, Hgo.",
                        "email": "transparencia@tepeapulco.gob.mx",
                        "FechaIncorp": "04/10/2012",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "62",
                        "Ambito": "Ayuntamiento",
                        "SO": "Tepehuacán de Guerrero",
                        "Titular": "Ing. José Juan Viggiano Austria",
                        "Direccion": "Plaza Principal S/N Col. Centro",
                        "email": "iaipgh.tepehuacan@outlook.com",
                        "FechaIncorp": "01/01/2015",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "63",
                        "Ambito": "Ayuntamiento",
                        "SO": "Tepeji del Río ",
                        "Titular": "C. Salvador Jiménez Calzadilla",
                        "Direccion": "Palacio Mpal S/N Col. Centro",
                        "email": "transparencia@tepeji.gob.mx",
                        "FechaIncorp": "15/06/2008",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "64",
                        "Ambito": "Ayuntamiento",
                        "SO": "Tepetitlán",
                        "Titular": "Ing. Elias Castillo Martínez",
                        "Direccion": "Plaza de la Constitución S/N Col. Centro C.P. 42920, colonia centro",
                        "email": "tepetitlan.transparencia@gmail.com",
                        "FechaIncorp": "01/05/2015",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "65",
                        "Ambito": "Ayuntamiento",
                        "SO": "Tetepango",
                        "Titular": "C. Alejandra Zúñiga Chávez",
                        "Direccion": "Palacio Municipal S/N C.P. 42940",
                        "email": "uttetepango@gmail.com",
                        "FechaIncorp": "01/10/2012",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "66",
                        "Ambito": "Ayuntamiento",
                        "SO": "Tezontepec de Aldama",
                        "Titular": "Ing. Santiago Hernández Ceron ",
                        "Direccion": "Av. Juan Aldama No. 1 Col. Centro, C.P. 42760, Plaza Principal",
                        "email": "transparencia.tezontepec@hotmail.com",
                        "FechaIncorp": "01/03/2011",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "67",
                        "Ambito": "Ayuntamiento",
                        "SO": "Tianguistengo",
                        "Titular": "Profra. María Luisa Jiménez Ramírez ",
                        "Direccion": "Plaza Principal s/n col. Centro, CP 43270, Tianguistengo, Hgo",
                        "email": "transparencia.tianguistengo@outlook.com",
                        "FechaIncorp": "01/05/2011",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "68",
                        "Ambito": "Ayuntamiento",
                        "SO": "Tizayuca",
                        "Titular": "Mtra. Susana Araceli Ángeles Quezada",
                        "Direccion": "Palacio Mpal S/N , Col. Centro, c.p. 43800",
                        "email": "utmtizayuca@gmail.com",
                        "FechaIncorp": "01/06/2009",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "69",
                        "Ambito": "Ayuntamiento",
                        "SO": "Tlahuelilpan",
                        "Titular": "Ing. Adrián Radamés Hernández López",
                        "Direccion": "Palacio Mpal S/N Col. Centro Tlahuelilpan, Hgo, c.p. 42780",
                        "email": "transparencia@tlahuelilpan.gob.mx",
                        "FechaIncorp": "03/06/2011",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "70",
                        "Ambito": "Ayuntamiento",
                        "SO": "Tlahuiltepa",
                        "Titular": "Mtro. Said Tiberio Chávez Cobos",
                        "Direccion": "Plaza Principal S/N C.P. 43170",
                        "email": "unidadtransparencia@tlahuiltepa.gob.mx",
                        "FechaIncorp": "13/05/2016",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "71",
                        "Ambito": "Ayuntamiento",
                        "SO": "Tlanalapa",
                        "Titular": "Tec. Saúl García Ordoñez ",
                        "Direccion": "Calle 16 Enero de 1869, Col. Centro",
                        "email": "transparenciatlanalapa@gmail.com",
                        "FechaIncorp": "18/07/2012",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "72",
                        "Ambito": "Ayuntamiento",
                        "SO": "Tlanchinol",
                        "Titular": "C. Marcos Bautista Medina ",
                        "Direccion": "Palacio Mpal S/N Col. Centro",
                        "email": "umait.tlanchinol@gmail.com",
                        "FechaIncorp": "28/09/2012",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "73",
                        "Ambito": "Ayuntamiento",
                        "SO": "Tlaxcoapan",
                        "Titular": "C. Jaime Pérez Suárez",
                        "Direccion": "Palacio Municipal S/N Col. Centro",
                        "email": "transparencia.tlax.2020.2024@gmail.com",
                        "FechaIncorp": "11/09/2012",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "74",
                        "Ambito": "Ayuntamiento",
                        "SO": "Tolcayuca",
                        "Titular": "L.D. Gastón Valdespino Ávila",
                        "Direccion": "Plaza de la Patria No. 1 Col. Centro C.P. 43860.",
                        "email": "unidadtransparencia.tolcayuca@gmail.com",
                        "FechaIncorp": "01/01/2015",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "75",
                        "Ambito": "Ayuntamiento",
                        "SO": "Tula de Allende",
                        "Titular": "Dr. Mario Francisco Guzmán Badillo",
                        "Direccion": "Plaza del Nacionalismo S/N Col. Centro C.P. 42800",
                        "email": "transparencia@tula.gob.mx",
                        "FechaIncorp": "15/06/2008",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "76",
                        "Ambito": "Ayuntamiento",
                        "SO": "Tulancingo de Bravo",
                        "Titular": "L.A.E. Cesáreo Jorge Márquez Alvarado",
                        "Direccion": "Boulevard Nuevo San Nicolás S/N, Fracc. Nuevo San Nicolás, C.P. 43640",
                        "email": "transparencia@tulancingo.gob.mx",
                        "FechaIncorp": "01/03/2009",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "77",
                        "Ambito": "Ayuntamiento",
                        "SO": "Villa de Tezontepec",
                        "Titular": "C. Elsa Dolores Vázquez González",
                        "Direccion": "Plaza 16 de enero S/N, Palacio Mpla Col. Centro, C.P. 43880",
                        "email": "transparencia.villatezontepec@gmail.com",
                        "FechaIncorp": "08/02/2012",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "78",
                        "Ambito": "Ayuntamiento",
                        "SO": "Xochiatipan",
                        "Titular": "L.A.E. Oscar Bautista Gutierrez",
                        "Direccion": "Palacio Municipal S/N Col. Centro, c.p. 43090",
                        "email": "transparenciaxochiatipan2024@gmail.com",
                        "FechaIncorp": "01/05/2014",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "79",
                        "Ambito": "Ayuntamiento",
                        "SO": "Xochicoatlán",
                        "Titular": "Profa. Elda Ramírez Maya",
                        "Direccion": "Planta alta Presidencia Municipal, Plaza Principal s/n Centro, C.P. 43250",
                        "email": "unitransperxochi@gmail.com",
                        "FechaIncorp": "01/06/2009",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "80",
                        "Ambito": "Ayuntamiento",
                        "SO": "Yahualica",
                        "Titular": "Lic. Senón Navarro Morales",
                        "Direccion": "Palacio Municipal colonia centro, s/n, Yahualica Hgo, c.p. 43080",
                        "email": "transparencia.yahualica23@gmail.com",
                        "FechaIncorp": "29/10/2014",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "81",
                        "Ambito": "Ayuntamiento",
                        "SO": "Zacualtipán de Ángeles",
                        "Titular": "M.C. Edgar Josué  Moreno Gayosso",
                        "Direccion": "Plaza de la Constitución s/n Col. Centro c.p. 43200",
                        "email": "trasparenciazacu.20.24@gmail.com",
                        "FechaIncorp": "03/06/2011",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "82",
                        "Ambito": "Ayuntamiento",
                        "SO": "Zapotlán de Juárez",
                        "Titular": "C. Hugo Salvador Álvarez Rivero",
                        "Direccion": "Plaza de la Constitución Num 3 Col. Centro C.P. 42190",
                        "email": "unidadtransparenciazapotlan24@gmail.com",
                        "FechaIncorp": "01/06/2015",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "83",
                        "Ambito": "Ayuntamiento",
                        "SO": "Zempoala",
                        "Titular": "Mtro. J. Jesús Hernández Juárez",
                        "Direccion": "Plaza principal s/n Col. Centro, Zempoala, Hgo. C.P. 43838",
                        "email": "transparencia083.2024_2c@hotmail.com",
                        "FechaIncorp": "01/01/2009",
                        "tipo": "1"
                    },
                    {
                        "orden": "5",
                        "Clave": "84",
                        "Ambito": "Ayuntamiento",
                        "SO": "Zimapán",
                        "Titular": "C. Alan Rivera Villanueva",
                        "Direccion": "Domicilio conocido, los pilares, Zimapán, c.p. 423330",
                        "email": "unidaddeinformacionpublica@zimapan.gob.mx",
                        "FechaIncorp": "01/11/2013",
                        "tipo": "1"
                    },
                    {
                        "orden": "6",
                        "Clave": "88",
                        "Ambito": "Organismos Públicos Autónomos ",
                        "SO": "Comisión de Derechos Humanos del Estado de Hidalgo (CDHEH)",
                        "Titular": "Mtra. Ana Karen Parra Bonilla",
                        "Direccion": "Calle Vicente Segura, número 100, Colonia Centro, C.P. 42000, Pachuca de Soto, Hidalgo.",
                        "email": "transparenciacdhhgo@gmail.com",
                        "FechaIncorp": "16/06/2008",
                        "tipo": "1"
                    },
                    {
                        "orden": "6",
                        "Clave": "89",
                        "Ambito": "Organismo Públicos Autónomos ",
                        "SO": "Instituto de Transparencia, Acceso a la Información Pública Gubernamental y Protección de Datos Personales del Estado de Hidalgo (ITAIH)",
                        "Titular": "Mtra. Myrna Rocío Moncada Mahuem",
                        "Direccion": "Camino Real de la Plata No. 336 Fracc. Zona Plateada C.P. 42084.",
                        "email": "instaccesohidalgo@itaih.org.mx",
                        "FechaIncorp": "16/06/2008",
                        "tipo": "1"
                    },
                    {
                        "orden": "6",
                        "Clave": "90",
                        "Ambito": "Organismo Públicos Autónomos ",
                        "SO": "Instituto Estatal Electoral de Hidalgo (IEEH)",
                        "Titular": "Mtra. María Magdalena González Escalona",
                        "Direccion": "Blvd. Everardo Márquez No. 115 Col. Ex Hacienda de Coscotitlán C.P. 42064.",
                        "email": "transparencia@ieeh.mx",
                        "FechaIncorp": "16/06/2008",
                        "tipo": "1"
                    },
                    {
                        "orden": "6",
                        "Clave": "91",
                        "Ambito": "Organismo Públicos Autónomos ",
                        "SO": "Universidad Autónoma del Estado de Hidalgo (UAEH)",
                        "Titular": "Dr. Octavio Castillo Acosta",
                        "Direccion": "Torres Rectoría, 7° Piso, Carr. Pachuca-Actopan, Km. 4.5, Col. Campo de Tiro, C.P. 42039, Pachuca de Soto, Hgo.",
                        "email": "unidadtransparencia@uaeh.edu.mx",
                        "FechaIncorp": "16/06/2008",
                        "tipo": "1"
                    },
                    {
                        "orden": "6",
                        "Clave": "92",
                        "Ambito": "Organismo Públicos Autónomos ",
                        "SO": "Tribunal Electoral del Estado de Hidalgo (TEEH)",
                        "Titular": "Mag. Leodegario Hernández Cortez",
                        "Direccion": "Carretera México-Pachuca Km. 84.5 Sector Primario, Pachuca de Soto, Hgo, c.p. 42082",
                        "email": "transparencia@teeh.org.mx",
                        "FechaIncorp": "18/03/2016",
                        "tipo": "1"
                    },
                    {
                        "orden": "6",
                        "Clave": "93",
                        "Ambito": "Pártido Político",
                        "SO": "Partido Revolucionario Institucional (PRI)",
                        "Titular": "Mtro. Marco Antonio Mendoza Bustamante",
                        "Direccion": "Blvd. Luis Donaldo Colosio No. 2013, Col. Ex Hacienda de Coscotitlán, 42064, Pachuca de Soto",
                        "email": "pri.transparencia.hidalgo@gmail.com",
                        "FechaIncorp": "08/11/2016",
                        "tipo": "1"
                    },
                    {
                        "orden": "6",
                        "Clave": "94",
                        "Ambito": "Pártido Político",
                        "SO": "Partido Acción Nacional (PAN)",
                        "Titular": "Mtra. Claudia Lilia Luna Islas",
                        "Direccion": "Av. Francisco I. Madero No.301, Col. Centro, C.P. 42000 Pachuca,Hgo.",
                        "email": "transparencia.pan.hidalgo@gmail.com",
                        "FechaIncorp": "03/11/2016",
                        "tipo": "1"
                    },
                    {
                        "orden": "6",
                        "Clave": "95",
                        "Ambito": "Pártido Político",
                        "SO": "Partido Verde Ecologista de México",
                        "Titular": "Lic. Honorato Rodriguez Murillo",
                        "Direccion": "Avenida del Palmar #122 colonia el Tezontle, c.p. 42084, Pachuca de Soto.",
                        "email": "Transparenciaverdehgo1@gmail.com",
                        "FechaIncorp": "14/10/2016",
                        "tipo": "1"
                    },
                    {
                        "orden": "6",
                        "Clave": "104",
                        "Ambito": "Pártido Político",
                        "SO": "Partido Movimiento Ciudadano",
                        "Titular": "Lic. Juan Ignacio Samperio Montaño",
                        "Direccion": "Calle Laura Lugo 102, Col. Periodistas, Pachuca de Soto, Hidalgo.",
                        "email": "transparenciamchgo@gmail.com",
                        "FechaIncorp": "17/03/2017",
                        "tipo": "1"
                    },
                    {
                        "orden": "6",
                        "Clave": "108",
                        "Ambito": "Pártido Político",
                        "SO": "Partido MORENA",
                        "Titular": "L.D. MarcoAntonio Rico Mercado",
                        "Direccion": "José María Iglesias núm. 100-A, Col. Centro, C.P. 42000. Pachuca de Soto, Hidalgo.",
                        "email": "u_transparencia@morenahidalgo.com",
                        "FechaIncorp": "27/04/2017",
                        "tipo": "1"
                    },
                    {
                        "orden": "6",
                        "Clave": "111",
                        "Ambito": "Pártido Político",
                        "SO": "Partido de la Revolución Democrática (PRD)",
                        "Titular": "Lic. Jorge Luis Pérez Viveros",
                        "Direccion": "Calle. Tierra y Libertad No. 16 esquina Privada del Sol, Col. Rojo Gómez, C.P. 42030",
                        "email": "transparenciaprdhidalgo@gmail.com",
                        "FechaIncorp": "08/05/2017",
                        "tipo": "1"
                    },
                    {
                        "orden": "6",
                        "Clave": "112",
                        "Ambito": "Pártido Político",
                        "SO": "Partido del Trabajo (PT)",
                        "Titular": "C. Javier Vázquez Calixto",
                        "Direccion": "Boulevard Luis Donaldo Colosio No. 204 Fraccionamiento Arboledas de San Javier Pachuca de Soto, Hidalgo, c.p. 42084",
                        "email": "transparenciapthgo@gmail.com ",
                        "FechaIncorp": "11/05/2017",
                        "tipo": "1"
                    },
                    {
                        "orden": "6",
                        "Clave": "119",
                        "Ambito": "Pártido Político",
                        "SO": "Partido Politico Local Nueva Alianza Hidalgo",
                        "Titular": "L.M. Sergio Hernández Hernández",
                        "Direccion": "Calle Dr. Eliseo Ramírez Ulloa No. 1005 Colonia Doctores, Pachuca,Hgo.",
                        "email": "transparencia.na@gmail.com",
                        "FechaIncorp": "08/02/2019",
                        "tipo": "1"
                    },
                    {
                        "orden": "7",
                        "Clave": "96",
                        "Ambito": "Sindicato",
                        "SO": "Sindicato Único de Trabajadores al Servicio de la Comisión de Agua y Alcantarillado de Sistemas Intermunicipales del Estado de Hidalgo (SUTSCAASIMEH)\"",
                        "Titular": "C. Araceli Velázquez Carrasco",
                        "Direccion": "Carretera Cubitos la Paz S/N, Col. Cubitos, C.P. 42090",
                        "email": "sutscaasimeh@outlook.com",
                        "FechaIncorp": "18/10/2016",
                        "tipo": "0"
                    },
                    {
                        "orden": "7",
                        "Clave": "97",
                        "Ambito": "Sindicato",
                        "SO": "Sindicato Único de Trabajadores al Servicio del Poder Legislativo (SUTSPLEH)",
                        "Titular": "Mtro. Ricardo Amador Rocha Rangel",
                        "Direccion": "Carretera México-Pachuca KM. 84.5, Col. Carlos Rivorosa C.P. 42082",
                        "email": "sutsplehtransparente@hotmail.com",
                        "FechaIncorp": "25/10/2016",
                        "tipo": "0"
                    },
                    {
                        "orden": "7",
                        "Clave": "98",
                        "Ambito": "Sindicato",
                        "SO": "Sindicato Único de Trabajadores al Servicio del Poder Ejecutivo (SUTSPEEH)",
                        "Titular": "C. Victor Martin Licona Cervantes",
                        "Direccion": "Calle Justo Sierra, S/N, Col. Periodistas, C.P. 42060",
                        "email": "transparencia.sutspeeh@gmail.com",
                        "FechaIncorp": "10/11/2016",
                        "tipo": "0"
                    },
                    {
                        "orden": "7",
                        "Clave": "99",
                        "Ambito": "Sindicato",
                        "SO": "Sindicato Único de Trabajadores al Servicio del Municipio de Atotonilco el Grande, Hgo. (SUTSMAGH)",
                        "Titular": "C. Roberto Hernández Sierra",
                        "Direccion": "Calle Hidalgo No. 103, Col. Centro, C.p. 43300, Atotonilco el Grande, Hidalgo",
                        "email": "SUTSMAGH_1@hotmail.com",
                        "FechaIncorp": "08/11/2016",
                        "tipo": "0"
                    },
                    {
                        "orden": "7",
                        "Clave": "100",
                        "Ambito": "Sindicato",
                        "SO": "Sindicato Único de Trabajadores al Servicio del Mpo. de Pachuca de Soto",
                        "Titular": "C. Percy Leonardo Espinosa Bustamante",
                        "Direccion": "Morelos No. 512, Col. Centro",
                        "email": "sindicatopachuca1977@hotmail.com",
                        "FechaIncorp": "28/10/2019",
                        "tipo": "0"
                    },
                    {
                        "orden": "7",
                        "Clave": "101",
                        "Ambito": "Sindicato",
                        "SO": "Sindicato Único de Trabajadores al Servicio del H. Ayuntamiento de Progreso de Obregón, Hgo. (SUTSHAPH)",
                        "Titular": "C. Aide Azucena Cano Olguín",
                        "Direccion": "Palacio Municipal S/N, Col. Centro, C.P. 42730",
                        "email": "sindicato_progreso@outlook.com",
                        "FechaIncorp": "03/11/2016",
                        "tipo": "0"
                    },
                    {
                        "orden": "7",
                        "Clave": "103",
                        "Ambito": "Sindicato",
                        "SO": "Sindicato Único de Trabajadores al Servicio del Poder Judicial del Estado de Hidalgo (SUTSPJEH)",
                        "Titular": "C. María del Socorro Canales Hernández",
                        "Direccion": "Calle México-Pachuca K.m. 84.5, Sector Primario, C.P. 42080",
                        "email": "sindicato_pjeh@pjhidalgo.gob.mx",
                        "FechaIncorp": "24/02/2017",
                        "tipo": "0"
                    },
                    {
                        "orden": "7",
                        "Clave": "105",
                        "Ambito": "Sindicato",
                        "SO": "Sindicato Único de Trabajadores y Empleados de la UAEH (SUTEUAEH)",
                        "Titular": "C. Norma Baños Hernández",
                        "Direccion": "Calle Tierra y Libertad, Privada del Sol, No. 16, Col. Rojo Gómez, Pachuca de Soto Hgo, C.P. 42030",
                        "email": "unidadtransparenciasuteuaeh@gmail.com",
                        "FechaIncorp": "17/04/2017",
                        "tipo": "0"
                    },
                    {
                        "orden": "7",
                        "Clave": "106",
                        "Ambito": "Sindicato",
                        "SO": "Sindicato Único de Trabajadores al Servicio del Municipio de Emiliano Zapata (SUTSMEZH)",
                        "Titular": "C. Alejandro Mendoza Pérez",
                        "Direccion": "Av. 5 de Mayo esquina Benito Juárez, Col. Centro, C.P. 43960",
                        "email": "sutsmezheclaz@gmail.com",
                        "FechaIncorp": "19/04/2017",
                        "tipo": "0"
                    },
                    {
                        "orden": "7",
                        "Clave": "107",
                        "Ambito": "Sindicato",
                        "SO": "Sindicato de Personal Académico de la Universidad Autónoma del Estado de Hidalgo (SPAUAEH)",
                        "Titular": "Dr. Saúl Agustín Sosa Castelán",
                        "Direccion": "Paseo Toltecas S/N ,Fracc. Aquiles Serdán, C.P. 42034",
                        "email": "transparencia_spauaeh@hotmail.com",
                        "FechaIncorp": "20/04/2017",
                        "tipo": "0"
                    },
                    {
                        "orden": "7",
                        "Clave": "109",
                        "Ambito": "Sindicato",
                        "SO": "Sindicato Único de Trabajadores al Servicio del Municipio de Mineral del Monte (SUTSMMM)",
                        "Titular": "T.S. María del Rosario Soto Luna",
                        "Direccion": "Av. Hidalgo No. 107, Planta Alta Mineral del Monte",
                        "email": "sutsmmm.2124@gmail.com",
                        "FechaIncorp": "28/04/2017",
                        "tipo": "0"
                    },
                    {
                        "orden": "7",
                        "Clave": "110",
                        "Ambito": "Sindicato",
                        "SO": "Sindicato \"Lealtad, Fuerza y Perseverancia\" de los Trabajadores al Servicio del Municipio de Tlaxcoapan, Hidalgo",
                        "Titular": "Lic. Aldo Augusto Morales Malo",
                        "Direccion": "Palacio Municipal S/N Col. Centro",
                        "email": "Sindicato.le.fu.pe.tlax@gmail.com",
                        "FechaIncorp": "02/05/2017",
                        "tipo": "0"
                    },
                    {
                        "orden": "7",
                        "Clave": "113",
                        "Ambito": "Sindicato",
                        "SO": "Sindicato Único de Trabajadores al Servicio del Municipio de Almoloya, Hidalgo",
                        "Titular": "Ingrid Salazar Ordoñez",
                        "Direccion": "Palacio Municipal S/N, Col. Centro, Municipio de Almoloya",
                        "email": "u-t-sutsmah@hotmail.com",
                        "FechaIncorp": "18/10/2017",
                        "tipo": "0"
                    },
                    {
                        "orden": "7",
                        "Clave": "114",
                        "Ambito": "Sindicato",
                        "SO": "Sindicato Único de Trabajadores al Servicio del Municipio de Tlanchinol, Hidalgo",
                        "Titular": "C. Adela Martínez Hernández",
                        "Direccion": "Palacio Municipal S/N, Col. Centro, C.P. 43150, Municipio de Tlanchinol",
                        "email": "sindicato_tlanchinol@hotmail.com",
                        "FechaIncorp": "25/10/2017",
                        "tipo": "0"
                    },
                    {
                        "orden": "7",
                        "Clave": "115",
                        "Ambito": "Sindicato",
                        "SO": "Sindicato Único de Trabajadores al Servicio del Municipio de Tizayuca, Hidalgo",
                        "Titular": "C. Jasael Jacinto Miranda Serafín",
                        "Direccion": "Palacio Municipal S/N, Col. Centro, Municipio de Tizayuca",
                        "email": "sindicatotransparencia@gmail.com",
                        "FechaIncorp": "21/11/2017",
                        "tipo": "0"
                    },
                    {
                        "orden": "7",
                        "Clave": "116",
                        "Ambito": "Sindicato",
                        "SO": "Sindicato Único de Trabajadores al Servicio del Municipio de Tlanalapa, Hgo. (SUTSMT)",
                        "Titular": "C. Javier Ramírez Cortés",
                        "Direccion": "Palacio Municipal S/N, Col. Centro, Tlanalapa, Hidalgo",
                        "email": "sindicatotranstlana@gmail.com",
                        "FechaIncorp": "27/11/2017",
                        "tipo": "0"
                    },
                    {
                        "orden": "7",
                        "Clave": "117",
                        "Ambito": "Sindicato",
                        "SO": "Sindicato Único de Trabajadores al Servicio del Municipio de Huautla, Hidalgo",
                        "Titular": "Ing. Mario Ramirez Vite",
                        "Direccion": "Av. Guillermo Rossell esq. Francisco Abrego, Barrio Alto, Huautla Hidalgo.",
                        "email": "sindicatohuautla2023@gmail.com",
                        "FechaIncorp": "15/12/2017",
                        "tipo": "0"
                    },
                    {
                        "orden": "7",
                        "Clave": "118",
                        "Ambito": "Sindicato",
                        "SO": "Sindicato Único de Trabajadores al Servicio del Municipio de Apan, Hidalgo (SUTSMAH),",
                        "Titular": "C. Alfonso Pérez Guevara",
                        "Direccion": "Calle Xihuingo No. 7, Fraccionamiento San Francisco, Apan, Hidalgo.",
                        "email": "sindicato_municipioapan@outlook.com",
                        "FechaIncorp": "18/07/2018",
                        "tipo": "0"
                    },
                    {
                        "orden": "7",
                        "Clave": "121",
                        "Ambito": "Sindicato",
                        "SO": "Sindicato Único de Trabajadores al Servicio del H. Ayuntamiento de Tulancingo (SUTSHAMTBH)",
                        "Titular": " C. Matilde Espinosa Bustamante",
                        "Direccion": "Boulevard Quetzalcoatl s/n, col. San Nicolás (al interior de la unidad deportiva Javier Rojo Gómez), Tulancingo de Bravo, Hgo. C.P. 43640",
                        "email": "transparenciasindicatomineral@gmail.com",
                        "FechaIncorp": "01/12/2020",
                        "tipo": "0"
                    },
                    {
                        "orden": "7",
                        "Clave": "122",
                        "Ambito": "Sindicato",
                        "SO": "Sindicato Único de Trabajadores al Servicio del Municipio de Mineral de la Reforma",
                        "Titular": "C. Alelí Pontaza Escamilla",
                        "Direccion": "Av. Hidalgo #35 Col. Centro Pachuquilla, Hgo.",
                        "email": "transparenciasindicatomineral@gmail.com",
                        "FechaIncorp": "06/09/2023",
                        "tipo": "0"
                    },
                    {
                        "orden": "7",
                        "Clave": "123",
                        "Ambito": "Sindicato",
                        "SO": "Sindicato Único de Trabajadores al Servicio del H. Ayuntamiento de Omitlán de Juárez, Hgo. ",
                        "Titular": "C. Eduardo Garcia Olvera",
                        "Direccion": "Av. Juárez s/n, colonia centro, Omitlán de Juárez, Hgo, C.P. 43560",
                        "email": "UTSINDICATOOMITLAN@GMAIL.COM",
                        "FechaIncorp": "06/09/2023",
                        "tipo": "0"
                    },
                    {
                        "orden": "7",
                        "Clave": "124",
                        "Ambito": "Sindicato",
                        "SO": "Sindicato Único de Trabajadores al Servicio del H. Ayuntamiento del Municipio de Cuautepec de Hinojosa, Hgo.",
                        "Titular": "C. Silvia Claudia Olivares Omaña",
                        "Direccion": "Calle Eucalipto esq. Con callejón los tres reyes, col. Puente de la paz, Cuautepec de Hinojosa Hidalgo",
                        "email": "cuautepecsindicato@yahoo.com",
                        "FechaIncorp": "06/09/2023",
                        "tipo": "0"
                    },
                    {
                        "orden": "7",
                        "Clave": "125",
                        "Ambito": "Sindicato",
                        "SO": "Sindicato Único de Trabajadores al Servicio del H. Ayuntamiento de Huasca de Ocampo, Hgo. ",
                        "Titular": "C. Juan Cesar Sanchez",
                        "Direccion": "Domicilio Conocido, Libramiento barrio la Loma, Huasca de Ocampo, Hidalgo",
                        "email": "sutshamhoh@gmail.com",
                        "FechaIncorp": "06/09/2023",
                        "tipo": "0"
                    },
                    {
                        "orden": "7",
                        "Clave": "126",
                        "Ambito": "Sindicato",
                        "SO": "Sindicato Único de Trabajadores al Servicio del Municipio de Tepeapulco, Hgo.",
                        "Titular": "C. Pedro Hernández Jímenez",
                        "Direccion": "",
                        "email": "",
                        "FechaIncorp": "06/09/2023",
                        "tipo": "0"
                    },
                    {
                        "orden": "7",
                        "Clave": "127",
                        "Ambito": "Sindicato",
                        "SO": "Sindicato Único de Trabajadores al Servicio del H. Ayuntamiento de Actopan, Hgo. ",
                        "Titular": "C. Vicente López Aguilar",
                        "Direccion": "",
                        "email": "",
                        "FechaIncorp": "06/09/2023",
                        "tipo": "0"
                    },
                    {
                        "orden": "7",
                        "Clave": "128",
                        "Ambito": "Sindicato",
                        "SO": "Sindicato Único de Trabajadores al Servicio del Municipio de Atitalaquia, Hgo",
                        "Titular": "Tec. Cleotilde Elizabeth Juárez Cruz",
                        "Direccion": "Palacio Municipal s/n. col. centro Atitalaquia, Hgo",
                        "email": "atitalaquiasindicato@gmail.com",
                        "FechaIncorp": "06/09/2023",
                        "tipo": "0"
                    },
                    {
                        "orden": "7",
                        "Clave": "129",
                        "Ambito": "Sindicato",
                        "SO": "Sindicato Único de Trabajadores al Servicio del H. Ayuntamiento de Cardonal, Hgo. ",
                        "Titular": "",
                        "Direccion": "Plaza Lic. Jesús Zeñil s/n, col. Centro, Cardonal, Hidalgo",
                        "email": "sindicatocardonal@gmail.com",
                        "FechaIncorp": "06/09/2023",
                        "tipo": "0"
                    },
                    {
                        "orden": "7",
                        "Clave": "130",
                        "Ambito": "Sindicato",
                        "SO": "Sindicato Único de Trabajadores al Servicio del Municipio de Huichapan, Hgo.",
                        "Titular": "C. María Alejandrina Gómez García",
                        "Direccion": "Calle Patoni no. 122, interior 12, Barrio La Campana, c.p. 42405, Huichapan, Hgo",
                        "email": "sutshamhh@gmail.com",
                        "FechaIncorp": "06/09/2023",
                        "tipo": "0"
                    },
                    {
                        "orden": "7",
                        "Clave": "131",
                        "Ambito": "Sindicato",
                        "SO": "Sindicato Único de Trabajadores al Servicio del H. Ayuntamiento de Ixmiquilpan, Hgo. ",
                        "Titular": "C. Miguel Ángel Martínez Espinoza",
                        "Direccion": "Calle Dalla s/n Fraccionamiento la Purísima, Barrio de el Carmen, Ixmiquilpan, Hgo P. 42300",
                        "email": "sindicatoixmiquilpan@outlook.com",
                        "FechaIncorp": "06/09/2023",
                        "tipo": "0"
                    },
                    {
                        "orden": "7",
                        "Clave": "132",
                        "Ambito": "Sindicato",
                        "SO": "Sindicato Único de Trabajadores al Servicio del Municipio de Mixquiahuala, Hgo.",
                        "Titular": "C. Esteban Calva Ramírez",
                        "Direccion": "",
                        "email": "",
                        "FechaIncorp": "06/09/2023",
                        "tipo": "0"
                    },
                    {
                        "orden": "7",
                        "Clave": "133",
                        "Ambito": "Sindicato",
                        "SO": "Comisión Ejecutiva Única de Trabajadores al Servicio del municipio de Santiago de Anaya, Hidalgo",
                        "Titular": "",
                        "Direccion": "",
                        "email": "",
                        "FechaIncorp": "06/09/2023",
                        "tipo": "0"
                    },
                    {
                        "orden": "7",
                        "Clave": "134",
                        "Ambito": "Sindicato",
                        "SO": "Sindicato Único de Trabajadores al Servicio del H. Ayuntamiento del Municipio de Tecozautla, Hgo.",
                        "Titular": "C. Armando Soto Hernández",
                        "Direccion": "Tecozautla, Hgo",
                        "email": "sindicatotecozautla@gmail.com",
                        "FechaIncorp": "06/09/2023",
                        "tipo": "0"
                    },
                    {
                        "orden": "7",
                        "Clave": "135",
                        "Ambito": "Sindicato",
                        "SO": "Sindicato Único de Trabajadores al Servicio del H. Ayuntamiento de Tula de Allende, Hgo. ",
                        "Titular": "",
                        "Direccion": "",
                        "email": "",
                        "FechaIncorp": "06/09/2023",
                        "tipo": "0"
                    },
                    {
                        "orden": "7",
                        "Clave": "136",
                        "Ambito": "Sindicato",
                        "SO": "Sindicato Único de Trabajadores al Servicio del Municipio de Zimapán, Hidalgo.",
                        "Titular": "C. Ismael Hernández Reséndiz",
                        "Direccion": "Plaza de la Constitución No. 1 colonia centro, Zimapán, Hidalgo",
                        "email": "sindicatodetrabajadores.zimapan@gmail.com",
                        "FechaIncorp": "06/09/2023",
                        "tipo": "0"
                    },
                    {
                        "orden": "7",
                        "Clave": "137",
                        "Ambito": "Sindicato",
                        "SO": "Sindicato Único de Trabajadores al Servicio del H. Ayuntamiento de Atlapexco, Hgo. ",
                        "Titular": "C. Guadalupe Rivera Bautista",
                        "Direccion": "Palacio Municipal s/n, col. Centro Atlapexco, Hgo",
                        "email": "sindicatoatlapexco@gmail.com",
                        "FechaIncorp": "06/09/2023",
                        "tipo": "0"
                    },
                    {
                        "orden": "7",
                        "Clave": "138",
                        "Ambito": "Sindicato",
                        "SO": "Sindicato Único de Trabajadores al Servicio del Municipio de Huejutla de Reyes, Hgo.",
                        "Titular": "",
                        "Direccion": "",
                        "email": "",
                        "FechaIncorp": "06/09/2023",
                        "tipo": "0"
                    },
                    {
                        "orden": "7",
                        "Clave": "139",
                        "Ambito": "Sindicato",
                        "SO": "Sindicato Único de Trabajadores al Servicio del H. Ayuntamiento de Molango de Escamilla, Hgo. ",
                        "Titular": "C. Antioco Meza García",
                        "Direccion": "Palacio Municipal s/n col. Centro c.p. 43100 Molango de Escamilla Hidalgo",
                        "email": "sindicatounicomolango@gmail.com",
                        "FechaIncorp": "06/09/2023",
                        "tipo": "0"
                    },
                    {
                        "orden": "8",
                        "Clave": "102",
                        "Ambito": "Organismos de la Sociedas Civil",
                        "SO": "Centro de Rehabilitación e Inclusión Infantil Teletón Hidalgo",
                        "Titular": "Ing. José Agustin I. Lagunas Osegura ",
                        "Direccion": "Blvd. Fomento Minero No. 105, Col. Venta Prieta C.P. 42080, Pachuca Hidalgo.",
                        "email": "transparencia@teleton-hgo.org.mx",
                        "FechaIncorp": "17/10/2016",
                        "tipo": "1"
                    },
                        {
                            "orden": "",
                            "Clave": "",
                            "Ambito": "Partidos",
                            "SO": "Partido Político Local más Por Hidalgo (+XH)",
                            "Titular": "",
                            "Direccion": "",
                            "email": "",
                            "FechaIncorp": "10/08/2018",
                            "FechaBaja": "20/10/2021",
                            "tipo": "baja"
                        },
                        {
                            "orden": "",
                            "Clave": "",
                            "Ambito": "Partidos",
                            "SO": "Partido Político Local PODEMOS",
                            "Titular": "",
                            "Direccion": "",
                            "email": "",
                            "FechaIncorp": "31/08/2018",
                            "FechaBaja": "23/03/2022",
                            "tipo": "baja"
                        },
                        {
                            "orden": "",
                            "Clave": "",
                            "Ambito": "Partidos",
                            "SO": "Partido Encuentro Social Hidalgo",
                            "Titular": "",
                            "Direccion": "",
                            "email": "",
                            "FechaIncorp": "17/07/2019",
                            "FechaBaja": "20/10/2021",
                            "tipo": "baja"
                        },
                        {
                            "orden": "",
                            "Clave": "",
                            "Ambito": "Partidos",
                            "SO": "Partido Encuentro Solidario",
                            "Titular": "",
                            "Direccion": "",
                            "email": "",
                            "FechaIncorp": "18/02/2021",
                            "FechaBaja": "23/03/2022",
                            "tipo": "baja"
                        },
                        {
                            "orden": "",
                            "Clave": "",
                            "Ambito": "Partidos",
                            "SO": "Partido Político Nueva Alianza",
                            "Titular": "",
                            "Direccion": "",
                            "email": "",
                            "FechaIncorp": "10/11/2016",
                            "FechaBaja": "12/02/2019",
                            "tipo": "baja"
                        },
                        {
                            "orden": "",
                            "Clave": "",
                            "Ambito": "Organismos Públicos Autónomos ",
                            "SO": "Consejo Consultivo Ciudadano",
                            "Titular": "",
                            "Direccion": "",
                            "email": "",
                            "FechaIncorp": "01/06/2008",
                            "FechaBaja": "07/02/2018",
                            "tipo": "baja"
                        },
                        {
                            "orden": "",
                            "Clave": "",
                            "Ambito": "Partidos",
                            "SO": "Partido Encuentro Social",
                            "Titular": "",
                            "Direccion": "",
                            "email": "",
                            "FechaIncorp": "02/02/2017",
                            "FechaBaja": "10/10/2018",
                            "tipo": "baja"
                        },
                        {
                            "orden": "",
                            "Clave": "",
                            "Ambito": "Sindicatos",
                            "SO": "Sindicato Único de Trabajadores al Servicio del H. Ayuntamiento del Municipio de Tlahuelilpan de Ocampo Hidalgo (S.U.T.S.H.A.M.T.O.H)",
                            "Titular": "",
                            "Direccion": "",
                            "email": "",
                            "FechaIncorp": "12/12/2017",
                            "FechaBaja": "09/04/2018",
                            "tipo": "baja"
                        },
                        {
                            "orden": "",
                            "Clave": "",
                            "Ambito": "Sindicatos",
                            "SO": "Sindicato Único de Trabajadores al Servicio del Municipio de Atitalaquia, Hidalgo (Sutsmah)",
                            "Titular": "",
                            "Direccion": "",
                            "email": "",
                            "FechaIncorp": "05/05/2017",
                            "FechaBaja": "07/02/2018",
                            "tipo": "baja"
                        }
                
              ];
              var data_filter = jsondata.filter( element => element.tipo !="baja")
            $('#tableA').bootstrapTable({
                //Assigning data to table
                exportTypes: ['txt','excel'],
                data: data_filter
            });
           
            var data_filter = jsondata.filter( element => element.tipo =="1")
            $('#tableDP').bootstrapTable({
                //Assigning data to table
                data: data_filter
            });
            var data_filter = jsondata.filter( element => element.tipo =="baja")
            $('#tableBaja').bootstrapTable({
                //Assigning data to table
                data: data_filter
            });
        }).on('shown.bs.tab');

        var ctx = document.getElementById('popChartYear2');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Ayuntamientos", "Organismos de la Sociedad Civil", "Organismos Públicos Autónomos", "Partidos Políticos", "Poderes", "Sindicatos"],
        datasets: [{
            label: '#Sujetos Obligados',
            data: [84,1, 5, 8, 4, 37],
            backgroundColor: [
                'rgba(165, 89, 182, 1)',
                'rgba(175, 122, 197, 1)',
                'rgba(195, 155, 211, 1)',
                'rgba(215, 189, 226, 1)',
                'rgba(235, 222, 240, 1)',
                'rgba(245, 238, 248, 1)'
            ],
            borderColor: [
                'rgba(155, 89, 182, 1)',
                'rgba(175, 122, 197, 1)',
                'rgba(195, 155, 211, 1)',
                'rgba(215, 189, 226, 1)',
                'rgba(235, 222, 240, 1)',
                'rgba(245, 238, 248, 1)'
                
                
                
                
                
            ],
            borderWidth: 1
        }]
    },
    plugins: [ChartDataLabels],
    options: {
        indexAxis: 'y',
        plugins:{
            datalabels:{
                color:'#24125f',
                font:{
                    weight:'bold'
                }
               
            }
        }
    }
});
var ctx = document.getElementById('popChartYear3');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Ayuntamientos", "Organismos de la Sociedad Civil", "Organismos Públicos Autónomos", "Partidos Políticos", "Poderes"],
        datasets: [{
            label: '#Sujetos Obligados',
            data: [84,1, 5, 8, 4],
            backgroundColor: [
                'rgba(165, 89, 182, 1)',
                'rgba(175, 122, 197, 1)',
                'rgba(195, 155, 211, 1)',
                'rgba(215, 189, 226, 1)',
                'rgba(235, 222, 240, 1)',
                
            ],
            borderColor: [
                'rgba(155, 89, 182, 1)',
                'rgba(175, 122, 197, 1)',
                'rgba(195, 155, 211, 1)',
                'rgba(215, 189, 226, 1)',
                'rgba(235, 222, 240, 1)',
                
                
                
                
                
            ],
            borderWidth: 1
        }]
    },
    plugins: [ChartDataLabels],
    options: {
        indexAxis: 'y',
        plugins:{
            datalabels:{
                color:'#24125f',
                font:{
                    weight:'bold'
                }
               
            }
        }
    }
});
