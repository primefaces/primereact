'use client';

import { Rating } from 'primereact/rating';

function ReadOnlyDemo() {
    return (
        <div className="flex justify-center">
            <Rating value={3} readOnly>
                <Rating.Option />
            </Rating>
        </div>
    );
}

export default ReadOnlyDemo;
