import * as vscode from 'vscode';

import { parseHeaders } from './utils';
import { JavascriptFormatStrategy } from './strategy/JavascriptFormatStrategy';

const activate = (context: vscode.ExtensionContext) => {
	let disposable = vscode.commands.registerCommand('ezheaders.format', () => {
		const editor = vscode.window.activeTextEditor;

		if (!editor) {
			vscode.window.showErrorMessage(`Editor not found.`);
			return;
		}

		const document = editor.document;
		const documentLanguage = document.languageId;

		editor.edit(editBuilder => {
			editor.selections.forEach(sel => {
				try {
					const range = sel.isEmpty ? document.getWordRangeAtPosition(sel.start) || sel : sel;
					const word = document.getText(range);

					const headerObject = parseHeaders(word);

					if (!headerObject) {
						vscode.window.showErrorMessage(`Couldn't find input source type`);
						return;
					}

					let result: string | null = null;

					switch (documentLanguage) {
						case 'typescript':
						case 'javascript':
							result = new JavascriptFormatStrategy(headerObject).toString();
							break;
					}

					if (!result) {
						vscode.window.showErrorMessage(`Couldn't format the given headers for the ${documentLanguage} language`);
						return;
					}
					
					editBuilder.replace(range, result);
				} catch (ex: any) {
					vscode.window.showErrorMessage(`Couldn't format headers (${ex.message})`);
				}
			})
		})


	});
	context.subscriptions.push(disposable);
}

const deactivate = () => { };

export {
	activate,
	deactivate
};
