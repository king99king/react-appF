import { useState } from "react";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/button";
import Auth from "./components/auth";
import AddDataForm from "./components/AddDataForm";
import ImageUpload from "./components/ImageUpload";
function App() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handelClick = (item: string) => {
    console.log(item);
  };
  const [show, setShow] = useState(false);

  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={handelClick} />
      {show && (
        <Alert onClose={() => setShow(false)}>
          This is an <span className="alert-link">alert</span>
        </Alert>
      )}
      <Button color="secondary" onClick={() => setShow(true)}>
        Click
      </Button>
      <Auth />
      <AddDataForm />
      <br />
      <br />
      <ImageUpload />
    </div>
  );
}

export default App;
