![Yeti Table](https://github.com/chitter99/yeti-table/blob/master/media/yeti-table-logo.png?raw=true)

Simple Table Component for React

# Example
```javascript
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Table, Column, CellProps } from 'yeti-table';

let data = [
    { name: 'John Cenedy', birthday: new Date(1998, 5, 30), street: 'Musterstrasse', streetNr: 15 },
    { name: 'Simon Maier', birthday: new Date(2000, 1, 14), street: 'Joachimstrasse', streetNr: '2b' },
    { name: 'Lea Wagner', birthday: new Date(1980, 7, 24), street: 'Bäckeralle', streetNr: 63 },
];

const AddressCell : React.StatelessComponent<CellProps> = (props) => <span>
    { props.value.street + ' ' + props.value.streetNr }
</span>;

const App : React.StatelessComponent<any> = (props) => <div>
    <Table data={ data } sortable={ true }>
        <Column 
            header='Name'
            accessor='name' />
        <Column 
            header='Age'
            accessor='birthday'
            getValue={ (birthday) => Math.abs(new Date(Date.now() - birthday.getTime()).getUTCFullYear() - 1970).toString() } />
        <Column 
            header='Address'
            cell={ AddressCell } />
    </Table>
</div>;

ReactDOM.render(<App/>, document.getElementById("app"));
```
![Example Table](https://github.com/chitter99/yeti-table/blob/master/media/example-1.png?raw=true)

# Configuration

## Table
Prop | Type | Desc | Example | Default
--- | --- | --- | --- | ---
data | `Array<any>` | Data of table | | Null
className | string | Class of table elm. | | Null
rowClassName | string | Class of tr elm. | | Null
trowClassName | string | Class of th elm. | | Null
headerClassName | string | Class of thead elm. | | Null
bodyClassName | string | Class of tbody elm. | | Null
sortable | boolean | Is Table sortable. When True Table can be sorted after every Column | | `false`

## Columns
Each Column is represented by a Column Element inside the Table Body.

Prop | Type | Desc | Example | Default
--- | --- | --- | --- | ---
header | string | Name in the Table Header | `Name` | Required
accessor | string | String accessor for navigating in the Data Object. Can contain `.`. | `employee.email` | Null
getValue | callback `(obj : any) => string` | Callback to get Value of Cell. If no accessor set, obj is full Row. | `(row) => row.name` | Null
cell | `React.StatelessComponent<CellProps>` | Cell Component. `props.value` contains accessor value or getValue result or full row. | | Null
sort | `(a, b) => Number` | Custom callback for sorting. 1: a > b -1: a < b 0: a = b | | Null
sortable | boolean | Overrides sortable of Table | | Null

# Installation 

## Via Npm
```
$ npm i -s yeti-table
```
Then
```javascript
// ES6
import { Table, Column } from 'yeti-table';
// ES5
var YetiTable = require('yeti-table');
```
