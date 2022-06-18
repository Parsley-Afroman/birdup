import { render, screen } from '@testing-library/react';
import Card from '../../Atoms/Card';


describe('Card Render', () => 
{
    test('renders Card success test', () => {
        render(<Card/>);
        const linkElement = document.querySelector('.card');
        expect(linkElement).toBeInTheDocument();
    });
})