import { render, screen } from '@testing-library/react';
import ActionButton from '../../Atoms/ActionButton';

// describe is for the particular thing being checked and the tests are for the Success, Failure & Malformed tests.
describe('ActionButton Render', () => 
{
    test('renders button success test', () => 
    {
        // pseudo renders the component 
        render(<ActionButton action={'done'} />);
        // state what it wants to find in the component (i = case insensitive)
        const linkElement = screen.getByText(/done/i);
        // check that the condition matches expectation
        expect(linkElement).toBeInTheDocument();
    });
    test('renders button failure test', () => 
    {
        render(<ActionButton action={'howdare'} />);
        const linkElement = screen.getByText(/nope/i);
        expect(linkElement).toBeInTheDocument();
    }); 

})
