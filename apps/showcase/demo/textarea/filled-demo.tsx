import { Textarea } from 'primereact/textarea';

export default function FilledDemo() {
    return (
        <div className="card flex justify-center">
            <Textarea variant="filled" rows={5} cols={30} />
        </div>
    );
}
