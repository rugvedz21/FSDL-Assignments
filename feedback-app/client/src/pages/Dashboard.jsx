import { useEffect, useState } from 'react';
import api from '../api/client.js';

export default function Dashboard() {
  const [summary, setSummary] = useState([]);
  const [selected, setSelected] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    api.get('/feedback/summary').then((r) => setSummary(r.data));
  }, []);

  const view = async (courseId) => {
    setSelected(courseId);
    const { data } = await api.get(`/feedback/course/${courseId}`);
    setItems(data);
  };

  return (
    <>
      <div className="card">
        <h2>Course Ratings</h2>
        {summary.length === 0 ? <p>No feedback yet.</p> : (
          <table>
            <thead><tr><th>Code</th><th>Title</th><th>Avg</th><th>Count</th><th></th></tr></thead>
            <tbody>
              {summary.map((s) => (
                <tr key={s.courseId}>
                  <td>{s.code}</td>
                  <td>{s.title}</td>
                  <td>{s.avgRating.toFixed(2)} ★</td>
                  <td>{s.count}</td>
                  <td><button onClick={() => view(s.courseId)}>View</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {selected && (
        <div className="card">
          <h3>Feedback Details</h3>
          {items.length === 0 ? <p>No entries.</p> : items.map((f) => (
            <div key={f._id} style={{ borderBottom: '1px solid #e2e8f0', padding: '8px 0' }}>
              <div><strong>{f.student?.name}</strong> — {'★'.repeat(f.rating)}</div>
              {f.categories?.length > 0 && <div style={{ fontSize: '0.85rem', color: '#64748b' }}>{f.categories.join(', ')}</div>}
              {f.comment && <p style={{ margin: '4px 0' }}>{f.comment}</p>}
              <small>{new Date(f.createdAt).toLocaleString()}</small>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
