function User({ name, surname, mail }) {
  return (
    <div>
      <h1>
        {name} - {surname}
      </h1>
      <p>mail: {mail}</p>
    </div>
  );
}

export default User;
