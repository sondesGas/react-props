import Profile from "./profile/Profile";
import image from "./profile/img.jpg";

function App() {
  const handleClick = (name) => alert(name);
  return (
    <div className="App">
      <Profile props={Profile} handleClick={handleClick}>
        <img src={image} alt="..." />
      </Profile>
    </div>
  );
}

export default App;
