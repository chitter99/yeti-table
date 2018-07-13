import * as React from 'react';
import { TRow } from './trow';
import { config } from '../model/config';

type TBodyProps = {
    config : config
    data : Array<any>
};

export const TBody : React.StatelessComponent<TBodyProps> = (props) => {
    return <tbody className={ props.config.styling.body }>
        { props.data.map((row, i) => <TRow key={ i } config={ props.config } row={ row }  />) }
    </tbody>;
};
