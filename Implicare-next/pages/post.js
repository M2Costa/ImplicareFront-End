/*

Página post (serve para criação de paginas temporárias e dinamicas)


import {withRouter} from 'next/router'
import Layout from '../Component/BootstrapLayout.js'

const Content = withRouter((props) => (
  <div>
    <h1>{props.router.query.title}</h1>
    <p>This is the blog post content.</p>
  </div>
))

const Page = (props) => (
    <Layout>
       <Content />
    </Layout>
)

export default Page