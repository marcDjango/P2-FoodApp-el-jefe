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
          In a constantly changing world, it is essential that we think about
          the way we eat and the impact of our choices food on the future of our
          planet. Challenges environmental issues are increasingly pressing, and
          our food plays a key role in preserving the Earth. In this article, we
          will explore the notion of “Let’s think about Tomorrow” in the context
          sustainable cooking. We will share delicious recipes and
          environmentally friendly to inspire you to make choices more
          responsible food.
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
            Food waste is a major problem worldwide of today. By reducing waste
            in your kitchen, you contribute to the preservation of natural
            resources. A tip simple is to plan your meals, save leftovers and be
            creative with the ingredients you have on hand.
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
            Meat production has a significant environmental impact in terms of
            resource use and gas emissions tight. By incorporating more
            plant-based meals into your diet, you reduce your carbon footprint
            and contribute to the preservation of ecosystems.
          </p>
        </div>
      </div>

      <div className="text-container">
        <div className="paragraph">
          <h2>Privilégier les Aliments Biologiques</h2>
          <p>
            Les aliments biologiques sont produits sans l'utilisation de
            pesticides chimiques et d'engrais synthétiques, ce qui les rend plus
            respectueux de l'environnement. En choisissant des produits
            biologiques, vous soutenez une agriculture durable et préservez la
            biodiversité.
          </p>
        </div>
        <div id="pic">
          <img src={Pic4} alt="concomber" />
        </div>
      </div>

      <div className="conclusion">
        <p>
          Thinking about tomorrow means adopting a sustainable approach to our
          food. By making conscious choices, such as eating locally, reduce food
          waste, opt for a diet based on plants and favor organic foods, we can
          contribute to a better future for our planet. These recipes delicious
          foods are not only good for you, but also for the environment. So, put
          on your apron and get ready to enjoy a greener and more sustainable
          future.
        </p>
      </div>
    </div>
  );
}

export default Tomorrow;
