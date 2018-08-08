import * as React from 'react';
import { Context } from '../model/config';
import { TableHeader } from './tableHeader';
import { TableBody } from './tableBody';

type TableRootProps = {
    context : Context
    data? : Array<any>
};

export const TableRoot : React.StatelessComponent<TableRootProps> = (props) => <table>
    <TableHeader context={ props.context } />
    <TableBody context={ props.context } data={ props.data } />
</table>;

