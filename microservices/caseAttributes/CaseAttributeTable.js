"use strict";

class CaseAttributeTable {

    constructor( table ) {
        this._table  =  table;
    }        


    readTable() {

        let attributeValues = this._table.map( attributeValue =>  {

            return ( new Entity( attributeValue[CaseAttributeTable.ID], 
                                 attributeValue[CaseAttributeTable.NOME], 
                                 attributeValue[CaseAttributeTable.STATUS] ) ).getAtributes();

        });

        return attributeValues;
    }

}

CaseAttributeTable.ID      =  0;
CaseAttributeTable.NOME    =  1;
CaseAttributeTable.STATUS  =  2;

// Fim da classe CaseAttributeTable




class ParameterTable extends CaseAttributeTable {

    constructor( table ) {
        super( table );
    }          


    readTable() {

        let parameterValues = this._table.map( parameterValue =>  {

            return ( new EntityParameter( parameterValue[CaseAttributeTable.ID], 
                                          parameterValue[CaseAttributeTable.NOME], 
                                          parameterValue[CaseAttributeTable.STATUS],
                                          parameterValue[ParameterTable.SCORE]) ).getAtributes();

        });

        return parameterValues;
    }

}

ParameterTable.SCORE = 4;

// Fim da classe ParameterTable




class ArrayOfParameterTables {

    constructor() {

        this._PLANILHA_CASE_ATTRIBUTES  =  SpreadsheetApp.openById(PLANILHA_CASE_ATTRIBUTES_ID);

        this._TABELA_VIOLACOES              =  PLANILHA_CODIGOS.getSheetByName('VIOLACOES');
        this._TABELA_CATEGORIAS             =  PLANILHA_CODIGOS.getSheetByName('CATEGORIAS');
        this._TABELA_PARAMETROS             =  PLANILHA_CODIGOS.getSheetByName('PARAMETROS');
        this._TABELA_ORGAOS_ENCAMINHADORES  =  PLANILHA_CODIGOS.getSheetByName('ORGAOS_ENCAMINHADORES');
        this._TABELA_REGIONAIS              =  PLANILHA_CODIGOS.getSheetByName('REGIONAIS');
        this._TABELA_MOTIVOS_DE_DESIGNACAO  =  PLANILHA_CODIGOS.getSheetByName('MOTIVOS_DE_DESIGNACAO');

        this._BUFFER_VIOLACOES              =  TABELA_VIOLACOES.getDataRange().getDisplayValues().splice(1);
        this._BUFFER_CATEGORIAS             =  TABELA_CATEGORIAS.getDataRange().getDisplayValues().splice(1);
        this._BUFFER_PARAMETROS             =  TABELA_PARAMETROS.getDataRange().getDisplayValues().splice(1);
        this._BUFFER_ORGAOS_ENCAMINHADORES  =  TABELA_ORGAOS_ENCAMINHADORES.getDataRange().getDisplayValues().splice(1);
        this._BUFFER_REGIONAIS              =  TABELA_REGIONAIS.getDataRange().getDisplayValues().splice(1);
        this._BUFFER_MOTIVOS_DE_DESIGNACAO  =  TABELA_MOTIVOS_DE_DESIGNACAO.getDataRange().getDisplayValues().splice(1);
    
    }
    

    readTables() {

        let attributeTables = {
            tabelaViolacoes: new CaseAttributeTable( this._BUFFER_VIOLACOES ).readTable(),
            tabelaCategorias: new CaseAttributeTable( this._BUFFER_CATEGORIAS ).readTable(),
            tabelaParametros: new ParameterTable( this._BUFFER_PARAMETROS ).readTable(),
            tabelaOrgaosEncaminhadores: new ParameterTable( this._BUFFER_ORGAOS_ENCAMINHADORES ).readTable(),
            tabelaRegionais: new ParameterTable( this._BUFFER_REGIONAIS ).readTable(),
            tabelaMotivosDesignacao: new ParameterTable( this._BUFFER_MOTIVOS_DE_DESIGNACAO ).readTable(),
        };

        return attributeTables;
    }    

}

ArrayOfParameterTables.PLANILHA_CASE_ATTRIBUTES_ID = PropertiesService.getScriptProperties().getProperty('PLANILHA_CASE_ATTRIBUTES_ID');


// Fim da classe ParameterTable ArrayOfParameterTables


