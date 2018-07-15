const   express = require('express'),
        app = express(),
        graphql = require('graphql'),
        graphqlHTTP = require('express-graphql'),
        MyGraphQLSchema = require('./schema'),
        PORT = 4000;

app.use('/graphql', graphqlHTTP({
    schema: MyGraphQLSchema,
    graphiql: true
}));      
      
app.listen(PORT,()=>{ console.log(`Listening on ${PORT}!`)})

