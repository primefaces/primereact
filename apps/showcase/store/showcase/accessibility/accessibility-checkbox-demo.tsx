import { Checkbox } from 'primereact/checkbox';

export default function AccessibilityCheckboxDemo() {
    return (
        <div className="card flex items-center justify-center">
            <label htmlFor="chkbox" className="mr-2">
                Remember Me
            </label>
            <Checkbox id="chkbox" />
        </div>
    );
}
