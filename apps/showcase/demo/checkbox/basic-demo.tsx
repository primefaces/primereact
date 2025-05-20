import { Checkbox } from 'primereact/checkbox';

const BasicDemo = () => {
    return (
        <div className="card flex items-center justify-center">
            <div className="flex items-center gap-2">
                <Checkbox inputId="basic-checkbox" />
                <label htmlFor="basic-checkbox">
                    I accept the <a className="font-semibold">Terms of Service</a>
                </label>
            </div>
        </div>
    );
};

export default BasicDemo;
