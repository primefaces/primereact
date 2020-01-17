import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DomHandler from '../utils/DomHandler';
import classNames from 'classnames';
import {ColorPickerPanel} from './ColorPickerPanel';
import Tooltip from "../tooltip/Tooltip";

export class ColorPicker extends Component {
    
    static defaultProps = {
        id: null,
        value: null,
        style: null,
        className: null,
        defaultColor: 'ff0000',
        inline: false,
        format: "hex",
        appendTo: null,
        disabled: false,
        tabIndex: null,
        inputId: null,
        tooltip: null,
        tooltipOptions: null,
        onChange: null
    }

    static propTypes = {
        id: PropTypes.string,
        value: PropTypes.any,
        style: PropTypes.object,
        className: PropTypes.string,
        defaultColor: PropTypes.string,
        inline: PropTypes.bool,
        format: PropTypes.string,
        appendTo: PropTypes.any,
        disabled: PropTypes.bool,
        tabIndex: PropTypes.string,
        inputId: PropTypes.string,
        tooltip: PropTypes.string,
        tooltipOptions: PropTypes.object,
        onChange: PropTypes.func
    }

    constructor(props) {
        super(props);

        this.onPanelClick = this.onPanelClick.bind(this);
        this.onInputClick = this.onInputClick.bind(this);
        this.onInputKeydown = this.onInputKeydown.bind(this);
    }

    onHueMousedown(event) {
        if(this.props.disabled) {
            return;
        }
        
        this.hueDragging = true;
        this.bindDocumentMouseMoveListener();
        this.bindDocumentMouseUpListener();
        this.pickHue(event);
        DomHandler.addClass(this.container, 'p-colorpicker-dragging');
    }
    
    pickHue(event) {
        let top = this.hueView.getBoundingClientRect().top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
        this.hsbValue = this.validateHSB({
            h: Math.floor(360 * (150 - Math.max(0, Math.min(150, (event.pageY - top)))) / 150),
            s: 100,
            b: 100
        });
        
        this.updateColorSelector();
        this.updateHue();
        this.updateModel();
    }
    
    onColorMousedown(event) {
        if(this.props.disabled) {
            return;
        }
        
        this.colorDragging = true;
        this.bindDocumentMouseMoveListener();
        this.bindDocumentMouseUpListener();
        this.pickColor(event);
        DomHandler.addClass(this.container, 'p-colorpicker-dragging');
    }
    
    pickColor(event) {
        let rect = this.colorSelector.getBoundingClientRect();
        let top = rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
        let left = rect.left + document.body.scrollLeft;
        let saturation = Math.floor(100 * (Math.max(0, Math.min(150, (event.pageX - left)))) / 150);
        let brightness = Math.floor(100 * (150 - Math.max(0, Math.min(150, (event.pageY - top)))) / 150);
        this.hsbValue = this.validateHSB({
            h: this.hsbValue.h,
            s: saturation,
            b: brightness
        });
        
        this.updateColorHandle();
        this.updateInput();
        this.updateModel();
    }
    
    updateModel() {
        switch(this.props.format) {
            case 'hex':
                this.onChange(this.HSBtoHEX(this.hsbValue));
            break;
            
            case 'rgb':
                this.onChange(this.HSBtoRGB(this.hsbValue));
            break;
            
            case 'hsb':
                this.onChange(this.hsbValue);
            break;

            default:
            break;
        }
    }

    toHSB(value) {
        let hsb;

        if (value) {
            switch (this.props.format) {
                case 'hex':
                    hsb = this.HEXtoHSB(value);
                    break;

                case 'rgb':
                    hsb = this.RGBtoHSB(value);
                    break;

                case 'hsb':
                    hsb = value;
                    break;

                default:
                    break;
            }
        }
        else {
            hsb = this.HEXtoHSB(this.props.defaultColor);
        }

        return hsb;
    }

    updateHSBValue(value) {
        this.hsbValue = this.toHSB(value);
    }

    areHSBEqual(val1, val2) {
        return val1.h === val2.h && val1.s === val2.s && val1.b === val2.b;
    }

    onChange(value) {
        if(this.props.onChange) {
            this.props.onChange({
                value: value,
                stopPropagation : () =>{},
                preventDefault : () =>{},
                target: {
                    name: this.props.name,
                    id: this.props.id,
                    value: value
                }
            })
        }
    }
    
    updateColorSelector() {
        var hsbValue = this.validateHSB({
            h: this.hsbValue.h,
            s: 100,
            b: 100
        });
        this.colorSelector.style.backgroundColor = '#' + this.HSBtoHEX(hsbValue);
    }

    updateColorHandle() {
        this.colorHandle.style.left = Math.floor(150 * this.hsbValue.s / 100) + 'px';
        this.colorHandle.style.top = Math.floor(150 * (100 - this.hsbValue.b) / 100) + 'px';
    }

    updateHue() {
        this.hueHandle.style.top = Math.floor(150 - (150 * this.hsbValue.h / 360)) + 'px';
    }
        
    updateInput() {
        if(this.input) {
            this.input.style.backgroundColor = '#' + this.HSBtoHEX(this.hsbValue);
        }
    }
    
    show() {
        this.panel.element.style.zIndex = String(DomHandler.generateZIndex());
        this.panel.element.style.display = 'block';

        setTimeout(() => {
            DomHandler.addClass(this.panel.element, 'p-input-overlay-visible');
            DomHandler.removeClass(this.panel.element, 'p-input-overlay-hidden');
        }, 1);

        this.alignPanel();
        
        this.bindDocumentClickListener();
    }
    
    hide() {
        DomHandler.addClass(this.panel.element, 'p-input-overlay-hidden');
        DomHandler.removeClass(this.panel.element, 'p-input-overlay-visible');
        this.unbindDocumentClickListener();

        setTimeout(() => {
            this.panel.element.style.display = 'none';
            DomHandler.removeClass(this.panel.element, 'p-input-overlay-hidden');
        }, 150);
        
    }
         
    onInputClick() {
        if(this.documentClickListener) {
            this.selfClick = true;
        }
       
        this.togglePanel();
    }
    
    togglePanel() {
        if(!this.panel.element.offsetParent)
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
            this.documentClickListener = this.onDocumentClick.bind(this);
            document.addEventListener('click', this.documentClickListener);
        }    
    }

    onDocumentClick() {
        if(!this.selfClick) {
            this.hide();
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
    
    bindDocumentMouseMoveListener() {
        if(!this.documentMouseMoveListener) {
            this.documentMouseMoveListener = this.onDocumentMouseMove.bind(this);
            document.addEventListener('mousemove', this.documentMouseMoveListener);
        }
    }

    onDocumentMouseMove(event) {
        if (this.colorDragging) {
            this.pickColor(event);
        }

        if (this.hueDragging) {
            this.pickHue(event);
        }
    }
    
    unbindDocumentMouseMoveListener() {
        if (this.documentMouseMoveListener) {
            document.removeEventListener('mousemove', this.documentMouseMoveListener);
            this.documentMouseMoveListener = null;
        }
    }
    
    bindDocumentMouseUpListener() {
        if(!this.documentMouseUpListener) {
            this.documentMouseUpListener = this.onDocumentMouseUp.bind(this);
            document.addEventListener('mouseup', this.documentMouseUpListener);
        }
    }

    onDocumentMouseUp() {
        this.colorDragging = false;
        this.hueDragging = false;
        DomHandler.removeClass(this.container, 'p-colorpicker-dragging');
        this.unbindDocumentMouseMoveListener();
        this.unbindDocumentMouseUpListener();
    }
    
    unbindDocumentMouseUpListener() {
        if (this.documentMouseUpListener) {
            document.removeEventListener('mouseup', this.documentMouseUpListener);
            this.documentMouseUpListener = null;
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
        this.updateHSBValue(this.props.value);
        this.updateUI();

        if (this.props.tooltip) {
            this.renderTooltip();
        }
    }

    componentDidUpdate(prevProps) {
        this.updateUI();
        if (prevProps.tooltip !== this.props.tooltip) {
            if (this.tooltip)
                this.tooltip.updateContent(this.props.tooltip);
            else
                this.renderTooltip();
        }
    }
    
    componentWillUnmount() {
        this.unbindDocumentClickListener();
        this.unbindDocumentMouseMoveListener();
        this.unbindDocumentMouseUpListener();

        if (this.tooltip) {
            this.tooltip.destroy();
            this.tooltip = null;
        }
    }

    shouldComponentUpdate(nextProps) {
        if(this.colorDragging) {
            return false;
        }
        else {
            let oldValue = this.hsbValue;
            this.updateHSBValue(nextProps.value);
            let newValue = this.toHSB(nextProps.value);
            let equals = (newValue.h === oldValue.h && newValue.s === oldValue.s && newValue.b === oldValue.b);
            
            return !equals;
        }
    }

    updateUI() {
        this.updateHue();
        this.updateColorHandle();
        this.updateInput();
        this.updateColorSelector();
    }

    alignPanel() {
        if (this.props.appendTo) {
            this.panel.element.style.minWidth = DomHandler.getWidth(this.container) + 'px';
            DomHandler.absolutePosition(this.panel.element, this.container);
        }
        else {
            DomHandler.relativePosition(this.panel.element, this.container);
        }
    }

    renderTooltip() {
        this.tooltip = new Tooltip({
            target: this.container,
            content: this.props.tooltip,
            options: this.props.tooltipOptions
        });
    }

    renderColorSelector() {
        return (
            <div ref={(el) => this.colorSelector = el} className="p-colorpicker-color-selector" onMouseDown={this.onColorMousedown.bind(this)}>
                <div className="p-colorpicker-color">
                    <div ref={(el) => this.colorHandle = el} className="p-colorpicker-color-handle"></div>
                </div>
            </div>
        );
    }

    renderHue() {
        return (
            <div ref={(el) => this.hueView = el} className="p-colorpicker-hue" onMouseDown={this.onHueMousedown.bind(this)}>
                <div ref={(el) => this.hueHandle = el} className="p-colorpicker-hue-handle"></div>
            </div>
        );
    }

    renderContent() {
        let colorSelector = this.renderColorSelector();
        let hue = this.renderHue();

        return (
            <div className="p-colorpicker-content">
                {colorSelector}
                {hue}
            </div>
        );
    }

    renderInput() {
        if (!this.props.inline) {
            let inputClassName = classNames('p-colorpicker-preview p-inputtext', {
                'p-disabled': this.props.disabled
            });

            return (
                <input ref={(el) => this.input = el} type="text" className={inputClassName} readOnly="readonly" id={this.props.inputId} tabIndex={this.props.tabIndex} disabled={this.props.disabled}
                    onClick={this.onInputClick} onKeyDown={this.onInputKeydown} />
            );
        }
        else {
            return null;
        }
    }

    render() {
        let className = classNames('p-colorpicker p-component', this.props.className, {'p-colorpicker-overlay': !this.props.inline});
        let content = this.renderContent();
        let input = this.renderInput();

        return (
            <div ref={(el) => this.container = el} id={this.props.id} style={this.props.style} className={className}>
                {input}
                <ColorPickerPanel ref={(el) => this.panel = el} appendTo={this.props.appendTo} onClick={this.onPanelClick}
                        inline={this.props.inline} disabled={this.props.disabled}>
                    {content}
                </ColorPickerPanel>
            </div>
        );
    }
}