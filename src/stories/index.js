import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import { BasicClass } from "../components/BasicClass"
import Functional from "../components/Functional"
import { PureClass } from '../components/Pure';
import Memoized from "../components/Memoized";

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        zip zowie
      </span>
    </Button>
  ));

storiesOf('React Mess', module)
  .add("Basic", () => <BasicClass initialText={'what me see dwaaaves?? oh hooray!'} />)
  .add("Functional (simplest)", () => <Functional text={"oui?"} />)
  .add("Pure", () => <PureClass text="okay" />)
  .add("Memoized", () => <Memoized text="mi-mo-myyyyy" />)