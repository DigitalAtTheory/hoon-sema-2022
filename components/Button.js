export default function Button({ children, handleClick }) {
  return (
    <div>
      <button onClick={handleClick}>{children}</button>
    </div>
  );
}
