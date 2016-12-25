import React, {Component} from 'react';
import DomHandler from '../utils/DomHandler';
import classNames from 'classnames';

export class Dialog extends Component {
    
    constructor(props) {
        super(props);
        this.state = {visible: props.visible};
        this.positionInitialized = false;
        this.domHandler = new DomHandler();
    }

    componentWillReceiveProps(nextProps) {
        if(this.state.visible !== nextProps.visible && nextProps.visible) {
            this.show();
        }
    }

    componentDidMount() {
        if(this.state.visible) {
            this.show();
        }
    }

    show() {
        console.log('showing');
        if(!this.positionInitialized) {
            this.center();
            this.positionInitialized = true;
        }
        
        //this.container.style.zIndex = String(++DomHandler.zindex);
        
        /*if(this.modal) {
            this.enableModality();
        }*/
    }

    center() { 
        var elementWidth = this.domHandler.getOuterWidth(this.container);
        var elementHeight = this.domHandler.getOuterHeight(this.container);
        if(elementWidth === 0 && elementHeight === 0) {
            this.container.style.visibility = 'hidden';
            this.container.style.display = 'block';
            elementWidth = this.domHandler.getOuterWidth(this.container);
            elementHeight = this.domHandler.getOuterHeight(this.container);
            this.container.style.display = 'none';
            this.container.style.visibility = 'visible';
        }
        var viewport = this.domHandler.getViewport();
        var x = (viewport.width - elementWidth) / 2;
        var y = (viewport.height - elementHeight) / 2;

        this.container.style.left = x + 'px';
        this.container.style.top = y + 'px';
    }

    render() {
        var styleClass = classNames('ui-dialog ui-widget ui-widget-content ui-corner-all ui-shadow', this.props.className);
        var style = {
            display: this.props.visible ? 'block': 'none',
            width: this.props.width,
            auto: this.props.auto
        };

        return (
            <div className={styleClass} style={style} ref={(el) => {this.container = el;}}>
                <div className="ui-dialog-titlebar ui-widget-header ui-helper-clearfix ui-corner-top">
                     <span className="ui-dialog-title">{this.props.header}</span>
                     <a href="#" role="button" className="ui-dialog-titlebar-icon ui-dialog-titlebar-close ui-corner-all">
                        <span className="fa fa-fw fa-close"></span>
                    </a>
                </div>
                <div className="ui-dialog-content ui-widget-content">
                    {this.props.children}    
                </div>
                <div className="ui-dialog-buttonpane ui-widget-content ui-helper-clearfix">
                    {this.props.footer}
                </div>
            </div>
        );
    }
}

Dialog.defaultProps = {
    header: null,
    visible: false,
    width: 'auto',
    height: 'auto',
    modal: false
}

Dialog.propTypes = {
    header: React.PropTypes.any,
    visible: React.PropTypes.bool,
    width: React.PropTypes.string,
    height: React.PropTypes.string,
    modal: React.PropTypes.bool
};