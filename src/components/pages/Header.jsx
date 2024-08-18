// Here we are importing a CSS file as a dependency
import 'react';
import './styles/pages.css';


// Header section - Location under the nav bar
// content Rhianna Wilson
function Header() {
  const text = 'Rhianna Wilson'
  return (
<div>
<header>
    <h1>{text}</h1>
</header>
</div>
  );
}
     

export default Header;
