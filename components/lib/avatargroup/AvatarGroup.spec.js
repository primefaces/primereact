import '@testing-library/jest-dom';
import { Avatar } from '../avatar/Avatar';
import { AvatarGroup } from './AvatarGroup';

import { snapshot } from '../../test';

describe('AvatarGroup', () => {
    snapshot(<AvatarGroup />, 'default');
    snapshot(
        <AvatarGroup>
            <Avatar label="P" />
            <Avatar icon="pi pi-search" />
            <Avatar image="user.png" />
            <Avatar label="+2" />
        </AvatarGroup>,
        'group'
    );
});
