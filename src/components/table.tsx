import * as React from 'react';
import { THead } from './thead';
import { TBody } from './tbody';
import { config, definition } from '../model/config';
import { SortDirection } from '../model/sort';

type TableProps = {
    children? : Array<React.ReactChild>
    data? : Array<any>
    className? : string
    rowClassName? : string
    trowClassName? : string 
    headerClassName? : string
    bodyClassName? : string
    sortable? : boolean
}

type TableState = {
    sortColumn? : definition
    sortDirection? : SortDirection
}

export class Table extends React.Component<TableProps, TableState> {
    constructor(props) {
        super(props);
        this.state = {
            sortColumn: null,
            sortDirection: null
        };
        this.sortColumn = this.sortColumn.bind(this);
    }

    generateColumnDefinitions() : Array<definition> {
        let def = [];
        this.props.children.forEach((child) => {
            if(React.isValidElement(child)) {
                def.push(child.props);
            }
        });
        return def;
    }

    generateConfig() : config {
        return {
            definition: this.generateColumnDefinitions(),
            styling: {
                row: this.props.rowClassName,
                trow: this.props.trowClassName,
                header: this.props.headerClassName,
                body: this.props.bodyClassName
            },
            sortable: this.props.sortable ? this.props.sortable : false
        };
    }

    sortColumn(column : definition) {
        let direction = SortDirection.ASC;
        if(this.state.sortColumn == column) {
            direction = this.state.sortDirection * -1;
        }
        this.setState({
            sortColumn: column,
            sortDirection: direction          
        });
    }
    
    render() {
        let cof = this.generateConfig();
        return <table className={ this.props.className }>
            <THead config={ cof } sortColumn={ this.sortColumn } />
            <TBody config={ cof } data={ this.props.data } sortColumn={ this.state.sortColumn } sortDirection={ this.state.sortDirection } />
        </table>;
    }
}

