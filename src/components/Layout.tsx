import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-white shadow p-4 flex justify-between">
        <div className="text-yellow-500 font-bold text-lg">alba</div>
        <div className="space-x-4">
          <Link to="/" className="text-blue-600">Home</Link>
          <Link to="/login" className="bg-yellow-400 px-3 py-1 rounded text-white hover:bg-yellow-500">Login</Link>
        </div>
      </nav>
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
}
