import './ProfileCards.css';
import Card from "./Card";

export default function ProfileCards({profiles}) {
  return (
	  <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-4">
		<Card items={profiles} />
	  </div>
  );
}
