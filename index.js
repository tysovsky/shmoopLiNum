var self = require('sdk/self');
var pageMod = require('sdk/page-mod')

pageMod.PageMod({
    include: 'http://www.shmoop.com/*',
    contentScriptFile: [self.data.url("jquery-1.11.3.min.js"), self.data.url("script.js")]
});
