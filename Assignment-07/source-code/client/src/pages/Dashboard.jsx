import { useEffect, useState } from 'react';
import api from '../api/client.js';

export default function Dashboard() {
  const [summary, setSummary] = useState([]);
  const [courses, setCourses] = useState([]);
  const [selected, setSelected] = useState(null);
  const [items, setItems] = useState([]);
  const [newCourse, setNewCourse] = useState({ code: '', title: '', instructor: '' });
  const [err, setErr] = useState('');
  const [msg, setMsg] = useState('');

  const loadAll = async () => {
    const [s, c] = await Promise.all([api.get('/feedback/summary'), api.get('/courses')]);
    setSummary(s.data);
    setCourses(c.data);
  };

  useEffect(() => { loadAll(); }, []);

  const view = async (courseId) => {
    setSelected(courseId);
    const { data } = await api.get(`/feedback/course/${courseId}`);
    setItems(data);
  };

  const addCourse = async (e) => {
    e.preventDefault();
    setErr(''); setMsg('');
    try {
      await api.post('/courses', newCourse);
      setMsg(`Course ${newCourse.code} added.`);
      setNewCourse({ code: '', title: '', instructor: '' });
      loadAll();
    } catch (e) {
      setErr(e.response?.data?.error || 'Failed to add course');
    }
  };

  const summaryByCourse = Object.fromEntries(summary.map((s) => [s.courseId, s]));

  return (
    <>
      <div className="card">
        <h2>Add a Course</h2>
        <form onSubmit={addCourse}>
          <div className="grid-3">
            <label>Code
              <input required placeholder="CS101" value={newCourse.code} onChange={(e) => setNewCourse({ ...newCourse, code: e.target.value })} />
            </label>
            <label>Title
              <input required placeholder="Intro to CS" value={newCourse.title} onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })} />
            </label>
            <label>Instructor
              <input required placeholder="Dr. Lee" value={newCourse.instructor} onChange={(e) => setNewCourse({ ...newCourse, instructor: e.target.value })} />
            </label>
          </div>
          {err && <div className="error">{err}</div>}
          {msg && <div className="success-msg">{msg}</div>}
          <div style={{ marginTop: 18 }}><button type="submit">+ Add Course</button></div>
        </form>
      </div>

      <div className="card">
        <h2>Course Ratings</h2>
        {courses.length === 0 ? (
          <p className="empty">No courses yet — add one above to get started.</p>
        ) : (
          <div className="course-grid">
            {courses.map((c) => {
              const s = summaryByCourse[c._id];
              return (
                <div key={c._id} className="course-tile" onClick={() => view(c._id)}>
                  <div className="course-code">{c.code}</div>
                  <div className="course-title">{c.title}</div>
                  <div className="course-instr">{c.instructor}</div>
                  <div className="course-stats">
                    {s ? (
                      <>
                        <span className="big-rating">{s.avgRating.toFixed(1)}</span>
                        <span className="rating">{'★'.repeat(Math.round(s.avgRating))}</span>
                        <span className="count">{s.count} review{s.count !== 1 ? 's' : ''}</span>
                      </>
                    ) : (
                      <span className="count">No reviews yet</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {selected && (
        <div className="card">
          <h3>Feedback Details</h3>
          {items.length === 0 ? <p className="empty">No entries for this course.</p> : items.map((f) => (
            <div key={f._id} className="fb-entry">
              <div><strong>{f.student?.name}</strong> <span className="rating">{'★'.repeat(f.rating)}</span></div>
              {f.categories?.length > 0 && (
                <div className="fb-cats">{f.categories.map((c) => <span key={c}>{c}</span>)}</div>
              )}
              {f.comment && <p style={{ margin: '8px 0 4px' }}>{f.comment}</p>}
              <div className="fb-meta">{new Date(f.createdAt).toLocaleString()}</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
