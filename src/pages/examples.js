import React from 'react';
import HeaderHooks from '../examples/Header-Hooks';
import HeaderStatic from '../examples/Header-Static';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

const examples = props => {
  const { name, age } = props.data.site.siteMetadata.person;
  return (
    <Layout>
      <div>
        exmaples page
        <HeaderHooks />
        <HeaderStatic />
        <div>
          this is our person
          <h4>name : {name}</h4>
          <h4>age : {age}</h4>
        </div>
      </div>
    </Layout>
  );
};

export const getData = graphql`
  query {
    site {
      siteMetadata {
        description
        title
        author
        person: data {
          age
          name
        }
      }
    }
  }
`;

export default examples;
