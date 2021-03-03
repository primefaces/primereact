import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import DomHandler from '../utils/DomHandler';
import { tip } from '../tooltip/Tooltip';
import { InputText } from '../inputtext/InputText';
import ObjectUtils from '../utils/ObjectUtils';
import UniqueComponentId from '../utils/UniqueComponentId';
import { CSSTransition } from 'react-transition-group';
import { classNames } from '../utils/ClassNames';
import ConnectedOverlayScrollHandler from '../utils/ConnectedOverlayScrollHandler';
import { localeOption } from '../api/Locale';
import OverlayEventBus from '../overlayeventbus/OverlayEventBus';

export class Password extends Component {

    static defaultProps = {
        id: null,
        value: null,
        promptLabel: null,
        weakLabel: null,
        mediumLabel: null,
        strongLabel: null,
        mediumRegex: '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})',
        strongRegex: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})',
        feedback: true,
        toggleMask: false,
        appendTo: null,
        header: null,
        content: null,
        footer: null,
        icon: null,
        tooltip: null,
        tooltipOptions: null,
        style: null,
        className: null,
        inputStyle: null,
        inputClassName: null,
        panelStyle: null,
        panelClassName: null
    };

    static propTypes = {
        id: PropTypes.string,
        value: PropTypes.string,
        promptLabel: PropTypes.string,
        weakLabel: PropTypes.string,
        mediumLabel: PropTypes.string,
        strongLabel:PropTypes.string,
        mediumRegex: PropTypes.string,
        strongRegex: PropTypes.string,
        feedback: PropTypes.bool,
        toggleMask: PropTypes.bool,
        appendTo: PropTypes.any,
        header: PropTypes.any,
        content: PropTypes.any,
        footer: PropTypes.any,
        icon: PropTypes.any,
        tooltip: PropTypes.string,
        tooltipOptions: PropTypes.object,
        style: PropTypes.object,
        className: PropTypes.string,
        inputStyle: PropTypes.object,
        inputClassName: PropTypes.string,
        panelStyle: PropTypes.object,
        panelClassName: PropTypes.string
    };

    constructor(props) {
        super(props);

        this.state = {
            overlayVisible: false,
            meter: null,
            infoText: this.promptLabel(),
            focused: false,
            unmasked: false
        };

        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onKeyup = this.onKeyup.bind(this);
        this.onMaskToggle = this.onMaskToggle.bind(this);
        this.onOverlayEnter = this.onOverlayEnter.bind(this);
        this.onOverlayEntered = this.onOverlayEntered.bind(this);
        this.onOverlayExit = this.onOverlayExit.bind(this);
        this.onPanelClick = this.onPanelClick.bind(this);

        this.id = this.props.id || UniqueComponentId();
        this.overlayRef = React.createRef();
        this.mediumCheckRegExp = new RegExp(this.props.mediumRegex);
        this.strongCheckRegExp = new RegExp(this.props.strongRegex);
    }

    promptLabel() {
        return this.props.promptLabel || localeOption('passwordPrompt');
    }

    weakLabel() {
        return this.props.weakLabel || localeOption('weak');
    }

    mediumLabel() {
        return this.props.mediumLabel || localeOption('medium');
    }

    strongLabel() {
        return this.props.strongLabel || localeOption('strong');
    }

    isFilled() {
        return this.props.value != null && this.props.value.toString().length > 0;
    }

    getInputType() {
        return this.state.unmasked ? 'text' : 'password';
    }

    updateLabels() {
        if (this.state.meter) {
            let label = null;
            switch (this.state.meter.strength) {
                case 'weak':
                    label = this.weakLabel();
                    break;

                case 'medium':
                    label = this.mediumLabel();
                    break;

                case 'strong':
                    label = this.strongLabel();
                    break;

                default:
                    break;
            }

            if (label && this.state.infoText !== label) {
                this.setState({ infoText: label });
            }
        }
        else {
            const promptLabel = this.promptLabel();
            if (this.state.infoText !== promptLabel) {
                this.setState({ infoText: promptLabel });
            }
        }
    }

    onPanelClick(event) {
        if (this.props.feedback) {
            OverlayEventBus.emit('overlay-click', {
                originalEvent: event,
                target: this.container
            });
        }
    }

    onMaskToggle() {
        this.setState((prevState) => {
            return {
                unmasked: !prevState.unmasked
            }
        });
    }

    showOverlay() {
        this.updateLabels();
        this.setState({ overlayVisible: true });
    }

    hideOverlay() {
        this.setState({ overlayVisible: false });
    }

    alignOverlay() {
        if (this.props.appendTo) {
            this.overlayRef.current.style.minWidth = DomHandler.getOuterWidth(this.inputEl) + 'px';
            DomHandler.absolutePosition(this.overlayRef.current, this.inputEl);
        }
        else {
            DomHandler.relativePosition(this.overlayRef.current, this.inputEl);
        }
    }

    onOverlayEnter() {
        this.overlayRef.current.style.zIndex = String(DomHandler.generateZIndex());
        this.alignOverlay();
    }

    onOverlayEntered() {
        this.bindScrollListener();
        this.bindResizeListener();
    }

    onOverlayExit() {
        this.unbindScrollListener();
        this.unbindResizeListener();
    }

    onFocus(event) {
        event.persist();
        this.setState({ focused: true }, () => {
            if (this.props.feedback) {
                this.showOverlay();
            }

            if (this.props.onFocus) {
                this.props.onFocus(event);
            }
        });
    }

    onBlur(event) {
        event.persist();
        this.setState({ focused: false }, () => {
            if (this.props.feedback) {
                this.hideOverlay();
            }

            if (this.props.onBlur) {
                this.props.onBlur(event);
            }
        });
    }

    onKeyup(e) {
        if(this.props.feedback) {
            let value = e.target.value;
            let label = null;
            let meter = null;

            switch (this.testStrength(value)) {
                case 1:
                    label = this.weakLabel();
                    meter = {
                        strength: 'weak',
                        width: '33.33%'
                    };
                    break;

                case 2:
                    label = this.mediumLabel();
                    meter = {
                        strength: 'medium',
                        width: '66.66%'
                    };
                    break;

                case 3:
                    label = this.strongLabel();
                    meter = {
                        strength: 'strong',
                        width: '100%'
                    };
                    break;

                default:
                    label = this.promptLabel();
                    meter = null;
                    break;
            }

            this.setState({
                meter,
                infoText: label
            }, () => {
                if (!this.state.overlayVisible) {
                    this.showOverlay();
                }
            });
        }

        if (this.props.onKeyUp) {
            this.props.onKeyUp(e);
        }
    }

    testStrength(str) {
        let level = 0;

        if (this.strongCheckRegExp.test(str))
            level = 3;
        else if (this.mediumCheckRegExp.test(str))
            level = 2;
        else if (str.length)
            level = 1;

        return level;
    }

    bindScrollListener() {
        if (!this.scrollHandler) {
            this.scrollHandler = new ConnectedOverlayScrollHandler(this.inputEl, () => {
                if (this.state.overlayVisible) {
                    this.hideOverlay();
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
                    this.hideOverlay();
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

    componentDidMount() {
        if (this.props.tooltip) {
            this.renderTooltip();
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.tooltip !== this.props.tooltip || prevProps.tooltipOptions !== this.props.tooltipOptions) {
            if (this.tooltip)
                this.tooltip.update({ content: this.props.tooltip, ...(this.props.tooltipOptions || {}) });
            else
                this.renderTooltip();
        }

        if (prevProps.mediumRegex !== this.props.mediumRegex) {
            this.mediumCheckRegExp = new RegExp(this.props.mediumRegex);
        }

        if (prevProps.strongRegex !== this.props.strongRegex) {
            this.strongCheckRegExp = new RegExp(this.props.strongRegex);
        }
    }

    componentWillUnmount() {
        this.unbindResizeListener();
        if (this.scrollHandler) {
            this.scrollHandler.destroy();
            this.scrollHandler = null;
        }

        if (this.tooltip) {
            this.tooltip.destroy();
            this.tooltip = null;
        }
    }

    renderTooltip() {
        this.tooltip = tip({
            target: this.inputEl,
            content: this.props.tooltip,
            options: this.props.tooltipOptions
        });
    }

    renderIcon() {
        if (this.props.toggleMask) {
            const iconClassName = this.state.unmasked ? 'pi pi-eye-slash' : 'pi pi-eye';
            let content = <i className={iconClassName} onClick={this.onMaskToggle} />

            if (this.props.icon) {
                const defaultIconOptions = {
                    onClick: this.onMaskToggle,
                    className: iconClassName,
                    element: content,
                    props: this.props
                };

                content = ObjectUtils.getJSXElement(this.props.icon, defaultIconOptions);
            }

            return content;
        }

        return null;
    }

    renderPanel() {
        const panelClassName = classNames('p-password-panel p-component', this.props.panelClassName);
        const { strength, width } = this.state.meter || { strength: '', width: '0%' };
        const header = ObjectUtils.getJSXElement(this.props.header, this.props);
        const footer = ObjectUtils.getJSXElement(this.props.footer, this.props);
        const content = this.props.content ? ObjectUtils.getJSXElement(this.props.content, this.props) : (
            <>
                <div className="p-password-meter">
                    <div className={`p-password-strength ${strength}`} style={{ width: width }}></div>
                </div>
                <div className="p-password-info">
                    {this.state.infoText}
                </div>
            </>
        );

        const panel = (
            <CSSTransition nodeRef={this.overlayRef} classNames="p-connected-overlay" in={this.state.overlayVisible} timeout={{ enter: 120, exit: 100 }}
                unmountOnExit onEnter={this.onOverlayEnter} onEntered={this.onOverlayEntered} onExit={this.onOverlayExit}>
                <div ref={this.overlayRef} className={panelClassName} style={this.props.panelStyle} onClick={this.onPanelClick}>
                    {header}
                    {content}
                    {footer}
                </div>
            </CSSTransition>
        );

        if (this.props.appendTo) {
            return ReactDOM.createPortal(panel, this.props.appendTo);
        }

        return panel;
    }

    render() {
        const containerClassName = classNames('p-password p-component p-inputwrapper', {
            'p-inputwrapper-filled': this.isFilled(),
            'p-inputwrapper-focus': this.state.focused,
            'p-input-icon-right': this.props.toggleMask
        }, this.props.className);
        const inputClassName = classNames('p-password-input', this.props.inputClassName)

        const type = this.getInputType();
        const inputProps = ObjectUtils.findDiffKeys(this.props, Password.defaultProps);
        const icon = this.renderIcon();
        const panel = this.renderPanel();

        return (
            <div ref={el => this.container = el} className={containerClassName} style={this.props.style}>
                <InputText id={this.id} ref={(el) => this.inputEl = el} {...inputProps} type={type} className={inputClassName} style={this.props.inputStyle}
                    onFocus={this.onFocus} onBlur={this.onBlur} onKeyUp={this.onKeyup} />
                {icon}
                {panel}
            </div>
        );
    }
}
