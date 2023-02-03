/* eslint-disable tailwindcss/classnames-order */
import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

const Page = () => (
  <div className="overflow-hidden bg-primary-black">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="z-0 gradient-3" />
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="z-0 gradient-4" />
      <WhatsNew />
    </div>
    <World />
    <div className="relative">
      <Insights />
      <div className="z-0 gradient-4" />
      <Feedback />
    </div>
    <Footer />
  </div>
);

export default Page;
