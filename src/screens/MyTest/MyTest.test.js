import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react-native'
import MyTest from './MyTest';

test('examples of some things', async () => {
    const { getByTestId, getByText, queryByTestId, toJSON } = render(<MyTest />)
    const famousProgrammerInHistory = 'Ada Lovelace'
    const middleAge = '23'

    const input = getByTestId('input')
    //   console.log("input in test==>",input)
    fireEvent.changeText(input, famousProgrammerInHistory)
    const inputAge = getByTestId('inputAge')

    fireEvent.changeText(inputAge, middleAge)

    const button = getByText('Print Username')
    // console.log("button==>", button)
    fireEvent.press(button)


    await waitFor(() => expect(queryByTestId('printed-username')).toBeTruthy())

    expect(getByTestId('printed-username').props.children).toBe(
        middleAge
    )
    expect(toJSON()).toMatchSnapshot()
});


