'use client';
import { ToggleButton } from '@primereact/ui/togglebutton';
import { Tooltip } from '@primereact/ui/tooltip';
import { ToggleButtonRoot } from 'primereact/togglebutton';
import { ToggleButtonGroup } from 'primereact/togglebuttongroup';

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
        <div className="flex items-center justify-center">
            <Tooltip.Group>
                <ToggleButtonGroup allowEmpty={false}>
                    {content.map((item) => (
                        <Tooltip.Root key={item.value}>
                            <Tooltip.Trigger as={ToggleButtonRoot} value={item.value}>
                                <ToggleButton.Indicator>
                                    <i className={item.icon} />
                                </ToggleButton.Indicator>
                            </Tooltip.Trigger>
                            <Tooltip.Portal>
                                <Tooltip.Content>
                                    <p>{item.label}</p>
                                    <Tooltip.Arrow />
                                </Tooltip.Content>
                            </Tooltip.Portal>
                        </Tooltip.Root>
                    ))}
                </ToggleButtonGroup>
            </Tooltip.Group>
        </div>
    );
}
