import { render, waitFor } from 'test-utils';
import preloadAll from 'jest-next-dynamic';
import { Alert } from '@/components';

beforeAll(async () => {
  await preloadAll();
});

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  //fake timer cleanup
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

test('render without crash',async () => {
  const children = 'Success';
  const { getByText } = render(<Alert>{children}</Alert>);
  await waitFor(() => getByText(children));
});


test('auto disappear',async () => {
  const children = 'Timer';
  const duration = 1000;
  const onclose = jest.fn();
  const { getByText } = render(<Alert onCloseClick={onclose} duration={duration}>{children}</Alert>);
  getByText(children);
  jest.runOnlyPendingTimers();
  expect(onclose).toBeCalled();
});

