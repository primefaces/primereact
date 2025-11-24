'use client';

import { Rating } from 'primereact/rating';

function AllowHalfDemo() {
    return (
        <div className="flex justify-center">
            <Rating value={3} allowHalf={false}>
                <Rating.Option />
            </Rating>
        </div>
    );
}

export default AllowHalfDemo;
