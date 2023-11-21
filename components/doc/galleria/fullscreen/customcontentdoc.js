import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Galleria } from '@/components/lib/galleria/Galleria';
import { useEffect, useRef, useState } from 'react';
import { PhotoService } from '../../../../service/PhotoService';

export function CustomContentDoc(props) {
    const [images, setImages] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const galleria = useRef(null);

    useEffect(() => {
        PhotoService.getImages().then((data) => setImages(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    };

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    };

    const code = {
        basic: `
<Galleria ref={galleria} value={images} numVisible={7} style={{ maxWidth: '850px' }}
    activeIndex={activeIndex} onItemChange={(e) => setActiveIndex(e.index)}
    circular fullScreen showItemNavigators showThumbnails={false} item={itemTemplate} thumbnail={thumbnailTemplate} />

<div className="grid" style={{ maxWidth: '400px' }}>
    {
        images && images.map((image, index) => {
            let imgEl = <img src={image.thumbnailImageSrc} onClick={
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
import React, { useState, useEffect, useRef } from 'react';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from './service/PhotoService';

export default function CustomContentDemo() {
    const [images, setImages] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);    
    const galleria = useRef(null);

    useEffect(() => {
        PhotoService.getImages().then(data => setImages(data));
    }, []);

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    }

    return (
        <div className="card flex justify-content-center">
            <Galleria ref={galleria} value={images} numVisible={7} style={{ maxWidth: '850px' }}
            activeIndex={activeIndex} onItemChange={(e) => setActiveIndex(e.index)}
            circular fullScreen showItemNavigators showThumbnails={false} item={itemTemplate} thumbnail={thumbnailTemplate} />
            <div className="grid" style={{ maxWidth: '400px' }}>
                {
                    images && images.map((image, index) => {
                        let imgEl = <img src={image.thumbnailImageSrc} alt={image.alt} style={{ cursor: 'pointer' }} onClick={
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
        </div>
    )
}
        `,
        typescript: `
import React, { useState, useEffect, useRef } from 'react';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from './service/PhotoService';

export default function CustomContentDemo() {
    const [images, setImages] = useState(null);
    const [activeIndex, setActiveIndex] = useState<number>(0);    
    const galleria = useRef<Galleria>(null);

    useEffect(() => {
        PhotoService.getImages().then(data => setImages(data));
    }, []);

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    }

    return (
        <div className="card flex justify-content-center">
            <Galleria ref={galleria} value={images} numVisible={7} style={{ maxWidth: '850px' }}
            activeIndex={activeIndex} onItemChange={(e) => setActiveIndex(e.index)}
            circular fullScreen showItemNavigators showThumbnails={false} item={itemTemplate} thumbnail={thumbnailTemplate} />
            <div className="grid" style={{ maxWidth: '400px' }}>
                {
                    images && images.map((image, index) => {
                        let imgEl = <img src={image.thumbnailImageSrc} alt={image.alt} style={{ cursor: 'pointer' }} onClick={
                            () => {setActiveIndex(index); galleria.current.show()}
                        } />
                        return (
                            <div className="col-4" key={index}>
                                {imgEl}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
        `,
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
                <p>
                    Using <i>activeIndex</i>, Galleria is displayed with a specific initial image.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Galleria
                    ref={galleria}
                    value={images}
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
                            return (
                                <div className="col-4" key={index}>
                                    <img
                                        src={image.thumbnailImageSrc}
                                        alt={image.alt}
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => {
                                            setActiveIndex(index);
                                            galleria.current.show();
                                        }}
                                    />
                                </div>
                            );
                        })}
                </div>
            </div>
            <DocSectionCode code={code} service={['PhotoService']} />
        </>
    );
}
