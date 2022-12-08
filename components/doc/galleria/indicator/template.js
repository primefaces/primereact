import { useState, useEffect } from 'react';
import { Galleria } from '../../../lib/galleria/Galleria';
import { DocSectionText } from '../../common/docsectiontext';
import { DocSectionCode } from '../../common/docsectioncode';
import { PhotoService } from '../../../../service/PhotoService';
import getConfig from 'next/config';

export function IndicatorTemplateDoc(props) {
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

    const indicatorTemplate = (index) => {
        return <span className="indicator-text">{index + 1}</span>;
    };

    const code = {
        basic: `
<Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '640px' }} className="custom-indicator-galleria"
    showThumbnails={false} showIndicators changeItemOnIndicatorHover showIndicatorsOnItem indicatorsPosition="left" item={itemTemplate} indicator={indicatorTemplate} />

        `,
        javascript: `
import { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from '../service/PhotoService';

export default function IndicatorTemplateDoc() {
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
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    };

    const indicatorTemplate = (index) => {
        return (
            <span className="indicator-text">
                {index + 1}
            </span>
        )
    }

    return (
        <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '640px' }} className="custom-indicator-galleria"
            showThumbnails={false} showIndicators changeItemOnIndicatorHover showIndicatorsOnItem indicatorsPosition="left" item={itemTemplate} indicator={indicatorTemplate} />
    )
}
        `,
        typescript: `
import { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from '../service/PhotoService';

export default function IndicatorTemplateDoc() {
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
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    };

    const indicatorTemplate = (index) => {
        return (
            <span className="indicator-text">
                {index + 1}
            </span>
        )
    }
    
    return (
        <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '640px' }} className="custom-indicator-galleria"
            showThumbnails={false} showIndicators changeItemOnIndicatorHover showIndicatorsOnItem indicatorsPosition="left" item={itemTemplate} indicator={indicatorTemplate} />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Indicator Template</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Galleria
                    value={images}
                    responsiveOptions={responsiveOptions}
                    numVisible={5}
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
            <DocSectionCode code={code} />
        </>
    );
}
