import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const CommentsList = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const CommentItem = styled.li`
  list-style: none;
  border: 2px solid #ccc;
  border-radius: 8px;
  padding: 12px 16px;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CommentText = styled.p`
  margin: 0;
  font-size: 1rem;
`;

const CommentDate = styled.small`
  margin-left: 20px;
  color: #666;
  white-space: nowrap;
`;

export default function CommentList({ comments = [] }) {
  return (
    <Wrapper>
      <h3>Comments</h3>
      <CommentsList>
        {comments.map((comment) => (
          <CommentItem key={comment.text + comment.date}>
            <CommentText>{comment.text}</CommentText>
            <CommentDate>{comment.date}</CommentDate>
          </CommentItem>
        ))}
      </CommentsList>
    </Wrapper>
  );
}
