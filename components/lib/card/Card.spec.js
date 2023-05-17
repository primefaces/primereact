import '@testing-library/jest-dom';
import { snapshot } from '../../test';
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
    snapshot(<Card />, 'default');
    snapshot(<Card title="Simple Card">Content</Card>, 'title');
    snapshot(
        <Card title="subtitle" subTitle="subtitle">
            Content
        </Card>,
        'subtitle'
    );
    snapshot(
        <Card id="card" title="Advanced Card" style={{ width: '25rem', marginBottom: '2em' }} subTitle="Subtitle" footer={footer} header={header}>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
            </p>
        </Card>,
        'advanced'
    );
});
