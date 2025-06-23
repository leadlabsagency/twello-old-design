import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const GDPR = () => {
  const currentDate = new Date();
  const lastUpdated = `${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow bg-white pt-32 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">GDPR Compliance</h1>
          <p className="text-gray-500 mb-8">Last updated: {lastUpdated}</p>
          
          <div className="prose max-w-none">
            <p>
              At Twello, we are committed to ensuring the privacy and protection of your personal data in compliance with the General Data Protection Regulation (GDPR). This page outlines how we adhere to GDPR requirements and your rights under this regulation.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">What is GDPR?</h2>
            <p>
              The General Data Protection Regulation (GDPR) is a regulation in EU law on data protection and privacy for all individuals within the European Union and the European Economic Area. It also addresses the export of personal data outside the EU and EEA areas.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">How Twello Complies with GDPR</h2>
            
            <h3 className="text-lg font-medium mt-6 mb-3">Lawful Basis for Processing</h3>
            <p>
              We process personal data only when we have a lawful basis to do so, such as:
            </p>
            <ul className="list-disc pl-6 mt-3 mb-6 space-y-2">
              <li>Consent: You have given clear consent for us to process your personal data for a specific purpose.</li>
              <li>Contract: The processing is necessary for a contract we have with you, or because you have asked us to take specific steps before entering into a contract.</li>
              <li>Legal obligation: The processing is necessary for us to comply with the law.</li>
              <li>Legitimate interests: The processing is necessary for our legitimate interests or the legitimate interests of a third party, unless there is a good reason to protect your personal data which overrides those legitimate interests.</li>
            </ul>
            
            <h3 className="text-lg font-medium mt-6 mb-3">Data Protection Principles</h3>
            <p>
              In accordance with GDPR, we adhere to the following principles:
            </p>
            <ul className="list-disc pl-6 mt-3 mb-6 space-y-2">
              <li>Lawfulness, fairness, and transparency</li>
              <li>Purpose limitation</li>
              <li>Data minimization</li>
              <li>Accuracy</li>
              <li>Storage limitation</li>
              <li>Integrity and confidentiality (security)</li>
              <li>Accountability</li>
            </ul>
            
            <h3 className="text-lg font-medium mt-6 mb-3">Data Subject Rights</h3>
            <p>
              Under GDPR, you have the following rights:
            </p>
            <ul className="list-disc pl-6 mt-3 mb-6 space-y-2">
              <li><strong>Right to be informed:</strong> You have the right to be informed about the collection and use of your personal data.</li>
              <li><strong>Right of access:</strong> You have the right to request a copy of the information that we hold about you.</li>
              <li><strong>Right to rectification:</strong> You have the right to correct data that we hold about you that is inaccurate or incomplete.</li>
              <li><strong>Right to erasure:</strong> In certain circumstances, you can ask for the data we hold about you to be erased from our records.</li>
              <li><strong>Right to restriction of processing:</strong> Where certain conditions apply, you have the right to restrict the processing of your personal data.</li>
              <li><strong>Right to data portability:</strong> You have the right to have the data we hold about you transferred to another organisation.</li>
              <li><strong>Right to object:</strong> You have the right to object to certain types of processing such as direct marketing.</li>
              <li><strong>Rights in relation to automated decision making and profiling:</strong> You have the right to be subject to the legal effects of automated processing or profiling.</li>
            </ul>
            
            <h3 className="text-lg font-medium mt-6 mb-3">Data Breach Notification</h3>
            <p>
              In the event of a data breach that may pose a risk to your rights and freedoms, we will notify the relevant supervisory authority within 72 hours of becoming aware of the breach. If the breach is likely to result in a high risk to your rights and freedoms, we will also notify you directly as soon as possible.
            </p>
            
            <h3 className="text-lg font-medium mt-6 mb-3">International Transfers</h3>
            <p>
              If we transfer your personal data outside the EEA, we ensure that it is protected to the same standards by using one of the following safeguards:
            </p>
            <ul className="list-disc pl-6 mt-3 mb-6 space-y-2">
              <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
              <li>Binding Corporate Rules (BCRs)</li>
              <li>Adherence to the EU-US Privacy Shield Framework (where applicable)</li>
            </ul>
            
            <h3 className="text-lg font-medium mt-6 mb-3">Data Protection Officer</h3>
            <p>
              We have appointed a Data Protection Officer (DPO) who is responsible for overseeing questions in relation to this privacy notice. If you have any questions about this privacy notice, including any requests to exercise your legal rights, please contact the DPO using the details below:
            </p>
            <div className="mt-3 bg-gray-50 p-4 rounded-md">
              <p><strong>Data Protection Officer</strong></p>
              <p>Email: dpo@twello.com</p>
              <p>Postal Address: 123 Twello Street, San Francisco, CA 94107, USA</p>
            </div>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Your Rights in Detail</h2>
            
            <h3 className="text-lg font-medium mt-6 mb-3">Right to Access Your Personal Data</h3>
            <p>
              You have the right to request a copy of the personal data we hold about you. To do so, please contact our DPO. We will provide the information without delay and at the latest within one month of receipt of the request. We may extend this period by up to two additional months where necessary, taking into account the complexity and number of the requests.
            </p>
            
            <h3 className="text-lg font-medium mt-6 mb-3">Right to Rectification</h3>
            <p>
              If the personal data we hold about you is inaccurate or incomplete, you have the right to rectification. You can update some of your personal data directly through your account settings. For other data, please contact our DPO.
            </p>
            
            <h3 className="text-lg font-medium mt-6 mb-3">Right to Erasure (Right to be Forgotten)</h3>
            <p>
              You have the right to request the deletion of your personal data where one of the following grounds applies:
            </p>
            <ul className="list-disc pl-6 mt-3 mb-6 space-y-2">
              <li>The personal data is no longer necessary in relation to the purposes for which it was collected or processed.</li>
              <li>You withdraw consent to the processing and there is no other legal ground for the processing.</li>
              <li>You object to the processing and there are no overriding legitimate grounds for the processing.</li>
              <li>The personal data has been unlawfully processed.</li>
              <li>The personal data has to be erased for compliance with a legal obligation in Union or Member State law to which the controller is subject.</li>
            </ul>
            
            <h3 className="text-lg font-medium mt-6 mb-3">Contact Us</h3>
            <p>
              If you have any questions or concerns about our GDPR compliance, please contact our Data Protection Officer at dpo@twello.com.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GDPR;
