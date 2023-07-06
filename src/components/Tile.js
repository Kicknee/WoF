function Tile(props) {
  // const {value} = props;
  if (props.value) {
    return (
      <div
        className="tile uncovered"
        data-letter={props.value}
        // onClick={(e) => select(e)}
      >
        {props.show === true && props.value}
      </div>
    );
  } else {
    return <div className="tile">{props.value}</div>;
  }
}

// function select(e) {}
export { Tile };
