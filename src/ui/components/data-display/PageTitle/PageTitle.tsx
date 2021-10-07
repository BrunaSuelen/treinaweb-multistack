import React from 'react';
import { PageTitleContainter, PageTitleStyled } from './PageTitle.style';

interface PageTitleProps {
  title: string,
  subtitle?: string | JSX.Element
}

const PageTitle: React.FC<PageTitleProps> = (props)=> {

  return (
    <PageTitleContainter>
      <PageTitleStyled>{props.title}</PageTitleStyled>
      {props.subtitle}
    </PageTitleContainter>
  );
}

export default PageTitle