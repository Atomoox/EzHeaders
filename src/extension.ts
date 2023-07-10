import * as vscode from 'vscode';


export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('ezheaders.format', () => {
		const editor = vscode.window.activeTextEditor;

        if (editor) {
            const document = editor.document;
			const documentLanguage = document.languageId;

            editor.edit(editBuilder => {
                editor.selections.forEach(sel => {
					try{
						const range = sel.isEmpty ? document.getWordRangeAtPosition(sel.start) || sel : sel;
						const word = document.getText(range);
						const headers: string[] = [];

						word.split('\n').forEach(line => {
							const key = line.split(':')[0].trim();
							const value = line.split(`${key}:`)[1].trim();
							headers.push(`'${key}': '${value}'`);
						});

						editBuilder.replace(range, headers.join(',\n'));
					}catch (ex: any) {
						vscode.window.showErrorMessage(`Couldn't format headers (${ex.message})`);
					}
                })
            })
        }
	});
	context.subscriptions.push(disposable);
}

export function deactivate() {}
