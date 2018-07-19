import * as React from 'react';
import { config, definition } from '../model/config';

type THeadProps = {
    config : config
    sortColumn : (column : definition) => void
};

export const THead : React.StatelessComponent<THeadProps> = (props) => {
    return <thead className={ props.config.styling.header }>
        <tr>
            { props.config.definition.map((def) => <th className={ props.config.styling.trow } onClick={ () => props.sortColumn(def) }>{ def.header }</th>) }
        </tr>
    </thead>;
};
