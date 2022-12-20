import { useState, useEffect } from 'react';
import { Galleria } from '../../lib/galleria/Galleria';
import { DocSectionCode } from '../common/docsectioncode';
import { PhotoService } from '../../../service/PhotoService';
import getConfig from 'next/config';
import { RadioButton } from '../../lib/radiobutton/RadioButton';
import { DocSectionText } from '../common/docsectiontext';

export function ThumbnailDoc(props) {
    const [images, setImages] = useState(null);
    const [selectedOptionValue, setSelectedOptionValue] = useState('bottom');

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

    const onRadioButtonChange = (option) => {
        setSelectedOptionValue(option.value);
    };

    const demoOptions = [
        {
            label: 'Bottom',
            value: 'bottom'
        },
        {
            label: 'Top',
            value: 'top'
        },
        {
            label: 'Left',
            value: 'left'
        },
        {
            label: 'Right',
            value: 'right'
        }
    ];

    const code = {
        basic: `
<Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '640px' }}
    item={itemTemplate} thumbnailsPosition="${selectedOptionValue}" thumbnail={thumbnailTemplate} />
        `,
        javascript: `
import { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from '../service/PhotoService';

export default function ThumbnailDoc() {
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
        <div className="card flex flex-wrap justify-content-center align-items-center w-full gap-3">
            <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '640px' }}
                item={itemTemplate} thumbnailsPosition="${selectedOptionValue}" thumbnail={thumbnailTemplate} />
        </div>
    )
}
        `,
        typescript: `
import { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from '../service/PhotoService';

export default function ThumbnailDoc() {
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
        <div className="card flex flex-wrap justify-content-center align-items-center w-full gap-3">
            <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '640px' }}
                item={itemTemplate} thumbnailsPosition="${selectedOptionValue}" thumbnail={thumbnailTemplate} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Thumbnails represent a smaller version of the actual content.</p>
            </DocSectionText>
            <div className="card mt-3 flex flex-column justify-content-center">
                <div className="flex flex-row justify-content-center align-items-center flex-wrap">
                    <div className="card flex flex-wrap justify-content-center align-items-center w-full gap-3">
                        {demoOptions.map((option) => {
                            const { value, label } = option;

                            return (
                                <div className="mr-4" key={label}>
                                    <RadioButton value={label} onChange={() => onRadioButtonChange(option)} checked={selectedOptionValue === value} />
                                    <label htmlFor={label} className="ml-2">
                                        {label} Position
                                    </label>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <Galleria style={{ maxWidth: '640px' }} value={images} responsiveOptions={responsiveOptions} numVisible={5} item={itemTemplate} thumbnailsPosition={selectedOptionValue} thumbnail={thumbnailTemplate} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
