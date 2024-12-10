import { cleanup, render, screen } from "@testing-library/react";
import Async from "./Async"


describe('Async component', () => {
  test("async component",async ()=>{
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json:async()=>[{
        id:'p1',title:"first post"
      }]
    });
    render(<Async/>);


    const listItemElements = await screen.findAllByRole('listitem');
    expect(listItemElements).not.toHaveLength(0);
    cleanup(<Async/>)
  })
})
