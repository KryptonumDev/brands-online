export default {
  name: 'aboutPage',
  title: 'About',
  type: 'document',
  icon: () => '🙋',
  fields: [
    {
      name: 'hero_Heading',
      type: 'markdown',
      title: 'Heading',
      fieldset: 'hero',
    },
    {
      name: 'hero_Paragraph',
      type: 'markdown',
      title: 'Paragraph',
      fieldset: 'hero',
    },
    {
      name: 'hero_Cta',
      type: 'cta',
      title: 'CTA',
      fieldset: 'hero',
    },
    {
      name: 'experience_List',
      type: 'array',
      of: [
        {
          type: 'aboutPage_experienceList'
        }
      ],
      title: 'List',
      fieldset: 'experience',
    },
    {
      name: 'meetUs_Tag',
      type: 'string',
      title: 'Tag',
      fieldset: 'meetUs',
    },
    {
      name: 'meetUs_Heading',
      type: 'markdown',
      title: 'Heading',
      fieldset: 'meetUs',
    },
    {
      name: 'meetUs_Paragraph',
      type: 'markdown',
      title: 'Paragraph',
      fieldset: 'meetUs',
    },
    {
      name: 'meetUs_Cta',
      type: 'cta',
      title: 'CTA',
      fieldset: 'meetUs',
    },
    {
      name: 'meetUs_Projects',
      type: 'array',
      of: [
        {
          type: 'list_titleDescriptionAndImage'
        }
      ],
      description: 'The Images should have 300x300px dimensions. However, the recommended size is 600x600px (so @2x). Remember please to properly optimize your image. The best results will be if you use https://squoosh.app/ and compress to WebP format.',
      title: 'Projects',
      fieldset: 'meetUs',
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
      name: 'experience',
      title: 'Experience',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'meetUs',
      title: 'Meet Us',
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

export const aboutPage_experienceList = {
  name: "aboutPage_experienceList",
  title: "List",
  type: "object",
  fields: [
    {
      name: 'number',
      type: 'string',
      title: 'Number',
      validation: Rule => Rule.required()
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
      validation: Rule => Rule.required()
    },
  ],
  preview: {
    select: {
      number: 'number',
      title: 'title',
      subtitle: 'description'
    },
    prepare({ title, number, subtitle }) {
      return {
        title: `${number} ${title}`,
        subtitle: subtitle,
      }
    }
  },
}