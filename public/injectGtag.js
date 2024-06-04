const gtagID = localStorage.getItem('gtagID');
const eventName = localStorage.getItem('eventName');

window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("set", "cookie_flags", "SameSite=None;Secure");
gtag("config", gtagID);

console.log("Injected GTAG: ", gtagID);
console.log("Sending event: ", eventName);

gtag("event", eventName, {});
