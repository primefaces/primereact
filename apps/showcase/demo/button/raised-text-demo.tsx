import { Button } from 'primereact/button';

export default function RaisedTextDemo() {
    return (
        <div className="card flex justify-center flex-wrap gap-4">
            <Button raised text>
                Primary
            </Button>
            <Button raised severity="secondary" text>
                Secondary
            </Button>
            <Button raised severity="success" text>
                Success
            </Button>
            <Button raised severity="info" text>
                Info
            </Button>
            <Button raised severity="warn" text>
                Warn
            </Button>
            <Button raised severity="help" text>
                Help
            </Button>
            <Button raised severity="danger" text>
                Danger
            </Button>
            <Button raised severity="contrast" text>
                Contrast
            </Button>
        </div>
    );
}
