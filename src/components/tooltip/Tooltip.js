import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DomHandler from '../utils/DomHandler';


export class Tooltip extends Component {

    static defaultProps = {
        title:null,
        tooltipPosition:'right',
        tooltipEvent:'hover',
        positionStyle:'absolute',
        tooltipDisabled:false,
        hideDelay:null,
        showDelay:null,
        tooltipStyleClass:null,
        escape:true
    };

    static propTypes = {
        title:PropTypes.string,
        tooltipPosition:PropTypes.string,
        tooltipEvent:PropTypes.string,
        positionStyle:PropTypes.string,
        tooltipDisabled:PropTypes.bool,
        hideDelay:PropTypes.number,
        showDelay:PropTypes.number,
        tooltipStyleClass:PropTypes.string,
        escape:PropTypes.bool
    };

    constructor() {
        super();
        this.state = {active:false};
    }

    onMouseEnter(event) {
        if(this.props.tooltipEvent === 'hover') {
            this.active();
        }
    }

    onMouseLeave(event){
        if(this.props.tooltipEvent === 'hover') {
            this.deactive();
        }
    }

    onFocus(event) {
        if(this.props.tooltipEvent === 'focus') {
            this.active();
        }
    }

    onBlur(event){
        if(this.props.tooltipEvent === 'focus') {
            this.deactive();
        }
    }
    active(){
        if(this.hideTimeout){
            clearTimeout(this.hideTimeout);
        }
        if(this.props.showDelay){
            this.showTimeout=setTimeout(()=>{this.show()},this.props.showDelay)
        }
        else
            this.show();
    }
    deactive(){
        if(this.showTimeout) {
            clearTimeout(this.showTimeout);
        }

        if(this.props.hideDelay)
            this.hideTimeout = setTimeout(() => { this.hide() }, this.props.hideDelay);
        else
            this.hide();
    }
    show(){
        if(this.props.tooltipDisabled){
            return;
        }
        if(this.props.tooltipStyleClass) {
            this.container.className = this.container.className + ' ' + this.props.tooltipStyleClass;
        }

        this.container.style.zIndex = DomHandler.getZindex();
        DomHandler.fadeIn(this.container, 250);
        DomHandler.removeClass(this.container, 'ui-helper-hidden');
        this.container.style.display = 'inline-block';
        if(this.props.escape){
            this.tooltipText.innerHTML=this.props.title;
        }
        else{
            this.textNode=document.createTextNode(this.props.title)
            this.tooltipText.appendChild(this.textNode);
        }
        this.align();

    }

    hide(){
        DomHandler.addClass(this.container, 'ui-helper-hidden');
        this.container.style.display = 'none';
        if(!this.props.escape)
            this.tooltipText.removeChild(this.textNode)
    }

    align() {
        let position = this.props.tooltipPosition;
        switch(position) {
            case 'top':
                this.alignTop();
                if(this.isOutOfBounds()) {
                    this.alignBottom();
                }
                break;

            case 'bottom':
                this.alignBottom();
                if(this.isOutOfBounds()) {
                    this.alignTop();
                }
                break;

            case 'left':
                this.alignLeft();
                if(this.isOutOfBounds()) {
                    this.alignRight();

                    if(this.isOutOfBounds()) {
                        this.alignTop();

                        if(this.isOutOfBounds()) {
                            this.alignBottom();
                        }
                    }
                }
                break;

            case 'right':
                this.alignRight();
                if(this.isOutOfBounds()) {
                    this.alignLeft();

                    if(this.isOutOfBounds()) {
                        this.alignTop();

                        if(this.isOutOfBounds()) {
                            this.alignBottom();
                        }
                    }
                }
                break;
            default:
                ;
        }
    }
    getHostOffset() {
        let offset = this.element.getBoundingClientRect();
        let targetLeft = offset.left + DomHandler.getWindowScrollLeft();
        let targetTop = offset.top + DomHandler.getWindowScrollTop();
        return {left: targetLeft, top: targetTop};
    }

    alignRight() {
        this.preAlign();
        this.container.className = 'ui-tooltip ui-widget ui-tooltip-right';
        let hostOffset = this.getHostOffset();
        let left = hostOffset.left + DomHandler.getOuterWidth(this.element);
        let top = hostOffset.top + (DomHandler.getOuterHeight(this.element) - DomHandler.getOuterHeight(this.container)) / 2;
        this.container.style.left = left + 'px';
        this.container.style.top = top + 'px';
    }

    alignLeft() {
        this.preAlign();
        this.container.className = 'ui-tooltip ui-widget ui-tooltip-left';
        let hostOffset = this.getHostOffset();
        let left = hostOffset.left - DomHandler.getOuterWidth(this.container);
        let top = hostOffset.top + (DomHandler.getOuterHeight(this.element) - DomHandler.getOuterHeight(this.container)) / 2;
        this.container.style.left = left + 'px';
        this.container.style.top = top + 'px';
    }

    alignTop() {
        this.preAlign();
        this.container.className = 'ui-tooltip ui-widget ui-tooltip-top';
        let hostOffset = this.getHostOffset();
        let left = hostOffset.left + (DomHandler.getOuterWidth(this.element) - DomHandler.getOuterWidth(this.container)) / 2;
        let top = hostOffset.top - DomHandler.getOuterHeight(this.container);
        this.container.style.left = left + 'px';
        this.container.style.top = top + 'px';
    }

    alignBottom() {
        this.preAlign();
        this.container.className = 'ui-tooltip ui-widget ui-tooltip-bottom';
        let hostOffset = this.getHostOffset();
        let left = hostOffset.left + (DomHandler.getOuterWidth(this.element) - DomHandler.getOuterWidth(this.container)) / 2;
        let top = hostOffset.top + DomHandler.getOuterHeight(this.element);
        this.container.style.left = left + 'px';
        this.container.style.top = top + 'px';
    }

    preAlign() {
        this.container.style.left = -999 + 'px';
        this.container.style.top = -999 + 'px';
    }

    isOutOfBounds() {
        let offset = this.container.getBoundingClientRect();
        let targetTop = offset.top;
        let targetLeft = offset.left;
        let width = DomHandler.getOuterWidth(this.container);
        let height = DomHandler.getOuterHeight(this.container);
        let viewport = DomHandler.getViewport();

        return (targetLeft + width > viewport.width) || (targetLeft < 0) || (targetTop < 0) || (targetTop + height > viewport.height);
    }

    render() {
        return (
            <div onMouseEnter={this.onMouseEnter.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)}
                 onFocus={this.onFocus.bind(this)} onBlur={this.onBlur.bind(this)} id="child">
                <div ref={el=>this.container=el} className="ui-helper-hidden">
                    <div className='ui-tooltip-arrow'/>
                    <div className='ui-tooltip-text ui-shadow ui-corner-all' ref={el=>this.tooltipText=el}/>
                </div>
                <div ref={el=>this.element = el}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}