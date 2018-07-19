import * as React from 'react';

type TCellProps = {
    definition : any
    row : any
};

export const TCell : React.StatelessComponent<TCellProps> = (props) => {
    let value = props.definition.getValue(props.row);
    return <td className={ props.definition.className }>
        { props.definition.cell ? React.createElement(props.definition.cell, { value: value, row: props.row }) : value }
    </td>;
};
