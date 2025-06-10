import { Button } from 'antd';
import { useState } from 'react';

export default function Count() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>count: {count}</p>
      <Button onClick={() => setCount(count + 1)}>add</Button>
    </div>
  );
}