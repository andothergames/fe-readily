import pika from "../assets/errorPika.png";
import { Header } from "./Header";
import { Nav } from "./Nav";
export const ErrorPage = () => {
  return (
    <section>
      <p>Oh no, you have got lost</p>
      <img src={pika} />
      <p>Click the Readily logo to go back home x</p>
    </section>
  );
};
