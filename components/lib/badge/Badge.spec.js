import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Badge } from './Badge';

const snapshot = (props, name) => expect(render(<Badge {...props} />).container).toMatchSnapshot(name);

describe('Badge', () => {
    test('check snapshots', () => {
        snapshot({}, 'default');
        snapshot({ value: 22 }, 'value');
        snapshot({ size: 'large' }, 'size large');
        snapshot({ size: 'xlarge' }, 'size xlarge');
        snapshot({ size: 'invalid' }, 'size invalid');
        snapshot({ severity: 'success' }, 'severity success');
        snapshot({ severity: 'info' }, 'severity info');
        snapshot({ severity: 'warning' }, 'severity warning');
        snapshot({ severity: 'danger' }, 'severity danger');
        snapshot({ severity: 'invalid' }, 'severity invalid');
    });
});
