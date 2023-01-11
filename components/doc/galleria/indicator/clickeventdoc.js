import { useState, useEffect } from 'react';
import { Galleria } from '../../../lib/galleria/Galleria';
import { DocSectionText } from '../../common/docsectiontext';
import { DocSectionCode } from '../../common/docsectioncode';
import { PhotoService } from '../../../../service/PhotoService';
import getConfig from 'next/config';

export function ClickEventDoc(props) {
    const [images, setImages] = useState(null);
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    useEffect(() => {
        PhotoService.getImages().then((data) => setImages(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const itemTemplate = (item) => {
        return <img src={`${contextPath}/${item.itemImageSrc}`} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    };

    const code = {
        basic: `
<Galleria value={images} style={{ maxWidth: '640px' }} showThumbnails={false} showIndicators item={itemTemplate} />
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from './service/PhotoService';

export default function ClickEventDemo() {
    const [images, setImages] = useState(null);
    
    useEffect(() => {
        PhotoService.getImages().then((data) => setImages(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} onError={(e) => e.target.src='https://www.primefaces.org/cdn/images/placeholder.png'} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    };

    return (
        <div className="card">
            <Galleria value={images} style={{ maxWidth: '640px' }} showThumbnails={false} showIndicators item={itemTemplate} />
        </div>
    )
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from './service/PhotoService';

export default function ClickEventDemo() {
    const [images, setImages] = useState(null);

    useEffect(() => {
        PhotoService.getImages().then((data) => setImages(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} onError={(e) => e.target.src='https://www.primefaces.org/cdn/images/placeholder.png'} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    };

    return (
        <div className="card">
            <Galleria value={images} style={{ maxWidth: '640px' }} showThumbnails={false} showIndicators item={itemTemplate} />
        </div>
    )
}
        `,
        data: `
/* PhotoService */
{
    itemImageSrc: 'images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'images/galleria/galleria1s.jpg',
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
                    Indicators are displayed at the bottom by enabling <i>showIndicators</i> property and interacted with the click event by default.
                </p>
            </DocSectionText>
            <div className="card">
                <Galleria value={images} style={{ maxWidth: '640px' }} showThumbnails={false} showIndicators item={itemTemplate} />
            </div>
            <DocSectionCode code={code} service={['PhotoService']} />
        </>
    );
}
