export const FilterOperator = Object.freeze({ AND: 'and', OR: 'or' });

export declare type FilterOperatorType = (typeof FilterOperator)[keyof typeof FilterOperator];
