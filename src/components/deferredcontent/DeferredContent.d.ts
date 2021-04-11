import * as React from 'react';

interface DeferredContentProps {
    onLoad?(event: React.SyntheticEvent): void;
}

export class DeferredContent extends React.Component<DeferredContentProps, any> { }
