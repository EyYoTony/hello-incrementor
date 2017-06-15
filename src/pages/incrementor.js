import React from 'react'
import Nav from '../containers/nav'
import Title from '../components/title'
import Footer from '../components/footer'
import Header from '../components/header'
import Incr from '../containers/incr'

const Incrementor = props =>
  <div>
    <Header />
    <Nav />
    <Title>Incrementor</Title>
    <Incr initialValue={0} incrementor={1} decrementor={1} />
    <Footer />
  </div>

export default Incrementor
