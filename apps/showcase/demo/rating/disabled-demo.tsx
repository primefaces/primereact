'use client';

import { Rating } from 'primereact/rating';

function DisabledDemo() {
    return (
        <div className="flex justify-center">
            <Rating value={3} disabled>
                <Rating.Option />
            </Rating>
        </div>
    );
}

export default DisabledDemo;
