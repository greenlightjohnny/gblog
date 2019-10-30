import React from 'react'
import { Link } from 'gatsby'
import Head from '../components/head'

import Layout from '../components/layout'
const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home" />
            <h1>Hello.</h1>
            <h2>I'm so so and so. An o and o. Living in </h2>
            <p>Need a developer? <Link to="/contact">Contact Me</Link></p>
        </Layout>
    )

    
}

export default IndexPage