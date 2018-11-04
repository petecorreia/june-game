import React from 'react';
import { storiesOf } from '@storybook/react';
import Test from 'components/Test';

storiesOf('Test', module).add('default', () => {
	return <Test />;
});
