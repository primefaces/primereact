'use client';

import { ImageCompare } from 'primereact/imagecompare';

export default function BasicDemo() {
    return (
        <div>
            <ImageCompare>
                <ImageCompare.Left src="https://primefaces.org/cdn/primevue/images/compare/island1.jpg" />
                <ImageCompare.Right src="https://primefaces.org/cdn/primevue/images/compare/island2.jpg" />
                <ImageCompare.Slider />
            </ImageCompare>
        </div>
    );
}
