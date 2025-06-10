import { useEffect } from 'react';
import { useActive, Link } from 'ice';
import Count from '@/components/Count';
import { Badge, Input, Popconfirm, Popover, Result, Tooltip } from 'antd';

export default function Home() {
  const active = useActive();

  useEffect(() => {
    if (active) {
      console.log('Page Index is actived');
    } else {
      console.log('Page Index is deactived');
    }
  }, [active]);

  return (
    <div>
      <h4>Index</h4>
      <Count />

      <Link to="/home">Home</Link>
      <div className='flex flex-col gap-2 mt-4'>
            <Badge count={active ? 1 : 0} offset={[10, 0]} style={{ backgroundColor: '#52c41a' }}>
        <span style={{ cursor: 'pointer' }}>Active Status</span>
      </Badge>
      <Popover content="This page is active when you are on it.">
        <span style={{ marginLeft: 10, cursor: 'pointer' }}>What is Active?</span>
      </Popover>
      <Tooltip title="This page is active when you are on it.">
        <span style={{ marginLeft: 10, cursor: 'pointer' }}>What is Active? (Tooltip)</span>
      </Tooltip>
      <Input placeholder="Type something..." style={{ marginTop: 10 }} />
      <Popconfirm title="Are you sure?" onConfirm={() => console.log('Confirmed')}>
        <a href="#" style={{ marginTop: 10 }}>Click me to confirm</a>
      </Popconfirm>
      <Result status="success" title="This is a success message" subTitle="This is a description of the success message." style={{ marginTop: 10 }} />  
      
      </div>

    </div>
  );
}