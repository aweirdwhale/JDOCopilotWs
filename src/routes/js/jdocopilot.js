import '../css/jdocopilot.css'
import * as Ai from "react-icons/ai";

export default function Jdocopilot() {
    return(
        <div className='jdo-body'>
            <div className="jdo-title">
                <h1>JDO-Copilot</h1>
            </div>
            <div className="jdo-content">
                    <img className='jdo-img' alt='Là il y a une image nrmlmt' draggable="false" src='https://raw.githubusercontent.com/tidic84/JDOCopilot/latest/.app/public/assets/images/logoRond.png'/>
                    <p className="p">
                        <b>Index Education</b> n’a qu’à bien se tenir ! (Je dis ça mais à tout moment on se fait strike) <b>JDO-Copilot</b> c’est l’application qui vous permettra de ne plus jamais vous perdre dans les couloirs (enfin c’est le but recherché) avec un mode <b>hors-réseau</b> pour ne pas détruire votre forfait 2€ chez free et avoir un chargement ultra rapide* (on connaît tous ce moment où on attend comme des cons devant l’écran de chargement de Pronote)
                        <span className='condition'>*Sauf premier chargement</span>
                    </p>
                    <a id="source-link" class="meta-link" href="#vyuh">
                        <Ai.AiFillAndroid className='jdo-icon'/>
                        <span>Donnez-moi ça !</span>
                    </a>
                    <a id="yt-link" class="meta-link" href="/cgus">
                        <Ai.AiFillExclamationCircle className='jdo-icon'/>
                        <span>CGUs</span>
                    </a>
                    
                    <a className="jdo-home" href='/work'>
                        One step backwards...
                    </a>
            </div>
        
        </div>
    )
}