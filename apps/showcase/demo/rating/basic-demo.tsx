'use client';

import { Rating } from 'primereact/rating';

function BasicDemo() {
    return (
        <div className="flex justify-center">
            <Rating value={3.5}>
                <Rating.Option />
            </Rating>
        </div>
    );
}

export default BasicDemo;
