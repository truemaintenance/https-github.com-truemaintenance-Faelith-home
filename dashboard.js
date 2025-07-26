
document.addEventListener("DOMContentLoaded", function () {
    const nftPanel = document.getElementById("nfts");
    fetch("nft_data.json")
        .then(res => res.json())
        .then(data => {
            nftPanel.innerHTML = '<strong>NFTs:</strong><br>' + data.map(nft => `🔥 ${nft.name}`).join("<br>");
        });
});
