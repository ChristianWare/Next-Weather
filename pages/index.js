import Head from 'next/head'
import Image from 'next/image'
import SearchBox from '../components/SearchBox'

export default function Home() {
  return (
    <div>
    <Head>
      <title>Weather App</title>
    </Head>
      
    <div className="home">
      <div className="container">
        <SearchBox />
       
      </div>
    </div>

    </div>
  )
}
