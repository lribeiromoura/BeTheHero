const generetaUniqueId = require('../../src/utils/generateUniqueId')

describe('Generate Unique ID', () => {
  it('should generate an unique ID', () => {
    const id = generetaUniqueId();
    expect(id).toHaveLength(8);
  })
});