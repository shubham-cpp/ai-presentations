
export type CustomResponse<TData>
  = | { status: number; data: TData; error?: never }
  | {
    status: number;
    data?: never;
    error: object | string;
  };

export type ContentItem = {
  id: string;
  name: string;
  type: ContentType;
  content: ContentItem[] | string | string[] | string[][]

  initialRows?: number;
  initialColumns?: number;
  columns?: number

  restrictToDrop?: boolean;

  placeholder?: string;
  className?: string;
  alt?: string;
  calloutType?: "success" | "error" | "warning" | "info" | "question" | "caution"
  link?: string;
  code?: string;
  language?: string;
  isTransparent?: boolean;
  bgColor?: string;
}

export type ContentType =
  | 'column'
  | 'resizable-column'
  | 'text'
  | 'paragraph'
  | 'image'
  | 'table'
  | 'multiColumn'
  | 'blank'
  | 'imageAndText'
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'heading4'
  | 'title'
  | 'blockquote'
  | 'numberedList'
  | 'bulletedList'
  | 'code'
  | 'link'
  | 'quote'
  | 'divider'
  | 'calloutBox'
  | 'todoList'
  | 'bulletList'
  | 'codeBlock'
  | 'customButton'
  | 'tableOfContents'

export type Slide = {
  id: string;
  name: string;
  type: string;
  order: number;
  content: ContentItem;
  className?: string
}
