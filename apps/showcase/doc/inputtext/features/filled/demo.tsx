import { InputText } from 'primereact/inputtext';

export default function FilledDemo() {
    return (
        <div className="card flex justify-center ">
            <InputText defaultValue={''} variant="filled" />
        </div>
    );
}
