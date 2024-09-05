/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export function HelloWorld2() {
  return <h1>Hello World2!</h1>;
}

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(date);
}

const Hello = ({ name, phone, email, click }) => {
  console.log(name);

  // const name = "Kaung Myat Soe";
  // const new_year = new Date('2023-12-31');

  const handleClick = () => {
    //logic

    click();
  };
  return (
    <div>
      <h1>Hello {name}!</h1>
      <h4>Email : {email}</h4>
      <h4>Phone : {phone}</h4>
      {click ? <button onClick={handleClick}>Click {name}</button> : null}
    </div>
  );
};

export default Hello;
