import { Breadcrumb, Card, Menu, Pagination, Steps, Switch, Tabs } from "antd";

export default function Nav() {
  return (
    <div>
     <Menu
        mode="horizontal"
        defaultSelectedKeys={['/home']}
        items={[
          {
            label: 'Home',
            key: '/home',
          },
          {
            label: 'About',
            key: '/about',
          },
          {
            label: 'Contact',
            key: '/contact',
          },
        ]}/>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>About</Breadcrumb.Item>
            <Breadcrumb.Item>Contact</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: '24px', background: '#fff' }}>
            <h2>Navigation Example</h2>
            <p>This is a simple navigation example using Ant Design components.</p> 
        </div>
        <Tabs defaultActiveKey="1" style={{ marginTop: '16px' }}>
          <Tabs.TabPane tab="Tab 1" key="1">
            <Card title="Tab 1 Content" style={{ width: '100%' }}>
              <Switch defaultChecked />
              <p>This is the content of Tab 1.</p>
                <p>You can add more components here.</p>
                
            </Card>

            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 2" key="2">
            <Card title="Tab 2 Content" style={{ width: '100%' }}>
                <Tabs direction="vertical" defaultActiveKey="1">
                    <Tabs.TabPane tab="Sub Tab 1" key="1">
                        Content of Sub Tab 1
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Sub Tab 2" key="2">
                        Content of Sub Tab 2
                    </Tabs.TabPane>
                </Tabs>
                </Card>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
            </Tabs.TabPane>
        </Tabs>
        <Steps current={3} direction="vertical" style={{ marginTop: '16px' }}>
          <Steps.Step title="Step 1" description="This is the first step." />
            <Steps.Step title="Step 2" description="This is the second step." />
            <Steps.Step title="Step 3" description="This is the third step." />
        </Steps>
        <Card title="Card Title" style={{ marginTop: '16px' }}>
          <p>Card content goes here.</p>
          <p>You can add more content to the card.</p>
        </Card>
        <Pagination defaultCurrent={1} total={50} style={{ marginTop: '16px' }} />
       <Pagination simple defaultCurrent={1} total={50} style={{ marginTop: '16px' }} />
        <Pagination defaultCurrent={1} total={50} showSizeChanger style={{ marginTop: '16px' }} />
    </div>
  );
}