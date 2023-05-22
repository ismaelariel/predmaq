const add = (a, b) => a + b;

test('test sum a and b', () => {
    const result = add(16, 16);

    expect(result).toBe(32);
});
