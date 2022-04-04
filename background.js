
async function handleActivated(activeInfo) {
    //console.log("Tab " + activeInfo.tabId + " was activated");
    let new_name = 'no container';
    // get the CookieStore ID of this Tab
    const tab = await browser.tabs.get(activeInfo.tabId);
    try {
        const context = await browser.contextualIdentities.get(tab.cookieStoreId);
        //console.log('context.name:', context.name)
        // update the window title
        new_name = context.name;
    }catch(e){
    }
    browser.windows.update(tab.windowId, {titlePreface: '[' + new_name + '] - '});
}

browser.tabs.onActivated.addListener(handleActivated);

