import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { InputText } from '../inputtext/InputText';
import PropTypes from 'prop-types';
import DomHandler from '../utils/DomHandler';
import { tip } from '../tooltip/Tooltip';
import ObjectUtils from '../utils/ObjectUtils';
import UniqueComponentId from '../utils/UniqueComponentId';
import { CSSTransition } from 'react-transition-group';
import classNames from 'classnames';
import ConnectedOverlayScrollHandler from '../utils/ConnectedOverlayScrollHandler';

export class Password extends Component {

    static defaultProps = {
        id: null,
        promptLabel: 'Enter a password',
        weakLabel: 'Weak',
        mediumLabel: 'Medium',
        strongLabel: 'Strong',
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
            meterPosition: '',
            infoText: props.promptLabel
        };

        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onKeyup = this.onKeyup.bind(this);
        this.onOverlayEnter = this.onOverlayEnter.bind(this);
        this.onOverlayEntered = this.onOverlayEntered.bind(this);
        this.onOverlayExit = this.onOverlayExit.bind(this);

        this.id = this.props.id || UniqueComponentId();
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
            let value = e.target.value,
            label = null,
            meterPos = null;

            if(value.length === 0) {
                label = this.props.promptLabel;
                meterPos = '0px 0px';
            }
            else {
                var score = this.testStrength(value);

                if(score < 30) {
                    label = this.props.weakLabel;
                    meterPos = '0px -10px';
                }
                else if(score >= 30 && score < 80) {
                    label = this.props.mediumLabel;
                    meterPos = '0px -20px';
                }
                else if(score >= 80) {
                    label = this.props.strongLabel;
                    meterPos = '0px -30px';
                }
            }

            this.setState({
                meterPosition: meterPos,
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
        let grade = 0;
        let val;

        val = str.match('[0-9]');
        grade += this.normalize(val ? val.length : 1/4, 1) * 25;

        val = str.match('[a-zA-Z]');
        grade += this.normalize(val ? val.length : 1/2, 3) * 10;

        val = str.match('[!@#$%^&*?_~.,;=]');
        grade += this.normalize(val ? val.length : 1/6, 1) * 35;

        val = str.match('[A-Z]');
        grade += this.normalize(val ? val.length : 1/6, 1) * 30;

        grade *= str.length / 8;

        return grade > 100 ? 100 : grade;
    }

    normalize(x, y) {
        let diff = x - y;

        if(diff <= 0)
            return x / y;
        else
            return 1 + 0.5 * (x / (x + y/4));
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

        return (
            <>
                <InputText id={this.id} ref={(el) => this.inputEl = ReactDOM.findDOMNode(el)} {...inputProps} type="password" onFocus={this.onFocus} onBlur={this.onBlur} onKeyUp={this.onKeyup} />

                <CSSTransition classNames="p-connected-overlay" in={this.state.overlayVisible} timeout={{ enter: 120, exit: 100 }}
                    unmountOnExit onEnter={this.onOverlayEnter} onEntered={this.onOverlayEntered} onExit={this.onOverlayExit}>
                    <div ref={(el) => this.panel = el} className={panelClassName} style={this.props.panelStyle}>
                        <div className="p-password-meter" style={{ backgroundPosition: this.state.meterPosition }}></div>
                        <div className="p-password-info">
                            {this.state.infoText}
                        </div>
                    </div>
                </CSSTransition>
            </>
        );
    }
}
