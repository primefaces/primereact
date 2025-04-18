import { InputText } from 'primereact/inputtext';

export default function SizesDemo() {
    return (
        <div className="card flex flex-col items-center gap-4">
            <InputText defaultValue={''} size="small" placeholder="Small" />
            <InputText defaultValue={''} placeholder="Normal" />
            <InputText defaultValue={''} size="large" placeholder="Large" />
        </div>
    );
}
