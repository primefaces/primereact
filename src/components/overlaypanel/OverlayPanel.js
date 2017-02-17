import React, {Component} from 'react';
import classNames from 'classnames';
import DomHandler from '../utils/DomHandler';

export class OverlayPanel extends Component {
    
    static defaultProps = {
        dismissable: true,
        showCloseIcon: false,
        style: null,
        className: null,
        appendTo: null
    }

    static propTypes = {
        dismissable: React.PropTypes.bool,
        showCloseIcon: React.PropTypes.bool,
        style: React.PropTypes.object,
        className: React.PropTypes.string,
        appendTo: React.PropTypes.any
    }

    constructor(props) {
        super(props);
        this.onPanelClick = this.onPanelClick.bind(this);
        this.onCloseClick = this.onCloseClick.bind(this);
    }

    componentDidMount() {
        if(this.props.dismissable) {
            this.documentClickListener = this.onDocumentClick.bind(this);
            document.addEventListener('click', this.documentClickListener);
        }
    }

    componentWillUnmount() {
        if(this.documentClickListener) {
            document.removeEventListener('click', this.documentClickListener);
        }
    }

    onDocumentClick() {
        if(!this.selfClick && !this.targetEvent) {
            this.hide();
        }
        this.selfClick = false;
        this.targetEvent = false;
    }

    onPanelClick() {
        if(this.props.dismissable) {
            this.selfClick = true;
        }
    }

    onCloseClick(event) {
        this.hide();
        
        if(this.dismissable) {
            this.selfClick = true;
        }
        
        event.preventDefault();
    }

    toggle(event, target) {
        let currentTarget = (target||event.currentTarget||event.target);
                                
         if(this.isVisible())
            this.hide();
        else
            this.show(event, currentTarget);
        
        if(this.props.dismissable) {
            this.targetEvent = true;
        }
    }

    show(event, target) {
        if(this.props.dismissable) {
            this.targetEvent = true;
        }
        
        this.container.style.zIndex = DomHandler.getZindex();

        if(this.isVisible()) {
            DomHandler.absolutePosition(this.container, target);
        }
        else {
            this.container.style.display = 'block';
            DomHandler.absolutePosition(this.container, target);
            DomHandler.fadeIn(this.container, 250);
        }
    }

    hide() {
        if(this.isVisible()) {
            this.container.style.display = 'none';
        }
    }

    isVisible() {
        return this.container.offsetParent;
    }

    render() {
        var className = classNames('ui-overlaypanel ui-widget ui-widget-content ui-corner-all ui-shadow', this.props.className);
        if(this.props.showCloseIcon) {
            var closeIcon = <a href="#" className="ui-overlaypanel-close ui-state-default" onClick={this.onCloseClick}>
                                <span className="fa fa-fw fa-close"></span>
                            </a>;
        }

        return (
            <div className={className} style={this.props.style} onClick={this.onPanelClick} ref={(el) => {this.container = el;}}>
                <div className="ui-overlaypanel-content">
                    {this.props.children}
                </div>
                {closeIcon}
            </div>
        );
    }
}