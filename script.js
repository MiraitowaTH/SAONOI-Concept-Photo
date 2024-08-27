function tweetMessage() {
    const message = "MIRAI TO WA SAONOI\n#MiraitowaTH #SaonoiBNK48 ";
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`;
    window.open(tweetUrl, '_blank');
} 
