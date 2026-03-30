import { members } from '../../lib/members';

export default function About() {
  return (
    <main className="p-4 sm:p-6 max-w-full sm:max-w-4xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Know Us</h1>

      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-xl flex flex-col items-center gap-4 text-center"
            >
              <div className="flex items-center gap-4">
                <img
                  src={member.image1}
                  alt={member.name}
                  className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full object-cover"
                />
                {member.image2 && (
                  <img
                    src={member.image2}
                    alt={member.name}
                    className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full object-cover"
                  />
                )}
              </div>

              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-black">{member.role}</h2>
                <p className="text-black">{member.name}</p>
                {member.ph && <p className="text-sm text-gray-600 mt-1">{member.ph}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="copyright text-center mt-10 text-gray-500">
        <p>&copy; {new Date().getFullYear()} St. George OCYM Kuzhimattom. All rights reserved.</p>
      </div>
    </main>
  );
}