import { useState, useEffect, useRef } from 'react';
import { Button } from '../../../lib/button/Button';
import { Galleria } from '../../../lib/galleria/Galleria';
import { DocSectionText } from '../../common/docsectiontext';
import { DocSectionCode } from '../../common/docsectioncode';
import { PhotoService } from '../../../../service/PhotoService';
import getConfig from 'next/config';

export function WithThumbnailsDoc(props) {
    const [images, setImages] = useState(null);

    const contextPath = getConfig().publicRuntimeConfig.contextPath;
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
        return <img src={`${contextPath}/${item.itemImageSrc}`} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    };

    const thumbnailTemplate = (item) => {
        return <img src={`${contextPath}/${item.thumbnailImageSrc}`} alt={item.alt} style={{ display: 'block' }} />;
    };

    const code = {
        basic: `
<Galleria ref={galleria} value={images} responsiveOptions={responsiveOptions} numVisible={9} style={{ maxWidth: '50%' }} circular fullScreen showItemNavigators item={itemTemplate} thumbnail={thumbnailTemplate} />

<Button label="Show" icon="pi pi-external-link" onClick={() => galleria.current.show()} />
        `,
        javascript: `
import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'primereact/button';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from './service/PhotoService';

export default function WithThumbnailsDoc() {
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
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.alt} style={{ display: 'block' }} />;
    }

    return (
        <div className="card flex justify-content-center">
            <Galleria ref={galleria} value={images} responsiveOptions={responsiveOptions} numVisible={9} style={{ maxWidth: '50%' }} circular fullScreen showItemNavigators item={itemTemplate} thumbnail={thumbnailTemplate} />
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

export default function WithThumbnailsDoc() {
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
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.alt} style={{ display: 'block' }} />;
    }
    
    return (
        <div className="card flex justify-content-center">
            <Galleria ref={galleria} value={images} responsiveOptions={responsiveOptions} numVisible={9} style={{ maxWidth: '50%' }} circular fullScreen showItemNavigators item={itemTemplate} thumbnail={thumbnailTemplate} />
            <Button label="Show" icon="pi pi-external-link" onClick={() => galleria.current.show()} />
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
                <p>With Thumbnails</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Galleria ref={galleria} value={images} responsiveOptions={responsiveOptions} numVisible={9} style={{ maxWidth: '50%' }} circular fullScreen showItemNavigators item={itemTemplate} thumbnail={thumbnailTemplate} />

                <Button label="Show" icon="pi pi-external-link" onClick={() => galleria.current.show()} />
            </div>
            <DocSectionCode code={code} service={['PhotoService']} />
        </>
    );
}
