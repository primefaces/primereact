import { Message } from '@primereact/ui/message';

export default function SeverityDemo() {
    return (
        <div className="max-w-md mx-auto space-y-4">
            <Message.Root severity="success">
                <Message.Content>
                    <Message.Icon className="pi pi-check" />
                    <Message.Text>Your account is now ready.</Message.Text>
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
            <Message.Root severity="warn">
                <Message.Content>
                    <Message.Icon className="pi pi-receipt" />
                    <Message.Text>
                        Your subscription is about to expire.{' '}
                        <a href="" className=" decoration-1! underline!">
                            Renew
                        </a>
                    </Message.Text>
                    <Message.Close />
                </Message.Content>
            </Message.Root>
            <Message.Root severity="error">
                <Message.Content>
                    <Message.Icon className="pi pi-exclamation-triangle" />
                    <Message.Text>
                        Something went wrong. Please{' '}
                        <a href="" className=" decoration-1! underline!">
                            try again
                        </a>
                        .
                    </Message.Text>
                    <Message.Close />
                </Message.Content>
            </Message.Root>
            <Message.Root severity="secondary">
                <Message.Content>
                    <Message.Icon className="pi pi-spinner animate-spin" />
                    <Message.Text>Processing may take a few moments.</Message.Text>
                    <Message.Close />
                </Message.Content>
            </Message.Root>
            <Message.Root severity="contrast">
                <Message.Content>
                    <Message.Icon className="pi pi-wifi" />
                    <Message.Text>You’re currently in offline mode.</Message.Text>
                    <Message.Close />
                </Message.Content>
            </Message.Root>
        </div>
    );
}
