import { Navbar,Hero,Billing,Business,Button,CardDeal,Client,CTA,FeedbackCard,Footer,GetStarted,Stats,Testimonials } from "./components";


const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className="bg-primary flex justify-center items-center">
      <div className="xl:max-w-[1280px] w-full">
        <Navbar />
      </div>
    </div>

    <div className="bg-primary flex justify-center items-start">
      <div className="xl:max-w-[1280px] w-full">
        <Hero />
      </div>
    </div>

    <div className="bg-primary flex justify-center items-start">
      <div className="xl:max-w-[1280px] w-full">
        <Stats />
        <Business />
        <Button />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Client />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;