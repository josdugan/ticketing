import { useState } from 'react';
import { useRouter } from 'next/router';
import useRequest from '../hooks/use-request';

const Authenticate = ({ displayText, endpoint }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { doRequest, errors } = useRequest({
    url: `/api/users/${endpoint}`,
    method: 'post',
    body: {
      email,
      password,
    },
    onSuccess: () => router.push('/'),
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    doRequest();
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <h1>{displayText}</h1>
        <div className="form-group">
          <label htmlFor="email-address">Email Address</label>
          <input
            id="email-address"
            type="text"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name=""
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {errors}
        <button className="btn btn-primary">{displayText}</button>
      </form>
    </div>
  );
};

export default Authenticate;
