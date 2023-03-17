describe('calculateMonthlyPayments tests', function() {
  it('should calculate the monthly rate correctly', function () {
    expect(calculateMonthlyPayment({amount: 10000, years: 10, rate: 4.5})).toEqual('103.64');
    // because ".toFixed" returns a string
  });

  it("should return a result with 2 decimal places", function() {
    expect(calculateMonthlyPayment({amount: 10000, years: 10, rate: 4.5})).toMatch(/.\d\d/);
  });
})





