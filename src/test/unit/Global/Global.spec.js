import React from 'react';
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
} from '../../../components/web/global';
import renderer from 'react-test-renderer';
import { mountWithTheme } from '../../../../utils/helper';
import { ThemeProvider } from 'styled-components';
import welp_ar from '../../../branding/brands/welp_ar';
import 'jest-styled-components';

describe('Container component', () => {
  it('should render container snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={welp_ar.theme}>
        <Container className='test-container' data='container'>
          This is a container
        </Container>
      </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render absolute container', () => {
    const wrapper = mountWithTheme(
      <Container className='test-container' absolute data='container-test'>
        Container
      </Container>,
      welp_ar.theme
    );
    expect(wrapper.props().absolute).toBe(true);
    expect(wrapper).toHaveStyleRule('position', 'absolute');
  });
});

describe('Wrapper component', () => {
  it('should render Wrapper snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={welp_ar.theme}>
        <Wrapper className='test-wrapper' data='wrapper'>
          This is a wrapper
        </Wrapper>
      </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Headline component', () => {
  it('should render Headline snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={welp_ar.theme}>
        <Headline className='test-headline' data='headline'>
          This is a headline
        </Headline>
      </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Description component', () => {
  it('should render Description snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={welp_ar.theme}>
        <Description className='test-description' data='description'>
          This is a description
        </Description>
      </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Legales component', () => {
  it('should render Legales snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={welp_ar.theme}>
        <Legales className='test-legales' data='legales'>
          This is a legales
        </Legales>
      </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Label component', () => {
  it('should render Label snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={welp_ar.theme}>
        <Label className='test-label' data='label'>
          This is a label
        </Label>
      </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('LabelLarge component', () => {
  it('should render LabelLarge snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={welp_ar.theme}>
        <LabelLarge className='test-labelLarge' data='label-large'>
          This is a label large
        </LabelLarge>
      </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('SecondHeadline component', () => {
  it('should render SecondHeadline snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={welp_ar.theme}>
        <SecondHeadline className='test-secondHeadline' data='second-headline'>
          This is a Second Headline
        </SecondHeadline>
      </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('ContainerDesktop component', () => {
  it('should render ContainerDesktop snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={welp_ar.theme}>
        <ContainerDesktop
          className='test-containerDesktop'
          data='container-desktop'
        >
          This is a ContainerDesktop component
        </ContainerDesktop>
      </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Desktop component', () => {
  it('should render Desktop snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={welp_ar.theme}>
        <Desktop className='test-desktop' data='desktop' />
      </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render Desktop with background', () => {
    const wrapper = mountWithTheme(
      <Desktop className='test-desktop' data='desktop-test' img='src/test' />,
      welp_ar.theme
    );
    expect(wrapper.props().img).toBe('src/test');
    expect(wrapper).toHaveStyleRule('background-image', 'url(src/test)');
  });
});

describe('Onboarding component', () => {
  it('should render Onboarding snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={welp_ar.theme}>
        <Onboarding className='test-onboarding' data='onboarding'>
          This is an Onboarding component
        </Onboarding>
      </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render Onboarding with overflow-y: hidden', () => {
    const wrapper = mountWithTheme(
      <Onboarding className='test-onboarding' data='onboarding-test' isLead>
        This is an Onboarding component
      </Onboarding>,
      welp_ar.theme
    );
    expect(wrapper.props().isLead).toBe(true);
    expect(wrapper).toHaveStyleRule('overflow-y', 'hidden');
  });
});

describe('Terms component', () => {
  it('should render Terms snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={welp_ar.theme}>
        <Terms className='test-terms' data='terms'>
          This is a Terms component
        </Terms>
      </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('H1 component', () => {
  it('should render H1 snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={welp_ar.theme}>
        <H1 className='test-h1' data='h1'>
          This is an H1 component
        </H1>
      </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('SectionDescription component', () => {
  it('should render SectionDescription snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={welp_ar.theme}>
        <SectionDescription
          className='test-sectionDescription'
          data='section-description'
        >
          This is a SectionDescription component
        </SectionDescription>
      </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render SectionDescription with bigger font', () => {
    const wrapper = mountWithTheme(
      <SectionDescription
        className='test-sectionDescription'
        data='section-description-test'
        bigger
      >
        This is a SectionDescription component
      </SectionDescription>,
      welp_ar.theme
    );
    expect(wrapper.props().bigger).toBe(true);
    expect(wrapper).toHaveStyleRule('font-size', '1.3rem');
    expect(wrapper).toHaveStyleRule('margin-bottom', '50px');
    expect(wrapper).toHaveStyleRule('margin-top', '-20px');
  });
});

describe('UrlLink component', () => {
  it('should render UrlLink snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={welp_ar.theme}>
        <UrlLink className='test-urlLink' data='url-link'>
          This is an UrlLink component
        </UrlLink>
      </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Timer component', () => {
  it('should render Timer snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={welp_ar.theme}>
        <Timer className='test-timer' data='timer'>
          This is a Timer component
        </Timer>
      </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('DesktopText component', () => {
  it('should render DesktopText snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={welp_ar.theme}>
        <DesktopText className='test-desktopText' data='desktop-text'>
          This is a DesktopText component
        </DesktopText>
      </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Bind component', () => {
  it('should render Bind snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={welp_ar.theme}>
        <Bind className='test-bind' data='bind' />
      </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Logo component', () => {
  it('should render Logo snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={welp_ar.theme}>
        <Logo className='test-logo' data='logo' />
      </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('LogoMobile component', () => {
  it('should render LogoMobile snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={welp_ar.theme}>
        <LogoMobile className='test-logo-mobile' data='logo-mobile' />
      </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('TextPromotion component', () => {
  it('should render TextPromotion snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={welp_ar.theme}>
        <TextPromotion className='test-text-promotion' data='text-promotion'>
          This is a TextPromotion component
        </TextPromotion>
      </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
