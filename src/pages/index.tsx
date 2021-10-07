import React from 'react'
import type { NextPage } from 'next'
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';

const Home: NextPage = () => {
  return (
    <>
      <SafeEnvironment/>
      <PageTitle 
        title={'Conheça os profissionais'}
        subtitle={'Prenecha seu endereço e veja todos os profissionais da sua localização'}
      />
    </>
  )
}

export default Home
