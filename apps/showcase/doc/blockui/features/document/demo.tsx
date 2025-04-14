import { BlockUI } from 'primereact/blockui';
import * as React from 'react';

export default function DocumentDemo() {
    const [blocked, setBlocked] = React.useState(false);

    React.useEffect(() => {
        if (blocked) {
            setTimeout(() => {
                setBlocked(false);
            }, 3000);
        }
    }, [blocked]);

    return (
        <div className="card">
            <button onClick={() => setBlocked(true)}>Block</button>
            <BlockUI blocked={blocked} fullScreen>
                <BlockUI.Mask />
            </BlockUI>
        </div>
    );
}
