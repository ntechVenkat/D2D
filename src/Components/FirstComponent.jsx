const FirstComponent = (props) => {
  console.log(props);
  return (
    <div>
      <center>
        <h1>Props Concept in {props.concept}</h1>
      </center>
    </div>
  );
};
export default FirstComponent;
