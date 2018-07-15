# GraphQL Basic Example using JSONPlaceholder test API with express-graphql and node-fetch modules

Quick starter repo example that uses the http://jsonplaceholder.typicode.com/ JSON test API. 

Converts the jsonplaceholder endpoint into a GraphQL compatible query which then allows you to use GraphQL to lookup a post via the posts id as argument


Clone repo and, install packages, start the server.

```sh
$ npm install
$ node ./app.js
```

Open browser: http://localhost:4000/graphql to load the GraphiQL query web interface tool

Run a test query (specify the post id for example: 98) and specifiy the types of data you want to return. You can specify for example (userId, id, title, body)

```sh
query{
  posts(id:98){
    userId,
    id,
    title,
    body
  }
}
```


![yo](https://octodex.github.com/images/twenty-percent-cooler-octocat.png "GraphQL Express Example with JSONPlaceholder API")

