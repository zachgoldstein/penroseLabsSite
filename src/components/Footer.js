import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';

const Footer = props => (
  <div className="footer-strip">
        <div className="contact-wrapper">
            <div id="contact" className="contact container pt-8 pt-md-10">
                <div className="row justify-content-start">
                    <div className="col-6">
                        <h3 className="title-3 text-light mb-3">Penrose Labs</h3>
                        <p className="">1139 College St</p>
                        <p className="">Toronto, ON M6H 1B5</p>
                    </div>
                    <div className="col-6">
                        <h3 className="title-3 text-light mb-3">Business Inquiries</h3>
                        <p className="">info@penroselabs.ca</p>
                        <h3 className="title-3 text-light mb-3">Or just say hello!</h3>
                        <p className="">hello@penroselabs.ca</p>
                    </div>
                </div>
            </div>
        </div>
  </div>
);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => <Footer data={data} />}
  />
);
