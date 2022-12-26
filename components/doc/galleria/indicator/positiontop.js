import { useState, useEffect } from 'react';
import { Galleria } from '../../../lib/galleria/Galleria';
import { DocSectionText } from '../../common/docsectiontext';
import { DocSectionCode } from '../../common/docsectioncode';
import { PhotoService } from '../../../../service/PhotoService';
import getConfig from 'next/config';

export function PositionTopDoc(props) {
    const [images, setImages] = useState(null);

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
        PhotoService.getImages().then((data) => setImages(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const itemTemplate = (item) => {
        return <img src={`${contextPath}/${item.itemImageSrc}`} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    };

    const code = {
        basic: `
<Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '640px' }}
    showThumbnails={false} showIndicators changeItemOnIndicatorHover showIndicatorsOnItem indicatorsPosition="top" item={itemTemplate} />
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from '../service/PhotoService';

export default function PositionTopDoc() {
    const [images, setImages] = useState(null);
    

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
        PhotoService.getImages().then((data) => setImages(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    };

    return (
        <div className="card flex justify-content-center">
            <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '640px' }}
                showThumbnails={false} showIndicators changeItemOnIndicatorHover showIndicatorsOnItem indicatorsPosition="top" item={itemTemplate} />
        </div>
    )
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from '../service/PhotoService';

export default function PositionTopDoc() {
    const [images, setImages] = useState(null);
    

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
        PhotoService.getImages().then((data) => setImages(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    };
    
    return (
        <div className="card flex justify-content-center">
            <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '640px' }}
                showThumbnails={false} showIndicators changeItemOnIndicatorHover showIndicatorsOnItem indicatorsPosition="top" item={itemTemplate} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Position at Top</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Galleria
                    value={images}
                    responsiveOptions={responsiveOptions}
                    numVisible={5}
                    style={{ maxWidth: '640px' }}
                    showThumbnails={false}
                    showIndicators
                    changeItemOnIndicatorHover
                    showIndicatorsOnItem
                    indicatorsPosition="top"
                    item={itemTemplate}
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
