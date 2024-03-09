import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Galleria } from '@/components/lib/galleria/Galleria';
import { useEffect, useState } from 'react';
import { PhotoService } from '../../../../service/PhotoService';

export function PTDoc(props) {
    const [images, setImages] = useState(null);

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

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%' }} />;
    };

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} />;
    };

    const code = {
        basic: `
<Galleria
    value={images}
    responsiveOptions={responsiveOptions}
    numVisible={5}
    style={{ maxWidth: '640px' }}
    item={itemTemplate}
    thumbnail={thumbnailTemplate}
    pt={{
        root: { style: { maxWidth: '640px' } }
    }}
/>
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from './service/PhotoService';

export default function PTDemo() {
    const [images, setImages] = useState(null);
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
    }, [])

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%' }} />
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} />
    }

    return (
        <div className="card">
            <Galleria
                value={images}
                responsiveOptions={responsiveOptions}
                numVisible={5}
                style={{ maxWidth: '640px' }}
                item={itemTemplate}
                thumbnail={thumbnailTemplate}
                pt={{
                    root: { style: { maxWidth: '640px' } }
                }}
            />
        </div>
    )
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { Galleria, GalleriaResponsiveOptions } from 'primereact/galleria';
import { PhotoService } from './service/PhotoService';

export default function PTDemo() {
    const [images, setImages] = useState(null);
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

    const itemTemplate = (item: any) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%' }} />
    }

    const thumbnailTemplate = (item: any) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} />
    }

    return (
        <div className="card">
            <Galleria
                value={images}
                responsiveOptions={responsiveOptions}
                numVisible={5}
                style={{ maxWidth: '640px' }}
                item={itemTemplate}
                thumbnail={thumbnailTemplate}
                pt={{
                    root: { style: { maxWidth: '640px' } }
                }}
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
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <Galleria
                    value={images}
                    responsiveOptions={responsiveOptions}
                    numVisible={5}
                    style={{ maxWidth: '640px' }}
                    item={itemTemplate}
                    thumbnail={thumbnailTemplate}
                    pt={{
                        root: { style: { maxWidth: '640px' } }
                    }}
                />
            </div>
            <DocSectionCode code={code} service={['PhotoService']} />
        </>
    );
}
