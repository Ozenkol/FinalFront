import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';
import { useState } from 'react';
import { Form } from './Form';
import { Input } from '../Input/Input';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Shared/Form',
  component: Form,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { },
} satisfies Meta<typeof Form>;

export default meta;
// type Story = StoryObj<typeof meta>;
type Story = StoryObj<typeof Input>;


// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    render: () => {
        const [value, setValue] = useState<string>('')
        return (
            <Form>
                <Input label='Your input' value={value} setValue={setValue}/>
                <Input label='Your input' value={value} setValue={setValue}/>
            </Form>
        )
    }
};