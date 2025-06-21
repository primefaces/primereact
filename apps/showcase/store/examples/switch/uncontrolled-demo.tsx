import { Switch } from 'primereact/switch';

export default function UncontrolledDemo() {
    return (
        <div className="card flex justify-center">
            <Switch defaultChecked>
                <Switch.Control>
                    <Switch.Thumb />
                </Switch.Control>
            </Switch>
        </div>
    );
}
