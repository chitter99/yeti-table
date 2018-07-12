import * as React from 'react';
import { TCell } from './tcell';

type TRowProps = {
    definition : Array<any>
    row : any
};

export const TRow : React.StatelessComponent<TRowProps> = (props) => {
    return <tr>
        { props.definition.map((cell, i) => <TCell key={ i } definition={ cell } row={ props.row } />) }
    </tr>;
};
