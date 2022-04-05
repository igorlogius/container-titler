async function handleActivated(activeInfo) {
    let new_name = 'no container';
    const tab = await browser.tabs.get(activeInfo.tabId);
    try {
        const context = await browser.contextualIdentities.get(tab.cookieStoreId);
        new_name = context.name;
    }catch(e){
    }
    browser.windows.update(tab.windowId, {titlePreface: '[' + new_name + '] - '});
}
browser.tabs.onActivated.addListener(handleActivated);
