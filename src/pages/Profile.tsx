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
    <div className="flex justify-center items-center min-h-screen bg-gray-200 p-4">
      <div className="card bg-white w-96 overflow-hidden rounded-lg shadow-lg flex flex-col">
        <div className="card-image">
          <img 
            src="https://i.pinimg.com/1200x/8c/90/d9/8c90d9c67afd8c9bbf92cbe73fbe4102.jpg"
            alt="Background" 
            className="w-full h-48 object-cover rounded-t-lg" 
          />
        </div>
        <div className="profile-image">
          <img 
            src="https://st.depositphotos.com/1779253/5140/v/950/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg" 
            alt="Profile"
            className="z-10 w-24 h-24 relative mx-auto -mt-16 block rounded-full border-4 border-white transition-transform duration-400 transform hover:scale-110" 
          />
        </div>
        <div className="card-content text-center py-4">
          <h3 className="text-xl font-semibold">Hello, <code>{token}</code></h3>
          <p className="text-sm text-justify px-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        
      </div>
    </div>
  );
}
