document.getElementById("shortenButton").addEventListener("click", () => {
    const longUrl = document.getElementById("urlInput").value;

    const myHeaders = new Headers();
    myHeaders.append("apikey", "Ohlt1Jwu5TVzDFSZMptS4luZP94ednJM");
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: 'POST',
      redirect: 'follow',
      headers: myHeaders,
      body: JSON.stringify({ long_url: longUrl }),
    };

    fetch("https://api.apilayer.com/short_url/hash", requestOptions)
      .then(response => response.json())
      .then(data => {
        if (data.hash && data.short_url) {
          const shortUrl = data.short_url;
          const shortUrlLink = document.getElementById("shortUrlLink");
          shortUrlLink.href = shortUrl;
          shortUrlLink.textContent = shortUrl;
          document.getElementById("shortenedUrl").style.display = "block";
        } else {
          alert("Failed to shorten the URL. Please check the URL and try again.");
        }
      })
      .catch(error => {
        alert("An error occurred while shortening the URL.");
        console.error(error);
      });
  });