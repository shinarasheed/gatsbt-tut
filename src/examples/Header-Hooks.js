import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

//setting up the query seperately
//we can add the query keyword and even the name of the query
//for description purposes
const getData = graphql`
  query FirstQuery {
    site {
      siteMetadata {
        description
        title
        author
        data {
          name
          age
        }
      }
    }
  }
`;

const HeaderHooks = () => {
  const {
    site: { siteMetadata: info },
  } = useStaticQuery(getData);

  return (
    <div>
      {/* <h1>author {data.site.siteMetadata.author}</h1> */}
      <h1>author {info.author}</h1>
      <h1>title {info.title} </h1>
    </div>
  );
};

export default HeaderHooks;
