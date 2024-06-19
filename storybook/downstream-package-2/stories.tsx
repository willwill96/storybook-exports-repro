import type { Meta, StoryObj } from '@storybook/react';
import {test} from '@willwill96-storybook/test/subpath'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Version 2',
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    render: () => <div>{test}</div>
};
