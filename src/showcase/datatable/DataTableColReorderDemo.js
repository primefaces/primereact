import React, { Component } from 'react';
import {DataTable} from '../../components/datatable/DataTable';
import {Column} from '../../components/column/Column';
import {CarService} from '../service/CarService';
import {DataTableSubmenu} from '../../showcase/datatable/DataTableSubmenu';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../../components/codehighlight/CodeHighlight';

export class DataTableColReorderDemo extends Component {

	constructor() {
		super();
		this.state = {
			cars: []
		};
		this.carservice = new CarService();
	}

	componentDidMount() {
		this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
	}

	render() {
		return (
            <div>
                <DataTableSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataTable - Column Reorder</h1>
                         <p>Columns can be reorder using drag drop by setting the reorderableColumns to true.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Fit Mode</h3>
                    <DataTable value={this.state.cars} reorderableColumns={true}>
                        <Column field="vin" header="Vin" style={{width:'20%'}}/>
                        <Column field="year" header="Year" style={{width:'40%'}}/>
                        <Column field="brand" header="Brand" style={{width:'20%'}}/>
<Column field="color" header="Color" style={{width:'20%'}}/>
</DataTable>

<h3>Expand Mode</h3>
<DataTable value={this.state.cars} reorderableColumns={true} columnResizeMode="expand">
	<Column field="vin" header="Vin" />
	<Column field="year" header="Year" />
	<Column field="brand" header="Brand" />
	<Column field="color" header="Color" />
</DataTable>
</div>

<DataTableColResizeDemoDoc></DataTableColResizeDemoDoc>
</div>
        );
}
}

export class DataTableColResizeDemoDoc extends Component {
    
	render() {
		return (
            <div className="content-section source">
                <TabView>
                    <TabPanel header="Source">
<CodeHighlight className="language-javascript">
{`
import React, { Component } from 'react';
import {DataTable} from 'primereact/components/datatable/DataTable';
import {Column} from 'primereact/components/column/Column';
import {CarService} from '../service/CarService';

export class DataTableColResizeDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars: []
        };
        this.carservice = new CarService();
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataTable - Column reorder</h1>
                        <p>Columns can be reorder using drag drop by setting the reorderableColumns to true.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Fit Mode</h3>
                    <DataTable value={this.state.cars} reorderableColumns={true}>
                        <Column field="vin" header="Vin" style={{width:'20%'}}/>
                        <Column field="year" header="Year" style={{width:'40%'}}/>
                        <Column field="brand" header="Brand" style={{width:'20%'}}/>
                        <Column field="color" header="Color" style={{width:'20%'}}/>
                    </DataTable>

                    <h3>Expand Mode</h3>
                    <DataTable value={this.state.cars} reorderableColumns={true}>
                        <Column field="vin" header="Vin" />
                        <Column field="year" header="Year" />
                        <Column field="brand" header="Brand" />
                        <Column field="color" header="Color" />
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
