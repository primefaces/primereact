import * as React from 'react';

type ShapeType = 'rectangle' | 'circle';

type AnimationType = 'wave' | 'none';

interface SkeletonProps {
    shape?: ShapeType;
    size?: string;
    width?: string;
    height?: string;
    borderRadius?: string;
    animation?: AnimationType;
    style?: object;
    className?: string;
}

export class Skeleton extends React.Component<SkeletonProps, any> { }
