import { Checkbox } from 'primereact/checkbox';

export default function InvalidDemo() {
    return (
        <div className="card flex items-center justify-center">
            <div className="flex items-center gap-2">
                <Checkbox inputId="invalid" invalid />
                <label htmlFor="invalid" className="text-red-500 dark:text-red-400">
                    Invalid
                </label>
            </div>
        </div>
    );
}
