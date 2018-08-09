import * as React from 'react';
import { Context, Definition } from '../model/config';
import { TableBodyCell } from './tableBodyCell';

export type TableBodyColumnProps = {
    context : Context
    column : Definition
    row : any
};

export const TableBodyColumn : React.StatelessComponent<TableBodyColumnProps> = (props) => {
    return <td className={ props.context.config.styling.tableBodyColumn + " " + props.column.className }>
        <TableBodyCell context={ props.context } column={ props.column } row={ props.row } />
    </td>;
};
