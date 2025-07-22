import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';

function OffsetDemo() {
    return (
        <div className="card flex items-center justify-center gap-4">
            <Tooltip sideOffset={24}>
                <Tooltip.Trigger as={Button} variant="outlined" severity="secondary">
                    Show Tooltip
                </Tooltip.Trigger>
                <Tooltip.Portal>
                    <Tooltip.Content>
                        <p>Tooltip with 24px side offset</p>
                        <Tooltip.Arrow />
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip>
            <Tooltip alignOffset={24} align="end" side="bottom">
                <Tooltip.Trigger as={Button} variant="outlined" severity="secondary">
                    Show Tooltip
                </Tooltip.Trigger>
                <Tooltip.Portal>
                    <Tooltip.Content>
                        <p>Tooltip with 24px align offset</p>
                        <Tooltip.Arrow />
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip>
        </div>
    );
}

export default OffsetDemo;
