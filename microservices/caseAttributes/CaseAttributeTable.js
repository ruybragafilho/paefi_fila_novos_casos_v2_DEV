"use strict";



/**
 * Classe CaseAttributeTable
 * 
 * Representa uma tabela com os valores possíveis de um atributo de um caso.
 *  
 */
class CaseAttributeTable {

    // Construtor
    constructor( table ) {
        this._table  =  table;
    }        

    // Método que retorna um array de objetos, onde cada objeto contém
    // um valor possível de um atributo de um caso. Esses valores são 
    // obtidos da tabela passada ao objeto pelo construtor
    readTable() {

        let attributeValues = this._table.map( attributeValue =>  {

            return ( new CaseAttribute( attributeValue[CaseAttributeTable.ID], 
                                        attributeValue[CaseAttributeTable.NOME], 
                                        attributeValue[CaseAttributeTable.STATUS] ) ).getAttribute();

        });

        return attributeValues;

    } // Fim do método readTable

}

// Atributos estáticos da classe CaseAttributeTable
CaseAttributeTable.ID      =  0;
CaseAttributeTable.NOME    =  1;
CaseAttributeTable.STATUS  =  2;

// Fim da classe CaseAttributeTable



/**
 * Classe ParameterTable
 * 
 * Representa uma tabela com os valores possíveis para o atributo parâmetro de um caso.
 *  
 */
class ParameterTable extends CaseAttributeTable {

    // Construtor
    constructor( table ) {
        super( table );
    }          

    // Método que retorna um array de objetos, onde cada objeto contém
    // um valor possível para o atributo parâmetro de um caso. Esses  
    // valores são obtidos da tabela passada ao objeto pelo construtor
    readTable() {

        let parameterValues = this._table.map( parameterValue =>  {

            return ( new Parameter( parameterValue[CaseAttributeTable.ID], 
                                    parameterValue[CaseAttributeTable.NOME], 
                                    parameterValue[CaseAttributeTable.STATUS],
                                    parameterValue[ParameterTable.SCORE]) ).getAttribute();

        });

        return parameterValues;

    } // Fim do método readTable

}

// Atributo estático da classe ParameterTable
ParameterTable.SCORE = 3;

// Fim da classe ParameterTable



/**
 * Classe ArraysOfAttributeTables
 * 
 * Representa um array com todas as tabelas de valores dos atributos.
 *  
 */
class ArraysOfAttributeTables {

    // Construtor
    constructor() {

        this._PLANILHA_CASE_ATTRIBUTES  =  SpreadsheetApp.openById(ArraysOfAttributeTables.PLANILHA_CASE_ATTRIBUTES_ID);

        this._TABELA_VIOLACOES              =  this._PLANILHA_CASE_ATTRIBUTES.getSheetByName('VIOLACOES');
        this._TABELA_CATEGORIAS             =  this._PLANILHA_CASE_ATTRIBUTES.getSheetByName('CATEGORIAS');        
        this._TABELA_ORGAOS_ENCAMINHADORES  =  this._PLANILHA_CASE_ATTRIBUTES.getSheetByName('ORGAOS_ENCAMINHADORES');
        this._TABELA_REGIONAIS              =  this._PLANILHA_CASE_ATTRIBUTES.getSheetByName('REGIONAIS');
        this._TABELA_MOTIVOS_DE_DESIGNACAO  =  this._PLANILHA_CASE_ATTRIBUTES.getSheetByName('MOTIVOS_DE_DESIGNACAO');
        this._TABELA_PARAMETROS             =  this._PLANILHA_CASE_ATTRIBUTES.getSheetByName('PARAMETROS');


        this._BUFFER_VIOLACOES              =  this._TABELA_VIOLACOES.getDataRange().getDisplayValues().splice(1);
        this._BUFFER_CATEGORIAS             =  this._TABELA_CATEGORIAS.getDataRange().getDisplayValues().splice(1);
        this._BUFFER_ORGAOS_ENCAMINHADORES  =  this._TABELA_ORGAOS_ENCAMINHADORES.getDataRange().getDisplayValues().splice(1);
        this._BUFFER_REGIONAIS              =  this._TABELA_REGIONAIS.getDataRange().getDisplayValues().splice(1);
        this._BUFFER_MOTIVOS_DE_DESIGNACAO  =  this._TABELA_MOTIVOS_DE_DESIGNACAO.getDataRange().getDisplayValues().splice(1);
        this._BUFFER_PARAMETROS             =  this._TABELA_PARAMETROS.getDataRange().getDisplayValues().splice(1);
    
    }
    
    // Método que retorna um array com todas as tabelas de valores dos atributos.
    readTables() {

        let attributeTables = {

            tabelaViolacoes: new CaseAttributeTable( this._BUFFER_VIOLACOES ).readTable(),
            tabelaCategorias: new CaseAttributeTable( this._BUFFER_CATEGORIAS ).readTable(),
            tabelaOrgaosEncaminhadores: new CaseAttributeTable( this._BUFFER_ORGAOS_ENCAMINHADORES ).readTable(),
            tabelaRegionais: new CaseAttributeTable( this._BUFFER_REGIONAIS ).readTable(),
            tabelaMotivosDesignacao: new CaseAttributeTable( this._BUFFER_MOTIVOS_DE_DESIGNACAO ).readTable(),

            tabelaParametros: new ParameterTable( this._BUFFER_PARAMETROS ).readTable()            
        };

        return attributeTables;

    } // Fim do método readTablea   

}

// Atributo estático da classe ArraysOfAttributeTables
ArraysOfAttributeTables.PLANILHA_CASE_ATTRIBUTES_ID = PropertiesService.getScriptProperties().getProperty('PLANILHA_CASE_ATTRIBUTES_ID');

// Fim da classe ParameterTable ArraysOfAttributeTables




//    ############################
//    #########  TESTES  #########
//    ############################

function teste_ArraysOfAttributeTables() {

    let array_Attributes = new ArraysOfAttributeTables();

    let tabelas = array_Attributes.readTables();

    
    let violacoes = tabelas.tabelaViolacoes;
    let categorias = tabelas.tabelaCategorias;
    let orgaosEncaminhadores = tabelas.tabelaOrgaosEncaminhadores;
    let regionais = tabelas.tabelaRegionais;
    let motivosDesignacao = tabelas.tabelaMotivosDesignacao;
    let parametros = tabelas.tabelaParametros;


    console.log( "REGIONAIS" );    
    console.log(regionais);    
    console.log("Regional ID 5")
    console.log(regionais[4]);    
    console.log("_");
    
    console.log( "CATEGORIAS" );    
    console.log(categorias);        
    console.log("Categoria ID 5")
    console.log(categorias[4]);    
    console.log("_");

    console.log( "PARÂMETROS" );    
    console.log(parametros);        
    console.log("Parâmetro ID 5")
    console.log(parametros[4]);

}