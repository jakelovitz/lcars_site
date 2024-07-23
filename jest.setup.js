globalThis.require = {
    context: jest.fn(() => {
      const keys = () => ['test-image-1.png', 'test-image-2.png'];
      const context = (key) => 'test-file-stub';
      context.keys = keys;
      return context;
    }),
  };