import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo porro culpa similique necessitatibus minus quam iure sapiente quo? Dignissimos cupiditate repellat voluptates. Perspiciatis consequatur aspernatur accusantium debitis pariatur, possimus deserunt eos reprehenderit similique nesciunt soluta delectus quo. Assumenda commodi, fugit nobis culpa ab repellendus ipsa dignissimos facere dolor deserunt esse, nostrum perspiciatis laudantium eos totam sapiente neque sed quis recusandae molestias reiciendis. Minus quisquam dicta et suscipit nobis obcaecati ipsum aut voluptatem eius eveniet eligendi, iusto sit ad similique unde error optio excepturi. Voluptas fugiat nemo facere error cupiditate placeat veritatis doloremque, quam quos temporibus non asperiores minus! Incidunt, molestias.',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo porro culpa similique necessitatibus minus quam iure sapiente quo? Dignissimos cupiditate repellat voluptates. Perspiciatis consequatur aspernatur accusantium debitis pariatur, possimus deserunt eos reprehenderit similique nesciunt soluta delectus quo. Assumenda commodi, fugit nobis culpa ab repellendus ipsa dignissimos facere dolor deserunt esse, nostrum perspiciatis laudantium eos totam sapiente neque sed quis recusandae molestias reiciendis. Minus quisquam dicta et suscipit nobis obcaecati ipsum aut voluptatem eius eveniet eligendi, iusto sit ad similique unde error optio excepturi. Voluptas fugiat nemo facere error cupiditate placeat veritatis doloremque, quam quos temporibus non asperiores minus! Incidunt, molestias.',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
