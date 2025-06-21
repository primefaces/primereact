import { Checkbox } from 'primereact/checkbox';

export default function FilledDemo() {
    return (
        <div className="card flex items-center justify-center">
            <div className="flex items-center gap-2">
                <Checkbox inputId="filled" variant="filled" />
                <label htmlFor="filled">Filled</label>
            </div>
        </div>
    );
}
