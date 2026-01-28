'use client';
import { useRatingChangeEvent } from '@primereact/types/shared/rating';
import { Button } from '@primereact/ui/button';
import { Rating } from '@primereact/ui/rating';
import React from 'react';

function ControlledDemo() {
    const [value, setValue] = React.useState<number | undefined>(4);

    return (
        <div className="flex flex-col items-center justify-center gap-6">
            <Rating.Root value={value} onValueChange={(e: useRatingChangeEvent) => setValue(e.value)}>
                <Rating.Option className="[&_svg]:size-5!" />
            </Rating.Root>
            <div className="flex items-center gap-2">
                <Button onClick={() => setValue(2.5)} severity="secondary" variant="outlined" size="small">
                    2.5 Star
                </Button>
                <Button onClick={() => setValue(3)} severity="secondary" variant="outlined" size="small">
                    3 Star
                </Button>
                <Button onClick={() => setValue(3.5)} severity="secondary" variant="outlined" size="small">
                    3.5 Star
                </Button>
            </div>
        </div>
    );
}

export default ControlledDemo;
