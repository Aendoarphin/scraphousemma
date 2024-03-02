export function decodeUrl(urlEncodedString) {
  return decodeURIComponent(urlEncodedString.replace(/%([0-9A-Fa-f]{2})/g, (match, p1) => String.fromCharCode(parseInt(p1, 16))));
}