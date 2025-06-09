import React from 'react';

// @ts-ignore
const Activity = React.unstable_Activity;

export default function Home() {
  const [auth, setAuth] = React.useState('admin');

  return (
    <>
      <div>
        <button onClick={() => setAuth('admin')}>Set Admin</button>
        <button onClick={() => setAuth('user')}>Set User</button>
      </div>
      <>
        <Activity mode={auth === 'admin' ? 'visible' : 'hidden'}>
          Admin Name: <input />
        </Activity>
        <Activity mode={auth === 'user' ? 'visible' : 'hidden'}>
          User Name: <input />
        </Activity>
      </>
    </>
  )
}