import * as React from 'react';

type TCellProps = {
    definition : any
    row : any
};

function fetch(obj : any, prop : string) {
    let i = prop.indexOf('.');
    if(i > -1) {
        return fetch(obj[prop.substring(0, i)], prop.substring(i + 1));
    }
    return obj[prop];
}

export const TCell : React.StatelessComponent<TCellProps> = (props) => {
    let value = props.row;
    if(props.definition.accessor) {
        value = fetch(value, props.definition.accessor);
    }
    if(props.definition.getValue) {
        value = props.definition.getValue(value);
    }
    return <td className={ props.definition.className }>
        { props.definition.cell ? React.createElement(props.definition.cell, { value: value }) : value }
    </td>;
};
