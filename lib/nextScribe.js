var clipboard = require('clipboard');
var htmltoless = require('htmltoless');

module.exports = {

    activate: function(){
        atom.workspaceView.command('nextScribe:scribe', (function(_this) {
            return function() {
                return _this.scribe();
            };
        })(this));
    },
    scribe: function(){
        var selection = atom.workspace.activePaneItem.getSelection().getText();
        clipboard.writeText(htmltoless.parse(selection))
    }
}
