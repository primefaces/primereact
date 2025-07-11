import { Button } from 'primereact/button';
import { Message } from 'primereact/message';
import * as React from 'react';

export default function LifeDemo() {
    const [visible, setVisible] = React.useState(false);

    return (
        <div className="card flex flex-col items-center justify-center gap-4">
            <Button disabled={visible} onClick={() => setVisible(true)}>
                Show Message
            </Button>
            {visible && (
                <Message life={3000} severity="success" onClose={() => setVisible(false)}>
                    <Message.Content>
                        <Message.Text>Auto Disappear Message</Message.Text>
                    </Message.Content>
                </Message>
            )}
        </div>
    );
}
