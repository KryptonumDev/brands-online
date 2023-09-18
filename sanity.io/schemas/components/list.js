import { removeMarkdown } from "../../utils/functions"

export const titleAndDescription = {
  name: "list_titleAndDescription",
  title: "Title and Description",
  type: "object",
  fields: [
    {
      name: 'title',
      type: 'markdown',
      title: 'Title',
    },
    {
      name: 'description',
      type: 'markdown',
      title: 'description',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description'
    },
    prepare({ title, subtitle }) {
      return {
        title: removeMarkdown(title),
        subtitle: removeMarkdown(subtitle),
      }
    }
  }
}