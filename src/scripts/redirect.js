// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Intercept_HTTP_requests

var pattern = "*://medium.com/*";

function redirect(requestDetails) {

    console.log("Redirecting: " + requestDetails.url);

    var targetUrl = requestDetails.url.replace("medium.com", "scribe.rip");

    if (requestDetails.url === targetUrl) {
        return;
    }

    return {
        redirectUrl: targetUrl
    };
}

browser.webRequest.onBeforeRequest.addListener(
    redirect,
    {urls:[pattern]},
    ["blocking"]
);
