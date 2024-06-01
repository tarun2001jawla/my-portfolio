import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { FaCookie } from 'react-icons/fa';
import './CookieConsent.css';

// Function to generate a random identifier
const generateRandomId = () => {
  return Math.random().toString(36).substring(2); // Generate a random string
};

// Define the type of userData as null or the object type
type UserData = {
  location: {
    latitude: number;
    longitude: number;
  };
  browser: string;
  visitedSites: string;
  // Define additional data points here
} | null;

const CookieConsentPopup = () => {
  const [visible, setVisible] = useState(true);
  const [userData, setUserData] = useState<UserData>(null); // Initialize userData with null

  const handleAccept = () => {
    // Logic to handle accepting cookies
    const expirationDate = new Date(); // Set cookie expiration date
    expirationDate.setFullYear(expirationDate.getFullYear() + 1); // Cookie expires in 1 year

    // Generate unique random IDs for cookies
    const userLocationCookieName = generateRandomId();
    const userBrowserCookieName = generateRandomId();
    const visitedSitesCookieName = generateRandomId();

    // Collect and store additional data as cookies
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // Callback function to handle successful retrieval of position
        const userLocation = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };

        // Store user location in a separate cookie
        document.cookie = `${userLocationCookieName}=${JSON.stringify(userLocation)}; expires=${expirationDate.toUTCString()}; path=/`;

        // Store user browser information in a separate cookie
        document.cookie = `${userBrowserCookieName}=${navigator.userAgent}; expires=${expirationDate.toUTCString()}; path=/`;

        // Store visited sites in a separate cookie
        const visitedSites = document.referrer || 'Direct Visit';
        document.cookie = `${visitedSitesCookieName}=${visitedSites}; expires=${expirationDate.toUTCString()}; path=/`;

        // Set userData to indicate that all cookies have been stored
        setUserData({ location: userLocation, browser: navigator.userAgent, visitedSites });

        setVisible(false); // Close the modal
      },
      (error) => {
        // Callback function to handle errors
        console.error('Error getting user location:', error);
        setVisible(false); // Close the modal even if there's an error
      }
    );
  };

  const handleReject = () => {
    // Logic to handle rejecting cookies
    setVisible(false);
  };

  return (
    <Modal
      visible={visible}
      footer={null}
      closable={false}
      centered
      maskClosable={false}
      className="cookie-consent-popup"
      width={500}
    >
      <div className="cookie-heading-container">
        <div className="cookie-icon-container">
          <FaCookie size="2em" color="#ffcc00" />
        </div>
        <h2 className="modal-heading">Want some cookies?</h2>
      </div>
      <p className="modal-text">We use cookies to enhance your experience on our website.</p>
      <div className="button-container">
        <Button type="primary" size="large" onClick={handleAccept}>
          Accept
        </Button>
        <Button danger size="large" onClick={handleReject}>
          Reject
        </Button>
      </div>
    </Modal>
  );
};

export default CookieConsentPopup;
