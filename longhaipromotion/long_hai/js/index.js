
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
    let url = buildUrlQueryString(formValues, '?');
    url = url.slice(-1) === '&' ? url.slice(0, -1) : url;
    url = url.slice(-1) === '?' ? url.slice(0, -1) : url;

    window.location.href = url + '#list_show';
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


const marquee = document.getElementById('marquee');
const marqueeClone = document.getElementById('marquee-clone');

const content = `
  <span class="solid">LONG HẢI PROMOTION</span><span class="separator">*</span>
  <span class="outline">LONG HẢI PROMOTION</span><span class="separator">*</span>
`;

const repeated = content.repeat(20); // Số lần lặp đủ để hiệu ứng mượt
marquee.innerHTML = repeated;
marqueeClone.innerHTML = repeated;

