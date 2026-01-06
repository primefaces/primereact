'use client';

import { Rating } from 'primereact/rating';

function StarsDemo() {
    return (
        <div className="flex justify-center">
            <Rating.Root stars={10}>
                <Rating.Option />
            </Rating.Root>
        </div>
    );
}

export default StarsDemo;
