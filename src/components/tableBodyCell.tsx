import * as React from 'react';
import { Context, Definition } from '../model/config';

export type TableBodyCellProps = {
    context : Context
    column : Definition
    row : any
};

export const TableBodyCell : React.StatelessComponent<TableBodyCellProps> = (props) => {
    let value = props.column.getValue(props.row);
    return props.column.cell ? React.createElement(props.column.cell, { value: value, row: props.row }) : <span className={ props.context.config.styling.tableBodyCell }>{ value }</span>;
};
