describe('removeAllVowels Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
		removeAllVowels = $filter('removeAllVowels');
	}));

	it('should remove all vowels from the string', function() {
		var str = 'jason'

		var results = removeAllVowels(str)
		expect(results).not.toMatch(/[aeiou]/gi);
		expect(results.length).toBe(3);
	})

});
