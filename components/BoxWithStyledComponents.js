export default function BoxWithStyledComponents({ isBlack }) {
    return (
      <div
        className={`box-with-classname${
          isBlack ? " box-with-classname--black" : ""
        }`}
      ></div>
    );
  }