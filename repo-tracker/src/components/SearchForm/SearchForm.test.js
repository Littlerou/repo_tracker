import { default as SearchForm } from '.';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
   
describe('SearchForm', () => {
    let getResultMock;

    beforeEach(() => {
        getResultMock = jest.fn();
        render(<SearchForm getResult={getResultMock}/>);
    });

    test('it renders a form', () => {
        let form = screen.getByRole('form');
        expect(form).toBeInTheDocument();;
    });

    test('it calls on getResult prop on form submission', () => {
        let locationInput = screen.getByLabelText('Location');
        userEvent.type(locationInput, "Hong Kong{enter}")
        expect(getResultMock).toHaveBeenNthCalledWith(1, 'Hong Kong');
    })
});