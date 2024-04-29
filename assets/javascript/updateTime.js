function updateTime() {
    const now = new Date();
    const dateTimeStr = now.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true, month: 'long', day: 'numeric', year: 'numeric' });
    document.getElementById('date-time').innerHTML = dateTimeStr;
}