import { norwayMonths, enMonths } from '../config';

export const formatDate = (date: string): string => {
    date = date.replace('.', '');

    const getMonth = norwayMonths.filter((month) => {
        return date.includes(month);
    });
    const index = norwayMonths.indexOf(getMonth[0]);
    const translatedDate = date.replace(norwayMonths[index], enMonths[index]);

    return translatedDate;
};

export const formatArticleDate = (date: string): string => {
    let formattedDate = formatDate(date);
    const newDate = new Date(formattedDate);
    const day = newDate.getDate();
    const month = newDate.toLocaleString('en-EN', {
        month: 'short',
    });
    const year = newDate.getFullYear();
    formattedDate = `${day}. ${month} ${year}`;

    return formattedDate;
};

export const sortBy = (a, b, direction) => {
    if (direction === 'down') {
        return +new Date(formatDate(b.date)) - +new Date(formatDate(a.date));
    } else {
        return +new Date(formatDate(a.date)) - +new Date(formatDate(b.date));
    }
};
