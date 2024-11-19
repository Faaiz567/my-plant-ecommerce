'use client';
import { useState } from 'react';
import { FaTruck, FaShieldAlt, FaHeadphones, FaUndoAlt, FaPencilAlt } from 'react-icons/fa';

export default function About() {
  // Track popup visibility
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Separate messages for each section
  const [messageSupport, setMessageSupport] = useState<string>(''); // Message for Customer Support
  const [messageReturn, setMessageReturn] = useState<string>(''); // Message for 15 Days Return

  // Submitted messages for each section
  const [submittedMessageSupport, setSubmittedMessageSupport] = useState<string | null>(null);
  const [submittedMessageReturn, setSubmittedMessageReturn] = useState<string | null>(null);

  // Track which section is being edited
  const [currentSection, setCurrentSection] = useState<'support' | 'return' | null>(null);

  // Open popup for a specific section
  const openPopup = (section: 'support' | 'return') => {
    setCurrentSection(section);
    setIsPopupOpen(true);

    // Reset the message field based on the section clicked
    if (section === 'support') {
      setMessageSupport(submittedMessageSupport || ''); // Use submitted message if available
    } else if (section === 'return') {
      setMessageReturn(submittedMessageReturn || ''); // Use submitted message if available
    }
  };

  // Close the popup
  const closePopup = () => {
    setIsPopupOpen(false);
  };

  // Handle form submission for a message
  const submitMessage = (e: React.FormEvent) => {
    e.preventDefault();

    if (currentSection === 'support') {
      setSubmittedMessageSupport(messageSupport); // Save message for Customer Support
    } else if (currentSection === 'return') {
      setSubmittedMessageReturn(messageReturn); // Save message for 15 Days Return
    }

    setIsPopupOpen(false); // Close the popup after submission
  };

  // Handle message change
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (currentSection === 'support') {
      setMessageSupport(e.target.value); // Update message for Customer Support
    } else if (currentSection === 'return') {
      setMessageReturn(e.target.value); // Update message for 15 Days Return
    }
  };

  return (
    <section className="p-8 bg-gradient-to-r from-lime-200 to-green-200 min-h-screen">
      <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2>
      <p className="text-center mb-12 text-lg">Learn about our journey and passion for plants and flowers.</p>

      <div className="bg-gradient-to-t from-lime-100 to-green-100 rounded-lg p-8 flex flex-wrap justify-around gap-8">
        {/* Icon 1 */}
        <div className="flex flex-col items-center text-center w-full sm:w-auto">
          <FaTruck className="text-green-600 text-4xl mb-4" />
          <h3 className="font-semibold text-lg">Free delivery</h3>
          <p className="text-gray-600">For all orders above Rs.3000</p>
        </div>

        
{/* Icon 2 */}
        <div className="flex flex-col items-center text-center w-full sm:w-auto">
          <FaShieldAlt className="text-green-600 text-4xl mb-4" />
          <h3 className="font-semibold text-lg">Safe Delivery</h3>
          <p className="text-gray-600">Safe delivery of plants</p>
        </div>
        {/* Icon 3 - Customer Support */}
        <div className="flex flex-col items-center text-center w-full sm:w-auto">
          <FaHeadphones className="text-green-600 text-4xl mb-4 cursor-pointer" onClick={() => openPopup('support')} />
          <h3 className="font-semibold text-lg cursor-pointer" onClick={() => openPopup('support')}>
            Customer support
          </h3>
          {submittedMessageSupport ? (
            <div className="text-gray-600">
              <p>{submittedMessageSupport}</p>
              <button
                onClick={() => openPopup('support')}
                className="mt-2 text-green-600 flex items-center space-x-1"
              >
                <FaPencilAlt />
                <span>Edit</span>
              </button>
            </div>
          ) : (
            <p className="text-gray-600">Click to provide your message</p>
          )}
        </div>

        {/* Icon 4 - 5 Days Return */}
        <div className="flex flex-col items-center text-center w-full sm:w-auto">
          <FaUndoAlt className="text-green-600 text-4xl mb-4 cursor-pointer" onClick={() => openPopup('return')} />
          <h3 className="font-semibold text-lg cursor-pointer" onClick={() => openPopup('return')}>
            5 Days Return
          </h3>
          {submittedMessageReturn ? (
            <div className="text-gray-600">
              <p>{submittedMessageReturn}</p>
              <button
                onClick={() => openPopup('return')}
                className="mt-2 text-green-600 flex items-center space-x-1"
              >
                <FaPencilAlt />
                <span>Edit</span>
              </button>
            </div>
          ) : (
            <p className="text-gray-600">Click to provide your message</p>
          )}
        </div>
      </div>
      

      {/* Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-gradient-to-t from-lime-100 to-green-100 p-8 rounded-lg w-11/12 sm:w-1/3 relative">

            {/* Close Button */}
            <button
              className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
              onClick={closePopup}>
              X
            </button>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {currentSection === 'support' ? 'Customer Support' : '15 Days Return'}
            </h3>
            <form onSubmit={submitMessage}>
              <textarea
                value={currentSection === 'support' ? messageSupport : messageReturn}
                onChange={handleMessageChange}
                placeholder="Enter your message..."
                className="w-full h-32 p-4 border-2 border-teal-500 rounded-lg mb-4 bg-gradient-to-t from-lime-100 to-green-100"
              />
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={closePopup}
                  className="px-6 py-2 bg-gradient-to-r from-teal-400 to-yellow-200 text-white font-semibold rounded-full"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-gradient-to-r from-teal-400 to-yellow-200 text-white font-semibold rounded-full"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
