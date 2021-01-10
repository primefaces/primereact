import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { InputText } from '../inputtext/InputText';
import PropTypes from 'prop-types';
import DomHandler from '../utils/DomHandler';
import { tip } from '../tooltip/Tooltip';
import ObjectUtils from '../utils/ObjectUtils';
import UniqueComponentId from '../utils/UniqueComponentId';
import { CSSTransition } from 'react-transition-group';
import { classNames } from '../utils/ClassNames';
import ConnectedOverlayScrollHandler from '../utils/ConnectedOverlayScrollHandler';
import { localeOption } from '../api/Locale';

export class Password extends Component {

    static defaultProps = {
        id: null,
        promptLabel: null,
        weakLabel: null,
        mediumLabel: null,
        strongLabel: null,
        mediumRegex: '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})',
        strongRegex: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})',
        feedback: true,
        tooltip: null,
        tooltipOptions: null,
        panelClassName: null,
        panelStyle: null
    };

    static propTypes = {
        id: PropTypes.string,
        promptLabel: PropTypes.string,
        weakLabel: PropTypes.string,
        mediumLabel: PropTypes.string,
        strongLabel:PropTypes.string,
        mediumRegex: PropTypes.string,
        strongRegex: PropTypes.string,
        feedback: PropTypes.bool,
        tooltip: PropTypes.string,
        tooltipOptions: PropTypes.object,
        panelClassName: PropTypes.string,
        panelStyle: PropTypes.object
    };

    constructor(props) {
        super(props);

        this.state = {
            overlayVisible: false,
            meter: null,
            infoText: this.promptLabel()
        };

        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onKeyup = this.onKeyup.bind(this);
        this.onOverlayEnter = this.onOverlayEnter.bind(this);
        this.onOverlayEntered = this.onOverlayEntered.bind(this);
        this.onOverlayExit = this.onOverlayExit.bind(this);

        this.id = this.props.id || UniqueComponentId();
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

    showOverlay() {
        this.setState({ overlayVisible: true });
    }

    hideOverlay() {
        this.setState({ overlayVisible: false });
    }

    onOverlayEnter() {
        this.panel.style.zIndex = String(DomHandler.generateZIndex());
        this.panel.style.minWidth = DomHandler.getOuterWidth(this.inputEl) + 'px';
        DomHandler.absolutePosition(this.panel, this.inputEl);
    }

    onOverlayEntered() {
        this.bindScrollListener();
        this.bindResizeListener();
    }

    onOverlayExit() {
        this.unbindScrollListener();
        this.unbindResizeListener();
    }

    onFocus(e) {
        if (this.props.feedback) {
            this.showOverlay();
        }

        if (this.props.onFocus) {
            this.props.onFocus(e);
        }
    }

    onBlur(e) {
        if (this.props.feedback) {
            this.hideOverlay();
        }

        if (this.props.onBlur) {
            this.props.onBlur(e);
        }
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
        if (prevProps.tooltip !== this.props.tooltip) {
            if (this.tooltip)
                this.tooltip.updateContent(this.props.tooltip);
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

    render() {
        const panelClassName = classNames('p-password-panel p-component', this.props.panelClassName);
        let inputProps = ObjectUtils.findDiffKeys(this.props, Password.defaultProps);
        let { strength, width } = this.state.meter || { strength: '', width: '0%' };

        return (
            <>
                <InputText id={this.id} ref={(el) => this.inputEl = ReactDOM.findDOMNode(el)} {...inputProps} type="password" onFocus={this.onFocus} onBlur={this.onBlur} onKeyUp={this.onKeyup} />

                <CSSTransition classNames="p-connected-overlay" in={this.state.overlayVisible} timeout={{ enter: 120, exit: 100 }}
                    unmountOnExit onEnter={this.onOverlayEnter} onEntered={this.onOverlayEntered} onExit={this.onOverlayExit}>
                    <div ref={(el) => this.panel = el} className={panelClassName} style={this.props.panelStyle}>
                        <div className="p-password-meter">
                            <div className={`p-password-strength ${strength}`} style={{ width: width }}></div>
                        </div>
                        <div className="p-password-info">
                            {this.state.infoText}
                        </div>
                    </div>
                </CSSTransition>
            </>
        );
    }
}
