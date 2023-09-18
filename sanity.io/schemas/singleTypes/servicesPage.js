import { removeMarkdown } from "../../utils/functions"

export default {
  name: 'servicesPage',
  title: 'Services',
  type: 'document',
  icon: () => '👨‍🔧',
  fields: [
    {
      name: 'hero_Tag',
      type: 'string',
      title: 'Tag',
      fieldset: 'hero',
    },
    {
      name: 'hero_Heading',
      type: 'markdown',
      title: 'Heading',
      fieldset: 'hero',
    },
    {
      name: 'services_List',
      type: 'array',
      of: [
        {
          type: 'servicesPage_servicesList'
        }
      ],
      title: 'List',
      fieldset: 'services',
    },
    {
      name: 'services_Cta',
      type: 'cta',
      title: 'CTA',
      fieldset: 'services',
    },
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      group: 'seo'
    },
  ],
  fieldsets: [
    {
      name: 'hero',
      title: 'Hero',
      options: {
        collapsible: true
      }
    },
    {
      name: 'services',
      title: 'Services',
      options: { collapsible: true, collapsed: true }
    },
  ],
  groups: [
    {
      title: 'SEO',
      name: 'seo',
    },
  ]
}

export const servicesPage_servicesList = {
  name: "servicesPage_servicesList",
  title: "List",
  type: "object",
  fields: [
    {
      name: 'title',
      type: 'markdown',
      title: 'Title',
      validation: Rule => Rule.required()
    },
    {
      name: 'tags',
      type: 'array',
      of: [
        {
          type: 'string'
        }
      ],
      title: 'Tags',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      type: 'markdown',
      title: 'Description',
      validation: Rule => Rule.required()
    },
  ],
  preview: {
    select: {
      title: 'title',
      tags: 'tags',
      subtitle: 'description'
    },
    prepare({ title, tags, subtitle }) {
      return {
        title: `${removeMarkdown(title)} | ${tags.length} tags`,
        subtitle: removeMarkdown(subtitle),
      }
    }
  },
}