'use client';

import { Rating } from 'primereact/rating';

function StarsDemo() {
    return (
        <div className="flex justify-center">
            <Rating stars={10}>
                <Rating.Option />
            </Rating>
        </div>
    );
}

export default StarsDemo;
