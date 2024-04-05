import 'reflect-metadata';

export const VIRTUAL_COLUMN_KEY = Symbol('VIRTUAL_COLUMN_KEY');
export const VIRTUAL_COLUMN_MAPPER_KEY = Symbol('VIRTUAL_COLUMN_MAPPER_KEY');

type VirtualColumnOptions =
  | {
      name?: string;
      mapper?: (value: unknown) => any;
    }
  | string;

function resolveOpts(
  opts?: VirtualColumnOptions,
): Exclude<VirtualColumnOptions, string> {
  if (!opts) return {};
  if (typeof opts === 'string') return { name: opts };
  return opts;
}

export function VirtualColumn(opts?: VirtualColumnOptions): PropertyDecorator {
  const { name, mapper } = resolveOpts(opts);

  return (target, propertyKey) => {
    const metaInfo = Reflect.getMetadata(VIRTUAL_COLUMN_KEY, target) || {};
    const mapperInfo =
      Reflect.getMetadata(VIRTUAL_COLUMN_MAPPER_KEY, target) || {};

    metaInfo[propertyKey] = name ?? propertyKey;
    if (mapper) mapperInfo[propertyKey] = mapper;

    Reflect.defineMetadata(VIRTUAL_COLUMN_KEY, metaInfo, target);
    Reflect.defineMetadata(VIRTUAL_COLUMN_MAPPER_KEY, mapperInfo, target);
  };
}
