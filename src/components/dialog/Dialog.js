import React, {Component} from 'react';
import DomHandler from '../utils/DomHandler';
import classNames from 'classnames';

export class Dialog extends Component {
    
    constructor(props) {
        super(props);
        this.state = {visible: props.visible};
        this.positionInitialized = false;
        this.onCloseClick = this.onCloseClick.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(this.state.visible !== nextProps.visible) {
            if(nextProps.visible)
                this.preShow();
            else
                this.hide();
        }
        this.setState({visible: nextProps.visible});
    }

    componentDidMount() {
        if(this.state.visible && !this.positionInitialized) {
            this.initializePosition();
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.onShow && this.state.visible && prevProps !== this.state.visible) {
            this.props.onShow();
        }
    }

    initializePosition() {
        this.center();
        this.positionInitialized = true;
    }

    preShow() {
        if(!this.positionInitialized) {
            this.initializePosition();
        }

        if(this.props.modal) {
            this.enableModality();
        }
    }

    onCloseClick(event) {
        this.hide();
        event.preventDefault();
    }

    hide() {
        this.setState({visible:false});

        if(this.props.onHide) {
            this.props.onHide();
        }

        if(this.props.modal) {
            this.disableModality();
        }
    }

    center() {
        var elementWidth = DomHandler.getOuterWidth(this.container);
        var elementHeight = DomHandler.getOuterHeight(this.container);
        if(elementWidth === 0 && elementHeight === 0) {
            this.container.style.visibility = 'hidden';
            this.container.style.display = 'block';
            elementWidth = DomHandler.getOuterWidth(this.container);
            elementHeight = DomHandler.getOuterHeight(this.container);
            this.container.style.display = 'none';
            this.container.style.visibility = 'visible';
        }
        var viewport = DomHandler.getViewport();
        var x = (viewport.width - elementWidth) / 2;
        var y = (viewport.height - elementHeight) / 2;

        this.container.style.left = x + 'px';
        this.container.style.top = y + 'px';
    }

    enableModality() {
        if(!this.mask) {
            this.mask = document.createElement('div');
            this.mask.style.zIndex = DomHandler.getZindex();
            DomHandler.addMultipleClasses(this.mask, 'ui-widget-overlay ui-dialog-mask');
            document.body.appendChild(this.mask);
        }
    }

    disableModality() {
        if(this.mask) {
            document.body.removeChild(this.mask);
            this.mask = null;
        }
    }

    render() {
        var styleClass = classNames('ui-dialog ui-widget ui-widget-content ui-corner-all ui-shadow', this.props.className);
        var style = {
            display: this.state.visible ? 'block': 'none',
            width: this.props.width,
            auto: this.props.auto,
            zIndex: DomHandler.getZindex()
        };

        return (
            <div className={styleClass} style={style} ref={(el) => {this.container = el;}}>
                <div className="ui-dialog-titlebar ui-widget-header ui-helper-clearfix ui-corner-top">
                     <span className="ui-dialog-title">{this.props.header}</span>
                     <a href="#" role="button" className="ui-dialog-titlebar-icon ui-dialog-titlebar-close ui-corner-all" onClick={this.onCloseClick}>
                        <span className="fa fa-fw fa-close"></span>
                    </a>
                </div>
                <div className="ui-dialog-content ui-widget-content">
                    {this.props.children}    
                </div>
                {this.props.footer && <div className="ui-dialog-buttonpane ui-widget-content ui-helper-clearfix">
                    this.props.footer
                </div>}
            </div>
        );
    }
}

Dialog.defaultProps = {
    header: null,
    visible: false,
    width: 'auto',
    height: 'auto',
    modal: false,
    onHide: null,
    onShow: null
}

Dialog.propTypes = {
    header: React.PropTypes.any,
    visible: React.PropTypes.bool,
    width: React.PropTypes.string,
    height: React.PropTypes.string,
    modal: React.PropTypes.bool,
    onHide: React.PropTypes.func,
    onShow: React.PropTypes.func
};