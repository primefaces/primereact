import { useEffect, useState } from 'react';
import { PhotoService } from '../../../../service/PhotoService';
import { Galleria } from '../../../lib/galleria/Galleria';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function IndicatorsDoc(props) {
    const [images, setImages] = useState(null);

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
<Galleria value={images} numVisible={5} circular style={{ maxWidth: '640px' }} 
    showItemNavigators showItemNavigatorsOnHover showIndicators
    showThumbnails={false} item={itemTemplate} thumbnail={thumbnailTemplate} />
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from './service/PhotoService';

export default function IndicatorsDemo() {
    const [images, setImages] = useState(null);

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
        <div className="card"> 
            <Galleria value={images} numVisible={5} circular style={{ maxWidth: '640px' }} 
                showItemNavigators showItemNavigatorsOnHover showIndicators
                showThumbnails={false} item={itemTemplate} thumbnail={thumbnailTemplate} />
        </div>
    )
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from './service/PhotoService';

export default function IndicatorsDemo() {
    const [images, setImages] = useState(null)

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
        <div className="card"> 
            <Galleria value={images} numVisible={5} circular style={{ maxWidth: '640px' }} 
                showItemNavigators showItemNavigatorsOnHover showIndicators
                showThumbnails={false} item={itemTemplate} thumbnail={thumbnailTemplate} />
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
                <p>Navigators and Indicators can be combined as well.</p>
            </DocSectionText>
            <div className="card">
                <Galleria value={images} numVisible={5} circular style={{ maxWidth: '640px' }} showItemNavigators showItemNavigatorsOnHover showIndicators showThumbnails={false} item={itemTemplate} thumbnail={thumbnailTemplate} />
            </div>
            <DocSectionCode code={code} service={['PhotoService']} />
        </>
    );
}
