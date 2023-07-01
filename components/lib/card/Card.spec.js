import '@testing-library/jest-dom';
import { snapshot } from '../../test';
import { PrimeReactProvider } from '../api/Api';
import { Button } from '../button/Button';
import { Card } from './Card';

const header = <img alt="Card" src="/images/usercard.png" />;
const footer = (
    <span>
        <Button label="Save" icon="pi pi-check" />
        <Button label="Cancel" icon="pi pi-times" className="p-button-secondary ml-2" />
    </span>
);

describe('Card', () => {
    snapshot(
        <PrimeReactProvider>
            <Card />
        </PrimeReactProvider>,
        'default'
    );
    snapshot(
        <PrimeReactProvider>
            <Card title="Simple Card">Content</Card>
        </PrimeReactProvider>,
        'title'
    );
    snapshot(
        <PrimeReactProvider>
            <Card title="subtitle" subTitle="subtitle">
                Content
            </Card>
        </PrimeReactProvider>,
        'subtitle'
    );
    snapshot(
        <PrimeReactProvider>
            <Card id="card" title="Advanced Card" style={{ width: '25rem', marginBottom: '2em' }} subTitle="Subtitle" footer={footer} header={header}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                    quas!
                </p>
            </Card>
        </PrimeReactProvider>,
        'advanced'
    );
});
