import React, { Component } from 'react';
import {DataTable} from '../../components/datatable/DataTable';
import {Column} from '../../components/column/Column';
import {CarService} from '../service/CarService';
import {MultiSelect} from '../../components/multiselect/MultiSelect';
import {DataTableSubmenu} from '../../showcase/datatable/DataTableSubmenu';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';

export class DataTableColTogglerDemo extends Component {

    constructor() {
        super();
        this.carservice = new CarService();
        let columns = [
            {field: 'vin', header: 'Vin'},
            {field: 'year', header: 'Year'},
            {field: 'brand', header: 'Brand'},
            {field: 'color', header: 'Color'}
        ];

        this.state = {
            cols: columns
        };

        this.colOptions = [];
        for(let col of columns) {
            this.colOptions.push({label: col.header, value: col});
        }

        this.onColumnToggle = this.onColumnToggle.bind(this);
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    onColumnToggle(event) {
        this.setState({cols: event.value});
    }

    export() {
        this.dt.exportCSV();
    }

    render() {
        let header = <div style={{textAlign:'left'}}>
                        <MultiSelect value={this.state.cols} options={this.colOptions} onChange={this.onColumnToggle} style={{width:'250px'}}/>
                     </div>;

        let columns = this.state.cols.map((col,i) => {
            return <Column key={col.field} field={col.field} header={col.header} />;
        });

        return (
            <div>
                <DataTableSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataTable - Column Toggler</h1>
                        <p>MultiSelect component can be used to implement column toggler functionality.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <DataTable value={this.state.cars} header={header}>
                        {columns}
                    </DataTable>
                </div>

                <DataTableColTogglerDemoDoc></DataTableColTogglerDemoDoc>
            </div>
        );
    }
}

export class DataTableColTogglerDemoDoc extends Component {

    shouldComponentUpdate(){
        return false;
    }
    
    render() {
        return (
            <div className="content-section source">
                <TabView>
                    <TabPanel header="Source">
<CodeHighlight className="language-javascript">
{`
import React, { Component } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {CarService} from '../service/CarService';
import {MultiSelect} from 'primereact/multiselect';

export class DataTableColTogglerDemo extends Component {

    constructor() {
        super();
        this.carservice = new CarService();
        let columns = [
            {field: 'vin', header: 'Vin'},
            {field: 'year', header: 'Year'},
            {field: 'brand', header: 'Brand'},
            {field: 'color', header: 'Color'}
        ];

        this.state = {
            cols: columns
        };

        this.colOptions = [];
        for(let col of columns) {
            this.colOptions.push({label: col.header, value: col});
        }

        this.onColumnToggle = this.onColumnToggle.bind(this);
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    onColumnToggle(event) {
        this.setState({cols: event.value});
    }

    export() {
        this.dt.exportCSV();
    }

    render() {
        let header = <div style={{textAlign:'left'}}>
                        <MultiSelect value={this.state.cols} options={this.colOptions} onChange={this.onColumnToggle} style={{width:'250px'}}/>
                     </div>;

        let columns = this.state.cols.map((col,i) => {
            return <Column key={col.field} field={col.field} header={col.header} />;
        });

        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>DataTable - Column Toggler</h1>
                        <p>MultiSelect component can be used to implement column toggler functionality.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <DataTable value={this.state.cars} header={header}>
                        {columns}
                    </DataTable>
                </div>
            </div>
        );
    }
}

`}
</CodeHighlight>
                    </TabPanel>
                </TabView>
            </div>
        )
    }
}
