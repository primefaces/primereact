'use client';

import { Rating } from 'primereact/rating';

function BasicDemo() {
    return (
        <div className="flex justify-center">
            <Rating.Root value={3.5}>
                <Rating.Option />
            </Rating.Root>
        </div>
    );
}

export default BasicDemo;
