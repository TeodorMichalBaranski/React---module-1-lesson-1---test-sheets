import Header from './Header';
import Main from './Main';
import User from './User';

function Post() {
  return (
    <div>
      <Header
        name="Wojtek"
        surname="Wojtowicz"
        fixedName="Fixed name as parameter"
      />
      <Header name="Tomasz" surname={11} />
      <Main />
      <footer> Like IT!!!</footer>
      {users.map(user => (
        <User
          key={user.id}
          name={user.first_name}
          surname={user.last_name}
          mail={user.email}
        />
      ))}
    </div>
  );
}
export default Post;

const users = [
  {
    id: 1,
    first_name: 'Mychal',
    last_name: 'Torbard',
    email: 'mtorbard0@ed.gov',
    gender: 'Male',
    ip_address: '76.14.139.179',
  },
  {
    id: 2,
    first_name: 'Cody',
    last_name: 'Gillings',
    email: 'cgillings1@youtube.com',
    gender: 'Male',
    ip_address: '53.46.88.69',
  },
  {
    id: 3,
    first_name: 'Diego',
    last_name: 'Antrag',
    email: 'dantrag2@goo.gl',
    gender: 'Male',
    ip_address: '0.92.190.53',
  },
  {
    id: 4,
    first_name: 'Lilah',
    last_name: 'Bullon',
    email: 'lbullon3@apple.com',
    gender: 'Female',
    ip_address: '47.140.190.93',
  },
  {
    id: 5,
    first_name: 'Dinah',
    last_name: 'Covell',
    email: 'dcovell4@apache.org',
    gender: 'Female',
    ip_address: '47.76.9.8',
  },
  {
    id: 6,
    first_name: 'Elsa',
    last_name: 'Bonnell',
    email: 'ebonnell5@51.la',
    gender: 'Female',
    ip_address: '253.209.224.236',
  },
  {
    id: 7,
    first_name: 'Claudetta',
    last_name: 'Rowles',
    email: 'crowles6@samsung.com',
    gender: 'Female',
    ip_address: '159.246.123.203',
  },
  {
    id: 8,
    first_name: 'Juline',
    last_name: 'Caveau',
    email: 'jcaveau7@washington.edu',
    gender: 'Female',
    ip_address: '254.183.184.84',
  },
  {
    id: 9,
    first_name: 'Alameda',
    last_name: 'Eles',
    email: 'aeles8@google.ca',
    gender: 'Female',
    ip_address: '127.227.155.195',
  },
  {
    id: 10,
    first_name: 'Jeanie',
    last_name: 'Jirsa',
    email: 'jjirsa9@bloomberg.com',
    gender: 'Female',
    ip_address: '185.130.134.157',
  },
];
