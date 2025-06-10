import { Carousel, Collapse, Table, Timeline, Tree } from "antd";

export default function Display() {
  return (
    <div>
      <h2>Display</h2>
      <p>This page is used to display information.</p>
      <p>You can add more content here as needed.</p>
      <Table
        dataSource={[
          { key: '1', name: 'John Doe', age: 32, address: '10 Downing St.' },
          { key: '2', name: 'Jane Smith', age: 28, address: '20 Downing St.' },
          { key: '3', name: 'Sam Green', age: 45, address: '30 Downing St.' },
        ]}
        columns={[
          { title: 'Name', dataIndex: 'name', key: 'name' },
          { title: 'Age', dataIndex: 'age', key: 'age' },
          { title: 'Address', dataIndex: 'address', key: 'address' },
        ]}
        pagination={{ pageSize: 2 }}
        bordered
        title={() => 'User Information'}
        footer={() => 'End of User Information'}
        />
        <Collapse
            defaultActiveKey={['1']}
            items={[
                {
                key: '1',
                label: 'Panel 1',
                children: <p>This is the content of Panel 1</p>,
                },
                {
                key: '2',
                label: 'Panel 2',
                children: <p>This is the content of Panel 2</p>,
                },
                {
                key: '3',
                label: 'Panel 3',
                children: <p>This is the content of Panel 3</p>,
                },
            ]}

        />
        <Carousel
            autoplay
            style={{ width: '80%', margin: '20px auto' }}
            dots={{ className: 'custom-dots' }}
        >
            <div>
                <h3 style={{ color: '#fff', textAlign: 'center', lineHeight: '160px', background: '#364d79' }}>Slide 1</h3>
            </div>
            <div>
                <h3 style={{ color: '#fff', textAlign: 'center', lineHeight: '160px', background: '#364d79' }}>Slide 2</h3>
            </div>
            <div>
                <h3 style={{ color: '#fff', textAlign: 'center', lineHeight: '160px', background: '#364d79' }}>Slide 3</h3>
            </div>
            <div>
                <h3 style={{ color: '#fff', textAlign: 'center', lineHeight: '160px', background: '#364d79' }}>Slide 4</h3>
            </div>
        </Carousel>
        <Tree
            treeData={[
                {
                    title: 'Parent Node 1',
                    key: '0-0',
                    children: [
                        { title: 'Child Node 1-1', key: '0-0-0' },
                        { title: 'Child Node 1-2', key: '0-0-1' },
                    ],
                },
                {
                    title: 'Parent Node 2',
                    key: '0-1',
                    children: [
                        { title: 'Child Node 2-1', key: '0-1-0' },
                        { title: 'Child Node 2-2', key: '0-1-1' },
                    ],
                },
            ]}
            defaultExpandAll
            style={{ marginTop: '20px', width: '300px' }}

        />
        <Timeline
            items={[
                { label: '2023-01-01', children: 'Event 1' },
                { label: '2023-02-01', children: 'Event 2' },
                { label: '2023-03-01', children: 'Event 3' },
                { label: '2023-04-01', children: 'Event 4' },
            ]}
            mode="alternate"
            style={{ marginTop: '20px' }}
        />
    </div>
  );
}