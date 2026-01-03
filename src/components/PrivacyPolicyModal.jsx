import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const PrivacyPolicyModal = ({ isOpen, onClose }) => {
  const sections = [
    {
      title: 'General',
      content: (
        <>
          <p className="mb-4">
            www.troveapp.com (the "Site") is owned and operated by Olive Media Agency. Olive Media Agency is the data controller and can be contacted at:
          </p>
          <p className="mb-4">
            Neherpark 2264 ZC<br />
            Leidschendam<br />
            Netherlands
          </p>
        </>
      ),
    },
    {
      title: 'Purpose',
      content: (
        <>
          <p className="mb-4">
            The purpose of this privacy policy (this "Privacy Policy") is to inform users of our Site of the following:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>The personal data we will collect;</li>
            <li>Use of collected data;</li>
            <li>Who has access to the data collected;</li>
            <li>The rights of Site users; and</li>
            <li>The Site's cookie policy.</li>
          </ul>
          <p>
            This Privacy Policy applies in addition to the terms and conditions of our Site.
          </p>
        </>
      ),
    },
    {
      title: 'GDPR',
      content: (
        <p>
          For users in the European Union, we adhere to the Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016, known as the General Data Protection Regulation (the "GDPR"). For users in the United Kingdom, we adhere to the GDPR as enshrined in the Data Protection Act 2018.
        </p>
      ),
    },
    {
      title: 'Consent',
      content: (
        <>
          <p className="mb-4">By using our Site users agree that they consent to:</p>
          <p className="mb-4">The conditions set out in this Privacy Policy.</p>
          <p className="mb-4">
            When the legal basis for us processing your personal data is that you have provided your consent to that processing, you may withdraw your consent at any time. If you withdraw your consent, it will not make processing which we completed before you withdrew your consent unlawful.
          </p>
          <p>You can withdraw your consent by: Contacting the Data Protection Officer.</p>
        </>
      ),
    },
    {
      title: 'Legal Basis for Processing',
      content: (
        <>
          <p className="mb-4">
            We collect and process personal data about users in the EU only when we have a legal basis for doing so under Article 6 of the GDPR.
          </p>
          <p className="mb-4">We rely on the following legal basis to collect and process the personal data of users in the EU:</p>
          <p>Users have provided their consent to the processing of their data for one or more specific purposes.</p>
        </>
      ),
    },
    {
      title: 'Personal Data We Collect',
      content: (
        <>
          <p className="mb-4">
            We only collect data that helps us achieve the purpose set out in this Privacy Policy. We will not collect any additional data beyond the data listed below without notifying you first.
          </p>
          <h3 className="text-lg font-semibold text-white mt-6 mb-3">Data Collected in a Non-Automatic Way</h3>
          <p className="mb-4">We may also collect the following data when you perform certain functions on our Site:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>First and last name;</li>
            <li>Email address;</li>
            <li>Phone number;</li>
            <li>Address;</li>
            <li>Payment information;</li>
            <li>Auto fill data; and</li>
            <li>Card images and collection data.</li>
          </ul>
          <p className="mb-4">This data may be collected using the following methods:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Creating an account;</li>
            <li>Scanning a card;</li>
            <li>Adding items to your portfolio.</li>
          </ul>
        </>
      ),
    },
    {
      title: 'How We Use Personal Data',
      content: (
        <>
          <p className="mb-4">
            Data collected on our Site will only be used for the purposes specified in this Privacy Policy or indicated on the relevant pages of our Site. We will not use your data beyond what we disclose in this Privacy Policy.
          </p>
          <p className="mb-4">The data we collect automatically is used for the following purposes:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Statistics and analytics;</li>
            <li>Portfolio tracking and management;</li>
            <li>Market value updates.</li>
          </ul>
          <p className="mb-4">The data we collect when the user performs certain functions may be used for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Communication;</li>
            <li>Service delivery;</li>
            <li>Account management.</li>
          </ul>
        </>
      ),
    },
    {
      title: 'Who We Share Personal Data With',
      content: (
        <>
          <h3 className="text-lg font-semibold text-white mb-3">Employees</h3>
          <p className="mb-4">
            We may disclose user data to any member of our organization who reasonably needs access to user data to achieve the purposes set out in this Privacy Policy.
          </p>
          <h3 className="text-lg font-semibold text-white mb-3">Other Disclosures</h3>
          <p className="mb-4">We will not sell or share your data with other third parties, except in the following cases:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>If the law requires it;</li>
            <li>If it is required for any legal proceeding;</li>
            <li>To prove or protect our legal rights; and</li>
            <li>To buyers or potential buyers of this company in the event that we seek to sell the company.</li>
          </ul>
          <p>
            If you follow hyperlinks from our Site to another Site, please note that we are not responsible for and have no control over their privacy policies and practices.
          </p>
        </>
      ),
    },
    {
      title: 'How Long We Store Personal Data',
      content: (
        <>
          <p className="mb-4">User data will be stored until the purpose the data was collected for has been achieved.</p>
          <p>You will be notified if your data is kept for longer than this period.</p>
        </>
      ),
    },
    {
      title: 'How We Protect Your Personal Data',
      content: (
        <>
          <p className="mb-4">
            In order to protect your security, we use the strongest available browser encryption and store all of our data on servers in secure facilities. All data is only accessible to our employees. Our employees are bound by strict confidentiality agreements and a breach of this agreement would result in the employee's termination.
          </p>
          <p>
            While we take all reasonable precautions to ensure that user data is secure and that users are protected, there always remains the risk of harm. The Internet as a whole can be insecure at times and therefore we are unable to guarantee the security of user data beyond what is reasonably practical.
          </p>
        </>
      ),
    },
    {
      title: 'Your Rights as a User',
      content: (
        <>
          <p className="mb-4">Under the GDPR, you have the following rights:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Right to be informed;</li>
            <li>Right of access;</li>
            <li>Right to rectification;</li>
            <li>Right to erasure;</li>
            <li>Right to restrict processing;</li>
            <li>Right to data portability; and</li>
            <li>Right to object.</li>
          </ul>
        </>
      ),
    },
    {
      title: 'Children',
      content: (
        <p>
          We do not knowingly collect or use personal data from children under 16 years of age. If we learn that we have collected personal data from a child under 16 years of age, the personal data will be deleted as soon as possible. If a child under 16 years of age has provided us with personal data their parent or guardian may contact our data protection officer.
        </p>
      ),
    },
    {
      title: 'How to Access, Modify, Delete, or Challenge the Data Collected',
      content: (
        <>
          <p className="mb-4">
            If you would like to know if we have collected your personal data, how we have used your personal data, if we have disclosed your personal data and to who we disclosed your personal data, if you would like your data to be deleted or modified in any way, or if you would like to exercise any of your other rights under the GDPR, please contact our data protection officer here:
          </p>
          <p>
            Neherpark 2264 ZC<br />
            Leidschendam<br />
            Netherlands
          </p>
        </>
      ),
    },
    {
      title: 'Do Not Track Notice',
      content: (
        <p>
          Do Not Track ("DNT") is a privacy preference that you can set in certain web browsers. We do not track the users of our Site over time and across third party websites and therefore do not respond to browser-initiated DNT signals.
        </p>
      ),
    },
    {
      title: 'How to Opt-Out of Data Collection, Use or Disclosure',
      content: (
        <>
          <p className="mb-4">
            In addition to the method(s) described in the How to Access, Modify, Delete, or Challenge the Data Collected section, we provide the following specific opt-out methods for the forms of collection, use, or disclosure of your personal data specified below:
          </p>
          <p>
            You can opt-out of the use of your personal data for marketing emails. You can opt-out by clicking "unsubscribe" on the bottom of any marketing email or updating your email preferences under "Your Account"
          </p>
        </>
      ),
    },
    {
      title: 'Cookie Policy',
      content: (
        <>
          <p className="mb-4">
            A cookie is a small file, stored on a user's hard drive by a website. Its purpose is to collect data relating to the user's browsing habits. You can choose to be notified each time a cookie is transmitted. You can also choose to disable cookies entirely in your internet browser, but this may decrease the quality of your user experience.
          </p>
          <p className="mb-4">We use the following types of cookies on our Site:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Analytical cookies:</strong> Analytical cookies allow us to improve the design and functionality of our Site by collecting data on how you access our Site, for example data on the content you access, how long you stay on our Site, etc;</li>
            <li><strong>Targeting cookies:</strong> Targeting cookies collect data on how you use the Site and your preferences. This allows us to personalize the information you see on our Site for you; and</li>
            <li><strong>Third-Party Cookies:</strong> Third-party cookies are created by a website other than ours. We may use third-party cookies to achieve the following purposes: Monitor user preferences to tailor advertisements around their interests.</li>
          </ul>
        </>
      ),
    },
    {
      title: 'Modifications',
      content: (
        <p>
          This Privacy Policy may be amended from time to time in order to maintain compliance with the law and to reflect any changes to our data collection process. When we amend this Privacy Policy we will update the "Last Updated" date at the top of this Privacy Policy. We recommend that our users periodically review our Privacy Policy to ensure that they are notified of any updates. If necessary, we may notify users by email of changes to this Privacy Policy.
        </p>
      ),
    },
    {
      title: 'Complaints',
      content: (
        <p>
          If you have any complaints about how we process your personal data, please contact us through the contact methods listed in the Contact Information section so that we can, where possible, resolve the issue. If you feel we have not addressed your concern in a satisfactory manner you may contact a supervisory authority. You also have the right to directly make a complaint to a supervisory authority. You can lodge a complaint with a supervisory authority by contacting the Information Commissioner's Office in the UK, Data Protection Commission in Ireland, or the Dutch Data Protection Authority (Autoriteit Persoonsgegevens) in the Netherlands.
        </p>
      ),
    },
    {
      title: 'Contact Information',
      content: (
        <>
          <p className="mb-4">If you have any questions, concerns or complaints, you can contact our data protection officer, Olive Media Agency, at:</p>
          <p>
            Neherpark 2264 ZC<br />
            Leidschendam<br />
            Netherlands
          </p>
        </>
      ),
    },
  ];

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 bg-dark-900 rounded-2xl z-50 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-dark-700">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Privacy Policy
                </h2>
                <p className="text-gray-400 text-sm mt-1">
                  Last Updated - January 02, 2026
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-dark-800 rounded-lg transition-colors"
                aria-label="Close privacy policy"
              >
                <X className="w-6 h-6 text-gray-400" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8">
              <div className="max-w-4xl mx-auto space-y-8">
                {sections.map((section, index) => (
                  <section
                    key={section.title}
                    className="border-b border-dark-800 pb-6 last:border-b-0"
                  >
                    <h3 className="text-xl font-bold text-white mb-3">
                      {section.title}
                    </h3>
                    <div className="text-gray-300 leading-relaxed text-sm md:text-base">
                      {section.content}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PrivacyPolicyModal;