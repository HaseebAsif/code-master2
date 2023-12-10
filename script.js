document.addEventListener('DOMContentLoaded', (event) => {
  const eventData = [
      {
          date: "Mon Sept 06 2021",
          venue: "Pier 3 East",
          location: "San Francisco, CA",
          link: "#link1"
      },
      {
          date: "Tue Sept 07 2021",
          venue: "Downtown Club",
          location: "Los Angeles, CA",
          link: "#link2"
      },
      {
        date: "Tue Sept 07 2021",
        venue: "Downtown Club",
        location: "Los Angeles, CA",
        link: "#link2"
    },
    {
      date: "Tue Sept 07 2021",
      venue: "Downtown Club",
      location: "Los Angeles, CA",
      link: "#link2"
  },
  {
    date: "Tue Sept 07 2021",
    venue: "Downtown Club",
    location: "Los Angeles, CA",
    link: "#link2"
}
      
  ];

  function createTableV2(data) {
      const table = document.getElementById("event-table");
      const tbody = table.querySelector("tbody");
      const tableformobile = document.getElementById("event-table-for-mobile");
      table.innerHTML = `<tr>
      <th>DATE</th>
      <th>VENUE</th>
      <th>LOCATION</th>
      <th></th>
    </tr> ` + data
          .map(
              (item) => `
              
                  <tr class="show">
                      <td class="show__date">${item.date}</td>
                      <td class="show__venue">${item.venue}</td>
                      <td class="show__location">${item.location}</td>
                      <td ><a href="${item.link}" class="show__button">BUY TICKETS</a></td>
                  </tr>
              `
          )
          .join("");

          tableformobile.innerHTML =  data
          .map(
              (item) => `
                  <div class="show__data">
                  <div >DATE</div>
                      <div class="show__dateformobile">${item.date}</div>
                      <div>VENUE</div>
                      <div class="show__venueformobile">${item.venue}</div>
                      <div>LOCATION</div>
                      <div class="show__locationformobile">${item.location}</div>
                      <div ><a href="${item.link}" class="show__buttonformobile">BUY TICKETS</a></div>
                  </div>
              `
          )
          .join("");
  }

  createTableV2(eventData);
});

document.addEventListener('DOMContentLoaded', (event) => {
  // Initialize pre-existing comments
  const initialComments = [
    {
      author: "Alice Johnson",
      content: "Really love the new album! Can't wait to see you live."
    },
    {
      author: "Mark Smith",
      content: "Your music has been a great inspiration to me. Thank you!"
    },
    {
      author: "Emma Lee",
      content: "Saw you guys in concert last year, it was incredible!"
    }
  ];

  initialComments.forEach(comment => addComment(comment.author, comment.content));

  // Event listener for new comment submission
  document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const author = document.getElementById('commentAuthor').value;
    const content = document.getElementById('commentContent').value;
  
    if (author && content) {
      addComment(author, content);
      event.target.reset(); // Reset the form after submission
    }
  });
  
  // Function to add a comment
  function addComment(author, content) {
    const commentContainer = document.getElementById('commentContainer');
    const newComment = document.createElement('div');
    newComment.classList.add('comment');
  
    newComment.innerHTML = `
      <div class="comment__author">${author}</div>
      <div class="comment__content">${content}</div>
    `;
  
    commentContainer.appendChild(newComment);
  }
});
