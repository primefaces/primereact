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
        api?: unknown;
        theming?: unknown;
        pt?: unknown;
    };
    apiKeys?: string[];
}

export interface ApiOption {
    name: string;
    type: string;
}

export interface ApiDataItem {
    name?: string;
    type?: string;
    description?: string;
    default?: string | number | boolean;
    returnType?: string;
    options?: ApiOption[];
    parameters?: ApiOption;
    readonly?: boolean;
    optional?: boolean;
    deprecated?: boolean;
}

export interface ApiData {
    label?: string;
    description?: string;
    data: ApiDataItem[];
}

export interface NestedApiData {
    description?: string;
    data: ApiData[];
}

export interface ApiChild {
    label: string;
    children?: unknown[];
    data?: unknown[];
    description?: string;
}

export type ApiDoc = {
    id: string;
    label: string;
    description: string | null;
    children: Array<{
        id: string;
        label: string;
        data: unknown[];
        description?: string;
        relatedProp?: string;
    }>;
    docName: string;
};

export type PropItem = {
    name: string;
    type: string;
    default?: string;
    description?: string;
    deprecated?: boolean;
};

export type PropsDefinition = {
    props: PropItem[];
    description?: string;
    relatedProp?: string;
};

export type TypeDefinition = {
    values?: Record<string, string>;
    description?: string;
};

export type VariableDefinition = {
    variables?: Array<{
        value: string;
        description: string;
    }>;
};

export type EventDefinition = {
    key: string;
    values: PropsDefinition;
};

export type APIDocsInterface = {
    [key: string]: {
        description?: string;
        interfaces?: {
            values: Record<string, PropsDefinition>;
        };
        types?: {
            values: Record<string, TypeDefinition>;
        };
        variables?: {
            values: Record<string, VariableDefinition>;
        };
    };
};

export type TokensObject = {
    [key: string]: {
        tokens: {
            [key: string]: {
                token: string;
                variable: string;
                description: string;
            };
        };
    };
};
