import { Switch } from 'primereact/switch';

export default function DisabledDemo() {
    return (
        <div className="card flex justify-center">
            <Switch disabled>
                <Switch.Thumb />
            </Switch>
        </div>
    );
}
