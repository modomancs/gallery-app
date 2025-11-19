export default function ColorPalette({ colors }) {
  return (
    <div>
      <h4>Colors used</h4>
      <ul>
        {colors.map((color) => (
          <li key={color}>{color}</li>
        ))}
      </ul>
    </div>
  );
}
