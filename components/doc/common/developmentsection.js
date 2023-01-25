import * as React from 'react';

export const DevelopmentSection = React.memo((props) => {
    return (
        <>
            <div className="line-height-3 bg-indigo-600 text-white p-3 text-lg" style={{ borderRadius: '10px' }}>
                Accessibility guide documents the specification of this component based on WCAG guidelines, the implementation is in progress.
            </div>
            {props.children}
        </>
    );
});
