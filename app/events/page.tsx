import { events }   from '../../lib/events';

export default function Events() {
     function getCountdown(date: string) {
      const now = new Date();
      const eventDate = new Date(date);

      const diff = eventDate.getTime() - now.getTime();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));

      return `${days} days left`;
    }
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Events</h1>
      {events.length === 0 ? (
        <p className="text-white">No upcoming events</p>
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
    <div className="copyright text-center mt-10 text-gray-500">
        <p>&copy; {new Date().getFullYear()} St. George OCYM Kuzhimattom. All rights reserved.</p>
    </div>
    </main>
  );
}