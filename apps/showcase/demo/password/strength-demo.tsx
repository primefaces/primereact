import { Password } from 'primereact/password';

export default function StrengthDemo() {
    return (
        <div className="card flex justify-center">
            <Password>
                <Password.Input />
                <Password.Strength />
            </Password>
        </div>
    );
}
