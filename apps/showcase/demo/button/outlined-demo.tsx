import { Button } from 'primereact/button';

export default function OutlinedDemo() {
    return (
        <div className="card flex justify-center flex-wrap gap-4">
            <Button outlined>Primary</Button>
            <Button severity="secondary" outlined>
                Secondary
            </Button>
            <Button severity="success" outlined>
                Success
            </Button>
            <Button severity="info" outlined>
                Info
            </Button>
            <Button severity="warn" outlined>
                Warn
            </Button>
            <Button severity="help" outlined>
                Help
            </Button>
            <Button severity="danger" outlined>
                Danger
            </Button>
            <Button severity="contrast" outlined>
                Contrast
            </Button>
        </div>
    );
}
