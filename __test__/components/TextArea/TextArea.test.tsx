import { render, waitFor } from 'test-utils';
import userEvent from '@testing-library/user-event';
import preloadAll from 'jest-next-dynamic';

import { TextArea } from '@/components';

beforeAll(async () => {
  await preloadAll();
});

test('render without crash',async () => {
  const { getByRole } = render(<TextArea />);
  await waitFor(() => getByRole('textbox'));
});

test('input must show range',() => {
  const TestPhrase = 'test';
  const { getByRole, getByText } = render(<TextArea maxLength={20} />);
  const input = getByRole('textbox');
  getByText('0/20');
  userEvent.type(input,TestPhrase);
  expect(input).toHaveValue(TestPhrase);
  getByText(`${TestPhrase.length}/20`);
});


test('input must limit range',() => {
  const TestPhrase = 'this is a really long phrase';
  const { getByRole, getByText } = render(<TextArea maxLength={20} />);
  const input = getByRole('textbox');
  getByText('0/20');
  userEvent.type(input,TestPhrase);
  expect(input).toHaveValue(TestPhrase.substring(0,20));
  getByText('20/20');
});
