$(document).ready(function () {
    //Sample Json data
    var jsondata =

      [{
        "_id": {
          "$oid": "67326acbe48ca43b0e04d7f5"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.001_2024.PDF target=_blank>RRAI 001/2024</a>",
        "Sujeto": "INSTITUTO DE TRANSPARENCIA, ACCESO A LA INFORMACIÓN PÚBLICA GUBERNAMENTAL Y PROTECCIÓN DE DATOS PERSONALES DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "28/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d7f6"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.002_2024.PDF target=_blank>RRAI 002/2024</a>",
        "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "28/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d7f7"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.003_2024.PDF target=_blank>RRAI 003/2024</a>",
        "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "MODIFICA",
        "Fecha": "14/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d7f8"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.004_2024.PDF target=_blank>RRAI 004/2024</a>",
        "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "28/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d7f9"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.005_2024.PDF target=_blank>RRAI 005/2024</a>",
        "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "CONFIRMA",
        "Fecha": "31/01/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d7fa"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.006_2024.PDF target=_blank>RRAI 006/2024</a>",
        "Sujeto": "AYUNTAMIENTO TEPEAPULCO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "MODIFICA",
        "Fecha": "28/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d7fb"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.007_2024.PDF target=_blank>RRAI 007/2024</a>",
        "Sujeto": "AYUNTAMIENTO ACAXOCHITLÁN",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "28/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d7fc"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.008_2024.PDF target=_blank>RRAI 008/2023</a>",
        "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "MODIFICA",
        "Fecha": "14/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d7fd"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.009_2024.PDF target=_blank>RRAI 009/2024</a>",
        "Sujeto": "COMISION DE DERECHOS HUMANOS DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "28/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d7fe"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.010_2024.PDF target=_blank>RRAI 010/2024</a>",
        "Sujeto": "AYUNTAMIENTO TEPEAPULCO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "14/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d7ff"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.011_2024.PDF target=_blank>RRAI 011/2024</a>",
        "Sujeto": "AYUNTAMIENTO SAN SALVADOR",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "MODIFICA",
        "Fecha": "28/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d800"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.012_2024.PDF target=_blank>RRAI 012/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "28/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d801"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.013_2024.PDF target=_blank>RRAI 013/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "REVOCA",
        "Fecha": "14/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d802"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.014_2024.PDF target=_blank>RRAI 014/2024</a>",
        "Sujeto": "AUDITORIA SUPERIOR DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "28/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d803"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.015_2024.PDF target=_blank>RRAI 015/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "14/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d804"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.016_2024.PDF target=_blank>RRAI 016/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "28/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d805"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.017_2024.PDF target=_blank>RRAI 017/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "28/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d806"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.018_2024.PDF target=_blank>RRAI 018/2024</a>",
        "Sujeto": "AYUNTAMIENTO PACHUCA DE SOTO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "MODIFICA",
        "Fecha": "14/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d807"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.019_2024.PDF target=_blank>RRAI 019/2024</a>",
        "Sujeto": "AYUNTAMIENTO SAN AGUSTIN METZQUITITLAN",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "28/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d808"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.020_2024.PDF target=_blank>RRAI 020/2024</a>",
        "Sujeto": "AYUNTAMIENTO TENANGO DE DORIA",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "14/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d809"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.021_2024.PDF target=_blank>RRAI 021/2024</a>",
        "Sujeto": "AYUNTAMIENTO ACAXOCHITLÁN",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "28/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d80a"
        },
        "num": "RRAI 022/2024",
        "Sujeto": "AYUNTAMIENTO ACAXOCHITLÁN",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d80b"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.023_2024.PDF target=_blank>RRAI 023/2024</a>",
        "Sujeto": "AYUNTAMIENTO ACAXOCHITLÁN",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "14/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d80c"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.024_2024.PDF target=_blank>RRAI 024/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "28/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d80d"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.025_2024.PDF target=_blank>RRAI 025/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "31/01/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d80e"
        },
        "num": "RRAI 026/2024",
        "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d80f"
        },
        "num": "RRAI 027/2024",
        "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d810"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.028_2024.PDF target=_blank>RRAI 028/2024</a>",
        "Sujeto": "AYUNTAMIENTO PACHUCA DE SOTO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "14/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d811"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.029_2024.PDF target=_blank>RRAI 029/2024</a>",
        "Sujeto": "AYUNTAMIENTO HUAZALINGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "28/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d812"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.030_2024.PDF target=_blank>RRAI 030/2024</a>",
        "Sujeto": "AYUNTAMIENTO APAN",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "28/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d813"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.031_2024.PDF target=_blank>RRAI 031/2024</a>",
        "Sujeto": "AYUNTAMIENTO EMILIANO ZAPATA",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "28/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d814"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.032_2024.PDF target=_blank>RRAI 032/2024</a>",
        "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "28/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d815"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.033_2024.PDF target=_blank>RRAI 033/2024</a>",
        "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "MODIFICA",
        "Fecha": "14/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d816"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.034_2024.PDF target=_blank>RRAI 034/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "28/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d817"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.035_2024.PDF target=_blank>RRAI 035/2023</a>",
        "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "DESECHA",
        "Fecha": "31/01/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d818"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.036_2024.PDF target=_blank>RRAI 036/2024</a>",
        "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "MODIFICA",
        "Fecha": "28/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d819"
        },
        "num": "RRAI 037/2024",
        "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d81a"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.038_2024.PDF target=_blank>RRAI 038/2024</a>",
        "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "14/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d81b"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.039_2024.PDF target=_blank>RRAI 039/2024</a>",
        "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "28/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d81c"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.040_2024.PDF target=_blank>RRAI 040/2024</a>",
        "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "14/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d81d"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.041_2024.PDF target=_blank>RRAI 041/2024</a>",
        "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "28/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d81e"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.042_2024.PDF target=_blank>RRAI 042/2024</a>",
        "Sujeto": "AYUNTAMIENTO TENANGO DE DORIA",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "28/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d81f"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.043_2024.PDF target=_blank>RRAI 043/2024</a>",
        "Sujeto": "AYUNTAMIENTO CALNALI",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "MODIFICA",
        "Fecha": "28/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d820"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.044_2024.PDF target=_blank>RRAI 044/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "28/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d821"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.045_2024.PDF target=_blank>RRAI 045/2024</a>",
        "Sujeto": "AYUNTAMIENTO EMILIANO ZAPATA",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "MODIFICA",
        "Fecha": "14/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d822"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.046_2024.PDF target=_blank>RRAI 046/2024</a>",
        "Sujeto": "INSTITUTO DE TRANSPARENCIA, ACCESO A LA INFORMACIÓN PÚBLICA GUBERNAMENTAL Y PROTECCIÓN DE DATOS PERSONALES DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "28/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d823"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.047_2024.PDF target=_blank>RRAI 047/2024</a>",
        "Sujeto": "AYUNTAMIENTO AJACUBA",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "28/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d824"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.048_2024.PDF target=_blank>RRAI 048/2024</a>",
        "Sujeto": "AYUNTAMIENTO HUASCA DE OCAMPO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "MODIFICA",
        "Fecha": "28/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d825"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.049_2024.PDF target=_blank>RRAI 049/2024</a>",
        "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "28/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d826"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.050_2024.PDF target=_blank>RRAI 050/2024</a>",
        "Sujeto": "AYUNTAMIENTO TETEPANGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "14/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d827"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.051_2024.PDF target=_blank>RRAI 051/2024</a>",
        "Sujeto": "PODER LEGISLATIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "REVOCA",
        "Fecha": "25/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d828"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.052_2024.PDF target=_blank>RRAI 052/2024</a>",
        "Sujeto": "AYUNTAMIENTO ATLAPEXCO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "28/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d829"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.053_2024.PDF target=_blank>RRAI 053/2024</a>",
        "Sujeto": "AYUNTAMIENTO EL CARDONAL",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "28/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d82a"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.054_2024.PDF target=_blank>RRAI 054/2024</a>",
        "Sujeto": "AYUNTAMIENTO CHILCUAUTLA",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "MODIFICA",
        "Fecha": "13/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d82b"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.055_2024.PDF target=_blank>RRAI 055/2024</a>",
        "Sujeto": "AYUNTAMIENTO SANTIAGO DE ANAYA",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "REVOCA",
        "Fecha": "14/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d82c"
        },
        "num": "RRAI 056/2024",
        "Sujeto": "AYUNTAMIENTO NOPALA DE VILLAGRÁN",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d82d"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.057_2024.PDF target=_blank>RRAI 057/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "28/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d82e"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.058_2024.PDF target=_blank>RRAI 058/2024</a>",
        "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "MODIFICA",
        "Fecha": "28/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d82f"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.059_2024.PDF target=_blank>RRAI 059/2024</a>",
        "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "28/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d830"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.060_2024.PDF target=_blank>RRAI 060/2024</a>",
        "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "MODIFICA",
        "Fecha": "28/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d831"
        },
        "num": "RRAI 061/2024",
        "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d832"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.062_2024.PDF target=_blank>RRAI 062/2024</a>",
        "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "28/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d833"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.063_2024.PDF target=_blank>RRAI 063/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "28/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d834"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.064_2024.PDF target=_blank>RRAI 064/2024</a>",
        "Sujeto": "AUDITORIA SUPERIOR DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "13/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d835"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.065_2024.PDF target=_blank>RRAI 065/2024</a>",
        "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "MODIFICA",
        "Fecha": "28/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d836"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.066_2024.PDF target=_blank>RRAI 066/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "13/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d837"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.067_2024.PDF target=_blank>RRAI 067/2024</a>",
        "Sujeto": "AUDITORIA SUPERIOR DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "27/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d838"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.068_2024.PDF target=_blank>RRAI 068/2024</a>",
        "Sujeto": "PODER LEGISLATIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "28/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d839"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.069_2024.PDF target=_blank>RRAI 069/2024</a>",
        "Sujeto": "PODER LEGISLATIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "13/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d83a"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.070_2024.PDF target=_blank>RRAI 070/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "DESECHA",
        "Fecha": "26/01/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d83b"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.071_2024.PDF target=_blank>RRAI 071/2024</a>",
        "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "13/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d83c"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.072_2024.PDF target=_blank>RRAI 072/2024</a>",
        "Sujeto": "AYUNTAMIENTO HUAUTLA",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "CONFIRMA",
        "Fecha": "28/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d83d"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.073_2024.PDF target=_blank>RRAI 073/2024</a>",
        "Sujeto": "AYUNTAMIENTO HUAUTLA",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "MODIFICA",
        "Fecha": "13/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d83e"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.074_2024.PDF target=_blank>RRAI 074/2024</a>",
        "Sujeto": "AYUNTAMIENTO FRANCISCO I. MADERO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "13/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d83f"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.075_2024.PDF target=_blank>RRAI 075/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "DESECHA",
        "Fecha": "26/01/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d840"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.076_2024.PDF target=_blank>RRAI 076/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "13/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d841"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.077_2024.PDF target=_blank>RRAI 077/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "18/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d842"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.078_2024.PDF target=_blank>RRAI 078/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "DESECHA",
        "Fecha": "26/01/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d843"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.079_2024.PDF target=_blank>RRAI 079/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "13/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d844"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.080_2024.PDF target=_blank>RRAI 080/2024</a>",
        "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "28/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d845"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.081_2024.PDF target=_blank>RRAI 081/2024</a>",
        "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "13/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d846"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.082_2024.PDF target=_blank>RRAI 082/2024</a>",
        "Sujeto": "AYUNTAMIENTO FRANCISCO I. MADERO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "13/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d847"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.083_2024.PDF target=_blank>RRAI 083/2024</a>",
        "Sujeto": "AYUNTAMIENTO FRANCISCO I. MADERO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "DESECHA",
        "Fecha": "30/01/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d848"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.084_2024.PDF target=_blank>RRAI 084/2024</a>",
        "Sujeto": "AYUNTAMIENTO FRANCISCO I. MADERO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "13/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d849"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.085_2024.PDF target=_blank>RRAI 085/2024</a>",
        "Sujeto": "AYUNTAMIENTO FRANCISCO I. MADERO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "DESECHA",
        "Fecha": "26/01/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d84a"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.086_2024.PDF target=_blank>RRAI 086/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "13/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d84b"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.087_2024.PDF target=_blank>RRAI 087/2024</a>",
        "Sujeto": "AYUNTAMIENTO FRANCISCO I. MADERO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "13/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d84c"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.088_2024.PDF target=_blank>RRAI 088/2024</a>",
        "Sujeto": "AYUNTAMIENTO ACTOPAN",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "MODIFICA",
        "Fecha": "13/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d84d"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.089_2024.PDF target=_blank>RRAI 089/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "27/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d84e"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.090_2024.PDF target=_blank>RRAI 090/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "DESECHA",
        "Fecha": "29/01/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d84f"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.091_2024.PDF target=_blank>RRAI 091/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "13/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d850"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.092_2024.PDF target=_blank>RRAI 092/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "REVOCA",
        "Fecha": "28/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d851"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.093_2024.PDF target=_blank>RRAI 093/2024</a>",
        "Sujeto": "AYUNTAMIENTO LOLOTLA",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "31/01/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d852"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.094_2024.PDF target=_blank>RRAI 094/2024</a>",
        "Sujeto": "AYUNTAMIENTO FRANCISCO I. MADERO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "27/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d853"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.095_2024.PDF target=_blank>RRAI 095/2024</a>",
        "Sujeto": "AYUNTAMIENTO HUEHUETLA",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "REVOCA",
        "Fecha": "28/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d854"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.096_2024.PDF target=_blank>RRAI 096/2024</a>",
        "Sujeto": "AYUNTAMIENTO TASQUILLO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "27/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d855"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.097_2024.PDF target=_blank>RRAI 097/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "09/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d856"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.098_2024.PDF target=_blank>RRAI 098/2024</a>",
        "Sujeto": "AUDITORIA SUPERIOR DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "13/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d857"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.099_2024.PDF target=_blank>RRAI 099/2024</a>",
        "Sujeto": "AYUNTAMIENTO HUAZALINGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "27/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d858"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.100_2024.PDF target=_blank>RRAI 100/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "28/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d859"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.101_2024.PDF target=_blank>RRAI 101/2024</a>",
        "Sujeto": "AYUNTAMIENTO ACTOPAN",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "MODIFICA",
        "Fecha": "13/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d85a"
        },
        "num": "RRAI 102/2024",
        "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d85b"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.103_2024.PDF target=_blank>RRAI 103/2024</a>",
        "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "13/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d85c"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.104_2024.PDF target=_blank>RRAI 104/2024</a>",
        "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "27/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d85d"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.105_2024.PDF target=_blank>RRAI 105/2024</a>",
        "Sujeto": "AYUNTAMIENTO FRANCISCO I. MADERO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "MODIFICA",
        "Fecha": "28/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d85e"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.106_2024.PDF target=_blank>RRAI 106/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "27/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d85f"
        },
        "num": "RRAI 107/2024",
        "Sujeto": "AYUNTAMIENTO EL CARDONAL",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d860"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.108_2024.PDF target=_blank>RRAI 108/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "DESECHA",
        "Fecha": "07/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d861"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.109_2024.PDF target=_blank>RRAI 109/2024</a>",
        "Sujeto": "PODER JUDICIAL DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "27/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d862"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.110_2024.PDF target=_blank>RRAI 110/2024</a>",
        "Sujeto": "AYUNTAMIENTO HUEHUETLA",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "MODIFICA",
        "Fecha": "28/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d863"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.111_2024.PDF target=_blank>RRAI 111/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "27/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d864"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.112_2024.PDF target=_blank>RRAI 112/2024</a>",
        "Sujeto": "AYUNTAMIENTO PACHUCA DE SOTO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "27/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d865"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.113_2024.PDF target=_blank>RRAI 113/2024</a>",
        "Sujeto": "AYUNTAMIENTO TEPEAPULCO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "DESECHA",
        "Fecha": "28/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d866"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.114_2024.PDF target=_blank>RRAI 114/2024</a>",
        "Sujeto": "AYUNTAMIENTO TEPEJI DEL RIO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "27/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d867"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.115_2024.PDF target=_blank>RRAI 115/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "13/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d868"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.116_2024.PDF target=_blank>RRAI 116/2024</a>",
        "Sujeto": "AYUNTAMIENTO FRANCISCO I. MADERO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "27/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d869"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.117_2024.PDF target=_blank>RRAI 117/2024</a>",
        "Sujeto": "AYUNTAMIENTO HUEHUETLA",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "CONFIRMA",
        "Fecha": "27/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d86a"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.118_2024.PDF target=_blank>RRAI 118/2024</a>",
        "Sujeto": "AYUNTAMIENTO MINERAL DEL MONTE",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "13/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d86b"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.119_2024.PDF target=_blank>RRAI 119/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "10/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d86c"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.120_2024.PDF target=_blank>RRAI 120/2024</a>",
        "Sujeto": "AYUNTAMIENTO FRANCISCO I. MADERO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "13/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d86d"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.121_2024.PDF target=_blank>RRAI 121/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "DESECHA",
        "Fecha": "15/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d86e"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.122_2024.PDF target=_blank>RRAI 122/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "27/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d86f"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.123_2024.PDF target=_blank>RRAI 123/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "13/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d870"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.124_2024.PDF target=_blank>RRAI 124/2024</a>",
        "Sujeto": "AYUNTAMIENTO ACATLÁN",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "10/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d871"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.125_2024.PDF target=_blank>RRAI 125/2024</a>",
        "Sujeto": "AYUNTAMIENTO FRANCISCO I. MADERO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "13/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d872"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.126_2024.PDF target=_blank>RRAI 126/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "REVOCA",
        "Fecha": "27/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d873"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.127_2024.PDF target=_blank>RRAI 127/2024</a>",
        "Sujeto": "AYUNTAMIENTO PACHUCA DE SOTO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "27/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d874"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.128_2024.PDF target=_blank>RRAI 128/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "MODIFICA",
        "Fecha": "13/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d875"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.129_2024.PDF target=_blank>RRAI 129/2024</a>",
        "Sujeto": "AYUNTAMIENTO FRANCISCO I. MADERO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "10/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d876"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.130_2024.PDF target=_blank>RRAI 130/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "27/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d877"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.131_2024.PDF target=_blank>RRAI 131/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "27/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d878"
        },
        "num": "RRAI 132/2024",
        "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d879"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.133_2024.PDF target=_blank>RRAI 133/2024</a>",
        "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "13/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d87a"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.134_2024.PDF target=_blank>RRAI 134/2024</a>",
        "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "10/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d87b"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.135_2024.PDF target=_blank>RRAI 135/2024</a>",
        "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "28/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d87c"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.136_2024.PDF target=_blank>RRAI 136/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "27/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d87d"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.137_2024.PDF target=_blank>RRAI 137/2024</a>",
        "Sujeto": "AYUNTAMIENTO MINERAL DE LA REFORMA",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "31/07/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d87e"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.138_2024.PDF target=_blank>RRAI 138/2024</a>",
        "Sujeto": "INIVERSIDAD AUTONOMA DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "CONFIRMA",
        "Fecha": "27/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d87f"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.139_2024.PDF target=_blank>RRAI 139/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "10/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d880"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.140_2024.PDF target=_blank>RRAI 140/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "REVOCA",
        "Fecha": "28/02/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d881"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.141_2024.PDF target=_blank>RRAI 141/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "MODIFICA",
        "Fecha": "27/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d882"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.142_2024.PDF target=_blank>RRAI 142/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "REVOCA",
        "Fecha": "27/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d883"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.143_2024.PDF target=_blank>RRAI 143/2024</a>",
        "Sujeto": "AYUNTAMIENTO ACTOPAN",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "27/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d884"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.144_2024.PDF target=_blank>RRAI 144/2024</a>",
        "Sujeto": "AYUNTAMIENTO ACTOPAN",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "10/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d885"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.145_2024.PDF target=_blank>RRAI 145/2024</a>",
        "Sujeto": "AYUNTAMIENTO ACTOPAN",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "MODIFICA",
        "Fecha": "13/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d886"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.146_2024.PDF target=_blank>RRAI 146/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "MODIFICA",
        "Fecha": "10/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d887"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.147_2024.PDF target=_blank>RRAI 147/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "10/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d888"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.148_2024.PDF target=_blank>RRAI 148/2024</a>",
        "Sujeto": "AYUNTAMIENTO FRANCISCO I. MADERO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "27/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d889"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.149_2024.PDF target=_blank>RRAI 149/2024</a>",
        "Sujeto": "AYUNTAMIENTO ZIMAPÁN",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "MODIFICA",
        "Fecha": "24/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d88a"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.150_2024.PDF target=_blank>RRAI 150/2024</a>",
        "Sujeto": "AYUNTAMIENTO YAHUALICA",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "27/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d88b"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.151_2024.PDF target=_blank>RRAI 151/2024</a>",
        "Sujeto": "AYUNTAMIENTO CUAUTEPEC DE HINOJOSA",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "REVOCA",
        "Fecha": "27/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d88c"
        },
        "num": "RRAI 152/2024",
        "Sujeto": "AYUNTAMIENTO NOPALA DE VILLAGRÁN",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d88d"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.153_2024.PDF target=_blank>RRAI 153/2024</a>",
        "Sujeto": "AYUNTAMIENTO TEPETITLAN",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "27/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d88e"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.154_2024.PDF target=_blank>RRAI 154/2024</a>",
        "Sujeto": "AYUNTAMIENTO ACATLÁN",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "24/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d88f"
        },
        "num": "RRAI 155/2024",
        "Sujeto": "AYUNTAMIENTO SINGUILUCAN",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d890"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.156_2024.PDF target=_blank>RRAI 156/2024</a>",
        "Sujeto": "AYUNTAMIENTO JUÁREZ",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "REVOCA",
        "Fecha": "10/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d891"
        },
        "num": "RRAI 157/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d892"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.158_2024.PDF target=_blank>RRAI 158/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "MODIFICA",
        "Fecha": "27/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d893"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.159_2024.PDF target=_blank>RRAI 159/2024</a>",
        "Sujeto": "AYUNTAMIENTO EMILIANO ZAPATA",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "24/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d894"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.160_2024.PDF target=_blank>RRAI 160/2024</a>",
        "Sujeto": "AYUNTAMIENTO TULANCINGO DE BRAVO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "27/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d895"
        },
        "num": "RRAI 161/2024",
        "Sujeto": "AYUNTAMIENTO FRANCISCO I. MADERO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d896"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.162_2024.PDF target=_blank>RRAI 162/2024</a>",
        "Sujeto": "AYUNTAMIENTO HUAZALINGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "10/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d897"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.163_2024.PDF target=_blank>RRAI 163/2024</a>",
        "Sujeto": "AYUNTAMIENTO HUEHUETLA",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "27/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d898"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.164_2024.PDF target=_blank>RRAI 164/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "MODIFICA",
        "Fecha": "24/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d899"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.165_2024.PDF target=_blank>RRAI 165/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "27/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d89a"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.166_2024.PDF target=_blank>RRAI 166/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "REVOCA",
        "Fecha": "10/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d89b"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.167_2024.PDF target=_blank>RRAI 167/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "REVOCA",
        "Fecha": "27/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d89c"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.168_2024.PDF target=_blank>RRAI 168/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "27/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d89d"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.169_2024.PDF target=_blank>RRAI 169/2024</a>",
        "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "24/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d89e"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.170_2024.PDF target=_blank>RRAI 170/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "28/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d89f"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.171_2024.PDF target=_blank>RRAI 171/2024</a>",
        "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "10/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8a0"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.172_2024.PDF target=_blank>RRAI 172/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "MODIFICA",
        "Fecha": "27/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8a1"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.173_2024.PDF target=_blank>RRAI 173/2024</a>",
        "Sujeto": "AYUNTAMIENTO FRANCISCO I. MADERO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "MODIFICA",
        "Fecha": "27/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8a2"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.174_2024.PDF target=_blank>RRAI 174/2024</a>",
        "Sujeto": "AYUNTAMIENTO FRANCISCO I. MADERO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "24/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8a3"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.175_2024.PDF target=_blank>RRAI 175/2024</a>",
        "Sujeto": "AYUNTAMIENTO FRANCISCO I. MADERO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "27/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8a4"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.176_2024.PDF target=_blank>RRAI 176/2024</a>",
        "Sujeto": "AYUNTAMIENTO ACTOPAN",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "MODIFICA",
        "Fecha": "10/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8a5"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.177_2024.PDF target=_blank>RRAI 177/2024</a>",
        "Sujeto": "AYUNTAMIENTO ACTOPAN",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "CONFIRMA",
        "Fecha": "24/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8a6"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.178_2024.PDF target=_blank>RRAI 178/2024</a>",
        "Sujeto": "AYUNTAMIENTO TEPEAPULCO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "DESECHA",
        "Fecha": "04/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8a7"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.179_2024.PDF target=_blank>RRAI 179/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "24/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8a8"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.180_2024.PDF target=_blank>RRAI 180/2024</a>",
        "Sujeto": "PARTIDO POLITICO MORENA",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "CONFIRMA",
        "Fecha": "27/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8a9"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.181_2024.PDF target=_blank>RRAI 181/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "10/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8aa"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.182_2024.PDF target=_blank>RRAI 182/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "24/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8ab"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.183_2024.PDF target=_blank>RRAI 183/2024</a>",
        "Sujeto": "AYUNTAMIENTO TULA DE ALLENDE",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "10/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8ac"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.184_2024.PDF target=_blank>RRAI 184/2024</a>",
        "Sujeto": "AYUNTAMIENTO TULA DE ALLENDE",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "24/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8ad"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.185_2024.PDF target=_blank>RRAI 185/2024</a>",
        "Sujeto": "AYUNTAMIENTO HUAZALINGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "CONFIRMA",
        "Fecha": "27/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8ae"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.186_2024.PDF target=_blank>RRAI 186/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "10/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8af"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.187_2024.PDF target=_blank>RRAI 187/2024</a>",
        "Sujeto": "AYUNTAMIENTO TECOZAUTLA",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "MODIFICA",
        "Fecha": "10/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8b0"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.188_2024.PDF target=_blank>RRAI 188/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "10/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8b1"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.189_2024.PDF target=_blank>RRAI 189/2024</a>",
        "Sujeto": "AYUNTAMIENTO ZIMAPÁN",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "24/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8b2"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.190_2024.PDF target=_blank>RRAI 190/2024</a>",
        "Sujeto": "AYUNTAMIENTO FRANCISCO I. MADERO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "27/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8b3"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.191_2024.PDF target=_blank>RRAI 191/2024</a>",
        "Sujeto": "AYUNTAMIENTO HUAZALINGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "24/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8b4"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.192_2024.PDF target=_blank>RRAI 192/2024</a>",
        "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "24/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8b5"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.193_2024.PDF target=_blank>RRAI 193/2024</a>",
        "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "10/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8b6"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.194_2024.PDF target=_blank>RRAI 194/2024</a>",
        "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "08/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8b7"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.195_2024.PDF target=_blank>RRAI 195/2024</a>",
        "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "27/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8b8"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.196_2024.PDF target=_blank>RRAI 196/2024</a>",
        "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "24/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8b9"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.197_2024.PDF target=_blank>RRAI 197/2024</a>",
        "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "MODIFICA",
        "Fecha": "10/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8ba"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.198_2024.PDF target=_blank>RRAI 198/2024</a>",
        "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "DESECHA",
        "Fecha": "27/03/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8bb"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.199_2024.PDF target=_blank>RRAI 199/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "08/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8bc"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.200_2024.PDF target=_blank>RRAI 200/2024</a>",
        "Sujeto": "COMISION DE DERECHOS HUMANOS DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "10/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8bd"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.201_2024.PDF target=_blank>RRAI 201/2024</a>",
        "Sujeto": "AYUNTAMIENTO ACTOPAN",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "DESECHA",
        "Fecha": "24/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8be"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.202_2024.PDF target=_blank>RRAI 202/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "22/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8bf"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.203_2024.PDF target=_blank>RRAI 203/2024</a>",
        "Sujeto": "AYUNTAMIENTO ZIMAPÁN",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "10/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8c0"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.204_2024.PDF target=_blank>RRAI 204/2024</a>",
        "Sujeto": "AYUNTAMIENTO ALFAJAYUCAN",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "08/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8c1"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.205_2024.PDF target=_blank>RRAI 205/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "24/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8c2"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.206_2024.PDF target=_blank>RRAI 206/2024</a>",
        "Sujeto": "AYUNTAMIENTO ACATLÁN",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "DESECHA",
        "Fecha": "24/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8c3"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.207_2024.PDF target=_blank>RRAI 207/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "08/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8c4"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.208_2024.PDF target=_blank>RRAI 208/2024</a>",
        "Sujeto": "AYUNTAMIENTO ATOTONILCO DE TULA",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "10/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8c5"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.209_2024.PDF target=_blank>RRAI 209/2024</a>",
        "Sujeto": "AYUNTAMIENTO TEPETITLAN",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "08/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8c6"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.210_2024.PDF target=_blank>RRAI 210/2024</a>",
        "Sujeto": "AYUNTAMIENTO AJACUBA",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "10/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8c7"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.211_2024.PDF target=_blank>RRAI 211/2024</a>",
        "Sujeto": "AYUNTAMIENTO SINGUILUCAN",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "DESECHA",
        "Fecha": "24/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8c8"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.212_2024.PDF target=_blank>RRAI 212/2024</a>",
        "Sujeto": "AYUNTAMIENTO XOCHICOATLAN",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "08/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8c9"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.213_2024.PDF target=_blank>RRAI 213/2024</a>",
        "Sujeto": "AYUNTAMIENTO XOCHICOATLAN",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "10/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8ca"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.214_2024.PDF target=_blank>RRAI 214/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "08/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8cb"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.215_2024.PDF target=_blank>RRAI 215/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "REVOCA",
        "Fecha": "10/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8cc"
        },
        "num": "RRAI 216/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8cd"
        },
        "num": "RRAI 217/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8ce"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.218_2024.PDF target=_blank>RRAI 218/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "10/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8cf"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.219_2024.PDF target=_blank>RRAI 219/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "08/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8d0"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.220_2024.PDF target=_blank>RRAI 220/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "24/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8d1"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.221_2024.PDF target=_blank>RRAI 221/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "24/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8d2"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.222_2024.PDF target=_blank>RRAI 222/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "08/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8d3"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.223_2024.PDF target=_blank>RRAI 223/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "24/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8d4"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.224_2024.PDF target=_blank>RRAI 224/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "08/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8d5"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.225_2024.PDF target=_blank>RRAI 225/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "24/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8d6"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.226_2024.PDF target=_blank>RRAI 226/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "24/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8d7"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.227_2024.PDF target=_blank>RRAI 227/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "08/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8d8"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.228_2024.PDF target=_blank>RRAI 228/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "24/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8d9"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.229_2024.PDF target=_blank>RRAI 229/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "08/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8da"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.230_2024.PDF target=_blank>RRAI 230/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "24/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8db"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.231_2024.PDF target=_blank>RRAI 231/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "24/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8dc"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.232_2024.PDF target=_blank>RRAI 232/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "08/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8dd"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.233_2024.PDF target=_blank>RRAI 233/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "REVOCA",
        "Fecha": "10/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8de"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.234_2024.PDF target=_blank>RRAI 234/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "08/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8df"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.235_2024.PDF target=_blank>RRAI 235/2024</a>",
        "Sujeto": "AYUNTAMIENTO ATOTONILCO EL GRANDE",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "MODIFICA",
        "Fecha": "24/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8e0"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.236_2024.PDF target=_blank>RRAI 236/2024</a>",
        "Sujeto": "AYUNTAMIENTO ATOTONILCO EL GRANDE",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "24/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8e1"
        },
        "num": "RRAI 237/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8e2"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.238_2024.PDF target=_blank>RRAI 238/2024</a>",
        "Sujeto": "AYUNTAMIENTO TIANGUISTENGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "MODIFICA",
        "Fecha": "10/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8e3"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.239_2024.PDF target=_blank>RRAI 239/2024</a>",
        "Sujeto": "AYUNTAMIENTO TULA DE ALLENDE",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "08/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8e4"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.240_2024.PDF target=_blank>RRAI 240/2024</a>",
        "Sujeto": "AYUNTAMIENTO TULA DE ALLENDE",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "24/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8e5"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.241_2024.PDF target=_blank>RRAI 241/2024</a>",
        "Sujeto": "AYUNTAMIENTO TULA DE ALLENDE",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "24/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8e6"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.242_2024.PDF target=_blank>RRAI 242/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "08/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8e7"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.243_2024.PDF target=_blank>RRAI 243/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "MODIFICA",
        "Fecha": "24/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8e8"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.244_2024.PDF target=_blank>RRAI 244/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "MODIFICA",
        "Fecha": "22/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8e9"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.245_2024.PDF target=_blank>RRAI 245/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "10/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8ea"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.246_2024.PDF target=_blank>RRAI 246/2024</a>",
        "Sujeto": "AYUNTAMIENTO ALFAJAYUCAN",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "DESECHA",
        "Fecha": "24/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8eb"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.247_2024.PDF target=_blank>RRAI 247/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "08/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8ec"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.248_2024.PDF target=_blank>RRAI 248/2024</a>",
        "Sujeto": "AYUNTAMIENTO MOLANGO DE ESCAMILLA",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "24/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8ed"
        },
        "num": "RRAI 249/2024",
        "Sujeto": "PARTIDO POLITICO MORENA",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8ee"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.250_2024.PDF target=_blank>RRAI 250/2024</a>",
        "Sujeto": "AUDITORIA SUPERIOR DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "CONFIRMA",
        "Fecha": "24/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8ef"
        },
        "num": "RRAI 251/2024",
        "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8f0"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.252_2024.PDF target=_blank>RRAI 252/2024</a>",
        "Sujeto": "AYUNTAMIENTO IXMIQUILPAN",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "09/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8f1"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.253_2024.PDF target=_blank>RRAI 253/2024</a>",
        "Sujeto": "AYUNTAMIENTO CHILCUAUTLA",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "MODIFICA",
        "Fecha": "24/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8f2"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.254_2024.PDF target=_blank>RRAI 254/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "08/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8f3"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.255_2024.PDF target=_blank>RRAI 255/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "REVOCA",
        "Fecha": "10/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8f4"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.256_2024.PDF target=_blank>RRAI 256/2024</a>",
        "Sujeto": "AYUNTAMIENTO ACTOPAN",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "08/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8f5"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.257_2024.PDF target=_blank>RRAI 257/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8f6"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.258_2024.PDF target=_blank>RRAI 258/2024</a>",
        "Sujeto": "AYUNTAMIENTO TIANGUISTENGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "MODIFICA",
        "Fecha": "24/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8f7"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.259_2024.PDF target=_blank>RRAI 259/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "08/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8f8"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.260_2024.PDF target=_blank>RRAI 260/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "24/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8f9"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.261_2024.PDF target=_blank>RRAI 261/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "08/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8fa"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.262_2024.PDF target=_blank>RRAI 262/2024</a>",
        "Sujeto": "PARTIDO REVOLUCIONARIO INSTITUCIONAL",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "MODIFICA",
        "Fecha": "08/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8fb"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.263_2024.PDF target=_blank>RRAI 263/2024</a>",
        "Sujeto": "AYUNTAMIENTO ACTOPAN",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "DESECHA",
        "Fecha": "10/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8fc"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.264_2024.PDF target=_blank>RRAI 264/2024</a>",
        "Sujeto": "AYUNTAMIENTO ACTOPAN",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "22/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8fd"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.265_2024.PDF target=_blank>RRAI 265/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "REVOCA",
        "Fecha": "24/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8fe"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.266_2024.PDF target=_blank>RRAI 266/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "08/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d8ff"
        },
        "num": "RRAI  267/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "08/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d900"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.268_2024.PDF target=_blank>RRAI 268/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "24/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d901"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.269_2024.PDF target=_blank>RRAI 269/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "22/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d902"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.270_2024.PDF target=_blank>RRAI 270/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "24/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d903"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.271_2024.PDF target=_blank>RRAI 271/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "08/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d904"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.272_2024.PDF target=_blank>RRAI 272/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "08/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d905"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.273_2024.PDF target=_blank>RRAI 273/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "24/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d906"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.274_2024.PDF target=_blank>RRAI 274/2024</a>",
        "Sujeto": "AYUNTAMIENTO TIZAYUCA",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "22/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d907"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.275_2024.PDF target=_blank>RRAI 275/2024</a>",
        "Sujeto": "AYUNTAMIENTO ACAXOCHITLÁN",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "24/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d908"
        },
        "num": "RRAI 276/2024",
        "Sujeto": "AYUNTAMIENTO HUASCA DE OCAMPO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d909"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.277_2024.PDF target=_blank>RRAI 277/2024</a>",
        "Sujeto": "AYUNTAMIENTO EPAZOYUCAN",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "08/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d90a"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.278_2024.PDF target=_blank>RRAI 278/2024</a>",
        "Sujeto": "AYUNTAMIENTO CHAPULHUACAN",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "24/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d90b"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.279_2024.PDF target=_blank>RRAI 279/2024</a>",
        "Sujeto": "AYUNTAMIENTO APAN",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "22/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d90c"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.280_2024.PDF target=_blank>RRAI 280/2024</a>",
        "Sujeto": "AYUNTAMIENTO PACHUCA DE SOTO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "24/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d90d"
        },
        "num": "RRAI 281/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d90e"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.282_2024.PDF target=_blank>RRAI 282/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "08/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d90f"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.283_2024.PDF target=_blank>RRAI 283/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "24/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d910"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.284_2024.PDF target=_blank>RRAI 284/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "22/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d911"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.285_2024.PDF target=_blank>RRAI 285/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "24/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d912"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.286_2024.PDF target=_blank>RRAI 286/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "08/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d913"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.287_2024.PDF target=_blank>RRAI 287/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "08/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d914"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.288_2024.PDF target=_blank>RRAI 288/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "24/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d915"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.289_2024.PDF target=_blank>RRAI 289/2024</a>",
        "Sujeto": "AYUNTAMIENTO TULANCINGO DE BRAVO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "22/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d916"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.290_2024.PDF target=_blank>RRAI 290/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "24/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d917"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.291_2024.PDF target=_blank>RRAI 291/2024</a>",
        "Sujeto": "AYUNTAMIENTO PACHUCA DE SOTO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "CONFIRMA",
        "Fecha": "22/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d918"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.292_2024.PDF target=_blank>RRAI 292/2024</a>",
        "Sujeto": "AYUNTAMIENTO JALTOCAN",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "08/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d919"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.293_2024.PDF target=_blank>RRAI 293/2024</a>",
        "Sujeto": "AYUNTAMIENTO ATLAPEXCO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "08/005/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d91a"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.294_2024.PDF target=_blank>RRAI 294/2024</a>",
        "Sujeto": "AYUNTAMIENTO MINERAL DEL MONTE",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "22/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d91b"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.295_2024.PDF target=_blank>RRAI 295/2024</a>",
        "Sujeto": "AYUNTAMIENTO TEPETITLAN",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "24/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d91c"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.296_2024.PDF target=_blank>RRAI 296/2024</a>",
        "Sujeto": "AYUNTAMIENTO AGUA BLANCA",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "08/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d91d"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.297_2024.PDF target=_blank>RRAI 297/2024</a>",
        "Sujeto": "AYUNTAMIENTO HUAZALINGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "MODIFICA",
        "Fecha": "08/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d91e"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.298_2024.PDF target=_blank>RRAI 298/2024</a>",
        "Sujeto": "AYUNTAMIENTO PACHUCA DE SOTO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "08/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d91f"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.299_2024.PDF target=_blank>RRAI 299/2024</a>",
        "Sujeto": "AYUNTAMIENTO TULANCINGO DE BRAVO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "22/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d920"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.300_2024.PDF target=_blank>RRAI 300/2024</a>",
        "Sujeto": "AYUNTAMIENTO TIANGUISTENGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "REVOCA",
        "Fecha": "24/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d921"
        },
        "num": "RRAI 301/2024",
        "Sujeto": "AYUNTAMIENTO TIANGUISTENGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d922"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.302_2024.PDF target=_blank>RRAI 302/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "REVOCA",
        "Fecha": "09/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d923"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.303_2024.PDF target=_blank>RRAI 303/2024</a>",
        "Sujeto": "AYUNTAMIENTO TEZONTEPEC DE ALDAMA",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "MODIFICA",
        "Fecha": "08/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d924"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.304_2024.PDF target=_blank>RRAI 304/2024</a>",
        "Sujeto": "AYUNTAMIENTO TEZONTEPEC DE ALDAMA",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "22/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d925"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.305_2024.PDF target=_blank>RRAI 305/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "08/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d926"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.306_2024.PDF target=_blank>RRAI 306/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "CONFIRMA",
        "Fecha": "22/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d927"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.307_2024.PDF target=_blank>RRAI 307/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "MODIFICA",
        "Fecha": "08/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d928"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.308_2024.PDF target=_blank>RRAI 308/2024</a>",
        "Sujeto": "AYUNTAMIENTO TULA DE ALLENDE",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "08/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d929"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.309_2024.PDF target=_blank>RRAI 309/2024</a>",
        "Sujeto": "AYUNTAMIENTO ACTOPAN",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "22/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d92a"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.310_2024.PDF target=_blank>RRAI 310/2024</a>",
        "Sujeto": "AYUNTAMIENTO TLANALAPA",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "08/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d92b"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.311_2024.PDF target=_blank>RRAI 311/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "22/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d92c"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.312_2024.PDF target=_blank>RRAI 312/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "22/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d92d"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.313_2024.PDF target=_blank>RRAI 313/2024</a>",
        "Sujeto": "AYUNTAMIENTO METEPEC",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "08/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d92e"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.314_2024.PDF target=_blank>RRAI 314/2024</a>",
        "Sujeto": "AYUNTAMIENTO OMITLAN DE JUAREZ",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "22/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d92f"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.315_2024.PDF target=_blank>RRAI 315/2024</a>",
        "Sujeto": "AYUNTAMIENTO PACULA",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "MODIFICA",
        "Fecha": "24/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d930"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.316_2024.PDF target=_blank>RRAI 316/2024</a>",
        "Sujeto": "AYUNTAMIENTO TENANGO DE DORIA",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "22/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d931"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.317_2024.PDF target=_blank>RRAI 317/2024</a>",
        "Sujeto": "AYUNTAMIENTO MOLANGO DE ESCAMILLA",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "22/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d932"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.318_2024.PDF target=_blank>RRAI 318/2024</a>",
        "Sujeto": "AYUNTAMIENTO CUAUTEPEC DE HINOJOSA",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "08/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d933"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.319_2024.PDF target=_blank>RRAI 319/2024</a>",
        "Sujeto": "AYUNTAMIENTO MINERAL DE LA REFORMA",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "22/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d934"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.320_2024.PDF target=_blank>RRAI 320/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "08/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d935"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.321_2024.PDF target=_blank>RRAI 321/2024</a>",
        "Sujeto": "INSTITUTO ESTATAL ELECTORAL DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "CONFIRMA",
        "Fecha": "22/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d936"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.322_2024.PDF target=_blank>RRAI 322/2024</a>",
        "Sujeto": "UNIVERSIDAD AUTONOMA DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "22/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d937"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.323_2024.PDF target=_blank>RRAI 323/2024</a>",
        "Sujeto": "PODER LEGISLATIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "08/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d938"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.324_2024.PDF target=_blank>RRAI 324/2024</a>",
        "Sujeto": "AYUNTAMIENTO ACTOPAN",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "MODIFICA",
        "Fecha": "22/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d939"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.325_2024.PDF target=_blank>RRAI 325/2024</a>",
        "Sujeto": "INSTITUTO ESTATAL ELECTORAL DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "CONFIRMA",
        "Fecha": "22/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d93a"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.326_2024.PDF target=_blank>RRAI 326/2024</a>",
        "Sujeto": "INSTITUTO DE TRANSPARENCIA, ACCESO A LA INFORMACIÓN PÚBLICA GUBERNAMENTAL Y PROTECCIÓN DE DATOS PERSONALES DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "22/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d93b"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.327_2024.PDF target=_blank>RRAI 327/2024</a>",
        "Sujeto": "INSTITUTO ESTATAL ELECTORAL DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d93c"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.328_2024.PDF target=_blank>RRAI 328/2024</a>",
        "Sujeto": "INSTITUTO ESTATAL ELECTORAL DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "CONFIRMA",
        "Fecha": "22/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d93d"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.329_2024.PDF target=_blank>RRAI 329/2024</a>",
        "Sujeto": "AYUNTAMIENTO MOLANGO DE ESCAMILLA",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "22/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d93e"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.330_2024.PDF target=_blank>RRAI 330/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "08/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d93f"
        },
        "num": "RRAI 331/2024",
        "Sujeto": "AYUNTAMIENTO PISAFLORES",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d940"
        },
        "num": "RRAI 332/2024",
        "Sujeto": "AYUNTAMIENTO TECOZAUTLA",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d941"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.333_2024.PDF target=_blank>RRAI 333/2024</a>",
        "Sujeto": "AYUNTAMIENTO ALFAJAYUCAN",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "08/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d942"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.334_2024.PDF target=_blank>RRAI 334/2024</a>",
        "Sujeto": "AYUNTAMIENTO CUAUTEPEC DE HINOJOSA",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "22/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d943"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.335_2024.PDF target=_blank>RRAI 335/2024</a>",
        "Sujeto": "AYUNTAMIENTO XOCHICOATLAN",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "08/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d944"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.336_2024.PDF target=_blank>RRAI 336/2024</a>",
        "Sujeto": "INSTITUTO DE TRANSPARENCIA, ACCESO A LA INFORMACIÓN PÚBLICA GUBERNAMENTAL Y PROTECCIÓN DE DATOS PERSONALES DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "CONFIRMA",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d945"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.337_2024.PDF target=_blank>RRAI 337/2024</a>",
        "Sujeto": "PODER LEGISLATIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d946"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.338_2024.PDF target=_blank>RRAI 338/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": " 08/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d947"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.339_2024.PDF target=_blank>RRAI 339/2024</a>",
        "Sujeto": "SINDICATO UNICO DE TRABAJADORES AL SERVICIO DEL PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "REVOCA",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d948"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.340_2024.PDF target=_blank>RRAI 340/2024</a>",
        "Sujeto": "AYUNTAMIENTO NOPALA DE VILLAGRÁN",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "DESECHA",
        "Fecha": "24/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d949"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.341_2024.PDF target=_blank>RRAI 341/2024</a>",
        "Sujeto": "AYUNTAMIENTO FRANCISCO I. MADERO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d94a"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.342_2024.PDF target=_blank>RRAI 342/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "22/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d94b"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.343_2024.PDF target=_blank>RRAI 343/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "08/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d94c"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.344_2024.PDF target=_blank>RRAI 344/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "12/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d94d"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.345_2024.PDF target=_blank>RRAI 345/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "22/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d94e"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.346_2024.PDF target=_blank>RRAI 346/2024</a>",
        "Sujeto": "AYUNTAMIENTO TULA DE ALLENDE",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "CONFIRMA",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d94f"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.347_2024.PDF target=_blank>RRAI 347/2024</a>",
        "Sujeto": "AUDITORIA SUPERIOR DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "22/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d950"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.348_2024.PDF target=_blank>RRAI 348/2024</a>",
        "Sujeto": "AYUNTAMIENTO TULA DE ALLENDE ",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "DESECHA",
        "Fecha": "08/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d951"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.349_2024.PDF target=_blank>RRAI 349/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d952"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.350_2024.PDF target=_blank>RRAI 350/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "08/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d953"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.351_2024.PDF target=_blank>RRAI 351/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d954"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.352_2024.PDF target=_blank>RRAI 352/2024</a>",
        "Sujeto": "AYUNTAMIENTO TIANGUISTENGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "MODIFICA",
        "Fecha": "22/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d955"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.353_2024.PDF target=_blank>RRAI 353/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "17/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d956"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.354_2024.PDF target=_blank>RRAI 354/2024</a>",
        "Sujeto": "AYUNTAMIENTO TLANALAPA",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d957"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.355_2024.PDF target=_blank>RRAI 355/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "CONFIRMA",
        "Fecha": "22/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d958"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.356_2024.PDF target=_blank>RRAI 356/2024</a>",
        "Sujeto": "AYUNTAMIENTO TLANALAPA",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d959"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.357_2024.PDF target=_blank>RRAI 357/2024</a>",
        "Sujeto": "AYUNTAMIENTO TIANGUISTENGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "MODIFICA",
        "Fecha": "22/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d95a"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.358_2024.PDF target=_blank>RRAI 358/2024</a>",
        "Sujeto": "AYUNTAMIENTO APAN",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "MODIFICA",
        "Fecha": "22/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d95b"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.359_2024.PDF target=_blank>RRAI 359/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d95c"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.360_2024.PDF target=_blank>RRAI 360/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "REVOCA",
        "Fecha": "08/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d95d"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.361_2024.PDF target=_blank>RRAI 361/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d95e"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.362_2024.PDF target=_blank>RRAI 362/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "26/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d95f"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.363_2024.PDF target=_blank>RRAI 363/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "22/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d960"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.364_2024.PDF target=_blank>RRAI 364/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d961"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.365_2024.PDF target=_blank>RRAI 365/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "08/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d962"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.366_2024.PDF target=_blank>RRAI 366/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d963"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.367_2024.PDF target=_blank>RRAI 367/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d964"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.368_2024.PDF target=_blank>RRAI 368/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "22/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d965"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.369_2024.PDF target=_blank>RRAI 369/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "12/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d966"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.370_2024.PDF target=_blank>RRAI 370/2024</a>",
        "Sujeto": "AYUNTAMIENTO FRANCISCO I. MADERO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "DESECHA",
        "Fecha": "24/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d967"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.371_2024.PDF target=_blank>RRAI 371/2024</a>",
        "Sujeto": "AYUNTAMIENTO FRANCISCO I. MADERO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "DESECHA",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d968"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.372_2024.PDF target=_blank>RRAI 372/2024</a>",
        "Sujeto": "AYUNTAMIENTO ACTOPAN",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d969"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.373_2024.PDF target=_blank>RRAI 373/2024</a>",
        "Sujeto": "AYUNTAMIENTO APAN",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "22/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d96a"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.374_2024.PDF target=_blank>RRAI 374/2024</a>",
        "Sujeto": "AYUNTAMIENTO TLANALAPA",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d96b"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.375_2024.PDF target=_blank>RRAI 375/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "22/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d96c"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.371_2024.PDF target=_blank>RRAI 376/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d96d"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.377_2024.PDF target=_blank>RRAI 377/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d96e"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.376_2024.PDF target=_blank>RRAI 378/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d96f"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.379_2024.PDF target=_blank>RRAI 379/2024</a>",
        "Sujeto": "AYUNTAMIENTO LA MISION",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d970"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.380_2024.PDF target=_blank>RRAI 380/2024</a>",
        "Sujeto": "AYUNTAMIENTO SAN AGUSTIN TLAXIACA",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "22/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d971"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.381_2024.PDF target=_blank>RRAI 381/2024</a>",
        "Sujeto": "AYUNTAMIENTO EL ARENAL",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d972"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.382_2024.PDF target=_blank>RRAI 382/2024</a>",
        "Sujeto": "AYUNTAMIENTO HUEHUETLA",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d973"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.381_2024.PDF target=_blank>RRAI 383/2024</a>",
        "Sujeto": "AYUNTAMIENTO HUAUTLA",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d974"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.384_2024.PDF target=_blank>RRAI 384/2024</a>",
        "Sujeto": "AYUNTAMIENTO TETEPANGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d975"
        },
        "num": "RRAI 385/2024",
        "Sujeto": "AYUNTAMIENTO ACATLÁN",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "MODIFICA",
        "Fecha": "24/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d976"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.386_2024.PDF target=_blank>RRAI 386/2024</a>",
        "Sujeto": "AYUNTAMIENTO ACTOPAN",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d977"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.387_2024.PDF target=_blank>RRAI 387/2024</a>",
        "Sujeto": "AYUNTAMIENTO ELOXOCHITLAN",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d978"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.388_2024.PDF target=_blank>RRAI 388/2024</a>",
        "Sujeto": "AYUNTAMIENTO HUEJUTLA DE REYES",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d979"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.389_2024.PDF target=_blank>RRAI 389/2024</a>",
        "Sujeto": "AYUNTAMIENTO TIANGUISTENGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d97a"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.390_2024.PDF target=_blank>RRAI 390/2024</a>",
        "Sujeto": "AYUNTAMIENTO TULA DE ALLENDE",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "22/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d97b"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.391_2024.PDF target=_blank>RRAI 391/2024</a>",
        "Sujeto": "AYUNTAMIENTO ZACUALTIPAN",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d97c"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.392_2024.PDF target=_blank>RRAI 392/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "MODIFICA",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d97d"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.393_2024.PDF target=_blank>RRAI 393/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d97e"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.394_2024.PDF target=_blank>RRAI 394/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d97f"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.395_2024.PDF target=_blank>RRAI 395/2024</a>",
        "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d980"
        },
        "num": "RRAI 396/2024",
        "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d981"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.397_2024.PDF target=_blank>RRAI 397/2024</a>",
        "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d982"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.398_2024.PDF target=_blank>RRAI 398/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d983"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.399_2024.PDF target=_blank>RRAI 399/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d984"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.400_2024.PDF target=_blank>RRAI 400/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "22/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d985"
        },
        "num": "RRAI 401/2024",
        "Sujeto": "AYUNTAMIENTO XOCHICOATLAN",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d986"
        },
        "num": "RRAI 402/2024",
        "Sujeto": "AYUNTAMIENTO JUÁREZ",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d987"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.403_2024.PDF target=_blank>RRAI 403/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "DESECHA",
        "Fecha": "22/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d988"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.404_2024.PDF target=_blank>RRAI 404/2024</a>",
        "Sujeto": "AYUNTAMIENTO JUÁREZ",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d989"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.405_2024.PDF target=_blank>RRAI 405/2024</a>",
        "Sujeto": "AYUNTAMIENTO JUÁREZ",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "22/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d98a"
        },
        "num": "RRAI 406/2024",
        "Sujeto": "AYUNTAMIENTO JUÁREZ",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d98b"
        },
        "num": "RRAI 407/2024",
        "Sujeto": "AYUNTAMIENTO JUÁREZ",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d98c"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.408_2024.PDF target=_blank>RRAI 408/2024</a>",
        "Sujeto": "AYUNTAMIENTO JUÁREZ",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "MODIFICA",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d98d"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.409_2024.PDF target=_blank>RRAI 409/2024</a>",
        "Sujeto": "AYUNTAMIENTO PACHUCA DE SOTO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d98e"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.410_2024.PDF target=_blank>RRAI 410/2024</a>",
        "Sujeto": "AYUNTAMIENTO MINERAL DE LA REFORMA",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "CONFIRMA",
        "Fecha": "22/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d98f"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.411_2024.PDF target=_blank>RRAI 411/2024</a>",
        "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "26/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d990"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.412_2024.PDF target=_blank>RRAI 412/2024</a>",
        "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d991"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.413_2024.PDF target=_blank>RRAI 413/2024</a>",
        "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d992"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.414_2024.PDF target=_blank>RRAI 414/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d993"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.415_2024.PDF target=_blank>RRAI 415/2024</a>",
        "Sujeto": "AYUNTAMIENTO PACHUCA DE SOTO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d994"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.416_2024.PDF target=_blank>RRAI 416/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d995"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.417_2024.PDF target=_blank>RRAI 417/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "26/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d996"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.418_2024.PDF target=_blank>RRAI 418/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d997"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.419_2024.PDF target=_blank>RRAI 419/2024</a>",
        "Sujeto": "AYUNTAMIENTO FRANCISCO I. MADERO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d998"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.420_2024.PDF target=_blank>RRAI 420/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "22/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d999"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.421_2024.PDF target=_blank>RRAI 421/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "26/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d99a"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.422_2024.PDF target=_blank>RRAI 422/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "REVOCA",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d99b"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.423_2024.PDF target=_blank>RRAI 423/2024</a>",
        "Sujeto": "AYUNTAMIENTO MINERAL DE LA REFORMA",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d99c"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.424_2024.PDF target=_blank>RRAI 424/2024</a>",
        "Sujeto": "AYUNTAMIENTO EL ARENAL",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "05/07/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d99d"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.425_2024.PDF target=_blank>RRAI 425/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "22/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d99e"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.426_2024.PDF target=_blank>RRAI 426/2024</a>",
        "Sujeto": "AYUNTAMIENTO MINERAL DE LA REFORMA",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "26/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d99f"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.427_2024.PDF target=_blank>RRAI 427/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "26/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9a0"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.428_2024.PDF target=_blank>RRAI 428/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "DESECHA",
        "Fecha": "13/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9a1"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.429_2024.PDF target=_blank>RRAI 429/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "05/07/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9a2"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.430_2024.PDF target=_blank>RRAI 430/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "DESECHA",
        "Fecha": "22/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9a3"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.431_2024.PDF target=_blank>RRAI 431/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "CONFIRMA",
        "Fecha": "26/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9a4"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.432_2024.PDF target=_blank>RRAI 432/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "26/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9a5"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.433_2024.PDF target=_blank>RRAI 433/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9a6"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.434_2024.PDF target=_blank>RRAI 434/2024</a>",
        "Sujeto": "AYUNTAMIENTO TIANGUISTENGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "05/07/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9a7"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.435_2024.PDF target=_blank>RRAI 435/2024</a>",
        "Sujeto": "AYUNTAMIENTO SAN AGUSTIN TLAXIACA",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9a8"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.436_2024.PDF target=_blank>RRAI 436/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "26/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9a9"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.437_2024.PDF target=_blank>RRAI 437/2024</a>",
        "Sujeto": "AYUNTAMIENTO PACHUCA DE SOTO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "MODIFICA",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9aa"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.438_2024.PDF target=_blank>RRAI 438/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9ab"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.439_2024.PDF target=_blank>RRAI 439/2024</a>",
        "Sujeto": "AYUNTAMIENTO PACHUCA DE SOTO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "05/07/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9ac"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.440_2024.PDF target=_blank>RRAI 440/2024</a>",
        "Sujeto": "AYUNTAMIENTO MINERAL DE LA REFORMA",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9ad"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.441_2024.PDF target=_blank>RRAI 441/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "05/07/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9ae"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.442_2024.PDF target=_blank>RRAI 442/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "26/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9af"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.443_2024.PDF target=_blank>RRAI 443/2024</a>",
        "Sujeto": "AYUNTAMIENTO TETEPANGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9b0"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.444_2024.PDF target=_blank>RRAI 444/2024</a>",
        "Sujeto": "AYUNTAMIENTO APAN",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "DESECHA",
        "Fecha": "22/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9b1"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.445_2024.PDF target=_blank>RRAI 445/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "DESECHA",
        "Fecha": "22/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9b2"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.446_2024.PDF target=_blank>RRAI 446/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "26/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9b3"
        },
        "num": "RRAI 447/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9b4"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.448_2024.PDF target=_blank>RRAI 448/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "REVOCA",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9b5"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.449_2024.PDF target=_blank>RRAI 449/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "05/07/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9b6"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.450_2024.PDF target=_blank>RRAI 450/2024</a>",
        "Sujeto": "INSTITUTO DE TRANSPARENCIA, ACCESO A LA INFORMACIÓN PÚBLICA GUBERNAMENTAL Y PROTECCIÓN DE DATOS PERSONALES DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "DESECHA",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9b7"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.451_2024.PDF target=_blank>RRAI 451/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "26/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9b8"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.452_2024.PDF target=_blank>RRAI 452/2024</a>",
        "Sujeto": "AYUNTAMIENTO HUASCA DE OCAMPO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "DESECHA",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9b9"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.453_2024.PDF target=_blank>RRAI 453/2024</a>",
        "Sujeto": "AYUNTAMIENTO MINERAL DE LA REFORMA",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "MODIFICA",
        "Fecha": "24/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9ba"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.454_2024.PDF target=_blank>RRAI 454/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "DESECHA",
        "Fecha": "31/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9bb"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.455_2024.PDF target=_blank>RRAI 455/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9bc"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.456_2024.PDF target=_blank>RRAI 456/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "05/07/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9bd"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.457_2024.PDF target=_blank>RRAI 457/2024</a>",
        "Sujeto": "AYUNTAMIENTO MINERAL DE LA REFORMA",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "05/07/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9be"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.458_2024.PDF target=_blank>RRAI 458/2024</a>",
        "Sujeto": "AYUNTAMIENTO ATOTONILCO DE TULA",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "20/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9bf"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.459_2024.PDF target=_blank>RRAI 459/2024</a>",
        "Sujeto": "AYUNTAMIENTO MINERAL DEL CHICO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "05/07/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9c0"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.460_2024.PDF target=_blank>RRAI 460/2024</a>",
        "Sujeto": "AYUNTAMIENTO MOLANGO DE ESCAMILLA",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9c1"
        },
        "num": "RRAI 461/2024",
        "Sujeto": "AYUNTAMIENTO PROGRESO DE OBREGON",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9c2"
        },
        "num": "RRAI 462/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9c3"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.463_2024.PDF target=_blank>RRAI 463/2024</a>",
        "Sujeto": "AYUNTAMIENTO MINERAL DE LA REFORMA",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "19/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9c4"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.464_2024.PDF target=_blank>RRAI 464/2024</a>",
        "Sujeto": "AUDITORIA SUPERIOR DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "05/07/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9c5"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.465_2024.PDF target=_blank>RRAI 465/2024</a>",
        "Sujeto": "AYUNTAMIENTO XOCHICOATLAN",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9c6"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.466_2024.PDF target=_blank>RRAI 466/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "05/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9c7"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.467_2024.PDF target=_blank>RRAI 467/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "05/07/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9c8"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.468_2024.PDF target=_blank>RRAI 468/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "20/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9c9"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.469_2024.PDF target=_blank>RRAI 469/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "05/07/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9ca"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.470_2024.PDF target=_blank>RRAI 470/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9cb"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.471_2024.PDF target=_blank>RRAI 471/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "05/07/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9cc"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.472_2024.PDF target=_blank>RRAI 472/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "05/07/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9cd"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.473_2024.PDF target=_blank>RRAI 473/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "20/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9ce"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.474_2024.PDF target=_blank>RRAI 474/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "05/07/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9cf"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.475_2024.PDF target=_blank>RRAI 475/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9d0"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.476_2024.PDF target=_blank>RRAI 476/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "05/07/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9d1"
        },
        "num": "RRAI 477/2024",
        "Sujeto": "AYUNTAMIENTO TEZONTEPEC DE ALDAMA",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9d2"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.478_2024.PDF target=_blank>RRAI 478/2024</a>",
        "Sujeto": "AYUNTAMIENTO SINGUILUCAN",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "REVOCA",
        "Fecha": "05/07/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9d3"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.479_2024.PDF target=_blank>RRAI 479/2024</a>",
        "Sujeto": "AYUNTAMIENTO CALNALI",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "05/07/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9d4"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.480_2024.PDF target=_blank>RRAI 480/2024</a>",
        "Sujeto": "AYUNTAMIENTO ELOXOCHITLAN",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "12/062024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9d5"
        },
        "num": "RRAI 481/2024",
        "Sujeto": "AYUNTAMIENTO JACALA",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9d6"
        },
        "num": "RRAI 482/2024",
        "Sujeto": "AYUNTAMIENTO JALTOCAN",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9d7"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.483_2024.PDF target=_blank>RRAI 483/2024</a>",
        "Sujeto": "AYUNTAMIENTO JUÁREZ",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "20/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9d8"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.484_2024.PDF target=_blank>RRAI 484/2024</a>",
        "Sujeto": "AYUNTAMIENTO HUEJUTLA DE REYES",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "DESECHA",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9d9"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.485_2024.PDF target=_blank>RRAI 485/2024</a>",
        "Sujeto": "AYUNTAMIENTO TLAXCOAPAN",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "MODIFICA",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9da"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.486_2024.PDF target=_blank>RRAI 486/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "05/07/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9db"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.487_2024.PDF target=_blank>RRAI 487/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "05/07/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9dc"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.488_2024.PDF target=_blank>RRAI 488/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "20/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9dd"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.489_2024.PDF target=_blank>RRAI 489/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "05/07/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9de"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.490_2024.PDF target=_blank>RRAI 490/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "26/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9df"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.491_2024.PDF target=_blank>RRAI 491/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "31/07/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9e0"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.492_2024.PDF target=_blank>RRAI 492/2024</a>",
        "Sujeto": "PODER JUDICIAL DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "31/07/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9e1"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.493_2024.PDF target=_blank>RRAI 493/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "20/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9e2"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.494_2024.PDF target=_blank>RRAI 494/2024</a>",
        "Sujeto": "SINDICATO UNICO DE TRABAJADORES AL SERVICIO DEL MUNICIPIO DE APAN",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "05/07/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9e3"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.495_2024.PDF target=_blank>RRAI 495/2024</a>",
        "Sujeto": "INSTITUTO ESTATAL ELECTORAL DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "CONFIRMA",
        "Fecha": "05/07/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9e4"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.496_2024.PDF target=_blank>RRAI 496/2024</a>",
        "Sujeto": "AYUNTAMIENTO ATOTONILCO EL GRANDE",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "DESECHA",
        "Fecha": "31/07/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9e5"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.497_2024.PDF target=_blank>RRAI 497/2024</a>",
        "Sujeto": "AYUNTAMIENTO MINERAL DE LA REFORMA",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "31/07/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9e6"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.498_2024.PDF target=_blank>RRAI 498/2024</a>",
        "Sujeto": "AYUNTAMIENTO SAN AGUSTIN TLAXIACA",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "MODIFICA",
        "Fecha": "05/07/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9e7"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.499_2024.PDF target=_blank>RRAI 499/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "05/07/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9e8"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.500_2024.PDF target=_blank>RRAI 500/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "26/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9e9"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.501_2024.PDF target=_blank>RRAI 501/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "31/07/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9ea"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.502_2024.PDF target=_blank>RRAI 502/2024</a>",
        "Sujeto": "AYUNTAMIENTO PACHUCA DE SOTO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": 2024,
        "Fecha": "31/07/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9eb"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.503_2024.PDF target=_blank>RRAI 503/2024</a>",
        "Sujeto": "AYUNTAMIENTO SANTIAGO DE ANAYA",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "05/07/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9ec"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.504_2024.PDF target=_blank>RRAI 504/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "14/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9ed"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.505_2024.PDF target=_blank>RRAI 505/2024</a>",
        "Sujeto": "AYUNTAMIENTO APAN",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "26/07/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9ee"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.506_2024.PDF target=_blank>RRAI 506/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "31/07/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9ef"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.507_2024.PDF target=_blank>RRAI 507/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "31/07/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9f0"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.508_2024.PDF target=_blank>RRAI 508/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "05/07/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9f1"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.509_2024.PDF target=_blank>RRAI 509/2024</a>",
        "Sujeto": "AYUNTAMIENTO TEPEJI DEL RIO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "14/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9f2"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.510_2024.PDF target=_blank>RRAI 510/2024</a>",
        "Sujeto": "PODER JUDICIAL DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "CONFIRMA",
        "Fecha": "26/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9f3"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.511_2024.PDF target=_blank>RRAI 511/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "31/07/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9f4"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.512_2024.PDF target=_blank>RRAI 512/2024</a>",
        "Sujeto": "AYUNTAMIENTO TLAXCOAPAN",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "31/07/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9f5"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.513_2024.PDF target=_blank>RRAI 513/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "05/07/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9f6"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.514_2024.PDF target=_blank>RRAI 514/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "14/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9f7"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.515_2024.PDF target=_blank>RRAI 515/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "26/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9f8"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.516_2024.PDF target=_blank>RRAI 516/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "31/07/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9f9"
        },
        "num": "RRAI 517/2024",
        "Sujeto": "AYUNTAMIENTO JUÁREZ",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9fa"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.518_2024.PDF target=_blank>RRAI 518/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "31/07/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9fb"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.519_2024.PDF target=_blank>RRAI 519/2024</a>",
        "Sujeto": "AYUNTAMIENTO CALNALI",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "14/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9fc"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.520_2024.PDF target=_blank>RRAI 520/2024</a>",
        "Sujeto": "AYUNTAMIENTO ACTOPAN",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "DESECHA",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9fd"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.521_2024.PDF target=_blank>RRAI 521/2024</a>",
        "Sujeto": "PODER JUDICIAL DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "DESECHA",
        "Fecha": "31/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9fe"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.522_2024.PDF target=_blank>RRAI 522/2024</a>",
        "Sujeto": "AYUNTAMIENTO ATLAPEXCO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "31/07/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04d9ff"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.523_2024.PDF target=_blank>RRAI 523/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "05/07/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da00"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.524_2024.PDF target=_blank>RRAI 524/2024</a>",
        "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "14/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da01"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.525_2024.PDF target=_blank>RRAI 525/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "05/07/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da02"
        },
        "num": "RRAI 526/2024",
        "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da03"
        },
        "num": "RRAI 527/2024",
        "Sujeto": "AYUNTAMIENTO PACHUCA DE SOTO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da04"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.528_2024.PDF target=_blank>RRAI 528/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": 45509,
        "Fecha": "31/07/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da05"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.529_2024.PDF target=_blank>RRAI 529/2024</a>",
        "Sujeto": "AYUNTAMIENTO SINGUILUCAN",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "14/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da06"
        },
        "num": "RRAI 530/2024",
        "Sujeto": "UNIVERSIDAD AUTONOMA DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da07"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.531_2024.PDF target=_blank>RRAI 531/2024</a>",
        "Sujeto": "AYUNTAMIENTO APAN",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "DESECHA",
        "Fecha": "14/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da08"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.532_2024.PDF target=_blank>RRAI 532/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "14/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da09"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.533_2024.PDF target=_blank>RRAI 533/2024</a>",
        "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "MODIFICA",
        "Fecha": "31/07/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da0a"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.534_2024.PDF target=_blank>RRAI 534/2024</a>",
        "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "14/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da0b"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.535_2024.PDF target=_blank>RRAI 535/2024</a>",
        "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "MODIFICA",
        "Fecha": "31/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da0c"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.536_2024.PDF target=_blank>RRAI 536/2024</a>",
        "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "14/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da0d"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.537_2024.PDF target=_blank>RRAI 537/2024</a>",
        "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "14/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da0e"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.538_2024.PDF target=_blank>RRAI 538/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "31/07/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da0f"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.539_2024.PDF target=_blank>RRAI 539/2024</a>",
        "Sujeto": "AYUNTAMIENTO ACTOPAN",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "14/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da10"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.540_2024.PDF target=_blank>RRAI 540/2024</a>",
        "Sujeto": "AYUNTAMIENTO ACTOPAN",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "05/07/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da11"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.541_2024.PDF target=_blank>RRAI 541/2024</a>",
        "Sujeto": "AYUNTAMIENTO TIANGUISTENGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "CONFIRMA",
        "Fecha": "14/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da12"
        },
        "num": "RRAI 542/2024",
        "Sujeto": "AYUNTAMIENTO TIANGUISTENGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da13"
        },
        "num": "RRAI 543/2024",
        "Sujeto": "AYUNTAMIENTO TIANGUISTENGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da14"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.544_2024.PDF target=_blank>RRAI 544/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da15"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.545_2024.PDF target=_blank>RRAI 545/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "05/07/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da16"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.546_2024.PDF target=_blank>RRAI 546/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "14/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da17"
        },
        "num": "RRAI 547/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da18"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.548_2024.PDF target=_blank>RRAI 548/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "31/07/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da19"
        },
        "num": "RRAI 549/2024",
        "Sujeto": "AYUNTAMIENTO ATOTONILCO DE TULA",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da1a"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.550_2024.PDF target=_blank>RRAI 550/2024</a>",
        "Sujeto": "PODER LEGISLATIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "CONFIRMA",
        "Fecha": "12/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da1b"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.551_2024.PDF target=_blank>RRAI 551/2024</a>",
        "Sujeto": "AYUNTAMIENTO MINERAL DE LA REFORMA",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "14/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da1c"
        },
        "num": "RRAI 552/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da1d"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.553_2024.PDF target=_blank>RRAI 553/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "31/07/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da1e"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.554_2024.PDF target=_blank>RRAI 554/2024</a>",
        "Sujeto": "AYUNTAMIENTO MINERAL DE LA REFORMA",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da1f"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.555_2024.PDF target=_blank>RRAI 555/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "05/07/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da20"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.556_2024.PDF target=_blank>RRAI 556/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da21"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.557_2024.PDF target=_blank>RRAI 557/2024</a>",
        "Sujeto": "AYUNTAMIENTO PACHUCA DE SOTO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "DESECHA",
        "Fecha": "05/07/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da22"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.558_2024.PDF target=_blank>RRAI 558/2024</a>",
        "Sujeto": "INSTITUTO ESTATAL ELECTORAL DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "31/07/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da23"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.559_2024.PDF target=_blank>RRAI 559/2024</a>",
        "Sujeto": "AYUNTAMIENTO TETEPANGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da24"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.560_2024.PDF target=_blank>RRAI 560/2024</a>",
        "Sujeto": "AYUNTAMIENTO MINERAL DE LA REFORMA",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "31/07/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da25"
        },
        "num": "RRAI 561/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da26"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.562_2024.PDF target=_blank>RRAI 562/2024</a>",
        "Sujeto": "AYUNTAMIENTO ACTOPAN",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "14/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da27"
        },
        "num": "RRAI 563/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da28"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.564_2024.PDF target=_blank>RRAI 564/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "DESECHA",
        "Fecha": "05/07/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da29"
        },
        "num": "RRAI 565/2024",
        "Sujeto": "AYUNTAMIENTO CUAUTEPEC DE HINOJOSA",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da2a"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.566_2024.PDF target=_blank>RRAI 566/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "CONFIRMA",
        "Fecha": "27/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da2b"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.567_2024.PDF target=_blank>RRAI 567/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "27/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da2c"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.568_2024.PDF target=_blank>RRAI 568/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "14/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da2d"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.569_2024.PDF target=_blank>RRAI 569/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da2e"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.570_2024.PDF target=_blank>RRAI 570/2024</a>",
        "Sujeto": "PODER JUDICIAL DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "CONFIRMA",
        "Fecha": "14/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da2f"
        },
        "num": "RRAI 571/2024",
        "Sujeto": "AYUNTAMIENTO TULA DE ALLENDE",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da30"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.572_2024.PDF target=_blank>RRAI 572/2024</a>",
        "Sujeto": "AUDITORIA SUPERIOR DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "14/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da31"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.573_2024.PDF target=_blank>RRAI 573/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "DESECHA",
        "Fecha": "05/07/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da32"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.574_2024.PDF target=_blank>RRAI 574/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da33"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.575_2024.PDF target=_blank>RRAI 575/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "14/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da34"
        },
        "num": "RRAI 576/2024",
        "Sujeto": "AYUNTAMIENTO TULA DE ALLENDE",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da35"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.577_2024.PDF target=_blank>RRAI 577/2024</a>",
        "Sujeto": "AYUNTAMIENTO APAN",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "14/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da36"
        },
        "num": "RRAI 578/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da37"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.579_2024.PDF target=_blank>RRAI 579/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da38"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.580_2024.PDF target=_blank>RRAI 580/2024</a>",
        "Sujeto": "AYUNTAMIENTO PACHUCA DE SOTO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "MODIFICA",
        "Fecha": "14/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da39"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.581_2024.PDF target=_blank>RRAI 581/2024</a>",
        "Sujeto": "AYUNTAMIENTO HUEHUETLA",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da3a"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.582_2024.PDF target=_blank>RRAI 582/2024</a>",
        "Sujeto": "AYUNTAMIENTO HUEHUETLA",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "SOBRESEE",
        "Fecha": "14/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da3b"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.583_2024.PDF target=_blank>RRAI 583/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da3c"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.584_2024.PDF target=_blank>RRAI 584/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da3d"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.585_2024.PDF target=_blank>RRAI 585/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "CONFIRMA",
        "Fecha": "11/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da3e"
        },
        "num": "RRAI 586/2024",
        "Sujeto": "PODER JUDICIAL DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da3f"
        },
        "num": "RRAI 587/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da40"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.588_2024.PDF target=_blank>RRAI 588/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da41"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.589_2024.PDF target=_blank>RRAI 589/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da42"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.590_2024.PDF target=_blank>RRAI 590/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "14/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da43"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.591_2024.PDF target=_blank>RRAI 591/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da44"
        },
        "num": "RRAI 592/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da45"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.593_2024.PDF target=_blank>RRAI 593/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da46"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.594_2024.PDF target=_blank>RRAI 594/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da47"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.595_2024.PDF target=_blank>RRAI 595/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da48"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.596_2024.PDF target=_blank>RRAI 596/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da49"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.597_2024.PDF target=_blank>RRAI 597/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "DESECHA",
        "Fecha": "14/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da4a"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.598_2024.PDF target=_blank>RRAI 598/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da4b"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.599_2024.PDF target=_blank>RRAI 599/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da4c"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.600_2024.PDF target=_blank>RRAI 600/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "14/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da4d"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.601_2024.PDF target=_blank>RRAI 601/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da4e"
        },
        "num": "RRAI 602/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da4f"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.603_2024.PDF target=_blank>RRAI 603/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da50"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.604_2024.PDF target=_blank>RRAI 604/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da51"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.605_2024.PDF target=_blank>RRAI 605/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "14/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da52"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.606_2024.PDF target=_blank>RRAI 606/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da53"
        },
        "num": "RRAI 607/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da54"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.608_2024.PDF target=_blank>RRAI 608/2024</a>",
        "Sujeto": "AYUNTAMIENTO MINERAL DE LA REFORMA",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da55"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.609_2024.PDF target=_blank>RRAI 609/2024</a>",
        "Sujeto": "AYUNTAMIENTO MINERAL DE LA REFORMA",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da56"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.610_2024.PDF target=_blank>RRAI 610/2024</a>",
        "Sujeto": "AYUNTAMIENTO MINERAL DE LA REFORMA",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "14/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da57"
        },
        "num": "RRAI 611/2024",
        "Sujeto": "AYUNTAMIENTO TULANCINGO DE BRAVO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da58"
        },
        "num": "RRAI 612/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da59"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.613_2024.PDF target=_blank>RRAI 613/2024</a>",
        "Sujeto": "AYUNTAMIENTO MINERAL DE LA REFORMA",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da5a"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.614_2024.PDF target=_blank>RRAI 614/2024</a>",
        "Sujeto": "PODER LEGISLATIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "DESECHA",
        "Fecha": "31/07/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da5b"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.615_2024.PDF target=_blank>RRAI 615/2024</a>",
        "Sujeto": "INSTITUTO ESTATAL ELECTORAL DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "14/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da5c"
        },
        "num": "RRAI 616/2024",
        "Sujeto": "AYUNTAMIENTO MINERAL DEL CHICO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da5d"
        },
        "num": "RRAI 617/2024",
        "Sujeto": "AYUNTAMIENTO TULANCINGO DE BRAVO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da5e"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.618_2024.PDF target=_blank>RRAI 618/2024</a>",
        "Sujeto": "PODER LEGISLATIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da5f"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.619_2024.PDF target=_blank>RRAI 619/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da60"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.620_2024.PDF target=_blank>RRAI 620/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da61"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.621_2024.PDF target=_blank>RRAI 621/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da62"
        },
        "num": "RRAI 622/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da63"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.623_2024.PDF target=_blank>RRAI 623/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da64"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.624_2024.PDF target=_blank>RRAI 624/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "11/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da65"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.625_2024.PDF target=_blank>RRAI 625/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da66"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.626_2024.PDF target=_blank>RRAI 626/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da67"
        },
        "num": "RRAI 627/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da68"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.628_2024.PDF target=_blank>RRAI 628/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da69"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.629_2024.PDF target=_blank>RRAI 629/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "11/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da6a"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.630_2024.PDF target=_blank>RRAI 630/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da6b"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.631_2024.PDF target=_blank>RRAI 631/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da6c"
        },
        "num": "RRAI 632/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da6d"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.633_2024.PDF target=_blank>RRAI 633/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da6e"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.634_2024.PDF target=_blank>RRAI 634/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "11/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da6f"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.635_2024.PDF target=_blank>RRAI 635/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da70"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.636_2024.PDF target=_blank>RRAI 636/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "25/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da71"
        },
        "num": "RRAI 637/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da72"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.638_2024.PDF target=_blank>RRAI 638/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da73"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.639_2024.PDF target=_blank>RRAI 639/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "11/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da74"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.640_2024.PDF target=_blank>RRAI 640/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da75"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.641_2024.PDF target=_blank>RRAI 641/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "25/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da76"
        },
        "num": "RRAI 642/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da77"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.643_2024.PDF target=_blank>RRAI 643/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da78"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.644_2024.PDF target=_blank>RRAI 644/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "11/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da79"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.645_2024.PDF target=_blank>RRAI 645/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da7a"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.646_2024.PDF target=_blank>RRAI 646/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da7b"
        },
        "num": "RRAI 647/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da7c"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.648_2024.PDF target=_blank>RRAI 648/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da7d"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.649_2024.PDF target=_blank>RRAI 649/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "11/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da7e"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.650_2024.PDF target=_blank>RRAI 650/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da7f"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.651_2024.PDF target=_blank>RRAI 651/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da80"
        },
        "num": "RRAI 652/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da81"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.653_2024.PDF target=_blank>RRAI 653/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da82"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.654_2024.PDF target=_blank>RRAI 654/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "11/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da83"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.655_2024.PDF target=_blank>RRAI 655/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da84"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.656_2024.PDF target=_blank>RRAI 656/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da85"
        },
        "num": "RRAI 657/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da86"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.658_2024.PDF target=_blank>RRAI 658/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da87"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.659_2024.PDF target=_blank>RRAI 659/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "11/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da88"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.660_2024.PDF target=_blank>RRAI 660/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da89"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.661_2024.PDF target=_blank>RRAI 661/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da8a"
        },
        "num": "RRAI 662/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da8b"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.663_2024.PDF target=_blank>RRAI 663/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da8c"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.664_2024.PDF target=_blank>RRAI 664/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "11/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da8d"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.665_2024.PDF target=_blank>RRAI 665/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da8e"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.666_2024.PDF target=_blank>RRAI 666/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da8f"
        },
        "num": "RRAI 667/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da90"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.668_2024.PDF target=_blank>RRAI 668/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da91"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.669_2024.PDF target=_blank>RRAI 669/2024</a>",
        "Sujeto": "INSTITUTO ESTATAL ELECTORAL DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "11/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da92"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.670_2024.PDF target=_blank>RRAI 670/2024</a>",
        "Sujeto": "AYUNTAMIENTO TIZAYUCA",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "DESECHA",
        "Fecha": "14/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da93"
        },
        "num": "RRAI 671/2024",
        "Sujeto": "AYUNTAMIENTO PACULA",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da94"
        },
        "num": "RRAI 672/2024",
        "Sujeto": "AYUNTAMIENTO EPAZOYUCAN",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da95"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.673_2024.PDF target=_blank>RRAI 673/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da96"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.674_2024.PDF target=_blank>RRAI 674/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "11/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da97"
        },
        "num": "RRAI 675/2024",
        "Sujeto": "AYUNTAMIENTO PACHUCA DE SOTO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da98"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.676_2024.PDF target=_blank>RRAI 676/2024</a>",
        "Sujeto": "AYUNTAMIENTO AJACUBA",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "25/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da99"
        },
        "num": "RRAI 677/2024",
        "Sujeto": "AYUNTAMIENTO TETEPANGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da9a"
        },
        "num": "RRAI 678/2024",
        "Sujeto": "AYUNTAMIENTO TETEPANGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da9b"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.679_2024.PDF target=_blank>RRAI 679/2024</a>",
        "Sujeto": "AYUNTAMIENTO TETEPANGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "11/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da9c"
        },
        "num": "RRAI 680/2024",
        "Sujeto": "AYUNTAMIENTO TETEPANGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da9d"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.681_2024.PDF target=_blank>RRAI 681/2024</a>",
        "Sujeto": "PODER JUDICIAL DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "CONFIRMA",
        "Fecha": "25/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da9e"
        },
        "num": "RRAI 682/2024",
        "Sujeto": "INSTITUTO ESTATAL ELECTORAL DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04da9f"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.683_2024.PDF target=_blank>RRAI 683/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04daa0"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.684_2024.PDF target=_blank>RRAI 684/2024</a>",
        "Sujeto": "AYUNTAMIENTO MINERAL DEL MONTE",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "11/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04daa1"
        },
        "num": "RRAI 685/2024",
        "Sujeto": "AYUNTAMIENTO TENANGO DE DORIA",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04daa2"
        },
        "num": "RRAI 686/2024",
        "Sujeto": "AYUNTAMIENTO SAN BARTOLO TUTOTEPEC",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04daa3"
        },
        "num": "RRAI 687/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04daa4"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.688_2024.PDF target=_blank>RRAI 688/2024</a>",
        "Sujeto": "AYUNTAMIENTO TULA DE ALLENDE",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "11/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04daa5"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.689_2024.PDF target=_blank>RRAI 689/2024</a>",
        "Sujeto": "AYUNTAMIENTO MINERAL DE LA REFORMA",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "11/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04daa6"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.690_2024.PDF target=_blank>RRAI 690/2024</a>",
        "Sujeto": "AYUNTAMIENTO MINERAL DE LA REFORMA",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04daa7"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.691_2024.PDF target=_blank>RRAI 691/2024</a>",
        "Sujeto": "AYUNTAMIENTO PACHUCA DE SOTO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "25/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04daa8"
        },
        "num": "RRAI 692/2024",
        "Sujeto": "AYUNTAMIENTO PACHUCA DE SOTO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04daa9"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.693_2024.PDF target=_blank>RRAI 693/2024</a>",
        "Sujeto": "AYUNTAMIENTO ACTOPAN",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "11/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04daaa"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.694_2024.PDF target=_blank>RRAI 694/2024</a>",
        "Sujeto": "AYUNTAMIENTO TLAHUELILPAN",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "11/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04daab"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.695_2024.PDF target=_blank>RRAI 695/2024</a>",
        "Sujeto": "AYUNTAMIENTO ACTOPAN",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04daac"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.696_2024.PDF target=_blank>RRAI 696/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "25/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04daad"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.697_2024.PDF target=_blank>RRAI 697/2024</a>",
        "Sujeto": "COMISION DE DERECHOS HUMANOS DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "DESECHA",
        "Fecha": "14/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04daae"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.698_2024.PDF target=_blank>RRAI 698/2024</a>",
        "Sujeto": "AYUNTAMIENTO EPAZOYUCAN",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "11/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04daaf"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.699_2024.PDF target=_blank>RRAI 699/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "11/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dab0"
        },
        "num": "RRAI 700/2024",
        "Sujeto": "AYUNTAMIENTO TULANCINGO DE BRAVO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dab1"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.701_2024.PDF target=_blank>RRAI 701/2024</a>",
        "Sujeto": "AYUNTAMIENTO SAN FELIPE ORIZATLAN",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "CONFIRMA",
        "Fecha": "25/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dab2"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.702_2024.PDF target=_blank>RRAI 702/2027</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "DESECHA",
        "Fecha": "14/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dab3"
        },
        "num": "RRAI 703/2024",
        "Sujeto": "PARTIDO REVOLUCIONARIO INSTITUCIONAL",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dab4"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.704_2024.PDF target=_blank>RRAI 704/2024</a>",
        "Sujeto": "AYUNTAMIENTO ACTOPAN",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "11/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dab5"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.705_2024.PDF target=_blank>RRAI 705/2024</a>",
        "Sujeto": "AYUNTAMIENTO TIANGUISTENGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "CONFIRMA",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dab6"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.706_2024.PDF target=_blank>RRAI 706/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "25/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dab7"
        },
        "num": "RRAI 707/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dab8"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.708_2024.PDF target=_blank>RRAI 708/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "11/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dab9"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.709_2024.PDF target=_blank>RRAI 709/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "11/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04daba"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.710_2024.PDF target=_blank>RRAI 710/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dabb"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.711_2024.PDF target=_blank>RRAI 711/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "25/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dabc"
        },
        "num": "RRAI 712/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dabd"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.713_2024.PDF target=_blank>RRAI 713/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "11/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dabe"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.714_2024.PDF target=_blank>RRAI 714/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "11/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dabf"
        },
        "num": "RRAI 715/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dac0"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.716_2024.PDF target=_blank>RRAI 716/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "25/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dac1"
        },
        "num": "RRAI 717/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dac2"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.718_2024.PDF target=_blank>RRAI 718/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "11/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dac3"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.719_2024.PDF target=_blank>RRAI 719/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "11/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dac4"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.720_2024.PDF target=_blank>RRAI 720/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dac5"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.721_2024.PDF target=_blank>RRAI 721/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "25/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dac6"
        },
        "num": "RRAI 722/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dac7"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.723_2024.PDF target=_blank>RRAI 723/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "11/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dac8"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.724_2024.PDF target=_blank>RRAI 724/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "11/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dac9"
        },
        "num": "RRAI 725/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04daca"
        },
        "num": "RRAI 726/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dacb"
        },
        "num": "RRAI 727/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dacc"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.728_2024.PDF target=_blank>RRAI 728/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "11/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dacd"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.729_2024.PDF target=_blank>RRAI 729/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "11/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dace"
        },
        "num": "RRAI 730/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dacf"
        },
        "num": "RRAI 731/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dad0"
        },
        "num": "RRAI 732/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dad1"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.733_2024.PDF target=_blank>RRAI 733/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "11/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dad2"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.734_2024.PDF target=_blank>RRAI 734/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "11/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dad3"
        },
        "num": "RRAI 735/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dad4"
        },
        "num": "RRAI 736/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dad5"
        },
        "num": "RRAI 737/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dad6"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.738_2024.PDF target=_blank>RRAI 738/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "11/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dad7"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.739_2024.PDF target=_blank>RRAI 739/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "11/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dad8"
        },
        "num": "RRAI 740/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dad9"
        },
        "num": "RRAI 741/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dada"
        },
        "num": "RRAI 742/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dadb"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.743_2024.PDF target=_blank>RRAI 743/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "11/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dadc"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.744_2024.PDF target=_blank>RRAI 744/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "11/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dadd"
        },
        "num": "RRAI 745/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dade"
        },
        "num": "RRAI 746/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dadf"
        },
        "num": "RRAI 747/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dae0"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.748_2024.PDF target=_blank>RRAI 748/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "11/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dae1"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.749_2024.PDF target=_blank>RRAI 749/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "11/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dae2"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.750_2024.PDF target=_blank>RRAI 750/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "28/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dae3"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.751_2024.PDF target=_blank>RRAI 751/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "25/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dae4"
        },
        "num": "RRAI 752/2024",
        "Sujeto": "AYUNTAMIENTO TULA DE ALLENDE",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dae5"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.753_2024.PDF target=_blank>RRAI 753/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "11/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dae6"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.754_2024.PDF target=_blank>RRAI 754/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "11/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dae7"
        },
        "num": "RRAI 755/2024",
        "Sujeto": "AYUNTAMIENTO ZAPOTLAN",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dae8"
        },
        "num": "RRAI 756/2024",
        "Sujeto": "AYUNTAMIENTO SINGUILUCAN",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dae9"
        },
        "num": "RRAI 757/2024",
        "Sujeto": "AYUNTAMIENTO JUÁREZ",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04daea"
        },
        "num": "RRAI 758/2024",
        "Sujeto": "AYUNTAMIENTO ATOTONILCO DE TULA",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04daeb"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.759_2024.PDF target=_blank>RRAI 759/2024</a>",
        "Sujeto": "AYUNTAMIENTO TETEPANGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "11/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04daec"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.760_2024.PDF target=_blank>RRAI 760/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "DESECHA",
        "Fecha": "14/08/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04daed"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.761_2024.PDF target=_blank>RRAI 761/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "25/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04daee"
        },
        "num": "RRAI 762/2024",
        "Sujeto": "COMISION DE DERECHOS HUMANOS DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04daef"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.763_2024.PDF target=_blank>RRAI 763/2024</a>",
        "Sujeto": "AYUNTAMIENTO MINERAL DE LA REFORMA",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "25/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04daf0"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.764_2024.PDF target=_blank>RRAI 764/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "11/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04daf1"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.765_2024.PDF target=_blank>RRAI 765/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "11/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04daf2"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.766_2024.PDF target=_blank>RRAI 766/2024</a>",
        "Sujeto": "INSTITUTO DE TRANSPARENCIA, ACCESO A LA INFORMACIÓN PÚBLICA GUBERNAMENTAL Y PROTECCIÓN DE DATOS PERSONALES DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "25/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04daf3"
        },
        "num": "RRAI 767/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04daf4"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.768_2024.PDF target=_blank>RRAI 768/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "25/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04daf5"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.769_2024.PDF target=_blank>RRAI 769/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "11/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04daf6"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.770_2024.PDF target=_blank>RRAI 770/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "11/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04daf7"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.771_2024.PDF target=_blank>RRAI 771/2024</a>",
        "Sujeto": "AYUNTAMIENTO HUEJUTLA DE REYES",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "09/10/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04daf8"
        },
        "num": "RRAI 772/2024",
        "Sujeto": "AYUNTAMIENTO SAN BARTOLO TUTOTEPEC",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04daf9"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.773_2024.PDF target=_blank>RRAI 773/2024</a>",
        "Sujeto": "AYUNTAMIENTO SAN BARTOLO TUTOTEPEC",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "25/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dafa"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.774_2024.PDF target=_blank>RRAI 774/2024</a>",
        "Sujeto": "AYUNTAMIENTO SAN BARTOLO TUTOTEPEC",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "11/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dafb"
        },
        "num": "RRAI 775/2024",
        "Sujeto": "INSTITUTO DE TRANSPARENCIA, ACCESO A LA INFORMACIÓN PÚBLICA GUBERNAMENTAL Y PROTECCIÓN DE DATOS PERSONALES DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dafc"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.776_2024.PDF target=_blank>RRAI 776/2024</a>",
        "Sujeto": "AYUNTAMIENTO HUICHAPAN",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "CONFIRMA",
        "Fecha": "09/10/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dafd"
        },
        "num": "RRAI 777/2024",
        "Sujeto": "AYUNTAMIENTO TEPEHUACAN DE GUERRERO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dafe"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.778_2024.PDF target=_blank>RRAI 778/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "25/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04daff"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.779_2024.PDF target=_blank>RRAI 779/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "11/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db00"
        },
        "num": "RRAI 780/2024",
        "Sujeto": "AYUNTAMIENTO HUAUTLA",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db01"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.781_2024.PDF target=_blank>RRAI 781/2024</a>",
        "Sujeto": "AYUNTAMIENTO PACHUCA DE SOTO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "CONFIRMA",
        "Fecha": "09/10/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db02"
        },
        "num": "RRAI 782/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db03"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.783_2024.PDF target=_blank>RRAI 783/2024</a>",
        "Sujeto": "AYUNTAMIENTO IXMIQUILPAN",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "25/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db04"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.784_2024.PDF target=_blank>RRAI 784/2024</a>",
        "Sujeto": "AYUNTAMIENTO SAN SALVADOR",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "11/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db05"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.785_2024.PDF target=_blank>RRAI 785/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "11/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db06"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.786_2024.PDF target=_blank>RRAI 786/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "09/10/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db07"
        },
        "num": "RRAI 787/2024",
        "Sujeto": "SINDICATO UNICO DE TRABAJADORES AL SERVICIO DEL PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db08"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.788_2024.PDF target=_blank>RRAI 788/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "25/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db09"
        },
        "num": "RRAI 789/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db0a"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.790_2024.PDF target=_blank>RRAI 790/2024</a>",
        "Sujeto": "AYUNTAMIENTO MINERAL DE LA REFORMA",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "11/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db0b"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.791_2024.PDF target=_blank>RRAI 791/2024</a>",
        "Sujeto": "AYUNTAMIENTO SAN AGUSTIN TLAXIACA",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "CONFIRMA",
        "Fecha": "09/10/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db0c"
        },
        "num": "RRAI 792/2024",
        "Sujeto": "AYUNTAMIENTO ZEMPOALA",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db0d"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.793_2024.PDF target=_blank>RRAI 793/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "25/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db0e"
        },
        "num": "RRAI 794/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db0f"
        },
        "num": "RRAI 795/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db10"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.796_2024.PDF target=_blank>RRAI 796/2024</a>",
        "Sujeto": "INSTITUTO ESTATAL ELECTORAL DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "09/10/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db11"
        },
        "num": "RRAI 797/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db12"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.798_2024.PDF target=_blank>RRAI 798/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "25/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db13"
        },
        "num": "RRAI 799/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db14"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.800_2024.PDF target=_blank>RRAI 800/2024</a>",
        "Sujeto": "AYUNTAMIENTO PACHUCA DE SOTO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "11/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db15"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.801_2024.PDF target=_blank>RRAI 801/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "09/10/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db16"
        },
        "num": "RRAI 802/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db17"
        },
        "num": "RRAI 803/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db18"
        },
        "num": "RRAI 804/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db19"
        },
        "num": "RRAI 805/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db1a"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.806_2024.PDF target=_blank>RRAI 806/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "09/10/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db1b"
        },
        "num": "RRAI 807/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db1c"
        },
        "num": "RRAI 808/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db1d"
        },
        "num": "RRAI 809/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db1e"
        },
        "num": "RRAI 810/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db1f"
        },
        "num": "RRAI 811/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db20"
        },
        "num": "RRAI 812/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db21"
        },
        "num": "RRAI 813/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db22"
        },
        "num": "RRAI 814/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db23"
        },
        "num": "RRAI 815/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db24"
        },
        "num": "RRAI 816/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db25"
        },
        "num": "RRAI 817/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db26"
        },
        "num": "RRAI 818/2024",
        "Sujeto": "SINDICATO DE PERSONAL ACADEMICO DE LA UNIVERSIDAD AUTONOMA DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db27"
        },
        "num": "RRAI 819/2024",
        "Sujeto": "AYUNTAMIENTO MINERAL DE LA REFORMA",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db28"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.820_2024.PDF target=_blank>RRAI 820/2024</a>",
        "Sujeto": "AYUNTAMIENTO MINERAL DE LA REFORMA",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "DESECHA",
        "Fecha": "11/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db29"
        },
        "num": "RRAI 821/2024",
        "Sujeto": "AYUNTAMIENTO MINERAL DE LA REFORMA",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db2a"
        },
        "num": "RRAI 822/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db2b"
        },
        "num": "RRAI 823/2024",
        "Sujeto": "AYUNTAMIENTO TIZAYUCA",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db2c"
        },
        "num": "RRAI 824/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db2d"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.825_2024.PDF target=_blank>RRAI 825/2024</a>",
        "Sujeto": "AYUNTAMIENTO FRANCISCO I. MADERO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "SOBRESEE",
        "Fecha": "11/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db2e"
        },
        "num": "RRAI 826/2024",
        "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db2f"
        },
        "num": "RRAI 827/2024",
        "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db30"
        },
        "num": "RRAI 828/2024",
        "Sujeto": "AYUNTAMIENTO MINERAL DE LA REFORMA",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db31"
        },
        "num": "RRAI 829/2024",
        "Sujeto": "AYUNTAMIENTO MINERAL DE LA REFORMA",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db32"
        },
        "num": "RRAI 830/2024",
        "Sujeto": "AYUNTAMIENTO EL CARDONAL",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db33"
        },
        "num": "RRAI 831/2024",
        "Sujeto": "AYUNTAMIENTO TULA DE ALLENDE",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db34"
        },
        "num": "RRAI 832/2024",
        "Sujeto": "AYUNTAMIENTO ATOTONILCO EL GRANDE",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db35"
        },
        "num": "RRAI 833/2024",
        "Sujeto": "AYUNTAMIENTO OMITLAN DE JUAREZ",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db36"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.834_2024.PDF target=_blank>RRAI 834/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "DESECHA",
        "Fecha": "11/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db37"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.835_2024.PDF target=_blank>RRAI 835/2024</a>",
        "Sujeto": "AYUNTAMIENTO MINERAL DE LA REFORMA",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "DESECHA",
        "Fecha": "11/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db38"
        },
        "num": "RRAI 836/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db39"
        },
        "num": "RRAI 837/2024",
        "Sujeto": "COMISION DE DERECHOS HUMANOS DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db3a"
        },
        "num": "RRAI 838/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db3b"
        },
        "num": "RRAI 839/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db3c"
        },
        "num": "RRAI 840/2024",
        "Sujeto": "PODER LEGISLATIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db3d"
        },
        "num": "RRAI 841/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db3e"
        },
        "num": "RRAI 842/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db3f"
        },
        "num": "RRAI 843/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db40"
        },
        "num": "RRAI 844/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db41"
        },
        "num": "RRAI 845/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db42"
        },
        "num": "RRAI 846/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db43"
        },
        "num": "RRAI 847/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db44"
        },
        "num": "RRAI 848/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db45"
        },
        "num": "RRAI 849/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db46"
        },
        "num": "RRAI 850/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db47"
        },
        "num": "RRAI 851/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db48"
        },
        "num": "RRAI 852/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db49"
        },
        "num": "RRAI 853/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db4a"
        },
        "num": "RRAI 854/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db4b"
        },
        "num": "RRAI 855/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db4c"
        },
        "num": "RRAI 856/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db4d"
        },
        "num": "RRAI 857/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db4e"
        },
        "num": "RRAI 858/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db4f"
        },
        "num": "RRAI 859/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db50"
        },
        "num": "RRAI 860/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db51"
        },
        "num": "RRAI 861/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db52"
        },
        "num": "RRAI 862/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db53"
        },
        "num": "RRAI 863/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db54"
        },
        "num": "RRAI 864/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db55"
        },
        "num": "RRAI 865/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db56"
        },
        "num": "RRAI 866/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db57"
        },
        "num": "RRAI 867/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db58"
        },
        "num": "RRAI 868/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db59"
        },
        "num": "RRAI 869/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db5a"
        },
        "num": "RRAI 870/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db5b"
        },
        "num": "RRAI 871/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db5c"
        },
        "num": "RRAI 872/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db5d"
        },
        "num": "RRAI 873/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db5e"
        },
        "num": "RRAI 874/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db5f"
        },
        "num": "RRAI 875/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db60"
        },
        "num": "RRAI 876/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db61"
        },
        "num": "RRAI 877/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db62"
        },
        "num": "RRAI 878/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db63"
        },
        "num": "RRAI 879/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db64"
        },
        "num": "RRAI 880/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db65"
        },
        "num": "RRAI 881/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db66"
        },
        "num": "RRAI 882/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db67"
        },
        "num": "RRAI 883/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db68"
        },
        "num": "RRAI 884/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db69"
        },
        "num": "RRAI 885/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db6a"
        },
        "num": "RRAI 886/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db6b"
        },
        "num": "RRAI 887/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db6c"
        },
        "num": "RRAI 888/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db6d"
        },
        "num": "RRAI 889/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db6e"
        },
        "num": "RRAI 890/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db6f"
        },
        "num": "RRAI 891/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db70"
        },
        "num": "RRAI 892/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db71"
        },
        "num": "RRAI 893/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db72"
        },
        "num": "RRAI 894/2024",
        "Sujeto": "AYUNTAMIENTO EPAZOYUCAN",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db73"
        },
        "num": "RRAI 895/2024",
        "Sujeto": "AYUNTAMIENTO PACHUCA DE SOTO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db74"
        },
        "num": "RRAI 896/2024",
        "Sujeto": "AYUNTAMIENTO OMITLAN DE JUAREZ",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db75"
        },
        "num": "RRAI 897/2024",
        "Sujeto": "PODER LEGISLATIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db76"
        },
        "num": "RRAI 898/2024",
        "Sujeto": "AYUNTAMIENTO MINERAL DEL CHICO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db77"
        },
        "num": "RRAI 899/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db78"
        },
        "num": "RRAI 900/2024",
        "Sujeto": "AYUNTAMIENTO MINERAL DE LA REFORMA",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db79"
        },
        "num": "RRAI 901/2024",
        "Sujeto": "TRIBUNAL ELECTORAL DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db7a"
        },
        "num": "RRAI 902/2024",
        "Sujeto": "AYUNTAMIENTO MINERAL DE LA REFORMA",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db7b"
        },
        "num": "RRAI 903/2024",
        "Sujeto": "INSTITUTO DE TRANSPARENCIA, ACCESO A LA INFORMACIÓN PÚBLICA GUBERNAMENTAL Y PROTECCIÓN DE DATOS PERSONALES DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db7c"
        },
        "num": "RRAI 904/2024",
        "Sujeto": "AYUNTAMIENTO AJACUBA",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db7d"
        },
        "num": "RRAI 905/2024",
        "Sujeto": "AYUNTAMIENTO PROGRESO DE OBREGON",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db7e"
        },
        "num": "RRAI 906/2024",
        "Sujeto": "AYUNTAMIENTO SAN SALVADOR",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db7f"
        },
        "num": "RRAI 907/2024",
        "Sujeto": "AYUNTAMIENTO HUEJUTLA DE REYES",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db80"
        },
        "num": "RRAI 908/2024",
        "Sujeto": "AYUNTAMIENTO HUASCA DE OCAMPO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db81"
        },
        "num": "RRAI 909/2024",
        "Sujeto": "AYUNTAMIENTO PACHUCA DE SOTO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db82"
        },
        "num": "RRAI 910/2024",
        "Sujeto": "AYUNTAMIENTO SAN SALVADOR",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db83"
        },
        "num": "RRAI 911/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db84"
        },
        "num": "RRAI 912/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db85"
        },
        "num": "RRAI 913/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db86"
        },
        "num": "RRAI 914/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db87"
        },
        "num": "RRAI 915/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db88"
        },
        "num": "RRAI 916/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db89"
        },
        "num": "RRAI 917/2024",
        "Sujeto": "AYUNTAMIENTO TIZAYUCA",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db8a"
        },
        "num": "RRAI 918/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db8b"
        },
        "num": "RRAI 919/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db8c"
        },
        "num": "RRAI 920/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db8d"
        },
        "num": "RRAI 921/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db8e"
        },
        "num": "RRAI 922/2024",
        "Sujeto": "AYUNTAMIENTO ZEMPOALA",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db8f"
        },
        "num": "RRAI 923/2024",
        "Sujeto": "AYUNTAMIENTO HUEHUETLA",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db90"
        },
        "num": "RRAI 924/2024",
        "Sujeto": "AYUNTAMIENTO TEPEJI DEL RIO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db91"
        },
        "num": "RRAI 925/2024",
        "Sujeto": "AYUNTAMIENTO EMILIANO ZAPATA",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db92"
        },
        "num": "RRAI 926/2024",
        "Sujeto": "AYUNTAMIENTO EL CARDONAL",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db93"
        },
        "num": "RRAI 927/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db94"
        },
        "num": "RRAI 928/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db95"
        },
        "num": "RRAI 929/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db96"
        },
        "num": "RRAI 930/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db97"
        },
        "num": "RRAI 931/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db98"
        },
        "num": "RRAI 932/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db99"
        },
        "num": "RRAI 933/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db9a"
        },
        "num": "RRAI 934/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db9b"
        },
        "num": "RRAI 935/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db9c"
        },
        "num": "RRAI 936/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db9d"
        },
        "num": "RRAI 937/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db9e"
        },
        "num": "RRAI 938/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04db9f"
        },
        "num": "RRAI 939/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dba0"
        },
        "num": "RRAI 940/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dba1"
        },
        "num": "RRAI 941/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dba2"
        },
        "num": "RRDP 001/2024",
        "Sujeto": "AYUNTAMIENTO ZIMAPÁN",
        "Consejero": "MTRA. MYRNA ROCÍO MONCADA MAHUEM",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dba3"
        },
        "num": "RRDP 002/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNÁNDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dba4"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRDP.003_2024.PDF target=_blank>RRDP 003/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A.E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "SOBRESEE",
        "Fecha": "24/04/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dba5"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRDP.004_2024.PDF target=_blank>RRDP 004/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "SOBRESEE",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dba6"
        },
        "num": "RRDP 005/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dba7"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRDP.006_2024.PDF target=_blank>RRDP 006/2024</a>",
        "Sujeto": "AYUNTAMIENTO PACHUCA DE SOTO",
        "Consejero": "MTRA. MYRNA ROCÍO MONCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dba8"
        },
        "num": "RRDP 007/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNÁNDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dba9"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRDP.008_2024.PDF target=_blank>RRDP 008/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "L.A.E. ELIZABETH MONRIBOT DOMÍNGUEZ",
        "Sentido": "DESECHA",
        "Fecha": "31/05/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dbaa"
        },
        "num": "RRDP 009/2024",
        "Sujeto": "AYUNTAMIENTO PACHUCA DE SOTO",
        "Consejero": "L.E. RAÚL KENNEDY CABILDO",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dbab"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRDP.010_2024.PDF target=_blank>RRDP 010/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
        "Sentido": "DESECHA",
        "Fecha": "12/06/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dbac"
        },
        "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRDP.011_2024.PDF target=_blank>RRDP 011/2024</a>",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRA. MYRNA ROCÍO MONCADA MAHUEM",
        "Sentido": "SOBRESEE",
        "Fecha": "11/09/2024"
      },
      {
        "_id": {
          "$oid": "67326acbe48ca43b0e04dbad"
        },
        "num": "RRDP 012/2024",
        "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
        "Consejero": "MTRO. LUIS A. HERNÁNDEZ RÍOS",
        "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
        "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
      }
      
      /*{
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db8fb"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.001_2024.PDF target=_blank>RRAI 001/2024</a>",
      "Sujeto": "INSTITUTO DE TRANSPARENCIA, ACCESO A LA INFORMACIÓN PÚBLICA GUBERNAMENTAL Y PROTECCIÓN DE DATOS PERSONALES DEL ESTADO DE HIDALGO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "SOBRESEE",
      "Fecha": "28/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db8fc"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.002_2024.PDF target=_blank>RRAI 002/2024</a>",
      "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "SOBRESEE",
      "Fecha": "28/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db8fd"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.003_2024.PDF target=_blank>RRAI 003/2024</a>",
      "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "MODIFICA",
      "Fecha": "14/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db8fe"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.004_2024.PDF target=_blank>RRAI 004/2024</a>",
      "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "28/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db8ff"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.005_2024.PDF target=_blank>RRAI 005/2024</a>",
      "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "CONFIRMA",
      "Fecha": "31/01/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db900"
      },
      "num": "RRAI 006/2024",
      "Sujeto": "AYUNTAMIENTO TEPEAPULCO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db901"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.007_2024.PDF target=_blank>RRAI 007/2024</a>",
      "Sujeto": "AYUNTAMIENTO ACAXOCHITLÁN",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "SOBRESEE",
      "Fecha": "28/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db902"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.008_2024.PDF target=_blank>RRAI 008/2023</a>",
      "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "MODIFICA",
      "Fecha": "14/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db903"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.009_2024.PDF target=_blank>RRAI 009/2024</a>",
      "Sujeto": "COMISION DE DERECHOS HUMANOS DEL ESTADO DE HIDALGO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "28/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db904"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.010_2024.PDF target=_blank>RRAI 010/2024</a>",
      "Sujeto": "AYUNTAMIENTO TEPEAPULCO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "SOBRESEE",
      "Fecha": "14/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db905"
      },
      "num": "RRAI 011/2024",
      "Sujeto": "AYUNTAMIENTO SAN SALVADOR",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db906"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.012_2024.PDF target=_blank>RRAI 012/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "SOBRESEE",
      "Fecha": "28/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db907"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.013_2024.PDF target=_blank>RRAI 013/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "REVOCA",
      "Fecha": "14/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db908"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.014_2024.PDF target=_blank>RRAI 014/2024</a>",
      "Sujeto": "AUDITORIA SUPERIOR DEL ESTADO DE HIDALGO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "28/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db909"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.015_2024.PDF target=_blank>RRAI 015/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "SOBRESEE",
      "Fecha": "14/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db90a"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.016_2024.PDF target=_blank>RRAI 016/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "SOBRESEE",
      "Fecha": "28/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db90b"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.017_2024.PDF target=_blank>RRAI 017/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "SOBRESEE",
      "Fecha": "28/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db90c"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.018_2024.PDF target=_blank>RRAI 018/2024</a>",
      "Sujeto": "AYUNTAMIENTO PACHUCA DE SOTO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "MODIFICA",
      "Fecha": "14/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db90d"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.019_2024.PDF target=_blank>RRAI 019/2024</a>",
      "Sujeto": "AYUNTAMIENTO SAN AGUSTIN METZQUITITLAN",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "28/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db90e"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.020_2024.PDF target=_blank>RRAI 020/2024</a>",
      "Sujeto": "AYUNTAMIENTO TENANGO DE DORIA",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "SOBRESEE",
      "Fecha": "14/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db90f"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.021_2024.PDF target=_blank>RRAI 021/2024</a>",
      "Sujeto": "AYUNTAMIENTO ACAXOCHITLÁN",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "SOBRESEE",
      "Fecha": "28/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db910"
      },
      "num": "RRAI 022/2024",
      "Sujeto": "AYUNTAMIENTO ACAXOCHITLÁN",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db911"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.023_2024.PDF target=_blank>RRAI 023/2024</a>",
      "Sujeto": "AYUNTAMIENTO ACAXOCHITLÁN",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "SOBRESEE",
      "Fecha": "14/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db912"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.024_2024.PDF target=_blank>RRAI 024/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "28/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db913"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.025_2024.PDF target=_blank>RRAI 025/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "SOBRESEE",
      "Fecha": "31/01/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db914"
      },
      "num": "RRAI 026/2024",
      "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db915"
      },
      "num": "RRAI 027/2024",
      "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db916"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.028_2024.PDF target=_blank>RRAI 028/2024</a>",
      "Sujeto": "AYUNTAMIENTO PACHUCA DE SOTO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "SOBRESEE",
      "Fecha": "14/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db917"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.029_2024.PDF target=_blank>RRAI 029/2024</a>",
      "Sujeto": "AYUNTAMIENTO HUAZALINGO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "28/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db918"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.030_2024.PDF target=_blank>RRAI 030/2024</a>",
      "Sujeto": "AYUNTAMIENTO APAN",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "SOBRESEE",
      "Fecha": "28/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db919"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.031_2024.PDF target=_blank>RRAI 031/2024</a>",
      "Sujeto": "AYUNTAMIENTO EMILIANO ZAPATA",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "SOBRESEE",
      "Fecha": "28/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db91a"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.032_2024.PDF target=_blank>RRAI 032/2024</a>",
      "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "SOBRESEE",
      "Fecha": "28/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db91b"
      },
      "num": "RRAI 033/2024",
      "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "14/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db91c"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.034_2024.PDF target=_blank>RRAI 034/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "28/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db91d"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.035_2024.PDF target=_blank>RRAI 035/2023</a>",
      "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "DESECHA",
      "Fecha": "31/01/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db91e"
      },
      "num": "RRAI 036/2024",
      "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db91f"
      },
      "num": "RRAI 037/2024",
      "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db920"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.038_2024.PDF target=_blank>RRAI 038/2024</a>",
      "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "SOBRESEE",
      "Fecha": "14/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db921"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.039_2024.PDF target=_blank>RRAI 039/2024</a>",
      "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "28/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db922"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.040_2024.PDF target=_blank>RRAI 040/2024</a>",
      "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "SOBRESEE",
      "Fecha": "14/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db923"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.041_2024.PDF target=_blank>RRAI 041/2024</a>",
      "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "SOBRESEE",
      "Fecha": "28/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db924"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.042_2024.PDF target=_blank>RRAI 042/2024</a>",
      "Sujeto": "AYUNTAMIENTO TENANGO DE DORIA",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "SOBRESEE",
      "Fecha": "28/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db925"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.043_2024.PDF target=_blank>RRAI 043/2024</a>",
      "Sujeto": "AYUNTAMIENTO CALNALI",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "MODIFICA",
      "Fecha": "28/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db926"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.044_2024.PDF target=_blank>RRAI 044/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "28/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db927"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.045_2024.PDF target=_blank>RRAI 045/2024</a>",
      "Sujeto": "AYUNTAMIENTO EMILIANO ZAPATA",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "MODIFICA",
      "Fecha": "14/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db928"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.046_2024.PDF target=_blank>RRAI 046/2024</a>",
      "Sujeto": "INSTITUTO DE TRANSPARENCIA, ACCESO A LA INFORMACIÓN PÚBLICA GUBERNAMENTAL Y PROTECCIÓN DE DATOS PERSONALES DEL ESTADO DE HIDALGO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "SOBRESEE",
      "Fecha": "28/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db929"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.047_2024.PDF target=_blank>RRAI 047/2024</a>",
      "Sujeto": "AYUNTAMIENTO AJACUBA",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "SOBRESEE",
      "Fecha": "28/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db92a"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.048_2024.PDF target=_blank>RRAI 048/2024</a>",
      "Sujeto": "AYUNTAMIENTO HUASCA DE OCAMPO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "MODIFICA",
      "Fecha": "28/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db92b"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.049_2024.PDF target=_blank>RRAI 049/2024</a>",
      "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "28/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db92c"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.050_2024.PDF target=_blank>RRAI 050/2024</a>",
      "Sujeto": "AYUNTAMIENTO TETEPANGO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "SOBRESEE",
      "Fecha": "14/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db92d"
      },
      "num": "RRAI 051/2024",
      "Sujeto": "PODER LEGISLATIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db92e"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.052_2024.PDF target=_blank>RRAI 052/2024</a>",
      "Sujeto": "AYUNTAMIENTO ATLAPEXCO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "SOBRESEE",
      "Fecha": "28/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db92f"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.053_2024.PDF target=_blank>RRAI 053/2024</a>",
      "Sujeto": "AYUNTAMIENTO EL CARDONAL",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "SOBRESEE",
      "Fecha": "28/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db930"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.054_2024.PDF target=_blank>RRAI 054/2024</a>",
      "Sujeto": "AYUNTAMIENTO CHILCUAUTLA",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "MODIFICA",
      "Fecha": "13/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db931"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.055_2024.PDF target=_blank>RRAI 055/2024</a>",
      "Sujeto": "AYUNTAMIENTO SANTIAGO DE ANAYA",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "REVOCA",
      "Fecha": "14/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db932"
      },
      "num": "RRAI 056/2024",
      "Sujeto": "AYUNTAMIENTO NOPALA DE VILLAGRÁN",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db933"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.057_2024.PDF target=_blank>RRAI 057/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "SOBRESEE",
      "Fecha": "28/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db934"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.058_2024.PDF target=_blank>RRAI 058/2024</a>",
      "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "MODIFICA",
      "Fecha": "28/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db935"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.059_2024.PDF target=_blank>RRAI 059/2024</a>",
      "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "28/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db936"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.060_2024.PDF target=_blank>RRAI 060/2024</a>",
      "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "MODIFICA",
      "Fecha": "28/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db937"
      },
      "num": "RRAI 061/2024",
      "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db938"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.062_2024.PDF target=_blank>RRAI 062/2024</a>",
      "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "SOBRESEE",
      "Fecha": "28/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db939"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.063_2024.PDF target=_blank>RRAI 063/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "SOBRESEE",
      "Fecha": "28/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db93a"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.064_2024.PDF target=_blank>RRAI 064/2024</a>",
      "Sujeto": "AUDITORIA SUPERIOR DEL ESTADO DE HIDALGO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "13/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db93b"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.065_2024.PDF target=_blank>RRAI 065/2024</a>",
      "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "MODIFICA",
      "Fecha": "28/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db93c"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.066_2024.PDF target=_blank>RRAI 066/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "SOBRESEE",
      "Fecha": "13/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db93d"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.067_2024.PDF target=_blank>RRAI 067/2024</a>",
      "Sujeto": "AUDITORIA SUPERIOR DEL ESTADO DE HIDALGO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "SOBRESEE",
      "Fecha": "27/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db93e"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.068_2024.PDF target=_blank>RRAI 068/2024</a>",
      "Sujeto": "PODER LEGISLATIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "SOBRESEE",
      "Fecha": "28/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db93f"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.069_2024.PDF target=_blank>RRAI 069/2024</a>",
      "Sujeto": "PODER LEGISLATIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "13/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db940"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.070_2024.PDF target=_blank>RRAI 070/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "DESECHA",
      "Fecha": "26/01/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db941"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.071_2024.PDF target=_blank>RRAI 071/2024</a>",
      "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "SOBRESEE",
      "Fecha": "13/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db942"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.072_2024.PDF target=_blank>RRAI 072/2024</a>",
      "Sujeto": "AYUNTAMIENTO HUAUTLA",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "CONFIRMA",
      "Fecha": "28/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db943"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.073_2024.PDF target=_blank>RRAI 073/2024</a>",
      "Sujeto": "AYUNTAMIENTO HUAUTLA",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "MODIFICA",
      "Fecha": "13/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db944"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.074_2024.PDF target=_blank>RRAI 074/2024</a>",
      "Sujeto": "AYUNTAMIENTO FRANCISCO I. MADERO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "13/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db945"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.075_2024.PDF target=_blank>RRAI 075/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "DESECHA",
      "Fecha": "26/01/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db946"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.076_2024.PDF target=_blank>RRAI 076/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "SOBRESEE",
      "Fecha": "13/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db947"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.077_2024.PDF target=_blank>RRAI 077/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "SOBRESEE",
      "Fecha": "18/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db948"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.078_2024.PDF target=_blank>RRAI 078/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "DESECHA",
      "Fecha": "26/01/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db949"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.079_2024.PDF target=_blank>RRAI 079/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "13/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db94a"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.080_2024.PDF target=_blank>RRAI 080/2024</a>",
      "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "SOBRESEE",
      "Fecha": "28/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db94b"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.081_2024.PDF target=_blank>RRAI 081/2024</a>",
      "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "SOBRESEE",
      "Fecha": "13/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db94c"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.082_2024.PDF target=_blank>RRAI 082/2024</a>",
      "Sujeto": "AYUNTAMIENTO FRANCISCO I. MADERO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "SOBRESEE",
      "Fecha": "13/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db94d"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.083_2024.PDF target=_blank>RRAI 083/2024</a>",
      "Sujeto": "AYUNTAMIENTO FRANCISCO I. MADERO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "DESECHA",
      "Fecha": "30/01/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db94e"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.084_2024.PDF target=_blank>RRAI 084/2024</a>",
      "Sujeto": "AYUNTAMIENTO FRANCISCO I. MADERO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "13/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db94f"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.085_2024.PDF target=_blank>RRAI 085/2024</a>",
      "Sujeto": "AYUNTAMIENTO FRANCISCO I. MADERO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "DESECHA",
      "Fecha": "26/01/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db950"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.086_2024.PDF target=_blank>RRAI 086/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "SOBRESEE",
      "Fecha": "13/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db951"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.087_2024.PDF target=_blank>RRAI 087/2024</a>",
      "Sujeto": "AYUNTAMIENTO FRANCISCO I. MADERO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "SOBRESEE",
      "Fecha": "13/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db952"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.088_2024.PDF target=_blank>RRAI 088/2024</a>",
      "Sujeto": "AYUNTAMIENTO ACTOPAN",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "MODIFICA",
      "Fecha": "13/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db953"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.089_2024.PDF target=_blank>RRAI 089/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "27/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db954"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.090_2024.PDF target=_blank>RRAI 090/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "DESECHA",
      "Fecha": "29/01/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db955"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.091_2024.PDF target=_blank>RRAI 091/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "SOBRESEE",
      "Fecha": "13/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db956"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.092_2024.PDF target=_blank>RRAI 092/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "REVOCA",
      "Fecha": "28/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db957"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.093_2024.PDF target=_blank>RRAI 093/2024</a>",
      "Sujeto": "AYUNTAMIENTO LOLOTLA",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "SOBRESEE",
      "Fecha": "31/01/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db958"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.094_2024.PDF target=_blank>RRAI 094/2024</a>",
      "Sujeto": "AYUNTAMIENTO FRANCISCO I. MADERO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "27/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db959"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.095_2024.PDF target=_blank>RRAI 095/2024</a>",
      "Sujeto": "AYUNTAMIENTO HUEHUETLA",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "REVOCA",
      "Fecha": "28/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db95a"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.096_2024.PDF target=_blank>RRAI 096/2024</a>",
      "Sujeto": "AYUNTAMIENTO TASQUILLO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "SOBRESEE",
      "Fecha": "27/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db95b"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.097_2024.PDF target=_blank>RRAI 097/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "SOBRESEE",
      "Fecha": "09/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db95c"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.098_2024.PDF target=_blank>RRAI 098/2024</a>",
      "Sujeto": "AUDITORIA SUPERIOR DEL ESTADO DE HIDALGO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "SOBRESEE",
      "Fecha": "13/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db95d"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.099_2024.PDF target=_blank>RRAI 099/2024</a>",
      "Sujeto": "AYUNTAMIENTO HUAZALINGO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "27/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db95e"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.100_2024.PDF target=_blank>RRAI 100/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "SOBRESEE",
      "Fecha": "28/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db95f"
      },
      "num": "RRAI 101/2024",
      "Sujeto": "AYUNTAMIENTO ACTOPAN",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db960"
      },
      "num": "RRAI 102/2024",
      "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db961"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.103_2024.PDF target=_blank>RRAI 103/2024</a>",
      "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "SOBRESEE",
      "Fecha": "13/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db962"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.104_2024.PDF target=_blank>RRAI 104/2024</a>",
      "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "27/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db963"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.105_2024.PDF target=_blank>RRAI 105/2024</a>",
      "Sujeto": "AYUNTAMIENTO FRANCISCO I. MADERO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "MODIFICA",
      "Fecha": "28/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db964"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.106_2024.PDF target=_blank>RRAI 106/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "SOBRESEE",
      "Fecha": "27/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db965"
      },
      "num": "RRAI 107/2024",
      "Sujeto": "AYUNTAMIENTO EL CARDONAL",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db966"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.108_2024.PDF target=_blank>RRAI 108/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "DESECHA",
      "Fecha": "07/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db967"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.109_2024.PDF target=_blank>RRAI 109/2024</a>",
      "Sujeto": "PODER JUDICIAL DEL ESTADO DE HIDALGO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "27/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db968"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.110_2024.PDF target=_blank>RRAI 110/2024</a>",
      "Sujeto": "AYUNTAMIENTO HUEHUETLA",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "MODIFICA",
      "Fecha": "28/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db969"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.111_2024.PDF target=_blank>RRAI 111/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "SOBRESEE",
      "Fecha": "27/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db96a"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.112_2024.PDF target=_blank>RRAI 112/2024</a>",
      "Sujeto": "AYUNTAMIENTO PACHUCA DE SOTO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "SOBRESEE",
      "Fecha": "27/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db96b"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.113_2024.PDF target=_blank>RRAI 113/2024</a>",
      "Sujeto": "AYUNTAMIENTO TEPEAPULCO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "DESECHA",
      "Fecha": "28/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db96c"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.114_2024.PDF target=_blank>RRAI 114/2024</a>",
      "Sujeto": "AYUNTAMIENTO TEPEJI DEL RIO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "27/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db96d"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.115_2024.PDF target=_blank>RRAI 115/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "SOBRESEE",
      "Fecha": "13/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db96e"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.116_2024.PDF target=_blank>RRAI 116/2024</a>",
      "Sujeto": "AYUNTAMIENTO FRANCISCO I. MADERO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "SOBRESEE",
      "Fecha": "27/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db96f"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.117_2024.PDF target=_blank>RRAI 117/2024</a>",
      "Sujeto": "AYUNTAMIENTO HUEHUETLA",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "CONFIRMA",
      "Fecha": "27/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db970"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.118_2024.PDF target=_blank>RRAI 118/2024</a>",
      "Sujeto": "AYUNTAMIENTO MINERAL DEL MONTE",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "SOBRESEE",
      "Fecha": "13/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db971"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.119_2024.PDF target=_blank>RRAI 119/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "10/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db972"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.120_2024.PDF target=_blank>RRAI 120/2024</a>",
      "Sujeto": "AYUNTAMIENTO FRANCISCO I. MADERO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "SOBRESEE",
      "Fecha": "13/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db973"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.121_2024.PDF target=_blank>RRAI 121/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "DESECHA",
      "Fecha": "15/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db974"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.122_2024.PDF target=_blank>RRAI 122/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "SOBRESEE",
      "Fecha": "27/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db975"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.123_2024.PDF target=_blank>RRAI 123/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "SOBRESEE",
      "Fecha": "13/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db976"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.124_2024.PDF target=_blank>RRAI 124/2024</a>",
      "Sujeto": "AYUNTAMIENTO ACATLÁN",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "10/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db977"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.125_2024.PDF target=_blank>RRAI 125/2024</a>",
      "Sujeto": "AYUNTAMIENTO FRANCISCO I. MADERO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "SOBRESEE",
      "Fecha": "13/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db978"
      },
      "num": "RRAI 126/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db979"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.127_2024.PDF target=_blank>RRAI 127/2024</a>",
      "Sujeto": "AYUNTAMIENTO PACHUCA DE SOTO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "SOBRESEE",
      "Fecha": "27/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db97a"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.128_2024.PDF target=_blank>RRAI 128/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "MODIFICA",
      "Fecha": "13/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db97b"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.129_2024.PDF target=_blank>RRAI 129/2024</a>",
      "Sujeto": "AYUNTAMIENTO FRANCISCO I. MADERO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "10/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db97c"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.130_2024.PDF target=_blank>RRAI 130/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "SOBRESEE",
      "Fecha": "27/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db97d"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.131_2024.PDF target=_blank>RRAI 131/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "SOBRESEE",
      "Fecha": "27/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db97e"
      },
      "num": "RRAI 132/2024",
      "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db97f"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.133_2024.PDF target=_blank>RRAI 133/2024</a>",
      "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "SOBRESEE",
      "Fecha": "13/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db980"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.134_2024.PDF target=_blank>RRAI 134/2024</a>",
      "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "10/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db981"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.135_2024.PDF target=_blank>RRAI 135/2024</a>",
      "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "SOBRESEE",
      "Fecha": "28/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db982"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.136_2024.PDF target=_blank>RRAI 136/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "SOBRESEE",
      "Fecha": "27/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db983"
      },
      "num": "RRAI 137/2024",
      "Sujeto": "AYUNTAMIENTO MINERAL DE LA REFORMA",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db984"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.138_2024.PDF target=_blank>RRAI 138/2024</a>",
      "Sujeto": "INIVERSIDAD AUTONOMA DEL ESTADO DE HIDALGO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "CONFIRMA",
      "Fecha": "27/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db985"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.139_2024.PDF target=_blank>RRAI 139/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "10/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db986"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.140_2024.PDF target=_blank>RRAI 140/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "REVOCA",
      "Fecha": "28/02/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db987"
      },
      "num": "RRAI 141/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db988"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.142_2024.PDF target=_blank>RRAI 142/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "REVOCA",
      "Fecha": "27/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db989"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.143_2024.PDF target=_blank>RRAI 143/2024</a>",
      "Sujeto": "AYUNTAMIENTO ACTOPAN",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "SOBRESEE",
      "Fecha": "27/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db98a"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.144_2024.PDF target=_blank>RRAI 144/2024</a>",
      "Sujeto": "AYUNTAMIENTO ACTOPAN",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "10/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db98b"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.145_2024.PDF target=_blank>RRAI 145/2024</a>",
      "Sujeto": "AYUNTAMIENTO ACTOPAN",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "MODIFICA",
      "Fecha": "13/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db98c"
      },
      "num": "RRAI 146/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db98d"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.147_2024.PDF target=_blank>RRAI 147/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "SOBRESEE",
      "Fecha": "10/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db98e"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.148_2024.PDF target=_blank>RRAI 148/2024</a>",
      "Sujeto": "AYUNTAMIENTO FRANCISCO I. MADERO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "SOBRESEE",
      "Fecha": "27/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db98f"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.149_2024.PDF target=_blank>RRAI 149/2024</a>",
      "Sujeto": "AYUNTAMIENTO ZIMAPÁN",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "MODIFICA",
      "Fecha": "24/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db990"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.150_2024.PDF target=_blank>RRAI 150/2024</a>",
      "Sujeto": "AYUNTAMIENTO YAHUALICA",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "SOBRESEE",
      "Fecha": "27/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db991"
      },
      "num": "RRAI 151/2024",
      "Sujeto": "AYUNTAMIENTO CUAUTEPEC DE HINOJOSA",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db992"
      },
      "num": "RRAI 152/2024",
      "Sujeto": "AYUNTAMIENTO NOPALA DE VILLAGRÁN",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db993"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.153_2024.PDF target=_blank>RRAI 153/2024</a>",
      "Sujeto": "AYUNTAMIENTO TEPETITLAN",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "SOBRESEE",
      "Fecha": "27/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db994"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.154_2024.PDF target=_blank>RRAI 154/2024</a>",
      "Sujeto": "AYUNTAMIENTO ACATLÁN",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "24/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db995"
      },
      "num":"RRAI 155/2024",// "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.155_2024.PDF target=_blank>RRAI 155/2024</a>",
      "Sujeto": "AYUNTAMIENTO SINGUILUCAN",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db996"
      },
      "num": "RRAI 156/2024",
      "Sujeto": "AYUNTAMIENTO JUÁREZ",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db997"
      },
      "num": "RRAI 157/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db998"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.158_2024.PDF target=_blank>RRAI 158/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "MODIFICA",
      "Fecha": "27/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db999"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.159_2024.PDF target=_blank>RRAI 159/2024</a>",
      "Sujeto": "AYUNTAMIENTO EMILIANO ZAPATA",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "24/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db99a"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.160_2024.PDF target=_blank>RRAI 160/2024</a>",
      "Sujeto": "AYUNTAMIENTO TULANCINGO DE BRAVO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "SOBRESEE",
      "Fecha": "27/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db99b"
      },
      "num": "RRAI 161/2024",
      "Sujeto": "AYUNTAMIENTO FRANCISCO I. MADERO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db99c"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.162_2024.PDF target=_blank>RRAI 162/2024</a>",
      "Sujeto": "AYUNTAMIENTO HUAZALINGO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "SOBRESEE",
      "Fecha": "10/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db99d"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.163_2024.PDF target=_blank>RRAI 163/2024</a>",
      "Sujeto": "AYUNTAMIENTO HUEHUETLA",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "SOBRESEE",
      "Fecha": "27/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db99e"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.164_2024.PDF target=_blank>RRAI 164/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "MODIFICA",
      "Fecha": "24/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db99f"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.165_2024.PDF target=_blank>RRAI 165/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "SOBRESEE",
      "Fecha": "27/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9a0"
      },
      "num": "RRAI 166/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9a1"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.167_2024.PDF target=_blank>RRAI 167/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "REVOCA",
      "Fecha": "27/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9a2"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.168_2024.PDF target=_blank>RRAI 168/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "SOBRESEE",
      "Fecha": "27/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9a3"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.169_2024.PDF target=_blank>RRAI 169/2024</a>",
      "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "24/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9a4"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.170_2024.PDF target=_blank>RRAI 170/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "SOBRESEE",
      "Fecha": "28/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9a5"
      },
      "num": "RRAI 171/2024",
      "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9a6"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.172_2024.PDF target=_blank>RRAI 172/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "MODIFICA",
      "Fecha": "27/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9a7"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.173_2024.PDF target=_blank>RRAI 173/2024</a>",
      "Sujeto": "AYUNTAMIENTO FRANCISCO I. MADERO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "MODIFICA",
      "Fecha": "27/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9a8"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.174_2024.PDF target=_blank>RRAI 174/2024</a>",
      "Sujeto": "AYUNTAMIENTO FRANCISCO I. MADERO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "24/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9a9"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.175_2024.PDF target=_blank>RRAI 175/2024</a>",
      "Sujeto": "AYUNTAMIENTO FRANCISCO I. MADERO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "SOBRESEE",
      "Fecha": "27/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9aa"
      },
      "num": "RRAI 176/2024",
      "Sujeto": "AYUNTAMIENTO ACTOPAN",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9ab"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.177_2024.PDF target=_blank>RRAI 177/2024</a>",
      "Sujeto": "AYUNTAMIENTO ACTOPAN",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "CONFIRMA",
      "Fecha": "24/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9ac"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.178_2024.PDF target=_blank>RRAI 178/2024</a>",
      "Sujeto": "AYUNTAMIENTO TEPEAPULCO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "DESECHA",
      "Fecha": "04/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9ad"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.179_2024.PDF target=_blank>RRAI 179/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "24/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9ae"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.180_2024.PDF target=_blank>RRAI 180/2024</a>",
      "Sujeto": "PARTIDO POLITICO MORENA",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "CONFIRMA",
      "Fecha": "27/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9af"
      },
      "num": "RRAI 181/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9b0"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.182_2024.PDF target=_blank>RRAI 182/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "SOBRESEE",
      "Fecha": "24/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9b1"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.183_2024.PDF target=_blank>RRAI 183/2024</a>",
      "Sujeto": "AYUNTAMIENTO TULA DE ALLENDE",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "SOBRESEE",
      "Fecha": "10/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9b2"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.184_2024.PDF target=_blank>RRAI 184/2024</a>",
      "Sujeto": "AYUNTAMIENTO TULA DE ALLENDE",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "24/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9b3"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.185_2024.PDF target=_blank>RRAI 185/2024</a>",
      "Sujeto": "AYUNTAMIENTO HUAZALINGO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "CONFIRMA",
      "Fecha": "27/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9b4"
      },
      "num": "RRAI 186/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9b5"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.187_2024.PDF target=_blank>RRAI 187/2024</a>",
      "Sujeto": "AYUNTAMIENTO TECOZAUTLA",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "MODIFICA",
      "Fecha": "10/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9b6"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.188_2024.PDF target=_blank>RRAI 188/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "SOBRESEE",
      "Fecha": "10/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9b7"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.189_2024.PDF target=_blank>RRAI 189/2024</a>",
      "Sujeto": "AYUNTAMIENTO ZIMAPÁN",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "24/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9b8"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.190_2024.PDF target=_blank>RRAI 190/2024</a>",
      "Sujeto": "AYUNTAMIENTO FRANCISCO I. MADERO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "SOBRESEE",
      "Fecha": "27/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9b9"
      },
      "num": "RRAI 191/2024",
      "Sujeto": "AYUNTAMIENTO HUAZALINGO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9ba"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.192_2024.PDF target=_blank>RRAI 192/2024</a>",
      "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "SOBRESEE",
      "Fecha": "24/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9bb"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.193_2024.PDF target=_blank>RRAI 193/2024</a>",
      "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "SOBRESEE",
      "Fecha": "10/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9bc"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.194_2024.PDF target=_blank>RRAI 194/2024</a>",
      "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "08/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9bd"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.195_2024.PDF target=_blank>RRAI 195/2024</a>",
      "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "SOBRESEE",
      "Fecha": "27/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9be"
      },
      "num": "RRAI 196/2024",
      "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9bf"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.197_2024.PDF target=_blank>RRAI 197/2024</a>",
      "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "MODIFICA",
      "Fecha": "10/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9c0"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.198_2024.PDF target=_blank>RRAI 198/2024</a>",
      "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "DESECHA",
      "Fecha": "27/03/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9c1"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.199_2024.PDF target=_blank>RRAI 199/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "08/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9c2"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.200_2024.PDF target=_blank>RRAI 200/2024</a>",
      "Sujeto": "COMISION DE DERECHOS HUMANOS DEL ESTADO DE HIDALGO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "SOBRESEE",
      "Fecha": "10/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9c3"
      },
      "num": "RRAI 201/2024",
      "Sujeto": "AYUNTAMIENTO ACTOPAN",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9c4"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.202_2024.PDF target=_blank>RRAI 202/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "SOBRESEE",
      "Fecha": "22/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9c5"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.203_2024.PDF target=_blank>RRAI 203/2024</a>",
      "Sujeto": "AYUNTAMIENTO ZIMAPÁN",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "SOBRESEE",
      "Fecha": "10/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9c6"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.204_2024.PDF target=_blank>RRAI 204/2024</a>",
      "Sujeto": "AYUNTAMIENTO ALFAJAYUCAN",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "08/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9c7"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.205_2024.PDF target=_blank>RRAI 205/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "SOBRESEE",
      "Fecha": "24/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9c8"
      },
      "num": "RRAI 206/2024",
      "Sujeto": "AYUNTAMIENTO ACATLÁN",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9c9"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.207_2024.PDF target=_blank>RRAI 207/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "SOBRESEE",
      "Fecha": "08/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9ca"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.208_2024.PDF target=_blank>RRAI 208/2024</a>",
      "Sujeto": "AYUNTAMIENTO ATOTONILCO DE TULA",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "SOBRESEE",
      "Fecha": "10/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9cb"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.209_2024.PDF target=_blank>RRAI 209/2024</a>",
      "Sujeto": "AYUNTAMIENTO TEPETITLAN",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "08/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9cc"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.210_2024.PDF target=_blank>RRAI 210/2024</a>",
      "Sujeto": "AYUNTAMIENTO AJACUBA",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "SOBRESEE",
      "Fecha": "10/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9cd"
      },
      "num": "RRAI 211/2024",
      "Sujeto": "AYUNTAMIENTO SINGUILUCAN",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9ce"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.212_2024.PDF target=_blank>RRAI 212/2024</a>",
      "Sujeto": "AYUNTAMIENTO XOCHICOATLAN",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "SOBRESEE",
      "Fecha": "08/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9cf"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.213_2024.PDF target=_blank>RRAI 213/2024</a>",
      "Sujeto": "AYUNTAMIENTO XOCHICOATLAN",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "SOBRESEE",
      "Fecha": "10/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9d0"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.214_2024.PDF target=_blank>RRAI 214/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "08/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9d1"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.215_2024.PDF target=_blank>RRAI 215/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "REVOCA",
      "Fecha": "10/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9d2"
      },
      "num": "RRAI 216/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9d3"
      },
      "num": "RRAI 217/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9d4"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.218_2024.PDF target=_blank>RRAI 218/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "SOBRESEE",
      "Fecha": "10/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9d5"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.219_2024.PDF target=_blank>RRAI 219/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "08/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9d6"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.220_2024.PDF target=_blank>RRAI 220/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "SOBRESEE",
      "Fecha": "24/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9d7"
      },
      "num": "RRAI 221/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9d8"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.222_2024.PDF target=_blank>RRAI 222/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "SOBRESEE",
      "Fecha": "08/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9d9"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.223_2024.PDF target=_blank>RRAI 223/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "SOBRESEE",
      "Fecha": "24/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9da"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.224_2024.PDF target=_blank>RRAI 224/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "08/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9db"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.225_2024.PDF target=_blank>RRAI 225/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "SOBRESEE",
      "Fecha": "24/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9dc"
      },
      "num": "RRAI 226/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9dd"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.227_2024.PDF target=_blank>RRAI 227/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "SOBRESEE",
      "Fecha": "08/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9de"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.228_2024.PDF target=_blank>RRAI 228/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "SOBRESEE",
      "Fecha": "24/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9df"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.229_2024.PDF target=_blank>RRAI 229/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "08/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9e0"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.230_2024.PDF target=_blank>RRAI 230/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "SOBRESEE",
      "Fecha": "24/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9e1"
      },
      "num": "RRAI 231/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9e2"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.232_2024.PDF target=_blank>RRAI 232/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "SOBRESEE",
      "Fecha": "08/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9e3"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.233_2024.PDF target=_blank>RRAI 233/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "REVOCA",
      "Fecha": "10/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9e4"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.234_2024.PDF target=_blank>RRAI 234/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "08/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9e5"
      },
      "num": "RRAI 235/2024",
      "Sujeto": "AYUNTAMIENTO ATOTONILCO EL GRANDE",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9e6"
      },
      "num": "RRAI 236/2024",
      "Sujeto": "AYUNTAMIENTO ATOTONILCO EL GRANDE",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9e7"
      },
      "num": "RRAI 237/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9e8"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.238_2024.PDF target=_blank>RRAI 238/2024</a>",
      "Sujeto": "AYUNTAMIENTO TIANGUISTENGO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "MODIFICA",
      "Fecha": "10/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9e9"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.239_2024.PDF target=_blank>RRAI 239/2024</a>",
      "Sujeto": "AYUNTAMIENTO TULA DE ALLENDE",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "08/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9ea"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.240_2024.PDF target=_blank>RRAI 240/2024</a>",
      "Sujeto": "AYUNTAMIENTO TULA DE ALLENDE",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "SOBRESEE",
      "Fecha": "24/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9eb"
      },
      "num": "RRAI 241/2024",
      "Sujeto": "AYUNTAMIENTO TULA DE ALLENDE",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9ec"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.242_2024.PDF target=_blank>RRAI 242/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "SOBRESEE",
      "Fecha": "08/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9ed"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.243_2024.PDF target=_blank>RRAI 243/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "MODIFICA",
      "Fecha": "24/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9ee"
      },
      "num": "RRAI 244/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9ef"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.245_2024.PDF target=_blank>RRAI 245/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "SOBRESEE",
      "Fecha": "10/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9f0"
      },
      "num": "RRAI 246/2024",
      "Sujeto": "AYUNTAMIENTO ALFAJAYUCAN",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9f1"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.247_2024.PDF target=_blank>RRAI 247/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "SOBRESEE",
      "Fecha": "08/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9f2"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.248_2024.PDF target=_blank>RRAI 248/2024</a>",
      "Sujeto": "AYUNTAMIENTO MOLANGO DE ESCAMILLA",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "SOBRESEE",
      "Fecha": "24/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9f3"
      },
      "num": "RRAI 249/2024",
      "Sujeto": "PARTIDO POLITICO MORENA",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9f4"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.250_2024.PDF target=_blank>RRAI 250/2024</a>",
      "Sujeto": "AUDITORIA SUPERIOR DEL ESTADO DE HIDALGO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "CONFIRMA",
      "Fecha": "24/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9f5"
      },
      "num": "RRAI 251/2024",
      "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9f6"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.252_2024.PDF target=_blank>RRAI 252/2024</a>",
      "Sujeto": "AYUNTAMIENTO IXMIQUILPAN",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "SOBRESEE",
      "Fecha": "09/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9f7"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.253_2024.PDF target=_blank>RRAI 253/2024</a>",
      "Sujeto": "AYUNTAMIENTO CHILCUAUTLA",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "MODIFICA",
      "Fecha": "24/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9f8"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.254_2024.PDF target=_blank>RRAI 254/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "08/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9f9"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.255_2024.PDF target=_blank>RRAI 255/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "REVOCA",
      "Fecha": "10/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9fa"
      },
      "num": "RRAI 256/2024",
      "Sujeto": "AYUNTAMIENTO ACTOPAN",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9fb"
      },
      "num": "RRAI 257/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9fc"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.258_2024.PDF target=_blank>RRAI 258/2024</a>",
      "Sujeto": "AYUNTAMIENTO TIANGUISTENGO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "MODIFICA",
      "Fecha": "24/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9fd"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.259_2024.PDF target=_blank>RRAI 259/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "08/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9fe"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.260_2024.PDF target=_blank>RRAI 260/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "SOBRESEE",
      "Fecha": "24/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76db9ff"
      },
      "num": "RRAI 261/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba00"
      },
      "num": "RRAI 262/2024",
      "Sujeto": "PARTIDO REVOLUCIONARIO INSTITUCIONAL",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba01"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.263_2024.PDF target=_blank>RRAI 263/2024</a>",
      "Sujeto": "AYUNTAMIENTO ACTOPAN",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "DESECHA",
      "Fecha": "10/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba02"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.264_2024.PDF target=_blank>RRAI 264/2024</a>",
      "Sujeto": "AYUNTAMIENTO ACTOPAN",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "22/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba03"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.265_2024.PDF target=_blank>RRAI 265/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "REVOCA",
      "Fecha": "24/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba04"
      },
      "num": "RRAI 266/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba05"
      },
      "num": "RRAI  267/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "SOBRESEE",
      "Fecha": "08/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba06"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.268_2024.PDF target=_blank>RRAI 268/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "SOBRESEE",
      "Fecha": "24/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba07"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.269_2024.PDF target=_blank>RRAI 269/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "22/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba08"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.270_2024.PDF target=_blank>RRAI 270/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "SOBRESEE",
      "Fecha": "24/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba09"
      },
      "num": "RRAI 271/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba0a"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.272_2024.PDF target=_blank>RRAI 272/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "SOBRESEE",
      "Fecha": "08/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba0b"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.273_2024.PDF target=_blank>RRAI 273/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "SOBRESEE",
      "Fecha": "24/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba0c"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.274_2024.PDF target=_blank>RRAI 274/2024</a>",
      "Sujeto": "AYUNTAMIENTO TIZAYUCA",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "22/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba0d"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.275_2024.PDF target=_blank>RRAI 275/2024</a>",
      "Sujeto": "AYUNTAMIENTO ACAXOCHITLÁN",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "SOBRESEE",
      "Fecha": "24/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba0e"
      },
      "num": "RRAI 276/2024",
      "Sujeto": "AYUNTAMIENTO HUASCA DE OCAMPO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba0f"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.277_2024.PDF target=_blank>RRAI 277/2024</a>",
      "Sujeto": "AYUNTAMIENTO EPAZOYUCAN",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "SOBRESEE",
      "Fecha": "08/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba10"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.278_2024.PDF target=_blank>RRAI 278/2024</a>",
      "Sujeto": "AYUNTAMIENTO CHAPULHUACAN",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "SOBRESEE",
      "Fecha": "24/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba11"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.279_2024.PDF target=_blank>RRAI 279/2024</a>",
      "Sujeto": "AYUNTAMIENTO APAN",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "22/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba12"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.280_2024.PDF target=_blank>RRAI 280/2024</a>",
      "Sujeto": "AYUNTAMIENTO PACHUCA DE SOTO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "SOBRESEE",
      "Fecha": "24/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba13"
      },
      "num": "RRAI 281/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba14"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.282_2024.PDF target=_blank>RRAI 282/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "SOBRESEE",
      "Fecha": "08/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba15"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.283_2024.PDF target=_blank>RRAI 283/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "SOBRESEE",
      "Fecha": "24/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba16"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.284_2024.PDF target=_blank>RRAI 284/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "22/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba17"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.285_2024.PDF target=_blank>RRAI 285/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "SOBRESEE",
      "Fecha": "24/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba18"
      },
      "num": "RRAI 286/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba19"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.287_2024.PDF target=_blank>RRAI 287/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "SOBRESEE",
      "Fecha": "08/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba1a"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.288_2024.PDF target=_blank>RRAI 288/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "SOBRESEE",
      "Fecha": "24/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba1b"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.289_2024.PDF target=_blank>RRAI 289/2024</a>",
      "Sujeto": "AYUNTAMIENTO TULANCINGO DE BRAVO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "22/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba1c"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.290_2024.PDF target=_blank>RRAI 290/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "SOBRESEE",
      "Fecha": "24/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba1d"
      },
      "num": "RRAI 291/2024",
      "Sujeto": "AYUNTAMIENTO PACHUCA DE SOTO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba1e"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.292_2024.PDF target=_blank>RRAI 292/2024</a>",
      "Sujeto": "AYUNTAMIENTO JALTOCAN",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "SOBRESEE",
      "Fecha": "08/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba1f"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.293_2024.PDF target=_blank>RRAI 293/2024</a>",
      "Sujeto": "AYUNTAMIENTO ATLAPEXCO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "SOBRESEE",
      "Fecha": "08/005/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba20"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.294_2024.PDF target=_blank>RRAI 294/2024</a>",
      "Sujeto": "AYUNTAMIENTO MINERAL DEL MONTE",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "22/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba21"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.295_2024.PDF target=_blank>RRAI 295/2024</a>",
      "Sujeto": "AYUNTAMIENTO TEPETITLAN",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "SOBRESEE",
      "Fecha": "24/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba22"
      },
      "num": "RRAI 296/2024",
      "Sujeto": "AYUNTAMIENTO AGUA BLANCA",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba23"
      },
      "num": "RRAI 297/2024",
      "Sujeto": "AYUNTAMIENTO HUAZALINGO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba24"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.298_2024.PDF target=_blank>RRAI 298/2024</a>",
      "Sujeto": "AYUNTAMIENTO PACHUCA DE SOTO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "SOBRESEE",
      "Fecha": "08/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba25"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.299_2024.PDF target=_blank>RRAI 299/2024</a>",
      "Sujeto": "AYUNTAMIENTO TULANCINGO DE BRAVO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "22/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba26"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.300_2024.PDF target=_blank>RRAI 300/2024</a>",
      "Sujeto": "AYUNTAMIENTO TIANGUISTENGO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "REVOCA",
      "Fecha": "24/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba27"
      },
      "num": "RRAI 301/2024",
      "Sujeto": "AYUNTAMIENTO TIANGUISTENGO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba28"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.302_2024.PDF target=_blank>RRAI 302/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "REVOCA",
      "Fecha": "09/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba29"
      },
      "num": "RRAI 303/2024",
      "Sujeto": "AYUNTAMIENTO TEZONTEPEC DE ALDAMA",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba2a"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.304_2024.PDF target=_blank>RRAI 304/2024</a>",
      "Sujeto": "AYUNTAMIENTO TEZONTEPEC DE ALDAMA",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "22/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba2b"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.305_2024.PDF target=_blank>RRAI 305/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "SOBRESEE",
      "Fecha": "08/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba2c"
      },
      "num": "RRAI 306/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba2d"
      },
      "num": "RRAI 307/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba2e"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.308_2024.PDF target=_blank>RRAI 308/2024</a>",
      "Sujeto": "AYUNTAMIENTO TULA DE ALLENDE",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "SOBRESEE",
      "Fecha": "08/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba2f"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.309_2024.PDF target=_blank>RRAI 309/2024</a>",
      "Sujeto": "AYUNTAMIENTO ACTOPAN",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "22/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba30"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.310_2024.PDF target=_blank>RRAI 310/2024</a>",
      "Sujeto": "AYUNTAMIENTO TLANALAPA",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "SOBRESEE",
      "Fecha": "08/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba31"
      },
      "num": "RRAI 311/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba32"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.312_2024.PDF target=_blank>RRAI 312/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "SOBRESEE",
      "Fecha": "22/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba33"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.313_2024.PDF target=_blank>RRAI 313/2024</a>",
      "Sujeto": "AYUNTAMIENTO METEPEC",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "SOBRESEE",
      "Fecha": "08/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba34"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.314_2024.PDF target=_blank>RRAI 314/2024</a>",
      "Sujeto": "AYUNTAMIENTO OMITLAN DE JUAREZ",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "22/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba35"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.315_2024.PDF target=_blank>RRAI 315/2024</a>",
      "Sujeto": "AYUNTAMIENTO PACULA",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "MODIFICA",
      "Fecha": "24/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba36"
      },
      "num": "RRAI 316/2024",
      "Sujeto": "AYUNTAMIENTO TENANGO DE DORIA",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba37"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.317_2024.PDF target=_blank>RRAI 317/2024</a>",
      "Sujeto": "AYUNTAMIENTO MOLANGO DE ESCAMILLA",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "SOBRESEE",
      "Fecha": "22/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba38"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.318_2024.PDF target=_blank>RRAI 318/2024</a>",
      "Sujeto": "AYUNTAMIENTO CUAUTEPEC DE HINOJOSA",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "SOBRESEE",
      "Fecha": "08/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba39"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.319_2024.PDF target=_blank>RRAI 319/2024</a>",
      "Sujeto": "AYUNTAMIENTO MINERAL DE LA REFORMA",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "22/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba3a"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.320_2024.PDF target=_blank>RRAI 320/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "SOBRESEE",
      "Fecha": "08/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba3b"
      },
      "num": "RRAI 321/2024",
      "Sujeto": "INSTITUTO ESTATAL ELECTORAL DE HIDALGO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba3c"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.322_2024.PDF target=_blank>RRAI 322/2024</a>",
      "Sujeto": "UNIVERSIDAD AUTONOMA DEL ESTADO DE HIDALGO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "SOBRESEE",
      "Fecha": "22/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba3d"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.323_2024.PDF target=_blank>RRAI 323/2024</a>",
      "Sujeto": "PODER LEGISLATIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "SOBRESEE",
      "Fecha": "08/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba3e"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.324_2024.PDF target=_blank>RRAI 324/2024</a>",
      "Sujeto": "AYUNTAMIENTO ACTOPAN",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "MODIFICA",
      "Fecha": "22/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba3f"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.325_2024.PDF target=_blank>RRAI 325/2024</a>",
      "Sujeto": "INSTITUTO ESTATAL ELECTORAL DE HIDALGO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "CONFIRMA",
      "Fecha": "22/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba40"
      },
      "num": "RRAI 326/2024",
      "Sujeto": "INSTITUTO DE TRANSPARENCIA, ACCESO A LA INFORMACIÓN PÚBLICA GUBERNAMENTAL Y PROTECCIÓN DE DATOS PERSONALES DEL ESTADO DE HIDALGO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba41"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.327_2024.PDF target=_blank>RRAI 327/2024</a>",
      "Sujeto": "INSTITUTO ESTATAL ELECTORAL DE HIDALGO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "SOBRESEE",
      "Fecha": "12/06/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba42"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.328_2024.PDF target=_blank>RRAI 328/2024</a>",
      "Sujeto": "INSTITUTO ESTATAL ELECTORAL DE HIDALGO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "CONFIRMA",
      "Fecha": "22/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba43"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.329_2024.PDF target=_blank>RRAI 329/2024</a>",
      "Sujeto": "AYUNTAMIENTO MOLANGO DE ESCAMILLA",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "22/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba44"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.330_2024.PDF target=_blank>RRAI 330/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "SOBRESEE",
      "Fecha": "08/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba45"
      },
      "num": "RRAI 331/2024",
      "Sujeto": "AYUNTAMIENTO PISAFLORES",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba46"
      },
      "num": "RRAI 332/2024",
      "Sujeto": "AYUNTAMIENTO TECOZAUTLA",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba47"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.333_2024.PDF target=_blank>RRAI 333/2024</a>",
      "Sujeto": "AYUNTAMIENTO ALFAJAYUCAN",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "SOBRESEE",
      "Fecha": "08/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba48"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.334_2024.PDF target=_blank>RRAI 334/2024</a>",
      "Sujeto": "AYUNTAMIENTO CUAUTEPEC DE HINOJOSA",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "22/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba49"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.335_2024.PDF target=_blank>RRAI 335/2024</a>",
      "Sujeto": "AYUNTAMIENTO XOCHICOATLAN",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "SOBRESEE",
      "Fecha": "08/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba4a"
      },
      "num": "RRAI 336/2024",
      "Sujeto": "INSTITUTO DE TRANSPARENCIA, ACCESO A LA INFORMACIÓN PÚBLICA GUBERNAMENTAL Y PROTECCIÓN DE DATOS PERSONALES DEL ESTADO DE HIDALGO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba4b"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.337_2024.PDF target=_blank>RRAI 337/2024</a>",
      "Sujeto": "PODER LEGISLATIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "SOBRESEE",
      "Fecha": "12/06/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba4c"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.338_2024.PDF target=_blank>RRAI 338/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "SOBRESEE",
      "Fecha": " 08/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba4d"
      },
      "num": "RRAI 339/2024",
      "Sujeto": "SINDICATO UNICO DE TRABAJADORES AL SERVICIO DEL PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba4e"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.340_2024.PDF target=_blank>RRAI 340/2024</a>",
      "Sujeto": "AYUNTAMIENTO NOPALA DE VILLAGRÁN",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "DESECHA",
      "Fecha": "24/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba4f"
      },
      "num": "RRAI 341/2024",
      "Sujeto": "AYUNTAMIENTO FRANCISCO I. MADERO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba50"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.342_2024.PDF target=_blank>RRAI 342/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "SOBRESEE",
      "Fecha": "22/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba51"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.343_2024.PDF target=_blank>RRAI 343/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "SOBRESEE",
      "Fecha": "08/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba52"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.344_2024.PDF target=_blank>RRAI 344/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "12/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba53"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.345_2024.PDF target=_blank>RRAI 345/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "SOBRESEE",
      "Fecha": "22/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba54"
      },
      "num": "RRAI 346/2024",
      "Sujeto": "AYUNTAMIENTO TULA DE ALLENDE",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba55"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.347_2024.PDF target=_blank>RRAI 347/2024</a>",
      "Sujeto": "AUDITORIA SUPERIOR DEL ESTADO DE HIDALGO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "SOBRESEE",
      "Fecha": "22/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba56"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.348_2024.PDF target=_blank>RRAI 348/2024</a>",
      "Sujeto": "AYUNTAMIENTO TULA DE ALLENDE ",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "DESECHA",
      "Fecha": "08/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba57"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.349_2024.PDF target=_blank>RRAI 349/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "12/06/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba58"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.350_2024.PDF target=_blank>RRAI 350/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "SOBRESEE",
      "Fecha": "08/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba59"
      },
      "num": "RRAI 351/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba5a"
      },
      "num": "RRAI 352/2024",
      "Sujeto": "AYUNTAMIENTO TIANGUISTENGO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba5b"
      },
      "num": "RRAI 353/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba5c"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.354_2024.PDF target=_blank>RRAI 354/2024</a>",
      "Sujeto": "AYUNTAMIENTO TLANALAPA",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "12/06/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba5d"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.355_2024.PDF target=_blank>RRAI 355/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "CONFIRMA",
      "Fecha": "22/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba5e"
      },
      "num": "RRAI 356/2024",
      "Sujeto": "AYUNTAMIENTO TLANALAPA",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba5f"
      },
      "num": "RRAI 357/2024",
      "Sujeto": "AYUNTAMIENTO TIANGUISTENGO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba60"
      },
      "num": "RRAI 358/2024",
      "Sujeto": "AYUNTAMIENTO APAN",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba61"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.359_2024.PDF target=_blank>RRAI 359/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "12/06/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba62"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.360_2024.PDF target=_blank>RRAI 360/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "REVOCA",
      "Fecha": "08/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba63"
      },
      "num": "RRAI 361/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba64"
      },
      "num": "RRAI 362/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba65"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.363_2024.PDF target=_blank>RRAI 363/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "SOBRESEE",
      "Fecha": "22/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba66"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.364_2024.PDF target=_blank>RRAI 364/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "12/06/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba67"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.365_2024.PDF target=_blank>RRAI 365/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "SOBRESEE",
      "Fecha": "08/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba68"
      },
      "num": "RRAI 366/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba69"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.367_2024.PDF target=_blank>RRAI 367/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "SOBRESEE",
      "Fecha": "12/06/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba6a"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.368_2024.PDF target=_blank>RRAI 368/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "SOBRESEE",
      "Fecha": "22/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba6b"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.369_2024.PDF target=_blank>RRAI 369/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "12/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba6c"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.370_2024.PDF target=_blank>RRAI 370/2024</a>",
      "Sujeto": "AYUNTAMIENTO FRANCISCO I. MADERO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "DESECHA",
      "Fecha": "24/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba6d"
      },
      "num": "RRAI 371/2024",
      "Sujeto": "AYUNTAMIENTO FRANCISCO I. MADERO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba6e"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.372_2024.PDF target=_blank>RRAI 372/2024</a>",
      "Sujeto": "AYUNTAMIENTO ACTOPAN",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "SOBRESEE",
      "Fecha": "12/06/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba6f"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.373_2024.PDF target=_blank>RRAI 373/2024</a>",
      "Sujeto": "AYUNTAMIENTO APAN",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "SOBRESEE",
      "Fecha": "22/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba70"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.374_2024.PDF target=_blank>RRAI 374/2024</a>",
      "Sujeto": "AYUNTAMIENTO TLANALAPA",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "12/06/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba71"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.375_2024.PDF target=_blank>RRAI 375/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "SOBRESEE",
      "Fecha": "22/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba72"
      },
      "num": "RRAI 376/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba73"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.377_2024.PDF target=_blank>RRAI 377/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "SOBRESEE",
      "Fecha": "12/06/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba74"
      },
      "num": "RRAI 378/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba75"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.379_2024.PDF target=_blank>RRAI 379/2024</a>",
      "Sujeto": "AYUNTAMIENTO LA MISION",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "12/06/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba76"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.380_2024.PDF target=_blank>RRAI 380/2024</a>",
      "Sujeto": "AYUNTAMIENTO SAN AGUSTIN TLAXIACA",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "SOBRESEE",
      "Fecha": "22/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba77"
      },
      "num": "RRAI 381/2024",
      "Sujeto": "AYUNTAMIENTO EL ARENAL",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba78"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.382_2024.PDF target=_blank>RRAI 382/2024</a>",
      "Sujeto": "AYUNTAMIENTO HUEHUETLA",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "SOBRESEE",
      "Fecha": "12/06/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba79"
      },
      "num": "RRAI 383/2024",
      "Sujeto": "AYUNTAMIENTO HUAUTLA",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba7a"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.384_2024.PDF target=_blank>RRAI 384/2024</a>",
      "Sujeto": "AYUNTAMIENTO TETEPANGO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "12/06/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba7b"
      },
      "num": "RRAI 385/2024",
      "Sujeto": "AYUNTAMIENTO ACATLAN",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba7c"
      },
      "num": "RRAI 386/2024",
      "Sujeto": "AYUNTAMIENTO ACTOPAN",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba7d"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.387_2024.PDF target=_blank>RRAI 387/2024</a>",
      "Sujeto": "AYUNTAMIENTO ELOXOCHITLAN",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "SOBRESEE",
      "Fecha": "12/06/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba7e"
      },
      "num": "RRAI 388/2024",
      "Sujeto": "AYUNTAMIENTO HUEJUTLA DE REYES",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba7f"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.389_2024.PDF target=_blank>RRAI 389/2024</a>",
      "Sujeto": "AYUNTAMIENTO TIANGUISTENGO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "12/06/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba80"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.390_2024.PDF target=_blank>RRAI 390/2024</a>",
      "Sujeto": "AYUNTAMIENTO TULA DE ALLENDE",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "SOBRESEE",
      "Fecha": "22/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba81"
      },
      "num": "RRAI 391/2024",
      "Sujeto": "AYUNTAMIENTO ZACUALTIPAN",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba82"
      },
      "num": "RRAI 392/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba83"
      },
      "num": "RRAI 393/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba84"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.394_2024.PDF target=_blank>RRAI 394/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "12/06/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba85"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.395_2024.PDF target=_blank>RRAI 395/2024</a>",
      "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "SOBRESEE",
      "Fecha": "12/06/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba86"
      },
      "num": "RRAI 396/2024",
      "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba87"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.397_2024.PDF target=_blank>RRAI 397/2024</a>",
      "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "SOBRESEE",
      "Fecha": "12/06/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba88"
      },
      "num": "RRAI 398/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba89"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.399_2024.PDF target=_blank>RRAI 399/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "12/06/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba8a"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.400_2024.PDF target=_blank>RRAI 400/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "SOBRESEE",
      "Fecha": "22/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba8b"
      },
      "num": "RRAI 401/2024",
      "Sujeto": "AYUNTAMIENTO XOCHICOATLAN",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba8c"
      },
      "num": "RRAI 402/2024",
      "Sujeto": "AYUNTAMIENTO JUAREZ",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba8d"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.403_2024.PDF target=_blank>RRAI 403/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "DESECHA",
      "Fecha": "22/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba8e"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.404_2024.PDF target=_blank>RRAI 404/2024</a>",
      "Sujeto": "AYUNTAMIENTO JUAREZ ",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "12/06/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba8f"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.405_2024.PDF target=_blank>RRAI 405/2024</a>",
      "Sujeto": "AYUNTAMIENTO JUAREZ ",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "SOBRESEE",
      "Fecha": "22/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba90"
      },
      "num": "RRAI 406/2024",
      "Sujeto": "AYUNTAMIENTO JUAREZ ",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba91"
      },
      "num": "RRAI 407/2024",
      "Sujeto": "AYUNTAMIENTO JUAREZ ",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba92"
      },
      "num": "RRAI 408/2024",
      "Sujeto": "AYUNTAMIENTO JUAREZ ",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba93"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.409_2024.PDF target=_blank>RRAI 409/2024</a>",
      "Sujeto": "AYUNTAMIENTO PACHUCA DE SOTO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "12/06/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba94"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.410_2024.PDF target=_blank>RRAI 410/2024</a>",
      "Sujeto": "AYUNTAMIENTO MINERAL DE LA REFORMA",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "CONFIRMA",
      "Fecha": "22/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba95"
      },
      "num": "RRAI 411/2024",
      "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba96"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.412_2024.PDF target=_blank>RRAI 412/2024</a>",
      "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "SOBRESEE",
      "Fecha": "12/06/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba97"
      },
      "num": "RRAI 413/2024",
      "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba98"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.414_2024.PDF target=_blank>RRAI 414/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "12/06/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba99"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.415_2024.PDF target=_blank>RRAI 415/2024</a>",
      "Sujeto": "AYUNTAMIENTO PACHUCA DE SOTO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "SOBRESEE",
      "Fecha": "12/06/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba9a"
      },
      "num": "RRAI 416/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba9b"
      },
      "num": "RRAI 417/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba9c"
      },
      "num": "RRAI 418/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba9d"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.419_2024.PDF target=_blank>RRAI 419/2024</a>",
      "Sujeto": "AYUNTAMIENTO FRANCISCO I. MADERO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "12/06/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba9e"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.420_2024.PDF target=_blank>RRAI 420/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "SOBRESEE",
      "Fecha": "22/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dba9f"
      },
      "num": "RRAI 421/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbaa0"
      },
      "num": "RRAI 422/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbaa1"
      },
      "num": "RRAI 423/2024",
      "Sujeto": "AYUNTAMIENTO MINERAL DE LA REFORMA",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbaa2"
      },
      "num": "RRAI 424/2024",
      "Sujeto": "AYUNTAMIENTO EL ARENAL",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbaa3"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.425_2024.PDF target=_blank>RRAI 425/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "SOBRESEE",
      "Fecha": "22/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbaa4"
      },
      "num": "RRAI 426/2024",
      "Sujeto": "AYUNTAMIENTO MINERAL DE LA REFORMA",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbaa5"
      },
      "num": "RRAI 427/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbaa6"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.428_2024.PDF target=_blank>RRAI 428/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "DESECHA",
      "Fecha": "13/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbaa7"
      },
      "num": "RRAI 429/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbaa8"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.430_2024.PDF target=_blank>RRAI 430/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "DESECHA",
      "Fecha": "22/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbaa9"
      },
      "num": "RRAI 431/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbaaa"
      },
      "num": "RRAI 432/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbaab"
      },
      "num": "RRAI 433/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbaac"
      },
      "num": "RRAI 434/2024",
      "Sujeto": "AYUNTAMIENTO TIANGUISTENGO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbaad"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.435_2024.PDF target=_blank>RRAI 435/2024</a>",
      "Sujeto": "AYUNTAMIENTO SAN AGUSTIN TLAXIACA",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "SOBRESEE",
      "Fecha": "12/06/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbaae"
      },
      "num": "RRAI 436/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbaaf"
      },
      "num": "RRAI 437/2024",
      "Sujeto": "AYUNTAMIENTO PACHUCA DE SOTO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbab0"
      },
      "num": "RRAI 438/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbab1"
      },
      "num": "RRAI 439/2024",
      "Sujeto": "AYUNTAMIENTO PACHUCA DE SOTO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbab2"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.440_2024.PDF target=_blank>RRAI 440/2024</a>",
      "Sujeto": "AYUNTAMIENTO MINERAL DE LA REFORMA",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "SOBRESEE",
      "Fecha": "12/06/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbab3"
      },
      "num": "RRAI 441/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbab4"
      },
      "num": "RRAI 442/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbab5"
      },
      "num": "RRAI 443/2024",
      "Sujeto": "AYUNTAMIENTO TETEPANGO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbab6"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.444_2024.PDF target=_blank>RRAI 444/2024</a>",
      "Sujeto": "AYUNTAMIENTO APAN",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "DESECHA",
      "Fecha": "22/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbab7"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.445_2024.PDF target=_blank>RRAI 445/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "DESECHA",
      "Fecha": "22/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbab8"
      },
      "num": "RRAI 446/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbab9"
      },
      "num": "RRAI 447/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbaba"
      },
      "num": "RRAI 448/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbabb"
      },
      "num": "RRAI 449/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbabc"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.450_2024.PDF target=_blank>RRAI 450/2024</a>",
      "Sujeto": "INSTITUTO DE TRANSPARENCIA, ACCESO A LA INFORMACIÓN PÚBLICA GUBERNAMENTAL Y PROTECCIÓN DE DATOS PERSONALES DEL ESTADO DE HIDALGO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "DESECHA",
      "Fecha": "12/06/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbabd"
      },
      "num": "RRAI 451/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbabe"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.452_2024.PDF target=_blank>RRAI 452/2024</a>",
      "Sujeto": "AYUNTAMIENTO HUASCA DE OCAMPO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "DESECHA",
      "Fecha": "12/06/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbabf"
      },
      "num": "RRAI 453/2024",
      "Sujeto": "AYUNTAMIENTO MINERAL DE LA REFORMA",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbac0"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.454_2024.PDF target=_blank>RRAI 454/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "DESECHA",
      "Fecha": "31/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbac1"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.455_2024.PDF target=_blank>RRAI 455/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "SOBRESEE",
      "Fecha": "12/06/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbac2"
      },
      "num": "RRAI 456/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbac3"
      },
      "num": "RRAI 457/2024",
      "Sujeto": "AYUNTAMIENTO MINERAL DE LA REFORMA",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbac4"
      },
      "num": "RRAI 458/2024",
      "Sujeto": "AYUNTAMIENTO ATOTONILCO DE TULA",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbac5"
      },
      "num": "RRAI 459/2024",
      "Sujeto": "AYUNTAMIENTO MINERAL DEL CHICO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbac6"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.460_2024.PDF target=_blank>RRAI 460/2024</a>",
      "Sujeto": "AYUNTAMIENTO MOLANGO DE ESCAMILLA",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "SOBRESEE",
      "Fecha": "12/06/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbac7"
      },
      "num": "RRAI 461/2024",
      "Sujeto": "AYUNTAMIENTO PROGRESO DE OBREGON",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbac8"
      },
      "num": "RRAI 462/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbac9"
      },
      "num": "RRAI 463/2024",
      "Sujeto": "AYUNTAMIENTO MINERAL DE LA REFORMA",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbaca"
      },
      "num": "RRAI 464/2024",
      "Sujeto": "AUDITORIA SUPERIOR DEL ESTADO DE HIDALGO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbacb"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.465_2024.PDF target=_blank>RRAI 465/2024</a>",
      "Sujeto": "AYUNTAMIENTO XOCHICOATLAN",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "SOBRESEE",
      "Fecha": "12/06/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbacc"
      },
      "num": "RRAI 466/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbacd"
      },
      "num": "RRAI 467/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbace"
      },
      "num": "RRAI 468/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbacf"
      },
      "num": "RRAI 469/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbad0"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.470_2024.PDF target=_blank>RRAI 470/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "SOBRESEE",
      "Fecha": "12/06/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbad1"
      },
      "num": "RRAI 471/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbad2"
      },
      "num": "RRAI 472/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbad3"
      },
      "num": "RRAI 473/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbad4"
      },
      "num": "RRAI 474/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbad5"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.475_2024.PDF target=_blank>RRAI 475/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "SOBRESEE",
      "Fecha": "12/06/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbad6"
      },
      "num": "RRAI 476/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbad7"
      },
      "num": "RRAI 477/2024",
      "Sujeto": "AYUNTAMIENTO TEZONTEPEC DE ALDAMA",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbad8"
      },
      "num": "RRAI 478/2024",
      "Sujeto": "AYUNTAMIENTO SINGUILUCAN",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbad9"
      },
      "num": "RRAI 479/2024",
      "Sujeto": "AYUNTAMIENTO CALNALI",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbada"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.480_2024.PDF target=_blank>RRAI 480/2024</a>",
      "Sujeto": "AYUNTAMIENTO ELOXOCHITLAN",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "SOBRESEE",
      "Fecha": "12/062024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbadb"
      },
      "num": "RRAI 481/2024",
      "Sujeto": "AYUNTAMIENTO JACALA",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbadc"
      },
      "num": "RRAI 482/2024",
      "Sujeto": "AYUNTAMIENTO JALTOCAN",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbadd"
      },
      "num": "RRAI 483/2024",
      "Sujeto": "AYUNTAMIENTO JUAREZ",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbade"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.484_2024.PDF target=_blank>RRAI 484/2024</a>",
      "Sujeto": "AYUNTAMIENTO HUEJUTLA DE REYES",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "DESECHA",
      "Fecha": "12/06/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbadf"
      },
      "num": "RRAI 485/2024",
      "Sujeto": "AYUNTAMIENTO TLAXCOAPAN",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbae0"
      },
      "num": "RRAI 486/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbae1"
      },
      "num": "RRAI 487/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbae2"
      },
      "num": "RRAI 488/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbae3"
      },
      "num": "RRAI 489/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbae4"
      },
      "num": "RRAI 490/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbae5"
      },
      "num": "RRAI 491/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbae6"
      },
      "num": "RRAI 492/2024",
      "Sujeto": "PODER JUDICIAL DEL ESTADO DE HIDALGO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbae7"
      },
      "num": "RRAI 493/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbae8"
      },
      "num": "RRAI 494/2024",
      "Sujeto": "SINDICATO UNICO DE TRABAJADORES AL SERVICIO DEL MUNICIPIO DE APAN",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbae9"
      },
      "num": "RRAI 495/2024",
      "Sujeto": "INSTITUTO ESTATAL ELECTORAL DE HIDALGO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbaea"
      },
      "num": "RRAI 496/2024",
      "Sujeto": "AYUNTAMIENTO ATOTONILCO EL GRANDE",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbaeb"
      },
      "num": "RRAI 497/2024",
      "Sujeto": "AYUNTAMIENTO MINERAL DE LA REFORMA",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbaec"
      },
      "num": "RRAI 498/2024",
      "Sujeto": "AYUNTAMIENTO SAN AGUSTIN TLAXIACA",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbaed"
      },
      "num": "RRAI 499/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbaee"
      },
      "num": "RRAI 500/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbaef"
      },
      "num": "RRAI 501/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbaf0"
      },
      "num": "RRAI 502/2024",
      "Sujeto": "AYUNTAMIENTO PACHUCA DE SOTO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbaf1"
      },
      "num": "RRAI 503/2024",
      "Sujeto": "AYUNTAMIENTO SANTIAGO DE ANAYA",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbaf2"
      },
      "num": "RRAI 504/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbaf3"
      },
      "num": "RRAI 505/2024",
      "Sujeto": "AYUNTAMIENTO APAN",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbaf4"
      },
      "num": "RRAI 506/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbaf5"
      },
      "num": "RRAI 507/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbaf6"
      },
      "num": "RRAI 508/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbaf7"
      },
      "num": "RRAI 509/2024",
      "Sujeto": "AYUNTAMIENTO TEPEJI DEL RIO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbaf8"
      },
      "num": "RRAI 510/2024",
      "Sujeto": "PODER JUDICIAL DEL ESTADO DE HIDALGO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbaf9"
      },
      "num": "RRAI 511/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbafa"
      },
      "num": "RRAI 512/2024",
      "Sujeto": "AYUNTAMIENTO TLAXCOAPAN",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbafb"
      },
      "num": "RRAI 513/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbafc"
      },
      "num": "RRAI 514/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbafd"
      },
      "num": "RRAI 515/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbafe"
      },
      "num": "RRAI 516/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbaff"
      },
      "num": "RRAI 517/2024",
      "Sujeto": "AYUNTAMIENTO JUAREZ",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb00"
      },
      "num": "RRAI 518/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb01"
      },
      "num": "RRAI 519/2024",
      "Sujeto": "AYUNTAMIENTO CALNALI",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb02"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRAI.520_2024.PDF target=_blank>RRAI 520/2024</a>",
      "Sujeto": "AYUNTAMIENTO ACTOPAN",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "DESECHA",
      "Fecha": "12/06/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb03"
      },
      "num": "RRAI 521/2024",
      "Sujeto": "PODER JUDICIAL DEL ESTADO DE HIDALGO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb04"
      },
      "num": "RRAI 522/2024",
      "Sujeto": "AYUNTAMIENTO ATLAPEXCO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb05"
      },
      "num": "RRAI 523/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb06"
      },
      "num": "RRAI 524/2024",
      "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb07"
      },
      "num": "RRAI 525/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb08"
      },
      "num": "RRAI 526/2024",
      "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb09"
      },
      "num": "RRAI 527/2024",
      "Sujeto": "AYUNTAMIENTO PACHUCA DE SOTO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb0a"
      },
      "num": "RRAI 528/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb0b"
      },
      "num": "RRAI 529/2024",
      "Sujeto": "AYUNTAMIENTO SINGUILUCAN",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb0c"
      },
      "num": "RRAI 530/2024",
      "Sujeto": "UNIVERSIDAD AUTONOMA DEL ESTADO DE HIDALGO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb0d"
      },
      "num": "RRAI 531/2024",
      "Sujeto": "AYUNTAMIENTO APAN",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb0e"
      },
      "num": "RRAI 532/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb0f"
      },
      "num": "RRAI 533/2024",
      "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb10"
      },
      "num": "RRAI 534/2024",
      "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb11"
      },
      "num": "RRAI 535/2024",
      "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb12"
      },
      "num": "RRAI 536/2024",
      "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb13"
      },
      "num": "RRAI 537/2024",
      "Sujeto": "AYUNTAMIENTO ATITALAQUIA",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb14"
      },
      "num": "RRAI 538/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb15"
      },
      "num": "RRAI 539/2024",
      "Sujeto": "AYUNTAMIENTO ACTOPAN",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb16"
      },
      "num": "RRAI 540/2024",
      "Sujeto": "AYUNTAMIENTO ACTOPAN",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb17"
      },
      "num": "RRAI 541/2024",
      "Sujeto": "AYUNTAMIENTO TIANGUISTENGO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb18"
      },
      "num": "RRAI 542/2024",
      "Sujeto": "AYUNTAMIENTO TIANGUISTENGO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb19"
      },
      "num": "RRAI 543/2024",
      "Sujeto": "AYUNTAMIENTO TIANGUISTENGO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb1a"
      },
      "num": "RRAI 544/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb1b"
      },
      "num": "RRAI 545/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb1c"
      },
      "num": "RRAI 546/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb1d"
      },
      "num": "RRAI 547/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb1e"
      },
      "num": "RRAI 548/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb1f"
      },
      "num": "RRAI 549/2024",
      "Sujeto": "AYUNTAMIENTO ATOTONILCO DE TULA",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb20"
      },
      "num": "RRAI 550/2024",
      "Sujeto": "PODER LEGISLATIVO DEL ESTADO DE HIDALGO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb21"
      },
      "num": "RRAI 551/2024",
      "Sujeto": "AYUNTAMIENTO MINERAL DE LA REFORMA",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb22"
      },
      "num": "RRAI 552/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb23"
      },
      "num": "RRAI 553/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb24"
      },
      "num": "RRAI 554/2024",
      "Sujeto": "AYUNTAMIENTO MINERAL DE LA REFORMA",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb25"
      },
      "num": "RRAI 555/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb26"
      },
      "num": "RRAI 556/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb27"
      },
      "num": "RRAI 557/2024",
      "Sujeto": "AYUNTAMIENTO PACHUCA DE SOTO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb28"
      },
      "num": "RRAI 558/2024",
      "Sujeto": "INSTITUTO ESTATAL ELECTORAL DE HIDALGO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb29"
      },
      "num": "RRAI 559/2024",
      "Sujeto": "AYUNTAMIENTO TETEPANGO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb2a"
      },
      "num": "RRAI 560/2024",
      "Sujeto": "AYUNTAMIENTO MINERAL DE LA REFORMA",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb2b"
      },
      "num": "RRAI 561/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb2c"
      },
      "num": "RRAI 562/2024",
      "Sujeto": "AYUNTAMIENTO ACTOPAN",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb2d"
      },
      "num": "RRAI 563/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb2e"
      },
      "num": "RRAI 564/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb2f"
      },
      "num": "RRAI 565/2024",
      "Sujeto": "AYUNTAMIENTO CUAUTEPEC DE HINOJOSA",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb30"
      },
      "num": "RRAI 566/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb31"
      },
      "num": "RRAI 567/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRO. LUIS A. HERNANDEZ RÍOS",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb32"
      },
      "num": "RRAI 568/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.A. E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb33"
      },
      "num": "RRAI 569/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb34"
      },
      "num": "RRAI 570/2024",
      "Sujeto": "PODER JUDICIAL DEL ESTADO DE HIDALGO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb35"
      },
      "num": "RRAI 571/2024",
      "Sujeto": "AYUNTAMIENTO TULA DE ALLENDE",
      "Consejero": "MTRA. MYRNA ROCIO MOCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb36"
      },
      "num": "RRDP 001/2024",
      "Sujeto": "AYUNTAMIENTO ZIMAPÁN",
      "Consejero": "MTRA. MYRNA ROCÍO MONCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb37"
      },
      "num": "RRDP 002/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRO. LUIS A. HERNÁNDEZ RÍOS",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb38"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRDP.003_2024.PDF target=_blank>RRDP 003/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.A.E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "SOBRESEE",
      "Fecha": "24/04/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb39"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRDP.004_2024.PDF target=_blank>RRDP 004/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "SOBRESEE",
      "Fecha": "12/06/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb3a"
      },
      "num": "RRDP 005/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb3b"
      },
      "num": "RRDP 006/2024",
      "Sujeto": "AYUNTAMIENTO PACHUCA DE SOTO",
      "Consejero": "MTRA. MYRNA ROCÍO MONCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb3c"
      },
      "num": "RRDP 007/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRO. LUIS A. HERNÁNDEZ RÍOS",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb3d"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRDP.008_2024.PDF target=_blank>RRDP 008/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "L.A.E. ELIZABETH MONRIBOT DOMÍNGUEZ",
      "Sentido": "DESECHA",
      "Fecha": "31/05/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb3e"
      },
      "num": "RRDP 009/2024",
      "Sujeto": "AYUNTAMIENTO PACHUCA DE SOTO",
      "Consejero": "L.E. RAÚL KENNEDY CABILDO",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb3f"
      },
      "num": "<a href=http://www.itaih.org.mx/A73/IIIAB/2024/RRDP.010_2024.PDF target=_blank>RRDP 010/2024</a>",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "LIC. SIGIFREDO RIVERA MERCADO",
      "Sentido": "DESECHA",
      "Fecha": "12/06/2024"
    },
    {
      "_id": {
        "$oid": "66b14dd3b3c7321ec76dbb40"
      },
      "num": "RRDP 011/2024",
      "Sujeto": "PODER EJECUTIVO DEL ESTADO DE HIDALGO",
      "Consejero": "MTRA. MYRNA ROCÍO MONCADA MAHUEM",
      "Sentido": "PENDIENTE POR DICTAR RESOLUCION",
      "Fecha": "PENDIENTE POR DICTAR RESOLUCION"
    }*/
  ];
   
              $('#tableRecurso').bootstrapTable({
                  //Assigning data to table
                  data: jsondata
              
              });
        
            
          }).on('shown.bs.tab');