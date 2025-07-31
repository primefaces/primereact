import { useRatingChangeEvent } from '@primereact/types/shared/rating';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import React from 'react';

function ControlledDemo() {
    const [value, setValue] = React.useState<number | undefined>(4);

    return (
        <div className="card flex flex-col justify-center gap-4">
            <div className="flex items-center gap-2">
                <Button onClick={() => setValue(2.5)} severity="secondary" variant="outlined">
                    2.5 Star
                </Button>
                <Button onClick={() => setValue(3)} severity="secondary" variant="outlined">
                    3 Star
                </Button>
                <Button onClick={() => setValue(3.5)} severity="secondary" variant="outlined">
                    3.5 Star
                </Button>
            </div>
            <Rating value={value} onValueChange={(e: useRatingChangeEvent) => setValue(e.value)}>
                <Rating.Option />
            </Rating>
        </div>
    );
}

export default ControlledDemo;
