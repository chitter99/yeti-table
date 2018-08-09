import * as React from 'react';
import { Context, Definition } from '../model/config';

export type TableHeaderCellProps = {
    context : Context
    column : Definition
};

export const TableHeaderCell : React.StatelessComponent<TableHeaderCellProps> = (props) => {
    return <a className={ props.context.config.styling.tableHeaderCell }>{ props.column.header }</a>;
};
