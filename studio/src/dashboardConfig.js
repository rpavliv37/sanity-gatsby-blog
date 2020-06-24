export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ef3450a5947f4027e89a1df',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-tkvyn3g3',
                  apiId: '5e1ead5a-585d-4f2e-bb37-97843ef0e4f9'
                },
                {
                  buildHookId: '5ef3450a5947f4021989a2d3',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-jyb4gh8x',
                  apiId: 'f7fcc9a1-7363-4312-89d0-aebf78b6b697'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rpavliv37/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-jyb4gh8x.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
