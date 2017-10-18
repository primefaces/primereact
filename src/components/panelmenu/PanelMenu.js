import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class PanelMenuSub extends Component {
    
    static defaultProps = {
        item: null,
        expanded: false
    }

    static propsTypes = {
        item: PropTypes.any,
        expanded: PropTypes.bool
    }

    constructor(props) {
        super(props);
        this.item = this.props.item;
    }
    
    render() {
        let items = this.item && this.item.items,
            menuitems = null;

        if(items) {
            menuitems = items.map((child, index) => {
                return <PanelMenuItem key={'panelmenuitem_' + index} child={child} tabIndex={this.props.expanded ? null : '-1'} index={index} />
            });
        }

        return (<ul className="ui-menu-list ui-helper-reset" style={{display: this.props.expanded ? 'block' : 'none'}}>
                    {menuitems}
                </ul>);
    }
}

export class PanelMenuItem extends Component {

    static defaultProps = {
        child: null,
        tabIndex: null,
        index: null
    }

    static propsTypes = {
        child: PropTypes.any,
        tabIndex: PropTypes.bool,
        index: PropTypes.any
    }

    constructor(props) {
        super(props);
        this.child = this.props.child;
        this.state = {expanded: this.child.expanded};
    }

    handleClick(event, item) {       
        if(item.disabled) {
            event.preventDefault();
            return;
        }

        this.setState({expanded: !this.state.expanded});
        
        if(!item.url) {
            event.preventDefault();
        }
                   
        if(item.command) {
            item.command({
                originalEvent: event,
                item: item
            });
        }
    }

    render() {
        if(this.child.separator) {
            return <li key={'separator_' + this.props.index} className="ui-menu-separator ui-widget-content" />
        }
        else {
            let menuitemClass = classNames('ui-menuitem ui-corner-all', this.child.className, {
                'ui-menu-parent': this.child.items
            }),
            menuitemLinkClass = classNames('ui-menuitem-link ui-corner-all', {
                'ui-menuitem-link-hasicon': this.child.icon&&this.child.items,
                'ui-state-disabled': this.child.disabled
            }),
            panelMenuIconClass = classNames('ui-panelmenu-icon fa fa-fw', {
                'fa-caret-right': !this.state.expanded,
                'fa-caret-down': this.state.expanded
            }),
            menuitemIconClass = classNames('ui-menuitem-icon fa fa-fw', this.child.icon);

            let panelMenuIcon = this.child.items && (<span className={panelMenuIconClass} />),
            menuitemIcon = this.child.icon && (<span className={menuitemIconClass} />),
            menuitemText = <span className="ui-menuitem-text">{this.child.label}</span>;


            return (<li key={'menuitem_' + this.props.index} className={menuitemClass} style={this.child.style}>
                        <a href={this.child.url||'#'} className={menuitemLinkClass} tabIndex={this.props.tabIndex}
                            onClick={(e) => this.handleClick(e, this.child)} target={this.child.target}>
                            {panelMenuIcon}
                            {menuitemIcon}
                            {menuitemText}                        
                        </a>

                        {this.child.items && <PanelMenuSub item={this.child} expanded={this.state.expanded} />}
                    </li>)
        }
    }
}

export class PanelMenuHeaderItems extends Component {
    static defaultProps = {
        item: null,
        first: false,
        last: false
    }

    static propsTypes = {
        item: PropTypes.array,
        first: PropTypes.bool,
        last: PropTypes.bool
    }

    constructor(props) {
        super(props);
        this.item = this.props.item;
        this.state = {expanded: this.item.expanded};
    }

    handleClick(event, item) {        
        if(item.disabled) {
            event.preventDefault();
            return;
        }
        
        this.setState({expanded: !this.state.expanded});
        
        if(!item.url) {
            event.preventDefault();
        }
                   
        if(item.command) {
            item.command({
                originalEvent: event,
                item: item
            });
        }
    }

    render() {
        let panelMenuHeaderClass = classNames('ui-widget ui-panelmenu-header ui-state-default', this.item.className, {
            'ui-corner-top': this.props.first,
            'ui-corner-bottom': this.props.last&&!this.state.expanded,
            'ui-state-active': this.state.expanded,
            'ui-state-disabled': this.item.disabled
        }),
        headerLinkClass = classNames({'ui-panelmenu-headerlink-hasicon': this.item.icon}),
        panelMenuIconClass = classNames('ui-panelmenu-icon fa', {
            'fa-caret-right': !this.state.expanded,
            'fa-caret-down': this.state.expanded
        }),
        menuitemIconClass = classNames('ui-menuitem-icon fa', this.item.icon);

        let panelMenuIcon = this.item.items && <span className={panelMenuIconClass} />,
            menuitemIcon = this.item.icon && <span className={menuitemIconClass} />,
            menuitemText = <span className="ui-menuitem-text">{this.item.label}</span>;

        let panelMenuContentWrapperClass = classNames('ui-panelmenu-content-wrapper', {
            'ui-panelmenu-content-wrapper-overflown': !this.state.expanded
        }),
        panelMenuContent = this.item.items && (<div className={panelMenuContentWrapperClass} style={{display: this.state.expanded ? 'block' : 'none'}}>
                                    <div className="ui-panelmenu-content ui-widget-content">
                                        <PanelMenuSub item={this.item} expanded={true} />
                                    </div>
                                </div>);

        return (<div className="ui-panelmenu-panel">
                    <div className={panelMenuHeaderClass} style={this.item.style}>
                        <a href={this.item.url||'#'} className={headerLinkClass} onClick={(e) => this.handleClick(e, this.item)} target={this.item.target}>
                            {panelMenuIcon}
                            {menuitemIcon}
                            {menuitemText}
                        </a>
                    </div>
                    {panelMenuContent}
                </div>)
    }
}

export class PanelMenu extends Component {
    
    static defaultProps = {
        id: null,
        model: null,
        style: null,
        className: null
    }

    static propsTypes = {
        id: PropTypes.string,
        model: PropTypes.array,
        style: PropTypes.object,
        className: PropTypes.string
    }

    render() {
        let className = classNames('ui-panelmenu ui-widget', this.props.className),
            panel = null;

        if(this.props.model) {
            let length = this.props.model.length;

            panel = this.props.model.map((item, index) => {
                return <PanelMenuHeaderItems key={'menuItem_' + index} item={item} first={index === 0} last={length === index}/>
            });
        }
        
        return (<div id={this.props.id} className={className} style={this.props.style}>
                    {panel}
                </div>)
    }
}