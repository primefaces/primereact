import React, {Component} from 'react';
import DomHandler from '../utils/DomHandler';
import classNames from 'classnames';

export class Footer extends Component {    
    render() {
        return (<div>{this.props.children}</div>);
    }
}

export class Dialog extends Component {

    static defaultProps = {
        header: null,
        visible: false,
        width: 'auto',
        height: 'auto',
        modal: false,
        onHide: null,
        onShow: null,
        draggable: true
    }

    static propTypes = {
        header: React.PropTypes.any,
        visible: React.PropTypes.bool,
        width: React.PropTypes.string,
        height: React.PropTypes.string,
        modal: React.PropTypes.bool,
        onHide: React.PropTypes.func,
        onShow: React.PropTypes.func,
        draggable: React.PropTypes.bool
    };
    
    constructor(props) {
        super(props);
        this.state = {visible: props.visible};
        this.positionInitialized = false;
        this.onCloseClick = this.onCloseClick.bind(this);
        this.initDrag = this.initDrag.bind(this);
        this.endDrag = this.endDrag.bind(this);
        this.moveOnTop = this.moveOnTop.bind(this);
    }

    componentWillUpdate(nextProps) {
        if(this.state.visible !== nextProps.visible) {
            if(nextProps.visible)
                this.onShow();
            else
                this.onHide();

            this.setState({visible: nextProps.visible});
        }
    }

    componentDidMount() {
        if(this.state.visible) {
            this.onShow();
        }

        if(this.props.draggable) {
            this.documentDragListener = this.onDrag.bind(this);
            document.addEventListener('mousemove', this.documentDragListener);
        }
    }

    componentWillUnmount() {
        if(this.documentDragListener) {
            document.removeEventListener('mousemove', this.documentDragListener);
        }
    }

    onDocumentClick() {
        console.log(this);
    }

    initializePosition() {
        this.center();
        this.positionInitialized = true;
    }

    onShow() {
        if(!this.positionInitialized) {
            this.initializePosition();
        }

        if(this.props.modal) {
            this.enableModality();
        }

        if(this.props.onShow) {
            this.props.onShow();
        }
    }

    onCloseClick(event) {
        this.hide();
        event.preventDefault();
    }

    onHide() {
        if(this.props.modal) {
            this.disableModality();
        }
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

    initDrag(event) {
        if(this.props.draggable) {
            this.dragging = true;
            this.lastPageX = event.pageX;
            this.lastPageY = event.pageY;
        }
    }

    onDrag(event) {
        if(this.dragging) {
            var deltaX = event.pageX - this.lastPageX;
            var deltaY = event.pageY - this.lastPageY;
            var leftPos = parseFloat(this.container.style.left);
            var topPos = parseFloat(this.container.style.top);

            this.container.style.left = leftPos + deltaX + 'px';
            this.container.style.top = topPos + deltaY + 'px';
            
            this.lastPageX = event.pageX;
            this.lastPageY = event.pageY;
        }
    }

    endDrag(event) {
        if(this.props.draggable) {
            this.dragging = false;
        }
    }

    moveOnTop() {
        this.container.style.zIndex = DomHandler.getZindex();
    }

    render() {
        var styleClass = classNames('ui-dialog ui-widget ui-widget-content ui-corner-all ui-shadow', this.props.className);
        var style = {
            display: this.state.visible ? 'block': 'none',
            width: this.props.width,
            auto: this.props.auto,
            zIndex: DomHandler.getZindex()
        };

        var content =  React.Children.map(this.props.children, (element, i) => {
                return (element && element.type !== Footer) && (<div className="ui-dialog-content ui-widget-content">{element}</div>);
            }),
            footer = React.Children.map(this.props.children, (element, i) => {
                return (element && element.type === Footer) && <Footer> {element.props.children}</Footer>
            });

        return (
            <div className={styleClass} style={style} ref={(el) => {this.container = el;}} onMouseDown={this.moveOnTop}>
                <div className="ui-dialog-titlebar ui-widget-header ui-helper-clearfix ui-corner-top" onMouseDown={this.initDrag} onMouseUp={this.endDrag}>
                     <span className="ui-dialog-title">{this.props.header}</span>
                     <a href="#" role="button" className="ui-dialog-titlebar-icon ui-dialog-titlebar-close ui-corner-all" onClick={this.onCloseClick}>
                        <span className="fa fa-fw fa-close"></span>
                    </a>
                </div>
                {content}
                {footer}
            </div>
        );
    }
}