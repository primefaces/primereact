import { Button } from 'primereact/button';

export default function TextDemo() {
    return (
        <div className="card flex justify-center flex-wrap gap-4">
            <Button text>Primary</Button>
            <Button severity="secondary" text>
                Secondary
            </Button>
            <Button severity="success" text>
                Success
            </Button>
            <Button severity="info" text>
                Info
            </Button>
            <Button severity="warn" text>
                Warn
            </Button>
            <Button severity="help" text>
                Help
            </Button>
            <Button severity="danger" text>
                Danger
            </Button>
            <Button severity="contrast" text>
                Contrast
            </Button>
        </div>
    );
}
