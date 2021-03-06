import Chai = require("chai");
import {
    BAD_REQUEST_REQUIRED, DUPLICATED_CONTROLLER_DECORATOR,
    DUPLICATED_SERVICE_DECORATOR, UNKNOW_CONTROLLER, UNKNOW_SERVICE, CYCLIC_REF
} from '../src/constants/errors-msgs';
const expect: Chai.ExpectStatic = Chai.expect;

describe('Errors Messages : ', () => {

    it('should return messages', () => {

        expect(BAD_REQUEST_REQUIRED('cookies', 'test')).to.equal('Bad request, parameter request.cookies.test is required.');
        expect(DUPLICATED_CONTROLLER_DECORATOR('name')).to.equal('Cannot apply @Controller decorator multiple times (name).');
        expect(DUPLICATED_SERVICE_DECORATOR('name')).to.equal('Cannot apply @Service decorator multiple times (name).');
        expect(UNKNOW_CONTROLLER('name')).to.equal('Controller name not found.');
        expect(UNKNOW_SERVICE('name')).to.equal('Service name not found.');
        expect(CYCLIC_REF('ctrl1', 'ctrl2')).to.equal('Cyclic reference between ctrl1 and ctrl2.');

    });

});