import useLocalStorageState from "use-local-storage-state";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

export default function Comments({ slug }) {
  const storageKey = slug ? `comments-${slug}` : "comments";
  const [comments, setComments] = useLocalStorageState("comments", {
    defaultValue: [],
  });
  function addComment(addedComment) {
    setComments((comment) => [...comment, addedComment]);
  }
  return (
    <div>
      <CommentList comments={comments} />
      <CommentForm onSubmit={addComment} />
    </div>
  );
}
