import { render } from 'test-utils';
import userEvent from '@testing-library/user-event';
import preloadAll from 'jest-next-dynamic';

import UploadInput from '@/components/UploadInput';

window.URL.createObjectURL = jest.fn(() => 'https://picsum.photos/id/1018/500');

beforeAll(async () => {
  await preloadAll();
});

test('render without crash',() => {
  const { getByLabelText } = render(<UploadInput value={{}}/>);
  getByLabelText('เลือกไฟล์');
});

test('should be able to upload',() => {
  const file = new File(['hello'], 'hello.png', { type: 'image/png' });
  const { getByLabelText } = render(<UploadInput value={{}}/>);
  const input = getByLabelText('เลือกไฟล์') as HTMLInputElement;
  userEvent.upload(input, file);
  expect(input.files && input.files[0]).toStrictEqual(file);
});

test('render selected image',() => {
  const { findByAltText } = render(<UploadInput value={{ selectedFile: 'https://picsum.photos/id/1018/500' }}/>);
  findByAltText('preview');
});
