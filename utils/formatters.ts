export function formatPhoneNumber(phone: string): string {
  return phone.replace(/\s+/g, " ").trim();
}

export function padZero(num: number): string {
  return num < 10 ? `0${num}` : `${num}`;
}

export function splitWords(text: string): string[] {
  return text.split(/\s+/).filter(Boolean);
}
