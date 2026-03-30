import { members } from '../../lib/members';

export default function About() {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Know Us</h1>

      <div className="space-y-6">
        <div className="space-y-6">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-xl flex items-center gap-4"
            >
              <img
                src={member.image1}
                alt={member.name}
                className="w-50 h-50 rounded-full object-cover"
              />
              {member.image2 && (
                  <img
                    src={member.image2}
                    alt={member.name}
                    className="w-50 h-50 rounded-full object-cover"
                  />
              )}

              <div>
                <h2 className="text-xl font-semibold text-black">{member.role}</h2>
                <p className="text-black">{member.name}</p>
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