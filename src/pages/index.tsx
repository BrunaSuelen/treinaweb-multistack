import React from 'react';
import type { NextPage } from 'next';
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';

const Home: NextPage = () => {
  return (
    <>
      <SafeEnvironment />
      <PageTitle
        title={'Conheça os profissionais'}
        subtitle={
          'Prenecha seu endereço e veja todos os profissionais da sua localização'
        }
      />
      <UserInformation
        name={'Bruna Garcia'}
        picture={'https://github.com/BrunaSuelen.png'}
        rating={3}
        description={'Salvador'}
      />
      <UserInformation
        name={'Felipe Rezende'}
        picture={'https://github.com/Rezende123.png'}
        rating={3}
        description={'Salvador'}
      />
      <UserInformation
        name={'Nalla'}
        picture={''}
        rating={5}
        description={'Salvador'}
      />
    </>
  );
};

export default Home;
