export default (string, maxRows = Infinity) => {
    let inQuote = false;
    let field = '';
    let row = [];
    const result = [];
    const charArray = [
        // Chomp final line terminator
        ...string.replace(/(?:\r\n|\n|\r)$/u, '')
    ];

    for (let index = 0; index < charArray.length; index++) {
        const current = charArray[index];
        const next = charArray[index + 1];
        if (!inQuote && ',\r\n'.includes(current)) {
            row.push(field);
            field = '';

            if (current !== ',') {
                if (current + next === '\r\n') {
                    index++;
                }

                result.push(row);
                if (result.length >= maxRows) {
                    return result;
                }

                row = [];
            }
        } else if (current !== '"') {
            field += current;
        } else if (!inQuote) {
            inQuote = true;
        } else if (next === '"') {
            field += '"';
            index++;
        } else {
            inQuote = false;
        }
    }

    // Add the last field
    row.push(field);
    result.push(row);

    return result;
};
