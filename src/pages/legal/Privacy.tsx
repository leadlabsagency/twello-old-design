import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  const currentDate = new Date();
  const lastUpdated = `${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow bg-white pt-32 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-500 mb-8">Last updated: {lastUpdated}</p>
          
          <div className="prose max-w-none">
            <p>
              At Twello, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Information We Collect</h2>
            <p>
              We collect information that you provide directly to us when you register for an account, create or modify your profile, set preferences, sign-up for or make purchases through the Services. This information may include your name, email address, phone number, postal address, profile picture, and other information you choose to provide.
            </p>
            
            <h3 className="text-lg font-medium mt-6 mb-3">Personal Data</h3>
            <p>
              Personally identifiable information may include, but is not limited to:
            </p>
            <ul className="list-disc pl-6 mt-3 mb-6 space-y-2">
              <li>Email address</li>
              <li>First name and last name</li>
              <li>Phone number</li>
              <li>Address, State, Province, ZIP/Postal code, City</li>
              <li>Cookies and Usage Data</li>
            </ul>
            
            <h3 className="text-lg font-medium mt-6 mb-3">Usage Data</h3>
            <p>
              We may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Use of Data</h2>
            <p>
              Twello uses the collected data for various purposes:
            </p>
            <ul className="list-disc pl-6 mt-3 mb-6 space-y-2">
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our Service</li>
              <li>To monitor the usage of our Service</li>
              <li>To detect, prevent and address technical issues</li>
              <li>To provide you with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless you have opted not to receive such information</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Legal Basis for Processing Personal Data</h2>
            <p>
              Twello's legal basis for collecting and using the personal information described in this Privacy Policy depends on the Personal Data we collect and the specific context in which we collect it.
            </p>
            <p className="mt-3">
              We may process your Personal Data because:
            </p>
            <ul className="list-disc pl-6 mt-3 mb-6 space-y-2">
              <li>We need to perform a contract with you</li>
              <li>You have given us permission to do so</li>
              <li>The processing is in our legitimate interests and it's not overridden by your rights</li>
              <li>For payment processing purposes</li>
              <li>To comply with the law</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Retention of Data</h2>
            <p>
              Twello will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
            </p>
            <p className="mt-3">
              Twello will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of our Service, or we are legally obligated to retain this data for longer time periods.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Your Data Protection Rights</h2>
            <p>
              If you are a resident of the European Economic Area (EEA), you have certain data protection rights. Twello aims to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data.
            </p>
            <p className="mt-3">
              If you wish to be informed what Personal Data we hold about you and if you want it to be removed from our systems, please contact us.
            </p>
            <p className="mt-3">
              In certain circumstances, you have the following data protection rights:
            </p>
            <ul className="list-disc pl-6 mt-3 mb-6 space-y-2">
              <li>The right to access, update or to delete the information we have on you</li>
              <li>The right of rectification</li>
              <li>The right to object</li>
              <li>The right of restriction</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Changes To This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
            </p>
            <p className="mt-3">
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="list-none mt-3 mb-6 space-y-2">
              <li>By email: privacy@twello.com</li>
              <li>By visiting the contact page on our website</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
