import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ConnectMeeting = () => {
  const [meetingId, setMeetingId] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [inviteLink, setInviteLink] = useState("");
  const [copied, setCopied] = useState(false);

  const handleJoinMeeting = (e) => {
    e.preventDefault();
    // Simulate connecting to a meeting
    setIsConnected(true);
    setInviteLink(`https://your-meeting-platform.com/meeting/${meetingId}`);
  };

  const handleCopyLink = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Join a Meeting</h2>

      {!isConnected ? (
        <form onSubmit={handleJoinMeeting}>
          <div className="mb-4">
            <label
              htmlFor="meetingId"
              className="block text-sm font-bold mb-2 text-gray-700"
            >
              Meeting ID or URL
            </label>
            <input
              type="text"
              id="meetingId"
              value={meetingId}
              onChange={(e) => setMeetingId(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              placeholder="Enter meeting ID or URL"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Join Meeting
          </button>
        </form>
      ) : (
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Meeting Connected</h3>
          <p className="mb-4">Invite others to join the meeting:</p>

          <div className="flex items-center justify-center mb-4">
            <input
              type="text"
              readOnly
              value={inviteLink}
              className="shadow appearance-none border rounded-l w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
            />
            <CopyToClipboard text={inviteLink} onCopy={handleCopyLink}>
              <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none">
                {copied ? "Copied!" : "Copy Link"}
              </button>
            </CopyToClipboard>
          </div>

          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => alert("Invitation sent!")}
          >
            Send Invite via Email
          </button>
        </div>
      )}
    </div>
  );
};

export default ConnectMeeting;
