import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DomHandler from '../utils/DomHandler';
import classNames from 'classnames';

export class Lightbox extends Component {

    static defaultProps = {
        id: null,
        images: null,
        target: null,
        style: null,
        className: null,
        easing: 'ease-out',
        effectDuration: '500ms'
    };

    static propTypes = {
        id: PropTypes.string,
        images: PropTypes.array,
        target: PropTypes.any,
        style: PropTypes.object,
        className: PropTypes.string,
        easing: PropTypes.string,
        effectDuration: PropTypes.string
    };

    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            currentImage: null
        };

        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.onImageLoad = this.onImageLoad.bind(this);
        this.onTargetClick = this.onTargetClick.bind(this);
    }

    bindDocumentClickListener() {
        if (!this.documentClickListener) {
            this.documentClickListener = (event) => {
                if (this.panel && !this.panel.contains(event.target)) {
                    this.hide();
                }
            };
            document.addEventListener('click', this.documentClickListener);
        }
    }

    unbindDocumentClickListener() {
        if (this.documentClickListener) {
            document.removeEventListener('click', this.documentClickListener);
            this.documentClickListener = null;
        }
    }

    componentWillUnmount() {
        this.unbindDocumentClickListener();
    }

    onImageClick(event, image, i) {
        this.index = i;
        this.setState({loading:true});
        this.content.style.width = 32 + 'px';
        this.content.style.height = 32 + 'px';
        this.show();
        this.displayImage(image);
        this.preventDocumentClickListener = true;
        event.preventDefault();
    }

    onTargetClick(event) {
        this.show();
        event.preventDefault();
    }

    show() {
        this.mask = document.createElement('div');
        this.mask.style.zIndex = String(DomHandler.generateZIndex());
        DomHandler.addMultipleClasses(this.mask, 'p-component-overlay p-dialog-mask');
        document.body.appendChild(this.mask);
        this.panel.style.zIndex = String(DomHandler.generateZIndex());
        this.setState({visible:true});
        this.bindDocumentClickListener();
    }

    hide() {
        this.index = null;
        this.setState({currentImage:null})
        if(this.mask) {
            document.body.removeChild(this.mask);
            this.mask = null;
        }

        this.setState({visible:false});
        this.unbindDocumentClickListener();
    }


    displayImage(image){
        setTimeout(() => {
            this.setState({currentImage: image});
        }, 1000);
    }

    prev() {
        this.setState({loading:true});
        if(this.index > 0) {
            this.displayImage(this.props.images[--this.index]);
        }
    }

    next() {
        this.setState({loading:true});
        if(this.index <= (this.props.images.length - 1)) {
            this.displayImage(this.props.images[++this.index]);
        }
    }

    onImageLoad(event){
        let image = event.target;
        image.style.visibility = 'hidden';
        image.style.display = 'block';
        let imageWidth = DomHandler.getOuterWidth(image);
        let imageHeight = DomHandler.getOuterHeight(image);
        image.style.display = 'none';
        image.style.visibility = 'visible';

        this.content.style.width = imageWidth + 'px';
        this.content.style.height = imageHeight + 'px';
        this.panel.style.left = parseInt(this.panel.style.left,10) + (DomHandler.getOuterWidth(this.panel) - imageWidth) / 2 + 'px';
        this.panel.style.top = parseInt(this.panel.style.top,10) + (DomHandler.getOuterHeight(this.panel) - imageHeight) / 2 + 'px';

        setTimeout(() => {
            DomHandler.fadeIn(image, 500);
            image.style.display = 'block';
            this.setState({loading:false});
        }, parseInt(this.props.effectDuration, 10));
    }

    renderLeftNav() {
        const className = classNames('p-lightbox-nav-left p-link', {'p-hidden': !(this.props.images && this.props.images.length && this.index !== 0 && this.state.currentImage)});

        return (
            <button type="button" className={className} onClick={this.prev}>
                <span className="p-lightbox-nav-icon pi pi-chevron-left"></span>
            </button>
        );
    }

    renderRightNav() {
        const className = classNames('p-lightbox-nav-right p-link', {'p-hidden': !(this.props.images && this.props.images.length && this.index < (this.props.images.length - 1) && this.state.currentImage)});

        return (
            <button type="button" className={className} onClick={this.next}>
                <span className="p-lightbox-nav-icon pi pi-chevron-right"></span>
            </button>
        )
    }

    renderImages() {
        return (
            <div style={this.props.style} className={this.props.className}>{
                this.props.images && this.props.images.map((image,index)=>{
                    var imageItem =
                        <a href={image.source} onClick={event=>this.onImageClick(event,image,index)} key={index} className="p-lightbox-image-target">
                            <img src={image.thumbnail} title={image.title} alt={image.alt}/>
                        </a>
                    ;
                    return imageItem;
                })}
            </div>
        );
    }

    renderTarget() {
        if (this.props.target) {
            return (
                <span onClick={this.onTargetClick}>
                    {this.props.target}
                </span>
            );
        }
        else {
            return this.renderImages();
        }
    }

    renderContent() {
        let content;

        if (this.state.visible) {
            if (this.props.target)
                content = this.props.children;
            else
                content = <img src={this.state.currentImage ? this.state.currentImage.source : null} onLoad={this.onImageLoad} alt="" style={{display: this.state.loading ? 'none': 'inline'}} />;
        }

        return (
            <div className="p-lightbox-content" ref={el => this.content = el} style={{transitionDuration:this.props.effectDuration, transitionTimingFunction: this.props.easing}}>
                {content}
            </div>
        );
    }

    render() {
        const leftButton = this.renderLeftNav();
        const rightButton = this.renderRightNav();
        const target = this.renderTarget();
        const content = this.renderContent();
        const containerClassName = classNames('p-lightbox p-component p-hidden', {'p-lightbox-loading': this.state.loading});

        return (
            <div id={this.props.id}>
                {target}
                <div className={containerClassName} style={{transitionProperty:'all', transitionDuration:this.props.effectDuration, transitionTimingFunction: this.props.easing, display: this.state.visible ? 'block': 'none'}}
                    ref={el => this.panel = el}>
                    <div className="p-lightbox-content-wrapper">
                        {leftButton}
                        {content}
                        {rightButton}
                    </div>
                </div>
            </div>
        );
    }
}
