// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// module.exports = function (api) {
//   api.loadSource(({ addCollection }) => {
//     // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
//   })

//   api.createPages(({ createPage }) => {
//     // Use the Pages API here: https://gridsome.org/docs/pages-api/
//   })
// }

// const axios = require('axios')

// module.exports = function (api) {
//   api.loadSource(async actions => {
//     const { posts } = await axios.get('https://api-ap-northeast-1.graphcms.com/v2/ckseetgft4kzr01xp7yic64zh/master')

//     const collection = actions.addCollection({
//       typeName: 'BlogPosts'
//     })

//     for (const post of posts) {
//         console.log(post.id)
//         console.log(post.title)
//       collection.addNode({
//         id: post.id,
//         title: post.title
//       })
//     }
//   })
// }

//gridsome.server.js
module.exports = function(api) {
    api.createPages(async ({ graphql, createPage }) => {
      const { data } = await graphql(`
        {
          gcms {
            products {
              id
            }
          }
        }
      `);
      data.gcms.products.forEach(node => {
        createPage({
          path: `/product/${node.id}`,
          component: './src/templates/Product.vue',
          context: {
            id: node.id,
          },
        });
      });
    });
  };