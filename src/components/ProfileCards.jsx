import React from "react";
import './ProfileCards.css';

export default function ProfileCards({profiles}) {
  return (
	  <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-4">
		{
		  profiles.map(profile => (
			  <div className="col" key={profile.id}>
				<div className="card position-relative">
				  <div className="ratio ratio-1x1">
					<img src={profile.avatar.href} className="card-img-top fit-cover" alt={`${profile.name}'s avatar`} />
				  </div>
				  <span className="position-absolute top-0 end-0 badge bg-violet mt-2 me-2 fs-6">{profile.age} y.o</span>
				  <div className="card-body p-0 accordion">
					<h5 className="card-title accordion-header" >
					  <button className="accordion-button h5 collapsed p-2" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${profile.id}`} aria-expanded="true" aria-controls={`collapse${profile.id}`}>{profile.name + " " + profile.surname}</button>
					</h5>
				  </div>
				  <ul className="list-group list-group-flush accordion-collapse collapse" id={`collapse${profile.id}`}>
					<li className="list-group-item"><span className="d-inline-block vibrate-1"><i className="bi bi-telephone-fill" style={{color: "#712cf9"}}></i>
					  <a href={`tel:${profile.phone.replaceAll('-', '')}`} className="text-decoration-none link-success"> {profile.phone}</a></span>
					</li>
					<li className="list-group-item">
					  <i className="bi bi-geo-alt-fill" style={{color: "#712cf9"}}></i> {profile.address}</li>
				  </ul>
				</div>
			  </div>
		  ))
		}
	  </div>
  );
}
