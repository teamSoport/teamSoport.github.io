const d=document;
    
     
      
      
let url=[
    {
    "bp":"1Tp",
    "bs":"1Ts",
     "url":`../Audio/LT/1 ley de transparencia.mp3`
    },
    {
       "bp":"2Tp",
       "bs":"2Ts",
       "url":`../Audio/LT/2 titulo primero.mp3`
     },
     {
        "bp":"3Tp",
        "bs":"3Ts",
       "url":`../Audio/LT/3 titulo segundo.mp3`
     },
     {
       "bp":"4Tp",
       "bs":"4Ts",
       "url":`../Audio/LT/4 titulo tercero.mp3`
      },
      {
         "bp":"5Tp",
         "bs":"5Ts",
         "url":`../Audio/LT/5 titulo cuarto.mp3`
      },
      {
         "bp":"6Tp",
         "bs":"6Ts",
         "url":`../Audio/LT/6 titulo quinto.mp3`
       },
       {
        "bp":"7Tp",
        "bs":"7Ts",
        "url":`../Audio/LT/7 titulo sexto.mp3`
        },
        {
         "bp":"8Tp",
         "bs":"8Ts",
         "url":`../Audio/LT/9 titulo septimo.mp3`
        },
        {
         "bp":"9Tp",
         "bs":"9Ts",
         "url":`../Audio/LT/8 titulo octavo.mp3`
        },
        {
          "bp":"10Tp",
          "bs":"10Ts",
           "url":`../Audio/LT/1DP disposiciones generales.mp3`
          },
          {
             "bp":"11Tp",
             "bs":"11Ts",
             "url":`../Audio/LT/2DP titulo primero.mp3`
           },
           {
              "bp":"12Tp",
              "bs":"12Ts",
             "url":`../Audio/LT/3DP titulo segundo.mp3`
           },
           {
             "bp":"13Tp",
             "bs":"13Ts",
             "url":`../Audio/LT/4DP titulo tercero.mp3`
            },
            {
               "bp":"14Tp",
               "bs":"14Ts",
               "url":`../Audio/LT/5DP titulo cuarto.mp3`
            },
            {
               "bp":"15Tp",
               "bs":"15Ts",
               "url":`../Audio/LT/6DP titulo noveno.mp3`
             },
             {
              "bp":"16Tp",
              "bs":"16Ts",
              "url":`../Audio/LT/7DP titulo decimo segundo.mp3`
              },
];

const $audio=d.createElement("video");
d.addEventListener("click", (e)=>{
    $audio.src="";
   
    url.forEach(Element=>{
     const $btnp=d.getElementById(Element.bp);
    const $btns=d.getElementById(Element.bs);
   
    
    if(e.target.id===Element.bp){
        $audio.pause();
        $audio.currentTime=0;
        $audio.src=Element.url;
        $audio.play();
        $btnp.classList.add("ocultar");
        $btns.classList.remove("ocultar");
        console.log($btns);
      }
      else{
        $btnp.classList.remove("ocultar");
        $btns.classList.add("ocultar");
      }
      if(e.target.id===Element.bs){
          $audio.pause();
          $audio.currentTime=0;
          $btnp.classList.remove("ocultar");
          $btns.classList.add("ocultar");


      }

  })
})
