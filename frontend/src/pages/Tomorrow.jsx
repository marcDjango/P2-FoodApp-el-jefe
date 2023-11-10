import "./Tomorrow.scss";
import Pic1 from "../assets/pics/pic-tomorrow-1.jpeg";
import Pic2 from "../assets/pics/pic-tomorrow-2.jpeg";
import Pic3 from "../assets/pics/pic-tomorrow-3.jpeg";
import Pic4 from "../assets/pics/pic-tomorrow-4.jpeg";

function Tomorrow() {
  return (
    <div className="main-container-tomorrow">
      <div className="introduction">
        <h1>Pensons à demain</h1>
        <p>
          Dans un monde en constante évolution, il est essentiel que nous
          réfléchissions à notre façon de manger et à l'impact de nos choix
          alimentaires sur l'avenir de notre planète. Les enjeux
          environnementaux sont de plus en plus pressants, et notre alimentation
          joue un rôle clé dans la préservation de la Terre. Dans cet article,
          nous allons explorer la notion de "Pensons à Demain" dans le contexte
          de la cuisine durable. Nous partagerons des recettes délicieuses et
          respectueuses de l'environnement pour vous inspirer à faire des choix
          alimentaires plus responsables.
        </p>
      </div>

      <div className="text-container">
        <div id="pic">
          <img src={Pic1} alt="vegetables" />
        </div>
        <div className="paragraph">
          <h2>Manger Local et de Saison</h2>
          <p>
            L'une des premières étapes pour penser à demain dans votre cuisine
            est de privilégier les produits locaux et de saison. En optant pour
            des aliments qui sont cultivés à proximité de chez vous et qui sont
            récoltés au moment opportun, vous réduisez l'empreinte carbone
            associée au transport des denrées alimentaires sur de longues
            distances. Les légumes de saison sont non seulement plus frais et
            savoureux, mais ils contribuent également à soutenir les
            agriculteurs locaux.
          </p>
        </div>
      </div>

      <div className="text-container">
        <div className="paragraph">
          <h2>Réduire le Gaspillage Alimentaire</h2>
          <p>
            Le gaspillage alimentaire est un problème majeur dans le monde
            d'aujourd'hui. En réduisant le gaspillage dans votre cuisine, vous
            contribuez à la préservation des ressources naturelles. Une astuce
            simple consiste à planifier vos repas, à conserver les restes et à
            être créatif avec les ingrédients que vous avez sous la main.
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
          <h2>Opter pour une Alimentation Végétarienne et Végétalienne</h2>
          <p>
            La production de viande a un impact environnemental significatif en
            termes d'utilisation de ressources et d'émissions de gaz à effet de
            serre. En incorporant davantage de repas à base de plantes dans
            votre alimentation, vous réduisez votre empreinte carbone et
            contribuez à la préservation des écosystèmes.
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
          Penser à demain, c'est adopter une approche durable de notre
          alimentation. En faisant des choix conscients, comme manger local,
          réduire le gaspillage alimentaire, opter pour une alimentation à base
          de plantes et privilégier les aliments biologiques, nous pouvons
          contribuer à un avenir meilleur pour notre planète. Ces recettes
          délicieuses sont non seulement bonnes pour vous, mais aussi pour
          l'environnement. Alors, mettez votre tablier et préparez-vous à
          savourer un avenir plus vert et plus durable.
        </p>
      </div>
    </div>
  );
}

export default Tomorrow;
