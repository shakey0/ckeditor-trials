import { useState, useEffect, useRef } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';

import {
	ClassicEditor,
	AccessibilityHelp,
	Alignment,
	AutoLink,
	Autosave,
	Bold,
	Essentials,
	FontFamily,
	FontSize,
	Italic,
	Link,
	List,
	Paragraph,
	SelectAll,
	Underline,
	Undo
} from 'ckeditor5';

import 'ckeditor5/ckeditor5.css';

import SimpleBox from './simplebox/simplebox';

import './Editor.css';

export default function Editor() {
	const editorContainerRef = useRef(null);
	const editorRef = useRef(null);
	const [isLayoutReady, setIsLayoutReady] = useState(false);

	useEffect(() => {
		setIsLayoutReady(true);

		return () => setIsLayoutReady(false);
	}, []);

	const editorConfig = {
		toolbar: {
			items: [
				'undo',
				'redo',
				'|',
				'fontSize',
				'fontFamily',
				'|',
				'bold',
				'italic',
				'underline',
				'|',
				'link',
				'|',
				'alignment',
				'|',
				'bulletedList',
				'numberedList',
        '|',
        'simpleBox'
			],
			shouldNotGroupWhenFull: false
		},
		plugins: [
			AccessibilityHelp,
			Alignment,
			AutoLink,
			Autosave,
			Bold,
			Essentials,
			FontFamily,
			FontSize,
			Italic,
			Link,
			List,
			Paragraph,
			SelectAll,
			Underline,
			Undo,
      SimpleBox
		],
		fontFamily: {
			supportAllValues: true
		},
		fontSize: {
			options: [10, 12, 14, 'default', 18, 20, 22],
			supportAllValues: true
		},
		initialData:
			'<p>Hi there</p><p>Start typing here...</p><p>Or paste your content here!</p>',
		link: {
			addTargetToExternalLinks: true,
			defaultProtocol: 'https://',
			decorators: {
				toggleDownloadable: {
					mode: 'manual',
					label: 'Downloadable',
					attributes: {
						download: 'file'
					}
				}
			}
		},
		placeholder: 'Type or paste your content here!'
	};

	return (
		<div>
			<div className="main-container">
				<div className="editor-container editor-container_classic-editor" ref={editorContainerRef}>
					<div className="editor-container__editor">
						<div ref={editorRef}>{isLayoutReady && <CKEditor editor={ClassicEditor} config={editorConfig} />}</div>
					</div>
				</div>
			</div>
		</div>
	);
}
