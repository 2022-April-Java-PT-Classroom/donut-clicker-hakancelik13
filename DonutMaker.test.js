import DonutMaker from "./Donut-Maker";

describe("DonutMaker", () => {

    test('should be able to add a donut and retrieve the totall count', () => {
      
        //Arange
        const underTest = new DonutMaker(0);
       //Act
       underTest.addDonut();
       //Assert
       expect(underTest.numDonuts).toEqual(1);
    });
    
    test('should be able to add a donut an autoclicker with 100 donuts', () => {
      
        //Arange
        const underTest = new DonutMaker(100,0);
       //Act
        underTest.addAutoclicker();
       //Assert
       expect(underTest.numDonuts).toEqual(0);
       expect(underTest.numAutoclickers).toEqual(1);
    });

    test("should NOT be able to purchase an autoclicker with 99 donut", () => {
      const underTest = new DonutMaker(99,0);
      underTest.addAutoclicker();
      expect(underTest.numDonuts).toEqual(99);
      expect(underTest.numAutoclickers).toEqual(0);

    });

    test("should be able to purchase a fourth multiplier", () => {
      const underTest = new DonutMaker(14, 0, 3);  //14 donuts, 0 autoclickers and 3 multipliers
      underTest.addMultiplier();
      expect(underTest.numMultipliers).toEqual(4);
      expect(underTest.numDonuts).toBeLessThan(1);
  });

  test("increase click value by 1.2 with a donut multiplier", () => {
    const underTest = new DonutMaker(10, 0, 1);
    underTest.addDonutMultiplier();
    expect(underTest.numDonuts).toEqual(11.2);
   });

 test("increase click value by 1.44 with a second donut multiplier", () => {
    const underTest = new DonutMaker(10, 0, 2);
    underTest.addDonutMultiplier2();
    expect(underTest.numDonuts).toEqual(11.44);
  });

});