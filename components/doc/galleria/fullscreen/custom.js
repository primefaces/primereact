import { useState, useEffect, useRef } from 'react';
import { Galleria } from '../../../lib/galleria/Galleria';
import { DocSectionText } from '../../common/docsectiontext';
import { DocSectionCode } from '../../common/docsectioncode';
import { PhotoService } from '../../../../service/PhotoService';
import getConfig from 'next/config';

export function CustomContentDoc(props) {
    const [images, setImages] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const galleriaService = new PhotoService();
    const contextPath = getConfig().publicRuntimeConfig.contextPath;
    const galleria = useRef(null);

    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 5
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
        galleriaService.getImages().then((data) => setImages(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const itemTemplate = (item) => {
        return <img src={`${contextPath}/${item.itemImageSrc}`} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    };

    const thumbnailTemplate = (item) => {
        return <img src={`${contextPath}/${item.thumbnailImageSrc}`} alt={item.alt} style={{ display: 'block' }} />;
    };

    const code = {
        basic: `
<Galleria ref={galleria} value={images} responsiveOptions={responsiveOptions} numVisible={7} style={{ maxWidth: '850px' }}
activeIndex={activeIndex} onItemChange={(e) => setActiveIndex(e.index)}
circular fullScreen showItemNavigators showThumbnails={false} item={itemTemplate} thumbnail={thumbnailTemplate} />
<div className="grid" style={{ maxWidth: '400px' }}>
    {
        images && images.map((image, index) => {
            let imgEl = <img src={image.thumbnailImageSrc} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={image.alt} style={{ cursor: 'pointer' }} onClick={
                () => {setActiveIndex(index); galleria.current.show()}
            } />
            return (
                <div className="col-3" key={index}>
                    {imgEl}
                </div>
            )
        })
    }
</div>
        `,
        javascript: `
import { useState, useEffect, useRef } from 'react';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from '../service/PhotoService';

export default function CustomContentDoc() {
    const [images, setImages] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const galleriaService = new PhotoService();
    const galleria = useRef(null);

    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 5
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
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.alt} style={{ display: 'block' }} />;
    }

    return (
        <Galleria ref={galleria} value={images} responsiveOptions={responsiveOptions} numVisible={7} style={{ maxWidth: '850px' }}
        activeIndex={activeIndex} onItemChange={(e) => setActiveIndex(e.index)}
        circular fullScreen showItemNavigators showThumbnails={false} item={itemTemplate} thumbnail={thumbnailTemplate} />

        <div className="grid" style={{ maxWidth: '400px' }}>
            {
                images && images.map((image, index) => {
                    let imgEl = <img src={image.thumbnailImageSrc} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={image.alt} style={{ cursor: 'pointer' }} onClick={
                        () => {setActiveIndex(index); galleria.current.show()}
                    } />

                    return (
                        <div className="col-3" key={index}>
                            {imgEl}
                        </div>
                    )
                })
            }
        </div>
    )
}
        `,
        typescript: `
import { useState, useEffect, useRef } from 'react';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from '../service/PhotoService';

export default function CustomContentDoc() {
    const [images, setImages] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const galleriaService = new PhotoService();
    const galleria = useRef(null);

    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 5
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
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.alt} style={{ display: 'block' }} />;
    }
    
    return (
        <Galleria ref={galleria} value={images} responsiveOptions={responsiveOptions} numVisible={7} style={{ maxWidth: '850px' }}
        activeIndex={activeIndex} onItemChange={(e) => setActiveIndex(e.index)}
        circular fullScreen showItemNavigators showThumbnails={false} item={itemTemplate} thumbnail={thumbnailTemplate} />

        <div className="grid" style={{ maxWidth: '400px' }}>
            {
                images && images.map((image, index) => {
                    let imgEl = <img src={image.thumbnailImageSrc} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={image.alt} style={{ cursor: 'pointer' }} onClick={
                        () => {setActiveIndex(index); galleria.current.show()}
                    } />

                    return (
                        <div className="col-3" key={index}>
                            {imgEl}
                        </div>
                    )
                })
            }
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Custom Content</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Galleria
                    ref={galleria}
                    value={images}
                    responsiveOptions={responsiveOptions}
                    numVisible={7}
                    style={{ maxWidth: '850px' }}
                    activeIndex={activeIndex}
                    onItemChange={(e) => setActiveIndex(e.index)}
                    circular
                    fullScreen
                    showItemNavigators
                    showThumbnails={false}
                    item={itemTemplate}
                    thumbnail={thumbnailTemplate}
                />
                <div className="grid" style={{ maxWidth: '400px' }}>
                    {images &&
                        images.map((image, index) => {
                            let imgEl = (
                                <img
                                    src={`${contextPath}/${image.thumbnailImageSrc}`}
                                    onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')}
                                    alt={image.alt}
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => {
                                        setActiveIndex(index);
                                        galleria.current.show();
                                    }}
                                />
                            );

                            return (
                                <div className="col-3" key={index}>
                                    {imgEl}
                                </div>
                            );
                        })}
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
