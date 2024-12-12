const path = require("path")
const vscode = require('vscode');
const fs = require("fs")

function activate(context) {

	const disposable = vscode.commands.registerCommand('android-xml-view.openPanel', function () {
		const panel = vscode.window.createWebviewPanel(
			"myPanel",
			"Android XML",
			vscode.ViewColumn.Two,
			{
				enableScripts: true,
				localResourceRoots: [
					vscode.Uri.file(path.join(__dirname, 'window')),
				]
			}
		)

		getWindow(panel);

	});

	context.subscriptions.push(disposable);
}

function getWindow(panel){
	const htmlPath = path.join(__dirname, 'window', 'index.html')
	const htmlContent = fs.readFileSync(htmlPath, 'utf-8')

	const cssPath = path.join(__dirname, "window", "css", "style.css")
	const cssUri = panel.webview.asWebviewUri(vscode.Uri.file(cssPath));

	const scriptPath = path.join(__dirname, "window", "js", "script.js")
	const scriptUri = panel.webview.asWebviewUri(vscode.Uri.file(scriptPath));
	
	panel.webview.html = htmlContent.replace(
		/href=\"css\/style\.css"/,
		`href=${cssUri}`
	).replace(
		/src=\"js\/script\.js"/,
		`src="${scriptUri}"`
	)
}


// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
