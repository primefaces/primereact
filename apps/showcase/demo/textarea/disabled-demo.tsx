import { Textarea } from 'primereact/textarea';

export default function DisabledDemo() {
    return (
        <div className="card flex justify-center">
            <Textarea rows={5} cols={30} disabled />
        </div>
    );
}
