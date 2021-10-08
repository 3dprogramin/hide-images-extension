// modify this list according to your needs
const extensions = ['jpg', 'jpeg', 'png', 'svg', 'webp', 'bmp', 'gif', 'ico']

// generate urls list with extensions
const urls = []
extensions.forEach((ext) => {
    urls.push(`*://*/*.${ext}`)
})

// chrome extension API call for blocking
chrome.webRequest.onBeforeRequest.addListener(function (details) {
        return {cancel: true};
    },
    { urls },
    ["blocking"]
)
