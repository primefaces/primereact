import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { Checkbox } from '@/components/lib/checkbox/Checkbox';
import { Dialog } from '@/components/lib/dialog/Dialog';
import { GMap } from '@/components/lib/gmap/GMap';
import { InputText } from '@/components/lib/inputtext/InputText';
import { Toast } from '@/components/lib/toast/Toast';
import { useEffect, useRef, useState } from 'react';

export function GMapDoc(props) {
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
        };
    }, []);

    const onMapClick = (event) => {
        setDialogVisible(true);
        setSelectedPosition(event.latLng);
    };

    const onOverlayClick = (event) => {
        let isMarker = event.overlay.getTitle !== undefined;

        if (isMarker) {
            let title = event.overlay.getTitle();

            infoWindow.current = infoWindow.current || new google.maps.InfoWindow();
            infoWindow.setContent('<div>' + title + '</div>');
            infoWindow.open(event.map, event.overlay);
            event.map.setCenter(event.overlay.getPosition());

            toast.current.show({ severity: 'info', summary: 'Marker Selected', detail: title });
        } else {
            toast.current.show({ severity: 'info', summary: 'Shape Selected', detail: '' });
        }
    };

    const handleDragEnd = (event) => {
        toast.current.show({ severity: 'info', summary: 'Marker Dragged', detail: event.overlay.getTitle() });
    };

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
    };

    const onMapReady = (event) => {
        setOverlays([
            new google.maps.Marker({ position: { lat: 36.879466, lng: 30.667648 }, title: 'Konyaalti' }),
            new google.maps.Marker({ position: { lat: 36.883707, lng: 30.689216 }, title: 'Ataturk Park' }),
            new google.maps.Marker({ position: { lat: 36.885233, lng: 30.702323 }, title: 'Oldtown' }),
            new google.maps.Polygon({
                paths: [
                    { lat: 36.9177, lng: 30.7854 },
                    { lat: 36.8851, lng: 30.7802 },
                    { lat: 36.8829, lng: 30.8111 },
                    { lat: 36.9177, lng: 30.8159 }
                ],
                strokeOpacity: 0.5,
                strokeWeight: 1,
                fillColor: '#1976D2',
                fillOpacity: 0.35
            }),
            new google.maps.Circle({ center: { lat: 36.90707, lng: 30.56533 }, fillColor: '#1976D2', fillOpacity: 0.35, strokeWeight: 1, radius: 1500 }),
            new google.maps.Polyline({
                path: [
                    { lat: 36.86149, lng: 30.63743 },
                    { lat: 36.86341, lng: 30.72463 }
                ],
                geodesic: true,
                strokeColor: '#FF0000',
                strokeOpacity: 0.5,
                strokeWeight: 2
            })
        ]);
    };

    const onHide = (event) => {
        setDialogVisible(false);
    };

    const options = {
        center: { lat: 36.890257, lng: 30.707417 },
        zoom: 12
    };

    const footer = (
        <div>
            <Button label="Yes" icon="pi pi-check" onClick={addMarker} />
            <Button label="No" icon="pi pi-times" onClick={onHide} />
        </div>
    );

    const loadGoogleMaps = (callback) => {
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

    const removeGoogleMaps = () => {
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

    const code = {
        basic: `
<GMap overlays={overlays} options={options} style={{ width: '100%', minHeight: '320px' }} onMapReady={onMapReady} onMapClick={onMapClick} onOverlayClick={onOverlayClick} onOverlayDragEnd={handleDragEnd} />
        `,
        javascript: `
import React, { useState, useRef, useEffect } from 'react';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Toast } from 'primereact/toast';
import { GMap } from 'primereact/gmap';
import { InputText } from 'primereact/inputtext';

export default function GMapDoc() {
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
        };
    }, []);

    const onMapClick = (event) => {
        setDialogVisible(true);
        setSelectedPosition(event.latLng);
    };

    const onOverlayClick = (event) => {
        let isMarker = event.overlay.getTitle !== undefined;

        if (isMarker) {
            let title = event.overlay.getTitle();

            infoWindow.current = infoWindow.current || new google.maps.InfoWindow();
            infoWindow.setContent('<div>' + title + '</div>');
            infoWindow.open(event.map, event.overlay);
            event.map.setCenter(event.overlay.getPosition());

            toast.current.show({ severity: 'info', summary: 'Marker Selected', detail: title });
        } else {
            toast.current.show({ severity: 'info', summary: 'Shape Selected', detail: '' });
        }
    };

    const handleDragEnd = (event) => {
        toast.current.show({ severity: 'info', summary: 'Marker Dragged', detail: event.overlay.getTitle() });
    };

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
    };

    const onMapReady = (event) => {
        setOverlays([
            new google.maps.Marker({ position: { lat: 36.879466, lng: 30.667648 }, title: 'Konyaalti' }),
            new google.maps.Marker({ position: { lat: 36.883707, lng: 30.689216 }, title: 'Ataturk Park' }),
            new google.maps.Marker({ position: { lat: 36.885233, lng: 30.702323 }, title: 'Oldtown' }),
            new google.maps.Polygon({
                paths: [
                    { lat: 36.9177, lng: 30.7854 },
                    { lat: 36.8851, lng: 30.7802 },
                    { lat: 36.8829, lng: 30.8111 },
                    { lat: 36.9177, lng: 30.8159 }
                ],
                strokeOpacity: 0.5,
                strokeWeight: 1,
                fillColor: '#1976D2',
                fillOpacity: 0.35
            }),
            new google.maps.Circle({ center: { lat: 36.90707, lng: 30.56533 }, fillColor: '#1976D2', fillOpacity: 0.35, strokeWeight: 1, radius: 1500 }),
            new google.maps.Polyline({
                path: [
                    { lat: 36.86149, lng: 30.63743 },
                    { lat: 36.86341, lng: 30.72463 }
                ],
                geodesic: true,
                strokeColor: '#FF0000',
                strokeOpacity: 0.5,
                strokeWeight: 2
            })
        ]);
    };

    const onHide = (event) => {
        setDialogVisible(false);
    };

    const options = {
        center: { lat: 36.890257, lng: 30.707417 },
        zoom: 12
    };

    const footer = (
        <div>
            <Button label="Yes" icon="pi pi-check" onClick={addMarker} />
            <Button label="No" icon="pi pi-times" onClick={onHide} />
        </div>
    );

    const loadGoogleMaps = (callback) => {
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

    const removeGoogleMaps = () => {
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
    return (
        <React.Fragment>
            <Toast ref={toast}></Toast>

            {googleMapsReady && (
                <div className="card">
                    <GMap overlays={overlays} options={options} style={{ width: '100%', minHeight: '320px' }} onMapReady={onMapReady} onMapClick={onMapClick} onOverlayClick={onOverlayClick} onOverlayDragEnd={handleDragEnd} />
                </div>
            )}

            <Dialog header="New Location" visible={dialogVisible} width="300px" modal footer={footer} onHide={onHide}>
                <div className="grid p-fluid">
                    <div className="col-2" style={{ paddingTop: '.75em' }}>
                        <label htmlFor="title">Label</label>
                    </div>
                    <div className="col-10">
                        <InputText type="text" id="title" value={markerTitle} onChange={(e) => setMarkerTitle(e.target.value)} />
                    </div>

                    <div className="col-2" style={{ paddingTop: '.75em' }}>
                        Lat
                    </div>
                    <div className="col-10">
                        <InputText readOnly value={selectedPosition ? selectedPosition.lat() : ''} />
                    </div>

                    <div className="col-2" style={{ paddingTop: '.75em' }}>
                        Lng
                    </div>
                    <div className="col-10">
                        <InputText readOnly value={selectedPosition ? selectedPosition.lng() : ''} />
                    </div>

                    <div className="col-2" style={{ paddingTop: '.75em' }}>
                        <label htmlFor="drg">Drag</label>
                    </div>
                    <div className="col-10">
                        <Checkbox checked={draggableMarker} onChange={(event) => setDraggableMarker(event.checked)} />
                    </div>
                </div>
            </Dialog>
        </React.Fragment>
    )
}
        `,
        typescript: `
import React, { useState, useRef, useEffect } from 'react';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Toast } from 'primereact/toast';
import { GMap } from 'primereact/gmap';
import { InputText } from 'primereact/inputtext';

export default function GMapDoc() {
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
        };
    }, []);

    const onMapClick = (event) => {
        setDialogVisible(true);
        setSelectedPosition(event.latLng);
    };

    const onOverlayClick = (event) => {
        let isMarker = event.overlay.getTitle !== undefined;

        if (isMarker) {
            let title = event.overlay.getTitle();

            infoWindow.current = infoWindow.current || new google.maps.InfoWindow();
            infoWindow.setContent('<div>' + title + '</div>');
            infoWindow.open(event.map, event.overlay);
            event.map.setCenter(event.overlay.getPosition());

            toast.current.show({ severity: 'info', summary: 'Marker Selected', detail: title });
        } else {
            toast.current.show({ severity: 'info', summary: 'Shape Selected', detail: '' });
        }
    };

    const handleDragEnd = (event) => {
        toast.current.show({ severity: 'info', summary: 'Marker Dragged', detail: event.overlay.getTitle() });
    };

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
    };

    const onMapReady = (event) => {
        setOverlays([
            new google.maps.Marker({ position: { lat: 36.879466, lng: 30.667648 }, title: 'Konyaalti' }),
            new google.maps.Marker({ position: { lat: 36.883707, lng: 30.689216 }, title: 'Ataturk Park' }),
            new google.maps.Marker({ position: { lat: 36.885233, lng: 30.702323 }, title: 'Oldtown' }),
            new google.maps.Polygon({
                paths: [
                    { lat: 36.9177, lng: 30.7854 },
                    { lat: 36.8851, lng: 30.7802 },
                    { lat: 36.8829, lng: 30.8111 },
                    { lat: 36.9177, lng: 30.8159 }
                ],
                strokeOpacity: 0.5,
                strokeWeight: 1,
                fillColor: '#1976D2',
                fillOpacity: 0.35
            }),
            new google.maps.Circle({ center: { lat: 36.90707, lng: 30.56533 }, fillColor: '#1976D2', fillOpacity: 0.35, strokeWeight: 1, radius: 1500 }),
            new google.maps.Polyline({
                path: [
                    { lat: 36.86149, lng: 30.63743 },
                    { lat: 36.86341, lng: 30.72463 }
                ],
                geodesic: true,
                strokeColor: '#FF0000',
                strokeOpacity: 0.5,
                strokeWeight: 2
            })
        ]);
    };

    const onHide = (event) => {
        setDialogVisible(false);
    };

    const options = {
        center: { lat: 36.890257, lng: 30.707417 },
        zoom: 12
    };

    const footer = (
        <div>
            <Button label="Yes" icon="pi pi-check" onClick={addMarker} />
            <Button label="No" icon="pi pi-times" onClick={onHide} />
        </div>
    );

    const loadGoogleMaps = (callback) => {
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

    const removeGoogleMaps = () => {
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
    return (
        <React.Fragment>
            <Toast ref={toast}></Toast>

            {googleMapsReady && (
                <div className="card">
                    <GMap overlays={overlays} options={options} style={{ width: '100%', minHeight: '320px' }} onMapReady={onMapReady} onMapClick={onMapClick} onOverlayClick={onOverlayClick} onOverlayDragEnd={handleDragEnd} />
                </div>
            )}

            <Dialog header="New Location" visible={dialogVisible} width="300px" modal footer={footer} onHide={onHide}>
                <div className="grid p-fluid">
                    <div className="col-2" style={{ paddingTop: '.75em' }}>
                        <label htmlFor="title">Label</label>
                    </div>
                    <div className="col-10">
                        <InputText type="text" id="title" value={markerTitle} onChange={(e) => setMarkerTitle(e.target.value)} />
                    </div>

                    <div className="col-2" style={{ paddingTop: '.75em' }}>
                        Lat
                    </div>
                    <div className="col-10">
                        <InputText readOnly value={selectedPosition ? selectedPosition.lat() : ''} />
                    </div>

                    <div className="col-2" style={{ paddingTop: '.75em' }}>
                        Lng
                    </div>
                    <div className="col-10">
                        <InputText readOnly value={selectedPosition ? selectedPosition.lng() : ''} />
                    </div>

                    <div className="col-2" style={{ paddingTop: '.75em' }}>
                        <label htmlFor="drg">Drag</label>
                    </div>
                    <div className="col-10">
                        <Checkbox checked={draggableMarker} onChange={(event) => setDraggableMarker(event.checked)} />
                    </div>
                </div>
            </Dialog>
        </React.Fragment>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Applying <i>p-invalid</i> class to an input element indicates a failed validation.
                </p>
            </DocSectionText>
            <Toast ref={toast}></Toast>

            {googleMapsReady && (
                <div className="card">
                    <GMap overlays={overlays} options={options} style={{ width: '100%', minHeight: '320px' }} onMapReady={onMapReady} onMapClick={onMapClick} onOverlayClick={onOverlayClick} onOverlayDragEnd={handleDragEnd} />
                </div>
            )}

            <Dialog header="New Location" visible={dialogVisible} width="300px" modal footer={footer} onHide={onHide}>
                <div className="grid p-fluid">
                    <div className="col-2" style={{ paddingTop: '.75em' }}>
                        <label htmlFor="title">Label</label>
                    </div>
                    <div className="col-10">
                        <InputText type="text" id="title" value={markerTitle} onChange={(e) => setMarkerTitle(e.target.value)} />
                    </div>

                    <div className="col-2" style={{ paddingTop: '.75em' }}>
                        Lat
                    </div>
                    <div className="col-10">
                        <InputText readOnly value={selectedPosition ? selectedPosition.lat() : ''} />
                    </div>

                    <div className="col-2" style={{ paddingTop: '.75em' }}>
                        Lng
                    </div>
                    <div className="col-10">
                        <InputText readOnly value={selectedPosition ? selectedPosition.lng() : ''} />
                    </div>

                    <div className="col-2" style={{ paddingTop: '.75em' }}>
                        <label htmlFor="drg">Drag</label>
                    </div>
                    <div className="col-10">
                        <Checkbox checked={draggableMarker} onChange={(event) => setDraggableMarker(event.checked)} />
                    </div>
                </div>
            </Dialog>
            <DocSectionCode code={code} />
        </>
    );
}
