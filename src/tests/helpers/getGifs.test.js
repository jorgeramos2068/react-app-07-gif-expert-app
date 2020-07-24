import { getGifs } from '../../helpers/getGifs';

describe('Tests in getGifs', () => {
  test('Should get 10 elements', async () => {
    const gifs = await getGifs('batman');
    expect(gifs.length).toBe(10);
  });

  test('Should return an empty array when category is not sent', async () => {
    const gifs = await getGifs('');
    expect(gifs.length).toBe(0);
  });
});
