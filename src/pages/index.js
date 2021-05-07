import React from "react"
import { Link } from "gatsby"
import useDarkMode from "use-dark-mode"
import Switch from "react-switch"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

function Toggle() {
  const { value, toggle } = useDarkMode(false)

  // wait for client-side hydration to render the toggle
  if (typeof window === "undefined") return null

  return <Switch checked={value} onChange={toggle} />
}

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div>
        <span>Toggle dark mode:</span> <Toggle />
      </div>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}
export default IndexPage
