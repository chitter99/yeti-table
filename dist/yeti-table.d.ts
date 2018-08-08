import * as React from "react";
/// <reference types="react" />

export declare function fetchAccessor(obj: any, accessor: string): any;
export declare function merge(a: any, b: any): any;

export declare type ColumnProps = {
    header: string;
    accessor?: string;
    getValue?: (obj: any) => string;
    className?: string | ((obj: any) => string);
    cell?: (props: CellProps) => JSX.Element;
    sort?: (a: any, b: any) => 1 | -1 | 0;
    sortable?: boolean;
};
export declare class Column extends React.Component<ColumnProps, any> {
}

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
    generateContext(): Context;
    sortColumn(column: Definition): void;
    render(): JSX.Element;
}

export declare type TableBodyProps = {
    context: Context;
    data?: Array<any>;
};
export declare const TableBody: React.StatelessComponent<TableBodyProps>;

export declare type TableBodyCellProps = {
    context: Context;
    column: Definition;
    row: any;
};
export declare const TableBodyCell: React.StatelessComponent<TableBodyCellProps>;

export declare type TableBodyColumnProps = {
    context: Context;
    column: Definition;
    row: any;
};
export declare const TableBodyColumn: React.StatelessComponent<TableBodyColumnProps>;

export declare type TableBodyRowProps = {
    context: Context;
    row: any;
};
export declare const TableBodyRow: React.StatelessComponent<TableBodyRowProps>;

export declare type TableHeaderProps = {
    context: Context;
};
export declare const TableHeader: React.StatelessComponent<TableHeaderProps>;

export declare type TableRootProps = {
    context: Context;
    data?: Array<any>;
};
export declare const TableRoot: React.StatelessComponent<TableRootProps>;

export declare type Context = {
    config: Config;
    definitions: Array<Definition>;
    sortCtx: SortContext;
    filterCtx: FilterContext;
};
export declare type Config = {
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
    getValue: (obj: any) => string;
    className?: string;
    cell?: (props: CellProps) => JSX.Element;
    sort?: (a: any, b: any) => 1 | -1 | 0;
    sortable?: boolean;
};
export declare type CellProps = {
    value: any;
    row: any;
};

export declare type FilterContext = {
    filterFn?: (row: any) => boolean;
};

export declare type SortContext = {
    sortColumnFn: (column: Definition) => void;
    sortColumn?: Definition;
    sortDirection?: SortDirection;
};
export declare enum SortDirection {
    ASC = 1,
    DESC = -1
}
export declare const SortAlgorithmEqual: (r1: any, r2: any) => 1 | -1 | 0;
