const blogs = [
  { icon: 'fa-pen-nib', cat: 'Education', date: 'July 10, 2026', author: 'Dr. Arjun Mehta', title: 'The Power of Education: Transforming Rural India', desc: 'How access to quality education is changing the destiny of thousands...' },
  { icon: 'fa-heartbeat', cat: 'Healthcare', date: 'June 25, 2026', author: 'Sunita Reddy', title: 'Bridging the Healthcare Gap in Urban Slums', desc: 'Our mobile health clinics are bringing medical care to the doorstep...' },
  { icon: 'fa-venus', cat: 'Women Empowerment', date: 'June 12, 2026', author: 'Meera Singh', title: 'From Dependence to Independence: Women Who Lead', desc: 'Stories of women who transformed their lives through vocational training...' },
];

const reports = [
  { icon: 'fa-file-pdf', title: 'Annual Report 2025-26', desc: 'Comprehensive overview of our programs and impact.' },
  { icon: 'fa-file-alt', title: 'Newsletter - July 2026', desc: 'Latest updates on campaigns and community stories.' },
  { icon: 'fa-file-invoice', title: 'Annual Report 2024-25', desc: 'Previous year\'s achievements and milestones.' },
  { icon: 'fa-newspaper', title: 'Newsletter - April 2026', desc: 'Spring edition featuring health camps and education drives.' },
];

const stories = [
  { name: 'Ramesh, 14', loc: 'Rajasthan', text: '"I never thought I could go to school. Avam Foundation gave me books, a uniform, and a teacher who believed in me."' },
  { name: 'Sunita Devi, 32', loc: 'Uttar Pradesh', text: '"After the livelihood training, I started my own tailoring business. Now I earn enough to send all three children to school."' },
  { name: 'Kamla Bai, 55', loc: 'Madhya Pradesh', text: '"The free health camp detected my diabetes early. Without Avam Foundation, I would have never known."' },
];

export default function Resources() {
  return (
    <>
      <section className="page-hero"><div className="container"><h1>Resource Center</h1><p>Access our reports, newsletters, blog posts, and stories of change.</p></div></section>

      <section className="about-content">
        <div className="container">
          <div className="section-header"><h2>The Avam Blog</h2><p>Insights, updates, and stories from the field.</p></div>
          <div className="blog-grid">
            {blogs.map((b,i) => (
              <div key={i} className="blog-card">
                <div className="blog-image"><div className="program-placeholder"><i className={`fas ${b.icon}`}></i></div><span className="blog-category">{b.cat}</span></div>
                <div className="blog-content">
                  <div className="blog-meta"><span><i className="fas fa-calendar"></i> {b.date}</span><span><i className="fas fa-user"></i> {b.author}</span></div>
                  <h3>{b.title}</h3><p>{b.desc}</p><a href="#" className="btn btn-small">Read More</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="programs">
        <div className="container">
          <div className="section-header"><h2>Reports & Newsletters</h2></div>
          <div className="reports-grid">
            {reports.map((r,i) => (
              <div key={i} className="report-card"><div className="report-icon"><i className={`fas ${r.icon}`}></i></div><h4>{r.title}</h4><p>{r.desc}</p><a href="#" className="btn btn-small"><i className="fas fa-download"></i> Download</a></div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <div className="section-header"><h2>Stories of Change</h2></div>
          <div className="stories-grid">
            {stories.map((s,i) => (
              <div key={i} className="story-card"><div className="story-avatar"><i className="fas fa-user"></i></div><h4>{s.name}</h4><p className="story-location"><i className="fas fa-map-marker-alt"></i> {s.loc}</p><p className="story-text">{s.text}</p></div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
