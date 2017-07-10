import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DomHandler from '../utils/DomHandler';
import classNames from 'classnames';


export class Lightbox extends Component {

    static defaultProps = {
        images:null,
        type:'images',
        style:null,
        styleClass:null,
        easing:'ease-out',
        effectDuration:'500ms'
    };

    static propTypes = {
        images:PropTypes.array,
        type:PropTypes.string,
        style:PropTypes.object,
        styleClass:PropTypes.string,
        easing:PropTypes.string,
        effectDuration:PropTypes.string
    };

    constructor() {
        super();
        this.state = {visible:false,currentImage:null};
    }
    componentDidMount() {
        document.addEventListener('click', (event)=>{
            if(!this.preventDocumentClickListener && this.state.visible) {
                this.hide(event);
            }
            this.preventDocumentClickListener = false;
        });

    }
    onImageClick(event,image,i) {
        this.index=i;
        this.setState({loading:true});
        this.content.style.width = 32 + 'px';
        this.content.style.height = 32 + 'px';
        this.show();
        this.displayImage(image);
        this.preventDocumentClickListener = true;
        event.preventDefault();
    }
    onLinkClick(event){
        this.show();
        this.preventDocumentClickListener = true;
        event.preventDefault();
    }
    show(){
        this.mask=document.createElement('div');
        this.mask.style.zIndex=DomHandler.getZindex();
        DomHandler.addMultipleClasses(this.mask, 'ui-widget-overlay ui-dialog-mask');
        document.body.appendChild(this.mask);
        this.zindex=DomHandler.getZindex();
        this.center();
        this.setState({visible:true});
    }
    center() {
        let elementWidth = DomHandler.getOuterWidth(this.panel);
        let elementHeight = DomHandler.getOuterHeight(this.panel);
        let x,y;
        if(elementWidth === 0 && elementHeight === 0) {
            this.panel.style.visibility = 'hidden';
            this.panel.style.display = 'block';
            elementWidth = DomHandler.getOuterWidth(this.panel);
            elementHeight = DomHandler.getOuterHeight(this.panel);
            this.panel.style.display = 'none';
            this.panel.style.visibility = 'visible';
        }
        let viewport = DomHandler.getViewport();
        x = (viewport.width - elementWidth) / 2;
        y = (viewport.height - elementHeight) / 2;

        this.panel.style.left = x + 'px';
        this.panel.style.top = y + 'px';
    }
    hide(event){
        this.setState({captionText:null});
        this.index = null;
        this.setState({currentImage:null})
        this.panel.style.left = 'auto';
        this.panel.style.top = 'auto';

        if(this.mask) {
            document.body.removeChild(this.mask);
            this.mask = null;
        }

        event.preventDefault();
        this.setState({visible:false})
    }
    displayImage(image){
        setTimeout(() => {
            this.setState({currentImage: image});
            this.setState({captionText:image.title});
        }, 1000);
    }
    prev() {
        this.setState({loading:true});
        this.setState({captionText:null});
        if(this.index > 0) {
            this.displayImage(this.props.images[--this.index]);
        }
    }
    next() {
        this.setState({loading:true});
        this.setState({captionText:null});
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
        }, parseInt(this.props.effectDuration,10));
    }
    render() {
        var images;
        var contentText,contentFrame;

        var leftButton=classNames('ui-state-default ui-lightbox-nav-left ui-corner-right',
            {'ui-helper-hidden':!(this.props.images && this.props.images.length && this.index !== 0 && this.state.currentImage)} );
        var rightButton=classNames('ui-state-default ui-lightbox-nav-right ui-corner-left',
            {'ui-helper-hidden':!(this.props.images && this.props.images.length && this.index < (this.props.images.length - 1) && this.state.currentImage)} );
        var contentClass=classNames('ui-lightbox-content ui-corner-all',{'ui-lightbox-loading':this.state.loading})

        if(this.props.type==='images'){
            images=<div style={this.props.style} className={this.props.styleClass}>{
                this.props.images && this.props.images.map((image,index)=>{
                    var imageItem=
                        <a href={image.source} onClick={event=>this.onImageClick(event,image,index)} key={index} ref={el=>this.image=el} style={{marginLeft:4}}>
                            <img src={image.thumbnail} title={image.title} alt={image.alt}/>
                        </a>
                    ;
                    return imageItem;
                })}</div>
        }
        if(this.props.type==='content'){
            contentText=this.props.children && this.props.children.map((child,index)=>
                child.type==='a'&&<span style={this.props.style} className={this.props.styleClass}
                                                        onClick={this.onLinkClick.bind(this)} key={index}>
                        {child}
                </span>)
            contentFrame=this.props.children && this.props.children.map((child,index)=>
                child.type!=='a'&&<span key={index}>
                    {child}
                </span>
            )
        }
        return (<div>
                {images}
                {contentText}
                <div className="ui-lightbox ui-widget ui-helper-hidden ui-corner-all ui-shadow"
                     style={{transitionProperty:'all',transitionDuration:this.props.effectDuration, transitionTimingFunction:this.props.easing, display:this.state.visible?'block':'none',
                                zIndex:this.zindex }} ref={el=>this.panel=el } onClick={()=>this.preventDocumentClickListener = true}>
                    <div className="ui-lightbox-content-wrapper">
                        <a className={leftButton} style={{zIndex:this.zindex?this.zindex+1:null}} onClick={this.prev.bind(this)}>
                            <span className="fa fa-fw fa-caret-left"></span>
                        </a>
                        <div className={contentClass} ref={el=>this.content=el}
                             style={{transitionProperty:"'width,height'",transitionDuration:this.props.effectDuration, transitionTimingFunction:this.props.easing}}>
                            <img ref={el=>this.img=el} src={this.state.currentImage ? this.state.currentImage.source : ''}
                                 onLoad={this.onImageLoad.bind(this)} alt=""/>
                            {contentFrame}
                        </div>

                        <a className={rightButton} style={{zIndex:this.zindex?this.zindex+1:null}} onClick={this.next.bind(this)}>
                            <span className="fa fa-fw fa-caret-right"></span>
                        </a>
                    </div>
                    <div className="ui-lightbox-caption ui-widget-header" style={{display:this.state.captionText ? 'block' : 'none'}}>
                        <span className="ui-lightbox-caption-text">{this.state.captionText}</span>
                        <a className="ui-lightbox-close ui-corner-all" href="#" onClick={event=>this.hide(event)}>
                            <span className="fa fa-fw fa-close"></span>
                        </a>
                        <div style={{clear:'both'}}></div>
                    </div>
                </div>
            </div>
        );
    }
}