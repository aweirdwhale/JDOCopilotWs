import '../css/contact.css'

export default function Contact() {
    return(
        <div class="contact">
            <div class="contact-main">
                <div class="contact-box">
                    <h3>Pour nous contacter, c'est ici :</h3>
                    <a href="mailto://contact.albatross-team@gmail.com" class="button">Par mail</a>
                    <a href="https://discord.gg/4ZXzzVpjPq" class="button">Sur discord</a>
                    <a href="https://github.com/tidic84/JDOCopilot/issues/new" class="button">Ouvrir une issue github</a>
                </div>
            </div>

            <a className="jdo-home" href='/about'>
                        One step backwards...
            </a>
        </div>
    )
}