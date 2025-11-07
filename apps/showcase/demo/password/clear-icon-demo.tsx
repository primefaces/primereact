import { Password } from 'primereact/password';

export default function BasicDemo() {
    return (
        <div className="card flex justify-center">
            <Password inputClass="w-56">
                <Password.Input />
                <Password.ClearIcon />
            </Password>
        </div>
    );
}
