import React from "react";
import { Button, Form, Input ,Segmented} from "antd";
import "./Verification.css";
const Options=[{name:"FirstName",},{name:"LastName",},{name:"Email"}]
export default function Verification() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="Verification"
      className="Verification-Form"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >

{/* ----------------------------------FirstName LastName Email-------------------------------------------------- */}
    {
        Options.map((option)=>{
            return( <Form.Item name={option.name} key={option.name}className="FormStyle" rules={[{required:true,message:"Plasea into "}]}>
                {option.name}<Input/>
            </Form.Item>)
        })

    }
{/* -----------------------phone-------------------------------- */}

<Form.Item name="Phone" className="FormStyle">
    Phone<Segmented options={['Mobile','Static']}/><Input  rules={[{required:true,message:"Plasea into "}]}/>
</Form.Item>

{/* -----------------------AddressLine-------------------------------- */}

<Form.Item name="AddressLine" className="AddressLine">
    <p>AddressLine</p>
  <textarea className="textareaStyle"></textarea>
</Form.Item>
{/* -----------------------LastName-------------------------------- */}
      <Form.Item name="" className="SubmitStyle">
        <Button type="primary" htmlType="submit">
          submit
        </Button>
      </Form.Item>
    </Form>
  );
}
