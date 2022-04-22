function humanReadable(seconds) {
  const hoursMultiplier = 3600;
  const minutesMultiplier = 60;
  let HH, MM, SS;
  let minutes = seconds % hoursMultiplier;
  SS = _formatString((minutes % minutesMultiplier).toString());
  HH = _formatString(Math.floor(seconds / hoursMultiplier).toString());
  MM = _formatString(Math.floor(minutes / minutesMultiplier).toString());

  return `${HH}:${MM}:${SS}`;
}

function _formatString(string) {
  if (string.length === 1) return 0 + string;
  return string;
}
