import { Switch } from 'primereact/switch';

export default function BasicDemo() {
    return (
        <div className="card flex justify-center items-center gap-2">
            <label htmlFor="switch">Off</label>
            <Switch inputId="switch">
                <Switch.Thumb />
            </Switch>
            <label htmlFor="switch">On</label>
        </div>
    );
}
