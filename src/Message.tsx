function Message() {
  const name = "Ayoob";
  if (name === "Ayoob")
    return (
      <div>
        <h1>Hello {name}</h1>
      </div>
    );
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

export default Message;
