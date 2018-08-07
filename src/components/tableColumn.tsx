import * as React from 'react';

type TableColumnProps = {
    definition : any
    row : any
};

export const TableColumn : React.StatelessComponent<TableColumnProps> = (props) => {
    let value = props.definition.getValue(props.row);
    return <td className={ props.definition.className }>
        { props.definition.cell ? React.createElement(props.definition.cell, { value: value, row: props.row }) : value }
    </td>;
};
