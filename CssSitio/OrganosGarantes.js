 $(function() {
    $('#table').bootstrapTable({
        exportTypes: ['txt','excel'],
      data: [
        {
          'est': 'Aguascalientes',
          'liga':'https://www.itea.org.mx/',
          'foto':'../img/Organosgarantes/01Aguascalientes.png'
         },
         {
          'est': 'Baja California',
          'liga':'http://www.itaipbc.org.mx/itaipBC-2019/',
          'foto':'../img/Organosgarantes/02BajaCalifornia.png'
         },
         {
          'est': 'Baja California Sur',
          'liga':'http://www.itaibcs.org.mx/',
          'foto':'../img/Organosgarantes/03BajaCaliforniaSur.png'
         },
         {
          'est': 'Campeche',
          'liga':'https://www.cotaipec.org.mx/',
          'foto':'../img/Organosgarantes/04Campeche.png'
         },
         {
          'est': 'Chiapas',
          'liga':'http://itaipchiapas.org.mx/',
          'foto':'../img/Organosgarantes/05Chiapas.png'
         },
         {
          'est': 'Chihuahua',
          'liga':'https://www.ichitaip.org/',
          'foto':'../img/Organosgarantes/06Chihuahua.png'
         },
         {
          'est': 'Ciudad de México',
          'liga':'https://infocdmx.org.mx/index.php',
          'foto':'../img/Organosgarantes/07Cdmx.png'
         },
         {
          'est': 'Coahuila',
          'liga':'http://www.icai.org.mx/',
          'foto':'../img/Organosgarantes/08Coahuila.png'
         },
         {
          'est': 'Colima',
          'liga':'http://infocol.org.mx/w/',
          'foto':'../img/Organosgarantes/09Colima.png'
         },
         {
          'est': 'Durango',
          'liga':'https://idaip.org.mx/sitio/',
          'foto':'../img/Organosgarantes/10Durango.png'
         },
         {
          'est': 'Guanajuato',
          'liga':'https://iacip-gto.org.mx/wn/',
          'foto':'../img/Organosgarantes/11Guanajuato.png'
         },
         {
          'est': 'Guerrero',
          'liga':'https://itaigro.org.mx/',
          'foto':'../img/Organosgarantes/12Guerrero.jpg'
         },
         {
          'est': 'Hidalgo',
          'liga':'http://www.itaih.org.mx/',
          'foto':'../img/Organosgarantes/13ITAIH.png'
         },
         {
          'est': 'Jalisco',
          'liga':'https://www.itei.org.mx/v4/',
          'foto':'../img/Organosgarantes/14Jalisco.png'
         },
         {
          'est': 'Estado de México',
          'liga':'https://www.infoem.org.mx/',
          'foto':'../img/Organosgarantes/15Infoem.png'
         },
         {
          'est': 'Michoacán',
          'liga':'http://imaip.org.mx/',
          'foto':'../img/Organosgarantes/16michoacan2.png'
         },
         {
          'est': 'Morelos',
          'liga':'https://www.imipe.org.mx/',
          'foto':'../img/Organosgarantes/17Morelos.jpg'
         },
         {
          'est': 'Nayarit',
          'liga':'https://www.itainayarit.org/',
          'foto':'../img/Organosgarantes/18Nayarit.png'
         },
         {
          'est': 'Nuevo León',
          'liga':'https://cotai.org.mx/',
          'foto':'../img/Organosgarantes/19NuevoLeon.png'
         },
         {
          'est': 'Oaxaca',
          'liga':'https://ogaipoaxaca.org.mx',
          'foto':'../img/Organosgarantes/20Oaxaca.png'
         },
         {
          'est': 'Puebla',
          'liga':'https://www.itaipue.org.mx/portal2020/',
          'foto':'../img/Organosgarantes/21Puebla.jpg'
         },
         {
          'est': 'Querétaro',
          'liga':'https://www.ceigqro.org.mx/',
          'foto':'../img/Organosgarantes/22Queretaro.png'
         },
         {
          'est': 'Quintana Roo',
          'liga':'http://www.idaipqroo.org.mx/',
          'foto':'../img/Organosgarantes/23QuintanaRoo.jpg'
         },
         {
          'est': 'San Luis Potosí',
          'liga':'http://www.cegaipslp.org.mx/',
          'foto':'../img/Organosgarantes/24SanLuisPotosi.jpg'
         },
         {
          'est': 'Sinaloa',
          'liga':'https://www.ceaipsinaloa.org.mx/',
          'foto':'../img/Organosgarantes/25Sinaloa.png'
         },
         {
          'est': 'Sonora',
          'liga':'https://transparenciasonora.org/',
          'foto':'../img/Organosgarantes/26Sonora.jpg'
         },
         {
          'est': 'Tabasco',
          'liga':'http://itaip.org.mx/site/',
          'foto':'../img/Organosgarantes/29Tabasco.png'
         },
         {
          'est': 'Tamaulipas',
          'liga':'https://www.itait.org.mx/itait/',
          'foto':'../img/Organosgarantes/28Tamaulipas.png'
         },
         {
          'est': 'Tlaxcala',
          'liga':'https://iaiptlaxcala.org.mx/',
          'foto':'../img/Organosgarantes/29Tlaxcala.png'
         },
         {
          'est': 'Veracruz',
          'liga':'https://ivai.org.mx/',
          'foto':'../img/Organosgarantes/30Veracruz.jpg'
         },
          {
          'est': 'Yucatán',
          'liga':'https://www.inaipyucatan.org.mx/transparencia/Default.aspx',
          'foto':'../img/Organosgarantes/31Yucatan.png'
         },
         {
          'est': 'Zacatecas',
          'liga':'https://izai.org.mx/',
          'foto':'../img/Organosgarantes/32Zacatecas.png'
         }  

      ]
    })
  })

  function customViewFormatter (data) {
    var template = $('#profileTemplate').html()
    var view = ''
    $.each(data, function (i, row) {
      view += template.replace('%EST%', row.est)
         .replace('%LIGA%', row.liga)
         .replace('%FOTO%', row.foto);
        
    })

    return `<div class="row mx-0">${view}</div>`
  }


 