describe('Union type', function() {
  it('should support in typescript', function() {
    let sample: number | string | boolean;
    sample = 100;
    console.info(sample);

    sample = true;
    console.info(sample);

    sample = "downy";
    console.info(sample);

  });

  it('should support typeof operator ', () => {
    function process(value: string | number | boolean) {
      if(typeof value === "string") {
        return value.toUpperCase();
      }else if(typeof value === "number") {
        return value + 2;
      }else {
        return !value;
      }
    }

    expect(process("anto")).toBe("ANTO");
    expect(process(100)).toBe(102);
    expect(process(true)).toBe(false);

  });
})