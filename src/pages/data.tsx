import { InfoCircleFilled, UploadOutlined } from "@ant-design/icons";
import { Button, Checkbox, DatePicker, Dropdown, Select, Slider, Tooltip, Transfer, Upload } from "antd";
import Search from "antd/es/input/Search";
import TextArea from "antd/es/input/TextArea";

export default function Data() {
  return (
    <div>
      <h2>Data Page</h2>
      <p>This page is used to demonstrate data handling in the application.</p>
      <p>You can add your data fetching logic here.</p>
      <TextArea enterKeyHint="search" rows={4} />
      <Tooltip title="awdawdaw"><InfoCircleFilled/></Tooltip>
      <Search
        placeholder="Search here"
        allowClear
        enterButton="Search"
        size="large"
        style={{ width: 400, marginTop: 20 }}
        onSearch={(value) => console.log(value)}
        />
        <Select
            style={{ width: 200, marginTop: 20 }}
            placeholder="Select an option"
            options={[
                { value: 'option1', label: 'Option 1' },
                { value: 'option2', label: 'Option 2' },
                { value: 'option3', label: 'Option 3' },
            ]}
        />
        <Select
            mode="multiple"
            style={{ width: 200, marginTop: 20 }}
            placeholder="Select multiple options"
            options={[
                { value: 'option1', label: 'Option 1' },
                { value: 'option2', label: 'Option 2' },
                { value: 'option3', label: 'Option 3' },
            ]}
        />
        <Checkbox style={{ marginTop: 20 }}>Check me</Checkbox>
        <Dropdown
            menu={{
                items: [
                    { label: 'Option 1', key: '1' },
                    { label: 'Option 2', key: '2' },
                    { label: 'Option 3', key: '3' },
                ],
            }}
            trigger={['click']}
        >
            <a onClick={(e) => e.preventDefault()}> 
                Open Dropdown
            </a>
        </Dropdown>
            <Slider
                style={{ width: 200, marginTop: 20 }}
                defaultValue={30}
                tooltip={{ open: true }}
                onChange={(value) => console.log(value)}
            />
            <Transfer
                dataSource={[
                    { key: '1', title: 'Item 1' },
                    { key: '2', title: 'Item 2' },
                    { key: '3', title: 'Item 3' },
                    { key: '4', title: 'Item 4' },
                    { key: '5', title: 'Item 5' },
                ]}
                targetKeys={['1', '2']}
                render={(item) => item.title}
                style={{ marginTop: 20 }}
                onChange={(nextTargetKeys) => console.log('Target keys changed:', nextTargetKeys)}
            />
            <DatePicker
                style={{ marginTop: 20 }}
                placeholder="Select date"
                onChange={(date, dateString) => console.log(date, dateString)}
            />
            <Upload
                action="/upload.do"
                listType="picture"
                style={{ marginTop: 20 }}
                onChange={({ file }) => {
                    if (file.status === 'done') {
                        console.log('File uploaded successfully:', file.response);
                    } else if (file.status === 'error') {
                        console.error('File upload failed:', file.error);
                    }
                }}
            >
                <Button><UploadOutlined/>Upload File</Button>
            </Upload>
            <Upload.Dragger
                action="/upload.do"
                listType="picture"
                style={{ marginTop: 20 }}
                onChange={({ file }) => {
                    if (file.status === 'done') {
                        console.log('File uploaded successfully:', file.response);
                    } else if (file.status === 'error') {
                        console.error('File upload failed:', file.error);
                    }
                }}

            >
                <p className="ant-upload-drag-icon">
                    <InfoCircleFilled />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>

                <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files
                </p>
            </Upload.Dragger>


    </div>
  );
}