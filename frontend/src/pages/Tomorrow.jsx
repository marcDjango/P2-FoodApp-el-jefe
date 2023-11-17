import "./Tomorrow.scss";
import Pic1 from "../assets/pics/pic-tomorrow-1.jpeg";
import Pic2 from "../assets/pics/pic-tomorrow-2.jpeg";
import Pic3 from "../assets/pics/pic-tomorrow-3.jpeg";
import Pic4 from "../assets/pics/pic-tomorrow-4.jpeg";

function Tomorrow() {
  return (
    <div className="main-container-tomorrow">
      <div className="introduction">
        <h1>Let's think about tomorrow</h1>
        <p>
          In a constantly evolving world, it is essential that we reflect on our
          eating habits and the impact of our dietary choices on the future of
          our planet. Environmental issues are becoming increasingly urgent, and
          our diet plays a key role in preserving the Earth. In this article, we
          will explore the concept of 'Thinking About Tomorrow' in the context
          of sustainable cooking. We will share delicious and environmentally
          friendly recipes to inspire you to make more responsible food choices.
        </p>
      </div>

      <div className="text-container">
        <div id="pic">
          <img src={Pic1} alt="vegetables" />
        </div>
        <div className="paragraph">
          <h2>Eating Local and Seasonal</h2>
          <p>
            One of the first steps to thinking about tomorrow in your kitchen is
            to favor local and seasonal products. By opting for foods that are
            grown near you and are harvested at the right time, you reduce the
            carbon footprint associated with the transport of foodstuffs over
            long distances. Seasonal vegetables are not only fresher and tasty,
            but they also help support local farmers.
          </p>
        </div>
      </div>

      <div className="text-container">
        <div className="paragraph">
          <h2>Reduce Food Waste</h2>
          <p>
            Food waste is a significant issue in today's world. By minimizing
            waste in your kitchen, you play a part in conserving natural
            resources. A simple tip is to plan your meals, store leftovers, and
            get creative with the ingredients you have on hand.
          </p>
        </div>
        <div id="pic">
          <img src={Pic2} alt="vegetables grilled" />
        </div>
      </div>

      <div className="text-container">
        <div id="pic">
          <img src={Pic3} alt="salade poke" />
        </div>
        <div className="paragraph">
          <h2>Opting for a Vegetarian and Vegan Diet</h2>
          <p>
            The production of meat has a significant environmental impact in
            terms of resource use and greenhouse gas emissions. By incorporating
            more plant-based meals into your diet, you reduce your carbon
            footprint and contribute to the preservation of ecosystems.
          </p>
        </div>
      </div>

      <div className="text-container">
        <div className="paragraph">
          <h2>Favor Organic Foods</h2>
          <p>
            Organic foods are produced without the use of chemical pesticides
            and synthetic fertilizers, making them more environmentally
            friendly. By choosing organic products, you support sustainable
            agriculture and preserve biodiversity.
          </p>
        </div>
        <div id="pic">
          <img src={Pic4} alt="concomber" />
        </div>
      </div>

      <div className="conclusion">
        <p>
          Thinking about tomorrow means adopting a sustainable approach to our
          diet. By making conscious choices such as eating locally, reducing
          food waste, opting for a plant-based diet, and choosing organic foods,
          we can contribute to a better future for our planet. These delicious
          recipes are not only good for you but also for the environment. So,
          put on your apron and get ready to savor a greener and more
          sustainable future.
        </p>
      </div>
    </div>
  );
}

export default Tomorrow;
