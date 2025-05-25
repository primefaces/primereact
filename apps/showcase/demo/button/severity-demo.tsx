import { Button } from 'primereact/button';

export default function SeverityDemo() {
    return (
        <div className="card flex justify-center flex-wrap gap-4">
            <Button>Primary</Button>
            <Button severity="secondary">Secondary</Button>
            <Button severity="success">Success</Button>
            <Button severity="info">Info</Button>
            <Button severity="warn">Warn</Button>
            <Button severity="help">Help</Button>
            <Button severity="danger">Danger</Button>
            <Button severity="contrast">Contrast</Button>
        </div>
    );
}
