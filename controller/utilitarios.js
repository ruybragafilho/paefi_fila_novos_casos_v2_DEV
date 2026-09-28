"use strict";


function responderJson(objeto) {

  return ContentService.createTextOutput( JSON.stringify(objeto) )
                       .setMimeType( ContentService.MimeType.JSON );


/*

  try {

    let response =  ContentService.createTextOutput( JSON.stringify(objeto) )
                         .setMimeType( ContentService.MimeType.JSON );


    response.addHeader("Access-Control-Allow-Origin", "*"); // Allows requests from any origin 
    response.addHeader("Access-Control-Allow-Methods", "GET"); // Specify allowed methods 
    //response.addHeader("Access-Control-Allow-Headers", "Content-Type, X-Custom-Header"); // Specify allowed headers return response; }


    return response;

  } catch( error ) {
    console.log( `responderJson - ${error.message}` );
  }

*/  

}