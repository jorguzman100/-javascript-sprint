const classifyDate = (date) => {
    const ONE_YEAR_MS = 365 * 24 * 60 * 60 * 1000;
    const now = Date.now();
    const difference = date.getTime() - now;
    const yearsDifference = difference / ONE_YEAR_MS;
    
    if (difference <= 0) {
        return yearsDifference <= -1 ? 'ancient' : 'past';
    } else {
        return yearsDifference >= 1 ? 'distant future' : 'future';
    }
}


const testDates = [
  { label: "now", date: new Date() },
  { label: "yesterday", date: new Date(Date.now() - 86400000) },
  { label: "6 months ago", date: new Date(Date.now() - 6 * 30 * 86400000) },
  { label: "2 years ago", date: new Date(Date.now() - 2 * 365 * 86400000) },
  { label: "tomorrow", date: new Date(Date.now() + 86400000) },
  { label: "6 months future", date: new Date(Date.now() + 6 * 30 * 86400000) },
  { label: "2 years future", date: new Date(Date.now() + 2 * 365 * 86400000) }
];

for (const { label, date } of testDates) {
  console.log(label, classifyDate(date));
}
