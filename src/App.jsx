import Login from "./components/Login";
import {useState} from "react";
import ParentComponent from "./components/ParentComponent";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
	  <>
		{loggedIn ?
			(
				<>
				  <Login setLoggedIn={setLoggedIn} />
				  <ParentComponent />
				</>
			) :
			<Login setLoggedIn={setLoggedIn} />
		}
	  </>
  );
}

export default App;
