import { Switch } from 'primereact/switch';

export default function UncontrolledDemo() {
    return (
        <div className="card flex justify-center">
            <Switch defaultChecked>
                <Switch.Thumb />
            </Switch>
        </div>
    );
}
