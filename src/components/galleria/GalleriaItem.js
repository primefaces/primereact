import React, { Component } from 'react';
import { classNames } from '../utils/ClassNames';
import { Ripple } from '../ripple/Ripple';

class GalleriaItemComponent extends Component {

    constructor(props) {
        super(props);

        this.navForward = this.navForward.bind(this);
        this.navBackward = this.navBackward.bind(this);
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
    }

    step(index) {
        if (this.itemsContainer) {
            this.itemsContainer.style.transform = this.isVertical() ? `translate3d(0, ${index * 100}%, 0)` : `translate3d(${index * 100}%, 0, 0)`;
            this.itemsContainer.style.transition = 'transform 500ms ease 0s';
        }
    }

    next() {
        let nextItemIndex = this.props.activeItemIndex + 1;

        this.props.onActiveItemChange({
            index: this.props.circular && (this.props.value.length - 1) === this.props.activeItemIndex ? 0 : nextItemIndex
        });
    }

    prev() {
        let prevItemIndex = this.props.activeItemIndex !== 0 ? this.props.activeItemIndex - 1 : 0;

        this.props.onActiveItemChange({
            index: this.props.circular && this.props.activeItemIndex === 0 ? this.props.value.length - 1 : prevItemIndex
        });
    }

    stopSlideShow() {
        if (this.props.slideShowActive && this.props.stopSlideShow) {
            this.props.stopSlideShow();
        }
    }

    navBackward(e) {
        this.stopSlideShow();
        this.prev();

        if (e && e.cancelable) {
            e.preventDefault();
        }
    }

    navForward(e) {
        this.stopSlideShow();
        this.next();

        if (e && e.cancelable) {
            e.preventDefault();
        }
    }

    onIndicatorClick(index) {
        this.stopSlideShow();
        this.props.onActiveItemChange({
            index
        });
    }

    onIndicatorMouseEnter(index) {
        if (this.props.changeItemOnIndicatorHover) {
            this.stopSlideShow();

            this.props.onActiveItemChange({
                index
            });
        }
    }

    onIndicatorKeyDown(event, index) {
        if (event.which === 13) {
            this.stopSlideShow();

            this.props.onActiveItemChange({
                index
            });
        }
    }

    componentDidMount() {
        if (this.props.autoPlay) {
            this.props.startSlideShow();
        }
    }

    renderBackwardNavigator() {
        if (this.props.showItemNavigators) {
            let isDisabled = !this.props.circular && this.props.activeItemIndex === 0;
            let buttonClassName = classNames('p-galleria-item-prev p-galleria-item-nav p-link', {
                'p-disabled': isDisabled
            });

            return (
                <button type="button" className={buttonClassName} onClick={this.navBackward} disabled={isDisabled}>
                    <span className="p-galleria-item-prev-icon pi pi-chevron-left"></span>
                    <Ripple />
                </button>
            );
        }

        return null;
    }

    renderForwardNavigator() {
        if (this.props.showItemNavigators) {
            let isDisabled = !this.props.circular && this.props.activeItemIndex === (this.props.value.length - 1);
            let buttonClassName = classNames('p-galleria-item-next p-galleria-item-nav p-link', {
                'p-disabled': isDisabled
            });

            return (
                <button type="button" className={buttonClassName} onClick={this.navForward} disabled={isDisabled}>
                    <span className="p-galleria-item-next-icon pi pi-chevron-right"></span>
                    <Ripple />
                </button>
            );
        }

        return null;
    }

    renderCaption() {
        if (this.props.caption) {
            const content = this.props.caption(this.props.value[this.props.activeItemIndex]);
            return (
                <div className="p-galleria-caption">
                    { content}
                </div>
            );
        }

        return null;
    }

    renderIndicator(index) {
        let indicator = this.props.indicator && this.props.indicator(index);
        let isActive = this.props.activeItemIndex === index;
        let indicatorItemClassName = classNames('p-galleria-indicator', {
            'p-highlight': isActive
        });

        if (!indicator) {
            indicator = (
                <button type="button" tabIndex={-1} className="p-link">
                    <Ripple />
                </button>
            );
        }

        return (
            <li className={indicatorItemClassName} key={'p-galleria-indicator-' + index} tabIndex={0}
                onClick={() => this.onIndicatorClick(index)} onMouseEnter={() => this.onIndicatorMouseEnter(index)} onKeyDown={(e) => this.onIndicatorKeyDown(e, index)}>
                { indicator}
            </li>
        );
    }

    renderIndicators() {
        if (this.props.showIndicators) {
            const indicatorsContentClassName = classNames('p-galleria-indicators p-reset', this.props.indicatorsContentClassName);
            let indicators = [];

            for (let i = 0; i < this.props.value.length; i++) {
                indicators.push(this.renderIndicator(i));
            }

            return (
                <ul className={indicatorsContentClassName}>
                    { indicators}
                </ul>
            );
        }

        return null;
    }

    render() {
        const content = this.props.itemTemplate && this.props.itemTemplate(this.props.value[this.props.activeItemIndex]);
        const backwardNavigator = this.renderBackwardNavigator();
        const forwardNavigator = this.renderForwardNavigator();
        const caption = this.renderCaption();
        const indicators = this.renderIndicators();

        return (
            <div ref={(el) => this.props.forwardRef(el)} className="p-galleria-item-wrapper">
                <div className="p-galleria-item-container">
                    {backwardNavigator}
                    <div className="p-galleria-item">
                        {content}
                    </div>
                    {forwardNavigator}
                    {caption}
                </div>

                {indicators}
            </div>
        );
    }
}

export const GalleriaItem = React.forwardRef((props, ref) => <GalleriaItemComponent forwardRef={ref} {...props} />);
