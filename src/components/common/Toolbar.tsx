import { Editor } from "@tiptap/react";
import { ToolbarOption } from "@/lib/types/elements";
import { Button, Tooltip } from "@nextui-org/react";
import { Icons } from "@/resource/icons";

export const Toolbar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) return null;
  
  const options: ToolbarOption[] = [
    {
      icon: <Icons.MdOutlineFormatBold size={18} />,
      action: () => editor.chain().focus().toggleBold().run(),
      isActive: () => editor.isActive("bold"),
      name: "Bold",
    },
    {
      icon: <Icons.MdOutlineFormatItalic size={18} />,
      action: () => editor.chain().focus().toggleItalic().run(),
      isActive: () => editor.isActive("italic"),
      name: "Italic",
    },
    {
      icon: <Icons.MdOutlineFormatUnderlined size={18} />,
      action: () => editor.chain().focus().setUnderline().run(),
      isActive: () => editor.isActive("underline"),
      name: "Underline",
    },
    {
      icon: <Icons.LuHeading1 size={18} />,
      action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      isActive: () => editor.isActive("heading", { level: 1 }),
      name: "Heading 1",
    },
    {
      icon: <Icons.LuHeading2 size={18} />,
      action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      isActive: () => editor.isActive("heading", { level: 2 }),
      name: "Heading 2",
    },
    {
      icon: <Icons.LuHeading3 size={18} />,
      action: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      isActive: () => editor.isActive("heading", { level: 3 }),
      name: "Heading 3",
    },
    {
      icon: <Icons.MdOutlineFormatAlignLeft size={18} />,
      action: () => editor.chain().focus().setTextAlign("left").run(),
      isActive: () => editor.isActive("paragraph", { textAlign: "left" }),
      name: "AlignLeft",
    },
    {
      icon: <Icons.MdOutlineFormatAlignCenter size={18} />,
      action: () => editor.chain().focus().setTextAlign("center").run(),
      isActive: () => editor.isActive("paragraph", { textAlign: "center" }),
      name: "AlignCenter",
    },
    {
      icon: <Icons.MdOutlineFormatAlignRight size={18} />,
      action: () => editor.chain().focus().setTextAlign("right").run(),
      isActive: () => editor.isActive("paragraph", { textAlign: "right" }),
      name: "AlignRight",
    },
    {
      icon: <Icons.MdOutlineFormatAlignJustify size={18} />,
      action: () => editor.chain().focus().setTextAlign("justify").run(),
      isActive: () => editor.isActive("paragraph", { textAlign: "justify" }),
      name: "AlignJustify",
    },
  ];

  return (
    <div className="flex flex-wrap gap-1 p-1.5 bg-gray-100 rounded-lg">
      {options.map((option, index) => (
        <Tooltip key={index} content={option.name}>
          <Button
            type="button"
            title={option.name}
            onClick={() => option.action()}
            color={option.isActive() ? "primary" : "default"}
            variant={option.isActive() ? "flat" : "light"}
            className={`${option.isActive() ? "text-primary" : ""}`}
            size="sm"
            isIconOnly
          >
            {option.icon}
          </Button>
        </Tooltip>
      ))}
    </div>
  );
};
