const fetch = require('node-fetch')

const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} = require('graphql')

const PostType = new GraphQLObjectType({
    name: 'Post',
    descripton: '...',
    fields: () => ({
        userId: {
            type: GraphQLString,
            resolve: json =>
                json.userId
        },
        id: {
            type: GraphQLString,
            resolve: json =>
                json.id
        },   
        title: {
            type: GraphQLString,
            resolve: json =>
                json.title
        },
        body: {
            type: GraphQLString,
            resolve: json =>
                json.body
        }      
    })
})

module.exports = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        descripton: '...',
        fields: () => ({
            posts: {
                type: PostType,
                args: {
                   id: {type: GraphQLInt}
                },
                resolve : (root, args) => {
                    return fetch(`https://jsonplaceholder.typicode.com/posts/${args.id}`).
                        then(response => response.json())
                }
           } 
        })
    })
})