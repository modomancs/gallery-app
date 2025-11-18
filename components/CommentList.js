export default function CommentList({ comments = [] }) {
  return (
    <div>
      <h3>Comments</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.text + comment.date}>
            <p>{comment.text}</p>
            <small>{comment.date}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}