export function formatNumberWithCommas(input: number | string) {
  const number = typeof input === "string" ? parseFloat(input) : input;
  if (isNaN(number)) {
    throw new Error("Invalid input: not a number or a numeric string");
  }
  return new Intl.NumberFormat().format(number);
}
