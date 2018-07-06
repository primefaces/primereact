import { Component } from 'react';
import PropTypes from 'prop-types';
import DomHandler from '../utils/DomHandler';

export class Tooltip extends Component {

    static defaultProps = {
        for: null,
        title: null,
        tooltipPosition: 'right',
        tooltipEvent: 'hover',
        appendTo: 'body',
        positionStyle: null,
        tooltipClassName: null,
        tooltipDisabled: false,
        escape: true,
        hideDelay: null,
        showDelay: null,
        onBeforeShow: null
    };
 
    static propTypes = {
        for: PropTypes.any,
        title: PropTypes.string,
        tooltipPosition: PropTypes.string,
        tooltipEvent: PropTypes.string,
        appendTo: PropTypes.string,
        positionstyle: PropTypes.object,
        tooltipClassName: PropTypes.string,
        tooltipDisabled: PropTypes.bool,
        escape: PropTypes.bool,
        hideDelay: PropTypes.number,
        showDelay: PropTypes.number,
        onBeforeShow: PropTypes.func
    };
 
    constructor() {
        super();
        this.handleLoad = this.handleLoad.bind(this);
    }
 
    onMouseEnter(event) {
        if(this.props.tooltipEvent === 'hover') {
            if(this.props.onBeforeShow) {
                this.props.onBeforeShow(event);
            }

            if(this.hideTimeout) {
                clearTimeout(this.hideTimeout);
                this.destroy();
            }

            this.activate(event);
        }
    }
 
    onMouseLeave(event) {
        if(this.props.tooltipEvent === 'hover') {
            this.deactivate();
        }
    }
 
    onFocus(event) {
        if(this.props.tooltipEvent === 'focus') {
            this.activate(event);
        }
    }
 
    onBlur(event) {
        if(this.props.tooltipEvent === 'focus') {
            this.deactivate();
        }
    }
 
    activate(event) {
        if(this.props.onBeforeShow) {
            this.props.onBeforeShow(event);
        }

        this.active = true;
        if(this.hideTimeout) {
            clearTimeout(this.hideTimeout);
        }
        
        if(this.props.showDelay)
            this.showTimeout = setTimeout(() => { this.show() }, this.props.showDelay);
        else
            this.show();
    }
    
    deactivate() {
        this.active = false;
        if(this.showTimeout) {
            clearTimeout(this.showTimeout);
        }
        
        if(this.hideDelay)
            this.hideTimeout = setTimeout(() => { this.hide() }, this.props.hideDelay);
        else
            this.hide();
    }
    
    create() {
        this.container = document.createElement('div');
                
        let tooltipArrow = document.createElement('div');
        tooltipArrow.className = 'ui-tooltip-arrow';
        this.container.appendChild(tooltipArrow);
        
        this.tooltipText = document.createElement('div');
        this.tooltipText.className = 'ui-tooltip-text ui-shadow ui-corner-all';

		this.updateText();
        
        if(this.props.positionStyle) {
            this.container.style.position = this.props.positionStyle;
        }
        
        this.container.appendChild(this.tooltipText);

        if(this.props.appendTo === 'body')
            document.body.appendChild(this.container);
        else if(this.props.appendTo === 'target')
            DomHandler.appendChild(this.container, this.element);
        else
            DomHandler.appendChild(this.container, this.props.appendTo);
            
        this.container.style.display = 'inline-block';
    }
    
    show() {
        if(!this.props.title || this.props.disabled) {
            return;
        }
        
        this.create();
        this.align();
        if(this.props.tooltipClassName) {
            this.container.className = this.container.className + ' ' + this.props.tooltipClassName; 
        }
        DomHandler.fadeIn(this.container, 250);
        this.container.style.zIndex = String(DomHandler.generateZIndex());
        this.bindDocumentResizeListener();
    }
    
    hide() {
        this.destroy();
    }
    
    updateText() {
        if(this.props.escape) {
            this.tooltipText.innerHTML = '';
            this.tooltipText.appendChild(document.createTextNode(this.props.title));
        }
		else {
            this.tooltipText.innerHTML = this.props.title;
        }
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
            break;
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
        
    bindDocumentResizeListener() {
        this.documentResizeListener = () => {
            this.hide();
        };

        window.addEventListener('resize', this.documentResizeListener);
    }
    
    unbindDocumentResizeListener() {
        if(this.documentResizeListener) {
            window.removeEventListener('resize', this.documentResizeListener);
            this.documentResizeListener = null;
        }
    }

    destroy() {
        this.unbindDocumentResizeListener();
        
        if(this.container && this.container.parentElement) {
            if(this.props.appendTo === 'body')
                document.body.removeChild(this.container);
            else if(this.props.appendTo === 'target')
                this.element.removeChild(this.container);
            else
                DomHandler.removeChild(this.container, this.props.appendTo);
        }
        this.container = null;
    }

    bindMouseEvents(selector) {
        let elements = document.querySelectorAll(selector);
        if(!elements) 
            return;

        if(this.props.tooltipEvent === 'hover') {
            for (let i = 0; i < elements.length; i++) {
                elements[i].addEventListener("mouseenter", (e) => {this.element = elements[i];  this.onMouseEnter(e);});
                elements[i].addEventListener("mouseleave", (e) => this.onMouseLeave(e));
            }
        }
        else if(this.props.tooltipEvent === 'focus') {
            for (let i = 0; i < elements.length; i++) {
                elements[i].addEventListener("focus", (e) => {this.element = elements[i]; this.onFocus(e);});
                elements[i].addEventListener("blur", (e) => this.onBlur(e));
            }
        }
    }

    handleLoad() {
        var selectors = this.props.for;
        
        if(selectors instanceof Array) {
            for (var i = 0; i < selectors.length; i++) {
                this.bindMouseEvents(selectors[i]);
            }
        }
        else {
            this.bindMouseEvents(selectors);
        }
            
        document.body.removeEventListener('mouseover', this.handleLoad);
    }

    componentDidMount() {
        document.body.addEventListener('mouseover', this.handleLoad);
    }

    componentWillUnmount() {
        this.destroy();
    }

    render() {
        return null;
    }
 }
