import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Profile() {
  const location = useLocation();
  const navigate = useNavigate();
  const token = location.state?.token;

  useEffect(() => {
    if (!token) navigate('/login');
  }, [token, navigate]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Profile</h1>
      <p className="mt-2">Token: <code>{token}</code></p>
    </div>
  );
}
