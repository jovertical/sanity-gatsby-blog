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
                  buildHookId: '5e19aa43fc4eb8059602a5a4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-bww8ikos',
                  apiId: '6e1ed028-eea6-4048-937f-0a98f9047304'
                },
                {
                  buildHookId: '5e19aa43fc4eb8b4ff02a5bb',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-qq67cqb9',
                  apiId: '9e95afc8-27ad-439a-b0c5-2b499209b310'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/palonponjovertlota/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-qq67cqb9.netlify.com', category: 'apps' }
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
