function updateTimestamp() {
            const timestampElement = document.getElementById('timestamp');
            const currentTime = Date.now();
            timestampElement.textContent = currentTime;
        }

        updateTimestamp();

        setInterval(updateTimestamp, 1000);
  