import React from "react";

function PrivacyPolicy() {
  return (
    <div className="flex flex-col font-mono px-10 space-y-5">
      <h1 className="text-4xl">Privacy Policy for jimwhiteford.com</h1>
      <p>
        At jimwhiteford.com, we are committed to protecting your privacy. This
        Privacy Policy explains how we collect, use, and handle your information
        when you visit our website.
      </p>
      <h2 className="text-3xl">1. Website Details</h2>
      <ul>
        <li>Name: jimwhiteford.com</li>
        <li>purpose: The primary purpose of the website is to post blogs.</li>
        <li>location: The website operates from the United Kingdom.</li>
      </ul>
      <h2 className="text-3xl">2. Data Collection</h2>
      <ul>
        <li>
          We do not collect personal data from users. The only data collected is
          through cookies, which are used to enhance user experience (UX) by
          providing personalization.
        </li>
      </ul>
      <h2 className="text-3xl">3. Cookies and Tracking</h2>

      <ul className="space-y-3">
        <h3 className="text-2xl">Types of Cookies Used:</h3>
        <li>
          Cookies are used for personalization and improving user experience.
        </li>
        <h3 className="text-2xl">Third-Party Tools:</h3>
        <li>
          We use Google Analytics to analyze website traffic and performance.
        </li>
        <li>
          Google AdSense may display ads on the website, which may use cookies
          for ad personalization.
        </li>
        <li>
          Embedded content, such as YouTube videos, may also utilize cookies
          from their respective platforms.
        </li>
        <h3 className="text-2xl">Cookie Management:</h3>
        <li>
          Users cannot turn off cookies on this website. By continuing to use
          the website, you consent to the use of cookies.
        </li>
      </ul>
      <h2 className="text-3xl">4. Third-Party Services</h2>
      <ul className="space-y-3">
        <li>
          Google Analytics: Used to analyze traffic and improve the website’s
          functionality.
        </li>
        <li>
          Google AdSense: May use cookies to personalize ads shown on the
          website.
        </li>
        <li>
          Embedded Content: Content from platforms like YouTube may collect data
          through their cookies when accessed.
        </li>
      </ul>
      <h2 className="text-3xl">5. Data Storage and Security</h2>
      <ul className="space-y-3">
        <li>No user data is stored by jimwhiteford.com.</li>
      </ul>
      <h2 className="text-3xl">6. User Rights</h2>
      <ul className="space-y-3">
        <li>
          As the website does not collect or store personal data, users have no
          means to access, edit, or delete any information.
        </li>
      </ul>
      <h2 className="text-3xl">7. Children’s Privacy</h2>
      <ul className="space-y-3">
        <li>
          While the blog is not specifically targeted at children, it does not
          follow laws like COPPA (Children's Online Privacy Protection Act).
          Parents or guardians should supervise children’s use of the internet.
        </li>
      </ul>
      <h2 className="text-3xl">8. Policy Updates</h2>
      <ul className="space-y-3">
        <li>
          This Privacy Policy may be updated from time to time. Users are
          encouraged to visit this page periodically to stay informed of any
          changes.
        </li>
      </ul>
      <h2 className="text-3xl">9. Contact Information</h2>
      <ul className="space-y-3">
        <li>
          At present, there is no direct contact available. Contact options are
          being developed and will be added in the future.
        </li>
      </ul>
      <hr className="border-neutral-300 w-full" />
      <p>By using jim.whiteford.com, you consent to this Privacy Policy.</p>
    </div>
  );
}

export default PrivacyPolicy;
