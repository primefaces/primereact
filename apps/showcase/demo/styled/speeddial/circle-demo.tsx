import { PlusIcon } from '@primereact/icons';
import { SpeedDial } from '@primereact/ui/speeddial';

export default function CircleDemo() {
    const items = [
        { icon: 'pi pi-pencil' },
        { icon: 'pi pi-refresh' },
        { icon: 'pi pi-trash' },
        { icon: 'pi pi-upload' },
        { icon: 'pi pi-external-link' },
        { icon: 'pi pi-cog' },
        { icon: 'pi pi-user' },
        { icon: 'pi pi-heart' }
    ];

    return (
        <div>
            <div className="flex items-center justify-center" style={{ position: 'relative', height: '500px' }}>
                <SpeedDial.Root type="circle" radius={80} style={{ position: 'absolute' }}>
                    <SpeedDial.Trigger severity="warn" className="transition-transform duration-200 data-open:rotate-45">
                        <PlusIcon />
                    </SpeedDial.Trigger>
                    <SpeedDial.List>
                        {items.map((action) => (
                            <SpeedDial.Item key={action.icon}>
                                <SpeedDial.Action>
                                    <i className={action.icon} />
                                </SpeedDial.Action>
                            </SpeedDial.Item>
                        ))}
                    </SpeedDial.List>
                </SpeedDial.Root>
            </div>
        </div>
    );
}
