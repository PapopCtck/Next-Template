import { fireEvent, render, waitFor } from 'test-utils';
import preloadAll from 'jest-next-dynamic';

import { IDynamicForm } from '@/components';
import { Simple } from '@/stories/components/DynamicForm.stories';

beforeAll(async () => {
  await preloadAll();
});

test('render without crash',async () => {
  const { getByRole } = render(<Simple {...Simple.args as IDynamicForm} />);
  await waitFor(() => getByRole('textbox'));
});

test('can add form to list',() => {
  const { getByRole, getByText, getAllByRole } = render(<Simple {...Simple.args as IDynamicForm} />);
  getByRole('textbox');
  fireEvent.click(getByText('Add'));
  expect(getAllByRole('textbox').length).toBe(2);
});
