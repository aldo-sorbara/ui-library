import React from 'react';

import {
  Container,
  Wrapper,
  Headline,
  SecondHeadline,
  Description
} from './components/web/global';
import Card from './components/web/card';
import { List, ListItem } from './components/web/list';
import { Button } from './components/web/button';
import Checkbox from './components/web/checkbox';
import { RadioButton, RadioGroup } from './components/web/radiobutton';
import Stepper from './components/web/stepper';
import AppBar from './components/web/appbar';
import Emoji from './components/web/emoji';
import FacebookButton from './components/web/facebookbutton';
import Snackbar from './components/web/snackbar';
import { Grid, GridContainer } from './components/web/grids';
import Select from './components/web/select';
import Hero from './components/web/hero';
import Notification from './components/web/notification';

import welp_ar from './branding/brands/welp_ar';
import Input from './components/web/input';
import FormBlock from './components/web/formblock';

class App extends React.Component {
  render() {
    return (
      <Container>
        <Headline>COMMON UI</Headline>
        <Wrapper direction='column'>
          <Card data='card' active padding='20px'>
            <SecondHeadline>BUTTONS / LINKS</SecondHeadline>
            <Description>Button default</Description>
            <Button
              handleOnClick={() => console.log('CLICKED')}
              data='siguente'
            >
              Text
            </Button>
            <Description>
              Button link (al pasarle un href se tranforma de 'button' a 'a')
            </Description>
            <Button href='#' data='siguente'>
              Link
            </Button>
            <Description>Button Disabled</Description>
            <Button disabled data='siguente'>
              Disabled
            </Button>
            <Description>Button Block</Description>
            <Button isBlocked data='siguente'>
              Button isBlocked
            </Button>
            <SecondHeadline>PROPTYPES</SecondHeadline>
            <Description>required</Description>
            <ul>
              <li>text (texto del boton)</li>
              <li>
                data (data-w es el estandar que QA dio para hacer sus tests)
              </li>
            </ul>
            <Description>optional</Description>
            <ul>
              <li>action (onClick funciona pasada al boton)</li>
              <li>href (href combierte el 'button' en 'a')</li>
            </ul>
            <SecondHeadline>STYLED</SecondHeadline>
            <ul>
              <li>none</li>
            </ul>
            <Checkbox
              onChange={e => {
                console.log(e.target.checked, 'checked');
              }}
              data='terminos-y-condiciones'
            >
              Acepto los terminos y condiciones
            </Checkbox>
            <Checkbox
              onChange={e => {
                console.log(e.target.checked, 'checked');
              }}
              data='terminos-y-condiciones'
            >
              Acepto los <a href=''>Terminos y condiciones</a>
            </Checkbox>
            <RadioGroup
              name='testGroup'
              onChange={value => {
                console.log(value);
              }}
              inline
            >
              <RadioButton data='test' value='test1' label='test1' />
              <RadioButton data='test' value='test2' label='test2' />
              <RadioButton data='test' value='test3' label='test3' />
            </RadioGroup>
            <List data='test'>
              <ListItem>Test 1</ListItem>
              <ListItem>Test 2</ListItem>
              <ListItem>Test 3</ListItem>
            </List>
            <div>
              <Stepper steps={5} currentStep={3} />
            </div>
            <AppBar />
            <Emoji>This is an Emoji component 👌</Emoji>
            <FacebookButton
              facebookCallback={response => console.log(response)}
              config={welp_ar.config.onboarding}
            />
            <div>
              <Snackbar
                title={
                  welp_ar.wording.onboarding.basicInfo.inputSMS.alert
                    .contentFeatured
                }
                content={
                  welp_ar.wording.onboarding.basicInfo.inputSMS.alert.content
                }
                action={<Button data='dismiss'>Dismiss</Button>}
                fixed
              />
            </div>
            <GridContainer>
              <Grid lg={25} md={25} sm={25} xs={25}>
                <p>Grid content goes here.</p>
              </Grid>
            </GridContainer>
            <div>
              <Select
                placeholder='Ingrese un brand'
                label='Seleccione un brand'
                options={[
                  { label: 'Mango', value: 'mango' },
                  { label: 'Welp', value: 'welp' },
                  { label: 'Posta', value: 'posta' }
                ]}
              />
            </div>
            <Input
              label='Ingrese su celular'
              name='validationcellphone'
              descriptionBottom
              type='email'
              data='ingrese-celular'
              placeholder='Ingrese celular'
            />
            <Hero
              title='Soña en grande'
              style={{ backgroundColor: '#0082FF' }}
              action={
                <Button
                  modifiers={['inverse']}
                  handleOnClick={() => console.log('CLICKED')}
                  data='siguente'
                >
                  Comenzar
                </Button>
              }
            >
              Créditos personales 100% online, con plazos y tasas a tu medida.
            </Hero>
            <Notification
              header={
                welp_ar.wording.onboarding.notifications.productNotAvailable
                  .headline
              }
              subHeader={
                welp_ar.wording.onboarding.notifications.productNotAvailable
                  .description
              }
              content={'Content description'}
              data={
                welp_ar.wording.onboarding.notifications.productNotAvailable
                  .list
              }
              icon={
                welp_ar.wording.onboarding.notifications.productNotAvailable
                  .emoji
              }
              action={
                <Button isBlocked data='notification_button'>
                  Siguiente
                </Button>
              }
            />
            <FormBlock>
              <Input
                label='Ingrese su celular'
                name='validationcellphone'
                descriptionBottom
                type='number'
                prefix='15'
                description='Sin el 0 y 15'
                placeholder='42424242'
                data='ingrese-celular'
              />
            </FormBlock>
          </Card>
        </Wrapper>
      </Container>
    );
  }
}

export default App;
