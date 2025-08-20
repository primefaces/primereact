import { useKeyFilter } from '@primereact/hooks';
import { InputText } from 'primereact/inputtext';
import { Label } from 'primereact/label';
import * as React from 'react';

export default function PatternDemo() {
    const { onKeyPress: onIntegerKeyPress } = useKeyFilter({ pattern: 'int' });
    const { onKeyPress: onNumberKeyPress } = useKeyFilter({ pattern: 'num' });
    const { onKeyPress: onMoneyKeyPress } = useKeyFilter({ pattern: 'money' });
    const { onKeyPress: onHexKeyPress } = useKeyFilter({ pattern: 'hex' });
    const { onKeyPress: onAlphaKeyPress } = useKeyFilter({ pattern: 'alpha' });
    const { onKeyPress: onAlphanumKeyPress } = useKeyFilter({ pattern: 'alphanum' });

    const [integer, setInteger] = React.useState('');
    const [number, setNumber] = React.useState('');
    const [money, setMoney] = React.useState('');
    const [hex, setHex] = React.useState('');
    const [alphabetic, setAlphabetic] = React.useState('');
    const [alphanumeric, setAlphanumeric] = React.useState('');

    return (
        <div className="card">
            <div className="flex flex-wrap gap-3 mb-4">
                <div className="flex-auto">
                    <Label htmlFor="integer" className="font-bold block mb-2">
                        Integer
                    </Label>
                    <InputText id="integer" value={integer} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInteger(e.target.value)} onKeyPress={onIntegerKeyPress} className="w-full" />
                </div>
                <div className="flex-auto">
                    <Label htmlFor="number" className="font-bold block mb-2">
                        Number
                    </Label>
                    <InputText id="number" value={number} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNumber(e.target.value)} onKeyPress={onNumberKeyPress} className="w-full" />
                </div>
                <div className="flex-auto">
                    <Label htmlFor="money" className="font-bold block mb-2">
                        Money
                    </Label>
                    <InputText id="money" value={money} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMoney(e.target.value)} onKeyPress={onMoneyKeyPress} className="w-full" />
                </div>
            </div>
            <div className="flex flex-wrap gap-3">
                <div className="flex-auto">
                    <Label htmlFor="hex" className="font-bold block mb-2">
                        Hex
                    </Label>
                    <InputText id="hex" value={hex} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setHex(e.target.value)} onKeyPress={onHexKeyPress} className="w-full" />
                </div>
                <div className="flex-auto">
                    <Label htmlFor="alphabetic" className="font-bold block mb-2">
                        Alphabetic
                    </Label>
                    <InputText id="alphabetic" value={alphabetic} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAlphabetic(e.target.value)} onKeyPress={onAlphaKeyPress} className="w-full" />
                </div>
                <div className="flex-auto">
                    <Label htmlFor="alphanumeric" className="font-bold block mb-2">
                        Alphanumeric
                    </Label>
                    <InputText id="alphanumeric" value={alphanumeric} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAlphanumeric(e.target.value)} onKeyPress={onAlphanumKeyPress} className="w-full" />
                </div>
            </div>
        </div>
    );
}
