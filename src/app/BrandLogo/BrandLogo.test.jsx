import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrandLogoHor } from './BrandLogoHor';

test('renders the BrandLogoHor component', () => {
    render(<BrandLogoHor />);
    
    // Check if the div containing the image is in the document
    const divElement = screen.getByRole('img'); // Assuming only one image; otherwise use a specific selector
    expect(divElement).toBeInTheDocument();
});
