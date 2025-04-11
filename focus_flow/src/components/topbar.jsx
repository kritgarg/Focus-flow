export default function Topbar() {
    return (
      <div className="w-full flex justify-between items-center px-6 py-4 bg-white shadow">
        <h2 className="text-xl font-semibold">Dashboard</h2>
        <div className="flex gap-4 items-center">
          <span className="text-gray-500">{new Date().toDateString()}</span>
          <button className="bg-teal-500 text-white px-4 py-1 rounded">Profile</button>
        </div>
      </div>
    );
  }
  