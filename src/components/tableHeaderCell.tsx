import * as React from 'react';
import { Context, Definition } from '../model/config';
import {  } from './tableHeaderCell';

export type TableHeaderCellProps = {
    context : Context
    column : Definition
};

export const TableHeaderCell : React.StatelessComponent<TableHeaderCellProps> = (props) => {
    return <a>{ props.column.header }</a>;
};
