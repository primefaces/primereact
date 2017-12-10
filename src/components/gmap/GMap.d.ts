import React = require("react");

interface GMapProps {
    options?: object;
    overlays?: Array<any>;
    style?: object;
    className?: string;
    onMapReady?(map: any): void;
    onMapClick?(): void;
    onMapDragEnd?(): void;
    onZoomChanged?(): void;
    onOverlayDragStart?(): void;
    onOverlayDrag?(): void;
    onOverlayDragEnd?(): void;
    onOverlayClick?(e: {originalEvent: Event, overlay: any, map: any}): void;
}

export class GMap extends React.Component<GMapProps,any> {}