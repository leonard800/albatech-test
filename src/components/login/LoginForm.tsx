import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!password.trim()) {
      setError("Password tidak boleh kosong.");
      return;
    }

    try {
      const res = await axios.post(
        "https://reqres.in/api/login",
        {
          email: "eve.holt@reqres.in",
          password: password,
        },
        {
          headers: {
            "x-api-key": "reqres-free-v1", 
          },
        }
      );

      console.log("Login berhasil, token:", res.data.token);
      navigate("/profile", { state: { token: res.data.token } });
    } catch (err: any) {
      console.error("Login gagal:", err.response?.data || err.message);
      setError("Login gagal. Pastikan password benar.");
    }
  };



  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <div>
        <label className="block">Email</label>
        <input
          type="text"
          value="eve.holt@reqres.in"
          disabled
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-full transition duration-300 !bg-yellow-400 !text-black"
        >
          Login
        </button>
      </div>
    </form>
  );
}
