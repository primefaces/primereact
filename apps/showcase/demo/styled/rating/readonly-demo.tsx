'use client';

import { Rating } from 'primereact/rating';

function ReadOnlyDemo() {
    return (
        <div className="flex justify-center">
            <Rating.Root value={3} readOnly>
                <Rating.Option />
            </Rating.Root>
        </div>
    );
}

export default ReadOnlyDemo;
