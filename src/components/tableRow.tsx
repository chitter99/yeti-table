import * as React from 'react';
import { TableColumn } from './tableColumn';
import { Config } from '../model/config';

type TableRowProps = {
    config : Config
    row : any
};

export const TableRow : React.StatelessComponent<TableRowProps> = (props) => {
    return <tr className={ props.config.styling.row }>
        { props.config.definition.map((cell, i) => <TableColumn key={ i } definition={ cell } row={ props.row } />) }
    </tr>;
};
