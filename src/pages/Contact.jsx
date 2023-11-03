import NavBarDark from "/src/components/NavBarDark";

function Contact() {
  return (
    <>
      <NavBarDark />

      <main className="contact">
        <form action="" method="post">
          <input type="text" name="name" id="name" placeholder="Name" />
          <input type="email" name="email" id="email" placeholder="Email" />
          <input
            type="number"
            name="phone"
            id="phone"
            placeholder="Phone Number"
          />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="15"
            placeholder="Message"
          ></textarea>
          <div>
            <button type="button">Send Message</button>
          </div>
        </form>
      </main>
    </>
  );
}

export default Contact;
