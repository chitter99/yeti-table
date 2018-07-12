import * as React from 'react';

type THeadProps = {
    definition : Array<any>
};

export const THead : React.StatelessComponent<THeadProps> = (props) => {
    return <thead>
        <tr>
            { props.definition.map((def) => <th>{ def.header }</th>) }
        </tr>
    </thead>;
};
