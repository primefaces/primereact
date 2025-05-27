import { CheckIcon, TimesIcon } from '@primereact/icons';
import { Switch } from 'primereact/switch';

export default function TemplateDemo() {
    return (
        <div className="card flex justify-center">
            <Switch>
                <Switch.Thumb>
                    {({ switch: context }) => {
                        return <>{context.state.checked ? <CheckIcon /> : <TimesIcon />}</>;
                    }}
                </Switch.Thumb>
            </Switch>
        </div>
    );
}
