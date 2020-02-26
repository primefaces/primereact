import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import UniqueComponentId from '../utils/UniqueComponentId';
import { GalleriaPreview } from './GalleriaPreview';
import { GalleriaThumbnails } from './GalleriaThumbnails';
import DomHandler from '../utils/DomHandler';

export class Galleria extends Component {

    static defaultProps = {
        id: null,
        value: null,
        activeIndex: 0,
        fullScreen: false,
        previewItemTemplate: null,
        thumbnailItemTemplate: null,
        indicatorItemTemplate: null,
        className: null,
        style: null,
        header: null,
        footer: null,
        numVisible: 3,
        responsiveOptions: null,
        showPreviewNavButtons: false,
        showThumbnailNavButtons: true,
        showNavButtonsOnPreviewHover: false,
        changePreviewOnIndicatorHover: false,
        circular: false,
        autoPlay: false,
        transitionInterval: 4000,
        captionTemplate: null,
        showThumbnails: true,
        thumbnailsPosition: "bottom",
        verticalThumbnailViewPortHeight: "300px",
        showIndicators: false,
        showIndicatorsOnPreview: false,
        indicatorsPosition: "bottom",
        baseZIndex: 0,
        onItemChange: null
    }

    static propTypes = {
        id: PropTypes.string,
        value: PropTypes.any,
        activeIndex: PropTypes.number,
        fullScreen: PropTypes.bool,
        previewItemTemplate: PropTypes.any,
        thumbnailItemTemplate: PropTypes.any,
        indicatorItemTemplate: PropTypes.any,
        className: PropTypes.string,
        style: PropTypes.object,
        header: PropTypes.any,
        footer: PropTypes.any,
        numVisible: PropTypes.number,
        responsiveOptions: PropTypes.array,
        showPreviewNavButtons: PropTypes.bool,
        showThumbnailNavButtons: PropTypes.bool,
        showNavButtonsOnPreviewHover: PropTypes.bool,
        changePreviewOnIndicatorHover: PropTypes.bool,
        circular: PropTypes.bool,
        autoPlay: PropTypes.bool,
        transitionInterval: PropTypes.number,
        captionTemplate: PropTypes.any,
        showThumbnails: PropTypes.bool,
        thumbnailsPosition: PropTypes.string,
        showIndicators: PropTypes.bool,
        showIndicatorsOnPreview: PropTypes.bool,
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

        this.id = this.props.id || UniqueComponentId();
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
        if (this.props.fullScreen) {
            DomHandler.addClass(document.body, 'p-overflow-hidden');
        }

        this.setState({ visible: true }, () => {
            if (this.mask) {
                this.mask.style.zIndex = String(this.props.baseZIndex + DomHandler.generateZIndex());
            }
        });
    }

    hide() {
        if (this.props.fullScreen) {
            DomHandler.removeClass(document.body, 'p-overflow-hidden');
        }

        this.setState({ visible: false });
    }

    isAutoPlayActive() {
        return this.state.slideShowActive;
    }

    startSlideShow() {
        this.interval = setInterval(() => {
            let activeIndex = (this.props.circular && (this.props.value.length - 1) === this.activeItemIndex) ? 0 : (this.activeItemIndex + 1);
            this.onActiveItemChange({index: activeIndex});

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
                        { this.props.header }
                    </div>);
        }

        return null;
    }

    renderFooter() {
        if (this.props.footer) {
            return (<div className="p-galleria-footer">
                        { this.props.footer }
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
            'p-galleria-indicator-onpreview': this.props.showIndicatorsOnPreview,
            'p-galleria-preview-nav-onhover': this.props.showNavButtonsOnPreviewHover && !this.props.fullScreen
        }, thumbnailsPosClassName, indicatorPosClassName);

        const closeIcon = this.props.fullScreen && (
            <button type="button" className="p-galleria-close p-link" onClick={this.hide}>
                <span className="p-galleria-close-icon pi pi-times"></span>
            </button>
        );

        const header = this.renderHeader();
        const footer = this.renderFooter();
        const element = (
            <div id={this.id} className={galleriaClassName} style={this.props.style}>
                { closeIcon }
                { header }
                <div className="p-galleria-content">
                    <GalleriaPreview ref={(el) => this.previewContent = ReactDOM.findDOMNode(el)} value={this.props.value} activeItemIndex={this.activeItemIndex} onActiveItemChange={this.onActiveItemChange}
                        itemTemplate={this.props.previewItemTemplate} circular={this.props.circular} captionTemplate={this.props.captionTemplate}
                        showIndicators={this.props.showIndicators} changePreviewOnIndicatorHover={this.props.changePreviewOnIndicatorHover} indicatorItemTemplate={this.props.indicatorItemTemplate}
                        showPreviewNavButtons={this.props.showPreviewNavButtons} autoPlay={this.props.autoPlay} slideShowActive={this.state.slideShowActive}
                        startSlideShow={this.startSlideShow} stopSlideShow={this.stopSlideShow}/>

                    {
                        this.props.showThumbnails && <GalleriaThumbnails containerId={this.id} value={this.props.value} activeItemIndex={this.activeItemIndex} onActiveItemChange={this.onActiveItemChange}
                            itemTemplate={this.props.thumbnailItemTemplate} numVisible={this.props.numVisible} responsiveOptions={this.props.responsiveOptions} circular={this.props.circular}
                            isVertical={isVertical} contentHeight={this.props.verticalThumbnailViewPortHeight} showThumbnailNavButtons={this.props.showThumbnailNavButtons}
                            autoPlay={this.props.autoPlay} slideShowActive={this.state.slideShowActive} stopSlideShow={this.stopSlideShow} />
                    }
                </div>
                { footer }
            </div>
        );

        return element;
    }

    renderGalleria() {
        const element = this.renderElement();

        if (this.props.fullScreen) {
            const maskClassName = classNames('p-galleria-mask p-component-overlay', {
                'p-galleria-visible': this.state.visible
            });

            const galleriaWrapper = (
                <div ref={(el) => this.mask = el} className={maskClassName}>
                    { element }
                </div>
            );

            return this.state.visible && ReactDOM.createPortal(galleriaWrapper, document.body);
        }
        else {
            return element;
        }
    }

    render() {
        return this.props.value && this.props.value.length > 0 && this.renderGalleria();
    }
}
