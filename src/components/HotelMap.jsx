export default function HotelMap() {
  return (
    <div className="map-secation bg-gray-100 py-8">
      <h2 className="text-center text-4xl font-bold mb-8">
        Our Hotel Location
      </h2>
      <div className="flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.6596247754136!2d91.9795!3d21.4507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c13a32b34a5b%3A0xf8b0a0b68c0f344a!2sCox's%20Bazar!5e0!3m2!1sen!2sbd!4v1672031732928!5m2!1sen!2sbd"
          width="100%"
          height="400"
          style={{ border: "0", borderRadius: "8px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
