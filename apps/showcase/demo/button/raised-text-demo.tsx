import { Button } from 'primereact/button';

export default function RaisedTextDemo() {
    return (
        <div className="card flex justify-center flex-wrap gap-4">
            <Button raised variant="text">
                Primary
            </Button>
            <Button raised severity="secondary" variant="text">
                Secondary
            </Button>
            <Button raised severity="success" variant="text">
                Success
            </Button>
            <Button raised severity="info" variant="text">
                Info
            </Button>
            <Button raised severity="warn" variant="text">
                Warn
            </Button>
            <Button raised severity="help" variant="text">
                Help
            </Button>
            <Button raised severity="danger" variant="text">
                Danger
            </Button>
            <Button raised severity="contrast" variant="text">
                Contrast
            </Button>
        </div>
    );
}
