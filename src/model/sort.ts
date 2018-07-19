
export enum SortDirection {
    ASC=1, DESC=-1
}

export const SortAlgorithmEqual = (r1, r2) => r1 == r2 ? 0 : r1 < r2 ? 1 : -1;
