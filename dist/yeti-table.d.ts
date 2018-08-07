import * as React from "react";
/// <reference types="react" />

export declare function fetchAccessor(obj: any, accessor: string): any;

export declare type ColumnProps = Definition;
export declare const Column: React.StatelessComponent<ColumnProps>;

export declare type TableProps = {
    children?: Array<React.ReactChild>;
    data?: Array<any>;
    className?: string;
    rowClassName?: string;
    trowClassName?: string;
    headerClassName?: string;
    bodyClassName?: string;
    sortable?: boolean;
    filterFn?: (row: any) => boolean;
};
export declare type TableState = {
    sortColumn?: Definition;
    sortDirection?: SortDirection;
};
export declare class Table extends React.Component<TableProps, TableState> {
    constructor(props: any);
    generateColumnDefinitions(): Array<Definition>;
    generateConfig(): Config;
    sortColumn(column: Definition): void;
    render(): JSX.Element;
}

export declare type TBodyProps = {
    config: Config;
    data: Array<any>;
    sortColumn?: Definition;
    sortDirection?: SortDirection;
    filterFn?: (row: any) => boolean;
};
export declare const TableBody: React.StatelessComponent<TBodyProps>;


export declare type TableColumnProps = {
    definition: any;
    row: any;
};
export declare const TableColumn: React.StatelessComponent<TableColumnProps>;

export declare type TableHeaderProps = {
    config: Config;
    sortColumn: (column: Definition) => void;
};
export declare const TableHeader: React.StatelessComponent<TableHeaderProps>;

export declare type TableRowProps = {
    config: Config;
    row: any;
};
export declare const TableRow: React.StatelessComponent<TableRowProps>;

export declare type Config = {
    definition: Array<Definition>;
    styling: {
        row: string;
        trow: string;
        header: string;
        body: string;
    };
    sortable: boolean;
};
export declare type Definition = {
    header: string;
    accessor?: string;
    getValue?: (obj: any) => string;
    className?: string | ((obj: any) => string);
    cell?: (props: CellProps) => JSX.Element;
    sort?: (a: any, b: any) => 1 | -1 | 0;
    sortable?: boolean;
};
export declare type CellProps = {
    value: any;
    row: any;
};

export declare enum SortDirection {
    ASC = 1,
    DESC = -1
}
export declare const SortAlgorithmEqual: (r1: any, r2: any) => 1 | -1 | 0;
