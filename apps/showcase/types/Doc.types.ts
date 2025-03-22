export interface DocComponentProps {
    header?: string;
    description?: string;
    className?: string;
    docs?: {
        features?: {
            id: string;
            label: string;
            component: React.ComponentType;
        }[];
        api?: any;
        theming?: any;
        pt?: any;
    };
    apiKeys?: string[];
}
