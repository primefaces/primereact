import { Button } from 'primereact/button';

export default function TextDemo() {
    return (
        <div className="card flex justify-center flex-wrap gap-4">
            <Button variant="text">Primary</Button>
            <Button severity="secondary" variant="text">
                Secondary
            </Button>
            <Button severity="success" variant="text">
                Success
            </Button>
            <Button severity="info" variant="text">
                Info
            </Button>
            <Button severity="warn" variant="text">
                Warn
            </Button>
            <Button severity="help" variant="text">
                Help
            </Button>
            <Button severity="danger" variant="text">
                Danger
            </Button>
            <Button severity="contrast" variant="text">
                Contrast
            </Button>
        </div>
    );
}
