import { useState, useEffect } from 'react';
import { Galleria } from '../../../lib/galleria/Galleria';
import { DocSectionText } from '../../common/docsectiontext';
import { DocSectionCode } from '../../common/docsectioncode';
import { PhotoService } from '../../../../service/PhotoService';
import getConfig from 'next/config';

export function PositionedBottomDoc(props) {
    const [images, setImages] = useState(null);
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

    const itemTemplate = (item) => {
        return <img src={`${contextPath}/${item.itemImageSrc}`} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    };

    const thumbnailTemplate = (item) => {
        return <img src={`${contextPath}/${item.thumbnailImageSrc}`} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
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

export default function PositionedBottomDoc() {
    const [images, setImages] = useState(null);
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

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.alt} style={{ width: '100%', display: 'block' }} />
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.alt} style={{ width: '100%', display: 'block' }} />
    }

    return (
        <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '640px' }}
            item={itemTemplate} thumbnail={thumbnailTemplate} />
    )
}
        `,
        typescript: `
import { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from '../service/PhotoService';

export default function PositionedBottomDoc() {
    const [images, setImages] = useState(null);
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

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.alt} style={{ width: '100%', display: 'block' }} />
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.alt} style={{ width: '100%', display: 'block' }} />
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
            <div className="card flex justify-content-center">
                <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '640px' }} item={itemTemplate} thumbnail={thumbnailTemplate} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
