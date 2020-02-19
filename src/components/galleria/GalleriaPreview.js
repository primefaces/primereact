import React, { Component } from 'react';
import classNames from 'classnames';

export class GalleriaPreview extends Component {

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
        if (this.props.changePreviewOnIndicatorHover) {
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
        if (this.props.showPreviewNavButtons) {
            let isDisabled = !this.props.circular && this.props.activeItemIndex === 0;
            let buttonClassName = classNames('p-galleria-preview-prev p-galleria-preview-nav-button p-button', {
                'p-disabled': isDisabled
            });

            return (
                <button type="button" className={buttonClassName} onClick={this.navBackward} disabled={isDisabled}>
                    <span className="p-galleria-preview-prev-icon pi pi-chevron-left"></span>
                </button>
            );
        }

        return null;
    }

    renderForwardNavigator() {
        if (this.props.showPreviewNavButtons) {
            let isDisabled = !this.props.circular && this.props.activeItemIndex === (this.props.value.length - 1);
            let buttonClassName = classNames('p-galleria-preview-next p-galleria-preview-nav-button p-button', {
                'p-disabled': isDisabled
            });

            return (
                <button type="button" className={buttonClassName} onClick={this.navForward} disabled={isDisabled}>
                    <span className="p-galleria-preview-next-icon pi pi-chevron-right"></span>
                </button>
            );
        }

        return null;
    }

    renderCaption() {
        if (this.props.captionTemplate) {
            const content = this.props.captionTemplate(this.props.value[this.props.activeItemIndex]);
            return (
                <div className="p-galleria-preview-caption">
                    { content }
                </div>
            );
        }

        return null;
    }

    renderIndicator(index) {
        let indicator = this.props.indicatorItemTemplate && this.props.indicatorItemTemplate(index);
        let isActive = this.props.activeItemIndex === index;
        let indicatorItemClassName = classNames('p-galleria-indicator-item', {
            'p-highlight': isActive
        });

        if (!indicator) {
            let iconClassName = classNames('p-galleria-indicator-icon pi', {
                'pi-circle-on': isActive,
                'pi-circle-off': !isActive
            });

            indicator = (
                <button type="button" tabIndex="-1" className="p-link">
                    <span className={iconClassName}></span>
                </button>
            );
        }

        return (
            <li className={indicatorItemClassName} key={'p-galleria-indicator-' + index} tabIndex={0}
                onClick={() => this.onIndicatorClick(index)} onMouseEnter={() => this.onIndicatorMouseEnter(index)} onKeyDown={(e) => this.onIndicatorKeyDown(e, index)}>
                { indicator }
            </li>
        );
    }

    renderIndicators() {
        if (this.props.showIndicators) {
            const dotsContainerClassName = classNames('p-galleria-indicator-container p-reset', this.props.dotsContainerClassName);
            let indicators = [];

            for (let i = 0; i < this.props.value.length; i++) {
                indicators.push(this.renderIndicator(i));
            }

            return (
                <ul className={dotsContainerClassName}>
                    { indicators }
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
            <div className="p-galleria-preview-content">
                <div className="p-galleria-preview-container">
                    { backwardNavigator }
                    <div className="p-galleria-preview-items-content">
                        { content }
                    </div>
                    { forwardNavigator }
                    { caption }
                </div>

                { indicators }
            </div>
        );
    }
}
