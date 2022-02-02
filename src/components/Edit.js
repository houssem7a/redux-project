import { Button } from "react-bootstrap";

const Edit = ({ setShow }) => {
  return (
    <>
      <style type="text/css">
        {`
    .btn-edit {
      background-color: #0a5b05bf;
      color: white;
    }
    `}
      </style>
      <Button
        className="button"
        onClick={() => {
          setShow(true);
        }}
        variant="edit"
      >
        Edit
      </Button>
    </>
  );
};
export default Edit;
