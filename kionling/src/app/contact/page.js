export default function ContactPage() {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold">Get in Touch</h1>
        <form className="mt-4 space-y-4">
          <div>
            <label className="block text-sm font-medium">Your Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Your Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Your Message</label>
            <textarea
              className="w-full p-2 border rounded"
              placeholder="Write your message here..."
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
  