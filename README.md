Run `gatsby develop` and open up GraphiQL.

Execute a query like…

```
query {
  allMdx(
    filter: {frontmatter: {title: {eq: "First Post"}}}
  ) {
    edges {
      node {
        id
      }
    }
  }
  allFile(
    filter: {childMdx: {frontmatter: {title: {eq: "First Post"}}}}
  ) {
    edges {
      node {
        id
      }
    }
  }
}
```
