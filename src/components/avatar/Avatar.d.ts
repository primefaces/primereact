import * as React from 'react';

type SizeType = 'normal' | 'large' | 'xlarge';

type ShapeType = 'square' | 'circle';

type TemplateType = React.ReactNode | ((props: AvatarProps) => React.ReactNode);

interface AvatarProps {
    label?: string;
    icon?: string;
    image?: string;
    size?: SizeType;
    shape?: ShapeType;
    style?: object;
    className?: string;
    template?: TemplateType;
    imageAlt?: string;
    onImageError?(event: React.SyntheticEvent): void;
    onClick?(event: React.MouseEvent<HTMLElement>): void;
}

export class Avatar extends React.Component<AvatarProps, any> { }
