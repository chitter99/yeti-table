import * as React from 'react';
import { CellProps } from '../model/config';
import { TableBodyColumnProps, TableBodyColumn } from './tableBodyColumn';
import { TableHeaderColumnProps, TableHeaderColumn } from './tableHeaderColumn';

export type ColumnProps = {
    header : string
    accessor? : string
    getValue?: (obj : any) => string
    className? : string | ((obj : any) => string)
    cell? : (props : CellProps) => JSX.Element
    sort? : (a : any, b : any) => 1 | -1 | 0
    sortable? : boolean
};

export class Column extends React.Component<ColumnProps, any> {
     public static bodyColumn : (props : TableBodyColumnProps) => JSX.Element = TableBodyColumn;
     public static headerColumn : (props : TableHeaderColumnProps) => JSX.Element = TableHeaderColumn;
}
