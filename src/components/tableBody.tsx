import * as React from 'react';
import { TableBodyRow } from './tableBodyRow';
import { Context} from '../model/config';
import { SortAlgorithmEqual } from '../model/sort';

type TableBodyProps = {
    context : Context
    data? : Array<any>
};

export const TableBody : React.StatelessComponent<TableBodyProps> = (props) => {
    let data = props.data;

    if(props.context.filterCtx.filterFn) {
        let filteredData = [];
        data.forEach((row) => {
            if(props.context.filterCtx.filterFn(row)) {
                filteredData.push(row);
            }
        });
        data = filteredData;
    }

    if(props.context.sortCtx.sortColumn) {
        let fn = SortAlgorithmEqual;
        if(props.context.sortCtx.sortColumn.sort) {
            fn = props.context.sortCtx.sortColumn.sort;
        }
        data = data.sort((a, b) => props.context.sortCtx.sortDirection * fn(props.context.sortCtx.sortColumn.getValue(a), props.context.sortCtx.sortColumn.getValue(b)));
    }

    return <tbody className={ props.context.config.styling.body }>
        { data.map((row, i) => <TableBodyRow context={ props.context } row={ row } key={ i } />) }
    </tbody>;
};
