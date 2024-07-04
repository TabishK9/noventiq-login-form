import {applicableDomains, notApplicableDomains} from '../constants.tsx'

const validateEmailAddress = (email) => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return "Please provide correct email address format";
    }
    const domainName = email.split('@')[1];

    if (notApplicableDomains.includes(domainName)) {
      return "Public domains like gmail, yahoo, outlook and rediff are not allowesd";
    }

    if (!applicableDomains.some((applicableDomains) => domainName.endsWith(applicableDomains))) {
      return "Please only provide applicable corporate domain email addresses";
    }

    return true;
  };

  export {validateEmailAddress};