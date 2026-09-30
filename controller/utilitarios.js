"use strict";


function responderJson(objeto) {

  try {

    return ContentService.createTextOutput( JSON.stringify(objeto) )
                         .setMimeType( ContentService.MimeType.JSON );

  } catch( error ) {
    console.log( `responderJson - ${error.message}` );
  }

}
