import getConfig from 'next/config';
import { useEffect, useState } from 'react';
import { PhotoService } from '../../../service/PhotoService';
import { Galleria } from '../../lib/galleria/Galleria';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function GaleriaDemo(props) {
    const [images, setImages] = useState(null);

    const contextPath = getConfig().publicRuntimeConfig.contextPath;
    const galleriaService = new PhotoService();

    useEffect(() => {
        galleriaService.getImages().then((data) => setImages(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

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

    const itemTemplate = (item) => {
        return <img src={`${contextPath}/${item.itemImageSrc}`} alt={item.alt} style={{ width: '100%' }} />;
    };

    const thumbnailTemplate = (item) => {
        return <img src={`${contextPath}/${item.thumbnailImageSrc}`} alt={item.alt} />;
    };

    const code = {
        basic: `
<Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '640px' }}
item={itemTemplate} thumbnail={thumbnailTemplate} />
        `,
        javascript: `
import { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from '../service/PhotoService';

export default function GaleriaDemo() {
    const [images, setImages] = useState(null);
    const galleriaService = new PhotoService();

    useEffect(() => {
        galleriaService.getImages().then(data => setImages(data));
    }, [])

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

    const itemTemplate = (item) => {
        return <img src={\`images/\${item.itemImageSrc}\`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.alt} style={{ width: '100%' }} />
    }

    const thumbnailTemplate = (item) => {
        return <img src={\`images/\${item.thumbnailImageSrc}\`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.alt} />
    }

    return (
        <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '640px' }}
        item={itemTemplate} thumbnail={thumbnailTemplate} />
    )
}
        `,
        typescript: `
import { useState, useEffect } from 'react';
import { Galleria, GalleriaResponsiveOptions } from 'primereact/galleria';
import { PhotoService } from '../service/PhotoService';

export default function GaleriaDemo() {
    const [images, setImages] = useState(null);
    const galleriaService = new PhotoService();

    useEffect(() => {
        galleriaService.getImages().then(data => setImages(data));
    }, [])

    const responsiveOptions: GalleriaResponsiveOptions[] = [
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

    const itemTemplate = (item: any) => {
        return <img src={\`images/\${item.itemImageSrc}\`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.alt} style={{ width: '100%' }} />
    }

    const thumbnailTemplate = (item: any) => {
        return <img src={\`images/\${item.thumbnailImageSrc}\`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.alt} />
    }

    return (
        <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '640px' }}
        item={itemTemplate} thumbnail={thumbnailTemplate} />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p></p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '640px' }} item={itemTemplate} thumbnail={thumbnailTemplate} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
