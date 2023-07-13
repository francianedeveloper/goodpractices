export interface Mapper<D, E> {
    toDomain: (data: E) => D;
}