import * as vscode from 'vscode';
import { PdfEditorProvider } from './pdf-editor-provider';

export function activate(context: vscode.ExtensionContext): void {
  const extensionRoot = vscode.Uri.file(context.extensionPath);
  const provider = new PdfEditorProvider(extensionRoot);
	const disposable = vscode.window.registerCustomEditorProvider(
		'pdf.preview',
		provider,
		{
			webviewOptions: {
				enableFindWidget: false, // default
				retainContextWhenHidden: true,
			},
		}
	)
  context.subscriptions.push(disposable);
}

export function deactivate(): void {}
