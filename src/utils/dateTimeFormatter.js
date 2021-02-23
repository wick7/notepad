const dateTimeFormatter = (dataDate, type) => {
    const event = new Date(dataDate);
    //'2-digit'
    //'long'
    //'numeric'
    //hour: 'numeric', minute: '2-digit' 
    const dateOnly = { year: '2-digit', month: 'numeric', day: 'numeric' };
    const dateAndTime = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit' };

    return dataDate === null ? 'N/A' : event.toLocaleDateString('en-US', type === 'DATE_ONLY' ? dateOnly : dateAndTime)
}

export default dateTimeFormatter