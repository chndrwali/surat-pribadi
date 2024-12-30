'use client';

import { useEditorStore } from '@/hooks/use-editor-store';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Image from '@tiptap/extension-image';
import ImageResize from 'tiptap-extension-resize-image';

export const Editor = () => {
  const { setEditor } = useEditorStore();

  const editor = useEditor({
    immediatelyRender: false,
    onCreate({ editor }) {
      setEditor(editor);
    },
    onDestroy() {
      setEditor(null);
    },
    onUpdate({ editor }) {
      setEditor(editor);
    },
    onSelectionUpdate({ editor }) {
      setEditor(editor);
    },
    onTransaction({ editor }) {
      setEditor(editor);
    },
    onFocus({ editor }) {
      setEditor(editor);
    },
    onBlur({ editor }) {
      setEditor(editor);
    },
    onContentError({ editor }) {
      setEditor(editor);
    },
    editorProps: {
      attributes: {
        style: `padding-left:20px; padding-right-20px; `,
        class: 'focus:outline-none border print:border-0 bg-white border-[#C7C7C7] flex flex-col min-h-screen w-[384px] sm:w-[816px] pt-4 sm:pt-10 pr-14 pb-10 cursor-text',
      },
    },
    extensions: [
      StarterKit,
      //   FontSizeExtension,
      Image,
      ImageResize,
      //   Table,
      //   TableHeader,
      //   TableRow,
      //   TableCell,
      //   TaskItem.configure({
      //     nested: true,
      //   }),
      //   TaskList,
      Underline,
      //   FontFamily,
      //   TextStyle,
      //   TextAlign.configure({
      //     types: ['heading', 'paragraph'],
      //   }),
      //   Color,
      //   Highlight.configure({
      //     multicolor: true,
      //   }),
      //   Link.configure({
      //     openOnClick: false,
      //     autolink: true,
      //     defaultProtocol: 'https',
      //   }),
    ],
    content: '<p>Hello World! 🌎️</p>',
  });

  return (
    <div className="size-full overflow-x-auto px-4 print:p-0 print:bg-white print:overflow-visible">
      <div className="flex justify-center max-w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};
