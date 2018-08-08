![Yeti Table](https://github.com/chitter99/yeti-table/blob/master/media/yeti-table-logo.png?raw=true)

Simple Table Component for React

# Features
* **Display Values like you want**, even add behavior to it or just use an string accessor
* **Sort** with default or custom Algorithms
* **Fully customizable** with Props and Callbacks
* Easy and fast Table Markup
* **Light** in filesize, current build is only **5kb** small 
* **100% Open Source** and **Free** to use

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
Prop | Type | Desc | Default 
--- | --- | --- | ---
data | `Array<any>` | Data of table | `null` 
className | `String` | Class of table elm. | `null` 
rowClassName | `String` | Class of tr elm. | `null` 
trowClassName | `String` | Class of th elm. | `null` 
headerClassName | `String` | Class of thead elm. | `null` 
bodyClassName | `String` | Class of tbody elm.| `null` 
sortable | `Boolean` | Is Table sortable. When True Table can be sorted after every Column | `false`
filterFn | `(row) => Boolean` | Only Rows which return true will be shown in Table | `null`
 
## Columns
Each Column is represented by a Column Element inside the Table Body.

Prop | Type | Desc | Example | Default
--- | --- | --- | --- | ---
header | `String`  | Name in the Table Header | `Name` | Required
accessor | `String` | String accessor for navigating in the Data Object. Can contain `.`. | `employee.email` | `null`
getValue | `(obj : any) => string` | Callback to get Value of Cell. If no accessor set, obj is full Row. | `(row) => row.name` | `null`
cell | `React.StatelessComponent<CellProps>` | Cell Component. `props.value` contains accessor value or getValue result or full row. | | `null`
sort | `(a, b) => Number` | Custom callback for sorting. 1: a > b -1: a < b 0: a = b | | `null`
sortable | `Boolean` | Overrides sortable of Table | | `null`

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

# Planned Features
- [ ] Responsive styling.
- [X] Sortable with equal algorithm.
- [X] Sortable with custom algorithm.
- [ ] Customizable indicator for sort.
- [ ] Data from remote URL. Request Data automaticly from Backend.
- [X] Filter data with function.
- [ ] Filter data with props.
- [ ] Filter data with custom form.
- [ ] Filter in comination with remote URL. Remote filtering with Query Parameter. 
- [ ] Plugin System
- [X] Use other types of Columns.

## Plugin System
- [ ] Plugins can replace or add to individual components.
- [ ] Plugins can hook on events with callbacks.
- [ ] User can use individual components from Plugins to replace specific components. (Similar to current cell system)
