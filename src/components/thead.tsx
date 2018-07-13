import * as React from 'react';
import { config } from '../model/config';

type THeadProps = {
    config : config
};

export const THead : React.StatelessComponent<THeadProps> = (props) => {
    return <thead className={ props.config.styling.header }>
        <tr>
            { props.config.definition.map((def) => <th className={ props.config.styling.trow }>{ def.header }</th>) }
        </tr>
    </thead>;
};
