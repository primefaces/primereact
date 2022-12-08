import '@testing-library/jest-dom';
import { Badge } from './Badge';

import { snapshot } from '../../test';

describe('Badge', () => {
    snapshot(<Badge />, 'default');
    snapshot(<Badge value={22} />, 'value');
    snapshot(<Badge size="large" />, 'size large');
    snapshot(<Badge size="xlarge" />, 'size xlarge');
    snapshot(<Badge size="invalid" />, 'size invalid');
    snapshot(<Badge severity="success" />, 'severity success');
    snapshot(<Badge severity="info" />, 'severity info');
    snapshot(<Badge severity="warning" />, 'severity warning');
    snapshot(<Badge severity="danger" />, 'severity danger');
    snapshot(<Badge severity="invalid" />, 'severity invalid');
});
