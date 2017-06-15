import React from 'react'
import Nav from '../containers/nav'
import Title from '../components/title'
import Footer from '../components/footer'
import Header from '../components/header'

const Home = props => {
  return (
    <div>
      <Header />
      <Nav />
      <Title>Home</Title>
      <div>
        <p>
          This is a story all aout how my life got flipped turned upside down
        </p>
      </div>
      <Footer />
    </div>
  )
}

export default Home
