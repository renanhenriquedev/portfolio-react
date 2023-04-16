import React, { useState } from 'react';
import styles from './Contact.module.css'

function Contact() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [mensagem, setMensagem] = useState("");


    function enviarFormulario(event) {
        event.preventDefault();

        const texto = `Nome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone}\nMensagem: ${mensagem}`;

        const numeroWhatsApp = import.meta.env.VITE_WHATSAPP_NUMBER; 

        const linkWhatsapp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

        window.open(linkWhatsapp, '_blank');
    }

    function mascaraTelefone(event) {
        const texto = event.target.value;
        const textoApenasNumeros = texto.replace(/\D/g, '').substring(0, 11);

        let telefoneFormatado = textoApenasNumeros.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');

        if (textoApenasNumeros.length < 11) {
            telefoneFormatado = textoApenasNumeros.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
        }

        setTelefone(telefoneFormatado);
    }

    return (
        <main className={styles.mainContact}>
            <div id={styles.Contact}>
                <form onSubmit={enviarFormulario} action="">

                    <fieldset>
                        <input
                            id={styles.nome}
                            type="text"
                            name="input-nome"
                            className='form-control'
                            placeholder="Nome"
                            required minLength="2"
                            value={nome}
                            onChange={(event) => setNome(event.target.value)}
                        />
                    </fieldset>

                    <fieldset>
                        <input 
                        id={styles.email} 
                        type="email" 
                        name="input-email" 
                        className='form-control' 
                        placeholder="Email" 
                        required
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                         />
                    </fieldset>

                    <fieldset>
                        <input 
                        id={styles.telefone} 
                        type="tel" 
                        name="input-tel" 
                        className='form-control' 
                        placeholder="(99) 99999-9999" 
                        required pattern="^\(\d{2}\) \d{5}-\d{4}$" maxLength="15"
                        value={telefone}
                        onChange={(mascaraTelefone)}
                        />
                    </fieldset>

                    <fieldset>
                        <textarea 
                        id={styles.mensagem} 
                        name="input-msg" 
                        className='form-control' 
                        placeholder="Mensagem"
                        style={{ height: '100px' }}
                        value={mensagem}
                        onChange={(event) => setMensagem(event.target.value)}
                        ></textarea>
                    </fieldset>

                    <button type="submit" id={styles.git} className={styles['button-28']}>Enviar</button>


                </form>
            </div>

            <div id={styles.maps}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.078017646574!2d-35.95426968521853!3d-8.295034894032074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a98a56da17a4b1%3A0x88b2099670852257!2sCaruaru%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1678310834611!5m2!1spt-BR!2sbr"
                    width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </main>
    )
}

export default Contact;
