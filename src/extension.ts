import * as vscode from 'vscode';
import { pxToMadeSpaceToken, pxToMadeSizeToken } from './utils/utils';

export function activate(context: vscode.ExtensionContext) {

	// Show the msg when ext is initially activated
	console.log('made-tokens extension is activated');

	// made-tokens.activateMadeTokens
	context.subscriptions.push(vscode.commands.registerCommand('made-tokens.activateMadeTokens', () => {
		vscode.window.showInformationMessage('Made Tokens extension is activated!');
	}));

	// made-tokens.madeSpace
	context.subscriptions.push(vscode.commands.registerTextEditorCommand('made-tokens.madeSpace', (textEditor: vscode.TextEditor, edit: vscode.TextEditorEdit) => {
		const selectedTextRange = textEditor.selection;
		const selectedText = textEditor.document.getText(selectedTextRange);

		if (selectedText) {
			if (selectedText.endsWith("px")) {
				const numberValue = selectedText.slice(0, -2);
				const pxValue = parseInt(numberValue);

				if (!isNaN(pxValue)) {
					const madeToken = pxToMadeSpaceToken(pxValue);
					edit.replace(selectedTextRange, madeToken);
				} else {
					vscode.window.showWarningMessage("The seleted text does not represent a valid number.");
				}
			} else {
				vscode.window.showWarningMessage("This version supports only px values coversion.\n(The selected value does not end with 'px')");
			}
		} else {
			vscode.window.showWarningMessage("No text is selected.");
		}

	}));

	// made-tokens.madeSize
	context.subscriptions.push(vscode.commands.registerTextEditorCommand('made-tokens.madeSize', (textEditor: vscode.TextEditor, edit: vscode.TextEditorEdit) => {
		const selectedTextRange = textEditor.selection;
		const selectedText = textEditor.document.getText(selectedTextRange);

		if (selectedText) {
			if (selectedText.endsWith("px")) {
				const numberValue = selectedText.slice(0, -2);
				const pxValue = parseInt(numberValue);

				if (!isNaN(pxValue)) {
					const madeToken = pxToMadeSizeToken(pxValue);
					edit.replace(selectedTextRange, madeToken);
				} else {
					vscode.window.showWarningMessage("The seleted text does not represent a valid number.");
				}
			} else {
				vscode.window.showWarningMessage("This version supports only px values coversion.\n(The selected value does not end with 'px')");
			}
		} else {
			vscode.window.showWarningMessage("No text is selected.");
		}

	}));

}

export function deactivate() { }
