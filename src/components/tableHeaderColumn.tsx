import * as React from 'react';
import { Context, Definition } from '../model/config';
import { TableHeaderCell } from './tableHeaderCell';

export type TableHeaderColumnProps = {
    context : Context
    column : Definition
};

export const TableBodyColumn : React.StatelessComponent<TableHeaderColumnProps> = (props) => {
    return <th className={ props.column.className }>
        <TableHeaderCell context={ props.context } column={ props.column } />
    </th>;
};
