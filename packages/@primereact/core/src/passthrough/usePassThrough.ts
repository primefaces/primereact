import * as React from 'react';
import { PassThroughContext } from './PassThrough.context';

export function usePassThrough() {
    const context = React.useContext(PassThroughContext);

    if (context === undefined) {
        throw new Error('Context must be used within a PassThroughProvider');
    }

    return context;
}
