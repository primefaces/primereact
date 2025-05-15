import { Button } from 'primereact/button';

export default function SeverityDemo() {
    return (
        <div className="card flex flex-col gap-3">
            <div className="flex justify-center flex-wrap gap-4">
                <Button>Primary</Button>
                <Button severity="secondary">Secondary</Button>
                <Button severity="success">Success</Button>
                <Button severity="info">Info</Button>
                <Button severity="warn">Warn</Button>
                <Button severity="help">Help</Button>
                <Button severity="danger">Danger</Button>
                <Button severity="contrast">Contrast</Button>
            </div>

            <div className="flex justify-center flex-wrap gap-4">
                <Button>Primary</Button>
                <Button.Secondary>Secondary</Button.Secondary>
                <Button.Success>Success</Button.Success>
                <Button.Info>Info</Button.Info>
                <Button.Warn>Warn</Button.Warn>
                <Button.Help>Help</Button.Help>
                <Button.Danger>Danger</Button.Danger>
                <Button.Contrast>Contrast</Button.Contrast>
            </div>
        </div>
    );
}
