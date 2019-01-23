import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import Helmet from 'react-helmet';
import SEO from '../components/SEO';
import Layout from '../layouts/index';
import Call from '../components/Call';

const Home = (props) => {
    const markdown = props.data.allMarkdownRemark.edges;
    const json = props.data.allFeaturesJson.edges;
    return (
        <Layout bodyClass="page-home">
            <SEO title="Home" />
            <Helmet>
                <meta
                    name="description"
                    content="Penrose Labs is a boutique Canadian software engineering firm building solutions for businesses around the world"
                />
                <link href="https://fonts.googleapis.com/css?family=Roboto:100,400,400i,500,900" rel="stylesheet" />
            </Helmet>
            <div className="intro pb-4">
                <div className="container">
                    <h1></h1>
                    <p>
                    </p>
                </div>
            </div>

            <div id="services" className="container pt-5 pb-5 pt-md-7 pb-md-7">
                <div className="row justify-content-center">
                    {json.map(edge => (
                        <div key={edge.node.id} className="col-12 col-md-6 col-lg-4 mb-2">
                            <div className="feature">
                                {edge.node.image && (
                                    <div className="feature-image">
                                        <img src={withPrefix(edge.node.image)} />
                                    </div>
                                )}
                                <h2 className="feature-title">{edge.node.title}</h2>
                                <div className="feature-content">{edge.node.description}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="testimonials-wrapper">
                <div id="testimonials" className="testimonials container pt-8 pt-md-10">
                    <div className="row justify-content-start">
                        {markdown.filter(edge => {
                            return edge.node.frontmatter.top == true
                        }).map((edge, index) => (
                            <div key={edge.node.frontmatter.path} className={edge.node.frontmatter.top ? "col-12 col-md-6 mb-1" : "col-12 col-md-2 mb-1"}>
                                <div className="card main-card service service-teaser">
                                    <div className="card-content" >
                                        <div className="row justify-content-start">
                                            <div className="col-3">
                                                {edge.node.frontmatter.image && (
                                                    <div className="testimonials-image">
                                                        <img src={withPrefix(edge.node.frontmatter.image)} />
                                                    </div>
                                                )}
                                            </div>
                                            <div className="col-9">
                                                <h2>
                                                    <a href={edge.node.frontmatter.link}>{edge.node.frontmatter.title}</a>
                                                </h2>
                                                <div
                                                    className="testimonials-content"
                                                    dangerouslySetInnerHTML={{ __html: edge.node.html }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mini-clients row justify-content-start">
                        {markdown.filter(edge => {
                            return edge.node.frontmatter.top == false
                        }).map((edge, index) => (
                            <div key={edge.node.frontmatter.path} className={edge.node.frontmatter.top ? "col-12 col-md-2 mb-1" : "col-12 col-md-2 mb-1"}>
                                <div className="card service service-teaser">
                                    <div className="mini-client card-content" >
                                        <h2>
                                            <a href={edge.node.frontmatter.link}>{edge.node.frontmatter.title}</a>
                                        </h2>
                                        <div
                                            className="testimonials-content"
                                            dangerouslySetInnerHTML={{ __html: edge.node.html }}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </Layout>
    );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { 
          fileAbsolutePath: { regex: "/testimonials/" }
        }
      sort: { fields: [frontmatter___top], order: DESC }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            path
            link
            image
            top
          }
        }
      }
    }
    allFeaturesJson {
      edges {
        node {
          id
          title
          description
          image
        }
      }
    }
  }
`;

export default Home;
