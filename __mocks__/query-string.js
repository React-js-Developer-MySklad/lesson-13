const mock = jest.fn()
mock.parse = jest.fn().mockImplementation(() => {
    return {name: 1}
});

export default mock;