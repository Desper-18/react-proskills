import React from "react";
import ProfileCards from "./ProfileCards";

export default function ParentComponent() {
  const users = [
	{
	  id: 1,
	  name: "David",
	  surname: "Robinson",
	  age: 30,
	  phone: "+1-541-754-3010",
	  address: "Carrer del Clot, 33, 08002 Barcelona",
	  avatar: {
		href: "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
	  }
	},
	{
	  id: 2,
	  name: "Jeff",
	  surname: "Zhang",
	  age: 21,
	  phone: "+86-7-5678-1230",
	  address: "Ximen, No.2, Ximen District, Xi'an, Shaanxi, China",
	  avatar: {
		href: "https://images.pexels.com/photos/5984432/pexels-photo-5984432.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
	  }
	},
	{
	  id: 3,
	  name: "Sibel",
	  surname: "Eroglu",
	  age: 26,
	  phone: "+93-7-5678-1230",
	  address: "Aksaray, No.2, Aksaray District, Aksaray, Aksaray, Turkey",
	  avatar: {
		href: "https://images.unsplash.com/photo-1570752321219-41822a21a761?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=593",
	  }
	},
	{
	  id: 4,
	  name: "Eva",
	  surname: "Thompson",
	  age: 22,
	  phone: "+221-7-5678-1230",
	  address: "Alger, No.33, Alger District, Alger, Algerie, Algeria",
	  avatar: {
		href: "https://images.pexels.com/photos/12105035/pexels-photo-12105035.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
	  }
	},
  ];

  return (
	  <div className="container">
		<p className="display-2 text-center mb-5">User Profiles</p>
		<ProfileCards profiles={users} />
	  </div>
  );
}
