import * as React from "react";
/// <reference types="react" />

export declare type ColumnProps = {
    header: string;
    accessor?: string;
    getValue?: (obj: any) => string;
    className?: string | ((obj: any) => string);
    cell?: (props: CellProps) => JSX.Element;
};
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
    headerClassName: string;
    bodyClassName: string;
};
export declare class Table extends React.Component<TableProps, any> {
    generateColumnDefinitions(): Array<definition>;
    generateConfig(): config;
    render(): JSX.Element;
}

export declare type TBodyProps = {
    config: config;
    data: Array<any>;
};
export declare const TBody: React.StatelessComponent<TBodyProps>;

export declare type TCellProps = {
    definition: any;
    row: any;
};
export declare const TCell: React.StatelessComponent<TCellProps>;

export declare type THeadProps = {
    config: config;
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
};
