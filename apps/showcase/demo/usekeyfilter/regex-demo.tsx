'use client';

import { useKeyFilter } from '@primereact/hooks';
import { InputText } from 'primereact/inputtext';
import { Label } from 'primereact/label';
import * as React from 'react';

export default function RegexDemo() {
    const { onKeyPress: onSpaceKeyPress } = useKeyFilter({ pattern: /[^\s]/ });
    const { onKeyPress: onCharsKeyPress } = useKeyFilter({ pattern: /^[^<>*!]+$/ });

    const [spacekey, setSpacekey] = React.useState('');
    const [chars, setChars] = React.useState('');

    return (
        <div>
            <div className="flex flex-wrap gap-3">
                <div className="flex-auto">
                    <Label for="spacekey" className="font-bold block mb-2">
                        Block Space
                    </Label>
                    <InputText
                        id="spacekey"
                        value={spacekey}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSpacekey(e.target.value)}
                        onKeyPress={onSpaceKeyPress}
                        fluid
                    />
                </div>
                <div className="flex-auto">
                    <Label htmlFor="chars" className="font-bold block mb-2">
                        Block &lt; &gt; * !
                    </Label>
                    <InputText
                        id="chars"
                        value={chars}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setChars(e.target.value)}
                        onKeyPress={onCharsKeyPress}
                        fluid
                    />
                </div>
            </div>
        </div>
    );
}
