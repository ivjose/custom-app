// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ')
}
