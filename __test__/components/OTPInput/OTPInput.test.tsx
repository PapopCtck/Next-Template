import { render, waitFor } from 'test-utils';
import userEvent from '@testing-library/user-event';
import preloadAll from 'jest-next-dynamic';

import { OTPInput } from '@/components';

beforeAll(async () => {
  await preloadAll();
});

test('render without crash',() => {
  render(<OTPInput count={4} />);
});

test('render with the provided range',async () => {
  const range = 6;
  const { getAllByRole } = render(<OTPInput count={range} />);
  await waitFor(() => expect(getAllByRole('textbox').length).toBe(range));
});

test('resend button should be render',() => {
  const { getByText } = render(<OTPInput count={4} resendBtn={true} />);
  getByText('ขอหมายเลข OTP อีกครั้ง');
});

test('should be able to input',() => {
  const { getAllByRole } = render(<OTPInput count={4} resendBtn={true} />);
  const inputs = getAllByRole('textbox');
  userEvent.type(inputs[0],'1234');
  expect(inputs[0]).toHaveValue('1');
  expect(inputs[1]).toHaveValue('2');
  expect(inputs[2]).toHaveValue('3');
  expect(inputs[3]).toHaveValue('4');
});
