import React from "react";

export default function Card({items}) {
  return (
	  <>
		{items.map(item => (
			<div className="col" key={item.id}>
			  <div className="card position-relative">
				<div className="ratio ratio-1x1">
				  <img src={item.avatar.href} className="card-img-top fit-cover" alt={`${item.name}'s avatar`} />
				</div>
				<span className="position-absolute top-0 end-0 badge bg-violet mt-2 me-2 fs-6">{item.age} y.o</span>
				<div className="card-body p-0 accordion">
				  <h5 className="card-title accordion-header">
					<button className="accordion-button h5 collapsed p-2" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${item.id}`} aria-expanded="true" aria-controls={`collapse${item.id}`}>{item.name + " " + item.surname}</button>
				  </h5>
				</div>
				<ul className="list-group list-group-flush accordion-collapse collapse" id={`collapse${item.id}`}>
				  <li className="list-group-item"><span className="d-inline-block vibrate-1"><i className="bi bi-telephone-fill" style={{color: "#712cf9"}}></i>
					  <a href={`tel:${item.phone.replaceAll('-', '')}`} className="text-decoration-none link-success"> {item.phone}</a></span>
				  </li>
				  <li className="list-group-item">
					<i className="bi bi-geo-alt-fill" style={{color: "#712cf9"}}></i> {item.address}</li>
				</ul>
			  </div>
			</div>
		))
		}
	  </>
  );
}
