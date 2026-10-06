"use strict";


/**
 * Classe que implementa a ApiAuthentication
 */
class ApiAuthentication { 


    /**
     * Método estático que verifica se o API Token desse microserviço é igual 
     * ao API Token enviado pelo controller
     */
    static authenticateController( controllerToken ) {
      
      if( controllerToken === "" ) {
        return false;
      }

      try {

        // Obtém o API token desse microserviço das proprerties do script
        const API_TOKEN = PropertiesService.getScriptProperties().getProperty('API_TOKEN');
  
        // Proteção caso o API token desse microserviço não esteja salvo nas proprerties do script
        if( !API_TOKEN ) {
          throw( new Error( "autenticarController - Erro interno: Token de validação não configurado no microserviço."  ) ); 
        }
  
        // Compara o API Token desse microserviço com o API Token enviado pelo controller e retorna o resultado
        return ( API_TOKEN === controllerToken ? true : false );

      } catch( error ) {
        
        // Erro ao carregar API token desse microserviço das proprerties do script
        throw new Error( `Erro ao carregar o API_TOKEN - ${error.message}` );
    
      }

    } // Fim da função etática authenticateController


} // Fim da definição da classe ApiAuthentication



