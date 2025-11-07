import { Password } from 'primereact/password';

export default function FilledDemo() {
    return (
        <div className="card flex justify-center">
            <Password variant="filled">
                <Password.Input />
            </Password>
        </div>
    );
}
