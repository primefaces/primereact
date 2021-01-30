import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { classNames } from '../utils/ClassNames';
import UniqueComponentId from '../utils/UniqueComponentId';
import { GalleriaItem } from './GalleriaItem';
import { GalleriaThumbnails } from './GalleriaThumbnails';
import DomHandler from '../utils/DomHandler';
import { CSSTransition } from 'react-transition-group';
import { Ripple } from '../ripple/Ripple';

export class Galleria extends Component {

    static defaultProps = {
        id: null,
        value: null,
        activeIndex: 0,
        fullScreen: false,
        item: null,
        thumbnail: null,
        indicator: null,
        caption: null,
        className: null,
        style: null,
        header: null,
        footer: null,
        numVisible: 3,
        responsiveOptions: null,
        showItemNavigators: false,
        showThumbnailNavigators: true,
        showItemNavigatorsOnHover: false,
        changeItemOnIndicatorHover: false,
        circular: false,
        autoPlay: false,
        transitionInterval: 4000,
        showThumbnails: true,
        thumbnailsPosition: "bottom",
        verticalThumbnailViewPortHeight: "300px",
        showIndicators: false,
        showIndicatorsOnItem: false,
        indicatorsPosition: "bottom",
        baseZIndex: 0,
        onItemChange: null
    }

    static propTypes = {
        id: PropTypes.string,
        value: PropTypes.any,
        activeIndex: PropTypes.number,
        fullScreen: PropTypes.bool,
        item: PropTypes.any,
        thumbnail: PropTypes.any,
        indicator: PropTypes.any,
        caption: PropTypes.any,
        className: PropTypes.string,
        style: PropTypes.object,
        header: PropTypes.any,
        footer: PropTypes.any,
        numVisible: PropTypes.number,
        responsiveOptions: PropTypes.array,
        showItemNavigators: PropTypes.bool,
        showThumbnailNavigators: PropTypes.bool,
        showItemNavigatorsOnHover: PropTypes.bool,
        changeItemOnIndicatorHover: PropTypes.bool,
        circular: PropTypes.bool,
        autoPlay: PropTypes.bool,
        transitionInterval: PropTypes.number,
        showThumbnails: PropTypes.bool,
        thumbnailsPosition: PropTypes.string,
        showIndicators: PropTypes.bool,
        showIndicatorsOnItem: PropTypes.bool,
        indicatorsPosition: PropTypes.string,
        baseZIndex: PropTypes.number,
        onItemChange: PropTypes.func
    }

    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            slideShowActive: false
        }

        if (!this.props.onItemChange) {
            this.state = {
                ...this.state,
                activeIndex: props.activeIndex
            };
        }

        this.onActiveItemChange = this.onActiveItemChange.bind(this);
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
        this.startSlideShow = this.startSlideShow.bind(this);
        this.stopSlideShow = this.stopSlideShow.bind(this);
        this.onEnter = this.onEnter.bind(this);
        this.onEntering = this.onEntering.bind(this);
        this.onExit = this.onExit.bind(this);

        this.id = this.props.id || UniqueComponentId();
        this.galleriaRef = React.createRef();
    }

    get activeItemIndex() {
        return this.props.onItemChange ? this.props.activeIndex : this.state.activeIndex;
    }

    onActiveItemChange(event) {
        if (this.props.onItemChange) {
            this.props.onItemChange(event);
        }
        else {
            this.setState({
                activeIndex: event.index
            });
        }
    }

    show() {
        this.setState({ visible: true });
    }

    hide() {
        this.setState({ visible: false });
    }

    onEnter() {
        DomHandler.addClass(document.body, 'p-overflow-hidden');
    }

    onEntering() {
        this.mask.style.zIndex = String(this.props.baseZIndex + DomHandler.generateZIndex());
        DomHandler.addClass(this.mask, 'p-component-overlay');
    }

    onExit() {
        DomHandler.removeClass(document.body, 'p-overflow-hidden');
        DomHandler.addClass(this.mask, 'p-galleria-mask-leave');
    }

    isAutoPlayActive() {
        return this.state.slideShowActive;
    }

    startSlideShow() {
        this.interval = setInterval(() => {
            let activeIndex = (this.props.circular && (this.props.value.length - 1) === this.activeItemIndex) ? 0 : (this.activeItemIndex + 1);
            this.onActiveItemChange({ index: activeIndex });

        }, this.props.transitionInterval);

        this.setState({ slideShowActive: true });
    }

    stopSlideShow() {
        if (this.interval) {
            clearInterval(this.interval);
        }

        this.setState({ slideShowActive: false });
    }

    getPositionClassName(preClassName, position) {
        const positions = ['top', 'left', 'bottom', 'right'];
        const pos = positions.find(item => item === position);

        return pos ? `${preClassName}-${pos}` : '';
    }

    isVertical() {
        return this.props.thumbnailsPosition === 'left' || this.props.thumbnailsPosition === 'right';
    }

    componentWillUnmount() {
        if (this.state.slideShowActive) {
            this.stopSlideShow();
        }
    }

    renderHeader() {
        if (this.props.header) {
            return (<div className="p-galleria-header">
                { this.props.header}
            </div>);
        }

        return null;
    }

    renderFooter() {
        if (this.props.footer) {
            return (<div className="p-galleria-footer">
                { this.props.footer}
            </div>);
        }

        return null;
    }

    renderElement() {
        const isVertical = this.isVertical();
        const thumbnailsPosClassName = this.props.showThumbnails && this.getPositionClassName('p-galleria-thumbnails', this.props.thumbnailsPosition);
        const indicatorPosClassName = this.props.showIndicators && this.getPositionClassName('p-galleria-indicators', this.props.indicatorsPosition);
        const galleriaClassName = classNames('p-galleria p-component', this.props.className, {
            'p-galleria-fullscreen': this.props.fullScreen,
            'p-galleria-indicator-onitem': this.props.showIndicatorsOnItem,
            'p-galleria-item-nav-onhover': this.props.showItemNavigatorsOnHover && !this.props.fullScreen
        }, thumbnailsPosClassName, indicatorPosClassName);

        const closeIcon = this.props.fullScreen && (
            <button type="button" className="p-galleria-close p-link" onClick={this.hide}>
                <span className="p-galleria-close-icon pi pi-times"></span>
                <Ripple />
            </button>
        );

        const header = this.renderHeader();
        const footer = this.renderFooter();
        const element = (
            <div ref={this.galleriaRef} id={this.id} className={galleriaClassName} style={this.props.style}>
                { closeIcon}
                { header}
                <div className="p-galleria-content">
                    <GalleriaItem ref={(el) => this.previewContent = el} value={this.props.value} activeItemIndex={this.activeItemIndex} onActiveItemChange={this.onActiveItemChange}
                        itemTemplate={this.props.item} circular={this.props.circular} caption={this.props.caption}
                        showIndicators={this.props.showIndicators} changeItemOnIndicatorHover={this.props.changeItemOnIndicatorHover} indicator={this.props.indicator}
                        showItemNavigators={this.props.showItemNavigators} autoPlay={this.props.autoPlay} slideShowActive={this.state.slideShowActive}
                        startSlideShow={this.startSlideShow} stopSlideShow={this.stopSlideShow} />

                    {
                        this.props.showThumbnails && <GalleriaThumbnails containerId={this.id} value={this.props.value} activeItemIndex={this.activeItemIndex} onActiveItemChange={this.onActiveItemChange}
                            itemTemplate={this.props.thumbnail} numVisible={this.props.numVisible} responsiveOptions={this.props.responsiveOptions} circular={this.props.circular}
                            isVertical={isVertical} contentHeight={this.props.verticalThumbnailViewPortHeight} showThumbnailNavigators={this.props.showThumbnailNavigators}
                            autoPlay={this.props.autoPlay} slideShowActive={this.state.slideShowActive} stopSlideShow={this.stopSlideShow} />
                    }
                </div>
                { footer}
            </div>
        );

        return element;
    }

    renderGalleria() {
        const element = this.renderElement();

        if (this.props.fullScreen) {
            const maskClassName = classNames('p-galleria-mask', {
                'p-galleria-visible': this.state.visible
            });

            const galleriaWrapper = (
                <div ref={(el) => this.mask = el} className={maskClassName}>
                    <CSSTransition nodeRef={this.galleriaRef} classNames="p-galleria" in={this.state.visible} timeout={{ enter: 150, exit: 150 }}
                        unmountOnExit onEnter={this.onEnter} onEntering={this.onEntering} onExit={this.onExit} >
                        {element}
                    </CSSTransition>
                </div>
            );

            return ReactDOM.createPortal(galleriaWrapper, document.body);
        }
        else {
            return element;
        }
    }

    render() {
        return this.props.value && this.props.value.length > 0 && this.renderGalleria();
    }
}
