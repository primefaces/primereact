import * as React from 'react';
import PrimeReact, { PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useEventListener, useMergeProps, useMountEffect, useOverlayListener, useUnmountEffect, useUpdateEffect } from '../hooks/Hooks';
import { OverlayService } from '../overlayservice/OverlayService';
import { Tooltip } from '../tooltip/Tooltip';
import { DomHandler, ObjectUtils, ZIndexUtils } from '../utils/Utils';
import { ColorPickerBase } from './ColorPickerBase';
import { ColorPickerPanel } from './ColorPickerPanel';

export const ColorPicker = React.memo(
    React.forwardRef((inProps, ref) => {
        const mergeProps = useMergeProps();
        const context = React.useContext(PrimeReactContext);
        const props = ColorPickerBase.getProps(inProps, context);
        const [overlayVisibleState, setOverlayVisibleState] = React.useState(false);
        const { ptm, cx, isUnstyled } = ColorPickerBase.setMetaData({
            props,
            state: {
                overlayVisible: overlayVisibleState
            }
        });

        useHandleStyle(ColorPickerBase.css.styles, isUnstyled, { name: 'colorpicker' });
        const elementRef = React.useRef(null);
        const overlayRef = React.useRef(null);
        const inputRef = React.useRef(props.inputRef);
        const colorSelectorRef = React.useRef(null);
        const colorHandleRef = React.useRef(null);
        const hueHandleRef = React.useRef(null);
        const hueViewRef = React.useRef(null);
        const hueDragging = React.useRef(false);
        const hsbValue = React.useRef(null);
        const colorDragging = React.useRef(false);

        const [bindOverlayListener, unbindOverlayListener] = useOverlayListener({
            target: elementRef,
            overlay: overlayRef,
            listener: (event, { valid }) => {
                valid && hide();
            },
            when: overlayVisibleState
        });

        const [bindDocumentMouseMoveListener, unbindDocumentMouseMoveListener] = useEventListener({
            type: 'mousemove',
            listener: (event) => {
                colorDragging.current && pickColor(event);
                hueDragging.current && pickHue(event);
            }
        });

        const [bindDocumentMouseUpListener, unbindDocumentMouseUpListener] = useEventListener({
            type: 'mouseup',
            listener: () => {
                colorDragging.current = hueDragging.current = false;
                DomHandler.removeClass(elementRef.current, 'p-colorpicker-dragging');
                unbindDocumentMouseMoveListener();
                unbindDocumentMouseUpListener();
            }
        });

        const onPanelClick = (event) => {
            if (!props.inline) {
                OverlayService.emit('overlay-click', {
                    originalEvent: event,
                    target: elementRef.current
                });
            }
        };

        const onHueMousedown = (event) => {
            if (props.disabled) {
                return;
            }

            bindDragListeners();
            onHueDragStart(event);
        };

        const onHueDragStart = (event) => {
            if (props.disabled) {
                return;
            }

            hueDragging.current = true;
            pickHue(event);
            !isUnstyled && DomHandler.addClass(elementRef.current, 'p-colorpicker-dragging');
        };

        const pickHue = (event) => {
            const top = hueViewRef.current.getBoundingClientRect().top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);

            hsbValue.current = validateHSB({
                h: Math.floor((360 * (150 - Math.max(0, Math.min(150, (event.pageY || event.changedTouches[0].pageY) - top)))) / 150),
                s: 100,
                b: 100
            });

            updateColorSelector();
            updateHue();
            updateModel();
        };

        const onColorMousedown = (event) => {
            if (props.disabled) {
                return;
            }

            bindDragListeners();
            onColorDragStart(event);
        };

        const onColorDragStart = (event) => {
            if (props.disabled) {
                return;
            }

            colorDragging.current = true;
            pickColor(event);
            !isUnstyled && DomHandler.addClass(elementRef.current, 'p-colorpicker-dragging');
            event.preventDefault();
        };

        const onDrag = (event) => {
            if (colorDragging.current) {
                pickColor(event);
                event.preventDefault();
            }

            if (hueDragging.current) {
                pickHue(event);
                event.preventDefault();
            }
        };

        const onDragEnd = () => {
            colorDragging.current = false;
            hueDragging.current = false;
            !isUnstyled && DomHandler.removeClass(elementRef.current, 'p-colorpicker-dragging');
            unbindDragListeners();
        };

        const bindDragListeners = () => {
            bindDocumentMouseMoveListener();
            bindDocumentMouseUpListener();
        };

        const unbindDragListeners = () => {
            unbindDocumentMouseMoveListener();
            unbindDocumentMouseUpListener();
        };

        const pickColor = (event) => {
            const rect = colorSelectorRef.current.getBoundingClientRect();
            const top = rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
            const left = rect.left + document.body.scrollLeft;
            const saturation = Math.floor((100 * Math.max(0, Math.min(150, (event.pageX || event.changedTouches[0].pageX) - left))) / 150);
            const brightness = Math.floor((100 * (150 - Math.max(0, Math.min(150, (event.pageY || event.changedTouches[0].pageY) - top)))) / 150);

            hsbValue.current = validateHSB({
                h: hsbValue.current.h,
                s: saturation,
                b: brightness
            });

            updateColorHandle();
            updateInput();
            updateModel();
        };

        const updateModel = () => {
            switch (props.format) {
                case 'hex':
                    onChange(HSBtoHEX(hsbValue.current));
                    break;

                case 'rgb':
                    onChange(HSBtoRGB(hsbValue.current));
                    break;

                case 'hsb':
                    onChange(hsbValue.current);
                    break;

                default:
                    break;
            }
        };

        const toHSB = (value) => {
            let hsb;

            if (value) {
                switch (props.format) {
                    case 'hex':
                        hsb = HEXtoHSB(value);
                        break;

                    case 'rgb':
                        hsb = RGBtoHSB(value);
                        break;

                    case 'hsb':
                        hsb = value;
                        break;

                    default:
                        break;
                }
            } else {
                hsb = HEXtoHSB(props.defaultColor);
            }

            return hsb;
        };

        const updateHSBValue = (value) => {
            hsbValue.current = toHSB(value);
        };

        const areHSBEqual = (val1, val2) => {
            return val1.h === val2.h && val1.s === val2.s && val1.b === val2.b;
        };

        const onChange = (value) => {
            if (props.onChange) {
                props.onChange({
                    value: value,
                    stopPropagation: () => {},
                    preventDefault: () => {},
                    target: {
                        name: props.name,
                        id: props.id,
                        value: value
                    }
                });
            }
        };

        const updateColorSelector = () => {
            if (colorSelectorRef.current) {
                let newHsbValue = validateHSB({
                    h: hsbValue.current.h,
                    s: 100,
                    b: 100
                });

                colorSelectorRef.current.style.backgroundColor = '#' + HSBtoHEX(newHsbValue);
            }
        };

        const updateColorHandle = () => {
            if (colorHandleRef.current) {
                colorHandleRef.current.style.left = Math.floor((150 * hsbValue.current.s) / 100) + 'px';
                colorHandleRef.current.style.top = Math.floor((150 * (100 - hsbValue.current.b)) / 100) + 'px';
            }
        };

        const updateHue = () => {
            if (hueHandleRef.current) {
                hueHandleRef.current.style.top = Math.floor(150 - (150 * hsbValue.current.h) / 360) + 'px';
            }
        };

        const updateInput = () => {
            if (inputRef.current) {
                inputRef.current.style.backgroundColor = '#' + HSBtoHEX(hsbValue.current);
            }
        };

        const show = () => {
            setOverlayVisibleState(true);
        };

        const hide = () => {
            setOverlayVisibleState(false);
        };

        const onOverlayEnter = () => {
            const styles = !props.inline ? { position: 'absolute', top: '0', left: '0' } : undefined;

            ZIndexUtils.set('overlay', overlayRef.current, (context && context.autoZIndex) || PrimeReact.autoZIndex, (context && context.zIndex['overlay']) || PrimeReact.zIndex['overlay']);
            DomHandler.addStyles(overlayRef.current, styles);
            alignOverlay();
        };

        const onOverlayEntered = () => {
            bindOverlayListener();

            props.onShow && props.onShow();
        };

        const onOverlayExit = () => {
            unbindOverlayListener();
        };

        const onOverlayExited = () => {
            ZIndexUtils.clear(overlayRef.current);

            props.onHide && props.onHide();
        };

        const onInputClick = () => {
            togglePanel();
        };

        const togglePanel = () => {
            overlayVisibleState ? hide() : show();
        };

        const onInputKeydown = (event) => {
            switch (event.which) {
                //space
                case 32:
                    togglePanel();
                    event.preventDefault();
                    break;

                //escape and tab
                case 27:
                case 9:
                    hide();
                    break;

                default:
                    break;
            }
        };

        const validateHSB = (hsb) => {
            return {
                h: Math.min(360, Math.max(0, hsb.h)),
                s: Math.min(100, Math.max(0, hsb.s)),
                b: Math.min(100, Math.max(0, hsb.b))
            };
        };

        const validateRGB = (rgb) => {
            return {
                r: Math.min(255, Math.max(0, rgb.r)),
                g: Math.min(255, Math.max(0, rgb.g)),
                b: Math.min(255, Math.max(0, rgb.b))
            };
        };

        const validateHEX = (hex) => {
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
        };

        const HEXtoRGB = (hex) => {
            const hexValue = parseInt(hex.indexOf('#') > -1 ? hex.substring(1) : hex, 16);

            return { r: hexValue >> 16, g: (hexValue & 0x00ff00) >> 8, b: hexValue & 0x0000ff };
        };

        const HEXtoHSB = (hex) => {
            return RGBtoHSB(HEXtoRGB(hex));
        };

        const RGBtoHSB = (rgb) => {
            let hsb = {
                h: 0,
                s: 0,
                b: 0
            };
            let min = Math.min(rgb.r, rgb.g, rgb.b);
            let max = Math.max(rgb.r, rgb.g, rgb.b);
            let delta = max - min;

            hsb.b = max;
            hsb.s = max !== 0 ? (255 * delta) / max : 0;

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
        };

        const HSBtoRGB = (hsb) => {
            let rgb = {
                r: null,
                g: null,
                b: null
            };
            let h = Math.round(hsb.h);
            let s = Math.round((hsb.s * 255) / 100);
            let v = Math.round((hsb.b * 255) / 100);

            if (s === 0) {
                rgb = {
                    r: v,
                    g: v,
                    b: v
                };
            } else {
                let t1 = v;
                let t2 = ((255 - s) * v) / 255;
                let t3 = ((t1 - t2) * (h % 60)) / 60;

                if (h === 360) h = 0;

                if (h < 60) {
                    rgb.r = t1;
                    rgb.b = t2;
                    rgb.g = t2 + t3;
                } else if (h < 120) {
                    rgb.g = t1;
                    rgb.b = t2;
                    rgb.r = t1 - t3;
                } else if (h < 180) {
                    rgb.g = t1;
                    rgb.r = t2;
                    rgb.b = t2 + t3;
                } else if (h < 240) {
                    rgb.b = t1;
                    rgb.r = t2;
                    rgb.g = t1 - t3;
                } else if (h < 300) {
                    rgb.b = t1;
                    rgb.g = t2;
                    rgb.r = t2 + t3;
                } else if (h < 360) {
                    rgb.r = t1;
                    rgb.g = t2;
                    rgb.b = t1 - t3;
                } else {
                    rgb.r = 0;
                    rgb.g = 0;
                    rgb.b = 0;
                }
            }

            return { r: Math.round(rgb.r), g: Math.round(rgb.g), b: Math.round(rgb.b) };
        };

        const RGBtoHEX = (rgb) => {
            let hex = [rgb.r.toString(16), rgb.g.toString(16), rgb.b.toString(16)];

            for (let key in hex) {
                if (hex[key].length === 1) {
                    hex[key] = '0' + hex[key];
                }
            }

            return hex.join('');
        };

        const HSBtoHEX = (hsb) => {
            return RGBtoHEX(HSBtoRGB(hsb));
        };

        const updateUI = () => {
            updateHue();
            updateColorHandle();
            updateInput();
            updateColorSelector();
        };

        const alignOverlay = () => {
            if (inputRef.current) {
                DomHandler.alignOverlay(overlayRef.current, inputRef.current.parentElement, props.appendTo || (context && context.appendTo) || PrimeReact.appendTo);
            }
        };

        React.useImperativeHandle(ref, () => ({
            props,
            show,
            hide,
            focus: () => DomHandler.focus(inputRef.current),
            getElement: () => elementRef.current,
            getOverlay: () => overlayRef.current,
            getInput: () => inputRef.current
        }));

        React.useEffect(() => {
            ObjectUtils.combinedRefs(inputRef, props.inputRef);
        }, [inputRef, props.inputRef]);

        useMountEffect(() => {
            updateHSBValue(props.value);
            updateUI();

            if (props.autoFocus) {
                DomHandler.focus(inputRef.current, props.autoFocus);
            }

            alignOverlay();
        });

        useUpdateEffect(() => {
            if (!colorDragging.current && !hueDragging.current) {
                updateHSBValue(props.value);
            }
        }, [props.value]);

        useUpdateEffect(() => {
            updateUI();
        });

        useUnmountEffect(() => {
            ZIndexUtils.clear(overlayRef.current);
        });

        const createColorSelector = () => {
            const selectorProps = mergeProps(
                {
                    ref: colorSelectorRef,
                    className: cx('selector'),
                    onMouseDown: (e) => onColorMousedown(e),
                    onTouchStart: (e) => onColorDragStart(e),
                    onTouchMove: (e) => onDrag(e),
                    onTouchEnd: onDragEnd
                },
                ptm('selector')
            );

            const colorProps = mergeProps(
                {
                    className: cx('color')
                },
                ptm('color')
            );

            const colorHandlerProps = mergeProps(
                {
                    ref: colorHandleRef,
                    className: cx('colorHandle')
                },
                ptm('colorHandle')
            );

            return (
                <div {...selectorProps}>
                    <div {...colorProps}>
                        <div {...colorHandlerProps}></div>
                    </div>
                </div>
            );
        };

        const createHue = () => {
            const hueProps = mergeProps(
                {
                    className: cx('hue'),
                    onMouseDown: (e) => onHueMousedown(e),
                    onTouchStart: (e) => onHueDragStart(e),
                    onTouchMove: (e) => onDrag(e),
                    onTouchEnd: onDragEnd
                },
                ptm('hue')
            );

            const hueHandlerProps = mergeProps(
                {
                    className: cx('hueHandle')
                },
                ptm('hueHandle')
            );

            return (
                <div ref={hueViewRef} {...hueProps}>
                    <div ref={hueHandleRef} {...hueHandlerProps}></div>
                </div>
            );
        };

        const createContent = () => {
            const colorSelector = createColorSelector();
            const hue = createHue();
            const contentProps = mergeProps(
                {
                    className: cx('content')
                },
                ptm('content')
            );

            return (
                <div {...contentProps}>
                    {colorSelector}
                    {hue}
                </div>
            );
        };

        const createInput = () => {
            if (!props.inline) {
                const inputProps = ColorPickerBase.getOtherProps(props);
                const _inputProps = mergeProps(
                    {
                        ref: inputRef,
                        type: 'text',
                        readOnly: true,
                        className: cx('input'),
                        style: props.inputStyle,
                        id: props.inputId,
                        tabIndex: props.tabIndex,
                        disabled: props.disabled,
                        onClick: onInputClick,
                        onKeyDown: onInputKeydown,
                        ...inputProps
                    },
                    ptm('input')
                );

                return <input {..._inputProps} />;
            }

            return null;
        };

        const hasTooltip = ObjectUtils.isNotEmpty(props.tooltip);
        const content = createContent();
        const input = createInput();
        const rootProps = mergeProps(
            {
                id: props.id,
                ref: elementRef,
                style: props.style,
                className: cx('root')
            },
            ColorPickerBase.getOtherProps(props),
            ptm('root')
        );

        return (
            <>
                <div {...rootProps}>
                    {input}
                    <ColorPickerPanel
                        hostName="ColorPicker"
                        ref={overlayRef}
                        appendTo={props.appendTo}
                        inline={props.inline}
                        disabled={props.disabled}
                        panelStyle={props.panelStyle}
                        panelClassName={props.panelClassName}
                        onClick={onPanelClick}
                        in={props.inline || overlayVisibleState}
                        onEnter={onOverlayEnter}
                        onEntered={onOverlayEntered}
                        onExit={onOverlayExit}
                        onExited={onOverlayExited}
                        transitionOptions={props.transitionOptions}
                        ptm={ptm}
                        cx={cx}
                    >
                        {content}
                    </ColorPickerPanel>
                </div>
                {hasTooltip && <Tooltip target={elementRef} content={props.tooltip} pt={ptm('tooltip')} {...props.tooltipOptions} />}
            </>
        );
    })
);

ColorPicker.displayName = 'ColorPicker';
