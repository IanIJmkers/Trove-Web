import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const TermsAndConditionsModal = ({ isOpen, onClose }) => {
  const sections = [
    {
      title: 'Terms',
      content: (
        <>
          <p className="mb-4">
            These terms and conditions (the "Terms and Conditions") govern the use of www.troveapp.com (the "Site"). This Site is owned and operated by Olive Media Agency. This Site is a next-generation collectible portfolio management platform.
          </p>
          <p className="mb-4">
            By using this Site, you indicate that you have read and understand these Terms and Conditions and agree to abide by them at all times.
          </p>
          <p className="mb-4">
            We agree to provide you with the Trove Service. The Service includes all of the Trove products, features, applications, services, technologies, and software that we provide to advance Trove's mission: To bring you closer to the people and things you love within the Collectible space.
          </p>
          <p className="mb-4">The Service is made up of the following aspects:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Offering TCG products, pricing and images to allow the community to track and further their collection.</li>
          </ul>
          <p className="mb-4">
            All collectors are different. So we offer you features to help you create, share, grow your collection and communicate with people on and off Trove. We also want to strengthen your relationships through shared experiences that you actually care about. So we build systems that try to understand who and what you and others care about, and use that information to help you create, find, join and share in the collecting experience. Part of that is highlighting content, features, and offers that you might be interested in, and offering ways for you to experience Trove based on things that you and others do on and off Trove.
          </p>
          <h4 className="text-lg font-semibold text-white mt-6 mb-3">Fostering a positive, inclusive, and safe environment</h4>
          <p className="mb-4">
            We develop and use tools and offer resources to our community members that help to make their experiences positive and inclusive. We also have teams and systems that work to combat abuse and violations of our Terms and policies, as well as harmful and deceptive behavior. We use all the information we have—including your information—to try to keep our platform secure. We also may share information about misuse or harmful content with law enforcement.
          </p>
          <h4 className="text-lg font-semibold text-white mt-6 mb-3">Ensuring access to our Service</h4>
          <p className="mb-4">
            To operate our global Service, we must store and transfer data across our systems around the world, including outside of your country of residence. The use of this global infrastructure is necessary and essential to provide our Service.
          </p>
          <h4 className="text-lg font-semibold text-white mt-6 mb-3">Connecting you with TCGs you care about</h4>
          <p className="mb-4">
            We use data from Trove as well as from third-party partners, to show you offers, and other sponsored content that we believe will be meaningful to you. And we try to make that content as relevant as all your other experiences on Trove.
          </p>
        </>
      ),
    },
    {
      title: 'How Our Service Is Funded',
      content: (
        <>
          <p className="mb-4">
            Instead of paying to use Trove, by using the Service covered by these Terms, you acknowledge that we can show you offers that businesses and organizations may pay us to promote. We use your personal data, such as information about your collection to show you offers that are more relevant to you.
          </p>
          <p>
            We show you relevant and useful offers without telling advertisers who you are. We don't sell your personal data. We allow advertisers to tell us things like their business goal and the kind of audience they want to see their offers. We then show their offer to people who might be interested.
          </p>
        </>
      ),
    },
    {
      title: 'Your Commitments',
      content: (
        <>
          <p className="mb-4">
            In return for our commitment to provide the Service, we require you to make the below commitments to us.
          </p>
          <h4 className="text-lg font-semibold text-white mt-6 mb-3">Who Can Use Trove</h4>
          <p className="mb-4">
            We want our Service to be as open and inclusive as possible, but we also want it to be safe, secure, and in accordance with the law. So, we need you to commit to a few restrictions in order to be part of the Trove community.
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>You must be at least 13 years old or the minimum legal age in your country to use Trove.</li>
            <li>You must not be prohibited from receiving any aspect of our Service under applicable laws or engaging in payments related Services if you are on an applicable denied party listing.</li>
            <li>We must not have previously disabled your account for violation of law or any of our policies.</li>
            <li>You must not be a convicted sex offender.</li>
          </ul>
        </>
      ),
    },
    {
      title: "How You Can't Use Trove",
      content: (
        <>
          <p className="mb-4">
            Providing a safe and open Service for a broad community requires that we all do our part.
          </p>
          <h4 className="text-lg font-semibold text-white mt-6 mb-3">Social is only for collectible posts</h4>
          <p className="mb-4">
            Prohibited posts include but are not limited to: religion, politics, explicit content such as nudity. We have the right to suspend accounts/posts if we deem them as breaking our policy.
          </p>
          <h4 className="text-lg font-semibold text-white mt-6 mb-3">You can't impersonate others or provide inaccurate information</h4>
          <p className="mb-4">
            You don't have to disclose your identity on Trove, but you must provide us with accurate and up to date information (including registration information), which may include providing personal data. Also, you may not impersonate someone or something you aren't, and you can't create an account for someone else unless you have their express permission.
          </p>
          <h4 className="text-lg font-semibold text-white mt-6 mb-3">You can't do anything unlawful, misleading, or fraudulent or for an illegal or unauthorized purpose</h4>
          <h4 className="text-lg font-semibold text-white mt-6 mb-3">You can't violate (or help or encourage others to violate) these Terms or our policies</h4>
          <h4 className="text-lg font-semibold text-white mt-6 mb-3">You can't do anything to interfere with or impair the intended operation of the Service</h4>
          <p className="mb-4">
            This includes misusing any reporting, dispute, or appeals channel, such as by making fraudulent or groundless reports or appeals.
          </p>
          <h4 className="text-lg font-semibold text-white mt-6 mb-3">You can't attempt to create accounts or access or collect information in unauthorized ways</h4>
          <p className="mb-4">
            This includes creating accounts or collecting information in an automated way without our express permission.
          </p>
          <h4 className="text-lg font-semibold text-white mt-6 mb-3">You can't sell, license, or purchase any account or data obtained from us or our Service</h4>
          <p className="mb-4">
            This includes attempts to buy, sell, or transfer any aspect of your account (including your username); solicit, collect, or use login credentials or badges of other users; or request or collect Trove usernames, passwords, or misappropriate access tokens.
          </p>
          <h4 className="text-lg font-semibold text-white mt-6 mb-3">You can't post someone else's private or confidential information without permission or do anything that violates someone else's rights, including intellectual property rights</h4>
          <p className="mb-4">
            You may use someone else's works under exceptions or limitations to copyright and related rights under applicable law. You represent you own or have obtained all necessary rights to the content you post or share.
          </p>
          <h4 className="text-lg font-semibold text-white mt-6 mb-3">You can't modify, translate, create derivative works of, or reverse engineer our products or their components</h4>
          <h4 className="text-lg font-semibold text-white mt-6 mb-3">You can't use a domain name or URL in your username without our prior written consent</h4>
        </>
      ),
    },
    {
      title: 'Permissions You Give to Us',
      content: (
        <>
          <p className="mb-4">
            As part of our agreement, you also give us permissions that we need to provide the Service.
          </p>
          <h4 className="text-lg font-semibold text-white mt-6 mb-3">We do not claim ownership of your content, but you grant us a license to use it</h4>
          <p className="mb-4">
            We do not claim ownership of your content that you post on or through the Service and you are free to share your content with anyone else, wherever you want. However, we need certain legal permissions from you (known as a "license") to provide the Service. When you share, post, or upload content that is covered by intellectual property rights (like photos or videos) on or in connection with our Service, you hereby grant to us a non-exclusive, royalty-free, transferable, sub-licensable, worldwide license to host, use, distribute, modify, run, copy, publicly perform or display, translate, and create derivative works of your content (consistent with your privacy and application settings). This license will end when your content is deleted from our systems. You can delete content individually or all at once by deleting your account.
          </p>
          <h4 className="text-lg font-semibold text-white mt-6 mb-3">Permission to use your username, profile picture, and information about your relationships and actions</h4>
          <p className="mb-4">
            You give us permission to show your username, profile picture, and information about your actions (such as likes) or relationships (such as follows) next to or in connection with accounts, offers, and other sponsored content that you follow or engage with that are displayed on Trove Products, without any compensation to you.
          </p>
          <h4 className="text-lg font-semibold text-white mt-6 mb-3">You agree that we can download and install updates to the Service on your device</h4>
        </>
      ),
    },
    {
      title: 'Additional Rights We Retain',
      content: (
        <>
          <ul className="list-disc pl-6 space-y-3">
            <li>If you select a username or similar identifier for your account, we may change it if we believe it is appropriate or necessary (for example, if it infringes someone's intellectual property or impersonates another user).</li>
            <li>If you use content covered by intellectual property rights that we have and make available in our Service (for example, images, designs, videos, or sounds we provide that you add to content you create or share), we retain all rights to our content (but not yours).</li>
            <li>You can only use our intellectual property and trademarks or similar marks as expressly permitted with our prior written permission.</li>
            <li>You must obtain written permission from us or under an open source license to modify, create derivative works of, decompile, or otherwise attempt to extract source code from us.</li>
          </ul>
          <p className="mt-4">
            By posting publicly on our Site, you agree not to act illegally or violate these Terms and Conditions.
          </p>
        </>
      ),
    },
    {
      title: 'Content Removal and Disabling or Terminating Your Account',
      content: (
        <>
          <p className="mb-4">
            We can remove any content or information you share on the Service if we believe that it violates these Terms of Use, our policies, or we are permitted or required to do so by law. We can refuse to provide or stop providing all or part of the Service to you immediately to protect our community or services, or if you create risk or legal exposure for us, violate these Terms of Use or our policies, if you repeatedly infringe other people's intellectual property rights, or where we are permitted or required to do so by law.
          </p>
          <p className="mb-4">
            When you request to delete content or your account, the deletion process will automatically begin no more than 30 days after your request. It may take up to 90 days to delete content after the deletion process begins. While the deletion process for such content is being undertaken, the content is no longer visible to other users, but remains subject to these Terms of Use.
          </p>
          <p className="mb-4">Content will not be deleted within 90 days in the following situations:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Where your content has been used by others in accordance with this license and they have not deleted it</li>
            <li>Where deletion within 90 days is not possible due to technical limitations of our systems</li>
            <li>Where deletion would restrict our ability to investigate or identify illegal activity or violations of our terms and policies</li>
            <li>To protect the safety and security of our products, systems, and users</li>
            <li>To comply with a legal obligation, such as the preservation of evidence</li>
          </ul>
        </>
      ),
    },
    {
      title: 'Accounts',
      content: (
        <>
          <p className="mb-4">When you create an account on our Site, you agree to the following:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>You are solely responsible for your account and the security and privacy of your account, including passwords or sensitive information attached to that account</li>
            <li>All personal information you provide to us through your account is up to date, accurate, and truthful and that you will update your personal information if it changes</li>
          </ul>
          <p>
            We reserve the right to suspend or terminate your account if you are using our Site illegally or if you violate these Terms and Conditions.
          </p>
        </>
      ),
    },
    {
      title: 'Camera Scanning',
      content: (
        <>
          <h4 className="text-lg font-semibold text-white mb-3">Use of Camera Scanning Feature</h4>
          <p className="mb-4">
            By using the TCG card scanning feature, you acknowledge and agree that the app will access your device's camera to capture images of trading cards for the purpose of identifying and adding them to your collection.
          </p>
          <p className="mb-4">
            You are responsible for ensuring that the images you scan are of sufficient quality to be accurately identified. Trove is not liable for any inaccuracies resulting from poor image quality or other issues beyond our control.
          </p>
          <p className="mb-4">
            The scanning feature is provided "as is," and we do not guarantee the accuracy or completeness of the card identification. We reserve the right to modify or discontinue this feature at any time without notice.
          </p>
          <h4 className="text-lg font-semibold text-white mt-6 mb-3">Intellectual Property Rights</h4>
          <p className="mb-4">
            The images of trading cards you scan remain your property. However, by using the scanning feature, you grant Trove a non-exclusive, royalty-free license to process and store the images as necessary to provide the service.
          </p>
          <p className="mb-4">
            You may not use the scanning feature to infringe upon the intellectual property rights of others, including but not limited to the unauthorized reproduction or distribution of copyrighted images.
          </p>
          <h4 className="text-lg font-semibold text-white mt-6 mb-3">Data Collection and Usage</h4>
          <p className="mb-4">
            The images captured via the scanning feature may be temporarily stored on our servers for processing. We take measures to ensure that this data is securely handled and only used for the purpose of identifying the trading cards and adding them to your collection.
          </p>
          <p className="mb-4">
            We do not share or sell your scanned images to third parties, except as required to provide the service or as mandated by law.
          </p>
          <h4 className="text-lg font-semibold text-white mt-6 mb-3">Limitation of Liability</h4>
          <p>
            Trove shall not be liable for any loss or damage arising from your use of the camera scanning feature, including but not limited to inaccuracies in card identification or issues related to the functioning of your device's camera.
          </p>
        </>
      ),
    },
    {
      title: 'Third Party Goods and Services',
      content: (
        <p>
          Our Site may offer goods and services from third parties. We cannot guarantee the quality or accuracy of goods and services made available by third parties on our Site.
        </p>
      ),
    },
    {
      title: 'User Goods and Services',
      content: (
        <p>
          Our Site allows users to sell goods and services. We do not assume any responsibility for the goods and services users sell on our Site. We cannot guarantee the quality or accuracy of any goods and services sold by users on our Site. However, if we are made aware that a user is violating these Terms and Conditions, we reserve the right to suspend or prohibit the user from selling goods and services on our Site.
        </p>
      ),
    },
    {
      title: 'Payments',
      content: (
        <>
          <p className="mb-4">We accept the following payment methods on our Site:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Credit Card</li>
            <li>PayPal</li>
          </ul>
          <p className="mb-4">
            When you provide us with your payment information, you authorize our use of and access to the payment instrument you have chosen to use. By providing us with your payment information, you authorize us to charge the amount due to this payment instrument.
          </p>
          <p>
            If we believe your payment has violated any law or these Terms and Conditions, we reserve the right to cancel or reverse your transaction.
          </p>
        </>
      ),
    },
    {
      title: 'Consumer Protection Law',
      content: (
        <p>
          Where the Consumer Protection Act, or any other consumer protection legislation in your jurisdiction applies and cannot be excluded, these Terms and Conditions will not limit your legal rights and remedies under that legislation. These Terms and Conditions will be read subject to the mandatory provisions of that legislation. If there is a conflict between these Terms and Conditions and that legislation, the mandatory provisions of the legislation will apply.
        </p>
      ),
    },
    {
      title: 'Limitation of Liability',
      content: (
        <p>
          Olive Media Agency and our directors, officers, agents, employees, subsidiaries, and affiliates will not be liable for any actions, claims, losses, damages, liabilities and expenses including legal fees from your use of the Site.
        </p>
      ),
    },
    {
      title: 'Indemnity',
      content: (
        <p>
          Except where prohibited by law, by using this Site you indemnify and hold harmless Olive Media Agency and our directors, officers, agents, employees, subsidiaries, and affiliates from any actions, claims, losses, damages, liabilities and expenses including legal fees arising out of your use of our Site or your violation of these Terms and Conditions.
        </p>
      ),
    },
    {
      title: 'Applicable Law',
      content: (
        <p>
          These Terms and Conditions are governed by the laws of the Netherlands.
        </p>
      ),
    },
    {
      title: 'Severability',
      content: (
        <p>
          If at any time any of the provisions set forth in these Terms and Conditions are found to be inconsistent or invalid under applicable laws, those provisions will be deemed void and will be removed from these Terms and Conditions. All other provisions will not be affected by the removal and the rest of these Terms and Conditions will still be considered valid.
        </p>
      ),
    },
    {
      title: 'Changes',
      content: (
        <p>
          These Terms and Conditions may be amended from time to time in order to maintain compliance with the law and to reflect any changes to the way we operate our Site and the way we expect users to behave on our Site. We will notify users by email of changes to these Terms and Conditions or post a notice on our Site.
        </p>
      ),
    },
    {
      title: 'Contact Details',
      content: (
        <>
          <p className="mb-4">Please contact us if you have any questions or concerns. Our contact details are as follows:</p>
          <p>
            Olive Media Agency<br />
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
                  Terms and Conditions
                </h2>
                <p className="text-gray-400 text-sm mt-1">
                  Last Updated - January 02, 2026
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-dark-800 rounded-lg transition-colors"
                aria-label="Close terms and conditions"
              >
                <X className="w-6 h-6 text-gray-400" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8">
              <div className="max-w-4xl mx-auto space-y-8">
                {sections.map((section) => (
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

export default TermsAndConditionsModal;