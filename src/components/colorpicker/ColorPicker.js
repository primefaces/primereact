import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import DomHandler from '../utils/DomHandler';
import classNames from 'classnames';

export class ColorPicker extends Component {
    
    static defaultProps = {
        id: null,
        value: null,
        style: null,
        className: null,
        inline: false,
        format: "hex",
        appendTo: null,
        disabled: false,
        tabindex: null,
        inputId: null,
        onChange: null
    }

    static propsTypes = {
        id: PropTypes.string,
        value: PropTypes.any,
        style: PropTypes.string,
        className: PropTypes.string,
        inline: PropTypes.bool,
        format: PropTypes.string,
        appendTo: PropTypes.string,
        disabled: PropTypes.bool,
        tabindex: PropTypes.string,
        inputId: PropTypes.string,
        onChange: PropTypes.func
    }

    constructor(props) {
        super(props);

        this.selfClick = false;
        this.colorDragging = false;
        this.hueDragging = false;
        this.defaultColor = 'ff0000';

        this.state = {panelVisible: false};
    }

    onHueMousedown(event) {
        if(this.props.disabled) {
            return;
        }
        
        this.bindDocumentMousemoveListener();
        this.bindDocumentMouseupListener();
        
        this.hueDragging = true;
        this.pickHue(event);
    }
    
    pickHue(event) {
        let top = this.hueView.getBoundingClientRect().top + document.body.scrollTop;
        this.value = this.validateHSB({
            h: Math.floor(360 * (150 - Math.max(0, Math.min(150, (event.pageY - top)))) / 150),
            s: 100,
            b: 100
        });
        
        this.updateColorSelector();
        this.updateUI();
        this.updateModel();
    }
    
    onColorMousedown(event) {
        if(this.props.disabled) {
            return;
        }
        
        this.bindDocumentMousemoveListener();
        this.bindDocumentMouseupListener();
        
        this.colorDragging = true;
        this.pickColor(event);
    }
    
    pickColor(event) {
        let rect = this.colorSelector.getBoundingClientRect();
        let top = rect.top + document.body.scrollTop;
        let left = rect.left + document.body.scrollLeft;
        let saturation = Math.floor(100 * (Math.max(0, Math.min(150, (event.pageX - left)))) / 150);
        let brightness = Math.floor(100 * (150 - Math.max(0, Math.min(150, (event.pageY - top)))) / 150);
        this.value = this.validateHSB({
            h: this.value.h,
            s: saturation,
            b: brightness
        });
        
        this.updateUI();
        this.updateModel();
    }
    
    updateModel() {
        switch(this.props.format) {
            case 'hex':
                this.onModelChange(this.HSBtoHEX(this.value));
            break;
            
            case 'rgb':
                this.onModelChange(this.HSBtoRGB(this.value));
            break;
            
            case 'hsb':
                this.onModelChange(this.value);
            break;

            default:
            break;
        }
    }

    writeValue(value) {
        if(value) {
            switch(this.props.format) {
                case 'hex':
                    this.value = this.HEXtoHSB(value);
                break;
                
                case 'rgb':
                    this.value = this.RGBtoHSB(value);
                break;
                
                case 'hsb':
                    this.value = value;
                break;
                
                default:
                break;
            }
        }
        else {
            this.value = this.HEXtoHSB(this.defaultColor);
        }
        
        this.updateColorSelector();
        this.updateUI();
    }

    onModelChange(value) {
        if(this.props.onChange) {
            this.props.onChange({
                originalEvent: event,
                value: value
            })
        }
    }
    
    updateColorSelector() {
        this.colorSelector.style.backgroundColor = '#' + this.HSBtoHEX(this.value);
    }
        
    updateUI() {
        this.colorHandle.style.left =  Math.floor(150 * this.value.s / 100) + 'px';
        this.colorHandle.style.top =  Math.floor(150 * (100 - this.value.b) / 100) + 'px';
        this.hueHandle.style.top = Math.floor(150 - (150 * this.value.h / 360)) + 'px';
        
        if(this.input) {
            this.input.style.backgroundColor = '#' + this.HSBtoHEX(this.value);
        }
    }
    
    show() {
        var zIndex = DomHandler.getZindex() + 1;
        this.panel.style.zIndex = String(zIndex);
        this.setState({panelVisible: true});
        this.shown = true;
    }
    
    hide() {
        this.setState({panelVisible: false});
        this.unbindDocumentClickListener();
    }
    
    onShow() {
        this.alignPanel();
        this.bindDocumentClickListener();
    }
     
    alignPanel() {
        if(this.appendTo)
            DomHandler.absolutePosition(this.panel, this.input);
        else
            DomHandler.relativePosition(this.panel, this.input);
    }
    
    onInputClick() {
        this.selfClick = true;
        this.togglePanel();
    }
    
    togglePanel() {
        if(!this.state.panelVisible)
            this.show();
        else
            this.hide();
    }
    
    onInputKeydown(event) {
        switch(event.which) {
            //space
            case 32:
                this.togglePanel();
                event.preventDefault();
            break;
                        
            //escape and tab
            case 27:
            case 9:
                this.hide();
            break;

            default:
            break;
        }
    }
        
    onPanelClick() {
        this.selfClick = true;
    }
    
    bindDocumentClickListener() {
        if(!this.documentClickListener) {
            this.documentClickListener = this.docClickListener.bind(this);
            document.addEventListener('click', this.documentClickListener);
        }    
    }

    docClickListener() {
        if(!this.selfClick) {
            this.setState({panelVisible: false});
            this.unbindDocumentClickListener();
        }
                
        this.selfClick = false;
    }
    
    unbindDocumentClickListener() {
        if(this.documentClickListener) {
            document.removeEventListener('click', this.documentClickListener);
            this.documentClickListener = null;
        }
    }
    
    bindDocumentMousemoveListener() {
        if(!this.documentMousemoveListener) {
            this.documentMousemoveListener = this.docMouseMoveListener.bind(this);
            document.addEventListener('mousemove', this.documentMousemoveListener);
        }
    }

    docMouseMoveListener() {
        if(this.colorDragging) {
            this.pickColor(event);
        }
                
        if(this.hueDragging) {
            this.pickHue(event);
        }
    }
    
    unbindDocumentMousemoveListener() {
        if(this.documentMousemoveListener) {
            document.removeEventListener('mousemove', this.documentMousemoveListener);
            this.documentMousemoveListener = null;
        }
    }
    
    bindDocumentMouseupListener() {
        if(!this.documentMouseupListener) {
            this.documentMouseupListener = this.docMouseUpListener.bind(this);
            document.addEventListener('mouseup', this.documentMouseupListener);
        }
    }

    docMouseUpListener() {
        this.colorDragging = false;
        this.hueDragging = false;
        this.unbindDocumentMousemoveListener();
        this.unbindDocumentMouseupListener();
    }
    
    unbindDocumentMouseupListener() {
        if(this.documentMouseupListener) {
            document.removeEventListener('mouseup', this.documentMouseupListener);
            this.documentMouseupListener = null;
        }
    }

    validateHSB(hsb) {
        return {
            h: Math.min(360, Math.max(0, hsb.h)),
            s: Math.min(100, Math.max(0, hsb.s)),
            b: Math.min(100, Math.max(0, hsb.b))
        };
    }
    
    validateRGB(rgb) {
        return {
            r: Math.min(255, Math.max(0, rgb.r)),
            g: Math.min(255, Math.max(0, rgb.g)),
            b: Math.min(255, Math.max(0, rgb.b))
        };
    }
    
    validateHEX(hex) {
        var len = 6 - hex.length;
        if (len > 0) {
            var o = [];
            for (var i=0; i<len; i++) {
                o.push('0');
            }
            o.push(hex);
            hex = o.join('');
        }
        return hex;
    }
    
    HEXtoRGB(hex) {
        let hexValue = parseInt(((hex.indexOf('#') > -1) ? hex.substring(1) : hex), 16);
        return {r: hexValue >> 16, g: (hexValue & 0x00FF00) >> 8, b: (hexValue & 0x0000FF)};
    }
    
    HEXtoHSB(hex) {
        return this.RGBtoHSB(this.HEXtoRGB(hex));
    }
    
    RGBtoHSB(rgb) {
        var hsb = {
            h: 0,
            s: 0,
            b: 0
        };
        var min = Math.min(rgb.r, rgb.g, rgb.b);
        var max = Math.max(rgb.r, rgb.g, rgb.b);
        var delta = max - min;
        hsb.b = max;
        if (max !== 0) {
            
        }
        hsb.s = max !== 0 ? 255 * delta / max : 0;
        if (hsb.s !== 0) {
            if (rgb.r === max) {
                hsb.h = (rgb.g - rgb.b) / delta;
            } else if (rgb.g === max) {
                hsb.h = 2 + (rgb.b - rgb.r) / delta;
            } else {
                hsb.h = 4 + (rgb.r - rgb.g) / delta;
            }
        } else {
            hsb.h = -1;
        }
        hsb.h *= 60;
        if (hsb.h < 0) {
            hsb.h += 360;
        }
        hsb.s *= 100/255;
        hsb.b *= 100/255;
        return hsb;
    }
    
    HSBtoRGB(hsb) {
        var rgb = {
            r: null, g: null, b: null
        };
        var h = Math.round(hsb.h);
        var s = Math.round(hsb.s*255/100);
        var v = Math.round(hsb.b*255/100);
        if(s === 0) {
            rgb = {
                r: v,
                g: v,
                b: v
            }
        } 
        else {
            var t1 = v;
            var t2 = (255-s)*v/255;
            var t3 = (t1-t2)*(h%60)/60;
            if(h===360) h = 0;
            if(h<60) {rgb.r=t1;	rgb.b=t2; rgb.g=t2+t3}
            else if(h<120) {rgb.g=t1; rgb.b=t2;	rgb.r=t1-t3}
            else if(h<180) {rgb.g=t1; rgb.r=t2;	rgb.b=t2+t3}
            else if(h<240) {rgb.b=t1; rgb.r=t2;	rgb.g=t1-t3}
            else if(h<300) {rgb.b=t1; rgb.g=t2;	rgb.r=t2+t3}
            else if(h<360) {rgb.r=t1; rgb.g=t2;	rgb.b=t1-t3}
            else {rgb.r=0; rgb.g=0;	rgb.b=0}
        }
        return {r:Math.round(rgb.r), g:Math.round(rgb.g), b:Math.round(rgb.b)};
    }
    
    RGBtoHEX(rgb) {
        var hex = [
            rgb.r.toString(16),
            rgb.g.toString(16),
            rgb.b.toString(16)
        ];
        
        for(var key in hex) {
            if(hex[key].length === 1) {
                hex[key] = '0' + hex[key];
            }
        }        

        return hex.join('');
    }
    
    HSBtoHEX(hsb) {
        return this.RGBtoHEX(this.HSBtoRGB(hsb));
    }

    componentDidMount() { 
        this.writeValue(this.props.value);
    }
    
    componentDidUpdate(prevProps, prevState) {
        if(this.shown) {
            this.onShow();
            this.shown = false;
        }
    }

    componentWillUnmount() {
        this.unbindDocumentClickListener();
    }

    render() {
        var className = classNames('ui-colorpicker ui-widget', this.props.className, {
            'ui-colorpicker-overlay':!this.props.inline,
            'ui-colorpicker-dragging': this.colorDragging||this.hueDragging
        });

        if(!this.props.inline) {
            var inputClass = classNames('ui-colorpicker-preview ui-inputtext ui-state-default ui-corner-all', {
                'ui-state-disabled': this.props.disabled
            }),
            input = (<input ref={(el) => this.input = ReactDOM.findDOMNode(el)} type="text" className={inputClass} readOnly="readonly" id={this.props.inputId} tabIndex={this.props.tabindex} disabled={this.props.disabled}
                onClick={this.onInputClick.bind(this)} onKeyDown={this.onInputKeydown.bind(this)} />);
        }

        var colorSelector = (
            <div ref={(el) => this.colorSelector = ReactDOM.findDOMNode(el)}  className="ui-colorpicker-color-selector" onMouseDown={this.onColorMousedown.bind(this)}>
                <div className="ui-colorpicker-color">
                    <div ref={(el) => this.colorHandle = ReactDOM.findDOMNode(el)} className="ui-colorpicker-color-handle"></div>
                </div>
            </div>
        ),
        hue = (
            <div ref={(el) => this.hueView = ReactDOM.findDOMNode(el)} className="ui-colorpicker-hue" onMouseDown={this.onHueMousedown.bind(this)}>
                <div ref={(el) => this.hueHandle = ReactDOM.findDOMNode(el)} className="ui-colorpicker-hue-handle"></div>
            </div>
        );

        var panelClass = classNames('ui-colorpicker-panel ui-corner-all', {
            'ui-colorpicker-overlay-panel ui-shadow':!this.props.inline, 
            'ui-state-disabled': this.props.disabled
        }), 
        panel = (
            <div ref={(el) => this.panel = ReactDOM.findDOMNode(el)} className={panelClass} onClick={this.onPanelClick.bind(this)} style={{'display': (this.props.inline ? 'block' : (this.state.panelVisible ? 'block' : 'none'))}}>
                <div className="ui-colorpicker-content">
                    {colorSelector}
                    {hue}
                </div>
            </div>
        );

        return (
            <div id={this.props.id} style={this.props.style} className={className}>
                {input}
                {panel}
            </div>
        );
    }
}