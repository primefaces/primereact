export const theme = {
    viewer: {
        root: 'flex flex-column w-full h-full',
        toolbar: [
            'flex align-items-center justify-content-between p-3 border-bottom surface-border',
            {
                variants: {
                    active: {
                        false: '',
                        true: 'border-round-top'
                    }
                },
                compoundVariants: [{}],
                defaultVariants: {
                    active: false
                }
            }
        ],
        toolbarItem: 'p-button-text p-button-plain'
    },
    highlighter: 'github-dark'
};
