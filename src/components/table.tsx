import * as React from 'react';
import { THead } from './thead';
import { TBody } from './tbody';

type TableProps = {
    data? : Array<any>
    className? : string
    children : Array<React.ReactChild>
}

export class Table extends React.Component<TableProps, any> {

    generateColumnDefinitions() {
        let def = [];
        this.props.children.forEach((child) => {
            if(React.isValidElement(child)) {
                def.push(child.props);
            }
        });
        return def;
    }

    render() {
        let def = this.generateColumnDefinitions();
        return <table className={ this.props.className }>
            <THead definition={ def } />
            <TBody definition={ def } data={ this.props.data } />
        </table>;
    }
}

