import { ToggleButton } from 'primereact/togglebutton';

export default function GroupDemo() {
    return (
        <div className="card flex items-center justify-center">
            <ToggleButton.Group allowEmpty={false}>
                <ToggleButton value="left">
                    <ToggleButton.Indicator>
                        <i className="pi pi-align-left"></i>
                    </ToggleButton.Indicator>
                </ToggleButton>
                <ToggleButton value="center">
                    <ToggleButton.Indicator>
                        <i className="pi pi-align-center"></i>
                    </ToggleButton.Indicator>
                </ToggleButton>
                <ToggleButton value="right">
                    <ToggleButton.Indicator>
                        <i className="pi pi-align-right"></i>
                    </ToggleButton.Indicator>
                </ToggleButton>
                <ToggleButton value="justify">
                    <ToggleButton.Indicator>
                        <i className="pi pi-align-justify"></i>
                    </ToggleButton.Indicator>
                </ToggleButton>
            </ToggleButton.Group>
        </div>
    );
}
