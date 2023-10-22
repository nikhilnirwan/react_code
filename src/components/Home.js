import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SIgn_img from "./SIgn_img";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    name: "",
    description: "",
    dueDate: "",
    startDate: "",
  });

  const [data, setData] = useState([]);
  console.log(inpval);

  const getdata = (e) => {
    const { value, name } = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();

    const { name, description, dueDate, startDate } = inpval;

    if (name === "") {
      toast.error(" name field is requred!", {
        position: "top-center",
      });
    } else if (description === "") {
      toast.error("email field is requred", {
        position: "top-center",
      });
    } else if (dueDate === "") {
      toast.error("dueDate field is requred", {
        position: "top-center",
      });
    } else if (startDate === "") {
      toast.error("startDate field is requred", {
        position: "top-center",
      });
    } else {
      console.log("data added succesfully");
    }
  };

  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6">Card Details</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  name="name"
                  onChange={getdata}
                  placeholder="Enter Name"
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  name="description"
                  onChange={getdata}
                  placeholder="Description"
                />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  onChange={getdata}
                  name="dueDate"
                  type="date"
                  placeholder="Due Date"
                />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  onChange={getdata}
                  name="startDate"
                  type="date"
                  placeholder="Start Date"
                />
              </Form.Group>
              <Button
                variant="primary"
                className="col-lg-6"
                onClick={addData}
                style={{ background: "rgb(67, 185, 127)" }}
                type="submit"
              >
                Create Card
              </Button>
            </Form>
          </div>
          <SIgn_img />
        </section>
        <ToastContainer />
      </div>
    </>
  );
};

export default Home;
