import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import "../css/style.css"
//import satu from "../images/satu.jpg"
const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <h3>Now I will create a gatsby image with graphql</h3>
    <p><Img 
    fluid={data.satuGatsbyImage.childImageSharp.fluid}
    alt="this coding image" />
    </p>
    <p>Anim aliqua esse mollit proident ex excepteur magna laboris. Magna ad occaecat nisi cupidatat est cupidatat. Enim incididunt labore duis laborum culpa quis sint exercitation cupidatat incididunt. Veniam laborum ex cupidatat culpa tempor ex sit. Aute minim sunt officia cupidatat duis deserunt id eiusmod veniam eu nostrud ad minim aliquip. Aliquip officia deserunt velit anim ad sit ullamco voluptate incididunt dolor incididunt occaecat consequat id. Commodo magna exercitation ullamco laborum.
Occaecat in eu magna sint aliquip adipisicing labore nostrud eiusmod anim nulla. Elit ea ipsum in magna consequat ullamco anim ipsum aliquip sit incididunt pariatur duis. Sint do minim commodo enim duis commodo adipisicing. Aliqua consectetur dolor irure minim id labore proident sint nostrud qui irure. Dolore cillum dolor pariatur nostrud esse culpa reprehenderit veniam cupidatat in nisi veniam. Nostrud eu sint sunt commodo laboris est. Aliquip consequat culpa laborum culpa.</p>
    <p>
      <Img 
    fluid={data.duaGatsbyImage.childImageSharp.fluid}
    alt="this coding image" />
    </p>
    <p>Enim ex in reprehenderit eiusmod magna ullamco sit non. Sit qui labore adipisicing eiusmod id aliqua eu aute.Velit occaecat labore magna sunt deserunt exercitation do.</p>
<p>
      <Img 
    fluid={data.tigaGatsbyImage.childImageSharp.fluid}
    alt="this coding image" />
    </p>
<p>Esse sunt nostrud adipisicing excepteur dolor minim veniam sunt sint laboris mollit aute culpa reprehenderit. Excepteur consectetur aliquip mollit quis deserunt reprehenderit aliqua deserunt eiusmod aliquip esse irure est. Eiusmod sit ipsum magna anim commodo officia cupidatat aliquip commodo. Voluptate culpa eiusmod ad incididunt elit enim consequat laboris.

Magna eiusmod in irure deserunt aute nisi cupidatat non id id velit sunt. Ex excepteur ad elit mollit fugiat eiusmod nisi labore consequat do Lorem anim voluptate id. Adipisicing consequat nostrud laborum quis mollit exercitation reprehenderit reprehenderit. Aliquip est nostrud esse aute proident eu. Ex eiusmod veniam voluptate mollit. Deserunt voluptate laboris amet consequat officia cillum eiusmod nulla cillum veniam fugiat ea voluptate eu.</p>
    <p>
      <Img 
    fluid={data.empatGatsbyImage.childImageSharp.fluid}
    alt="this coding image" />
    </p>
<p>Velit non ex minim aliquip. Veniam do et laborum elit et aliqua do ex dolore magna sint nulla elit.</p>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
export const query = graphql `
query{
  satuGatsbyImage: file(relativePath: {eq: "satu.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 2000) {
    	...GatsbyImageSharpFluid
      }     
    }
  }
  duaGatsbyImage: file(relativePath: {eq: "dua.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 2000) {
    	...GatsbyImageSharpFluid
      }     
    }
  }
  tigaGatsbyImage: file(relativePath: {eq: "tiga.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 2000) {
    	...GatsbyImageSharpFluid
      }     
    }
  }
  empatGatsbyImage: file(relativePath: {eq: "empat.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 2000) {
    	...GatsbyImageSharpFluid
      }     
    }
  }
}
`