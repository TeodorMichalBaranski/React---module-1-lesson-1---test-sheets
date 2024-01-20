// const Header = props => {
//   console.log(props);
//   return (
//     <header>
//       {props.name} {props.surname}
//     </header>
//   );
// };
// const Header = props => {
//   const { name, surname } = props;
//   return (
//     <header>
//       {name} {surname}
//     </header>
//   );
// };
const Header = ({ name, surname, fixedName = 'fixedName' }) => {
  //   console.log(name, surname);
  return (
    <header>
      {name} -- {surname} == {fixedName}
    </header>
  );
};

export default Header;
