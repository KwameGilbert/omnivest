const Map = () => (
    <section className="w-full py-16 bg-[#f7fafd] flex justify-center items-center">
        <div className="w-full max-w-5xl h-[500px] bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden flex items-center justify-center">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.6295647127363!2d-0.14595879999999997!3d5.621583799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b61e1c0d297%3A0x26277dd25f5181ea!2sOmnivest%20Educational%20Consult!5e0!3m2!1sen!2sgh!4v1758130058741!5m2!1sen!2sgh"
                className="w-full h-full min-h-[430px]"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Omnivest Educational Consult Location"
            ></iframe>
        </div>
    </section>
);

export default Map;