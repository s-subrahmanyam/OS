document.getElementById('deadlockForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const appName = document.getElementById('appName').value;
    const threadCount = document.getElementById('threadCount').value;
    const resources = document.getElementById('resources').value;
    const waitFor = document.getElementById('waitFor').value;
    const strategy = document.getElementById('strategy').value;

    // Display the results
    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `
        <h3>Analysis Result:</h3>
        <p><strong>Application Name:</strong> ${appName}</p>
        <p><strong>Number of Threads:</strong> ${threadCount}</p>
        <p><strong>Resources Allocated:</strong> ${resources}</p>
        <p><strong>Wait-For Relationships:</strong> ${waitFor}</p>
        <p><strong>Resolution Strategy:</strong> ${strategy}</p>
        <p>Further analysis can be done based on this data.</p>
    `;

    // Visualization of the recovery process
    const visualizationDiv = document.getElementById('visualization');
    visualizationDiv.style.display = 'block';
    visualizationDiv.innerHTML = createVisualization(waitFor, strategy);

    // Show best prevention strategy
    const preventionDiv = document.getElementById('prevention');
    preventionDiv.style.display = 'block';
    preventionDiv.innerHTML = suggestBestPrevention(threadCount);
});

function createVisualization(waitFor, strategy) {
    // Simple representation of the visualization
    return `
        <h3>Recovery Process Visualization:</h3>
        <p><strong>Wait-For Relationships:</strong> ${waitFor}</p>
        <p><strong>Selected Strategy:</strong> ${strategy}</p>
        <p>This section would visualize the recovery process based on the selected strategy.</p>
    `;
}

function suggestBestPrevention(threadCount) {
    if (threadCount > 1) {
        return `
            <h3>Recommended Deadlock Prevention Strategy:</h3>
            <p><strong>Hold and Wait:</strong> Require processes to request all necessary resources upfront, preventing any thread from holding resources while waiting for others. This is particularly effective in multi-threaded environments.</p>
        `;
    } else {
        return `
            <h3>Recommended Deadlock Prevention Strategy:</h3>
            <p><strong>Mutual Exclusion:</strong> Ensure that at least one resource must be held in a non-shareable mode, which is simpler when dealing with a single thread.</p>
        `;
    }
}
