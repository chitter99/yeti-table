import * as React from 'react';
import { TRow } from './trow';
import { config, definition } from '../model/config';
import { SortDirection, SortAlgorithmEqual } from '../model/sort';

type TBodyProps = {
    config : config
    data : Array<any>
    sortColumn? : definition
    sortDirection? : SortDirection
};

export const TBody : React.StatelessComponent<TBodyProps> = (props) => {
    let data = props.data;

    if(props.sortColumn) {
        let fn = SortAlgorithmEqual;
        if(props.sortColumn.sort) {
            fn = props.sortColumn.sort;
        }
        data = data.sort((a, b) => props.sortDirection * fn(a, b));
    }

    return <tbody className={ props.config.styling.body }>
        { props.data.map((row, i) => <TRow key={ i } config={ props.config } row={ row }  />) }
    </tbody>;
};
