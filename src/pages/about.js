import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
const AboutPage = () => {
    return (

        <Layout>
            <Head title="About" />
              <h1>About Me</h1>
        <p>Born in aaa, moved to mmm, went to school ccc at lll</p>
        <p>See my contact details <Link to="/contact">Here</Link></p>
        </Layout>
        
    )
}

export default AboutPage