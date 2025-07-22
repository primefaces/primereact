import { ToggleButton } from 'primereact/togglebutton';
import { Tooltip } from 'primereact/tooltip';

const content = [
    {
        icon: 'pi pi-align-left',
        label: 'Align left',
        value: 'left'
    },
    {
        icon: 'pi pi-align-center',
        label: 'Align center',
        value: 'center'
    },
    {
        icon: 'pi pi-align-right',
        label: 'Align right',
        value: 'right'
    },
    {
        icon: 'pi pi-align-justify',
        label: 'Align justify',
        value: 'justify'
    }
];

export default function WithToggleButtonDemo() {
    return (
        <div className="card flex items-center justify-center">
            <Tooltip.Group>
                <ToggleButton.Group allowEmpty={false}>
                    {content.map((item) => (
                        <Tooltip key={item.value}>
                            <Tooltip.Trigger as={ToggleButton} value={item.value}>
                                <ToggleButton.Indicator>
                                    <i className={item.icon}></i>
                                </ToggleButton.Indicator>
                            </Tooltip.Trigger>
                            <Tooltip.Portal>
                                <Tooltip.Content>
                                    <p>{item.label}</p>
                                    <Tooltip.Arrow />
                                </Tooltip.Content>
                            </Tooltip.Portal>
                        </Tooltip>
                    ))}
                </ToggleButton.Group>
            </Tooltip.Group>
        </div>
    );
}
