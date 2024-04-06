import { Transform } from 'class-transformer';

type NullabilityOpts = {
  ignoreNullability?: boolean;
};

/**
 * Force a value to Boolean while optionally keeping track of nullability (null or undefined)
 * By default, this option is enabled
 */
export const ToBoolean = ({ ignoreNullability }: NullabilityOpts = {}) =>
  Transform(({ value }) => {
    if (!ignoreNullability) {
      if (value === null) return null;
      if (value === undefined) return value;
    }

    if ([1, '1', 'true', 'yes', 'y'].includes(value)) return true;
    if ([0, '0', 'false', 'no', 'n'].includes(value)) return false;

    return Boolean(value);
  });

/**
 * Force a value to Number while optionally keeping track of nullability (null or undefined)
 * By default, this option is enabled
 */
export const ToNumber = ({ ignoreNullability }: NullabilityOpts = {}) =>
  Transform(({ value }) => {
    if (!ignoreNullability) {
      if (value === null) return null;
      if (value === undefined) return value;
    }

    return Number(value);
  });
