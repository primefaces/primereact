import { Button } from 'primereact/button';

export default function RaisedDemo() {
    return (
        <div className="card flex justify-center flex-wrap gap-4">
            <Button raised>Primary</Button>
            <Button severity="secondary" raised>
                Secondary
            </Button>
            <Button severity="success" raised>
                Success
            </Button>
            <Button severity="info" raised>
                Info
            </Button>
            <Button severity="warn" raised>
                Warn
            </Button>
            <Button severity="help" raised>
                Help
            </Button>
            <Button severity="danger" raised>
                Danger
            </Button>
            <Button severity="contrast" raised>
                Contrast
            </Button>
        </div>
    );
}
