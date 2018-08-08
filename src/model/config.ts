import { FilterContext } from './filter';
import { SortContext } from './sort';

export type Context = {
    config : Config
    definitions : Array<Definition>
    sortCtx: SortContext
    filterCtx : FilterContext
};

export type Config = {
    styling : {
        row : string
        trow : string
        header : string
        body : string
    }
    sortable : boolean
};

export type Definition = {
    header : string
    accessor? : string
    getValue: (obj : any) => string
    className? : string
    cell? : (props : CellProps) => JSX.Element
    sort? : (a : any, b : any) => 1 | -1 | 0
    sortable? : boolean
};

export type CellProps = {
    value : any
    row : any
}
