import React, { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion" 
import './boutique.css' 

// ===== CODE GÉNÉRÉ PAR MOI - SECTION ANIMATIONS =====

function Boutique() {
  return (
    <>
    <Main/>
    </>
  ) 
}

// Corps de la page
function Main() {
  // === REFS POUR LES GALERIES - CODE GÉNÉRÉ PAR MOI ===
  // Utilise useRef pour chaque galerie pour détecter quand elle entre dans la vue
  const galerie1Ref = useRef(null)
  const galerie2Ref = useRef(null)
  const galerie3Ref = useRef(null)

  // === STATE POUR DÉCLENCHER LES ANIMATIONS - CODE GÉNÉRÉ PAR MOI ===
  // Stocke si chaque galerie est visible pour déclencher l'animation
  const [isGalerie1Visible, setIsGalerie1Visible] = useState(false)
  const [isGalerie2Visible, setIsGalerie2Visible] = useState(false)
  const [isGalerie3Visible, setIsGalerie3Visible] = useState(false)

  // === INTERSECTION OBSERVER - CODE GÉNÉRÉ PAR MOI ===
  // Détecte quand un élément devient visible à l'écran (au scroll)
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1, // L'animation se déclenche quand 10% de la galerie est visible
      rootMargin: "0px 0px -100px 0px" // Ajoute du délai avant de déclencher
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Quand l'élément devient visible, on déclenche l'animation
          if (entry.target === galerie1Ref.current) {
            setIsGalerie1Visible(true)
          } else if (entry.target === galerie2Ref.current) {
            setIsGalerie2Visible(true)
          } else if (entry.target === galerie3Ref.current) {
            setIsGalerie3Visible(true)
          }
        }
      })
    }, observerOptions)

    // Observer les trois galeries
    if (galerie1Ref.current) observer.observe(galerie1Ref.current)
    if (galerie2Ref.current) observer.observe(galerie2Ref.current)
    if (galerie3Ref.current) observer.observe(galerie3Ref.current)

    return () => observer.disconnect()
  }, [])

  // === CONFIGURATION DE L'ANIMATION STAGGER - CODE GÉNÉRÉ PAR MOI ===
  // Container - définit le stagger entre les enfants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Délai de 0.1s entre chaque article (AJUSTABLE)
        delayChildren: 0.2, // Attendre 0.2s avant de commencer l'animation
      },
    },
  }

  // Item - animation de chaque article
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30, // Les articles montent de 30px (AJUSTABLE: changer le nombre)
      // Pour un autre effet: x: 20 (glisse depuis la droite), scale: 0.8 (zoom)
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6, // Durée de l'animation (AJUSTABLE: 0.3 = rapide, 1 = lent)
        ease: "easeOut", // Type de courbe: "easeOut", "easeInOut", "linear"
      },
    },
  }

  return(
    <>
      <main>
        <section className="produits">
          <div className="bloob"></div>
            <div className="align">
              {/* === PREMIÈRE GALERIE: PAIN & TRADITION === */}
              <div className="conteneur10">
                <h2>Pain & Tradition</h2>
                
                {/* === CODE GÉNÉRÉ PAR MOI - MOTION DIV AVEC STAGGER === */}
                {/* ref={galerie1Ref} : relie cette div au hook useRef pour la détecter */}
                {/* variants et initial/animate : applique l'animation */}
                <motion.div 
                  ref={galerie1Ref}
                  className="galerie"
                  variants={containerVariants}
                  initial="hidden"
                  animate={isGalerie1Visible ? "visible" : "hidden"}
                >
                  {/* === CHAQUE ARTICLE REÇOIT L'ANIMATION === */}
                  <motion.div className="article" variants={itemVariants} id="articleid">
                    <img src="article1.png" alt="Pain ordinaire" />
                    <div className="articletexte">
                      <h3>Pain ordinaire</h3>
                      <p>150.00xaf</p>
                    </div>
                    <a href="#" className="Commander">Commander</a>
                  </motion.div>

                  <motion.div className="article" variants={itemVariants}>
                    <img src="article2.png" alt="Pain ordinaire" />
                    <div className="articletexte">
                      <h3>Pain ordinaire</h3>
                      <p>150.00xaf</p>
                    </div>
                    <a href="#" className="Commander">Commander</a>
                  </motion.div>

                  <motion.div className="article" variants={itemVariants}>
                    <img src="article3.png" alt="Pain au lait" />
                    <div className="articletexte">
                      <h3>Pain au lait</h3>
                      <p>150.00xaf</p>
                    </div>
                    <a href="#" className="Commander">Commander</a>
                  </motion.div>

                  <motion.div className="article" variants={itemVariants}>
                    <img src="article4.png" alt="Pain court" />
                    <div className="articletexte">
                      <h3>Pain court</h3>
                      <p>100.00xaf</p>
                    </div>
                    <a href="#" className="Commander">Commander</a>
                  </motion.div>

                  <motion.div className="article" variants={itemVariants}>
                    <img src="article5.png" alt="Baguette" />
                    <div className="articletexte">
                      <h3>Baguette</h3>
                      <p>150.00xaf</p>
                    </div>
                    <a href="#" className="Commander">Commander</a>
                  </motion.div>

                  <motion.div className="article" variants={itemVariants} id="articleid">
                    <img src="article6.png" alt="Pain moyen" />
                    <div className="articletexte">
                      <h3>Pain moyen</h3>
                      <p>100.00xaf</p>
                    </div>
                    <a href="#" className="Commander">Commander</a>
                  </motion.div>
                </motion.div>
              </div>

              {/* === DEUXIÈME GALERIE: GATEAU & ART PATISSIER === */}
              <div className="conteneur10">
                <h2>Gateau & art patissier</h2>
                
                <motion.div 
                  ref={galerie2Ref}
                  className="galerie"
                  variants={containerVariants}
                  initial="hidden"
                  animate={isGalerie2Visible ? "visible" : "hidden"}
                >
                  <motion.div className="article" variants={itemVariants}>
                    <img src="article7.png" alt="Gateau chocolat" />
                    <div className="articletexte">
                      <h3>Gateau chocolat</h3>
                      <p>7000.00xaf</p>
                    </div>
                    <a href="#" className="Commander">Commander</a>
                  </motion.div>

                  <motion.div className="article" variants={itemVariants} id="articleid">
                    <img src="article8.png" alt="Gateau vanille" />
                    <div className="articletexte">
                      <h3>Gateau vanille</h3>
                      <p>7000.00xaf</p>
                    </div>
                    <a href="#" className="Commander">Commander</a>
                  </motion.div>

                  <motion.div className="article" variants={itemVariants} id="articleid">
                    <img src="article9.png" alt="Gateau personnalise" />
                    <div className="articletexte">
                      <h3>Gateau personnalise</h3>
                      <p>15000.00xaf - 25000.00xaf</p>
                    </div>
                    <a href="#" className="Commander">Commander</a>
                  </motion.div>

                  <motion.div className="article" variants={itemVariants} id="articleid">
                    <img src="article10.png" alt="Gateau a etage" />
                    <div className="articletexte">
                      <h3>Gateau a etage</h3>
                      <p>10000.00xaf-25000.00xaf</p>
                    </div>
                    <a href="#" className="Commander">Commander</a>
                  </motion.div>

                  <motion.div className="article" variants={itemVariants}>
                    <img src="article11.png" alt="Gateau au yaourt" />
                    <div className="articletexte">
                      <h3>Gateau au  yaourt</h3>
                      <p>2500.00xaf-<br/>5000.00xaf</p>
                    </div>
                    <a href="#" className="Commander">Commander</a>
                  </motion.div>

                  <motion.div className="article" variants={itemVariants} id="articleid">
                    <img src="article12.png" alt="Gateau en verre" />
                    <div className="articletexte">
                      <h3>Gateau en verre</h3>
                      <p>1000.00xaf-5000.00xaf</p>
                    </div>
                    <a href="#" className="Commander">Commander</a>
                  </motion.div>
                </motion.div>
              </div>

              {/* === TROISIÈME GALERIE: PATISSIERE & VERNOISERIE === */}
              <div className="conteneur10">
                <h2>Patissiere & Vernoiserie</h2>
                
                <motion.div 
                  ref={galerie3Ref}
                  className="galerie"
                  variants={containerVariants}
                  initial="hidden"
                  animate={isGalerie3Visible ? "visible" : "hidden"}
                >
                  <motion.div className="article" variants={itemVariants}>
                    <img src="article13.png" alt="Croissant" />
                    <div className="articletexte">
                      <h3>Croissant</h3>
                      <p>500.00xaf</p>
                    </div>
                    <a href="#" className="Commander">Commander</a>
                  </motion.div>

                  <motion.div className="article" variants={itemVariants}>
                    <img src="article14.png" alt="Pain chocolat" />
                    <div className="articletexte">
                      <h3>Pain chocolat</h3>
                      <p>500.00xaf</p>
                    </div>
                    <a href="#" className="Commander">Commander</a>
                  </motion.div>

                  <motion.div className="article" variants={itemVariants}>
                    <img src="article15.png" alt="Nougat" />
                    <div className="articletexte">
                      <h3>Nougat</h3>
                      <p>400.00xaf</p>
                    </div>
                    <a href="#" className="Commander">Commander</a>
                  </motion.div>

                  <motion.div className="article" variants={itemVariants}>
                    <img src="article16.png" alt="Brioche" />
                    <div className="articletexte">
                      <h3>Brioche</h3>
                      <p>700.00xaf</p>
                    </div>
                    <a href="#" className="Commander">Commander</a>
                  </motion.div>

                  <motion.div className="article" variants={itemVariants}>
                    <img src="article17.png" alt="Beignets sucres" />
                    <div className="articletexte">
                      <h3>Beignets sucres</h3>
                      <p>100.00xaf</p>
                    </div>
                    <a href="#" className="Commander">Commander</a>
                  </motion.div>

                  <motion.div className="article" variants={itemVariants}>
                    <img src="article18.png" alt="Cake" />
                    <div className="articletexte">
                      <h3>Cake</h3>
                      <p>300.00xaf</p>
                    </div>
                    <a href="#" className="Commander">Commander</a>
                  </motion.div>
                </motion.div>
              </div>
            </div>
        </section>
      </main>
    </>
  )
}

export default Boutique
