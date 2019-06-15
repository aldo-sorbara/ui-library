import React from 'react';
import { storiesOf } from '@storybook/react';

import Input from '../../components/web/input';

storiesOf('Input', module)
  .add('with prefix, label and placeholder', () => (
    <div style={{ margin: '20px' }}>
      <Input
        data='ingrese su celular'
        label='Ingrese su celular'
        name='validationcellphone'
        prefix='15'
        type='number'
        placeholder='42424242'
      />
    </div>
  ))
  .add('with description bottom', () => (
    <div style={{ margin: '20px' }}>
      <Input
        data='ingrese su celular'
        label='Ingrese su celular'
        name='validationcellphone'
        prefix='15'
        description='sin el 0 y sin el 11'
        descriptionBottom
        type='number'
        placeholder='42424242'
      />
    </div>
  ))
  .add('with description top', () => (
    <div style={{ margin: '20px' }}>
      <Input
        data='ingrese su celular'
        label='Ingrese su celular'
        name='validationcellphone'
        description={
          <span>
            Description top. <a href='#'>¿Qué es?</a>
          </span>
        }
        descriptionTop
        prefix='15'
        type='number'
        placeholder='42424242'
      />
    </div>
  ))
  .add('active', () => (
    <div style={{ margin: '20px' }}>
      <Input
        data='ingrese su celular'
        meta={{
          valid: true,
          touched: true,
          visited: true,
          dirty: true,
          active: true
        }}
        label='Ingrese su celular'
        name='validationcellphone'
        prefix='15'
        type='number'
        placeholder='42424242'
        description='sin el 0 y sin el 11'
        descriptionBottom
      />
    </div>
  ))
  .add('valid', () => (
    <div style={{ margin: '20px' }}>
      <Input
        data='ingrese su celular'
        meta={{ valid: true, touched: true, visited: true, dirty: true }}
        label='Ingrese su celular'
        name='validationcellphone'
        prefix='15'
        type='number'
        placeholder='42424242'
        description='sin el 0 y sin el 11'
        descriptionBottom
      />
    </div>
  ))
  .add('with error', () => (
    <div style={{ margin: '20px' }}>
      <Input
        data='ingrese su celular'
        meta={{
          error: 'Numero invalido',
          dirty: true,
          touched: true,
          visited: true
        }}
        label='Ingrese su celular'
        name='validationcellphone'
        prefix='15'
        type='number'
        placeholder='42424242'
      />
    </div>
  ))
  .add('large', () => (
    <div style={{ margin: '20px' }}>
      <Input
        data='ingrese su celular'
        label='Ingrese su celular'
        name='validationcellphone'
        prefix='15'
        description='sin el 0 y sin el 11'
        descriptionBottom
        type='number'
        placeholder='42424242'
        size='large'
      />
    </div>
  ))
  .add('xLarge', () => (
    <div style={{ margin: '20px' }}>
      <Input
        data='ingrese su celular'
        label='Ingrese su celular'
        name='validationcellphone'
        prefix='15'
        description='sin el 0 y sin el 11'
        descriptionTop
        type='number'
        placeholder='42424242'
        size='xLarge'
      />
    </div>
  ));
