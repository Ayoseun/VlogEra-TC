import '../styles/globals.css'
import '../lib/hexStyles.css'
import { VlogEraTCProvider } from '../context/vlogContext'
function MyApp({ Component, pageProps }) {
  return (
    <VlogEraTCProvider>
      <Component {...pageProps} />
    </VlogEraTCProvider>
  )
}

export default MyApp
