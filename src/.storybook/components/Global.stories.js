import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import {
  Container,
  Wrapper,
  Headline,
  Description,
  Legales,
  Label,
  LabelLarge,
  SecondHeadline,
  ContainerDesktop,
  Desktop,
  Onboarding,
  Terms,
  H1,
  SectionDescription,
  UrlLink,
  Timer,
  DesktopText,
  Bind,
  Logo,
  LogoMobile,
  TextPromotion
} from '../../components/web/global';

const getData = (func, label, textVal) => func(label, textVal);

storiesOf('Global', module)
  .addDecorator(withKnobs)
  .add('Container', () => (
    <Container data='containerDefault'>
      {getData(text, 'texts', 'This is a container')}
    </Container>
  ))
  .add('Wrapper', () => (
    <Wrapper data='wrapperDefault'>
      {getData(text, 'texts', 'This is a wrapper')}
    </Wrapper>
  ))
  .add('Headline', () => (
    <Headline data='headlineDefault'>
      {getData(text, 'texts', 'This is a headline')}
    </Headline>
  ))
  .add('Description', () => (
    <Description data='descriptionDefault'>
      {getData(text, 'texts', 'This is a description')}
    </Description>
  ))
  .add('Legales', () => (
    <Legales data='legalesDefault'>
      {getData(text, 'texts', 'This is a legales component')}
    </Legales>
  ))
  .add('Label', () => (
    <Label data='labelDefault'>
      {getData(text, 'texts', 'This is a label')}
    </Label>
  ))
  .add('LabelLarge', () => (
    <LabelLarge data='labelLargeDefault'>
      {getData(text, 'texts', 'This is a label large')}
    </LabelLarge>
  ))
  .add('Second headline', () => (
    <SecondHeadline data='secondHeadline'>
      {getData(text, 'texts', 'This is a SecondHeadline')}
    </SecondHeadline>
  ))
  .add('ContainerDesktop', () => (
    <div style={{ 'padding-top': '1rem' }}>
      <ContainerDesktop data='containerDesktopDefault'>
        {getData(text, 'texts', 'This is a ContainerDesktop component')}
      </ContainerDesktop>
    </div>
  ))
  .add('Desktop', () => (
    <div
      style={{
        'padding-top': '1rem',
        'background-color': 'black',
        color: 'white'
      }}
    >
      <span>Desktop compoent is below this span</span>
      <Desktop data='desktopDefault' />
    </div>
  ))
  .add('Onboarding', () => (
    <Onboarding data='onboardingDefault'>
      {getData(text, 'texts', 'This is an Onboarding component')}
    </Onboarding>
  ))
  .add('Terms', () => (
    <Terms data='termsDefault'>
      {getData(text, 'texts', 'This is a Terms component')}
    </Terms>
  ))
  .add('H1', () => (
    <H1 data='h1Default'>
      <div
        style={{
          'padding-top': '1rem',
          'background-color': 'black',
          color: 'white'
        }}
      >
        {getData(text, 'texts', 'This is an H1 component')}
      </div>
    </H1>
  ))
  .add('SectionDescription', () => (
    <div
      style={{
        'padding-top': '1rem',
        'background-color': 'black',
        color: 'white'
      }}
    >
      <SectionDescription data='sectionDescriptionDefault'>
        {getData(text, 'texts', 'This is a SectionDescription component')}
      </SectionDescription>
    </div>
  ))
  .add('UrlLink', () => (
    <UrlLink data='urlLinkDefault'>
      {getData(text, 'texts', 'This is an UrlLink component')}
    </UrlLink>
  ))
  .add('Timer', () => (
    <Timer data='timerDefault'>
      {getData(text, 'texts', 'This is a Timer component')}
    </Timer>
  ))
  .add('DesktopText', () => (
    <DesktopText data='desktopTextDefault'>
      {getData(text, 'texts', 'This is a DesktopText component')}
    </DesktopText>
  ))
  .add('Bind', () => (
    <div
      style={{
        'padding-top': '1rem'
      }}
    >
      <span>Bind component on the right, below "Show Info" button</span>
      <Bind data='bindDefault' />
    </div>
  ))

  .add('Logo', () => <Logo data='logoDefault' src='./welp_ar/logo.png' />)
  .add('LogoMobile', () => (
    <LogoMobile data='logoMobileDefault' src='./welp_ar/logo.png' />
  ))
  .add('TextPromotion', () => (
    <TextPromotion data='textPromotionDefault'>
      {getData(text, 'texts', 'This is a TextPromotion component')}
    </TextPromotion>
  ));
