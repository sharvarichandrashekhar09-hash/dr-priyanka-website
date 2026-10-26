import { clinicConfig } from '../siteConfig.js'

function ClinicMap() {
  return (
    <iframe
      className="clinic-map"
      src={clinicConfig.mapEmbedUrl}
      title="Matruja Women's Clinic location on Google Maps"
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  )
}

export default ClinicMap
