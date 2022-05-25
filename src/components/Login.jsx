import React, {useState} from "react";
import data from "../mockdata/users.json";


export default function Login({setLoggedIn}) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function onNameChange(evt) {
	setName(evt.target.value);
  }

  function onPasswordChange(evt) {
	setPassword(evt.target.value);
  }

  function onAuthSubmit(evt) {
	evt.preventDefault();
	const user = data.users.find(user => user.username === name && user.password === password);
	if (user) {
	  setLoggedIn(true);
	} else {
	  setError("Invalid username or password");
	}
  }

  return (
	  <form className="border w-50 rounded-3 p-3 mx-auto mt-3" onSubmit={onAuthSubmit}>
		{error && <div className="alert alert-danger">{error}</div>}
		<div className="mb-3">
		  <label htmlFor="exampleInputEmail1" className="form-label">Login</label>
		  <input type="text" value={name} onChange={onNameChange} className="form-control" />
		</div>
		<div className="mb-3">
		  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
		  <input type="password" value={password} onChange={onPasswordChange} className="form-control" />
		</div>
		<div className="text-center">
		  <button type="submit" className="btn btn-primary">Sign In</button>
		</div>
	  </form>
  );
}
