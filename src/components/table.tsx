import * as React from 'react';
import { THead } from './thead';
import { TBody } from './tbody';
import { config, definition } from '../model/config';

type TableProps = {
    children? : Array<React.ReactChild>
    data? : Array<any>
    className? : string
    rowClassName? : string
    trowClassName? : string 
    headerClassName : string
    bodyClassName : string
}

export class Table extends React.Component<TableProps, any> {

    generateColumnDefinitions() : Array<definition> {
        let def = [];
        this.props.children.forEach((child) => {
            if(React.isValidElement(child)) {
                def.push(child.props);
            }
        });
        return def;
    }

    generateConfig() : config {
        return {
            definition: this.generateColumnDefinitions(),
            styling: {
                row: this.props.rowClassName,
                trow: this.props.trowClassName,
                header: this.props.headerClassName,
                body: this.props.bodyClassName
            }
        };
    }

    render() {
        let cof = this.generateConfig();
        return <table className={ this.props.className }>
            <THead config={ cof } />
            <TBody config={ cof } data={ this.props.data } />
        </table>;
    }
}

