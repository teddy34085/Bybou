import React, { useState, useRef } from "react" 
import { motion, px } from "framer-motion";
import './App.css' 
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Boutique from "./Boutique.jsx"
import { Analytics } from "@vercel/analytics/react"


const logo = 'ByBOO'
const width = '384px'
const height = '332px'
const image  = {}


function App() {
  return (
    <BrowserRouter>          {/* ← enveloppe tout */}
      <div className="app">
        <Header/>            {/* ← Header reste là, visible sur toutes les pages */}
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/boutique" element={<Boutique/>}/>
        </Routes>
        <Footer/>            {/* ← Footer reste là aussi, visible sur toutes les pages */}
      </div>
    </BrowserRouter>
  )
}


{/* Entete */}
function Header() {
  const [active, setactive] = useState(0)
  return(
    <>
     <header>
          <div className="align">
            <div className="logo"><p>{logo}</p><i className="fas fa-bread-slice"></i></div>
            <nav className={active ? "active" : ""}>
                  <ul>
                      <li><Link to="/">Accueil</Link></li>
                      <li><Link to="/boutique">Boutique</Link></li>
                      <li><Link to="#">Contact</Link></li>
                  </ul>

                  <div></div>
            </nav>
            <div className="Conteneurhamburger" onClick={()=> setactive(!active)}>
                <div className="hamburger" >
                    <span className={`ligne ${active ? "rotate1" : ""}`} id="ligne1"></span>
                    <span className={`ligne ${active ? "rotate2" : ""}`} id="ligne2"></span>
                </div>
            </div>
          </div>    
     </header>
    </>
  )
}

{/* Corps de la page */}
function Main() {

  // ✅ [MOI] Déplacé ICI, à l'intérieur du composant — c'est la seule correction structurelle
  // useRef doit toujours être dans un composant React, jamais au niveau module
  const nomRef = useRef(null);       // ✅ [MOI] Référence vers le champ Nom
  const adresseRef = useRef(null);   // ✅ [MOI] Référence vers le champ Adresse
  const commandeRef = useRef(null);  // ✅ [MOI] Référence vers le champ Commande

  // ✅ [MOI] Numéro WhatsApp avec indicatif Cameroun 237
  const WHATSAPP_NUMBER = "237650307945";

  // ✅ [MOI] Handler de soumission : construit et envoie le message vers WhatsApp
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault(); // ✅ [MOI] Empêche le rechargement de la page

    const nom = nomRef.current.value.trim();
    const adresse = adresseRef.current.value.trim();
    const commande = commandeRef.current.value.trim();

    // ✅ [MOI] Validation : tous les champs doivent être remplis
    if (!nom || !adresse || !commande) {
      alert("Veuillez remplir tous les champs avant d'envoyer.");
      return;
    }

    // ✅ [MOI] Message formaté pour WhatsApp
    const message =
      ` *Nouvelle commande depuis le site*\n\n` +
      ` *Nom & Prénom :* ${nom}\n` +
      ` *Zone de livraison :* ${adresse}\n` +
      ` *Commande :* ${commande}`;

    // ✅ [MOI] Encodage de l'URL et ouverture de WhatsApp
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return(
    <>
    <main>
      
      <section className="accueil">
        <div className="align">
          <motion.div
        initial={{ opacity: 0, y : 40 }}
        whileInView={{ opacity: 1, y : 0}}
        viewport={{once: false, amount: 0.3}}
        transition={{duration: 0.6}}
        className="conteneur1 " id="texte"
               >
              <h1>{logo}<i className="fas fa-bread-slice"></i></h1>
              <p>Chez {logo}, chaque pièce est façonnée à la main, avec passion et des ingrédients soigneusement sélectionnés pour vous offrir le meilleur.</p>
              <Link to="/boutique" className="bouttonAccueil">Passer commande</Link>
          </motion.div>
        </div>
      </section>
      <section className="savoir_faire">
          <div className="align">
              <div className="conteneur2">
                    <div className="Textesavoir_faire">
                      <h2>Notre savoir faire</h2>
                      <p>
                        De la sélection des farines à la cuisson, chaque étape est maîtrisée avec soin. Nos artisans perpétuent des recettes authentiques, alliant tradition et créativité pour régaler vos papilles.
                      </p>
                    </div>
               <div className="Imagesavoir_faire" >
                  <img src="images/Savoir_faire.jpeg" alt="Savoir faire" className="ImageSavoirfaire"/>               
               </div>
              </div>
              <div className="conteneur2">
                  <div className="information" id="Horaires">
                      <h3>Horaires</h3>
                      <div className="Texteinformation" id="TexteinformationHoraires">
                        <p>Lundi - Vendredi :  de 6h a 19h</p>
                        <p>Samedi - Dimanche :  de 6h a 16h</p>
                      </div>
                  </div>
                  <div className="information"  id="Adresse">
                    <h3>Adresse</h3>
                      <div className="Texteinformation" id="TexteinformationAdresse">
                        <p><i className="fas fa-location-dot"></i> Douala, Logpom</p>
                        <p><i className="fas fa-envelope"></i> Bybou34@gmail.com</p>
                        <p><i className="fas fa-phone"></i> 650307945</p>
                      </div>
                  </div>
                 <Link to="/boutique" className="Commander">Commander</Link>
              </div>
          </div>
      </section>
      <section className="creation">
           <div className="align">
             <h2>Nos créations gourmandes</h2>
             <div className="conteneur3">
                  <motion.div
        initial={{ opacity: 0, y : 40 }}
        whileInView={{ opacity: 1, y : 0}}
        viewport={{once: false, amount: 0.3}}
        transition={{duration: 0.6}}
        className="articlecreation" 
               >                 
               <div className="imagecreation"><img src="images/creation1.jpeg" alt="creation1" className="Imagearticlecreation"/></div>
                  <div className="textecreation">
                    <h3>Pâtisserie & Viennoiserie</h3>
                    <p>Croissants feuilletés, tartes fruitées, éclairs fondants — des douceurs préparées chaque matin avec amour.</p>
                    <Link to="/boutique" className="Commander">Commander</Link>
                </div>
                  </motion.div>

                  <motion.div
            initial={{ opacity: 0, y : 40 }}
            whileInView={{ opacity: 1, y : 0}}
            viewport={{once: false, amount: 0.3}}
            transition={{duration: 0.6}}
            className="articlecreation" 
                  >   
                      <div className="imagecreation"><img src="images/creation2.jpeg" alt="creation2" className="Imagearticlecreation"/></div>
                      <div className="textecreation">
                        <h3>Gâteau & art pâtissier</h3>
                        <p>Des créations sur mesure pour vos événements : anniversaires, mariages, célébrations inoubliables.</p>
                       <Link to="/boutique" className="Commander">Commander</Link>
                      </div> 
                      
                  </motion.div>   

                  <motion.div
                initial={{ opacity: 0, y : 40 }}
                whileInView={{ opacity: 1, y : 0}}
                viewport={{once: false, amount: 0.3}}
                transition={{duration: 0.6}}
                className="articlecreation" 
                      >                   
                      <div className="imagecreation"><img src="images/creation3.jpeg" alt="creation3" className="Imagearticlecreation"/></div>
                      <div className="textecreation">
                        <h3>Pain & tradition</h3>
                        <p>Baguettes croustillantes, pains spéciaux — la tradition boulangère dans toute sa splendeur.</p>
                       <Link to="/boutique" className="Commander">Commander</Link>
                      </div>
                      
                  </motion.div>

             </div>
           </div>
      </section>
      <motion.section 
        initial={{ opacity: 0, x : -200 }}
        whileInView={{ opacity: 1, x : 0}}
        viewport={{once: false, amount: 0.3}}
        transition={{duration: 0.6}}
        className="pourquoinouschoisir">
        <div className="align">
              <div className="conteneur4">
            <h2>Pourquoi choisir <span>{logo}</span> ?</h2>
            <p>Nous privilégions la qualité, la fraîcheur et un service attentionné pour vous offrir une expérience unique.</p>
            <Link to="/boutique" className="Commander">Découvrir nos produits</Link>
              </div>
        </div>
      </motion.section>
      <section className="contact" id="contact">
  <div className="align">
    <div className="conteneur5">
      <h2>Contactez-nous</h2>
      <p>Une question, une commande spéciale ? Écrivez-nous, et nous vous répondrons dans les plus brefs délais.</p>
    </div>
    <div className="conteneur6">
      <div className="conteneur2" id="infocontact">
        <div className="information" id="Horaires">
          <h3>Horaires</h3>
          <div className="Texteinformation" id="TexteinformationHoraires">
            <p>Lundi - Vendredi :  de 6h a 19h</p>
            <p>Samedi - Dimanche :  de 6h a 16h</p>
          </div>
        </div>
        <div className="information" id="Adresse">
          <h3>Adresse</h3>
          <div className="Texteinformation" id="TexteinformationAdresse">
            <p><i className="fas fa-location-dot"></i> Douala, Logpom</p>
            <p><i className="fas fa-envelope"></i> Bybou34@gmail.com</p>
            <p><i className="fas fa-phone"></i> 650307945</p>
          </div>
        </div>
       <Link to="/boutique" className="Commander">Commander</Link>
      </div>
        <motion.div
        initial={{ opacity: 0, y : 40 }}
        whileInView={{ opacity: 1, y : 0}}
        viewport={{once: false, amount: 0.3}}
        transition={{duration: 0.6}}
        className="formulaire"
        >      
        <form onSubmit={handleWhatsAppSubmit}> {/* ✅ [MOI] Branchement WhatsApp */}
          <div className="divinput">
            <label htmlFor="">Nom & prenom</label>
            <input type="text" placeholder="teddy TEGOUNOU" ref={nomRef} /> {/* ✅ [MOI] ref champ nom */}
          </div>
          <div className="divinput">
            <label htmlFor="">Adresse ou Zone de livraison</label>
            <input type="text" placeholder="Ex : Logpom, bassong" ref={adresseRef} /> {/* ✅ [MOI] ref champ adresse */}
          </div>
          <div className="divinput">
            <label htmlFor="">Commande</label>
            <textarea name="" id="" rows={8} cols={46} placeholder="croissant, pain complet, etc..." ref={commandeRef}></textarea> {/* ✅ [MOI] ref champ commande */}
          </div>
          <button type="submit" className="formbutton">C'est parti !</button>
        </form>        
        </motion.div>
    </div>
  </div>
      </section>

    </main>
    </>
  )
}

{/* pied de page */}
function Footer() {
  return(
   <>
     <footer>
      <div className="align">
        <div className="conteneur7">
          <h2>{logo}</h2>
          <ul>
              <li><a href="#">Accueil</a></li>
              <li><a href="#">Creation</a></li>
              <li><a href="#">Boutique</a></li>
              <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <hr />
          <div className="conteneur8">
              <div className="reseaufooter">
                <i className="fab fa-instagram"></i>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-whatsapp"></i>
              </div>
              <h6>© 2026 Teddy All rights reserved.</h6>
        </div>
       </div>
     </footer>
   </>
   )
}
export default App