import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class PanelMenu extends Component {
    static defaultProps = {
        model:null,
        style: null,
        styleClass: null
    }

    static propsTypes = {
        model:PropTypes.array,
        style: PropTypes.any,
        styleClass: PropTypes.string
    }

    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        var divClass=classNames('ui-panelmenu ui-widget',this.props.styleClass);

        return (
            <div className={divClass} style={this.props.style} ref={el=>this.container=el} >
                {this.props.model && this.props.model.map((item,index)=>{
                    return <PanelMenuItem item={item} index={index} length={this.props.model.length} key={index}/>})}
            </div>
        );
    }
}

export class PanelMenuItem extends Component{
    static defaultProps = {
        item:null,
        index:null,
        length:null,
    }

    static propsTypes = {
        item:PropTypes.any,
        index:PropTypes.any,
        length:PropTypes.any
    }

    constructor(props) {
        super(props);
        this.item=this.props.item;
        this.state = {expanded:this.item.expanded};
    }
    itemClick(event,item){
        if(item.disabled) {
            event.preventDefault();
            return;
        }
        this.setState({expanded:!this.state.expanded});
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
    render(){

        var subPanel=classNames('ui-panelmenu-content-wrapper',{'ui-panelmenu-content-wrapper-overflown': !this.state.expanded})
        var iconClass=classNames('ui-menuitem-icon fa fa-fw',this.item.icon?this.item.icon:null);
        var panelIcon=classNames('ui-panelmenu-icon fa',{'fa-caret-right':!this.state.expanded},{' fa-caret-down':this.state.expanded});
        var itemClass=classNames('ui-widget ui-panelmenu-header ui-state-default', this.item.styleClass, {'ui-state-active':this.state.expanded},
            {'ui-state-disabled':this.item.disabled},{'ui-corner-top':this.props.index===0},{'ui-corner-bottom':this.props.index===this.props.length-1 &&!this.state.expanded});

        return (
            <div className="ui-panelmenu-panel" key={this.props.index}>
                <div className={itemClass} style={this.item.style}>
                    {this.item.url?
                        <a href={this.item.url || '#'} className={{'ui-panelmenu-headerlink-hasicon':this.item.icon}} target={this.item.target} onClick={event=>this.itemClick(event,this.item)}>
                            {this.item.items && <span className={panelIcon}></span>}
                            {this.item.icon && <span className={iconClass}></span>}
                            <span className="ui-menuitem-text">{this.item.label}</span>
                        </a>:
                        <a href={'#'} className={{'ui-panelmenu-headerlink-hasicon':this.item.icon}} target={this.item.target} onClick={event=>this.itemClick(event,this.item)}>
                            {this.item.items && <span className={panelIcon}></span>}
                            {this.item.icon && <span className={iconClass}></span>}
                            <span className="ui-menuitem-text">{this.item.label}</span>
                        </a>
                    }
                </div>
                {this.item.items && <div className={subPanel} style={{height:!this.state.expanded?'0px':'auto'}} >
                    <div className="ui-panelmenu-content ui-widget-content">
                        <SubItem item={this.item} expanded={true}/>
                    </div>
                </div>}
        </div>);
    }
}
class SubItem extends Component{
    static defaultProps = {
        item:null,
        expanded:null,
    }

    static propsTypes = {
        item:PropTypes.any,
        expanded:PropTypes.bool
    }

    constructor(props) {
        super(props);
        this.item=this.props.item;
        this.state = {};
    }

    render(){
        return(
            <ul className="ui-menu-list ui-helper-reset" style={{height:this.props.expanded?'auto':'0px'}}>
                {this.item.items && this.item.items.map((child,index)=>{
                    return <Item child={child} tabIndex={this.item.expanded} index={index} key={index}/>;
                })}
            </ul>
        );
    }
}
class Item extends Component{
    static defaultProps = {
        child:null,
        tabIndex:null,
        index:null
    }

    static propsTypes = {
        child:PropTypes.any,
        tabIndex:PropTypes.bool,
        index:PropTypes.any
    }

    constructor(props) {
        super(props);
        this.child=this.props.child;
        this.state = {expanded:this.child.expanded};
    }
    itemClick(event,item){
        if(item.disabled) {
            event.preventDefault();
            return;
        }
        this.setState({expanded:!this.state.expanded})
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

    render(){
        var panelClass=classNames('ui-panelmenu-icon fa fa-fw',{'fa-caret-right':!this.state.expanded},{' fa-caret-down':this.state.expanded})
        var iconClass=classNames('ui-menuitem-icon fa fa-fw',this.child.icon?this.child.icon:null);
        var aClass=classNames('ui-menuitem-link ui-corner-all',{'ui-menuitem-link-hasicon':this.child.icon&&this.child.items,'ui-state-disabled':this.child.disabled})
        var listClass=classNames('ui-menuitem ui-corner-all',{'ui-menu-parent':this.child.items},this.child.styleClass);
        return(
            this.child.separator?
                <li className="ui-menu-separator ui-widget-content" key={this.props.index}/>:
                <li className={listClass} style={this.child.style}  key={this.props.index}>
                    {this.child.url?
                        <a className={aClass} href={this.child.url || '#'} target={this.child.target} tabIndex={!this.props.tabIndex?null:'-1'} onClick={event=>{this.itemClick(event,this.child);}}>
                            {this.child.items && <span className={panelClass}></span>}
                            {this.child.icon && <span className={iconClass}></span>}
                            <span className="ui-menuitem-text">{this.child.label}</span>
                        </a>:
                        <a className={aClass} href={'#'} target={this.child.target} tabIndex={!this.props.tabIndex?null:'-1'} onClick={event=>{this.itemClick(event,this.child);}}>
                            {this.child.items && <span className={panelClass}></span>}
                            {this.child.icon && <span className={iconClass}></span>}
                            <span className="ui-menuitem-text">{this.child.label}</span>
                        </a>}
                    {this.child.items && <SubItem item={this.child} expanded={this.state.expanded}/>}
                </li>
        );
    }
}