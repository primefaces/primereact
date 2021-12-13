import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from '../csstransition/CSSTransition';
import { DomHandler, classNames, ZIndexUtils, ObjectUtils } from '../utils/Utils';
import { Portal } from '../portal/Portal';
import PrimeReact from '../api/Api';

export class Image extends Component {

    static defaultProps = {
        preview: false,
        className: null,
        style: null,
        imageStyle: null,
        imageClassName: null,
        template: null,
        src: null,
        alt: null,
        width: null,
        height: null
    }

    static propTypes = {
        preview: PropTypes.bool,
        className: PropTypes.string,
        style: PropTypes.object,
        imageClassName: PropTypes.string,
        imageStyle: PropTypes.object,
        template: PropTypes.any,
        src: PropTypes.string,
        alt: PropTypes.string,
        width: PropTypes.string,
        height: PropTypes.string
    }

    constructor(props) {
        super(props);
        this.state = {
            maskVisible: false,
            previewVisible: false,
            rotate: 0,
            scale: 1
        }

        this.onImageClick = this.onImageClick.bind(this);
        this.onMaskClick = this.onMaskClick.bind(this);
        this.rotateRight = this.rotateRight.bind(this);
        this.rotateLeft = this.rotateLeft.bind(this);
        this.zoomIn = this.zoomIn.bind(this);
        this.zoomOut = this.zoomOut.bind(this);
        this.onEntering = this.onEntering.bind(this);
        this.onEntered = this.onEntered.bind(this);
        this.onPreviewImageClick = this.onPreviewImageClick.bind(this);
        this.onExit = this.onExit.bind(this)
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this)

        this.previewRef = React.createRef();

    }

    onImageClick() {
        if (this.props.preview) {
            this.setState({ maskVisible: true });
            setTimeout(() => {
                this.setState({ previewVisible: true });
            }, 25);
        }
    }

    onPreviewImageClick() {
        this.previewClick = true;
    }

    onMaskClick() {
        if (!this.previewClick) {
            this.setState({ previewVisible: false });
            this.setState({ rotate: 0 });
            this.setState({ scale: 1 });
        }

        this.previewClick = false;
    }

    rotateRight() {
        this.setState((prevState) => ({
            rotate: prevState.rotate + 90
        }));

        this.previewClick = true;
    }

    rotateLeft() {
        this.setState((prevState) => ({
            rotate: prevState.rotate - 90
        }));

        this.previewClick = true;
    }

    zoomIn() {
        this.setState((prevState) => ({
            scale: prevState.scale + 0.1
        }));

        this.previewClick = true;
    }

    zoomOut() {
        this.setState((prevState) => ({
            scale: prevState.scale - 0.1
        }));

        this.previewClick = true;
    }

    onEntering() {
        ZIndexUtils.set('modal', this.mask, PrimeReact.autoZIndex, PrimeReact.zIndex['modal']);
    }

    onEntered() {
        if (this.props.onShow) {
            this.props.onShow();
        }
    }

    onExit() {
        DomHandler.addClass(this.mask, 'p-component-overlay-leave');
    }

    onExiting() {
        if (this.props.onHide) {
            this.props.onHide();
        }
    }

    onExited(el) {
        ZIndexUtils.clear(el);

        this.setState({ maskVisible: false });
    }

    componentWillUnmount() {
        if (this.mask) {
            ZIndexUtils.clear(this.container);
        }
    }

    renderElement() {

        const imagePreviewStyle = { transform: 'rotate(' + this.state.rotate + 'deg) scale(' + this.state.scale + ')' };
        const zoomDisabled = this.state.scale <= 0.5 || this.state.scale >= 1.5;
        // const rotateClassName = 'p-image-preview-rotate-' + this.state.rotate;

        return (
            <div ref={(el) => this.mask = el} className="p-image-mask p-component-overlay p-component-overlay-enter" onClick={this.onMaskClick}>
                <div className="p-image-toolbar">
                    <button className="p-image-action p-link" onClick={this.rotateRight} type="button">
                        <i className="pi pi-refresh"></i>
                    </button>
                    <button className="p-image-action p-link" onClick={this.rotateLeft} type="button">
                        <i className="pi pi-undo"></i>
                    </button>
                    <button className="p-image-action p-link" onClick={this.zoomOut} type="button" disabled={zoomDisabled} >
                        <i className="pi pi-search-minus"></i>
                    </button >
                    <button className="p-image-action p-link" onClick={this.zoomIn} type="button" disabled={zoomDisabled} >
                        <i className="pi pi-search-plus"></i>
                    </button >
                    <button className="p-image-action p-link" type="button" onClick={this.hidePreview} >
                        <i className="pi pi-times"></i>
                    </button >
                </div >
                <CSSTransition nodeRef={this.previewRef} classNames="p-image-preview" in={this.state.previewVisible} timeout={{ enter: 150, exit: 150 }}
                    unmountOnExit onEntering={this.onEntering} onEntered={this.onEntered} onExit={this.onExit} onExiting={this.onExiting} onExited={this.onExited}>
                    <div ref={this.previewRef}>
                        <img src={this.props.src} className="p-image-preview" style={imagePreviewStyle} onClick={this.onPreviewImageClick} alt={this.props.alt} />
                    </div>
                </CSSTransition>
            </div>
        );
    }



    render() {
        const containerClassName = classNames('p-image p-component', this.props.className, {
            'p-image-preview-container': this.props.preview
        });
        const element = this.renderElement();
        const content = this.props.template ? ObjectUtils.getJSXElement(this.props.template, this.props) : <i className="p-image-preview-icon pi pi-eye"></i>

        const { src, alt, width, height } = this.props;

        return (
            <span ref={(el) => this.container = el} className={containerClassName} style={this.props.style}>
                <img src={src} className={this.props.imageClassName} width={width} height={height} style={this.props.imageStyle} alt={alt} />
                {this.props.preview && <div className="p-image-preview-indicator" onClick={this.onImageClick} >
                    {content}
                </div>}

                {this.state.maskVisible && <Portal element={element} appendTo={document.body} />}
            </span>

        );

    }
}



