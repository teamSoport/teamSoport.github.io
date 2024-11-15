$(document)
  .ready(function () {
    //Sample Json data

    /* variable data             
            Det: conserva 0 y incisoL null = Flase cual quier otra conbinacion es True
            Vigente: Se activa la uri correspondiente al archivo excel
            conserva: Número de años activo en el historial, prioridad posterior a "inciso":[]
            inciso: activa el historial por [periodo], prioridad anterior a la varible conserva, 
                    arreglo de arreglos [[#_de_incisos Letra],[Periodo],[Numero de historial a mostrar]]
                    [#_de_incisos Letra] - "a,b,c,d,e,f,g"  
                    [Periodo] - "trim", "sem", "anualv"
                    [Numero de historial a mostrar] - "1-6"
                     
      */
    /* {
                          "id":"0",
                           "art":"I.",
                           "Frac":"a69_f1",
                           "Det":"False",
                                                      
                           "nom":"<a href=https://tinyurl.com/2xlta67v target='_blank'>Normatividad prueba 2024</a>",
                           "vigente":'<a href="../FraccionesT/a69_f12024.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
                           "Conserva":"0",
                           "incisoL":[],
                           "inciso":[],
                           "año":"2024" */
    var jsondata = [
      {
        id: "0",
        art: "I.",
        Frac: "a69_f1",
        Det: "False",
        nom: "<a href=https://tinyurl.com/2xlta67v target='_blank'>Normatividad</a>",
        vigente:
          '<a href="../FraccionesT/a69_f012024.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
        Conserva: "0",
        incisoL: "",
        inciso: "",
        año: "2024",
      },
      {
        id: "0",
        art: "II.",
        Frac: "a69_f2",
        Det: "True",
        nom: "<a href=https://tinyurl.com/2bpbpj5o target='_blank'>Estructura Orgánica</a>",
        vigente: "",
        Conserva: "2",
        incisoL: ["a)Estructura orgánica", "b)Organigrama"],
        inciso: [
          ["a", "trim", "2"],
          ["b", "trim", "2"],
        ],
        año: "2024",
      },
      {
        id: "0",
        art: "III.",
        Frac: "a69_f3",
        Det: "False",
        nom: "<a href=https://tinyurl.com/2a32y45v target='_blank'>Funciones de Cada Área</a>",
        vigente:
          '<a href="../FraccionesT/a69_f032024.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
        Conserva: "0",
        incisoL: "",
        inciso: "",
        año: "2024",
      },
      {
        id: "0",
        art: "IV.",
        Frac: "a69_f4",
        Det: "True",
        nom: "<a href=https://tinyurl.com/2ab9fr88 target='_blank'>Metas y Objetivos de las Áreas</a>",
        vigente: "", //<a href="../FraccionesT/a69_f42024.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
        Conserva: "6",
        incisoL: "",
        inciso: "",
        año: "2024",
      },
      {
        id: "0",
        art: "V.",
        Frac: "a69_f5",
        Det: "True",
        nom: "<a href=https://tinyurl.com/2c68tbf7 target='_blank'>Indicadores de Interés Público</a>",
        vigente: "", //<a href="../FraccionesT/a69_f52024.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
        Conserva: "6",
        incisoL: "",
        inciso: "",
        año: "2024",
      },
      {
        id: "0",
        art: "VI.",
        Frac: "a69_f6",
        Det: "True",
        nom: "<a href=https://tinyurl.com/2d8fnfdy target='_blank'>Indicadores de Resultados</a>",
        vigente: "", //<a href="../FraccionesT/a69_f62024.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>
        Conserva: "6",
        incisoL: "",
        inciso: "",
        año: "2024",
      },
      {
        id: "0",
        art: "VII.",
        Frac: "a69_f7",
        Det: "True",
        nom: "<a href=https://tinyurl.com/2ba5ral4 target='_blank'>Directorio</a>",
        vigente: "", //<a href="../FraccionesT/a69_f72024.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
        Conserva: "2",
        incisoL: "",
        inciso: "",
        año: "2024",
      },
      {
        id: "0",
        art: "VIII.",
        Frac: "a69_f8",
        Det: "True",
        nom: "<a href=https://tinyurl.com/22o2golv target='_blank'>Sueldos</a>",
        vigente: "",
        Conserva: "2",
        incisoL: [
          "a)Remuneración bruta y neta",
          "b)Tabulador de Sueldos y Salarios",
        ],
        inciso: [
          ["a", "trim", "2"],
          ["b", "trim", "2"],
        ],
        año: "2024",
      },
      {
        id: "0",
        art: "IX.",
        Frac: "a69_f9",
        Det: "True",
        nom: "<a href=https://tinyurl.com/2c4phrob target='_blank'>Gastos en Comisiones Oficiales</a>",
        vigente: "", //<a href="../FraccionesT/a69_f92024.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
        Conserva: "2",
        incisoL: "",
        inciso: "",
        año: "2024",
      },
      {
        id: "0",
        art: "X.",
        Frac: "a69_f10",
        Det: "True",
        nom: "<a href=https://tinyurl.com/22sz5gjx target='_blank'>Puestos y Vacantes</a>",
        vigente: "",
        Conserva: "2",
        incisoL: [
          "a)Plazas vacantes y ocupadas",
          "b)Total Plazas vacantes y ocupadas",
        ],
        inciso: [
          ["a", "trim", "2"],
          ["b", "trim", "2"],
        ],
        año: "2024",
      },
      {
        id: "0",
        art: "XI.",
        Frac: "a69_f11",
        Det: "True",
        nom: "<a href=https://tinyurl.com/27mn7syx target='_blank'>Contratos por Honorarios</a>",
        vigente: "", //<a href="../FraccionesT/a69_f112024.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
        Conserva: "2",
        incisoL: "",
        inciso: "",
        año: "2024",
      },
      {
        id: "0",
        art: "XII.",
        Frac: "a69_f12",
        Det: "True",
        nom: "<a href=https://tinyurl.com/26ax8fmr target='_blank'>Declaraciones Patrimoniales</a>",
        vigente: "", //<a href="../FraccionesT/a69_f122024.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
        Conserva: "2",
        incisoL: "",
        inciso: "",
        año: "2024",
      },
      {
        id: "0",
        art: "XIII.",
        Frac: "a69_f13",
        Det: "True",
        nom: "<a href=https://tinyurl.com/2xts2gqj target='_blank'>Unidad de Transparencia</a>",
        vigente: "", //<a href="../FraccionesT/a69_f132024.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
        Conserva: "2",
        incisoL: "",
        inciso: "",
        año: "2024",
      },
      {
        id: "0",
        art: "XIV.",
        Frac: "a69_f14",
        Det: "True",
        nom: "<a href=https://tinyurl.com/236dfvjy target='_blank'>Concursos para ocupar cargos públicos</a>",
        vigente: "", //<a href="../FraccionesT/a69_f142024.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
        Conserva: "2",
        incisoL: "",
        inciso: "",
        año: "2024",
      },
      {
        id: "0",
        art: "XVI.",
        Frac: "a69_f16",
        Det: "True",
        nom: "<a href=https://tinyurl.com/2aohhvnu target='_blank'>Condiciones Generales de Trabajo y Sindicatos</a>",
        vigente: "",
        Conserva: "3",
        incisoL: ["Recursos públicos entregados a sindicatos"],
        inciso: [["b", "trim", "3"]],
        año: "2024",
      },
      {
        id: "0",
        art: "XVII.",
        Frac: "a69_f17",
        Det: "True",
        nom: "<a href=https://tinyurl.com/265rhw5s target='_blank'>Currícula de Funcionarios</a>",
        vigente: "", //<a href="../FraccionesT/a69_f172024.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
        Conserva: "2",
        incisoL: "",
        inciso: "",
        año: "2024",
      },
      {
        id: "0",
        art: "XVIII.",
        Frac: "a69_f18",
        Det: "True",
        nom: "<a href=https://tinyurl.com/2yadcxjy target='_blank'>Servidores Públicos Sancionados</a>",
        vigente: "", //<a href="../FraccionesT/a69_f182024.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
        Conserva: "2",
        incisoL: "",
        inciso: "",
        año: "2024",
      },
      {
        id: "0",
        art: "XIX.",
        Frac: "a69_f19",
        Det: "False",
        nom: "<a href=https://tinyurl.com/23mqgbjn target='_blank'>Servicios Púbicos</a>",
        vigente:
          '<a href="../FraccionesT/a69_f192024.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
        Conserva: "0",
        incisoL: "",
        inciso: "",
        año: "2024",
      },
      {
        id: "0",
        art: "XX.",
        Frac: "a69_f20",
        Det: "False",
        nom: "<a href=https://tinyurl.com/2chhojzd target='_blank'>Trámites, Requisitos y Formatos</a>",
        vigente:
          '<a href="../FraccionesT/a69_f202024.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
        Conserva: "0",
        incisoL: "",
        inciso: "",
        año: "2024",
      },
      {
        id: "0",
        art: "XXI.",
        Frac: "a69_f21",
        Det: "True",
        nom: "<a href=https://tinyurl.com/28wk5yh5 target='_blank'>Presupuesto del Gasto Público</a>",
        vigente: "",
        Conserva: "7",
        incisoL: [
          "a)Presupuesto asignado annual",
          "b)Ejercicio de los egresos presupuestarios",
          "c)Cuenta pública",
        ],
        inciso: [
          ["a", "anualv", "7"],
          ["b", "trim", "7"],
          ["c", "anualv", "7"],
        ],
        año: "2024",
      },
      {
        id: "0",
        art: "XXII.",
        Frac: "a69_f22",
        Det: "True",
        nom: "<a href=https://tinyurl.com/26f34mfn target='_blank'>Deuda Pública</a>",
        vigente: "", //<a href="../FraccionesT/a69_f222024.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
        Conserva: "6",
        incisoL: "",
        inciso: "",
        año: "2024",
      },
      {
        id: "0",
        art: "XXIII.",
        Frac: "a69_f23",
        Det: "True",
        nom: "<a href=https://tinyurl.com/2yadcxjy target='_blank'>Gastos de Publicidad Oficial</a>",
        vigente: "",
        Conserva: "3",
        incisoL: [
          "a)Programa Anual de Comunicación Social o equivalente",
          "b)Erogación de recursos por contratación de servicios de impresión, difusión y publicidad",
          "c)Utilización de los Tiempos Oficiales: tiempo de Estado y tiempo fiscal",
        ],
        inciso: [
          ["a", "trim", "3"],
          ["b", "trim", "3"],
          ["c", "trim", "3"],
        ],
        año: "2024",
      },
      {
        id: "0",
        art: "XXIV.",
        Frac: "a69_f24",
        Det: "True",
        nom: "<a href=https://tinyurl.com/245alqmx target='_blank'>Resultados de Auditorías</a>",
        vigente: "", //<a href="../FraccionesT/a69_f242024.xlsx" target=_blank"><span class="badge bg-success">XLS</span></a>',
        Conserva: "3",
        incisoL: "",
        inciso: "",
        año: "2024",
      },
      {
        id: "0",
        art: "XXV.",
        Frac: "a69_f25",
        Det: "True",
        nom: "<a href=https://tinyurl.com/23byze45 target='_blank'>Dictámenes Financieros</a>",
        vigente: "", //<a href="../FraccionesT/a69_f252024.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
        Conserva: "6",
        incisoL: "",
        inciso: "",
        año: "2024",
      },
      {
        id: "0",
        art: "XXVI.",
        Frac: "a69_f26",
        Det: "True",
        nom: "<a href=https://tinyurl.com/29awq8jg target='_blank'>Personas Físicas y Morales que usan Recursos Públicos</a>",
        vigente: "", //<a href="../FraccionesT/a69_f262024.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
        Conserva: "2",
        incisoL: "",
        inciso: "",
        año: "2024",
      },
      {
        id: "0",
        art: "XXVII.",
        Frac: "a69_f27",
        Det: "True",
        nom: "<a href=https://tinyurl.com/29z3z25y target='_blank'>Concesiones, Licencias, Permisos y Autorizaciones</a>",
        vigente:
          '<a href="../FraccionesT/a69_f272024.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
        Conserva: "3",
        incisoL: "",
        inciso: "",
        año: "2023",
      },
      {
        id: "0",
        art: "XXVIII",
        Frac: "a69_f28",
        Det: "True",
        nom: "<a href=https://tinyurl.com/26bomyqu target='_blank'>Contratos de Obras, Bienes y Servicios</a>",
        vigente:
          '<a href="../FraccionesT/a69_f282024.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
        Conserva: "3",
        incisoL: [
          "a)Procedimientos de licitación pública e invitación a cuando menos tres personas",
          "b)Procedimientos de adjudicación directa",
        ],
        inciso: [
          ["a", "trim", "6"],
          ["b", "trim", "6"],
        ],
        año: "2023",
      },
      {
        id: "0",
        art: "XXIX.",
        Frac: "a69_f29",
        Det: "True",
        nom: "<a href=https://tinyurl.com/29z3z25y target='_blank'>Informes</a>",
        vigente: "", //<a href="../FraccionesT/a69_f292024.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
        Conserva: "2",
        incisoL: "",
        inciso: "",
        año: "2024",
      },
      {
        id: "0",
        art: "XXX.",
        Frac: "a69_f30",
        Det: "True",
        nom: "<a href=https://tinyurl.com/23obdt35 target='_blank'>Estadísticas</a>",
        vigente: "", //<a href="../FraccionesT/a69_f302024.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
        Conserva: "6",
        incisoL: "",
        inciso: "",
        año: "2024",
      },
      {
        id: "0",
        art: "XXXI.",
        Frac: "a69_f31",
        Det: "True",
        nom: "<a href=https://tinyurl.com/2yqjyrdy target='_blank'>Información Financiera</a>",
        vigente: "",
        Conserva: "6",
        incisoL: [
          "a)Gasto por Capítulo, Concepto y Partida",
          "b)Informes financieros contables, presupuestales y programáticos",
        ],
        inciso: [
          ["a", "trim", "6"],
          ["b", "trim", "6"],
        ],
        año: "2024",
      },
      {
        id: "0",
        art: "XXXII.",
        Frac: "a69_f32",
        Det: "True",
        nom: "<a href=https://tinyurl.com/2dkchreh target='_blank'>Padrón de Proveedores y Contratistas</a>",
        vigente: "", //<a href="../FraccionesT/a69_f322024.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
        Conserva: "2",
        incisoL: "",
        inciso: "",
        año: "2024",
      },
      {
        id: "0",
        art: "XXXIII.",
        Frac: "a69_f33",
        Det: "True",
        nom: "<a href=https://tinyurl.com/2c7wox76 target='_blank'>Convenios de Coordinación</a>",
        vigente:
          '<a href="../FraccionesT/a69_f332024.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
        Conserva: "2",
        incisoL: "",
        inciso: "",
        año: "2024",
      },
      {
        id: "0",
        art: "XXXIV.",
        Frac: "a69_f34",
        Det: "True",
        nom: "<a href=https://tinyurl.com/27rfnbhk target='_blank'>Inventario de Bienes</a>",
        vigente: "", //<a href="../FraccionesT/a69_f342024.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
        Conserva: "2",
        incisoL: [
          "a)Inventario bienes muebles",
          "b)Inventario de altas practicadas a bienes muebles",
          "c)Inventario de bajas practicadas a bienes muebles",
          "d)Inventario de bienes inmuebles",
          "e)Inventario de altas practicadas a bienes inmuebles",
          "f)Inventario de bajas practicadas a bienes inmuebles",
          "g)Inventario de bienes muebles e inmuebles donados",
        ],
        /* esta fraccion35 es semestral pero para mostrar 
        el año en curso en el periodo va la variable "trim" 
        para mostrar el año en curso la idea es que se a "sem"*/
        inciso: [
          ["a", "trim", "2"],
          ["b", "trim", "2"],
          ["c", "trim", "2"],
          ["d", "trim", "2"],
          ["e", "trim", "2"],
          ["f", "trim", "2"],
          ["g", "trim", "2"],
        ],
        año: "2024",
      },
      {
        id: "0",
        art: "XXXV.",
        Frac: "a69_f35",
        Det: "True",
        nom: "<a href=https://tinyurl.com/2ydh43tl target='_blank'>Recomendaciones de Derechos Humanos</a>",
        vigente: "",
        Conserva: "1",
        incisoL: [
          "a)Recomendaciones emitidas por la Comisión Nacional de Derechos Humanos",
          "b)Casos especiales emitidos por la CNDH",
          "c)Recomendaciones emitidas por organismos internacionales",
        ],
        inciso: [
          ["a", "trim", "1"],
          ["b", "trim", "1"],
          ["c", "trim", "1"],
        ],
        año: "2024",
      },
      {
        id: "0",
        art: "XXXVI.",
        Frac: "a69_f36",
        Det: "True",
        nom: "<a href=https://tinyurl.com/22e8ho5z target='_blank'>Solución de Procesos en Juicio</a>",
        vigente: "", //<a href="../FraccionesT/a69_f362024.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
        Conserva: "2",
        incisoL: "",
        inciso: "",
        año: "2024",
      },
      {
        id: "0",
        art: "XXXVII.",
        Frac: "a69_f37",
        Det: "True",
        nom: "<a href=https://tinyurl.com/26239dcb target='_blank'>Participación Ciudadana</a>",
        vigente: "",
        Conserva: "2",
        incisoL: [
          "a)Mecanismos de participación Ciudadana",
          "b)Resultados de mecanismos",
        ],
        inciso: [
          ["a", "trim", "2"],
          ["b", "trim", "2"],
        ],
        año: "2024",
      },
      {
        id: "0",
        art: "XXXIX.",
        Frac: "a69_f39",
        Det: "True",
        nom: "<a href=https://tinyurl.com/275zltlj target='_blank'>Comité de Transparencia</a>",
        vigente: "",
        Conserva: "2",
        incisoL: [
          "a)Informe de sesiones del Cómite de Transparencia",
          "b)Informe de resoluciones del Cómite de Transparencia",
          "c)Integrantes del Cómite de Transparencia",
          "d)Calendario de sesiones ordinarias del Cómite",
        ],
        inciso: [
          ["a", "trim", "2"],
          ["b", "trim", "2"],
          ["c", "trim", "2"],
          ["d", "trim", "2"],
        ],
        año: "2024",
      },
      {
        id: "0",
        art: "XLI.",
        Frac: "a69_f41",
        Det: "True",
        nom: "<a href=https://tinyurl.com/22yyj29m target='_blank'>Estudios Financiados con Recursos Públicos</a>",
        vigente: "", //<a href="../FraccionesT/a69_f412024.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
        Conserva: "2",
        incisoL: "",
        inciso: "",
        año: "2024",
      },
      {
        id: "0",
        art: "XLIII.",
        Frac: "a69_f43",
        Det: "True",
        nom: "<a href=https://tinyurl.com/2cqju6sv target='_blank'>Ingresos</a>",
        vigente: "",
        Conserva: "2",
        incisoL: [
          "a)Ingresos recibidos",
          "b)Responsable de recibir, administrar y ejercer los ingresos",
        ],
        inciso: [
          ["a", "trim", "2"],
          ["b", "trim", "2"],
        ],
        año: "2024",
      },
      {
        id: "0",
        art: "XLIV.",
        Frac: "a69_f44",
        Det: "True",
        nom: "<a href=https://tinyurl.com/2apxjplk target='_blank'>Donaciones</a>",
        vigente: '<a href="../FraccionesT/a69_f442024.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
        Conserva: "2",
        incisoL: ["a)Donaciones en dinero", "b)Donaciones en especie"], 
        inciso: [
          ["a", "sem", "2"],
          ["b", "sem", "2"],
        ],
        año: "2024",
      },
      {
        id: "0",
        art: "XLV.",
        Frac: "a69_f45",
        Det: "True",
        nom: "<a href=https://tinyurl.com/27hedlhv target='_blank'>Catálogo y Guía de Archivos</a>",
        vigente:
          '<a href="../FraccionesT/a69_f452024.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
        Conserva: "2",
        incisoL: [
          //"a)Inventarios documentales",
          //"b)Índice de expedientes clasificados como reservados",
          //"c)Cuadro general de clasificación archivística",
        ],
        inciso: [
          //["a", "trim", "1"],
          //["b", "sem", "1"],
          //["c", "anualV", "0"],
        ],
        año: "2022",
      },
      {
        id: "0",
        art: "XLVI",
        Frac: "a69_f46",
        Det: "True",
        nom: "<a href=https://tinyurl.com/2ya5svrz target='_blank'>Sesiones de Consejos Consultivos</a>",
        vigente: "",
        Conserva: "2",
        incisoL: [
          "a)Actas del Consejo Consultivo",
          "b)Opiniones y recomendaciones del Consejo Consultivo",
        ],
        inciso: [
          ["a", "trim", "2"],
          ["b", "trim", "2"],
        ],
        año: "2024",
      },
      {
        id: "0",
        art: "XLVIII.",
        Frac: "a69_f48",
        Det: "True",
        nom: "<a href=https://tinyurl.com/2bvgtk76 target='_blank'>Información de Interés Público</a>",
        vigente: "",
        Conserva: "1",
        incisoL: [
          "a)Información de interés público",
          "b)Preguntas frecuentes",
          "c)Transparencia proactiva",
        ],
        inciso: [
          ["a", "trim", "2"],
          ["b", "trim", "2"],
          ["c", "trim", "2"],
        ],
        año: "2024",
      },
      {
        id: "0",
        art: "69UP.",
        Frac: "a69_fUP",
        Det: "False",
        nom: "<a href=https://tinyurl.com/29g3ds9a target='_blank'>Tablas de Aplicabilidad</a>",
        vigente:
          '<a href="../FraccionesT/a69_UP2024.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
        Conserva: "0",
        incisoL: "",
        inciso: "",
        año: "2024",
      },
      /********************************************************************************** */
      {
        id: "1",
        art: "73-IIIA.",
        Frac: "a73_f3",
        Det: "True",
        nom: "<a href=https://tinyurl.com/2yfcp6tw target='_blank'>Seguimiento de Observaciones y Resoluciones </a>",
        vigente: "",
        Conserva: "2",
        incisoL: [
          "a1)Relación de observaciones emitidas",
          "a2)Relación de resoluciones emitidas",
        ],
        inciso: [
          ["a1", "trim", "2"],
          ["a2", "trim", "2"],
        ],
        año: "2024",
      },
      {
        id: "1",
        art: "73-IIIB.",
        Frac: "a73_f3",
        Det: "True",
        nom: "<a href=https://tinyurl.com/29j9op2w target='_blank'>Criterios Orientadores</a>",
        vigente: "",
        Conserva: "1",
        incisoL: [
          "b1)Criterios orientadores derivados de las resoluciones emitidas",
          "b2)Criterios orientadores derivados de las resoluciones emitidas por el organismo garante nacional",
        ],
        inciso: [
          ["b1", "trim", "1"],
          ["b2", "trim", "1"],
        ],
        año: "2024",
      },
      {
        id: "1",
        art: "73-IIIC.",
        Frac: "a73_f3_c",
        Det: "True",
        nom: "<a href=https://tinyurl.com/22cvkglz target='_blank'>Actas del Pleno</a>",
        vigente: "",
        //"<a href='../FraccionesT/a73_f3_c2024.xlsx' target='_blank'><span class='badge bg-success'>XLS</span></a>",
        Conserva: "2",
        incisoL: [],
        inciso: [],
        año: "2024",
      },
      {
        id: "1",
        art: "73-IIID.",
        Frac: "a73_f3",
        Det: "True",
        nom: "<a href=https://tinyurl.com/2ayk22rq target='_blank'>Cumplimiento en Transparencia</a>",
        vigente: "",
        Conserva: "2",
        incisoL: [
          "d1)Resultados globales de la verificación al cumplimiento de las Obligaciones de Transparencia",
          "d2)Resultados de la verificación por sujeto obligado",
        ],
        inciso: [
          ["d1", "trim", "2"],
          ["d2", "trim", "2"],
        ],
        año: "2024",
      },
      {
        id: "1",
        art: "73-IIIE.",
        Frac: "a73_f3",
        Det: "True",
        nom: "<a href=https://tinyurl.com/2xp6ggh8 target='_blank'>Estudios para Resolucion de Recursos de Revisión</a>",
        vigente: "",
        Conserva: "2",
        incisoL: [
          "e1)Estudios que apoyan la resolución del recurso de revisión emitido",
          "e2)Estudios que apoyan la resolución del recurso de revisión por ejercicio de la facultad de atracción",
        ],
        inciso: [
          ["e1", "trim", "2"],
          ["e2", "trim", "2"],
        ],
        año: "2024",
      },
      {
        id: "1",
        art: "73-IIIF.",
        Frac: "a73_f3_f",
        Det: "True",
        nom: "<a href=https://tinyurl.com/28z8ctdw target='_blank'>Sentencias, Ejecutorias, Suspensiones</a>",
        vigente: "", //<a href='../FraccionesT/a73_f3_f2024.xlsx' target='_blank'><span class='badge bg-success'>XLS</span></a>",
        Conserva: "3",
        incisoL: [],
        inciso: [],
        año: "2024",
      },
      {
        id: "1",
        art: "73-IIIG.",
        Frac: "a73_f3_g",
        Det: "True",
        nom: "<a href=https://tinyurl.com/2d3u5pxc target='_blank'>Capacitación en Materia de Derechos Humanos</a>",
        vigente: "",
        //"<a href='../FraccionesT/a73_f3_g2024.xlsx' target='_blank'><span class='badge bg-success'>XLS</span></a>",
        Conserva: "2",
        incisoL: [
          //"g1)Quejas presentadas en contra",
          //"g2)Denuncias presentadas en contra",
          //"g3)Recursos de revisión presentados en contra",
          //"g4)Recursos de revisión por ejercicio de la facultad de atracción presentados en contra",
        ],
        inciso: [
          //["g", "trim", "2"],
          //["g2", "trim", "2"],
          //["g3", "trim", "2"],
          //["g4", "trim", "2"],
        ],
        año: "2024",
      },
      {
        id: "1",
        art: "79-I.",
        Frac: "a79_f1",
        Det: "True",
        nom: "<a href=https://tinyurl.com/28yqnqx4 target='_blank'>Información de Interés Público de Personas Físicas y Morales</a>",
        vigente:"",//<a href='../FraccionesT/a79_f1_a12024.xlsx' target='_blank'><span class='badge bg-success'>XLS</span></a>",
        Conserva: "6",
        incisoL: [
          "a1)Listados con información de interés público",
          //"a2)Información de interés público determinado por el organismo garante",
        ],
        inciso: [
          ["a1", "trim", "6"],
          //["a2", "sem", "5"],
        ],
        año: "2024",
      },
      {
        id: "1",
        art: "80.",
        Frac: "a80",
        Det: "True",
        nom: "<a href=https://tinyurl.com/27gxxnes target='_blank'> Padrón de Personas Físicas y Morales que cumplen Obligaciones</a>",
        vigente: " ",
        Conserva: "1",
        incisoL: ["a)Listados con información de interés público"],
        inciso: [["a", "anual", "2"]],
        año: "2023",
      },
      {
        id: "1",
        art: "81.",
        Frac: "a81",
        Det: "True",
        nom: "<a href=https://tinyurl.com/252c75vq target='_blank'>Información de personas físicas y morales</a>",
        vigente: "",
        Conserva: "2",
        incisoL: [
          "a)Listado de personas físicas o morales a las que se otorgó o permitió el uso de recursos públicos y/o realizan actos de autoridad ",
          "b)Padrón de Personas físicas y morales sujetas a obligaciones de transparencia y acceso a la información ",
        ],
        inciso: [
          ["a", "anual", "2"],
          ["b", "anual", "2"],
        ],
        año: "2024",
      },

      /* {
                          "id":"0",
                           "art":"I.",
                           "Frac":"a69_f1",
                           "Det":"False",
                                                      
                           "nom":"<a href=https://tinyurl.com/2xlta67v target='_blank'>Normatividad prueba 2024</a>",
                           "vigente":'<a href="../FraccionesT/a69_f12024.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
                           "Conserva":"0",
                           "incisoL":[],
                           "inciso":[],
                           "año":"2024"    
                       }, 
                          {
                          "id":"0",
                          "art":"II.",
                          "Frac":"a69_f2",
                          "Det":"True",
                           "nom":"<a href="+"https://tinyurl.com/2hyta2vo"+" target="+"'_blank'"+">Estructura Orgánica</a>",
                          "vigente":'',
                           "Conserva":"0",
                           "incisoL":["a)Estructura orgánica","b)Organigrama"],
                           "inciso":[["a","trim","2"],["b","trim","2"]],
                           "año":"2024"       
                       }, 
                         {
                           "id":"0",
                           "art":"III.",
                           "Frac":"a69_f3",
                           "Det":"False",
                           "nom":"<a href="+"https://tinyurl.com/2palatc7"+" target="+"'_blank'"+">Funciones de Cada Área</a>",
                           "vigente":'<a href="../FraccionesT/a69_f32023.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
                           "Conserva":"0",
                           "incisoL":[],
                           "inciso":[],
                           "año":"2023"       
                       }, 
                        {
                          "id":"0",
                           "art":"IV.",
                           "Frac":"a69_f4",
                           "Det":"True",
                           "nom":"<a href="+"https://tinyurl.com/2qqfah6e"+" target="+"'_blank'"+">Metas y Objetivos de las Áreas</a>",
                           "vigente":'<a href="../FraccionesT/a69_f42023.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
                           "Conserva":"6",
                           "incisoL":[],
                           "inciso":[],
                           "año":"2023"       
                       }, 
                        {
                          "id":"0",
                           "art":"V.",
                           "Frac":"a69_f5",
                           "Det":"True",
                           "nom":"<a href="+"https://tinyurl.com/2cvfttlv"+" target="+"'_blank'"+">Indicadores de Interés Público</a>",
                           "vigente":'<a href="../FraccionesT/a69_f52023.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
                           "Conserva":"6",
                           "incisoL":[],
                           "inciso":[],
                           "año":"2023"       
                       }, 
                        {
                          "id":"0",
                           "art":"VI.",
                           "Frac":"a69_f6",
                           "Det":"True",
                           "nom":"<a href="+"https://tinyurl.com/24zyacrw"+" target="+"'_blank'"+">Indicadores de Resultados</a>",
                          "vigente":'<a href="../FraccionesT/a69_f62023.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
                           "Conserva":"6",
                           "incisoL":[],
                           "inciso":[],
                           "año":"2023"       
                       }, 
                        {
                          "id":"0",
                           "art":"VII.",
                           "Frac":"a69_f7",
                           "Det":"False",
                           "nom":"<a href="+"https://tinyurl.com/2k4fue2t"+" target="+"'_blank'"+">Directorio</a>",
                           "vigente":'<a href="../FraccionesT/a69_f72023.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
                           "Conserva":"0",
                           "incisoL":[],
                          "inciso":[],
                           "año":"2023"       
                       }, 
                        {
                          "id":"0",
                           "art":"VIII.", 
                           "Frac":"a69_f8",
                           "Det":"True",
                           "nom":"<a href="+"https://tinyurl.com/2387cm2z"+" target="+"'_blank'"+">Sueldos</a>",
                           "vigente":'',
                           "Conserva":"0",
                           "incisoL":["a)Remuneración bruta y neta", "b)Tabulador de Sueldos y Salarios"],
                           "inciso":[["a","trim","2"],["b","trim","2"]],
                           "año":"2023"  
                       }, 
                        {
                          "id":"0",
                           "art":"IX.",
                           "Frac":"a69_f9",
                           "Det":"True",
                           "nom":"<a href="+"https://tinyurl.com/26lle9an"+" target="+"'_blank'"+">Gastos en Comisiones Oficiales</a>",
                           "vigente":'<a href="../FraccionesT/a69_f92023.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
                           "Conserva":"1",
                           "incisoL":[],
                           "inciso":[],
                           "año":"2023"       
                       }, 
                        {
                          "id":"0",
                           "art":"X.",
                           "Frac":"a69_f10",
                           "Det":"True",
                           "nom":"<a href="+"https://tinyurl.com/2jwhae4z"+" target="+"'_blank'"+">Puestos y Vacantes</a>",
                           "vigente":'',
                           "Conserva":"1",
                           "incisoL":["a)Plazas vacantes y ocupadas","b)Total Plazas vacantes y ocupadas"],
                           "inciso":[["a","trim","1"],["b","trim","1"]],
                           "año":"2023"       
                       }, 
                        {
                          "id":"0",
                           "art":"XI.",
                           "Frac":"a69_f11",
                           "Det":"True",
                           "nom":"<a href="+"https://tinyurl.com/23g7ov3k"+" target="+"'_blank'"+">Contratos por Honorarios</a>",
                           "vigente":'<a href="../FraccionesT/a69_f112023.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
                           "Conserva":"1",
                            "incisoL":[],
                            "inciso":[],
                           "año":"2023"       
                       }, 
                        {
                          "id":"0",
                           "art":"XII.",
                           "Frac":"a69_f12",
                           "Det":"True",
                           "nom":"<a href="+"https://tinyurl.com/2y4mua7u"+" target="+"'_blank'"+">Declaraciones Patrimoniales</a>",
                           "vigente":'<a href="../FraccionesT/a69_f122023.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
                           "Conserva":"1",
                            "incisoL":[],
                            "inciso":[],
                           "año":"2023"       
                       }, 
                        {
                          "id":"0",
                           "art":"XIII.",
                           "Frac":"a69_f13",
                           "Det":"False",
                           "nom":"<a href="+"https://tinyurl.com/2e5hm7ju"+" target="+"'_blank'"+">Unidad de Transparencia</a>",
                           "vigente":'<a href="../FraccionesT/a69_f132023.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
                           "Conserva":"0",
                            "incisoL":[],
                            "inciso":[],
                           "año":"2023"       
                       }, 
                        {
                          "id":"0",
                           "art":"XIV.",
                           "Frac":"a69_f14",
                           "Det":"False",
                           "nom":"<a href="+"https://tinyurl.com/2c7slqoz"+" target="+"'_blank'"+">Concursos para ocupar cargos públicos</a>",
                           "vigente":'<a href="../FraccionesT/a69_f142023.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
                           "Conserva":"0",
                            "incisoL":[],
                           "inciso":[],
                           "año":"2023"       
                       }, 
                       
                        {
                          "id":"0",
                           "art":"XVI.",
                           "Frac":"a69_f16",
                           "Det":"True",
                           "nom":"<a href="+"https://tinyurl.com/22oxvjxs"+" target="+"'_blank'"+">Condiciones Generales de Trabajo y Sindicatos</a>",
                           "vigente":'',
                           "Conserva":"0",
                            "incisoL":["a)Condiciones generales de trabajo y sindicatos_Normatividad laboral","b)Recursos públicos entregados a sindicatos"],
                            "inciso":[["a","trim","3"],["b","trim","3"]],
                           "año":"2023"       
                       }, 
                        {
                          "id":"0",
                           "art":"XVII.",
                           "Frac":"a69_f17",
                           "Det":"False",
                           "nom":"<a href="+"https://tinyurl.com/28zgurfo"+" target="+"'_blank'"+">Currícula de Funcionarios</a>",
                            "vigente":'<a href="../FraccionesT/a69_f172023.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
                           "Conserva":"0",
                            "incisoL":[],
                            "inciso":[],
                           "año":"2023"       
                       }, 
                        {
                          "id":"0",
                           "art":"XVIII.",
                           "Frac":"a69_f18",
                           "Det":"True",
                           "nom":"<a href="+"https://tinyurl.com/22uqlljh"+" target="+"'_blank'"+">Servidores Públicos Sancionados</a>",
                            "vigente":'<a href="../FraccionesT/a69_f182023.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
                           "Conserva":"2",
                            "incisoL":[],
                             "inciso":[],
                           "año":"2023"       
                       }, 
                        {
                          "id":"0",
                           "art":"XIX.",
                           "Frac":"a69_f19",
                           "Det":"False",
                           "nom":"<a href="+"https://tinyurl.com/2fjg6h8y"+" target="+"'_blank'"+">Servicios Púbicos</a>",
                           "vigente":'<a href="../FraccionesT/a69_f192023.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
                           "Conserva":"0",
                            "incisoL":[],
                             "inciso":[],
                           "año":"2023"       
                       }, 
                        {
                          "id":"0",
                           "art":"XX.",
                           "Frac":"a69_f20",
                           "Det":"False",
                           "nom":"<a href="+"https://tinyurl.com/2kynqj7z"+" target="+"'_blank'"+">Trámites, Requisitos y Formatos</a>",
                            "vigente":'<a href="../FraccionesT/a69_f202023.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
                           "Conserva":"0",
                            "incisoL":[],
                           "inciso":[],
                           "año":"2023"       
                       }, 
                        {
                          "id":"0",
                           "art":"XXI.",
                           "Frac":"a69_f21",
                           "Det":"True",
                           "nom":"<a href="+"https://tinyurl.com/2ql5skug"+" target="+"'_blank'"+">Presupuesto del Gasto Público</a>",
                             "vigente":'',
                           "Conserva":"0",
                            "incisoL":["a)Presupuesto asignado anual","b)Ejercicio de los egresos presupuestarios","c)Cuenta pública"],
                            "inciso":[["a","anualv","7"],["b","trim","7"],["c","anualv","7"]],
                           "año":"2023"       
                       }, 
                        {
                          "id":"0",
                           "art":"XXII.",
                           "Frac":"a69_f22",
                           "Det":"True",
                           "nom":"<a href="+"https://tinyurl.com/yllguek7"+" target="+"'_blank'"+">Deuda Pública</a>",
                           "vigente":'<a href="../FraccionesT/a69_f222023.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
                           "Conserva":"6",
                            "incisoL":[],
                            "inciso":[],
                           "año":"2023"       
                       }, 
                        {
                          "id":"0",
                           "art":"XXIII.",
                           "Frac":"a69_f23",
                           "Det":"True",
                           "nom":"<a href="+"https://tinyurl.com/ypm2eevl"+" target="+"'_blank'"+">Gastos de Publicidad Oficial</a>",
                           "vigente":'',
                           "Conserva":"3",
                           "incisoL":["a)Programa Anual de Comunicación Social o equivalente","b)Contratación de servicios de publicidad oficial","c)Utilización de los tiempos oficiales en radio y tv","d)Hipervínculo a información de tiempos oficiales en radio y televisión"],
                            "inciso":[["a","trim","3"],["b","trim","3"],["c","trim","3"],["d","trim","1"]],
                           "año":"2023"       
                       }, 
                        {
                          "id":"0",
                           "art":"XXIV.",
                           "Frac":"a69_f24",
                           "Det":"True",
                           "nom":"<a href="+"https://tinyurl.com/ylvue5cg"+" target="+"'_blank'"+">Resultados de Auditorías</a>",
                           "vigente":'<a href="../FraccionesT/a69_f242023.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
                           "Conserva":"3",
                           "inciso":[],
                           "año":"2023"       
                       }, 
                        {
                          "id":"0",
                           "art":"XXV.",
                           "Frac":"a69_f25",
                           "Det":"True",
                           "nom":"<a href="+"https://tinyurl.com/2du34let"+" target="+"'_blank'"+">Dictámenes Financieros</a>",
                           "vigente":'<a href="../FraccionesT/a69_f252023.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
                           "Conserva":"6",
                           "incisoL":[],
                           "inciso":[],
                           "año":"2023"       
                       }, 
                        {
                          "id":"0",
                           "art":"XXVI.",
                           "Frac":"a69_f26",
                           "Det":"True",
                           "nom":"<a href="+"https://tinyurl.com/ymey6cqg"+" target="+"'_blank'"+">Personas Físicas y Morales que usan Recursos Públicos</a>",
                           "vigente":'<a href="../FraccionesT/a69_f262023.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
                           "Conserva":"2",
                           "incisoL":[],
                           "inciso":[],
                           "año":"2023"       
                       }, 
                        {
                          "id":"0",
                           "art":"XXVII.",
                           "Frac":"a69_f27",
                           "Det":"True",
                           "nom":"<a href="+"https://tinyurl.com/ynoejxuj"+" target="+"'_blank'"+">Concesiones, Licencias, Permisos y Autorizaciones</a>",
                           "vigente":'<a href="../FraccionesT/a69_f272023.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
                           "Conserva":"2",
                           "incisoL":[],
                           "inciso":[],
                           "año":"2023"       
                       }, 
                        {
                          "id":"0",
                           "art":"XXVIII",
                           "Frac":"a69_f28",
                           "Det":"True",
                           "nom":"<a href="+"https://tinyurl.com/22uybe59"+" target="+"'_blank'"+">Contratos de Obras, Bienes y Servicios</a>",
                           "vigente":'',
                           "Conserva":"3",
                            "incisoL":["a)Procedimientos de licitación pública e invitación a cuando menos tres personas","b)Procedimientos de adjudicación directa"],
                           "inciso":[["a","trim","3"],["b","trim","3"]],
                           "año":"2023"       
                       }, 
                        {
                          "id":"0",
                           "art":"XXIX.",
                           "Frac":"a69_f29",
                           "Det":"True",
                           "nom":"<a href="+"https://tinyurl.com/2awhfhnm"+" target="+"'_blank'"+">Informes</a>",
                            "vigente":'<a href="../FraccionesT/a69_f292023.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
                           "Conserva":"2",
                            "incisoL":[],
                           "inciso":[],
                           "año":"2023"       
                       }, 
                        {
                          "id":"0",
                           "art":"XXX.",
                           "Frac":"a69_f30",
                           "Det":"True",
                           "nom":"<a href="+"https://tinyurl.com/2622l9yv"+" target="+"'_blank'"+">Estadísticas</a>",
                          "vigente":'<a href="../FraccionesT/a69_f302023.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
                           "Conserva":"6",
                             "incisoL":[],
                            "inciso":[],
                           "año":"2023"       
                       }, 
                        {
                          "id":"0",
                           "art":"XXXI.",
                           "Frac":"a69_f31",
                           "Det":"True",
                           "nom":"<a href="+"https://tinyurl.com/26smdtt9"+" target="+"'_blank'"+">Información Financiera</a>",
                            "vigente":'',
                           "Conserva":"4",
                            "incisoL":["a)Gasto por Capítulo, Concepto y Partida","b)Informes financieros contables, presupuestales y programáticos", ""],
                            "inciso":[["a","trim","6"],["b","trim","6"],["","unico","1"]],
                           "año":"2023"       
                       }, 
                        {
                          "id":"0",
                           "art":"XXXII.",
                           "Frac":"a69_f32",
                           "Det":"True",
                           "nom":"<a href="+"https://tinyurl.com/2damncz6"+" target="+"'_blank'"+">Padrón de Proveedores y Contratistas</a>",
                            "vigente":'<a href="../FraccionesT/a69_f322023.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
                           "Conserva":"1",
                            "incisoL":[],
                            "inciso":[],
                           "año":"2023"       
                       }, 
                        {
                          "id":"0",
                           "art":"XXXIII.",
                           "Frac":"a69_f33",
                           "Det":"True",
                           "nom":"<a href="+"https://tinyurl.com/23v2ydmx"+" target="+"'_blank'"+">Convenios de Coordinación</a>",
                            "vigente":'<a href="../FraccionesT/a69_f332023.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
                           "Conserva":"1",
                           "incisoL":[],
                            "inciso":[],
                           "año":"2023"       
                       }, 
                       {
                          "id":"0",
                           "art":"XXXIV.",
                           "Frac":"a69_f34",
                           "Det":"True",
                           "nom":"<a href="+"https://tinyurl.com/2fag7axo"+" target="+"'_blank'"+">Inventario de Bienes</a>",
                            "vigente":'',
                           "Conserva":"1",
                            "incisoL":["a)Inventario bienes muebles","b)Inventario de altas practicadas a bienes muebles","c)Inventario de bajas practicadas a bienes muebles","d)Inventario de bienes inmuebles","e)Inventario de altas practicadas a bienes inmuebles","f)Inventario de bajas practicadas a bienes inmuebles","g)Inventario de bienes muebles e inmuebles donados"],
                            "inciso":[["a","sem","1"],["b","sem","1"],["c","sem","1"],["d","sem","1"],["e","sem","1"],["f","sem","1"],["g","sem","1"]],
                           "año":"2023"       
                       },
                       {
                          "id":"0",
                           "art":"XXXV.",
                           "Frac":"a69_f35",
                           "Det":"True",
                           "nom":"<a href="+"https://tinyurl.com/2c3vf4v8"+" target="+"'_blank'"+">Recomendaciones de Derechos Humanos</a>",
                           "vigente":'',
                           "Conserva":"3",
                           "incisoL":["a)Recomendaciones emitidas por la Comisión Nacional de Derechos Humanos","b)Casos especiales emitidos por la CNDH","c)Recomendaciones emitidas por organismos internacionales"],
                           "inciso":[["a","trim","3"],["b","trim","3"],["c","trim","3"]],
                           "año":"2023"       
                       },
                       {
                          "id":"0",
                           "art":"XXXVI.",
                           "Frac":"a69_f36",
                           "Det":"True",
                           "nom":"<a href="+"https://tinyurl.com/26uv4f7b"+" target="+"'_blank'"+">Solución de Procesos en Juicio</a>",
                           "vigente":'<a href="../FraccionesT/a69_f362023.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
                           "Conserva":"1",
                            "incisoL":[],
                            "inciso":[],
                           "año":"2023"       
                       },
                       {
                          "id":"0",
                           "art":"XXXVII.",
                           "Frac":"a69_f37",
                           "Det":"True",
                           "nom":"<a href="+"https://tinyurl.com/2d7f5dzy"+" target="+"'_blank'"+">Participación Ciudadana</a>",
                          "vigente":'',
                           "Conserva":"2",
                            "incisoL":["a)Mecanismos de participación Ciudadana","b)Resultados de mecanismos"],
                            "inciso":[["a","trim","2"],["b","trim","2"]],
                           "año":"2023"       
                       },
                        {
                          "id":"0",
                           "art":"XXXIX.",
                           "Frac":"a69_f39",
                           "Det":"True",
                           "nom":"<a href="+"https://tinyurl.com/237kr3cx"+" target="+"'_blank'"+">Comité de Transparencia</a>",
                            "vigente":'',
                           "Conserva":"1",
                            "incisoL":["a)Informe de sesiones del Cómite de Transparencia","b)Informe de resoluciones del Cómite de Transparencia","c)Integrantes del Cómite de Transparencia","d)Calendario de sesiones ordinarias del Cómite"],
                           "inciso":[["a","sem","2"],["b","sem","2"],["c","trim","1"],["d","trim","2"]],
                           "año":"2023"       
                       }, 
                        {
                          "id":"0",
                           "art":"XLI.",
                           "Frac":"a69_f41",
                           "Det":"True",
                           "nom":"<a href="+"https://tinyurl.com/2dgrkpel"+" target="+"'_blank'"+">Estudios Financiados con Recursos Públicos</a>",
                           "vigente":'<a href="../FraccionesT/a69_f412023.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
                           "Conserva":"2",
                            "incisoL":[],
                            "inciso":[],
                           "año":"2023"       
                       }, 
                        {
                          "id":"0",
                           "art":"XLIII.",
                           "Frac":"a69_f43",
                           "Det":"True",
                           "nom":"<a href="+"https://tinyurl.com/24r8epce"+" target="+"'_blank'"+">Ingresos</a>",
                           "vigente":'',
                           "Conserva":"3",
                            "incisoL":["a)Ingresos recibidos","b)Responsable de recibir, administrar y ejercer los ingresos"],
                           "inciso":[["a","trim","3"],["b","trim","3"]],
                           "año":"2023"       
                       }, 
                        {
                          "id":"0",
                           "art":"XLIV.",
                           "Frac":"a69_f44",
                           "Det":"True",
                           "nom":"<a href="+"https://tinyurl.com/252uugd8"+" target="+"'_blank'"+">Donaciones</a>",
                           "vigente":'',
                           "Conserva":"2",
                            "incisoL":["a)Donaciones en dinero","b)Donaciones en especie"],
                            "inciso":[["a","sem","2"],["b","sem","2"]],
                           "año":"2023"       
                       }, 
                        {
                          "id":"0",
                           "art":"XLV.",
                           "Frac":"a69_f45",
                           "Det":"True",
                           "nom":"<a href="+"https://tinyurl.com/2o752z4m"+" target="+"'_blank'"+">Catálogo y Guía de Archivos</a>",
                            "vigente":'<a href="../FraccionesT/a69_f452022.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
                           "Conserva":"1",
                            "incisoL":[],
                            "inciso":[],
                           "año":"2022"       
                       }, 
                        {
                          "id":"0",
                           "art":"XLVI",
                           "Frac":"a69_f46",
                           "Det":"True",
                           "nom":"<a href="+"https://tinyurl.com/264k2yof"+" target="+"'_blank'"+">Sesiones de Consejos Consultivos</a>",
                           "vigente":'',
                           "Conserva":"2",
                            "incisoL":["a)Actas del Consejo Consultivo","b)Opiniones y recomendaciones del Consejo Consultivo"],
                            "inciso":[["a","trim","2"],["b","trim","2"]],
                           "año":"2023"       
                       }, 
                        {
                          "id":"0",
                           "art":"XLVIII.",
                           "Frac":"a69_f48",
                           "Det":"True",
                           "nom":"<a href="+"https://tinyurl.com/2qkckde9"+" target="+"'_blank'"+">Información de Interés Público</a>",
                           "vigente":'',
                           "Conserva":"1",
                            "incisoL":["a)Información de interés público","b)Preguntas frecuentes","c)Transparencia proactiva"],
                            "inciso":[["a","trim","1"],["b","trim","1"],["c","trim","1"]],
                           "año":"2023"       
                       }, 
                        {
                          "id":"0",
                           "art":"69UP.",
                           "Frac":"a69_fUP",
                           "Det":"False",
                           "nom":"<a href="+"https://tinyurl.com/2oh5hte8"+" target="+"'_blank'"+">Tablas de Aplicabilidad</a>",
                          "vigente":'<a href="../FraccionesT/a69_UP2023.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
                           "Conserva":"0",
                            "incisoL":[],
                            "inciso":[],
                           "año":"2023"     
                       },

/************************************************************************************
                       {
                          "id":"1",
                           "art":"73-IIIA.",
                           "Frac":"a73_f3",
                           "Det":"True",
                           "nom":"<a href="+"https://tinyurl.com/2b838wph"+" target="+"'_blank'"+">Seguimiento de Observaciones y Resoluciones </a>",
                          "vigente":'',
                           "Conserva":"2",
                            "incisoL":["a1)Relación de observaciones emitidas por organismos garantes de transparencia","a2)Relación de resoluciones emitidas por organismos garantes de transparencia"],
                            "inciso":[["a1","trim","2"],["a2","trim","2"]],
                           "año":"2023"     
                       },  
                       {
                          "id":"1",
                           "art":"73-IIIB.",
                           "Frac":"a73_f3",
                           "Det":"True",
                           "nom":"<a href="+"https://tinyurl.com/2opstqb3"+" target="+"'_blank'"+">Criterios Orientadores</a>",
                          "vigente":'',
                           "Conserva":"1",
                            "incisoL":["b1)Derivados de las resoluciones emitidas por organismos garantes de la transparencia","b2)De las resoluciones emitidas por el INAI"],
                            "inciso":[["b1","trim","1"],["b2","trim","1"]], 
                           "año":"2023"     
                       },  
                       {
                          "id":"1",
                           "art":"73-IIIC.",
                           "Frac":"a73_f3_c",
                           "Det":"True",
                           "nom":"<a href="+"https://tinyurl.com/22jfrm3g"+" target="+"'_blank'"+">Actas del Pleno</a>",
                          "vigente":'<a href="../FraccionesT/a73_f3_c2023.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
                           "Conserva":"1",
                            "incisoL":[],
                            "inciso":[],
                           "año":"2023"     
                       },  
                   
                       {
                          "id":"1",
                           "art":"73-IIID.",
                           "Frac":"a73_f3",
                           "Det":"True",
                           "nom":"<a href="+"https://tinyurl.com/ys49ap2j"+" target="+"'_blank'"+">Cumplimiento en Transparencia</a>",
                          "vigente":'',
                           "Conserva":"2",
                            "incisoL":["d1)Resultados globales del cumplimiento de las obligaciones de transparencia","d2)Resultados del cumplimiento de las obligaciones por sujeto obligado"],
                            "inciso":[["d1","trim","2"],["d2","trim","2"]],
                           "año":"2023"     
                       },  
                       {
                          "id":"1",
                           "art":"73-IIIE.",
                           "Frac":"a73_f3",
                           "Det":"True",
                           "nom":"<a href="+"https://tinyurl.com/2dystgd4"+" target="+"'_blank'"+">Estudios para Resolucion de Recursos de Revisión</a>",
                          "vigente":'',
                           "Conserva":"1",
                            "incisoL":["e1)Estudios que apoyan la resolución del recurso de revisión","e2)Estudios que apoyan resolución de recurso de revisión por facultad de atracción"],
                            "inciso":[["e1","trim","1"],["e2","trim","1"]],
                           "año":"2023"     
                       },  
                       {
                          "id":"1",
                           "art":"73-IIIF.",
                           "Frac":"a73_f3_f",
                           "Det":"True",
                           "nom":"<a href="+"https://tinyurl.com/2y8t8pr6"+" target="+"'_blank'"+">Sentencias, Ejecutorias, Suspensiones</a>",
                          "vigente":'<a href="../FraccionesT/a73_f3_f2023.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
                           "Conserva":"1",
                            "incisoL":[],
                            "inciso":[],
                           "año":"2023"     
                       },  
                       {
                          "id":"1",
                           "art":"73-IIIG.",
                           "Frac":"a73_f3_g",
                           "Det":"False",
                           "nom":"<a href="+"https://tinyurl.com/2kcxrdll"+" target="+"'_blank'"+">Capacitación en Materia de Derechos Humanos</a>",
                          "vigente":'<a href="../FraccionesT/a73_f3_g2023.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
                           "Conserva":"0",
                            "incisoL":[],
                            "inciso":[],
                           "año":"2023"     
                       },  
                       {
                          "id":"1",
                           "art":"73-IIIH.",
                           "Frac":"a73_f3",
                           "Det":"True",
                           "nom":"<a href="+"https://tinyurl.com/2bcva8xx"+" target="+"'_blank'"+">Quejas, Denuncias, Recursos Revisión</a>",
                           "vigente":'',
                           "Conserva":"2",
                            "incisoL":["h1)Quejas presentadas en contra de sujetos obligados","h2)Denuncias presentadas en contra de sujetos obligados","h3)Recursos de revisión presentados en contra de sujetos obligados","h4)Recursos de revisión por facultad de atracción"],
                            "inciso":[["h1","trim","2"],["h2","trim","2"],["h3","trim","2"],["h4","trim","2"]],
                           "año":"2023"     
                       },  
                       {
                          "id":"1",
                           "art":"73-IIIi.",
                           "Frac":"a73_f3",
                           "Det":"False",
                           "nom":"<a href="+"https://tinyurl.com/2m3oc6hu"+" target="+"'_blank'"+">Acuerdos y Lineamientos</a>",
                          "vigente":'<a href="../FraccionesT/a73_f3_i2023.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
                           "Conserva":"0",
                            "incisoL":[],
                            "inciso":[],
                           "año":"2023"     
                       },  
                       {
                          "id":"1",
                           "art":"73-IIIJ.",
                           "Frac":"a73_f3_j",
                           "Det":"True",
                           "nom":"<a href="+"https://tinyurl.com/2hj7jwpr"+" target="+"'_blank'"+">Criterios de Resultados y Evaluación de Desempeño</a>",
                          "vigente":'<a href="../FraccionesT/a73_f3_j2023.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a>',
                           "Conserva":"1",
                            "incisoL":[],
                            "inciso":[],
                           "año":"2023"     
                       },  
                       {
                          "id":"1",
                           "art":"79-I.",
                           "Frac":"a79_f1",
                           "Det":"True",
                           "nom":"<a href="+"https://tinyurl.com/2pb2549q"+" target="+"'_blank'"+">Información de Interés Público de Personas Físicas y Morales</a>",
                          "vigente":'',
                           "Conserva":"5",
                            "incisoL":["a1)Listados con información de interés público","a2)Información de interés público determinado por el organismo garante"],
                            "inciso":[["a1","anual","1"],["a2","sem","1"]],
                           "año":"2023"     
                       },  
                       {
                          "id":"1",
                           "art":"80.",
                           "Frac":"a80",
                           "Det":"True",
                           "nom":"<a href="+"https://tinyurl.com/2py5x6qj"+" target="+"'_blank'"+"> Padrón de Personas Físicas y Morales que cumplen Obligaciones</a>",
                          "vigente":'',
                           "Conserva":"2",
                            "incisoL":["a)Listado de personas físicas o morales a las que se otorgó o permitió el uso de recursos públicos y/o realizan actos de autoridad 2018-2020. Listado de sujetos obligados que el organismo garante determinó  que entregaron recursos públicos a personas físicas y/o morales","b)Padrón de Personas físicas y morales sujetas a obligaciones de transparencia y acceso a la información aprobadas"],
                            "inciso":[["a","anual","2"],["b","anual","2"]],
                           "año":"2023"     
                       },  
                        {
                          "id":"1",
                           "art":"81.",
                           "Frac":"a81",
                           "Det":"True",
                           "nom":"<a href="+"https://tinyurl.com/2kclgevw"+" target="+"'_blank'"+">Información de personas físicas y morales</a>",
                          "vigente":'',
                           "Conserva":"2",
                            "incisoL":["a)Listados de información que deben hacer pública las personas físicas o morales. 2018 - 2020. Información que publicarán personas físicas o morales determinada por el Pleno del organismo garante.","b) Listados de información pública recibidos por los Organismos garantes. 2018 - 2020. Listados de información de las personas físicas y morales y/o sujetos obligados."],
                            "inciso":[["a","anual","2"],["b","anual","2"]],
                           "año":"2023"     
                       }  
                       

*/
    ];

    /*  se envia a la tabla (tableArt69) el contenido de la variable tipo json (jsondata) filtrando las fracciones para el articulo 69, que son todas
                   las que tienen el id=0    */
    var data_filter = jsondata.filter((element) => element.id == "0");
    $("#tableArt69").bootstrapTable({
      //Assigning data to table
      data: data_filter,
    });
    /*  se envia a la tabla (tableArt69) el contenido de la variable tipo json (jsondata) filtrando las fracciones especificas, que son todas
                   las que tienen el id=1    */
    var data_espec = jsondata.filter((element) => element.id == "1");
    $("#tableEspec").bootstrapTable({
      //Assigning data to table
      data: data_espec,
    });
  })
  .on("shown.bs.tab");

function detailFilter(index, row) {
  var plus = 0;
  $.each(row, function (key, value) {
    if (value === "True") {
      plus = 1;
    }
  });
  return plus;
}

function detailFormatter(index, row) {
  var html = [];

  var año = row.año;
  var Det = row.Det;
  var con = row.Conserva;
  var frac = row.Frac;
  var inciso = row.inciso;
  var incisoL = row.incisoL;
  var fecha = new Date();
  const mesActual = fecha.getMonth() + 1;

  $.each(row, function (key, value) {
    if (value === "True") {
      console.log(inciso);
      if (inciso.length > 0) {
        html.push('<div class="container"> <div class="row"> ');
        t = 1;

        while (t <= inciso.length) {
          i = 1;
          html.push(
            '<div class="col-lg-5 col-md-5 col-sm-6"><ul class="list-group-flush ">' +
              incisoL[t - 1]
          );
          console.log(inciso[t - 1][1]);
          if (
            (inciso[t - 1][1] == "sem" || inciso[t - 1][1] == "anual") &&
            mesActual > 7
          ) {
            vaño = año - 1;
          } else {
            vaño = año;
            console.log(vaño);
          }
          if (inciso[t - 1][1] == "trim" || inciso[t - 1][1] == "anualv") {
            vaño = año;
          }
          if (inciso[t - 1][1] == "unico") {
            vaño = 2017;
          }

          while (i <= inciso[t - 1][2]) {
            console.log(inciso[t - 1][2]);
            html.push(
              '<li class="list-group-item d-flex justify-content-between align-items-center">' +
                vaño +
                '<a href="../FraccionesT/' +
                frac +
                "_" +
                inciso[t - 1][0] +
                vaño +
                '.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a></li>'
            );
            i++;
            vaño--;
          }

          t++;
          html.push("</ul></div>");
        }
        html.push("</div></div>");
      } /*if inciso>0*/ else {
        html.push(
          '<div class="container"><div class="row d-flex justify-content-center"><div class="col-lg-4"><ul class="list-group list-group-horizontal">  '
        );

        vaño = año;
        i = 1;
        t = 1;
        //vaño = año; //-1 se le colaca el -1 para realizar vigencia ejercicio en curso y hsatorial en anios  vaño

        while (i <= con) {
          //  anios.push(vaño);
          html.push(
            '<li class="list-group-item ">' +
              vaño +
              '  <a href="../FraccionesT/' +
              frac +
              vaño +
              '.xlsx" target="_blank"><span class="badge bg-success">XLS</span></a></li> '
          );
          i++;
          vaño--;
        }

        html.push("</ul></div></div></div>");
      }
    }
  });

  return html.join("");
}
