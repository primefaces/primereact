import { Password } from 'primereact/password';

export default function BasicDemo() {
    return (
        <div className="card flex justify-center">
            <Password>
                <Password.Input placeholder="Enter password" />
            </Password>
        </div>
    );
}
