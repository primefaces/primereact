import * as React from 'react';

export const DevelopmentSection = React.memo((props) => {
    const isProduction = process.env.NODE_ENV === 'production';

    if (isProduction) {
        return (
            <p>This section is under development. After the necessary tests and improvements are made, it will be shared with the users as soon as possible.</p>
        )
    }

    return props.children;
});
