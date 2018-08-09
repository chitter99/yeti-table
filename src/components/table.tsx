import * as React from 'react';
import { Config, Definition, Context } from '../model/config';
import { SortDirection } from '../model/sort';
import { fetchAccessor, merge } from '../util';
import { ColumnProps } from './column';
import { TableRoot } from './tableRoot';

type TableProps = {
    children? : Array<React.ReactChild>
    data? : Array<any>
    className? : string
    rowClassName? : string
    trowClassName? : string 
    headerClassName? : string
    bodyClassName? : string
    sortable? : boolean
    filterFn? : (row) => boolean
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
                let def = merge(p, {
                    type: child.type['bodyColumn'],
                    typeHeader: child.type['headerColumn'],
                    getValue: (row) => {
                        let v = row;
                        if(def.accessor) {
                            v = fetchAccessor(row, def.accessor);
                        }
                        if(p.getValue) {
                            v = p.getValue(v);
                        }
                        return v;
                    }
                });
                defs.push(def);
            }
        });
        return defs;
    }

    generateConfig() : Config {
        return {
            styling: {
                row: this.props.rowClassName,
                trow: this.props.trowClassName,
                header: this.props.headerClassName,
                body: this.props.bodyClassName
            },
            sortable: this.props.sortable ? this.props.sortable : false
        };
    }

    public generateContext() : Context {
        return {
            config: this.generateConfig(),
            definitions: this.generateColumnDefinitions(),
            sortCtx: {
                sortColumnFn: this.sortColumn,
                sortColumn: this.state.sortColumn,
                sortDirection: this.state.sortDirection
            },
            filterCtx: {
                filterFn: this.props.filterFn
            }
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
        let ctx = this.generateContext();
        return <TableRoot context={ ctx } data={ this.props.data } />;
    }
}

