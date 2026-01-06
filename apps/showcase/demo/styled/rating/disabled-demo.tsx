'use client';

import { Rating } from 'primereact/rating';

function DisabledDemo() {
    return (
        <div className="flex justify-center">
            <Rating.Root value={3} disabled>
                <Rating.Option />
            </Rating.Root>
        </div>
    );
}

export default DisabledDemo;
