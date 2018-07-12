import * as React from 'react';
import { TRow } from './trow';

type TBodyProps = {
    definition : Array<any>
    data : Array<any>
};

export const TBody : React.StatelessComponent<TBodyProps> = (props) => {
    return <tbody>
        { props.data.map((row, i) => <TRow key={ i } definition={ props.definition } row={ row }  />) }
    </tbody>;
};
