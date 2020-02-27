import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DomHandler from '../utils/DomHandler';

class GalleriaThumbnailItem extends Component {

    static defaultProps = {
        index: null,
        template: null,
        item: null,
        current: false,
        active: false,
        start: false,
        end: false,
        className: null,
        onItemClick: null
    }

    static propTypes = {
        index: PropTypes.number,
        template: PropTypes.func,
        item: PropTypes.any,
        current: PropTypes.bool,
        active: PropTypes.bool,
        start: PropTypes.bool,
        end: PropTypes.bool,
        className: PropTypes.string,
        onItemClick: PropTypes.func
    }

    constructor(props) {
        super(props);

        this.onItemClick = this.onItemClick.bind(this);
        this.onItemKeyDown = this.onItemKeyDown.bind(this);
    }

    onItemClick(event) {
        this.props.onItemClick({
            originalEvent: event,
            index: this.props.index
        });
    }

    onItemKeyDown(event) {
        if (event.which === 13) {
            this.props.onItemClick({
                originalEvent: event,
                index: this.props.index
            });
        }
    }

    render() {
        const content = this.props.template && this.props.template(this.props.item);
        const itemClassName = classNames(this.props.className, 'p-galleria-thumbnail-item', {
            'p-galleria-thumbnail-item-current': this.props.current,
            'p-galleria-thumbnail-item-active': this.props.active,
            'p-galleria-thumbnail-item-start': this.props.start,
            'p-galleria-thumbnail-item-end': this.props.end
        });

        return (
            <div className={itemClassName}>
                <div className="p-galleria-thumbnail-item-content" tabIndex={this.props.active ? 0 : null} onClick={this.onItemClick} onKeyDown={this.onItemKeyDown}>
                    { content }
                </div>
            </div>
        );
    }
}

export class GalleriaThumbnails extends Component {

    constructor(props) {
        super(props);

        this.state = {
            numVisible: props.numVisible,
            totalShiftedItems: 0,
            page: 0
        }

        this.navForward = this.navForward.bind(this);
        this.navBackward = this.navBackward.bind(this);
        this.onTransitionEnd = this.onTransitionEnd.bind(this);
        this.onTouchStart = this.onTouchStart.bind(this);
        this.onTouchMove = this.onTouchMove.bind(this);
        this.onTouchEnd = this.onTouchEnd.bind(this);
        this.onItemClick = this.onItemClick.bind(this);
    }

    step(dir) {
        let totalShiftedItems = this.state.totalShiftedItems + dir;

        if (dir < 0 && (-1 * totalShiftedItems) + this.state.numVisible > (this.props.value.length - 1)) {
            totalShiftedItems = this.state.numVisible - this.props.value.length;
        }
        else if (dir > 0 && totalShiftedItems > 0) {
            totalShiftedItems = 0;
        }

        if (this.props.circular) {
            if (dir < 0 && this.props.value.length - 1 === this.props.activeItemIndex) {
                totalShiftedItems = 0;
            }
            else if (dir > 0 && this.props.activeItemIndex === 0) {
                totalShiftedItems = this.state.numVisible - this.props.value.length;
            }
        }

        if (this.itemsContainer) {
            DomHandler.removeClass(this.itemsContainer, 'p-items-hidden');
            this.itemsContainer.style.transform = this.props.isVertical ? `translate3d(0, ${totalShiftedItems * (100/ this.state.numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100/ this.state.numVisible)}%, 0, 0)`;
            this.itemsContainer.style.transition = 'transform 500ms ease 0s';
        }

        this.setState({
            totalShiftedItems
        });
    }

    stopSlideShow() {
        if (this.props.slideShowActive && this.props.stopSlideShow) {
            this.props.stopSlideShow();
        }
    }

    getMedianItemIndex() {
        let index = Math.floor(this.state.numVisible / 2);

        return (this.state.numVisible % 2) ? index : index - 1;
    }

    navBackward(e) {
        this.stopSlideShow();

        let prevItemIndex = this.props.activeItemIndex !== 0 ? this.props.activeItemIndex - 1 : 0;
        let diff = prevItemIndex + this.state.totalShiftedItems;
        if ((this.state.numVisible - diff - 1) > this.getMedianItemIndex() && ((-1 * this.state.totalShiftedItems) !== 0 || this.props.circular)) {
            this.step(1);
        }

        this.props.onActiveItemChange({
            index: this.props.circular && this.props.activeItemIndex === 0 ? this.props.value.length - 1 : prevItemIndex
        });

        if (e.cancelable) {
            e.preventDefault();
        }
    }

    navForward(e) {
        this.stopSlideShow();

        let nextItemIndex = this.props.activeItemIndex + 1;
        if (nextItemIndex + this.state.totalShiftedItems > this.getMedianItemIndex() && ((-1 * this.state.totalShiftedItems) < this.getTotalPageNumber() - 1 || this.props.circular)) {
            this.step(-1);
        }

        this.props.onActiveItemChange({
            index: this.props.circular && (this.props.value.length - 1) === this.props.activeItemIndex ? 0 : nextItemIndex
        });

        if (e.cancelable) {
            e.preventDefault();
        }
    }

    onItemClick(event) {
        this.stopSlideShow();

        let selectedItemIndex = event.index;
        if (selectedItemIndex !== this.props.activeItemIndex) {
            const diff = selectedItemIndex + this.state.totalShiftedItems;
            let dir = 0;
            if (selectedItemIndex < this.props.activeItemIndex) {
                dir = (this.state.numVisible - diff - 1) - this.getMedianItemIndex();
                if (dir > 0 && (-1 * this.state.totalShiftedItems) !== 0) {
                    this.step(dir);
                }
            }
            else {
                dir = this.getMedianItemIndex() - diff;
                if (dir < 0 && (-1 * this.state.totalShiftedItems) < this.getTotalPageNumber() - 1) {
                    this.step(dir);
                }
            }

            this.props.onActiveItemChange({
                index: selectedItemIndex
            });
        }
    }

    onTransitionEnd() {
        if (this.itemsContainer) {
            DomHandler.addClass(this.itemsContainer, 'p-items-hidden');
            this.itemsContainer.style.transition = '';
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

        if (this.props.isVertical) {
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

    getTotalPageNumber() {
        return this.props.value.length > this.state.numVisible ? (this.props.value.length - this.state.numVisible) + 1 : 0;
    }

    createStyle() {
        if (!this.thumbnailsStyle) {
            this.thumbnailsStyle = document.createElement('style');
            this.thumbnailsStyle.type = 'text/css';
            document.body.appendChild(this.thumbnailsStyle);
        }

        let innerHTML = `
            #${this.props.containerId} .p-galleria-thumbnail-item {
                flex: 1 0 ${ (100/ this.state.numVisible) }%
            }
        `;

        if (this.props.responsiveOptions) {
            this.responsiveOptions = [...this.props.responsiveOptions];
            this.responsiveOptions.sort((data1, data2) => {
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

            for (let i = 0; i < this.responsiveOptions.length; i++) {
                let res = this.responsiveOptions[i];

                innerHTML += `
                    @media screen and (max-width: ${res.breakpoint}) {
                        #${this.props.containerId} .p-galleria-thumbnail-item {
                            flex: 1 0 ${ (100/ res.numVisible) }%
                        }
                    }
                `
            }
        }

        this.thumbnailsStyle.innerHTML = innerHTML;
    }

    calculatePosition() {
        if (this.itemsContainer && this.responsiveOptions) {
            let windowWidth = window.innerWidth;
            let matchedResponsiveData = {
                numVisible: this.props.numVisible
            };

            for (let i = 0; i < this.responsiveOptions.length; i++) {
                let res = this.responsiveOptions[i];

                if (parseInt(res.breakpoint, 10) >= windowWidth) {
                    matchedResponsiveData = res;
                }
            }

            if (this.state.numVisible !== matchedResponsiveData.numVisible) {
                this.setState({
                    numVisible: matchedResponsiveData.numVisible
                });
            }
        }
    }

    bindDocumentListeners() {
        if (!this.documentResizeListener) {
            this.documentResizeListener = () => {
                this.calculatePosition();
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

    componentDidMount() {
        this.createStyle();
        this.calculatePosition();

        if (this.props.responsiveOptions) {
            this.bindDocumentListeners();
        }
    }

    componentDidUpdate(prevProps, prevState) {
        let totalShiftedItems = this.state.totalShiftedItems;

        if (prevState.numVisible !== this.state.numVisible || prevProps.activeItemIndex !== this.props.activeItemIndex) {
            if (this.props.activeItemIndex <= this.getMedianItemIndex()) {
                totalShiftedItems = 0;
            }
            else if (this.props.value.length - this.state.numVisible + this.getMedianItemIndex() < this.props.activeItemIndex) {
                totalShiftedItems = this.state.numVisible - this.props.value.length;
            }
            else if (this.props.value.length - this.state.numVisible < this.props.activeItemIndex && this.state.numVisible % 2 === 0) {
                totalShiftedItems = (this.props.activeItemIndex * -1) + this.getMedianItemIndex() + 1;
            }
            else {
                totalShiftedItems = (this.props.activeItemIndex * -1) + this.getMedianItemIndex();
            }

            if (totalShiftedItems !== this.state.totalShiftedItems) {
                this.setState({
                    totalShiftedItems
                })
            }

            this.itemsContainer.style.transform = this.props.isVertical ? `translate3d(0, ${totalShiftedItems * (100/ this.state.numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100/ this.state.numVisible)}%, 0, 0)`;

            if (prevProps.activeItemIndex !== this.props.activeItemIndex) {
                DomHandler.removeClass(this.itemsContainer, 'p-items-hidden');
                this.itemsContainer.style.transition = 'transform 500ms ease 0s';
            }
        }
    }

    componentWillUnmount() {
        if (this.props.responsiveOptions) {
            this.unbindDocumentListeners();
        }
    }

    renderItems() {
        let items = this.props.value.map((item, index) => {
                        let firstIndex = this.state.totalShiftedItems * -1,
                        lastIndex = firstIndex + this.state.numVisible - 1,
                        isActive = firstIndex <= index && lastIndex >= index,
                        start = firstIndex === index,
                        end = lastIndex === index,
                        current = this.props.activeItemIndex === index;

                        return <GalleriaThumbnailItem key={index} index={index} template={this.props.itemTemplate} item={item} active={isActive} start={start} end={end}
                            onItemClick={this.onItemClick} current={current}/>
                    });

        return (
            <React.Fragment>
                { items }
            </React.Fragment>
        );
    }

    renderBackwardNavigator() {
        if (this.props.showThumbnailNavButtons) {
            let isDisabled = (!this.props.circular && this.props.activeItemIndex === 0) || (this.props.value.length <= this.state.numVisible);
            let buttonClassName = classNames('p-galleria-thumbnail-prev p-button', {
                'p-disabled': isDisabled
            }),
            iconClassName = classNames('p-galleria-thumbnail-prev-icon pi', {
                'pi-chevron-left': !this.props.isVertical,
                'pi-chevron-up': this.props.isVertical
            });

            return (
                <button className={buttonClassName} onClick={this.navBackward} disabled={isDisabled}>
                    <span className={iconClassName}></span>
                </button>
            );
        }

        return null;
    }

    renderForwardNavigator() {
        if (this.props.showThumbnailNavButtons) {
            let isDisabled = (!this.props.circular && this.props.activeItemIndex === (this.props.value.length - 1)) || (this.props.value.length <= this.state.numVisible);
            let buttonClassName = classNames('p-galleria-thumbnail-next p-button', {
                'p-disabled': isDisabled
            }),
            iconClassName = classNames('p-galleria-thumbnail-next-icon pi', {
                'pi-chevron-right': !this.props.isVertical,
                'pi-chevron-down': this.props.isVertical
            });

            return (
                <button className={buttonClassName} onClick={this.navForward} disabled={isDisabled}>
                    <span className={iconClassName}></span>
                </button>
            );
        }

        return null;
    }

    renderContent() {
        const items = this.renderItems();
        const height = this.props.isVertical ? this.props.contentHeight : '';
        const backwardNavigator = this.renderBackwardNavigator();
        const forwardNavigator = this.renderForwardNavigator();

        return (
            <div className="p-galleria-thumbnail-container">
                { backwardNavigator }
                <div className="p-galleria-thumbnail-items-content" style={{'height': height}}>
                    <div ref={(el) => this.itemsContainer = el} className="p-galleria-thumbnail-items-container" onTransitionEnd={this.onTransitionEnd}
                        onTouchStart={this.onTouchStart} onTouchMove={this.onTouchMove} onTouchEnd={this.onTouchEnd}>
                        { items }
                    </div>
                </div>
                { forwardNavigator }
            </div>
        );
    }

    render() {
        const content = this.renderContent();

        return (
            <div className="p-galleria-thumbnail-content">
                { content }
            </div>
        );
    }
}
