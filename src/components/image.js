import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image"

const Image = () => {
    const data = useStaticQuery(graphql`
        query {
            allFile(
                filter: { 
                    extension: { regex: "/(jpg)|(png)|(jpeg)/"}, 
                    name: { nin: [ "background", "background2" ] }
                }
            ) {
                edges {
                    node {
                        base
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    `)

    return (
        <div className="image-container">
            <h1>View our Destinations</h1>
            <div className="image-grid">
                {data.allFile.edges.map((
                    image, key) => (
                        <GatsbyImage
                            key={key}
                            className="image-item"
                            fluid={image.node.childImageSharp.fluid}
                            alt={image.node.base.split('.')[0]}
                        />
                ))}
            </div>
        </div>
    )
}

export default Image