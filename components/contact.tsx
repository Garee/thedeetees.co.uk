import { social } from "../lib/config";

export default function Contact() {
  return (
    <>
      <h2>Contact</h2>
      <p>
        For any enquiries please send us an{" "}
        <a href={`mailto:${social.email}`}>email</a> or get in touch via social
        media.
      </p>
    </>
  );
}
