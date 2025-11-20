import styled from "styled-components";
const DivWrap = styled.div`
  display: flex;
  gap: 15px;
`;
const CircleWithColor = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ColorText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function ColorPalette({ colors }) {
  return (
    <div>
      <h4>Colors used:</h4>
      <DivWrap>
        {colors.map((color) => (
          <ColorText key={color}>
            <CircleWithColor color={color} />
            <p>{color}</p>
          </ColorText>
        ))}
      </DivWrap>
    </div>
  );
}
