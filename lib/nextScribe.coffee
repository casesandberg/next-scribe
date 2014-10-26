clipboard = require 'clipboard'
htmltoless = require 'htmltoless'

module.exports =

    activate: ->
        atom.workspaceView.command 'nextScribe:scribe', => @scribe()

    scribe: ->
        selection = atom.workspace.activePaneItem.getSelection().getText()
        clipboard.writeText(htmltoless.parse(selection))
