"use strict";


/*

Como salvar o Token (Interface do Editor)

  Você pode salvar o token diretamente pelas configurações do projeto, sem precisar rodar nenhum código para isso:

  1) No painel esquerdo do editor do Apps Script, clique no ícone de engrenagem ⚙️ (Configurações do projeto).

  2) Role a página até o final até encontrar a seção Propriedades do script.

  3) Clique em Adicionar propriedade do script.

  4) Defina os campos exatamente assim:

       Propriedade: API_TOKEN
       Valor: Bearer BEARER_TOKEN

  5) Clique em Salvar propriedades do script

*/


function doPost(e) {

  try {

    // Verifica se há conteúdo no corpo da requisição
    if( !e || !e.postData ) {
      return responderJson( { status: "erro", 
                              mensagem: "Corpo da requisição vazio." 
      });
    }


    // Lê e faz o parse do JSON enviado para o POST
    const payload  = JSON.parse( e.postData.contents );    
    const nomeRecurso = payload.nomeRecurso;
    

    // Fluxo feliz - Responde a requisição    
    return responderJson({
      status: "sucesso",
      mensagem: "POST - Controller!",      
      nomeRecurso: nomeRecurso
    });
    

  } catch (error) {

    return responderJson({ status: "erro", mensagem: "Erro ao processar requisição: " + error.message });

  }
}





