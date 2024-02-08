import { fr } from '@codegouvfr/react-dsfr'
import Accordion from '@codegouvfr/react-dsfr/Accordion'

//export function Welcome(props: { metadata: unknown, personalization: unknown }) {
export function Welcome() {
  //const { metadata, personalization } = props

  return (
    <div className={fr.cx('fr-mb-1w')}>
      <h1>
        Bienvenue sur le questionnaire de réponse à l'Enquête statistique sur
        les technologies de l’information et de la communication 2021.
      </h1>
      <p className={fr.cx('fr-text--lead')}>
        Cette enquête permet de connaître l'équipement et les usages des
        personnes dans le domaine des technologies de l'information et de la
        communication (téléphone fixe et mobile, informatique, internet sur
        support fixe et mobile).
      </p>
      <h2>Qui doit répondre à ce questionnaire ?</h2>
      <ul>
        <li>Jonh Doe</li>
        <li>Julia Doe</li>
        <li>Juliette Doe</li>
      </ul>

      <h3>En savoir plus sur l'enquête TIC</h3>
      <div className={fr.cx('fr-accordions-group')}>
        <Accordion label="Connaître le cadre légal de l'enquête">
          Vu l'avis favorable du Conseil national de l'information statistique,
          cette enquête, reconnue d’intérêt général et de qualité statistique,
          est obligatoire, en application de la loi n° 51-711 du 7 juin 1951 sur
          l'obligation, la coordination et le secret en matière de statistiques.
          Visa n°2021A054EC du Ministre de l'Économie, des Finances et de la
          Relance, valable pour l'année 2021 - Arrêté en date du 23/11/2020. Les
          réponses à ce questionnaire sont protégées par le secret statistique
          et destinées à L’Institut national de la statistique et des études
          économiques (Insee). Le règlement général 2016/679 du 27 avril 2016
          sur la protection des données (RGPD) ainsi que la loi n° 78-17 du 6
          janvier 1978 relative à l'informatique, aux fichiers et aux libertés,
          s'appliquent à la présente enquête. Ils garantissent aux personnes
          concernées un droit d'accès, de limitation ou de rectification pour
          les données les concernant. Ce droit peut être exercé auprès de
          l'Insee.
        </Accordion>
      </div>
    </div>
  )
}
