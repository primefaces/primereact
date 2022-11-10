import '@testing-library/jest-dom';
import { Message } from './Message';

import { snapshot } from '../../test';

describe('Message', () => {
    snapshot(<Message />, 'default');
    snapshot(<Message severity="success" text="Jest" />, 'severity success');
    snapshot(<Message severity="info" text="Jest" />, 'severity info');
    snapshot(<Message severity="warn" text="Jest" />, 'severity warn');
    snapshot(<Message severity="error" text="Jest" />, 'severity error');
    snapshot(<Message icon="pi pi-check" />, 'icon');
    snapshot(<Message content={<span>Test</span>} />, 'content');
    snapshot(
        <Message>
            <span>Jester</span>
        </Message>,
        'templating'
    );
});
