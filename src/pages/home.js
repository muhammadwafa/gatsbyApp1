import React from "react";
import PostCard from '../components/postcard';
import Container from '../components/container';
import { useStaticQuery, graphql } from "gatsby";

export default () => {

    const data = useStaticQuery(graphql` query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                date
                name
                minutes
                details
                labelImage
                personImage
              }
            }
          }
        }
    }`);

    return (
        <Container>
            {data.allMarkdownRemark.edges.map(({node}) => {
                const {date, minutes, name, details, labelImage, personImage} = node.frontmatter;
                return (
                    <PostCard key={date} date={date} name={name} minutes={minutes} details={details} labelImage={labelImage} personImage={personImage} />
                );
            })}
        </Container>
    );
}