export default function CommentForm({ onSubmit, slug }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const commentSection = {
      id: crypto.randomUUID(),
      text: data.comment,
      date: new Date().toLocaleString(),
      slug,
    };

    onSubmit(commentSection);
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
