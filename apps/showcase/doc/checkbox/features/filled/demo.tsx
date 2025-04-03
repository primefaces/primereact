import { Checkbox } from 'primereact/checkbox';

export default function FilledDemo() {
    return (
        <div className="card flex justify-center ">
            <Checkbox defaultChecked={false} variant="filled" />
        </div>
    );
}
