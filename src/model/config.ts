import { TableHeaderColumnProps } from './../components/tableHeaderColumn';
import { TableBodyColumnProps } from './../components/tableBodyColumn';
import { FilterContext } from './filter';
import { SortContext } from './sort';
import { Styling } from './styling';

export type Context = {
    config : Config
    definitions : Array<Definition>
    sortCtx: SortContext
    filterCtx : FilterContext
};

export type Config = {
    styling : Styling
    sortable : boolean
};

export type Definition = {
    type : (props : TableBodyColumnProps) => JSX.Element
    typeHeader : (props : TableHeaderColumnProps) => JSX.Element
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
