import { useState, useEffect } from 'react';
import { Galleria } from '../../../lib/galleria/Galleria';
import { DocSectionText } from '../../common/docsectiontext';
import { DocSectionCode } from '../../common/docsectioncode';
import { PhotoService } from '../../../../service/PhotoService';
import { RadioButton } from '../../../lib/radiobutton/RadioButton';
import { Checkbox } from '../../../lib/checkbox/Checkbox';
import getConfig from 'next/config';

export function PositionDoc(props) {
    const [images, setImages] = useState(null);
    const [inside, setInside] = useState(false);
    const [position, setPosition] = useState('bottom');
    const positionOptions = [
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
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    useEffect(() => {
        PhotoService.getImages().then((data) => setImages(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const itemTemplate = (item) => {
        return <img src={`${contextPath}/${item.itemImageSrc}`} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    };

    const code = {
        basic: `
<Galleria value={images} style={{ maxWidth: '640px' }} showThumbnails={false} showIndicators 
    showIndicatorsOnItem={inside} indicatorsPosition={position} item={itemTemplate} />
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from './service/PhotoService';

export default function PositionDemo() {
    const [images, setImages] = useState(null);
    const [inside, setInside] = useState(false);
    const [position, setPosition] = useState('bottom');
    
    useEffect(() => {
        PhotoService.getImages().then((data) => setImages(data));
    }, []);

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} onError={(e) => e.target.src='https://www.primefaces.org/cdn/images/placeholder.png'} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    };

    return (
        <div className="card">
            <div className="flex flex-wrap gap-3 mb-5">
                {positionOptions.map((option) => {
                    const { label, value } = option;

                    return (
                        <div className="flex align-items-center" key={label}>
                            <RadioButton value={value} onChange={(e) => setPosition(e.value)} checked={position === value} />
                            <label htmlFor={label} className="ml-2">{label}</label>
                        </div>
                    );
                })}
            </div>
            <div className="flex align-items-center mb-5">
                <Checkbox inputId="inside_cbox" onChange={e => setInside(e.checked)} checked={inside}></Checkbox>
                <label htmlFor="inside_cbox" className="ml-2">Inside</label>
            </div>
            <Galleria value={images} style={{ maxWidth: '640px' }} showThumbnails={false} showIndicators 
                    showIndicatorsOnItem={inside} indicatorsPosition={position} item={itemTemplate} />
        </div>
    )
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from './service/PhotoService';

export default function PositionDemo() {
    const [images, setImages] = useState(null);
    const [inside, setInside] = useState<boolean>(false);
    const [position, setPosition] = useState<string>('bottom');

    useEffect(() => {
        PhotoService.getImages().then((data) => setImages(data));
    }, []);

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} onError={(e) => e.target.src='https://www.primefaces.org/cdn/images/placeholder.png'} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    };
    
    return (
        <div className="card">
            <div className="flex flex-wrap gap-3 mb-5">
                {positionOptions.map((option) => {
                    const { label, value } = option;

                    return (
                        <div className="flex align-items-center" key={label}>
                            <RadioButton value={value} onChange={(e) => setPosition(e.value)} checked={position === value} />
                            <label htmlFor={label} className="ml-2">{label}</label>
                        </div>
                    );
                })}
            </div>
            <div className="flex align-items-center mb-5">
                <Checkbox inputId="inside_cbox" onChange={e => setInside(e.checked)} checked={inside}></Checkbox>
                <label htmlFor="inside_cbox" className="ml-2">Inside</label>
            </div>
            <Galleria value={images} style={{ maxWidth: '640px' }} showThumbnails={false} showIndicators 
                    showIndicatorsOnItem={inside} indicatorsPosition={position} item={itemTemplate} />
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
                <p>
                    Indicators can be placed at four different sides using the <i>indicatorsPosition</i> property. In addition, enabling <i>showIndicatorsOnItem</i> moves the indicators inside the image section.
                </p>
            </DocSectionText>
            <div className="card">
                <div className="flex flex-wrap gap-3 mb-5">
                    {positionOptions.map((option) => {
                        const { label, value } = option;

                        return (
                            <div className="flex align-items-center" key={label}>
                                <RadioButton value={value} onChange={(e) => setPosition(e.value)} checked={position === value} />
                                <label htmlFor={label} className="ml-2">
                                    {label}
                                </label>
                            </div>
                        );
                    })}
                </div>
                <div className="flex align-items-center mb-5">
                    <Checkbox inputId="inside_cbox" onChange={(e) => setInside(e.checked)} checked={inside}></Checkbox>
                    <label htmlFor="inside_cbox" className="ml-2">
                        Inside
                    </label>
                </div>
                <Galleria value={images} style={{ maxWidth: '640px' }} showThumbnails={false} showIndicators showIndicatorsOnItem={inside} indicatorsPosition={position} item={itemTemplate} />
            </div>
            <DocSectionCode code={code} service={['PhotoService']} />
        </>
    );
}
