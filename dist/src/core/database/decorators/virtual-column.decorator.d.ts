import 'reflect-metadata';
export declare const VIRTUAL_COLUMN_KEY: unique symbol;
export declare const VIRTUAL_COLUMN_MAPPER_KEY: unique symbol;
type VirtualColumnOptions = {
    name?: string;
    mapper?: (value: unknown) => any;
} | string;
export declare function VirtualColumn(opts?: VirtualColumnOptions): PropertyDecorator;
export {};
