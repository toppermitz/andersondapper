export default function SplitText({ text }: { text: string }) {
  const words = text.split(' ')

  return words.map((word, index) => (
    <span key={`${index}-${word}`}>
      <span data-word className="split-word">
        {word}
      </span>
      {index < words.length - 1 ? ' ' : null}
    </span>
  ))
}
