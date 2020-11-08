import postService from '../src/services/posts';
describe('Posts service', () => {
  test('it loads without error', () => {
    expect(postService).toBeDefined();
    expect(postService).toHaveProperty('getList');
    expect(postService).toHaveProperty('getPost');
  });
});
