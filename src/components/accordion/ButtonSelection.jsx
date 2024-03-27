export default function ButtonSelection({
  setEnableMultiSelection,
  enableMultiSelection,
}) {
  return (
    <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
      {enableMultiSelection
        ? 'Disable Multi Selection'
        : 'Enable Multi Selection'}
    </button>
  );
}
