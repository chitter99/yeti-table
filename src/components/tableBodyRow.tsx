import * as React from 'react';
import { TableBodyColumn } from './tableBodyColumn';
import { Context } from '../model/config';

type TableBodyRowProps = {
    context : Context
    row : any
};

export const TableBodyRow : React.StatelessComponent<TableBodyRowProps> = (props) => {
    return <tr className={ props.context.config.styling.row }>
        { props.context.definitions.map((col, i) => <TableBodyColumn context={ props.context } column={ col } row={ props.row } key={ i } />) }
    </tr>;
};
