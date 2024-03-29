import React from "react"
import { Link } from "gatsby"
import useDarkMode from "use-dark-mode"
import Switch from "react-switch"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

function Toggle() {
  const { value, toggle } = useDarkMode(false)
  return <Switch checked={value} onChange={toggle} />
}

export default function IndexPage() {
  const [isClient, setIsClient] = React.useState(false)

  React.useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div>
        <span>Toggle dark mode:</span> {isClient ? <Toggle /> : null}
      </div>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}
