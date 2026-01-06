'use client';

import { Textarea } from 'primereact/textarea';
import * as React from 'react';

export default function InvalidDemo() {
    const [value, setValue] = React.useState('');

    return (
        <div className="flex justify-center">
            <Textarea
                value={value}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)}
                invalid={value === ''}
                rows={5}
                cols={30}
            />
        </div>
    );
}
