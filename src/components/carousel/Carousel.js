import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import UniqueComponentId from '../utils/UniqueComponentId';

class CarouselItem extends Component {

    static defaultProps = {
        template: null,
        item: null,
        active: false,
        start: false,
        end: false
    }

    static propTypes = {
        template: PropTypes.func,
        item: PropTypes.any,
        active: PropTypes.bool,
        start: PropTypes.bool,
        end: PropTypes.bool
    }

    render() {
        const content = this.props.template(this.props.item);
        const itemClassName = classNames('p-carousel-item', {
            'p-carousel-item-active': this.props.active,
            'p-carousel-item-start': this.props.start,
            'p-carousel-item-end': this.props.end
        });

        return (
            <div className={itemClassName}>
                {content}
            </div>
        );
    }
}

export class Carousel extends Component {

    static defaultProps = {
        id: null,
        value: null,
        activeIndex: 0,
        header: null,
        footer: null,
        style: null,
        className: null,
        itemTemplate: null,
        numVisible: 1,
        numScroll: 1,
        responsive: null,
        orientation: "horizontal",
        verticalContentHeight: "300px",
        contentClassName: null,
        dotsContentClassName: null,
        onPageChange: null
    }

    static propTypes = {
        id: PropTypes.string,
        value: PropTypes.any,
        activeIndex: PropTypes.number,
        header: PropTypes.any,
        footer: PropTypes.any,
        style: PropTypes.object,
        className: PropTypes.string,
        itemTemplate: PropTypes.any,
        numVisible: PropTypes.number,
        numScroll: PropTypes.number,
        responsive: PropTypes.array,
        orientation: PropTypes.string,
        verticalContentHeight: PropTypes.string,
        contentClassName: PropTypes.string,
        dotsContentClassName: PropTypes.string,
        onPageChange: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
            numVisible: props.numVisible,
            numScroll: props.numScroll,
            totalShiftedItems: (props.activeIndex * props.numScroll) * -1
        }

        if (!this.props.onPageChange) {
            this.state = {
                ...this.state,
                activeIndex: props.activeIndex
            }
        }

        this.navBackward = this.navBackward.bind(this);
        this.navForward = this.navForward.bind(this);
        this.onTouchStart = this.onTouchStart.bind(this);
        this.onTouchMove = this.onTouchMove.bind(this);
        this.onTouchEnd = this.onTouchEnd.bind(this);
        this.totalDots = 0;
        this.remainingItems = 0;

        this.id = this.props.id || UniqueComponentId();
    }

    step(event, dir, index) {
        let totalShiftedItems = this.state.totalShiftedItems;

        if (index != null) {
            totalShiftedItems = (this.state.numScroll * index) * -1;
            this.isRemainingItemsAdded = false;
        }
        else {
            totalShiftedItems += (this.state.numScroll * dir);
            if (this.isRemainingItemsAdded) {
                totalShiftedItems += this.remainingItems - (this.state.numScroll * dir);
                this.isRemainingItemsAdded = false;
            }

            index = Math.abs(parseInt(totalShiftedItems / this.state.numScroll, 10));
        }

        if (index === (this.totalDots - 1) && this.remainingItems > 0) {
            totalShiftedItems += ((this.remainingItems * -1) - (this.state.numScroll * dir));
            this.isRemainingItemsAdded = true;
        }

        if (this.itemsContainer) {
            this.itemsContainer.style.transform = this.isVertical() ? `translate3d(0, ${totalShiftedItems * (100/ this.state.numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100/ this.state.numVisible)}%, 0, 0)`;
            this.itemsContainer.style.transition = 'transform 500ms ease 0s';
            
            if (this.animationTimeout) {
                clearTimeout(this.animationTimeout);
            }

            this.animationTimeout = setTimeout(() => {
                if (this.itemsContainer) {
                    this.itemsContainer.style.transition = '';
                }
            }, 500);
        }

        this.setState({
            totalShiftedItems
        });

        if (this.props.onPageChange) {
            this.props.onPageChange({
                originalEvent: event,
                index
            })
        }
        else {
            this.setState({
                activeIndex: index
            });
        }
    }

    calculatePosition(event) {
        if (this.itemsContainer && this.responsive) {
            let windowWidth = window.innerWidth;
            let matchedResponsiveData = {
                numVisible: this.props.numVisible,
                numScroll: this.props.numScroll
            };

            for (let i = 0; i < this.responsive.length; i++) {
                let res = this.responsive[i];

                if (parseInt(res.breakpoint, 10) >= windowWidth) {
                    matchedResponsiveData = res;
                }
            }

            let state = {};
            if (this.state.numScroll !== matchedResponsiveData.numScroll) {
                let activeIndex = this.getActiveIndex();
                activeIndex = parseInt((activeIndex * this.state.numScroll) / matchedResponsiveData.numScroll);
                
                let totalShiftedItems = (matchedResponsiveData.numScroll * activeIndex) * -1;

                state = {
                    totalShiftedItems,
                    numScroll: matchedResponsiveData.numScroll
                };

                if (this.props.onPageChange) {
                    this.props.onPageChange({
                        originalEvent: event,
                        index: activeIndex
                    })
                }
                else {
                    state = {
                        ...state,
                        activeIndex
                    };
                }
            }

            if (this.state.numVisible !== matchedResponsiveData.numVisible) {
                state = { 
                    ...state, 
                    numVisible: matchedResponsiveData.numVisible 
                };
            }

            if (Object.keys(state).length) {
                this.setState(state);
            }
        }
    }

    navBackward(e, index) {
        if (this.getActiveIndex() !== 0) {
            this.step(e, 1, index);
        }

        if (e.cancelable) {
            e.preventDefault();
        }
    }

    navForward(e, index) {
        if (this.getActiveIndex() < (this.totalDots - 1)) {
            this.step(e, -1, index);
        }

        if (e.cancelable) {
            e.preventDefault();
        }
    }

    onDotClick(e, index) {
        let activeIndex = this.getActiveIndex();

        if (index > activeIndex) {
            this.navForward(e, index);
        }
        else if (index < activeIndex) {
            this.navBackward(e, index);
        }
    }

    onTouchStart(e) {
        let touchobj = e.changedTouches[0];
        
        this.startPos = {
            x: touchobj.pageX,
            y: touchobj.pageY
        };
    }

    onTouchMove(e) {
        if (e.cancelable) {
            e.preventDefault();
        }
    }

    onTouchEnd(e) {
        let touchobj = e.changedTouches[0];
        
        if (this.isVertical()) {
            this.changePageOnTouch(e, (touchobj.pageY - this.startPos.y));
        }
        else {
            this.changePageOnTouch(e, (touchobj.pageX - this.startPos.x));
        }
    }

    changePageOnTouch(e, diff) {
        if (diff < 0) {           // left
            this.navForward(e);
        }
        else {                    // right
            this.navBackward(e);
        }
    }

    bindDocumentListeners() {
        if (!this.documentResizeListener) {
            this.documentResizeListener = (e) => {
                this.calculatePosition(e);
            };

            window.addEventListener('resize', this.documentResizeListener);
        }
    }

    unbindDocumentListeners() {
        if(this.documentResizeListener) {
            window.removeEventListener('resize', this.documentResizeListener);
            this.documentResizeListener = null;
        }
    }

    isVertical() {
        return this.props.orientation === 'vertical';
    }

    getActiveIndex() {
        return this.props.onPageChange ? this.props.activeIndex : this.state.activeIndex;
    }

    getTotalDots() {
        return this.props.value ? Math.ceil((this.props.value.length - this.state.numVisible) / this.state.numScroll) + 1 : 0;
    }
    
    createStyle() {
        if (!this.carouselStyle) {
            this.carouselStyle = document.createElement('style');
            this.carouselStyle.type = 'text/css';
            document.body.appendChild(this.carouselStyle);
        }

        let innerHTML = `
            #${this.id} .p-carousel-item {
                flex: 1 0 ${ (100/ this.state.numVisible) }%
            }
        `;
        
        if (this.props.responsive) {
            this.responsive = [...this.props.responsive];
            this.responsive.sort((data1, data2) => {
                const value1 = data1.breakpoint;
                const value2 = data2.breakpoint;
                let result = null;

                if (value1 == null && value2 != null)
                    result = -1;
                else if (value1 != null && value2 == null)
                    result = 1;
                else if (value1 == null && value2 == null)
                    result = 0;
                else if (typeof value1 === 'string' && typeof value2 === 'string')
                    result = value1.localeCompare(value2, undefined, { numeric: true });
                else
                    result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

                return -1 * result;
            });

            for (let i = 0; i < this.responsive.length; i++) {
                let res = this.responsive[i];

                innerHTML += `
                    @media screen and (max-width: ${res.breakpoint}) {
                        #${this.id} .p-carousel-item {
                            flex: 1 0 ${ (100/ res.numVisible) }%
                        }
                    } 
                `
            }
        }

        this.carouselStyle.innerHTML = innerHTML;
    }

    componentDidMount() {
        this.createStyle();
        this.calculatePosition();

        if (this.props.responsive) {
            this.bindDocumentListeners();
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.numScroll !== this.state.numScroll || prevProps.value.length !== this.props.value.length) {
            this.remainingItems = (this.props.value.length - this.state.numVisible) % this.state.numScroll;

            let totalShiftedItems = this.state.totalShiftedItems;
            let activeIndex = this.getActiveIndex();

            if (activeIndex === (this.totalDots - 1) && this.remainingItems > 0) {
                totalShiftedItems += (-1 * this.remainingItems) + this.state.numScroll;
                this.setState({
                    totalShiftedItems
                })
                this.isRemainingItemsAdded = true;
            }
            else {
                this.isRemainingItemsAdded = false;
            }

            this.itemsContainer.style.transform = this.isVertical() ? `translate3d(0, ${totalShiftedItems * (100/ this.state.numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100/ this.state.numVisible)}%, 0, 0)`;
        }
    }

    componentWillUnmount() {
        if (this.props.responsive) {
            this.unbindDocumentListeners();
        }
    }

    renderItems() {
        if (this.props.value && this.props.value.length) {
            return (
                this.props.value.map((item, index) => {
                    let firstIndex = (this.state.totalShiftedItems * -1),
                    lastIndex = firstIndex + this.state.numVisible - 1,
                    isActive = firstIndex <= index && lastIndex >= index,
                    start = firstIndex === index,
                    end = lastIndex === index;
                    
                    return <CarouselItem key={index} template={this.props.itemTemplate} item={item} active={isActive} start={start} end={end}/>
                })
            );
        }
    }

    renderContent() {
        const items = this.renderItems();
        const height = this.isVertical() ? this.props.verticalContentHeight : 'auto';
        const header = this.props.header && (
            <div className="p-carousel-header">
                {this.props.header}
            </div>
        );
        const footer = this.props.footer && (
            <div className="p-carousel-footer">
                {this.props.footer}
            </div>
        );

        return (
            <div className="p-carousel-container" style={{'height': height}}>
                {header}
                <div ref={(el) => this.itemsContainer = el} className="p-carousel-items"
                    onTouchStart={this.onTouchStart} onTouchMove={this.onTouchMove} onTouchEnd={this.onTouchEnd}>
                    {items}
                </div>
                {footer}
            </div>
        );
    }

    renderBackwardNavigator() {
        let isDisabled = this.getActiveIndex() === 0;
        let buttonClassName = classNames('p-carousel-prev p-link', {
            'p-disabled': isDisabled
        });

        return (
            <button className={buttonClassName} onClick={this.navBackward} disabled={isDisabled}>
                <span className="p-carousel-prev-icon pi pi-chevron-left"></span>
            </button>
        );
    }

    renderForwardNavigator() {
        let isDisabled = this.getActiveIndex() === (this.totalDots - 1);
        let buttonClassName = classNames('p-carousel-next p-link', {
            'p-disabled': isDisabled
        });

        return (
            <button className={buttonClassName} onClick={this.navForward} disabled={isDisabled}>
                <span className="p-carousel-next-icon pi pi-chevron-right"></span>
            </button>
        );
    }

    renderDot(index) {
        let isActive = this.getActiveIndex() === index,
        dotItemClassName = classNames('p-carousel-dot-item', {
            'p-highlight': isActive
        }),
        iconClassName = classNames('p-carousel-dot-icon pi', {
            'pi-circle-on': isActive,
            'pi-circle-off': !isActive
        });

        return (
            <li className={dotItemClassName} key={'p-carousel-dot-' + index}>
                <button className="p-link" onClick={(e) => this.onDotClick(e, index)}>
                    <span className={iconClassName}></span>
                </button>
            </li>
        );
    }

    renderDots() {
        const dotsContentClassName = classNames('p-carousel-dots-content p-reset', this.props.dotsContentClassName);
        let dots = [];

        for (let i = 0; i < this.totalDots; i++) {
            dots.push(this.renderDot(i));
        }

        return (
            <ul className={dotsContentClassName}>
                {dots}
            </ul>
        );
    }

    render() {
        const className = classNames('p-carousel p-component', {
            'p-carousel-vertical': this.isVertical()
        }, this.props.className);
        const contentClassName = classNames('p-carousel-content', this.props.contentClassName);

        this.totalDots = this.getTotalDots();
        const content = this.renderContent();
        const backwardNavigator = this.renderBackwardNavigator();
        const forwardNavigator = this.renderForwardNavigator();
        const dots = this.renderDots();

        return (
            <div id={this.id} className={className} style={this.props.style}>
                <div className={contentClassName}>
                    {backwardNavigator}
                    {content}
                    {forwardNavigator}
                </div>

                {dots}
            </div>
        );
    }
}