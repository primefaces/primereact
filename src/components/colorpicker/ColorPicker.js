import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import DomHandler from '../utils/DomHandler';
import { classNames } from '../utils/ClassNames';
import { ColorPickerPanel } from './ColorPickerPanel';
import { tip } from '../tooltip/Tooltip';
import ObjectUtils from '../utils/ObjectUtils';
import ConnectedOverlayScrollHandler from '../utils/ConnectedOverlayScrollHandler';
import OverlayEventBus from '../overlayeventbus/OverlayEventBus';
import { ZIndexUtils } from '../utils/ZIndexUtils';

export class ColorPicker extends Component {

    static defaultProps = {
        id: null,
        inputRef: null,
        value: null,
        style: null,
        className: null,
        defaultColor: 'ff0000',
        inline: false,
        format: 'hex',
        appendTo: null,
        disabled: false,
        tabIndex: null,
        inputId: null,
        tooltip: null,
        tooltipOptions: null,
        transitionOptions: null,
        onChange: null,
        onShow: null,
        onHide: null
    }

    static propTypes = {
        id: PropTypes.string,
        inputRef: PropTypes.any,
        value: PropTypes.any,
        style: PropTypes.object,
        className: PropTypes.string,
        defaultColor: PropTypes.string,
        inline: PropTypes.bool,
        format: PropTypes.string,
        appendTo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        disabled: PropTypes.bool,
        tabIndex: PropTypes.number,
        inputId: PropTypes.string,
        tooltip: PropTypes.string,
        tooltipOptions: PropTypes.object,
        transitionOptions: PropTypes.object,
        onChange: PropTypes.func,
        onShow: PropTypes.func,
        onHide: PropTypes.func
    }

    constructor(props) {
        super(props);

        this.state = {
            overlayVisible: false
        };

        this.onInputClick = this.onInputClick.bind(this);
        this.onInputKeydown = this.onInputKeydown.bind(this);
        this.onOverlayEnter = this.onOverlayEnter.bind(this);
        this.onOverlayEntered = this.onOverlayEntered.bind(this);
        this.onOverlayExit = this.onOverlayExit.bind(this);
        this.onOverlayExited = this.onOverlayExited.bind(this);
        this.onPanelClick = this.onPanelClick.bind(this);
        this.onColorMousedown = this.onColorMousedown.bind(this);
        this.onHueMousedown = this.onHueMousedown.bind(this);
        this.onColorDragStart = this.onColorDragStart.bind(this);
        this.onHueDragStart = this.onHueDragStart.bind(this);
        this.onDrag = this.onDrag.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);

        this.overlayRef = createRef();
        this.inputRef = createRef(this.props.inputRef);
    }

    onPanelClick(event) {
        if (!this.props.inline) {
            OverlayEventBus.emit('overlay-click', {
                originalEvent: event,
                target: this.container
            });
        }
    }

    onHueMousedown(event) {
        if (this.props.disabled) {
            return;
        }

        this.bindDragListeners();
        this.onHueDragStart(event);
    }

    onHueDragStart(event) {
        if (this.props.disabled) {
            return;
        }

        this.hueDragging = true;
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
        if (this.props.disabled) {
            return;
        }

        this.bindDragListeners();
        this.onColorDragStart(event);
    }

    onColorDragStart(event) {
        if (this.props.disabled) {
            return;
        }

        this.colorDragging = true;
        this.pickColor(event);
        DomHandler.addClass(this.container, 'p-colorpicker-dragging');
        event.preventDefault();
    }

    onDrag(event) {
        if (this.colorDragging) {
            this.pickColor(event);
            event.preventDefault();
        }

        if (this.hueDragging) {
            this.pickHue(event);
            event.preventDefault();
        }
    }

    onDragEnd() {
        this.colorDragging = false;
        this.hueDragging = false;
        DomHandler.removeClass(this.container, 'p-colorpicker-dragging');
        this.unbindDragListeners();
    }

    bindDragListeners() {
        this.bindDocumentMouseMoveListener();
        this.bindDocumentMouseUpListener();
    }

    unbindDragListeners() {
        this.unbindDocumentMouseMoveListener();
        this.unbindDocumentMouseUpListener();
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
        switch (this.props.format) {
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
        if (this.props.onChange) {
            this.props.onChange({
                value: value,
                stopPropagation: () => { },
                preventDefault: () => { },
                target: {
                    name: this.props.name,
                    id: this.props.id,
                    value: value
                }
            })
        }
    }

    updateColorSelector() {
        if (this.colorSelector) {
            let hsbValue = this.validateHSB({
                h: this.hsbValue.h,
                s: 100,
                b: 100
            });
            this.colorSelector.style.backgroundColor = '#' + this.HSBtoHEX(hsbValue);
        }
    }

    updateColorHandle() {
        if (this.colorHandle) {
            this.colorHandle.style.left = Math.floor(150 * this.hsbValue.s / 100) + 'px';
            this.colorHandle.style.top = Math.floor(150 * (100 - this.hsbValue.b) / 100) + 'px';
        }
    }

    updateHue() {
        if (this.hueHandle) {
            this.hueHandle.style.top = Math.floor(150 - (150 * this.hsbValue.h / 360)) + 'px';
        }
    }

    updateInput() {
        if (this.inputRef && this.inputRef.current) {
            this.inputRef.current.style.backgroundColor = '#' + this.HSBtoHEX(this.hsbValue);
        }
    }

    show() {
        this.setState({ overlayVisible: true });
    }

    hide() {
        this.setState({ overlayVisible: false });
    }

    onOverlayEnter() {
        ZIndexUtils.set('overlay', this.overlayRef.current);
        this.alignPanel();
    }

    onOverlayEntered() {
        this.bindDocumentClickListener();
        this.bindScrollListener();
        this.bindResizeListener();

        this.props.onShow && this.props.onShow();
    }

    onOverlayExit() {
        this.unbindDocumentClickListener();
        this.unbindScrollListener();
        this.unbindResizeListener();
    }

    onOverlayExited() {
        ZIndexUtils.clear(this.overlayRef.current);

        this.props.onHide && this.props.onHide();
    }

    onInputClick() {
        this.togglePanel();
    }

    togglePanel() {
        if (this.state.overlayVisible)
            this.hide();
        else
            this.show();
    }

    onInputKeydown(event) {
        switch (event.which) {
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

    bindDocumentClickListener() {
        if (!this.documentClickListener) {
            this.documentClickListener = (event) => {
                if (this.state.overlayVisible && this.isOutsideClicked(event)) {
                    this.hide();
                }
            };
            document.addEventListener('click', this.documentClickListener);
        }
    }

    unbindDocumentClickListener() {
        if (this.documentClickListener) {
            document.removeEventListener('click', this.documentClickListener);
            this.documentClickListener = null;
        }
    }

    bindScrollListener() {
        if (!this.scrollHandler) {
            this.scrollHandler = new ConnectedOverlayScrollHandler(this.container, () => {
                if (this.state.overlayVisible) {
                    this.hide();
                }
            });
        }

        this.scrollHandler.bindScrollListener();
    }

    unbindScrollListener() {
        if (this.scrollHandler) {
            this.scrollHandler.unbindScrollListener();
        }
    }

    bindResizeListener() {
        if (!this.resizeListener) {
            this.resizeListener = () => {
                if (this.state.overlayVisible) {
                    this.hide();
                }
            };
            window.addEventListener('resize', this.resizeListener);
        }
    }

    unbindResizeListener() {
        if (this.resizeListener) {
            window.removeEventListener('resize', this.resizeListener);
            this.resizeListener = null;
        }
    }

    isOutsideClicked(event) {
        return this.container && !(this.container.isSameNode(event.target) || this.container.contains(event.target)
            || (this.overlayRef && this.overlayRef.current.contains(event.target)));
    }

    bindDocumentMouseMoveListener() {
        if (!this.documentMouseMoveListener) {
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
        if (!this.documentMouseUpListener) {
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
        let len = 6 - hex.length;
        if (len > 0) {
            let o = [];
            for (let i = 0; i < len; i++) {
                o.push('0');
            }
            o.push(hex);
            hex = o.join('');
        }
        return hex;
    }

    HEXtoRGB(hex) {
        let hexValue = parseInt(((hex.indexOf('#') > -1) ? hex.substring(1) : hex), 16);
        return { r: hexValue >> 16, g: (hexValue & 0x00FF00) >> 8, b: (hexValue & 0x0000FF) };
    }

    HEXtoHSB(hex) {
        return this.RGBtoHSB(this.HEXtoRGB(hex));
    }

    RGBtoHSB(rgb) {
        let hsb = {
            h: 0,
            s: 0,
            b: 0
        };
        let min = Math.min(rgb.r, rgb.g, rgb.b);
        let max = Math.max(rgb.r, rgb.g, rgb.b);
        let delta = max - min;
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
        hsb.s *= 100 / 255;
        hsb.b *= 100 / 255;
        return hsb;
    }

    HSBtoRGB(hsb) {
        let rgb = {
            r: null, g: null, b: null
        };
        let h = Math.round(hsb.h);
        let s = Math.round(hsb.s * 255 / 100);
        let v = Math.round(hsb.b * 255 / 100);
        if (s === 0) {
            rgb = {
                r: v,
                g: v,
                b: v
            }
        }
        else {
            let t1 = v;
            let t2 = (255 - s) * v / 255;
            let t3 = (t1 - t2) * (h % 60) / 60;
            if (h === 360) h = 0;
            if (h < 60) { rgb.r = t1; rgb.b = t2; rgb.g = t2 + t3 }
            else if (h < 120) { rgb.g = t1; rgb.b = t2; rgb.r = t1 - t3 }
            else if (h < 180) { rgb.g = t1; rgb.r = t2; rgb.b = t2 + t3 }
            else if (h < 240) { rgb.b = t1; rgb.r = t2; rgb.g = t1 - t3 }
            else if (h < 300) { rgb.b = t1; rgb.g = t2; rgb.r = t2 + t3 }
            else if (h < 360) { rgb.r = t1; rgb.g = t2; rgb.b = t1 - t3 }
            else { rgb.r = 0; rgb.g = 0; rgb.b = 0 }
        }
        return { r: Math.round(rgb.r), g: Math.round(rgb.g), b: Math.round(rgb.b) };
    }

    RGBtoHEX(rgb) {
        let hex = [
            rgb.r.toString(16),
            rgb.g.toString(16),
            rgb.b.toString(16)
        ];

        for (let key in hex) {
            if (hex[key].length === 1) {
                hex[key] = '0' + hex[key];
            }
        }

        return hex.join('');
    }

    HSBtoHEX(hsb) {
        return this.RGBtoHEX(this.HSBtoRGB(hsb));
    }

    updateInputRef() {
        let ref = this.props.inputRef;

        if (ref) {
            if (typeof ref === 'function') {
                ref(this.inputRef.current);
            }
            else {
                ref.current = this.inputRef.current;
            }
        }
    }

    componentDidMount() {
        this.updateInputRef();
        this.updateHSBValue(this.props.value);
        this.updateUI();

        if (this.props.tooltip) {
            this.renderTooltip();
        }
    }

    componentDidUpdate(prevProps) {
        this.updateUI();
        if (prevProps.tooltip !== this.props.tooltip || prevProps.tooltipOptions !== this.props.tooltipOptions) {
            if (this.tooltip)
                this.tooltip.update({ content: this.props.tooltip, ...(this.props.tooltipOptions || {}) });
            else
                this.renderTooltip();
        }
    }

    componentWillUnmount() {
        this.unbindDocumentClickListener();
        this.unbindDocumentMouseMoveListener();
        this.unbindDocumentMouseUpListener();
        this.unbindResizeListener();
        if (this.scrollHandler) {
            this.scrollHandler.destroy();
            this.scrollHandler = null;
        }

        if (this.tooltip) {
            this.tooltip.destroy();
            this.tooltip = null;
        }

        ZIndexUtils.clear(this.overlayRef.current);
    }

    updateUI() {
        this.updateHue();
        this.updateColorHandle();
        this.updateInput();
        this.updateColorSelector();
    }

    alignPanel() {
        if (this.inputRef && this.inputRef.current) {
            const container = this.inputRef.current.parentElement;

            if (this.props.appendTo === 'self') {
                DomHandler.relativePosition(this.overlayRef.current, container);
            }
            else {
                this.overlayRef.current.style.minWidth = DomHandler.getOuterWidth(container) + 'px';
                DomHandler.absolutePosition(this.overlayRef.current, container);
            }
        }
    }

    renderTooltip() {
        this.tooltip = tip({
            target: this.container,
            content: this.props.tooltip,
            options: this.props.tooltipOptions
        });
    }

    renderColorSelector() {
        return (
            <div ref={(el) => this.colorSelector = el} className="p-colorpicker-color-selector" onMouseDown={this.onColorMousedown}
                onTouchStart={this.onColorDragStart} onTouchMove={this.onDrag} onTouchEnd={this.onDragEnd}>
                <div className="p-colorpicker-color">
                    <div ref={(el) => this.colorHandle = el} className="p-colorpicker-color-handle"></div>
                </div>
            </div>
        );
    }

    renderHue() {
        return (
            <div ref={(el) => this.hueView = el} className="p-colorpicker-hue" onMouseDown={this.onHueMousedown}
                onTouchStart={this.onHueDragStart} onTouchMove={this.onDrag} onTouchEnd={this.onDragEnd}>
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

            let inputProps = ObjectUtils.findDiffKeys(this.props, ColorPicker.defaultProps);

            return (
                <input ref={this.inputRef} type="text" className={inputClassName} readOnly id={this.props.inputId} tabIndex={this.props.tabIndex} disabled={this.props.disabled}
                    onClick={this.onInputClick} onKeyDown={this.onInputKeydown} {...inputProps} />
            );
        }

        return null;
    }

    render() {
        const containerClassName = classNames('p-colorpicker p-component', {
            'p-colorpicker-overlay': !this.props.inline
        }, this.props.className);

        let content = this.renderContent();
        let input = this.renderInput();

        return (
            <div ref={(el) => this.container = el} id={this.props.id} style={this.props.style} className={containerClassName}>
                {input}
                <ColorPickerPanel ref={this.overlayRef} appendTo={this.props.appendTo} inline={this.props.inline} disabled={this.props.disabled} onClick={this.onPanelClick}
                    in={this.props.inline || this.state.overlayVisible} onEnter={this.onOverlayEnter} onEntered={this.onOverlayEntered} onExit={this.onOverlayExit} onExited={this.onOverlayExited}
                    transitionOptions={this.props.transitionOptions}>
                    {content}
                </ColorPickerPanel>
            </div>
        );
    }
}
