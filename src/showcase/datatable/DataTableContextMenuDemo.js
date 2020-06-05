import React, { Component } from 'react';
import {DataTable} from '../../components/datatable/DataTable';
import {Column} from '../../components/column/Column';
import {ContextMenu} from '../../components/contextmenu/ContextMenu';
import {Growl} from '../../components/growl/Growl';
import {CarService} from '../service/CarService';
import {DataTableSubmenu} from '../../showcase/datatable/DataTableSubmenu';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import AppContentContext from '../../AppContentContext';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class DataTableContextMenuDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars: [],
            selectedCar: null
        };

        this.menu = [
            {label: 'View', icon: 'pi pi-fw pi-search', command: () => this.viewCar(this.state.selectedCar)},
            {label: 'Delete', icon: 'pi pi-fw pi-times', command: () => this.deleteCar(this.state.selectedCar)}
        ];

        this.carservice = new CarService();
        this.viewCar = this.viewCar.bind(this);
        this.deleteCar = this.deleteCar.bind(this);
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    viewCar(car) {
        this.growl.show({severity: 'info', summary: 'Car Selected', detail: car.vin + ' - ' + car.brand});
    }

    deleteCar(car) {
        let carsList = [...this.state.cars];
        carsList = carsList.filter((c) => c.vin !== car.vin);

        this.growl.show({severity: 'info', summary: 'Car Delete', detail: car.vin + ' - ' + car.brand});
        this.setState({
            cars: carsList
        });
    }

    render() {
        return (
            <div>
                <DataTableSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataTable - ContextMenu</h1>
                        <p>DataTable has exclusive integration with ContextMenu.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("dataTable")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Growl ref={(el) => { this.growl = el; }}></Growl>

                    <ContextMenu model={this.menu} ref={el => this.cm = el} onHide={() => this.setState({selectedCar: null})}/>

                    <DataTable value={this.state.cars} header="Right Click"
                        contextMenuSelection={this.state.selectedCar} onContextMenuSelectionChange={e => this.setState({selectedCar: e.value})}
                        onContextMenu={e => this.cm.show(e.originalEvent)}>
                        <Column field="vin" header="Vin" />
                        <Column field="year" header="Year" />
                        <Column field="brand" header="Brand" />
                        <Column field="color" header="Color" />
                    </DataTable>
                </div>

                <DataTableContextMenuDemoDoc></DataTableContextMenuDemoDoc>
            </div>
        );
    }
}

export class DataTableContextMenuDemoDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {ContextMenu} from 'primereact/contextmenu';
import {Growl} from 'primereact/growl';
import {CarService} from '../service/CarService';

export class DataTableContextMenuDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars: [],
            selectedCar: null
        };

        this.menu = [
            {label: 'View', icon: 'pi pi-fw pi-search', command: () => this.viewCar(this.state.selectedCar)},
            {label: 'Delete', icon: 'pi pi-fw pi-times', command: () => this.deleteCar(this.state.selectedCar)}
        ];

        this.carservice = new CarService();
        this.viewCar = this.viewCar.bind(this);
        this.deleteCar = this.deleteCar.bind(this);
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    viewCar(car) {
        this.growl.show({severity: 'info', summary: 'Car Selected', detail: car.vin + ' - ' + car.brand});
    }

    deleteCar(car) {
        let carsList = [...this.state.cars];
        carsList = carsList.filter((c) => c.vin !== car.vin);

        this.growl.show({severity: 'info', summary: 'Car Delete', detail: car.vin + ' - ' + car.brand});
        this.setState({
            cars: carsList
        });
    }

    render() {
        return (
            <div>
                <Growl ref={(el) => { this.growl = el; }}></Growl>

                <ContextMenu model={this.menu} ref={el => this.cm = el} onHide={() => this.setState({selectedCar: null})}/>

                <DataTable value={this.state.cars} header="Right Click"
                    contextMenuSelection={this.state.selectedCar} onContextMenuSelectionChange={e => this.setState({selectedCar: e.value})}
                    onContextMenu={e => this.cm.show(e.originalEvent)}>
                    <Column field="vin" header="Vin" />
                    <Column field="year" header="Year" />
                    <Column field="brand" header="Brand" />
                    <Column field="color" header="Color" />
                </DataTable>
            </div>
        );
    }
}
                `
            },
            'hooks': {
                tabName: 'Hooks Source',
                content: `
import React, { useState, useEffect, useRef } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {ContextMenu} from 'primereact/contextmenu';
import {Growl} from 'primereact/growl';
import {CarService} from '../service/CarService';

const DataTableContextMenuDemo = () => {
    const [cars, setCars] = useState([]);
    const [selectedCar, setSelectedCar] = useState(null);
    const menu = [
        {label: 'View', icon: 'pi pi-fw pi-search', command: () => viewCar(selectedCar)},
        {label: 'Delete', icon: 'pi pi-fw pi-times', command: () => deleteCar(selectedCar)}
    ];

    const carservice = new CarService();
    let growl = useRef(null);
    let cm = useRef(null);

    useEffect(() => {
        carservice.getCarsSmall().then(data => setCars(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const viewCar = (car) => {
        growl.current.show({severity: 'info', summary: 'Car Selected', detail: car.vin + ' - ' + car.brand});
    };

    const deleteCar = (car) => {
        let carsList = [...cars];
        carsList = carsList.filter((c) => c.vin !== car.vin);

        growl.current.show({severity: 'info', summary: 'Car Delete', detail: car.vin + ' - ' + car.brand});
        setCars(carsList);
    };

    return (
        <div>
            <Growl ref={growl}></Growl>

            <ContextMenu model={menu} ref={cm} onHide={() => setSelectedCar(null)}/>

            <DataTable value={cars} header="Right Click"
                contextMenuSelection={selectedCar} onContextMenuSelectionChange={e => setSelectedCar(e.value)}
                onContextMenu={e => cm.current.show(e.originalEvent)}>
                <Column field="vin" header="Vin" />
                <Column field="year" header="Year" />
                <Column field="brand" header="Brand" />
                <Column field="color" header="Color" />
            </DataTable>
        </div>
    );
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState, useEffect, useRef } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {ContextMenu} from 'primereact/contextmenu';
import {Growl} from 'primereact/growl';
import {CarService} from '../service/CarService';

const DataTableContextMenuDemo = () => {
    const [cars, setCars] = useState([]);
    const [selectedCar, setSelectedCar] = useState(null);
    const menu = [
        {label: 'View', icon: 'pi pi-fw pi-search', command: () => viewCar(selectedCar)},
        {label: 'Delete', icon: 'pi pi-fw pi-times', command: () => deleteCar(selectedCar)}
    ];

    const carservice = new CarService();
    let growl = useRef<any>(null);
    let cm = useRef<any>(null);

    useEffect(() => {
        carservice.getCarsSmall().then(data => setCars(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const viewCar = (car: any) => {
        growl.current.show({severity: 'info', summary: 'Car Selected', detail: car.vin + ' - ' + car.brand});
    };

    const deleteCar = (car: any) => {
        let carsList: any = [...cars];
        carsList = carsList.filter((c) => c.vin !== car.vin);

        growl.current.show({severity: 'info', summary: 'Car Delete', detail: car.vin + ' - ' + car.brand});
        setCars(carsList);
    };

    return (
        <div>
            <Growl ref={growl}></Growl>

            <ContextMenu model={menu} ref={cm} onHide={() => setSelectedCar(null)}/>

            <DataTable value={cars} header="Right Click"
                contextMenuSelection={selectedCar} onContextMenuSelectionChange={e => setSelectedCar(e.value)}
                onContextMenu={e => cm.current.show(e.originalEvent)}>
                <Column field="vin" header="Vin" />
                <Column field="year" header="Year" />
                <Column field="brand" header="Brand" />
                <Column field="color" header="Color" />
            </DataTable>
        </div>
    );
}
                `
            }
        }
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    {
                        this.sources && Object.entries(this.sources).map(([key, value], index) => {
                            return (
                                <TabPanel key={`source_${index}`} header={value.tabName} contentClassName="source-content">
                                    <LiveEditor name="DataTableContextMenuDemo" sources={[key, value]} service="CarService" data="cars-small" />
                                </TabPanel>
                            );
                        })
                    }
                </TabView>
            </div>
        )
    }
}
