import Line from "../assets/hr-line.svg";
import "./NutriScore.scss";

function NutriScore() {
  return (
    <div className="main-div">
      <div className="text-container">
        <h2 className="text-title">
          A Nutrition Labeling System That Simplifies Choice Eating
        </h2>
        <p className="text-description">
          Nutritional values play an essential role in our understanding the
          nutritional quality of food products. Nutri-Score, for example, is a
          nutritional labeling system which uses these values to assign an
          overall rating to a product food, thus facilitating consumer
          decision-making. Indeed, the Nutri-Score highlights the nutritional
          value of a produced in a simple and visual way, going from the letter
          A (green) for the healthiest products with the letter E (red) for the
          least healthy. This system helps consumers choose foods more balanced
          and opt for healthier choices, at a glance the label.
        </p>
        <img className="text-line" src={Line} alt="line" />
      </div>
      <div className="text-container">
        <h2 className="text-title">
          The Evaluation of Nutritional Values in the Nutri-Score
        </h2>
        <p className="text-description">
          The Nutri-Score takes into account several key nutritional values,
          such as calories, saturated fats, sugars, salt, proteins, fibers, as
          well as percentages of the value daily (% DV) of these elements. By
          combining this information, the Nutri-Score evaluates the overall
          nutritional quality of a food, in taking into account beneficial
          nutrients and elements to limit. This labeling system has become a
          valuable tool for health-conscious consumers, helping them make
          choices more informed food in an environment where information
          Nutritional information can sometimes be complex to interpret.
        </p>
        <img className="text-line" src={Line} alt="line" />
      </div>
      <div className="text-container">
        <h2 className="text-title">A Key Tool for a Healthier Diet</h2>
        <p className="text-description">
          The Nutri-Score is an example of how values nutritional practices are
          put into practice to promote healthy healthier diet. It helps raise
          consumer awareness nutritional qualities of food products and
          encourages manufacturers to improve the nutritional composition of
          their products. Ultimately, the nutritional values and Nutri-Score are
          powerful tools to promote health public by helping individuals make
          better food choices informed, thus promoting a balanced diet and
          better quality of life.
        </p>
        <img className="text-line" src={Line} alt="line" />
      </div>
    </div>
  );
}

export default NutriScore;
