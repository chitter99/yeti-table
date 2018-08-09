import * as React from 'react';
import { Context } from '../model/config';
import { TableHeaderRow } from './tableHeaderRow';

type TableHeaderProps = {
    context : Context
};

export const TableHeader : React.StatelessComponent<TableHeaderProps> = (props) => {
    function onClick(def) {
        if(def.sortable === null || def.sortable != false) {
            props.context.sortCtx.sortColumnFn(def);
        }
    }
    return <thead className={ props.context.config.styling.header }>
        <TableHeaderRow context={ props.context } />
    </thead>;
};
