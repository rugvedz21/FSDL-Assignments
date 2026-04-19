import { useEffect, useState } from 'react';
import api from '../api/client.js';

const CATEGORY_OPTIONS = ['teaching', 'content', 'pace', 'materials'];

export default function Submit() {
  const [courses, setCourses] = useState([]);
  const [form, setForm] = useState({ courseId: '', rating: 5, comment: '', categories: [] });
  const [msg, setMsg] = useState('');
  const [err, setErr] = useState('');

  useEffect(() => {
    api.get('/courses').then((r) => setCourses(r.data));
  }, []);

  const toggleCategory = (c) => {
    setForm((f) => ({
      ...f,
      categories: f.categories.includes(c) ? f.categories.filter((x) => x !== c) : [...f.categories, c],
    }));
  };

  const submit = async (e) => {
    e.preventDefault();
    setErr(''); setMsg('');
    try {
      await api.post('/feedback', form);
      setMsg('Feedback submitted. Thanks!');
      setForm({ courseId: '', rating: 5, comment: '', categories: [] });
    } catch (e) {
      setErr(e.response?.data?.error || 'Submission failed');
    }
  };

  return (
    <div className="card">
      <h2>Submit Feedback</h2>
      <form onSubmit={submit}>
        <label>Course
          <select required value={form.courseId} onChange={(e) => setForm({ ...form, courseId: e.target.value })}>
            <option value="">-- Select --</option>
            {courses.map((c) => <option key={c._id} value={c._id}>{c.code} — {c.title}</option>)}
          </select>
        </label>
        <label>Rating: <span className="rating">{'★'.repeat(form.rating)}{'☆'.repeat(5 - form.rating)}</span>
          <input type="range" min="1" max="5" value={form.rating} onChange={(e) => setForm({ ...form, rating: +e.target.value })} />
        </label>
        <label>Categories
          <div className="row" style={{ flexWrap: 'wrap' }}>
            {CATEGORY_OPTIONS.map((c) => (
              <label key={c} style={{ marginTop: 0, fontWeight: 400 }}>
                <input type="checkbox" style={{ width: 'auto' }} checked={form.categories.includes(c)} onChange={() => toggleCategory(c)} /> {c}
              </label>
            ))}
          </div>
        </label>
        <label>Comment
          <textarea rows="4" value={form.comment} onChange={(e) => setForm({ ...form, comment: e.target.value })} />
        </label>
        {err && <div className="error">{err}</div>}
        {msg && <div style={{ color: 'green', marginTop: 8 }}>{msg}</div>}
        <div style={{ marginTop: 16 }}><button type="submit">Submit</button></div>
      </form>
    </div>
  );
}
