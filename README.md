# yeti-table
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
    <Table data={ data }>
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


