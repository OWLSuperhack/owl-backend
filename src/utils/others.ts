export function delayTimer(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}