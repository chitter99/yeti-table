import { CellProps } from './../components/column';

export type config = {
    definition : Array<definition>
    styling : {
        row : string
        trow : string
        header : string
        body : string
    }
};

export type definition = {
    header : string
    accessor? : string
    getValue? : (obj : any) => string
    className? : string | ((obj : any) => string)
    cell? : (props : CellProps) => JSX.Element
};
