
function search_url_one() {
    const formValues = {
        name: $('#name_current').val(),
        provice: $('#provice_current').val(),
        time: $('#time_current').val(),
    };
    if (formValues.date && formValues.date !== '') {
        const dateParts = formValues.date.split(' to ');
        if (dateParts.length === 1) {
            formValues.dateOnly = dateParts[0];
        } else if (dateParts.length === 2) {
            formValues.dateStart = dateParts[0];
            formValues.dateEnd = dateParts[1];
        }
        delete formValues.date;
    }
    let url = buildUrlQueryString(formValues, '/show?typeList=1&');
    url = url.slice(-1) === '&' ? url.slice(0, -1) : url;
    url = url.slice(-1) === '?' ? url.slice(0, -1) : url;

    window.location.href = url;
}

function search_url_two() {
    const formValues = {
        name: $('#name_future').val(),
        provice: $('#provice_future').val(),
        time: $('#time_future').val(),
    };
    if (formValues.date && formValues.date !== '') {
        const dateParts = formValues.date.split(' to ');
        if (dateParts.length === 1) {
            formValues.dateOnly = dateParts[0];
        } else if (dateParts.length === 2) {
            formValues.dateStart = dateParts[0];
            formValues.dateEnd = dateParts[1];
        }
        delete formValues.date;
    }
    let url = buildUrlQueryString(formValues, '/show?typeList=2&');
    url = url.slice(-1) === '&' ? url.slice(0, -1) : url;
    url = url.slice(-1) === '?' ? url.slice(0, -1) : url;

    window.location.href = url + '#future';
}
function buildUrlQueryString(params, defaultUrl) {
    let url = window.location.origin + defaultUrl;
    Object.keys(params).forEach((key) => {
        if (params[key] && params[key] !== '') {
            url += `${key}=${encodeURIComponent(params[key])}&`;
        }
    });
    return url;
}
