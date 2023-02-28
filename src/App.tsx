import { Button, ConfigProvider } from "antd";
import React, { useState } from "react";
import TestOne from "./component/TestOne";

function App() {
  const [color, setColor] = useState("darkTheme");
  const darkTheme=()=>{
    setColor("darkTheme");
  }
  const blueTheme=()=>{
    setColor("blue");
  }
  const chang=(e:any)=>{
    setColor(e.value)
  }
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: color
        },
      }}
    >
  
      <Button onClick={blueTheme} type="primary">blueTheme</Button>
      <Button onClick={darkTheme} type="primary">darkTheme</Button>
      <button>asdsa</button>
      <TestOne />
    </ConfigProvider>
  );
}

export default App;
