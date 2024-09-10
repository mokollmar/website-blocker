import "@plasmohq/messaging/background"

import { startHub } from "@plasmohq/messaging/pub-sub"
import { Storage } from "@plasmohq/storage"



console.log("Welcome to the Background!")

const storage = new Storage()

chrome.runtime.onInstalled.addListener(({ reason }) => {
    if (reason === 'install') {
        chrome.tabs.create({ url: "/tabs/onboarding.html" });
    }
});