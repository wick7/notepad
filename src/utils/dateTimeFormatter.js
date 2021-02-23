const dateTimeFormatter = (dataDate, type) => {
    const event = new Date(dataDate);

    const dateOnly = { year: '2-digit', month: 'numeric', day: 'numeric' };
    const dateAndTime = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit' };

    return dataDate === null ? '' : event.toLocaleDateString('en-US', type === 'DATE_ONLY' ? dateOnly : dateAndTime)
}

export default dateTimeFormatter