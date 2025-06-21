import { Button } from 'primereact/button';

export default function OutlinedDemo() {
    return (
        <div className="card flex justify-center flex-wrap gap-4">
            <Button variant="outlined">Primary</Button>
            <Button severity="secondary" variant="outlined">
                Secondary
            </Button>
            <Button severity="success" variant="outlined">
                Success
            </Button>
            <Button severity="info" variant="outlined">
                Info
            </Button>
            <Button severity="warn" variant="outlined">
                Warn
            </Button>
            <Button severity="help" variant="outlined">
                Help
            </Button>
            <Button severity="danger" variant="outlined">
                Danger
            </Button>
            <Button severity="contrast" variant="outlined">
                Contrast
            </Button>
        </div>
    );
}
