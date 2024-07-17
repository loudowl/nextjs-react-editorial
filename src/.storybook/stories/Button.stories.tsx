import React from 'react';
import Button from '../components/Button';

export default {
  title: 'Button',
  component: Button,
};

export const Primary = () => <Button primary>Primary Button</Button>;
export const Secondary = () => <Button>Secondary Button</Button>;
