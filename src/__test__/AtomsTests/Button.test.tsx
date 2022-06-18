import { render, screen } from '@testing-library/react';
import Button from '../../Atoms/Button';

describe('Button Render', () => 
{
    test('renders button success test', () => {
        render(<Button action={'done'} />);
        const linkElement = screen.getByText(/done/i);
        console.log(linkElement.innerHTML)
        expect(linkElement).toBeInTheDocument();
    });
    test('renders button failure test', () => {
        render(<Button action={'howdare'} />);
        const linkElement = screen.getByText(/nope/i);
        expect(linkElement).toBeInTheDocument();
    }); 
    test('renders button malformed test', () => {
        render(<Button action={[]} />);
        const linkElement = screen.getByText(/nope/i);
        expect(linkElement).toBeInTheDocument();
    })

})
