import { members } from '../../lib/members';

export default function Contact() {
  const secretary = members.find((m) => /secretary/i.test(m.role)) ?? members[1];

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <div className="mt-10 bg-gray-100 p-4 rounded-xl">
        <h2 className="text-xl font-semibold mb-2 text-black">Secretary</h2>
        <p className="text-black">{secretary?.name ?? 'Secretary not found'}</p>
        <p className="text-black">ph: {secretary?.ph ?? 'N/A'}</p>
      </div>
    <div className="copyright text-center mt-10 text-gray-500">
        <p>&copy; {new Date().getFullYear()} St. George OCYM Kuzhimattom. All rights reserved.</p>
    </div>
    </main>
  );
}