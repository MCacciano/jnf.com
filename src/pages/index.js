import React, { useEffect } from 'react'
import { Link } from 'gatsby'

import Layout from '../components/main-layout/main-layout.component'
import SEO from '../components/seo'

import twitch from '../axios/twitch'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
    </Layout>
  )
}

export default IndexPage
