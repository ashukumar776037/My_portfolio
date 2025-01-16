// Get references to the DOM elements
const meetingForm = document.getElementById("meetingForm");
const meetingList = document.getElementById("meetingList");

// Array to store meetings
let meetings = [];

// Function to render meetings
function renderMeetings() {
  meetingList.innerHTML = ""; // Clear the current list
  meetings.forEach((meeting, index) => {
    const meetingCard = document.createElement("div");
    meetingCard.className = "meeting-card";

    meetingCard.innerHTML = `
      <h3>${meeting.title}</h3>
      <p><strong>Description:</strong> ${meeting.description || "N/A"}</p>
      <p><strong>Date:</strong> ${new Date(meeting.date).toLocaleString()}</p>
      <button onclick="deleteMeeting(${index})">Delete</button>
    `;
    meetingList.appendChild(meetingCard);
  });
}

// Function to add a new meeting
meetingForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("meetingTitle").value;
  const description = document.getElementById("meetingDescription").value;
  const date = document.getElementById("meetingDate").value;

  if (!title || !date) {
    alert("Please fill out the required fields.");
    return;
  }

  // Add meeting to the array
  meetings.push({ title, description, date });

  // Clear the form
  meetingForm.reset();

  // Render meetings
  renderMeetings();
});

// Function to delete a meeting
function deleteMeeting(index) {
  meetings.splice(index, 1); // Remove the meeting from the array
  renderMeetings(); // Re-render the meetings
}

// Initial render
renderMeetings();
