export function cn(...inputs: string[]) {
  return inputs.filter(Boolean).join(" ");
}

export function formatTime(date: Date): string {
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Africa/Addis_Ababa",
  });
}
