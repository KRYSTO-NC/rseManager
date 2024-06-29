import '@/assets/styles/global.css';


export const metadata = {
    title:'RSE Manager | Booster votre bilan RSE',
    description: 'RSE Manager est une plateforme de gestion de ressources pour les entreprises et associations. Vous pourrez gérer votre RSE, suivre vos indicateurs, et obtenir des conseils et astuces.',
   keywords: 'RSE, bilan carbonne, entreprise, association, gestion, ressources, développement durable, écologie, environnement, social, économie, conseil, astuce, indicateur, plateforme, outil, logiciel, web, application, mobile, gratuit, open source, libre, français, international'
}

const MainLayout = ({children}) => {
  return (
    <html lang="fr">
      <body>
        <div>{children}</div>
      </body>
    </html>
  )
}

export default MainLayout
