import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const TitleAndText = Template.bind({});
TitleAndText.args = {
  title: 'Title One',
  text: 'Text One',
};

export const Error = Template.bind({});
Error.args = {
  title: 'Title One',
  text: 'Text One',
  theme: TextTheme.ERROR,
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'Title One',
};
export const OnlyText = Template.bind({});
OnlyText.args = {
  text: 'Text One',
};

export const TitleAndTextDark = Template.bind({});
TitleAndTextDark.args = {
  title: 'Title One',
  text: 'Text One',
};

TitleAndTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: 'Title One',
};

OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: 'Text One',
};

OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
