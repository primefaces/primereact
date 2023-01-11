import { useState, useEffect } from 'react';
import { Galleria } from '../../../lib/galleria/Galleria';
import { DocSectionText } from '../../common/docsectiontext';
import { DocSectionCode } from '../../common/docsectioncode';
import { PhotoService } from '../../../../service/PhotoService';
import getConfig from 'next/config';

export function IndicatorTemplateDoc(props) {
    const [images, setImages] = useState(null);
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    useEffect(() => {
        PhotoService.getImages().then((data) => setImages(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const itemTemplate = (item) => {
        return <img src={`${contextPath}/${item.itemImageSrc}`} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    };

    const indicatorTemplate = (index) => {
        return <span style={{ color: '#ffffff', cursor: 'pointer'}}>{index + 1}</span>;
    };

    const code = {
        basic: `
<Galleria value={images} style={{ maxWidth: '640px' }} className="custom-indicator-galleria" showThumbnails={false} showIndicators changeItemOnIndicatorHover
    showIndicatorsOnItem indicatorsPosition="left" item={itemTemplate} indicator={indicatorTemplate} />
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from './service/PhotoService';

export default function IndicatorTemplateDemo() {
    const [images, setImages] = useState(null);

    useEffect(() => {
        PhotoService.getImages().then((data) => setImages(data));
    }, []);

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} onError={(e) => e.target.src='https://www.primefaces.org/cdn/images/placeholder.png'} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    };

    const indicatorTemplate = (index) => {
        return <span style={{ color: '#ffffff', cursor: 'pointer'}}>{index + 1}</span>;
    };

    return (
        <div className="card">
            <Galleria
                value={images}
                style={{ maxWidth: '640px' }}
                className="custom-indicator-galleria"
                showThumbnails={false}
                showIndicators
                changeItemOnIndicatorHover
                showIndicatorsOnItem
                indicatorsPosition="left"
                item={itemTemplate}
                indicator={indicatorTemplate}
            />
        </div>
    )
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from './service/PhotoService';

export default function IndicatorTemplateDemo() {
    const [images, setImages] = useState(null);

    useEffect(() => {
        PhotoService.getImages().then((data) => setImages(data));
    }, []);

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} onError={(e) => e.target.src='https://www.primefaces.org/cdn/images/placeholder.png'} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    };

    const indicatorTemplate = (index) => {
        return <span style={{ color: '#ffffff', cursor: 'pointer'}}>{index + 1}</span>;
    };
    
    return (
        <div className="card">
            <Galleria
                value={images}
                style={{ maxWidth: '640px' }}
                className="custom-indicator-galleria"
                showThumbnails={false}
                showIndicators
                changeItemOnIndicatorHover
                showIndicatorsOnItem
                indicatorsPosition="left"
                item={itemTemplate}
                indicator={indicatorTemplate}
            />
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
                <p>Indicator content can be customized with the <i>indicator</i> property that takes an index as a parameter and expects content.</p>
            </DocSectionText>
            <div className="card">
                <Galleria
                    value={images}
                    style={{ maxWidth: '640px' }}
                    className="custom-indicator-gallerisa"
                    showThumbnails={false}
                    showIndicators
                    changeItemOnIndicatorHover
                    showIndicatorsOnItem
                    indicatorsPosition="left"
                    item={itemTemplate}
                    indicator={indicatorTemplate}
                />
            </div>
            <DocSectionCode code={code} service={['PhotoService']} />
        </>
    );
}
