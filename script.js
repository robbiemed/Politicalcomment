document.getElementById('comment').addEventListener('input', calculateCost);
document.getElementById('submitBtn').addEventListener('click', handleSubmit);

function calculateCost() {
    const comment = document.getElementById('comment').value;
    const wordCount = comment.trim().split(/\s+/).length;
    const cost = wordCount * 0.03;
    document.getElementById('totalCost').innerText = cost.toFixed(2);
}

function handleSubmit() {
    const comment = document.getElementById('comment').value.trim();
    if (comment.length === 0) {
        alert('Please enter a comment.');
        return;
    }

    const wordCount = comment.split(/\s+/).length;
    const cost = wordCount * 0.03;
    const politician = document.getElementById('politician').value;
    const sentiment = document.getElementById('sentiment').value;

    const receipt = `
        Politician: ${politician}
        Sentiment: ${sentiment}
        Comment: ${comment}
        Total Cost: $${cost.toFixed(2)}
    `;

    alert(`Receipt:\n${receipt}`);
    // You would replace the alert with actual payment processing logic and submission to your server

    // Reset the form
    document.getElementById('commentForm').reset();
    document.getElementById('totalCost').innerText = '0.00';
}
