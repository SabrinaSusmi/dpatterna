import { action } from "../pages/hello-command/light-controller";
import { LightOnCommand, LightOffCommand, IncreaseLuminCommand, DecreaseLuminCommand, RedLightCommand, Remote, Light, Command } from "../patterns/command/command-light"

describe("Command Pattern Light Test",()=>{

    test('Light On',()=>{
        let expected = new LightOnCommand(new Light())
        let received =action('on')
        expect(received).toEqual(expected.execute())
    })

    test('Increase luminosity while light on (Red light off)',()=>{
        let expected = "on"
        let received = action("increase-lum");
        expect(received).toEqual(expected)
 
     })

    test('Light Off',()=>{
        let expected = new LightOffCommand(new Light())
        let received = action('off')
        expect(received).toEqual(expected.execute())
 
     })

     test('Decrease luminosity while light off (Red light off)',()=>{
      let expected = "off"
      let received = action("increase-lum");
      expect(received).toEqual(expected)

   })

     test('Red Light On',()=>{
        let expected = new RedLightCommand(new Light())
        let received = action('red-light')
        expect(received).toEqual(expected.execute())
 
     })

     test('Increase luminosity while red light on',()=>{
        let expected = "red1"
        let received = action("increase-lum")
        expect(received).toEqual(expected)
 
     })

     test('Increase luminosity again while red light on',()=>{
        let expected = "red2"
        let received = action("increase-lum")
        expect(received).toEqual(expected)
 
     })

     test('Decrease luminosity while red light on',()=>{
        let expected = "red1"
        let received = action("decrease-lum")
        expect(received).toEqual(expected)
 
     })

     test('Decrease luminosity while red light on',()=>{
        let expected = "red0"
        let received = action("decrease-lum")
        expect(received).toEqual(expected)
 
     })

     test('Decrease luminosity while red light on',()=>{
      let expected = "red0"
      let received = action("decrease-lum")
      expect(received).toEqual(expected)

   })

}

)