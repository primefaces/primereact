import { Card } from 'primereact/card';

export default function BasicDemo() {
    return (
        <div className="mb-4 p-8 flex items-center justify-center">
            <Card style={{ width: '25rem', overflow: 'hidden' }}>
                <Card.Header>
                    <img alt="user header" className="w-full" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
                </Card.Header>
                <Card.Body>
                    <Card.Caption>
                        <Card.Title>Advanced Card</Card.Title>
                        <Card.Subtitle>Card subtitle</Card.Subtitle>
                    </Card.Caption>
                    <Card.Content>
                        <p className="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate
                            neque quas!
                        </p>
                    </Card.Content>
                    <Card.Footer>
                        <div className="flex gap-4 mt-1">
                            {/* <Button label="Cancel" severity="secondary" outlined className="w-full" />
                            <Button label="Save" className="w-full" /> */}
                        </div>
                    </Card.Footer>
                </Card.Body>
            </Card>
        </div>
    );
}
