'use client';

import { useRatingChangeEvent } from '@primereact/types/shared/rating';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import React from 'react';

function ControlledDemo() {
    const [value, setValue] = React.useState<number | undefined>(4);

    return (
        <div className="flex flex-col justify-center gap-4">
            <div className="flex items-center gap-2">
                <Button.Root onClick={() => setValue(2.5)} severity="secondary" variant="outlined">
                    2.5 Star
                </Button.Root>
                <Button.Root onClick={() => setValue(3)} severity="secondary" variant="outlined">
                    3 Star
                </Button.Root>
                <Button.Root onClick={() => setValue(3.5)} severity="secondary" variant="outlined">
                    3.5 Star
                </Button.Root>
            </div>
            <Rating.Root value={value} onValueChange={(e: useRatingChangeEvent) => setValue(e.value)}>
                <Rating.Option />
            </Rating.Root>
        </div>
    );
}

export default ControlledDemo;
