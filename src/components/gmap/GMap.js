/*global google*/
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class GMap extends Component {

    static defaultProps = {
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

    static propTypes = {
        options: PropTypes.object,
        overlays: PropTypes.array,
        style: PropTypes.object,
        className: PropTypes.string,
        onMapReady: PropTypes.func,
        onMapClick: PropTypes.func,
        onMapDragEnd: PropTypes.func,
        onZoomChanged: PropTypes.func,
        onOverlayDragStart: PropTypes.func,
        onOverlayDrag: PropTypes.func,
        onOverlayDragEnd: PropTypes.func,
        onOverlayClick: PropTypes.func
    };
        
    initMap() {
        this.map = new google.maps.Map(this.container, this.props.options);
        
        if(this.props.onMapReady) {
            this.props.onMapReady({
                map: this.map
            });
        } 
        
        this.initOverlays(this.props.overlays);
        
        this.bindMapEvent('click', this.props.onMapClick);
        this.bindMapEvent('dragend', this.props.onMapDragEnd);
        this.bindMapEvent('zoom_changed', this.props.onZoomChanged);
    }
    
    initOverlays(overlays) {
        if(overlays) {
            for(let overlay of overlays) {
                overlay.setMap(this.map);
                this.bindOverlayEvents(overlay);
            }
        }
    }
    
    bindOverlayEvents(overlay) {
        overlay.addListener('click', (event) => {
            if(this.props.onOverlayClick) {
                this.props.onOverlayClick({
                    originalEvent: event,
                    overlay: overlay,
                    map: this.map
                });
            }
        });
        
        if(overlay.getDraggable()) {
            this.bindDragEvents(overlay);
        }
    }
    
    bindDragEvents(overlay) {
        this.bindDragEvent(overlay, 'dragstart', this.props.onOverlayDragStart);
        this.bindDragEvent(overlay, 'drag', this.props.onOverlayDrag);
        this.bindDragEvent(overlay, 'dragend', this.props.onOverlayDragEnd);
    }
    
    bindMapEvent(eventName, callback) {
        this.map.addListener(eventName, (event) => {
            if(callback) {
                callback(event);
            }
        });
    }
    
    bindDragEvent(overlay, eventName, callback) {
        overlay.addListener(eventName, (event) => {
            if(callback) {
                callback({
                    originalEvent: event,
                    overlay: overlay,
                    map: this.map
                });
            }
        });
    }
    
    getMap() {
        return this.map;
    }
    
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.overlays !== this.props.overlays) {
            if(prevProps.overlays) {
                for(let overlay of prevProps.overlays) {
                    google.maps.event.clearInstanceListeners(overlay);
                    overlay.setMap(null);
                }
            }
            
            this.initOverlays(this.props.overlays);
        }
    }
    
    componentDidMount() {
        this.initMap();
    }
    
    render() {
        return (
            <div ref={(el) => this.container = el} style={this.props.style} className={this.props.className}></div>
        );
    }
}