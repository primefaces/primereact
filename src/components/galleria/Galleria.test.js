import React, { useEffect, useState } from 'react';
import { render } from '@testing-library/react';
import { Galleria } from './Galleria';
import { PhotoService } from '../../showcase/service/PhotoService';

const GalleriaTestComponent = () => {

    const [images, setImages] = useState(null)

    useEffect(() => {
        const galleriaService = new PhotoService();
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
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%' }} />
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} />
    }

    return (
        <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '640px' }}
            item={itemTemplate} thumbnail={thumbnailTemplate} />
    )
}

describe('Galleria Component', () => {
    test('should display the Galleria', () => {
        const { container } = render(<GalleriaTestComponent />);

        expect(container).toBeInTheDocument();

    })
})