import { Message } from '@primereact/ui/message';

export default function BasicDemo() {
    return (
        <div className="max-w-sm mx-auto">
            <Message.Root severity="info">
                <Message.Content>
                    <Message.Icon className="pi pi-sparkles" />
                    <Message.Text>
                        <a href="" className=" decoration-1! underline!">
                            Upgrade
                        </a>{' '}
                        now and save %5.
                    </Message.Text>
                    <Message.Close />
                </Message.Content>
            </Message.Root>
        </div>
    );
}
