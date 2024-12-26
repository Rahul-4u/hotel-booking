export default function FeatureCard({ room }) {
  const { name, photo, description, price, reviews, roomtyp } = room;

  const shortDescription =
    description?.length > 80
      ? description.substring(0, 85) + "..."
      : description;
  return (
    <div>
      <div className="card bg-base-100  shadow-xl">
        <figure>
          <img className=" h-96" src={photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{shortDescription}</p>
          <p className="font-semibold">Room Type: {roomtyp}</p>
          <p className="font-semibold">Price : $ {price}</p>
          <p className="font-semibold">Reviews: 0 </p>
        </div>
      </div>
    </div>
  );
}
