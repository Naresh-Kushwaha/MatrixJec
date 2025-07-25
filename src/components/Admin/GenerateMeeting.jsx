import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Header2 from "../Header2";

const GenerateMeeting = () => {
  const [meetingLink, setMeetingLink] = useState("");
  const [copied, setCopied] = useState(false);

  // Generate a fake meeting link for demo purposes
  const generateMeeting = () => {
    const newLink = `https://your-meeting-platform.com/meeting/${Math.floor(Math.random()*100000)}`;
    setMeetingLink(newLink);
  };

  // Handle Copy functionality
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 3000); // Reset the "Copied!" message after 3 seconds
  };
  const navigation = [
    { name: 'Dashboard', href: 'adminprofile', current: true },
  
    { name: 'Add Event', href: '/eventcontroler', current: false },
  ]

  return (
    <div>
        <Header2 navigation={navigation}></Header2>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Admin Dashboard</h2>

        {/* Section to generate a meeting */}
        <div className="mb-6">
          <button
            onClick={generateMeeting}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Generate Meeting
          </button>
        </div>

        {/* Section to display and copy the meeting link */}
        {meetingLink && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Meeting Link</h3>
            <div className="flex items-center">
              <input
                type="text"
                readOnly
                value={meetingLink}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              <CopyToClipboard text={meetingLink} onCopy={handleCopy}>
                <button className="bg-gray-500 text-white py-2 px-4 rounded-r-md hover:bg-gray-600">
                  {copied ? "Copied!" : "Copy Link"}
                </button>
              </CopyToClipboard>
            </div>
            {copied && (
              <p className="text-green-500 text-sm mt-2">Meeting link copied to clipboard!</p>
            )}
          </div>
        )}

        {/* Invite section */}
        {meetingLink && (
          <div>
            <h3 className="text-lg font-semibold mb-2">Invite Participants</h3>
            <p className="text-gray-600">
              Share this link with the participants you want to invite to the meeting.
            </p>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default GenerateMeeting;
