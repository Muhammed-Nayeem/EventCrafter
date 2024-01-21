import Heading from "../Heading/Heading";

const Contact = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols md:grid-cols-3 gap-8 md:items-center">
          <Heading text="Get In Touch">Write us through your email!</Heading>
          <div className="md:col-span-2" data-aos="fade-left">
            <form>
              <input
                className="w-full border mb-4 rounded-md px-4 py-2 outline-none"
                type="text"
                name="name"
                id="name"
                placeholder="Your Full-Name"
                required
              />
              <input
                className="w-full border mb-4 rounded-md px-4 py-2 outline-none"
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                required
              />
              <input
                className="w-full border mb-4 rounded-md px-4 py-2 outline-none"
                type="text"
                name="mail-subject"
                id="mail-subject"
                placeholder="Subject"
                required
              />
              <textarea
                className="w-full border rounded-md mb-4 px-4 py-2 outline-none"
                type="text"
                name="message"
                id="message"
                placeholder="Write your message"
                rows="5"
                required
              />
              <input
                className="w-full outline-none btn btn-sm bg-blue-600 text-white transition-colors hover:bg-blue-500"
                type="submit"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
