const Background = ({ position }) => {
  return (
    <div
      style={{
        transform: `translate(${position.x}px,${position.y}px)`,
        position: "absolute",
        width: 200,
        height: 200,
        backgroundColor:'rgba()'
      }}
    ></div>
  );
};
export default Background;
