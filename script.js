function showCloudMessage() {
    alert(
        "Cloud computing stores data on remote servers, allowing access from anywhere, " +
        "automatic backups, and scalable resources."
    );
}

function checkData() {
    const dataSent = "101010";
    const dataReceived = "101011";

    if (dataSent === dataReceived) {
        alert("✅ Data received correctly. No errors detected.");
    } else {
        alert("❌ Error detected! Data integrity compromised.");
    }
}
