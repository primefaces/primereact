import { Message } from '@primereact/ui/message';

export default function ClosableDemo() {
    return (
        <div>
            <Message.Root>
                <Message.Content>
                    <Message.Text>This is a closable message.</Message.Text>
                    <Message.Close />
                </Message.Content>
            </Message.Root>
        </div>
    );
}
