import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { Galleria } from '@/components/lib/galleria/Galleria';
import { useEffect, useRef, useState } from 'react';
import { PhotoService } from '../../../../service/PhotoService';

export function WithThumbnailsDoc(props) {
    const [images, setImages] = useState(null);
    const galleria = useRef(null);

    const responsiveOptions = [
        {
            breakpoint: '1500px',
            numVisible: 5
        },
        {
            breakpoint: '1024px',
            numVisible: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

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
<Galleria ref={galleria} value={images} responsiveOptions={responsiveOptions} numVisible={9} style={{ maxWidth: '50%' }} 
    circular fullScreen showItemNavigators item={itemTemplate} thumbnail={thumbnailTemplate} />

<Button label="Show" icon="pi pi-external-link" onClick={() => galleria.current.show()} />
        `,
        javascript: `
import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'primereact/button';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from './service/PhotoService';

export default function WithThumbnailsDemo() {
    const [images, setImages] = useState(null);
    const galleria = useRef(null);

    const responsiveOptions = [
        {
            breakpoint: '1500px',
            numVisible: 5
        },
        {
            breakpoint: '1024px',
            numVisible: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

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
            <Galleria ref={galleria} value={images} responsiveOptions={responsiveOptions} numVisible={9} style={{ maxWidth: '50%' }} 
                circular fullScreen showItemNavigators item={itemTemplate} thumbnail={thumbnailTemplate} />

            <Button label="Show" icon="pi pi-external-link" onClick={() => galleria.current.show()} />
        </div>
    )
}
        `,
        typescript: `
import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'primereact/button';
import { Galleria, GalleriaResponsiveOptions } from 'primereact/galleria';
import { PhotoService } from './service/PhotoService';

export default function WithThumbnailsDemo() {
    const [images, setImages] = useState(null);
    const galleria = useRef(null);

    const responsiveOptions: GalleriaResponsiveOptions[] = [
        {
            breakpoint: '1500px',
            numVisible: 5
        },
        {
            breakpoint: '1024px',
            numVisible: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

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
            <Galleria ref={galleria} value={images} responsiveOptions={responsiveOptions} numVisible={9} style={{ maxWidth: '50%' }} 
                circular fullScreen showItemNavigators item={itemTemplate} thumbnail={thumbnailTemplate} />

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
                <p>
                    Full screen mode is enabled by adding <i>fullScreen</i> property and the <i>ref</i> of the Galleria needs to be defined so that <i>show</i> method can be called from a target like a button.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Galleria ref={galleria} value={images} responsiveOptions={responsiveOptions} numVisible={9} style={{ maxWidth: '50%' }} circular fullScreen showItemNavigators item={itemTemplate} thumbnail={thumbnailTemplate} />

                <Button label="Show" icon="pi pi-external-link" onClick={() => galleria.current.show()} />
            </div>
            <DocSectionCode code={code} service={['PhotoService']} />
        </>
    );
}
