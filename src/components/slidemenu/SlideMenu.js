import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactDOM from 'react-dom';
import DomHandler from '../utils/DomHandler';

export class SlideMenuSub extends Component {
    static defaultProps = {     
        item: null,
        root: false,
        backLabel: 'Back',
        menuWidth: null,
        effectDuration: null,       
        easing: 'ease-out',
        slideMenu: null,
        slideMenuLeft: null,
        onMenuItemClick: null,
        isAnimating: null,
        setAnimating: null
    }

    static propsTypes = {
        item: PropTypes.any,
        root: PropTypes.bool,
        backLabel: PropTypes.string,
        menuWidth: PropTypes.any,
        effectDuration: PropTypes.any,       
        easing: PropTypes.string,
        slideMenu: PropTypes.any,
        slideMenuLeft: PropTypes.string,
        onMenuItemClick: PropTypes.func,
        isAnimating: PropTypes.func,
        setAnimating: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.state = {activeItemIndex: null};
    }
    

    itemClick(event, item, index) {
        if(item.disabled) {
            event.preventDefault();
            return;
        }
        
        if(!item.url) {
            event.preventDefault();
        }
                
        if(item.command) {            
            item.command({
                originalEvent: event,
                item: item
            });
        }

        if(item.items && !this.props.isAnimating()) {
            this.props.onMenuItemClick();
            
            this.setState({activeItemIndex: index});
            this.props.setAnimating(true);
            setTimeout(() => this.props.setAnimating(false), this.props.effectDuration);
        }
    }

    render() {
        var menuListClass = classNames('ui-menu-list', {
            'ui-helper-reset ui-menu-rootlist': this.props.root, 
            'ui-widget-content ui-corner-all ui-helper-clearfix ui-menu-child': !this.props.root
        }),
        menuListStyle = {
                'width': this.props.menuWidth, 
                'left': this.props.root ? this.props.slideMenuLeft : this.props.menuWidth,
                'transitionProperty': this.props.root ? 'left' : 'none',
                'transitionDuration': this.props.effectDuration + 'ms',
                'transitionTimingFunction': this.props.easing
            };

        var menuMap = this.props.root ? this.props.item : this.props.item.items;

        return (
            <ul className={menuListClass} style={menuListStyle}>
                {
                    menuMap && menuMap.map((child, index) => {
                        if(child.separator) {
                            return <li key={'item_' + index} className="ui-menu-separator ui-widget-content" />;
                        }
                        else {
                            var menuitemClass = classNames('ui-menuitem ui-widget ui-corner-all', {
                                'ui-menu-parent': child.items,
                                'ui-slidemenuitem-active': index===this.state.activeItemIndex
                                }),
                                menuLinkClass = classNames('ui-menuitem-link ui-corner-all', {
                                    'ui-menuitem-link-parent':child.items,
                                    'ui-state-disabled':child.disabled
                                }),
                                menuiconClass = classNames('ui-menuitem-icon fa fa-fw', child.icon);

                            return (
                                <li key={'item_' + index} className={menuitemClass}>
                                    <a href={child.url||'#'} className={menuLinkClass} target={child.target} onClick={(e) => this.itemClick(e, child, index)}>
                                        {child.items && <span className="ui-submenu-icon fa fa-fw fa-caret-right"></span>}
                                        {child.icon && <span className={menuiconClass}></span>}
                                        <span className="ui-menuitem-text">{child.label}</span>
                                    </a>
                                    {child.items && <SlideMenuSub item={child} menuWidth={this.props.menuWidth} onMenuItemClick={this.props.onMenuItemClick} isAnimating={this.props.isAnimating} setAnimating={this.props.setAnimating}/>}
                                </li>
                            );
                        }
                    })
                }
            </ul>
        );
    }
}

export class SlideMenu extends Component {
    static defaultProps = {
        id: null,
        model: null,
        popup: false,
        style: null,
        className: null,
        easing: 'ease-out',
        effectDuration: 250,
        backLabel: 'Back',
        menuWidth: 190,
        viewportHeight: 175
    }

    static propsTypes = {
        id: PropTypes.string,
        model: PropTypes.array,
        popup: PropTypes.bool,
        style: PropTypes.object,
        className: PropTypes.string,
        easing: PropTypes.string,
        effectDuration: PropTypes.number,
        backLabel: PropTypes.string,
        menuWidth: PropTypes.number,
        viewportHeight: PropTypes.number
    }

    constructor(props) {
        super(props);
        this.left = 0;
        this.animating = false;
        this.onClick = this.onClick.bind(this);
        this.goBack = this.goBack.bind(this);
        this.onMenuItemClick = this.onMenuItemClick.bind(this);
        this.isAnimating = this.isAnimating.bind(this);
        this.setAnimating = this.setAnimating.bind(this);
    }

    onMenuItemClick() {
        this.left -= this.props.menuWidth;
        this.rootSlideMenuSub.style.left = this.left + 'px';
        this.updateBackward();
    }

    toggle(event) {
        if(this.container.offsetParent)
            this.hide();
        else
            this.show(event);
    }
    
    show(event) {
        this.preventDocumentDefault = true;
        this.container.style.display = 'block';
        DomHandler.absolutePosition(this.container, event.target);
        DomHandler.fadeIn(this.container, 250);
    }
    
    hide() {
        this.container.style.display = 'none';
    }
    
    onClick(event) {
        this.preventDocumentDefault = true;
    }
    
    goBack() {
        this.left += this.props.menuWidth;
        this.rootSlideMenuSub.style.left = this.left + 'px';
        this.updateBackward();
    }

    updateBackward() {
        this.backward.style.display = this.left ? 'block' : 'none';
    }

    isAnimating() {
        return this.animating;
    }

    setAnimating(_animating) {
        this.animating = _animating;
    }

    componentDidMount() {
        if(this.props.popup) {
            this.slideMenuContent.style.height = this.props.viewportHeight - DomHandler.getHiddenElementOuterHeight(this.backward) + 'px';

            this.documentClickListener = () => {
                if(!this.preventDocumentDefault) {
                    this.hide();
                }
                this.preventDocumentDefault = false;
            }

            document.addEventListener('click', this.documentClickListener);     
        } 
        else {
            this.slideMenuContent.style.height = this.props.viewportHeight + 'px';
        }
    }

    componentWillUnmount() {
        if (this.documentClickListener) {
            document.removeEventListener('click', this.documentClickListener);
        }
    }
    
    render() {
        var menuClass = classNames('ui-menu ui-slidemenu ui-widget ui-widget-content ui-corner-all', this.props.className, {
            'ui-menu-dynamic ui-shadow': this.props.popup
        });
        return (
            <div id={this.props.id} ref={(el) => this.container = el} className={menuClass} style={this.props.style} onClick={this.onClick}>
                <div className="ui-slidemenu-wrapper" style={{'height': this.props.viewportHeight + 'px'}}>
                    <div ref={(el) => this.slideMenuContent = el} className="ui-slidemenu-content">
                        <SlideMenuSub ref={(el) => this.rootSlideMenuSub = ReactDOM.findDOMNode(el)} onMenuItemClick={this.onMenuItemClick} item={this.props.model} slideMenuLeft={0} root={true} menuWidth={this.props.menuWidth} 
                            effectDuration={this.props.effectDuration} easing={this.props.easing} isAnimating={this.isAnimating} setAnimating={this.setAnimating}></SlideMenuSub>
                    </div>
                    <div ref={(el) => this.backward = el} className="ui-slidemenu-backward ui-widget-header ui-corner-all" style={{'display': this.left ? 'block' : 'none'}} onClick={this.goBack}>
                        <span className="fa fa-fw fa-caret-left"></span> <span>{this.props.backLabel}</span>
                    </div>
                </div>
            </div>
        )
    }
}