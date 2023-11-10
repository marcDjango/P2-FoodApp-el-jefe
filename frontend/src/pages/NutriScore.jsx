import Line from "../assets/hr-line.svg";
import "./NutriScore.scss";

function NutriScore() {
  return (
    <div className="main-div">
      <div className="text-container">
        <h2 className="text-title">
          Un Système d'Étiquetage Nutritionnel qui Simplifie le Choix
          Alimentaire
        </h2>
        <p className="text-description">
          Les valeurs nutritionnelles jouent un rôle essentiel dans notre
          compréhension de la qualité nutritionnelle des produits alimentaires.
          Le Nutri-Score, par exemple, est un système d'étiquetage nutritionnel
          qui utilise ces valeurs pour attribuer une note globale à un produit
          alimentaire, facilitant ainsi la prise de décision des consommateurs.
          En effet, le Nutri-Score met en évidence la valeur nutritionnelle d'un
          produit de manière simple et visuelle, allant de la lettre A (vert)
          pour les produits les plus sains à la lettre E (rouge) pour les moins
          sains. Ce système aide les consommateurs à choisir des aliments plus
          équilibrés et à opter pour des choix plus sains, en un coup d'œil sur
          l'étiquette.
        </p>
        <img className="text-line" src={Line} alt="line" />
      </div>
      <div className="text-container">
        <h2 className="text-title">
          L'Évaluation des Valeurs Nutritionnelles dans le Nutri-Score
        </h2>
        <p className="text-description">
          Le Nutri-Score prend en compte plusieurs valeurs nutritionnelles clés,
          telles que les calories, les graisses saturées, les sucres, le sel,
          les protéines, les fibres, ainsi que les pourcentages de la valeur
          quotidienne (% VQ) de ces éléments. En combinant ces informations, le
          Nutri-Score évalue la qualité nutritionnelle globale d'un aliment, en
          prenant en compte les nutriments bénéfiques et les éléments à limiter.
          Ce système d'étiquetage est devenu un outil précieux pour les
          consommateurs soucieux de leur santé, les aidant à faire des choix
          alimentaires plus éclairés dans un environnement où les informations
          nutritionnelles peuvent parfois être complexes à interpréter.
        </p>
        <img className="text-line" src={Line} alt="line" />
      </div>
      <div className="text-container">
        <h2 className="text-title">
          Un Outil Clé pour une Alimentation Plus Saine
        </h2>
        <p className="text-description">
          Le Nutri-Score est un exemple de la manière dont les valeurs
          nutritionnelles sont mises en pratique pour promouvoir une
          alimentation plus saine. Il contribue à sensibiliser les consommateurs
          aux qualités nutritionnelles des produits alimentaires et encourage
          les fabricants à améliorer la composition nutritionnelle de leurs
          produits. En fin de compte, les valeurs nutritionnelles et le
          Nutri-Score sont des outils puissants pour promouvoir la santé
          publique en aidant les individus à faire des choix alimentaires plus
          informés, favorisant ainsi une alimentation équilibrée et une
          meilleure qualité de vie.
        </p>
        <img className="text-line" src={Line} alt="line" />
      </div>
    </div>
  );
}

export default NutriScore;
