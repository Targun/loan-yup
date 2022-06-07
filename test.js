const validator = require(".");

const validSupported = [{
	email: "good@example.org",
	firstName: 'Joe',
	lastName: 'Deer'
}];

const invalidSupported = [{
	email: "@example.org",
	firstName: 'Joe',
	lastName: 'Deer'
},{
	email: "good@example.org",
	firstName: '',
	lastName: 'Deer'
}];;

test('Should Be Valid', async () => {
     validSupported.forEach(application => {
     	expect(validator.formSchema.validate(application)).toBeTruthy();
     });
});

test('Should Be Invalid', () => {
     invalidSupported.forEach(application => {
     	expect(validator.formSchema.validate(application)).rejects.toBeTruthy()
     });
});

