import * as React from 'react';
import { Context } from '../model/config';

type TableHeaderRowProps = {
    context : Context
};

export const TableHeaderRow : React.StatelessComponent<TableHeaderRowProps> = (props) => {
    return <tr>
        { props.context.definitions.map((col, i) => React.createElement(col.typeHeader, { context: props.context, column: col, key: i})) }
    </tr>;
};
