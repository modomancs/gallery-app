export default function CommentForm({ onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onSubmit(data.comment);
    event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
        <input 
          type="text"
          name="comment"
          placeholder="Write a comment..."
          required
        />
        <button type="submit">Send a comment</button>
    </form>
  );
}