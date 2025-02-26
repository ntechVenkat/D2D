import "./CSSinReact.css";
import { Stack, Button } from "react-bootstrap";

const CSSinReact = () => {
  return (
    <div>
      <center>
        <h1>CSS in React using External File and Inline Styling</h1>
        <p>Small difference in syntax of External file & Inline CSS</p>
      </center>
      <Stack direction="horizontal" gap={2}>
        <Button as="a" variant="primary">
          Button as link
        </Button>
        <Button as="a" variant="success">
          Button as link
        </Button>
      </Stack>
      ;
    </div>
  );
};
export default CSSinReact;
