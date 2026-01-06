'use client';

import { Rating } from '@primereact/ui/rating';

function AllowHalfDemo() {
    return (
        <div className="flex justify-center">
            <Rating.Root value={3} allowHalf={false}>
                <Rating.Option />
            </Rating.Root>
        </div>
    );
}

export default AllowHalfDemo;
