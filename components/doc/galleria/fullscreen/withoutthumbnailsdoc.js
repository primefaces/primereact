import { useEffect, useRef, useState } from 'react';
import { PhotoService } from '../../../../service/PhotoService';
import { Button } from '../../../lib/button/Button';
import { Galleria } from '../../../lib/galleria/Galleria';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function WithoutThumbnailsDoc(props) {
    const [images, setImages] = useState(null);
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
<Galleria ref={galleria} value={images} numVisible={9} style={{ maxWidth: '50%' }} 
    circular fullScreen showItemNavigators showThumbnails={false} item={itemTemplate} thumbnail={thumbnailTemplate} />

<Button label="Show" icon="pi pi-external-link" onClick={() => galleria.current.show()} />
        `,
        javascript: `
import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'primereact/button';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from './service/PhotoService';

export default function WithoutThumbnailsDemo() {
    const [images, setImages] = useState(null);
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
            <Galleria ref={galleria} value={images} numVisible={9} style={{ maxWidth: '50%' }} 
                circular fullScreen showItemNavigators showThumbnails={false} item={itemTemplate} thumbnail={thumbnailTemplate} />

            <Button label="Show" icon="pi pi-external-link" onClick={() => galleria.current.show()} />
        </div>
    )
}
        `,
        typescript: `
import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'primereact/button';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from './service/PhotoService';

export default function WithoutThumbnailsDemo() {
    const [images, setImages] = useState(null);
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
            <Galleria ref={galleria} value={images} numVisible={9} style={{ maxWidth: '50%' }} 
                circular fullScreen showItemNavigators showThumbnails={false} item={itemTemplate} thumbnail={thumbnailTemplate} />

            <Button label="Show" icon="pi pi-external-link" onClick={() => galleria.current.show()} />
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
                <p>Thumbnails can also be hidden in full screen mode.</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Galleria ref={galleria} value={images} numVisible={9} style={{ maxWidth: '50%' }} circular fullScreen showItemNavigators showThumbnails={false} item={itemTemplate} thumbnail={thumbnailTemplate} />

                <Button label="Show" icon="pi pi-external-link" onClick={() => galleria.current.show()} />
            </div>
            <DocSectionCode code={code} service={['PhotoService']} />
        </>
    );
}
