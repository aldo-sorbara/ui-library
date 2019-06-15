import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import { Grid, GridContainer } from '../../components/web/grids';

const getData = (func, label, textVal) => func(label, textVal);

storiesOf('Grids', module)
  .addDecorator(withKnobs)
  .add('with default props', () => (
    <Grid lg={25} md={25} sm={25} xs={25}>
      {getData(text, 'texts', 'This is a Grid component')}
    </Grid>
  ))
  .add('with container', () => (
    <GridContainer>
      <Grid lg={75} md={75} sm={75} xs={75}>
        {getData(
          text,
          'texts',
          'This is a Grid component with a Grid container.'
        )}
      </Grid>
    </GridContainer>
  ));
