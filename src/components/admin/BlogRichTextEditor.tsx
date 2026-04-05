"use client";

import { useReducer } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import {
  Bold,
  Italic,
  Strikethrough,
  List,
  ListOrdered,
  Undo,
  Redo,
  Link2,
  Quote,
  Minus,
  Code,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Pilcrow,
} from "lucide-react";

type Props = {
  initialHtml: string;
  onHtmlChange?: (html: string) => void;
};

function getBlockSelectValue(editor: NonNullable<ReturnType<typeof useEditor>>): string {
  if (editor.isActive("heading", { level: 2 })) return "h2";
  if (editor.isActive("heading", { level: 3 })) return "h3";
  if (editor.isActive("heading", { level: 4 })) return "h4";
  if (editor.isActive("codeBlock")) return "code";
  return "p";
}

export function BlogRichTextEditor({ initialHtml, onHtmlChange }: Props) {
  const [, bumpToolbar] = useReducer((n: number) => n + 1, 0);

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3, 4] },
        bulletList: { HTMLAttributes: { class: "list-disc pl-6 my-2" } },
        orderedList: { HTMLAttributes: { class: "list-decimal pl-6 my-2" } },
        blockquote: { HTMLAttributes: { class: "border-l-4 border-primary/40 pl-4 my-3 italic" } },
        codeBlock: { HTMLAttributes: { class: "rounded-lg bg-muted p-3 text-sm font-mono my-3" } },
      }),
      Placeholder.configure({
        placeholder:
          "Write your post… Pick Heading 2–4 from the dropdown for section titles (table of contents). The post title above is the only H1.",
      }),
      Underline,
      Link.configure({
        openOnClick: false,
        autolink: true,
        HTMLAttributes: { class: "text-primary underline underline-offset-2" },
      }),
      TextAlign.configure({
        types: ["heading", "paragraph", "blockquote"],
      }),
    ],
    content: initialHtml || "<p></p>",
    onCreate: ({ editor: ed }) => {
      onHtmlChange?.(ed.getHTML());
    },
    editorProps: {
      attributes: {
        class: "focus:outline-none max-w-none",
      },
    },
    onUpdate: ({ editor: ed }) => {
      onHtmlChange?.(ed.getHTML());
    },
    onSelectionUpdate: () => {
      bumpToolbar();
    },
  });

  if (!editor) {
    return (
      <div className="rounded-xl border border-border bg-muted/30 min-h-[360px] flex items-center justify-center text-muted-foreground text-sm">
        Loading editor…
      </div>
    );
  }

  const Btn = ({
    onClick,
    active,
    title,
    disabled,
    children,
  }: {
    onClick: () => void;
    active?: boolean;
    title: string;
    disabled?: boolean;
    children: React.ReactNode;
  }) => (
    <button
      type="button"
      title={title}
      disabled={disabled}
      onClick={onClick}
      className={`p-2 rounded-lg text-sm transition-colors ${
        disabled ? "opacity-40 cursor-not-allowed" : ""
      } ${
        active
          ? "bg-primary/15 text-primary"
          : "text-foreground hover:bg-muted"
      }`}
    >
      {children}
    </button>
  );

  const sep = <div className="w-px h-6 bg-border mx-0.5" />;

  const blockValue = getBlockSelectValue(editor);

  return (
    <div className="rounded-xl border border-border overflow-hidden bg-card">
      <div className="flex flex-wrap items-center gap-1 p-2 border-b border-border bg-muted/40">
        <Btn
          title="Undo"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
        >
          <Undo className="w-4 h-4" />
        </Btn>
        <Btn
          title="Redo"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
        >
          <Redo className="w-4 h-4" />
        </Btn>
        {sep}

        <div className="flex items-center gap-1 mr-1">
          <Pilcrow className="w-3.5 h-3.5 text-muted-foreground shrink-0 ml-1" />
          <select
            aria-label="Paragraph or heading"
            value={blockValue}
            onChange={(e) => {
              const v = e.target.value;
              const chain = editor.chain().focus();
              if (v === "p") {
                chain.setParagraph().run();
              } else if (v === "code") {
                chain.toggleCodeBlock().run();
              } else if (v === "h2") {
                chain.setHeading({ level: 2 }).run();
              } else if (v === "h3") {
                chain.setHeading({ level: 3 }).run();
              } else if (v === "h4") {
                chain.setHeading({ level: 4 }).run();
              }
            }}
            className="h-9 rounded-lg border border-border bg-background px-2 text-sm font-medium text-foreground max-w-[140px] sm:max-w-none"
          >
            <option value="p">Normal text</option>
            <option value="h2">Heading 2</option>
            <option value="h3">Heading 3</option>
            <option value="h4">Heading 4</option>
            <option value="code">Code block</option>
          </select>
        </div>
        {sep}

        <Btn
          title="Bold"
          active={editor.isActive("bold")}
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <Bold className="w-4 h-4" />
        </Btn>
        <Btn
          title="Italic"
          active={editor.isActive("italic")}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <Italic className="w-4 h-4" />
        </Btn>
        <Btn
          title="Underline"
          active={editor.isActive("underline")}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
        >
          <span className="text-xs font-semibold underline px-0.5">U</span>
        </Btn>
        <Btn
          title="Strikethrough"
          active={editor.isActive("strike")}
          onClick={() => editor.chain().focus().toggleStrike().run()}
        >
          <Strikethrough className="w-4 h-4" />
        </Btn>
        <Btn
          title="Inline code"
          active={editor.isActive("code")}
          onClick={() => editor.chain().focus().toggleCode().run()}
        >
          <Code className="w-4 h-4" />
        </Btn>
        {sep}

        <Btn
          title="Align left"
          active={editor.isActive({ textAlign: "left" })}
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
        >
          <AlignLeft className="w-4 h-4" />
        </Btn>
        <Btn
          title="Align center"
          active={editor.isActive({ textAlign: "center" })}
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
        >
          <AlignCenter className="w-4 h-4" />
        </Btn>
        <Btn
          title="Align right"
          active={editor.isActive({ textAlign: "right" })}
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
        >
          <AlignRight className="w-4 h-4" />
        </Btn>
        {sep}

        <Btn
          title="Bullet list"
          active={editor.isActive("bulletList")}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          <List className="w-4 h-4" />
        </Btn>
        <Btn
          title="Numbered list"
          active={editor.isActive("orderedList")}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        >
          <ListOrdered className="w-4 h-4" />
        </Btn>
        <Btn
          title="Quote"
          active={editor.isActive("blockquote")}
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
        >
          <Quote className="w-4 h-4" />
        </Btn>
        <Btn
          title="Horizontal rule"
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
        >
          <Minus className="w-4 h-4" />
        </Btn>
        {sep}
        <Btn
          title="Link"
          active={editor.isActive("link")}
          onClick={() => {
            const prev = editor.getAttributes("link").href as string | undefined;
            const url = window.prompt("Link URL", prev || "https://");
            if (url === null) return;
            if (url === "") {
              editor.chain().focus().extendMarkRange("link").unsetLink().run();
              return;
            }
            editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
          }}
        >
          <Link2 className="w-4 h-4" />
        </Btn>
      </div>

      <div
        className="bg-background text-foreground [&_.ProseMirror]:min-h-[360px] [&_.ProseMirror]:px-4 [&_.ProseMirror]:py-4 [&_.ProseMirror]:outline-none
        [&_p]:my-2 [&_p]:leading-relaxed
        [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:font-display [&_h2]:mt-6 [&_h2]:mb-2 [&_h2]:leading-tight
        [&_h3]:text-xl [&_h3]:font-bold [&_h3]:font-display [&_h3]:mt-5 [&_h3]:mb-2 [&_h3]:leading-tight
        [&_h4]:text-lg [&_h4]:font-semibold [&_h4]:font-display [&_h4]:mt-4 [&_h4]:mb-1.5 [&_h4]:leading-tight
        [&_li]:my-0.5 [&_a]:text-primary [&_strong]:text-foreground
        [&_pre]:text-sm [&_code]:text-sm"
      >
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
