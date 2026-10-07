"use strict";


function serviceRoute( nomeRecurso ) {


  try {

    let retorno;  
  
    switch( nomeRecurso )  {
  
      case "AUTHENTICATOR_GET": retorno = chamarAuthenticatorGET();
                                break;
      
      case "AUTHENTICATOR_POST": retorno = chamarAuthenticatorPOST();
                                 break;                              
  
      case "CASE_ATTRIBUTES_GET": retorno = chamarCaseAttributesGET();
                                  break;
      
      case "CASE_ATTRIBUTES_POST": retorno = chamarCaseAttributesPOST();
                                   break;                              
                                 
      case "QUEUE_GET": retorno = chamarQueueGET();
                        break;
      
      case "QUEUE_POST": retorno = chamarQueuePOST();
                         break;                                                             
  
    }
  
    return retorno;

  } catch( error ) {

    return error;

  }

} // Fim da função serviceRoute



function chamarAuthenticatorGET() {

  // Authenticator URL
  const url = PropertiesService.getScriptProperties().getProperty('AUTHENTICATOR_URL');

  // API_TOKEN
  const API_TOKEN = PropertiesService.getScriptProperties().getProperty('API_TOKEN');    

  // Dados que serão enviados para o serviço    
  const apitoken = `apitoken=${API_TOKEN}`;
  const nomeRecurso = "nomeRecurso=AUTHENTICATOR";
  const urlCompleta = url+"?"+apitoken+"&"+nomeRecurso;


  // Executa a chamada REST
  try {

    let response = UrlFetchApp.fetch( urlCompleta ); // O método padrão é GET
    
    // Erro HTTP
    if( !response ) {
      console.log( `HTTP Error - ${response}` );
      throw new Error( `HTTP Error - ${response}` );
    }           

    // Còdigo HTTP
    let codigoStatus = response.getResponseCode();
      
    // Código HTTP 200 ou 201
    if( codigoStatus === 200 || codigoStatus === 201 ) {

      let corpoResposta = response.getContentText();

      if(corpoResposta) {        
        let dadosRecebidos = JSON.parse(corpoResposta);  
        console.log( `Controller GET Ok - ${dadosRecebidos.mensagem}` );
        return `Controller GET Ok - ${dadosRecebidos.mensagem}`;
      }

    // Códigos HTTP 400, 500, etc
    } else {
      console.log( `Controller GET Error - ${codigoStatus}` );  
      return `Controller GET Error - ${codigoStatus}`;
    }

  } catch( error ) {

    // Erro de rede
    console.log( `Network Error - ${error.message}` );
    throw new Error( `Network Error - ${error.message}` );

  }

} // Fim da função chamarAuthenticatorGET
    


function chamarAuthenticatorPOST() {

  // Authenticator URL
  const url = PropertiesService.getScriptProperties().getProperty('AUTHENTICATOR_URL');

  // API_TOKEN
  const API_TOKEN = PropertiesService.getScriptProperties().getProperty('API_TOKEN');      
    
  // Dados que serão enviados para o serviço
  const body = {
    apitoken: API_TOKEN,
    nomeRecurso: "AUTHENTICATOR"
  };

  // Configuração da requisição REST POST
  let options = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(body)
  };


  // Executa a chamada REST
  try {

    let response = UrlFetchApp.fetch(url, options);
    
    // Erro HTTP
    if( !response ) {
      console.log( `HTTP Error - ${response}` );
      throw new Error( `HTTP Error - ${response}` );
    }           

    // Còdigo HTTP
    let codigoStatus = response.getResponseCode();
      
    // Código HTTP 200 ou 201
    if( codigoStatus === 200 || codigoStatus === 201 ) {

      let corpoResposta = response.getContentText();

      if(corpoResposta) {        
        let dadosRecebidos = JSON.parse(corpoResposta);  
        console.log( `Controller POST Ok - ${dadosRecebidos.mensagem}` );
        return `Controller POST Ok - ${dadosRecebidos.mensagem}`;
      }

    // Códigos HTTP 400, 500, etc
    } else {
      console.log( `Controller POST Error - ${codigoStatus}` );  
      return `Controller POST Error - ${codigoStatus}`;
    }

  } catch( error ) {

    // Erro de rede
    console.log( `Network Error - ${error.message}` );
    throw new Error( `Network Error - ${error.message}` );

  }
        
} // Fim da função chamarAuthenticatorPOST
    


function chamarCaseAttributesGET() {

  // Entities URL
  const url = PropertiesService.getScriptProperties().getProperty('CASE_ATTRIBUTES_URL');
  
  // API_TOKEN
  const API_TOKEN = PropertiesService.getScriptProperties().getProperty('API_TOKEN');    

  // Dados que serão enviados para o serviço    
  const apitoken = `apitoken=${API_TOKEN}`;
  const nomeRecurso = "nomeRecurso=ENTITIES";
  const urlCompleta = url+"?"+apitoken+"&"+nomeRecurso;


  // Executa a chamada REST
  try {

    let response = UrlFetchApp.fetch( urlCompleta ); // O método padrão é GET
    
    // Erro HTTP
    if( !response ) {
      console.log( `HTTP Error - ${response}` );
      throw new Error( `HTTP Error - ${response}` );
    }           

    // Còdigo HTTP
    let codigoStatus = response.getResponseCode();
      
    // Código HTTP 200 ou 201
    if( codigoStatus === 200 || codigoStatus === 201 ) {

      let corpoResposta = response.getContentText();

      if(corpoResposta) {        
        let dadosRecebidos = JSON.parse(corpoResposta);  
        console.log( `Controller GET Ok - ${dadosRecebidos.mensagem}` );
        return `Controller GET Ok - ${dadosRecebidos.mensagem}`;
      }

    // Códigos HTTP 400, 500, etc
    } else {
      console.log( `Controller GET Error - ${codigoStatus}` );  
      return `Controller GET Error - ${codigoStatus}`;
    }

  } catch( error ) {

    // Erro de rede
    console.log( `Network Error - ${error.message}` );
    throw new Error( `Network Error - ${error.message}` );

  }
 
} // Fim da função chamarEntitiesGET
    

    
function chamarCaseAttributesPOST() {

  // Entities URL
  const url = PropertiesService.getScriptProperties().getProperty('CASE_ATTRIBUTES_URL');

  // API_TOKEN
  const API_TOKEN = PropertiesService.getScriptProperties().getProperty('API_TOKEN');      
    
  // Dados que serão enviados para o serviço
  const body = {
    apitoken: API_TOKEN,
    nomeRecurso: "ENTITIES"
  };

  // Configuração da requisição REST POST
  let options = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(body)
  };


  // Executa a chamada REST
  try {

    let response = UrlFetchApp.fetch(url, options);
    
    // Erro HTTP
    if( !response ) {
      console.log( `HTTP Error - ${response}` );
      throw new Error( `HTTP Error - ${response}` );
    }           

    // Còdigo HTTP
    let codigoStatus = response.getResponseCode();
      
    // Código HTTP 200 ou 201
    if( codigoStatus === 200 || codigoStatus === 201 ) {

      let corpoResposta = response.getContentText();

      if(corpoResposta) {        
        let dadosRecebidos = JSON.parse(corpoResposta);  
        console.log( `Controller POST Ok - ${dadosRecebidos.mensagem}` );
        return `Controller POST Ok - ${dadosRecebidos.mensagem}`;
      }

    // Códigos HTTP 400, 500, etc
    } else {
      console.log( `Controller POST Error - ${codigoStatus}` );  
      return `Controller POST Error - ${codigoStatus}`;
    }

  } catch( error ) {

    // Erro de rede
    console.log( `Network Error - ${error.message}` );
    throw new Error( `Network Error - ${error.message}` );

  }

} // Fim da função chamarEntitiesPOST
    

                               
function chamarQueueGET() {

  // Queue URL
  const url = PropertiesService.getScriptProperties().getProperty('QUEUE_URL');
    
  // API_TOKEN
  const API_TOKEN = PropertiesService.getScriptProperties().getProperty('API_TOKEN');    

  // Dados que serão enviados para o serviço    
  const apitoken = `apitoken=${API_TOKEN}`;
  const nomeRecurso = "nomeRecurso=QUEUE";
  const urlCompleta = url+"?"+apitoken+"&"+nomeRecurso;


  // Executa a chamada REST
  try {

    let response = UrlFetchApp.fetch( urlCompleta ); // O método padrão é GET
    
    // Erro HTTP
    if( !response ) {
      console.log( `HTTP Error - ${response}` );
      throw new Error( `HTTP Error - ${response}` );
    }           

    // Còdigo HTTP
    let codigoStatus = response.getResponseCode();
      
    // Código HTTP 200 ou 201
    if( codigoStatus === 200 || codigoStatus === 201 ) {

      let corpoResposta = response.getContentText();

      if(corpoResposta) {        
        let dadosRecebidos = JSON.parse(corpoResposta);  
        console.log( `Controller GET Ok - ${dadosRecebidos.mensagem}` );
        return `Controller GET Ok - ${dadosRecebidos.mensagem}`;
      }

    // Códigos HTTP 400, 500, etc
    } else {
      console.log( `Controller GET Error - ${codigoStatus}` );  
      return `Controller GET Error - ${codigoStatus}`;
    }

  } catch( error ) {

    // Erro de rede
    console.log( `Network Error - ${error.message}` );
    throw new Error( `Network Error - ${error.message}` );

  }

} // Fim da função chamarQueueGET
    

    
function chamarQueuePOST() {

  // Queue URL
  const url = PropertiesService.getScriptProperties().getProperty('QUEUE_URL');

  // API_TOKEN
  const API_TOKEN = PropertiesService.getScriptProperties().getProperty('API_TOKEN');      
    
  // Dados que serão enviados para o serviço
  const body = {
    apitoken: API_TOKEN,
    nomeRecurso: "QUEUE"
  };

  // Configuração da requisição REST POST
  let options = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(body)
  };


  // Executa a chamada REST
  try {

    let response = UrlFetchApp.fetch(url, options);
    
    // Erro HTTP
    if( !response ) {
      console.log( `HTTP Error - ${response}` );
      throw new Error( `HTTP Error - ${response}` );
    }           

    // Còdigo HTTP
    let codigoStatus = response.getResponseCode();
      
    // Código HTTP 200 ou 201
    if( codigoStatus === 200 || codigoStatus === 201 ) {

      let corpoResposta = response.getContentText();

      if(corpoResposta) {        
        let dadosRecebidos = JSON.parse(corpoResposta);  
        console.log( `Controller POST Ok - ${dadosRecebidos.mensagem}` );
        return `Controller POST Ok - ${dadosRecebidos.mensagem}`;
      }

    // Códigos HTTP 400, 500, etc
    } else {
      console.log( `Controller POST Error - ${codigoStatus}` );  
      return `Controller POST Error - ${codigoStatus}`;
    }

  } catch( error ) {

    // Erro de rede
    console.log( `Network Error - ${error.message}` );
    throw new Error( `Network Error - ${error.message}` );

  }

} // Fim da função chamarQueuePOST










