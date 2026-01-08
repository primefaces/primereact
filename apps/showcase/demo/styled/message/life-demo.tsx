'use client';

import { Button } from '@primereact/ui/button';
import { Message } from '@primereact/ui/message';
import * as React from 'react';

export default function LifeDemo() {
    const [visible, setVisible] = React.useState(false);

    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <Button disabled={visible} onClick={() => setVisible(true)}>
                Show Message
            </Button>
            {visible && (
                <Message.Root life={3000} severity="success" onClose={() => setVisible(false)}>
                    <Message.Content>
                        <Message.Icon className="pi pi-check" />
                        <Message.Text>Your account is now ready.</Message.Text>
                    </Message.Content>
                </Message.Root>
            )}
        </div>
    );
}
