import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Editor, useCurrentEditor } from '@tiptap/react';
import {
  BoldIcon,
  CodeIcon,
  CodeSquareIcon,
  Heading1Icon,
  Heading2Icon,
  Heading3Icon,
  Heading4Icon,
  Heading5Icon,
  Heading6Icon,
  ItalicIcon,
  LinkIcon,
  ListIcon,
  ListOrderedIcon,
  QuoteIcon,
  RulerIcon,
  StrikethroughIcon,
  TextIcon,
} from 'lucide-react';
import { useCallback } from 'react';

const MenuBar = ({ editor }: { editor: Editor }) => {
  const setLink = useCallback(() => {
    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('URL', previousUrl);

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();

      return;
    }

    // update link
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  }, [editor]);

  return (
    <>
      <Button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={
          editor.isActive('bold') ? 'bg-primary text-primary-foreground' : ''
        }
        variant={'outline'}
        type='button'
        size={'sm'}
      >
        <BoldIcon className='h-4 w-4' />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={
          editor.isActive('italic') ? 'bg-primary text-primary-foreground' : ''
        }
        variant={'outline'}
        type='button'
        size={'sm'}
      >
        <ItalicIcon className='h-4 w-4' />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={
          editor.isActive('strike') ? 'bg-primary text-primary-foreground' : ''
        }
        variant={'outline'}
        type='button'
        size={'sm'}
      >
        <StrikethroughIcon className='h-4 w-4' />
      </Button>
      {/* <Button
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={editor.isActive('code') ? 'bg-primary text-primary-foreground' : ''}
        variant={'outline'}
        type='button'
      >
        <CodeIcon className='h-4 w-4' />
      </Button> */}
      {/* <Button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
        clear marks
      </Button>
      <Button onClick={() => editor.chain().focus().clearNodes().run()}>
        clear nodes
      </Button> */}
      <div className='flex items-center' aria-hidden='true'>
        <Separator orientation='vertical' className='mx-1 bg-foreground' />
      </div>
      <Button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={
          editor.isActive('paragraph')
            ? 'bg-primary text-primary-foreground'
            : ''
        }
        variant={'outline'}
        type='button'
        size={'sm'}
      >
        <TextIcon className='h-4 w-4' />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={
          editor.isActive('heading', { level: 1 })
            ? 'bg-primary text-primary-foreground'
            : ''
        }
        variant={'outline'}
        type='button'
        size={'sm'}
      >
        <Heading1Icon className='h-4 w-4' />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={
          editor.isActive('heading', { level: 2 })
            ? 'bg-primary text-primary-foreground'
            : ''
        }
        variant={'outline'}
        type='button'
        size={'sm'}
      >
        <Heading2Icon className='h-4 w-4' />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={
          editor.isActive('heading', { level: 3 })
            ? 'bg-primary text-primary-foreground'
            : ''
        }
        variant={'outline'}
        type='button'
        size={'sm'}
      >
        <Heading3Icon className='h-4 w-4' />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={
          editor.isActive('heading', { level: 4 })
            ? 'bg-primary text-primary-foreground'
            : ''
        }
        variant={'outline'}
        type='button'
        size={'sm'}
      >
        <Heading4Icon className='h-4 w-4' />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={
          editor.isActive('heading', { level: 5 })
            ? 'bg-primary text-primary-foreground'
            : ''
        }
        variant={'outline'}
        type='button'
        size={'sm'}
      >
        <Heading5Icon className='h-4 w-4' />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={
          editor.isActive('heading', { level: 6 })
            ? 'bg-primary text-primary-foreground'
            : ''
        }
        variant={'outline'}
        type='button'
        size={'sm'}
      >
        <Heading6Icon className='h-4 w-4' />
      </Button>
      <div className='flex items-center' aria-hidden='true'>
        <Separator orientation='vertical' className='mx-1 bg-foreground' />
      </div>
      <Button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={
          editor.isActive('bulletList')
            ? 'bg-primary text-primary-foreground'
            : ''
        }
        variant={'outline'}
        type='button'
        size={'sm'}
      >
        <ListIcon className='h-4 w-4' />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={
          editor.isActive('orderedList')
            ? 'bg-primary text-primary-foreground'
            : ''
        }
        variant={'outline'}
        type='button'
        size={'sm'}
      >
        <ListOrderedIcon className='h-4 w-4' />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={
          editor.isActive('codeBlock')
            ? 'bg-primary text-primary-foreground'
            : ''
        }
        variant={'outline'}
        type='button'
        size={'sm'}
      >
        <CodeSquareIcon className='h-4 w-4' />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={
          editor.isActive('blockquote')
            ? 'bg-primary text-primary-foreground'
            : ''
        }
        variant={'outline'}
        type='button'
        size={'sm'}
      >
        <QuoteIcon className='h-4 w-4' />
      </Button>
      <Button
        onClick={setLink}
        className={
          editor.isActive('horizontalRule')
            ? 'bg-primary text-primary-foreground'
            : ''
        }
        variant={'outline'}
        type='button'
        size={'sm'}
      >
        <LinkIcon className='h-4 w-4' />
      </Button>
      <Button
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        className={
          editor.isActive('horizontalRule')
            ? 'bg-primary text-primary-foreground'
            : ''
        }
        variant={'outline'}
        type='button'
        size={'sm'}
      >
        <RulerIcon className='h-4 w-4' />
      </Button>
      {/* <Button onClick={() => editor.chain().focus().setHardBreak().run()}>
        hard break
      </Button>
      <Button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
      >
        undo
      </Button>
      <Button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
      >
        redo
      </Button> */}
    </>
  );
};

export default MenuBar;
