import {useState} from 'react';
import 'antd/dist/antd.css';
import { Row, Col, Typography, Button, Modal, Input } from 'antd';
import Spreadsheet from "react-spreadsheet";

const data = [
  [{ value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }],
  [{ value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }],
  [{ value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }],
  [{ value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }],
];


const { Title } = Typography;
const { TextArea } = Input;

function App() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div style={{textAlign: 'center'}}>
      <div style={{backgroundColor: '#272C32'}}>
        <Row justify="center" style={{marginBottom: 15, paddingTop: 70}}>
          <Col span={24}>
            <Title style={{color: '#0BD874'}}>Avi's Spreadsheet</Title>
          </Col>
        </Row>
        <Row>
          <Col span={24} style={{marginBottom: 25}}>
            <Button type="primary" size='large' onClick={handleShow} style={{backgroundColor: '#0BD874', borderColor: '#0BD874'}}>Query</Button>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <div style={{display: 'inline-block', boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'}}>
              <Spreadsheet data={data}/>
            </div>
          </Col>
        </Row>
      </div>
      <Modal
          title="Query your database"
          centered
          visible={show}
          onOk={handleClose}
          onCancel={handleClose}
        >
          <TextArea rows={4} />
        </Modal>
      <div style={{backgroundColor: 'white', height: 100,  marginTop: '-60px'}}></div>
    </div>
  );
}

export default App;
