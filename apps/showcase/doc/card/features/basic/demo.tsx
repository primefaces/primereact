import { Card } from 'primereact/card';

export default function BasicDemo() {
    return (
        <div className="mb-4 p-8">
            <Card>
                <Card.Body>
                    <Card.Caption>
                        <Card.Title>Simple Card</Card.Title>
                    </Card.Caption>
                    <Card.Content>
                        <p className="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate
                            neque quas!
                        </p>
                    </Card.Content>
                </Card.Body>
            </Card>
        </div>
    );
}
