import * as React from 'react';
import { TCell } from './tcell';
import { Config } from '../model/config';

type TRowProps = {
    config : Config
    row : any
};

export const TRow : React.StatelessComponent<TRowProps> = (props) => {
    return <tr className={ props.config.styling.row }>
        { props.config.definition.map((cell, i) => <TCell key={ i } definition={ cell } row={ props.row } />) }
    </tr>;
};
