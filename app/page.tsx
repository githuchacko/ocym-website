import { events } from '../lib/events';  
import { updates } from '../lib/updates';
export default function Home() {
    function getCountdown(date: string) {
      const now = new Date();
      const eventDate = new Date(date);

      const diff = eventDate.getTime() - now.getTime();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));

      return `${days} days left`;
    }

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-4">
      <h1 className="text-4xl font-bold text-center mb-4">
        St.George OCYM Kuzhimattom
        <div className="flex items-center gap-2">
          <img src="images/icons8-facebook-24.png" alt="Facebook Icon" className="w-6 h-6" />
          <a href="https://facebook.com/ocym.kuzhimattom" className="text-sm">Facebook</a>
        </div>
        <div className="flex items-center gap-2">
          <img src="images/icons8-youtube-24.png" alt="YouTube Icon" className="w-6 h-6" />
          <a href="http://youtube.com/@ocymkuzhimattompally" className="text-sm">YouTube</a>
        </div>
        <div className="flex items-center gap-2">
          <img src="images/icons8-instagram-50.png" alt="Instagram Icon" className="w-6 h-6" />
          <a href="https://www.instagram.com/ocym.kuzhimattompally" className="text-sm">Instagram</a>
        </div>
        </h1>
      <img
        src="/images/logo.jpg"
        alt="OCYM Logo"
        className="w-32 sm:w-48 md:w-60 aspect-square rounded-full object-cover mx-auto"
      />
      </div>
      <p className="text-lg text-center mb-10 text-gray-600">
        Orthodox Christian Youth Movement 
      </p>

      <div className="bg-gray-100 p-6 rounded-2xl mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-black">
          Upcoming Events
        </h2>

      {events.length === 0 ? (
        <p className="text-black">No upcoming events</p>
      ) : (
      <div className="space-y-4">
              {events.map((event) => (
                <div key={event.id} className="bg-white p-4 rounded-xl shadow text-black">
                  <h3 className="text-lg font-semibold text-black">{event.title}</h3>
                  <p className="text-gray-600 text-black">{event.date}</p>
                  <p className="text-sm text-blue-600 text-black">
                    {getCountdown(event.date)}
                  </p>
                </div>
              ))}
            </div>
          )}
      </div>

      <div className="bg-gray-100 p-6 rounded-2xl">
        <h2 className="text-2xl font-semibold mb-2 text-black">
          Latest Updates
        </h2>
   {updates.length === 0 ? (
        <p className="text-black">No updates available</p>
      ) : (
      <div className="space-y-4">
              {updates.map((update) => (
                <div key={update.id} className="bg-white p-4 rounded-xl shadow text-black">
                  <h3 className="text-lg font-semibold text-black">{update.title}</h3>
                  <p className="text-gray-600 text-black">{update.description}</p>
                </div>
              ))}
            </div>
          )}
      </div>
      <div className="copyright text-center mt-10 text-gray-500">
        <p>&copy; {new Date().getFullYear()} St. George OCYM Kuzhimattom. All rights reserved.</p>
      </div>
    </main>
  );
}