export interface ParsedNumericValue {
  prefix: string;
  value: number;
  suffix: string;
}

const NUMERIC_PATTERN = /^(\D*)(\d+)(\D*)$/;

/** Splits strings like "+900" or "80%" into prefix, number and suffix. Returns null if not numeric. */
export const parseNumericValue = (raw: string): ParsedNumericValue | null => {
  const match = NUMERIC_PATTERN.exec(raw.trim());
  if (!match) return null;
  const [, prefix, digits, suffix] = match;
  return { prefix, value: Number(digits), suffix };
};

export const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3);
