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
    static bodyColumn: (props: TableBodyColumnProps) => JSX.Element;
    static headerColumn: (props: TableHeaderColumnProps) => JSX.Element;
}

export declare type TableProps = {
    children?: Array<React.ReactChild>;
    data?: Array<any>;
    sortable?: boolean;
    filterFn?: (row: any) => boolean;
    styling?: Styling;
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

export declare type TableHeaderCellProps = {
    context: Context;
    column: Definition;
};
export declare const TableHeaderCell: React.StatelessComponent<TableHeaderCellProps>;

export declare type TableHeaderColumnProps = {
    context: Context;
    column: Definition;
};
export declare const TableHeaderColumn: React.StatelessComponent<TableHeaderColumnProps>;

export declare type TableHeaderRowProps = {
    context: Context;
};
export declare const TableHeaderRow: React.StatelessComponent<TableHeaderRowProps>;

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
    styling: Styling;
    sortable: boolean;
};
export declare type Definition = {
    type: (props: TableBodyColumnProps) => JSX.Element;
    typeHeader: (props: TableHeaderColumnProps) => JSX.Element;
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

export declare type Styling = {
    tableRoot?: string;
    tableBody?: string;
    tableBodyRow?: string;
    tableBodyColumn?: string;
    tableBodyCell?: string;
    tableHeader?: string;
    tableHeaderRow?: string;
    tableHeaderColumn?: string;
    tableHeaderCell?: string;
};

export declare const YetiDefaultStyling: any;
