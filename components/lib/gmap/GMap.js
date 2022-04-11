/*global google*/
import * as React from 'react';
import { useMountEffect, useUpdateEffect } from '../hooks/Hooks';
import { ObjectUtils } from '../utils/Utils';

export const GMap = React.memo(React.forwardRef((props, ref) => {
    const elementRef = React.useRef(null);
    const map = React.useRef(null);
    const prevOverlays = React.useRef(null);

    const initMap = () => {
        map.current = new google.maps.Map(elementRef.current, props.options);

        if (props.onMapReady) {
            props.onMapReady({
                map: map.current
            });
        }

        initOverlays(props.overlays);

        bindMapEvent('click', props.onMapClick);
        bindMapEvent('dragend', props.onMapDragEnd);
        bindMapEvent('zoom_changed', props.onZoomChanged);
    }

    const initOverlays = (overlays) => {
        if (overlays) {
            for (let overlay of overlays) {
                overlay.setMap(map.current);
                bindOverlayEvents(overlay);
            }

            prevOverlays.current = overlays;
        }
    }

    const bindOverlayEvents = (overlay) => {
        overlay.addListener('click', (event) => {
            if (props.onOverlayClick) {
                props.onOverlayClick({
                    originalEvent: event,
                    overlay: overlay,
                    map: map.current
                });
            }
        });

        if (overlay.getDraggable()) {
            bindDragEvents(overlay);
        }
    }

    const bindDragEvents = (overlay) => {
        bindDragEvent(overlay, 'dragstart', props.onOverlayDragStart);
        bindDragEvent(overlay, 'drag', props.onOverlayDrag);
        bindDragEvent(overlay, 'dragend', props.onOverlayDragEnd);
    }

    const bindMapEvent = (eventName, callback) => {
        map.current.addListener(eventName, (event) => {
            callback && callback(event);
        });
    }

    const bindDragEvent = (overlay, eventName, callback) => {
        overlay.addListener(eventName, (event) => {
            if (callback) {
                callback({
                    originalEvent: event,
                    overlay: overlay,
                    map: map.current
                });
            }
        });
    }

    const removeOverlays = (overlays) => {
        if (overlays) {
            for (let overlay of overlays) {
                overlay.setMap(null);
                unbindOverlayEvents(overlay);
            }
        }
    }

    const unbindOverlayEvents = (overlay) => {
        google.maps.event.clearListeners(overlay, 'click');

        if (overlay.getDraggable()) {
            google.maps.event.clearListeners(overlay, 'dragstart');
            google.maps.event.clearListeners(overlay, 'drag');
            google.maps.event.clearListeners(overlay, 'dragend');
        }
    }

    const getMap = () => {
        return map.current;
    }

    useMountEffect(() => {
        initMap();
    });

    useUpdateEffect(() => {
        initOverlays(props.overlays);

        return () => {
            removeOverlays(prevOverlays.current);
        }
    });

    React.useImperativeHandle(ref, () => ({
        getMap
    }));

    const otherProps = ObjectUtils.findDiffKeys(props, GMap.defaultProps);

    return <div ref={elementRef} style={props.style} className={props.className} {...otherProps}></div>
}));

GMap.displayName = 'GMap';
GMap.defaultProps = {
    __TYPE: 'GMap',
    options: null,
    overlays: null,
    style: null,
    className: null,
    onMapReady: null,
    onMapClick: null,
    onMapDragEnd: null,
    onZoomChanged: null,
    onOverlayDragStart: null,
    onOverlayDrag: null,
    onOverlayDragEnd: null,
    onOverlayClick: null
}
