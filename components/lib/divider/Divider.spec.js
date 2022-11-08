import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Divider } from './Divider';

const snapshot = (props, name) => expect(render(<Divider {...props} />).container).toMatchSnapshot(name);

describe('Divider Snapshot', () => {
    test('check snapshots', () => {
        snapshot({}, 'default');
        snapshot({ layout: 'horizontal', align: 'left' }, 'horizontal left');
        snapshot({ layout: 'horizontal', align: 'right' }, 'horizontal right');
        snapshot({ layout: 'horizontal', align: 'center' }, 'horizontal center');
        snapshot({ layout: 'vertical', align: 'center' }, 'vertical center');
        snapshot({ layout: 'vertical', align: 'top' }, 'vertical top');
        snapshot({ layout: 'vertical', align: 'bottom' }, 'vertical bottom');
        snapshot({ type: 'dashed' }, 'dashed');
        snapshot({ type: 'dotted' }, 'dotted');
    });
});
