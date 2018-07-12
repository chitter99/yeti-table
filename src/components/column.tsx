import * as React from 'react';

type ColumnProps = {
    header : string
    accessor? : string
    getValue? : (obj : any) => string
    className? : string
    cell? : (props : CellProps) => JSX.Element
}

export type CellProps = {
    value : any
}

export const Column : React.StatelessComponent<ColumnProps> = (props) => {
    return null;
};
