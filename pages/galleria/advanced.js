import React, { useRef, useEffect, useState, memo } from 'react';
import { classNames } from '../../components/lib/utils/ClassNames';
import { PhotoService } from '../../service/PhotoService';
import { Button } from '../../components/lib/button/Button';
import { Galleria } from '../../components/lib/galleria/Galleria';
import { TabView, TabPanel } from '../../components/lib/tabview/TabView';
import { CodeHighlight } from '../../components/doc/common/codehighlight';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';
import getConfig from 'next/config';

const GalleriaAdvancedDemo = () => {
    const [images, setImages] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [showThumbnails, setShowThumbnails] = useState(false);
    const [isAutoPlayActive, setAutoPlayActive] = useState(true);
    const [isFullScreen, setFullScreen] = useState(false);
    const galleriaService = new PhotoService();
    const contextPath = getConfig().publicRuntimeConfig.contextPath;
    const galleria = useRef(null)

    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '960px',
            numVisible: 4
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    useEffect(() => {
        galleriaService.getImages().then(data => setImages(data));
        bindDocumentListeners();

        return () => unbindDocumentListeners();
    },[]) // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        setAutoPlayActive(galleria.current.isAutoPlayActive())
    },[isAutoPlayActive]);

    const onThumbnailChange = (event) => {
        setActiveIndex(event.index)
    }

    const onItemChange = (event) => {
        setActiveIndex(event.index)
    }

    const toggleFullScreen = () => {
        if (isFullScreen) {
            closeFullScreen();
        }
        else {
            openFullScreen();
        }
    }

    const onFullScreenChange = () => {
        setFullScreen(prevState => !prevState )
    }

    const openFullScreen = () => {
        let elem = document.querySelector('.custom-galleria');
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
        else if (elem.mozRequestFullScreen) { /* Firefox */
            elem.mozRequestFullScreen();
        }
        else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
            elem.webkitRequestFullscreen();
        }
        else if (elem.msRequestFullscreen) { /* IE/Edge */
            elem.msRequestFullscreen();
        }
    }

    const closeFullScreen = () => {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        }
        else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
        else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }

    const bindDocumentListeners = () => {
        document.addEventListener("fullscreenchange", onFullScreenChange);
        document.addEventListener("mozfullscreenchange", onFullScreenChange);
        document.addEventListener("webkitfullscreenchange", onFullScreenChange);
        document.addEventListener("msfullscreenchange", onFullScreenChange);
    }

    const unbindDocumentListeners = () => {
        document.removeEventListener("fullscreenchange", onFullScreenChange);
        document.removeEventListener("mozfullscreenchange", onFullScreenChange);
        document.removeEventListener("webkitfullscreenchange", onFullScreenChange);
        document.removeEventListener("msfullscreenchange", onFullScreenChange);
    }

    const thumbnailTemplate = (item) => {
        return (
            <div className="grid grid-nogutter justify-content-center">
                <img src={`${contextPath}/${item.thumbnailImageSrc}`} alt={item.alt} style={{ display: 'block' }} />
            </div>
        );
    }

    const itemTemplate = (item) => {
        if (isFullScreen) {
            return <img src={`${contextPath}/${item.itemImageSrc}`} alt={item.alt} />
        }

        return <img src={`${contextPath}/${item.itemImageSrc}`} alt={item.alt} style={{ width: '100%', display: 'block' }} />
    }

    const renderFooter = () => {
        let autoPlayClassName = classNames('pi', {
            'pi-play': !isAutoPlayActive,
            'pi-pause': isAutoPlayActive
        });

        let fullScreenClassName = classNames('pi', {
            'pi-window-maximize': !isFullScreen,
            'pi-window-minimize': isFullScreen
        });

        return (
            <div className="custom-galleria-footer">
                <Button icon="pi pi-list" onClick={() => setShowThumbnails(prevState => !prevState)} />
                <Button icon={autoPlayClassName} onClick={() => {
                    if (!isAutoPlayActive) {
                        galleria.current.startSlideShow();
                        setAutoPlayActive(true)
                    }
                    else {
                        galleria.current.stopSlideShow();
                        setAutoPlayActive(false)
                    }
                }} />
                {
                    images && (
                        <span className="title-container">
                            <span>{activeIndex + 1}/{images.length}</span>
                            <span className="title">{images[activeIndex].title}</span>
                            <span>{images[activeIndex].alt}</span>
                        </span>
                    )
                }
                <Button icon={fullScreenClassName} onClick={() => toggleFullScreen()} className="fullscreen-button" />
            </div>
        );
    }

    const footer = renderFooter();
    const galleriaClassName = classNames('custom-galleria', {
        'fullscreen': isFullScreen
    });

    return (
        <div>
            <Head>
                <title>React Gallery Component - Advanced</title>
                <meta name="description" content="Galleria can be extended further to implement complex requirements." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Galleria <span>Advanced</span></h1>
                    <p>Galleria can be extended further to implement complex requirements.</p>
                </div>

                <DocActions github="galleria/advanced.js" />
            </div>

            <div className="content-section implementation galleria-demo">
                <div className="card">
                    <Galleria ref={galleria} value={images} activeIndex={activeIndex} onItemChange={onItemChange}
                        showThumbnails={showThumbnails} showItemNavigators showItemNavigatorsOnHover
                        numVisible={5} circular autoPlay transitionInterval={3000} responsiveOptions={responsiveOptions}
                        item={itemTemplate} thumbnail={thumbnailTemplate} footer={footer}
                        style={{ maxWidth: '640px' }} className={galleriaClassName} />
                </div>
            </div>

            <GalleriaAdvancedDemoDoc />
        </div>
    );
}

export default GalleriaAdvancedDemo;

export const GalleriaAdvancedDemoDoc = memo(() => {

    return (
        <div className="content-section documentation" id="app-doc">
            <TabView>
                <TabPanel header="Source">
<CodeHighlight lang="js">
{`
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { classNames } from 'primereact/utils';
import { PhotoService } from '../service/PhotoService';
import { Button } from 'primereact/button';
import { Galleria } from 'primereact/galleria';
import './GalleriaDemo.scss';

export class GalleriaAdvancedDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            images: null,
            activeIndex: 0,
            showThumbnails: false,
            isAutoPlayActive: true,
            isFullScreen: false
        };

        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 5
            },
            {
                breakpoint: '960px',
                numVisible: 4
            },
            {
                breakpoint: '768px',
                numVisible: 3
            },
            {
                breakpoint: '560px',
                numVisible: 1
            }
        ];

        this.galleriaService = new PhotoService();
        this.itemTemplate = this.itemTemplate.bind(this);
        this.thumbnailTemplate = this.thumbnailTemplate.bind(this);
        this.onThumbnailChange = this.onThumbnailChange.bind(this);
        this.onItemChange = this.onItemChange.bind(this);
        this.onFullScreenChange = this.onFullScreenChange.bind(this);
    }

    componentDidMount() {
        this.galleriaService.getImages().then(data => this.setState({ images: data }));
        this.bindDocumentListeners();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.isAutoPlayActive !== this.galleria.isAutoPlayActive()) {
            this.setState({
                isAutoPlayActive: this.galleria.isAutoPlayActive()
            });
        }
    }

    componentWillUnmount() {
        this.unbindDocumentListeners();
    }

    onThumbnailChange(event) {
        this.setState({ activeIndex: event.index });
    }

    onItemChange(event) {
        this.setState({ activeIndex: event.index });
    }

    toggleFullScreen() {
        if (this.state.isFullScreen) {
            this.closeFullScreen();
        }
        else {
            this.openFullScreen();
        }
    }

    onFullScreenChange() {
        this.setState((prevState) => ({ isFullScreen: !prevState.isFullScreen }));
    }

    openFullScreen() {
        let elem = document.querySelector('.custom-galleria');
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
        else if (elem.mozRequestFullScreen) { /* Firefox */
            elem.mozRequestFullScreen();
        }
        else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
            elem.webkitRequestFullscreen();
        }
        else if (elem.msRequestFullscreen) { /* IE/Edge */
            elem.msRequestFullscreen();
        }
    }

    closeFullScreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        }
        else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
        else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }

    bindDocumentListeners() {
        document.addEventListener("fullscreenchange", this.onFullScreenChange);
        document.addEventListener("mozfullscreenchange", this.onFullScreenChange);
        document.addEventListener("webkitfullscreenchange", this.onFullScreenChange);
        document.addEventListener("msfullscreenchange", this.onFullScreenChange);
    }

    unbindDocumentListeners() {
        document.removeEventListener("fullscreenchange", this.onFullScreenChange);
        document.removeEventListener("mozfullscreenchange", this.onFullScreenChange);
        document.removeEventListener("webkitfullscreenchange", this.onFullScreenChange);
        document.removeEventListener("msfullscreenchange", this.onFullScreenChange);
    }

    thumbnailTemplate(item) {
        return (
            <div className="grid grid-nogutter justify-content-center">
                <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />
            </div>
        );
    }

    itemTemplate(item) {
        if (this.state.isFullScreen) {
            return <img src={item.itemImageSrc} alt={item.alt} />
        }

        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />
    }

    renderFooter() {
        let autoPlayClassName = classNames('pi', {
            'pi-play': !this.state.isAutoPlayActive,
            'pi-pause': this.state.isAutoPlayActive
        });

        let fullScreenClassName = classNames('pi', {
            'pi-window-maximize': !this.state.isFullScreen,
            'pi-window-minimize': this.state.isFullScreen
        });

        return (
            <div className="custom-galleria-footer">
                <Button icon="pi pi-list" onClick={() => this.setState({ showThumbnails: !this.state.showThumbnails })} />
                <Button icon={autoPlayClassName} onClick={() => {
                    if (!this.state.isAutoPlayActive) {
                        this.galleria.startSlideShow();
                        this.setState({ isAutoPlayActive: true });
                    }
                    else {
                        this.galleria.stopSlideShow();
                        this.setState({ isAutoPlayActive: false });
                    }
                }} />
                {
                    this.state.images && (
                        <span className="title-container">
                            <span>{this.state.activeIndex + 1}/{this.state.images.length}</span>
                            <span className="title">{this.state.images[this.state.activeIndex].title}</span>
                            <span>{this.state.images[this.state.activeIndex].alt}</span>
                        </span>
                    )
                }
                <Button icon={fullScreenClassName} onClick={() => this.toggleFullScreen()} className="fullscreen-button" />
            </div>
        );
    }

    render() {
        const footer = this.renderFooter();
        const galleriaClassName = classNames('custom-galleria', {
            'fullscreen': this.state.isFullScreen
        });

        return (
            <div className="galleria-demo">
                <div className="card">
                    <Galleria ref={(el) => this.galleria = el} value={this.state.images} activeIndex={this.state.activeIndex} onItemChange={this.onItemChange}
                        showThumbnails={this.state.showThumbnails} showItemNavigators showItemNavigatorsOnHover
                        numVisible={5} circular autoPlay transitionInterval={3000} responsiveOptions={this.responsiveOptions}
                        item={this.itemTemplate} thumbnail={this.thumbnailTemplate} footer={footer}
                        style={{ maxWidth: '640px' }} className={galleriaClassName} />
                </div>
            </div>
        );
    }
}
`}
</CodeHighlight>
<CodeHighlight lang="scss">
{`
.galleria-demo {
    .custom-galleria {
        &.fullscreen {
            display: flex;
            flex-direction: column;

            .p-galleria-content {
                flex-grow: 1;
                justify-content: center;
            }
        }

        .p-galleria-content {
            position: relative;
        }

        .p-galleria-thumbnail-wrapper {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
        }

        .p-galleria-thumbnail-items-container {
            width: 100%;
        }

        .custom-galleria-footer {
            display: flex;
            align-items: center;
            background-color: rgba(0, 0, 0, .9);
            color: #ffffff;

            > button {
                background-color: transparent;
                color: #ffffff;
                border: 0 none;
                border-radius: 0;
                margin: .2rem 0;

                &.fullscreen-button {
                    margin-left: auto;
                }

                &:hover {
                    background-color: rgba(255, 255, 255, 0.1);
                }
            }
        }

        .title-container {
            > span {
                font-size: .9rem;
                padding-left: .829rem;

                &.title {
                    font-weight: bold;
                }
            }
        }
    }
}

`}
</CodeHighlight>
                </TabPanel>
            </TabView>
        </div>
    );
})
