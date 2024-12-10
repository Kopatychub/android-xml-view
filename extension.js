const path = require("path")
const vscode = require('vscode');
const fs = require("fs")

function activate(context) {

	const disposable = vscode.commands.registerCommand('android-xml-view.openPanel', function () {
		const panel = vscode.window.createWebviewPanel(
			"myPanel",
			"Android XML",
			vscode.ViewColumn.Two,
			{}
		)

		panel.webview.html = getWindow();

	});

	context.subscriptions.push(disposable);
}

function getWindow(){
	const htmlPath = path.join(__dirname, 'window', 'index.html')
	const htmlContent = fs.readFileSync(htmlPath, 'utf-8')
	
	return htmlContent
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
