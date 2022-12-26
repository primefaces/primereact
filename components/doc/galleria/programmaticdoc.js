import { useState, useEffect } from 'react';
import { Button } from '../../lib/button/Button';
import { Galleria } from '../../lib/galleria/Galleria';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';
import { PhotoService } from '../../../service/PhotoService';
import getConfig from 'next/config';

export function ProgrammaticDoc(props) {
    const [images, setImages] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const galleriaService = new PhotoService();

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
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    useEffect(() => {
        galleriaService.getImages().then((data) => setImages(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const next = () => {
        setActiveIndex((prevState) => (prevState === images.length - 1 ? 0 : prevState + 1));
    };

    const prev = () => {
        setActiveIndex((prevState) => (prevState === images.length + 1 ? 0 : prevState - 1));
    };

    const itemTemplate = (item) => {
        return <img src={`${contextPath}/${item.itemImageSrc}`} onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    };

    const thumbnailTemplate = (item) => {
        return <img src={`${contextPath}/${item.thumbnailImageSrc}`} onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} alt={item.alt} style={{ display: 'block' }} />;
    };

    const code = {
        basic: `
<div className="py-2">
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
import { PhotoService } from '../service/PhotoService';

export default function ProgrammaticDoc() {
    const [images, setImages] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0)
    const galleriaService = new PhotoService();

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

    const next = () => {
        setActiveIndex(prevState => (prevState === images.length - 1) ? 0 : prevState + 1)
    }

    const prev = () => {
        setActiveIndex(prevState => (prevState === images.length + 1) ? 0 : prevState - 1)

    }

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.alt} style={{ display: 'block' }} />;
    }

    return (
        <div className="card flex flex-column justify-content-center align-items-center">
            <div className="py-2">
                <Button icon="pi pi-minus" onClick={prev} className="p-button-secondary" />
                <Button icon="pi pi-plus" onClick={next} className="p-button-secondary ml-2" />
            </div>

            <Galleria value={images} activeIndex={activeIndex} onItemChange={(e) => setActiveIndex(e.index)} responsiveOptions={responsiveOptions} numVisible={5}
                item={itemTemplate} thumbnail={thumbnailTemplate} style={{ maxWidth: '640px' }} />
        </div>
    )
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from '../service/PhotoService';

export default function ProgrammaticDoc() {
    const [images, setImages] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0)
    const galleriaService = new PhotoService();

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

    const next = () => {
        setActiveIndex(prevState => (prevState === images.length - 1) ? 0 : prevState + 1)
    }

    const prev = () => {
        setActiveIndex(prevState => (prevState === images.length + 1) ? 0 : prevState - 1)

    }

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.alt} style={{ display: 'block' }} />;
    }

    return (
        <div className="card flex flex-column justify-content-center align-items-center">
            <div className="py-2">
                <Button icon="pi pi-minus" onClick={prev} className="p-button-secondary" />
                <Button icon="pi pi-plus" onClick={next} className="p-button-secondary ml-2" />
            </div>
            <Galleria value={images} activeIndex={activeIndex} onItemChange={(e) => setActiveIndex(e.index)} responsiveOptions={responsiveOptions} numVisible={5}
                item={itemTemplate} thumbnail={thumbnailTemplate} style={{ maxWidth: '640px' }} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Programmatic Doc</p>
            </DocSectionText>
            <div className="card flex flex-column justify-content-center align-items-center">
                <div>
                    <div className="py-2 align-self-start">
                        <Button icon="pi pi-minus" onClick={prev} className="p-button-secondary" />
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
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
