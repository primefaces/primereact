export declare type Booleanish = 'true' | 'false' | true | false;
export declare type Nullish = null | undefined;
export declare type NonNullish<T> = T extends Nullish ? never : T;
export declare type Nullable<T> = T | null;
export declare type NonNullableObject<T> = T extends object ? NonNullable<T> : never;
export declare type Falsy = false | 0 | '' | null | undefined | [] | Record<string, never>;
export declare type NonFalsy<T> = T extends Falsy ? never : T;
export declare type Truely<T> = NonFalsy<T>;

export declare type PartialExcept<T, K extends keyof T> = Partial<Omit<T, K>> & Pick<T, K>;
export declare type PartialRequired<T, K extends keyof T> = Required<Omit<T, K>> & Partial<Pick<T, K>>;

export declare type DeepPartial<T> = {
    [K in keyof T]?: DeepPartial<T[K]>;
};
export declare type DeepRequired<T> = {
    [K in keyof T]-?: DeepRequired<T[K]>;
};

export declare type SafeRecord<T> = T & Record<PropertyKey, unknown>;
