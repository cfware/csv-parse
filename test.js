import t from 'libtap';
import parse from './csv-parse.js';

const expected = [
	['Jones,\r\n \n \rJay', '10'],
	['Xyz "ABC" O\'Brien', '11:35'],
	['Other, AN', '12:35']
];

t.same(
	parse(
		'"Jones,\r\n \n \rJay",10\r\n' +
		'"Xyz ""ABC"" O\'Brien",11:35\n' +
		'"Other, AN",12:35\r'
	),
	expected
);

t.same(
	parse(
		'"Jones,\r\n \n \rJay",10\n' +
		'"Xyz ""ABC"" O\'Brien",11:35\n' +
		'"Other, AN",12:35'
	),
	expected
);

t.same(
	parse(
		'"Jones,\r\n \n \rJay",10\n' +
		'"Xyz ""ABC"" O\'Brien",11:35\n' +
		'"Other, AN",12:35',
		2
	),
	expected.slice(0, 2)
);
