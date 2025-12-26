'use client';

import { Button } from 'primereact/button';
import { Message } from 'primereact/message';
import * as React from 'react';

export default function LifeDemo() {
    const [visible, setVisible] = React.useState(false);

    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <Button.Root disabled={visible} onClick={() => setVisible(true)}>
                Show Message
            </Button.Root>
            {visible && (
                <Message.Root life={3000} severity="success" onClose={() => setVisible(false)}>
                    <Message.Content>
                        <Message.Text>Auto Disappear Message</Message.Text>
                    </Message.Content>
                </Message.Root>
            )}
        </div>
    );
}
