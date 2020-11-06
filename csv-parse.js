export default (string, maxRows = Infinity) => {
	let inQuote = false;
	let field = '';
	let row = [];
	const result = [];
	const charArray = [
		// Chomp final line terminator
		...string.replace(/(?:\r\n|\n|\r)$/u, '')
	];

	for (let i = 0; i < charArray.length; i++) {
		const current = charArray[i];
		const next = charArray[i + 1];
		if (!inQuote && ',\r\n'.includes(current)) {
			row.push(field);
			field = '';

			if (current !== ',') {
				if (current + next === '\r\n') {
					i++;
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
			i++;
		} else {
			inQuote = false;
		}
	}

	// Add the last field
	row.push(field);
	result.push(row);

	return result;
};
