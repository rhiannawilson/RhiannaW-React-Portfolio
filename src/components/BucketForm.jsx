import { useState } from 'react';

function BucketForm(props) {
  const [input, setInput] = useState('');
  const [eagerness, setEagerness] = useState('');

  const eagernessLevel = ['high', 'medium', 'low'];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Set default eagerness if none selected
    const finalEagerness = eagerness || 'low';

    props.onSubmit({
      id: Math.floor(Math.random() * 1000), // Generate a random ID
      text: input,
      eagerness: finalEagerness,
    });

    setInput('');
    setEagerness('');
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleEagernessChange = (level) => {
    setEagerness(level);
  };

  return !props.edit ? (
    <div>
      <form className="bucket-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add to your bucket list"
          value={input}
          name="text"
          className="bucket-input"
          onChange={handleChange}
        />
        <div className="dropdown">
          <button className={`dropbtn ${eagerness}`}>
            {eagerness || 'Priority'}
          </button>
          <div className="dropdown-content">
            {eagernessLevel.map((level) => (
              <p key={level} onClick={() => handleEagernessChange(level)}>
                {level.charAt(0).toUpperCase() + level.slice(1)} {/* Capitalize first letter */}
              </p>
            ))}
          </div>
        </div>
        <button className="bucket-button">Add bucket list item</button>
      </form>
    </div>
  ) : (
    <div>
      <h3>Update entry: {props.edit.value}</h3>
      <form className="bucket-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={props.edit.value}
          value={input}
          name="text"
          className="bucket-input"
          onChange={handleChange}
        />
        <div className="dropdown">
          <button className={`dropbtn ${eagerness}`}>
            {eagerness || 'Priority'}
          </button>
          <div className="dropdown-content">
            {eagernessLevel.map((level) => (
              <p key={level} onClick={() => handleEagernessChange(level)}>
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </p>
            ))}
          </div>
        </div>
        <button className="bucket-button">Update</button>
      </form>
    </div>
  );
}

export default BucketForm;

