import { render, screen } from '@testing-library/react';
import ActionButton from '../../Atoms/ActionButton';

describe('ActionButton Render', () => 
{
    test('renders button success test', () => {
        render(<ActionButton action={'done'} />);
        const linkElement = screen.getByText(/done/i);
        console.log(linkElement.innerHTML)
        expect(linkElement).toBeInTheDocument();
    });
    test('renders button failure test', () => {
        render(<ActionButton action={'howdare'} />);
        const linkElement = screen.getByText(/nope/i);
        expect(linkElement).toBeInTheDocument();
    }); 
    test('renders button malformed test', () => {
        render(<ActionButton action={[]} />);
        const linkElement = screen.getByText(/nope/i);
        expect(linkElement).toBeInTheDocument();
    })

})
