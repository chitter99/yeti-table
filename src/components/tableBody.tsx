import * as React from 'react';
import { TableRow } from './tableRow';
import { Config, Definition } from '../model/config';
import { SortDirection, SortAlgorithmEqual } from '../model/sort';

type TBodyProps = {
    config : Config
    data : Array<any>
    sortColumn? : Definition
    sortDirection? : SortDirection
    filterFn? : (row) => boolean
};

export const TableBody : React.StatelessComponent<TBodyProps> = (props) => {
    let data = props.data;

    if(props.filterFn) {
        let filteredData = [];
        data.forEach((row) => {
            if(props.filterFn(row)) {
                filteredData.push(row);
            }
        });
        data = filteredData;
    }

    if(props.sortColumn) {
        let fn = SortAlgorithmEqual;
        if(props.sortColumn.sort) {
            fn = props.sortColumn.sort;
        }
        data = data.sort((a, b) => props.sortDirection * fn(props.sortColumn.getValue(a), props.sortColumn.getValue(b)));
    }

    return <tbody className={ props.config.styling.body }>
        { data.map((row, i) => <TableRow key={ i } config={ props.config } row={ row }  />) }
    </tbody>;
};
