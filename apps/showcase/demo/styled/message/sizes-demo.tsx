import { Message } from '@primereact/ui/message';

export default function SizesDemo() {
    return (
        <div className="flex flex-col items-center gap-4">
            <Message.Root severity="info" size="small">
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
            <Message.Root severity="info" size="large">
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
