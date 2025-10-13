import '../styles/pages.css';

// AnimatedName.jsx

export default function AnimatedName() {
  const letters = [
    { char: 'R', className: 'r' },
    { char: 'H', className: 'h' },
    { char: 'I', className: 'i' },
    { char: 'A', className: 'a1' },
    { char: 'N', className: 'n1' },
    { char: 'N', className: 'n2' },
    { char: 'A', className: 'a2' }
  ];

  return (
    <main className="animated-main">
      <div className="letter-line">
        {letters.map(({ char, className }, index) => (
          <h1 key={index} className={`letterHeading ${className}`}>
            {char}
          </h1>
        ))}
      </div>
      <div className="scanner-bar" />
    </main>
  );
}
