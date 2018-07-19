import * as React from 'react';
import { Definition } from '../model/config';

export type ColumnProps = {
    header : string
    accessor? : string
    getValue? : (obj : any) => string
    className? : string | ((obj : any) => string)
    cell? : (props : CellProps) => JSX.Element
    sort? : (a : any, b : any) => 1 | -1 | 0
    sortable? : boolean
};

export type CellProps = {
    value : any
    row : any
}

export const Column : React.StatelessComponent<ColumnProps> = (props) => {
    return null;
};
