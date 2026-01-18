// place files you want to import through the `$lib` alias in this folder.
/**
 * @param {boolean | undefined} onlyTime
 */
export function getFormattedClock(onlyTime = false) {
  const now = new Date();

  if (onlyTime) {
    return now.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  }

  const formatted = now
    .toLocaleString("pt-BR", {
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false

    })
    .replace(",", "")
    .replace(".", "");
  return formatted
}
