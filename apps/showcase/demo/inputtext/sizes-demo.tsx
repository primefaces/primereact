import { InputText } from 'primereact/inputtext';

export default function SizeDemo() {
    return (
        <div className="card flex flex-col items-center gap-4">
            <InputText size="small" placeholder="Small" />
            <InputText placeholder="Normal" />
            <InputText size="large" placeholder="Large" />
        </div>
    );
}
