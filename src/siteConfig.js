export const clinicConfig = {
  name: "Matruja Women's Clinic",
  doctor: 'Dr. Priyanka Suryawanshi-Raut',
  qualifications: 'MBBS, DNB',
  specialty: 'Gynaecologist & Obstetrician',
  city: 'Pune, Maharashtra',
  phoneDisplay: '+91 97308 25191',
  phoneLink: '+919730825191',
  whatsappNumber: '919730825191',
  address: '5th Floor, Office No. 503, Ivory Tower, Satara Road, above Tanishka Showroom, Pune, Maharashtra 411037',
  mapsUrl: 'YOUR_GOOGLE_MAPS_URL',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.873748736388!2d73.91675887371825!3d18.444040571510392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb02c78e0839%3A0xd7e3008956b5009a!2sMatruja%20Women%E2%80%99s%20Clinic%20Dr.%20Priyanka%20Suryawanshi%20Raut%20-%20Gynaecologist!5e0!3m2!1sen!2sin!4v1792774485533!5m2!1sen!2sin',
  email: 'CLINIC_EMAIL',
  timings: 'Contact the clinic for timings',
}

export const GOOGLE_MAPS_URL = clinicConfig.mapsUrl
export const CLINIC_EMAIL = clinicConfig.email
export const CLINIC_TIMINGS = clinicConfig.timings
export const clinicMapsUrl = clinicConfig.mapsUrl === 'YOUR_GOOGLE_MAPS_URL'
  ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clinicConfig.address)}`
  : clinicConfig.mapsUrl

export const whatsappUrl = `https://wa.me/${clinicConfig.whatsappNumber}?text=${encodeURIComponent(
  "Hello, I'd like to enquire about Matruja Women's Clinic.",
)}`
