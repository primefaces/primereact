import React, { memo } from 'react';
import { TabView, TabPanel } from '../../lib/tabview/TabView';
import { useLiveEditorTabs } from '../common/liveeditor';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';

const GMapDoc = memo(() => {

    const sources = {
        'class': {
            tabName: 'Class Sources',
            content: `
import React, { Component } from 'react';
import { GMap } from 'primereact/gmap';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Toast } from 'primereact/toast';
import { loadGoogleMaps, removeGoogleMaps } from './GoogleMaps';

export class GMapDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            googleMapsReady: false,
            dialogVisible: false,
            markerTitle: '',
            draggableMarker: false,
            overlays: null,
            selectedPosition: null
        };

        this.onMapClick = this.onMapClick.bind(this);
        this.onOverlayClick = this.onOverlayClick.bind(this);
        this.handleDragEnd = this.handleDragEnd.bind(this);
        this.onMapReady = this.onMapReady.bind(this);
        this.onHide = this.onHide.bind(this);
        this.addMarker = this.addMarker.bind(this);
    }

    componentDidMount() {
        loadGoogleMaps(() => {
            this.setState({ googleMapsReady: true });
        });
    }

    componentWillUnmount() {
        removeGoogleMaps();
    }

    onMapClick(event) {
        this.setState({
            dialogVisible: true,
            selectedPosition: event.latLng
        });
    }

    onOverlayClick(event) {
        let isMarker = event.overlay.getTitle !== undefined;

        if(isMarker) {
            let title = event.overlay.getTitle();
            this.infoWindow = this.infoWindow||new google.maps.InfoWindow();
            this.infoWindow.setContent('<div>' + title + '</div>');
            this.infoWindow.open(event.map, event.overlay);
            event.map.setCenter(event.overlay.getPosition());

            this.toast.show({severity:'info', summary:'Marker Selected', detail: title});
        }
        else {
            this.toast.show({severity:'info', summary:'Shape Selected', detail: ''});
        }
    }

    handleDragEnd(event) {
        this.toast.show({severity:'info', summary:'Marker Dragged', detail: event.overlay.getTitle()});
    }

    addMarker() {
        let newMarker = new google.maps.Marker({
                            position: {
                                lat: this.state.selectedPosition.lat(),
                                lng: this.state.selectedPosition.lng()
                            },
                            title: this.state.markerTitle,
                            draggable: this.state.draggableMarker
                        });

        this.setState({
            overlays: [...this.state.overlays, newMarker],
            dialogVisible: false,
            draggableMarker: false,
            markerTitle: ''
        });
    }

    onMapReady(event) {
        this.setState({
            overlays: [
                new google.maps.Marker({position: {lat: 36.879466, lng: 30.667648}, title:"Konyaalti"}),
                new google.maps.Marker({position: {lat: 36.883707, lng: 30.689216}, title:"Ataturk Park"}),
                new google.maps.Marker({position: {lat: 36.885233, lng: 30.702323}, title:"Oldtown"}),
                new google.maps.Polygon({paths: [
                    {lat: 36.9177, lng: 30.7854},{lat: 36.8851, lng: 30.7802},{lat: 36.8829, lng: 30.8111},{lat: 36.9177, lng: 30.8159}
                ], strokeOpacity: 0.5, strokeWeight: 1, fillColor: '#1976D2', fillOpacity: 0.35
                }),
                new google.maps.Circle({center: {lat: 36.90707, lng: 30.56533}, fillColor: '#1976D2', fillOpacity: 0.35, strokeWeight: 1, radius: 1500}),
                new google.maps.Polyline({path: [{lat: 36.86149, lng: 30.63743},{lat: 36.86341, lng: 30.72463}], geodesic: true, strokeColor: '#FF0000', strokeOpacity: 0.5, strokeWeight: 2})
            ]
        })
    }

    onHide(event) {
        this.setState({dialogVisible: false});
    }

    render() {
        const options = {
            center: {lat: 36.890257, lng: 30.707417},
            zoom: 12
        };

        const footer = <div>
            <Button label="Yes" icon="pi pi-check" onClick={this.addMarker} />
            <Button label="No" icon="pi pi-times" onClick={this.onHide} />
        </div>;

        return (
            <div>
                <Toast ref={(el) => { this.toast = el; }}></Toast>

                {
                    this.state.googleMapsReady && (
                        <div className="card">
                            <GMap overlays={this.state.overlays} options={options} style={{width: '100%', minHeight: '320px'}} onMapReady={this.onMapReady}
                                onMapClick={this.onMapClick} onOverlayClick={this.onOverlayClick} onOverlayDragEnd={this.handleDragEnd} />
                        </div>
                    )
                }

                <Dialog header="New Location" visible={this.state.dialogVisible} width="300px" modal footer={footer} onHide={this.onHide}>
                    <div className="grid p-fluid">
                        <div className="col-2" style={{paddingTop:'.75em'}}><label htmlFor="title">Label</label></div>
                        <div className="col-10"><InputText type="text" id="title" value={this.state.markerTitle} onChange={(e) => this.setState({markerTitle: e.target.value})} /></div>

                        <div className="col-2" style={{paddingTop:'.75em'}}>Lat</div>
                        <div className="col-10"><InputText readOnly value={this.state.selectedPosition ? this.state.selectedPosition.lat() : ''} /></div>

                        <div className="col-2" style={{paddingTop:'.75em'}}>Lng</div>
                        <div className="col-10"><InputText readOnly value={this.state.selectedPosition ? this.state.selectedPosition.lng() : ''} /></div>

                        <div className="col-2" style={{paddingTop:'.75em'}}><label htmlFor="drg">Drag</label></div>
                        <div className="col-10"><Checkbox checked={this.state.draggableMarker} onChange={(event) => this.setState({draggableMarker: event.checked})}/></div>
                    </div>
                </Dialog>
            </div>
        );
    }
}
`
        },
        'hooks': {
            tabName: 'Hooks Source',
            content: `
import React, { useEffect, useState, useRef } from 'react';
import { GMap } from 'primereact/gmap';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Toast } from 'primereact/toast';
import { loadGoogleMaps, removeGoogleMaps } from './GoogleMaps';

const GMapDemo = () => {

    const [googleMapsReady, setGoogleMapsReady] = useState(false);
    const [dialogVisible, setDialogVisible] = useState(false);
    const [markerTitle, setMarkerTitle] = useState('');
    const [draggableMarker, setDraggableMarker] = useState(false);
    const [overlays, setOverlays] = useState(null);
    const [selectedPosition, setSelectedPosition] = useState(null);

    const toast = useRef(null);
    const infoWindow = useRef(null);

    useEffect(() => {
        loadGoogleMaps(() => {
            setGoogleMapsReady(true);
        });

        return () => {
            removeGoogleMaps();
        }
    },[])

    const onMapClick = (event) => {
        setDialogVisible(true);
        setSelectedPosition(event.latLng)
    }

    const onOverlayClick = (event) => {
        let isMarker = event.overlay.getTitle !== undefined;

        if(isMarker) {
            let title = event.overlay.getTitle();
            infoWindow.current = infoWindow.current||new google.maps.InfoWindow();
            infoWindow.setContent('<div>' + title + '</div>');
            infoWindow.open(event.map, event.overlay);
            event.map.setCenter(event.overlay.getPosition());

            toast.current.show({severity:'info', summary:'Marker Selected', detail: title});
        }
        else {
            toast.current.show({severity:'info', summary:'Shape Selected', detail: ''});
        }
    }

   const handleDragEnd = (event) => {
        toast.current.show({severity:'info', summary:'Marker Dragged', detail: event.overlay.getTitle()});
    }

    const addMarker = () => {
        let newMarker = new google.maps.Marker({
                            position: {
                                lat: selectedPosition.lat(),
                                lng: selectedPosition.lng()
                            },
                            title: markerTitle,
                            draggable: draggableMarker
                        });

        setOverlays([...overlays, newMarker]);
        setDialogVisible(false);
        setDraggableMarker(false);
        setMarkerTitle('');
    }

    const onMapReady = (event) => {
        setOverlays(
            [
                new google.maps.Marker({position: {lat: 36.879466, lng: 30.667648}, title:"Konyaalti"}),
                new google.maps.Marker({position: {lat: 36.883707, lng: 30.689216}, title:"Ataturk Park"}),
                new google.maps.Marker({position: {lat: 36.885233, lng: 30.702323}, title:"Oldtown"}),
                new google.maps.Polygon({paths: [
                    {lat: 36.9177, lng: 30.7854},{lat: 36.8851, lng: 30.7802},{lat: 36.8829, lng: 30.8111},{lat: 36.9177, lng: 30.8159}
                ], strokeOpacity: 0.5, strokeWeight: 1, fillColor: '#1976D2', fillOpacity: 0.35
                }),
                new google.maps.Circle({center: {lat: 36.90707, lng: 30.56533}, fillColor: '#1976D2', fillOpacity: 0.35, strokeWeight: 1, radius: 1500}),
                new google.maps.Polyline({path: [{lat: 36.86149, lng: 30.63743},{lat: 36.86341, lng: 30.72463}], geodesic: true, strokeColor: '#FF0000', strokeOpacity: 0.5, strokeWeight: 2})
            ]
        );
    }

    const onHide = (event) => {
        setDialogVisible(false);
    }

    const options = {
        center: {lat: 36.890257, lng: 30.707417},
        zoom: 12
    };

    const footer = <div>
        <Button label="Yes" icon="pi pi-check" onClick={addMarker} />
        <Button label="No" icon="pi pi-times" onClick={onHide} />
    </div>;

    return (
        <div>
            <Toast ref={toast}></Toast>

            {
                googleMapsReady && (
                    <div className="card">
                        <GMap overlays={overlays} options={options} style={{width: '100%', minHeight: '320px'}} onMapReady={onMapReady}
                            onMapClick={onMapClick} onOverlayClick={onOverlayClick} onOverlayDragEnd={handleDragEnd} />
                    </div>
                )
            }

            <Dialog header="New Location" visible={dialogVisible} width="300px" modal footer={footer} onHide={onHide}>
                <div className="grid p-fluid">
                    <div className="col-2" style={{paddingTop:'.75em'}}><label htmlFor="title">Label</label></div>
                    <div className="col-10"><InputText type="text" id="title" value={markerTitle} onChange={(e) => setMarkerTitle(e.target.value)} /></div>

                    <div className="col-2" style={{paddingTop:'.75em'}}>Lat</div>
                    <div className="col-10"><InputText readOnly value={selectedPosition ? selectedPosition.lat() : ''} /></div>

                    <div className="col-2" style={{paddingTop:'.75em'}}>Lng</div>
                    <div className="col-10"><InputText readOnly value={selectedPosition ? selectedPosition.lng() : ''} /></div>

                    <div className="col-2" style={{paddingTop:'.75em'}}><label htmlFor="drg">Drag</label></div>
                    <div className="col-10"><Checkbox checked={draggableMarker} onChange={(event) => setDraggableMarker(event.checked)}/></div>
                </div>
            </Dialog>
        </div>
    );
}
`
        },
        'ts': {
            tabName: 'TS Source',
            content: `
import React, { useEffect, useState, useRef } from 'react';
import { GMap } from 'primereact/gmap';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Toast } from 'primereact/toast';
import { loadGoogleMaps, removeGoogleMaps } from './GoogleMaps';

const GMapDemo = () => {

    const [googleMapsReady, setGoogleMapsReady] = useState(false);
    const [dialogVisible, setDialogVisible] = useState(false);
    const [markerTitle, setMarkerTitle] = useState('');
    const [draggableMarker, setDraggableMarker] = useState(false);
    const [overlays, setOverlays] = useState(null);
    const [selectedPosition, setSelectedPosition] = useState(null);

    const toast = useRef(null);
    const infoWindow = useRef(null);

    useEffect(() => {
        loadGoogleMaps(() => {
            setGoogleMapsReady(true);
        });

        return () => {
            removeGoogleMaps();
        }
    },[])

    const onMapClick = (event) => {
        setDialogVisible(true);
        setSelectedPosition(event.latLng)
    }

    const onOverlayClick = (event) => {
        let isMarker = event.overlay.getTitle !== undefined;

        if(isMarker) {
            let title = event.overlay.getTitle();
            infoWindow.current = infoWindow.current||new google.maps.InfoWindow();
            infoWindow.setContent('<div>' + title + '</div>');
            infoWindow.open(event.map, event.overlay);
            event.map.setCenter(event.overlay.getPosition());

            toast.current.show({severity:'info', summary:'Marker Selected', detail: title});
        }
        else {
            toast.current.show({severity:'info', summary:'Shape Selected', detail: ''});
        }
    }

    const handleDragEnd = (event) => {
        toast.current.show({severity:'info', summary:'Marker Dragged', detail: event.overlay.getTitle()});
    }

    const addMarker = () => {
        let newMarker = new google.maps.Marker({
                            position: {
                                lat: selectedPosition.lat(),
                                lng: selectedPosition.lng()
                            },
                            title: markerTitle,
                            draggable: draggableMarker
                        });

        setOverlays([...overlays, newMarker]);
        setDialogVisible(false);
        setDraggableMarker(false);
        setMarkerTitle('');
    }

    const onMapReady = (event) => {
        setOverlays(
            [
                new google.maps.Marker({position: {lat: 36.879466, lng: 30.667648}, title:"Konyaalti"}),
                new google.maps.Marker({position: {lat: 36.883707, lng: 30.689216}, title:"Ataturk Park"}),
                new google.maps.Marker({position: {lat: 36.885233, lng: 30.702323}, title:"Oldtown"}),
                new google.maps.Polygon({paths: [
                    {lat: 36.9177, lng: 30.7854},{lat: 36.8851, lng: 30.7802},{lat: 36.8829, lng: 30.8111},{lat: 36.9177, lng: 30.8159}
                ], strokeOpacity: 0.5, strokeWeight: 1, fillColor: '#1976D2', fillOpacity: 0.35
                }),
                new google.maps.Circle({center: {lat: 36.90707, lng: 30.56533}, fillColor: '#1976D2', fillOpacity: 0.35, strokeWeight: 1, radius: 1500}),
                new google.maps.Polyline({path: [{lat: 36.86149, lng: 30.63743},{lat: 36.86341, lng: 30.72463}], geodesic: true, strokeColor: '#FF0000', strokeOpacity: 0.5, strokeWeight: 2})
            ]
        );
    }

    const onHide = (event) => {
        setDialogVisible(false);
    }

    const options = {
        center: {lat: 36.890257, lng: 30.707417},
        zoom: 12
    };

    const footer = <div>
        <Button label="Yes" icon="pi pi-check" onClick={addMarker} />
        <Button label="No" icon="pi pi-times" onClick={onHide} />
    </div>;

    return (
        <div>
            <Toast ref={toast}></Toast>

            {
                googleMapsReady && (
                    <div className="card">
                        <GMap overlays={overlays} options={options} style={{width: '100%', minHeight: '320px'}} onMapReady={onMapReady}
                            onMapClick={onMapClick} onOverlayClick={onOverlayClick} onOverlayDragEnd={handleDragEnd} />
                    </div>
                )
            }

            <Dialog header="New Location" visible={dialogVisible} width="300px" modal footer={footer} onHide={onHide}>
                <div className="grid p-fluid">
                    <div className="col-2" style={{paddingTop:'.75em'}}><label htmlFor="title">Label</label></div>
                    <div className="col-10"><InputText type="text" id="title" value={markerTitle} onChange={(e) => setMarkerTitle(e.target.value)} /></div>

                    <div className="col-2" style={{paddingTop:'.75em'}}>Lat</div>
                    <div className="col-10"><InputText readOnly value={selectedPosition ? selectedPosition.lat() : ''} /></div>

                    <div className="col-2" style={{paddingTop:'.75em'}}>Lng</div>
                    <div className="col-10"><InputText readOnly value={selectedPosition ? selectedPosition.lng() : ''} /></div>

                    <div className="col-2" style={{paddingTop:'.75em'}}><label htmlFor="drg">Drag</label></div>
                    <div className="col-10"><Checkbox checked={draggableMarker} onChange={(event) => setDraggableMarker(event.checked)}/></div>
                </div>
            </Dialog>
        </div>
    );
}
`
        },
        'browser': {
            tabName: 'Browser Source',
            imports: `
        <script src="./GoogleMaps.js"></script>

        <script src="https://unpkg.com/primereact/core/core.min.js"></script>
        <script src="https://unpkg.com/primereact/gmap/gmap.min.js"></script>
        <script src="https://unpkg.com/primereact/toast/toast.min.js"></script>`,
            content: `
const { useEffect, useState, useRef } = React;
const { GMap } = primereact.gmap;
const { Dialog } = primereact.dialog;
const { InputText } = primereact.inputtext;
const { Button } = primereact.button;
const { Checkbox } = primereact.checkbox;
const { Toast } = primereact.toast;

const GMapDemo = () => {

    const [googleMapsReady, setGoogleMapsReady] = useState(false);
    const [dialogVisible, setDialogVisible] = useState(false);
    const [markerTitle, setMarkerTitle] = useState('');
    const [draggableMarker, setDraggableMarker] = useState(false);
    const [overlays, setOverlays] = useState(null);
    const [selectedPosition, setSelectedPosition] = useState(null);

    const toast = useRef(null);
    const infoWindow = useRef(null);

    useEffect(() => {
        loadGoogleMaps(() => {
            setGoogleMapsReady(true);
        });

        return () => {
            removeGoogleMaps();
        }
    },[])

    const onMapClick = (event) => {
        setDialogVisible(true);
        setSelectedPosition(event.latLng)
    }

    const onOverlayClick = (event) => {
        let isMarker = event.overlay.getTitle !== undefined;

        if(isMarker) {
            let title = event.overlay.getTitle();
            infoWindow.current = infoWindow.current||new google.maps.InfoWindow();
            infoWindow.setContent('<div>' + title + '</div>');
            infoWindow.open(event.map, event.overlay);
            event.map.setCenter(event.overlay.getPosition());

            toast.current.show({severity:'info', summary:'Marker Selected', detail: title});
        }
        else {
            toast.current.show({severity:'info', summary:'Shape Selected', detail: ''});
        }
    }

   const handleDragEnd = (event) => {
        toast.current.show({severity:'info', summary:'Marker Dragged', detail: event.overlay.getTitle()});
    }

    const addMarker = () => {
        let newMarker = new google.maps.Marker({
                            position: {
                                lat: selectedPosition.lat(),
                                lng: selectedPosition.lng()
                            },
                            title: markerTitle,
                            draggable: draggableMarker
                        });

        setOverlays([...overlays, newMarker]);
        setDialogVisible(false);
        setDraggableMarker(false);
        setMarkerTitle('');
    }

    const onMapReady = (event) => {
        setOverlays(
            [
                new google.maps.Marker({position: {lat: 36.879466, lng: 30.667648}, title:"Konyaalti"}),
                new google.maps.Marker({position: {lat: 36.883707, lng: 30.689216}, title:"Ataturk Park"}),
                new google.maps.Marker({position: {lat: 36.885233, lng: 30.702323}, title:"Oldtown"}),
                new google.maps.Polygon({paths: [
                    {lat: 36.9177, lng: 30.7854},{lat: 36.8851, lng: 30.7802},{lat: 36.8829, lng: 30.8111},{lat: 36.9177, lng: 30.8159}
                ], strokeOpacity: 0.5, strokeWeight: 1, fillColor: '#1976D2', fillOpacity: 0.35
                }),
                new google.maps.Circle({center: {lat: 36.90707, lng: 30.56533}, fillColor: '#1976D2', fillOpacity: 0.35, strokeWeight: 1, radius: 1500}),
                new google.maps.Polyline({path: [{lat: 36.86149, lng: 30.63743},{lat: 36.86341, lng: 30.72463}], geodesic: true, strokeColor: '#FF0000', strokeOpacity: 0.5, strokeWeight: 2})
            ]
        );
    }

    const onHide = (event) => {
        setDialogVisible(false);
    }

    const options = {
        center: {lat: 36.890257, lng: 30.707417},
        zoom: 12
    };

    const footer = <div>
        <Button label="Yes" icon="pi pi-check" onClick={addMarker} />
        <Button label="No" icon="pi pi-times" onClick={onHide} />
    </div>;

    return (
        <div>
            <Toast ref={toast}></Toast>

            {
                googleMapsReady && (
                    <div className="card">
                        <GMap overlays={overlays} options={options} style={{width: '100%', minHeight: '320px'}} onMapReady={onMapReady}
                            onMapClick={onMapClick} onOverlayClick={onOverlayClick} onOverlayDragEnd={handleDragEnd} />
                    </div>
                )
            }

            <Dialog header="New Location" visible={dialogVisible} width="300px" modal footer={footer} onHide={onHide}>
                <div className="grid p-fluid">
                    <div className="col-2" style={{paddingTop:'.75em'}}><label htmlFor="title">Label</label></div>
                    <div className="col-10"><InputText type="text" id="title" value={markerTitle} onChange={(e) => setMarkerTitle(e.target.value)} /></div>

                    <div className="col-2" style={{paddingTop:'.75em'}}>Lat</div>
                    <div className="col-10"><InputText readOnly value={selectedPosition ? selectedPosition.lat() : ''} /></div>

                    <div className="col-2" style={{paddingTop:'.75em'}}>Lng</div>
                    <div className="col-10"><InputText readOnly value={selectedPosition ? selectedPosition.lng() : ''} /></div>

                    <div className="col-2" style={{paddingTop:'.75em'}}><label htmlFor="drg">Drag</label></div>
                    <div className="col-10"><Checkbox checked={draggableMarker} onChange={(event) => setDraggableMarker(event.checked)}/></div>
                </div>
            </Dialog>
        </div>
    );
}
                `
        }
    }

    const extFiles = {
        'demo/GoogleMaps.js': {
            content: `
export const loadGoogleMaps = (callback) => {
    const existingScript = document.getElementById('googleMaps');

    if (!existingScript) {
        const script = document.createElement('script');
        script.src = 'https://maps.google.com/maps/api/js?key=AIzaSyA6Ar0UymhiklJBzEPLKKn2QHwbjdz3XV0';
        script.id = 'googleMaps';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        script.onload = () => {
            if (callback) callback();
        };
    }

    if (existingScript && callback) callback();
};

export const removeGoogleMaps = () => {
    const mapScript = document.getElementById('googleMaps');

    if (mapScript) {
        mapScript.parentNode.removeChild(mapScript);

        const head = document.getElementsByTagName('head')[0];
        const scripts = head.getElementsByTagName('script');
        for (let i = 0; i < scripts.length; i++) {
            let script = scripts[i];
            let src = script.src;

            if (src.startsWith('https://maps.google.com/maps')) {
                head.removeChild(script);
            }
        }
    }
};
                `
        }
    }

    return (
        <div className="content-section documentation" id="app-doc">
            <TabView>
                <TabPanel header="Documentation">
                    <h5>Import via Module</h5>
<CodeHighlight lang="js">
{`
import { GMap } from 'primereact/gmap';
`}
</CodeHighlight>

                    <h5>Import via CDN</h5>
<CodeHighlight>
{`
<script src="https://unpkg.com/primereact/core/core.min.js"></script>
<script src="https://unpkg.com/primereact/gmap/gmap.min.js"></script>
`}
</CodeHighlight>

                    <h5>Getting Started</h5>
                    <p>A map is initialized with options and dimensions. Refer to the google maps api for the list of available options.</p>

<CodeHighlight lang="js">
{`
const options = {
    center: {lat: 36.890257, lng: 30.707417},
    zoom: 12
};

return (
    <GMap options={options} style={{width: '100%', minHeight: '320px'}} />
)
`}
</CodeHighlight>

                    <h5>TypeScript</h5>
                    <p>If you are using TypeScript you should install the Google Maps types.</p>

<CodeHighlight lang="js">
{`
// npm install types into devDependencies
npm i -D @types/google.maps

// yarn install types into devDependencies
yarn add @types/google.maps --production=false
`}
</CodeHighlight>

                    <h5>Overlays</h5>
                    <p>GMap can display any type of overlay such as markers, polygons and circles. Overlay instances are bound using the overlays property array. Overlays are aware
                    of binding so whenever the array changes, gmap updates itself.</p>

<CodeHighlight lang="js">
{`
const options = {
    center: {lat: 36.890257, lng: 30.707417},
    zoom: 12
};

const overlays = [
            new google.maps.Marker({position: {lat: 36.879466, lng: 30.667648}, title:"Konyaalti"}),
            new google.maps.Marker({position: {lat: 36.883707, lng: 30.689216}, title:"Ataturk Park"}),
            new google.maps.Marker({position: {lat: 36.885233, lng: 30.702323}, title:"Oldtown"}),
            new google.maps.Polygon({paths: [
                {lat: 36.9177, lng: 30.7854},{lat: 36.8851, lng: 30.7802},{lat: 36.8829, lng: 30.8111},{lat: 36.9177, lng: 30.8159}
            ], strokeOpacity: 0.5, strokeWeight: 1, fillColor: '#1976D2', fillOpacity: 0.35
            }),
            new google.maps.Circle({center: {lat: 36.90707, lng: 30.56533}, fillColor: '#1976D2', fillOpacity: 0.35, strokeWeight: 1, radius: 1500}),
            new google.maps.Polyline({path: [{lat: 36.86149, lng: 30.63743},{lat: 36.86341, lng: 30.72463}], geodesic: true, strokeColor: '#FF0000', strokeOpacity: 0.5, strokeWeight: 2})
        ];

return (
    <GMap overlays={overlays} options={options} style={{width: '100%', minHeight: '320px'}} />
)
`}
</CodeHighlight>

                    <h5>Events</h5>
                    <p>GMap provides common callbacks to hook into events including map click, overlay click and overlay dragging.</p>

<CodeHighlight lang="js">
{`
const onMapClick = (event) => {
    //event: MouseEvent of Google Maps api
}

const onMapReady = (map) => {
    //map: Map instance
}

const options = {
    center: {lat: 36.890257, lng: 30.707417},
    zoom: 12
};

let overlays = [
            new google.maps.Marker({position: {lat: 36.879466, lng: 30.667648}, title:"Konyaalti"}),
            new google.maps.Marker({position: {lat: 36.883707, lng: 30.689216}, title:"Ataturk Park"}),
            new google.maps.Marker({position: {lat: 36.885233, lng: 30.702323}, title:"Oldtown"}),
            new google.maps.Polygon({paths: [
                {lat: 36.9177, lng: 30.7854},{lat: 36.8851, lng: 30.7802},{lat: 36.8829, lng: 30.8111},{lat: 36.9177, lng: 30.8159}
            ], strokeOpacity: 0.5, strokeWeight: 1, fillColor: '#1976D2', fillOpacity: 0.35
            }),
            new google.maps.Circle({center: {lat: 36.90707, lng: 30.56533}, fillColor: '#1976D2', fillOpacity: 0.35, strokeWeight: 1, radius: 1500}),
            new google.maps.Polyline({path: [{lat: 36.86149, lng: 30.63743},{lat: 36.86341, lng: 30.72463}], geodesic: true, strokeColor: '#FF0000', strokeOpacity: 0.5, strokeWeight: 2})
        ]

return (
    <GMap overlays={overlays} options={options} style={{width: '100%', minHeight: '320px'}} onMapReady={onMapReady} onMapClick={onMapClick} />
)
`}
</CodeHighlight>

                    <h5>Google Maps API</h5>
                    <p>In case you need to access the map instance directly, use the getMap() method. In the following example, this.gmap.getMap() will provide the map instance. Alternative
                    is using onMapReady event as it passes the map instance as a parameter.</p>

<CodeHighlight lang="js">
{`
const options = {
    center: {lat: 36.890257, lng: 30.707417},
    zoom: 12
};

return (
    <GMap ref={gmap} options={options} style={{width: '100%', minHeight: '320px'}} />
)
`}
</CodeHighlight>

                    <h5>Properties</h5>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Default</th>
                                <th>Description</th>
                            </tr>
                            </thead>
                                <tbody>
                                <tr>
                                    <td>options</td>
                                    <td>object</td>
                                    <td>null</td>
                                    <td>Google Maps API configuration object.</td>
                                </tr>
                                <tr>
                                    <td>overlays</td>
                                    <td>array</td>
                                    <td>null</td>
                                    <td>An array of overlays to display.</td>
                                </tr>
                                <tr>
                                    <td>style</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Inline style of the component.</td>
                                </tr>
                                <tr>
                                    <td>className</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Style class of the component.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Events</h5>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Parameters</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>onMapClick</td>
                                    <td>event: Google Maps MouseEvent</td>
                                    <td>Callback to invoke when map is clicked except markers.</td>
                                </tr>
                                <tr>
                                    <td>onMapDragEnd</td>
                                    <td>-</td>
                                    <td>Callback to invoke when map drag (i.e. pan) has ended.</td>
                                </tr>
                                <tr>
                                    <td>onMapReady</td>
                                    <td>event.map: Google Maps Instance</td>
                                    <td>Callback to invoke when the map is ready to be used.</td>
                                </tr>
                                <tr>
                                    <td>onOverlayClick</td>
                                    <td>originalEvent: Google Maps MouseEvent <br />
                                        overlay: Clicked overlay <br />
                                        map: Map instance <br /></td>
                                    <td>Callback to invoke when an overlay is clicked.</td>
                                </tr>
                                <tr>
                                    <td>onOverlayDragStart</td>
                                    <td>event: Google Maps MouseEvent</td>
                                    <td>Callback to invoke when an overlay drag starts.</td>
                                </tr>
                                <tr>
                                    <td>onOverlayDrag</td>
                                    <td>event: Google Maps MouseEvent</td>
                                    <td>Callback to invoke when an overlay is being dragged.</td>
                                </tr>
                                <tr>
                                    <td>onOverlayDragEnd</td>
                                    <td>event: Google Maps MouseEvent</td>
                                    <td>Callback to invoke when an overlay drag ends.</td>
                                </tr>
                                <tr>
                                    <td>onZoomChanged</td>
                                    <td>-</td>
                                    <td>Callback to invoke when zoom level has changed.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Styling</h5>
                    <p>Component does not apply any styling.</p>

                    <h5>Accessibility</h5>
                    <DevelopmentSection>
                        <p>Refer to the <a href="https://support.google.com/maps/answer/6396990?hl=en&co=GENIE.Platform%3DDesktop">Google Maps documentation</a> for more information about accessibility.</p>
                    </DevelopmentSection>

                    <h5>Dependencies</h5>
                    <p>Google Maps script.</p>

                </TabPanel>
                {
                    useLiveEditorTabs({ name: 'GMapDemo', sources: sources, extFiles: extFiles })
                }
            </TabView>
        </div>
    );
})

export default GMapDoc;
