export function createPageUrl(pageName: string) {
  return '/' + pageName.toLowerCase().replace(/ /g, '-');
}

// Simple className merger
export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(' ');
}
