import * as React from "react";
/// <reference types="react" />

export declare type ColumnProps = definition;
export declare type CellProps = {
    value: any;
};
export declare const Column: React.StatelessComponent<ColumnProps>;

export declare type TableProps = {
    children?: Array<React.ReactChild>;
    data?: Array<any>;
    className?: string;
    rowClassName?: string;
    trowClassName?: string;
    headerClassName?: string;
    bodyClassName?: string;
};
export declare type TableState = {
    sortColumn?: definition;
    sortDirection?: SortDirection;
};
export declare class Table extends React.Component<TableProps, TableState> {
    constructor(props: any);
    generateColumnDefinitions(): Array<definition>;
    generateConfig(): config;
    sortColumn(column: definition): void;
    render(): JSX.Element;
}

export declare type TBodyProps = {
    config: config;
    data: Array<any>;
    sortColumn?: definition;
    sortDirection?: SortDirection;
};
export declare const TBody: React.StatelessComponent<TBodyProps>;

export declare type TCellProps = {
    definition: any;
    row: any;
};
export declare const TCell: React.StatelessComponent<TCellProps>;

export declare type THeadProps = {
    config: config;
    sortColumn: (column: definition) => void;
};
export declare const THead: React.StatelessComponent<THeadProps>;

export declare type TRowProps = {
    config: config;
    row: any;
};
export declare const TRow: React.StatelessComponent<TRowProps>;

export declare type config = {
    definition: Array<definition>;
    styling: {
        row: string;
        trow: string;
        header: string;
        body: string;
    };
};
export declare type definition = {
    header: string;
    accessor?: string;
    getValue?: (obj: any) => string;
    className?: string | ((obj: any) => string);
    cell?: (props: CellProps) => JSX.Element;
    sort?: (a: any, b: any) => 1 | -1 | 0;
};

export declare enum SortDirection {
    ASC = 1,
    DESC = -1
}
export declare const SortAlgorithmEqual: (r1: any, r2: any) => 1 | -1 | 0;
