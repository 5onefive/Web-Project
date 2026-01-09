function dnsJourney() {
  alert(
    "DNS JOURNEY:\n\n" +
    "1. You type a URL into the browser\n" +
    "2. Browser asks DNS for the IP address\n" +
    "3. DNS returns the IP\n" +
    "4. Routers forward the data packet\n" +
    "5. Server responds with the webpage"
  );
}

function checkTransmission() {
  const sent = "110101";
  const received = "110100";

  if (sent === received) {
    alert("✅ Data received correctly. No errors detected.");
  } else {
    alert(
      "❌ Transmission Error Detected!\n" +
      "Checksum mismatch.\n" +
      "Error checking prevents corrupted data."
    );
  }
}

function cloudVsLocal() {
  alert(
    "CLOUD vs TRADITIONAL STORAGE:\n\n" +
    "Cloud: Remote servers, scalable, accessible anywhere\n" +
    "Traditional: Local devices, limited, physical access required"
  );
}
