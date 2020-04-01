export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5e844a2ed85f3c2b8e619687',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-o5ntt358',
                  apiId: '00c90613-c9b9-4a1b-8d59-f92371e8d165'
                },
                {
                  buildHookId: '5e844a2f8c397e0c7d5e9579',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-tsonsgjd',
                  apiId: 'bac5734d-904e-488d-adee-9c0853d939fe'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/joeczar/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-tsonsgjd.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
