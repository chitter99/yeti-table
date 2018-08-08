import * as React from 'react';
import { Context, Definition } from '../model/config';

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
        <tr>
            { props.context.definitions.map((def, i) => <th key={ i } className={ props.context.config.styling.trow } onClick={ () => onClick(def) }>{ def.header }</th>) }
        </tr>
    </thead>;
};
