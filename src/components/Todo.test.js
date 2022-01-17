import { fireEvent, render, waitForElement } from '@testing-library/react';
  
import Todo from './Todo';


describe('Tests for Todo component', ()=> {
  it('Should add new task when form has been submited', async ()=> {
    const {getByTestId} = render(<Todo/>)  
    const fieldNode = await waitForElement(
      () => getByTestId('form-field')
      ) 
      const newTask = 'testing'
      fireEvent.change(fieldNode, {target: { value: newTask}})
      expect(fieldNode.value).toEqual(newTask)
      
      const btnNode = await waitForElement(
        ()=> getByTestId('form-btn') 
        )
      fireEvent.click(btnNode)
   const tableNode = await waitForElement(
    () => getByTestId('table')

   )
    const tdNode = await waitForElement(
      ()=> getByText(newTask)
    )
      expect(tdNode).toBeDefined();

  })
})