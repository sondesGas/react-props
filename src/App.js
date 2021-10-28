import Profile from "./profile/Profile";
import image from "./profile/img.jpg";

function App() {
  const showAlert = (name) => alert(user.fullNAME);
  const user = {
    fullNAME: "GASMI SONDES ",
    bio: "Full-stack Web Developer",
    profession: `I design and code beautifully simple things,and I love what I do.In
    addition to my engineering training in communications and networks, I
    wanted to enhance my skills and knowledge by full-stack formation
    within Go my code.`,
  };
  return (
    <div className="App">
      <Profile user={user} showAlert={showAlert}>
        <img src={image} alt="myPhoto" />
      </Profile>
    </div>
  );
}

export default App;
