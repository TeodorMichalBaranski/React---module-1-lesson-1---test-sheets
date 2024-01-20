import React from 'react';

function sayHi(name) {
  console.log('my name is', name);
}

export const App = () => {
  // const isLoggedIn = false;
  const isLoggedIn = true;
  const isAdmin = false;
  // const arrayOfPosts = [<p>Post 1</p>, <p>Post2</p>, <p>Post3</p>];
  const arrayOfPosts2 = ['Post 11', 'Post22', 'Post33'];
  if (isLoggedIn) {
    return (
      <div>
        <p>Tou are logged INN {isAdmin ? 'as Admin' : <span> as User</span>}</p>

        <button onClick={() => sayHi('ala')}>Say Hi</button>
        {/* <div>{arrayOfPosts}</div> */}
        <div>
          {arrayOfPosts2.map(post => (
            <p key={post}>{post}</p>
          ))}
        </div>
      </div>
    );
  }
  return <p>Not Logged Inn </p>;
};
// {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       My local host works. My GitHyub deploy works also.
//     </div>
//   );
// };
