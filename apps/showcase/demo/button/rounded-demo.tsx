import { Button } from 'primereact/button';

export default function RoundedDemo() {
    return (
        <div className="card flex justify-center flex-wrap gap-4">
            <Button rounded>Primary</Button>
            <Button severity="secondary" rounded>
                Secondary
            </Button>
            <Button severity="success" rounded>
                Success
            </Button>
            <Button severity="info" rounded>
                Info
            </Button>
            <Button severity="warn" rounded>
                Warn
            </Button>
            <Button severity="help" rounded>
                Help
            </Button>
            <Button severity="danger" rounded>
                Danger
            </Button>
            <Button severity="contrast" rounded>
                Contrast
            </Button>
        </div>
    );
}
