import { Button } from '@primereact/ui/button';
import { Card } from '@primereact/ui/card';

export default function BasicDemo() {
    return (
        <Card.Root className="max-w-sm mx-auto">
            <Card.Body className="space-y-4">
                <Card.Caption>
                    <Card.Title> Pro Subscription</Card.Title>
                    <Card.Subtitle>Everything you need to scale your workflow</Card.Subtitle>
                </Card.Caption>
                <Card.Content>
                    <p> Get unlimited access to all features, priority support, and advanced analytics to help your team grow faster.</p>
                </Card.Content>
                <Card.Footer className="flex flex-col gap-4">
                    <span className="text-lg font-medium">$29 / month</span>

                    <Button fluid>Upgrade</Button>
                </Card.Footer>
            </Card.Body>
        </Card.Root>
    );
}
