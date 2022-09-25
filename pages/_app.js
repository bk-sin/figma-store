import { Layout } from "../layout"
import styles from "../global.styles"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <style jsx global>
        {styles}
      </style>
    </>
  )
}

export default MyApp
