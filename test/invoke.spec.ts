// import * as Chai from "chai";
// //import {invoke} from '../src/controllers/invoke';
// import {FakeResponse} from './helper/FakeResponse';
// import {FakeRequest} from './helper/FakeRequest';
// import {IInvokableScope} from '../src/interfaces/InvokableScope';
// import Metadata from '../src/metadata/metadata';
// import {INJECT_PARAMS} from '../src/constants/metadata-keys';
//
// const expect: Chai.ExpectStatic = Chai.expect;
//
// class Test{
//
//     attribut;
//
//     constructor(private paramTest){}
//
//     method1(){
//         return this.paramTest;
//     }
// }
//
// xdescribe('invokeMethod', () => {
//
//     it('should invokeMethod method instance', () => {
//
//         const instance = new Test('param');
//
//         const result = invoke(instance, 'method1', <IInvokableScope>{
//             response: <any>new FakeResponse(),
//             request: <any>new FakeRequest(),
//             next: () => undefined
//         });
//
//         expect(result).to.equal('param');
//
//     });
//
//     it('should invokeMethod method instance (2)', () => {
//
//         const instance = new Test('param');
//         const services = ['request'];
//
//         Metadata.set(INJECT_PARAMS, services, Test, 'method1');
//         expect(Metadata.get(INJECT_PARAMS, instance, 'method1')).to.equal(services);
//
//         const result = invoke(instance, 'method1', <IInvokableScope>{
//             response: <any>new FakeResponse(),
//             request: <any>new FakeRequest(),
//             next: () => undefined
//         });
//
//         expect(result).to.equal('param');
//
//     });
// });