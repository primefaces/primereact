import * as React from 'react';

interface AvatarProps {
    label?: string;
    icon?: string;
    image?: string;
    size?: string;
    shape?: string;
    style?: object;
    className?: string;
    template?: any;
}

export class Avatar extends React.Component<AvatarProps,any> {}
