import * as React from 'react';
import { THead } from './thead';
import { TBody } from './tbody';
import { Config, Definition } from '../model/config';
import { SortDirection } from '../model/sort';
import { fetchAccessor } from '../util';
import { ColumnProps } from './column';

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
    sortColumn? : Definition
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

    generateColumnDefinitions() : Array<Definition> {
        let defs = [];
        this.props.children.forEach((child) => {
            if(React.isValidElement(child)) {
                let p = child.props as ColumnProps;
                let def = {
                    header: p.header,
                    accessor: p.accessor,
                    getValue: (row) => {
                        let v = row;
                        if(def.accessor) {
                            v = fetchAccessor(row, def.accessor);
                        }
                        if(p.getValue) {
                            v = p.getValue(v);
                        }
                        return v;
                    },
                    className: p.className,
                    cell: p.cell,
                    sort: p.sort,
                    sortable: p.sortable
                };
                defs.push(def);
            }
        });
        return defs;
    }

    generateConfig() : Config {
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

    sortColumn(column : Definition) {
        let direction = SortDirection.ASC;
        if(this.state.sortColumn && this.state.sortColumn.header == column.header) {
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

