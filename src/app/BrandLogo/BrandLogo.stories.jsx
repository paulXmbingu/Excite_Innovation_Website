// BrandLogoHor.stories.js

import React from 'react';
import { BrandLogoHor } from './BrandLogoHor';

// Storybook configuration
export default {
    title: 'Components/BrandLogoHor',
    component: BrandLogoHor,
    parameters: {
        docs: {
            description: {
                component: 'This component displays a horizontal version of the brand logo, styled using the `BrandLogo.module.css` file.',
            },
        },
    },
};

// Template for rendering the component
const Template = (args) => <BrandLogoHor {...args} />;

// Default story
export const Default = Template.bind({});
Default.args = {};

// Documentation
Default.storyName = 'Default';
Default.parameters = {
    docs: {
        storyDescription: 'The default view of the `BrandLogoHor` component displaying the brand logo horizontally.',
    },
};
