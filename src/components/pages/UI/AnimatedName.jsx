import '../styles/pages.css';

const letters = [
  { char: 'R', className: 'r' },
  { char: 'H', className: 'h' },
  { char: 'I', className: 'i' },
  { char: 'A', className: 'a1' },
  { char: 'N', className: 'n1' },
  { char: 'N', className: 'n2' },
  { char: 'A', className: 'a2' },
];

export default function AnimatedName() {
  return (
    <main className="animated-main">
    {letters.map(({ char, className }, index) => (
  <h1
    key={index}
    className={`letter ${className}`}
    style={{ animationDelay: `${index * 0.2}s` }}
  >
    {char}
  </h1>
))}

      <div className="marker" />
    </main>
  );
}
