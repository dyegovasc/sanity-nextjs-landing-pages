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
                  buildHookId: '5f5299c5045c2c1ceda94698',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-g1vhmui6',
                  apiId: '458dfd26-b1f7-4404-93c5-e9d1ee576c5c'
                },
                {
                  buildHookId: '5f5299c5e2f5ca24ccb280cd',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-gpx4do6j',
                  apiId: 'a1e8d9b4-8835-45f0-adff-8be437340023'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dyegovasc/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-gpx4do6j.netlify.app', category: 'apps'}
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
