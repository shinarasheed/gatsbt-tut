import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

const getData = graphql`
  query SecondQuery {
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

const HeaderStatic = () => {
  return (
    //this is also cool
    //pass in the query
    //render the data using render props
    <StaticQuery
      query={getData}
      render={data => {
        return (
          <div>
            <p>{data.site.siteMetadata.description}</p>
          </div>
        );
      }}
    ></StaticQuery>
  );
};

export default HeaderStatic;
