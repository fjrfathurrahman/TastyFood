import { useEditor, EditorContent } from '@tiptap/react';
import { Toolbar } from '../common/Toolbar';
import { TextEditorProps } from '@/lib/types/elements';
import Paragraph from '@tiptap/extension-paragraph';
import TextAlign from '@tiptap/extension-text-align';
import Heading from '@tiptap/extension-heading';
import Document from '@tiptap/extension-document';
import Text from '@tiptap/extension-text';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import Underline from '@tiptap/extension-underline';

export const TextEditor = ({ value, onChange, label } : TextEditorProps) => {
  const editor = useEditor({
    extensions: [
      Heading.configure({ levels: [1, 2, 3], HTMLAttributes: { class: 'prose' } }),
      Paragraph.configure({ HTMLAttributes: { class: 'prose font-medium text-sm' } }),
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Document,
      Text,
      Bold,
      Italic,
      Underline
    ],
    content: !value ? '<p>Mulai menulis...</p>' : value,
    immediatelyRender: true,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'max-w-full p-4 min-h-[200px] bg-gray-100 rounded-lg focus:outline-none',
      },
    },
  });

  return (
    <div className="max-w-full prose-p:text-red-500 border flex flex-col gap-2">
      <label className="text-sm font-medium">{label}</label>
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};
