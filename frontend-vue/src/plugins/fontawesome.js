import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// ✅ Solid icons
import { faUser, faBuilding, faEnvelope } from '@fortawesome/free-solid-svg-icons'

// ✅ Brand icons
import { faFacebook, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

// Add icons to the library
library.add(faUser, faBuilding, faEnvelope, faFacebook, faTwitter, faGithub)

export default FontAwesomeIcon
