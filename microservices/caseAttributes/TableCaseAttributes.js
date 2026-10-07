"use strict";

class TableCaseAttributes {

    constructor( table ) {
        this._table  =  table;
    }        


    readTable() {

        let entities = this._table.map( entity =>  {
            return ( new Entity( entity[TableCaseAttributes.ID], 
                                 entity[TableCaseAttributes.NOME], 
                                 entity[TableCaseAttributes.STATUS] ) ).getAtributes();
        });

        return entities;
    }

}

TableCaseAttributes.ID      =  0;
TableCaseAttributes.NOME    =  1;
TableCaseAttributes.STATUS  =  2;

// Fim da classe Table




class TableParameterCase extends TableCaseAttributes {

    constructor( table ) {
        super( table );
    }          


    readTable() {

        let entities = this._table.map( entity =>  {
            return ( new EntityParameter( entity[TableCaseAttributes.ID], 
                                          entity[TableCaseAttributes.NOME], 
                                          entity[TableCaseAttributes.STATUS],
                                          entity[TableParameterCase.SCORE]) ).getAtributes();
        });

        return entities;
    }

}

TableParameterCase.SCORE = 4;

// Fim da classe Table





