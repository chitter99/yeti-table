import * as React from 'react';
import { Context, Definition } from '../model/config';
import { TableHeaderCell } from './tableHeaderCell';

export type TableHeaderColumnProps = {
    context : Context
    column : Definition
};

export const TableHeaderColumn : React.StatelessComponent<TableHeaderColumnProps> = (props) => {
    return <th className={ props.context.config.styling.tableHeaderColumn } onClick={ () => props.context.sortCtx.sortColumnFn(props.column) }>
        <TableHeaderCell context={ props.context } column={ props.column } />
    </th>;
};
