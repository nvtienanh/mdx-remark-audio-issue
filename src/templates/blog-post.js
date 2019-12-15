import React from "react";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";
import { MDXProvider } from "@mdx-js/react";
import { graphql } from "gatsby";

import Layout from "../components/layout";

export default ({ data }) => (
  <Layout>
    <MDXProvider>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </MDXProvider>
  </Layout>
);

export const query = graphql`
  query blogPost($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
    }
  }
`;
