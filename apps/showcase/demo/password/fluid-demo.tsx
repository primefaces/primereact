import { Password } from 'primereact/password';

export default function FluidDemo() {
    return (
        <div className="card">
            <Password fluid>
                <Password.Input />
            </Password>
        </div>
    );
}
