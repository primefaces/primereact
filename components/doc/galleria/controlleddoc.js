import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { Galleria } from '@/components/lib/galleria/Galleria';
import { useEffect, useState } from 'react';
import { PhotoService } from '../../../service/PhotoService';

export function ControlledDoc(props) {
    const [images, setImages] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const responsiveOptions = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    useEffect(() => {
        PhotoService.getImages().then((data) => setImages(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const next = () => {
        setActiveIndex((prevState) => (prevState === images.length - 1 ? 0 : prevState + 1));
    };

    const prev = () => {
        setActiveIndex((prevState) => (prevState === 0 ? 0 : prevState - 1));
    };

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    };

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    };

    const code = {
        basic: `
<div>
    <Button icon="pi pi-minus" onClick={prev} className="p-button-secondary" />
    <Button icon="pi pi-plus" onClick={next} className="p-button-secondary ml-2" />
</div>

<Galleria value={images} activeIndex={activeIndex} onItemChange={(e) => setActiveIndex(e.index)} responsiveOptions={responsiveOptions} numVisible={5}
    item={itemTemplate} thumbnail={thumbnailTemplate} style={{ maxWidth: '640px' }} />
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from './service/PhotoService';

export default function ControlledDemo() {
    const [images, setImages] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0)

    const responsiveOptions = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    useEffect(() => {
        PhotoService.getImages().then(data => setImages(data));
    }, []);

    const next = () => {
        setActiveIndex(prevState => (prevState === images.length - 1) ? 0 : prevState + 1)
    }

    const prev = () => {
        setActiveIndex((prevState) => (prevState === 0 ? 0 : prevState - 1));
    };

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    }

    return (
        <div className="card">
            <div className="mb-3">
                <Button icon="pi pi-minus" onClick={prev} />
                <Button icon="pi pi-plus" onClick={next} className="p-button-secondary ml-2" />
            </div>

            <Galleria
                value={images}
                activeIndex={activeIndex}
                onItemChange={(e) => setActiveIndex(e.index)}
                responsiveOptions={responsiveOptions}
                numVisible={5}
                item={itemTemplate}
                thumbnail={thumbnailTemplate}
                style={{ maxWidth: '640px' }}
            />
        </div>
    )
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from './service/PhotoService';

export default function ControlledDemo() {
    const [images, setImages] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0)
    
    const responsiveOptions: GalleriaResponsiveOptions[] = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    useEffect(() => {
        PhotoService.getImages().then(data => setImages(data));
    }, []);

    const next = () => {
        setActiveIndex(prevState => (prevState === images.length - 1) ? 0 : prevState + 1)
    }

    const prev = () => {
        setActiveIndex((prevState) => (prevState === 0 ? 0 : prevState - 1));
    };

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    }

    return (
        <div className="card">
            <div className="mb-3">
                <Button icon="pi pi-minus" onClick={prev} />
                <Button icon="pi pi-plus" onClick={next} className="p-button-secondary ml-2" />
            </div>

            <Galleria
                value={images}
                activeIndex={activeIndex}
                onItemChange={(e) => setActiveIndex(e.index)}
                responsiveOptions={responsiveOptions}
                numVisible={5}
                item={itemTemplate}
                thumbnail={thumbnailTemplate}
                style={{ maxWidth: '640px' }}
            />
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
                    Galleria can be controlled programmatically using a binding to <i>activeIndex</i> along with <i>onItemChange</i> event to update the active index.
                </p>
            </DocSectionText>
            <div className="card">
                <div className="mb-3">
                    <Button icon="pi pi-minus" onClick={prev} />
                    <Button icon="pi pi-plus" onClick={next} className="p-button-secondary ml-2" />
                </div>

                <Galleria value={images} activeIndex={activeIndex} onItemChange={(e) => setActiveIndex(e.index)} responsiveOptions={responsiveOptions} numVisible={5} item={itemTemplate} thumbnail={thumbnailTemplate} style={{ maxWidth: '640px' }} />
            </div>
            <DocSectionCode code={code} service={['PhotoService']} />
        </>
    );
}
