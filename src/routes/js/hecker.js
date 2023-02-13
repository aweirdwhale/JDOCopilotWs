import { ReactTerminal } from "react-terminal";
import React from "react";
import Landing from "./landing";

export default function Hecker() {
  // Define commands here
  const cnames = {
    help: "Affiche cette page",
    who: "Affiche des informations sur Albatross",
    whois: "Affiche des informations sur un membre d'Albatross",
    ls: "Liste des projets",
    info: "Affiche des informations sur un projet",
  }
  const redHatLogo=<span style={{color: "#FF0000"}}>Vous venez d'entrer dans le mode xX EPIK HACKER Xx. Tapez 'Help' pour la liste des commandes.<br/></span>
  const commands = {
    help: <span>
            <strong>Albatross bash</strong> - version 0.1.52(1)-release hecker mode
            <br/>
            <br/>
            <strong>WHO</strong> - {cnames.who} <br />
            <strong>WHOIS &lt;NOM&gt;</strong> - {cnames.whois} <br />
            <br />
            <strong>LS</strong> - {cnames.ls} <br />
            <strong>INFO &lt;PROJET&gt;</strong> - {cnames.info} <br />
            <br />
            <strong>CLEAR</strong> - Nettoie le terminal <br />
            <strong>HELP</strong> - {cnames.help} <br />
            <br />
            <strong>EXIT</strong> - Quitte le mode EPIK HACKER <br />
        </span>,
    who: <span>
            <strong>Albatross</strong> - <br /><br />
            On est des élèves de spécialité nsi,<br />
            on crée des projets parce qu'on aime vivre dangereusement (!!!!) et qu'on veut améliorer la vie des autres (quel altruisme !!!)<br />
            En plus, ça rapporte des 20 facilement en nous faisant passer pour des génies.<br />
            Notre dernier chef-d'œuvre c'est <strong>JDO-Copilot</strong>, un petit bijou de technologie et d'optimisation.<br />
            Ah, et Albatross parce qu'on est pas Baudelaire mais on compte avoir la même postérité !<br />
        </span>,
    whois: (name) => {
        if (name === "Cedric" || name === "Cédric" || name === "Tidic" || name === "cedric" || name === "cédric") {
            return <span>
                <strong>Cédric</strong> - <br /><br />
                Salut, moi c'est Cédric, alias Tidic.<br />
                C'est moi le gars qui a toujours des galères avec son pc, qui ramène des erreurs ou les créer, venu de Mars ou de Micromégas.<br />
                Je suis developpeur back-end à mi temps je crois.<br />
                </span>
        } else if (name === "Olivier" || name === "olivier" || name === "Aweirdwhale") {
            return <span>
                <strong>Olivier</strong> - <br /><br />
                Olivier, une baleine bizarre mais si sexy... <br />
                C’est un peu à cause de moi si les projets ou le site sont pas beaux : je suis developpeur front-end.<br/>
                </span>
        } else if (name === "Claire" || name==="claire") {
            return <span>
                <strong>Claire</strong> - <br /><br />
                BONJOUR je suis CLAIRE caractéristiques : canard saucisse <br/>(elle est spéciale)
                </span>
        } else if(name === "Thomas" || name==='thomas'){
            return <span>
                <strong>Thomas</strong> - <br/><br/>
                Les informations sur sa personne ont étées corrompues
            </span>
        } else {
            return <span>
                cette personne est inconnue au bataillon !
            </span>
        }
    },

    ls: <span>
        /JDO-Copilot <br/>
        /FGA <br/>
    </span>,

    //make redirection
    exit: () => {
        window.location.replace('./')
    },

    info: (prj) => {
        if (prj === 'JDO-Copilot' || prj === 'jdo-copilot' || prj === 'Jdo-copilot'){
            return <span>
                <b>Index Education</b> n’a qu’à bien se tenir ! (Je dis ça mais à tout moment on se fait strike) <br/>
                <b>JDO-Copilot</b> c’est l’application qui vous permettra de ne plus jamais vous perdre dans les couloirs <br/>
                (enfin c’est le but recherché) avec un mode <b>hors-réseau</b> pour ne pas détruire votre forfait 2€ chez free <br/>
                et avoir un chargement ultra rapide. <br/>
            </span>
        } else {
            return <span style={{color: '#FF0000'}}>
                Ce projet n'existe pas !
            </span>
        }
    }
  };

  return (
    <ReactTerminal
      commands={commands}
      welcomeMessage={redHatLogo}
      themes={{
        ctheme: {
          themeBGColor: "#000",
          themeToolbarColor: "#000",
          themeColor: "#20C20E",
          themePromptColor: "#20C20E",
          themeErrorMessageColor: "#FF0000",
        }
      }}
      errorMessage="Command not found"
      prompt="shell@epikHacker: ~$"
      theme="matrix"
    />
  );
}