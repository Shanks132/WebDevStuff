
import { render, screen } from "@testing-library/react"
import Greeting from "./Greeting"
import userEvent from "@testing-library/user-event"

describe('Greeting Component',()=>{
  test('Should Greet the user', () => {
    //Arrange
    render(<Greeting/>)
  
    //Act
    //nothing for this case
    //assert
    const helloworldElement = screen.getByText("Hello",{exact:false});//minus case sensitive
    expect(helloworldElement).toBeInTheDocument();
  })  
  test('Checks Ram ram if button not clicked', () => {
    //Arrange
    render(<Greeting/>)
    //Act
    //nothing for this case(eg. click button or smth)
    //assert
    const RamRamElement = screen.getByText("Ram Ram",{exact:false});//case sensitive
    expect(RamRamElement).toBeInTheDocument();
    // const SatyaHaiElement = screen.getByText("Satya hai",{exact:true});
    // expect(SatyaHaiElement).not.toBeInTheDocument();
  });

  test('Checks "Satya hai" if button clicked', () => {
    //Arrange
    render(<Greeting/>)
  
    //Act
    // click button
    const button = screen.getByRole('button')
    userEvent.click(button)

    //assert
    const SatyaHaiElement = screen.getByText("Satya hai",{exact:false});//case sensitive
    expect(SatyaHaiElement).toBeInTheDocument() ;
  })
})