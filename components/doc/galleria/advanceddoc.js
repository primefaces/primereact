import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { Galleria } from '@/components/lib/galleria/Galleria';
import { classNames } from '@/components/lib/utils/Utils';
import { useEffect, useRef, useState } from 'react';
import { PhotoService } from '../../../service/PhotoService';

export function AdvancedDoc(props) {
    const [images, setImages] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [showThumbnails, setShowThumbnails] = useState(false);
    const [isAutoPlayActive, setAutoPlayActive] = useState(true);
    const [isFullScreen, setFullScreen] = useState(false);
    const galleria = useRef(null);

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
        PhotoService.getImages().then((data) => setImages(data));
        bindDocumentListeners();

        return () => unbindDocumentListeners();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        setAutoPlayActive(galleria.current.isAutoPlayActive());
    }, [isAutoPlayActive]);

    const onItemChange = (event) => {
        setActiveIndex(event.index);
    };

    const toggleFullScreen = () => {
        if (isFullScreen) {
            closeFullScreen();
        } else {
            openFullScreen();
        }
    };

    const onFullScreenChange = () => {
        setFullScreen((prevState) => !prevState);
    };

    const openFullScreen = () => {
        let elem = document.querySelector('.custom-galleria');

        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            /* Firefox */
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
            /* Chrome, Safari & Opera */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
            /* IE/Edge */
            elem.msRequestFullscreen();
        }
    };

    const closeFullScreen = () => {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    };

    const bindDocumentListeners = () => {
        document.addEventListener('fullscreenchange', onFullScreenChange);
        document.addEventListener('mozfullscreenchange', onFullScreenChange);
        document.addEventListener('webkitfullscreenchange', onFullScreenChange);
        document.addEventListener('msfullscreenchange', onFullScreenChange);
    };

    const unbindDocumentListeners = () => {
        document.removeEventListener('fullscreenchange', onFullScreenChange);
        document.removeEventListener('mozfullscreenchange', onFullScreenChange);
        document.removeEventListener('webkitfullscreenchange', onFullScreenChange);
        document.removeEventListener('msfullscreenchange', onFullScreenChange);
    };

    const thumbnailTemplate = (item) => {
        return (
            <div className="grid grid-nogutter justify-content-center">
                <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />
            </div>
        );
    };

    const itemTemplate = (item) => {
        if (isFullScreen) {
            return <img src={item.itemImageSrc} alt={item.alt} />;
        }

        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    };

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
                <Button icon="pi pi-list" onClick={() => setShowThumbnails((prevState) => !prevState)} />
                <Button
                    icon={autoPlayClassName}
                    onClick={() => {
                        if (!isAutoPlayActive) {
                            galleria.current.startSlideShow();
                            setAutoPlayActive(true);
                        } else {
                            galleria.current.stopSlideShow();
                            setAutoPlayActive(false);
                        }
                    }}
                />
                {images && (
                    <span className="title-container">
                        <span>
                            {activeIndex + 1}/{images.length}
                        </span>
                        <span className="title">{images[activeIndex].title}</span>
                        <span>{images[activeIndex].alt}</span>
                    </span>
                )}
                <Button icon={fullScreenClassName} onClick={() => toggleFullScreen()} className="fullscreen-button" />
            </div>
        );
    };

    const footer = renderFooter();
    const galleriaClassName = classNames('custom-galleria', {
        fullscreen: isFullScreen
    });

    const code = {
        basic: `
<Galleria ref={galleria} value={images} activeIndex={activeIndex} onItemChange={onItemChange}
    showThumbnails={showThumbnails} showItemNavigators showItemNavigatorsOnHover
    numVisible={5} circular autoPlay transitionInterval={3000} responsiveOptions={responsiveOptions}
    item={itemTemplate} thumbnail={thumbnailTemplate} footer={footer}
    style={{ maxWidth: '640px' }} className={galleriaClassName} />
        `,
        javascript: `
import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'primereact/button';
import { Galleria } from 'primereact/galleria';
import { classNames } from 'primereact/utils';
import { PhotoService } from './service/PhotoService';
import './GalleriaAdvancedDemo.css';

export default function AdvancedDemo() {
    const [images, setImages] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [showThumbnails, setShowThumbnails] = useState(false);
    const [isAutoPlayActive, setAutoPlayActive] = useState(true);
    const [isFullScreen, setFullScreen] = useState(false);
    
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
        PhotoService.getImages().then(data => setImages(data));
        bindDocumentListeners();

        return () => unbindDocumentListeners();
    },[]);

    useEffect(() => {
        setAutoPlayActive(galleria.current.isAutoPlayActive())
    },[isAutoPlayActive]);

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
                <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />
            </div>
        );
    }

    const itemTemplate = (item) => {
        if (isFullScreen) {
            return <img src={item.itemImageSrc} alt={item.alt} />
        }

        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />
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
        <div className="card galleria-demo">
            <Galleria ref={galleria} value={images} activeIndex={activeIndex} onItemChange={onItemChange}
                showThumbnails={showThumbnails} showItemNavigators showItemNavigatorsOnHover
                numVisible={5} circular autoPlay transitionInterval={3000} responsiveOptions={responsiveOptions}
                item={itemTemplate} thumbnail={thumbnailTemplate} footer={footer}
                style={{ maxWidth: '640px' }} className={galleriaClassName} />
        </div>
    )
}
        `,
        typescript: `
import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'primereact/button';
import { Galleria, GalleriaResponsiveOptions } from 'primereact/galleria';
import { classNames } from 'primereact/utils';
import { PhotoService } from './service/PhotoService';
import './GalleriaAdvancedDemo.css';

export default function AdvancedDemo() {
    const [images, setImages] = useState(null);
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [showThumbnails, setShowThumbnails] = useState<boolean>(false);
    const [isAutoPlayActive, setAutoPlayActive] = <boolean>useState(true);
    const [isFullScreen, setFullScreen] = useState<boolean>(false);
    
    const galleria = useRef(null)

    const responsiveOptions: GalleriaResponsiveOptions = [
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
        PhotoService.getImages().then(data => setImages(data));
        bindDocumentListeners();

        return () => unbindDocumentListeners();
    },[]);

    useEffect(() => {
        setAutoPlayActive(galleria.current.isAutoPlayActive())
    },[isAutoPlayActive]);

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
                <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />
            </div>
        );
    }

    const itemTemplate = (item) => {
        if (isFullScreen) {
            return <img src={item.itemImageSrc} alt={item.alt} />
        }

        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />
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
        <div className="card galleria-demo">
            <Galleria ref={galleria} value={images} activeIndex={activeIndex} onItemChange={onItemChange}
                showThumbnails={showThumbnails} showItemNavigators showItemNavigatorsOnHover
                numVisible={5} circular autoPlay transitionInterval={3000} responsiveOptions={responsiveOptions}
                item={itemTemplate} thumbnail={thumbnailTemplate} footer={footer}
                style={{ maxWidth: '640px' }} className={galleriaClassName} />
        </div>
    )
}
        `,

        extFiles: {
            'GalleriaAdvancedDemo.css': `
/* GalleriaAdvancedDemo.css */

.galleria-demo {
    .custom-indicator-galleria {
        .indicator-text {
            color: #e9ecef;
            cursor: pointer;
        }

        .p-highlight {
            .indicator-text {
                color: var(--primary-color);
            }
        }
    }

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
    `
        },
        data: `
/* PhotoService */
{
    itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Advanced Galleria implementation with a custom UI.</p>
            </DocSectionText>
            <div className="card galleria-demo">
                <Galleria
                    ref={galleria}
                    value={images}
                    activeIndex={activeIndex}
                    onItemChange={onItemChange}
                    showThumbnails={showThumbnails}
                    showItemNavigators
                    showItemNavigatorsOnHover
                    numVisible={5}
                    circular
                    autoPlay
                    transitionInterval={3000}
                    responsiveOptions={responsiveOptions}
                    item={itemTemplate}
                    thumbnail={thumbnailTemplate}
                    footer={footer}
                    style={{ maxWidth: '640px' }}
                    className={galleriaClassName}
                />
            </div>
            <DocSectionCode code={code} service={['PhotoService']} />
        </>
    );
}
