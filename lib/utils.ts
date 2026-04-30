export function cn(...inputs: Array<string | false | null | undefined>) {
  return inputs.filter(Boolean).join(" ");
}

/** Encodes the email locally so it doesn't appear as a plain mailto in the HTML. */
export function obfuscateEmail(user: string, domain: string) {
  return `${user}@${domain}`;
}
