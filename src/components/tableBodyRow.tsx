import * as React from 'react';
import { Context } from '../model/config';

type TableBodyRowProps = {
    context : Context
    row : any
};

export const TableBodyRow : React.StatelessComponent<TableBodyRowProps> = (props) => {
    return <tr className={ props.context.config.styling.tableBodyRow }>
        { props.context.definitions.map((col, i) => React.createElement(col.type, { context: props.context, column: col, row: props.row, key: i})) }
    </tr>;
};
