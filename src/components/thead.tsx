import * as React from 'react';
import { Config, Definition } from '../model/config';

type THeadProps = {
    config : Config
    sortColumn : (column : Definition) => void
};

export const THead : React.StatelessComponent<THeadProps> = (props) => {
    function onClick(def) {
        if(def.sortable === null || def.sortable != false) {
            props.sortColumn(def);
        }
    }
    return <thead className={ props.config.styling.header }>
        <tr>
            { props.config.definition.map((def, i) => <th key={ i } className={ props.config.styling.trow } onClick={ () => onClick(def) }>{ def.header }</th>) }
        </tr>
    </thead>;
};
