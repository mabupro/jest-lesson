import { Calculator } from "./mock_spy";

it("sumメソッドが呼び出される",()=>{
    const calculator = new Calculator();
    const sumSpy = jest.spyOn(calculator,"sum");
    const result = calculator.sum(1,2);
    expect(result).toBe(3);
    expect(sumSpy).toHaveBeenCalledTimes(1);
    expect(sumSpy).toHaveBeenCalledWith(1,2);

    // ほかの関数に影響されないように
    // テストケースが多い場合はafterEachを利用して、自動的に解除する
    sumSpy.mockRestore();
})

