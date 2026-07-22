import { Link } from 'react-router-dom';

const pressReleases = [
  { day: '15', month: 'Jul 2026', tag: 'Press Release', title: 'Avam Foundation Launches "Shiksha Na Ruke" in 5 New States', desc: 'The initiative aims to support 10,000 out-of-school children.' },
  { day: '28', month: 'Jun 2026', tag: 'Event', title: 'Annual Health Camp Benefits 5,000+ People in Rural UP', desc: 'Free health check-ups and specialist consultations provided.' },
  { day: '10', month: 'Jun 2026', tag: 'Milestone', title: 'Avam Foundation Completes 10 Years of Service', desc: 'A decade of transforming lives across India.' },
];

const news = [
  { source: 'The Times of India', title: '"Avam Foundation\'s Education Drive Reaches 50,000 Children"', date: 'March 15, 2026' },
  { source: 'NDTV', title: '"How This NGO is Changing Lives in Rural India"', date: 'February 22, 2026' },
  { source: 'Hindustan Times', title: '"Health Camps Save Hundreds of Lives"', date: 'January 10, 2026' },
  { source: 'India Today', title: '"Women Empowerment: The Avam Foundation Story"', date: 'December 5, 2025' },
];

const events = [
  { month: 'AUG', day: '15', title: 'Independence Day Health Drive', loc: 'New Delhi', time: '9:00 AM' },
  { month: 'SEP', day: '05', title: "Teacher's Day Education Summit", loc: 'Mumbai', time: '10:00 AM' },
  { month: 'OCT', day: '11', title: 'International Day of Girl Child', loc: 'Jaipur', time: '11:00 AM' },
];

export default function Media() {
  return (
    <>
      <section className="page-hero"><div className="container"><h1>Media Centre</h1><p>Latest news, press releases, and media coverage.</p></div></section>

      <section className="about-content">
        <div className="container">
          <div className="section-header"><h2>Press Releases</h2></div>
          <div className="media-grid">
            {pressReleases.map((p,i) => (
              <div key={i} className="media-card">
                <div className="media-date"><span className="day">{p.day}</span><span className="month">{p.month}</span></div>
                <div className="media-content"><span className="program-tag">{p.tag}</span><h3>{p.title}</h3><p>{p.desc}</p><a href="#" className="btn btn-small">Read More</a></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <div className="section-header"><h2>In The News</h2></div>
          <div className="news-grid">
            {news.map((n,i) => (
              <div key={i} className="news-card"><div className="news-source"><i className="fas fa-newspaper"></i> {n.source}</div><h4>{n.title}</h4><p className="news-date">{n.date}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="programs">
        <div className="container">
          <div className="section-header"><h2>Workshops & Events</h2></div>
          <div className="events-grid">
            {events.map((e,i) => (
              <div key={i} className="event-card">
                <div className="event-date-badge"><span className="month">{e.month}</span><span className="day">{e.day}</span></div>
                <div className="event-content"><h4>{e.title}</h4><p><i className="fas fa-map-marker-alt"></i> {e.loc} | <i className="fas fa-clock"></i> {e.time}</p><a href="#" className="btn btn-small">Register</a></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
