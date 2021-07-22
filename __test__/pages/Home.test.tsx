import { render } from 'test-utils';
import { Suspense } from 'react';

import Home from '@/pages/index';

test('render without crashing',async () => {
  const { findByText } = render(<Suspense fallback={<div />}> <Home /></Suspense>);

  findByText('Welcome to Next.js!');
});
