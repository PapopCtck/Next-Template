import { render, waitFor } from 'test-utils';
import { Avatar, IAvatar } from '@/components';
import preloadAll from 'jest-next-dynamic';

import { Image } from '@/stories/components/Avatar.stories';

beforeAll(async () => {
  await preloadAll();
});

jest.mock('next/image', () => ({ src, alt }: {src: string, alt: string}) => <img src={src} alt={alt} />);

test('render without crashing',async () => {
  const { getByText } = render(<Avatar name="Test user" size="32px" />); 
  const avatar = await waitFor(() => getByText('Te'));
  expect(avatar.style.width).toBe('32px');
});

test('render image from src',async () => {
  const args = Image.args as IAvatar;
  const name = args.name;
  const { findAllByAltText } = render(<Image {...args} />);
  const allImgs = await findAllByAltText(name);
  expect(allImgs[0]).toHaveAttribute('src',args.src);
});
