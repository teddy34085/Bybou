// ─────────────────────────────────────────────────────────────
// FRAMER MOTION — Programme final
// Deux animations : Fade+Up Cascade & Scale Cascade
// Toutes les variantes sont écrites DIRECTEMENT dans le JSX
// ─────────────────────────────────────────────────────────────
import { useState } from "react";
// motion → rend un élément HTML animable par Framer Motion
import { motion } from "framer-motion";
// ── Données des cartes ──────────────────────────────────────
const cards = [
{ id: 1, emoji: " ", brand: "Dior", title: "Sauvage", price: "89 000 XAF" },
{ id: 2, emoji: " ", brand: "Chanel", title: "Bleu", price: "95 000 XAF" },
{ id: 3, emoji: " ", brand: "TF", title: "Oud Wood", price: "120 000 XAF" },
{ id: 4, emoji: " ", brand: "Creed", title: "Aventus", price: "145 000 XAF" },
];
// ────────────────────────────────────────────────────────────
export default function App() {
// mode → "fade" ou "scale", détermine quelle animation afficher
const [mode, setMode] = useState("fade");
// key → chaque fois qu'on l'incrémente, React DÉTRUIT et RECRÉE
// le composant → l'animation repart depuis zéro
const [key, setKey] = useState(0);
return (
<div style={styles.page}>
{/* ── Titre ─────────────────────────────────────────── */}
<h1 style={styles.title}>Framer Motion Cascades</h1>
{/* ── Boutons pour choisir l'animation ──────────────── */}
<div style={styles.tabs}>
<button
style={{ ...styles.tab, ...(mode === "fade" ? styles.tabActive : {}) }}
onClick={() => { setMode("fade"); setKey(k => k + 1); }}
>
Fade + Up
</button>
<button
style={{ ...styles.tab, ...(mode === "scale" ? styles.tabActive : {}) }}
onClick={() => { setMode("scale"); setKey(k => k + 1); }}
>
Scale
</button>
</div>

{/* ════════════════════════════════════════════════════
ANIMATION 1 — FADE + UP CASCADE
Chaque carte apparaît en montant (y) et en devenant
visible (opacity), avec un décalage entre elles.
════════════════════════════════════════════════════ */}
{mode === "fade" && (
/*
CONTENEUR — motion.div parent
─────────────────────────────
Son rôle = orchestrer l'ordre d'apparition des enfants.
Il ne s'anime pas lui-même, mais grâce à staggerChildren
il dit à Framer : "attends 120ms avant de lancer l'enfant suivant".
initial="hidden" → tous les enfants partent de l'état "hidden"
animate="visible" → tous les enfants vont vers l'état "visible"
Framer propage ces deux mots à chaque enfant automatiquement.
*/
<motion.div

key={key}
initial="hidden"
animate="visible"
variants={{
hidden: {}, // le conteneur n'a pas d'état caché particulier
visible: {
transition: {
staggerChildren: 0.12, // ← 120ms de décalage entre chaque carte
delayChildren: 0.05, // ← attend 50ms avant de démarrer
},
},
}}
style={styles.grid}
>

/*
ENFANT — motion.div de chaque carte
─────────────────────────────────────
variants contient deux états :
"hidden" → état de départ (invisible, décalée vers le bas)
"visible" → état d'arrivée (visible, position normale)
Framer sait quand déclencher chaque carte grâce au
staggerChildren du parent. Pas besoin de initial/animate ici.
*/
<motion.div
key={card.id}
variants={{
hidden: {
opacity: 0, // invisible
y: 40, // décalée 40px vers le bas
},
visible: {
opacity: 1, // devient visible
y: 0, // remonte à sa position d'origine
transition: {
duration: 0.55, // durée : 0.55 secondes
ease: [0.22, 1, 0.36, 1], // courbe fluide (ease-out cubique)
},
},
}}
// whileHover → s'active quand la souris survole la carte
whileHover={{
y: -8, // monte de 8px
scale: 1.03, // grossit légèrement
transition: { duration: 0.2 },
}}
style={styles.card}
>

</motion.div>

</motion.div>
)}



{/* ════════════════════════════════════════════════════
ANIMATION 2 — SCALE CASCADE
Même principe que le Fade+Up, mais au lieu de monter (y),
chaque carte part d'une petite taille (scale: 0.5)
et grossit jusqu'à sa taille normale (scale: 1).
════════════════════════════════════════════════════ */}
{mode === "scale" && (
/*
CONTENEUR — exactement le même rôle que pour le Fade+Up :
orchestrer le stagger entre les enfants.
*/
<motion.div
key={key}
initial="hidden"
animate="visible"
variants={{
hidden: {},
visible: {
transition: {
staggerChildren: 0.1, // 100ms entre chaque carte
delayChildren: 0.05,
},
},
}}
style={styles.grid}
>
{cards.map((card) => (
/*
ENFANT — même structure, mais les propriétés changent :
on anime "scale" au lieu de "y".
Le petit rebond vient de la courbe ease [0.34, 1.56, 0.64, 1]
qui dépasse 1 à mi-chemin → effet "spring" (ressort).
*/
<motion.div
key={card.id}
variants={{
hidden: {
opacity: 0, // invisible
scale: 0.5, // réduite à 50% de sa taille réelle
},
visible: {
opacity: 1, // visible
scale: 1, // taille normale (100%)
transition: {
duration: 0.5,
ease: [0.34, 1.56, 0.64, 1], // ← dépasse 1 → petit rebond
},
},
}}
whileHover={{
scale: 1.06,
transition: { duration: 0.2 },
}}
style={styles.card}
>
<span style={styles.emoji}>{card.emoji}</span>
<span style={styles.brand}>{card.brand}</span>
<span style={styles.cardTitle}>{card.title}</span>
<span style={styles.price}>{card.price}</span>
</motion.div>
))}
</motion.div>
)}
{/* ── Bouton Rejouer ────────────────────────────────── */}
{/*
whileTap → s'active au clic : légère compression
whileHover → s'active au survol : légère expansion
onClick → incrémente key → force le re-mount → animation repart
*/}
<motion.button
whileTap={{ scale: 0.93 }}
whileHover={{ scale: 1.05 }}
onClick={() => setKey(k => k + 1)}
style={styles.replay}
>
↺ Rejouer
</motion.button>
</div>
);
}
// ─────────────────────────────────────────────────────────────
// STYLES
// ─────────────────────────────────────────────────────────────
const styles = {
page: {
minHeight: "100vh",
background: "linear-gradient(160deg, #0a0a0a 0%, #160f04 60%, #0a0a0a 100%)",
display: "flex",
flexDirection: "column",
alignItems: "center",
padding: "48px 20px 60px",
fontFamily: "'Georgia', serif",
},
title: {
fontSize: "clamp(1.2rem, 3.5vw, 1.8rem)",
fontWeight: 300,
letterSpacing: "0.2em",
color: "#c9a84c",
textTransform: "uppercase",
marginBottom: "32px",
},
tabs: {
display: "flex",
gap: "12px",
marginBottom: "40px",
},
tab: {
padding: "10px 24px",
border: "1px solid #c9a84c44",
borderRadius: "6px",
background: "transparent",
color: "#c9a84c",
fontSize: "0.8rem",
letterSpacing: "0.1em",
cursor: "pointer",
transition: "all 0.2s",
},
tabActive: {
background: "#c9a84c",
color: "#0a0a0a",
fontWeight: 700,
borderColor: "#c9a84c",
},
grid: {
display: "grid",
gridTemplateColumns: "repeat(auto-fit, minmax(155px, 1fr))",
gap: "16px",
width: "100%",
maxWidth: "700px",
},
card: {
background: "linear-gradient(160deg, #1c1710 0%, #241d0e 100%)",
border: "1px solid #c9a84c22",
borderRadius: "14px",
padding: "28px 16px 22px",
display: "flex",
flexDirection: "column",
alignItems: "center",
gap: "7px",
boxShadow: "0 8px 32px #00000066",
cursor: "default",
},
emoji: { fontSize: "2.4rem", marginBottom: "6px" },
brand: { fontSize: "0.65rem", letterSpacing: "0.2em", color: "#c9a84c", textTransform: cardTitle: { fontSize: "1rem", fontWeight: 600, color: "#f0e6c8" },
price: { fontSize: "0.75rem", color: "#6a5c3a", marginTop: "4px" },
replay: {
marginTop: "44px",
padding: "13px 36px",
border: "1px solid #c9a84c",
borderRadius: "8px",
background: "transparent",
color: "#c9a84c",
fontSize: "0.88rem",
letterSpacing: "0.12em",
cursor: "pointer",
},
};