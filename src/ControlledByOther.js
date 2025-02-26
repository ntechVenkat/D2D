const ControlledByOther = (props) => {
  return (
    <div>
      <center>
        <h1>Controlled By Other</h1>
        <form>
          <input type="text" onChange={props.changeHandler} />
        </form>
      </center>
    </div>
  );
};
export default ControlledByOther;
