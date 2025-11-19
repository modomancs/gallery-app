import styled from "styled-components";
const DivWrap = styled.div`
  display: flex;
  gap: 10px;
`;
const CircleWithColor = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
export default function ColorPalette({ colors }) {
  return (
    <div>
      <h4>Colors used</h4>
      <DivWrap>
        {colors.map((color) => (
          <CircleWithColor key={color} color={color} />
        ))}
      </DivWrap>
    </div>
  );
}
